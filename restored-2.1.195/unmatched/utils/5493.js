// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lbc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0047  score=0.8462  fileCov=0.0047
// note: nearest: src/screens/REPL.tsx (0.0047); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function cbc({
  input: e,
  pastedContents: t,
  onInputChange: n,
  setCursorOffset: r,
  setPastedContents: o
}) {
  let [s, i] = Uen.useState(false);
  Uen.useEffect(() => {
    if (s) return;
    if (e.length <= 10000 /* 1e4 */) return;
    let {
      newInput: a,
      newPastedContents: l
    } = abc(e, t);
    n(a), r(a.length), o(l), i(true);
  }, [e, s, t, n, o, r]), Uen.useEffect(() => {
    if (e === "") i(false);
  }, [e]);
}
var Uen;