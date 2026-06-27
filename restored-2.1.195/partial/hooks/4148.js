// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _al
// matched 2.1.88 source: src/utils/ghPrStatus.ts
// class=partial  jaccard=0.1522  score=0.476  fileCov=0.1829
// note: low-confidence suggestion: src/utils/ghPrStatus.ts; dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _al] deps: Ye
r_t = R(rt(), 1);
function Sal(e, t) {
  if (!e || !t) return null;
  let n = e.kind === "cr" && false;
  return {
    prefix: "PR",
    label: `#${e.number}`,
    url: t,
    dedupUrl: e.url,
    color: Csf(e.reviewState)
  };
}
function Csf(e) {
  switch (e) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
function cIo(e, t, n) {
  return;
}
function Eal(e, t, n) {
  bal.useEffect(() => {
    if (t === void 0) return;
    cIo(e, t, n === "cr");
  }, [e, t, n]);
}
var bal,
  wsf = false,
  lIo = "current-pr";