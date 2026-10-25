// Offline support: cache the app shell, serve it cache-first, refresh in the background.
const VERSION = "case-drill-v41";
const SHELL = ["./", "index.html", "cases.js", "essays.js",
  "data/cw1.js", "data/cw2.js", "data/cw3.js", "data/ge.js", "data/ea.js", "data/ai.js", "data/ip.js", "data/cg.js", "data/bs.js", "data/ns.js", "data/nu.js", "data/ec.js", "data/as.js", "data/it.js", "data/wd.js", "data/warnings.js", "data/flow-ec.js", "data/flow-ec-top.js", "flow2.js", "data/v2/ec-top.js", "data/v2/ec-a.js", "data/v2/ec-b.js", "data/v2/ec-c.js", "data/v2/ec-d.js", "data/v2/ec-e.js", "data/v2/wd.js", "data/v2/as.js", "data/v2/it.js", "data/v2/nu.js", "data/v2/ns.js", "data/v2/bs.js", "data/v2/cg.js", "data/v2/ip.js", "data/v2/ai.js", "data/v2/ge.js", "data/v2/ea.js", "data/v2/cw1.js", "data/v2/cw2.js", "data/v2/cw3.js",
  "data/sum-cw1.js", "data/sum-cw2.js", "data/sum-cw3.js", "data/sum-ge.js", "data/sum-ea.js", "data/sum-ai.js", "data/sum-ip.js", "data/sum-cg.js", "data/sum-bs.js", "data/sum-ns.js", "data/sum-nu.js", "data/sum-ec.js", "data/sum-as.js", "data/sum-it.js", "data/sum-wd.js",
  "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
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
    const net = fetch(req, { cache: "no-cache" }).then(res => { if (res.ok || res.type === "opaque") cache.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
