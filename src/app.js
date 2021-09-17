/*jshint esversion: 8 */
const { Vls } = require("./helpers/console/");

Vls.log("APP STARTED!");

Vls.log("\n+-----------------------------------+\nVls:\n");
Vls.log(Vls);

const { Vtl } = require("./helpers/history/");

Vls.log("\n+-----------------------------------+\nVtl:\n");
Vls.log(Vtl);

const VfdTest = require("./helpers/form_data/index.test");

Vls.log("\n+-----------------------------------+\nVfdTest:\n");
Vls.log(VfdTest());

const perfTesting = require("./helpers/performance/index.test");

Vls.log("\n+-----------------------------------+\nperfTesting:\n");
Vls.log(perfTesting());

const [vNavTest, vNavTest2] = require("./helpers/navigator/index.test");

Vls.log("\n+-----------------------------------+\nvNavTest:\n");
Vls.log(vNavTest());

const Vnav = require("./helpers/navigator/");

Vls.log("\n+-----------------------------------+\nVnav:\n");
Vls.log(Vnav);

Vls.log("\n+-----------------------------------+\nvNavTest2:\n");
Vls.log(vNavTest2);

const perfData = window.performance.timing;

const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
Vls.info(pageLoadTime);

const connectTime = perfData.responseEnd - perfData.requestStart;
Vls.info(connectTime);

const renderTime = perfData.domComplete - perfData.domLoading;
Vls.info(renderTime);
