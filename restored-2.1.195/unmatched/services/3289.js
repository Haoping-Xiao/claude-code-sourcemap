// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module h0a
// matched 2.1.88 source: node_modules/@ant/computer-use-mcp/src/deniedApps.ts
// class=new  jaccard=0.0117  score=1  fileCov=0.0117
// note: nearest: node_modules/@ant/computer-use-mcp/src/deniedApps.ts (0.0117); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var h0a = E(() => {
  Fpo = {
    pxPerToken: 28,
    maxTargetPx: 1568,
    maxTargetTokens: 1568
  };
});
function GCp(e) {
  if (e === "browser" || e === "trading") return "read";
  if (e === "terminal") return "click";
  return "full";
}
function $Fn(e, t) {
  if (e && zCp.has(e)) return true;
  let n = t.toLowerCase();
  for (let r of KCp) if (n.includes(r)) return true;
  return false;
}
function YCp(e) {
  if (WCp.has(e)) return "browser";
  if (qCp.has(e)) return "terminal";
  if (VCp.has(e)) return "trading";
  return null;
}
function ZCp(e) {
  let t = e.toLowerCase();
  for (let n of QCp) if (t.includes(n)) return "trading";
  for (let n of XCp) if (t.includes(n)) return "browser";
  for (let n of JCp) if (t.includes(n)) return "terminal";
  return null;
}
function npt(e, t) {
  if (e) {
    let n = YCp(e);
    if (n) return n;
  }
  return ZCp(t);
}
function jpo(e, t) {
  return GCp(npt(e, t));
}
var WCp, qCp, VCp, zCp, KCp, XCp, JCp, QCp;