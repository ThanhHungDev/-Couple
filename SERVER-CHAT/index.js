/**
 * library
 */
var express = require('express');
var app     = express();
var ejs     = require('ejs');
var session = require('express-session');
var flash   = require('connect-flash');
var fs      = require('fs');
var redis   = require('redis');
const path = require('path');
/**
 * my define
 */
/// config system
var CONFIG     = require('./config.js');
/// https
var options = {
    key: fs.readFileSync('/Users/hero/Code/SERVER-CHAT/create-ssl/server.key'),
    cert: fs.readFileSync('/Users/hero/Code/SERVER-CHAT/create-ssl/server.crt')
};
/**
 * setting directeries asset root 
 */
app.use("", express.static(path.join(__dirname, 'public')));
/***
 * nodejs allow origin localhost *
 */
app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: 'somesecret', 
    cookie: { maxAge: 60000 }}));
app.use(flash());
/***
 * nodejs set view engine *
 */
app.set('view engine', 'ejs');
app.set('views', './views')
/////////////////////////////////////////////////////////////////////////
// for parsing application/x-www-form-urlencoded/////////////////////////
/////////////////////////////////////////////////////////////////////////
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
/////////////////////////////////////////////////////////////////////////
/**
 * listener server with socket
 */
var server = require('https').createServer(options, app);
var io = require('socket.io')(server);
server.listen(CONFIG.SERVER.PORT,  () => {
    console.log(`server listen: ${server.address().address}:${ server.address().port}`);
});
/////////////////////////////////////////////////////////////////////////
/// router for root api/*
var apiRouter        = require('./route/api.js');
app.use('/fetch', apiRouter);
app.get('/*', (req, res) => { res.sendFile( path.join(__dirname, 'view/index.html')); });