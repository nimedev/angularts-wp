// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const path = require('path')
const ip = require('ip')
const opener = require('opener')
const stylelint = require('stylelint')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackKit = require('webpack-kit-nimedev-ts')

const host = process.env.ANGULARTS_WP_HOST || ip.address()
const port = process.env.ANGULARTS_WP_PORT || 3000
const apiUrl = process.env.ANGULARTS_WP_API_URL || `http://${ip.address()}:${8080}/api`
const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist'),
  images: path.join(__dirname, 'app/assets/images'),
  icons: path.join(__dirname, 'app/assets/icons'),
  fonts: path.join(__dirname, 'app/assets/fonts')
}

const common = merge([
  // Common settings
  {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.dist,
      filename: '[name].js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          ANGULARTS_WP_API_URL: JSON.stringify(apiUrl)
        }
      })
    ],
    resolve: {
      extensions: ['.ts', '.js', '.json', '.css']
    }
  },
  webpackKit.htmlPlugin(),
  webpackKit.lintCSS(stylelint, { include: PATHS.app }),
  webpackKit.loadHtml({ include: PATHS.app }),
  webpackKit.loadTS({ include: PATHS.app }),
  webpackKit.loadImages({
    include: PATHS.images,
    options: {
      name: './assets/images/[name].[hash].[ext]',
      limit: 25000
    }
  }),
  webpackKit.loadSvgSprite({
    include: PATHS.icons,
    options: {
      name: './assets/icons/[name].[hash].[ext]'
    }
  }),
  webpackKit.loadFonts({ include: PATHS.fonts }),
  webpackKit.loadAssets({ include: PATHS.app })
])

module.exports = ({ target }) => {
  // Return production configuration
  if (target === 'production') {
    return merge([
      common,
      {
        output: {
          filename: '[name].[chunkhash].js'
        },
        plugins: [
          new webpack.HashedModuleIdsPlugin()
        ]
      },
      webpackKit.extractBundles(webpack),
      webpackKit.cleanPlugin(PATHS.dist),
      webpackKit.loadJS({ include: PATHS.app }),
      webpackKit.minify(webpack),
      webpackKit.extractCSS({ include: PATHS.app })
    ])
  }

  // Run opener
  opener(`http://${host}:${port}`)

  // Return development configurations
  return merge([
    common,
    {
      plugins: [
        new webpack.NamedModulesPlugin()
      ]
    },
    webpackKit.generateSourcemaps('#inline-source-map'),
    webpackKit.loadCSS({ include: PATHS.app }),
    webpackKit.devServer(webpack, { host, port }),
    webpackKit.loadJS({
      include: PATHS.app,
      eslintOptions: {
        // Emit warnings over errors to avoid crashing
        // HMR on error.
        emitWarning: true
      }
    })
  ])
}
