'use strict';

self.addEventListener('push', function (event) {
    console.log('Received push');

    var title = 'web push HUNGTT';
    var body = 'Welcome! You ll be notified of hungtt';
    var icon = "favicon/apple-icon-57x57.png";

    if (event.data) {
        console.log(event.data)
        var dataWebPush = event.data.json()
        title = dataWebPush.title
        body = dataWebPush.text

    } else {
        console.log('This push event has no data.')
    }

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon
        })
    );
});