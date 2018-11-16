const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // mode: "production",
    entry: {
        index: path.resolve(paths.PATH_SRC, 'index.js')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\??.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: "static/images/[name].[hash:7].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:7].css'
        })
        // new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: paths.PATH_DIST,
        filename: '[name].bundle.js'
    }
}
