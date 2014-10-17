define(
	[
		"components/feedback",
    "components/carousel",
	], 
	function (feedback) {
  		
  		function init() {
  			console.log("index-view");
  		};
  		
  		return {
            init: init
        };
	}
);