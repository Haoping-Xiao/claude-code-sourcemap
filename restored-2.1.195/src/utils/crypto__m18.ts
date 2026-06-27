// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module x3o
// matched 2.1.88 source: src/utils/crypto.ts
// class=modified (alt of src/utils/crypto.ts)  jaccard=0.274  score=0.274  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var x3o = E(() => {
  db();
  fn();
  ((HZl = require("crypto")), (I3o = require("path")));
});
function _Kf(e) {
  let t = e.trim();
  return t.startsWith("{") && t.endsWith("}");
}
function wZl(e, t) {
  let n = {
    ...e,
  };
  if (t) {
    let r =
        t.enabled === true && t.failIfUnavailable === void 0
          ? {
              ...t,
              failIfUnavailable: true,
            }
          : t,
      o = n.settings;
    if (o && !_Kf(o))
      throw Error(
        "Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead.",
      );
    let s = {
      sandbox: r,
    };
    if (o)
      try {
        s = {
          ...Ft(o),
          sandbox: r,
        };
      } catch {}
    n.settings = De(s);
  }
  return n;
}
