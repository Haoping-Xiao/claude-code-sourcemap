// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FHs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var FHs = E(() => {
  I0r();
});
async function x0r(e, t) {
  return uRt(e, JMu, t);
}
var zMu = () => ({
    contents: "",
    textDecoder: new TextDecoder()
  }),
  ifn = (e, {
    textDecoder: t
  }) => t.decode(e, {
    stream: true
  }),
  KMu = (e, {
    contents: t
  }) => t + e,
  YMu = (e, t) => e.slice(0, t),
  XMu = ({
    textDecoder: e
  }) => {
    let t = e.decode();
    return t === "" ? void 0 : t;
  },
  JMu;