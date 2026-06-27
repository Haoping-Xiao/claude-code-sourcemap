// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module urs
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var urs = E(() => {
  Yyr();
});
function iJe(e) {
  if (!e) return {
    code: "en"
  };
  let t = e.toLowerCase().trim();
  if (!t) return {
    code: "en"
  };
  if (drs.has(t)) return {
    code: t
  };
  let n = azc[t];
  if (n) return {
    code: n
  };
  let r = t.split("-")[0];
  if (r && drs.has(r)) return {
    code: r
  };
  return {
    code: "en",
    fellBackFrom: e
  };
}
var azc, drs;