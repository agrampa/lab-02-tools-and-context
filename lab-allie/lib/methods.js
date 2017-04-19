'use strict';

module.exports = exports = {};

exports.basicSandwichOrder = function(name, meat, bread, cheese) {
  this.name = name;
  this.meat = meat;
  this.bread = bread;
  this.cheese = cheese;
  this.size = '12 inches';
  return `${name} would like a ${meat} sandwich on ${bread} with ${cheese}.`;
};

exports.specialtySandwich = function(name, meat, bread, cheese) {
  exports.basicSandwichOrder.call(this, name, meat, bread, cheese);
  this.size = '16 inches';
  this.mayo = true;
  this.lettuce = true;
  this.tomato = true;
  return `${name} would like a ${meat} sandwich on ${bread} with ${cheese}.`;
};

exports.miniSandwich = function(name, meat, bread) {
  exports.basicSandwichOrder.apply(this, [name, meat, bread]);
  this.size = '6 inches';
  this.cutInHalf = false;
  return `${name} would like a ${meat} sandwich on ${bread}.`;
};