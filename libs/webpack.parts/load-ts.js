/**
 * @module load-ts
 * @member webpack.parts
 */

/**
 * Configuration for TypeScript linter and loader
 */
module.exports = paths => ({
  module: {
    rules: [{
      test: /\.ts$/,
      include: paths,
      enforce: 'pre',

      use: 'tslint-loader'
    }, {
      test: /\.ts$/,
      include: paths,

      use: 'ts-loader'
    }]
  }
})
