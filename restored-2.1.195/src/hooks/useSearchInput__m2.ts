// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dse
// matched 2.1.88 source: src/hooks/useSearchInput.ts
// class=modified (alt of src/hooks/useSearchInput.ts)  jaccard=0.2776  score=0.5507  fileCov=0.3589
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var dse = E(() => {
  NOe();
  FDn();
  MGe();
  _i();
  P1o();
  use = R(rt(), 1);
  xLf = new Set([
    "pageup",
    "pagedown",
    "insert",
    "wheelup",
    "wheeldown",
    "mouse",
    "clear",
    "enter",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12",
  ]);
});
function $1o(e) {
  return kLf.has(e);
}
function F$l(e, t) {
  return e === "Advanced"
    ? $1o(t)
      ? "ADVANCED \u2014 MOVING TO SETTINGS.JSON"
      : "ADVANCED"
    : e.toUpperCase();
}
function O1o(e) {
  return RLf.get(e) ?? "Advanced";
}
function G$l(e) {
  return e
    .map((t, n) => ({
      item: t,
      i: n,
    }))
    .sort((t, n) => {
      let r = (N$l.get(t.item.id) ?? B$l) - (N$l.get(n.item.id) ?? B$l);
      return r !== 0 ? r : t.i - n.i;
    })
    .map(({ item: t }) => t);
}
var M1o, U$l, Rtr, kLf, j$l, RLf, N$l, B$l;
