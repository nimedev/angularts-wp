/**
 * Service to get i18n text.
 * @module i18n.service
 */

/**
 * Class representing a i18nService constructor function
 */
export class I18nService {

  // Store text loaded by service function
  public texts: Array<string> = []

  // Service name
  public static serviceName = 'i18nService'

  // Use the $inject property to ensure proper functionality after minification
  public static $inject = ['$log', '$rootScope', '$translate']

  /**
   * Create a i18nService
   * @param {ILogService} $log - to log in development mode.
   * @param {IRootScopeService} $rootScope - to emit events.
   * @param {Object} $translate - to get i18n texts using translate service
   *  and change language.
   */
  constructor(private $log: ng.ILogService,
    private $rootScope: ng.IRootScopeService, private $translate) {

  }

  /**
   * Change app langage
   * @param {String} lang - code of language to change
   */
  changeLanguage(lang) {
    this.$translate.use(lang)
      .then(() => this.load())
  }

  /**
   * Get app texts
   */
  load() {
    return this.$translate([
      'HOME.HEAD_TITLE',
      'HOME.HEAD_DESCRIPTION'
    ]).then(translations => {
      angular.copy(translations, this.texts)
      this.$rootScope.$emit('i18nTextsLoaded')
      this.$log.debug('[i18n.service] loaded!')
      return this.texts
    })
  }
}