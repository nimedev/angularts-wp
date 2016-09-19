/**
 * Constants object for application.
 * @module constants
 */
'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Siblings & Childs modules
const envUrl = require('./env-url')

// Get jspm dependencies from package.json
const appSetting = require('../package')

/**
 * Constants object for application
 */
module.exports = {
  // Application name for angular
  appName: 'angularts-wp',

  // Application version
  version: appSetting.version,

  // API base url
  restUrl: `http://${envUrl.apiHost}:${envUrl.apiPort}/api`,

  // Save the environment
  env: process.env.NODE_ENV
}