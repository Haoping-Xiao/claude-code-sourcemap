// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d7l
// matched 2.1.88 source: src/components/wizard/WizardProvider.tsx
// class=modified (alt of src/components/wizard/WizardProvider.tsx)  jaccard=0.1708  score=0.497  fileCov=0.2065
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module d7l] deps: Ye, ps, Cc, Bs, f_, Ko, Mg, wb, vH, d4o
((c7l = R(lt(), 1)), (qsr = R(rt(), 1)), (wz = R(se(), 1)));
function f7l(e) {
  let t = p7l.c(17),
    { tools: n, existingAgents: r, onComplete: o, onCancel: s } = e,
    i;
  if (t[0] !== r)
    ((i = () =>
      wJt.jsx(u7l, {
        existingAgents: r,
      })),
      (t[0] = r),
      (t[1] = i));
  else i = t[1];
  let a;
  if (t[2] !== n)
    ((a = () =>
      wJt.jsx(a7l, {
        tools: n,
      })),
      (t[2] = n),
      (t[3] = a));
  else a = t[3];
  let l;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) ((l = lu() ? [YYl] : []), (t[4] = l));
  else l = t[4];
  let c;
  if (t[5] !== r || t[6] !== o || t[7] !== n)
    ((c = () =>
      wJt.jsx(PYl, {
        tools: n,
        existingAgents: r,
        onComplete: o,
      })),
      (t[5] = r),
      (t[6] = o),
      (t[7] = n),
      (t[8] = c));
  else c = t[8];
  let u;
  if (t[9] !== i || t[10] !== a || t[11] !== c)
    ((u = [VYl, QYl, GYl, i, o7l, NYl, a, t7l, IYl, ...l, c]),
      (t[9] = i),
      (t[10] = a),
      (t[11] = c),
      (t[12] = u));
  else u = t[12];
  let d = u,
    p;
  if (t[13] === Symbol.for("react.memo_cache_sentinel")) ((p = {}), (t[13] = p));
  else p = t[13];
  let f;
  if (t[14] !== s || t[15] !== d)
    ((f = wJt.jsx(U9e, {
      steps: d,
      initialData: p,
      onComplete: r9f,
      onCancel: s,
      title: "Create new agent",
      showStepCounter: false,
    })),
      (t[14] = s),
      (t[15] = d),
      (t[16] = f));
  else f = t[16];
  return f;
}
function r9f() {}
var p7l, wJt;
