// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IKl
// matched 2.1.88 source: src/components/hooks/HooksConfigMenu.tsx
// class=new  jaccard=0.0278  score=0.5922  fileCov=0.0283
// note: nearest: src/components/hooks/HooksConfigMenu.tsx (0.0278); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var IKl = E(() => {
  uo();
  S4n();
  Ye();
  ps();
  fn();
  fKl();
  QFo();
  dr();
  sr();
  vi();
  Ko();
  hKl();
  bKl();
  AKl();
  vKl();
  wKl = R(lt(), 1), Psr = R(rt(), 1), NP = R(se(), 1);
});
var xKl = {};
_t(xKl, {
  call: () => call
});
var kKl,
  call = async (e, t) => {
    G("tengu_hooks_command", {});
    let n = Fr(t),
      r = F$(n).map(o => o.name);
    return kKl.jsx(CKl, {
      toolNames: r,
      onExit: e
    });
  };