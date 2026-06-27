// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cwc
// matched 2.1.88 source: src/skills/bundled/verifyContent.ts
// class=modified  jaccard=0.3134  score=0.414  fileCov=0.5633
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Cwc = E(() => {
  Swc();
  Awc();
  Twc();
  ((jEm = vwc),
    (GEm = {
      "examples/cli.md": Ewc,
      "examples/server.md": Hwc,
    }));
});
function Iwc() {
  return (WEm ??= Promise.resolve().then(() => (Cwc(), wwc)));
}
function xwc() {
  Nd({
    name: Y8e,
    description: qEm,
    userInvocable: true,
    files: () => Iwc().then((e) => e.SKILL_FILES),
    async getPromptForCommand(e) {
      let { SKILL_MD: t } = await Iwc(),
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
var WEm,
  qEm =
    "Verify that a code change actually does what it's supposed to by running the app and observing behavior. Use when asked to verify a PR, confirm a fix works, test a change manually, check that a feature works, or validate local changes before pushing.";
