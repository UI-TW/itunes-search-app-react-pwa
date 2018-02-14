const webpack = require('webpack');
const webpackConfig = require('./base');

webpackConfig.entry = './src/index.jsx';
webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
  output: {
    comments: false
  },
  compress: {
    warnings: false
  }
}));

module.exports = webpackConfig;
