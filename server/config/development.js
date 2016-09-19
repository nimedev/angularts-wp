/* global __baseDir */
/** @module development */
'use strict'

// Core modules
const path = require('path')

// App modules
const Environment = require('./environment')

/**
 * Class representing development specific configuration
 * @extends Environment
 */
module.exports = class extends Environment {
  /**
   * Create a development configuration object
   */
  constructor() {
    super()
    const envPort = process.env.ANGULARJS_TS_PORT

    // Server port (Increase the port by one used for lite server script)
    this.port = envPort ? Number.parseInt(envPort) + 1 : 3001

    // Application path
    this.appPath = path.normalize(`${__baseDir}/../src`)

    // Static paths
    this.staticPaths = ['../dist', '../src', '../']
  }
}