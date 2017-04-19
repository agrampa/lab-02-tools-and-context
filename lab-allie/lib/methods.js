'use strict';

module.exports = exports = {};

exports.basicSandwichOrder = function(name, meat, bread, cheese) {
  this.name = name;
  this.meat = meat;
  this.bread = bread;
  this.cheese = cheese;
};

exports.specialtySandwich = function(name, meat, bread, cheese) {
  exports.basicSandwichOrder.call(this, meat, bread, cheese);
  this.largeSize = true;
  this.mayo = true;
  this.lettuce = true;
  this.tomato = true;
};

exports.sandwichOrder = function(name, meat, bread, cheese) {
  return `${name} would like a ${meat} sandwich on ${bread} with ${cheese}.`;
};

