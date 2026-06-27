// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JYo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JYo = E(() => {
  wr();
});
function ZPc(e) {
  let t = Tl() ? "safe mode" : qtn() ? "hermetic mode" : void 0;
  if (!t) return {
    servers: e,
    dropped: [],
    reason: t
  };
  let n = {},
    r = [];
  for (let [o, s] of Object.entries(e)) if (s.type === "sdk") n[o] = s;else r.push(o);
  return {
    servers: n,
    dropped: r,
    reason: t
  };
}