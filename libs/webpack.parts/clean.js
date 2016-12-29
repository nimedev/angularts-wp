/**
 * @module clean
 * @member webpack.parts
 */

const CleanWebpackPlugin = require('clean-webpack-plugin')

/**
 * Configuration for CleanWebpackPlugin
 */
module.exports = path => ({
  plugins: [
    new CleanWebpackPlugin([path], {
      // Without `root` CleanWebpackPlugin won't point to our
      // project and will fail to work.
      root: process.cwd()
    })
  ]
})
