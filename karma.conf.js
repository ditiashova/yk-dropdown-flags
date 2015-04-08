(function (module) {
  "use strict";
  module.exports = function karmaConfigF(config) {
    var configDefinitionObject = {
      exclude:       [],
      basePath:      "",
      preprocessors: {},
      port:          9876,
      colors:        true,
      singleRun:     true,
      autoWatch:     false,
      browsers:      ["Chrome"],
      frameworks:    ["jasmine"],
      reporters:     ["progress"],
      browserify:    {debug: true},
      logLevel:      config.LOG_INFO,
      files:         [
        "build/js/vendor.js",
        "src/libs/angular-mocks/angular-mocks.js",
        "build/js/app.js",
        "src/app/**/*.spec.js"
      ]
    };
    config.set(configDefinitionObject);
  };
}(module));
