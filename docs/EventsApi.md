# Events Api

All URIs are relative to **BUSAPI_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**postEvent**](EventsApi.md#postEvent) | **POST** /bus/events | Post event to the message bus.
[**postError**](EventsApi.md#postError) | **POST** /bus/events | Post error event to the message bus. Topic will be set by wrapper itself.

<a name="postEvent"></a>
# **postEvent**
> postEvent(body)

Post an event to the message bus. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const reqBody = {
	'topic': 'test.topic.1',
  'originator': 'tester',
  'timestamp': '2018-05-20T07:00:30.123Z',
  'mime-type': 'application/json',
  'payload': { // Payload varies depending on the event
    'name': 'test'
  }
}
// Promise model
busApiClient
  .postEvent(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await busApiClient.postEvent(reqBody)
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **body** | [**Event Payload**](EventPayload.md)| Payload of an event 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postError"></a>
# **postError**
> postError(body)

Post error event to the message bus. 

### Example
```javascript
const busApi = require('tc-bus-api-wrapper')
const busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC']))

const reqBody = {
  'originator': 'tester',
  'timestamp': '2018-05-20T07:00:30.123Z',
  'mime-type': 'application/json',
  'payload': { // Payload varies depending on the event
    'name': 'test'
  }
}
// Promise model
busApiClient
  .postError(reqBody)
  .then(result => console.log(result.body, result.status))
  .catch(err => console.log(err))

// Async / await model
await busApiClient.postError(reqBody)
```

### Parameters

Name | Type | Description
------------- | ------------- | ------------- 
 **body** | [**Event Payload Without Topic**](EventPayloadWoTopic.md)| Payload of error event without topic

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json