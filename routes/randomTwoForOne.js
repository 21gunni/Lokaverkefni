var express = require('express');
var router = express.Router();
var random = require('../public/javascripts/main');

/* GET home page. */
router.get('/', function (req, res, next) {
  const randomTwoForOne = random.randomTwoForOne();

  res.render('randomTwoForOne', {
    randomTwoForOne
  });
});



module.exports = router;
