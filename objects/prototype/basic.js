/**
 * Created by mdylag on 17/03/15.
 */
//„Prototype based model”
//"Delegation based model"
x = {a: 10, b: 20};
y = Object.create(x);
x.newf = 'dadsdsa';
//y.__proto__ = x;
y.a=40
y.c=50;
console.log("Object y", y.newf); //
var z = Object.create(x);
console.log("Object z", z.newf); //
Function.newf = function() {

}


