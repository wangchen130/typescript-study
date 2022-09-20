const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.ts",

  output: { 
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },

  module: {
    rules: [
      {test: /\.ts$/, use: "ts-loader", exclude: /node_modules/}
    ]
  },

  mode: "development",

  resolve: {
    extensions: [".ts", ".js"]
  },


  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}