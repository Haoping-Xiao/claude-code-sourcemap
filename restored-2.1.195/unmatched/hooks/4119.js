// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UCo
// matched 2.1.88 source: src/ink/styles.ts
// class=new  jaccard=0.0183  score=0.412  fileCov=0.0188
// note: nearest: src/ink/styles.ts (0.0183); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module UCo] deps: hooks/useTerminalSize.ts, commands/add-dir/validation.ts
Zsl = R(lt(), 1), iQ = R(se(), 1);
function $zn(e) {
  let t = eil.c(7),
    {
      content: n,
      addMargin: r
    } = e,
    o = r ? 1 : 0,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) s = FMe.jsx(U, {
    minWidth: 2,
    children: FMe.jsx(w, {
      dimColor: true,
      children: zvs
    })
  }), t[0] = s;else s = t[0];
  let i;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) i = FMe.jsxs(w, {
    dimColor: true,
    bold: true,
    children: ["recap:", " "]
  }), t[1] = i;else i = t[1];
  let a;
  if (t[2] !== n) a = FMe.jsxs(w, {
    children: [i, FMe.jsx(w, {
      dimColor: true,
      italic: true,
      children: n
    })]
  }), t[2] = n, t[3] = a;else a = t[3];
  let l;
  if (t[4] !== o || t[5] !== a) l = FMe.jsxs(U, {
    flexDirection: "row",
    marginTop: o,
    width: "100%",
    children: [s, a]
  }), t[4] = o, t[5] = a, t[6] = l;else l = t[6];
  return l;
}
var eil, FMe;