/**
 * @module clean
 * @memberOf webpack.parts
 */

// npm modules
const CleanWebpackPlugin = require('clean-webpack-plugin')

/**
 * Configuration for CleanWebpackPlugin
 */
module.exports = path => {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
      })
    ]
  }
}