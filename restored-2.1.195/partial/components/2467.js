// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WLn
// matched 2.1.88 source: src/components/MessageResponse.tsx
// class=partial  jaccard=0.215  score=0.3079  fileCov=0.4162
// note: low-confidence suggestion: src/components/MessageResponse.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WLn = E(() => {
  _i();
  eUt();
  Ye();
  Y5i = R(lt(), 1), HGe = R(rt(), 1), WJr = R(se(), 1);
});
function qn(e) {
  let t = qJr.c(11),
    {
      children: n,
      height: r,
      screenReaderLabel: o
    } = e;
  if (VJr.useContext(zJr)) return n;
  let i = o === void 0,
    a;
  if (t[0] !== o || t[1] !== i) a = tbe.jsx(wI, {
    fromLeftEdge: true,
    flexShrink: 0,
    children: tbe.jsxs(w, {
      "aria-hidden": i,
      "aria-label": o,
      dimColor: true,
      children: ["  ", "\u23BF \xA0"]
    })
  }), t[0] = o, t[1] = i, t[2] = a;else a = t[2];
  let l;
  if (t[3] !== n) l = tbe.jsx(U, {
    flexShrink: 1,
    flexGrow: 1,
    children: n
  }), t[3] = n, t[4] = l;else l = t[4];
  let c;
  if (t[5] !== r || t[6] !== a || t[7] !== l) c = tbe.jsx(zWd, {
    children: tbe.jsxs(U, {
      flexDirection: "row",
      height: r,
      overflowY: "hidden",
      children: [a, l]
    })
  }), t[5] = r, t[6] = a, t[7] = l, t[8] = c;else c = t[8];
  let u = c;
  if (r !== void 0) return u;
  let d;
  if (t[9] !== u) d = tbe.jsx(Eat, {
    lock: "offscreen",
    children: u
  }), t[9] = u, t[10] = d;else d = t[10];
  return d;
}
function J5i() {
  return VJr.useContext(zJr);
}
function zWd(e) {
  let t = qJr.c(2),
    {
      children: n
    } = e,
    r;
  if (t[0] !== n) r = tbe.jsx(zJr.Provider, {
    value: true,
    children: n
  }), t[0] = n, t[1] = r;else r = t[1];
  return r;
}
var qJr, X5i, VJr, tbe, zJr;