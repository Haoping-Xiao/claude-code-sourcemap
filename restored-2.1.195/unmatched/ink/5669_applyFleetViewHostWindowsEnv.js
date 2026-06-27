// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jpr
// matched 2.1.88 source: src/tools/PowerShellTool/readOnlyValidation.ts
// class=new  jaccard=0.0034  score=0.1607  fileCov=0.0035
// note: nearest: src/tools/PowerShellTool/readOnlyValidation.ts (0.0034); dir inferred from dep-graph -> ink; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jpr] deps: HI, ZS, q7, EW, Tne, oat
mkc = R(lt(), 1), ytn = R(rt(), 1), gkc = R(se(), 1);
var _tn = {};
_t(_tn, {
  applyFleetViewHostWindowsEnv: () => applyFleetViewHostWindowsEnv,
  FleetViewScreen: () => FleetViewScreen
});
function FleetViewScreen(e) {
  let t = hkc.c(3),
    {
      children: n
    } = e;
  if (ZNt()) {
    let r;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) r = Tit(), t[0] = r;else r = t[0];
    let o;
    if (t[1] !== n) o = ykc.jsx(evt, {
      mouseTracking: r,
      children: n
    }), t[1] = n, t[2] = o;else o = t[2];
    return o;
  }
  return n;
}
function applyFleetViewHostWindowsEnv() {
  if (Vt() === "windows" || Oe.WT_SESSION) process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1";
}
var hkc, ykc;