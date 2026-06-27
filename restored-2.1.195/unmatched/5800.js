// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pOc
// matched 2.1.88 source: src/utils/swarm/spawnUtils.ts
// class=new  jaccard=0.025  score=0.4206  fileCov=0.0258
// note: nearest: src/utils/swarm/spawnUtils.ts (0.025); 0 renamed
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