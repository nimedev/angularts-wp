/**
 * Open the default browser of system with the url of the application for
 * development.
 * @module opener
 */
'use strict'

// npm modules
const ip = require('ip')
const opener = require('opener')

// Constants & Variables
const host = process.env.ANGULARTS_WP_HOST || ip.address()
const port = process.env.ANGULARTS_WP_PORT || 3000

// Run opener
opener(`http://${host}:${port}`)