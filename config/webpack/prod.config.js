const rules = require('./rules');
const {
  terserPlugin,
  envPlugin,
  cleanWebpackPlugin,
  optimizeCssAssetsPlugin,
  miniCssExtractPlugin,
  htmlWebpackPlugin,
  copyWebpackPlugin
} = require('./plugins');

const mode = 'production';

console.log('Production build..');

module.exports = () => ({
  mode,
  entry: {
    'example/main': './src/example/index.js'
  },
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
    copyWebpackPlugin
  ],
  module: {
    rules
  }
});
