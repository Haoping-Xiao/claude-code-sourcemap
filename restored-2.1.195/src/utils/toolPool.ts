// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KKl
// matched 2.1.88 source: src/utils/toolPool.ts
// class=modified  jaccard=0.1622  score=0.2906  fileCov=0.2686
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var KKl = E(() => {
  F8();
  zKl = {
    type: "local-jsx",
    name: "fork",
    description: "Spawn a background agent that inherits the full conversation",
    argumentHint: "<directive>",
    isEnabled: () => !Gv(),
    load: () => Promise.resolve().then(() => (VKl(), qKl)),
  };
});
var ZKl = {};
_t(ZKl, {
  mergeAndFilterTools: () => mergeAndFilterTools,
  isPrActivitySubscriptionTool: () => isPrActivitySubscriptionTool,
  applyCoordinatorToolFilter: () => applyCoordinatorToolFilter,
});
function isPrActivitySubscriptionTool(e) {
  return xVf.some((t) => e.endsWith(t));
}
function YKl(e) {
  return e.mcpInfo?.serverInfoName === kVf;
}
function applyCoordinatorToolFilter(e) {
  let t = e4o?.isCcrCoordinator() ?? false,
    n = Oe.CLAUDE_CODE_BRIEF,
    r = new Set(
      (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    ),
    o = t && e.some((s) => gk(s) && !YKl(s)) && !e.some(C8n);
  if (o && !XKl) ((XKl = true), xe("coordinator_mcp_no_comms_role_fallback"));
  return e.filter(
    (s) =>
      lso.has(s.name) ||
      isPrActivitySubscriptionTool(s.name) ||
      (t && YKl(s)) ||
      C8n(s) ||
      (o && gk(s)) ||
      (n && IVf.has(s.name)) ||
      r.has(s.name),
  );
}
function mergeAndFilterTools(e, t, n) {
  let [r, o] = aFe(oE([...e, ...t], "name"), gk),
    s = (a, l) => a.name.localeCompare(l.name),
    i = [...o.sort(s), ...r.sort(s)];
  if (e4o) {
    if (e4o.isCoordinatorMode()) return applyCoordinatorToolFilter(i);
  }
  return i;
}
var IVf,
  xVf,
  kVf = "claude-code-remote",
  XKl = false,
  e4o;
