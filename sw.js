self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/',
          '/index.html',
          '/404.html',
          '/assets/style/main.css',
          '/assets/scripts/main.js',
          '/assets/data/manifest.json'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (!event.request.url.endsWith('.mp4')) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
