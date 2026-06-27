// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VCo
// matched 2.1.88 source: src/components/messages/UserImageMessage.tsx
// class=modified  jaccard=0.1722  score=0.3051  fileCov=0.2832
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VCo] deps: AN, Ye, YI, E8e, R6, WCo, Bzn
((qCo = R(lt(), 1)), (AP = R(se(), 1)));
function UserImageMessage(t0) {
  let t = hil.c(12),
    { imageId: n, addMargin: r } = t0,
    o = dT((f) => (n !== void 0 ? (f.storedImagePaths.get(n) ?? null) : null)) ?? null,
    s = dT((f) => (n !== void 0 ? (f.imageDescriptions.get(n) ?? null) : null)) ?? null,
    i = n ? `[Image #${n}]` : "[Image]",
    a;
  if (t[0] !== o || t[1] !== i)
    ((a =
      o && vI()
        ? CAe.jsx(xs, {
            url: yil.pathToFileURL(o).href,
            children: CAe.jsx(w, {
              children: i,
            }),
          })
        : CAe.jsx(w, {
            children: i,
          })),
      (t[0] = o),
      (t[1] = i),
      (t[2] = a));
  else a = t[2];
  let l = a,
    c;
  if (t[3] !== s)
    ((c = s
      ? CAe.jsxs(w, {
          dimColor: true,
          children: [" ", s],
        })
      : null),
      (t[3] = s),
      (t[4] = c));
  else c = t[4];
  let u;
  if (t[5] !== l || t[6] !== c)
    ((u = CAe.jsxs(w, {
      children: [l, c],
    })),
      (t[5] = l),
      (t[6] = c),
      (t[7] = u));
  else u = t[7];
  let d = u;
  if (r) {
    let f;
    if (t[8] !== d)
      ((f = CAe.jsx(U, {
        marginTop: 1,
        children: d,
      })),
        (t[8] = d),
        (t[9] = f));
    else f = t[9];
    return f;
  }
  let p;
  if (t[10] !== d)
    ((p = CAe.jsx(qn, {
      children: d,
    })),
      (t[10] = d),
      (t[11] = p));
  else p = t[11];
  return p;
}
var hil, yil, CAe;
