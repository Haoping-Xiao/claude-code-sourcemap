// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lbc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lbc = E(() => {
  zj();
});
function cbc({
  input: e,
  pastedContents: t,
  onInputChange: n,
  setCursorOffset: r,
  setPastedContents: o
}) {
  let [s, i] = Uen.useState(!1);
  Uen.useEffect(() => {
    if (s) return;
    if (e.length <= 1e4) return;
    let {
      newInput: a,
      newPastedContents: l
    } = abc(e, t);
    n(a), r(a.length), o(l), i(!0);
  }, [e, s, t, n, o, r]), Uen.useEffect(() => {
    if (e === "") i(!1);
  }, [e]);
}
var Uen;