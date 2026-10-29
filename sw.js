// غيّر رقم الإصدار عند كل تحديث كبير لإجبار المتصفح على تحديث الملفات
const CACHE = "usc-quality-v5";
const SHELL = ["./", "index.html", "css/style.css", "js/app.js", "manifest.json", "assets/logo.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => clients.claim())
  );
});
// الشبكة أولًا، ثم النسخة المحفوظة عند انقطاع الإنترنت
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
