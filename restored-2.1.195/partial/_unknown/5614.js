// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ivc
// matched 2.1.88 source: src/skills/bundled/verify.ts
// class=partial  jaccard=0.1637  score=0.2566  fileCov=0.3115
// note: low-confidence suggestion: src/skills/bundled/verify.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ivc] deps: YTc, JTc, ZTc, tvc, rvc
iSm = ovc, aSm = {
  "references/component-schemas.md": XTc,
  "references/example-plugins.md": QTc,
  "references/mcp-servers.md": evc,
  "references/search-strategies.md": nvc
};
function avc() {
  return lSm ??= Promise.resolve().then(() => (ivc(), svc));
}
function lvc() {
  Nd({
    name: "cowork-plugin",
    description: cSm,
    userInvocable: false,
    isEnabled: () => Oe.CLAUDE_CODE_ENTRYPOINT === "remote_cowork",
    files: () => avc().then(e => e.SKILL_FILES),
    async getPromptForCommand(e) {
      let {
          SKILL_MD: t
        } = await avc(),
        n = [t.trimStart()],
        r = e?.trim();
      if (r) n.push(`## User Request

${r}`);
      return [{
        type: "text",
        text: n.join(`

`)
      }];
    }
  });
}
var lSm,
  cSm = "Create a new Cowork plugin from scratch, or customize an installed plugin for a specific organization. Use when: customize plugin, set up plugin, configure plugin, tailor plugin, adjust plugin settings, customize plugin connectors, customize plugin skill, tweak plugin, modify plugin configuration, create a plugin, build a plugin, make a new plugin, develop a plugin, scaffold a plugin.";