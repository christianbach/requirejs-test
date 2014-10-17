requirejs.config({
    baseUrl: "scripts/",
    paths: {
        flight: "vendor/flight/index",
        requirejs: "vendor/requirejs/require",
        jquery: "vendor/jquery/dist/jquery",
        lodash: "vendor/lodash/dist/lodash.compat",
        moment: "vendor/moment/moment",
        "es5-shim": "vendor/es5-shim/es5-shim",
        hammerjs: "vendor/hammerjs/hammer",
        "jquery-legacy": "vendor/jquery-legacy/dist/jquery",
        respond: "vendor/respond/dest/respond.src",
        "es5-sham": "vendor/es5-shim/es5-sham"
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