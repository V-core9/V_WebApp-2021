
const pageData = require('./homepage_config');
const V_DisplayDriver = require("../v_modules/v_display_driver/displayDriver");
const testScenarion01 = require('../../TestEnd/V_Doctor/01_base_scenario.test');

window.onload = () => {
  V_DisplayDriver.page = pageData;
  V_DisplayDriver.loadPage();
}

testScenarion01();
