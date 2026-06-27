// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gMc
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0022  score=0.4145  fileCov=0.0022
// note: nearest: src/cli/print.ts (0.0022); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gMc = E(() => {
  ft();
  Zf();
  F8();
  ty();
  LL();
  gb();
  je();
  wr();
  Rd();
  vn();
});
async function rve(e) {
  switch (e.kind) {
    case "session-start":
      {
        let t = await z8(e.source, {
            sessionId: e.sessionId,
            agentType: e.agentType,
            model: e.model,
            forceSyncExecution: e.forceSyncExecution
          }),
          n = Aut();
        if (n) n8e(n);
        return t;
      }
    case "setup":
      return Eca(e.trigger, {
        forceSyncExecution: e.forceSyncExecution
      });
  }
}