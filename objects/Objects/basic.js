/**
 * Created by mdylag on 17/03/15.
 */
//creates a new object with the specified prototype object and properties.
var obj = Object.create({a:10});
console.log("Object.create",obj, obj.a);

console.log('Object.prototype',Object.prototype);
console.log('Object.length',Object.length);