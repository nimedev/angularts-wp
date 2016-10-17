/**
 * Main module used to bootstrap de application
 * @module index
 */
/// <reference path="./typings/index.d.ts" />

// Dependencies
import 'angular'
import { constants } from './constants'

// Import base styles before all components
import './styles'
import { appComponent } from './components'

// Constants
const appName = constants.appName

// Define angular app
angular
  .module(appName, [appComponent])
  .config(
  ['$compileProvider', '$logProvider', ($compileProvider, $logProvider) => {
    // Actions in production
    if (constants.env === 'production') {
      // Disable debug data. Enable in development if use Proactor or Batarang
      $compileProvider.debugInfoEnabled(false)

      // Disable log in production
      $logProvider.debugEnabled(false)
    }
  }]
  )
  .constant('constants', constants)

// Load app when document is ready
const htmlDocument = angular.element(document)
const startApp = () => angular.bootstrap(htmlDocument, [appName])
htmlDocument.ready(startApp)