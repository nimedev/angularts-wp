/**
 * @module lint-css
 * @member webpack.parts
 */

const stylelint = require('stylelint')

module.exports = paths => ({
  module: {
    rules: [{
      test: /\.css$/,
      include: paths,
      enforce: 'pre',

      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [stylelint]
      }
    }]
  }
})
