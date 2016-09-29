/**
 * Created by administrator on 16/9/29.
 */
var webpack = require('webpack');

module.exports = {
  devtool: false,//配置生成Source Maps，选择合适的选项
  entry: [
    '@angular/core',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    __dirname + "/src/app/modules/shim.min.js",
    __dirname + "/src/app/modules/zone.min.js"
  ],
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname
    })
  ]
};