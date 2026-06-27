// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FHs
// matched 2.1.88 source: node_modules/get-stream/source/string.js
// class=partial  jaccard=0.1816  score=1  fileCov=0.1816
// note: low-confidence suggestion: node_modules/get-stream/source/string.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
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