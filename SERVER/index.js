const fs   = require('fs')
const path = require('path')

/// library
var http       = require('http'),
    express    = require('express'),
    bodyParser = require('body-parser'),
    session    = require('express-session'),
    cors       = require('cors'),
    mongoose   = require('mongoose'),
    ejs        = require('ejs')

// Create global app object
var app = express()



/// my define
const CONFIG     = require('./config')
const PORT   = process.env.PORT || parseInt(CONFIG.SERVER.PORT)
const DOMAIN = CONFIG.SERVER.ASSET()
const IS_PRODUCTION = CONFIG.IS_ENVIROMENT_PRODUCT

//// ============== begin config app ===================
IS_PRODUCTION && app.use(cors())
// Normal express config defaults
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use(session({
            secret: 'hungtt',
            cookie: {
                maxAge: 60000
            },
            resave: false,
            saveUninitialized: false
        }));
//// ============== end config app ===================

/// setting directeries asset root 
app.use(cors());
app.use("", express.static(path.join(__dirname, 'public')))
/// view engine
app.set('view engine', 'ejs')
app.set('views', './view')
/// for parsing application/x-www-form-urlencoded/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/// listener server
const server = http.createServer(app)
server.listen(PORT,  () => {

    console.log(`server run: ${DOMAIN}`)
    require("./library/connect-mongo")
});


//// handle error 
if (!IS_PRODUCTION) {
    app.use(function (err, req, res, next) {
        console.log(err.stack);
        res.status(err.status || 500);
        res.json({
            'errors': {
                message: err.message,
                error: err
            }
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.json({
        'errors': {
            message: err.message,
            error: {}
        }
    });
});