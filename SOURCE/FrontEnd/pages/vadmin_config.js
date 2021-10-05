module.exports = {
  lang: "en",
  title: "<[|.V_Core9.|]> - V_ADMIN PAGE",
  meta: {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    themeColor: "#2196f3",
    description: "Sample ADMIN PAGE Description Entry just to be a spaceholder.",
    keywords: "Some Random Words, Other Keyword, More And More",
    pre: {
      connect: ["https://www.google.com"],
      scripts: ["glideJS", "bootstrapJS"],
      styles: ["glideJS", "bootstrapJS"]
    }
  },
  type: "full-width",
  link: [
    {
      rel:"icon",
      href:"/assets/img/logo.png"
    },
    {
      rel:"apple-touch-icon",
      href:"/assets/img/logo.png"
    },
    {
      rel:"manifest",
      href:"/manifest.webmanifest"
    }
  ],
  style: {
    background: "darkgreen",
    color: "#d0d0d0"
  },
  sections: [{
    type: "base_hero_01",
    data: {
      title: "Hello and welcome!",
      subtitle: "11111111111Space holder for subtitle....",
      button: {
        text: "Join Today!",
        do: "testCallbackFunction()"
      },
      image: {
        width: 360,
        height: 360,
        url: "/assets/logo.png",
        alt: "YEAAA MIKI"
      },
      background: {
        type: "color",
        url: "#152030"
      }
    }
  },
  {
    type: "base_newsletter_01",
    data: {
      title: "4444444 SECTION 3333 TITLE",
      subtitle: "44444S3pace3 hold3e3r3 33for subtit3e..3..",
      text: "qw qwasasxcs qw eqwdsa daw qewdwaswd asw aqsdas dwaqedasdw   waasdcsad was w adsd aw sdeaqsd asw asdad asd",
      button: {
        text: "Joi3n Today3!",
        style: {
          background: "orange",
          color: "red",
          size: "L"
        },
        do() {
          alert('Join 3333333 alerting!');
        }
      },
      image: {
        width: 50,
        height: 50,
        url: "/assets/logo.png"
      },
      background: {
        type: "image",
        url: "/assets/logo.png"
      }
    }
  },
  {
    type: "base_about_us_01",
    data: {
      title: "ZZZZZZZZZZZZZ SECTION 3333 TITLE",
      subtitle: "ZZZZZZZZZZ hold3e3r3 33for subtit3e..3..",
      text: "qw qwasasxcs qw eqwdsa daw qewdwaswd asw aqsdas dwaqedasdw   waasdcsad was w adsd aw sdeaqsd asw asdad asd",
      button: {
        text: "Joi3n Today3!",
        style: {
          background: "orange",
          color: "red",
          size: "L"
        },
        do() {
          alert('Join ZZZZZZZZZZZ alerting!');
        }
      },
      image: {
        width: 50,
        height: 50,
        url: "/assets/logo.png"
      },
      background: {
        type: "image",
        url: "/assets/logo.png"
      }
    }
  }
  ]
}

