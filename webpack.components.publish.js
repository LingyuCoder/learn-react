var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
  entry: {
    asTagfield: [
      './scripts/components/AsTagField/index'
    ],
    asCalculator: [
      './scripts/components/AsCalculator/index'
    ],
    asCalendar: [
      './scripts/components/AsCalendar/index'
    ],
    asMarkdownEditor: [
      './scripts/components/AsMarkdownEditor/index'
    ],
    asImageAccordion: [
      './scripts/components/AsImageAccordion/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'build', 'components'),
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
  plugins: [commonsPlugin]
};
