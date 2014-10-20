define(
	[
		"components/feedback",
    "components/carousel",
	], 
	function (feedback, carousel) {
  		
  		function init() {
  			console.log("index-view");
  		};
  		
  		return {
            init: init
        };
	}
);