/**
 * Created by mdylag on 17/03/15.
 */
var s = 'Nicholas';
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();   var o = {};
var na = 2 + u;
function f() {}

console.log(typeof s); //string
console.log(typeof i); //number
console.log(typeof b); //boolean
console.log(typeof u); //undefined
console.log(typeof n, n); //object
console.log(typeof o, o); //object
console.log(typeof na, na); //"number"
console.log(typeof f); //"function"


//'use strict';
var vara = 10;
novar = 10;

var person = {};
typeof person;
console.log(person instanceof Object);
