// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LB
// matched 2.1.88 source: node_modules/@smithy/util-middleware/dist-cjs/index.js
// class=partial  jaccard=0.2131  score=1  fileCov=0.2131
// note: low-confidence suggestion: node_modules/@smithy/util-middleware/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var LB = Q(wkr => {
  var TSs = HSs(),
    BLu = e => e[TSs.SMITHY_CONTEXT_KEY] || (e[TSs.SMITHY_CONTEXT_KEY] = {}),
    ULu = e => {
      if (typeof e === "function") return e;
      let t = Promise.resolve(e);
      return () => t;
    };
  wkr.getSmithyContext = BLu;
  wkr.normalizeProvider = ULu;
});