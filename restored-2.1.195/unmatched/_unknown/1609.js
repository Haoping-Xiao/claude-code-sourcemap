// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Adi
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0153  score=1  fileCov=0.0153
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0153); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Adi = E(() => {
  B4r.prototype = Object.create(String.prototype, {
    constructor: {
      value: B4r,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  Object.setPrototypeOf(B4r, String);
});
function Hrt(e, t, n) {
  let r, o, s;
  if (typeof t === "undefined" && typeof n === "undefined") r = {}, s = e;else if (r = e, typeof t === "function") return o = t, s = n, Umd(r, o, s);else s = t;
  for (let i of Object.keys(s)) {
    if (!Array.isArray(s[i])) {
      r[i] = s[i];
      continue;
    }
    Hdi(r, null, s, i);
  }
  return r;
}
var Trt = (e, t) => {
    let n = {};
    for (let r in t) Hdi(n, e, t, r);
    return n;
  },
  Umd = (e, t, n) => Hrt(e, Object.entries(n).reduce((r, [o, s]) => {
    if (Array.isArray(s)) r[o] = s;else if (typeof s === "function") r[o] = [t, s()];else r[o] = [t, s];
    return r;
  }, {})),
  Hdi = (e, t, n, r) => {
    if (t !== null) {
      let i = n[r];
      if (typeof i === "function") i = [, i];
      let [a = Fmd, l = jmd, c = r] = i;
      if (typeof a === "function" && a(t[c]) || typeof a !== "function" && !!a) e[r] = l(t[c]);
      return;
    }
    let [o, s] = n[r];
    if (typeof s === "function") {
      let i,
        a = o === void 0 && (i = s()) != null,
        l = typeof o === "function" && !!o(void 0) || typeof o !== "function" && !!o;
      if (a) e[r] = i;else if (l) e[r] = s();
    } else {
      let i = o === void 0 && s != null,
        a = typeof o === "function" && !!o(s) || typeof o !== "function" && !!o;
      if (i || a) e[r] = s;
    }
  },
  Fmd = e => e != null,
  jmd = e => e;
var Tdi = () => {};