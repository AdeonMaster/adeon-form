const rules = require('./rules');
const {
  cleanWebpackPlugin, miniCssExtractPlugin, envPlugin, htmlWebpackPlugin, copyWebpackPlugin, offlinePlugin
} = require('./plugins');

const mode = 'development';

console.log('Development build..');

module.exports = () => ({
  mode,
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].[contenthash].js',
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
    copyWebpackPlugin,
    offlinePlugin
  ],
  module: {
    rules
  }
});
