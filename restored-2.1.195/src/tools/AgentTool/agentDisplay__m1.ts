// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t4o
// matched 2.1.88 source: src/tools/AgentTool/agentDisplay.ts
// class=modified (alt of src/tools/AgentTool/agentDisplay.ts)  jaccard=0.1395  score=0.8044  fileCov=0.1444
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var t4o = E(() => {
  ft();
  uo();
  LL();
  TJt();
  eYl = R(rt(), 1);
});
function tYl(e, t) {
  let n = new Map();
  for (let s of t) n.set(s.agentType, s);
  let r = new Set(),
    o = [];
  for (let s of e) {
    let i = `${s.agentType}:${s.source}`;
    if (r.has(i)) continue;
    r.add(i);
    let a = n.get(s.agentType),
      l = a && a.source !== s.source ? a.source : void 0;
    o.push({
      ...s,
      overriddenBy: l,
    });
  }
  return o;
}
function nYl(e) {
  let t = e.model || BTo();
  if (!t) return;
  return t === "inherit" ? "inherit" : t;
}
function rYl(e) {
  return Tet(e).toLowerCase();
}
function oYl(e, t) {
  return e.agentType.localeCompare(t.agentType, void 0, {
    sensitivity: "base",
  });
}
var n4o;
