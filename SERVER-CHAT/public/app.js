if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw-new.js?d=123', {
        scope: '/'
    })
    .then(reg => {
        console.log('Registered service worker');
    }).catch(err => {
        console.log('Register service worker failed', err);
    });
}
