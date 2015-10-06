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
//TwoDShape.prototype.constructor = TwoDShape;
//Triangle.prototype.constructor = Triangle;

var my = new Triangle(5, 10, 11);
console.log(my.print());

console.log(my instanceof Shape);
console.log(my instanceof TwoDShape);
console.log(my instanceof Triangle);
console.log(my.constructor, Triangle.prototype.constructor);


//Dziedziczenia Nie rozswzerzamy obiektu przez
// prototypowanie tylko nadpisujemy prototyp konstruktorem




