const fs   = require('fs')
const path = require('path')

/// library
var http       = require('http'),
    express    = require('express'),
    bodyParser = require('body-parser'),
    session    = require('express-session'),
    cors       = require('cors'),
    mongoose   = require('mongoose'),
    ejs        = require('ejs'),
    rateLimit  = require("express-rate-limit"),
    helmet     = require("helmet"),
    connection = require("./library/connect-mongo"),
    socket     = require('socket.io')

// Create global app object
var app = express()



/// my define
const CONFIG        = require('./config')
const PORT          = process.env.PORT || parseInt(CONFIG.SERVER.PORT)
const DOMAIN        = CONFIG.SERVER.ASSET()
const IS_PRODUCTION = CONFIG.IS_ENVIROMENT_PRODUCT

//// ============== begin config app ===================
IS_PRODUCTION && app.use(cors())
// Normal express config defaults
app.use(require('sanitize').middleware);
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

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 20, // start blocking after 5 requests
    message: "Too many accounts created from this IP, please try again after an hour"
})
    
app.use(limiter)
app.use(helmet())
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
const io     = socket(server)
server.listen(PORT,  () => {

    console.log(`server run: ${DOMAIN}`)
    require("./library/socket-event")(io)
    // io.sockets.on("connection",function(socket){
    //     console.log("connected");
        
    // });
})
