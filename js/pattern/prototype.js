/*The prototype pattern focuses on creating an object that can be used as a blueprint for other objects
through prototypal inheritance. This pattern is inherently easy to work with in JavaScript because of the native
support for prototypal inheritance in JS.
*/
// build our blueprint object
var MyBluePrint = function MyBluePrintObject() {
  this.someFunction = function someFunction() {};
  this.someOtherFunction = function someOtherFunction() {};
  this.showMyName = function showMyName() {
    console.log( this.name );
  };
};
function MyObject() {
  this.name = 'testing';
}
MyObject.prototype = new MyBluePrint();

var testObject = new MyObject();
testObject.showMyName();