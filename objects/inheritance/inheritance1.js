/**
 * Created by mdylag on 17/03/15.
 */
//Inheritance
function Shape(){
    this.name = 'shape';
    this.toString = function() {return this.name;};
}

function TwoDShape(){
    this.name = '2D shape';
}

function Triangle(side, height) {
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function(){return this.side * this.height / 2;};
}


//Dziedziczenia Nie rozswzerzamy obiektu przez
//prototypowanie tylko nadpisujemy prototyp konstruktorem
TwoDShape.prototype = new Shape()
Triangle.prototype = new TwoDShape()


//TwoDShape.prototype.constructor = TwoDShape;
//Triangle.prototype.constructor = Triangle;

var my = new Triangle(5, 10);
my.getArea();

console.log(my instanceof Shape);
console.log(my instanceof TwoDShape);
console.log(my instanceof Triangle);