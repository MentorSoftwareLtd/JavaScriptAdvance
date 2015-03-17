/**
 * Created by mdylag on 17/03/15.
 */
//Configurable
var person = {};
Object.defineProperty(person, "name",
    {
        configurable: false,  //default
        value: "Nicholas"
    }
);
Object.defineProperty(person, "conf",{
        configurable: true,
        value:'Value'
    }
);

console.log("Before" ,person.name, person.conf);
delete person.name;
delete person.conf;
console.log("After", person.name, person.conf);

