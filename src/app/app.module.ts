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
import { baseModule } from './base/index'
import { homeModule } from './home/index'

// Shared feature modules
import { directivesModule } from './shared/directives/index'
import { interceptorModule } from './shared/interceptor/index'
import { servicesModule } from './shared/services/index'

// Application constants
import appConstants from './app.constants'

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