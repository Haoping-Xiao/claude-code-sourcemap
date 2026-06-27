// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M1c
// matched 2.1.88 source: src/tools/shared/spawnMultiAgent.ts
// class=partial  jaccard=0.0696  score=0.5225  fileCov=0.0743
// note: low-confidence suggestion: src/tools/shared/spawnMultiAgent.ts; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: sessionTeamName, initializeSessionTeam, _resetInheritedTeamNameForTesting
// [unwrapped __esm module M1c] deps: dn, utils/debug.ts, @anthropic-ai/bedrock-sdk/client.mjs, utils/fsOperations.ts, utils/telemetry/pluginTelemetry.ts, utils/deepLink/registerProtocol.ts, utils/deepLink/registerProtocol.ts, utils/deepLink/protocolHandler.ts
R1c = require("fs/promises"), L1c = require("os");
function sessionTeamName(e) {
  return `${tkm}-${e.slice(0, 8)}`;
}
function nkm() {
  if (Csn() === void 0) {
    let e = process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME || null;
    delete process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME, Isn(e);
  }
  return Csn() ?? null;
}
function rkm() {
  Isn(void 0);
}
async function handleSpawnInProcess(input) {
  let t = input?.existingTeamName || nkm(),
    n = t ?? sessionTeamName(Rt()),
    r = pte(Hd, n),
    o = goe(n);
  if (!(t ? await hoe(n) : null)) {
    let l = {
      name: n,
      createdAt: Date.now(),
      leadAgentId: r,
      leadSessionId: Rt(),
      members: [{
        agentId: r,
        name: Hd,
        agentType: Hd,
        joinedAt: Date.now(),
        tmuxPaneId: "leader",
        cwd: yr(),
        subscriptions: [],
        backendType: "in-process"
      }]
    };
    await L8n(n, l).catch(c => R8n(n, c));
  }
  yOa(n);
  let i = Rt();
  if (n !== i) await $1c.rename(T5(i), T5(n)).catch(() => {});
  await Wgo(n), GTo(n);
  let a = Ky[0];
  return {
    teamContext: {
      teamName: n,
      teamFilePath: o,
      leadAgentId: r,
      teammates: {
        [r]: {
          name: Hd,
          agentType: Hd,
          color: a,
          tmuxSessionName: "in-process",
          tmuxPaneId: "leader",
          cwd: yr(),
          spawnedAt: Date.now()
        }
      }
    },
    teammateColors: {
      assignments: new Map([[r, a]]),
      index: 1
    }
  };
}
var $1c,
  tkm = "session";