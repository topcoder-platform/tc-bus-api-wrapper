# TopcoderMetaServicesRestApi.TopicsApi

All URIs are relative to *https://api.topcoder.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTopics**](TopicsApi.md#getTopics) | **GET** /bus/topics | Get topics.
[**headTopics**](TopicsApi.md#headTopics) | **HEAD** /bus/topics | Get only response status and headers information but no response body for the endpoint.


<a name="getTopics"></a>
# **getTopics**
> [&#39;String&#39;] getTopics()

Get topics.

Get all topic names. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.TopicsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTopics(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="headTopics"></a>
# **headTopics**
> headTopics()

Get only response status and headers information but no response body for the endpoint.

Get response status and headers information for the endpoint. It does not contain response body. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.TopicsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.headTopics(callback);
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

