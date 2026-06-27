// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $3s
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0225  score=1  fileCov=0.0225
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0225); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $3s = E(() => {
  WOr();
});
var qOr = e => {
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
var O3s = false,
  VOr = e => {
    if (e && !O3s && parseInt(e.substring(1, e.indexOf("."))) < 16) O3s = true;
  };
var N3s;