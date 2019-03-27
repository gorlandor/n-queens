importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');
workbox.setConfig({
    debug: false,
});
// Revisioned files added via a glob
workbox.precaching.precache([
    '/n-queens/',
    'index.html',
    'manifest.json',
    'dist/styles.css',
    'dist/bundle.js',
    'images/icons/icon-72x72.png',
    'images/icons/icon-96x96.png',
    'images/icons/icon-128x128.png',
    'images/icons/icon-144x144.png',
    'images/icons/icon-152x152.png',
    'images/icons/icon-192x192.png',
    'images/icons/icon-384x384.png',
    'images/icons/icon-512x512.png',
]);

workbox.routing.registerRoute(new RegExp('/n-queens/'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('index.html'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('dist/styles.css'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('dist/bundle.js'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('static/manifest.json'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('images/icons/.*.png'), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(new RegExp('dist/workbox-sw.js'), new workbox.strategies.StaleWhileRevalidate());
