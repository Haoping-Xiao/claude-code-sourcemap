// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z3o
// matched 2.1.88 source: src/hooks/useReplBridge.tsx
// class=new  jaccard=0.0144  score=0.1742  fileCov=0.0155
// note: nearest: src/hooks/useReplBridge.tsx (0.0144); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Z3o = E(() => {
  db();
  fn();
  At();
  Jt();
  Qec = require("crypto"), Q3o = require("path");
});
var ttc = "remote-control-repl",
  ntc = "remote-control-cli",
  rtc = "remote-control-sdk",
  Fir = "remote-control-auto",
  otc = "ccr-mirror";
function yHt() {
  let {
    namespace: e,
    cluster: t
  } = Urs();
  return {
    ...(e && {
      cooNamespace: e
    }),
    ...(t && {
      cooCluster: t
    })
  };
}