//http://www.dofactory.com/javascript/flyweight-design-pattern

function Flyweight (name) {
  this.name = name;
}

var FlyWeightFactory = (function () {
  var flyweights = {};
  return {
    get: function (name) {
      if (!flyweights[name]) {
        flyweights[name] =
          new Flyweight(name);
      }
      return flyweights[name];
    },
    getCount: function () {
      var count=0;
      for (var f in flyweights) count++;
      return count;
    }
  }
})();

function Computer(name, tag) {
  this.flyweight = FlyWeightFactory.get(name);
  this.getName = function () {
    return this.flyweight.name;
  }
};

function ComputerCollection(name) {
  var computers = {};
  var count = 0;

  return {
    add: function (name, tag) {
      computers[tag] = new Computer(name, tag);
      count++;
    },
    get: function (tag) {
      return computers[tag];
    },
    getCount: function () {
      return count;
    }
  };
};

var computers = new ComputerCollection();
computers.add("Dell", "Y755P");
computers.add("Dell", "X997T");
computers.add("Dell", "U8U80");
computers.add("Dell", "NT777");
computers.add("Dell", "0J88A");
computers.add("HP", "CNU883701");
computers.add("HP", "TXU003283");

console.log("Computers: " + computers.getCount());
console.log("Flyweights: " + FlyWeightFactory.getCount());