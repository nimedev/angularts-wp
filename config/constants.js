/**
 * Constants object for the application.
 * @module constants
 * @memberOf config
 */
'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// App modules
const appSetting = require('../package')
const environmentUrl = require('./environment-url')

/**
 * Constants object for application
 */
module.exports = {
  // Application name for angular
  appName: 'angularts-wp',

  // Application version
  version: appSetting.version,

  // API base url
  restUrl: environmentUrl.apiUrl,

  // Save the environment
  env: process.env.NODE_ENV
}