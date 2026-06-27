// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lPn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lPn = E(() => {
  Pne();
  nbe();
  tUt();
  ZS();
  uo();
  Mne();
});
function p6i({
  placeholder: e,
  value: t,
  showCursor: n,
  focus: r,
  terminalFocus: o = !0,
  invert: s = oGe,
  hidePlaceholderText: i = !1
}) {
  let a = void 0;
  if (e) {
    if (i) a = n && r && o ? s(" ") : "";else if (a = wt.dim(e), n && r && o) a = e.length > 0 ? s(e[0]) + wt.dim(e.slice(1)) : s(" ");
  }
  let l = t.length === 0 && Boolean(e);
  return {
    renderedPlaceholder: a,
    showPlaceholder: l
  };
}