// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JOt
// matched 2.1.88 source: src/utils/managedEnvConstants.ts
// class=modified (alt of src/utils/managedEnvConstants.ts)  jaccard=0.056  score=0.2626  fileCov=0.0665
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: isPewterOwlTool, isPewterOwlHeader, isPewterOwlBrief
// [unwrapped __esm module JOt] deps: Qi, Ls
((Ykd = [
  {
    modelEnvVar: "ANTHROPIC_DEFAULT_FABLE_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES",
  },
  {
    modelEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES",
  },
  {
    modelEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES",
  },
  {
    modelEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL",
    capabilitiesEnvVar: "ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES",
  },
  {
    modelEnvVar: "ANTHROPIC_CUSTOM_MODEL_OPTION",
    capabilitiesEnvVar: "ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES",
  },
]),
  (W9 = Cn(
    (e, t) => {
      if (td()) return;
      let n = e.toLowerCase();
      for (let r of Ykd) {
        let o = process.env[r.modelEnvVar],
          s = process.env[r.capabilitiesEnvVar];
        if (!o || s === void 0) continue;
        if (n !== o.toLowerCase()) continue;
        return s
          .toLowerCase()
          .split(",")
          .map((i) => i.trim())
          .includes(t);
      }
      return;
    },
    (e, t) => `${e.toLowerCase()}:${t}`,
  )));
function Xkd() {
  let e = x0()?.pewter_owl_model;
  if (typeof e === "string" && e !== "") return e;
  return at("tengu_pewter_owl_model", "");
}
function k9r(e) {
  if (Oe.CLAUDE_CODE_PEWTER_OWL !== void 0) return Oe.CLAUDE_CODE_PEWTER_OWL;
  if (Ir()) return false;
  let t = Xkd();
  if (t !== "" && !mo(As()).includes(t)) return false;
  return at(`tengu_${e}`, false) || x0()?.[e] === true;
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
