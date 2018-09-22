/*
 * Wrapper function for Events related end points
 */

const helper = require('./common/helper')

/**
 * Function to POST the event to Bus API
 * @param {Object} config Configuration object
 * @param {Object} reqBody Body of the request to be Posted
 * @returns {Promise}
 */
function postEvent (config, reqBody) {
  return helper.reqToBusAPI(config, 'POST', `${config.BUSAPI_URL}/bus/events`, reqBody)
}

/**
 * Function to POST the error to Bus API
 * @param {Object} config Configuration object
 * @param {Object} reqBody Body of the request to be Posted
 * @returns {Promise}
 */
function postError (config, reqBody) {
  // Set Error topic from configuration
  reqBody.topic = config.KAFKA_ERROR_TOPIC
  return helper.reqToBusAPI(config, 'POST', `${config.BUSAPI_URL}/bus/events`, reqBody)
}

module.exports = {
  postEvent,
  postError
}
