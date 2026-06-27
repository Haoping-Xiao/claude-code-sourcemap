// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oje
// matched 2.1.88 source: src/constants/system.ts
// class=modified  jaccard=0.295  score=0.5041  fileCov=0.4157
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oje]
((Voi = require("async_hooks")), (zoi = new Voi.AsyncLocalStorage()));
function getAttributionHeader(e, t) {
  if (ml(process.env.CLAUDE_CODE_ATTRIBUTION_HEADER)) return "";
  let n = `${
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION
    }.${e}`,
    r = process.env.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
    o = fr(),
    s = (o === "firstParty" && _u()) || o === "vertex" ? " cch=00000;" : "",
    i = wAn(),
    a = i ? ` cc_workload=${i};` : "",
    l = ZIe(t) && !t.isMainSession ? " cc_is_subagent=true;" : "",
    c = `x-anthropic-billing-header: cc_version=${n}; cc_entrypoint=${r};${s}${a}${l}`;
  return (T(`attribution header ${c}`), c);
}
function Koi(e) {
  return e.anthropicAuthEnabled && Boolean(e.oauthScopes?.includes(xB));
}
