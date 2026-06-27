// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Coe
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.0346  score=0.2887  fileCov=0.0378
// note: nearest: node_modules/react/cjs/react.production.js (0.0346); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Coe = E(() => {
  m0e();
  $ol = R(lt(), 1), Ool = R(se(), 1);
});
function azn(e) {
  let t = _8t.c(7),
    {
      connectors: n,
      children: r
    } = e,
    o;
  if (t[0] !== n) o = n.length > 0 && iq.jsx(wI, {
    fromLeftEdge: true,
    flexShrink: 0,
    flexDirection: "row",
    children: n.map(Qnf)
  }), t[0] = n, t[1] = o;else o = t[1];
  let s;
  if (t[2] !== r) s = iq.jsx(U, {
    flexGrow: 1,
    flexShrink: 1,
    children: r
  }), t[2] = r, t[3] = s;else s = t[3];
  let i;
  if (t[4] !== o || t[5] !== s) i = iq.jsxs(U, {
    flexDirection: "row",
    children: [o, s]
  }), t[4] = o, t[5] = s, t[6] = i;else i = t[6];
  return i;
}
function Qnf(e, t) {
  return iq.jsx(U, {
    width: 2,
    children: iq.jsx(w, {
      dimColor: true,
      children: Jnf[e]
    })
  }, t);
}
function Qwo(e, t = true) {
  let n = Ioe.Children.toArray(e);
  return n.map((r, o) => iq.jsx(Jwo.Provider, {
    value: t && o === n.length - 1,
    children: r
  }, o));
}
function Znf(e) {
  let t = _8t.c(10),
    {
      children: n,
      variant: r
    } = e,
    o = r === void 0 ? "outline" : r,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) s = [], t[0] = s;else s = t[0];
  let i;
  if (t[1] !== o) i = {
    variant: o,
    ancestors: s
  }, t[1] = o, t[2] = i;else i = t[2];
  let a;
  if (t[3] !== n) a = Qwo(n), t[3] = n, t[4] = a;else a = t[4];
  let l;
  if (t[5] !== a) l = iq.jsx(U, {
    flexDirection: "column",
    children: a
  }), t[5] = a, t[6] = l;else l = t[6];
  let c;
  if (t[7] !== i || t[8] !== l) c = iq.jsx(Xwo.Provider, {
    value: i,
    children: l
  }), t[7] = i, t[8] = l, t[9] = c;else c = t[9];
  return c;
}
function erf(e) {
  let t = _8t.c(19),
    {
      label: n,
      children: r,
      dimColor: o,
      color: s
    } = e,
    {
      variant: i,
      ancestors: a
    } = Ioe.useContext(Xwo),
    l = Ioe.useContext(Jwo),
    c = i === "outline" ? "last" : l ? "last" : "branch",
    u = i === "outline" ? "space" : l ? "space" : "pipe",
    d = n != null && n !== false,
    p = d ? n : r,
    f;
  if (t[0] !== a || t[1] !== c) f = [...a, c], t[0] = a, t[1] = c, t[2] = f;else f = t[2];
  let m;
  if (t[3] !== s || t[4] !== o || t[5] !== p) m = Ioe.isValidElement(p) ? p : iq.jsx(w, {
    dimColor: o,
    color: s,
    children: p
  }), t[3] = s, t[4] = o, t[5] = p, t[6] = m;else m = t[6];
  let g;
  if (t[7] !== f || t[8] !== m) g = iq.jsx(azn, {
    connectors: f,
    children: m
  }), t[7] = f, t[8] = m, t[9] = g;else g = t[9];
  let h;
  if (t[10] !== a || t[11] !== r || t[12] !== u || t[13] !== d || t[14] !== i) h = d && iq.jsx(Xwo.Provider, {
    value: {
      variant: i,
      ancestors: [...a, u]
    },
    children: Qwo(r)
  }), t[10] = a, t[11] = r, t[12] = u, t[13] = d, t[14] = i, t[15] = h;else h = t[15];
  let y;
  if (t[16] !== g || t[17] !== h) y = iq.jsxs(U, {
    flexDirection: "column",
    children: [g, h]
  }), t[16] = g, t[17] = h, t[18] = y;else y = t[18];
  return y;
}
function trf(e) {
  let t = _8t.c(3),
    {
      children: n
    } = e,
    r = Ioe.useContext(Jwo),
    o;
  if (t[0] !== n || t[1] !== r) o = Qwo(n, r), t[0] = n, t[1] = r, t[2] = o;else o = t[2];
  return o;
}
var _8t, Ioe, iq, Jnf, Xwo, Jwo, hs;