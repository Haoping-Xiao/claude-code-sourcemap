// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CXn
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0075  score=0.3211  fileCov=0.0076
// note: nearest: src/cli/print.ts (0.0075); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CXn = E(() => {
  ft();
  MAe();
  dn();
  c8t();
  U1();
  yC();
  jv();
  $S();
  fp();
  og();
  je();
  vn();
  tA();
  y_();
  _a();
  bH();
  xEl = require("crypto"), hyf = {
    agentType: "main-session",
    whenToUse: "Main session query",
    source: "userSettings",
    getSystemPrompt: () => ""
  };
});
async function REl(e, t, n) {
  if (typeof t === "string") {
    if (e === Q5) return {
      kind: "main"
    };
    let s = (Object.values(n.teamContext?.teammates ?? {}).some(i => i.name === e) ? void 0 : n.agentNameRegistry.get(e)) ?? jns(e);
    if (s) {
      let i = n.tasks[s];
      if (El(i) && !Fzt(i)) {
        if (i.status === "running") return {
          kind: "agent-live",
          agentId: s
        };
        if (i.stoppedByUser) return {
          kind: "agent-stopped-by-user"
        };
        return {
          kind: "agent-stopped",
          agentId: s,
          status: i.status
        };
      }
      return {
        kind: "agent-evicted",
        agentId: s
      };
    }
  }
  if (typeof t === "string" || t.type !== "shutdown_response") {
    let r = rp(n.teamContext);
    if (r && e !== Hd) {
      let o = Object.values(n.teamContext?.teammates ?? {}).some(i => i.name === e),
        s = o ? null : await hoe(r);
      if (!o && s && !s.members.some(i => i.name === e)) {
        let i = s.members.map(l => l.name),
          a = Npe(e, i.map(l => ({
            name: l
          })), {
            maxEditDistance: 2
          });
        return {
          kind: "team-unknown",
          teamName: r,
          names: i,
          suggestion: a
        };
      }
    }
  }
  return {
    kind: "mailbox"
  };
}