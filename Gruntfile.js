'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    bower: {
      target: {
        rjsConfig: "scripts/config.js"
      }
    },
    requirejs: {
      options: {
          mainConfigFile : "scripts/config.js",
          baseUrl: "scripts",
          removeCombined: true,
          findNestedDependencies: true,
          fileExclusionRegExp: /^src$/,  
          optimize: "uglify",
          logLevel: 0,
          throwWhen: {
              optimize: true
          },
          preserveLicenseComments: false,
          waitSeconds: 7,
          deps: [
            "main-prod"
          ]
      },
      production: {
        options: {
          out: "dist/main.js",
          include: [
              "views/index-view"
          ],
        }
      },
      legacy: {
        options: {
          out: "dist/main-legacy.js",
          include: [
              "views/index-view",
              "es5-shim",
              "es5-sham",
              "respond"
          ],
          map: {
              "*": {
                  jquery: "jquery-legacy",
                  "jquery-legacy": "jquery-legacy"
              }
          },
          shim: {
              "main-prod": {
                  deps: ["respond", "es5-shim", "es5-sham"]
              }
          }
        }
      }   
    },
    size_report: {
        your_target: {
            files: {
                list: ['dist/*.js']
            },
        },
    }
  });

  grunt.loadNpmTasks('grunt-size-report');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-bower-requirejs');
  

  grunt.registerTask('default', ['bower', 'requirejs', 'size_report']);

};