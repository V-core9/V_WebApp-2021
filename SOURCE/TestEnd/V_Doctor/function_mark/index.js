class FunctionMark {
  constructor(name = null) {
    if (name === null) {
      return false;
    }
    this.name = name;
    this.used = false;
    this.timeOfFirstCall = null;
    this.registerTime = performance.now();
    return true;
  }
};

module.exports = FunctionMark;
