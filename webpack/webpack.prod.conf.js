var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var env = config.build.env;

var webpackConfig = merge(baseWebpackConfig, {
    entry: {
        // assets.config 的打包需要单独打！！！否则会被当成 vender 打包而丢失
        // 'assets.config': './src/exports/modules/assets-config.js',
        'index': './src/exports/index.js',
        'common.footer': './src/exports/modules/common-footer.js',
        'qq.group': './src/exports/modules/qq-group.js',
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        library: ['LibComponents', '[name]'],
        libraryTarget: 'umd'
    },
    externals: ['vue', 'vue-i18n'],
    module: {
        loaders: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
})


module.exports = webpackConfig
