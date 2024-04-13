// sw.js

importScripts('./uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);

// Register service worker with correct scope
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ultravioletstatic/sw.js', { scope: '/ultravioletstatic/' })
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}
