// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X8n
// matched 2.1.88 source: src/ink/styles.ts
// class=new  jaccard=0.0481  score=0.7082  fileCov=0.0491
// note: nearest: src/ink/styles.ts (0.0481); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module X8n] deps: Rm, At
$el = require("fs/promises");
function Q4(e) {
  let t = Bel.c(6),
    {
      children: n,
      paddingX: r,
      marginTop: o,
      marginBottom: s
    } = e,
    i = r === void 0 ? 1 : r,
    l = Sd() ? void 0 : "dashed",
    c;
  if (t[0] !== n || t[1] !== s || t[2] !== o || t[3] !== i || t[4] !== l) c = Uel.jsx(U, {
    borderStyle: l,
    borderColor: "subtle",
    borderLeft: false,
    borderRight: false,
    flexDirection: "column",
    overflow: "hidden",
    paddingX: i,
    marginTop: o,
    marginBottom: s,
    children: n
  }), t[0] = n, t[1] = s, t[2] = o, t[3] = i, t[4] = l, t[5] = c;else c = t[5];
  return c;
}
var Bel, Uel;