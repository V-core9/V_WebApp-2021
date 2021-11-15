const path = require("path");


module.exports = {
  mode: "development",
  entry: {
    vApp: "./src/vApp.root.js",
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].V-core9.js",
    clean: false,
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
