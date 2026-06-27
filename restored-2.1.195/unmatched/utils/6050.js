// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _qc
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0021  score=0.0232  fileCov=0.0023
// note: nearest: src/main.tsx (0.0021); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _qc = E(() => {
  lH();
  kt();
  vn();
  iQt();
  Cir();
  gqc();
  sQt();
});
async function bqc(e) {
  try {
    let t = await yhr.realpath(e),
      n = await yhr.stat(t);
    return {
      target: t,
      mtimeMs: n.mtimeMs
    };
  } catch (t) {
    if (wn(t)) return null;
    throw t;
  }
}
function uNm(e, t) {
  if (e.target !== t.target) return !0;
  return !a8n() && e.mtimeMs !== t.mtimeMs;
}
function dNm(e) {
  if (gd(e) && e.syscall === "listen" && (e.code === "EADDRINUSE" || e.code === "EACCES")) {
    T(`bg manager start failed (listen): ${e.code} ${e.message}`, {
      level: "warn"
    });
    return;
  }
  ke(e);
}
async function Eqc(e) {
  let {
      jsonPath: t,
      logPath: n,
      origin: r,
      spawnedBy: o,
      signal: s,
      watch: i = Zir,
      createAuth: a = Zec,
      staleCheckIntervalMs: l = lNm,
      idleGraceMs: c = Sqc,
      startupIdleGraceMs: u = cNm
    } = e,
    d = await dqc(n);
  d.write("supervisor", `\u2500\u2500\u2500 daemon start \u2500\u2500\u2500 version=${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.VERSION} pid=${process.pid} origin=${r}`), iL();
  let p = await uR(),
    f = !1;
  if (p && p.origin === "transient" && r !== "transient") {
    f = !0, d.write("supervisor", `transient daemon running (pid=${p.pid}, origin=transient) \u2014 asking it to yield to origin=${r}`);
    let J = await hE({
      proto: hp,
      op: "yield"
    });
    if (J.ok && J.op === "yield" && J.yielding) {
      let ne = Date.now() + 5000;
      while (p && Date.now() < ne) await Nn(100), p = await uR();
      if (G("tengu_daemon_yield_takeover", {
        ok: !p,
        new_origin: $e(r)
      }), p) d.write("supervisor", "yield acked but lock still held after 5s \u2014 refusing to start");
    } else d.write("supervisor", J.ok ? "existing daemon refused to yield (it reports origin!=transient)" : `existing daemon unreachable on control socket (${Fk(J.error)}); not taking over`);
  }
  if (p) {
    let J = f ? `origin=${p.origin ?? "unknown"}; asked it to yield but the handover failed (see above)` : r === "transient" ? `origin=${p.origin ?? "unknown"}; an on-demand daemon never displaces a running one` : `origin=${p.origin ?? "unknown"}; only a transient daemon can be displaced`,
      ne = Vt() === "windows" ? `Stop it with \`taskkill /PID ${p.pid}\`, then retry.` : "Run `claude daemon stop` to stop it, then retry.";
    if (d.write("supervisor", `another daemon is already running (pid=${p.pid}, version=${p.version}, ${J}). ${ne}`), f) It("daemon_start", "daemon_start_yield_failed");else xe("daemon_start");
    return await d.close(), {
      upgradeDetected: !1,
      exitCode: 1
    };
  }
  let m = CF({
      pinToCurrentBinary: !0
    }),
    g = a8n() ? INo() : m.prefixArgs[0] ?? m.cmd,
    h = await bqc(g).catch(J => {
      if (gd(J)) T(`binaryIdentity(${g}) failed at startup: ${J.code}`, {
        level: "error"
      });else ke(J);
      return null;
    }),
    y = {
      pid: process.pid,
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
      }.VERSION,
      jsonPath: t,
      logPath: n,
      startedAt: Date.now(),
      origin: r,
      spawnedBy: o,
      procStart: await KR(process.pid),
      launchTarget: h?.target
    },
    b = await dNl(y);
  if (!b) {
    let J = await mse();
    if (J) {
      let ne = !1;
      try {
        process.kill(J.pid, 0), ne = (await TNo(J.pid)) && (await bv(J.pid, J.procStart));
      } catch (oe) {
        if (on(oe) !== "ESRCH") ne = !0;
      }
      if (ne) return d.write("supervisor", `another daemon won the lock race (pid=${J.pid}) \u2014 exiting`), xe("daemon_start"), await d.close(), {
        upgradeDetected: !1,
        exitCode: 1
      };
      b = await anr(y);
    } else b = await anr(y);
    if (!b) return d.write("supervisor", "another daemon won the lock race \u2014 exiting"), xe("daemon_start"), await d.close(), {
      upgradeDetected: !1,
      exitCode: 1
    };
  }
  let _ = null,
    S = a(s, J => d.write("supervisor", J), () => _?.hasOAuthConsumer() ?? !1),
    A = !1,
    v = !1,
    C = !1,
    x = !1,
    I = !1,
    k = !1,
    D = null,
    P = () => {
      if (r !== "transient") return !1;
      if (!x) x = !0, d.write("supervisor", "yielding to a foreground/service daemon \u2014 bg workers will be re-adopted"), G("tengu_daemon_yield", {}), D?.();
      return !0;
    },
    O = async () => {
      if (A || !h) return A;
      let J;
      try {
        J = await bqc(g);
      } catch (ne) {
        if (gd(ne)) T(`binaryIdentity(${g}) poll failed: ${ne.code}`, {
          level: "error"
        });else ke(ne);
        return !1;
      }
      if (s.aborted || C) return !1;
      if (J !== null && !uNm(h, J)) return !1;
      if (A = !0, J === null) d.write("supervisor", `binary at ${g} was deleted (was ${h.target}) \u2014 exiting for upgrade`);else {
        let ne = h.target === J.target ? "mtime changed" : `${h.target} \u2192 ${J.target}`;
        d.write("supervisor", `binary at ${g} changed (${ne}) \u2014 self-restarting for upgrade`);
      }
      return D?.(), !0;
    },
    L = {
      manager: null
    },
    M = null,
    N = !1,
    B = !1,
    $ = () => (L.manager?.leaseCount() ?? 0) + (L.manager?.liveHandleCount() ?? 0),
    q = () => {
      if (r !== "transient") return;
      if (N || A || v || x || I || s.aborted) return;
      if ($() > 0) {
        if (B = !0, M) clearTimeout(M), M = null;
        return;
      }
      if (M) return;
      let J = B ? c : u;
      M = setTimeout(() => {
        if (M = null, $() > 0) {
          B = !0;
          return;
        }
        if (s.aborted || A) return;
        N = !0;
        let ne = _?.workerCount() ?? 0;
        d.write("supervisor", `idle ${Math.round(J / 1000)}s with no clients \u2014 exiting` + (ne > 0 ? ` (stopping ${ne} configured workers)` : "")), G("tengu_daemon_idle_exit", {
          grace_ms: J,
          never_had_client: !B,
          cfg_workers: ne
        }), D?.();
      }, J);
    };
  S.ready.then(() => aqc(J => d.write("bg", J), {
    getAuthSnapshot: r === "service" ? () => S.getAuthSnapshot() : void 0,
    onNudge: O,
    onShutdown: () => {
      v = !0, d.write("supervisor", "shutdown requested via control socket"), D?.();
    },
    onYield: P,
    onKeepAliveChange: q,
    isShuttingDown: () => s.aborted || x || v || N || A || C || k
  })).then(J => {
    if (s.aborted || x || v || N || A || C || k) {
      if (C) J.killAll("SIGTERM");
      return void J.close({
        skipPathCleanup: !0
      }).catch(oe => ke(TEt(oe)));
    }
    L.manager = J, q();
  }).catch(J => {
    if (dNm(TEt(J)), s.aborted || x || v || N || A || C || k) return;
    let ne = on(J),
      oe = `${ne ? `[${ne}] ` : ""}${Fk(Zr(J).message.replace(/\s*\n\s*/g, " "))}`;
    if (r === "service") {
      d.write("supervisor", `bg manager failed to start: ${oe} \u2014 control pipe unavailable; bg sessions disabled (registry workers keep running)`), pNl(y).catch(ke);
      return;
    }
    d.write("supervisor", `bg manager failed to start: ${oe} \u2014 control pipe unavailable; exiting`), process.stderr.write(`bg manager failed to start: ${oe}
`), I = !0, D?.();
  }), _ = await yqc({
    jsonPath: t,
    invocation: m,
    logger: d,
    authManager: S,
    watch: i
  });
  let W = _.workerCount();
  if (d.write("supervisor", `workers=${W}`), W > 0) d.write("supervisor", "daemon.json has configured workers but they do not pin the supervisor \u2014 they stop when the last client lease and bg job are gone");
  G("tengu_daemon_start", {
    worker_kinds: Object.keys(fZ).length,
    worker_count: W,
    origin: $e(r)
  }), xe("daemon_start"), q();
  let V = null;
  try {
    await new Promise(J => {
      if (D = J, s.aborted || A || N || v || x || I) return void J();
      if (s.addEventListener("abort", () => J(), {
        once: !0
      }), !h) d.write("supervisor", `binary identity unresolvable at ${g}; upgrade polling disabled`);
      V = setInterval(() => {
        if (s.aborted || A || C || x) {
          if (V) clearInterval(V), V = null;
          return;
        }
        if (O(), r === "service" && tKr()) C = !0, d.write("supervisor", "service recall flag set \u2014 draining workers and uninstalling service"), D?.();
        if (r === "transient" && !x) mse().then(ne => {
          if (ne && ne.pid !== y.pid && !x && !s.aborted) k = !0, x = !0, d.write("supervisor", `lockfile now held by pid=${ne.pid} \u2014 displaced, yielding`), G("tengu_daemon_yield", {
            displaced: !0,
            displaced_by_pid: ne.pid
          }), D?.();
        }).catch(() => {});
      }, l);
    });
  } finally {
    if (D = null, V) clearInterval(V), V = null;
    if (M) clearTimeout(M), M = null;
  }
  if (A) G("tengu_daemon_self_restart_on_upgrade", {});
  if (C) G("tengu_copper_lantern", {});
  let Y = A ? "upgrade" : C ? "service_recall" : k ? "displaced" : x ? "yield" : v ? "shutdown_op" : N ? "idle_exit" : I ? "bg_manager_failed" : s.aborted ? "signal" : "unknown",
    z = Date.now() - y.startedAt;
  if (d.write("supervisor", `shutting down (cause=${Y}, uptime=${Math.round(z / 1000)}s, leases=${L.manager?.leaseCount() ?? -1}, live_workers=${L.manager?.liveHandleCount() ?? -1})`), G("tengu_daemon_exit", {
    cause: $e(Y),
    uptime_ms: z,
    lease_count: L.manager?.leaseCount() ?? -1,
    live_handles: L.manager?.liveHandleCount() ?? -1,
    ever_had_keep_alive: B,
    origin: $e(r)
  }), _.disposeWatcher(), await _.drainReloads(), !k && r === "transient") {
    let J = await mse().catch(() => null);
    k = J !== null && J.pid !== y.pid;
  }
  let K = !1,
    Z = async () => {
      if (K) return;
      K = !0;
      let J = await mse();
      if (J && J.pid === y.pid && J.startedAt === y.startedAt) await fNl();
    };
  if (x) await L.manager?.close({
    displaced: k
  }), L.manager = null;
  if (N || C || x || I) {
    if (await Z(), C) {
      if (L.manager?.killAll("SIGTERM"), !L.manager) {
        let J = await h3({
          silent: !0
        }).catch(() => null);
        for (let ne of Object.values(J?.workers ?? {})) if (ne.pid > 0) await sWo(ne.pid, ne.procStart).catch(() => !1);
      }
    }
  }
  if (await Promise.all([L.manager?.close({
    displaced: k
  }), _.stop()]), await Z(), C) await AEt();
  return await d.close(), S.dispose(), {
    upgradeDetected: A,
    exitCode: I ? 1 : 0
  };
}
var yhr,
  lNm = 60000,
  Sqc = 5000,
  cNm;