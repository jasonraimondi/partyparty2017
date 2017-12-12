const merge = require('webpack-merge');
const webpack = require('webpack');
const cssNano = require('cssnano');
const baseWebpackConfig = require('./webpack.base');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),

    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssNano,
      cssProcessorOptions: {discardComments: {removeAll: true}},
      canPrint: true
    })
  ],
});
