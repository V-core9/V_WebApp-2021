const base_about_us_01 = require('./index');

console.log(base_about_us_01);
console.log(base_about_us_01.name);
console.log(base_about_us_01.disabled);
console.log(base_about_us_01.author);
console.log(base_about_us_01.html());
console.log(base_about_us_01.css());


//[o> How to use it ?? ____>>>
var BAU_01 = {
  title: "Some random text for title!!!",
  subtitle: "more crappy text to fill it in",
  text: "aasind o soias inas dmpam sdp oamsp dmaspm ods"
}

// << Returns HTML filled in with data....
console.log(base_about_us_01.html(BAU_01));
