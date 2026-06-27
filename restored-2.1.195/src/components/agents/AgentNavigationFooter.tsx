// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fy
// matched 2.1.88 source: src/components/agents/AgentNavigationFooter.tsx
// class=modified  jaccard=0.2851  score=1  fileCov=0.2851
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Fy = E(() => {
  Ye();
  APn();
  Vl();
  ((D1a = R(lt(), 1)), ($ho = R(se(), 1)));
});
function vb(e) {
  let t = P1a.c(2),
    { children: n } = e,
    { pending: r, keyName: o } = ig(),
    s = r ? `Press ${o} again to exit` : n,
    i;
  if (t[0] !== s)
    ((i = M1a.jsx(w, {
      dimColor: true,
      children: s,
    })),
      (t[0] = s),
      (t[1] = i));
  else i = t[1];
  return i;
}
var P1a, M1a;
