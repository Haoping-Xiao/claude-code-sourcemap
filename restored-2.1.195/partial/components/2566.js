// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module APn
// matched 2.1.88 source: src/components/ClickableImageRef.tsx
// class=partial  jaccard=0.1738  score=1  fileCov=0.1738
// note: low-confidence suggestion: src/components/ClickableImageRef.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var APn = E(() => {
  tC();
  $Ge();
  Kce();
  Tc();
  Ye();
  PUt();
  sr();
  MUt = R(lt(), 1), WU = R(rt(), 1), qD = R(se(), 1);
});
function ezi(e) {
  let t = Q6i.c(15),
    {
      imageId: n,
      backgroundColor: r,
      isSelected: o
    } = e,
    s = o === void 0 ? !1 : o,
    i = dT(c => c.storedImagePaths.get(n) ?? null) ?? null,
    a = `[Image #${n}]`;
  if (i && vI()) {
    let c;
    if (t[0] !== i) c = Z6i.pathToFileURL(i), t[0] = i, t[1] = c;else c = t[1];
    let u = c.href,
      d,
      p;
    if (t[2] !== r || t[3] !== a || t[4] !== s) d = $Ut.jsx(w, {
      backgroundColor: r,
      inverse: s,
      children: a
    }), p = $Ut.jsx(w, {
      backgroundColor: r,
      inverse: s,
      bold: s,
      children: a
    }), t[2] = r, t[3] = a, t[4] = s, t[5] = d, t[6] = p;else d = t[5], p = t[6];
    let f;
    if (t[7] !== u || t[8] !== d || t[9] !== p) f = $Ut.jsx(xs, {
      url: u,
      fallback: d,
      children: p
    }), t[7] = u, t[8] = d, t[9] = p, t[10] = f;else f = t[10];
    return f;
  }
  let l;
  if (t[11] !== r || t[12] !== a || t[13] !== s) l = $Ut.jsx(w, {
    backgroundColor: r,
    inverse: s,
    children: a
  }), t[11] = r, t[12] = a, t[13] = s, t[14] = l;else l = t[14];
  return l;
}
var Q6i, Z6i, $Ut;