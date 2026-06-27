// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PTc
// matched 2.1.88 source: src/skills/bundled/verify.ts
// class=partial  jaccard=0.1439  score=0.2927  fileCov=0.2206
// note: low-confidence suggestion: src/skills/bundled/verify.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var PTc = E(() => {
  RTc();
  Nbm = LTc;
});
function Ubm() {
  return Bbm ??= Promise.resolve().then(() => (PTc(), DTc));
}
function Gbm() {
  return "";
}
function MTc() {
  Nd({
    name: ozn,
    menuDescription: "Design guidance for Artifacts",
    description: jbm,
    isEnabled: GRe,
    userInvocable: true,
    async getPromptForCommand() {
      let {
        SKILL_MD: e
      } = await Ubm();
      return [{
        type: "text",
        text: Bm(e).content.trimStart().replace(Fbm, Gbm)
      }];
    }
  });
}
var Bbm,
  Fbm = "<!-- dataviz-callout -->",
  jbm = "Design guidance and fundamentals for Artifacts.";