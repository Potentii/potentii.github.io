// const CACHE_NAME = `temperature-converter-v1`;
import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);


// // Use the install event to pre-cache all initial resources.
// self.addEventListener('install', event => {
// 	event.waitUntil((async () => {
// 		const cache = await caches.open(CACHE_NAME);
// 		cache.addAll([
// 			'/',
// 			'/404.html',
// 			'/artstation-logo.f31b1c20.svg',
// 			'/behance-logo.18f709bb.svg',
// 			'/github-logo.3791379d.svg',
// 			'/index.97d649bc.js',
// 			'/index.cbf2489d.css',
// 			'/index.html',
// 			'/instagram-logo.cedfe61a.svg',
// 			'/linkedin-logo.3dd498a0.svg',
// 			'/my_photo_hero_001.b157c320.png',
// 			'/resets.9496d48b.css',
// 			'/twitter-logo.299965ee.svg'
// 		]);
// 	})());
// });
//
// self.addEventListener('fetch', event => {
// 	event.respondWith((async () => {
// 		const cache = await caches.open(CACHE_NAME);
//
// 		// Get the resource from the cache.
// 		const cachedResponse = await cache.match(event.request);
// 		if (cachedResponse) {
// 			return cachedResponse;
// 		} else {
// 			try {
// 				// If the resource was not in the cache, try the network.
// 				const fetchResponse = await fetch(event.request);
//
// 				// Save the resource in the cache and return it.
// 				cache.put(event.request, fetchResponse.clone());
// 				return fetchResponse;
// 			} catch (e) {
// 				// The network failed.
// 			}
// 		}
// 	})());
// });