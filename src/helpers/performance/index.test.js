/*jshint esversion: 8 */
const vPerf = require(".");
const vCon = require("../console/");

const markerNameA = "example-marker-a";
const markerNameB = "example-marker-b";

const perfTesting = () => {
  // Run some nested timeouts, and create a PerformanceMark for each.
  vPerf.mark(markerNameA);
  setTimeout(function () {
    vPerf.mark(markerNameB);
    setTimeout(function () {
      // Create a variety of measurements.
      vPerf.measure("measure a to b", markerNameA, markerNameB);
      vPerf.measure("measure a to now", markerNameA);
      vPerf.measure(
        "measure from navigation start to b",
        undefined,
        markerNameB
      );
      vPerf.measure("measure from navigation start to now");

      // Pull out all of the measurements.
      vCon.log(vPerf.getEntriesByType());

      // Finally, clean up the entries.
      vPerf.clearMarks();
      vPerf.clearMeasures();
    }, 1000);
  }, 1000);
};

module.exports = perfTesting;
