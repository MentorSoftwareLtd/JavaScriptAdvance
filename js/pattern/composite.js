// Single elements
/*$( "#singleItem" ).addClass( "active" );
$( "#container" ).addClass( "active" );

// Collections of elements
$( "div" ).addClass( "active" );
$( ".item" ).addClass( "active" );
$( "input" ).addClass( "active" );*/
var NodeComposite = function (name) {
  this.children = [];
  this.name = name;
}
NodeComposite.prototype = {
  add: function (child) {
    this.children.push(child);
  },
  getChild: function (i) {
    return this.children[i];
  },

  show: function () {
    for (var node, i = 0; node = this.getChild(i); i++) {
      node.show();
    }
    console.log(this.name);
  }
}

var root = new NodeComposite("root");
var n11=new NodeComposite("level_1_1");
root.add(n11);

var n12=new NodeComposite("level_1_2");
var n22=new NodeComposite("level_2_2");
n12.add(n22);
root.add(n12);

n12.show();
