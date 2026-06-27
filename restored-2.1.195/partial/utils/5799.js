// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aOc
// matched 2.1.88 source: src/hooks/useTeleportResume.tsx
// class=partial  jaccard=0.0984  score=1  fileCov=0.0984
// note: low-confidence suggestion: src/hooks/useTeleportResume.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aOc = E(() => {
  _i();
  ft();
  CH();
  D2o();
  RF();
  jpr();
  jLn();
  jh();
  Ye();
  dn();
  kt();
  uo();
  $S();
  M2o();
  b7o();
  Jen();
  Ld();
  wpe();
  O2o();
  wr();
  At();
  uf();
  vn();
  co();
  I7e();
  _a();
  YYo();
  ymr = R(lt(), 1), rOc = require("path"), dx = R(rt(), 1), yw = R(se(), 1);
});
async function lOc(e, t) {
  let {
    InvalidSettingsDialog: n
  } = await Promise.resolve().then(() => (Q$c(), J$c));
  return cO(e, r => sve.jsx(n, {
    settingsErrors: t.settingsErrors,
    onContinue: () => r(void 0),
    onFix: () => r("fix"),
    onExit: t.onExit
  }));
}
async function cOc(e) {
  let {
    TeleportResumeWrapper: t
  } = await Promise.resolve().then(() => (Tjo(), m6l));
  return cO(e, n => sve.jsx(t, {
    onComplete: n,
    onCancel: () => n(null),
    source: "cliArg"
  }));
}
async function uOc(e, t) {
  let {
    TeleportRepoMismatchDialog: n
  } = await Promise.resolve().then(() => (tOc(), eOc));
  return cO(e, r => sve.jsx(n, {
    targetRepo: t.targetRepo,
    initialPaths: t.initialPaths,
    onSelectPath: r,
    onCancel: () => r(null)
  }));
}
async function dOc(e, t, n, r) {
  let [o, {
    ResumeConversation: s
  }, {
    App: i
  }] = await Promise.all([n, Promise.resolve().then(() => (aOc(), iOc)), Promise.resolve().then(() => (b8o(), _8o))]);
  await F7e(e, sve.jsx(i, {
    getFpsMetrics: t.getFpsMetrics,
    stats: t.stats,
    initialState: t.initialState,
    children: sve.jsx(TT, {
      children: sve.jsx(s, {
        ...r,
        worktreePaths: o
      })
    })
  }));
}
var sve;