// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lJ
// matched 2.1.88 source: src/components/diff/DiffFileList.tsx
// class=modified  jaccard=0.2505  score=1  fileCov=0.2505
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var lJ = E(() => {
  si();
  Ye();
  ((exa = R(lt(), 1)), (gqe = R(se(), 1)));
});
function d5(e) {
  let t = txa.c(10),
    { added: n, removed: r, bold: o } = e;
  if (n === 0 && r === 0) return null;
  let s;
  if (t[0] !== n || t[1] !== o)
    ((s =
      n > 0 &&
      iFn.jsxs(w, {
        color: "diffAddedWord",
        bold: o,
        children: ["+", n],
      })),
      (t[0] = n),
      (t[1] = o),
      (t[2] = s));
  else s = t[2];
  let i = n > 0 && r > 0 && " ",
    a;
  if (t[3] !== o || t[4] !== r)
    ((a =
      r > 0 &&
      iFn.jsxs(w, {
        color: "diffRemovedWord",
        bold: o,
        children: ["-", r],
      })),
      (t[3] = o),
      (t[4] = r),
      (t[5] = a));
  else a = t[5];
  let l;
  if (t[6] !== s || t[7] !== i || t[8] !== a)
    ((l = iFn.jsxs(w, {
      children: [s, i, a],
    })),
      (t[6] = s),
      (t[7] = i),
      (t[8] = a),
      (t[9] = l));
  else l = t[9];
  return l;
}
var txa, iFn;
