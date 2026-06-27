// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vAe
// matched 2.1.88 source: src/services/MagicDocs/magicDocs.ts
// class=new  jaccard=0.0475  score=0.0918  fileCov=0.0898
// note: nearest: src/services/MagicDocs/magicDocs.ts (0.0475); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vAe = E(() => {
  Un();
  RX();
  u_();
  lf();
  nC();
  EI();
  lC();
  f6();
  Ls();
  _m();
  fh();
  Upe = {
    agentType: "Explore",
    whenToUse: Vnf,
    whenToUseLean: znf,
    disallowedTools: [ss, g4, Xx, ka, Wc, RI],
    source: "built-in",
    baseDir: "built-in",
    model: "haiku",
    omitClaudeMd: true,
    getSystemPrompt: () => qnf()
  };
  Iol = ["haiku", "sonnet", "opus"];
});
function z8e() {
  return at("tengu_review_bughunter_config", null);
}
function PMe() {
  let e = z8e()?.cost_note;
  return typeof e === "string" && e.length > 0 ? e : "$10-$20";
}
function nQ() {
  let e = z8e()?.duration_note;
  return typeof e === "string" && e.length > 0 ? e : "~10\u201320 min";
}
function Rol() {
  let e = z8e()?.model;
  return typeof e === "string" && e.length > 0 ? e : void 0;
}
function Wwo() {
  let e = z8e(),
    t = (n, r) => typeof n === "number" && Number.isFinite(n) && n > 0 ? Math.floor(n) : r;
  return {
    maxFiles: t(e?.max_diff_files, 500),
    maxLines: t(e?.max_diff_lines, 8000)
  };
}
function W6() {
  return xyt() && K8e();
}
function xyt() {
  return z8e()?.enabled === true && Jl() && !TF();
}
function nzn() {
  if (!xyt() || W6()) return null;
  switch (qwo()) {
    case "api_key_auth":
      return `${rzn({
        prefix: "ultra (cloud review) requires claude.ai account auth.",
        suffix: "to use ultra."
      })} See https://code.claude.com/docs/en/ultrareview.`;
    case "no_profile_scope":
      {
        let {
          source: e
        } = aI();
        if (e === "CLAUDE_CODE_OAUTH_TOKEN") return `ultra (cloud review) requires a full-scope login token. ${W4e(e)} Then run \`claude auth login\` to use it; see https://code.claude.com/docs/en/ultrareview.`;
        return "ultra (cloud review) requires a full-scope login token \u2014 run `claude auth login` to use it; see https://code.claude.com/docs/en/ultrareview.";
      }
    case "not_in_rollout":
      return "ultra (cloud review) isn't enabled for your account yet \u2014 run `claude auth login` to refresh your entitlements; see https://code.claude.com/docs/en/ultrareview.";
    default:
      return "ultra (cloud review) requires a claude.ai account \u2014 sign in to claude.ai to use it; see https://code.claude.com/docs/en/ultrareview.";
  }
}