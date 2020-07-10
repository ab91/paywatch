const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "dev.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    writeToDisk: true,
    port: 8000
  }
});
