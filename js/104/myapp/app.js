var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
(async () => {
  let mysql = require('mysql2/promise');
  global.connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'azrielNode',
  });
  // try {
  //   const [results, fields] = await global.connection.query(
  //     'SELECT * FROM `contacts` '
  //   );

  //   console.log(results); // results contains rows returned by server
  //   console.log(fields); // fields contains extra meta data about results, if available
  // } catch (err) {
  //   console.log(err);
  // }

})()

module.exports = app;
