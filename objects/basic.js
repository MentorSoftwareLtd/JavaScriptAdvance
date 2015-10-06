var tab = ['0','A'];
tab[0];
tab[1];
tab[10]='ad';
console.log(tab);
var tab2 = new Array();


var obj1 = {
    a: 10,
    f : function() {}
};

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
