const cacheName = 'counter-app-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png'
];

// تثبيت الكاش
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

// استدعاء الملفات من الكاش
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});

