var express = require('express');
var app = express();

var ref = require('./ref/referenceService');
var user = require('./user/userService');

app.use('/ref', ref);
app.use('/user', user);

app.get('/', function (req, resp) {
  resp.send({
    "links": [
      {
        "href"       : "/ref",
        "name"       : "Reference Data",
        "description": "Retrieve reference of books and chapters"
      },{
        "href"       : "/user",
        "name"       : "User Data",
        "description": "REST service of user data of currently entered verses and formatting"
      }
    ]
  })
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});