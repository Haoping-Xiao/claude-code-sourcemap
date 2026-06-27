// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cMc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cMc = E(() => {
  ft();
  kt();
  fb();
});
function xIm() {
  let e = process.env.CLAUDE_BG_SESSION_PERMISSION_RULES;
  if (!e || process.env.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  try {
    let t = JSON.parse(e);
    return Array.isArray(t.allow) && Array.isArray(t.deny) ? {
      allow: t.allow,
      deny: t.deny
    } : void 0;
  } catch {
    return;
  }
}
function kIm() {
  if (process.env.CLAUDE_BG_MEMORY_TOGGLED_OFF === "1" && process.env.CLAUDE_CODE_SESSION_KIND === "bg") ECt(true);
}
async function dMc(e) {
  kIm();
  let t = await qqo({
      allowedToolsCli: e.allowedTools,
      disallowedToolsCli: e.disallowedTools,
      baseToolsCli: e.baseTools,
      permissionMode: e.permissionMode,
      allowDangerouslySkipPermissions: e.allowDangerouslySkipPermissions,
      addDirs: e.addDirs,
      bgSessionPermissionRules: xIm()
    }),
    n = t.toolPermissionContext,
    {
      warnings: r,
      dangerousPermissions: o,
      overlyBroadBashPermissions: s
    } = t;
  if (e.permissionMode === "auto") n = rV(n);
  return {
    toolPermissionContext: n,
    warnings: r,
    dangerousPermissions: o,
    overlyBroadBashPermissions: s
  };
}