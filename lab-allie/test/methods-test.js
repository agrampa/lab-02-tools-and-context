'use strict';

const assert = require('assert');

const order = require('../lib/methods.js');

describe('methods.js', function() {
  describe('sandwichOrder()', function() {
    it('should return a string with the customer order', function() {
      assert.equal(order.basicSandwichOrder('Allie', 'turkey', 'rye', 'swiss'), 'Allie would like a turkey sandwich on rye with swiss.');
    });
    
    it('should return a string with the customer specialty order', function() {
      assert.equal(order.specialtySandwich('Dave', 'turkey', 'sourdough', 'provolone'), 'Dave would like a turkey sandwich on sourdough with provolone.');
    });
    
    it('should return a string with the customer mini order', function() {
      assert.equal(order.miniSandwich('Sofia', 'ham', 'white'), 'Sofia would like a ham sandwich on white.');
    });
    //   NOT SURE WHY THIS ISN'T WORKING, COMES UP AS 'PENDING'
    // it('should be a string for the basic order'), function() {
    //   assert.equal(typeof order.basicSandwichOrder(), 'string');
    // };
    
    it('should be a string for the speciality order', function() {
      assert.equal(typeof order.specialtySandwich(), 'string');
    });
    
    it('should be a string for the mini order', function() {
      assert.equal(typeof order.miniSandwich(), 'string');
    });
  });
});

