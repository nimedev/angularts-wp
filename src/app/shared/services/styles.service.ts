/**
 * Service to use javascript style related functions.
 * @module styles.service
 */

// Dependencies

/**
 * Class representing a stylesService constructor function
 */
export class StylesService {

  // JS class hooks
  public scrollingHook: string = 'is-not-scrolling'

  // Prepare breakpoints according to root fontsize
  public breakpoints: Object = {}

  // Service name
  public static serviceName = 'stylesService'

  // Use the $inject property to ensure proper functionality after minification
  public static $inject = ['$window', 'constants']

  /**
   * Create a stylesService
   * @param {IWindowService} $windows - for DOM manipulation
   * @param {Object} constants - to get CSS breakpoints
   */
  constructor(private $window: ng.IWindowService, private constants) {
    angular.forEach(constants.breakPoints, (value, key) => {
      this.breakpoints[key] = value * this.rootFontSize
    })
  }

  /**
   * @param {string} element - Element to get property.
   * @param {string} property - Name of css property to get.
   * @returns {string} CSS value of a property.
   */
  cssProperty(element, property) {
    return this.$window.getComputedStyle(element, null)
      .getPropertyValue(property)
  }

  /**
   * @returns the re or rem number in pixels
   */
  re2Pixels(reNumber) {
    return reNumber * this.rootFontSize
  }

  // GETTERS & SETTERS
  /**
   * @returns the root font-size.
   */
  get rootFontSize() {
    const fontSize = this.cssProperty(document.documentElement, 'font-size')
    return parseInt(fontSize)
  }
}