const vDomPrinter = {
  elements: require("./elements"),
  templates: require("./templates/templates_ARRAY"),

  findByName(templateObject = null) {
    var resp = false;
    this.templates.forEach(item => {
      if (templateObject.name == item.name) {
        console.log("FOUND SECTION TEMPLATE");
        resp = item;
      }
    });
    return resp
  },

  returnTemplate(templateItem = null) {
    var result = false;
    if (templateItem !== null) {
      result = findByName(templateItem.name).view(templateObject);
    } else {
      console.warn("ERROR TYPE EMPTY");
      result = false;
    }
    return result;
  },

  getStyle(templateName = null) {
    var result = false;
    if (templateName !== null) {
      result = findByName(templateName).paint();
    } else {
      console.warn("ERROR TYPE EMPTY");
      result = false;
    }
    return result;
  }
}

module.exports = vDomPrinter;
