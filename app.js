var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var Categories = require('./routes/Categories');
var Comments = require('./routes/Comments');
var Displays = require('./routes/Displays');
var Events = require('./routes/Events');
var Includes = require('./routes/Includes');
var Likes = require('./routes/Likes');
var Migrations = require('./routes/Migrations');
var Orders = require('./routes/Orders');
var Pictures_event = require('./routes/Pictures_event');
var Pictures_product = require('./routes/Pictures_product');
var Products = require('./routes/Products');
var Registers = require('./routes/Registers')
var Schools = require('./routes/Schools');
var Statuses_event = require('./routes/Statuses_event');
var Statuses_user = require('./routes/Statuses_user');
var Stocks = require('./routes/Stocks');
var Votes = require('./routes/Votes');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', routes);
app.use('/api/users', users);
app.use('/api/Categories', Categories);
app.use('/api/Comments', Comments);
app.use('/api/Displays', Displays);
app.use('/api/Events', Events);
app.use('/api/Includes', Includes);
app.use('/api/Likes', Likes);
app.use('/api/Migrations', Migrations);
app.use('/api/Orders', Orders);
app.use('/api/Pictures_event', Pictures_event);
app.use('/api/Pictures_product', Pictures_product);
app.use('/api/Products', Products);
app.use('/api/Registers', Registers);
app.use('/api/Schools', Schools);
app.use('/api/Statuses_event', Statuses_event);
app.use('/api/Statuses_user', Statuses_user);
app.use('/api/Stocks', Stocks);
app.use('/api/Votes', Votes);
app.use('/api/login',login);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;