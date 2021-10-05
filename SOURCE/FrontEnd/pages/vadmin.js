
const pageData = require('./vadmin_config');
const V_DisplayDriver = require("../v_modules/v_display_driver/displayDriver");

window.onload = () => {
  V_DisplayDriver.page = pageData;
  V_DisplayDriver.loadPage();
}
