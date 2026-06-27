// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pOc
// matched 2.1.88 source: src/bootstrap/state.ts
// class=new  jaccard=0.0052  score=0.1777  fileCov=0.0054
// note: nearest: src/bootstrap/state.ts (0.0052); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pOc = E(() => {
  _7o();
  S6();
  sve = R(se(), 1);
});
function fOc(e) {
  let {
    effectiveModel: t,
    initialMainLoopModel: n,
    resolvedInitialModel: r,
    rawModelRequest: o,
    restrictedModel: s
  } = M1i({
    cli: {
      model: e.userSpecifiedModel
    },
    env: process.env,
    settings: jo() || {},
    agentFrontmatter: e.agentModel !== void 0 ? {
      model: e.agentModel
    } : void 0
  });
  return py(t), ssn(n), q0e("--model", ["-m"], n), xe("startup_resolve_model"), {
    effectiveModel: t,
    initialMainLoopModel: n,
    resolvedInitialModel: r,
    rawModelRequest: o,
    restrictedModel: s
  };
}