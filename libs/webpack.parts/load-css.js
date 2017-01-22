/**
 * @module load-css
 * @member webpack-parts
 */

/**
 * Configuration of loader for css files
 */
module.exports = paths => ({
  module: {
    rules: [{
      test: /\.css$/,
      // Restrict extraction process to the given
      // paths.
      include: paths,

      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            import: false,
            importLoaders: 1
          }
        },
        'postcss-loader'
      ]
    }]
  }
})
