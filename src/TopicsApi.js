/*
 * Wrapper function for Topics related end points
 */

const helper = require('./common/helper')

/**
 * Function to GET the list of topics from Bus API
 * @param {Object} config Configuration object
 * @returns {Promise}
 */
const getTopics = async (config) => {
  return helper.reqToBusAPI(config, 'GET', `${config.BUSAPI_URL}/bus/topics`, null)
}

/**
 * Function to HEAD the list of topics from Bus API
 * @param {Object} config Configuration object
 * @returns {Promise}
 */
const headTopics = async (config) => {
  return helper.reqToBusAPI(config, 'HEAD', `${config.BUSAPI_URL}/bus/topics`, null)
}

module.exports = {
  getTopics,
  headTopics
}
