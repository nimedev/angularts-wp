/**
 * @module home.component
 */

// Dependencies
const template  = require('./home.component.html')
import './home.component.css'

// Services to inject
import { I18nService } from '../../shared/services/i18n.service'

/**
 * Component name
 */
export const homeComponentName = 'atsHome'

/**
 * Class representing a controller for home component
 */
export class HomeController {

  // Use the $inject property to ensure proper functionality after minification
  public static $inject = ['i18nService']

  /**
   * Create a controller
   * @param {I18nService} i18nService - to change language.
   */
  constructor(private i18nService: I18nService) {

  }

  /**
   * Change app langage
   * @param {String} lang - code of language to change
   */
  changeLanguage(lang) {
    this.i18nService.changeLanguage(lang)
  }
}

/**
 * Component object
 */
export const homeComponent: ng.IComponentOptions = {
  controller: HomeController,
  template
}