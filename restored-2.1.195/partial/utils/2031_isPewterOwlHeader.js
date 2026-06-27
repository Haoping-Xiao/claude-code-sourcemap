// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JOt
// matched 2.1.88 source: src/utils/managedEnvConstants.ts
// class=partial  jaccard=0.0621  score=0.423  fileCov=0.0679
// note: low-confidence suggestion: src/utils/managedEnvConstants.ts; dir inferred from dep-graph -> utils; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var JOt = E(() => {
  Qi();
  Ls();
  Ykd = [{
    modelEnvVar: "ANTHROPIC_DEFAULT_FABLE_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES"
  }, {
    modelEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES"
  }, {
    modelEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES"
  }, {
    modelEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES"
  }, {
    modelEnvVar: "ANTHROPIC_CUSTOM_MODEL_OPTION",
    capabilitiesEnvVar: "ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES"
  }], W9 = Cn((e, t) => {
    if (td()) return;
    let n = e.toLowerCase();
    for (let r of Ykd) {
      let o = process.env[r.modelEnvVar],
        s = process.env[r.capabilitiesEnvVar];
      if (!o || s === void 0) continue;
      if (n !== o.toLowerCase()) continue;
      return s.toLowerCase().split(",").map(i => i.trim()).includes(t);
    }
    return;
  }, (e, t) => `${e.toLowerCase()}:${t}`);
});
var xvi = {};
_t(xvi, {
  isPewterOwlTool: () => isPewterOwlTool,
  isPewterOwlHeader: () => isPewterOwlHeader,
  isPewterOwlBrief: () => isPewterOwlBrief
});
function Xkd() {
  let e = x0()?.pewter_owl_model;
  if (typeof e === "string" && e !== "") return e;
  return at("tengu_pewter_owl_model", "");
}
function k9r(e) {
  if (Oe.CLAUDE_CODE_PEWTER_OWL !== void 0) return Oe.CLAUDE_CODE_PEWTER_OWL;
  if (Ir()) return !1;
  let t = Xkd();
  if (t !== "" && !mo(As()).includes(t)) return !1;
  return at(`tengu_${e}`, !1) || x0()?.[e] === !0;
}
function isPewterOwlHeader() {
  return k9r("pewter_owl_header");
}
function isPewterOwlTool() {
  if (Oe.CLAUDE_CODE_PEWTER_OWL_TOOL !== void 0) return Oe.CLAUDE_CODE_PEWTER_OWL_TOOL;
  return k9r("pewter_owl_tool");
}
function isPewterOwlBrief() {
  return k9r("pewter_owl_brief");
}