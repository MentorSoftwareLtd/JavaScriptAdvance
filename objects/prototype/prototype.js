/**
 * Created by mdylag on 17/03/15.
 */
function B() {

};
B.prototype={a:10};
var b1 = new B();
var b2 = new B();
console.log('Object b1,b2 ',b1.a, b2.a);
B.prototype.a=30;
console.log('Object b1,b2 ',b1.a, b2.a);
b1.a=20;
console.log('Object b1,b2 ',b1.a, b2.a);
