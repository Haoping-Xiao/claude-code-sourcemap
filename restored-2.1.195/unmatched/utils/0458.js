// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zb
// matched 2.1.88 source: node_modules/zod/v4/classic/schemas.js
// class=new  jaccard=0.0085  score=0.7107  fileCov=0.0085
// note: nearest: node_modules/zod/v4/classic/schemas.js (0.0085); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function ve(e) {
  let t;
  return () => t ??= e();
}
function Pmu(e) {
  let t = e?.trim();
  return t ? t : void 0;
}
function y0t(e) {
  return e === void 0 ? void 0 : String(e);
}
function Dms(e) {
  if (typeof e === "boolean") return e ? "1" : "0";
  return String(e);
}
function Pms(e) {
  return dt.preprocess(y0t, dt.string().optional().transform(t => {
    if (t === void 0) return;
    let n = parseInt(t.trim(), 10);
    if (Number.isNaN(n)) return;
    if (e?.min !== void 0 && n < e.min) return;
    if (e?.max !== void 0 && n > e.max) return;
    return n;
  }));
}
var Mmu, $mu, Omu, Nmu, Fe;