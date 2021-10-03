const templates = require("./templates_OBJECT");



console.log(templates.base_hero_01);
console.log(templates.base_hero_01.name);
console.log(templates.base_hero_01.disabled);
console.log(templates.base_hero_01.author);
console.log(templates.base_hero_01.html());
console.log(templates.base_hero_01.css());



console.log(templates.base_newsletter_01);
console.log(templates.base_newsletter_01.name);
console.log(templates.base_newsletter_01.disabled);
console.log(templates.base_newsletter_01.author);
console.log(templates.base_newsletter_01.html());
console.log(templates.base_newsletter_01.css());



// TEMPLATES __ BASE_ABOUT_US_01 >>

//[o> How to use it ?? ____>>>
var BAU_01 = {
  title: "Some random text for title!!!",
  subtitle: "more crappy text to fill it in",
  text: "aasind o soias inas dmpam sdp oamsp dmaspm ods"
}

// << Returns HTML filled in with data....
console.log(templates.base_about_us_01.html(BAU_01));



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

// << Returns HTML filled in with data....
console.log(templates.base_hero_01.html(BH_01));



// TEMPLATES __ BASE_NEWSLETTER_01 >>

//[o> How to use it ?? ____>>>
var BNL_01 = {
  title: "Some NEWSLETTER  for title!!!",
  text: "aasind o soias inas dmpam sdp oamsp dmaspm ods"
}

// << Returns HTML filled in with data....
console.log(templates.base_newsletter_01.html(BNL_01));

