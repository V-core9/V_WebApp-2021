const vDomPrinter = require("./index");

console.log(vDomPrinter.elements);


console.log(vDomPrinter.elements.A());
console.log(vDomPrinter.elements.H1());
console.log(vDomPrinter.elements.H2());
console.log(vDomPrinter.elements.H3());
console.log(vDomPrinter.elements.H4());
console.log(vDomPrinter.elements.H5());
console.log(vDomPrinter.elements.P());


console.log(vDomPrinter.elements.A("The file will have its original line endings in your working directory"));
console.log(vDomPrinter.elements.H1("Delta compression using up to 16 threads"));
console.log(vDomPrinter.elements.H2("Writing objects: 100% (4/4), 1.17 KiB | 1.17 MiB/s, done."));
console.log(vDomPrinter.elements.H3("vvvvvvvvv/FrontEnd/DOM/elements/index.test.js"));
console.log(vDomPrinter.elements.H4("Total 4 (delta 1), reused 0 (delta 0), pack-reused 0"));
console.log(vDomPrinter.elements.H5("remote: Resolving deltas: 100% (1/1), completed with 1 local object."));
console.log(vDomPrinter.elements.P("767/   /DOM/elements/index.test.js"));




console.log(vDomPrinter.templates);

console.log(vDomPrinter.templates.base_hero_01.html());
console.log(vDomPrinter.templates.base_newsletter_01.html());


console.log(vDomPrinter.templates.base_hero_01.css());
console.log(vDomPrinter.templates.base_newsletter_01.css());
