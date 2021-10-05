
let V_WebDoctor = require("./v_doctor");
const dev_mode = true;
module.exports = () => {
  V_WebDoctor.do.tsMark("init");

  var evt = document.createEvent('Event');
  evt.initEvent('load', false, false);
  window.dispatchEvent(evt);
  if (dev_mode) console.log("window.dispatchEvent(" + evt.name + ");");


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
        name: "mainMenuOpen",
        do: function () {
          document.querySelector("#main_header_main-menu").click();
        }
      },
      {
        name: "cookie_alert_confirm",
        do: function () {
          document.querySelector("#cookie_alert_confirm").click();
        }
      },
      {
        name: "triggerContactModal",
        do: function () {
          document.querySelector(".triggerContactModal").click();
        }
      },
      {
        name: "closeContactModal",
        do: function () {
          document.querySelector(".closeContactModal").click();
        }
      },
      {
        name: "home-close-button",
        do: function () {
          document.querySelector("nav.side_menu .home-close-button").click();
        }
      },
      {
        name: "glide__arrow--right scroll",
        do: function () {
          var arrowRight = document.querySelector(".glide__arrow--right")
          var elemScrollCenter = (((arrowRight.getBoundingClientRect().bottom - arrowRight.getBoundingClientRect().top) / 2) + arrowRight.getBoundingClientRect().top - (screen.height / 2));
          window.scrollTo({ top: elemScrollCenter, left: 0, behavior: 'smooth' });
        }
      },
      {
        name: "glide__arrow--right 1",
        do: function () {
          document.querySelector(".glide__arrow--right").click();
        }
      },
      {
        name: "glide__arrow--right 2",
        do: function () {
          document.querySelector(".glide__arrow--right").click();
        }
      },
      {
        name: "glide__arrow--right 3",
        do: function () {
          document.querySelector(".glide__arrow--right").click();
        }
      },
      {
        name: "glide__arrow--left yes",
        do: function () {
          document.querySelector(".glide__arrow--left").click();
        }
      },
      {
        name: "MORE glide__arrow--left",
        do: function () {
          document.querySelector(".glide__arrow--left").click();
        }
      },
      {
        name: "glide__arrow--left Clicking",
        do: function () {
          document.querySelector(".glide__arrow--left").click();
        }
      },
      {
        name: "ScrollingToButton",
        do: function () {
          var elem = document.querySelector(".proceed_consultation");
          var proceed_consultationElemCent = ((elem.getBoundingClientRect().bottom - elem.getBoundingClientRect().top) / 2) + elem.getBoundingClientRect().top - (screen.height / 2);
          window.scrollTo({ top: proceed_consultationElemCent, left: 0, behavior: 'smooth' });
        }
      },
      {
        name: "proceed_consultationButtonClick",
        do: function () {
          document.querySelector(".proceed_consultation").click();
        }
      },
      {
        name: "mainMenuOpen",
        do: function () {
          document.querySelector(".swal2-popup .swal2-styled.swal2-confirm").click();
        }
      },
      {
        name: "input#zip",
        do: function () {
          document.querySelector("input#zip").value = 10014;
        }
      },
      {
        name: "input#city",
        do: function () {
          var e = new Event("change");
          var element = document.querySelector('input#zip');
          element.dispatchEvent(e);
        }
      },
      {
        name: "input#city",
        do: function () {
          document.querySelector("input#city").focus();
        }
      },
      {
        name: "input#city",
        do: function () {
          document.querySelector("input#city").value = "New York City";
        }
      },
      {
        name: "input#zip",
        do: function () {
          document.querySelector(".swal2-popup .swal2-styled.swal2-cancel").click();
        }
      },
      {
        name: "label[data-position='6']-CLICK",
        do: function () {
          document.querySelector('label[data-position="1"]').click();
        }
      },
      {
        name: "label[data-position='2']-CLICK",
        do: function () {
          document.querySelector('label[data-position="3"]').click();
        }
      },
      {
        name: "label[data-position='3']-CLICK",
        do: function () {
          document.querySelector('label[data-position="6"]').click();
        }
      },
      {
        name: "input#city",
        do: function () {
          document.querySelector("#medical_measure").focus();
        }
      },
      {
        name: "input#city",
        do: function () {
          document.querySelector("#medical_measure").value = "SOME RANDOM TEXT TO FILL IT INTO SPACE";
        }
      },
      {
        name: "#street",
        do: function () {
          document.querySelector("#street").focus();
        }
      },
      {
        name: "#street",
        do: function () {
          document.querySelector("#street").value = "Street ONE 1b";
        }
      },
      {
        name: "#phone_number",
        do: function () {
          document.querySelector("#phone_number").focus();

        }
      },
      {
        name: "#phone_number",
        do: function () {
          document.querySelector("#phone_number").value = "1111111111";

          var e = new Event("input");
          var element = document.querySelector('#phone_number');
          element.dispatchEvent(e);
        }
      },
      {
        name: "#first_name",
        do: function () {
          document.querySelector("#first_name").focus();
        }
      },
      {
        name: "#first_name",
        do: function () {
          document.querySelector("#first_name").value = "first_name1111111";
        }
      },
      {
        name: "#middle_name",
        do: function () {
          document.querySelector("#middle_name").focus();
        }
      },
      {
        name: "#middle_name",
        do: function () {
          document.querySelector("#middle_name").value = "middle_name2222222";
        }
      },
      {
        name: "#last_name",
        do: function () {
          document.querySelector("#last_name").focus();
        }
      },
      {
        name: "#last_name",
        do: function () {
          document.querySelector("#last_name").value = "last_name33333333";
        }
      },
      {
        name: "iCheck-helper",
        do: function () {
          document.querySelector(".iCheck-helper").click();
        }
      },
      {
        name: "terms_check_wrapper",
        do: function () {
          document.querySelector("#terms_check_wrapper > label.contain").click();
        }
      },
      {
        name: "#name_healthProvider",
        do: function () {
          document.querySelector("#name_healthProvider").focus();
        }
      },
      {
        name: "#name_healthProvider",
        do: function () {
          document.querySelector("#name_healthProvider").value = "YEAAAAAAAAAAAAA";
        }
      },
      {
        name: "#phone_healthProvider",
        do: function () {
          document.querySelector("#phone_healthProvider").focus();
        }
      },
      {
        name: "#phone_healthProvider",
        do: function () {
          document.querySelector("#phone_healthProvider").value = "2222222222";

          var e = new Event("input");
          var element = document.querySelector('#phone_healthProvider');
          element.dispatchEvent(e);
        }
      },
      {
        name: "#dob_med",
        do: function () {
          document.querySelector("#dob_med").focus();
        }
      },
      {
        name: "#dob_med",
        do: function () {
          document.querySelector("#dob_med").value = "11111987";

          var e = new Event("input");
          var element = document.querySelector('#dob_med');
          element.dispatchEvent(e);
        }
      },
      {
        name: "ScrollingToButton",
        do: function () {
          var elem = document.querySelector(".proceed_consultation");
          var proceed_consultationElemCent = ((elem.getBoundingClientRect().bottom - elem.getBoundingClientRect().top) / 2) + elem.getBoundingClientRect().top - (screen.height / 2);
          window.scrollTo({ top: proceed_consultationElemCent, left: 0, behavior: 'smooth' });
        }
      },
      {
        name: "proceed_consultationButtonClick",
        do: function () {
          document.querySelector(".termsOfUseTrigger").click();
        }
      },
      {
        name: ".qmc_modal .modalOverlay",
        do: function () {
          document.querySelector(".qmc_modal .modalOverlay").click();
        }
      },
      {
        name: "proceed_consultationButtonClick",
        do: function () {
          document.querySelector(".privacyPolicyTrigger ").click();
        }
      },
      {
        name: ".qmc_modal .modalOverlay",
        do: function () {
          document.querySelector(".qmc_modal .modal_footer .close-button").click();
        }
      },
      {
        name: 'a[data-target="#statesModal"]',
        do: function () {
          document.querySelector('a[data-target="#statesModal"]').click();
        }
      },
      {
        name: "openWaitList",
        do: function () {
          document.querySelector(".openWaitList").click();
        }
      },
      {
        name: 'input[name="wemail"]',
        do: function () {
          document.querySelector('input[name="wemail"]').value = "slavko.instacraft@gmail.com";

          var e = new Event("input");
          var element = document.querySelector('input[name="wemail"]');
          element.dispatchEvent(e);
        }
      },
      {
        name: "save-wait-list",
        do: function () {
          document.querySelector("#save-wait-list").click();
        }
      },
      {
        name: "closeModalBtn",
        do: function () {
          document.querySelector(".closeModalBtn").click();
        }
      },
      {
        name: "proceed_consultationButtonClick",
        do: function () {
          document.querySelector(".proceed_consultation").click();
        }
      },
      {
        name: ".swal2-confirm",
        do: function () {
          document.querySelector(".swal2-confirm").click();
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
