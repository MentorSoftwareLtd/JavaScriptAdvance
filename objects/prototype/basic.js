/**
 * Created by mdylag on 17/03/15.
 */
//„Prototype based model” "Delegation based model"
x = {a: 10, b: 20};
y = {a: 40, c: 50};
y.__proto__ = x;
console.log("Object y", y.a, y.b, y.c); //


