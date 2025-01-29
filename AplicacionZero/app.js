const express = require('express');
const path = require('path');
const createError = require('http-errors');
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');

//Rutas:
const indexRouter = require('./routes/index');
const chatRouter = require('./routes/chat');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const restrictedRouter = require('./routes/restricted');

const app = express();
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//Nombre de la aplicación
app.locals.title = "Aplicación Zero";
//Configuración de la sesión donde se guarda la información del usuario
app.use(session({
    secret : "Una frase muy secreta",
    resave : false,
    saveUninitialized : true,
    consentCookie : false
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Middleware que se ejecuta antes de cada ruta
app.use((req, res, next) => {
    const message = req.session.message;
    const error = req.session.error;
    delete req.session.message;
    delete req.session.error;
    res.locals.message = "";
    res.locals.error = "";
    if(message) res.locals.message = `<p>${message}</p>`;
    if(error) res.locals.error = `<p>${error}</p>`;
    res.locals.cookie = req.session.consentCookie || false;
    next();
});

//Base de datos:
const database = require('./database');

//Rutas:
app.use('/', indexRouter);
app.use('/chat', chatRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/restricted', restricted, restrictedRouter);


//Ruta para cerrar sesión
app.use('/logout', (req, res) => {
    database.user.deleteCookies(req.session.user.username);
    req.session.destroy();
    res.redirect('/');
});

//Middleware que comprueba si el usuario está logueado o no
app.use('/restricted', (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}, restrictedRouter);


//Manejo de errores
app.use(function(req, res, next) {
    next(createError(404));
});
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

//Exportamos la aplicación
module.exports = app;


