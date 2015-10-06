
var mySingleton = (function () {
	var instance;
	function init() {
        	    // Private methods and variables
		function privateMethod(){}
			var privVar = "Im also private";

				return {
					// Public methods and variables
					publicMethod: function () {},
					publicProperty: "I am also public",
					getRandomNumber: function() {
						return privateRandomNumber;
					}

				};
	};

	  return {
		  getInstance: function () {
				if ( !instance ) {
					instance = init();
				}
				return instance;
			}};
})();

mySingleton.getInstance();

