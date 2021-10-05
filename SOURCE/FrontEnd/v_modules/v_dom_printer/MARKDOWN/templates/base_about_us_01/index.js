const base_about_us_01 = {
  name: "base_about_us_01",
  html(section = { title : null, subtitle: null, text: null }) {
    return `<div class="section_full">
                  <h3>${section.title}</h3>
                  <h5>${section.subtitle}</h5>
                  <p>${section.text}</p>
                </div>`;
  },
  css() {
    return `<style>
              .newsletter_main {
                background: #152510;
                color: white;
              }
            </style>`;
  },
  disabled: false,
  author: "-v-"
}


module.exports = base_about_us_01;
