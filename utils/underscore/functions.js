var _ = require('underscore');

var func = function(greeting){ return greeting + ': ' + this.name };
var ret=_.bind(func, {name: 'moe'}, 'hi')();
console.log(ret);



var initialize = _.once(function oneTime() {
    console.log('One time');
});
initialize();
initialize();