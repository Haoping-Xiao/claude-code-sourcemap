// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NYo
// matched 2.1.88 source: src/hooks/useIssueFlagBanner.ts
// class=partial  jaccard=0.198  score=1  fileCov=0.198
// note: low-confidence suggestion: src/hooks/useIssueFlagBanner.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var NYo = E(() => {
  RX();
});
function OCm(e) {
  for (let t of e) {
    if (t.type !== "assistant") continue;
    let n = t.message.content;
    if (!Array.isArray(n)) continue;
    for (let r of n) {
      if (r.type !== "tool_use" || !("name" in r)) continue;
      let o = r.name;
      if (o.startsWith("mcp__")) return !1;
      if (W1.includes(o)) {
        let i = r.input?.command || "";
        if (MCm.some(a => a.test(i))) return !1;
      }
    }
  }
  return !0;
}
function NCm(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type !== "user") continue;
    let r = P$(n);
    if (!r) continue;
    return $Cm.some(o => o.test(r));
  }
  return !1;
}
function FCm(e, t) {
  return !1;
}
function iPc(e, t, n) {
  let r = FCm(e, t);
  O7e.useEffect(() => {}, [r, n]);
}
var O7e,
  MCm,
  $Cm,
  BCm = 3,
  UCm = 1800000;