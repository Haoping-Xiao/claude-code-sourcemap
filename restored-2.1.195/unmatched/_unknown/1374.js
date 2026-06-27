// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sti
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0225  score=1  fileCov=0.0225
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0225); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sti = E(() => {
  sFr();
});
var iFr = e => {
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
var iti = false,
  aFr = e => {
    if (e && !iti && parseInt(e.substring(1, e.indexOf("."))) < 16) iti = true;
  };
var ati;