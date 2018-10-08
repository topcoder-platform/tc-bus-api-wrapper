# Topics Api

All URIs are relative to **BUSAPI_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTopics**](TopicsApi.md#getTopics) | **GET** /bus/topics | Get topics.
[**headTopics**](TopicsApi.md#headTopics) | **HEAD** /bus/topics | Get only response status and headers information but no response body for the topics endpoint.


<a name="getTopics"></a>
# **getTopics**
> getTopics()

Get topics.

Get all topic names. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

// Promise model
busApiClient
  .getTopics()
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.getTopics()
```

### Parameters
This endpoint does not need any parameter.

### Return type

Array of strings

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="headTopics"></a>
# **headTopics**
> headTopics()

Get response status and headers information for the topics endpoint. It does not contain response body. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

// Promise model
busApiClient
  .headTopics()
  .then(result => console.log(result.body, result.status)) // Body will be empty
  .catch(err => console.log(err))

// Async / await model
const result = await busApiClient.headTopics()
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

