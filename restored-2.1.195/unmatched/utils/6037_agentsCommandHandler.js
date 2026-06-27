// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T5c
// matched 2.1.88 source: src/utils/permissions/getNextPermissionMode.ts
// class=new  jaccard=0.0488  score=0.1291  fileCov=0.0728
// note: nearest: src/utils/permissions/getNextPermissionMode.ts (0.0488); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var T5c = E(() => {
  xHt();
  ag();
  dn();
  zH();
  jS();
  Jt();
  _ht();
  JN();
  cwt = require("path");
});
var C5c = {};
_t(C5c, {
  agentsCommandHandler: () => agentsCommandHandler
});
async function agentsCommandHandler(e) {
  if (e.json) {
    if (await Fst(), !Kx()) {
      bke("claude agents --json", void 0);
      return;
    }
    let {
      printAgentsJson: t
    } = await Promise.resolve().then(() => (T5c(), H5c));
    await t(e.cwd, e.all === true), _R();
  }
  if (process.stdout.isTTY) {
    if (await Fst(), Kx()) {
      let t = nKr();
      G("tengu_fleetview", {
        viaCommander: true,
        relaunch: t
      });
      let [{
          mountFleetViewWithComposerBack: n
        }, {
          applyFleetViewHostWindowsEnv: r
        }, {
          createRoot: o
        }, {
          getBaseRenderOptions: s
        }] = await Promise.all([Promise.resolve().then(() => (vtn(), Ttn)), Promise.resolve().then(() => (tvt(), _tn)), Promise.resolve().then(() => (Ye(), wW)), Promise.resolve().then(() => (Gre(), I4n))]),
        {
          config: i
        } = aon(process.argv.slice(2));
      r(), Promise.resolve().then(() => (Ken(), rpr)).then(c => c.startBackgroundHousekeeping());
      let a = await o(s(false)),
        l = {
          cwdFilter: e.cwd,
          dispatchExtraArgs: OXe($Xe(i, w5c.resolve)),
          dispatchDefaults: {
            permissionMode: e.dangerouslySkipPermissions ? "bypassPermissions" : e.permissionMode,
            model: e.model,
            effort: e.effort,
            agent: e.agent,
            allowBypass: e.allowDangerouslySkipPermissions
          }
        };
      await n(a, l), await ki(0, "other", {
        suppressResumeHint: true
      });
      return;
    }
  }
  bke("claude agents", process.stdout.isTTY ? void 0 : "requires an interactive terminal (stdout is not a TTY) \u2014 use 'claude agents --json' for a machine-readable listing");
}
var w5c;