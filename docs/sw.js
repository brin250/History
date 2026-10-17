// Offline support: cache the app shell, serve it cache-first, refresh in the background.
const VERSION = "case-drill-v8";
const SHELL = ["./", "index.html", "cases.js", "essays.js",
  "data/cw1.js", "data/cw2.js", "data/cw3.js", "data/ge.js", "data/ea.js", "data/ai.js", "data/ip.js", "data/cg.js", "data/bs.js", "data/ns.js", "data/nu.js", "data/ec.js", "data/as.js", "data/it.js", "data/wd.js", "data/warnings.js",
  "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (url.origin !== location.origin && !isFont) return;
  e.respondWith(caches.open(VERSION).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: true });
    const net = fetch(req).then(res => { if (res.ok || res.type === "opaque") cache.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
