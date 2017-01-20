/**
 * @module load-images
 * @member webpack.parts
 */

/**
 * Configuration of loader for images
 */
module.exports = paths => ({
  module: {
    rules: [{
      test: /\.(jpg|png)$/,
      include: paths,

      loader: 'url-loader',
      options: {
        name: './assets/images/[name].[hash].[ext]',
        limit: 25000
      }
    }, {
      test: /\.svg$/,
      include: paths,

      loader: 'file-loader',
      options: {
        name: './assets/images/[name].[hash].[ext]'
      }
    }]
  }
})
