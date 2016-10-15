/**
 * @module tslint
 * @memberOf webpack.parts
 */

/**
 * Config object used in webpack.config files for tslint loader.
 */
module.exports = {
  configuration: {
    exclude: './src/constants/constants.ts'
  }
}