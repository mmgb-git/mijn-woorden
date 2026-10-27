const CACHE = 'mijn-woorden-v5-2';
const ASSETS = ['./','index.html','styles.css?v=5.2','app.js?v=5.2','vocabulary.js?v=5.2','manifest.webmanifest','icons/icon.svg','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => event.respondWith(fetch(event.request).then(response => {
  const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); return response;
}).catch(() => caches.match(event.request))));
