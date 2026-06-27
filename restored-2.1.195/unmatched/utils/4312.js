// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N0o
// matched 2.1.88 source: src/tools/AgentTool/AgentTool.tsx
// class=new  jaccard=0.0067  score=0.5572  fileCov=0.0067
// note: nearest: src/tools/AgentTool/AgentTool.tsx (0.0067); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var N0o = E(() => {
  oo();
  f6();
  wr();
  k0();
  _m();
  Mp();
  Sj();
  lf();
  lC();
  fh();
  qRe();
  O0o();
});
function Off() {
  if (ut(process.env.CLAUDE_AUTO_BACKGROUND_TASKS)) return 120000;
  return 0;
}
function Whl(e, t, {
  toolPermissionContext: n
}) {
  if (!DX() || e.some(o => cbt(o.agentType) === PX) || !(t?.includes(PX) ?? true)) return {
    available: false,
    denyRule: null
  };
  let r = $6e(n, ss, PX);
  return {
    available: r === null,
    denyRule: r
  };
}
var qhl,
  j6e,
  B0o,
  H$e,
  $ff = 2000,
  ozt,
  Nff,
  Bff,
  EIo,
  Uff,
  P7n;