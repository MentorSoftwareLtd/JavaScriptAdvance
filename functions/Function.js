var myFunction =
    new Function("a", "b", "c","d",
        "return a * b");
var val=myFunction(10,10);
console.log(val);
console.log(myFunction.length);