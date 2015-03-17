/**
 * Created by mdylag on 17/03/15.
 */
var person = {};
Object.defineProperty(person, "name",
    {
        writable: false,
        value: "Nicholas"
    }
);

console.log("Before" ,person.name);
person.name="Mirek";
console.log("After", person.name);

