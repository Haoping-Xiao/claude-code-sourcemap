// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IKe
// matched 2.1.88 source: src/utils/doctorDiagnostic.ts
// class=new  jaccard=0.0158  score=0.0356  fileCov=0.0276
// note: nearest: src/utils/doctorDiagnostic.ts (0.0158); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var IKe = E(() => {
  kt();
  Pw();
  je();
  At();
  vn();
  Jt();
  WL();
  q$();
  Wfe = require("fs/promises"), xNl = require("path"), w$f = new Set(["proto", "supervisorPid", "updatedAt", "workers", "pid", "procStart", "sessionId", "rendezvousSock", "ptySock", "messagingSock", "rvAuth", "ptyAuth", "cliVersion", "startedAt", "attempt", "cwd", "worktreePath", "dispatch", "pendingRespawn", "decModes", "short", "nonce", "createdAt", "cols", "rows", "source", "launch", "mode", "args", "fork", "flagArgs", "cmd", "env", "reattachEnv", "worktree", "path", "ownershipToken", "isolation", "respawnFlags", "seed", "intent", "name", "agent", "routine", "attachStallRespawns"]);
  INl = Promise.resolve();
});
var ONo = {};
_t(ONo, {
  getBgDaemonStatus: () => getBgDaemonStatus,
  formatBgDaemonStatus: () => formatBgDaemonStatus
});
async function getBgDaemonStatus() {
  let e = await uR().catch(() => null),
    t = e?.logPath ?? VOe(),
    [n, r, o, s, i, a] = await Promise.all([hE({
      op: "ping",
      proto: hp
    }, {
      timeoutMs: 1000
    }).catch(p => ({
      ok: !1,
      code: "ENOCONN",
      error: String(p)
    })), h3({
      silent: !0
    }), IEt.stat(gse()).catch(() => null), IEt.stat(t).catch(() => null), KQ().catch(() => !1), x$f(Dq())]),
    l;
  try {
    l = Pq();
  } catch {
    l = Vt() === "windows" ? "\\\\.\\pipe\\cc-daemon-*" : "<unavailable>";
  }
  let c = null,
    u = null,
    d = [];
  if (n.ok) {
    let p = {
        ok: !1
      },
      [f, m] = await Promise.all([hE({
        op: "list",
        proto: hp
      }, {
        timeoutMs: 1000
      }).catch(() => p), hE({
        op: "leases",
        proto: hp
      }, {
        timeoutMs: 1000
      }).catch(() => p)]);
    if (f.ok && "jobs" in f) {
      c = On(f.jobs, h => !h.outcome);
      let g = e?.version ?? {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
      }.VERSION;
      u = On(f.jobs, h => !h.outcome && h.cliVersion !== void 0 && h.cliVersion !== g);
    }
    if (m.ok && "clients" in m) d = m.clients;
  }
  return {
    supervisor: e ? {
      pid: e.pid,
      version: e.version,
      uptimeSec: Math.floor((Date.now() - e.startedAt) / 1000)
    } : null,
    sockDir: Vt() === "windows" ? "\\\\.\\pipe\\cc-daemon-*" : Ffe(),
    controlSock: l,
    controlReachable: n.ok,
    controlError: n.ok ? void 0 : Fk(n.error),
    workersLive: c,
    workersSkewed: u,
    workersRoster: Object.keys(r.workers).length,
    rosterAgeSec: o ? Math.floor((Date.now() - o.mtimeMs) / 1000) : null,
    bgDisabled: e?.bgDisabled === !0,
    logPath: t,
    logSizeBytes: s?.size ?? null,
    serviceInstalled: i,
    configuredWorkers: a,
    leaseClients: d
  };
}
async function x$f(e) {
  let t;
  try {
    let o = await IEt.stat(e);
    if (!o.isFile() || o.size > 1048576) return 0;
    t = await IEt.readFile(e, "utf8");
  } catch {
    return 0;
  }
  let n = Ia(t, !1);
  if (n === null || typeof n !== "object") return 0;
  let r = 0;
  for (let [o, s] of Object.entries(n)) {
    if (o === "$schema") continue;
    r += Array.isArray(s) ? s.length : 1;
  }
  return r;
}
function formatBgDaemonStatus(e) {
  let t = ["", "bg sessions:"];
  if (t.push(`  sock dir:     ${e.sockDir}`), t.push(`  control.sock: ${e.controlReachable ? "reachable" : `unreachable (${e.controlError ?? "unknown"})`}`), e.bgDisabled) t.push("  bg sessions:  disabled (start failure \u2014 see daemon.log; restart the service after fixing)");
  if (e.workersLive !== null) {
    if (t.push(`  bg workers:   ${e.workersLive} running (control.sock), ${e.workersRoster} in roster.json`), e.workersSkewed && e.workersSkewed > 0) t.push(`                ${e.workersSkewed} from a different CLI version (most stay attachable and upgrade automatically once idle \u2014 exec runs never respawn)`);
  } else t.push(`  bg workers:   ${e.workersRoster} in roster.json (${e.controlReachable ? "live count unavailable" : "control unreachable"})`);
  if (t.push(`  roster.json:  ${e.rosterAgeSec === null ? "absent" : `updated ${e.rosterAgeSec}s ago`}`), t.push(`  daemon.log:   ${e.logSizeBytes === null ? "absent" : `${R$f(e.logSizeBytes)} at ${e.logPath}`}`), !e.supervisor && !e.controlReachable && e.workersRoster > 0) t.push(`  warning:      supervisor not running but ${e.workersRoster} ${bn(e.workersRoster, "worker")} in roster \u2014 running \`claude agents\` restarts the daemon and re-adopts still-running sessions; run \`claude daemon stop --any\` to reap them instead`);
  return t.join(`
`);
}
function R$f(e) {
  if (e < 1024) return `${e}B`;
  if (e < 1048576) return `${(e / 1024).toFixed(1)}KB`;
  return `${(e / 1024 / 1024).toFixed(1)}MB`;
}
var IEt;