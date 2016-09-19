/**
 * Function used in config module of home component to config ui-router.
 * @module home.config
 */

// Dependencies

/**
 * Name of the state
 */
export const stateName = 'homeState'

// Use the $inject property to ensure proper functionality after minification
homeConfig.$inject = ['$stateProvider']

/**
 * @param {Object} $stateProvider - to set route of home component
 */
export function homeConfig($stateProvider) {
  $stateProvider
    .state(stateName, {
      url: '/',
      template: '<ats-home></ats-home>',
      data: {
        dynamicHead: {
          title: 'AngularJS seed - Home',
          description: 'AngularJS seed, angular typescritp'
        }
      }
    })
}