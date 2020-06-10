var peerServer,
webId,
CONFIG      = require("../config")

module.exports = function(_peerServer) {
    peerServer = _peerServer
    peerConnecting()
}

function peerConnecting(){

    peerServer.on('connection', (client) => {
        console.log("=====================================================")
        console.log("============peer server==============================")
        console.log(client)
        console.log("============end connect peer server==================")
    })
    peerServer.on('disconnect', client => { 
        console.log("=====================================================")
        console.log("============disconnect peer server===================")
        console.log(client)
        console.log("============end disconnect peer server===============")
    })
    peerServer.on('error', function(error) {
        console.log("I NEVER SEE THIS", error);
    })
    peerServer.on('open', async id => {
        // I pass this to the phone here - works fine and I see the console log on the line below
        console.log("Saved Web ID", id)

        peerServer.on('call', function(call) {
            console.log("Getting call from mobile");
            call.answer(stream);    
        })
    })
    peerServer.on('close', function() {
        console.log('Closing...');
        // update app to show disconnected error
    })
    peerServer.on('disconnected', function() {
        console.log('Disconnection on web...');
        // update app to show disconnected error
    })
}
