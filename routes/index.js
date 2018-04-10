var express = require('express');
var router = express.Router();
var main = require('../public/javascripts/random');

/* GET home page. */
router.get('/', function(req, res, next) {
  const randomNova = main.randomNova();
  const randomVodafone = main.randomVodafone();
  const randomTwoForOne = main.randomTwoForOne();
  res.render('index', {
    randomNova,
    randomVodafone,
    randomTwoForOne
  });
});

module.exports = router;
