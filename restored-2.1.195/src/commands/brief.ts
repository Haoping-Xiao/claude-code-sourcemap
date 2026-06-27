// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rZl
// matched 2.1.88 source: src/commands/brief.ts
// class=modified  jaccard=0.3296  score=0.4936  fileCov=0.498
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rZl] deps: @modelcontextprotocol/sdk/dist/esm/types.js, services/analytics/index.ts, services/analytics/growthbook.ts, utils/debug.ts, tools/BriefTool/prompt.ts, tools/BriefTool/UI.tsx
((Bzf = ve(() =>
  H.object({
    enable_slash_command: H.boolean(),
  }),
)),
  (tZl = {
    enable_slash_command: false,
  }));
((Fzf = {
  type: "local-jsx",
  name: "brief",
  description: "Toggle brief-only mode",
  isEnabled: () => Uzf().enable_slash_command,
  immediate: true,
  load: () =>
    Promise.resolve({
      async call(e, t) {
        let r = !t.getAppState().isBriefOnly;
        if (r && !dzt())
          return (
            G("tengu_brief_mode_toggled", {
              enabled: false,
              gated: true,
              source: We("slash_command"),
            }),
            e("Brief tool is not enabled for your account", {
              display: "system",
            }),
            null
          );
        (Ige(r),
          t.onQueryEvent?.({
            type: "apply_flag_settings",
            settings: {
              isBriefOnly: r,
            },
          }),
          G("tengu_brief_mode_toggled", {
            enabled: r,
            gated: false,
            source: We("slash_command"),
          }));
        let o = [
          `<system-reminder>
${r ? `Brief mode is now enabled. Use the ${j1} tool for all user-facing output \u2014 plain text outside it is hidden from the user's view.` : `Brief mode is now disabled. The ${j1} tool is no longer available \u2014 reply with plain text.`}
</system-reminder>`,
        ];
        return (
          e(r ? "Brief-only mode enabled" : "Brief-only mode disabled", {
            display: "system",
            metaMessages: o,
          }),
          null
        );
      },
    }),
}),
  (jzf = Fzf));
async function y3o() {
  let e = await Ekn("tengu_bridge_repl_v2_config", oZl),
    t = Gzf().safeParse(e);
  return t.success ? t.data : oZl;
}
async function Air() {
  let e = await y3o();
  if (
    e.min_version &&
    qte(
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      e.min_version,
    )
  )
    return `Your version of Claude Code (${
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION
    }) is too old for Remote Control.
Version ${e.min_version} or higher is required. Run \`claude update\` to update.`;
  return null;
}
var oZl, Gzf;
