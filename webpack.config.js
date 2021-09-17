const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "app_v-pack.js",
    path: path.resolve(__dirname, "dist"),
  },
};
