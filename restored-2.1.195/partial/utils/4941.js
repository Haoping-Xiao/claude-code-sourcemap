// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M2o
// matched 2.1.88 source: node_modules/@opentelemetry/resources/build/src/detectors/platform/node/utils.js
// class=partial  jaccard=0.1871  score=0.3338  fileCov=0.2986
// note: low-confidence suggestion: node_modules/@opentelemetry/resources/build/src/detectors/platform/node/utils.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var M2o = E(() => {
  MAe();
  jDe();
  $pe();
  gAe();
  og();
  CAt();
  je();
  ik();
  P2o();
  vn();
  bm();
  co();
  Ao();
  Hu();
  Gy();
  _a();
  Jt();
  IAt();
  Gor();
  Wor = require("path"), NGf = [L$, Vg];
});
function $2o() {
  return Vt() === "windows" ? ";" : "&&";
}
function Vor(e, t, n) {
  let r = yr();
  if (!t || !e.projectPath || e.projectPath === r) return {
    isCrossProject: !1
  };
  if (n.some(a => e.projectPath === a || e.projectPath.startsWith(a + BVl.sep))) return {
    isCrossProject: !0,
    isSameRepoWorktree: !0,
    projectPath: e.projectPath
  };
  let s = qg(e);
  return {
    isCrossProject: !0,
    isSameRepoWorktree: !1,
    command: `cd ${ja([e.projectPath])} ${$2o()} claude --resume ${s}`,
    projectPath: e.projectPath
  };
}
var BVl;