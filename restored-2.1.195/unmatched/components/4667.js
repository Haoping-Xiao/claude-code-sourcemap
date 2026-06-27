// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c1l
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0085  score=0.4254  fileCov=0.0086
// note: nearest: src/components/Settings/Config.tsx (0.0085); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var c1l = E(() => {
  $7t();
  Ye();
  O7t = R(se(), 1), i1l = {
    vim: "Editor mode",
    "output-style": "Output style"
  };
});
function u1l(e, t) {
  return {
    type: "local-jsx",
    name: e,
    description: `${t} moved to /config`,
    isHidden: !0,
    isEnabled: () => kOe(),
    load: () => Promise.resolve().then(() => (c1l(), l1l))
  };
}
var d1l, p1l;