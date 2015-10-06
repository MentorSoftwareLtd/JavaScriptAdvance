/**
 * Created by mdylag on 17/03/15.
 */
function Person() {
    var bValue = 38;
    Object.defineProperty(this, 'b', {
        get: function () {
            console.log('called get');
            return 100;
        },
        set: function (newValue) {
            console.log('called set');
            bValue = newValue;
        },
        enumerable: true,
        configurable: true
    });
}

var person = new Person();
console.log(person.b, typeof person.b);   //get
person.b = 10;           //set
console.log(person.b);   //get
