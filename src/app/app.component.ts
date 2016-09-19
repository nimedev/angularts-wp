/**
 * Root component
 * @module app.component
 */

// Services to inject
import { DynamicHeadService } from './shared/services/dynamic-head.service'

/**
 * Component name
 */
export const appComponentName = 'appRoot'

/**
 * Class representing a controller for app component
 */
export class AppController {

  // Use the $inject property to ensure proper functionality after minification
  public static $inject = ['$log', 'constants', 'dynamicHeadService']

  /**
   * Create a controller
   * @param {ILogService} $log - to log in debug mode.
   * @param {Object} constants - to log constants object in some environments.
   * @param {DynamicHeadService} dynamicHeadService - to add listeners for
   *  this component.
   */
  constructor(private $log: ng.ILogService, private constants,
    private dynamicHeadService: DynamicHeadService) {

  }

  /**
   * Component initialization
   */
  $onInit() {
    // Log constants object
    this.$log.debug('Config object', this.constants)
  }

  /**
   * When component is linked
   */
  $postLink() {
    // Start listener for route success to change title and meta tags
    this.dynamicHeadService.start()
  }
}

/**
 * Component object
 */
export const appComponent: ng.IComponentOptions = {
  controller: AppController,
  template: '<main ui-view autoscroll></main>'
}