/**
 * Created by mdylag on 17/03/15.
 */
function basic(a, b, c, d) {
    console.log(arguments);
    console.log(a,b,c,d);
}

basic();
basic(1,2,3,4);
basic(1,2,3,4,5,6);

function funRet() {
    return 10;
}

var fun2 = function() {

}
function fun2() {

}

var retVal = funRet();

