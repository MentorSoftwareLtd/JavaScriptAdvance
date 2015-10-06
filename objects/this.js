/**
 * Created by mdylag on 17/03/15.
 */
//object method
var o = {prop: 37, f:function(){
    return this.prop
}};
function independent() {
    return this.prop;
}

o.fi = independent;
console.log(o.f()); // logs 37// this===o
console.log(o.fi()); // logs 37// this===o
console.log(independent()); //this===global object

//object prototype chain
var o = {
    f:function(){ return this.a + this.b; }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f());
console.log(p===o);

//As a constructor this is bound to
//a new object being created
function C(){
    this.a = 37;
}

var o = new C();
console.log(o.a);

//call , apply
var obj1 = {
    a:10,
    fun:function() {console.log('fun obj1',this, this.a)}
}
obj1.fun();

var obj2 = {
    a:20,
    fun:function() {console.log('fun obj2',this, this.a)}
}
obj2.fun();
//apply obj2.fun for obj1
obj2.fun.apply(obj1);
obj2.fun.call(obj1);

//ECMAScript 5 - bind
function f(){
    return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var o = {a:37, f:f, g:g};
console.log(o.f(), o.g()); // 37, azerty