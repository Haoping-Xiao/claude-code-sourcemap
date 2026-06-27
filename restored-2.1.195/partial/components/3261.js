// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lJ
// matched 2.1.88 source: src/components/StructuredDiff/Fallback.tsx
// class=partial  jaccard=0.0651  score=0.7602  fileCov=0.0665
// note: low-confidence suggestion: src/components/StructuredDiff/Fallback.tsx; dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lJ] deps: @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts
exa = R(lt(), 1), gqe = R(se(), 1);
function generateWordDiffElements(item) {
  let t = txa.c(10),
    {
      added: n,
      removed: r,
      bold: o
    } = item;
  if (n === 0 && r === 0) return null;
  let s;
  if (t[0] !== n || t[1] !== o) s = n > 0 && iFn.jsxs(w, {
    color: "diffAddedWord",
    bold: o,
    children: ["+", n]
  }), t[0] = n, t[1] = o, t[2] = s;else s = t[2];
  let i = n > 0 && r > 0 && " ",
    a;
  if (t[3] !== o || t[4] !== r) a = r > 0 && iFn.jsxs(w, {
    color: "diffRemovedWord",
    bold: o,
    children: ["-", r]
  }), t[3] = o, t[4] = r, t[5] = a;else a = t[5];
  let l;
  if (t[6] !== s || t[7] !== i || t[8] !== a) l = iFn.jsxs(w, {
    children: [s, i, a]
  }), t[6] = s, t[7] = i, t[8] = a, t[9] = l;else l = t[9];
  return l;
}
var txa, iFn;