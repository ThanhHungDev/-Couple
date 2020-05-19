const webpush = require('web-push');
// const vapidKeys = webpush.generateVAPIDKeys();
const vapidKeys = {
    publicKey : 'BIUnprvdEEntYAgrOBaI_MAaWK8qtRtgfM_RKnSGglsI1NAZUcycI7yJ6YL2ZEoqmKG9dSQ3AtX0-2mS6j_7epE',
    privateKey : 'OAGhOjAuZ5WqNOm7hdqNeo-SSJqGApaXivfY5ps0Eiw'
}

module.exports.getInstanceWebPush = function(){

    webpush.setVapidDetails(
        'mailto:thanhhung.code@gmail.com',
        vapidKeys.publicKey,
        vapidKeys.privateKey
    );
    return webpush;
}