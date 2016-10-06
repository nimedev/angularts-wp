// npm modules
const webpack = require('webpack')

// Webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Config parts
const webpackParts = require('./libs/webpack.parts')

/**
 * Webpack configuration for build
 */
module.exports = {
  context: __dirname,
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    path: './dist'
  },
  plugins: [
    new CleanWebpackPlugin('dist', {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('styles.css'),
    new CopyWebpackPlugin([
      {
        from: './src/assets',
        to: 'assets'
      }, {
        from: './src/favicon.ico'
      }, {
        from: './src/robots.txt'
      }])
  ],
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json', '.css']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      },
      {
        test: /\.css$/,
        loaders: ['postcss']
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        exclude: /\index.html/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file'
      },
      {
        test: /\.jpg$/,
        exclude: /node_modules/,
        loader: 'file'
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'url'
      }
    ]
  },
  tslint: webpackParts.tslint,
  postcss: webpackParts.postcss,
}