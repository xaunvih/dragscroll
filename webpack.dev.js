const path = require('path')
const merge = require('webpack-merge')
const webpackCommon = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const files = ['index', 'vertical', 'all']

module.exports = merge(webpackCommon, {
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        ...files.map((file) => {
            return new HtmlWebpackPlugin({
                filename: `${file}.html`,
                template: path.resolve(__dirname, `public/${file}.ejs`),
            })
        }),
    ],

    devServer: {
        inline: true,
        hot: true,
        contentBase: [path.resolve('build'), path.resolve('public')],
        open: true,
        compress: true,
        writeToDisk: false,
        watchOptions: {
            poll: true,
        },
    },
})
