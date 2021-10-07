const admin_base_list_files_01 = require('./index');

console.log(admin_base_list_files_01);
console.log(admin_base_list_files_01.name);
console.log(admin_base_list_files_01.disabled);
console.log(admin_base_list_files_01.author);
console.log(admin_base_list_files_01.view());
console.log(admin_base_list_files_01.css());


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
console.log(admin_base_list_files_01.view(BH_01));
