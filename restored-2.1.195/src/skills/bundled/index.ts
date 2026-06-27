// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ekc
// matched 2.1.88 source: src/skills/bundled/index.ts
// class=modified  jaccard=0.0832  score=0.4697  fileCov=0.0918
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Upr() {
  if (tkc) return;
  ((tkc = true),
    gvc(),
    Yvc(),
    MTc(),
    _wc(),
    Zvc(),
    xwc(),
    dvc(),
    rwc(),
    pwc(),
    lwc(),
    swc(),
    VTc(),
    uwc(),
    BTc(),
    mwc(),
    Jvc(),
    lvc());
  let { registerLoopSkill: e } = ($wc(), ro(Mwc));
  e();
  let { registerScheduleRemoteAgentsSkill: t } = (Uwc(), ro(Bwc));
  if ((t(), !ut(process.env.CLAUDE_CODE_DISABLE_CLAUDE_API_SKILL))) {
    let { registerClaudeApiSkill: o } = (_xc(), ro(yxc));
    o();
  }
  if (!ut(process.env.CLAUDE_CODE_DISABLE_CLAUDE_CODE_SKILL)) {
    let { registerClaudeCodeSkill: o } = (Rxc(), ro(kxc));
    o();
  }
  if (!Z1()) FTc();
  let { registerRunSkill: n } = (Kxc(), ro(zxc)),
    { registerRunSkillGeneratorSkill: r } = (ekc(), ro(Zxc));
  (n(), r());
}
var tkc = false;
