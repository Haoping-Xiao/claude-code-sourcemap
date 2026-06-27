// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NYo
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0035  score=1  fileCov=0.0035
// note: nearest: src/screens/REPL.tsx (0.0035); dir inferred from dep-graph -> utils; 0 renamed
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
      if (o.startsWith("mcp__")) return false;
      if (W1.includes(o)) {
        let i = r.input?.command || "";
        if (MCm.some(a => a.test(i))) return false;
      }
    }
  }
  return true;
}
function NCm(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type !== "user") continue;
    let r = P$(n);
    if (!r) continue;
    return $Cm.some(o => o.test(r));
  }
  return false;
}
function FCm(e, t) {
  return false;
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