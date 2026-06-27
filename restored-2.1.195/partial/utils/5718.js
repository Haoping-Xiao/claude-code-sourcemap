// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bLc
// matched 2.1.88 source: src/hooks/usePromptsFromClaudeInChrome.tsx
// class=partial  jaccard=0.1281  score=0.4794  fileCov=0.1488
// note: low-confidence suggestion: src/hooks/usePromptsFromClaudeInChrome.tsx; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bLc] deps: services/analytics/index.ts, tools/SendMessageTool/SendMessageTool.ts, utils/claudeInChrome/common.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, utils/debug.ts, utils/errors.ts, utils/plans.ts, utils/cronScheduler.ts
yLc = require("fs"), kYo = R(rt(), 1);
function usePromptsFromClaudeInChrome(mcpClients, toolPermissionMode) {
  let n = SLc.c(6);
  ktn.useRef(void 0);
  let r;
  if (n[0] !== mcpClients) r = [mcpClients], n[0] = mcpClients, n[1] = r;else r = n[1];
  ktn.useEffect(qwm, r);
  let o, s;
  if (n[2] !== mcpClients || n[3] !== toolPermissionMode) o = () => {
    let i = Vwm(mcpClients);
    if (!i) return;
    Rre("set_permission_mode", {
      mode: toolPermissionMode === "bypassPermissions" ? "skip_all_permission_checks" : "ask"
    }, i).then(Wwm).catch(Gwm);
  }, s = [mcpClients, toolPermissionMode], n[2] = mcpClients, n[3] = toolPermissionMode, n[4] = o, n[5] = s;else o = n[4], s = n[5];
  ktn.useEffect(o, s);
}
function Gwm(e) {
  It("chrome_permission_sync", "set_mode_failed"), T(`claude-in-chrome set_permission_mode failed: ${Zr(e).message}`, {
    level: "error"
  });
}
function Wwm() {
  return xe("chrome_permission_sync");
}
function qwm() {}
function Vwm(e) {
  return e.find(t => t.type === "connected" && t.name === VD);
}
var SLc, ktn, WmH;