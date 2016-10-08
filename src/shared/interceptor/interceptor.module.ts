/**
 * Angular module to attach interceptors.
 * @module interceptor
 */

// Dependencies
// import { errorInterceptorFactory } from './error-interceptor.factory'

/**
 * Module name
 */
export const interceptorModule = 'interceptor'

// Define module
angular
  .module(interceptorModule, [])
  .config(['$httpProvider', $httpProvider => {
    // Attach error interceptor service to the http response
    // $httpProvider.interceptors.push(errorInterceptorFactory)
  }])