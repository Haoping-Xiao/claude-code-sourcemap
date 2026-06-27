// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OMe
// matched 2.1.88 source: src/utils/permissions/bypassPermissionsKillswitch.ts
// class=modified  jaccard=0.2517  score=0.4089  fileCov=0.3957
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OMe] deps: BWt, Vet, er, Lx, fn, WGe, u9, Mh, vf, dr, _1
Nyt = {
  managedByHost: false,
  managedByHostFlag: false,
  desktopHost: false,
  hostOrchestrated: false,
};
urf = new Set(["policySettings", "projectSettings", "localSettings"]);
Byt = {};
mrf = new Set([
  "CLAUDE_CODE_REMOTE",
  "CLAUDE_CODE_ACCOUNT_UUID",
  "CLAUDE_CODE_ORGANIZATION_UUID",
  "CLAUDE_CODE_USER_EMAIL",
  "CLAUDE_CODE_CONTAINER_ID",
]);
hrf = ["userSettings", "flagSettings", "policySettings"];
async function H8t(e, t) {
  if (dCo) return;
  if (((dCo = true), !e.isBypassPermissionsModeAvailable)) return;
  if (!(await Szn())) return;
  t((r) => $Wt(r));
}
function usl() {
  dCo = false;
}
function dsl() {
  let e = Ht((n) => n.toolPermissionContext),
    t = Ho();
  A8t.useEffect(() => {
    if (da()) return;
    H8t(e, (n) =>
      t((r) => ({
        ...r,
        toolPermissionContext: n(r.toolPermissionContext),
      })),
    );
  }, []);
}
async function T8t(e, t, n, r) {
  {
    if (pCo) return;
    pCo = true;
    let { updateContext: o, notification: s } = await v8t(e, n);
    if (
      (t((i) => {
        let a = o(i.toolPermissionContext),
          l =
            a === i.toolPermissionContext
              ? i
              : {
                  ...i,
                  toolPermissionContext: a,
                };
        if (!s || r) return l;
        return {
          ...l,
          notifications: {
            ...l.notifications,
            queue: [
              ...l.notifications.queue,
              {
                key: "auto-mode-gate-notification",
                text: s,
                color: "warning",
                priority: "high",
              },
            ],
          },
        };
      }),
      s && r)
    )
      r({
        key: "auto-mode-gate-notification",
        text: s,
        color: "warning",
        priority: "high",
      });
  }
}
function fCo() {
  pCo = false;
}
function psl() {
  let e = Ht((a) => a.mainLoopModel),
    t = Ht((a) => a.mainLoopModelForSession),
    n = Ht((a) => a.fastMode),
    r = Ho(),
    o = Dc(),
    { addNotification: s } = Li(),
    i = A8t.useRef(true);
  A8t.useEffect(() => {
    if (da()) return;
    if (i.current) i.current = false;
    else fCo();
    T8t(o.getState().toolPermissionContext, r, n, s);
  }, [e, t, n]);
}
var A8t,
  dCo = false,
  pCo = false;
