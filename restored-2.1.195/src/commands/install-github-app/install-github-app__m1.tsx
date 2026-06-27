// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HFl
// matched 2.1.88 source: src/commands/install-github-app/install-github-app.tsx
// class=modified (alt of src/commands/install-github-app/install-github-app.tsx)  jaccard=0.1075  score=0.9382  fileCov=0.1082
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module HFl] deps: utils/debug.ts, constants/github-app.ts, commander/lib/command.js, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, utils/http.ts, @mixmark-io/domino/lib/htmlelts.js, constants/files.ts, utils/git.ts, utils/detectRepository.ts, utils/execFileNoThrowPortable.ts, services/teamMemorySync/secretScanner.ts, commands/install-github-app/CheckExistingSecretStep.tsx, ink/components/Box.tsx, commands/install-github-app/ChooseRepoStep.tsx, commands/install-github-app/CreatingStep.tsx, commands/install-github-app/install-github-app.tsx, commands/install-github-app/ExistingWorkflowStep.tsx, commands/install-github-app/install-github-app.tsx, services/mcp/auth.ts, ink/styles.ts, highlight.js/lib/languages/mathematica.js, commands/install-github-app/setupGitHubActions.ts, commands/install-github-app/WarningsStep.tsx, commands/install-github-app/install-github-app.tsx
((eZ = R(rt(), 1)),
  (qN = R(se(), 1)),
  (A1f = {
    step: "check-gh",
    selectedRepoName: "",
    currentRepo: "",
    useCurrentRepo: false,
    apiKeyOrOAuthToken: "",
    useExistingKey: true,
    currentWorkflowInstallStep: 0,
    errorInstructions: [],
    warnings: [],
    secretExists: false,
    secretName: "ANTHROPIC_API_KEY",
    useExistingSecret: true,
    workflowExists: false,
    selectedWorkflows: ["claude", "claude-review"],
    selectedApiKeyOption: "new",
    authType: "api_key",
  }));
var v1f, TFl;
