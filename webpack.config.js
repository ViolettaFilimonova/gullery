const {resolve} = require('path')
const MiniCssPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')


module.exports = {
    entry: resolve(__dirname, 'src', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules:[
            {

                test: /\.(png|jpg|jpeg|gif|mp3|mp4)$/i,
                loader: 'img-optimize-loader',
                // use: ['img-optimize-loader', 'file-loader'],
                test: /\.(png|jpeg|gif|mp3)$/i,
                loader: 'file-loader',

                options:{
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    devServer: {
        watchFiles: ["./*"],
        port: "9090",
        open: true,
        hot: true,
    }
}