import { build, files, version } from "$service-worker";

const CACHE_NAME = `cache-${version}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(to_cache))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(async (keys) => {
      for (const key of keys) {
        if (key !== CACHE_NAME) await caches.delete(key);
      }
      self.clients.claim();
    }),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);

  if (staticAssets.has(url.pathname)) {
    event.respondWith(caches.match(event.request));
    return;
  }

  event.respondWith(
    caches.open(`offline-${version}`).then(async (cache) => {
      try {
        const response = await fetch(event.request);
        cache.put(event.request, response.clone());
        return response;
      } catch {
        return cache.match(event.request);
      }
    }),
  );
});
