
const pageData = require('../../pages/homepage_config');

const vDomPrinter = require('../v_dom_printer/domPrinter');


var wnd = window;
var doc = document;


// requestAnimationFrame
var raf =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };


// V_DisplayDriver <=> AO_DisplayDriver => vDisplay |:|
const V_DisplayDriver = {
  config: {
    mode: "hiding",
    debug: true
  },

  data: {
    page: {},
    styles: []
  },

  set page(page = null) {
    this.pageInputValidate(page);
    this.data.page = page;
    console.log(this);
    this.initPrint();
  },

  addSSOSLOBJ(newItems = null) {
    this.page = newItems;
  },

  pageInputValidate(page) {
    if (page === null) {
      console.warn("Error: Empty Input Value.");
    } else {
      console.warn("Success: New Page Valid.");
      return true;
    }
  },

  listenForEvents() {
    //Self addig on dom load
    document.onreadystatechange = function () {
      switch (document.readyState) {
        case "loading":
          // The document is still loading.;
          break;
        case "interactive":
          // DOMContentLoaded event.
          window.dispatchEvent(new Event('ssosl_ready'))
          break;
        case "complete":
          // The document is finished loading.
          break;
      };
      //console.log(document.readyState)
    };

    window.addEventListener('ssosl_ready', (e) => {
      console.log('EventListener got:[> ssosl_ready <]');

      if (typeof current_page_vdd !== "undefined") {
        try {
          vDisplay.addSSOSLOBJ(current_page_vdd);
        } catch (error) {
          console.error(error);
        }
      }

      try {
        vDisplay.init();
      } catch (error) {
        console.error(error);
      }

      try {
        window.removeEventListener('ssosl_ready', this);
      } catch (error) {
        console.error(error);
      }
    });
  },

  looper() {
    //console.log('yea...scrolling')
    var notYetDone = 0;
    var testItems = vDisplay.data.page.sections;
    //console.log(testItems)
    if (typeof testItems !== "undefined") {
      if (testItems.length > 0) {
        testItems.forEach((element) => {
          var helpElem = document.getElementById(element.elemID);
          if (vDisplay.isInUserView('#' + element.elemID)) {
            if (!element.done) {
              //console.log('Is ' + element.elemID + ' visible? YES')
              //element.call();
              if ((typeof element.render === 'undefined') || (element.lastUpdate > element.timeOfRender)) {
                element.render = vDomPrinter.getTemplate(element);
                element.timeOfRender = Date.now();
                helpElem.innerHTML = element.render;
                helpElem.style.minHeight = helpElem.clientHeight + "px";
                vDisplay.maybeLoadStyle(element.type);
                element.done = true;
              } else {
                helpElem.innerHTML = element.render;
                element.done = true;
              }
            }
          } else {
            element.done = false;
            helpElem.innerHTML = "";
            //console.log('Is ' + element.elemID + ' visible? NO')
            notYetDone++;
          }
        });
      }
    }

    if (notYetDone === 0) {
      console.log('Done! Detaching scroll event listener...')
      window.removeEventListener("scroll", this.handler);
    };
  },

  handler() {
    // requestAnimationFrame
    raf(vDisplay.looper);
  },

  loadPage() {
    this.canPrintPage();
    var meta = this.data.page.meta;
    var title = this.data.page.title;
    var sections = this.data.page.sections;
    console.log(meta);
    document.title = title;
    var desc = document.createElement("meta");
    desc.setAttribute("content", meta.description);
    desc.setAttribute("name", "description");
    document.head.appendChild(desc);
    var keyW = document.createElement("meta");
    keyW.setAttribute("content", meta.keywords);
    keyW.setAttribute("name", "keywords");
    document.head.appendChild(keyW);
  },

  isInUserView(el) {
    //console.log('FunctionCall >> [ function isInUserView(el) ] || [ Elem: ' + el + ' ]');
    const scroll = window.scrollY || window.pageYOffset;
    var elem = document.querySelector(el);
    if (typeof elem !== "undefined") {
      const boundsTop = (elem ? elem.getBoundingClientRect().top : 0) + scroll;

      const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      };

      const bounds = {
        top: boundsTop,
        bottom: boundsTop + elem.clientHeight,
      };


      return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
    } else {
      return false;
    }
  },

  preload() {
    console.log('FunctionCall >> [ function preload() ]');
  },

  canPrintPage() {
    if ((wnd) && (document)) {
      return true;
    } else {
      this.init();
    }
  },

  initPrint() {
    var stopPrint = false;
    this.data.page.sections.forEach(section => {
      console.log(performance.now());

      var helpVal = (performance.now() * (1000000000));
      var helpVal2 = helpVal - Math.trunc(helpVal);
      helpVal2 = ((Math.trunc(helpVal2 * (100000)) == 0) ? Math.trunc(helpVal) : (Math.trunc(helpVal2 * (100000))))

      var uid = 'UID_' + helpVal2;
      var foundUniqueID = false;

      while (!foundUniqueID) {
        var elemTest = document.getElementById(uid);
        if (elemTest) {
          helpVal2++;
          uid = 'UID_' + helpVal2;
        } else {
          foundUniqueID = true;
        }
      }

      document.body.innerHTML += `<div id="${uid}" class="page_section ${section.type}"></div>`;

      section.elemID = uid;
      section.lastUpdate = Date.now();
      section.timeOfRender = 0;

      if (stopPrint === false) {

        section.render = vDomPrinter.getTemplate(section);

        this.maybeLoadStyle(section.type);

        document.getElementById(uid).innerHTML = section.render;

        console.log(document.getElementById(uid).clientHeight);

        document.getElementById(uid).style.minHeight = document.getElementById(uid).clientHeight + "px";
        section.timeOfRender = Date.now();
        console.log(section.render);
        console.log("EEEE #" + uid)
        if (!vDisplay.isInUserView("#" + uid)) {
          stopPrint = true;
          console.log("stopPrint = TRUE")
        }
      }
    })
  },

  set styles(style = null) {
    if (style !== null) {
      try {
        this.data.styles.push(style);
      } catch (e) {
        console.log("ERROR:>> " + e.message);
        return false;
      }
      document.body.innerHTML += style.style;
      return true;
    } else {
      console.warn("ERROR:>> style EMPTY");
    }
  },

  maybeLoadStyle(type) {
    var stylesNumber = this.data.styles.length;
    var shouldLoadStyle = true;
    if (stylesNumber > 0) {
      this.data.styles.forEach((style) => {
        if (style.name === type) {
          shouldLoadStyle = false;
        }
      })
    };

    if ((stylesNumber == 0) || (shouldLoadStyle)) {
      this.styles = { name: type, style: vDomPrinter.getStyle(type) };
      console.log("SUCCESS :: Style Loaded Into V_DisplayDriver \nTemplate Name  -[ " + type + " ] ");
      return true;
    }

    if (shouldLoadStyle === false) {
      console.log("SKIPPING Style Loading >> \nReason :[ shouldLoadStyle  == FALSE  ]  ");
    } else {
      console.log("NO STYLE LOADED");
    };
    return false;
  },

  init(page = null) {
    console.log('FunctionCall >> [ function initSSOSL() ]');
    try {
      this.listenForEvents();
      wnd.addEventListener("load", vDisplay.handler);
      wnd.addEventListener("scroll", vDisplay.handler);
    } catch (error) {
      console.error(error);
    }
  }

};

let vDisplay = V_DisplayDriver;

vDisplay.init();

window.onload = () => {
  vDisplay.page = pageData;
  vDisplay.loadPage();

  console.log(vDisplay);
  console.log(vDomPrinter)
  console.log(pageData)
}

module.exports = V_DisplayDriver;


