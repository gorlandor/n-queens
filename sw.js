importScripts('/dist/sw-toolbox.js');
toolbox.options.debug = false;

toolbox.precache([
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
    'images/icons/icon-512x512.png'
]);
toolbox.router.get('index.html', toolbox.fastest);
toolbox.router.get('dist/styles.css', toolbox.fastest);
toolbox.router.get('dist/bundle.js', toolbox.fastest);
toolbox.router.get('images/icons/icon-72x72.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-96x96.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-128x128.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-144x144.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-152x152.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-192x192.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-384x384.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-152x152.png', toolbox.fastest);
