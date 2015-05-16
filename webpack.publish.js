var webpack = require('webpack');
var path = require('path');
module.exports = {
  devtool: 'eval',
  entry: {
    tagfield: [
      './scripts/tagfield'
    ],
    calendar: [
      './scripts/calendar'
    ],
    mdeditor: [
      './scripts/mdeditor'
    ],
    calculator: [
      './scripts/calculator'
    ],
    checkbox: [
      './scripts/checkbox'
    ],
    "image-accordion": [
      './scripts/image-accordion'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].entry.js',
    publicPath: '/scripts/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'scripts')]
    }, {
      test: /\.less$/,
      loader: 'style!css!autoprefixer!less'
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }]
  },
  plugins: []
};
