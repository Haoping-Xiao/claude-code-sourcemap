// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sNl
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0018  score=0.3933  fileCov=0.0019
// note: nearest: src/screens/REPL.tsx (0.0018); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sNl = E(() => {
  oNl = {
    type: "local-jsx",
    name: "diff",
    description: "View uncommitted changes and per-turn diffs",
    load: () => Promise.resolve().then(() => (rNl(), tNl))
  };
});
function nx(e) {
  let t = iNl.c(10),
    {
      title: n,
      status: r,
      detail: o
    } = e,
    s;
  if (t[0] !== n) s = _Et.jsx(w, {
    bold: true,
    children: n
  }), t[0] = n, t[1] = s;else s = t[1];
  let i;
  if (t[2] !== r) i = _Et.jsx(Hs, {
    status: r
  }), t[2] = r, t[3] = i;else i = t[3];
  let a;
  if (t[4] !== o) a = o ? _Et.jsxs(w, {
    dimColor: true,
    children: [" \xB7 ", o]
  }) : null, t[4] = o, t[5] = a;else a = t[5];
  let l;
  if (t[6] !== s || t[7] !== i || t[8] !== a) l = _Et.jsxs(w, {
    children: [s, " ", i, a]
  }), t[6] = s, t[7] = i, t[8] = a, t[9] = l;else l = t[9];
  return l;
}
var iNl, _Et;