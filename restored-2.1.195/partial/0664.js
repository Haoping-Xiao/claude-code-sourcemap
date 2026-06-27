// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nHs
// matched 2.1.88 source: node_modules/onetime/index.js
// class=partial  jaccard=0.2283  score=0.5283  fileCov=0.2868
// note: low-confidence suggestion: node_modules/onetime/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nHs = E(() => {
  ZAs();
  Zpn = new WeakMap();
  eHs.callCount = e => {
    if (!Zpn.has(e)) throw Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
    return Zpn.get(e);
  };
  tHs = eHs;
});
var rHs = () => {
    let e = g0r - oHs + 1;
    return Array.from({
      length: e
    }, yMu);
  },
  yMu = (e, t) => ({
    name: `SIGRT${t + 1}`,
    number: oHs + t,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix"
  }),
  oHs = 34,
  g0r = 64;
var sHs;