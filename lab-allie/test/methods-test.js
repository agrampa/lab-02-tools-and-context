'use strict';

const assert = require('assert');

const order = require('../lib/methods.js');

describe('methods.js', function() {
  describe('basicSandwichOrder()', function() {
    it('should return a string with the customer order', function() {
      assert.equal(order.basicSandwichOrder('Allie', 'turkey', 'rye', 'swiss'), 'Allie would like a turkey sandwich on rye with swiss.');
    });
      
    it('should be a string for the basic order', function() {
      assert.equal(typeof order.basicSandwichOrder(), 'string');
    });
      
    it('should not have a length of 0 for the basic sandwich', function() {
      assert.notEqual(order.basicSandwichOrder().length, 0);
    });
  });
  
  describe('specialtySandwich()', function() {
    it('should return a string with the customer specialty order', function() {
      assert.equal(order.specialtySandwich('Dave', 'turkey', 'sourdough', 'provolone'), 'Dave would like a turkey sandwich on sourdough with provolone.');
    });    
      
    it('should be a string for the speciality order', function() {
      assert.equal(typeof order.specialtySandwich(), 'string');
    });
    
    it('should not have a length of 0 for the specialty sandwich', function() {
      assert.notEqual(order.specialtySandwich().length, 0);
    });
  });
  
  describe('miniSandwich()', function() {
    it('should return a string with the customer mini order', function() {
      assert.equal(order.miniSandwich('Sofia', 'ham', 'white'), 'Sofia would like a ham sandwich on white.');
    });    
    
    it('should be a string for the mini order', function() {
      assert.equal(typeof order.miniSandwich(), 'string');
    });
    
    it('should not have a length of 0 for the mini sandwich', function() {
      assert.notEqual(order.miniSandwich().length, 0);
    });    
  });
  
  describe('glutenFree()', function() {
    it('should return a string with the customer order on gluten-free bread', function() {
      assert.equal(order.glutenFree('Gary', 'salami', 'cheddar'), 'Gary would like a salami sandwich on gluten-free bread with cheddar.');
    });
    
    it('should be a string for the gluten-free order', function() {
      assert.equal(typeof order.glutenFree(), 'string');
    });
    
    it('should not have a length of 0 for the gluten-free sandwich', function() {
      assert.notEqual(order.glutenFree().length, 0);
    });
  });
});

