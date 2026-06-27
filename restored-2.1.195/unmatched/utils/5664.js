// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ekc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ekc = E(() => {
  Iv();
  AA();
});
function Upr() {
  if (tkc) return;
  tkc = !0, gvc(), Yvc(), MTc(), _wc(), Zvc(), xwc(), dvc(), rwc(), pwc(), lwc(), swc(), VTc(), uwc(), BTc(), mwc(), Jvc(), lvc();
  let {
    registerLoopSkill: e
  } = ($wc(), ro(Mwc));
  e();
  let {
    registerScheduleRemoteAgentsSkill: t
  } = (Uwc(), ro(Bwc));
  if (t(), !ut(process.env.CLAUDE_CODE_DISABLE_CLAUDE_API_SKILL)) {
    let {
      registerClaudeApiSkill: o
    } = (_xc(), ro(yxc));
    o();
  }
  if (!ut(process.env.CLAUDE_CODE_DISABLE_CLAUDE_CODE_SKILL)) {
    let {
      registerClaudeCodeSkill: o
    } = (Rxc(), ro(kxc));
    o();
  }
  if (!Z1()) FTc();
  let {
      registerRunSkill: n
    } = (Kxc(), ro(zxc)),
    {
      registerRunSkillGeneratorSkill: r
    } = (ekc(), ro(Zxc));
  n(), r();
}
var tkc = !1;