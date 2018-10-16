/*
 * Wrapper const for Service related end points
 */

const helper = require('./common/helper')

/**
 * Function to GET the list of services from Bus API
 * @param {Object} config Configuration object
 * @returns {Promise}
 */
const getServices = async (config, opts) => {
  const url = helper.buildURLwithParams(`${config.BUSAPI_URL}/bus/services`, opts)
  return helper.reqToBusAPI(config, 'GET', url, null)
}

/**
 * Function to HEAD the list of services from Bus API
 * @param {Object} config Configuration object
 * @returns {Promise}
 */
const headServices = async (config, opts) => {
  const url = helper.buildURLwithParams(`${config.BUSAPI_URL}/bus/services`, opts)
  return helper.reqToBusAPI(config, 'HEAD', url, null)
}

/**
 * Function to create a service using Bus API
 * @param {Object} config Configuration object
 * @param {Object} reqBody Body of the request
 * @returns {Promise}
 */
const createService = async (config, reqBody) => {
  return helper.reqToBusAPI(config, 'POST', `${config.BUSAPI_URL}/bus/services`, reqBody)
}

/**
 * Function to GET the service detail from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @returns {Promise}
 */
const getService = async (config, serviceName) => {
  return helper.reqToBusAPI(config, 'GET', `${config.BUSAPI_URL}/bus/services/${serviceName}`, null)
}

/**
 * Function to HEAD the service detail from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @returns {Promise}
 */
const headService = async (config, serviceName) => {
  return helper.reqToBusAPI(config, 'HEAD', `${config.BUSAPI_URL}/bus/services/${serviceName}`, null)
}

/**
 * Function to update a service using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param {Object} reqBody Body of the request
 * @returns {Promise}
 */
const updateService = async (config, serviceName, reqBody) => {
  return helper.reqToBusAPI(config, 'PUT', `${config.BUSAPI_URL}/bus/services/${serviceName}`, reqBody)
}

/**
 * Function to patch a service using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param {Object} reqBody Body of the request
 * @returns {Promise}
 */
const patchService = async (config, serviceName, reqBody) => {
  return helper.reqToBusAPI(config, 'PATCH', `${config.BUSAPI_URL}/bus/services/${serviceName}`, reqBody)
}

/**
 * Function to delete a service using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @returns {Promise}
 */
const deleteService = async (config, serviceName) => {
  return helper.reqToBusAPI(config, 'DELETE', `${config.BUSAPI_URL}/bus/services/${serviceName}`, null)
}

/**
 * Function to GET service payloads from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @returns {Promise}
 */
const getServicePayloads = async (config, serviceName, opts) => {
  const url = helper.buildURLwithParams(`${config.BUSAPI_URL}/bus/services/${serviceName}/payloads`, opts)
  return helper.reqToBusAPI(config, 'GET', url, null)
}

/**
 * Function to HEAD service payloads from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @returns {Promise}
 */
const headServicePayloads = async (config, serviceName, opts) => {
  const url = helper.buildURLwithParams(`${config.BUSAPI_URL}/bus/services/${serviceName}/payloads`, opts)
  return helper.reqToBusAPI(config, 'HEAD', url, null)
}

/**
 * Function to create a service payload using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param {Object} reqBody Body of the request
 * @returns {Promise}
 */
const createServicePayload = async (config, serviceName, reqBody) => {
  return helper.reqToBusAPI(config, 'POST', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads`, reqBody)
}

/**
 * Function to GET service payload detail from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param (String) payloadName Payload name
 * @returns {Promise}
 */
const getServicePayload = async (config, serviceName, payloadName) => {
  return helper.reqToBusAPI(config, 'GET', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads/${payloadName}`, null)
}

/**
 * Function to HEAD service payload detail from Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param (String) payloadName Payload name
 * @returns {Promise}
 */
const headServicePayload = async (config, serviceName, payloadName) => {
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
const updateServicePayload = async (config, serviceName, payloadName, reqBody) => {
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
const patchServicePayload = async (config, serviceName, payloadName, reqBody) => {
  return helper.reqToBusAPI(config, 'PATCH', `${config.BUSAPI_URL}/bus/services/${serviceName}/payloads/${payloadName}`, reqBody)
}

/**
 * Function to delete service payload using Bus API
 * @param {Object} config Configuration object
 * @param {String} serviceName Service name
 * @param (String) payloadName Payload name
 * @returns {Promise}
 */
const deleteServicePayload = async (config, serviceName, payloadName) => {
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
