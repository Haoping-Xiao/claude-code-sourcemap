// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zvc
// matched 2.1.88 source: src/skills/bundled/updateConfig.ts
// class=new  jaccard=0.018  score=0.025  fileCov=0.06
// note: nearest: src/skills/bundled/updateConfig.ts (0.018); dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zvc = E(() => {
  yvc();
  bvc();
  Evc();
  FSm = Hvc(), jSm = Tvc(), GSm = vvc(), WSm = wvc(), qSm = Cvc(), VSm = Ivc(), zSm = xvc(), KSm = kvc(), YSm = Rvc(), XSm = Lvc(), JSm = Dvc(), QSm = Pvc(), ZSm = Mvc(), eEm = $vc(), tEm = Ovc(), nEm = Nvc(), rEm = Bvc(), oEm = Uvc(), sEm = Fvc(), iEm = jvc(), aEm = Gvc(), lEm = Wvc(), cEm = qvc(), uEm = Svc, dEm = {
    "storybook/SKILL.md": Avc,
    "non-storybook/SKILL.md": _vc,
    "package-build.mjs": ux(FSm),
    "package-validate.mjs": ux(jSm),
    "lib/common.mjs": ux(GSm),
    "lib/detect.mjs": ux(WSm),
    "lib/bundle.mjs": ux(qSm),
    "lib/dts.mjs": ux(VSm),
    "lib/css.mjs": ux(zSm),
    "lib/source-storybook.mjs": ux(KSm),
    "lib/source-kit.mjs": ux(YSm),
    "lib/story-imports.mjs": ux(XSm),
    "lib/css-fallback.mjs": ux(JSm),
    "lib/emit.mjs": ux(QSm),
    "lib/previews.mjs": ux(ZSm),
    "lib/preview-gen-storybook.mjs": ux(eEm),
    "lib/docs.mjs": ux(tEm),
    "lib/preview-rebuild.mjs": ux(nEm),
    "storybook/http-serve.mjs": ux(rEm),
    "storybook/probe.mjs": ux(oEm),
    "storybook/compare.mjs": ux(sEm),
    "package-capture.mjs": ux(iEm),
    "lib/sync-hashes.mjs": ux(aEm),
    "lib/remote-diff.mjs": ux(lEm),
    "resync.mjs": ux(cEm)
  };
});
function Kvc() {
  return pEm ??= Promise.resolve().then(() => (zvc(), Vvc));
}
function Yvc() {
  Nd({
    name: "design-sync",
    menuDescription: "Push your design system components to claude.ai/design",
    description: fEm,
    isEnabled: vbt,
    argumentHint: '[<project hint, e.g. "Acme DS">]',
    disableModelInvocation: true,
    userInvocable: true,
    files: () => Kvc().then(e => e.SKILL_FILES),
    async getPromptForCommand(e) {
      let {
          SKILL_MD: t
        } = await Kvc(),
        n = [Bm(t).content.trimStart()];
      if (e?.trim()) n.push(`## Hint

\`\`\`
${e.trim()}
\`\`\``);
      return [{
        type: "text",
        text: n.join(`

`)
      }];
    }
  });
}
var pEm,
  fEm = 'Push a React design system to claude.ai/design. This runs a converter that bundles the real component code (from Storybook or a bare package) and uploads it. Use when the user runs /design-sync or says "sync my design system to Claude Design".';