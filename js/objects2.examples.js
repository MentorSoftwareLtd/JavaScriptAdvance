function addTen(num) {
    num += 10;
    return num;
}
var result = addTen(count);
console.log(count);

//Passing
function setName(obj) {
    obj.name = 'Nicholas';

    obj = new Object();
    obj.name = 'Greg';

    console.log(obj);
}
var person = new Object();
setName(person);
console.log(person); //'Nicholas'

//Konstruktor
//1
function Hero()
{
    this.a = 10;
}
var f = new Hero();
console.log(f);
console.log(f instanceof Hero);
console.log(f instanceof Object);


//2
function Foo()
{
    var z = 20;
    this.a = 10;

}
var f = new Foo();
console.log(f);

//3  Jesli obiekt jest zwracany to jest na nowow wyolany new
function A() {
    // update newly created object
    this.x = 10;
    // but return different object
    return [1, 2, 3];
}

var a = new A();
console.log(a.x, a);

//1 - Prototype
function A() {}
var a = new A();
console.log(A.prototype);
console.log(A.prototype.constructor);

// 2-
// a) prototype tworzonego obiektu jest brane z wlasciwosci prototype funkcji w danym momencie
//b) jesli funkcja zwraca obiekt jest on uzywany do tworzenia nowego obiektu
function A() {}
A.prototype.x = 10;

var a = new A();
console.log(a.x, a); // 10 – by delegation, from the prototype

A.prototype = {
    constructor: A,
    y: 100
};

fun

function A(){this.a = 10};
var b = new A();
b.x=10;
var c = Object.create(b);
console.log(c);// object "b" has new prototype
console.log(b.x); // undefined
console.log(b.y); // 100 – by delegation, from the prototype
console.log(a.x);

function B() {
    this.x = 10;
    return new Array();
}

// if "B" constructor had not return
// (or was return this), then this-object
// would be used, but in this case – an array
var b = new B();
console.log(b.x); // undefined
console.log(Object.prototype.toString.call(b)); // [object


//Property constructor
//1
function A() {}
var a = new A();
console.log(a.constructor); // function A() {}, by delegation

//2
function A() {}
A.prototype.x = new Number(10);

var a = new A();
console.log(a.constructor.prototype); // [object Object]

console.log(a.x); // 10, via delegation
// the same as a.[[Prototype]].x
console.log(a.constructor.prototype.x); // 10

console.log(a.constructor.prototype.x === a.x); // true


//3
function A() {}
A.prototype = {
    x: 10
};

var a = new A();
alert(a.x); // 10
alert(a.constructor === A); // false!