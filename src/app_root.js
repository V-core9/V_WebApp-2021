const vApp = {
  exit() {
    console.log("ROOOTS BLOODY ROOTS");
  },
  addEvents() {
    console.log(">> vApp.addEvents()");
    console.log("<< vApp.addEvents()");
  },
  init() {
    console.log(">> vApp.init()");
    this.addEvents();
    console.log("<< vApp.init()");
  },
};

vApp.init();
