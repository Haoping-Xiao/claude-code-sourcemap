// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EJl
// matched 2.1.88 source: src/hooks/useTurnDiffs.ts
// class=partial  jaccard=0.1116  score=0.3624  fileCov=0.1389
// note: low-confidence suggestion: src/hooks/useTurnDiffs.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var EJl = E(() => {
  c6f = {
    type: "local",
    name: "update",
    description: "Switch to the latest version (conversation continues)",
    supportsNonInteractive: false,
    isEnabled: () => false,
    isHidden: true,
    fleetHostCall: async ({
      relaunch: e
    }) => e(),
    load: () => Promise.resolve().then(() => (N4o(), SJl))
  }, B4o = c6f;
});
function u6f(e) {
  let t = air.extname(e) === "" ? `${e}.txt` : e;
  return ds(t);
}
async function lir(e, t) {
  let n = u6f(e);
  return await iir.mkdir(air.dirname(n), {
    recursive: true
  }), await iir.writeFile(n, t, {
    encoding: "utf-8",
    flush: true
  }), n;
}
var iir, air;