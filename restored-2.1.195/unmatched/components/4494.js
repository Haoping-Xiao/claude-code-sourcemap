// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yfe
// matched 2.1.88 source: node_modules/jwa/index.js
// class=new  jaccard=0.0271  score=0.1541  fileCov=0.0318
// note: nearest: node_modules/jwa/index.js (0.0271); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yfe] deps: components/Settings/Config.tsx
QKt = R(rt(), 1), sz = uL({
  value: "",
  active: false,
  launchWarning: null
});
async function SSt(e) {
  try {
    let t = Ft(await nxl.readFile(e, "utf8"));
    if (t === null || typeof t !== "object") return;
    let n = {};
    if ("rvAuth" in t && typeof t.rvAuth === "string") n.rvAuth = t.rvAuth;
    if ("ptyAuth" in t && typeof t.ptyAuth === "string") n.ptyAuth = t.ptyAuth;
    if ("claimAuth" in t && typeof t.claimAuth === "string") n.claimAuth = t.claimAuth;
    return n;
  } catch {
    return;
  }
}
function Joe(e, t) {
  if (typeof e !== "string" || !t || e.length === 0) return false;
  let n = Buffer.from(e),
    r = Buffer.from(t);
  if (n.length !== r.length) return false;
  return txl.timingSafeEqual(n, r);
}
var txl, nxl;