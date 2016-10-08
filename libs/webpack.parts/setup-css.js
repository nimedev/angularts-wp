/**
 * @module setup-css
 * @memberOf webpack.parts
 */

/**
 * Configuration for css files
 */
module.exports = paths => {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css', 'postcss'],
          include: paths
        }
      ]
    }
  }
}