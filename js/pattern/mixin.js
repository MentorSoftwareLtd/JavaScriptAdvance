//You want to provide a lot of optional features for a class.
//You want to use one particular feature in a lot of different classes.
var _ = require('lodash');
var Person = function(  ){
  this.f1 = function() {};
};

var Car = function(){
  this.f2 = function() {};
};

var mixin = {
  move: function() {console.log('move');}
}

_.extend(Car.prototype, mixin);
_.extend(Person.prototype, mixin);

var car = new Car();
car.f2();
car.move();