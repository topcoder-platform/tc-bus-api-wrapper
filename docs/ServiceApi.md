# TopcoderMetaServicesRestApi.ServiceApi

All URIs are relative to *https://api.topcoder.com/v5*

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


<a name="createService"></a>
# **createService**
> createService(body)

Create a service.

Create a new service. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var body = new TopcoderMetaServicesRestApi.Service(); // Service | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createService(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Service**](Service.md)|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createServicePayload"></a>
# **createServicePayload**
> Payload createServicePayload(serviceName, body)

Create the service payload.

Create the payload for the given service. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.

var body = new TopcoderMetaServicesRestApi.Payload(); // Payload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createServicePayload(serviceName, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **body** | [**Payload**](Payload.md)|  | 

### Return type

[**Payload**](Payload.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteService"></a>
# **deleteService**
> deleteService(serviceName)

Delete the service.

Delete the service. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteService(serviceName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteServicePayload"></a>
# **deleteServicePayload**
> deleteServicePayload(serviceName, payloadName)

Delete the service payload.

Delete the payload for the given service. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.

var payloadName = "payloadName_example"; // String | The payload name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteServicePayload(serviceName, payloadName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **payloadName** | **String**| The payload name. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getService"></a>
# **getService**
> ExtendedService getService(serviceName)

Get the service.

Get the service by service name. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getService(serviceName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 

### Return type

[**ExtendedService**](ExtendedService.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getServicePayload"></a>
# **getServicePayload**
> Payload getServicePayload(serviceName, payloadName)

Get the service payload.

Get the payload for the given service. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.

var payloadName = "payloadName_example"; // String | The payload name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServicePayload(serviceName, payloadName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **payloadName** | **String**| The payload name. | 

### Return type

[**Payload**](Payload.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getServicePayloads"></a>
# **getServicePayloads**
> [Payload] getServicePayloads(serviceName, opts)

Search the service payloads.

Search payloads for the service. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.

var opts = { 
  'page': 1, // Number | The page number.
  'perPage': 20 // Number | The number of items to list per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServicePayloads(serviceName, opts, callback);
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

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getServices"></a>
# **getServices**
> [ExtendedService] getServices(opts)

Get all services.

Get all services. Link headers are sent back and they have rel set to prev, next, first, last and contain the relevant URL. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var opts = { 
  'page': 1, // Number | The page number.
  'perPage': 20 // Number | The number of items to list per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServices(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page number. | [optional] [default to 1]
 **perPage** | **Number**| The number of items to list per page. | [optional] [default to 20]

### Return type

[**[ExtendedService]**](ExtendedService.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="headService"></a>
# **headService**
> headService(serviceName)

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

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.headService(serviceName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="headServicePayload"></a>
# **headServicePayload**
> headServicePayload(serviceName, payloadName)

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

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.

var payloadName = "payloadName_example"; // String | The payload name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.headServicePayload(serviceName, payloadName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **payloadName** | **String**| The payload name. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="headServicePayloads"></a>
# **headServicePayloads**
> headServicePayloads(serviceName, opts)

Get only response status and headers information but no response body for the endpoint.

Get response status and headers information for the endpoint. The Link header is provided in the header and they have rel set to prev, next, first, last and contain the relevant URL. It does not contain response body. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.

var opts = { 
  'page': 1, // Number | The page number.
  'perPage': 20 // Number | The number of items to list per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.headServicePayloads(serviceName, opts, callback);
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

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="headServices"></a>
# **headServices**
> headServices(opts)

Get only response status and headers information but no response body for the endpoint.

Get response status and headers information for the endpoint. The Link header is provided in the header and they have rel set to prev, next, first, last and contain the relevant URL. It does not contain response body. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var opts = { 
  'page': 1, // Number | The page number.
  'perPage': 20 // Number | The number of items to list per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.headServices(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page number. | [optional] [default to 1]
 **perPage** | **Number**| The number of items to list per page. | [optional] [default to 20]

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchService"></a>
# **patchService**
> ExtendedService patchService(serviceName, body)

Partially update the service.

Allows to partially modify the service with the provided request parameters. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.

var body = new TopcoderMetaServicesRestApi.Body(); // Body | The Service entity. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchService(serviceName, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **body** | [**Body**](Body.md)| The Service entity.  | 

### Return type

[**ExtendedService**](ExtendedService.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchServicePayload"></a>
# **patchServicePayload**
> Payload patchServicePayload(serviceName, payloadName, body)

Partially update the payload.

Allows to partially modify the payload with the provided request parameters. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.

var payloadName = "payloadName_example"; // String | The payload name.

var body = new TopcoderMetaServicesRestApi.Body1(); // Body1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchServicePayload(serviceName, payloadName, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **payloadName** | **String**| The payload name. | 
 **body** | [**Body1**](Body1.md)|  | 

### Return type

[**Payload**](Payload.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateService"></a>
# **updateService**
> ExtendedService updateService(serviceName, body)

Update the service.

Update the service by service name. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.

var body = new TopcoderMetaServicesRestApi.ExtendedService(); // ExtendedService | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateService(serviceName, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **body** | [**ExtendedService**](ExtendedService.md)|  | 

### Return type

[**ExtendedService**](ExtendedService.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateServicePayload"></a>
# **updateServicePayload**
> Payload updateServicePayload(serviceName, payloadName, body)

Update the service payload.

Update the payload for the given service. 

### Example
```javascript
var TopcoderMetaServicesRestApi = require('topcoder_meta_services_rest_api');
var defaultClient = TopcoderMetaServicesRestApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new TopcoderMetaServicesRestApi.ServiceApi();

var serviceName = "serviceName_example"; // String | The service name.

var payloadName = "payloadName_example"; // String | The payload name.

var body = new TopcoderMetaServicesRestApi.Payload(); // Payload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateServicePayload(serviceName, payloadName, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | **String**| The service name. | 
 **payloadName** | **String**| The payload name. | 
 **body** | [**Payload**](Payload.md)|  | 

### Return type

[**Payload**](Payload.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

