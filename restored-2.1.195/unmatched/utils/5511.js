// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qbc
// matched 2.1.88 source: src/utils/teleport.tsx
// class=new  jaccard=0.0085  score=0.1962  fileCov=0.0088
// note: nearest: src/utils/teleport.tsx (0.0085); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Qbc = E(() => {
  ft();
  RJt();
  Hde();
  Ye();
  szo();
  pir();
  Gen();
  Wen();
  izo();
  dn();
  kt();
  uo();
  Rm();
  je();
  At();
  es();
  vn();
  co();
  XKe();
  Cv();
  _i();
  lzo();
  Kbc();
  Xbc = require("crypto"), wd = R(rt(), 1);
});
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