var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        calculator: './entry/calculator.jsx',
        tagfield: './entry/tagfield.jsx',
        calendar: './entry/calendar.jsx',
        checkbox: './entry/checkbox.jsx',
        mdeditor: './entry/mdeditor.jsx'
    },
    output: {
        path: __dirname,
        filename: '[name].entry.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }]
    },
    plugins: [commonsPlugin]
};