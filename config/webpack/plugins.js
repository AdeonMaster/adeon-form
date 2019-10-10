const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const envPlugin = (mode = 'development') => new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(mode)
  }
});

module.exports = {
  optimizeCssAssetsPlugin: new OptimizeCSSAssetsPlugin({}),
  miniCssExtractPlugin: new MiniCssExtractPlugin({
    filename: '[name].[hash].css'
  }),
  envPlugin,
  terserPlugin: new TerserPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
    extractComments: true
  }),
  cleanWebpackPlugin: new CleanWebpackPlugin({
    // cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],
    cleanStaleWebpackAssets: false
  }),
  htmlWebpackPlugin: new HtmlWebpackPlugin({
    title: 'PWA Template',
    template: 'src/template.html'
  }),
  copyWebpackPlugin: new CopyWebpackPlugin([
    { from: 'static' }
  ]),
  offlinePlugin: new OfflinePlugin({
    appShell: '/',
    externals: [
      '/'
    ]
  })
};
