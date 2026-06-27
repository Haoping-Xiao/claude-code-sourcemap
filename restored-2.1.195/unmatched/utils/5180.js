// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module x3o
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0026  score=0.4623  fileCov=0.0026
// note: nearest: src/cli/print.ts (0.0026); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module x3o] deps: db, fn
HZl = require("crypto"), I3o = require("path");
function _Kf(e) {
  let t = e.trim();
  return t.startsWith("{") && t.endsWith("}");
}
function wZl(e, t) {
  let n = {
    ...e
  };
  if (t) {
    let r = t.enabled === true && t.failIfUnavailable === void 0 ? {
        ...t,
        failIfUnavailable: true
      } : t,
      o = n.settings;
    if (o && !_Kf(o)) throw Error("Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead.");
    let s = {
      sandbox: r
    };
    if (o) try {
      s = {
        ...Ft(o),
        sandbox: r
      };
    } catch {}
    n.settings = De(s);
  }
  return n;
}