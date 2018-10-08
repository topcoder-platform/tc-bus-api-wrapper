# Healthchecks Api

All URIs are relative to **BUSAPI_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHealth**](HealthchecksApi.md#getHealth) | **GET** /bus/health | Check if API is healthy.
[**headHealth**](HealthchecksApi.md#headHealth) | **HEAD** /bus/health | Get only response status and headers information but no response body for the endpoint. 


<a name="getHealth"></a>
# **getHealth**
> HealthCheckStatus getHealth()

Check if API is healthy.

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

// Promise model
busApiClient
  .getHealth()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.getHealth()
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Health Check Status**](HealthCheckStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="headHealth"></a>
# **headHealth**
> headHealth()

Get response status and headers information for the endpoint. It does not contain response body. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

// Promise model
busApiClient
  .headHealth()
  .then(result => console.log(result.body, result.status)) // Body will be empty
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.headHealth()
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

