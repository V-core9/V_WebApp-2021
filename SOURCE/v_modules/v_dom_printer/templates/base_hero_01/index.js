const sampleBASE = {
  title: "[_missing_content_]",
  subtitle: "[_missing_content_]",
  button: {
    text: "[_missing_content_]",
    do: "<_ACTION_MISSING_>",
  },
  image: {
    url: "[_missing_content_]",
    width: "<_ACTION_MISSING_>",
    height: "<_ACTION_MISSING_>",
    alt: "<_ACTION_MISSING_>",
  },
}

const missCon = "[_missing_content_]";

const base_hero_01 = {
  name: "base_hero_01",
  html: (section) => {
    if (typeof section === "undefined") return false;

    var title = (typeof section.title === "undefined") ? missCon : section.title;
    var subtitle = (typeof section.subtitle === "undefined") ? missCon : section.subtitle;
    var buttonDO, buttonText = missCon;
    if (typeof section.button !== "undefined") {
      buttonDO = (typeof section.button.do !== "undefined") ? missCon : section.button.do;
      buttonText = (typeof section.button.text !== "undefined") ? missCon : section.button.text;
    }
    var imgUrl, imgWidth, imgHeight, imgAlt = missCon;
    if (typeof section.image !== "undefined") {
      imgUrl = (typeof section.image.url !== "undefined") ? "#" : section.image.do;
      imgWidth = ( typeof section.image.width !== "undefined" ||  isNaN(section.image.width)) ? "auto" : section.image.width;
      imgHeight = (typeof section.image.height !== "undefined" ||  isNaN(section.image.height)) ? "auto" : section.image.height;
      imgAlt = (typeof section.image.alt !== "undefined") ? "" : section.image.alt;
    }
    return `<div class="section_side">
                <h1>${title}</h1>
                <h2>${subtitle}</h2>
                <button onclick="${buttonDO}">${ buttonText }</button>
              </div>
              <div class="section_side">
                <img src="${imgUrl}" width="${imgWidth}" height="${imgHeight}" alt="${imgAlt}"/>
              </div>`;
  },
  css: () => {
    return `<style>
              .hero_main {
                background: #101525;
                color: white;
              }
            </style>`;
  },
  disabled: false,
  author: "-v-"
}

module.exports = base_hero_01;
