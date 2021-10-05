const base_newsletter_01 = {
  name: "base_newsletter_01",
  view(section = { title : null, text: null }) {
    return `<div class="section_side">
              <h3>${section.title}</h3>
              <p>${section.text}</p>
            </div>
            <div class="section_side">
              <input type="text"/>
              <button />SignUp</button>
            </div>`
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


module.exports = base_newsletter_01;
