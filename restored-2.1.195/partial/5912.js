// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sJo
// matched 2.1.88 source: src/skills/bundled/verify.ts
// class=partial  jaccard=0.1537  score=1  fileCov=0.1537
// note: low-confidence suggestion: src/skills/bundled/verify.ts; 0 renamed
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
      return !1;
    }
  },
  V2c;