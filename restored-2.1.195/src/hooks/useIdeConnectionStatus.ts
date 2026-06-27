// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W_c
// matched 2.1.88 source: src/hooks/useIdeConnectionStatus.ts
// class=modified  jaccard=0.7836  score=1  fileCov=0.7836
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function useIdeConnectionStatus(e) {
  return q_c.useMemo(() => {
    let t = e.find((o) => o.name === "ide");
    if (!t)
      return {
        status: null,
        ideName: null,
      };
    let n = t.config,
      r = n.type === "sse-ide" || n.type === "ws-ide" ? n.ideName : null;
    if (t.type === "connected")
      return {
        status: "connected",
        ideName: r,
      };
    if (t.type === "pending")
      return {
        status: "pending",
        ideName: r,
      };
    return {
      status: "disconnected",
      ideName: r,
    };
  }, [e]);
}
var q_c;
