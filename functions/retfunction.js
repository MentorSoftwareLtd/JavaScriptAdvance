/**
 * Created by mdylag on 17/03/15.
 */
var setup = function () {
    console.log('main function');
    return function () {
        console.log('return function');
    };
};
var myfun = setup();			//main function
myfun();
