/**
 * Config function to declare in config element of app component.
 * @module app.config
 */

// Dependencies
import defaultLanguage from 'src/assets/i18n/locale-en.json'
import appConstants from './app.constants'

// Injection array for minification compatibility
appConfig.$inject = [
  '$compileProvider',
  '$locationProvider',
  '$logProvider',
  '$translateProvider',
  '$urlRouterProvider',
  '$uiViewScrollProvider'
]

/**
 * Config function for app component
 * @param {Object} $compileProvider - to disable use of proactor.
 * @param {Object} $locationProvider - to use HTML5 history API.
 * @param {Object} $logProvider - to enable logs in development.
 * @param {Object} $translateProvider - to config i18n.
 * @param {Object} $urlRouterProvider - to set otherwise route.
 * @param {Object} $uiViewScrollProvider - to config scrolls in ui-router.
 */
export function appConfig($compileProvider, $locationProvider, $logProvider,
  $translateProvider, $urlRouterProvider, $uiViewScrollProvider) {
  // use the HTML5 History API
  $locationProvider.html5Mode(true)

  // Redirect path to * urls
  $urlRouterProvider.otherwise('/')

  // Use the core $anchorScroll
  $uiViewScrollProvider.useAnchorScroll()

  // angular-translate configuration
  $translateProvider.translations('en', defaultLanguage)
  $translateProvider.useStaticFilesLoader({
    prefix: 'assets/i18n/locale-',
    suffix: '.json'
  })
  $translateProvider.preferredLanguage('en')
  $translateProvider.fallbackLanguage('en')
  $translateProvider.useLocalStorage()
  $translateProvider.useSanitizeValueStrategy('escape')
  $translateProvider.useMissingTranslationHandlerLog()

  // Disable in production
  if (appConstants.env === 'production') {
    // Disable debug data. Enable in development if use Proactor or Batarang
    $compileProvider.debugInfoEnabled(false)

    // Disable log in production
    $logProvider.debugEnabled(false)
  }
}