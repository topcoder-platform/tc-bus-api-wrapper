/*
 * Wrapper function for Service related end points
 */

const helper = require('./common/helper')

/**
 * Function to GET the list of services from Bus API
 * @param {Object} config Configuration object
 * @returns {Promise}
 */
function getServices (config) {
  return helper.reqToBusAPI(config, 'GET', `${config.BUSAPI_URL}/bus/services`, null)
}

/**
 * Function to HEAD the list of services from Bus API
 * @param {Object} config Configuration object
 * @returns {Promise}
 */
function headServices (config) {
  return helper.reqToBusAPI(config, 'HEAD', `${config.BUSAPI_URL}/bus/services`, null)
}

/**
 * Function to create a service using Bus API
 * @param {Object} config Configuration object
 * @param {Object} reqBody Body of the request
 * @returns {Promise}
 */
function createService (config, reqBody) {
  return helper.reqToBusAPI(config, 'POST', `${config.BUSAPI_URL}/bus/services`, reqBody)
}

/**
 * Function to GET the service detail from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @returns {Promise}
 */
function getService (config, serviceName) {
  return helper.reqToBusAPI(config, 'GET', `${config.BUSAPI_URL}/bus/services/${serviceName}`, null)
}

/**
 * Function to HEAD the service detail from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @returns {Promise}
 */
function headService (config, serviceName) {
  return helper.reqToBusAPI(config, 'HEAD', `${config.BUSAPI_URL}/bus/services/${serviceName}`, null)
}

/**
 * Function to update a service using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param {Object} reqBody Body of the request
 * @returns {Promise}
 */
function updateService (config, serviceName, reqBody) {
  return helper.reqToBusAPI(config, 'PUT', `${config.BUSAPI_URL}/bus/services/${serviceName}`, reqBody)
}

/**
 * Function to patch a service using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param {Object} reqBody Body of the request
 * @returns {Promise}
 */
function patchService (config, serviceName, reqBody) {
  return helper.reqToBusAPI(config, 'PATCH', `${config.BUSAPI_URL}/bus/services/${serviceName}`, reqBody)
}

/**
 * Function to delete a service using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @returns {Promise}
 */
function deleteService (config, serviceName) {
  return helper.reqToBusAPI(config, 'DELETE', `${config.BUSAPI_URL}/bus/services/${serviceName}`, null)
}

/**
 * Function to GET service payloads from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @returns {Promise}
 */
function getServicePayloads (config, serviceName) {
  return helper.reqToBusAPI(config, 'GET', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads`, null)
}

/**
 * Function to HEAD service payloads from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @returns {Promise}
 */
function headServicePayloads (config, serviceName) {
  return helper.reqToBusAPI(config, 'HEAD', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads`, null)
}

/**
 * Function to create a service payload using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param {Object} reqBody Body of the request
 * @returns {Promise}
 */
function createServicePayload (config, serviceName, reqBody) {
  return helper.reqToBusAPI(config, 'POST', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads`, reqBody)
}

/**
 * Function to GET service payload detail from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param (String) payloadName Payload name
 * @returns {Promise}
 */
function getServicePayload (config, serviceName, payloadName) {
  return helper.reqToBusAPI(config, 'GET', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads/${payloadName}`, null)
}

/**
 * Function to HEAD service payload detail from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param (String) payloadName Payload name
 * @returns {Promise}
 */
function headServicePayload (config, serviceName, payloadName) {
  return helper.reqToBusAPI(config, 'HEAD', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads/${payloadName}`, null)
}

/**
 * Function to update service payload using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param (String) payloadName Payload name
 * @param {Object} reqBody Body of the request
 * @returns {Promise}
 */
function updateServicePayload (config, serviceName, payloadName, reqBody) {
  return helper.reqToBusAPI(config, 'PUT', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads/${payloadName}`, reqBody)
}

/**
 * Function to patch service payload using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param (String) payloadName Payload name
 * @param {Object} reqBody Body of the request
 * @returns {Promise}
 */
function patchServicePayload (config, serviceName, payloadName, reqBody) {
  return helper.reqToBusAPI(config, 'PATCH', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads/${payloadName}`, reqBody)
}

/**
 * Function to delete service payload using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param (String) payloadName Payload name
 * @returns {Promise}
 */
function deleteServicePayload (config, serviceName, payloadName) {
  return helper.reqToBusAPI(config, 'DELETE', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads/${payloadName}`, null)
}

module.exports = {
  getServices,
  headServices,
  createService,
  getService,
  headService,
  updateService,
  patchService,
  deleteService,
  getServicePayloads,
  headServicePayloads,
  createServicePayload,
  getServicePayload,
  headServicePayload,
  updateServicePayload,
  patchServicePayload,
  deleteServicePayload
}
