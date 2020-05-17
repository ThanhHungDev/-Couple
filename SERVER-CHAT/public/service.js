'use strict';
const PRECACHE = 'HERO-CACHE-v1';
const RUNTIME = 'HERO-RUNTIME-v1';
const ASSET_ROOT = 'http://localhost:7000';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
    '404.html',
    '/',
    'js/vendors~main.index.bundle.js',
    'js/index.bundle.js',
    'index.html',
    'fetch/login',
    'style.css',
    'jquery.min.js'
];
/// resource will change data time
const RUNTIME_URLS_IGNORE = [
    'fetch/login'
];
// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(PRECACHE)
            .then(cache => cache.addAll(PRECACHE_URLS))
            .then(self.skipWaiting())
    );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
    console.log("fetch before cache" + event.request.url)
    for (var index_url = 0; index_url < RUNTIME_URLS_IGNORE.length; index_url++) {
        if (event.request.url == ASSET_ROOT + RUNTIME_URLS_IGNORE[index_url]) {
            return;
        }
    }
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return caches.open(RUNTIME).then(cache => {
                    return fetch(event.request).then(response => {
                        // Put a copy of the response in the runtime cache.
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );
    }
});

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