// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YOc
// matched 2.1.88 source: src/components/BridgeDialog.tsx
// class=new  jaccard=0.0282  score=0.5811  fileCov=0.0288
// note: nearest: src/components/BridgeDialog.tsx (0.0282); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function XOc() {
  let e = false;
  if (gn(t => {
    let n = t.replBridgeEnabled;
    if (n === void 0) return t;
    if (t.remoteControlAtStartup !== void 0) return t;
    let r = {
      ...t,
      remoteControlAtStartup: Boolean(n)
    };
    return delete r.replBridgeEnabled, e = true, r;
  }), e) xe("migration_repl_bridge_to_remote_control");
}