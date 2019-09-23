# IBM Cloud Security Advisor Findings API Node SDK

Findings API is supported in the following regions:
* [Dallas](https://us-south.secadvisor.cloud.ibm.com/findings/v1/docs)
* [London](https://eu-gb.secadvisor.cloud.ibm.com/findings/v1/docs)

## Requirements

Node.js 6.4.0 or later

## Installation

### For [Node.js](https://nodejs.org/)

To install the SDK:

```shell
npm install ibmcloud-security-advisor-findings --save
```

Install from a tagged release, for example, v1.0.0
```shell
npm install ibm-cloud-security/security-advisor-findings-sdk-nodejs#v1.0.0
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.basePath = "https://us-south.secadvisor.cloud.ibm.com/findings"
let apiInstance = new findings.FindingsNotesApi();
let accountId = "accountId_example";
let authorization = "authorization_example";
let providerId = "providerId_example";

apiInstance.listNotes(accountId, authorization, providerId).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});
```

To target different regions set the `basePath` on the client instance accordingly:
* Dallas - `https://us-south.secadvisor.cloud.ibm.com/findings`
* London - `https://eu-gb.secadvisor.cloud.ibm.com/findings`

## Generating Authorization token

`Authorization token` to be passed as second paramters in all the function calls is obtained by calling [IBM Cloud IAM API](https://cloud.ibm.com/apidocs/iam-identity-token-api). It is a bearer token in JWT format.
Find a sample [here](https://cloud.ibm.com/apidocs/security-advisor/findings#authentication). Read more about the access [here](https://cloud.ibm.com/docs/security-advisor?topic=security-advisor-service-access)

### Support for retry
The retry is configurable via the following options:
* maxRetry - Default value is 3
* retryFn - A function which takes two arguments - error and response. It should return `true` in case retry should be performed.
Its default implementation is:
```js
(err, res) => {
  if (res && res.status && res.status >= 500 && res.status !== 501) return true;
}
```
In addition the SDK retries the request in case the following error codes are received:
* ECONNRESET
* ETIMEDOUT
* EADDRINFO
* ESOCKETTIMEDOUT

You can override the behavior by `retryFn`.

```javascript
var findings = require('ibmcloud-security-advisor-findings');
var defaultClient = findings.ApiClient.instance;
defaultClient.maxRetry = 2
defaultClient.retryFn = (err, res) => {
    // Return true if it should be retried
}
```

## Documentation for API Endpoints

All URIs are relative to:

* https://us-south.secadvisor.cloud.ibm.com/findings
* https://eu-gb.secadvisor.cloud.ibm.com/findings

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*findings.FindingsGraphApi* | [**postGraph**](docs/FindingsGraphApi.md#postGraph) | **POST** /v1/{account_id}/graph | query findings
*findings.FindingsNotesApi* | [**createNote**](docs/FindingsNotesApi.md#createNote) | **POST** /v1/{account_id}/providers/{provider_id}/notes | Creates a new &#x60;Note&#x60;.
*findings.FindingsNotesApi* | [**deleteNote**](docs/FindingsNotesApi.md#deleteNote) | **DELETE** /v1/{account_id}/providers/{provider_id}/notes/{note_id} | Deletes the given &#x60;Note&#x60; from the system.
*findings.FindingsNotesApi* | [**getNote**](docs/FindingsNotesApi.md#getNote) | **GET** /v1/{account_id}/providers/{provider_id}/notes/{note_id} | Returns the requested &#x60;Note&#x60;.
*findings.FindingsNotesApi* | [**getOccurrenceNote**](docs/FindingsNotesApi.md#getOccurrenceNote) | **GET** /v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id}/note | Gets the &#x60;Note&#x60; attached to the given &#x60;Occurrence&#x60;.
*findings.FindingsNotesApi* | [**listNotes**](docs/FindingsNotesApi.md#listNotes) | **GET** /v1/{account_id}/providers/{provider_id}/notes | Lists all &#x60;Notes&#x60; for a given provider.
*findings.FindingsNotesApi* | [**updateNote**](docs/FindingsNotesApi.md#updateNote) | **PUT** /v1/{account_id}/providers/{provider_id}/notes/{note_id} | Updates an existing &#x60;Note&#x60;.
*findings.FindingsOccurrencesApi* | [**createOccurrence**](docs/FindingsOccurrencesApi.md#createOccurrence) | **POST** /v1/{account_id}/providers/{provider_id}/occurrences | Creates a new &#x60;Occurrence&#x60;. Use this method to create &#x60;Occurrences&#x60; for a resource.
*findings.FindingsOccurrencesApi* | [**deleteOccurrence**](docs/FindingsOccurrencesApi.md#deleteOccurrence) | **DELETE** /v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id} | Deletes the given &#x60;Occurrence&#x60; from the system.
*findings.FindingsOccurrencesApi* | [**getOccurrence**](docs/FindingsOccurrencesApi.md#getOccurrence) | **GET** /v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id} | Returns the requested &#x60;Occurrence&#x60;.
*findings.FindingsOccurrencesApi* | [**listNoteOccurrences**](docs/FindingsOccurrencesApi.md#listNoteOccurrences) | **GET** /v1/{account_id}/providers/{provider_id}/notes/{note_id}/occurrences | Lists &#x60;Occurrences&#x60; referencing the specified &#x60;Note&#x60;. Use this method to get all occurrences referencing your &#x60;Note&#x60; across all your customer providers.
*findings.FindingsOccurrencesApi* | [**listOccurrences**](docs/FindingsOccurrencesApi.md#listOccurrences) | **GET** /v1/{account_id}/providers/{provider_id}/occurrences | Lists active &#x60;Occurrences&#x60; for a given provider matching the filters.
*findings.FindingsOccurrencesApi* | [**updateOccurrence**](docs/FindingsOccurrencesApi.md#updateOccurrence) | **PUT** /v1/{account_id}/providers/{provider_id}/occurrences/{occurrence_id} | Updates an existing &#x60;Occurrence&#x60;.
*findings.FindingsProvidersApi* | [**listProviders**](docs/FindingsProvidersApi.md#listProviders) | **GET** /v1/{account_id}/providers | Lists all &#x60;Providers&#x60; for a given account id.


## Documentation for Models

 - [findings.ApiEmpty](docs/ApiEmpty.md)
 - [findings.ApiListNoteOccurrencesResponse](docs/ApiListNoteOccurrencesResponse.md)
 - [findings.ApiListNotesResponse](docs/ApiListNotesResponse.md)
 - [findings.ApiListOccurrencesResponse](docs/ApiListOccurrencesResponse.md)
 - [findings.ApiListProvidersResponse](docs/ApiListProvidersResponse.md)
 - [findings.ApiNote](docs/ApiNote.md)
 - [findings.ApiNoteKind](docs/ApiNoteKind.md)
 - [findings.ApiNoteRelatedUrl](docs/ApiNoteRelatedUrl.md)
 - [findings.ApiOccurrence](docs/ApiOccurrence.md)
 - [findings.ApiProvider](docs/ApiProvider.md)
 - [findings.Body](docs/Body.md)
 - [findings.Body1](docs/Body1.md)
 - [findings.Body2](docs/Body2.md)
 - [findings.Body3](docs/Body3.md)
 - [findings.BreakdownCardElement](docs/BreakdownCardElement.md)
 - [findings.Card](docs/Card.md)
 - [findings.CardElement](docs/CardElement.md)
 - [findings.Certainty](docs/Certainty.md)
 - [findings.Context](docs/Context.md)
 - [findings.DataTransferred](docs/DataTransferred.md)
 - [findings.Finding](docs/Finding.md)
 - [findings.FindingCountValueType](docs/FindingCountValueType.md)
 - [findings.FindingType](docs/FindingType.md)
 - [findings.InlineResponse200](docs/InlineResponse200.md)
 - [findings.InlineResponse2001](docs/InlineResponse2001.md)
 - [findings.InlineResponse2001Card](docs/InlineResponse2001Card.md)
 - [findings.InlineResponse2001CardElements](docs/InlineResponse2001CardElements.md)
 - [findings.InlineResponse2001Finding](docs/InlineResponse2001Finding.md)
 - [findings.InlineResponse2001FindingNextSteps](docs/InlineResponse2001FindingNextSteps.md)
 - [findings.InlineResponse2001Kpi](docs/InlineResponse2001Kpi.md)
 - [findings.InlineResponse2001Notes](docs/InlineResponse2001Notes.md)
 - [findings.InlineResponse2001RelatedUrl](docs/InlineResponse2001RelatedUrl.md)
 - [findings.InlineResponse2001ReportedBy](docs/InlineResponse2001ReportedBy.md)
 - [findings.InlineResponse2001Section](docs/InlineResponse2001Section.md)
 - [findings.InlineResponse2002](docs/InlineResponse2002.md)
 - [findings.InlineResponse2002Context](docs/InlineResponse2002Context.md)
 - [findings.InlineResponse2002Finding](docs/InlineResponse2002Finding.md)
 - [findings.InlineResponse2002FindingDataTransferred](docs/InlineResponse2002FindingDataTransferred.md)
 - [findings.InlineResponse2002FindingNetworkConnection](docs/InlineResponse2002FindingNetworkConnection.md)
 - [findings.InlineResponse2002FindingNetworkConnectionClient](docs/InlineResponse2002FindingNetworkConnectionClient.md)
 - [findings.InlineResponse2002Kpi](docs/InlineResponse2002Kpi.md)
 - [findings.InlineResponse2002Occurrences](docs/InlineResponse2002Occurrences.md)
 - [findings.InlineResponse2003](docs/InlineResponse2003.md)
 - [findings.InlineResponse200Providers](docs/InlineResponse200Providers.md)
 - [findings.Kpi](docs/Kpi.md)
 - [findings.KpiType](docs/KpiType.md)
 - [findings.KpiValueType](docs/KpiValueType.md)
 - [findings.NetworkConnection](docs/NetworkConnection.md)
 - [findings.NumericCardElement](docs/NumericCardElement.md)
 - [findings.NumericCardElementValueType](docs/NumericCardElementValueType.md)
 - [findings.RemediationStep](docs/RemediationStep.md)
 - [findings.Reporter](docs/Reporter.md)
 - [findings.Section](docs/Section.md)
 - [findings.Severity](docs/Severity.md)
 - [findings.SocketAddress](docs/SocketAddress.md)
 - [findings.TimeSeriesCardElement](docs/TimeSeriesCardElement.md)
 - [findings.ValueType](docs/ValueType.md)



## Examples

Try out the [examples](examples). Go to [Security Advisor dashboard](https://cloud.ibm.com/security-advisor#/dashboard) for visualizing it.
The examples require you to export the following variables:
```sh
export account_id=<your account id>
export authorization=<Bearer <token>>
export region=eu-gb

node create_notes.js
node create_occurrences.js
```
`us-south` will target the Dallas endpoint. Use `eu-gb` to target London by exporting `region`. Default region in the example is `us-south`
[Obtain authorization token](#generating-authorization-token) for filling in the token value. We have used async/await to simplify the examples. Make sure your Node version supports it natively. You can check [here](https://node.green/#ES2017-features-async-functions)
