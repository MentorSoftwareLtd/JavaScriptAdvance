var _ = require('underscore');
var obj= {key1 : 'value1', key2: 'value2'};

console.log('keys', _.keys(obj));
console.log('values', _.values(obj));
console.log('has', _.has(obj,'key1'));


var result=_.mapObject({start: 5, end: 12}, function(val, key) {
    return val + 5;
});
console.log('result ',result);

result=_.pairs({one: 1, two: 2, three: 3});
console.log('pairs ',result);

result=_.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
console.log('invert ',result);

result=_.clone({name: 'moe'});
console.log('clone ',result);

var o1 = {name: 'moe', luckyNumbers: [13, 27, 34]};
var o2  = {name: 'moe', luckyNumbers: [13, 27, 34]};
console.log('===',o1===o2,' isEqual ',_.isEqual(o1,o2));

//is*