// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module x4o
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var x4o = E(() => {
  oo();
  Ls();
});
function N8f() {
  return P1e() && !Ir() && at("tengu_c4e_slash_upsell", !1);
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
    isHidden: !0,
    supportsNonInteractive: !1,
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