define(
	[
    "jquery",
    "utils/markup-loader"
  ], 
	function ($, markupLoader) {
	    console.log($.fn.jquery);
	    markupLoader.init($(document));
	}
);