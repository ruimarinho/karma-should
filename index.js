
/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');

/**
 * File pattern for `karma`.
 */

function pattern(file) {
  return {
    pattern: file,
    included: true,
    served: true,
    watched: false
  };
}

/**
 * Framework definition for `karma`.
 */

function framework(files) {
  var should = require.resolve('should');
  var basename = path.basename(should, '.js');

  // should =< 6
  if (['should', 'node'].indexOf(basename) !== -1) {
    should = path.resolve(should, path.join('..', path.sep, '..', path.sep, 'should.js'));
  } else {
    should = path.resolve(should, path.join('..', path.sep, 'should.js'));
  }

  files.unshift(pattern(should));
}

/**
 * Inject `config.files` on framework.
 */

framework.$inject = ['config.files'];

/**
 * Export `framework:should`.
 */

module.exports = {
  'framework:should': ['factory', framework]
}
