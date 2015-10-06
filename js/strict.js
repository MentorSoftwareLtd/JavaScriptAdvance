"use strict";
mistypedVaraible = 17;
delete Object.prototype;
function sum(a, a, c){ // !!! syntax error
    var o = { p: 1, p: 2 }; // !!! syntax error
    "use strict";
    return a + b + c; // wrong if this code ran
}
var sum = 015 +
    100 +
    100;
sum;

function f(a){
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);
assert(pair[0] === 42);
assert(pair[1] === 17);
window.a;

"use strict";
function fun() { return this; }
console.log(fun() === undefined);
console.log(fun.call(2) === 2);
console.log(fun.apply(null) === null);
console.log(fun.call(undefined) === undefined);
console.log(fun.bind(true)() === true);