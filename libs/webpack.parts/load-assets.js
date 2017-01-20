/**
 * @module load-assets
 * @member webpack.parts
 */

/**
 * Configure file-loader to load some assets
 */
module.exports = paths => ({
  module: {
    rules: [{
      test: /\.(ico|txt)$/,
      include: paths,

      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }]
  }
})
