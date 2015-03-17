/**
 * Created by mdylag on 17/03/15.
 */
function callCallback(callback) {
    console.log("Function callCallback");
    if (callback && typeof callback === "function") {
        callback();
    }
}

function myCallBack() {
    console.log("Function myCallBack");
}

writeCode(myCallBack);

