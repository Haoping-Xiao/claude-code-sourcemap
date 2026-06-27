// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lHs
// matched 2.1.88 source: node_modules/human-signals/build/src/core.js
// class=new  jaccard=0.0407  score=0.4705  fileCov=0.0426
// note: nearest: node_modules/human-signals/build/src/core.js (0.0407); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lHs] deps: iHs
aHs = require("os");
var cHs,
  bMu = () => {
    let e = h0r();
    return Object.fromEntries(e.map(SMu));
  },
  SMu = ({
    name: e,
    number: t,
    description: n,
    supported: r,
    action: o,
    forced: s,
    standard: i
  }) => [e, {
    name: e,
    number: t,
    description: n,
    supported: r,
    action: o,
    forced: s,
    standard: i
  }],
  uHs,
  EMu = () => {
    let e = h0r(),
      t = g0r + 1,
      n = Array.from({
        length: t
      }, (r, o) => AMu(o, e));
    return Object.assign({}, ...n);
  },
  AMu = (e, t) => {
    let n = HMu(e, t);
    if (n === void 0) return {};
    let {
      name: r,
      description: o,
      supported: s,
      action: i,
      forced: a,
      standard: l
    } = n;
    return {
      [e]: {
        name: r,
        number: e,
        description: o,
        supported: s,
        action: i,
        forced: a,
        standard: l
      }
    };
  },
  HMu = (e, t) => {
    let n = t.find(({
      name: r
    }) => cHs.constants.signals[r] === e);
    if (n !== void 0) return n;
    return t.find(r => r.number === e);
  },
  $ug;