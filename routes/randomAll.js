var express = require('express');
var router = express.Router();
var random = require('../public/javascripts/main');

/* GET home page. */
router.get('/', function (req, res, next) {
  const randomAll = random.randomAll();

  res.render('randomAll', {
    randomAll
  });
});



module.exports = router;
