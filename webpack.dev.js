const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "dev.js"
  },
  devtool: "inline-source-map",
  devServer: {
    port: 8000,
    static: {
      directory: path.join(__dirname, "dist")
    },
    devMiddleware: {
      writeToDisk: true,
    },
  }
});
