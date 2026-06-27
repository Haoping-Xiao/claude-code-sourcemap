// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eIo
// matched 2.1.88 source: src/context/QueuedMessageContext.tsx
// class=modified  jaccard=0.3977  score=0.5864  fileCov=0.5528
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eIo] deps: hooks/useTerminalSize.ts, components/AwsAuthStatusBox.tsx, ink/styles.ts
((Bil = R(lt(), 1)), (zzn = R(se(), 1)));
function Wil() {
  return jil.useContext(Gil);
}
function qil(e) {
  let t = Uil.c(10),
    { isFirst: n, useBriefLayout: r, selectionHighlight: o, children: s } = e,
    i = r ? 0 : Yof,
    a = i * 2,
    l;
  if (t[0] !== n || t[1] !== o || t[2] !== a)
    ((l = {
      isQueued: true,
      isFirst: n,
      paddingWidth: a,
      selectionHighlight: o,
    }),
      (t[0] = n),
      (t[1] = o),
      (t[2] = a),
      (t[3] = l));
  else l = t[3];
  let c = l,
    u;
  if (t[4] !== s || t[5] !== i)
    ((u = tIo.jsx(U, {
      paddingX: i,
      children: s,
    })),
      (t[4] = s),
      (t[5] = i),
      (t[6] = u));
  else u = t[6];
  let d;
  if (t[7] !== u || t[8] !== c)
    ((d = tIo.jsx(Gil.Provider, {
      value: c,
      children: u,
    })),
      (t[7] = u),
      (t[8] = c),
      (t[9] = d));
  else d = t[9];
  return d;
}
var Uil,
  Fil,
  jil,
  tIo,
  Gil,
  Yof = 2;
