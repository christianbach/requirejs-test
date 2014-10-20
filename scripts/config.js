requirejs.config({
    baseUrl: "scripts/",
    paths: {
        "es5-shim": "vendor/es5-shim/es5-shim",
        hammerjs: "vendor/hammerjs/hammer",
        "jquery-legacy": "vendor/jquery-legacy/dist/jquery",
        respond: "vendor/respond/dest/respond.src",
        "es5-sham": "vendor/es5-shim/es5-sham",
        flight: "vendor/flight/index",
        jquery: "vendor/jquery/dist/jquery"
    },
    packages: [
        {
            name: "flight",
            location: "vendor/flight",
            main: "index"
        }
    ],
    waitSeconds: 7
});