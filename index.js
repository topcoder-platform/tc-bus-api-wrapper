/*
 * Index file
 */

const joi = require('joi')

module.exports = (config) => {
  const schema = joi.object().keys({
    AUTH0_URL: joi.string().uri().trim().required(),
    AUTH0_AUDIENCE: joi.string().uri().trim().required(),
    TOKEN_CACHE_TIME: joi.number().integer().min(0),
    AUTH0_CLIENT_ID: joi.string().required(),
    AUTH0_CLIENT_SECRET: joi.string().required(),
    BUSAPI_URL: joi.string().uri().trim().required(),
    KAFKA_ERROR_TOPIC: joi.string().required()
  })

  // Validate the arguments
  const result = joi.validate(config, schema)

  if (result.error) {
    throw new Error(result.error.details[0].message)
  }

  // Export functions
  return {
    // Event API functions
    postEvent: async (reqBody) => {
      return require('./src/EventsApi').postEvent(config, reqBody)
    },
    postError: async (reqBody) => {
      return require('./src/EventsApi').postError(config, reqBody)
    },

    // Topics API functions
    getTopics: async () => {
      return require('./src/TopicsApi').getTopics(config)
    },
    headTopics: async () => {
      return require('./src/TopicsApi').headTopics(config)
    },

    // Health checks API functions
    getHealth: async () => {
      return require('./src/HealthChecksApi').getHealth(config)
    },
    headHealth: async () => {
      return require('./src/HealthChecksApi').headHealth(config)
    },

    // Placeholder API functions
    clearPlaceholdersCache: async () => {
      return require('./src/PlaceholdersApi').clearPlaceholdersCache(config)
    },

    // Service API functions
    getServices: async () => {
      return require('./src/ServiceApi').getServices(config)
    },
    headServices: async () => {
      return require('./src/ServiceApi').headServices(config)
    },
    createService: async (reqBody) => {
      return require('./src/ServiceApi').createService(config, reqBody)
    },
    getService: async (serviceName) => {
      return require('./src/ServiceApi').getService(config, serviceName)
    },
    headService: async (serviceName) => {
      return require('./src/ServiceApi').headService(config, serviceName)
    },
    updateService: async (serviceName, reqBody) => {
      return require('./src/ServiceApi').updateService(config, serviceName, reqBody)
    },
    patchService: async (serviceName, reqBody) => {
      return require('./src/ServiceApi').patchService(config, serviceName, reqBody)
    },
    deleteService: async (serviceName) => {
      return require('./src/ServiceApi').deleteService(config, serviceName)
    },

    getServicePayloads: async (serviceName) => {
      return require('./src/ServiceApi').getServicePayloads(config, serviceName)
    },
    headServicePayloads: async (serviceName) => {
      return require('./src/ServiceApi').headServicePayloads(config, serviceName)
    },
    createServicePayload: async (serviceName, reqBody) => {
      return require('./src/ServiceApi').createServicePayload(config, serviceName, reqBody)
    },
    getServicePayload: async (serviceName, payloadName) => {
      return require('./src/ServiceApi').getServicePayload(config, serviceName, payloadName)
    },
    headServicePayload: async (serviceName, payloadName) => {
      return require('./src/ServiceApi').headServicePayload(config, serviceName, payloadName)
    },
    updateServicePayload: async (serviceName, payloadName, reqBody) => {
      return require('./src/ServiceApi').updateServicePayload(config, serviceName, payloadName, reqBody)
    },
    patchServicePayload: async (serviceName, payloadName, reqBody) => {
      return require('./src/ServiceApi').patchServicePayload(config, serviceName, payloadName, reqBody)
    },
    deleteServicePayload: async (serviceName, payloadName) => {
      return require('./src/ServiceApi').deleteServicePayload(config, serviceName, payloadName)
    }

  }
}
