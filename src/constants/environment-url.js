/**
 * Return the url of the resources according with environment.
 * @module environment-url
 */
'use strict'

// npm modules
const ip = require('ip')

/**
 * Ulrs for each resource of the webapplication
 */
module.exports = {
  /** Url for api */
  apiUrl: process.env.ANGULARTS_WP_API_URL || `http://${ip.address()}:${8080}/api`
}