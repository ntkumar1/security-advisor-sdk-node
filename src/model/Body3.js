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
var InlineResponse2002Context = require('./InlineResponse2002Context');
var InlineResponse2002Finding = require('./InlineResponse2002Finding');
var InlineResponse2002Kpi = require('./InlineResponse2002Kpi');



/**
 * The Body3 model module.
 * @module model/Body3
 */

/**
 * Constructs a new <code>Body3</code>.
 * &#x60;Occurrence&#x60; includes information about analysis occurrences for an image.
 * @alias module:model/Body3
 * @class
 * @param noteName {String} An analysis note associated with this image, in the form \"providers/{provider_id}/notes/{note_id}\" This field can be used as a filter in list requests.
 * @param kind {module:model/Body3.KindEnum} This must be 1&#58;1 with members of our oneofs, it can be used for filtering Note and Occurrence on their kind.  - FINDING&#58; The note and occurrence represent a finding.  - KPI&#58; The note and occurrence represent a KPI value.  - CARD&#58; The note represents a card showing findings and related metric values.  - CARD_CONFIGURED&#58; The note represents a card configured for a user account.  - SECTION&#58; The note represents a section in a dashboard.
 * @param id {String} 
 */
var exports = function(noteName, kind, id) {
  var _this = this;



  _this['note_name'] = noteName;
  _this['kind'] = kind;




  _this['id'] = id;



};

/**
 * Constructs a <code>Body3</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Body3} obj Optional instance to populate.
 * @return {module:model/Body3} The populated <code>Body3</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('resource_url')) {
      obj['resource_url'] = ApiClient.convertToType(data['resource_url'], 'String');
    }
      if (data.hasOwnProperty('note_name')) {
      obj['note_name'] = ApiClient.convertToType(data['note_name'], 'String');
    }
      if (data.hasOwnProperty('kind')) {
      obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
    }
      if (data.hasOwnProperty('remediation')) {
      obj['remediation'] = ApiClient.convertToType(data['remediation'], 'String');
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
      if (data.hasOwnProperty('context')) {
      obj['context'] = InlineResponse2002Context.constructFromObject(data['context']);
    }
      if (data.hasOwnProperty('finding')) {
      obj['finding'] = InlineResponse2002Finding.constructFromObject(data['finding']);
    }
      if (data.hasOwnProperty('kpi')) {
      obj['kpi'] = InlineResponse2002Kpi.constructFromObject(data['kpi']);
    }
    }
  return obj;
}

/**
 * Output only. The name of the `Occurrence` in the form \"providers/{provider_id}/occurrences/{occuurence_id}\"
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The unique URL of the resource, image or the container, for which the `Occurrence` applies. For example, https://gcr.io/provider/image@sha256:foo. This field can be used as a filter in list requests.
 * @member {String} resource_url
 */
exports.prototype['resource_url'] = undefined;
/**
 * An analysis note associated with this image, in the form \"providers/{provider_id}/notes/{note_id}\" This field can be used as a filter in list requests.
 * @member {String} note_name
 */
exports.prototype['note_name'] = undefined;
/**
 * This must be 1&#58;1 with members of our oneofs, it can be used for filtering Note and Occurrence on their kind.  - FINDING&#58; The note and occurrence represent a finding.  - KPI&#58; The note and occurrence represent a KPI value.  - CARD&#58; The note represents a card showing findings and related metric values.  - CARD_CONFIGURED&#58; The note represents a card configured for a user account.  - SECTION&#58; The note represents a section in a dashboard.
 * @member {module:model/Body3.KindEnum} kind
 */
exports.prototype['kind'] = undefined;
/**
 * @member {String} remediation
 */
exports.prototype['remediation'] = undefined;
/**
 * Output only. The time this `Occurrence` was created.
 * @member {Date} create_time
 */
exports.prototype['create_time'] = undefined;
/**
 * Output only. The time this `Occurrence` was last updated.
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
 * @member {module:model/InlineResponse2002Context} context
 */
exports.prototype['context'] = undefined;
/**
 * @member {module:model/InlineResponse2002Finding} finding
 */
exports.prototype['finding'] = undefined;
/**
 * @member {module:model/InlineResponse2002Kpi} kpi
 */
exports.prototype['kpi'] = undefined;


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

