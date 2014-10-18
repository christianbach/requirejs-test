var files = window.__karma__.files;

require.config({
    baseUrl: "/base/"
});

require(["config"], function() {
    require.config({
        baseUrl: "/base/",
        deps: Object.keys(files).filter(function(dep) {
             if(/Spec\.js$/.test(dep)) return true;
        }),
        callback: window.__karma__.start
    });
});