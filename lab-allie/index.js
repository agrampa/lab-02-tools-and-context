'use strict';

const order = require('./lib/methods.js');

console.log(order.basicSandwichOrder('Allie', 'turkey', 'rye', 'swiss'));

console.log(order.specialtySandwich('Dave', 'turkey', 'sourdough', 'provolone'));

console.log(order.miniSandwich('Sofia', 'ham', 'cheddar'));