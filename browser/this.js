//Global context
console.log(this.document === document); // true

// In web browsers, the window object
// is also the global object:
console.log(this === window); // true

this.a = 37;   //var a = 37;
console.log(window.a);

//Function context
//Inside a function, the value of this depends on how the function is called.
function f1(){
    return this;
}

f1() === window;   //true

function f2(){
    "use strict"; // see strict mode
    return this;
}

f2() === undefined;
window.f2() === window;

