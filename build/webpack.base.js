const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projectRoot = path.resolve(__dirname, './..');

module.exports = {
  context: projectRoot + '/build',
  entry: {
    polyfills: projectRoot + '/src/polyfills.ts',
    vendor: projectRoot + '/src/vendor.ts',
    app: projectRoot + '/src/app.ts',
    style: projectRoot + '/src/scss/style.scss',
  },
  output: {
    path: projectRoot + '/dist',
    filename: '[name].[chunkHash].package.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html', '.svg', '.jpg', '.jpeg', '.png', '.gif'],
  },
  module: {
    rules: [
      {
        test: /\.(html|css)$/,
        use: 'raw-loader',
      },
      {
        test: /\.(css|scss)$/,
        loaders: ExtractTextPlugin.extract({
          use: 'css-loader!postcss-loader!sass-loader',
          fallback: 'style-loader',
        })
      },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[name].image.[ext]&outputPath=images/',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new ExtractTextPlugin({
      filename: '[name].package.css',
      allChunks: true,
    }),

    // @see https://github.com/angular/angular/issues/14898#issuecomment-284039716
    // This resolves a console warning regarding core.es5.js
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      projectRoot + '/src/client'
    ),

    // @see https://angular.io/docs/ts/latest/guide/webpack.html#!#commons-chunk-plugin
    // The CommonsChunkPlugin identifies the hierarchy among two chunks: app -> vendor -> polyfills.
    // Where Webpack finds that app has shared dependencies with vendor, it removes them from app.
    // It would remove polyfills from vendor if they shared dependencies, which they don't.
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: projectRoot + '/src/index.html'
    })
  ],
};
