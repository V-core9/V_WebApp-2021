const vDomPrinter = require("./index_array");

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





console.log(vDomPrinter.templates.length);



// TEMPLATES __ BASE_ABOUT_US_01 >>
//[o> How to use it ?? ____>>>
var BAU_01 = {
  title: "Some random text for title!!!",
  subtitle: "more crappy text to fill it in",
  text: "aasind o soias inas dmpam sdp oamsp dmaspm ods"
}

// TEMPLATES __ BASE_HERO_01 >>
//[o> How to use it ?? ____>>>
var BH_01 = {
  title: "asind o soias inas dmpam sdp oamsp dm",
  subtitle: "more crappy text to fill it",
  button: {
    text: "CLICK ME",
    do: "YEAAA",
  },
  image: {
    url: "/logo.png",
    width: 125,
    height: 200,
    alt: "VERY NICE LOGO YEAAA!!!!",
  },
}

// TEMPLATES __ BASE_NEWSLETTER_01 >>
//[o> How to use it ?? ____>>>
var BNL_01 = {
  title: "Some NEWSLETTER  for title!!!",
  text: "aasind o soias inas dmpam sdp oamsp dmaspm ods"
}
//---------------------------------------------------------------

vDomPrinter.templates.forEach(item => {
  console.log(item);
  switch (item.name) {
    case "base_about_us_01":
      // << Returns HTML filled in with data....
      console.log(item.view(BAU_01));
      // << Returns CSS....
      console.log(item.css());
      break;

    case "base_hero_01":
      // << Returns HTML filled in with data....
      console.log(item.view(BH_01));
      // << Returns CSS....
      console.log(item.css());
      break;

    case "base_newsletter_01":
      // << Returns HTML filled in with data....
      console.log(item.view(BNL_01));
      // << Returns CSS....
      console.log(item.css());
      break;

    default:
      break;
  }
})


