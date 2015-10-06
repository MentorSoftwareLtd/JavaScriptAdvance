function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Parent;
}

function Square() {
    this.width = 0;
    this.getArea = function() {
        return width*width;
    }
}

function Rectangle() {
    Square.call(this);
    this.height = 0;
    this.getArea = function() {
        this.width* this.height;
    }
}

extend(Rectangle, Square);

var s = new Square();
s.width = 10;
var r = new Rectangle();

function ScreenRectangle() {
    Rectangle.call(this);
    this.draw = function() {
        console.log('Draw on the screen');
    }
}


