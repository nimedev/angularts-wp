/**
 * @module load-js
 * @member webpack.parts
 */

/**
 * Configuration for JavaScript linter and loader
 */
module.exports = ({
  paths,
  eslintOptions
}) => ({
  module: {
    rules: [{
      test: /\.js$/,
      include: paths,
      enforce: 'pre',

      loader: 'eslint-loader',
      options: eslintOptions
    }, {
      test: /\.js$/,
      include: paths,

      loader: 'babel-loader',
      options: {
        // Enable caching for improved performance during
        // development.
        // It uses default OS directory by default. If you need
        // something more custom, pass a path to it.
        // I.e., { cacheDirectory: '<path>' }
        cacheDirectory: true
      }
    }]
  }
})
