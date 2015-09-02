var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};


var initMochaSinon = function(files) {
  files.unshift(createPattern(path.dirname(require.resolve('mocha-sinon')) + '/mocha-sinon.js'));
};

initMochaSinon.$inject = ['config.files'];

module.exports = {"framework:mocha-sinon": ['factory', initMochaSinon]};
