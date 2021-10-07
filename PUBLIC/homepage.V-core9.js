/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./SOURCE/FrontEnd/pages/homepage.js":
/*!*******************************************!*\
  !*** ./SOURCE/FrontEnd/pages/homepage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst pageData = __webpack_require__(/*! ./homepage_config */ \"./SOURCE/FrontEnd/pages/homepage_config.js\");\r\nconst V_App = __webpack_require__(/*! ../v_modules/ */ \"./SOURCE/FrontEnd/v_modules/index.js\");\r\n\r\n\r\nconsole.log(V_App);\r\n\r\nwindow.onload = () => {\r\n  V_App.vSvgPointer.init();\r\n  V_App.vDisplayDriver.page = pageData;\r\n  V_App.vDisplayDriver.loadPage();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/pages/homepage.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/pages/homepage_config.js":
/*!**************************************************!*\
  !*** ./SOURCE/FrontEnd/pages/homepage_config.js ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = {\r\n  lang: \"en\",\r\n  title: \"<[|.V_Core9.|]> - HOMEPAGE\",\r\n  meta: {\r\n    charset: \"utf-8\",\r\n    viewport: \"width=device-width,initial-scale=1\",\r\n    themeColor: \"#2196f3\",\r\n    description: \"Some demo page description\",\r\n    keywords: \"Some Random Words, Other Keyword, More And More\",\r\n    pre: {\r\n      connect: [\"https://www.google.com\"],\r\n      scripts: [\"glideJS\", \"bootstrapJS\"],\r\n      styles: [\"glideJS\", \"bootstrapJS\"]\r\n    }\r\n  },\r\n  type: \"boxed\",\r\n  link: [\r\n    {\r\n      rel:\"icon\",\r\n      href:\"/assets/img/logo.png\"\r\n    },\r\n    {\r\n      rel:\"apple-touch-icon\",\r\n      href:\"/assets/img/logo.png\"\r\n    },\r\n    {\r\n      rel:\"manifest\",\r\n      href:\"/manifest.webmanifest\"\r\n    }\r\n  ],\r\n  style: {\r\n    background: \"darkgreen\",\r\n    color: \"#d0d0d0\"\r\n  },\r\n  sections: [\r\n    {\r\n    type: \"base_hero_01\",\r\n    data: {\r\n      title: \"Welcome to the WebTech Demo!\",\r\n      subtitle: \"<author>V-core9</author> presents this abomination to the world. Stay tuned there is bunch of stuff to add.\",\r\n      button: {\r\n        text: \"SUPPORT\",\r\n        do: \"testCallbackFunction()\"\r\n      },\r\n      image: {\r\n        width: 360,\r\n        height: 360,\r\n        url: \"/assets/logo.png\",\r\n        alt: \"YEAAA MIKI\"\r\n      },\r\n      background: {\r\n        type: \"color\",\r\n        url: \"#152030\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_about_us_01\",\r\n    data: {\r\n      title: \"Example About Us Section\",\r\n      subtitle: \"Some Random Text To Fill In Data\",\r\n      text: \"starting start bash  npm run build && npm run start_server clean exit - waiting for changes before restart restarting due to changes...\",\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_newsletter_01\",\r\n    data: {\r\n      title: \"Join Our NEWSLETTER >>\",\r\n      subtitle: \"Get hot info about latest features, updates, and much more.\",\r\n      text: \"Of course, the design of your newsletter will depend on your brand, as well as the message. For instance, you might want to create a colorful, attention-grabbing newsletter!\",\r\n      button: {\r\n        text: \"Joi3n Today3!\",\r\n        style: {\r\n          background: \"orange\",\r\n          color: \"red\",\r\n          size: \"L\"\r\n        },\r\n        do() {\r\n          alert('Join 3333333 alerting!');\r\n        }\r\n      },\r\n      image: {\r\n        width: 50,\r\n        height: 50,\r\n        url: \"/assets/logo.png\"\r\n      },\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_hero_01\",\r\n    data: {\r\n      title: \"Checkout the Web_DEMO App\",\r\n      subtitle: \"Running using Vanilla JS exported through WebPack...\",\r\n      button: {\r\n        text: \"Open Demo\",\r\n        do: \"testCallbackFunction('Join today button alerting!')\"\r\n      },\r\n      image: {\r\n        width: 800,\r\n        height: 450,\r\n        url: \"/assets/images/vWebDemo2021.png\",\r\n        alt: \"vWebDemo App 2021\"\r\n      },\r\n      background: {\r\n        type: \"color\",\r\n        url: \"#302010\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_hero_01\",\r\n    data: {\r\n      title: \"3333 SECTION 3333 TITLE\",\r\n      subtitle: \"3333333S3pace3 hold3e3r3 33for subtit3e..3..\",\r\n      button: {\r\n        text: \"Joi3n Today3!\",\r\n        style: {\r\n          background: \"orange\",\r\n          color: \"red\",\r\n          size: \"L\"\r\n        },\r\n        do: \"testCallbackFunction('3333333333Join today button alerting!')\"\r\n      },\r\n      image: {\r\n        width: 650,\r\n        height: 400,\r\n        url: \"/assets/pageBuilder_LoadTest1.png\",\r\n        alt: \"YEAAA MIKI\"\r\n      },\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_hero_01\",\r\n    data: {\r\n      title: \"55555555555 SECTION 3333 TITLE\",\r\n      subtitle: \"555555555555pace3 hold3e3r3 33for subtit3e..3..\",\r\n      button: {\r\n        text: \"Joi3n Today3!\",\r\n        style: {\r\n          background: \"orange\",\r\n          color: \"red\",\r\n          size: \"L\"\r\n        },\r\n        do() {\r\n          alert('Join 3333333 alerting!');\r\n        }\r\n      },\r\n      image: {\r\n        width: 50,\r\n        height: 50,\r\n        url: \"/assets/logo.png\"\r\n      },\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_about_us_01\",\r\n    data: {\r\n      title: \"Example About Us Section\",\r\n      subtitle: \"Some Random Text To Fill In Data\",\r\n      text: \"starting start bash  npm run build && npm run start_server clean exit - waiting for changes before restart restarting due to changes...\",\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_hero_01\",\r\n    data: {\r\n      title: \"6666666666 SECTION 3333 TITLE\",\r\n      subtitle: \"666666666 hold3e3r3 33for subtit3e..3..\",\r\n      button: {\r\n        text: \"Joi3n Today3!\",\r\n        style: {\r\n          background: \"orange\",\r\n          color: \"red\",\r\n          size: \"L\"\r\n        },\r\n        do() {\r\n          alert('Join 3333333 alerting!');\r\n        }\r\n      },\r\n      image: {\r\n        width: 50,\r\n        height: 50,\r\n        url: \"/assets/pageBuilder_LoadTest1.png\",\r\n        alt: \"YEAAA MIKI\"\r\n      },\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_newsletter_01\",\r\n    data: {\r\n      title: \"77777777777 SECTION 3333 TITLE\",\r\n      subtitle: \"7777777777 hold3e3r3 33for subtit3e..3..\",\r\n      text: \"qw qwasasxcs qw eqwdsa daw qewdwaswd asw aqsdas dwaqedasdw   waasdcsad was w adsd aw sdeaqsd asw asdad asd\",\r\n      button: {\r\n        text: \"Joi3n Today3!\",\r\n        style: {\r\n          background: \"orange\",\r\n          color: \"red\",\r\n          size: \"L\"\r\n        },\r\n        do() {\r\n          alert('Join 3333333 alerting!');\r\n        }\r\n      },\r\n      image: {\r\n        width: 50,\r\n        height: 50,\r\n        url: \"/assets/logo.png\"\r\n      },\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_newsletter_01\",\r\n    data: {\r\n      title: \"888888 SECTION 3333 TITLE\",\r\n      subtitle: \"88888 hold3e3r3 33for subtit3e..3..\",\r\n      text: \"qw qwasasxcs qw eqwdsa daw qewdwaswd asw aqsdas dwaqedasdw   waasdcsad was w adsd aw sdeaqsd asw asdad asd\",\r\n      button: {\r\n        text: \"Joi3n Today3!\",\r\n        style: {\r\n          background: \"orange\",\r\n          color: \"red\",\r\n          size: \"L\"\r\n        },\r\n        do() {\r\n          alert('Join 3333333 alerting!');\r\n        }\r\n      },\r\n      image: {\r\n        width: 50,\r\n        height: 50,\r\n        url: \"/assets/logo.png\"\r\n      },\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_about_us_01\",\r\n    data: {\r\n      title: \"Example About Us Section\",\r\n      subtitle: \"Some Random Text To Fill In Data\",\r\n      text: \"starting start bash  npm run build && npm run start_server clean exit - waiting for changes before restart restarting due to changes...\",\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_newsletter_01\",\r\n    data: {\r\n      title: \"9999999 SECTION 3333 TITLE\",\r\n      subtitle: \"99999999 hold3e3r3 33for subtit3e..3..\",\r\n      text: \"qw qwasasxcs qw eqwdsa daw qewdwaswd asw aqsdas dwaqedasdw   waasdcsad was w adsd aw sdeaqsd asw asdad asd\",\r\n      button: {\r\n        text: \"Joi3n Today3!\",\r\n        style: {\r\n          background: \"orange\",\r\n          color: \"red\",\r\n          size: \"L\"\r\n        },\r\n        do() {\r\n          alert('Join 3333333 alerting!');\r\n        }\r\n      },\r\n      image: {\r\n        width: 50,\r\n        height: 50,\r\n        url: \"/assets/logo.png\"\r\n      },\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_newsletter_01\",\r\n    data: {\r\n      title: \"10 SECTION 3333 TITLE\",\r\n      subtitle: \"10 hold3e3r3 33for subtit3e..3..\",\r\n      text: \"qw qwasasxcs qw eqwdsa daw qewdwaswd asw aqsdas dwaqedasdw   waasdcsad was w adsd aw sdeaqsd asw asdad asd\",\r\n      button: {\r\n        text: \"Joi3n Today3!\",\r\n        style: {\r\n          background: \"orange\",\r\n          color: \"red\",\r\n          size: \"L\"\r\n        },\r\n        do() {\r\n          alert('Join 10 alerting!');\r\n        }\r\n      },\r\n      image: {\r\n        width: 50,\r\n        height: 50,\r\n        url: \"/assets/pageBuilder_LoadTest1.png\"\r\n      },\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n    },\r\n    {\r\n    type: \"base_hero_alt_01\",\r\n    data: {\r\n      title: \"Welcome to the WebTech Demo!\",\r\n      subtitle: \"<author>V-core9</author> presents this abomination to the world. Stay tuned there is bunch of stuff to add.\",\r\n      button: {\r\n        text: \"SUPPORT\",\r\n        do: \"testCallbackFunction()\"\r\n      },\r\n      image: {\r\n        width: 360,\r\n        height: 360,\r\n        url: \"/assets/logo.png\",\r\n        alt: \"YEAAA MIKI\"\r\n      },\r\n      background: {\r\n        type: \"color\",\r\n        url: \"#152030\"\r\n      }\r\n    }\r\n  },\r\n  {\r\n    type: \"base_about_us_01\",\r\n    data: {\r\n      title: \"Example About Us Section\",\r\n      subtitle: \"Some Random Text To Fill In Data\",\r\n      text: \"starting start bash  npm run build && npm run start_server clean exit - waiting for changes before restart restarting due to changes...\",\r\n      background: {\r\n        type: \"image\",\r\n        url: \"/assets/logo.png\"\r\n      }\r\n    }\r\n  }\r\n  ]\r\n}\r\n\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/pages/homepage_config.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/index.js":
/*!********************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const vDoctor = __webpack_require__(/*! ./v_doctor */ \"./SOURCE/FrontEnd/v_modules/v_doctor/index.js\");\nconst vSvgPointer = __webpack_require__(/*! ./v_svg_cursor */ \"./SOURCE/FrontEnd/v_modules/v_svg_cursor/index.js\");\nconst vDisplayDriver = __webpack_require__(/*! ./v_display_driver/displayDriver */ \"./SOURCE/FrontEnd/v_modules/v_display_driver/displayDriver.js\");\n\nmodule.exports = { vDoctor, vSvgPointer, vDisplayDriver };\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_display_driver/displayDriver.js":
/*!*********************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_display_driver/displayDriver.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const vDomPrinter = __webpack_require__(/*! ../v_dom_printer/domPrinter */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/domPrinter.js\");\r\n\r\n\r\n// requestAnimationFrame\r\nraf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60); };\r\n\r\n// vDisplayDriver \r\nconst vDisplayDriver = {\r\n  config: {\r\n    mode: \"hiding\",\r\n    debug: true\r\n  },\r\n\r\n  data: {\r\n    page: {},\r\n    styles: []\r\n  },\r\n\r\n  set page(page = null) {\r\n    this.pageInputValidate(page);\r\n    this.data.page = page;\r\n    console.log(this);\r\n    this.initPrint();\r\n  },\r\n\r\n  addSSOSLOBJ(newItems = null) {\r\n    this.page = newItems;\r\n  },\r\n\r\n  pageInputValidate(page) {\r\n    if (page === null) {\r\n      console.warn(\"Error: Empty Input Value.\");\r\n    } else {\r\n      console.warn(\"Success: New Page Valid.\");\r\n      return true;\r\n    }\r\n  },\r\n\r\n  listenForEvents() {\r\n    //Self addig on dom load\r\n    document.onreadystatechange = function () {\r\n      switch (document.readyState) {\r\n        case \"loading\":\r\n          // The document is still loading.;\r\n          break;\r\n        case \"interactive\":\r\n          // DOMContentLoaded event.\r\n          window.dispatchEvent(new Event('ssosl_ready'))\r\n          break;\r\n        case \"complete\":\r\n          // The document is finished loading.\r\n          break;\r\n      };\r\n      //console.log(document.readyState)\r\n    };\r\n\r\n    window.addEventListener('ssosl_ready', (e) => {\r\n      console.log('EventListener got:[> ssosl_ready <]');\r\n\r\n      if (typeof current_page_vdd !== \"undefined\") {\r\n        try {\r\n          vDisplayDriver.addSSOSLOBJ(current_page_vdd);\r\n        } catch (error) {\r\n          console.error(error);\r\n        }\r\n      }\r\n\r\n      try {\r\n        vDisplayDriver.init();\r\n      } catch (error) {\r\n        console.error(error);\r\n      }\r\n\r\n      try {\r\n        window.removeEventListener('ssosl_ready', this);\r\n      } catch (error) {\r\n        console.error(error);\r\n      }\r\n    });\r\n  },\r\n\r\n  looper() {\r\n    //console.log('yea...scrolling')\r\n    var notYetDone = 0;\r\n    var testItems = vDisplayDriver.data.page.sections;\r\n    //console.log(testItems)\r\n    if (typeof testItems !== \"undefined\") {\r\n      if (testItems.length > 0) {\r\n        testItems.forEach((element) => {\r\n          var helpElem = document.getElementById(element.elemID);\r\n          if (vDisplayDriver.isInUserView('#' + element.elemID)) {\r\n            if (!element.done) {\r\n              if ((typeof element.render === 'undefined') || (element.lastUpdate > element.timeOfRender)) {\r\n                element.render = vDomPrinter.getTemplate(element);\r\n                element.timeOfRender = Date.now();\r\n                helpElem.innerHTML = element.render;\r\n                helpElem.style.minHeight = helpElem.clientHeight + \"px\";\r\n                vDisplayDriver.maybeLoadStyle(element.type);\r\n                element.done = true;\r\n              } else {\r\n                helpElem.innerHTML = element.render;\r\n                element.done = true;\r\n              }\r\n            }\r\n\r\n            if (!element.onloadDone) {\r\n              element.onload = vDomPrinter.getOnLoad(element.type);\r\n              if (typeof element.onload === \"function\") {\r\n                console.log(element.onload);\r\n                element.onload();\r\n              };\r\n              element.onLoadDone = true;\r\n            };\r\n\r\n          } else {\r\n            element.onLoadDone = false;\r\n            element.done = false;\r\n            helpElem.innerHTML = \"\";\r\n            //console.log('Is ' + element.elemID + ' visible? NO')\r\n            notYetDone++;\r\n          }\r\n        });\r\n      }\r\n    }\r\n\r\n    if (notYetDone === 0) {\r\n      console.log('Done! Detaching scroll event listener...')\r\n      window.removeEventListener(\"scroll\", this.handler);\r\n    };\r\n  },\r\n\r\n  handler() {\r\n    // requestAnimationFrame\r\n    raf(vDisplayDriver.looper);\r\n  },\r\n\r\n  loadPage() {\r\n    this.canPrintPage();\r\n    var meta = this.data.page.meta;\r\n    var title = this.data.page.title;\r\n    var sections = this.data.page.sections;\r\n    console.log(meta);\r\n    document.title = title;\r\n    var desc = document.createElement(\"meta\");\r\n    desc.setAttribute(\"content\", meta.description);\r\n    desc.setAttribute(\"name\", \"description\");\r\n    document.head.appendChild(desc);\r\n    var keyW = document.createElement(\"meta\");\r\n    keyW.setAttribute(\"content\", meta.keywords);\r\n    keyW.setAttribute(\"name\", \"keywords\");\r\n    document.head.appendChild(keyW);\r\n  },\r\n\r\n  isInUserView(el) {\r\n    //console.log('FunctionCall >> [ function isInUserView(el) ] || [ Elem: ' + el + ' ]');\r\n    const scroll = window.scrollY || window.pageYOffset;\r\n    var elem = document.querySelector(el);\r\n    if (typeof elem !== \"undefined\") {\r\n      const boundsTop = (elem ? elem.getBoundingClientRect().top : 0) + scroll;\r\n\r\n      const viewport = {\r\n        top: scroll,\r\n        bottom: scroll + window.innerHeight,\r\n      };\r\n\r\n      const bounds = {\r\n        top: boundsTop,\r\n        bottom: boundsTop + elem.clientHeight,\r\n      };\r\n\r\n\r\n      return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||\r\n        (bounds.top <= viewport.bottom && bounds.top >= viewport.top);\r\n    } else {\r\n      return false;\r\n    }\r\n  },\r\n\r\n  preload() {\r\n    console.log('FunctionCall >> [ function preload() ]');\r\n  },\r\n\r\n  canPrintPage() {\r\n    if ((window) && (document)) {\r\n      return true;\r\n    } else {\r\n      this.init();\r\n    }\r\n  },\r\n\r\n  initPrint() {\r\n    var stopPrint = false;\r\n    this.data.page.sections.forEach(section => {\r\n\r\n      var helpVal = (performance.now() * (1000000000));\r\n      var helpVal2 = helpVal - Math.trunc(helpVal);\r\n      helpVal2 = ((Math.trunc(helpVal2 * (100000)) == 0) ? Math.trunc(helpVal) : (Math.trunc(helpVal2 * (100000))))\r\n\r\n      var uid = 'UID_' + helpVal2;\r\n      var foundUniqueID = false;\r\n\r\n      while (!foundUniqueID) {\r\n        var elemTest = document.getElementById(uid);\r\n        if (elemTest) {\r\n          helpVal2++;\r\n          uid = 'UID_' + helpVal2;\r\n        } else {\r\n          foundUniqueID = true;\r\n        }\r\n      }\r\n\r\n      document.body.innerHTML += `<div id=\"${uid}\" class=\"page_section ${section.type}\"></div>`;\r\n\r\n      section.elemID = uid;\r\n      section.lastUpdate = Date.now();\r\n      section.timeOfRender = 0;\r\n\r\n      if (stopPrint === false) {\r\n\r\n        section.render = vDomPrinter.getTemplate(section);\r\n\r\n\r\n        if (!section.onloadDone) {\r\n          section.onload = vDomPrinter.getOnLoad(section);\r\n          if (typeof section.onload === \"function\") {\r\n            console.log(section.onload);\r\n            section.onload();\r\n          };\r\n          section.onLoadDone = true;\r\n        };\r\n\r\n        this.maybeLoadStyle(section.type);\r\n\r\n        document.getElementById(uid).innerHTML = section.render;\r\n\r\n        //console.log(document.getElementById(uid).clientHeight);\r\n\r\n        document.getElementById(uid).style.minHeight = document.getElementById(uid).clientHeight + \"px\";\r\n        section.timeOfRender = Date.now();\r\n        //console.log(section.render);\r\n        console.log(\"EEEE #\" + uid)\r\n        if (!vDisplayDriver.isInUserView(\"#\" + uid)) {\r\n          stopPrint = true;\r\n          console.log(\"stopPrint = TRUE\")\r\n        }\r\n      }\r\n    })\r\n  },\r\n\r\n  set styles(style = null) {\r\n    if (style !== null) {\r\n      try {\r\n        this.data.styles.push(style);\r\n      } catch (e) {\r\n        console.log(\"ERROR:>> \" + e.message);\r\n        return false;\r\n      }\r\n      document.body.innerHTML += style.style;\r\n      return true;\r\n    } else {\r\n      console.warn(\"ERROR:>> style EMPTY\");\r\n    }\r\n  },\r\n\r\n  maybeLoadStyle(type) {\r\n    var stylesNumber = this.data.styles.length;\r\n    var shouldLoadStyle = true;\r\n    if (stylesNumber > 0) {\r\n      this.data.styles.forEach((style) => {\r\n        if (style.name === type) {\r\n          shouldLoadStyle = false;\r\n        }\r\n      })\r\n    };\r\n\r\n    if ((stylesNumber == 0) || (shouldLoadStyle)) {\r\n      this.styles = { name: type, style: vDomPrinter.getStyle(type) };\r\n      console.log(\"SUCCESS :: Style Loaded Into vDisplayDriver \\nTemplate Name  -[ \" + type + \" ] \");\r\n      return true;\r\n    }\r\n\r\n    if (shouldLoadStyle === false) {\r\n      //console.log(\"SKIPPING Style Loading >> \\nReason :[ shouldLoadStyle  == FALSE  ]  \");\r\n    } else {\r\n      //console.log(\"NO STYLE LOADED\");\r\n    };\r\n    return false;\r\n  },\r\n\r\n  init(page = null) {\r\n    console.log('FunctionCall >> [ function initSSOSL() ]');\r\n    try {\r\n      this.listenForEvents();\r\n      window.addEventListener(\"load\", vDisplayDriver.handler);\r\n      window.addEventListener(\"scroll\", vDisplayDriver.handler);\r\n    } catch (error) {\r\n      console.error(error);\r\n    }\r\n  }\r\n\r\n};\r\n\r\n\r\n\r\nvDisplayDriver.init();\r\n\r\nmodule.exports = vDisplayDriver;\r\n\r\n\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_display_driver/displayDriver.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_doctor/function_mark/index.js":
/*!*******************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_doctor/function_mark/index.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("class FunctionMark {\r\n  constructor(name = null) {\r\n    if (name === null) {\r\n      return false;\r\n    }\r\n    this.name = name;\r\n    this.used = false;\r\n    this.timeOfFirstCall = null;\r\n    this.registerTime = performance.now();\r\n    return true;\r\n  }\r\n};\r\n\r\nmodule.exports = FunctionMark;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_doctor/function_mark/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_doctor/index.js":
/*!*****************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_doctor/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let PerformanceMark = __webpack_require__(/*! ./performance_mark */ \"./SOURCE/FrontEnd/v_modules/v_doctor/performance_mark/index.js\");\r\nlet FunctionMark = __webpack_require__(/*! ./function_mark */ \"./SOURCE/FrontEnd/v_modules/v_doctor/function_mark/index.js\");\r\n\r\nconst vDoctor = {\r\n\r\n  _this: {},\r\n  config: {\r\n    _this: {},\r\n    devMode: true,\r\n  },\r\n\r\n  data: {\r\n    _this: {},\r\n    functionsList: [],\r\n    performanceMarks: [],\r\n    registeredFunctions: [],\r\n  },\r\n\r\n  do: {\r\n    _this: {},\r\n\r\n    init: function (thisIN) {\r\n      this._this = thisIN;\r\n    },\r\n    getFunctionsList: function () {\r\n      console.log(this);\r\n\r\n      this._this.data.functionsList = [];\r\n      var HelperList = Object.getOwnPropertyNames(window);\r\n      console.log(HelperList);\r\n      this._this.data.functionsList = HelperList;\r\n      if (this._this.data.functionsList.length > 0) {\r\n        return this._this.data.functionsList.length;\r\n      } else {\r\n        return false;\r\n      }\r\n    },\r\n    logFunctionsList: function () {\r\n      console.log(\"[ SO_Method call =>  vDoctor.do.logFunctionsList() ]\");\r\n      if (this._this.data.functionsList.length > 0) {\r\n        console.log(JSON.stringify(this._this.data.functionsList));\r\n        console.log(\r\n          \"[ EO_Method call =>  vDoctor.do.logFunctionsList() | Msg => OK : Data was already available. ] ]\"\r\n        );\r\n        return true;\r\n      } else {\r\n        if (this.getFunctionsList() != false) {\r\n          console.log(this._this.data.functionsList.length);\r\n          console.log(\r\n            \"[ EO_Method call =>  vDoctor.do.logFunctionsList() | Msg => OK : Data was loaded before print. ]\"\r\n          );\r\n          return true;\r\n        } else {\r\n          console.warn(\"\");\r\n          console.trace();\r\n          console.log(\r\n            \"[ EO_Method call =>  vDoctor.do.logFunctionsList() | Msg => ERROR : logFunctionsList could not load any. ]\"\r\n          );\r\n          return false;\r\n        }\r\n      }\r\n    },\r\n    tsMark: function (name, description) {\r\n      var oldNum = this._this.data.functionsList.length;\r\n\r\n      let performanceMark = new PerformanceMark(name, description);\r\n      this._this.data.performanceMarks.push(performanceMark);\r\n\r\n      if (this._this.data.performanceMarks.length > oldNum) {\r\n        return true;\r\n      } else {\r\n        return false;\r\n      }\r\n    },\r\n    logAllMarks: function () {\r\n      if (this.data.performanceMarks.length > 0) {\r\n        console.log(this.data.performanceMarks.length);\r\n        return true;\r\n      } else {\r\n        console.log(\"No performance marks\");\r\n        return false;\r\n      }\r\n    },\r\n\r\n    registerFunction: function (name = null) {\r\n      if (name === null) {\r\n        console.warn(\"Can not register a function without a name.\");\r\n        return false;\r\n      } else {\r\n        console.warn(\"Registering function named: \" + name);\r\n        let newFunctionObject = new FunctionMark(name);\r\n        this._this.data.registeredFunctions.push(newFunctionObject);\r\n        return true;\r\n      }\r\n    },\r\n\r\n    triggered: function (name = null, tryToRegister = true) {\r\n      console.log(\"Triggers -> \" + name);\r\n      var foundIt = false;\r\n\r\n      this._this.data.registeredFunctions.forEach((regFunc) => {\r\n        if (regFunc.name === name) {\r\n          if (regFunc.used !== true) {\r\n            regFunc.used = true;\r\n            regFunc.timeOfFirstCall = performance.now();\r\n          }\r\n          foundIt = true;\r\n        }\r\n      });\r\n\r\n      if (foundIt) {\r\n        return true;\r\n      } else {\r\n        console.warn(\"vDoctor MSG:: Function triggered could not be found. registering and triggering now.\");\r\n        if (tryToRegister) {\r\n          this.registerFunction(name);\r\n          this.triggered(name, false);\r\n        } else {\r\n          return false;\r\n        }\r\n      }\r\n    },\r\n  },\r\n\r\n  init: function () {\r\n    this._this = this;\r\n    this.do.init(this);\r\n    this.data._this = this;\r\n    this.config._this = this;\r\n  },\r\n\r\n};\r\n\r\nvDoctor.init();\r\n\r\nmodule.exports = vDoctor;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_doctor/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_doctor/performance_mark/index.js":
/*!**********************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_doctor/performance_mark/index.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\nclass PerformanceMark {\r\n  constructor(name = \"_empty_mark_name_\", description = \"_empty_mark_description_space_\") {\r\n    this.timestamp = performance.now();\r\n    this.name = name;\r\n    this.description = description;\r\n  }\r\n};\r\n\r\nmodule.exports = PerformanceMark;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_doctor/performance_mark/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/a/index.js":
/*!**************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/a/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("const A = ( elemText = \"\") => {\r\n  return `<A>${elemText}</A>`\r\n};\r\n\r\nmodule.exports = A;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/a/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h1/index.js":
/*!***************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h1/index.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("const H1 = ( elemText = \"\") => {\r\n  return `<H1>${elemText}</H1>`\r\n};\r\n\r\nmodule.exports = H1;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h1/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h2/index.js":
/*!***************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h2/index.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("const H2 = ( elemText = \"\") => {\r\n  return `<H2>${elemText}</H2>`\r\n};\r\n\r\nmodule.exports = H2;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h2/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h3/index.js":
/*!***************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h3/index.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("const H3 = ( elemText = \"\") => {\r\n  return `<H3>${elemText}</H3>`\r\n};\r\n\r\nmodule.exports = H3;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h3/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h4/index.js":
/*!***************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h4/index.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("const H4 = ( elemText = \"\") => {\r\n  return `<H4>${elemText}</H4>`\r\n};\r\n\r\nmodule.exports = H4;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h4/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h5/index.js":
/*!***************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h5/index.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("const H5 = ( elemText = \"\") => {\r\n  return `<H5>${elemText}</H5>`\r\n};\r\n\r\nmodule.exports = H5;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h5/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/index.js":
/*!************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/index.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n  A : __webpack_require__(/*! ./a */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/a/index.js\"),\r\n  H1 : __webpack_require__(/*! ./h1 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h1/index.js\"),\r\n  H2 : __webpack_require__(/*! ./h2 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h2/index.js\"),\r\n  H3 : __webpack_require__(/*! ./h3 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h3/index.js\"),\r\n  H4 : __webpack_require__(/*! ./h4 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h4/index.js\"),\r\n  H5 : __webpack_require__(/*! ./h5 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/h5/index.js\"),\r\n  P : __webpack_require__(/*! ./p */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/p/index.js\"),\r\n}\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/p/index.js":
/*!**************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/p/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("const P = ( elemText = \"\") => {\r\n  return `<P>${elemText}</P>`\r\n};\r\n\r\nmodule.exports = P;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/p/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/index.js":
/*!***************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\nmodule.exports = {\r\n  elements: __webpack_require__(/*! ./elements */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/elements/index.js\"),\r\n  templates: __webpack_require__(/*! ./templates/templates_ARRAY */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/templates_ARRAY.js\")\r\n}\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/admin_base_list_01/index.js":
/*!********************************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/admin_base_list_01/index.js ***!
  \********************************************************************************************/
