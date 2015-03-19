/**
 * Created by mdylag on 17/03/15.
 */
//Configurable
 //   'use strict';
var person = {};
Object.defineProperty(person, "name",
    {
        configurable: false, //default
        //enumerable: true,
        value: "Nicholas"
    }
);
Object.defineProperty(person, "conf",{
        configurable: true,
        value:'Value'
    }
);
console.log(person);
console.log("Before" ,person.name, person.conf);
delete person.name;
delete person.conf;
console.log("After", person.name, person.conf);

