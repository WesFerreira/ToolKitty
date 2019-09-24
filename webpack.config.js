// Webpack uses this to work with directories
const path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');

var mode = 'development'
module.exports = {
    entry: './public/js/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.min.js'
    },

    plugins: [
        new UglifyJsPlugin(),
        new WebpackNotifierPlugin({ title: mode })
    ],

    // Default mode for Webpack is production.
    mode: mode
};