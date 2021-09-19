const path = require("path");
const vCfg = require("./__vCfg");
const mode = vCfg.devMode ? "development" : "production";

module.exports = {
  mode: mode,
  entry: {
    app_root: "./src/app_root.js",
    app_demo_test: "./src/app_demo_test.js",
    //v_cursor: './[.v.]_dev_apps/_x1/SRC/helpers/v_cursor.js',
  },
  target: vCfg.target,
  output: {
    path: path.resolve(__dirname, "dist"),
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
