// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mql
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.0219  score=0.8458  fileCov=0.022
// note: nearest: node_modules/react/cjs/react.production.js (0.0219); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Mql] deps: vWt
Hh = R(rt(), 1), x3f = Math.round(Dql * 1.5);
function g2o(e) {
  let t = Por.c(6),
    {
      children: n
    } = e,
    [r, o] = n2.useState(null),
    [s, i] = n2.useState(null),
    a;
  if (t[0] !== n || t[1] !== s) a = nJt.jsx(Nql.Provider, {
    value: s,
    children: n
  }), t[0] = n, t[1] = s, t[2] = a;else a = t[2];
  let l;
  if (t[3] !== r || t[4] !== a) l = nJt.jsx(Oql.Provider, {
    value: o,
    children: nJt.jsx(Bql.Provider, {
      value: i,
      children: nJt.jsx($ql.Provider, {
        value: r,
        children: a
      })
    })
  }), t[3] = r, t[4] = a, t[5] = l;else l = t[5];
  return l;
}
function Uql() {
  return n2.useContext($ql);
}
function Fql() {
  return n2.useContext(Nql);
}
function jql(e) {
  let t = Por.c(4),
    n = n2.useContext(Oql),
    r,
    o;
  if (t[0] !== e || t[1] !== n) r = () => {
    if (!n) return;
    return n(e), () => n(null);
  }, o = [n, e], t[0] = e, t[1] = n, t[2] = r, t[3] = o;else r = t[2], o = t[3];
  n2.useEffect(r, o);
}
function Gql(e) {
  let t = Por.c(4),
    n = n2.useContext(Bql),
    r,
    o;
  if (t[0] !== e || t[1] !== n) r = () => {
    if (!n) return;
    return n(e), () => n(null);
  }, o = [n, e], t[0] = e, t[1] = n, t[2] = r, t[3] = o;else r = t[2], o = t[3];
  n2.useEffect(r, o);
}
var Por, n2, nJt, $ql, Oql, Nql, Bql;