const autoprefixer = require('autoprefixer');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const miniCssExtractLoader = MiniCssExtractPlugin.loader;

const postCssLoaderConfig = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      autoprefixer
    ]
  }
};

const jsRules = {
  test: /\.js?/,
  include: path.resolve(__dirname, '../../src'),
  use: [
    'babel-loader', 'eslint-loader'
  ]
};

const cssRules = {
  test: /\.css$/,
  use: [
    miniCssExtractLoader,
    'css-loader',
    postCssLoaderConfig
  ]
};

const scssRules = {
  test: /\.scss$/,
  use: [
    miniCssExtractLoader,
    'css-loader',
    postCssLoaderConfig,
    'sass-loader'
  ]
};

const otherRules = {
  test: /\.(png|woff|woff2|eot|ttf|svg)$/,
  loader: 'url-loader?limit=100000'
};

module.exports = [
  jsRules,
  cssRules,
  scssRules,
  otherRules
];
