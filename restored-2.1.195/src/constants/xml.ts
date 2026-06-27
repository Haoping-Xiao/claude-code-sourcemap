// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wFe
// matched 2.1.88 source: src/constants/xml.ts
// class=modified  jaccard=0.621  score=0.7426  fileCov=0.7913
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var wFe = E(() => {
  Qi();
  wr();
  VSs = new Map();
  IDu = Cn(async () => {
    let e = Lkr(),
      t;
    try {
      let [n, r] = await Promise.all([
          Promise.resolve().then(() => R(RB(), 1)),
          Promise.resolve().then(() => R(Dx(), 1)),
        ]),
        o = n.loadConfig ?? n.default?.loadConfig,
        s = r.NODE_REGION_CONFIG_FILE_OPTIONS ?? r.default?.NODE_REGION_CONFIG_FILE_OPTIONS;
      t =
        (
          await o(
            {
              environmentVariableSelector: () => {
                return;
              },
              configFileSelector: (a) => a.region,
              default: () => {
                return;
              },
            },
            s,
          )()
        )?.trim() || void 0;
    } catch {
      t = void 0;
    }
    return (VSs.set(e, t), t);
  }, Lkr);
});
var rj = "command-name",
  zC = "command-message",
  hpn = "command-args",
  J0t = "bash-input",
  Q0t = "bash-stdout",
  wae = "bash-stderr",
  Pkr = "bash-exit-code",
  KC = "local-command-stdout",
  aY = "local-command-stderr",
  CFe = "local-command-caveat",
  KSs,
  Cae = "tick",
  Oc = "task-notification",
  Dp = "task-id",
  YC = "tool-use-id",
  Qwe = "task-type",
  pM = "output-file",
  up = "status",
  Zu = "summary",
  Mkr = "worktree",
  $kr = "worktreePath",
  Okr = "worktreeBranch",
  IFe = "remote-review",
  NZe = "remote-review-progress",
  DB = "teammate-message",
  xFe = "channel",
  kFe = '<channel source="',
  BZe = "cross-session-message",
  ypn = "agent-message",
  bhe = "fork-boilerplate",
  Z0t = "Your directive: ",
  _G,
  Iae;
