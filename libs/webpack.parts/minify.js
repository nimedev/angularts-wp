/**
 * @module minify
 * @memberOf webpack.parts
 */

// npm modules
const webpack = require('webpack')

/**
 * Configurations for UglifyJsPlugin
 */
module.exports = () => {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }
}