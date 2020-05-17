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
const cors = require("cors");

/**** webpussh config */
const dummyDb = []; //dummy in memory store subscricer 
const webpush = require('web-push');
// VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();
const vapidKeys = {
    publicKey : 'BIUnprvdEEntYAgrOBaI_MAaWK8qtRtgfM_RKnSGglsI1NAZUcycI7yJ6YL2ZEoqmKG9dSQ3AtX0-2mS6j_7epE',
    privateKey : 'OAGhOjAuZ5WqNOm7hdqNeo-SSJqGApaXivfY5ps0Eiw'
}
 
webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
  'mailto:thanhhung.code@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

/**
 * my define
 */
/// config system
var CONFIG     = require('./config.js');
/// https
// var options = {
//     key: fs.readFileSync(path.join(__dirname, 'create-ssl/server.key')),
//     cert: fs.readFileSync(path.join(__dirname, 'create-ssl/server.crt'))
// };
/**
 * setting directeries asset root 
 */
app.use("", express.static(path.join(__dirname, 'public')));
/***
 * nodejs allow origin localhost *
 */
app.use(cors());
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
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/////////////////////////////////////////////////////////////////////////
/**
 * listener server with socket
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
server.listen(CONFIG.SERVER.PORT,  () => {
    console.log(`server listen: ${server.address().address}:${ server.address().port}`);
});
/////////////////////////////////////////////////////////////////////////
/// router for root api/*
var apiRouter        = require('./route/api.js');
app.use('/fetch', apiRouter);

// The new /save-subscription endpoint
app.post("/save-subscription", async (req, res) => {
    const subscription = req.body;
    console.log(subscription, "save subscription")
    /// không cần chờ
    dummyDb.push(subscription) //Method to save the subscription to Database
    
    res.json({ message: "success" });
})
// The new /save-subscription endpoint
app.get("/show-noti", async (req, res) => {
    const payload = JSON.stringify({
        title: 'hùng tt test noti',
        text: 'HEY! xin chào anh hùng cực kì đẹp trai'
    });
    const pushOptions = {
        vapidDetails: {
            subject: 'http://localhost:7000/',
            privateKey: vapidKeys.privateKey,
            publicKey: vapidKeys.publicKey
        }
    };
    console.log(dummyDb, "send noti")
    dummyDb.map(function(subscription){
        webpush.sendNotification(subscription, payload, pushOptions)
        .catch(error => {
            console.error(error.stack);
        });
    })
    res.json({ message: "success" });
});
app.get('/*', (req, res) => { res.sendFile( path.join(__dirname, 'view/index.html')); });


