"use strict";
var data = [];

for (var k = 0; k < 3; k++) {
    //data[k] = passK(k);
    data[k]=(function(x){
        return function() {
            console.log(x);
        };
    })(k);
}
//ponizszy kod wyswietlal wartosc indeksu
data[0](); // 1
data[1](); // 2
data[2](); // 3
