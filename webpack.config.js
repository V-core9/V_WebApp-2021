const path = require("path");
const appConfig = require("./__appConfig");

var cleanOutput = true;
var appMode = "production";
if (appConfig.name == "dev") {
  appMode = "development";
  cleanOutput = false;
}

module.exports = {
  mode: appMode,
  entry: {
    rootApplication: "./SOURCE/FrontEnd/app_client.js",
    V_DisplayDriver: "./SOURCE/FrontEnd/v_modules/v_display_driver/displayDriver.js",
    V_DomPrinter: "./SOURCE/FrontEnd/v_modules/v_dom_printer/domPrinter.js",
    homepage: "./SOURCE/FrontEnd/pages/homepage.js",
    vadmin: "./SOURCE/FrontEnd/pages/vadmin.js",
  },
  target: appConfig.target,
  output: {
    path: path.resolve(__dirname, "PUBLIC"),
    filename: "[name].V-core9.js",
    clean: cleanOutput,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
