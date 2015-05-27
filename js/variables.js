var s = 'Nicholas';
var b = true;
var i = 22;
var u;
var n = null;
var a = [];   var a = new Array();
var o = new Object();   var o = {};
var na = 2 + u;
function f() {}

console.log(typeof s); //string
console.log(typeof i); //number
console.log(typeof b); //boolean
console.log(typeof u); //undefined
console.log(typeof a); //array
console.log(typeof n, n); //object
console.log(typeof o, o); //object
console.log(typeof na, na); //"number"
console.log(typeof f); //"function"

var person = {};
typeof person;
console.log(person instanceof Object);


function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var result = add(10, 20); //30
console.log(sum); //causes an error since sum is not a valid variable

function add(num1, num2) {
    sum = num1 + num2;
    return sum;
}
var result = add(10, 20); //30
console.log(sum); //30

var color = "blue";
function getColor(){
    var color = "red";
    return color;
}
console.log(getColor()); //”red”




