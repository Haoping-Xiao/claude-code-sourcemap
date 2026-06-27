// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cYt
// matched 2.1.88 source: src/services/api/logging.ts
// class=modified (alt of src/services/api/logging.ts)  jaccard=0.0353  score=0.5324  fileCov=0.0364
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module cYt] deps: PR, ft, CZe, oo, je, lT, vn, Sbe, Ao, Ls, zH, Jt, WSe, aS, cMo, m5, og, kt, Du, H5e, U1, g$e, tP, gSe
fwf = /\b(want me to|should i|shall i|i can|would you like me to)\b[^.!?\n]{0,100}`?\/schedule\b/i;
((gwf = {
  litellm: {
    prefixes: ["x-litellm-"],
  },
  helicone: {
    prefixes: ["helicone-"],
  },
  portkey: {
    prefixes: ["x-portkey-"],
  },
  "cloudflare-ai-gateway": {
    prefixes: ["cf-aig-"],
  },
  kong: {
    prefixes: ["x-kong-"],
  },
  braintrust: {
    prefixes: ["x-bt-"],
  },
}),
  (hwf = {
    databricks: [".cloud.databricks.com", ".azuredatabricks.net", ".gcp.databricks.com"],
  }));
_wf = new Set(["cyber", "bio", "frontier_llm", "reasoning_extraction"]);
function oZn() {
  return {
    consecutiveDenials: 0,
    totalDenials: 0,
  };
}
function mkl(e) {
  return {
    ...e,
    consecutiveDenials: e.consecutiveDenials + 1,
    totalDenials: e.totalDenials + 1,
  };
}
function uYt(e) {
  if (e.consecutiveDenials === 0) return e;
  return {
    ...e,
    consecutiveDenials: 0,
  };
}
function gkl(e) {
  return e.consecutiveDenials >= rZn.maxConsecutive || e.totalDenials >= rZn.maxTotal;
}
var rZn;
