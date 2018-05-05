var express = require('express');
var router = express.Router();
var random = require('../public/javascripts/main');

/* GET home page. */
router.get('/', function (req, res, next) {
  const randomVodafone = random.randomVodafone();

  res.render('randomVodafone', {
    randomVodafone
  });
});



module.exports = router;
