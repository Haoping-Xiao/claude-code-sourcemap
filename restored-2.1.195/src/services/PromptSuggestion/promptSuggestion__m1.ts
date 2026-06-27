// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yqe
// matched 2.1.88 source: src/services/PromptSuggestion/promptSuggestion.ts
// class=modified (alt of src/services/PromptSuggestion/promptSuggestion.ts)  jaccard=0.0221  score=0.3105  fileCov=0.0232
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Yqe] deps: ft, Y3e, ag, sA, Ld, wr, fn, At, q0, vn, co, zH, dr, Mp, dn, Un, kt, fb, z1, Ypt
MRp = {
  user_intent: zMa,
  stated_intent: zMa,
};
function ZMa(e) {
  let t = pEe.posix.sep + e.split(pEe.sep).join(pEe.posix.sep).replace(/^\/+/, ""),
    n = pEe.basename(e).toLowerCase(),
    r = pEe.extname(e).toLowerCase();
  if ($Rp.has(n)) return true;
  if (JMa.has(r)) return true;
  let o = n.split(".");
  if (o.length > 2) {
    let s = "." + o.slice(-2).join(".");
    if (JMa.has(s)) return true;
  }
  for (let s of ORp) if (t.includes(s)) return true;
  for (let s of NRp) if (s.test(n)) return true;
  return false;
}
async function e$a(e, t) {
  if (ZMa(e)) return true;
  let n = `${t}\x00${e}`,
    r = QMa.get(n);
  if (r !== void 0) return r;
  let o = await Gr(go(), ["check-attr", "linguist-generated", "--", e], {
      cwd: t,
      timeout: 5000,
    }),
    s = false;
  if (o.code === 0) {
    let i = o.stdout.trim().split(": ").pop()?.toLowerCase();
    s = i === "set" || i === "true";
  }
  return (QMa.set(n, s), s);
}
var pEe, $Rp, JMa, ORp, NRp, QMa;
