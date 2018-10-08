# Event Payload Without Topic

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originator** | **String** | Service repository name, from where message is published.  | 
**timestamp** | **Date** | Timestamp at which message is published. The date-time notation as defined by RFC 3339, section 5.6, for example, 2018-04-13T00:00:00Z  | 
**mimeType** | **String** | Mime-type for &#39;payload&#39;.  | 
**payload** | **Object** | Actual payload depending on mime-type for consumer.  | 