// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z3o
// matched 2.1.88 source: src/hooks/useReplBridge.tsx
// class=modified (alt of src/hooks/useReplBridge.tsx)  jaccard=0.0056  score=0.1038  fileCov=0.0059
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Z3o] deps: utils/authFileDescriptor.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/fsOperations.ts
((Qec = require("crypto")), (Q3o = require("path")));
var ttc = "remote-control-repl",
  ntc = "remote-control-cli",
  rtc = "remote-control-sdk",
  Fir = "remote-control-auto",
  useReplBridge = "ccr-mirror";
function yHt() {
  let { namespace: e, cluster: t } = Urs();
  return {
    ...(e && {
      cooNamespace: e,
    }),
    ...(t && {
      cooCluster: t,
    }),
  };
}
