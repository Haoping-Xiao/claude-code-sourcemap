// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OMe
// matched 2.1.88 source: src/tools/AgentTool/agentDisplay.ts
// class=partial  jaccard=0.1344  score=0.2886  fileCov=0.2009
// note: low-confidence suggestion: src/tools/AgentTool/agentDisplay.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var OMe = E(() => {
  BWt();
  Vet();
  er();
  Lx();
  fn();
  WGe();
  u9();
  Mh();
  vf();
  dr();
  _1();
  Nyt = {
    managedByHost: !1,
    managedByHostFlag: !1,
    desktopHost: !1,
    hostOrchestrated: !1
  };
  urf = new Set(["policySettings", "projectSettings", "localSettings"]);
  Byt = {};
  mrf = new Set(["CLAUDE_CODE_REMOTE", "CLAUDE_CODE_ACCOUNT_UUID", "CLAUDE_CODE_ORGANIZATION_UUID", "CLAUDE_CODE_USER_EMAIL", "CLAUDE_CODE_CONTAINER_ID"]);
  hrf = ["userSettings", "flagSettings", "policySettings"];
});
async function H8t(e, t) {
  if (dCo) return;
  if (dCo = !0, !e.isBypassPermissionsModeAvailable) return;
  if (!(await Szn())) return;
  t(r => $Wt(r));
}
function usl() {
  dCo = !1;
}
function dsl() {
  let e = Ht(n => n.toolPermissionContext),
    t = Ho();
  A8t.useEffect(() => {
    if (da()) return;
    H8t(e, n => t(r => ({
      ...r,
      toolPermissionContext: n(r.toolPermissionContext)
    })));
  }, []);
}
async function T8t(e, t, n, r) {
  {
    if (pCo) return;
    pCo = !0;
    let {
      updateContext: o,
      notification: s
    } = await v8t(e, n);
    if (t(i => {
      let a = o(i.toolPermissionContext),
        l = a === i.toolPermissionContext ? i : {
          ...i,
          toolPermissionContext: a
        };
      if (!s || r) return l;
      return {
        ...l,
        notifications: {
          ...l.notifications,
          queue: [...l.notifications.queue, {
            key: "auto-mode-gate-notification",
            text: s,
            color: "warning",
            priority: "high"
          }]
        }
      };
    }), s && r) r({
      key: "auto-mode-gate-notification",
      text: s,
      color: "warning",
      priority: "high"
    });
  }
}
function fCo() {
  pCo = !1;
}
function psl() {
  let e = Ht(a => a.mainLoopModel),
    t = Ht(a => a.mainLoopModelForSession),
    n = Ht(a => a.fastMode),
    r = Ho(),
    o = Dc(),
    {
      addNotification: s
    } = Li(),
    i = A8t.useRef(!0);
  A8t.useEffect(() => {
    if (da()) return;
    if (i.current) i.current = !1;else fCo();
    T8t(o.getState().toolPermissionContext, r, n, s);
  }, [e, t, n]);
}
var A8t,
  dCo = !1,
  pCo = !1;