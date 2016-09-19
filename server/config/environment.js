/**
 * Configurations for all environments
 * @module environment
 */
'use strict'

/**
 * Class representing configurations for all environments
 * @class Environment
 */
module.exports = class {
  /**
   * Create a environment object
   */
  constructor() {
    // Environment
    this.env = process.env.NODE_ENV

    // Server port
    this.port = process.env.ANGULARJS_TS_PORT || 3000

    // Server IP
    this.ip = process.env.IP || undefined
  }
}