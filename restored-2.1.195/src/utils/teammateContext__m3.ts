// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bSa
// matched 2.1.88 source: src/utils/teammateContext.ts
// class=unchanged (alt of src/utils/teammateContext.ts)  jaccard=1  score=1  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var bSa = E(() => {
  ABn();
  HBn();
  yco();
  _co = require("async_hooks");
});
function I4t(e, t) {
  return Xut((n) => {
    let r = n.get();
    if (!r || r.dependencies.length !== t.length || r.dependencies.some((o, s) => o !== t[s])) {
      let o = e();
      return (
        n.set({
          value: o,
          dependencies: t,
        }),
        o
      );
    }
    return r.value;
  });
}
