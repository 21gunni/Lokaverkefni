var express = require('express');
var router = express.Router();
var random = require('../public/javascripts/main');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
  });
});


/* POST home page. */
router.post('/random', (req, res, next) => {
  const randomNova = random.randomNova();

  res.render('random', {
    randomNova
  });
});


module.exports = router;
