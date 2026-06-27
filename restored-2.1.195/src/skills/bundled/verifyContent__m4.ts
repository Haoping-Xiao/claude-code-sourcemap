// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EKo
// matched 2.1.88 source: src/skills/bundled/verifyContent.ts
// class=modified (alt of src/skills/bundled/verifyContent.ts)  jaccard=0.1428  score=0.1751  fileCov=0.4367
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module EKo] deps: Lxc, Pxc, $xc, Nxc, Uxc, jxc, Wxc
((XHm = qxc),
  (JHm = {
    "examples/cli.md": Dxc,
    "examples/electron.md": Mxc,
    "examples/library.md": Oxc,
    "examples/playwright.md": Bxc,
    "examples/server.md": Fxc,
    "examples/tui.md": Gxc,
  }));
var zxc = {};
_t(zxc, {
  registerRunSkill: () => registerRunSkill,
});
function Vxc() {
  return (QHm ??= Promise.resolve().then(() => (EKo(), SKo)));
}
function registerRunSkill() {
  Nd({
    name: "run",
    menuDescription: "Launch this project\u2019s app to see your change working",
    description: ZHm,
    userInvocable: true,
    files: () => Vxc().then((e) => e.RUN_EXAMPLE_FILES),
    async getPromptForCommand(e) {
      let { SKILL_MD: t } = await Vxc(),
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
var QHm,
  ZHm =
    "Launch and drive this project's app to see a change working. Use when asked to run, start, or screenshot the app, or to confirm a change works in the real app (not just tests). First looks for a project skill that already covers launching the app; otherwise falls back to built-in patterns per project type (CLI, server, TUI, Electron, browser-driven, library).";