/***/ ((module) => {

eval("const admin_base_list_01 = {\r\n  name: \"admin_base_list_01\",\r\n  view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image:{url: \"#\",width:\"auto\",height:\"auto\",alt: null} }) => {\r\n    return `<div class=\"section_side\">\r\n                <h1>${section.title}</h1>\r\n                <h2>${section.subtitle}</h2>\r\n                <button onclick=\"${section.button.do}\">${ section.button.text }</button>\r\n              </div>\r\n              <div class=\"section_side onload_data\">\r\n                \r\n              </div>`;\r\n  },\r\n  css: () => {\r\n    return `<style>\r\n              .admin_base_list_01 {\r\n                background: #101525;\r\n                color: white;\r\n              }\r\n\r\n              v_block {\r\n                  background: linear-gradient(128deg, #2196f33b, rgb(255 255 255 / 15%));\r\n                  border: none;\r\n                  box-shadow: 0 5px 10px black;\r\n                  display: flex;\r\n                  flex-direction: column;\r\n                  padding: 0;\r\n              }\r\n              \r\n              options_list {\r\n                  display: flex;\r\n                  flex-direction: column;\r\n                  gap: 0.15em;\r\n              }\r\n              \r\n              v_block title {\r\n                  display: inline-flex;\r\n                  font-size: 2em;\r\n                  font-weight: bolder;\r\n                  background: #ffffff17;\r\n                  padding: 0.25em .5em;\r\n              }\r\n              \r\n              item {\r\n                  padding: 0.25em 1em;\r\n                  border: 1px solid rgb(255 255 255 / 10%);\r\n                  background: #ffffff05;\r\n                  box-shadow: 0 1.5px 4px #008eff1f;\r\n              }\r\n            </style>`;\r\n  },\r\n  onload: () => {\r\n    //alert('yeaaa');\r\n    var dataList = (typeof appConfigPageInfo !== \"undefined\") ? appConfigPageInfo : null;\r\n    if (dataList !== null) {\r\n      var htmlToPrint = `<V_BLOCK>\r\n      <title>Application Config:</title>\r\n        <OPTIONS_LIST>\r\n        <ITEM>Name: ${dataList.appConfig.name}</ITEM>\r\n        <ITEM>Language: ${dataList.appConfig.language}</ITEM>\r\n        <ITEM>Only Secure: ${dataList.appConfig.onlySecure}</ITEM>\r\n        <ITEM>Origin: ${dataList.appConfig.origin}</ITEM>\r\n        <ITEM>Port: ${dataList.appConfig.port}</ITEM>\r\n        <ITEM>Target: ${dataList.appConfig.target}</ITEM>\r\n        <ITEM>Print to Console: ${dataList.appConfig.printConsole}</ITEM>\r\n        <ITEM>Response Timestamp: ${dataList.response_timestamp}</ITEM>\r\n        </OPTIONS_LIST>\r\n      </V_BLOCK>`;\r\n      setTimeout(() => {\r\n        document.querySelector(\".admin_base_list_01 \").style.minHeight = \"unset\";\r\n        document.querySelector(\".admin_base_list_01 .onload_data\").insertAdjacentHTML(\"afterbegin\", htmlToPrint);\r\n      }, 250);\r\n    }\r\n    },\r\n  disabled: false,\r\n  author: \"-v-\"\r\n}\r\n\r\nmodule.exports = admin_base_list_01;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/admin_base_list_01/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_about_us_01/index.js":
/*!******************************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_about_us_01/index.js ***!
  \******************************************************************************************/
/***/ ((module) => {

eval("const base_about_us_01 = {\r\n  name: \"base_about_us_01\",\r\n  view(section = { title : null, subtitle: null, text: null }) {\r\n    return `<div class=\"section_full\">\r\n                  <h3>${section.title}</h3>\r\n                  <h5>${section.subtitle}</h5>\r\n                  <p>${section.text}</p>\r\n                </div>`;\r\n  },\r\n  css() {\r\n    return `<style>\r\n              .base_about_us_01 .section_full {\r\n                align-items: center;\r\n                justify-content: center;\r\n                display: flex;\r\n                flex-direction: column;\r\n                padding: 2em;\r\n                gap: 1em;\r\n            }\r\n            \r\n            .base_about_us_01 .section_full h3 {\r\n                color: #03a9f4;\r\n                font-size: 2em;\r\n                text-align: center;\r\n                letter-spacing: 2px;\r\n            }\r\n            \r\n            .base_about_us_01 .section_full h5 {\r\n                font-size: 1.25em;\r\n                color: gray;\r\n                text-shadow: 0 0 5px black;\r\n                background: #00000030;\r\n                padding: 1em 2em;\r\n            }\r\n            \r\n            .base_about_us_01 .section_full p {\r\n                max-width: 50%;\r\n                text-align: center;\r\n                line-height: 1.5em;\r\n                letter-spacing: 1px;\r\n                text-shadow: 0 0 10px #03a9f4;\r\n            }\r\n            </style>`;\r\n  },\r\n  disabled: false,\r\n  author: \"-v-\"\r\n}\r\n\r\n\r\nmodule.exports = base_about_us_01;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_about_us_01/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_hero_01/index.js":
/*!**************************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_hero_01/index.js ***!
  \**************************************************************************************/
/***/ ((module) => {

eval("const base_hero_01 = {\r\n  name: \"base_hero_01\",\r\n  view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image:{url: \"#\",width:\"auto\",height:\"auto\",alt: null} }) => {\r\n    return `<div class=\"section_side\">\r\n                <h1>${section.title}</h1>\r\n                <h2>${section.subtitle}</h2>\r\n                <button id=\"mainButtonClick\" onclick=\"${section.button.do}\">${ section.button.text }</button>\r\n              </div>\r\n              <div class=\"section_side\">\r\n                <img src=\"${section.image.url}\" width=\"${section.image.width}\" height=\"${section.image.height}\" alt=\"${section.image.alt}\"/>\r\n              </div>`;\r\n  },\r\n  css: () => {\r\n    return `<style>\r\n              .hero_main {\r\n                background: #101525;\r\n                color: white;\r\n              }\r\n            </style>`;\r\n  },\r\n  disabled: false,\r\n  author: \"-v-\"\r\n}\r\n\r\nmodule.exports = base_hero_01;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_hero_01/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_hero_alt_01/index.js":
/*!******************************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_hero_alt_01/index.js ***!
  \******************************************************************************************/
/***/ ((module) => {

eval("const base_hero_alt_01 = {\r\n  name: \"base_hero_alt_01\",\r\n  view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image:{url: \"#\",width:\"auto\",height:\"auto\",alt: null} }) => {\r\n    return `<div class=\"section_side\">\r\n                <h1>${section.title}</h1>\r\n                <h2>${section.subtitle}</h2>\r\n                <button id=\"mainButtonClickALT\" onclick=\"${section.button.do}\">${ section.button.text }</button>\r\n              </div>\r\n              <div class=\"section_side\">\r\n                <img src=\"${section.image.url}\" width=\"${section.image.width}\" height=\"${section.image.height}\" alt=\"${section.image.alt}\"/>\r\n              </div>`;\r\n  },\r\n  css: () => {\r\n    return `<style>\r\n              .base_hero_alt_01 {\r\n                background: #101525;\r\n                color: white;\r\n              }\r\n              .base_hero_alt_01 author {\r\n                background: #0000006e;\r\n            }\r\n            \r\n            .base_hero_alt_01 h1 {\r\n                font-size: 1.65em;\r\n                line-height: 1em;\r\n                background: #b40000;\r\n            }\r\n            \r\n            .base_hero_alt_01 {\r\n                gap: 1em;\r\n                position: relative;\r\n                max-width: 960px;\r\n                margin: 0 auto;\r\n                align-items: stretch;\r\n                padding: 1em;\r\n            }\r\n            \r\n            .base_hero_alt_01 .section_side {\r\n                flex: 1;\r\n                display: flex;\r\n                flex-direction: column;\r\n                align-items: center;\r\n                justify-content: center;\r\n                background: #ffffff0d;\r\n                gap: 1em;\r\n                text-align: center;\r\n            }\r\n            \r\n            .base_hero_alt_01 h2 {\r\n                font-size: 1.25em;\r\n                line-height: 1.75em;\r\n                font-weight: 500;\r\n                text-decoration: underline;\r\n            }\r\n            \r\n            .base_hero_alt_01 button {\r\n                background: #7e1010;\r\n                cursor: pointer;\r\n                box-shadow: 0 1px 2px #00000075;\r\n            }\r\n            \r\n            .base_hero_alt_01 button:hover {\r\n                background: #c30000;\r\n                box-shadow: 0 5px 5px black;\r\n            }\r\n            </style>`;\r\n  },\r\n  disabled: false,\r\n  author: \"-v-\"\r\n}\r\n\r\nmodule.exports = base_hero_alt_01;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_hero_alt_01/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_newsletter_01/index.js":
/*!********************************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_newsletter_01/index.js ***!
  \********************************************************************************************/
/***/ ((module) => {

eval("const base_newsletter_01 = {\r\n  name: \"base_newsletter_01\",\r\n  view(section = { title : null, text: null }) {\r\n    return `<div class=\"section_side\">\r\n              <h3>${section.title}</h3>\r\n              <p>${section.text}</p>\r\n            </div>\r\n            <div class=\"section_side\">\r\n              <input type=\"text\"/>\r\n              <button />SignUp</button>\r\n            </div>`\r\n  },\r\n  css() {\r\n    return `<style>\r\n              \r\n              .page_section.base_newsletter_01 {\r\n                background: repeating-linear-gradient(219deg, #252939, transparent 100px);\r\n                box-shadow: 0 0 10px inset black;\r\n                padding: 2em;\r\n                max-width: 760px;\r\n                margin: 0 auto;\r\n            }\r\n            \r\n            \r\n            \r\n            .page_section.base_newsletter_01 .section_side {\r\n                max-width: 50%;\r\n                display: flex;\r\n                flex-direction: column;\r\n                gap: 1em;\r\n                flex: 1;\r\n            }\r\n            \r\n            .page_section.base_newsletter_01 h3 {\r\n                font-size: 1.25em;\r\n                color: #03A9F4;\r\n                display: inline-flex;\r\n                background: #ffffff1a;\r\n                width: fit-content;\r\n                box-shadow: 0 5px 10px black;\r\n            }\r\n            \r\n            .page_section.base_newsletter_01 p {\r\n                display: inline-flex;\r\n                background: #ffffff1a;\r\n                width: fit-content;\r\n                box-shadow: 0 5px 10px black;\r\n            }\r\n            \r\n            input[type=\"text\"] {\r\n                font-size: 1em;\r\n                padding: 1em;\r\n                background: #00000042;\r\n                outline: none;\r\n                color: white;\r\n                border: none;\r\n                border: 1px solid #03A9F4;\r\n                font-weight: bold;\r\n            }\r\n            \r\n            button {\r\n                width: fit-content;\r\n                margin: 0 auto;\r\n                font-size: 1.15em;\r\n                font-weight: bold;\r\n                background: #03A9F4;\r\n                color: white;\r\n                padding: .5em 1.5em;\r\n                border-radius: 0;\r\n                box-shadow: 0 2px 5px black;\r\n                text-shadow: 0 0 2px black;\r\n            }\r\n            </style>`;\r\n  },\r\n  disabled: false,\r\n  author: \"-v-\"\r\n}\r\n\r\n\r\nmodule.exports = base_newsletter_01;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_newsletter_01/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/templates_ARRAY.js":
/*!***********************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/templates_ARRAY.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst  base_hero_01 = __webpack_require__(/*! ./base_hero_01 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_hero_01/index.js\");\r\nconst  base_hero_alt_01 = __webpack_require__(/*! ./base_hero_alt_01 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_hero_alt_01/index.js\");\r\nconst  base_about_us_01 = __webpack_require__(/*! ./base_about_us_01 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_about_us_01/index.js\");\r\nconst  base_newsletter_01 = __webpack_require__(/*! ./base_newsletter_01 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/base_newsletter_01/index.js\");\r\nconst  admin_base_list_01 = __webpack_require__(/*! ./admin_base_list_01 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/admin_base_list_01/index.js\");\r\n\r\nmodule.exports = [base_about_us_01, base_hero_01, base_hero_alt_01, base_newsletter_01, admin_base_list_01];\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/templates/templates_ARRAY.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/_bold/index.js":
/*!**********************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/_bold/index.js ***!
  \**********************************************************************************/
/***/ ((module) => {

eval("const BOLD = ( BOLD = \"\") => {\r\n  return `**${BOLD}**`\r\n};\r\n\r\nmodule.exports = BOLD;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/_bold/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/_italic/index.js":
/*!************************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/_italic/index.js ***!
  \************************************************************************************/
/***/ ((module) => {

eval("const ITALIC = ( ITALIC = \"\") => {\r\n  return `*${ITALIC}*`\r\n};\r\n\r\nmodule.exports = ITALIC;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/_italic/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/a/index.js":
/*!******************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/a/index.js ***!
  \******************************************************************************/
/***/ ((module) => {

eval("const A = ( elemText = \"\", elemURL = \"#\") => {\r\n  return `![${elemText}](${elemURL})`\r\n};\r\n\r\nmodule.exports = A;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/a/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/code/index.js":
/*!*********************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/code/index.js ***!
  \*********************************************************************************/
/***/ ((module) => {

eval("const CODE = ( elemText = \"\") => {\r\n  return `\\`${elemText}\\``\r\n};\r\n\r\nmodule.exports = CODE;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/code/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h1/index.js":
/*!*******************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h1/index.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("const H1 = ( elemText = \"\") => {\r\n  return `# ${elemText}  `\r\n};\r\n\r\nmodule.exports = H1;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h1/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h2/index.js":
/*!*******************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h2/index.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("const H2 = ( elemText = \"\") => {\r\n  return `## ${elemText}  `\r\n};\r\n\r\nmodule.exports = H2;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h2/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h3/index.js":
/*!*******************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h3/index.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("const H3 = ( elemText = \"\") => {\r\n  return `### ${elemText}  `\r\n};\r\n\r\nmodule.exports = H3;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h3/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h4/index.js":
/*!*******************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h4/index.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("const H4 = ( elemText = \"\") => {\r\n  return `#### ${elemText}  `\r\n};\r\n\r\nmodule.exports = H4;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h4/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h5/index.js":
/*!*******************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h5/index.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("const H5 = ( elemText = \"\") => {\r\n  return `##### ${elemText}  `\r\n};\r\n\r\nmodule.exports = H5;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h5/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/hr/index.js":
/*!*******************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/hr/index.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("const HR = () => {\r\n  return `---`\r\n};\r\n\r\nmodule.exports = HR;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/hr/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/index.js":
/*!****************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/index.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n  A : __webpack_require__(/*! ./a */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/a/index.js\"),\r\n  H1 : __webpack_require__(/*! ./h1 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h1/index.js\"),\r\n  H2 : __webpack_require__(/*! ./h2 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h2/index.js\"),\r\n  H3 : __webpack_require__(/*! ./h3 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h3/index.js\"),\r\n  H4 : __webpack_require__(/*! ./h4 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h4/index.js\"),\r\n  H5 : __webpack_require__(/*! ./h5 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h5/index.js\"),\r\n  P : __webpack_require__(/*! ./p */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/p/index.js\"),\r\n  UL : __webpack_require__(/*! ./ul */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/ul/index.js\"),\r\n  OL : __webpack_require__(/*! ./ol */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/ol/index.js\"),\r\n  HR : __webpack_require__(/*! ./hr */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/hr/index.js\"),\r\n  CODE : __webpack_require__(/*! ./code */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/code/index.js\"),\r\n  BOLD : __webpack_require__(/*! ./_bold */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/_bold/index.js\"),\r\n  ITALIC : __webpack_require__(/*! ./_italic */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/_italic/index.js\"),\r\n}\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/ol/index.js":
/*!*******************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/ol/index.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("const OL = (elemOL = []) => {\r\n  var helperNumber = 1;\r\n  var response = \"\";\r\n  console.log(typeof elemOL )\r\n  if (typeof elemOL === \"array\" || typeof elemOL === \"object\") {\r\n    \r\n  if (elemOL.length > 0) {\r\n    elemOL.forEach(item => {\r\n      response += `${helperNumber}. ${item}   `;\r\n      helperNumber++;\r\n    })\r\n  } else {\r\n    response = `WARNING :: 0 Items proveded for the ORDERED_LIST to print.`;\r\n  }\r\n  \r\n  } else {\r\n    response = `ERROR :: ORDERED_LIST needs array to be able to print.`;\r\n}\r\n  return response;\r\n};\r\n\r\nmodule.exports = OL;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/ol/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/p/index.js":
/*!******************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/p/index.js ***!
  \******************************************************************************/
/***/ ((module) => {

eval("const P = ( elemText = \"\") => {\r\n  return `${elemText}`\r\n};\r\n\r\nmodule.exports = P;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/p/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/ul/index.js":
/*!*******************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/ul/index.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("const UL = (elemOL = []) => {\r\n  var response = \"\";\r\n  console.log(typeof elemOL )\r\n  if (typeof elemOL === \"array\" || typeof elemOL === \"object\") {\r\n    \r\n  if (elemOL.length > 0) {\r\n    elemOL.forEach(item => {\r\n      response += `- ${item}   `;\r\n    })\r\n  } else {\r\n    response = `WARNING :: 0 Items proveded for the UNORDERED_LIST to print.`;\r\n  }\r\n  \r\n  } else {\r\n    response = `ERROR :: ORDERED_LIST needs array to be able to print.`;\r\n}\r\n  return response;\r\n};\r\n\r\nmodule.exports = UL;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/ul/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/index.js":
/*!*******************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/index.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\nmodule.exports = {\r\n  elements: __webpack_require__(/*! ./elements */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/index.js\"),\r\n  templates: __webpack_require__(/*! ./templates/templates_ARRAY */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/templates_ARRAY.js\")\r\n}\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_about_us_01/index.js":
/*!**********************************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_about_us_01/index.js ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const H3 = __webpack_require__(/*! ../../elements/h3 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h3/index.js\");\r\nconst H5 = __webpack_require__(/*! ../../elements/h5 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/h5/index.js\");\r\nconst P = __webpack_require__(/*! ../../elements/p */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/elements/p/index.js\");\r\n\r\n\r\nconst base_about_us_01 = {\r\n  name: \"base_about_us_01\",\r\n  view(section = { title : null, subtitle: null, text: null }) {\r\n    return H3(section.title) + H5(section.subtitle) + P(section.text) ;\r\n  },\r\n  disabled: false,\r\n  author: \"-v-\"\r\n}\r\n\r\n\r\nmodule.exports = base_about_us_01;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_about_us_01/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_hero_01/index.js":
/*!******************************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_hero_01/index.js ***!
  \******************************************************************************************/
/***/ ((module) => {

eval("const base_hero_01 = {\r\n  name: \"base_hero_01\",\r\n  view: (section = { title: null, subtitle: null, button: { do: null, text: null }, image:{url: \"#\",width:\"auto\",height:\"auto\",alt: null} }) => {\r\n    return `<div class=\"section_side\">\r\n                <h1>${section.title}</h1>\r\n                <h2>${section.subtitle}</h2>\r\n                <button onclick=\"${section.button.do}\">${ section.button.text }</button>\r\n              </div>\r\n              <div class=\"section_side\">\r\n                <img src=\"${section.image.url}\" width=\"${section.image.width}\" height=\"${section.image.height}\" alt=\"${section.image.alt}\"/>\r\n              </div>`;\r\n  },\r\n  css: () => {\r\n    return `<style>\r\n              .hero_main {\r\n                background: #101525;\r\n                color: white;\r\n              }\r\n            </style>`;\r\n  },\r\n  disabled: false,\r\n  author: \"-v-\"\r\n}\r\n\r\nmodule.exports = base_hero_01;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_hero_01/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_newsletter_01/index.js":
/*!************************************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_newsletter_01/index.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("const base_newsletter_01 = {\r\n  name: \"base_newsletter_01\",\r\n  view(section = { title : null, text: null }) {\r\n    return `<div class=\"section_side\">\r\n              <h3>${section.title}</h3>\r\n              <p>${section.text}</p>\r\n            </div>\r\n            <div class=\"section_side\">\r\n              <input type=\"text\"/>\r\n              <button />SignUp</button>\r\n            </div>`\r\n  },\r\n  css() {\r\n    return `<style>\r\n              .newsletter_main {\r\n                background: #152510;\r\n                color: white;\r\n              }\r\n            </style>`;\r\n  },\r\n  disabled: false,\r\n  author: \"-v-\"\r\n}\r\n\r\n\r\nmodule.exports = base_newsletter_01;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_newsletter_01/index.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/templates_ARRAY.js":
/*!***************************************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/templates_ARRAY.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst  base_hero_01 = __webpack_require__(/*! ./base_hero_01 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_hero_01/index.js\");\r\nconst  base_about_us_01 = __webpack_require__(/*! ./base_about_us_01 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_about_us_01/index.js\");\r\nconst  base_newsletter_01 = __webpack_require__(/*! ./base_newsletter_01 */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/base_newsletter_01/index.js\");\r\n\r\nmodule.exports = [base_about_us_01, base_hero_01, base_newsletter_01];\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/templates/templates_ARRAY.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_dom_printer/domPrinter.js":
/*!***************************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_dom_printer/domPrinter.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const vDomPrinter = {\r\n  HTML: __webpack_require__(/*! ./HTML */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/HTML/index.js\"),\r\n  MD: __webpack_require__(/*! ./MARKDOWN */ \"./SOURCE/FrontEnd/v_modules/v_dom_printer/MARKDOWN/index.js\"),\r\n\r\n  findByName(objName = null) {\r\n    var resp = false;\r\n    this.HTML.templates.forEach(item => {\r\n      //console.log(item);\r\n      if (objName == item.name) {\r\n        console.log(\"FOUND SECTION TEMPLATE\");\r\n        resp = item;\r\n      }\r\n    });\r\n    return resp\r\n  },\r\n\r\n  getTemplate(templateItem = null) {\r\n    var result = false;\r\n    if (templateItem.type !== null) {\r\n      result = this.findByName(templateItem.type);\r\n      result = result.view(templateItem.data);\r\n    } else {\r\n      console.warn(\"ERROR TYPE EMPTY\");\r\n      result = false;\r\n    }\r\n    return result;\r\n  },\r\n\r\n  getStyle(templateName = null) {\r\n    var result = false;\r\n    if (templateName !== null) {\r\n      result = this.findByName(templateName).css();\r\n    } else {\r\n      console.warn(\"ERROR TYPE EMPTY\");\r\n      result = false;\r\n    }\r\n    return result;\r\n  },\r\n  getOnLoad(templateItem = null) {\r\n    var result = false;\r\n    if (templateItem.type !== null) {\r\n      result = this.findByName(templateItem.type);\r\n      return result.onload;\r\n    } else {\r\n      console.warn(\"ERROR TYPE EMPTY\");\r\n      return false;\r\n    }\r\n  },\r\n}\r\n\r\nmodule.exports = vDomPrinter;\r\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_dom_printer/domPrinter.js?");

/***/ }),

/***/ "./SOURCE/FrontEnd/v_modules/v_svg_cursor/index.js":
/*!*********************************************************!*\
  !*** ./SOURCE/FrontEnd/v_modules/v_svg_cursor/index.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("const vSvgPointer =  {\n\n  config : {\n    id_string: \"vSvgPointer\",\n    debug: true\n  },\n  customCursor : null,\n\n  customCursorString: () => {\n    return `<svg id=\"${vSvgPointer.config.id_string}\" width=\"30px\" height=\"30px\" viewBox=\"0 0 20 20\" class=\"svg-2 selected\">\n                            <defs>\n                              <radialGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n                                <stop offset=\"10%\" style=\"stop-color:#03A9F4;stop-opacity:1\"></stop>\n                                <stop offset=\"100%\" style=\"stop-color:rgb(0,0,0);stop-opacity:0\"></stop>\n                              </radialGradient>\n                              <filter id=\"f1\" x=\"-2\" y=\"-2\" width=\"400%\" height=\"400%\">\n                                <feOffset result=\"offOut\" in=\"SourceGraphic\" dx=\"0\" dy=\"0\"></feOffset>\n                                <feGaussianBlur result=\"blurOut\" in=\"offOut\" stdDeviation=\"1\"></feGaussianBlur>\n                                <feBlend in=\"SourceGraphic\" in2=\"blurOut\" mode=\"normal\"></feBlend>\n                              </filter>\n                            </defs>\n                            <path class=\"outlineBack\" d=\"M1,1 L8,15 C 8 15, 18 18, 15 8 L15,8 L1,1\" filter=\"url(#f1)\"></path>\n                            <path class=\"outline\" d=\"M1,1 L8,15 C 8 15, 18 18, 15 8 L15,8 L1,1\"></path>\n                            <ellipse stroke-width=\"0\" ry=\"3\" rx=\"3\" id=\"svg_14\" cy=\"12\" cx=\"12\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke=\"#000\" fill=\"url(#grad1)\"></ellipse>\n                            <ellipse stroke-width=\"0.5\" ry=\"3\" rx=\"3\" id=\"svg_13\" cy=\"12\" cx=\"12\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke=\"#000\" fill=\"none\" stroke-dasharray=\"8,1,2,1,2,1\"></ellipse>\n                            </svg>`;\n  },\n  mouseClickStart: () => {\n    vSvgPointer.customCursor.classList.add('clicking');\n  },\n\n  mouseClickStop: () => {\n    vSvgPointer.customCursor.classList.remove('clicking');\n  },\n\n  mouseMove: (e) => {\n    console.log(e.clientX + \" \" + e.clientY);\n     vSvgPointer.customCursor.style.top = (e.clientY + window.scrollY || window.pageYOffset ) + 'px';\n     vSvgPointer.customCursor.style.left = e.clientX + 'px';\n  },\n\n  init: () => {\n    try {\n      console.log(\"ADDING SVG CURSOR\")\n      document.documentElement.insertAdjacentHTML(\"beforeend\", vSvgPointer.customCursorString());\n      vSvgPointer.customCursor = document.getElementById(vSvgPointer.config.id_string);\n  \n      window.addEventListener(\"mousemove\",  vSvgPointer.mouseMove);\n      window.addEventListener(\"mousedown\", vSvgPointer.mouseClickStart);\n      window.addEventListener(\"mouseup\", vSvgPointer.mouseClickStop);\n      return true;\n    } catch (error) {\n      console.log(error);\n      return error;\n    }\n  },\n\n};\n\n\n\nmodule.exports = vSvgPointer;\n\n\n//# sourceURL=webpack://v_app_demo/./SOURCE/FrontEnd/v_modules/v_svg_cursor/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./SOURCE/FrontEnd/pages/homepage.js");
/******/ 	
/******/ })()
;