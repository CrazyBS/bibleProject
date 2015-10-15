var httpProxy = require('express-http-proxy');
var url = require('url');
var router = require('express').Router();
var apiKey = require('./apiKey') || "";

router.use('/', httpProxy('https://bibles.org', {
  filter: function (request, response) {
    return request.method == 'GET';
  },
  forwardPath: function (request, response) {
    return '/v2' + url.parse(request.url).path;
  },
  decorateRequest: function(request) {
    request.headers['Authorization'] = 'Basic ' + apiKey;
    return request;
}
}));

module.exports = router;