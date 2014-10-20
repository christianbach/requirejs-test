module.exports = {
  options: {
      mainConfigFile : "<%= settings.requirejs.configFile %>",
      baseUrl: "<%= settings.requirejs.baseUrl %>",
      deps: "<%= settings.requirejs.deps %>",
      removeCombined: true,
      findNestedDependencies: true,
      preserveLicenseComments: false,
      waitSeconds: 7,
      optimize: "uglify",
      logLevel: 0,
      throwWhen: {
          optimize: true
      }
  }
};
