# TopcoderMetaServicesRestApi.EventsApi

All URIs are relative to *https://api.topcoder.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postEvent**](EventsApi.md#postEvent) | **POST** /bus/events | Post event to the message bus.


<a name="postEvent"></a>
# **postEvent**
> postEvent(body)

Post event to the message bus.

Post an event to the message bus. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.EventsApi();

var body = new TopcoderMetaServicesRestApi.EventPayload(); // EventPayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postEvent(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EventPayload**](EventPayload.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

