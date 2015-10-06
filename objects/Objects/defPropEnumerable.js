/**
 * Created by mdylag on 17/03/15.
 */
var person = {name: 'value'};
Object.defineProperty(person,'notEnum',{})
Object.defineProperty(person,'enum',{
    value: 'isEnumerable',
    enumerable: true
})

console.log(person.propertyIsEnumerable('enum'));
console.log(person.propertyIsEnumerable('notEnum'));

for (i in person) {
    console.log(i, person[i]);
}

