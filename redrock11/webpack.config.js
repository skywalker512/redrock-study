const path = require('path');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');
const HtmlWepackPlugin = require('html-webpack-plugin');
const commonConfig = {
  output: {
    path: path.resolve('dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    contentBase: path.resolve('dist'),//配置开发服务运行时的文件根目录
    historyApiFallback: true,// 支持 historyApi
    port: 3000,//端口
    hot: true, //是否启用热更新
    open: false,//是否自动打开浏览器
  },
  plugins: [
    new HtmlWepackPlugin({
      template: path.resolve('public/index.html')
    }),
  ]
}
module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
}