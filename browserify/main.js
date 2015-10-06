Array.prototype.aaa="";
var tab=[1,2,3,4,5,6];
tab[20] = 100;

for (i in tab) {
    console.log(i, tab[i]);
}

for (i=0; i<tab.length; i++) {
    console.log(i, tab[i]);
}



//miroslaw.dylag@gmail.com