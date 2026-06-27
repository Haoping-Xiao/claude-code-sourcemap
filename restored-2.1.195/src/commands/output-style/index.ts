// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c1l
// matched 2.1.88 source: src/commands/output-style/index.ts
// class=modified  jaccard=0.2657  score=0.3855  fileCov=0.461
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module c1l] deps: $7t, Ye
((O7t = R(se(), 1)),
  (i1l = {
    vim: "Editor mode",
    "output-style": "Output style",
  }));
function u1l(e, t) {
  return {
    type: "local-jsx",
    name: e,
    description: `${t} moved to /config`,
    isHidden: true,
    isEnabled: () => kOe(),
    load: () => Promise.resolve().then(() => (c1l(), l1l)),
  };
}
var d1l, p1l;
