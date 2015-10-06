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



