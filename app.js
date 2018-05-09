var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var randomNovaRouter = require('./routes/randomNova');
var randomVodafoneRouter = require('./routes/randomVodafone');
var randomTwoForOneRouter = require('./routes/randomTwoForOne');
var randomAllRouter = require('./routes/randomAll');
var weekDayRouter = require('./routes/weekDay');
var contentRouter = require('./routes/content');
var aboutRouter = require('./routes/about');

var app = express();

// Variables for json objects
app.locals.nova = require('./nova.json');
app.locals.vodafone = require('./vodafone.json');
app.locals.twoForOne = require('./twoForOne.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/randomNova', randomNovaRouter);
app.use('/randomVodafone', randomVodafoneRouter);
app.use('/randomTwoForOne', randomTwoForOneRouter);
app.use('/randomAll', randomAllRouter);
app.use('/weekDay', weekDayRouter);
app.use('/users', usersRouter);
app.use('/content', contentRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
