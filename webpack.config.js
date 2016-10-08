// core modules
const path = require('path')

// npm modules
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ip = require('ip')
const merge = require('webpack-merge')
const validate = require('webpack-validator')

// Configuration parts
const parts = require('./libs/webpack.parts')

// Constants & Variables
const PATHS = {
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  images: path.join(__dirname, 'src/assets/img'),
  fonts: path.join(__dirname, 'src/assets/fonts'),
  copy: [
    {
      from: './src/assets',
      to: 'assets'
    }, {
      from: './src/favicon.ico'
    }, {
      from: './src/robots.txt'
    }]
}

// Common settings for webpack
const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    })
  ],
  resolve: {
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
        include: PATHS.app
      },
      {
        test: /\.html$/,
        loader: 'html',
        include: PATHS.app
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: PATHS.app
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
        include: PATHS.fonts
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
        include: PATHS.fonts
      },
      {
        test: /\.jpg$/,
        loader: 'file',
        include: PATHS.images
      },
      {
        test: /\.png$/,
        loader: 'url',
        include: PATHS.images
      }
    ]
  },
  tslint: parts.tslint,
  postcss: parts.postcss
}

// Detect how npm is run and branch based on that
let config
switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      parts.clean(PATHS.dist),
      parts.minify(),
      parts.extractCSS(PATHS.app),
      parts.copy(PATHS.copy)
    )
    break
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setupCSS(PATHS.app),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.ANGULARTS_WP_HOST || ip.address(),
        port: process.env.ANGULARTS_WP_PORT || 3000
      })
    )
}

/**
 * Webpack configuration
 */
module.exports = validate(config)