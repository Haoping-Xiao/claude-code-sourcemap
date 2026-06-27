// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dHo
// matched 2.1.88 source: src/components/wizard/WizardProvider.tsx
// class=modified  jaccard=0.2921  score=0.4775  fileCov=0.4294
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dHo] deps: Ye, aAn, f_, R6
((Z7a = R(lt(), 1)), (E9n = R(rt(), 1)), (KEe = R(se(), 1)), (w7p = /https?:\/\/\S+/));
function U9e(e) {
  let t = eXa.c(38),
    {
      steps: n,
      initialData: r,
      onComplete: o,
      onCancel: s,
      children: i,
      title: a,
      showStepCounter: l,
    } = e,
    c;
  if (t[0] !== r) ((c = r === void 0 ? {} : r), (t[0] = r), (t[1] = c));
  else c = t[1];
  let u = c,
    d = l === void 0 ? true : l,
    [p, f] = YEe.useState(0),
    [m, g] = YEe.useState(u),
    [h, y] = YEe.useState(false),
    b;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((b = []), (t[2] = b));
  else b = t[2];
  let [_, S] = YEe.useState(b);
  ig();
  let A, v;
  if (t[3] !== h || t[4] !== o || t[5] !== m)
    ((A = () => {
      if (h) (S([]), o(m));
    }),
      (v = [h, m, o]),
      (t[3] = h),
      (t[4] = o),
      (t[5] = m),
      (t[6] = A),
      (t[7] = v));
  else ((A = t[6]), (v = t[7]));
  YEe.useEffect(A, v);
  let C;
  if (t[8] !== p || t[9] !== _ || t[10] !== n.length)
    ((C = () => {
      if (p < n.length - 1) {
        if (_.length > 0) S((Y) => [...Y, p]);
        f(k7p);
      } else y(true);
    }),
      (t[8] = p),
      (t[9] = _),
      (t[10] = n.length),
      (t[11] = C));
  else C = t[11];
  let x = C,
    I;
  if (t[12] !== p || t[13] !== _ || t[14] !== s)
    ((I = () => {
      if (_.length > 0) {
        let Y = _.at(-1);
        if (Y !== void 0) (S(x7p), f(Y));
      } else if (p > 0) f(I7p);
      else if (s) s();
    }),
      (t[12] = p),
      (t[13] = _),
      (t[14] = s),
      (t[15] = I));
  else I = t[15];
  let k = I,
    D;
  if (t[16] !== p || t[17] !== n.length)
    ((D = (Y) => {
      if (Y >= 0 && Y < n.length) (S((z) => [...z, p]), f(Y));
    }),
      (t[16] = p),
      (t[17] = n.length),
      (t[18] = D));
  else D = t[18];
  let P = D,
    O;
  if (t[19] !== s)
    ((O = () => {
      if ((S([]), s)) s();
    }),
      (t[19] = s),
      (t[20] = O));
  else O = t[20];
  let L = O,
    M;
  if (t[21] === Symbol.for("react.memo_cache_sentinel"))
    ((M = (Y) => {
      g((z) => ({
        ...z,
        ...Y,
      }));
    }),
      (t[21] = M));
  else M = t[21];
  let N = M,
    B;
  if (
    t[22] !== L ||
    t[23] !== p ||
    t[24] !== k ||
    t[25] !== x ||
    t[26] !== P ||
    t[27] !== d ||
    t[28] !== n.length ||
    t[29] !== a ||
    t[30] !== m
  )
    ((B = {
      currentStepIndex: p,
      totalSteps: n.length,
      wizardData: m,
      setWizardData: g,
      updateWizardData: N,
      goNext: x,
      goBack: k,
      goToStep: P,
      cancel: L,
      title: a,
      showStepCounter: d,
    }),
      (t[22] = L),
      (t[23] = p),
      (t[24] = k),
      (t[25] = x),
      (t[26] = P),
      (t[27] = d),
      (t[28] = n.length),
      (t[29] = a),
      (t[30] = m),
      (t[31] = B));
  else B = t[31];
  let $ = B,
    q = n[p];
  if (!q || h) return null;
  let W;
  if (t[32] !== q || t[33] !== i)
    ((W = i || pHo.jsx(q, {})), (t[32] = q), (t[33] = i), (t[34] = W));
  else W = t[34];
  let V;
  if (t[35] !== $ || t[36] !== W)
    ((V = pHo.jsx(fHo.Provider, {
      value: $,
      children: W,
    })),
      (t[35] = $),
      (t[36] = W),
      (t[37] = V));
  else V = t[37];
  return V;
}
function I7p(e) {
  return e - 1;
}
function x7p(e) {
  return e.slice(0, -1);
}
function k7p(e) {
  return e + 1;
}
var eXa, YEe, pHo, fHo;
