// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qzo
// matched 2.1.88 source: src/components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx
// class=new  jaccard=0.0177  score=0.285  fileCov=0.0186
// note: nearest: src/components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx (0.0177); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Qzo] deps: services/analytics/index.ts, hooks/useTerminalSize.ts, components/permissions/rules/WorkspaceTab.tsx
DZ = require("path"), IA = R(se(), 1);
function Hpr(e) {
  let t = ZAc.c(10),
    n = Ht(r_m),
    r = Ho(),
    {
      addNotification: o
    } = Li(),
    s;
  if (t[0] !== e?.type || t[1] !== n) s = e?.type === "workflow-agent" && (n.mode === "default" || n.mode === "acceptEdits") && _dr(n), t[0] = e?.type, t[1] = n, t[2] = s;else s = t[2];
  let i = s,
    a;
  if (t[3] !== o || t[4] !== r || t[5] !== n) a = () => {
    if (!Zpe("auto", n, d => r(p => {
      let f = d(p.toolPermissionContext);
      if (f === p.toolPermissionContext) return p;
      return {
        ...p,
        toolPermissionContext: f
      };
    }), "workflow_permission_prompt").ok) {
      let d = Pz();
      return o({
        key: "workflow-auto-mode-unavailable",
        text: d !== null ? HZ(d) : "auto mode is unavailable right now",
        color: "warning",
        priority: "high"
      }), false;
    }
    return true;
  }, t[3] = o, t[4] = r, t[5] = n, t[6] = a;else a = t[6];
  let l = a,
    c;
  if (t[7] !== l || t[8] !== i) c = {
    offered: i,
    enableAutoMode: l
  }, t[7] = l, t[8] = i, t[9] = c;else c = t[9];
  return c;
}
function r_m(e) {
  return e.toolPermissionContext;
}
var ZAc,
  Epr = "Yes, and switch to auto mode",
  Apr = "\xB7 workflows run best with it on";