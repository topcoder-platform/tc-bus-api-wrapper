# TopcoderMetaServicesRestApi.PlaceholdersApi

All URIs are relative to *https://api.topcoder.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearPlaceholdersCache**](PlaceholdersApi.md#clearPlaceholdersCache) | **DELETE** /bus/placeholders | Clear placeholders cache.


<a name="clearPlaceholdersCache"></a>
# **clearPlaceholdersCache**
> clearPlaceholdersCache()

Clear placeholders cache.

Clear the cache for placeholder validation of email topics. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.PlaceholdersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clearPlaceholdersCache(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

