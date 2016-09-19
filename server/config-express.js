/* global __baseDir */
/**
 * Set global middleware for all app
 * @module config-express
 */
'use strict'

// Core modules
const path = require('path')

// npm modules
const compression = require('compression')
const express = require('express')

// App modules
const appConfig = require('./config')

/**
 * Set express middleware
 */
module.exports = app => {
  // Compact JSON responses and the static files to GZIP format.
  app.use(compression())

  // Set static paths
  for (let staticPath of appConfig.staticPaths) {
    app.use('/', express.static(path.normalize(`${__baseDir}/${staticPath}`)))
  }
}