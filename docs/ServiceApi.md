# Service Api

All URIs are relative to **BUSAPI_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**createService**](ServiceApi.md#createService) | **POST** /bus/services | Create a service.
[**createServicePayload**](ServiceApi.md#createServicePayload) | **POST** /bus/services/{serviceName}/payloads | Create the service payload.
[**deleteService**](ServiceApi.md#deleteService) | **DELETE** /bus/services/{serviceName} | Delete the service.
[**deleteServicePayload**](ServiceApi.md#deleteServicePayload) | **DELETE** /bus/services/{serviceName}/payloads/{payloadName} | Delete the service payload.
[**getService**](ServiceApi.md#getService) | **GET** /bus/services/{serviceName} | Get the service.
[**getServicePayload**](ServiceApi.md#getServicePayload) | **GET** /bus/services/{serviceName}/payloads/{payloadName} | Get the service payload.
[**getServicePayloads**](ServiceApi.md#getServicePayloads) | **GET** /bus/services/{serviceName}/payloads | Search the service payloads.
[**getServices**](ServiceApi.md#getServices) | **GET** /bus/services | Get all services.
[**headService**](ServiceApi.md#headService) | **HEAD** /bus/services/{serviceName} | Get only response status and headers information but no response body for the endpoint.
[**headServicePayload**](ServiceApi.md#headServicePayload) | **HEAD** /bus/services/{serviceName}/payloads/{payloadName} | Get only response status and headers information but no response body for the endpoint.
[**headServicePayloads**](ServiceApi.md#headServicePayloads) | **HEAD** /bus/services/{serviceName}/payloads | Get only response status and headers information but no response body for the endpoint.
[**headServices**](ServiceApi.md#headServices) | **HEAD** /bus/services | Get only response status and headers information but no response body for the endpoint.
[**patchService**](ServiceApi.md#patchService) | **PATCH** /bus/services/{serviceName} | Partially update the service.
[**patchServicePayload**](ServiceApi.md#patchServicePayload) | **PATCH** /bus/services/{serviceName}/payloads/{payloadName} | Partially update the payload.
[**updateService**](ServiceApi.md#updateService) | **PUT** /bus/services/{serviceName} | Update the service.
[**updateServicePayload**](ServiceApi.md#updateServicePayload) | **PUT** /bus/services/{serviceName}/payloads/{payloadName} | Update the service payload.


<a name='createService'></a>
# **createService**
> ExtendedService createService(body)

Create a new service. 

### Example

```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const reqBody = {
  'name': 'ap-challenge-service',
  'version': '5.0.1',
  'commitHash': 'b2037acaf982370286b21eca2e40f4353b59e9c9',
  'description': 'TC Challenge API',
  'baseURL': 'https://api.topcoder.com/v5/challenges',
  'payloads': [
    {
      'name': 'createEvent',
      'topics': [
        'notifications.kafka.queue.java.test'
      ],
      'payloadMimeType': 'application/json',
      'payloadFormat': {}
    }
  ]
}

// Promise model
busApiClient
  .createService(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await busApiClient.createService(reqBody)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Service**](Service.md)| Service definition | 

### Return type

[**Extended Service**](ExtendedService.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='createServicePayload'></a>
# **createServicePayload**
> Payload createServicePayload(serviceName, body)

Create a payload for the given service. 

### Example

```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'

const reqBody = {
  'name': 'createEvent',
  'topics': [
    'notifications.kafka.queue.java.test'
  ],
  'payloadMimeType': 'application/json',
  'payloadFormat': {}
}

// Promise model
busApiClient
  .createServicePayload(serviceName, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await busApiClient.createServicePayload(serviceName, reqBody)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **body** | [**Payload**](Payload.md)| Payload definition | 

### Return type

[**Payload**](Payload.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='deleteService'></a>
# **deleteService**
> deleteService(serviceName)

Delete the service. 

### Example

```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'

// Promise model
busApiClient
  .deleteService(serviceName)
  .then(result => console.log(result.body, result.status)) // Body will be empty
  .catch(err => console.log(err))

// Async / await model
await busApiClient.deleteService(serviceName)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='deleteServicePayload'></a>
# **deleteServicePayload**
> deleteServicePayload(serviceName, payloadName)

Delete the payload for the given service. 

### Example

```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'
const payloadName = 'test-payload'

// Promise model
busApiClient
  .deleteServicePayload(serviceName, payloadName)
  .then(result => console.log(result.body, result.status)) // Body will be empty
  .catch(err => console.log(err))

// Async / await model
await busApiClient.deleteServicePayload(serviceName, payloadName)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **payloadName** | **String**| The payload name. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='getService'></a>
# **getService**
> ExtendedService getService(serviceName)

Get the service by service name. 

### Example

```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'

// Promise model
busApiClient
  .getService(serviceName)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.getService(serviceName)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 

### Return type

[**Extended Service**](ExtendedService.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='getServicePayload'></a>
# **getServicePayload**
> Payload getServicePayload(serviceName, payloadName)

Get the payload for the given service. 

### Example

```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'
const payloadName = 'test-payload'

// Promise model
busApiClient
  .getServicePayload(serviceName, payloadName)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.getServicePayload(serviceName, payloadName)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **payloadName** | **String**| The payload name. | 

### Return type

[**Payload**](Payload.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='getServicePayloads'></a>
# **getServicePayloads**
> [Payload] getServicePayloads(serviceName, opts)

Search payloads for the given service. 

### Example

```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'
// Paging parameters are optional
const opts = {
  'page': 1,
  'perPage': 2
}

// Promise model
busApiClient
  .getServicePayloads(serviceName, opts)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.getServicePayloads(serviceName, opts)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **page** | **Number**| The page number. | [optional] [default to 1]
 **perPage** | **Number**| The number of items to list per page. | [optional] [default to 20]

### Return type

[**[Payload]**](Payload.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='getServices'></a>
# **getServices**
> [ExtendedService] getServices(opts)

Get all services. Link headers are sent back and they have rel set to prev, next, first, last and contain the relevant URL. 

### Example

```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

// Paging parameters are optional
const opts = {
  'page': 1,
  'perPage': 2
}

// Promise model
busApiClient
  .getServices(opts)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.getServices(opts)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page number. | [optional] [default to 1]
 **perPage** | **Number**| The number of items to list per page. | [optional] [default to 20]

### Return type

[**[Extended Service]**](ExtendedService.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='headService'></a>
# **headService**
> headService(serviceName)

Get response status and headers information for the endpoint. It does not contain response body. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'

// Promise model
busApiClient
  .headService(serviceName)
  .then(result => console.log(result.body, result.status)) // Body will be empty
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.headService(serviceName)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='headServicePayload'></a>
# **headServicePayload**
> headServicePayload(serviceName, payloadName)

Get response status and headers information for the endpoint. It does not contain response body. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'
const payloadName = 'test-payload'

// Promise model
busApiClient
  .headServicePayload(serviceName, payloadName)
  .then(result => console.log(result.body, result.status)) // Body will be empty
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.headServicePayload(serviceName, payloadName)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **payloadName** | **String**| The payload name. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='headServicePayloads'></a>
# **headServicePayloads**
> headServicePayloads(serviceName, opts)

Get response status and headers information for the endpoint. The Link header is provided in the header and they have rel set to prev, next, first, last and contain the relevant URL. It does not contain response body. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'
// Paging parameters are optional
const opts = {
  'page': 1,
  'perPage': 2
}

// Promise model
busApiClient
  .headServicePayloads(serviceName, opts)
  .then(result => console.log(result.body, result.status)) // Body will be empty
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.headServicePayloads(serviceName, opts)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **page** | **Number**| The page number. | [optional] [default to 1]
 **perPage** | **Number**| The number of items to list per page. | [optional] [default to 20]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='headServices'></a>
# **headServices**
> headServices(opts)

Get response status and headers information for the endpoint. The Link header is provided in the header and they have rel set to prev, next, first, last and contain the relevant URL. It does not contain response body. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

// Paging parameters are optional
const opts = {
  'page': 1,
  'perPage': 2
}

// Promise model
busApiClient
  .headServices(opts)
  .then(result => console.log(result.body, result.status)) // Body will be empty
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.headServices(opts)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page number. | [optional] [default to 1]
 **perPage** | **Number**| The number of items to list per page. | [optional] [default to 20]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='patchService'></a>
# **patchService**
> ExtendedService patchService(serviceName, body)

Allows to partially modify the service with the provided request body. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'

const reqBody = {
  'version': '5.0.1',
  'commitHash': 'b2037acaf982370286b21eca2e40f4353b59e9c9',
  'baseURL': 'https://api.topcoder.com/v5/challenges'
}

// Promise model
busApiClient
  .patchService(serviceName, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await busApiClient.patchService(serviceName, reqBody)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **body** | [**Service**](Service.md)| Any set of fields from Service entity  | 

### Return type

[**ExtendedService**](ExtendedService.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='patchServicePayload'></a>
# **patchServicePayload**
> Payload patchServicePayload(serviceName, payloadName, body)

Allows to partially modify the payload with the provided request body. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'
const payloadName = 'test-payload'

const reqBody = {
  'topics': [
    'notifications.kafka.queue.java.test'
  ],
  'payloadMimeType': 'application/json'
}

// Promise model
busApiClient
  .patchServicePayload(serviceName, payloadName, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await busApiClient.patchServicePayload(serviceName, payloadName, reqBody)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **payloadName** | **String**| The payload name. | 
 **body** | [**Payload**](Payload.md)| Any set of fields from the Payload entity except name | 

### Return type

[**Payload**](Payload.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='updateService'></a>
# **updateService**
> ExtendedService updateService(serviceName, body)

Update the service by service name. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'

const reqBody = {
  'version': '5.0.1',
  'commitHash': 'b2037acaf982370286b21eca2e40f4353b59e9c9',
  'description': 'TC Challenge API',
  'baseURL': 'https://api.topcoder.com/v5/challenges',
  'payloads': [
    {
      'name': 'createEvent',
      'topics': [
        'notifications.kafka.queue.java.test'
      ],
      'payloadMimeType': 'application/json',
      'payloadFormat': {}
    }
  ]
}

// Promise model
busApiClient
  .updateService(serviceName, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await busApiClient.updateService(serviceName, reqBody)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **body** | [**Service**](Service.md)| Service entity | 

### Return type

[**ExtendedService**](ExtendedService.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name='updateServicePayload'></a>
# **updateServicePayload**
> Payload updateServicePayload(serviceName, payloadName, body)

Update the payload for the given service. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const serviceName = 'ap-challenge-service'
const payloadName = 'test-payload'

const reqBody = {
  'topics': [
    'notifications.kafka.queue.java.test'
  ],
  'payloadMimeType': 'application/json',
  'payloadFormat': {}
}

// Promise model
busApiClient
  .updateServicePayload(serviceName, payloadName, reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await busApiClient.updateServicePayload(serviceName, payloadName, reqBody)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **payloadName** | **String**| The payload name. | 
 **body** | [**Payload**](Payload.md)| Payload entity without name | 

### Return type

[**Payload**](Payload.md)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

