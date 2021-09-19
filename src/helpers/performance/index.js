/*jshint esversion: 8 */
//const { performance } = require("perf_hooks");

const vCon = require("../console/");

const vPerf = {
  memory: performance.memory,
  onresourcetimingbufferfull: performance.onresourcetimingbufferfull,
  timeOrigin: performance.timeOrigin,
  clearMarks(name = null) {
    try {
      if (name === null) {
        performance.clearMarks();
        return false;
      }
      performance.clearMarks(name);
      vCon.log("Cleared Marks");
    } catch (err) {
      vCon.error(err);
      return err;
    }
  },
  clearMeasures(name = null) {
    try {
      if (name === null) {
        performance.clearMeasures();
        return false;
      }
      performance.clearMeasures(name);
      vCon.log("Cleared Measures");
      return true;
    } catch (err) {
      vCon.error(err);
      return err;
    }
  },
  clearResourceTimings() {
    try {
      performance.clearResourceTimings();
      return entriesHelper;
    } catch (err) {
      vCon.error(err);
      return err;
    }
  },
  getEntries() {
    try {
      const entriesHelper = performance.getEntries();
      vCon.log(entriesHelper);
      return entriesHelper;
    } catch (err) {
      vCon.error(err);
      return err;
    }
  },
  getEntriesByName(name, type = null) {
    try {
      if (type !== null) {
        return performance.getEntriesByName(name, type);
      }
      return performance.getEntriesByName(name);
    } catch (err) {
      vCon.error(err);
      return err;
    }
  },
  getEntriesByType(type = "measure") {
    try {
      return performance.getEntriesByType(type);
    } catch (err) {
      return err;
    }
  },
  mark(name) {
    try {
      performance.mark(name);
      return true;
    } catch (err) {
      vCon.log(err);
      vCon.trace();
      return err;
    }
  },
  measure(name, startMark = null, endMark = null) {
    try {
      if (startMark !== null && endMark !== null)
        return performance.measure(name, startMark, endMark);

      if (startMark !== null) return performance.measure(name, startMark);

      if (endMark !== null)
        return performance.measure(name, undefined, endMark);
    } catch (err) {
      vCon.error(err);
      return err;
    }
  },
  now() {
    return performance.now();
  },
  setResourceTimingBufferSize(maxSize = 150) {
    try {
      return performance.setResourceTimingBufferSize(maxSize);
    } catch (err) {
      vCon.error(err);
      return err;
    }
  },
  LargestContentfulPaint() {
    try {
      let lcp;

      const po = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log(lastEntry.toJSON());
      });

      po.observe({ type: "largest-contentful-paint", buffered: true });
    } catch (err) {
      // Do nothing if the browser doesn't support this API.
    }
  },
  cumulativeLayoutShiftScore() {
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
  },
  toJSON() {
    vCon.log(JSON.stringify(performance.toJSON()));
    return performance.toJSON();
  },
  buffer_full(event) {
    vCon.log("WARNING: Resource Timing Buffer is FULL!");
    performance.setResourceTimingBufferSize(200);
  },
  init() {
    // Set a callback if the resource buffer becomes filled
    performance.onresourcetimingbufferfull = this.buffer_full;
  },
};

vPerf.init();

module.exports = vPerf;
