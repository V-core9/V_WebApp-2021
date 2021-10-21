module.exports = {
  meta: {
    title: "homepage",
    description: "Some demo page description",
    keywords: "Some Random Words, Other Keyword, More And More",
    pre: {
      connect: ["https://www.google.com"],
      scripts: ["glideJS", "bootstrapJS"],
      styles: ["glideJS", "bootstrapJS"]
    }
  },
  type: "boxed",
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
      type: "base_hero_01",
      data: {
        title: "SECOND SECTION TITLE",
        subtitle: "22222222Space holder for subtitle....",
        button: {
          text: "Join Today!",
          do: "testCallbackFunction('Join today button alerting!')"
        },
        image: {
          width: 180,
          height: 180,
          url: "/assets/logo.png",
          alt: "MIKI222222"
        },
        background: {
          type: "color",
          url: "#302010"
        }
      }
    },
    {
      type: "base_hero_01",
      data: {
        title: "3333 SECTION 3333 TITLE",
        subtitle: "3333333S3pace3 hold3e3r3 33for subtit3e..3..",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do: "testCallbackFunction('3333333333Join today button alerting!')"
        },
        image: {
          width: 650,
          height: 400,
          url: "/assets/pageBuilder_LoadTest1.png",
          alt: "YEAAA MIKI"
        },
        background: {
          type: "image",
          url: "/assets/logo.png"
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
      type: "base_hero_01",
      data: {
        title: "55555555555 SECTION 3333 TITLE",
        subtitle: "555555555555pace3 hold3e3r3 33for subtit3e..3..",
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
      type: "base_hero_01",
      data: {
        title: "6666666666 SECTION 3333 TITLE",
        subtitle: "666666666 hold3e3r3 33for subtit3e..3..",
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
          url: "/assets/pageBuilder_LoadTest1.png",
          alt: "YEAAA MIKI"
        },
        background: {
          type: "image",
          url: "/assets/logo.png"
        }
      }
    },
    {
      type: "base_newsletter_01",
      data: {
        title: "77777777777 SECTION 3333 TITLE",
        subtitle: "7777777777 hold3e3r3 33for subtit3e..3..",
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
      type: "base_newsletter_01",
      data: {
        title: "888888 SECTION 3333 TITLE",
        subtitle: "88888 hold3e3r3 33for subtit3e..3..",
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
      type: "base_newsletter_01",
      data: {
        title: "9999999 SECTION 3333 TITLE",
        subtitle: "99999999 hold3e3r3 33for subtit3e..3..",
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
      type: "base_newsletter_01",
      data: {
        title: "10 SECTION 3333 TITLE",
        subtitle: "10 hold3e3r3 33for subtit3e..3..",
        text: "qw qwasasxcs qw eqwdsa daw qewdwaswd asw aqsdas dwaqedasdw   waasdcsad was w adsd aw sdeaqsd asw asdad asd",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join 10 alerting!');
          }
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/pageBuilder_LoadTest1.png"
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
        title: "YYYYYYYYY SECTION 3333 TITLE",
        subtitle: "YYYYYYYYYYY hold3e3r3 33for subtit3e..3..",
        text: "qw qwasasxcs qw eqwdsa daw qewdwaswd asw aqsdas dwaqedasdw   waasdcsad was w adsd aw sdeaqsd asw asdad asd",
        button: {
          text: "YYYYYY Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join YYYYY alerting!');
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
};

