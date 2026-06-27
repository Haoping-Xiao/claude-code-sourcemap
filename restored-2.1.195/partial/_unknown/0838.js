// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LRs
// matched 2.1.88 source: node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js
// class=partial  jaccard=0.2257  score=1  fileCov=0.2257
// note: low-confidence suggestion: node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var LRs = E(() => {
  oPr();
});
var m2u = e => {
  switch (e) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 30000
      };
    default:
      return {};
  }
};
var DRs = false,
  g2u = e => {
    if (e && !DRs && parseInt(e.substring(1, e.indexOf("."))) < 16) DRs = true;
  };
var PRs;