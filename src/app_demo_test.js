/*jshint esversion: 8 */
const vCfg = require("../__vCfg");
const vCon = require("./helpers/console/");

vCon.log("APP STARTED!");

vCon.log(vCfg);

vCon.log("\n+-----------------------------------+\nvCon:\n");
vCon.log(vCon);

const { Vtl } = require("./helpers/history/");

vCon.log("\n+-----------------------------------+\nVtl:\n");
vCon.log(Vtl);

const VfdTest = require("./helpers/form_data/index.test");

vCon.log("\n+-----------------------------------+\nVfdTest:\n");
vCon.log(VfdTest());

const perfTesting = require("./helpers/performance/index.test");

vCon.log("\n+-----------------------------------+\nperfTesting:\n");
vCon.log(perfTesting());

const [vNavTest, vNavTest2] = require("./helpers/navigator/index.test");

vCon.log("\n+-----------------------------------+\nvNavTest:\n");
vCon.log(vNavTest());

const Vnav = require("./helpers/navigator/");

vCon.log("\n+-----------------------------------+\nVnav:\n");
vCon.log(Vnav);

vCon.log("\n+-----------------------------------+\nvNavTest2:\n");
vCon.log(vNavTest2);

const perfData = window.performance.timing;

const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
vCon.info("pageLoadTime  >>   " + pageLoadTime);

const connectTime = perfData.responseEnd - perfData.requestStart;
vCon.info("connectTime  >>   " + connectTime);

const renderTime = perfData.domComplete - perfData.domLoading;
vCon.info("renderTime  >>   " + renderTime);

// Catch errors since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
  let cumulativeLayoutShiftScore = 0;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Only count layout shifts without recent user input.
      if (!entry.hadRecentInput) {
        cumulativeLayoutShiftScore += entry.value;
      }
    }
  });

  observer.observe({ type: "layout-shift", buffered: true });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      // Force any pending records to be dispatched.
      observer.takeRecords();
      observer.disconnect();

      console.log("CLS:", cumulativeLayoutShiftScore);
    }
  });
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}

// Let's check if the browser supports notifications
if (!("Notification" in window)) {
  alert("This browser does not support desktop notification");
}

// Let's check whether notification permissions have already been granted
else if (Notification.permission === "granted") {
  // If it's okay let's create a notification
  var notification = new Notification("Hi there!");
}

// Otherwise, we need to ask the user for permission
else if (Notification.permission !== "denied") {
  Notification.requestPermission().then(function (permission) {
    // If the user accepts, let's create a notification
    if (permission === "granted") {
      var notification = new Notification("Hi there!");
    }
  });
}

// At last, if the user has denied notifications, and you
// want to be respectful there is no need to bother them any more.
