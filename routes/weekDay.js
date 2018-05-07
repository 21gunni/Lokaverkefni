var express = require('express');
var router = express.Router();
var weekDay = require('../public/javascripts/main');

/* GET home page. */
router.get('/', function (req, res, next) {
  const weekDay = weekDay.weekDay(place, day);
  
  res.render('weekDay', {
    weekDay
  });
});



module.exports = router;
