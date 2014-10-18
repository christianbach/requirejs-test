module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: 'scripts/',

        // frameworks to use
        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'config.js', included: true},
            {pattern: 'specs/test-main.js', included: true},
            { pattern: 'vendor/**/*.js', included: false },
            { pattern: 'components/**/*.js', included: false },
            { pattern: 'utils/**/*.js', included: false },
            { pattern: 'views/**/*.js', included: false },
            { pattern: 'specs/**/*.js', included: false }
        ],

        // list of files to exclude
        exclude: [
        ],

        // test results reporter to use
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers
        //browsers: ['Chrome'],
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
}