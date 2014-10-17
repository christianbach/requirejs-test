require(["config"], function() {
	/* development mode for < ie9 */
	require.config({
        map: {
            "*": {
                jquery: (document.addEventListener) ? "jquery" : "jquery-legacy"
            }
        }
    });
	require(["app"], function(app) {
		console.log("main");
	});
});