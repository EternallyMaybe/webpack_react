const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.base.conf');
const paths = require('./paths');

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: paths.PATH_DIST,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});