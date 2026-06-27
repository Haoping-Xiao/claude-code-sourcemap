// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E3t
// matched 2.1.88 source: src/utils/sanitization.ts
// class=modified  jaccard=0.6069  score=1  fileCov=0.6069
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var E3t = E(() => {
  Vb();
  vn();
  Ire();
  jdt();
});
function cvp(e) {
  let t = e.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
  return (
    (t = t
      .replace(/[\u200B-\u200F]/g, "")
      .replace(/[\u202A-\u202E]/g, "")
      .replace(/[\u2066-\u2069]/g, "")
      .replace(/[\uFEFF]/g, "")
      .replace(/[\uE000-\uF8FF]/g, "")),
    t
  );
}
function lDe(e) {
  let t = cis(e);
  for (let n = 0; n < 10; n++) {
    let r = cvp(t);
    if (r === t) return t;
    t = r;
  }
  return t;
}
function Ddo(e) {
  let t = e,
    n = "",
    r = 0,
    o = 10;
  while (t !== n && r < o) ((n = t), (t = t.normalize("NFKC")), (t = lDe(t)), r++);
  if (r >= o)
    throw Error(
      `Unicode sanitization reached maximum iterations (${o}) for input: ${e.slice(0, 100)}`,
    );
  return t;
}
function B4(e) {
  if (typeof e === "string") return Ddo(e);
  if (Array.isArray(e)) return e.map(B4);
  if (e !== null && typeof e === "object") {
    let t = {};
    for (let [n, r] of Object.entries(e)) t[B4(n)] = B4(r);
    return t;
  }
  return e;
}
