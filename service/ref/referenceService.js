var express = require('express');
var router = express.Router();

router.get('/', function (req, resp) {
  resp.send({
    "books": [
      {
        "name"     : "Genesis",
        "shortName": "Gen",
        "chapters" : [32, 24, 21, 8]
      }
    ]
  })
});

module.exports = router;