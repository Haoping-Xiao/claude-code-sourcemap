// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iKe
// matched 2.1.88 source: src/services/analytics/metadata.ts
// class=new  jaccard=0.0458  score=0.201  fileCov=0.056
// note: nearest: src/services/analytics/metadata.ts (0.0458); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iKe = E(() => {
  ft();
  FQn();
  iKn();
  vX();
  es();
  sr();
  g0();
  DOo = {
    local_agent: "subagent",
    local_workflow: "workflow",
    local_bash: "shell",
    monitor_mcp: "monitor",
    monitor_ws: "monitor",
    mcp_task: "MCP task",
    in_process_teammate: "teammate",
    dream: "dream",
    remote_agent: "cloud session"
  };
});
function u7t(e) {
  let t = typeof e === "string" ? Buffer.from(e, "utf8") : e,
    n = Buffer.allocUnsafe(aKe + t.length);
  return n.writeUInt32BE(t.length, 0), n.writeUInt8(lKe, 4), t.copy(n, aKe), n;
}
function UL(e) {
  let t = Buffer.from(De(e), "utf8"),
    n = Buffer.allocUnsafe(aKe + t.length);
  return n.writeUInt32BE(t.length, 0), n.writeUInt8(l7t, 4), t.copy(n, aKe), n;
}
function Yer(e, t) {
  let n = Buffer.alloc(0),
    r = false;
  return o => {
    if (r) return;
    n = n.length === 0 ? o : Buffer.concat([n, o]);
    while (n.length >= aKe) {
      let s = n.readUInt32BE(0);
      if (s > ZSt) {
        r = true, t(`frame too large (${s} > ${ZSt})`);
        return;
      }
      let i = aKe + s;
      if (n.length < i) return;
      let a = n.readUInt8(4),
        l = n.subarray(aKe, i);
      if (n = n.subarray(i), a === lKe) e({
        kind: lKe,
        payload: Buffer.from(l)
      });else if (a === l7t) {
        let c;
        try {
          c = Ft(l.toString("utf8"));
        } catch {
          r = true, t("bad ctrl json");
          return;
        }
        e({
          kind: l7t,
          ctrl: c
        });
      } else {
        r = true, t(`unknown frame kind ${a}`);
        return;
      }
    }
  };
}
var lKe = 0,
  l7t = 1,
  c7t = 262144,
  aKe = 5,
  ZSt = 1048576,
  xfe = 10000 /* 1e4 */;