/**
 * Created by mdylag on 17/03/15.
 */
var x = {a: 10}

var y = {b: 20}
y.__proto__ = x

var z = {c: 30}
z.__proto__ = y

console.log('x',x.a);
console.log('y',y.a, y.b);
console.log('z',z.a, z.b, z.c);
