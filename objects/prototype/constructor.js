/**
 * Created by mdylag on 17/03/15.
 */
function A() {
    this.a=10;
}
var a = new A();
console.log('A.prototype',A.prototype);
console.log('A.prototype.constructor',A.prototype.constructor);

function B() {

};
B.prototype=new A();
var b = new B();
console.log('Prototype for B',B.prototype);
console.log('Object b ',b, b.a);

