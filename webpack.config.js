const path = require("path");
const appConfig = require("./__appConfig");
const mode = appConfig.devMode ? "development" : "production";

module.exports = {
  mode: mode,
  entry: {
    rootApplication: "./SOURCE/FrontEnd/app_client.js",
    V_DisplayDriver: "./SOURCE/FrontEnd/v_modules/v_display_driver/displayDriver.js",
    V_DomPrinter: "./SOURCE/FrontEnd/v_modules/v_dom_printer/domPrinter.js",
  },
  target: appConfig.target,
  output: {
    path: path.resolve(__dirname, "PUBLIC"),
    filename: "[name].V-core9.js",
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
