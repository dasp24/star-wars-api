const path = require('path');

module.exports = {
  entry: ['whatwg-fetch','babel-polyfill', './src/application/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'application/static')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};