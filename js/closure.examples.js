var data = [];

for (var k = 0; k < 3; k++) {
    data[k] = (function(x){
        return function(){
            alert(x);
        }
    })(k)

}

data[0](); // 1
data[1](); // 2
data[2](); // 3

//funarg static (or lexical) scope chain
function foo() {
    var x = 10;
    return function bar() {
        console.log(x);
    };
}
var returnedFunction = foo();
returnedFunction(); // 10, but not 20
var x = 20;

// execution of the returned function
returnedFunction(); // 10, but not 20



// global variable "x"


//downward funarg problem
// global "x"
var x = 10;

// global function
function foo() {
    console.log(x);
}

(
    function (funArg) {

    // local "x"
    var x = 20;

    // there is no ambiguity,
    // because we use global "x",
    // which was statically saved in
    // [[Scope]] of the "foo" function,
    // but not the "x" of the caller's scope,
    // which activates the "funArg"

    funArg(); // 10, but not 20

})(foo); // pass "down" foo as a "funarg"


//Closures example 1. Scope chain static
var print_hello = function ( who ) {
    var num = 0;
    return function (){
        num++;
        console.log( "Hello,  " + num + " raz!");
    }
};
var fp=print_hello('Bob');
fp();
fp();
fp();

//Wynik
function say() {

    var num = 666;
    var sayAlert = function() { console.log(num); }
    num++;
    return sayAlert;
}
say();
say();
say();

//Wspoldzielenie zasiegu nadrzednego
function baz() {
    var x = 1;
    return {
        foo: function foo() { return ++x; },
        bar: function bar() { return --x; }
    };
}

var closures = baz();

console.log(
    closures.foo(), // 2
    closures.bar()  // 1
);



//gettersetter
var getValue, setValue;
//self-ivoking anonymous function
( function()
{
    var secret = 0;
    getValue = function(){
        return secret;
    };
    setValue = function(v){
        secret = v;
    };
}
    ) ();
getValue(); 		//0
setValue(10);
getValue();		//10





//iterator
function setup(x) {
    var i = 0;
    return function(){
        return x[i++];
    };
};

var next = setup(['a', 'b', 'c']);
next();	//a
next();	//b
next();	//c
next();	//undefined


function inclicznik()
{
    var licznik=0;
    return function()
    {
        licznik++;
        return licznik;
    }
}
var fun = inclicznik();
fun1();
fun1();
fun1();






