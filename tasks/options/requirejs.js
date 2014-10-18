module.exports = {
  options: {
      mainConfigFile : "scripts/config.js",
      baseUrl: "scripts",
      include: [
          "views/index-view"
      ],
      deps: [
        "main-prod"
      ],
      fileExclusionRegExp: /^src$/,  
      removeCombined: true,
      findNestedDependencies: true,
      preserveLicenseComments: false,
      waitSeconds: 7,
      optimize: "uglify",
      logLevel: 0,
      throwWhen: {
          optimize: true
      }
  },
  production: {
    options: {
      out: "dist/main.js"
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
}