// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hde
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=modified (alt of src/entrypoints/sdk/coreSchemas.ts)  jaccard=0.0103  score=0.1089  fileCov=0.0112
// note: deminified; 6 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: sinksFor, runClassifierSummaryForBlocked, isPostTurnSummaryVisibleInCli, engineFor, detectSurfaces, classifiedToPostTurnSummary
// [unwrapped __esm module Hde] deps: cEe, ft, tgo, tne
((pjn = R(rt(), 1)),
  (VGt = Object.freeze({
    mode: "responding",
    overrideMessage: null,
    overrideColor: null,
    overrideShimmerColor: null,
    isCompacting: false,
    compactingHintText: null,
    compactingStartTime: null,
    turnEffort: null,
    retryStatus: null,
    thinkingStartedAt: null,
    defaultVerb: "",
  })),
  (uEe = uL({})));
var rgo = {};
function detectSurfaces() {
  if (Js()) return new Set(["bg"]);
  let e = new Set();
  if (NAn()) e.add("watched");
  if (LO("fanout")) e.add("ccr");
  else if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") e.add("ccr");
  else if (ut(process.env.CLAUDE_CODE_REMOTE)) {
    if (ARp.has(process.env.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE)
      e.add("ccr");
  }
  if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || d0()) e.add("bridge");
  if (process.env.CLAUDE_CODE_ENTRYPOINT === "claude-desktop") e.add("desktop");
  if (isPostTurnSummaryVisibleInCli()) e.add("cli");
  return e;
}
function sinksFor(e) {
  let t = new Set(),
    n = HRp(at("tengu_classifier_disabled_surfaces", ""));
  for (let r of e) {
    if (n.has(r)) continue;
    for (let o of BMa[r]) t.add(o);
  }
  if (e.has("bg")) t.delete("summary");
  if (at("tengu_classifier_summary_kill", false)) t.delete("summary");
  return t;
}
function HRp(e) {
  let t = new Set();
  for (let n of e.split(",")) {
    let r = n.trim();
    if (!r) continue;
    if (r in BMa) t.add(r);
    else if (!NMa)
      ((NMa = true),
        T(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${r}' ignored`));
  }
  return t;
}
function engineFor(e) {
  if (e.size === 0) return null;
  let t = e.has("state")
    ? "llm"
    : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0
      ? ut(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY)
        ? "llm"
        : "heuristic"
      : TRp();
  return t === "llm" && at("tengu_cobalt_wren", false) ? "heuristic" : t;
}
function TRp() {
  if (at("tengu_classifier_summary_llm_emit", false)) return "llm";
  if (at("tengu_classifier_summary_heuristic_emit", false)) return "heuristic";
  return null;
}
function isPostTurnSummaryVisibleInCli() {
  return false;
}
function classifiedToPostTurnSummary(e) {
  return {
    status_category: e.state === "blocked" ? "blocked" : "review_ready",
    status_detail: e.detail,
    needs_action: e.state === "blocked" ? (e.needs ?? "") : "",
  };
}
function runClassifierSummaryForBlocked(e, t) {
  let n = sinksFor(detectSurfaces());
  if (!n.has("summary") || engineFor(n) === null) return;
  let r = e.tool_name.startsWith("dialog:")
    ? {
        status_category: "blocked",
        status_detail: "Waiting on a user dialog",
        needs_action: e.action_description,
      }
    : {
        status_category: "blocked",
        status_detail: `Waiting on permission: ${e.tool_name}`,
        needs_action: `Approve or deny ${e.tool_name}`,
      };
  t?.notifyMetadataChanged({
    post_turn_summary: r,
  });
}
var ARp,
  BMa,
  NMa = false;
