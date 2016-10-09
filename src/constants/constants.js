/**
 * Constants object for application.
 * @module constants
 */
'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Siblings & Childs modules
const environmentUrl = require('./environment-url')

// Get jspm dependencies from package.json
const appSetting = require('../../package')

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