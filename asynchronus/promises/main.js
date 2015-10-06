/**
 * Created by mdylag on 05/03/15.
 */
//Native implementation Chrome 32, Opera 19 & Firefox 29
'use strict'

var RSVP = require('rsvp');



var promise = new RSVP.Promise(function(resolve, reject) {
    if (1==1) {
        resolve("Stuff worked!");
    }
    else {
        reject(Error("It broke"));
    }
});

//Once a promise has been resolved or rejected, it cannot be resolved or rejected again.
promise.then(function(value) {
    console.log('success');
}, function(value) {
    console.log('failure');
});

//Chaining