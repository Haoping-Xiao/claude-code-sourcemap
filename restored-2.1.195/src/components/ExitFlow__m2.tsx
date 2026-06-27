// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sJl
// matched 2.1.88 source: src/components/ExitFlow.tsx
// class=modified (alt of src/components/ExitFlow.tsx)  jaccard=0.2671  score=0.6013  fileCov=0.3246
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sJl] deps: kt, ft, Ye, je, Bi, KI, _$, aR, Vl, vi, EC
((tJl = R(lt(), 1)), (nJl = require("path")), (M1e = R(rt(), 1)), (ume = R(se(), 1)));
function Q8f() {
  return HL(J8f) ?? "Goodbye!";
}
function ExitFlow(t0) {
  let t = iJl.c(11),
    { showWorktree: n, backgroundItems: r, onDone: o, onCancel: s } = t0,
    i;
  if (t[0] !== o)
    ((i = async function (c) {
      (o(c ?? Q8f()), await ki(0, "prompt_input_exit"));
    }),
      (t[0] = o),
      (t[1] = i));
  else i = t[1];
  let a = i;
  if (n) {
    let l;
    if (t[2] !== s || t[3] !== a)
      ((l = L4o.jsx(oJl, {
        onDone: a,
        onCancel: s,
      })),
        (t[2] = s),
        (t[3] = a),
        (t[4] = l));
    else l = t[4];
    return l;
  }
  if (r.length > 0) {
    let l;
    if (t[5] !== a) ((l = () => void a()), (t[5] = a), (t[6] = l));
    else l = t[6];
    let c = s ?? Z8f,
      u;
    if (t[7] !== r || t[8] !== l || t[9] !== c)
      ((u = L4o.jsx(ZXl, {
        items: r,
        onExit: l,
        onCancel: c,
      })),
        (t[7] = r),
        (t[8] = l),
        (t[9] = c),
        (t[10] = u));
    else u = t[10];
    return u;
  }
  return null;
}
function Z8f() {}
var iJl, L4o, J8f;
