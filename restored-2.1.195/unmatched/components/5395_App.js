// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y8o
// matched 2.1.88 source: src/interactiveHelpers.tsx
// class=new  jaccard=0.0202  score=0.4605  fileCov=0.0207
// note: nearest: src/interactiveHelpers.tsx (0.0202); dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: App
// [unwrapped __esm module y8o] deps: utils/config.ts
smc = R(lt(), 1), ten = R(rt(), 1), amc = R(se(), 1);
Ecm = ten.createContext(null);
function App(e) {
  let t = lmc.c(11),
    {
      getFpsMetrics: n,
      stats: r,
      initialState: o,
      children: s
    } = e,
    i;
  if (t[0] !== s) i = gNe.jsx(zLn, {
    children: gNe.jsx(azl, {
      children: gNe.jsx(O8i, {
        children: gNe.jsx(D1l, {
          children: s
        })
      })
    })
  }), t[0] = s, t[1] = i;else i = t[1];
  let a;
  if (t[2] !== o || t[3] !== i) a = gNe.jsx(AH, {
    initialState: o,
    onChangeAppState: DTe,
    children: i
  }), t[2] = o, t[3] = i, t[4] = a;else a = t[4];
  let l;
  if (t[5] !== r || t[6] !== a) l = gNe.jsx(imc, {
    store: r,
    children: a
  }), t[5] = r, t[6] = a, t[7] = l;else l = t[7];
  let c;
  if (t[8] !== n || t[9] !== l) c = gNe.jsx(tmc, {
    getFpsMetrics: n,
    children: l
  }), t[8] = n, t[9] = l, t[10] = c;else c = t[10];
  return c;
}
var lmc, gNe;