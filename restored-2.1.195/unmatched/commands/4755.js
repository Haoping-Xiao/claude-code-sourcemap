// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HFl
// matched 2.1.88 source: src/commands/install-github-app/install-github-app.tsx
// class=new  jaccard=0.037  score=1  fileCov=0.037
// note: nearest: src/commands/install-github-app/install-github-app.tsx (0.037); dir inferred from dep-graph -> commands; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HFl = E(() => {
  kt();
  kUl();
  O0();
  Ye();
  ps();
  oo();
  vy();
  Bi();
  sa();
  Mx();
  OB();
  sr();
  NUl();
  jUl();
  qUl();
  KUl();
  JUl();
  eFl();
  rFl();
  iFl();
  uFl();
  fFl();
  hFl();
  _Fl();
  EFl();
  eZ = R(rt(), 1), qN = R(se(), 1), A1f = {
    step: "check-gh",
    selectedRepoName: "",
    currentRepo: "",
    useCurrentRepo: !1,
    apiKeyOrOAuthToken: "",
    useExistingKey: !0,
    currentWorkflowInstallStep: 0,
    errorInstructions: [],
    warnings: [],
    secretExists: !1,
    secretName: "ANTHROPIC_API_KEY",
    useExistingSecret: !0,
    workflowExists: !1,
    selectedWorkflows: ["claude", "claude-review"],
    selectedApiKeyOption: "new",
    authType: "api_key"
  };
});
var v1f, TFl;