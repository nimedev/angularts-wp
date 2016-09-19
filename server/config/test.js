/* global __baseDir */
/** @module test */
'use strict'

// Core modules
const path = require('path')

// App modules
const Environment = require('./environment')

/**
 * Class representing test specific configuration
 * @extends Environment
 */
module.exports = class extends Environment {
  /**
   * Create a test configuration object
   */
  constructor() {
    super()

    // Application path
    this.appPath = path.normalize(`${__baseDir}/../dist`)

    // Static paths
    this.staticPaths = ['../dist']
  }
}