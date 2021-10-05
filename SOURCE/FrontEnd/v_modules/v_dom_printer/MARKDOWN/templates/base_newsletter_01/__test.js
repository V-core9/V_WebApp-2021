const base_newsletter_01 = require('./index');

console.log(base_newsletter_01);
console.log(base_newsletter_01.name);
console.log(base_newsletter_01.disabled);
console.log(base_newsletter_01.author);
console.log(base_newsletter_01.html());
console.log(base_newsletter_01.css());


//[o> How to use it ?? ____>>>
var BNL_01 = {
  title: "Some NEWSLETTER  for title!!!",
  text: "aasind o soias inas dmpam sdp oamsp dmaspm ods"
}

// << Returns HTML filled in with data....
console.log(base_newsletter_01.html(BNL_01));
