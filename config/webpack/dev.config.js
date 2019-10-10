const rules = require('./rules');
const {
  cleanWebpackPlugin, miniCssExtractPlugin, envPlugin, htmlWebpackPlugin, copyWebpackPlugin
} = require('./plugins');
const path = require('path');

const mode = 'development';

console.log('Development build..');

module.exports = () => ({
  mode,
  devtool: 'source-map',
  entry: {
    'main': './src/example/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname + '/../../example'),
    publicPath: '/'
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    cleanWebpackPlugin,
    envPlugin(mode),
    miniCssExtractPlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin
  ],
  module: {
    rules
  }
});
