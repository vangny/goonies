// self.addEventListener('install', event => {
//   console.log('V1 installing…');

//   // cache a cat SVG
//   event.waitUntil(
//     caches.open('static-v1').then(cache => cache.add('./images/icons/icon-72x72.png'))
//   );
// });

// self.addEventListener('activate', event => {
//   console.log('V1 now ready to handle fetches!');
// });

// self.addEventListener('fetch', event => {
//   const url = new URL(event.request.url);
//   console.log('fetching...');
//   // serve the cat SVG from the cache if the request is
//   // same-origin and the path is '/dog.svg'
//   console.log(url.pathname);
//   if (url.origin == location.origin && url.pathname == '/images/icons/icon-512x512.png') {
//     event.respondWith(caches.match('/images/icons/icon-72x72.png'));
//     console.log('fetched!');
//   }
// });

const urlsToCache = [
  '/',
  '/style.css',
  '/main.js'
]

self.addEventListener('install', event => {
  console.log('installing sw1...');
  event.waitUntil(
    caches.open('app-offline')
      .then(cache => cache.addAll(urlsToCache))
  );
})

self.addEventListener('fetch', event => {
  console.log(event.request.url);
  event.respondWith(
    fetch(event.request).catch( () => {
      return caches.match(event.request);
    })
  );
});