// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TVa
// matched 2.1.88 source: node_modules/axios/lib/utils.js
// class=partial  jaccard=0.132  score=0.8303  fileCov=0.1357
// note: low-confidence suggestion: node_modules/axios/lib/utils.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var TVa = Q(q5n => {
  Object.defineProperty(q5n, "__esModule", {
    value: !0
  });
  q5n.merge = void 0;
  var SVa = bVa(),
    UVp = 20;
  function FVp(...e) {
    let t = e.shift(),
      n = new WeakMap();
    while (e.length > 0) t = AVa(t, e.shift(), 0, n);
    return t;
  }
  q5n.merge = FVp;
  function _Eo(e) {
    if (W5n(e)) return e.slice();
    return e;
  }
  function AVa(e, t, n = 0, r) {
    let o;
    if (n > UVp) return;
    if (n++, G5n(e) || G5n(t) || HVa(t)) o = _Eo(t);else if (W5n(e)) {
      if (o = e.slice(), W5n(t)) for (let s = 0, i = t.length; s < i; s++) o.push(_Eo(t[s]));else if (Eqt(t)) {
        let s = Object.keys(t);
        for (let i = 0, a = s.length; i < a; i++) {
          let l = s[i];
          if (l === "__proto__" || l === "constructor" || l === "prototype") continue;
          o[l] = _Eo(t[l]);
        }
      }
    } else if (Eqt(e)) if (Eqt(t)) {
      if (!jVp(e, t)) return t;
      o = Object.assign({}, e);
      let s = Object.keys(t);
      for (let i = 0, a = s.length; i < a; i++) {
        let l = s[i];
        if (l === "__proto__" || l === "constructor" || l === "prototype") continue;
        let c = t[l];
        if (G5n(c)) {
          if (typeof c > "u") delete o[l];else o[l] = c;
        } else {
          let u = o[l],
            d = c;
          if (EVa(e, l, r) || EVa(t, l, r)) delete o[l];else {
            if (Eqt(u) && Eqt(d)) {
              let p = r.get(u) || [],
                f = r.get(d) || [];
              p.push({
                obj: e,
                key: l
              }), f.push({
                obj: t,
                key: l
              }), r.set(u, p), r.set(d, f);
            }
            o[l] = AVa(o[l], c, n, r);
          }
        }
      }
    } else o = t;
    return o;
  }
  function EVa(e, t, n) {
    let r = n.get(e[t]) || [];
    for (let o = 0, s = r.length; o < s; o++) {
      let i = r[o];
      if (i.key === t && i.obj === e) return !0;
    }
    return !1;
  }
  function W5n(e) {
    return Array.isArray(e);
  }
  function HVa(e) {
    return typeof e === "function";
  }
  function Eqt(e) {
    return !G5n(e) && !W5n(e) && !HVa(e) && typeof e === "object";
  }
  function G5n(e) {
    return typeof e === "string" || typeof e === "number" || typeof e === "boolean" || typeof e > "u" || e instanceof Date || e instanceof RegExp || e === null;
  }
  function jVp(e, t) {
    if (!(0, SVa.isPlainObject)(e) || !(0, SVa.isPlainObject)(t)) return !1;
    return !0;
  }
});