/**
 * Module for app component.
 * @module app.module
 */

// Dependencies
import 'angular-cookies'
import 'angular-messages'
import 'angular-ui-router'
import 'angular-translate'
import 'angular-translate-handler-log'
import 'angular-translate-loader-static-files'
import 'angular-translate-storage-cookie'
import 'angular-translate-storage-local'
import { appComponent, appComponentName } from './app.component'
import { appConfig } from './app.config'

// Feature modules
import { baseModule } from './base'
import { homeModule } from './home'

// Shared feature modules
import { directivesModule } from '../shared/directives'
import { interceptorModule } from '../shared/interceptor'
import { servicesModule } from '../shared/services'

// Application constants
import appConstants from '../shared/app.constants'

/**
 * Module name
 */
export const appModule = 'app'

// Define the module
angular
  .module(appModule, [
    // Dependencies
    'ngCookies',
    'ngMessages',
    'ui.router',
    'pascalprecht.translate',

    // Feature Modules
    baseModule,
    homeModule,

    // Shared
    directivesModule,
    interceptorModule,
    servicesModule
  ])
  .component(appComponentName, appComponent)
  .config(appConfig)
  .constant('constants', appConstants)