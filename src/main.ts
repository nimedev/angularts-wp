/**
 * Main module used to bootstrap de application
 * @module main
 */
/// <reference path="../typings/index.d.ts" />

// Dependencies
import 'angular'
import './styles/style.css'

// Application component
import { appModule, appConstants } from './app/index'

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