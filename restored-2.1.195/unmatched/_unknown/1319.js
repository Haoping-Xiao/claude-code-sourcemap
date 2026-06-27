// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wJs
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0092  score=1  fileCov=0.0092
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0092); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Bld = e => Array.isArray(e) ? e : [e];
var CJs = e => {
  for (let n in e) if (e.hasOwnProperty(n) && e[n]["#text"] !== void 0) e[n] = e[n]["#text"];else if (typeof e[n] === "object" && e[n] !== null) e[n] = CJs(e[n]);
  return e;
};
var Uld = e => e != null;
class nEn {
  trace() {}
  debug() {}
  info() {}
  warn() {}
  error() {}
}
function IJs(e, t, n) {
  let r, o, s;
  if (typeof t === "undefined" && typeof n === "undefined") r = {}, s = e;else if (r = e, typeof t === "function") return o = t, s = n, Gld(r, o, s);else s = t;
  for (let i of Object.keys(s)) {
    if (!Array.isArray(s[i])) {
      r[i] = s[i];
      continue;
    }
    xJs(r, null, s, i);
  }
  return r;
}
var Fld = e => {
    let t = {};
    for (let [n, r] of Object.entries(e || {})) t[n] = [, r];
    return t;
  },
  jld = (e, t) => {
    let n = {};
    for (let r in t) xJs(n, e, t, r);
    return n;
  },
  Gld = (e, t, n) => IJs(e, Object.entries(n).reduce((r, [o, s]) => {
    if (Array.isArray(s)) r[o] = s;else if (typeof s === "function") r[o] = [t, s()];else r[o] = [t, s];
    return r;
  }, {})),
  xJs = (e, t, n, r) => {
    if (t !== null) {
      let i = n[r];
      if (typeof i === "function") i = [, i];
      let [a = Wld, l = qld, c = r] = i;
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
  Wld = e => e != null,
  qld = e => e;
var kJs;