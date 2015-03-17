/**
 * Created by mdylag on 17/03/15.
 */
var foo = {x:10}
Object.preventExtensions(foo);
console.log(Object.isExtensible(foo)); // false

// can't add new properties
foo.z = 30;

//can add
//foo.x=20;
//can delete
//delete foo.x
console.log(foo); //{x: 10, y: 20}