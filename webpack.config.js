// npm modules
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ip = require('ip')
const stylelint = require('stylelint')

// Postcss plugins
const atImport = require('postcss-import')
const autoprefixer = require('autoprefixer')
const calc = require('postcss-calc')
const colorFunction = require('postcss-color-function')
const customMedia = require('postcss-custom-media')
const customProperties = require('postcss-custom-properties')
const mixins = require('postcss-mixins')
const nested = require('postcss-nested')

/**
 * Webpack configuration for development environment
 */
module.exports = {
  context: __dirname,
  entry: './src/main.ts',
  output: {
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    })
  ],
  devtool: 'source-map',
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
        loader: 'style!css!postcss'
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
  },
  devServer: {
    host: process.env.ANGULARTS_WP_HOST || ip.address(),
    port: process.env.ANGULARTS_WP_PORT || 3000,
    contentBase: ['./src', '../static'],
    historyApiFallback: true,
    inline: true,
    colors: true,
    stats: 'normal'
  }
}