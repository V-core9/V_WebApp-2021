
const pageData = require('./homepage_config');
const V_App = require("../v_modules/");


console.log(V_App);

window.onload = () => {
  V_App.vSvgPointer.init();
  V_App.vDisplayDriver.page = pageData;
  V_App.vDisplayDriver.loadPage();
}

