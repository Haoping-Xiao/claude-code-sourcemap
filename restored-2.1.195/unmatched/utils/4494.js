// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yfe
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yfe = E(() => {
  tne();
  QKt = R(rt(), 1), sz = uL({
    value: "",
    active: false,
    launchWarning: null
  });
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