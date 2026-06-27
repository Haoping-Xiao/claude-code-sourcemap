// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eMn
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eMn = E(() => {
  Qi();
  _0();
  sWe = Cn(async () => XKd("git"));
});
function eRe() {
  return ut(process.env.CLAUDE_CODE_REMOTE) || ut(process.env.CLAUDE_CODE_PLUGIN_PREFER_HTTPS);
}
function R8(e = process.env) {
  return {
    ...e,
    ...pFt,
    ...Aeo(e.GIT_CONFIG_COUNT, [["credential.interactive", "false"]])
  };
}
function Aeo(e, t) {
  let n = Number(e),
    r = Number.isInteger(n) && n > 0 ? n : 0,
    o = {
      GIT_CONFIG_COUNT: String(r + t.length)
    };
  return t.forEach(([s, i], a) => {
    o[`GIT_CONFIG_KEY_${r + a}`] = s, o[`GIT_CONFIG_VALUE_${r + a}`] = i;
  }), o;
}
var pFt, Fne;