const path = require("path");
const vCfg = require("./__vCfg");
const mode = vCfg.devMode ? "development" : "production";

module.exports = {
  mode: mode,
  entry: {
    app_root: "./SOURCE/App/app_root.js",
    V_DisplayDriver: "./SOURCE/v_modules/v_display_driver/displayDriver.js",
    V_DomPrinter: "./SOURCE/v_modules/v_dom_printer/domPrinter.js",
  },
  target: vCfg.target,
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
