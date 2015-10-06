//Inheritance
function Shape(){
  this.name = 'shape';
  this.print = function() {return this.name;};
}

function TwoDShape(x,y){
  this.name = '2D shape';
  this.x=x;
  this.y=y;
}

function Triangle(x, y, z) {
  this.name = 'Triangle';
  this.x=x;
  this.y=y;
  this.z=z;

}
TwoDShape.prototype = new Shape()
Triangle.prototype = new TwoDShape()

var my = new Triangle(5, 10, 11);
console.log(my.print());

console.log(my instanceof Shape);
console.log(my instanceof TwoDShape);
console.log(my instanceof Triangle);


//Dziedziczenia Nie rozswzerzamy obiektu przez
// prototypowanie tylko nadpisujemy prototyp konstruktorem


TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;


var td = new TwoDShape();
td.constructor
td.toString()
var s = new Shape();
s.constructor;

var t1 = new Triangle(1,2);
var t2 = new Triangle(1,3);
var t3 = new Triangle(1,4);
t1.name='Triangle1';
t2.name='Triangle2';
t3.name='Triangle3';

//Moving Shared properties to the prototype

function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name;};
function TwoDShape(){}
// take care of inheritance
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = '2D shape';
function Triangle(side, height) {
  this.side = side;
  this.height = height;
}
// take care of inheritance
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;
// take care of inheritance
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side * this.height
/ 2;}


var my = new Triangle(5,10);
my.getArea();
my.toString();
my.hasOwnProperty('side')
my.hasOwnProperty('name')
TwoDShape.prototype.isPrototypeOf(my);
Triangle.prototype.name = 'Triangle';




//Only prototype inheritance
function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name;};
function TwoDShape(){}

// take care of inheritance
TwoDShape.prototype = Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = '2D shape';
function Triangle(side, height) {
  this.side = side;
  this.height = height;
}
// take care of inheritance
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;
// take care of inheritance
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side * this.height
/ 2;}

var my = new Triangle(5, 10);
my.getArea();
my.toString();
var s = new Shape()
s.name;


//Konstruktor tymczasowy
function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name;};
function TwoDShape(){}
// take care of inheritance
var F = function(){};
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = '2D shape';
function Triangle(side, height) {
  this.side = side;
  this.height = height;
}
// take care of inheritance
var F = function(){};
F.prototype = TwoDShape.prototype;
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
// augment prototype
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side * this.height
/ 2;};

var my = new Triangle(5, 10);
my.getArea()
my.toString()
var s = new Shape();
s.name;

//uber
function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function(){
  var result = [];
  if (this.constructor.uber) {
    result[result.length] = this.constructor.uber.toString();
  }
  result[result.length] = this.name;
  return result.join(', ');
};
function TwoDShape(){}
// take care of inheritance
var F = function(){};
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.uber = Shape.prototype;
// augment prototype
TwoDShape.prototype.name = '2D shape';
function Triangle(side, height) {
  this.side = side;
  this.height = height;
}
// take care of inheritance
var F = function(){};
F.prototype = TwoDShape.prototype;
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
Triangle.uber = TwoDShape.prototype;
// augment prototype
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side * this.height
/ 2;}
var my = new Triangle(5, 10);
my.toString();

//extends
function extend(Child, Parent) {
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
}

var shape = {a : 10};
var twoDShape = {};

extend(TwoDShape, Shape);
console.log(twoDShape);

//kopiowanie właściwości
function extend2(Child, Parent) {
  var p = Parent.prototype;
  var c = Child.prototype;
  for (var i in p) {
    c[i] = p[i];
  }
  c.super = p;
}

var Shape = function(){};
var TwoDShape = function(){};
Shape.prototype.name = 'shape';

Shape.prototype.toString = function(){return this.name;};
extend(TwoDShape, Shape);
var td = new TwoDShape();
td.name

//object()
function object(o) {
  var n;
  function F() {}
  F.prototype = o;
  n = new F();
  n.uber = o;
  return n;
}

Object.extend();

Number.prototype.myFun = function ()
{
    return 10;
}

f = new Number();
f.myFun();

var shape = {
  name: 'shape',
  toString: function() {return this.name;}
}

var twoDee = Object.extend(shape);
twoDee.name = '2D shape';

var triangle = Object.extend(twoDee);
triangle.name = 'Triangle';



function PersonC() {
    this.firstName= "aaa";
}

function EmployeeC() {
    this.id= null;
}
EmployeeC.prototype=new PersonC();
var a = new EmployeeC();
var b = new EmployeeC();
console.log(a,b);
a.firstName = "Nowak"
console.log("Object a",a, a.firstName);
console.log("Object b",b, b.firstName);


var Person = {
    firstName: null, // the person’s first name
    lastName: null // the person’s last name
};

function EmployeeC() {
    this.id= null;
}
EmployeeC.prototype=Person;
var a = new EmployeeC();


// “subclass” Person
var Employee = Object.create(Person, {
    id: { // the employees’s id
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
    }
});

var Manager = Person.extend({ // using only properties that are copied over
    firstName: null,
    lastName: null,
    _construct: function(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    },
    toString: function(){
        return this.firstName + " " + this.lastName;
    }
});


// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();
console.log(rect.x, rect.y);


console.log('Is rect an instance of Rectangle? ' + (rect instanceof Rectangle)); // true
console.log('Is rect an instance of Shape? ' + (rect instanceof Shape)); // true
rect.move(1, 1); // Outputs, 'Shape moved.'