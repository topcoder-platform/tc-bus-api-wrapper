# TopcoderMetaServicesRestApi.HealthchecksApi

All URIs are relative to *https://api.topcoder.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHealth**](HealthchecksApi.md#getHealth) | **GET** /bus/health | Check API is healthy.
[**headHealth**](HealthchecksApi.md#headHealth) | **HEAD** /bus/health | Get only response status and headers information but no response body for the endpoint. 


<a name="getHealth"></a>
# **getHealth**
> HealthCheckStatus getHealth()

Check API is healthy.

Check API is healthy. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');

var apiInstance = new TopcoderMetaServicesRestApi.HealthchecksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHealth(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HealthCheckStatus**](HealthCheckStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="headHealth"></a>
# **headHealth**
> headHealth()

Get only response status and headers information but no response body for the endpoint. 

Get response status and headers information for the endpoint. It does not contain response body. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');

var apiInstance = new TopcoderMetaServicesRestApi.HealthchecksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.headHealth(callback);
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

