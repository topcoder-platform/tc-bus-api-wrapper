# tc-bus-api-wrapper

Wrapper library for Topcoder Bus API

## How to use this Wrapper

1. Include the wrapper in package.json as follows

```
"tc-bus-api-wrapper": "topcoder-platform/tc-bus-api-wrapper.git"
```

2. Create an instance of this wrapper with the configuration variables listed below


```
const busApi = require('tc-bus-api-wrapper')
busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))
```

**Configuration / Environment variables:**

*Auth0 related variables:*
	- AUTH0_URL
	- AUTH0_AUDIENCE
	- TOKEN_CACHE_TIME (optional)
	- AUTH0_CLIENT_ID

- BUSAPI_URL - Bus API URL. E.g. `https://api.topcoder-dev.com/v5`

- KAFKA_ERROR_TOPIC - Error topic in Kafka to which error message need to be posted

3. Every function in this wrapper will return a promise, Handling promises is at the caller end. Call the functions with appropriate arguments

E.g.

```
const result = yield busApiClient.getTopics()

yield busApiClient.postEvent(reqBody)
```

Refer `index.js` for the list of available wrapper functions