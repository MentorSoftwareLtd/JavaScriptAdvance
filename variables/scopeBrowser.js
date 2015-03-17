/**
 * Created by mdylag on 17/03/15.
 */
var foo = 0; // global scope

{
    var a = 1;
}
console.log(a);

for (var i=0;i<10;i++){}
console.log(i);


var myFunction = function() {
    var foo = 1; // local scope
    console.log(foo); // logs 1
    var myNestedFunction = function() {
        var foo = 2; // local scope
        console.log(foo); // logs 2
    }();
}();

eval('var foo = 3; console.log(foo);'); // eval() scope
