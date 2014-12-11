
/**
 * Module dependencies.
 */

var path = require('path');

/**
 * File pattern for `karma`.
 */

var pattern = function(file) {
  return {
    pattern: file,
    included: true,
    served: true,
    watched: false
  };
};

/**
 * Framework definition for `karma`.
 */

var framework = function(files) {
  files.unshift(pattern(path.resolve(require.resolve('should'), '../../should.js')));
};

/**
 * Inject `config.files` on framework.
 */

framework.$inject = ['config.files'];

/**
 * Export `framework:should`.
 */

module.exports = {
  'framework:should': ['factory', framework]
};
