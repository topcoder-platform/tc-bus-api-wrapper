/*
 * Wrapper function for Health check related end points
 */

const helper = require('./common/helper')

/**
 * Function to GET the health status from Bus API
 * @param {Object} config Configuration object
 * @returns {Promise}
 */
const getHealth = async (config) => {
  return helper.reqToBusAPI(config, 'GET', `${config.BUSAPI_URL}/bus/health`, null)
}

/**
 * Function to HEAD the health status from Bus API
 * @param {Object} config Configuration object
 * @returns {Promise}
 */
const headHealth = async (config) => {
  return helper.reqToBusAPI(config, 'HEAD', `${config.BUSAPI_URL}/bus/health`, null)
}

module.exports = {
  getHealth,
  headHealth
}
