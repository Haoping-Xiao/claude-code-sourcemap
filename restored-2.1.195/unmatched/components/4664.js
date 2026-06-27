// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t1l
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var t1l = E(() => {
  $7t();
  np();
  Ye();
  str();
  ZOl = R(lt(), 1), Ktr = R(rt(), 1), oNo = R(se(), 1);
});
var n1l = {};
_t(n1l, {
  call: () => call
});
async function call(e, t) {
  let n = e.trim(),
    r = n.toLowerCase();
  if (!r || _G.includes(r) || Iae.includes(r)) return {
    type: "text",
    value: `Usage: /config key=value [key=value ...]
${T7t(t)}`
  };
  let o = A7t(n);
  if (!o) return {
    type: "text",
    value: `Expected key=value, got "${n}". Run /config to see what's available.`
  };
  return {
    type: "text",
    value: H7t(o, t).map(i => i.message).join(`
`)
  };
}