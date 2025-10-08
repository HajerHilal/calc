const cacheName = 'counter-app-cache-v1';
const filesToCache = [
  '/CounterApp/',
  '/CounterApp/index.html',
  '/CounterApp/manifest.json',
  '/CounterApp/icon.png'
];

self.addEventListener('install', event=>{
  console.log('Service Worker: Installed');
  event.waitUntil(
    caches.open(cacheName).then(cache=>cache.addAll(filesToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event=>{
  event.respondWith(
    caches.match(event.request).then(resp=>resp||fetch(event.request))
  );
});
