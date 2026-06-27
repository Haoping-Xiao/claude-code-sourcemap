// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sJo
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0141  score=1  fileCov=0.0141
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0141); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sJo = E(() => {
  rB();
  iie();
});
var kDm = async (e, t, n, r) => {
    let o = await Cnn(e, t, "verify");
    Y7e(e, o);
    let s = wnn(e, o.algorithm);
    try {
      return await Ru.subtle.verify(s, o, n, r);
    } catch (i) {
      return false;
    }
  },
  V2c;