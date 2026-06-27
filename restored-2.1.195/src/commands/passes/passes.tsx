// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yzl
// matched 2.1.88 source: src/commands/passes/passes.tsx
// class=modified  jaccard=0.3612  score=0.8918  fileCov=0.3777
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module Yzl] deps: Xa, O0, jh, Ye, ps, kt, ZKe, je, vn, Bs, Ko, eE
((zzl = R(lt(), 1)), (lme = R(rt(), 1)), (bf = R(se(), 1)));
async function call(onDone) {
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
      onDone: onDone,
    })
  );
}
var Jzl;
