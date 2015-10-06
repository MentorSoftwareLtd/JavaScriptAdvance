var selfDef = function(){
    console.log("Boo!");
    var selfDef = function(){
        console.log("Double boo!");
    }
}

selfDef();
selfDef();
