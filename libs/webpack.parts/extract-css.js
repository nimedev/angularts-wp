/**
 * @module extract-css
 * @member webpack.parts
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Configurations for ExtractTextPlugin
 */
module.exports = paths => ({
  module: {
    rules: [
      // Extract CSS during build
      {
        test: /\.css$/,
        // Restrict extraction process to the given
        // paths.
        include: paths,

        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [{
            loader: 'css-loader',
            query: {
              import: false,
              importLoaders: 1,

              // Use css nano options
              minimize: {
                reduceIdents: {
                  keyframes: false
                },
                zindex: false
              }
            }
          }, 'postcss-loader']
        })
      }
    ]
  },
  plugins: [
    // Output extracted CSS to a file
    new ExtractTextPlugin('styles.[contenthash].css')
  ]
})
