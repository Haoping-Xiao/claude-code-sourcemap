// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lPn
// matched 2.1.88 source: src/hooks/renderPlaceholder.ts
// class=modified  jaccard=0.438  score=0.5575  fileCov=0.6714
// note: deminified; 0 identifiers renamed from _t exports
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
  terminalFocus: o = true,
  invert: s = oGe,
  hidePlaceholderText: i = false,
}) {
  let a = void 0;
  if (e) {
    if (i) a = n && r && o ? s(" ") : "";
    else if (((a = wt.dim(e)), n && r && o))
      a = e.length > 0 ? s(e[0]) + wt.dim(e.slice(1)) : s(" ");
  }
  let l = t.length === 0 && Boolean(e);
  return {
    renderedPlaceholder: a,
    showPlaceholder: l,
  };
}
