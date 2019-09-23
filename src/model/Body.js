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
var InlineResponse2001Card = require('./InlineResponse2001Card');
var InlineResponse2001Finding = require('./InlineResponse2001Finding');
var InlineResponse2001Kpi = require('./InlineResponse2001Kpi');
var InlineResponse2001RelatedUrl = require('./InlineResponse2001RelatedUrl');
var InlineResponse2001ReportedBy = require('./InlineResponse2001ReportedBy');
var InlineResponse2001Section = require('./InlineResponse2001Section');



/**
 * The Body model module.
 * @module model/Body
 */

/**
 * Constructs a new <code>Body</code>.
 * Provides a detailed description of a &#x60;Note&#x60;.
 * @alias module:model/Body
 * @class
 * @param shortDescription {String} A one sentence description of this `Note`.
 * @param longDescription {String} A detailed description of this `Note`.
 * @param kind {module:model/Body.KindEnum} This must be 1&#58;1 with members of our oneofs, it can be used for filtering Note and Occurrence on their kind.  - FINDING&#58; The note and occurrence represent a finding.  - KPI&#58; The note and occurrence represent a KPI value.  - CARD&#58; The note represents a card showing findings and related metric values.  - CARD_CONFIGURED&#58; The note represents a card configured for a user account.  - SECTION&#58; The note represents a section in a dashboard.
 * @param id {String} 
 * @param reportedBy {module:model/InlineResponse2001ReportedBy} 
 */
var exports = function(shortDescription, longDescription, kind, id, reportedBy) {
  var _this = this;


  _this['short_description'] = shortDescription;
  _this['long_description'] = longDescription;
  _this['kind'] = kind;





  _this['id'] = id;

  _this['reported_by'] = reportedBy;




};

/**
 * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Body} obj Optional instance to populate.
 * @return {module:model/Body} The populated <code>Body</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('short_description')) {
      obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
    }
      if (data.hasOwnProperty('long_description')) {
      obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
    }
      if (data.hasOwnProperty('kind')) {
      obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
    }
      if (data.hasOwnProperty('related_url')) {
      obj['related_url'] = ApiClient.convertToType(data['related_url'], [InlineResponse2001RelatedUrl]);
    }
      if (data.hasOwnProperty('expiration_time')) {
      obj['expiration_time'] = ApiClient.convertToType(data['expiration_time'], 'Date');
    }
      if (data.hasOwnProperty('create_time')) {
      obj['create_time'] = ApiClient.convertToType(data['create_time'], 'Date');
    }
      if (data.hasOwnProperty('update_time')) {
      obj['update_time'] = ApiClient.convertToType(data['update_time'], 'Date');
    }
      if (data.hasOwnProperty('provider_id')) {
      obj['provider_id'] = ApiClient.convertToType(data['provider_id'], 'String');
    }
      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('shared')) {
      obj['shared'] = ApiClient.convertToType(data['shared'], 'Boolean');
    }
      if (data.hasOwnProperty('reported_by')) {
      obj['reported_by'] = InlineResponse2001ReportedBy.constructFromObject(data['reported_by']);
    }
      if (data.hasOwnProperty('finding')) {
      obj['finding'] = InlineResponse2001Finding.constructFromObject(data['finding']);
    }
      if (data.hasOwnProperty('kpi')) {
      obj['kpi'] = InlineResponse2001Kpi.constructFromObject(data['kpi']);
    }
      if (data.hasOwnProperty('card')) {
      obj['card'] = InlineResponse2001Card.constructFromObject(data['card']);
    }
      if (data.hasOwnProperty('section')) {
      obj['section'] = InlineResponse2001Section.constructFromObject(data['section']);
    }
    }
  return obj;
}

/**
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * A one sentence description of this `Note`.
 * @member {String} short_description
 */
exports.prototype['short_description'] = undefined;
/**
 * A detailed description of this `Note`.
 * @member {String} long_description
 */
exports.prototype['long_description'] = undefined;
/**
 * This must be 1&#58;1 with members of our oneofs, it can be used for filtering Note and Occurrence on their kind.  - FINDING&#58; The note and occurrence represent a finding.  - KPI&#58; The note and occurrence represent a KPI value.  - CARD&#58; The note represents a card showing findings and related metric values.  - CARD_CONFIGURED&#58; The note represents a card configured for a user account.  - SECTION&#58; The note represents a section in a dashboard.
 * @member {module:model/Body.KindEnum} kind
 */
exports.prototype['kind'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2001RelatedUrl>} related_url
 */
exports.prototype['related_url'] = undefined;
/**
 * Time of expiration for this note, null if note does not expire.
 * @member {Date} expiration_time
 */
exports.prototype['expiration_time'] = undefined;
/**
 * Output only. The time this note was created. This field can be used as a filter in list requests.
 * @member {Date} create_time
 */
exports.prototype['create_time'] = undefined;
/**
 * Output only. The time this note was last updated. This field can be used as a filter in list requests.
 * @member {Date} update_time
 */
exports.prototype['update_time'] = undefined;
/**
 * @member {String} provider_id
 */
exports.prototype['provider_id'] = undefined;
/**
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * True if this `Note` can be shared by multiple accounts.
 * @member {Boolean} shared
 * @default true
 */
exports.prototype['shared'] = true;
/**
 * @member {module:model/InlineResponse2001ReportedBy} reported_by
 */
exports.prototype['reported_by'] = undefined;
/**
 * @member {module:model/InlineResponse2001Finding} finding
 */
exports.prototype['finding'] = undefined;
/**
 * @member {module:model/InlineResponse2001Kpi} kpi
 */
exports.prototype['kpi'] = undefined;
/**
 * @member {module:model/InlineResponse2001Card} card
 */
exports.prototype['card'] = undefined;
/**
 * @member {module:model/InlineResponse2001Section} section
 */
exports.prototype['section'] = undefined;


  /**
   * Allowed values for the <code>kind</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KindEnum = {
    /**
     * value: "FINDING"
     * @const
     */
    "FINDING": "FINDING",
    /**
     * value: "KPI"
     * @const
     */
    "KPI": "KPI",
    /**
     * value: "CARD"
     * @const
     */
    "CARD": "CARD",
    /**
     * value: "CARD_CONFIGURED"
     * @const
     */
    "CARD_CONFIGURED": "CARD_CONFIGURED",
    /**
     * value: "SECTION"
     * @const
     */
    "SECTION": "SECTION"  };

module.exports = exports;

