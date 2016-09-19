/**
 * Return the hosts and ports of the resources according with environment.
 * @module env-url
 */
'use strict'

// npm modules
const ip = require('ip')

/**
 * Host and port for each resource of the webapplication
 */
module.exports = {
  /** Host and port for api */
  apiHost: process.env.YGH_API_HOST || ip.address(),
  apiPort: process.env.YGH_API_PORT || 8080
}