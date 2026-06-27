// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E6l
// matched 2.1.88 source: src/commands/createMovedToPluginCommand.ts
// class=modified  jaccard=0.3359  score=0.5395  fileCov=0.4709
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var E6l = E(() => {
  jc();
  oo();
  ((X5f = {
    type: "local-jsx",
    name: "teleport",
    description: "Resume a Claude Code session from claude.ai",
    aliases: ["tp"],
    isEnabled: () => bo() && Us("allow_remote_sessions"),
    get isHidden() {
      return !bo() || !Us("allow_remote_sessions");
    },
    load: () => Promise.resolve().then(() => (b6l(), _6l)),
  }),
    (S6l = X5f));
});
function A6l({
  name: e,
  description: t,
  progressMessage: n,
  pluginName: r,
  pluginCommand: o,
  getPromptWhileMarketplaceIsPrivate: s,
}) {
  return {
    type: "prompt",
    name: e,
    description: t,
    progressMessage: n,
    contentLength: 0,
    userFacingName() {
      return e;
    },
    source: "builtin",
    disableModelInvocation: false,
    async getPromptForCommand(i, a) {
      return s(i, a);
    },
  };
}
var J5f, Q5f, Z5f, H6l;
