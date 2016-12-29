/**
 * @module extract-css
 * @member webpack.parts
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Configurations for ExtractTextPlugin
 */
module.exports = paths => ({
  module: {
    loaders: [
      // Extract CSS during build
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
        include: paths
      }
    ]
  },
  plugins: [
    // Output extracted CSS to a file
    new ExtractTextPlugin('styles.css')
  ]
})
