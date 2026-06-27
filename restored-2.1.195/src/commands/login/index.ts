// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AUl
// matched 2.1.88 source: src/commands/login/index.ts
// class=modified  jaccard=0.4985  score=0.9311  fileCov=0.5175
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
var HUl = () => ({
  type: "local-jsx",
  name: "login",
  get description() {
    return jCn() ? "Switch Anthropic accounts" : "Sign in with your Anthropic account";
  },
  isEnabled: () => !Oe.DISABLE_LOGIN_COMMAND,
  load: () => Promise.resolve().then(() => (w8t(), gsl)),
});
