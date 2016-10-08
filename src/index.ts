/**
 * Main module used to bootstrap de application
 * @module index
 */
/// <reference path="../typings/index.d.ts" />

// Dependencies
import 'angular'
import './styles'

// Application component
import { appModule } from './app'

// Application constants
import appConstants from './shared/app.constants'

// Constants
const appName = appConstants.appName

// Variables
let htmlDocument
let startApp

// Define angular app.
angular
  .module(appName, [appModule])

// Load app when document is ready
htmlDocument = angular.element(document)

startApp = () => angular.bootstrap(htmlDocument, [appName])

htmlDocument.ready(startApp)