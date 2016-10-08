var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: false,//配置生成Source Maps，选择合适的选项
  entry: {
    "bundle": __dirname + "/src/app/main.ts"
  },
  output: {
    path: __dirname + "/public",
    publicPath: '/',
    filename: "[name]-[hash].js"
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'//添加对样式表的处理
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  //postcss: function () {
  //  return [autoprefixer];
  //},
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json')
    }),
    new webpack.BannerPlugin("Copyright Flying Unicorns inc."),//在这个数组中new一个就可以了
    new HtmlWebpackPlugin({
      title: 'title',
      template: __dirname + "/src/index.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};