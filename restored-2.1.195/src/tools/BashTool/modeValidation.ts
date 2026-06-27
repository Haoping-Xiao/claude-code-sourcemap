// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xCl
// matched 2.1.88 source: src/tools/BashTool/modeValidation.ts
// class=modified  jaccard=0.4982  score=1  fileCov=0.4982
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function WHf(e) {
  return GHf.includes(e);
}
function validateCommandForMode(e, t) {
  let n = A5(e),
    [r] = n.split(/\s+/);
  if (!r)
    return {
      behavior: "passthrough",
      message: "Base command not found",
    };
  if (t.mode === "acceptEdits" && WHf(r))
    return {
      behavior: "allow",
      updatedInput: {
        command: e,
      },
      decisionReason: {
        type: "mode",
        mode: "acceptEdits",
      },
    };
  return {
    behavior: "passthrough",
    message: `No mode-specific handling for '${r}' in ${t.mode} mode`,
  };
}
function checkPermissionMode(e, t) {
  if (t.mode === "bypassPermissions")
    return {
      behavior: "passthrough",
      message: "Bypass mode is handled in main permission flow",
    };
  if (t.mode === "dontAsk")
    return {
      behavior: "passthrough",
      message: "DontAsk mode is handled in main permission flow",
    };
  let n = By(e.command),
    r = false;
  for (let o of n) {
    let s = validateCommandForMode(o, t);
    if (s.behavior === "ask" || s.behavior === "deny") return s;
    if (s.behavior === "passthrough")
      return {
        behavior: "passthrough",
        message: "No mode-specific validation required",
      };
    r = true;
  }
  if (r)
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "mode",
        mode: t.mode,
      },
    };
  return {
    behavior: "passthrough",
    message: "No mode-specific validation required",
  };
}
var GHf;
