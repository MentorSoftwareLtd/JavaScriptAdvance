/**
 * Created with JetBrains WebStorm.
 * User: mdylag
 * Date: 11/09/2013
 * Time: 10:27
 * To change this template use File | Settings | File Templates.
 */

    function function1(a, b, c, d)
    {
        console.log(arguments);
        console.log(a,b,c,d);

    }

    function1();
    function1(1,2,3,4);
    function1(1,2,3,4,5,6);
    function1(1,2,3,4,5,6,7);




    typeof function1();
    function1.length;
//Przekazanie argumentu do funkcji
function addTen(num) {
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
console.log(count);
console.log(result);

function setName(obj) {
    obj.name = “Nicholas”;
    obj = new Object();
    obj.name = “Greg”;
}
var person = new Object();
setName(person);
alert(person.name); //”Nicholas”

//callback function

function callCallback(callback) {
    console.log("Function callCallback");
    if (callback && typeof callback === "function") {
        callback();
    }
}

function introduceBugs()
{
    console.log("Function introducebugs");
}

writeCode(introduceBugs);

//Callback jako funkcja anonimowa
writeCode(function () {console.log("Anonymous callback function ")});


//Funkcje samowywolujace
(
    function(){
        console.log('Samowywolujaca funkcja 1');
    }
    ) ();

(

    function(name){
        console.log('Hello ' + name + '!');
    }
    )('Samowywolujaca funkcja 2');


//Funkcje samodefuniujace
var scareMe = function () {
    console.log("Funkcja samodefiniujaca 1!");
    scareMe = function () {
        console.log("Funkcja samodefiniujaca 2");
    };
};
// using the self-defining function
scareMe();
scareMe();


//Funkcje wewnetrzne
var a = function(param) {
    var b = function(theinput) {
        console.log("Funkcja wewnetrzna");
        return theinput * 2;
    };
    console.log("Funkcja zewnetrzna")
    return 'The result is ' + b(param);
};
a(1);




