/**
 * @module webpack.parts
 */

// Configuration parts
const clean = require('./clean')
const copy = require('./copy')
const devServer = require('./dev-server')
const extractCSS = require('./extract-css')
const minify = require('./minify')
const postcss = require('./postcss')
const setupCSS = require('./setup-css')

/**
 * Group parts of webpack configurations
 */
module.exports = {
  clean,
  copy,
  devServer,
  extractCSS,
  minify,
  postcss,
  setupCSS
}