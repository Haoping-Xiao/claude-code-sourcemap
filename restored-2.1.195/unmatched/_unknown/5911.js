// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oJo
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/coffeescript.js
// class=new  jaccard=0.0127  score=1  fileCov=0.0127
// note: nearest: node_modules/highlight.js/lib/languages/coffeescript.js (0.0127); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var oJo = E(() => {
  wm();
});
function Cnn(e, t, n) {
  if (OC(t)) return i2c(t, e, n), t;
  if (t instanceof Uint8Array) {
    if (!e.startsWith("HS")) throw TypeError(_w(t, ...Z_));
    return Ru.subtle.importKey("raw", t, {
      hash: `SHA-${e.slice(-3)}`,
      name: "HMAC"
    }, false, [n]);
  }
  throw TypeError(_w(t, ...Z_, "Uint8Array"));
}