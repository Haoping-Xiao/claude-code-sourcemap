// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yzl
// matched 2.1.88 source: src/commands/passes/passes.tsx
// class=modified  jaccard=0.2314  score=1  fileCov=0.2314
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Yzl = E(() => {
  Xa();
  O0();
  jh();
  Ye();
  ps();
  kt();
  ZKe();
  je();
  vn();
  Bs();
  Ko();
  eE();
  ((zzl = R(lt(), 1)), (lme = R(rt(), 1)), (bf = R(se(), 1)));
});
var Xzl = {};
_t(Xzl, {
  call: () => call,
});
async function call(e) {
  let n = !Dt().hasVisitedPasses;
  if (n) {
    let r = vor();
    gn((o) => ({
      ...o,
      hasVisitedPasses: true,
      passesLastSeenRemaining: r ?? o.passesLastSeenRemaining,
    }));
  }
  return (
    G("tengu_guest_passes_visited", {
      is_first_visit: n,
    }),
    Jzl.jsx(Kzl, {
      onDone: e,
    })
  );
}
var Jzl;
