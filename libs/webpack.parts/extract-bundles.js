/**
 * @module extract-bundles
 * @member webpack.parts
 */

const webpack = require('webpack')

const isVendor = (module) => {
  const userRequest = module.userRequest

  // You can perform other similar checks here too.
  // Now we check just node_modules.
  return userRequest && userRequest.indexOf('node_modules') >= 0
}

/**
 * Configuration for splitting bundles
 */
module.exports = () => ({
  plugins: [
    // Extract bundles.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: isVendor
    })
  ]
})
