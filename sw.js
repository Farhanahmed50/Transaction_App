const cacheName = 'transaction_app';
const staticAssets = [
    './',
    './index.html',
    './index.js',
    './app.js',
    './style.css',
    // './manifest.webmanifest',
    './Assets/Icon/chart-line-solid.svg',
    './Assets/Icon/edit-regular.svg',
    './Assets/Icon/home-solid.svg',
    './Assets/Icon/plus-solid.svg',
    './Pages/add.css',
    './Pages/add.html',
    './Pages/add.js',
    './Pages/edit.css',
    './Pages/edit.html',
    './Pages/edit.js',
    './Pages/signup.css',
    './Pages/signup.html',
    './Pages/signup.js',
    './Pages/transactions.css',
    './Pages/transactions.html',
    './Pages/transactions.js'
];

self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e => {
    self.clients.claim();
});

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkAndCache(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}