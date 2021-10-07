const vDomPrinter = {
  HTML: require("./HTML"),
  MD: require("./MARKDOWN"),

  findByName(objName = null) {
    var resp = false;
    this.HTML.templates.forEach(item => {
      //console.log(item);
      if (objName == item.name) {
        //console.log("FOUND SECTION TEMPLATE");
        resp = item;
      }
    });
    return resp
  },

  getTemplate(templateItem = null) {
    var result = false;
    if (templateItem.type !== null) {
      result = this.findByName(templateItem.type);
      result = result.view(templateItem.data);
    } else {
      //console.warn("ERROR TYPE EMPTY");
      result = false;
    }
    return result;
  },

  getStyle(templateName = null) {
    var result = false;
    if (templateName !== null) {
      result = this.findByName(templateName).css();
    } else {
      console.warn("ERROR TYPE EMPTY");
      result = false;
    }
    return result;
  },
  getOnLoad(templateItem = null) {
    var result = false;
    if (templateItem.type !== null) {
      result = this.findByName(templateItem.type);
      return result.onload;
    } else {
      console.warn("ERROR TYPE EMPTY");
      return false;
    }
  },
}

module.exports = vDomPrinter;
