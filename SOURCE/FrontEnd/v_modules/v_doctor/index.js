let PerformanceMark = require('./performance_mark');
let FunctionMark = require('./function_mark');

const vDoctor = {

  _this: {},
  config: {
    _this: {},
    devMode: true,
  },

  data: {
    _this: {},
    functionsList: [],
    performanceMarks: [],
    registeredFunctions: [],
  },

  do: {
    _this: {},

    init: function (thisIN) {
      this._this = thisIN;
    },
    getFunctionsList: function () {
      console.log(this);

      this._this.data.functionsList = [];
      var HelperList = Object.getOwnPropertyNames(window);
      console.log(HelperList);
      this._this.data.functionsList = HelperList;
      if (this._this.data.functionsList.length > 0) {
        return this._this.data.functionsList.length;
      } else {
        return false;
      }
    },
    logFunctionsList: function () {
      console.log("[ SO_Method call =>  vDoctor.do.logFunctionsList() ]");
      if (this._this.data.functionsList.length > 0) {
        console.log(JSON.stringify(this._this.data.functionsList));
        console.log(
          "[ EO_Method call =>  vDoctor.do.logFunctionsList() | Msg => OK : Data was already available. ] ]"
        );
        return true;
      } else {
        if (this.getFunctionsList() != false) {
          console.log(this._this.data.functionsList.length);
          console.log(
            "[ EO_Method call =>  vDoctor.do.logFunctionsList() | Msg => OK : Data was loaded before print. ]"
          );
          return true;
        } else {
          console.warn("");
          console.trace();
          console.log(
            "[ EO_Method call =>  vDoctor.do.logFunctionsList() | Msg => ERROR : logFunctionsList could not load any. ]"
          );
          return false;
        }
      }
    },
    tsMark: function (name, description) {
      var oldNum = this._this.data.functionsList.length;

      let performanceMark = new PerformanceMark(name, description);
      this._this.data.performanceMarks.push(performanceMark);

      if (this._this.data.performanceMarks.length > oldNum) {
        return true;
      } else {
        return false;
      }
    },
    logAllMarks: function () {
      if (this.data.performanceMarks.length > 0) {
        console.log(this.data.performanceMarks.length);
        return true;
      } else {
        console.log("No performance marks");
        return false;
      }
    },

    registerFunction: function (name = null) {
      if (name === null) {
        console.warn("Can not register a function without a name.");
        return false;
      } else {
        console.warn("Registering function named: " + name);
        let newFunctionObject = new FunctionMark(name);
        this._this.data.registeredFunctions.push(newFunctionObject);
        return true;
      }
    },

    triggered: function (name = null, tryToRegister = true) {
      console.log("Triggers -> " + name);
      var foundIt = false;

      this._this.data.registeredFunctions.forEach((regFunc) => {
        if (regFunc.name === name) {
          if (regFunc.used !== true) {
            regFunc.used = true;
            regFunc.timeOfFirstCall = performance.now();
          }
          foundIt = true;
        }
      });

      if (foundIt) {
        return true;
      } else {
        console.warn("vDoctor MSG:: Function triggered could not be found. registering and triggering now.");
        if (tryToRegister) {
          this.registerFunction(name);
          this.triggered(name, false);
        } else {
          return false;
        }
      }
    },
  },

  init: function () {
    this._this = this;
    this.do.init(this);
    this.data._this = this;
    this.config._this = this;
  },

};

vDoctor.init();

module.exports = vDoctor;
