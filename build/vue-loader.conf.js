'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
  // ,
  // test: /\.vue$/,
  // loader: 'vue-loader',
  // options: {
  //   cssModules: {
  //     localIdentName: '[path][name]---[local]---[hash:base64:5]',
  //     camelCase: true
  //   },
  //   extractCSS: true,
  //   loaders: env.production ? {
  //     css: ExtractTextPlugin.extract({ use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader' }),
  //     scss: ExtractTextPlugin.extract({ use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader' })
  //   } : {
  //       css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
  //       scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
  //     }
  // }
}


