/**
 * Root component
 * @module app.component
 */

// Services to inject
import { DynamicHeadService } from '../shared/services/dynamic-head.service'
import { I18nService } from '../shared/services/i18n.service'

/**
 * Component name
 */
export const appComponentName = 'appRoot'

/**
 * Class representing a controller for app component
 */
export class AppController {

  // Use the $inject property to ensure proper functionality after minification
  public static $inject = ['$log', 'constants', 'dynamicHeadService',
    'i18nService']

  /**
   * Create a controller
   * @param {ILogService} $log - to log in debug mode.
   * @param {Object} constants - to log constants object in some environments.
   * @param {DynamicHeadService} dynamicHeadService - to add listeners for
   *  this component.
   * @param {I18nService} i18nService - to load i18n text.
   */
  constructor(private $log: ng.ILogService, private constants,
    private dynamicHeadService: DynamicHeadService,
    private i18nService: I18nService) {

  }

  /**
   * Component initialization
   */
  $onInit() {
    // Get i18n texts and load dynamic head elements.
    this.i18nService.load()
      .then(() => this.dynamicHeadService.update())

    // Log constants object
    this.$log.debug('Constants object', this.constants)
  }

  /**
   * When component is linked
   */
  $postLink() {
    // Start listener for dynamicHeadService
    this.dynamicHeadService.create()
  }
}

/**
 * Component object
 */
export const appComponent: ng.IComponentOptions = {
  controller: AppController,
  template: '<main ui-view autoscroll></main>'
}