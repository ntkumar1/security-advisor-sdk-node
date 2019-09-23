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
var InlineResponse2002Occurrences = require('./InlineResponse2002Occurrences');



/**
 * The ApiListNoteOccurrencesResponse model module.
 * @module model/ApiListNoteOccurrencesResponse
 */

/**
 * Constructs a new <code>ApiListNoteOccurrencesResponse</code>.
 * Response including listed occurrences for a note.
 * @alias module:model/ApiListNoteOccurrencesResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>ApiListNoteOccurrencesResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ApiListNoteOccurrencesResponse} obj Optional instance to populate.
 * @return {module:model/ApiListNoteOccurrencesResponse} The populated <code>ApiListNoteOccurrencesResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('occurrences')) {
      obj['occurrences'] = ApiClient.convertToType(data['occurrences'], [InlineResponse2002Occurrences]);
    }
      if (data.hasOwnProperty('next_page_token')) {
      obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
    }
    }
  return obj;
}

/**
 * The occurrences attached to the specified note.
 * @member {Array.<module:model/InlineResponse2002Occurrences>} occurrences
 */
exports.prototype['occurrences'] = undefined;
/**
 * Token to receive the next page of notes.
 * @member {String} next_page_token
 */
exports.prototype['next_page_token'] = undefined;



module.exports = exports;

