// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const path = require('path')
const ip = require('ip')
const opener = require('opener')
const stylelint = require('stylelint')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackParts = require('webpack-parts-nimedev')

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
  webpackParts.htmlPlugin(),
  webpackParts.lintCSS(stylelint, { include: PATHS.app }),
  webpackParts.loadHtml({ include: PATHS.app }),
  webpackParts.loadTS({ include: PATHS.app }),
  webpackParts.loadImages({
    include: PATHS.images,
    options: {
      name: './assets/images/[name].[hash].[ext]',
      limit: 25000
    }
  }),
  webpackParts.loadSvgSprite({
    include: PATHS.icons,
    options: {
      name: './assets/icons/[name].[hash].[ext]'
    }
  }),
  webpackParts.loadFonts({ include: PATHS.fonts }),
  webpackParts.loadAssets({ include: PATHS.app })
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
      webpackParts.extractBundles(webpack),
      webpackParts.cleanPlugin(PATHS.dist),
      webpackParts.loadJS({ include: PATHS.app }),
      webpackParts.minify(webpack),
      webpackParts.extractCSS({ include: PATHS.app })
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
    webpackParts.generateSourcemaps('#inline-source-map'),
    webpackParts.loadCSS({ include: PATHS.app }),
    webpackParts.devServer(webpack, { host, port }),
    webpackParts.loadJS({
      include: PATHS.app,
      eslintOptions: {
        // Emit warnings over errors to avoid crashing
        // HMR on error.
        emitWarning: true
      }
    })
  ])
}
