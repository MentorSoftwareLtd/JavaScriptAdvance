/**
 * Created by mdylag on 17/03/15.
 */
var external = function(param) {
    var internal = function(theinput) {
        console.log('Internal function ', theinput);
    };
    console.log('External function ', param);

    internal(param);
};

external(10);
