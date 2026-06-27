// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UFt
// matched 2.1.88 source: node_modules/node-forge/lib/util.js
// class=new  jaccard=0.0208  score=0.4184  fileCov=0.0214
// note: nearest: node_modules/node-forge/lib/util.js (0.0208); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UFt = E(() => {
  Vlt();
});
function FFt() {
  if (globalThis[ino] == null) {
    let e = new globalThis.TextEncoder(),
      t = new globalThis.TextDecoder(),
      n;
    globalThis[ino] = {
      encodeUtf8(r) {
        return e.encode(r);
      },
      decodeUtf8(r, o) {
        if (o) {
          if (n === void 0) n = new globalThis.TextDecoder("utf-8", {
            fatal: true
          });
          return n.decode(r);
        }
        return t.decode(r);
      },
      checkUtf8(r) {
        try {
          return encodeURIComponent(r), true;
        } catch (o) {
          return false;
        }
      }
    };
  }
  return globalThis[ino];
}
var ino;