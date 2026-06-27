// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yir
// matched 2.1.88 source: src/bridge/bridgeMain.ts
// class=modified (alt of src/bridge/bridgeMain.ts)  jaccard=0.04  score=0.6832  fileCov=0.0407
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Yir] deps: dn, utils/debug.ts, bridge/bridgeApi.ts, utils/debug.ts, utils/git/gitConfigParser.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/profilerBase.ts, utils/sequential.ts, services/mcp/config.ts, utils/log.ts, tools/SkillTool/prompt.ts, services/teamMemorySync/secretScanner.ts, proxy-from-env/index.js, utils/words.ts, constants/prompts.ts, bridge/bridgeUI.ts, tools/BriefTool/upload.ts, utils/config.ts, utils/swarm/constants.ts, bridge/capacityWake.ts, bridge/debugUtils.ts, bridge/trustedDevice.ts, utils/billing.ts, bridge/pollConfig.ts, bridge/sessionRunner.ts, bridge/workSecret.ts, components/Feedback.tsx, bridge/bridgePointer.ts
((oQt = require("crypto")),
  (fGo = require("os")),
  (G1e = require("path")),
  (JYf = {
    connInitialMs: 2000,
    connCapMs: 120000,
    connGiveUpMs: 600000,
    generalInitialMs: 500,
    generalCapMs: 30000,
    generalGiveUpMs: 600000,
  }));
e7f = new Set(["ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "ENETUNREACH", "EHOSTUNREACH"]);
t7f = ["session", "same-dir", "worktree"];
CYe = class CYe extends Error {
  constructor(e) {
    super(e);
    this.name = "BridgeHeadlessPermanentError";
  }
};
async function Xir(e, t) {
  return yl("daemon_rc_add", async () => {
    let n = "added";
    return (
      await dHt((r) => {
        let o = H3o(r.remoteControl),
          s = o.findIndex((i) => i.dir === e.dir);
        if (s >= 0) {
          let i = cv(e, (a) => a !== void 0);
          ((o[s] = {
            ...o[s],
            ...i,
          }),
            (n = "updated"));
        } else (o.push(e), (n = "added"));
        r.remoteControl = o;
      }, t),
      n
    );
  });
}
async function Jir(e, t) {
  return yl("daemon_rc_remove", async () => {
    await dHt((n) => {
      let r = H3o(n.remoteControl),
        o = r.filter((s) => s.dir !== e);
      if (o.length === r.length) return false;
      if (o.length === 0) delete n.remoteControl;
      else n.remoteControl = o;
    }, t);
  });
}
var gGo,
  Ctc = async (e, t, n, r) => {
    let o = gGo().parse(e),
      { initializeErrorLogSink: s } = await Promise.resolve().then(() => (VJt(), kir)),
      { initializeAnalyticsSink: i } = await Promise.resolve().then(() => (ZSe(), dpt));
    (s(), i());
    let a = () => afe() ?? r.getAccessToken();
    if (!a()) (n(Myt), process.exit(1));
    let { runBridgeHeadless: l, BridgeHeadlessPermanentError: c } = await Promise.resolve().then(
      () => (Yir(), Kir),
    );
    try {
      await l(
        {
          dir: o.dir,
          name: o.name,
          spawnMode: o.spawnMode,
          capacity: o.capacity,
          permissionMode: o.permissionMode,
          sandbox: o.sandbox,
          createSessionOnStart: o.createSessionOnStart,
          getAccessToken: a,
          onAuth401: r.reportAuth401,
          log: n,
        },
        t,
      );
    } catch (u) {
      if (u instanceof c) (n(u.message), process.exit(Zjn));
      throw u;
    }
  };
