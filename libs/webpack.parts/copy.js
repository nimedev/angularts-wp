/**
 * @module copy
 * @memberOf webpack.parts
 */

// npm modules
const CopyWebpackPlugin = require('copy-webpack-plugin')

/**
 * Configuration for CopyWebpackPlugin
 */
module.exports = path => {
  return {
    plugins: [
      new CopyWebpackPlugin(path)
    ]
  }
}