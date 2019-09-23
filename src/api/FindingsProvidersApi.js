/**
 * Findings API
 * The Findings API 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

var ApiClient = require('../ApiClient');
var InlineResponse200 = require('../model/InlineResponse200');

/**
 * FindingsProviders service.
 * @module api/FindingsProvidersApi
 */

/**
 * Constructs a new FindingsProvidersApi. 
 * @alias module:api/FindingsProvidersApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * Lists all &#x60;Providers&#x60; for a given account id.
   * @param {String} accountId Account ID
   * @param {String} authorization The Identity &amp; Access Management (IAM) Bearer token.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize Number of providers to return in the list.
   * @param {String} opts.pageToken Token to provide to skip to a particular spot in the list.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
   */
  this.listProvidersWithHttpInfo = function(accountId, authorization, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'accountId' is set
    if (accountId === undefined || accountId === null) {
      throw new Error("Missing the required parameter 'accountId' when calling listProviders");
    }

    // verify the required parameter 'authorization' is set
    if (authorization === undefined || authorization === null) {
      throw new Error("Missing the required parameter 'authorization' when calling listProviders");
    }


    var pathParams = {
      'account_id': accountId
    };
    var queryParams = {
      'page_size': opts['pageSize'],
      'page_token': opts['pageToken']
    };
    var headerParams = {
      'Authorization': authorization
    };

    var formParams = {
    };

    var authNames = ['UserMin'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = InlineResponse200;

    return this.apiClient.callApi(
      '/v1/{account_id}/providers', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Lists all &#x60;Providers&#x60; for a given account id.
   * @param {String} accountId Account ID
   * @param {String} authorization The Identity &amp; Access Management (IAM) Bearer token.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize Number of providers to return in the list.
   * @param {String} opts.pageToken Token to provide to skip to a particular spot in the list.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
   */
  this.listProviders = function(accountId, authorization, opts) {
    return this.listProvidersWithHttpInfo(accountId, authorization, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
