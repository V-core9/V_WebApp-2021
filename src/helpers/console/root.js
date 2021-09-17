const Vls = {
  mode: "dev",
  printLog: null,
  data: {
    logList: [],
  },
  shouldLog() {
    this.log = this.printLog === "dev" ? true : false;
    return this.log;
  },
  log(msg = "Missing Data", type = null) {
    if (this.log) {
      switch (type) {
        case "error":
          console.error(msg);
          break;

        case "warn":
          console.warn(msg);
          break;

        case "info":
          console.info(msg);
          break;

        default:
          console.log(msg);
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
  clear() {
    try {
      console.clear();
      return true;
    } catch (error) {
      console.log(error);
      console.trace();
      return error;
    }
  },
  count(label = null) {
    console.count(label);
  },
  countReset(label = null) {
    console.countReset(label);
  },
  dir(object = {}) {
    console.dir(object);
  },
  trace() {
    console.trace();
  },
  group(label = null) {
    console.group(label);
  },
  groupEnd(label = null) {
    console.groupEnd(label);
  },
  groupCollapsed(label = null) {
    console.groupCollapsed(label);
  },
  table(label = null) {
    console.table(label);
  },
  time(label = null) {
    console.time(label);
  },
  timeEnd(label = null) {
    console.timeEnd(label);
  },
  timeLog(label = null) {
    console.timeLog(label);
  },
};

module.exports = Vls;
