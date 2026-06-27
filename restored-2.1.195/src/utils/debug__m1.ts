// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZZo
// matched 2.1.88 source: src/utils/debug.ts
// class=modified (alt of src/utils/debug.ts)  jaccard=0.0286  score=0.0382  fileCov=0.1018
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: tailLog, parseArgs, daemonMain
// [unwrapped __esm module ZZo] deps: utils/cronTasks.ts, utils/fsOperations.ts, utils/path.ts, utils/fsOperations.ts, components/agents/AgentsMenu.tsx, utils/completionCache.ts, mute-stream/lib/index.js, commands/bridge-kick.ts, cli/print.ts
uie = require("path");
function Tqc() {
  return ENm + (_ke() ? ANm : HNm) + TNm + vNm;
}
function parseArgs(e) {
  let t = Dq(),
    n = false,
    r = VOe(),
    o,
    s,
    i = new Set();
  for (let m = 0; m < e.length; m++) {
    let g = e[m];
    if (g === "--json-path" && e[m + 1]) (i.add(m), i.add(++m), (t = e[m]), (n = true));
    else if (g.startsWith("--json-path=")) (i.add(m), (t = g.slice(12)), (n = true));
    else if (g === "--log-file" && e[m + 1]) (i.add(m), i.add(++m), (r = e[m]));
    else if (g.startsWith("--log-file=")) (i.add(m), (r = g.slice(11)));
    else if (g === "--origin" && e[m + 1]) (i.add(m), i.add(++m), (o = vqc(e[m])));
    else if (g.startsWith("--origin=")) (i.add(m), (o = vqc(g.slice(9))));
    else if (g === "--spawned-by" && e[m + 1]) (i.add(m), i.add(++m), (s = xNm(e[m])));
  }
  let a = [];
  for (let m = 0; m < e.length; m++) if (!i.has(m)) a.push(e[m]);
  let l = new Set([
      "run",
      "install",
      "uninstall",
      "start",
      "stop",
      "restart",
      "status",
      "logs",
      "log",
      "list",
      "scheduled",
      "remote-control",
      "hub",
    ]),
    c = process.stdin.isTTY ? "hub" : "run",
    u = -1;
  for (let m = 0; m < a.length; m++)
    if (!a[m].startsWith("-")) {
      u = m;
      break;
    }
  if (u === -1)
    return {
      sub: c,
      jsonPath: t,
      logPath: r,
      origin: o,
      spawnedBy: s,
      rest: a,
    };
  let d = a[u];
  if (!l.has(d)) {
    if (!/[./\\~]/.test(d))
      return {
        sub: d,
        jsonPath: t,
        logPath: r,
        origin: o,
        spawnedBy: s,
        rest: [],
      };
    return {
      sub: "run",
      jsonPath: n ? t : d,
      logPath: r,
      origin: o,
      spawnedBy: s,
      rest: [],
    };
  }
  let p = [...a.slice(0, u), ...a.slice(u + 1)],
    f = d;
  if (f === "run" && !n) {
    let m = p.find((g) => !g.startsWith("-"));
    if (m) t = m;
  }
  return {
    sub: f,
    jsonPath: t,
    logPath: r,
    origin: o,
    spawnedBy: s,
    rest: p,
  };
}
function vqc(e) {
  if (e === "service" || e === "transient" || e === "foreground") return e;
  if (e === "auto") return "transient";
  return;
}
function INm(e) {
  let t = e.origin ?? "unknown";
  if (t !== "transient" && t !== "auto") return t;
  let n = e.spawnedBy;
  if (!n) return "transient \u2014 started on-demand by a client";
  return `transient \u2014 started on-demand by \`${n.label}\` (pid ${n.pid}) in ${n.cwd}`;
}
function xNm(e) {
  let t = Ia(e, false);
  if (t === null || typeof t !== "object") return;
  let n = t;
  if (typeof n.label === "string" && typeof n.cwd === "string" && typeof n.pid === "number")
    return {
      label: n.label,
      cwd: n.cwd,
      pid: n.pid,
    };
  return;
}
function Qy(e) {
  process.stdout.write(
    e +
      `
`,
  );
}
function zT(e) {
  process.stderr.write(
    e +
      `
`,
  );
}
function isDebugMode(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (t.includes(o)) continue;
    if (
      o === "--debug" ||
      o === "-d" ||
      o === "--debug-to-stderr" ||
      o === "-d2e" ||
      o.startsWith("--debug=") ||
      o.startsWith("--debug-file=")
    )
      continue;
    if (o === "--debug-file" && r + 1 < e.length) {
      r++;
      continue;
    }
    n.push(o);
  }
  if (n.length > 0) zT(`warning: extra arguments ignored: ${n.join(" ")}`);
}
async function hV(e) {
  (await Promise.race([
    Promise.all([A_e(), k_e()]),
    Nn(500, void 0, {
      unref: true,
    }),
  ]).catch(() => {}),
    process.exit(e));
}
async function daemonMain(e) {
  if ((await Fst(), e.includes("--help") || e.includes("-h"))) {
    if (!v_e()) return bke("daemon");
    Qy(Tqc());
    return;
  }
  let t = parseArgs(e),
    { jsonPath: n, logPath: r, origin: o, spawnedBy: s, rest: i } = t,
    a = t.sub === "hub" && !lce() ? "status" : t.sub;
  if (!CNm.has(a)) {
    let l = await Rcr();
    if (l)
      (process.stderr.write(`${l}
`),
        process.exit(1));
    if (!v_e()) return bke("daemon");
  }
  if (wNm.has(a) && !lce()) return bke(`daemon ${a}`);
  switch ((_kn(), a)) {
    case "list": {
      isDebugMode(i, ["--json"]);
      let { handleListAllKinds: l } = await Promise.resolve().then(() => (ZZo(), QZo));
      await l(i.includes("--json"), n);
      return;
    }
    case "scheduled":
    case "remote-control": {
      let { handleCliKind: l } = await Promise.resolve().then(() => (ZZo(), QZo));
      await l(a, i, n);
      return;
    }
    case "hub": {
      if ((isDebugMode(i, []), !process.stdin.isTTY || !process.stdout.isTTY)) {
        Qy("Interactive hub requires a TTY. See `claude daemon --help`.");
        return;
      }
      let { renderDaemonHubStandalone: l } = await Promise.resolve().then(() => (TGo(), HGo));
      return (await l(), process.exit(0));
    }
    case "run": {
      if (Bst())
        return (zT("claude daemon: background agents disabled (3P/opt-out)"), process.exit(0));
      process.title = "claude daemon";
      let l = grn.resolve(n),
        c = grn.resolve(r);
      XJe();
      try {
        process.chdir(Cqc.homedir());
      } catch {}
      D9e();
      let u = new AbortController(),
        d = false,
        p = () => {
          if (d) (zT("forced shutdown"), process.exit(1));
          ((d = true), u.abort());
        };
      (process.on("SIGINT", p), process.on("SIGTERM", p));
      let f = o ?? "foreground",
        m,
        g;
      try {
        ({ upgradeDetected: m, exitCode: g } = await Eqc({
          jsonPath: l,
          logPath: c,
          origin: f,
          spawnedBy: s,
          signal: u.signal,
        }));
      } catch (h) {
        return (
          ke(h),
          Le("daemon_start", "daemon_start_crash"),
          await Promise.all([
            yU("tengu_daemon_startup_crash", {}),
            ppt("tengu_daemon_startup_crash", {}),
          ]),
          hV(1)
        );
      }
      if (m) {
        if (f === "service") return hV(SNm);
        await RNm(l, c, f, s);
      }
      return hV(g);
    }
    case "install": {
      if ((isDebugMode(i, []), !_ke()))
        return (
          zT(
            `\`claude daemon ${a}\` is disabled in this version \u2014 the daemon runs on demand and exits when the last client disconnects.`,
          ),
          await yU("tengu_daemon_install", {
            ok: false,
            disabled: true,
          }),
          hV(1)
        );
      if (!KOe())
        return (
          zT(
            `Service install isn't available on ${"linux"} \u2014 the daemon still runs on demand when a client connects.`,
          ),
          Le("daemon_service_install", "daemon_service_install_unsupported"),
          hV(1)
        );
      if (process.env.CLAUDE_CONFIG_DIR)
        return (
          zT(
            "service install only supports the default config dir \u2014 the launchd/systemd unit is a per-user singleton",
          ),
          Le("daemon_service_install", "daemon_service_install_config_dir"),
          hV(1)
        );
      let l = await F7t();
      if (l !== null) Qy(`stopped detached daemon (pid ${l})`);
      let c = await j7t({
        jsonPath: n,
        logPath: r,
      });
      if (!c.ok)
        return (
          await yU("tengu_daemon_install", {
            ok: false,
          }),
          Le("daemon_service_install", "daemon_service_install_failed"),
          zT(`install failed: ${c.error}`),
          zT(`  (service file was written to ${c.servicePath})`),
          hV(1)
        );
      (xe("daemon_service_install"), Qy(`installed: ${c.servicePath}`));
      let u = await q1e(bme);
      if (
        (await yU("tengu_daemon_install", {
          ok: true,
          reachable: u,
        }),
        u)
      ) {
        let d = await uR().catch(() => null);
        Qy(
          `running: pid=${d?.pid ?? "?"} origin=${d?.origin ?? "?"} (managed by ${Vt() === "macos" ? "launchd" : "systemd"})`,
        );
      } else
        zT(
          `warning: service installed but daemon not reachable within ${bme / 1000}s \u2014 check \`claude daemon logs\``,
        );
      return hV(0);
    }
    case "start":
    case "restart": {
      if ((isDebugMode(i, []), !_ke()))
        return (
          zT(
            `\`claude daemon ${a}\` is disabled in this version \u2014 the daemon runs on demand and exits when the last client disconnects.`,
          ),
          await yU("tengu_daemon_install", {
            ok: false,
            disabled: true,
          }),
          hV(1)
        );
      if (!KOe())
        (zT(
          `\`claude daemon ${a}\` isn't available on ${"linux"} (no launchd/systemd) \u2014 the daemon runs on demand instead.`,
        ),
          process.exit(1));
      if (process.env.CLAUDE_CONFIG_DIR)
        (zT("the launchd/systemd unit is a per-user singleton for the default config dir"),
          process.exit(1));
      if (!(await KQ()))
        (zT("service not installed \u2014 run `claude daemon install` first"), process.exit(1));
      if (await unr()) {
        Qy("service binary missing \u2014 regenerating service file");
        let c = await F7t();
        if (c !== null) Qy(`stopped detached daemon (pid ${c})`);
        let u = await j7t({
          jsonPath: n,
          logPath: r,
        });
        if (
          (await yU("tengu_daemon_control", {
            op_start: a === "start",
            op_restart: a === "restart",
            ok: u.ok,
            regenerated: true,
          }),
          u.ok)
        )
          Qy(a === "start" ? "started" : "restarted");
        else zT(`regenerate failed: ${u.error}`);
        return hV(u.ok ? 0 : 1);
      }
      let l = await (a === "start" ? cnr() : hNl());
      if (
        (await yU("tengu_daemon_control", {
          op_start: a === "start",
          op_restart: a === "restart",
          ok: l.ok,
        }),
        l.ok)
      )
        Qy(a === "start" ? "started" : "restarted");
      else zT(`${a} failed: ${l.error}`);
      return hV(l.ok ? 0 : 1);
    }
    case "uninstall": {
      isDebugMode(i, []);
      let l = await AEt();
      if (
        (await yU("tengu_daemon_control", {
          op_uninstall: true,
          ok: l.ok,
        }),
        l.ok)
      )
        (xe("daemon_service_uninstall"), Qy("uninstalled"));
      else
        (Le("daemon_service_uninstall", "daemon_service_uninstall_failed"),
          zT(`uninstall failed: ${l.error}`));
      return hV(l.ok ? 0 : 1);
    }
    case "stop": {
      let l = i.includes("--keep-workers");
      isDebugMode(i, ["--keep-workers", "--any"]);
      let c = (h) =>
          l || h === 0 ? "stopped" : `stopped (terminated ${h} ${bn(h, "background session")})`,
        u = async (h, y) => {
          if (h) xe("daemon_stop");
          else Le("daemon_stop", "daemon_stop_failed");
          return (
            await yU("tengu_daemon_control", {
              op_stop: true,
              ok: h,
              reaped: y,
            }),
            hV(h ? 0 : 1)
          );
        },
        d = await KQ(),
        p = await uR();
      if (!d && p && !i.includes("--any"))
        return (
          zT(
            `no background service is installed, but a daemon is running (pid=${p.pid}, origin=${p.origin ?? "unknown"}). Run \`claude daemon stop --any\` to stop it.`,
          ),
          hV(1)
        );
      let f = await hE({
        proto: hp,
        op: "shutdown",
        reapWorkers: !l,
      });
      if (f.ok && f.op === "shutdown") {
        let h = l
            ? 0
            : (
                await oWo({
                  supervisorKilledAll: true,
                })
              ).reaped,
          y = Math.max(f.reaped, h);
        if (d) {
          let b = await G7t();
          if (!b.ok) return (zT(`stop failed: ${b.error}`), u(false, y));
        }
        if ((Qy(c(y)), !d))
          Qy("note: the next `claude agents` or `claude --bg` will start a new one");
        return u(true, y);
      }
      let m = false;
      if (d) {
        let h = await G7t();
        if (!h.ok) return (zT(`stop failed: ${h.error}`), u(false, 0));
        m = true;
      } else if (p && Vt() !== "windows")
        try {
          (process.kill(p.pid, "SIGTERM"), (m = true));
        } catch (h) {
          if (on(h) === "ESRCH") m = true;
          else {
            let y =
              on(h) === "EPERM"
                ? " (running as another user \u2014 try with elevated privileges)"
                : "";
            return (zT(`could not stop daemon (pid=${p.pid}): ${be(h)}${y}`), u(false, 0));
          }
        }
      let g = l ? 0 : (await oWo()).reaped;
      if (p && !m && Vt() === "windows")
        return (
          zT(
            (g > 0 ? `terminated ${g} background session(s); ` : "") +
              `supervisor (pid=${p.pid}) is still running \u2014 stop it with ` +
              `\`taskkill /PID ${p.pid}\` or close the terminal it was started in.`,
          ),
          u(false, g)
        );
      if (!m && !p && g === 0) Qy("no daemon running");
      else if ((Qy(c(g)), !d && p))
        Qy("note: the next `claude agents` or `claude --bg` will start a new one");
      return u(true, g);
    }
    case "status": {
      isDebugMode(i, []);
      let l = await uR();
      if (!l) {
        Qy("not running");
        let { getBgDaemonStatus: m, formatBgDaemonStatus: g } = await Promise.resolve().then(
          () => (hnr(), ONo),
        );
        (Qy(g(await m())), process.exit(1));
      }
      let c = Math.floor((Date.now() - l.startedAt) / 1000);
      (Qy(`pid:     ${l.pid}`),
        Qy(`version: ${l.version}`),
        Qy(`uptime:  ${c}s`),
        Qy(`origin:  ${INm(l)}`),
        Qy(`config:  ${l.jsonPath}`),
        Qy(`log:     ${l.logPath}`));
      let { getBgDaemonStatus: u, formatBgDaemonStatus: d } = await Promise.resolve().then(
          () => (hnr(), ONo),
        ),
        p = await u();
      Qy(d(p));
      let f = l.origin;
      if (f === "transient" || f === "auto") {
        Qy("");
        let m = p.workersLive ?? 0,
          g = p.leaseClients;
        if (m > 0 || g.length > 0) {
          if ((Qy("holding this daemon open:"), m > 0))
            Qy(`  ${m} ${bn(m, "bg worker")} running (daemon waits for them to settle)`);
          for (let h of g) Qy(`  \`${h.label}\` (pid ${h.pid}) in ${h.cwd}`);
          (Qy(""),
            Qy(
              "to let it idle-exit: wait for (or cancel) bg workers and close any `claude agents`",
            ));
        } else if (p.workersLive === 0)
          Qy("nothing holding this daemon open \u2014 will idle-exit shortly");
      }
      if (
        l.version !==
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION
      ) {
        (Qy(""),
          Qy(
            `warning: running daemon is ${l.version}, but this claude is ${
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.195",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-06-26T01:00:56Z",
                GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
              }.VERSION
            }`,
          ));
        let m = (await KQ()) ? "claude daemon stop" : "claude daemon stop --any";
        Qy(`  run \`${m}\` to pick up the new version`);
      }
      return process.exit(0);
    }
    case "logs":
    case "log": {
      (isDebugMode(i, []), await tailLog(r));
      return;
    }
    default:
      (zT(`unknown subcommand: ${a}`), zT(""), zT(Tqc()), process.exit(1));
  }
}
async function RNm(e, t, n, r) {
  let { err: o, stderrPath: s } = await Sar([
    "daemon",
    "run",
    "--json-path",
    e,
    "--log-file",
    t,
    "--origin",
    n,
    ...(r ? ["--spawned-by", De(r)] : []),
  ]);
  if (s)
    bhr
      .rm(grn.dirname(s), {
        recursive: true,
        force: true,
      })
      .catch(() => {});
  if (o)
    (ke(`daemon: upgrade self-respawn failed: ${be(o)}`),
      await yU("tengu_bg_daemon_spawn_failed", {
        respawn: true,
        errno_enoent: on(o) === "ENOENT",
        errno_eacces: on(o) === "EACCES",
        errno: xd(o) ?? "unknown",
      }));
}
async function tailLog(e) {
  {
    let s = wqc.spawn("tail", ["-f", e], {
      stdio: "inherit",
    });
    await new Promise((i) => {
      (s.on("exit", (a) => {
        if (a) process.exitCode = a;
        i();
      }),
        s.on("error", (a) => {
          (zT(`tail failed: ${a.message}`), process.exit(1));
        }));
    });
    return;
  }
  let t;
  try {
    t = await bhr.open(e, "r");
  } catch (s) {
    (zT(`cannot open ${e}: ${be(s)}`), process.exit(1));
  }
  let n = (await t.stat()).size,
    r = Buffer.alloc(65536),
    o = false;
  process.on("SIGINT", () => {
    o = true;
  });
  while (!o) {
    if ((await t.stat()).size < n) n = 0;
    let { bytesRead: i } = await t.read(r, 0, r.length, n);
    if (i > 0) (process.stdout.write(r.subarray(0, i)), (n += i));
    else await Nn(500);
  }
  await t.close();
}
var wqc,
  bhr,
  Cqc,
  grn,
  SNm = 70,
  ENm = `Usage: claude daemon [subcommand] [options]

Service lifecycle:
  run [json-path]   Run the supervisor in the foreground (default when piped)
  status            Show daemon pid, version, uptime
  logs              Tail the daemon log (Ctrl-C to stop)
  uninstall         Remove the background service (launchctl/systemd)
  stop              Shut down the supervisor and terminate background sessions
                      --any           also stop a transient (non-service) daemon
                      --keep-workers  leave detached sessions running
`,
  ANm = `  install           Install as a launchctl/systemd service (persists across reboot)
  start             Start the installed service
  restart           Restart the installed service
`,
  HNm = `
  Service install is disabled in this version \u2014 the daemon runs on demand
  and exits when the last client disconnects.
`,
  TNm = "",
  vNm = `
Options:
  --json-path <p>   Config file (default: ~/.claude/daemon.json)
  --log-file <p>    Log file (default: ~/.claude/daemon.log)
  --help, -h        Show this help
`,
  wNm,
  CNm;
