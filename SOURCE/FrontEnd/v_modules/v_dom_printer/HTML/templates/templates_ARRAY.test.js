const templates = require("./templates_ARRAY");


console.log(templates.length);



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

templates.forEach(item => {
  console.log(item);
  switch (item.name) {
    case "base_about_us_01":
      // << Returns HTML filled in with data....
      console.log(item.html(BAU_01));
      // << Returns CSS....
      console.log(item.css());
      break;
    
    case "base_hero_01":
      // << Returns HTML filled in with data....
      console.log(item.html(BH_01));
      // << Returns CSS....
      console.log(item.css());
      break;
    
    case "base_newsletter_01":
      // << Returns HTML filled in with data....
      console.log(item.html(BNL_01));
      // << Returns CSS....
      console.log(item.css());
      break;
  
    default:
      break;
  }
})




