'use strict';
module.exports = function(grunt) {
  grunt.registerTask('build-dist', 'Build dist files!', function() {
    
  	function getDistNameSpace(dist, param) {
  		return "<%= settings.requirejs.dists." + dist + "." + param + " %>";
  	};

  	function getIncludes(dist) {
  		var extend = dists[dist].include;
  		var includes = grunt.file.expand(settings.patterns.requirejs).map(function(file) {
  			return file.replace(settings.requirejs.baseUrl, "").replace(".js", "");
  		});
  		return includes.concat(extend);
  	};

    var requirejs = grunt.config.get("requirejs");
    var settings = grunt.config.get("settings");
  	var dists = settings.requirejs.dists;

  	Object.keys(dists).forEach(function(dist) {
  		var config = {
  			"options": {
  				out: "<%= settings.distDir %>/" + getDistNameSpace(dist, "output"),
  				include: getIncludes(dist),
  				map: getDistNameSpace(dist, "map"),
  				shim: getDistNameSpace(dist, "shim"),
  			}
  		};
  		requirejs[dist] = config;
  	});

  	grunt.config.set("requirejs", requirejs);

 	grunt.task.run("requirejs");

  });
};