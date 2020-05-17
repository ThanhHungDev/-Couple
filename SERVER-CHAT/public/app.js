'use strict'

const applicationServerPublicKey = 'BIUnprvdEEntYAgrOBaI_MAaWK8qtRtgfM_RKnSGglsI1NAZUcycI7yJ6YL2ZEoqmKG9dSQ3AtX0-2mS6j_7epE';
var swRegistration;
var isSubscribed = false;
var LOCAL_SUBSCRIPTION = null;

if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported')

    navigator.serviceWorker.register('service.js')
        .then(function (swReg) {
            console.log('Service Worker is registered', swReg)

            swRegistration = swReg
            initialiseUI()
        })
        .catch(function (error) {
            console.error('Service Worker Error', error)
        });
} else {
    console.log('Push messaging is not supported')
}

function initialiseUI() {
    // Set the initial subscription value
    swRegistration.pushManager.getSubscription()
    .then(function (subscription) {

        isSubscribed = !(subscription === null)

        if (isSubscribed) {
            console.log('User IS subscribed.');
            //// save data to local
            LOCAL_SUBSCRIPTION = subscription
        } else {
            console.log('User is NOT subscribed.');
        }
    });
    setTimeout(function(){
        if (isSubscribed) {
            // TODO: Unsubscribe user
        } else {
            subscribeUser();
        }
    }, 5000)
}

function subscribeUser() {
    console.log('begin subscribeUser')

    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey)
    const options = { applicationServerKey, userVisibleOnly: true }
    swRegistration.pushManager.subscribe(options)
    .then(function (subscription) {
        console.log('User is subscribed.')

        updateSubscriptionOnServer(subscription)
    })
    .catch(function (err) {
        console.log('Failed to subscribe the user: ', err)
    })
}

function updateSubscriptionOnServer(subscription) {
    // TODO: Send subscription to application server
    console.log("fetch subscription to sẻver " )

    const SERVER_URL = "http://localhost:7000/save-subscription";
    console.log(subscription, "saveSubscription")
    return fetch(SERVER_URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(subscription)
    })
    .then(function(response){
        console.log("fetched subscription" )
        return response.json();
    })
}

function urlB64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
