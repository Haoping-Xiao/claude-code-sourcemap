// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YGo
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0035  score=0.0518  fileCov=0.0037
// note: nearest: src/main.tsx (0.0035); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var YGo = E(() => {
  kt();
  je();
  At();
  Is();
  R9();
  QEe();
  KGo = require("child_process"), bar = require("fs/promises"), grc = require("os"), zGo = require("path");
});
async function q1e(e) {
  let t = Date.now() + e;
  while (Date.now() < t) {
    if ((await hE({
      proto: hp,
      op: "ping"
    })).ok) return true;
    await EQt.setTimeout(100);
  }
  return false;
}
async function kJf(e) {
  let t = Date.now(),
    n = false,
    r = "restarting";
  while (Date.now() < t + (n ? 30000 : 10000 /* 1e4 */)) {
    let o = await hE({
      proto: hp,
      op: "nudge"
    });
    if (o.ok && o.op === "nudge") {
      if (n = true, !o.restarting) {
        if (await DJf(o.version, e)) return "down";
        if (Date.now() - t > 200) G("tengu_bg_skew_nudge", {
          converged: true,
          duration_ms: Date.now() - t
        });
        return "up";
      }
      r = "restarting", await EQt.setTimeout(100);
      continue;
    }
    if (!o.ok && o.code === "ETIMEOUT") {
      n = true, r = "etimeout", await EQt.setTimeout(100);
      continue;
    }
    if (!o.ok && o.code === "ENOCONN") {
      if (!n) {
        let s = await uR().catch(() => null);
        if (s?.bgDisabled) return "down";
        if (s) n = true;
      }
      if (!n) return "down";
      r = "enoconn", await EQt.setTimeout(100);
      continue;
    }
    return "up";
  }
  return G("tengu_bg_skew_nudge", {
    converged: false,
    restarting: r === "restarting",
    etimeout: r === "etimeout",
    enoconn: r === "enoconn"
  }), "down";
}
async function eV(e = {}) {
  let t = Date.now();
  if ((await kJf(e.forceTransient ?? false)) === "up") return xe("daemon_ensure_running"), {
    ok: true
  };
  let n = Date.now(),
    r = n - t > 40000,
    o = await _rc(),
    s = o && (await unr());
  if (s) G("tengu_bg_daemon_service_stale_exec", {}), T("daemon service exec path is stale (binary deleted) \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.", {
    level: "warn"
  });
  let i = false;
  if (o && !s) {
    i = true, e.onStarting?.();
    let g = await yrc();
    if (g) return Le("daemon_ensure_running", g.code), {
      ok: false,
      reason: g.reason
    };
    let h = await cnr(),
      y = await q1e(5000);
    if (G("tengu_bg_daemon_install", {
      outcome_ok: y,
      via_service: true,
      fresh_install: false,
      clock_jump: r,
      duration_ms: Date.now() - t,
      platform_darwin: Vt() === "macos",
      platform_linux: Vt() === "linux",
      platform_windows: Vt() === "windows"
    }), y) return xe("daemon_ensure_running"), {
      ok: true
    };
    G("tengu_bg_daemon_service_poll_fallthrough", {
      sr_ok: h.ok
    }), T(`daemon service did not become reachable within 5s${h.ok ? "" : ` (${h.error})`} \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.`, {
      level: "warn"
    });
  }
  if (!o && !e.forceTransient && Ear() === "ask" && brc() && !Dt().daemonInstallPromptDismissed) return G("tengu_bg_daemon_cold_start_ask", {}), {
    ok: false,
    askInstall: true,
    reason: "No background daemon is running. Run 'claude daemon install' to set it up as a persistent service."
  };
  if (!i) {
    e.onStarting?.();
    let g = await yrc();
    if (g) return Le("daemon_ensure_running", g.code), {
      ok: false,
      reason: g.reason
    };
  }
  let a = XGo === null ? null : Date.now() - XGo;
  XGo = Date.now();
  let l = De({
      label: PJf(),
      cwd: $t(),
      pid: process.pid
    }),
    {
      err: c,
      stderrPath: u
    } = await Sar(["daemon", "run", "--origin", "transient", "--spawned-by", l]);
  if (c) {
    if (u) _Z.rm(JGo.dirname(u), {
      recursive: true,
      force: true
    }).catch(() => {});
    return G("tengu_bg_daemon_spawn_failed", {
      errno_enoent: on(c) === "ENOENT",
      errno_eacces: on(c) === "EACCES",
      errno: xd(c) ?? "unknown"
    }), Le("daemon_ensure_running", "daemon_ensure_spawn_failed"), {
      ok: false,
      reason: `spawn ${mb()}: ${be(c)}`
    };
  }
  let d = await q1e(30000),
    p = Date.now() - n > 60000;
  if (!d && p) d = await q1e(5000);
  if (!d && !p) d = await q1e(bme - 30000);
  let f = false,
    m;
  if (!d && u) {
    let g = ((await nR(u, 1048576)) ?? "").slice(0, 2000);
    if (g.length > 0) f = true, T(`daemon: transient spawn stderr:
${g}`, {
      level: "error"
    }), m = [...g.matchAll(/\bE[A-Z]{2,14}\b/g)].find(h => !"/\\".includes(g[h.index - 1] ?? "."))?.[0];
  }
  if (u) _Z.rm(JGo.dirname(u), {
    recursive: true,
    force: true
  }).catch(() => {});
  if (G("tengu_bg_daemon_install", {
    outcome_ok: d,
    via_service: false,
    fresh_install: false,
    clock_jump: p || r,
    duration_ms: Date.now() - t,
    platform_darwin: Vt() === "macos",
    platform_linux: Vt() === "linux",
    platform_windows: Vt() === "windows",
    had_stderr: f,
    ...(a !== null && {
      spawn_gap_ms: a
    }),
    ...(m && {
      stderr_errno: m
    })
  }), d) return MJf(), xe("daemon_ensure_running"), {
    ok: true
  };
  return Le("daemon_ensure_running", "daemon_ensure_transient_unreachable"), {
    ok: false,
    reason: `${mb()} did not become reachable within ${bme / 1000}s`
  };
}
async function hrc(e) {
  try {
    return (await _Z.stat(await _Z.realpath(e))).mtimeMs;
  } catch {
    return null;
  }
}
function RJf() {
  let e = CF();
  return e.prefixArgs[0] ?? e.cmd;
}
function LJf(e) {
  if (e.daemonOrigin !== "transient") return false;
  if (e.daemonVersion === e.clientVersion) return false;
  if (e.daemonTarget === e.clientTarget) return false;
  if (!e.daemonTarget) return AQt.valid(e.clientVersion) !== null && AQt.valid(e.daemonVersion) !== null && AQt.gt(e.clientVersion, e.daemonVersion);
  if (e.clientMtimeMs === null || e.daemonMtimeMs === null) return false;
  return e.clientMtimeMs > e.daemonMtimeMs;
}
async function DJf(e, t) {
  if (e === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.VERSION) return false;
  if (!at("tengu_bg_binary_takeover", true)) return false;
  if (await _rc()) return false;
  if (!t && Ear() === "ask" && brc() && !Dt().daemonInstallPromptDismissed) return false;
  let n = await _Z.realpath(RJf()).catch(() => null);
  if (!n) return false;
  let r = await uR().catch(() => null);
  if (!r) return false;
  let [o, s] = await Promise.all([hrc(n), r.launchTarget ? hrc(r.launchTarget) : Promise.resolve(null)]);
  if (!LJf({
    daemonVersion: r.version,
    daemonOrigin: r.origin,
    daemonTarget: r.launchTarget,
    clientVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION,
    clientTarget: n,
    daemonMtimeMs: s,
    clientMtimeMs: o
  })) return false;
  let i = await EEt(r.pid);
  if (i === "timed-out") {
    try {
      process.kill(r.pid, "SIGKILL");
    } catch {}
    i = await EEt(r.pid);
  }
  if (i !== "exited") return false;
  return T(`bg: ${mb()} pid ${r.pid} runs ${r.version}; this binary (${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.VERSION}) is a newer build \u2014 retired the stale ${mb()} so new sessions use the current binary`, {
    level: "warn"
  }), G("tengu_bg_daemon_binary_takeover", {
    daemon_age_ms: Date.now() - r.startedAt
  }), true;
}
async function yrc() {
  let e = await uR().catch(() => null);
  if (!e) return null;
  if (e.bgDisabled) return G("tengu_bg_daemon_bg_disabled_skip", {
    origin_service: e.origin === "service"
  }), {
    reason: "the background service on this machine is running without background sessions \u2014 its control socket failed to start. " + "Check the cause with 'claude daemon status' (daemon.log), then restart the service (launchctl/systemctl, or reboot).",
    code: "daemon_ensure_bg_disabled"
  };
  if (Date.now() - e.startedAt <= WGo + 5000) return null;
  let t = await hE({
      proto: hp,
      op: "ping"
    }, {
      timeoutMs: 1000
    }),
    n = {
      started_ago_ms: Date.now() - e.startedAt,
      origin_transient: e.origin === "transient",
      origin_service: e.origin === "service",
      version_skew: e.version !== {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
      }.VERSION
    };
  if (t.ok || t.code === "ETIMEOUT") return G("tengu_bg_daemon_zombie_false_positive", {
    ...n,
    recheck_etimeout: !t.ok
  }), null;
  let r = false;
  try {
    r = await _Z.lstat(Pq()).then(() => true, () => false);
  } catch {}
  if (T(`bg: supervisor pid ${e.pid} alive but control socket unreachable \u2014 signalling restart`, {
    level: "warn"
  }), (await EEt(e.pid)) === "eperm") return {
    reason: `${mb()} socket missing; could not restart supervisor (EPERM)`,
    code: "daemon_ensure_zombie_kill_failed"
  };
  return G("tengu_bg_daemon_zombie_restart", {
    pid: e.pid,
    ...n,
    sock_exists: r
  }), null;
}
async function _rc() {
  if (process.env.CLAUDE_CONFIG_DIR || !KOe()) return false;
  return KQ().catch(() => false);
}
function PJf() {
  let e = process.argv.slice(2);
  if (e[0] === "agents") return "claude agents";
  if (e.includes("--bg")) return "claude --bg";
  return "claude";
}
async function MJf() {
  let e = Vt();
  if (e !== "linux" && e !== "wsl") return;
  let t = await _Z.readFile("/etc/systemd/logind.conf", "utf8").catch(() => "");
  if (!/^\s*KillUserProcesses\s*=\s*yes\b/im.test(t)) return;
  T("logind KillUserProcesses=yes \u2014 SSH disconnect will kill the transient daemon and its background jobs. Run `loginctl enable-linger $USER` or `claude daemon install` to keep it alive across logout.", {
    level: "warn"
  });
}
function brc() {
  return _ke() && KOe() && !process.env.CLAUDE_CONFIG_DIR && v_e();
}
var _Z,
  JGo,
  AQt,
  EQt,
  bme = 45000,
  XGo = null;