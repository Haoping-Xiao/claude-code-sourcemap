// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lJo
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0093  score=1  fileCov=0.0093
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0093); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lJo = E(() => {
  ogr();
});
var DDm = async (e, t, n) => {
    let r = await Cnn(e, t, "sign");
    Y7e(e, r);
    let o = await Ru.subtle.sign(wnn(e, r.algorithm), r, n);
    return new Uint8Array(o);
  },
  tjc;