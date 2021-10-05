const H3 = require('../../elements/h3');
const H5 = require('../../elements/h5');
const P = require('../../elements/p');


const base_about_us_01 = {
  name: "base_about_us_01",
  html(section = { title : null, subtitle: null, text: null }) {
    return H3(section.title) + H5(section.subtitle) + P(section.text) ;
  },
  disabled: false,
  author: "-v-"
}


module.exports = base_about_us_01;
