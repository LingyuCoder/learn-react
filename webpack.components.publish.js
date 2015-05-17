var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
  entry: {
    AsTagfield: [
      './scripts/components/AsTagField/index'
    ],
    AsCalculator: [
      './scripts/components/AsCalculator/index'
    ],
    AsCalendar: [
      './scripts/components/AsCalendar/index'
    ],
    AsMarkdownEditor: [
      './scripts/components/AsMarkdownEditor/index'
    ],
    AsImageAccordion: [
      './scripts/components/AsImageAccordion/index'
    ],
    AsSpace: [
      './scripts/components/AsSpace/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'build', 'components'),
    filename: '[name].webpack.js',
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
