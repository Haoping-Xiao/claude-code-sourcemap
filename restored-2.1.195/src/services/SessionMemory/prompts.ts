// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HKo
// matched 2.1.88 source: src/services/SessionMemory/prompts.ts
// class=modified  jaccard=0.0163  score=0.0681  fileCov=0.021
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: registerRunSkillGeneratorSkill
// [unwrapped __esm module HKo] deps: Yxc, Jxc
((rTm = Xxc), (oTm = Qxc));
var Zxc = {};
function registerRunSkillGeneratorSkill() {
  Nd({
    name: "run-skill-generator",
    menuDescription: "Create a skill that knows how to run this project\u2019s app",
    description: sTm,
    userInvocable: true,
    disableModelInvocation: true,
    files: async () => {
      let [{ TEMPLATE_MD: e }, { RUN_EXAMPLE_FILES: t }] = await Promise.all([
        Promise.resolve().then(() => (HKo(), AKo)),
        Promise.resolve().then(() => (EKo(), SKo)),
      ]);
      return {
        "template.md": e,
        ...t,
      };
    },
    async getPromptForCommand(e) {
      let { SKILL_MD: t } = await Promise.resolve().then(() => (HKo(), AKo)),
        n = [Bm(t).content.trimStart()];
      if (e)
        n.push(`## User Request

${e}`);
      return [
        {
          type: "text",
          text: n.join(`

`),
        },
      ];
    },
  });
}
var sTm =
  "Author or improve the run-<unit> skill \u2014 a per-project skill that tells agents how to build, launch, and drive this project's app. Use when the user asks to set up the project, get it running, write run instructions, or verify build/run steps work from a clean environment.";
