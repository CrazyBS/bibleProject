/**
 * Created by CrazyBS on 9/5/2015.
 */
(function (sinon, beforeEach, afterEach) {

  // Sinon integration into Jasmine

  beforeEach(function() {
    if (null == this.sinon) {
      this.sinon = sinon.sandbox.create();
    }
  });

  afterEach(function() {
    if (this.sinon && 'function' === typeof this.sinon.restore) {
      this.sinon.restore();
    }
  });

  // Global Leak Testing

  var globalsBefore = {};

  beforeEach(function(){
    globalsBefore = {};
    for (var key in window)
      if(window.hasOwnProperty(key))
        globalsBefore[key] = true
  });

  afterEach(function(){
    var leaked = [];
    for (var key in window)
      if (window.hasOwnProperty(key) && !(key in globalsBefore))
        leaked.push(key);
    if (leaked.length > 0)
      throw new Error('Leaked global variables: [' + leaked.join(', ') + ']')
  });

})(window.sinon, window.beforeEach, window.afterEach);