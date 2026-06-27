// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LNi
// matched 2.1.88 source: src/memdir/memoryTypes.ts
// class=modified (alt of src/memdir/memoryTypes.ts)  jaccard=0.0236  score=0.2536  fileCov=0.0253
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var LNi = E(() => {
  PNt();
});
function DNi(e) {
  if (typeof e !== "string") return;
  return KKr.find((t) => t === e);
}
function XKr() {
  return at("tengu_ochre_finch", !1);
}
function yNd(e) {
  return [
    "## Types of memory",
    "",
    "Save a memory when you learn one of the following \u2014 pick the matching `type:`:",
    "",
    ...e.map((t) => `- **${t}** \u2014 ${hNd[t]}`),
    "",
    `Invoke the \`${YKr}\` skill for scope, body structure and examples once you've decided to save.`,
    "",
  ];
}
function MNt(e, t = KKr) {
  return XKr() ? yNd(t) : e;
}
var KKr,
  YKr = "memory-types",
  hNd,
  $Nt,
  ONt,
  NNt,
  u0n =
    "- Memory records can become stale over time. Use memory as context for what was true at a given point in time. Before answering the user or building assumptions based solely on information in memory records, verify that the memory is still correct and up-to-date by reading the current state of the files or resources. If a recalled memory conflicts with current information, trust what you observe now \u2014 and update or remove the stale memory rather than acting on it.",
  PNi,
  BNt,
  Lke;
