var _ = require('underscore');
var tab = [1,2,3,4,5];
_.each(tab,function(value, index, array){
    console.log(value, index, array)
});

var person = {};
person.friends = {
    name1: 'obj name1',
    name2: 'obj name2',
    name3: 'obj name3',
    name4: 'obj name4'
};

_.each(['name4', 'name2'], function(name, index, array){
    console.log(this[name], index, array, this);
}, person.friends);

console.log('Map',_.map([1, 2, 3], function(num){ return num * 3; }) );
