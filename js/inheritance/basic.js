function Shape() {
  this.name = "Shape";
  this.a = 0;
  this.b = 0;
}

function Triangle() {
  this.c = 10;
}
function Rectangle() {
}

function extend(Child, Parent) {
  var _super = new Parent();
  Child.prototype = _super;
  Child.prototype.constructor = Child;
  Child.super = _super;
}

extend(Triangle, Shape);
extend(Rectangle, Shape);
var tr = new Triangle();
console.log("tr", Triangle.super);
console.log(tr.name, tr.a, tr.b, tr.c);