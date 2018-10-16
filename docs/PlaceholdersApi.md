# Placeholders Api

All URIs are relative to **BUSAPI_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearPlaceholdersCache**](PlaceholdersApi.md#clearPlaceholdersCache) | **DELETE** /bus/placeholders | Clear placeholders cache.


<a name="clearPlaceholdersCache"></a>
# **clearPlaceholdersCache**
> clearPlaceholdersCache()

Clear the cache for placeholder validation of email topics. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

// Promise model
busApiClient
  .clearPlaceholdersCache()
  .then(result => console.log(result.body, result.status)) // Body will be empty
  .catch(err => console.log(err))

// Async / await model
await busApiClient.clearPlaceholdersCache()
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

