/**
 * Main application file
 * @module server
 */
'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Set root application path in global object
global.__baseDir = __dirname

// BASE SETUP
// ======================================

// Core modules
const path = require('path')

// npm modules
const express = require('express')

// App modules
const appConfig = require('./config')
const configExpress = require('./config-express')

// Get jspm dependencies from package.json
const appSetting = require('../package')

// Constants & Variables
// Define our app using express
const app = express()

// APP CONFIGURATION ==================
// ====================================
// Setup express middleware
configExpress(app)

// ROUTES =============================
// ====================================
// All other routes should redirect to the index.html
app.route('/*')
  .get((req, res) => {
    res.sendFile(path.resolve(appConfig.appPath + '/index.html'))
  })


// START THE SERVER
// ====================================
app.listen(appConfig.port, appConfig.ip, () => {
  console.log('ANGULARJS_TS-SERVER %s running on port %d, in %s mode',
    appSetting.version, appConfig.port, app.get('env'))
})