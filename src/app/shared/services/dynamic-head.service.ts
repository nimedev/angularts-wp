/**
 * Service used to create a listener to change dinamically the title and meta
 * tags of a page.
 * You must start this service calling start method in $postLink hook of root
 * component.
 * To add dynamic title and meta, add a custom object in route configuration.
   $stateProvider
    .state(stateName, {
      url: '/',
      template: '<home></home>',
      data: {
        dynamicHead: {
          title: 'Home view of my website'
        }
      }
    })
 *
 * @module dynamic-head.service
 */

const defaultTitle = 'AngularJS Seed - nimedev'
const defaultDescription = ''

/**
 * Class representing a dynamicHead Service constructor function
 */
export class DynamicHeadService {

  // Service name
  public static serviceName = 'dynamicHeadService'

  // Use the $inject property to ensure proper functionality after minification
  public static $inject = ['$rootScope', '$window']

  /**
   * Create a dynamicHead Service
   * @param {IRootScopeService} $rootScope - to register events handlers.
   * @param {IWindowService} $window - to change page title.
   */
  constructor(private $rootScope: ng.IRootScopeService,
    private $window: ng.IWindowService) {

  }

  /**
   * create listener to change head dynamically when view is ready
   */
  start() {
    this.$rootScope.$on('$stateChangeSuccess', (event, toState) => {
      // Try to get de data to change from state object
      const dynamicHead = toState.data ? toState.data.dynamicHead : {}
      const title = dynamicHead.title || defaultTitle
      const description = dynamicHead.description || defaultDescription

      // Change the title
      this.$window.document.title = title

      // Change meta description
      const metaDescription = this.$window.document
        .querySelector('meta[name=description]')
      metaDescription && metaDescription.setAttribute('content', description)
    })
  }
}