/**
 * Created by mdylag on 17/03/15.
 */
//Value of this
/*console.log('Global',this);
function f() {
    console.log('from function',this);
}
f();*/

var obj1 = {
    a:10,
    fun:function() {console.log('fun obj1',this, this.a)}
}
obj1.fun();

var obj2 = {
    a:20,
    fun:function() {console.log('fun obj2',this, this.a)}
}
obj2.fun();
//apply obj2.fun for obj1
obj2.fun.apply(obj1);
obj2.fun.call(obj1);