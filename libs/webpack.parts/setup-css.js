/**
 * @module setup-css
 * @member webpack.parts
 */

/**
 * Configuration for css files
 */
module.exports = paths => ({
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss'],
      include: paths
    }]
  }
})
