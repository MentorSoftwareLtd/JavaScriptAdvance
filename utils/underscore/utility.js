var _ = require('underscore');
var underscore = _.noConflict();  //ref to the underscore object

var obj= {a: 10};
var fun=_.constant(obj);
console.log('constant',fun()===obj);

var result = _.times(3, function(n) {
    console.log('Called ', n);
    return n;
});
console.log('times',result);
console.log(_.random(0,1000));

console.log(_.escape("<div>alalala</div>"));
console.log(_.unescape("&lt;div&gt;alalala&lt;/div&gt;"));
