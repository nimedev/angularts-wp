/**
 * @module home.component
 */

// Dependencies
const template  = require('src/app/home/home.component.html')
import './home.component.css'

/**
 * Component name
 */
export const homeComponentName = 'atsHome'

/**
 * Class representing a controller for home component
 */
export class HomeController {

  // Use the $inject property to ensure proper functionality after minification
  public static $inject = ['$translate']

  /**
   * Create a controller
   * @param {Object} $translate - to change language.
   */
  constructor(private $translate) {

  }

  /**
   * Change app langage
   * @param {String} lang - code of language to change
   */
  changeLanguage(lang) {
    this.$translate.use(lang)
  }
}

/**
 * Component object
 */
export const homeComponent: ng.IComponentOptions = {
  controller: HomeController,
  template
}