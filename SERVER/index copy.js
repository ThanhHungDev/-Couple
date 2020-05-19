/**
 * library
 */
var express = require('express');
var app     = express();
var ejs     = require('ejs');
var fs      = require('fs');
const path = require('path');
var bodyParser = require('body-parser');

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
/**
 * setting directeries asset root 
 */
app.use("", express.static(path.join(__dirname, 'public')));
/***
 * nodejs set view engine *
 */
app.set('view engine', 'ejs');
app.set('views', './view')
/////////////////////////////////////////////////////////////////////////
// for parsing application/x-www-form-urlencoded/////////////////////////
/////////////////////////////////////////////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/////////////////////////////////////////////////////////////////////////
/**
 * listener server with socket
 */
var port = process.env.PORT || parseInt(CONFIG.SERVER.PORT)
const DOMAIN = CONFIG.SERVER.ASSET()
var server = require('http').createServer( app );
server.listen(port,  () => {
    console.log(`server listen ${DOMAIN}`);
});
/////////////////////////////////////////////////////////////////////////

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
            subject: DOMAIN,
            privateKey: vapidKeys.privateKey,
            publicKey: vapidKeys.publicKey
        }
    };
    console.log(dummyDb, "send noti")
    dummyDb.map(function(subscription){
        webpush.sendNotification(subscription, payload, pushOptions)
        .catch(error => {
            console.log( "have error for : ", subscription);
        });
    })
    res.json({ message: "success" });
});
app.get('/', (req, res) => { 
    console.log("vào root")
    return res.sendFile( path.join(__dirname, 'view/index.html')); 
});


