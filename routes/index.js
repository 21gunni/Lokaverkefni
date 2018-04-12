var express = require('express');
var router = express.Router();
var random = require('../public/javascripts/random');

/* GET home page. */
router.get('/', function(req, res, next) {
  const randomNova = random.randomNova();
  const randomVodafone = random.randomVodafone();
  const randomTwoForOne = random.randomTwoForOne();
  const randomAll = random.randomAll();

  res.render('index', {
    randomNova,
    randomVodafone,
    randomTwoForOne,
    randomAll
  });
});

module.exports = router;
