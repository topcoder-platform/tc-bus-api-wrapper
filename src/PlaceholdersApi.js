/*
 * Wrapper function for Placeholder related end points
 */

const helper = require('./common/helper')

/**
 * Function to clear placeholders cache in Bus API
 * @param {Object} config Configuration object
 * @returns {Promise}
 */
function clearPlaceholdersCache (config) {
  return helper.reqToBusAPI(config, 'DELETE', `${config.BUSAPI_URL}/bus/placeholders`, null)
}

module.exports = {
  clearPlaceholdersCache
}
