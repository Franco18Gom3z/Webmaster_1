var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

require('dotenv').config();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login')
var tiendaRouter = require('./routes/tienda');
var nosotrosRouter = require('./routes/nosotros');
var contactoRouter = require('./routes/contacto');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'Fr4ncoG0mez',
  resave: false,
  saveUninitialized:true
}));

app.get('/login', function (req,res) {
  var conocido = Boolean(req.session.nombre);

  res.render('login', {
    title: 'Sesiones en Expres.js',
    conocido: conocido,
    nombre: req.session.nombre
  });
});

app.post('/ingresar', function (req, res) {
  if(req.body.nombre) {
    req.session.nombre = req.body.nombre
  }
  res.redirect('/login');
});

app.get('/salir', function(req, res) {
  req.session.destroy();
  res.redirect('/login');
});


// ejemplo 2

app.use(function(req,res,next) {

  if(!req.session.vistas) {
    req.session.vistas = {};
  }

  if(!req.session.vistas[req.originalUrl]) {
    req.session.vistas[req.originalUrl] = 1;
  } else {
    req.session.vistas[req.originalUrl]++;
  }
  console.log(req.session.vistas);

  next();
})

app.get('/', function (req,res) {
  res.render('pagina', {
    nombre:'home',
    vistas: req.session.vistas[req.originalUrl]
  });
});

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/tienda', tiendaRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/contacto', contactoRouter);


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
