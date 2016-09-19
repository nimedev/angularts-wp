const webpack = require('webpack')
const stylelint = require('stylelint')
const autoprefixer = require('autoprefixer')
const calc = require('postcss-calc')
const colorFunction = require('postcss-color-function')
const customMedia = require('postcss-custom-media')
const customProperties = require('postcss-custom-properties')
const atImport = require('postcss-import')
const mixins = require('postcss-mixins')
const nested = require('postcss-nested')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    path: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json', '.css']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader:'ts',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        exclude: /\index.html/,
        loader:'html'
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
  tslint: {
    configuration: {
      exclude: './src/app/app.constants.ts'
    }
  },
  postcss: function (webpack) {
    return [
      atImport({
        addDependencyTo: webpack,
        plugins: [
          stylelint
        ]
      }),
      mixins,
      customMedia,
      customProperties,
      nested,
      calc,
      colorFunction,
      autoprefixer({ browsers: ['last 2 versions'] })
    ]
  }
}