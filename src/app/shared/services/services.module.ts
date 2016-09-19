/**
 * Group shared services for all app
 * @module services
 */

// Dependencies

// Feature modules

// Shared services
import { DynamicHeadService } from './dynamic-head.service'
import { StylesService } from './styles.service'

/**
 * Module name
 */
export const servicesModule = 'services'

// Define module
angular
  .module(servicesModule, [])
  .service(DynamicHeadService.serviceName, DynamicHeadService)
  .service(StylesService.serviceName, StylesService)