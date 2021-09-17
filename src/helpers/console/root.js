const Vls = {
  mode: "dev",
  data: {
    logList: [],
  },
  shouldLog() {
    if (this.mode === "dev") return true;
    return false;
  },
  log(msg = "Missing Data") {
    if (this.shouldLog()) console.log(msg);
  },
  info(msg = "Missing Data") {
    if (this.shouldLog()) console.info(msg);
  },
  warn(msg = "Missing Data") {
    if (this.shouldLog()) console.warn(msg);
  },
  error(msg = "Missing Data") {
    if (this.shouldLog()) console.error(msg);
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
