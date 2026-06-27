// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vzs
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0092  score=1  fileCov=0.0092
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0092); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Eod = e => Array.isArray(e) ? e : [e];
var zzs = e => {
  for (let n in e) if (e.hasOwnProperty(n) && e[n]["#text"] !== void 0) e[n] = e[n]["#text"];else if (typeof e[n] === "object" && e[n] !== null) e[n] = zzs(e[n]);
  return e;
};
var Aod = e => e != null;
class tSn {
  trace() {}
  debug() {}
  info() {}
  warn() {}
  error() {}
}
function Kzs(e, t, n) {
  let r, o, s;
  if (typeof t === "undefined" && typeof n === "undefined") r = {}, s = e;else if (r = e, typeof t === "function") return o = t, s = n, vod(r, o, s);else s = t;
  for (let i of Object.keys(s)) {
    if (!Array.isArray(s[i])) {
      r[i] = s[i];
      continue;
    }
    Yzs(r, null, s, i);
  }
  return r;
}
var Hod = e => {
    let t = {};
    for (let [n, r] of Object.entries(e || {})) t[n] = [, r];
    return t;
  },
  Tod = (e, t) => {
    let n = {};
    for (let r in t) Yzs(n, e, t, r);
    return n;
  },
  vod = (e, t, n) => Kzs(e, Object.entries(n).reduce((r, [o, s]) => {
    if (Array.isArray(s)) r[o] = s;else if (typeof s === "function") r[o] = [t, s()];else r[o] = [t, s];
    return r;
  }, {})),
  Yzs = (e, t, n, r) => {
    if (t !== null) {
      let i = n[r];
      if (typeof i === "function") i = [, i];
      let [a = wod, l = Cod, c = r] = i;
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
  wod = e => e != null,
  Cod = e => e;
var Xzs;