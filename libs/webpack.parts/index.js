/**
 * Group parts of webpack configurations
 * @module webpack.parts
 */

const clean = require('./clean')
const devServer = require('./dev-server')
const extractBundles = require('./extract-bundles')
const extractCSS = require('./extract-css')
const generateSourcemaps = require('./generate-sourcemaps')
const lintCSS = require('./lint-css')
const loadAssets = require('./load-assets')
const loadCSS = require('./load-css')
const loadFonts = require('./load-fonts')
const loadImages = require('./load-images')
const loadJS = require('./load-js')
const loadTS = require('./load-ts')
const minify = require('./minify')

module.exports = {
  clean,
  devServer,
  extractBundles,
  extractCSS,
  generateSourcemaps,
  lintCSS,
  loadAssets,
  loadCSS,
  loadFonts,
  loadImages,
  loadJS,
  loadTS,
  minify
}
