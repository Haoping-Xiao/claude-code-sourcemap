// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module x4o
// matched 2.1.88 source: src/commands/advisor.ts
// class=partial  jaccard=0.0659  score=0.3231  fileCov=0.0765
// note: low-confidence suggestion: src/commands/advisor.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function N8f() {
  return P1e() && !Ir() && at("tengu_c4e_slash_upsell", false);
}
function B8f(e) {
  return `/${e} is available with Claude for Enterprise \u2014 ask your admin about migrating from API-key access.`;
}
function oHt(e) {
  return {
    type: "local",
    name: e.name,
    aliases: e.aliases,
    description: `${e.description} \u2014 available with Claude for Enterprise`,
    isEnabled: () => !U8f() && N8f(),
    isHidden: true,
    supportsNonInteractive: false,
    load: () => Promise.resolve({
      call: async () => (G("tengu_c4e_slash_upsell_shown", {
        command: e.name
      }), {
        type: "text",
        value: B8f(e.name)
      })
    })
  };
}
function U8f() {
  return bo();
}
var zXl;