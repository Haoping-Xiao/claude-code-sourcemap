// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qbc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0066  score=0.4274  fileCov=0.0067
// note: nearest: src/screens/REPL.tsx (0.0066); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Qbc] deps: services/analytics/index.ts, cli/print.ts, entrypoints/sdk/coreSchemas.ts, hooks/useTerminalSize.ts, screens/REPL.tsx, utils/model/deprecation.ts, remote/sdkMessageAdapter.ts, assistant/sessionHistory.ts, tools/TaskUpdateTool/TaskUpdateTool.ts, dn, utils/debug.ts, context/notifications.tsx, @grpc/grpc-js/build/src/server.js, utils/debug.ts, utils/errors.ts, utils/profilerBase.ts, utils/sequential.ts, utils/messages.ts, commands/rename/generateSessionName.ts, utils/teleport/api.ts, components/design-system/Ratchet.tsx, hooks/useReplBridge.tsx, hooks/useRemoteSession.ts
Xbc = require("crypto"), wd = R(rt(), 1);
function Zbc(e, t) {
  let n = Ht(c => c.toolPermissionContext),
    r = n.mode,
    o = Ho(),
    s = Dc(),
    {
      addNotification: i
    } = Li(),
    a = qen.useRef({
      mode: r,
      context: n
    }),
    l = qen.useRef(null);
  qen.useEffect(() => {
    if (!e.isRemoteMode || !e.caps.controlChannel || e.viewerOnly) return;
    let c = a.current;
    a.current = {
      mode: r,
      context: n
    };
    let u = t.current;
    if (t.current = null, c.mode === r || r === "bubble") return;
    if (u === r) return;
    let d = r,
      p = l.current === d;
    l.current = null, e.sendControlRequest({
      subtype: "set_permission_mode",
      mode: d
    }).then(() => {
      if (!p) xe("mode_switch");
    }).catch(f => {
      if (T(`[remote] set_permission_mode rejected: ${be(f)}`), p) return;
      if (Le("mode_switch", J4o(f)), s.getState().toolPermissionContext.mode !== d) return;
      l.current = c.mode, o(m => {
        if (m.toolPermissionContext.mode !== d) return m;
        return {
          ...m,
          toolPermissionContext: c.context
        };
      }), i({
        key: "remote-permission-mode-rejected",
        kind: "feedback",
        text: `Cloud session couldn't switch to ${d} mode`,
        color: "warning",
        priority: "immediate"
      });
    });
  }, [r, n, e, o, i, s, t]);
}
var qen;