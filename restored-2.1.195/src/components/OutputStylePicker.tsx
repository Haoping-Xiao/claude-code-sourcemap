// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GMl
// matched 2.1.88 source: src/components/OutputStylePicker.tsx
// class=modified  jaccard=0.2442  score=0.3435  fileCov=0.458
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var GMl = E(() => {
  Ye();
  mE();
  vi();
  ((FMl = R(lt(), 1)), (cEt = R(se(), 1)));
});
function WMl(e) {
  return Object.entries(e).map(([t, n]) => ({
    label: n?.name ?? eLf,
    value: t,
    description: n?.description ?? tLf,
  }));
}
function VMl(e) {
  let t = qMl.c(26),
    { initialStyle: n, onComplete: r, onCancel: o, isStandaloneCommand: s } = e,
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((i = []), (t[0] = i));
  else i = t[0];
  let [a, l] = I7t.useState(i),
    [c, u] = I7t.useState(true),
    d,
    p;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((d = () => {
      uEt($t())
        .then((x) => {
          let I = WMl(x);
          (l(I), u(false));
        })
        .catch(() => {
          let x = WMl(yJ);
          (l(x), u(false));
        });
    }),
      (p = []),
      (t[1] = d),
      (t[2] = p));
  else ((d = t[1]), (p = t[2]));
  I7t.useEffect(d, p);
  let f;
  if (t[3] !== r)
    ((f = (x) => {
      r(x);
    }),
      (t[3] = r),
      (t[4] = f));
  else f = t[4];
  let m = f,
    g;
  if (t[5] !== n || t[6] !== c || t[7] !== a)
    ((g = !c && lc("outputStyles") && !a.some((x) => x.value === n)),
      (t[5] = n),
      (t[6] = c),
      (t[7] = a),
      (t[8] = g));
  else g = t[8];
  let h = g,
    y = !s,
    b = !s,
    _;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = AHe.jsx(U, {
      marginTop: 1,
      children: AHe.jsx(w, {
        dimColor: true,
        children: "This changes how Claude Code communicates with you",
      }),
    })),
      (t[9] = _));
  else _ = t[9];
  let S;
  if (t[10] !== n || t[11] !== h)
    ((S =
      h &&
      AHe.jsx(w, {
        dimColor: true,
        children: `Your saved output style "${n}" is a custom style disabled in safe mode \u2014 ${qH()} to use it; selecting a style here replaces it`,
      })),
      (t[10] = n),
      (t[11] = h),
      (t[12] = S));
  else S = t[12];
  let A;
  if (t[13] !== m || t[14] !== n || t[15] !== c || t[16] !== a)
    ((A = c
      ? AHe.jsx(w, {
          dimColor: true,
          children: "Loading output styles\u2026",
        })
      : AHe.jsx(Sr, {
          options: a,
          onChange: m,
          visibleOptionCount: 10,
          defaultValue: n,
        })),
      (t[13] = m),
      (t[14] = n),
      (t[15] = c),
      (t[16] = a),
      (t[17] = A));
  else A = t[17];
  let v;
  if (t[18] !== A || t[19] !== S)
    ((v = AHe.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [_, S, A],
    })),
      (t[18] = A),
      (t[19] = S),
      (t[20] = v));
  else v = t[20];
  let C;
  if (t[21] !== o || t[22] !== v || t[23] !== y || t[24] !== b)
    ((C = AHe.jsx(zn, {
      title: "Preferred output style",
      onCancel: o,
      hideInputGuide: y,
      hideBorder: b,
      children: v,
    })),
      (t[21] = o),
      (t[22] = v),
      (t[23] = y),
      (t[24] = b),
      (t[25] = C));
  else C = t[25];
  return C;
}
var qMl,
  I7t,
  AHe,
  eLf = "Default",
  tLf = "Claude completes coding tasks efficiently and provides concise responses";
