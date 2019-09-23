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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.findings);
  }
}(this, function(expect, findings) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new findings.InlineResponse2002FindingNetworkConnection();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2002FindingNetworkConnection', function() {
    it('should create an instance of InlineResponse2002FindingNetworkConnection', function() {
      // uncomment below and update the code to test InlineResponse2002FindingNetworkConnection
      //var instance = new findings.InlineResponse2002FindingNetworkConnection();
      //expect(instance).to.be.a(findings.InlineResponse2002FindingNetworkConnection);
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instance = new findings.InlineResponse2002FindingNetworkConnection();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instance = new findings.InlineResponse2002FindingNetworkConnection();
      //expect(instance).to.be();
    });

    it('should have the property client (base name: "client")', function() {
      // uncomment below and update the code to test the property client
      //var instance = new findings.InlineResponse2002FindingNetworkConnection();
      //expect(instance).to.be();
    });

    it('should have the property server (base name: "server")', function() {
      // uncomment below and update the code to test the property server
      //var instance = new findings.InlineResponse2002FindingNetworkConnection();
      //expect(instance).to.be();
    });

  });

}));
