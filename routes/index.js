var express = require('express');
var router = express.Router();
var random = require('../public/javascripts/main');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
  });
});


/* POST home page. */
router.post('/', (req, res, next) => {
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
