/**
 * wangqi 2017-11-28
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    Odometer: './odometer.js'
  },
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    filename: '[name].min.js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /(node_modules)/,
      }
    ]
  },
  plugins: [
    /**
     * js压缩设置
     * @type {Object}
     */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
