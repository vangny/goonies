const urlsToCache = [
  '/',
  '/style.css',
  '/main.js',
  '/api/weathercurrent',
  '/api/trails',
  '/api/weatherfive',
  '/api/park/alerts',
  '/api/park/info',
]

self.addEventListener('install', event => {
  console.log('installing Goonies...');
  event.waitUntil(
    caches.open('app-offline')
      .then(cache => cache.addAll(urlsToCache))
  );

  // console.log('installing current-weather');
  // event.waitUntil(
  //   caches.open('cuirrent-weather')
  //     .then(cache => fetch('/api/weathercurrent')
  //     .then(response => cache.put('/api/weathercurrent', response)))
  // );
})

self.addEventListener('activate', event => {
  console.log('ready to listen boss');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return fetch(event.request) || response;
    })
  );
});