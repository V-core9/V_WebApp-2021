const path = require("path");
const vCfg = require("./__vCfg");
const mode = vCfg.devMode ? "development" : "production";

module.exports = {
  mode: mode,
  entry: {
    app_root: "./SOURCE/App/app_root.js",
  },
  target: vCfg.target,
  output: {
    path: path.resolve(__dirname, "PUBLIC"),
    filename: "[name].v_pack.js",
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
