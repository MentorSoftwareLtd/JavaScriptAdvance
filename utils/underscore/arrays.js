var _ = require('underscore');
console.log('first',_.first([5, 4, 3, 2, 1]));
console.log('first 2',_.first([5, 4, 3, 2, 1],2));

console.log('initial',_.initial([5, 4, 3, 2, 1]));

console.log('last',_.last([5, 4, 3, 2, 1]));
console.log('last 2',_.last([5, 4, 3, 2, 1],2));

console.log('rest',_.rest([5, 4, 3, 2, 1]));
console.log('tail',_.tail([5, 4, 3, 2, 1]));
console.log('drop',_.drop([5, 4, 3, 2, 1]));

//Returns a copy of the array with all falsy values removed.
//In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
console.log('compact',_.compact([0, 1, false, 2, '', 3]));

console.log('union',_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]));
console.log('intersection',_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]));
console.log('diffrence',_.difference([1, 2, 3, 4, 5], [5, 2, 10]));
console.log('uniq',_.uniq([1, 2, 1, 3, 1, 4]));