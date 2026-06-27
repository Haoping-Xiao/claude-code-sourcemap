// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RJt
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0094  score=0.2409  fileCov=0.0097
// note: nearest: src/cli/print.ts (0.0094); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module RJt] deps: dn, kt, g$e, je, jZe, At, sF, Jt
kJt = require("crypto");
var SJl = {};
_t(SJl, {
  resolveLauncher: () => resolveLauncher,
  call: () => call
});
async function resolveLauncher() {
  let e = await Gf("claude");
  if (e) return {
    cmd: e,
    prefixArgs: []
  };
  return CF();
}
var bJl,
  call = async (e, t) => {
    if (Js()) return G("tengu_update_refused", {
      bg_session: true
    }), {
      type: "text",
      value: `This is a background session \u2014 press \u2190 to detach, then run \`claude respawn ${XE()}\` to restart it on the latest build.`
    };
    let n = t.taskRegistry.all();
    if (Object.values(n).some(f => f.status === "running" || f.status === "pending")) return G("tengu_update_refused", {
      active_tasks: true
    }), {
      type: "text",
      value: "Cannot /update while work is running in the background \u2014 wait for it to finish, then try again."
    };
    let o = ML(),
      s = bJl.join(Jh(Ljo()), `${Rt()}.jsonl`);
    if (o && o !== s) return G("tengu_update_refused", {
      transcript_path_drift: true
    }), {
      type: "text",
      value: "Cannot /update \u2014 this session was resumed from a different project directory. Restart manually with --resume to continue on the latest version."
    };
    let i = t.messages.findLast(f => pme(f) && Ose(f))?.uuid;
    if (i) try {
      await LJt(i);
    } catch (f) {
      ke(f);
    }
    let a = wf() ? void 0 : t.getAppState().teamContext?.teamName,
      l = bS(),
      c = l?.bridgeSessionId,
      u = l?.getLastSequenceNum(),
      d = l?.outboundOnly;
    if (c) t.setAppState(f => f.replBridgeSkipNextArchive ? f : {
      ...f,
      replBridgeSkipNextArchive: true
    }), l.writeSdkMessages([_Jl("Switching to latest Claude Code\u2026 reconnecting", Rt())]), await vc(l.flush(), 2000, "bridge flush").catch(() => {}), await l.teardown({
      skipArchive: true
    });
    let p = {};
    if (a) p.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = a;
    return Object.assign(p, tke()), Object.assign(p, W0e(c, u, d) ?? {}), w1e({
      launcher: await resolveLauncher(),
      freshIfNoTranscript: true,
      extraArgs: vsr(Fr(t), gg(t)),
      env: Object.keys(p).length > 0 ? p : void 0,
      preSpawn: () => process.stdout.write(wt.dim(`
Switching from ${{
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
      }.VERSION} to latest\u2026 conversation will continue

`))
    });
  };