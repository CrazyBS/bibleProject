var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};


var initMochaSinon = function(files) {
  files.unshift(createPattern(path.join(__dirname, 'adapter.js')));
  files.unshift(createPattern(path.resolve(require.resolve('jasmine-sinon'))));
};

initMochaSinon.$inject = ['config.files'];

module.exports = {"framework:jasmine-sinon": ['factory', initMochaSinon]};
