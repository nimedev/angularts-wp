/**
 * Module for app component.
 * @module app.module
 */

import * as angular from 'angular'
import appComponent from './app.component'

/**
 * Module name
 */
export default angular
  .module('app', [])
  .component('rootApp', appComponent)
  .name
