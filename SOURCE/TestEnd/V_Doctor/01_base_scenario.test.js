
let V_WebDoctor = require("./v_doctor");
const dev_mode = true;
module.exports = () => {
  V_WebDoctor.do.tsMark("init");

  //var evt = document.createEvent('Event');
  //evt.initEvent('load', false, false);
  //window.dispatchEvent(evt);
  //if (dev_mode) console.log("window.dispatchEvent(" + evt.name + ");");


  document.onvisibilitychange = function () {
    if (dev_mode) console.log("Visibility of page has changed!");
  };

  window.addEventListener('load', (event) => {
    if (dev_mode) console.log("window.addEventListener('load', (event) => { load }");
  });

  document.addEventListener('readystatechange', (event) => {
    if (dev_mode) console.log("document.addEventListener('readystatechange', (event) => { " + `readystate: ${document.readyState}` + " }");
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    if (dev_mode) console.log("document.addEventListener('DOMContentLoaded', (event) => { DOMContentLoaded }");
    if (dev_mode) console.log("Visibility of page has changed!");
  });



  if (dev_mode) console.log(V_WebDoctor);
  V_WebDoctor.do.logFunctionsList();

  (() => {
    const commandsListPage = [
      {
        name: "mainButtonClick",
        do: function () {
          document.querySelector("#mainButtonClick").click();
        }
      },

      {
        name: "ScrollingToButton",
        do: function () {
          var numberHelper = document.querySelectorAll(".page_section");
          numberHelper = numberHelper.length;
          for (let i = 0; i < numberHelper; i++) {
            setTimeout(() => {
              window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
            }, i * 500);
          }
        }
      },

      {
        name: "mainButtonClickALT",
        do: function () {
          document.querySelector("#mainButtonClickALT").click();
        }
      },

      {
        name: "Log finish",
        do: function () {
          console.log("FINISHED!");
          console.log(V_WebDoctor.data.registeredFunctions);
          V_WebDoctor.data.registeredFunctions.forEach(funcItem => {
            if (funcItem.used !== true) {
              console.log(funcItem);
            }
          });
        }
      },
    ]

    setTimeout(() => {
      for (let i = 0; i < commandsListPage.length; i++) {
        setTimeout(() => {
          commandsListPage[i].do();
        }, (1000 * i));
      }
    }, 5000);

  })();

}
