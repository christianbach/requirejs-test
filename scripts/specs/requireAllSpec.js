define(
    function () {
        function getAlldependencys() {
            var deps = [];
            for (var file in window.__karma__.files) {
                if (/components\/|views\/|utils\//.test(file)) {
                    deps.push(file.replace(/\/base\//, '').replace(/\.js/, ''));
                }

            }
            return deps;
        };

        describe("Require all", function() {
            
            getAlldependencys().forEach(function(dependency) {

               describe("Require " + dependency, function() { 
                    
                    it(
                        "Should be able to require", 
                        function() {
                            
                            var dependencyLoaded = false;
                            
                            runs(function(){
                                require([dependency], function (dep) {
                                    dependencyLoaded = true;
                                    expect(dependencyLoaded).toBe(true);
                                });
                            });    
                            
                            waitsFor(function(){
                                return dependencyLoaded;
                            });
                        }
                    );

                });

            });
        });

            
    }
);