// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kxl
// matched 2.1.88 source: src/query/config.ts
// class=modified  jaccard=0.4528  score=1  fileCov=0.4528
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kxl] deps: ft, Lze, kne, Uh, dn, kt, Du, yC, ii, i$, Vv, bPo, je, At, pQ, sp, co, tA, bk, Mp, ft, GF, ag, PPo, Yqe, Ld, Il, fn, q0
((Gvf = (VKt(), ro(NQn))),
  (XPo = (KQn(), ro(zQn))),
  (rYt = (gjn(), ro(rgo))),
  (vxl = (l3(), ro(CQ))),
  (Bze = (f4(), ro(URe))));
function Dxl() {
  return {
    sessionId: Rt(),
    gates: {
      emitToolUseSummaries: ut(process.env.CLAUDE_CODE_EMIT_TOOL_USE_SUMMARIES),
      isAnt: false,
      fastModeEnabled: !ut(process.env.CLAUDE_CODE_DISABLE_FAST_MODE),
    },
  };
}
