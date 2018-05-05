var express = require('express');
var router = express.Router();
var random = require('../public/javascripts/main');

/* GET home page. */
router.get('/', function (req, res, next) {
  const randomNova = random.randomNova();

  res.render('randomNova', {
    randomNova
  });
});



module.exports = router;
