// const superSum = require('./math');
// const {superSum, pow2} = require('./math');
const Math = require('./math');
const fs = require('fs');
const _ = require('lodash');

const res = Math.superSum(1,2,3,4,5);
const data = fs.readFileSync('./README.md', {encoding: 'utf8'});


console.log(res);
console.log(Math.superSum(6,7,8,9,10));
console.log(Math.pow2(3));
console.log(data);
console.log(_.sum([1,2,3,4,5]));
console.log(_.concat([1,2,3],[4,5]));