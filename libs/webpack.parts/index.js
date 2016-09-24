/**
 * @module webpack.parts
 */

// Configuration parts
const postcss = require('./postcss')
const tslint = require('./tslint')

/**
 * Group common webpack configurations
 */
module.exports = {
  postcss,
  tslint
}