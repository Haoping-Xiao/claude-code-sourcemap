// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LW
// matched 2.1.88 source: src/ink/components/Box.tsx
// class=partial  jaccard=0.0686  score=0.8375  fileCov=0.0696
// note: low-confidence suggestion: src/ink/components/Box.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module LW] deps: @xmldom/xmldom/lib/entities.js, components/design-system/Ratchet.tsx, marked/lib/marked.esm.js, hooks/useTerminalSize.ts
Rzi = R(lt(), 1), Qce = R(se(), 1);
function Fu(e) {
  let t = Lzi.c(9),
    {
      children: n,
      color: r
    } = e;
  if (YE()) {
    let a;
    if (t[0] !== n) a = olt.jsx(U, {
      flexDirection: "column",
      paddingX: FGe,
      flexShrink: 0,
      children: n
    }), t[0] = n, t[1] = a;else a = t[1];
    return a;
  }
  let o;
  if (t[2] !== r) o = olt.jsx(qh, {
    color: r
  }), t[2] = r, t[3] = o;else o = t[3];
  let s;
  if (t[4] !== n) s = olt.jsx(U, {
    flexDirection: "column",
    paddingX: mbe,
    children: n
  }), t[4] = n, t[5] = s;else s = t[5];
  let i;
  if (t[6] !== o || t[7] !== s) i = olt.jsxs(U, {
    flexDirection: "column",
    paddingTop: 1,
    children: [o, s]
  }), t[6] = o, t[7] = s, t[8] = i;else i = t[8];
  return i;
}
var Lzi,
  olt,
  mbe = 2,
  FGe = 1,
  gbe = 2;