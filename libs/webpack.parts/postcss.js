/**
 * @module postcss
 * @memberOf webpack.parts
 */

// Postcss plugins
const atImport = require('postcss-import')
const autoprefixer = require('autoprefixer')
const calc = require('postcss-calc')
const colorFunction = require('postcss-color-function')
const customMedia = require('postcss-custom-media')
const customProperties = require('postcss-custom-properties')
const mixins = require('postcss-mixins')
const nested = require('postcss-nested')
const stylelint = require('stylelint')

/**
 * Config function used in webpack.config files for postcss loader.
 */
module.exports = () => {
  return [
    atImport({
      plugins: [
        stylelint
      ]
    }),
    mixins,
    customMedia,
    customProperties,
    nested,
    calc,
    colorFunction,
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
}