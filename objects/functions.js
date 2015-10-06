//Primitives are passed by value
//1). Object are passed by
//call_by_sharing
//reference_by_value
//2. Always by value but this value is a reference
// http://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language
//
function changeStuff(num, obj1, obj2)
{
    num = num * 10;
    obj1.item = "changed";
    obj2 = {item: "changed"};
    console.log("In function ",num, obj1.item, obj2.item)
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log("After function ",num, obj1.item, obj2.item)
