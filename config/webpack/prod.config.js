const rules = require('./rules');
const {
  terserPlugin,
  envPlugin,
  cleanWebpackPlugin,
  optimizeCssAssetsPlugin,
  miniCssExtractPlugin,
  htmlWebpackPlugin,
  copyWebpackPlugin,
  offlinePlugin
} = require('./plugins');

const mode = 'production';

console.log('Production build..');

module.exports = () => ({
  mode,
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  devtool: 'false',
  optimization: {
    minimizer: [
      terserPlugin
    ],
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
    envPlugin(mode),
    cleanWebpackPlugin,
    optimizeCssAssetsPlugin,
    miniCssExtractPlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin,
    offlinePlugin
  ],
  module: {
    rules
  }
});
