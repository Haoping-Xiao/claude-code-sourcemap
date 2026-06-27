// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IKl
// matched 2.1.88 source: src/commands/hooks/hooks.tsx
// class=modified  jaccard=0.2683  score=1  fileCov=0.2683
// note: deminified; 1 identifiers renamed from _t exports
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
  ((wKl = R(lt(), 1)), (Psr = R(rt(), 1)), (NP = R(se(), 1)));
});
var xKl = {};
_t(xKl, {
  call: () => call,
});
var kKl,
  call = async (e, t) => {
    G("tengu_hooks_command", {});
    let n = Fr(t),
      r = F$(n).map((o) => o.name);
    return kKl.jsx(CKl, {
      toolNames: r,
      onExit: e,
    });
  };
