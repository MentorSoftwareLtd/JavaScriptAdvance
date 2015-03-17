/**
 * Created by mdylag on 05/03/15.
 */
//Native implementation Chrome 32, Opera 19 & Firefox 29
'use strict'

var RSVP = require('rsvp');


/*A promise can be:
    fulfilled The action relating to the promise succeeded
    rejected The action relating to the promise failed
    pending Hasn't fulfilled or rejected yet
    settled Has fulfilled or rejected
*/

var promise = new RSVP.Promise(function(resolve, reject) {
    // do a thing, possibly async, then…

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