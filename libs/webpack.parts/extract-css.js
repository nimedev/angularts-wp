/**
 * @module extract-css
 * @memberOf webpack.parts
 */

// npm modules
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Configurations for ExtractTextPlugin
 */
module.exports = paths => {
  return {
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
  }
}