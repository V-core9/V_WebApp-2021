const mkElems = require("./index");

console.log(mkElems.A());
console.log(mkElems.H1());
console.log(mkElems.H2());
console.log(mkElems.H3());
console.log(mkElems.H4());
console.log(mkElems.H5());
console.log(mkElems.P());


console.log(mkElems.A("ssss link text", "FrontEnd/DOM/MARKDOWN/elements/index.test.js"));
console.log(mkElems.H1("src/FrontEnd/DOM/MARKDOWN/elements/index.test.js"));
console.log(mkElems.H2("SOURCE/FrontEnd/DOM/MARKDOWN/elements/index.test.js"));
console.log(mkElems.H3("vvvvvvvvv/FrontEnd/DOM/MARKDOWN/elements/index.test.js"));
console.log(mkElems.H4("zxc/FrontEnd/DOM/MARKDOWN/elements/index.test.js"));
console.log(mkElems.H5("123/FrontEnd/DOM/MARKDOWN/elements/index.test.js"));
console.log(mkElems.P("767/FrontEnd/DOM/MARKDOWN/elements/index.test.js"));
