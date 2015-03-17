/**
 * Created by mdylag on 17/03/15.
 */
var obj1 = {};

var obj2 = new Object();

//Dynamic muttable object
var object = {a  :10};
console.log("Object object", object);
object.method5 = function () {}; // add new method
object.d = 40; // add new property "d"
object.a = 100; // modify property "а"
console.log("Object object", object);
delete object.a; // removed own "а"
console.log("Object object", object);
