
class PerformanceMark {
  constructor(name = "_empty_mark_name_", description = "_empty_mark_description_space_") {
    this.timestamp = performance.now();
    this.name = name;
    this.description = description;
  }
};

module.exports = PerformanceMark;
