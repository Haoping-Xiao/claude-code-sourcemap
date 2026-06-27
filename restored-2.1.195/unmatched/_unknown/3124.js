// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jSa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jSa = Q((A3y, FSa) => {
  var CBn = Aco();
  function F_p() {
    let e = {},
      t = Object.keys(CBn);
    for (let n = t.length, r = 0; r < n; r++) e[t[r]] = {
      distance: -1,
      parent: null
    };
    return e;
  }
  function j_p(e) {
    let t = F_p(),
      n = [e];
    t[e].distance = 0;
    while (n.length) {
      let r = n.pop(),
        o = Object.keys(CBn[r]);
      for (let s = o.length, i = 0; i < s; i++) {
        let a = o[i],
          l = t[a];
        if (l.distance === -1) l.distance = t[r].distance + 1, l.parent = r, n.unshift(a);
      }
    }
    return t;
  }
  function G_p(e, t) {
    return function (n) {
      return t(e(n));
    };
  }
  function W_p(e, t) {
    let n = [t[e].parent, e],
      r = CBn[t[e].parent][e],
      o = t[e].parent;
    while (t[o].parent) n.unshift(t[o].parent), r = G_p(CBn[t[o].parent][o], r), o = t[o].parent;
    return r.conversion = n, r;
  }
  FSa.exports = function (e) {
    let t = j_p(e),
      n = {},
      r = Object.keys(t);
    for (let o = r.length, s = 0; s < o; s++) {
      let i = r[s];
      if (t[i].parent === null) continue;
      n[i] = W_p(i, t);
    }
    return n;
  };
});