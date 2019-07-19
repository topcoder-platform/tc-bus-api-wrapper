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
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC', 'AUTH0_PROXY_SERVER_URL']))
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
busApiClient
  .getTopics()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

await busApiClient.postEvent(reqBody)
```

Refer `index.js` for the list of available wrapper functions

## Documentation for Bus API wrapper methods

All URIs are relative to **BUSAPI_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**postEvent**](docs/EventsApi.md#postEvent) | **POST** /bus/events | Post event to the message bus.
[**postError**](docs/EventsApi.md#postError) | **POST** /bus/events | Post error event to the message bus. This method is same as postEvent except that topic will be set by the wrapper itself.
[**getHealth**](docs/HealthchecksApi.md#getHealth) | **GET** /bus/health | Check API is healthy.
[**headHealth**](docs/HealthchecksApi.md#headHealth) | **HEAD** /bus/health | Get only response status and headers information but no response body for the endpoint. 
[**clearPlaceholdersCache**](docs/PlaceholdersApi.md#clearPlaceholdersCache) | **DELETE** /bus/placeholders | Clear placeholders cache.
[**createService**](docs/ServiceApi.md#createService) | **POST** /bus/services | Create a service.
[**createServicePayload**](docs/ServiceApi.md#createServicePayload) | **POST** /bus/services/{serviceName}/payloads | Create the service payload.
[**deleteService**](docs/ServiceApi.md#deleteService) | **DELETE** /bus/services/{serviceName} | Delete the service.
[**deleteServicePayload**](docs/ServiceApi.md#deleteServicePayload) | **DELETE** /bus/services/{serviceName}/payloads/{payloadName} | Delete the service payload.
[**getService**](docs/ServiceApi.md#getService) | **GET** /bus/services/{serviceName} | Get the service.
[**getServicePayload**](docs/ServiceApi.md#getServicePayload) | **GET** /bus/services/{serviceName}/payloads/{payloadName} | Get the service payload.
[**getServicePayloads**](docs/ServiceApi.md#getServicePayloads) | **GET** /bus/services/{serviceName}/payloads | Search the service payloads.
[**getServices**](docs/ServiceApi.md#getServices) | **GET** /bus/services | Get all services.
[**headService**](docs/ServiceApi.md#headService) | **HEAD** /bus/services/{serviceName} | Get only response status and headers information but no response body for the endpoint.
[**headServicePayload**](docs/ServiceApi.md#headServicePayload) | **HEAD** /bus/services/{serviceName}/payloads/{payloadName} | Get only response status and headers information but no response body for the endpoint.
[**headServicePayloads**](docs/ServiceApi.md#headServicePayloads) | **HEAD** /bus/services/{serviceName}/payloads | Get only response status and headers information but no response body for the endpoint.
[**headServices**](docs/ServiceApi.md#headServices) | **HEAD** /bus/services | Get only response status and headers information but no response body for the endpoint.
[**patchService**](docs/ServiceApi.md#patchService) | **PATCH** /bus/services/{serviceName} | Partially update the service.
[**patchServicePayload**](docs/ServiceApi.md#patchServicePayload) | **PATCH** /bus/services/{serviceName}/payloads/{payloadName} | Partially update the payload.
[**updateService**](docs/ServiceApi.md#updateService) | **PUT** /bus/services/{serviceName} | Update the service.
[**updateServicePayload**](docs/ServiceApi.md#updateServicePayload) | **PUT** /bus/services/{serviceName}/payloads/{payloadName} | Update the service payload.
[**getTopics**](docs/TopicsApi.md#getTopics) | **GET** /bus/topics | Get topics.
[**headTopics**](docs/TopicsApi.md#headTopics) | **HEAD** /bus/topics | Get only response status and headers information but no response body for the endpoint.

## Authorization

Bus API wrapper internally generates a **JWT token using Auth0 credentials** and pass it in the `Authorization` header.

## Running tests

Following environment variables need to be set up before running the tests

```
- TEST_AUTH0_URL
- TEST_AUTH0_AUDIENCE
- TEST_AUTH0_CLIENT_ID
- TEST_AUTH0_CLIENT_SECRET
- TEST_BUS_API_URL
- TEST_KAFKA_ERROR_TOPIC
```

Refer to Step # 2 in [this section](#how-to-use-this-wrapper) to learn more about the configuration variables.

To run the tests alone, execute the command

```
npm run test
```

To run tests with coverage report, execute the command

```
npm run cov
```
