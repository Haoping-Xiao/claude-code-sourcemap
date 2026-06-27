// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vFl
// matched 2.1.88 source: src/commands/install-slack-app/install-slack-app.ts
// class=modified  jaccard=0.189  score=0.2516  fileCov=0.4316
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module vFl] deps: wr
((v1f = {
  type: "local-jsx",
  name: "install-github-app",
  description: "Set up Claude GitHub Actions for a repository",
  availability: ["claude-ai", "console"],
  isEnabled: () => !Oe.DISABLE_INSTALL_GITHUB_APP_COMMAND,
  load: () => Promise.resolve().then(() => (HFl(), AFl)),
}),
  (TFl = v1f));
async function call() {
  if (
    (G("tengu_install_slack_app_clicked", {}),
    gn((t) => ({
      ...t,
      slackAppInstallCount: (t.slackAppInstallCount ?? 0) + 1,
    })),
    await ac(SLACK_APP_URL))
  )
    return {
      type: "text",
      value: "Opening Slack app installation page in browser\u2026",
    };
  else
    return {
      type: "text",
      value: `Couldn't open browser. Visit: ${SLACK_APP_URL}`,
    };
}
var SLACK_APP_URL = "https://slack.com/marketplace/A08SF47R6P4-claude";
