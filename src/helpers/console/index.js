/*jshint esversion: 8 */
const vCfg = require("../../../__vCfg");

const printLog = vCfg.printConsole === true ? true : false;

const vCon = {
  mode: "default", //-> choose vCon running mode >>  <default> :: normal running mode ||
  data: {
    logList: [],
  },
  log(msg = "Missing Data", type = null) {
    if (this.log) {
      switch (type) {
        case "error":
          if (printLog) console.warn(msg);
          break;

        case "warn":
          if (printLog) console.warn(msg);
          break;

        case "info":
          if (printLog) console.info(msg);
          break;

        default:
          if (printLog) console.log(msg);
          break;
      }
    }
  },

  info(msg = null) {
    this.log(msg, "info");
  },

  warn(msg = null) {
    this.log(msg, "warn");
  },

  error(msg = null) {
    this.log(msg, "error");
  },

  //-CLEAR-------
  clear() {
    try {
      console.clear();
      return true;
    } catch (error) {
      if (printLog) console.log(error);
      if (printLog) console.trace();
      return error;
    }
  },

  //-COUNT-------
  count(label = null) {
    if (printLog) console.count(label);
  },
  countReset(label = null) {
    if (printLog) console.countReset(label);
  },

  dir(object = {}) {
    if (printLog) console.dir(object);
  },

  //-TRACE-------
  trace() {
    if (printLog) console.trace();
  },

  //-GROUPS-------
  group(label = null) {
    if (printLog) console.group(label);
  },
  groupEnd(label = null) {
    if (printLog) console.groupEnd(label);
  },
  groupCollapsed(label = null) {
    if (printLog) console.groupCollapsed(label);
  },

  //-TABLE-------
  table(label = null) {
    if (printLog) console.table(label);
  },

  //-TIME-------
  time(label = null) {
    if (printLog) console.time(label);
  },
  timeEnd(label = null) {
    if (printLog) console.timeEnd(label);
  },
  timeLog(label = null) {
    if (printLog) console.timeLog(label);
  },
};

module.exports = vCon;
