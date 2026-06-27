// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ULc
// matched 2.1.88 source: src/utils/binaryCheck.ts
// class=modified  jaccard=0.5654  score=0.7348  fileCov=0.7103
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ULc = E(() => {
  ft();
  Ye();
  id();
  yde();
  uo();
  je();
  fn();
  gz();
  ((NLc = R(lt(), 1)), (pvt = R(rt(), 1)));
});
async function jLc(e) {
  if (!e || !e.trim()) return (T("[binaryCheck] Empty command provided, returning false"), !1);
  let t = e.trim();
  if (!oCm.test(t)) return (T(`[binaryCheck] Rejected command with unsafe characters: '${t}'`), !1);
  let n = FLc.get(t);
  if (n !== void 0) return (T(`[binaryCheck] Cache hit for '${t}': ${n}`), n);
  let r = !1;
  if (await Gf(t).catch(() => null)) r = !0;
  return (FLc.set(t, r), T(`[binaryCheck] Binary '${t}' ${r ? "found" : "not found"}`), r);
}
var FLc, oCm;
