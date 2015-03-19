/**
 * Created by mdylag on 17/03/15.
 */
function X() {
    this.a = 10;
}
var obj_x = new X();
console.log('x',obj_x);

function Y()
{
    var z = 20;
    this.a = 10;

}
var obj_y = new Y();
console.log('y',obj_y);

function Z() {
    // update newly created object
    this.x = 10;
    // but return different object called new again
    return [1, 2, 3];
}

var obj_z = new Z();
console.log('z',obj_z);

