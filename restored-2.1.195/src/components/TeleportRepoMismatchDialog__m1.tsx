// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aOc
// matched 2.1.88 source: src/components/TeleportRepoMismatchDialog.tsx
// class=modified (alt of src/components/TeleportRepoMismatchDialog.tsx)  jaccard=0.127  score=0.2671  fileCov=0.195
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module aOc] deps: components/design-system/Ratchet.tsx, services/analytics/index.ts, @smithy/types/dist-cjs/index.js, tools/SendMessageTool/SendMessageTool.ts, utils/diff.ts, tools/PowerShellTool/readOnlyValidation.ts, react/cjs/react.production.js, utils/env.ts, hooks/useTerminalSize.ts, dn, utils/debug.ts, context/notifications.tsx, google-auth-library/build/src/crypto/node/crypto.js, utils/crossProjectResume.ts, commands/resume/resume.tsx, skills/loadSkillsDir.ts, utils/concurrentSessions.ts, services/api/filesApi.ts, commands/resume/resume.tsx, main.tsx, utils/errors.ts, main.tsx, utils/sequential.ts, utils/messages.ts, cli/print.ts, utils/plans.ts, screens/REPL.tsx
((ymr = R(lt(), 1)), (rOc = require("path")), (dx = R(rt(), 1)), (yw = R(se(), 1)));
async function lOc(e, t) {
  let { InvalidSettingsDialog: n } = await Promise.resolve().then(() => (Q$c(), J$c));
  return cO(e, (r) =>
    sve.jsx(n, {
      settingsErrors: t.settingsErrors,
      onContinue: () => r(void 0),
      onFix: () => r("fix"),
      onExit: t.onExit,
    }),
  );
}
async function cOc(e) {
  let { TeleportResumeWrapper: t } = await Promise.resolve().then(() => (Tjo(), m6l));
  return cO(e, (n) =>
    sve.jsx(t, {
      onComplete: n,
      onCancel: () => n(null),
      source: "cliArg",
    }),
  );
}
async function uOc(e, t) {
  let { TeleportRepoMismatchDialog: n } = await Promise.resolve().then(() => (tOc(), eOc));
  return cO(e, (r) =>
    sve.jsx(n, {
      targetRepo: t.targetRepo,
      initialPaths: t.initialPaths,
      onSelectPath: r,
      onCancel: () => r(null),
    }),
  );
}
async function dOc(e, t, n, r) {
  let [o, { ResumeConversation: s }, { App: i }] = await Promise.all([
    n,
    Promise.resolve().then(() => (aOc(), iOc)),
    Promise.resolve().then(() => (b8o(), _8o)),
  ]);
  await F7e(
    e,
    sve.jsx(i, {
      getFpsMetrics: t.getFpsMetrics,
      stats: t.stats,
      initialState: t.initialState,
      children: sve.jsx(TT, {
        children: sve.jsx(s, {
          ...r,
          worktreePaths: o,
        }),
      }),
    }),
  );
}
var sve;
