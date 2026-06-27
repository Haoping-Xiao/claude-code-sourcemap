// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gMc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
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