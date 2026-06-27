// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wYe
// matched 2.1.88 source: src/bridge/bridgeMain.ts
// class=modified  jaccard=0.4312  score=0.7464  fileCov=0.5052
// note: deminified; 12 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: runBridgeLoop, runBridgeHeadless, parseArgs, isServerError, isConnectionError, bridgeMain, BridgeHeadlessPermanentError
function Stc(e) {
  return e.connCapMs * 2;
}
function Atc(e) {
  return `${e.replace(/[.!?]?\s*$/, ".")} Re-run \`claude remote-control\` to reconnect.`;
}
function dGo(e) {
  if (e instanceof Qq) return e.status === 404 || e.status === 410;
  return /environment .* not found/i.test(be(e));
}
function Htc() {
  if (dm() || !process.argv[1]) return [];
  return [process.argv[1]];
}
function safeSpawn(spawner, opts, dir) {
  try {
    return spawner.spawn(opts, dir);
  } catch (r) {
    let o = be(r);
    return (ke(Rh(Error(`Session spawn failed: ${o}`), "Session spawn failed")), o);
  }
}
async function runBridgeLoop(
  config,
  environmentId,
  environmentSecret,
  api,
  spawner,
  logger,
  signal,
  backoffConfig = JYf,
  initialSessionId,
  getAccessToken,
  u,
) {
  let controller = new AbortController();
  if (signal.aborted) controller.abort();
  else
    signal.addEventListener("abort", () => controller.abort(), {
      once: true,
    });
  let p = controller.signal,
    activeSessions = new Map(),
    m = new Map(),
    g = new Map(),
    h = new Map(),
    y = new Map(),
    b = new Map(),
    completedWorkIds = new Set(),
    sessionWorktrees = new Map(),
    A = new Set(),
    v = [],
    titledSessions = new Set(),
    x = new Map(),
    I = initialSessionId ? oP(initialSessionId) : void 0;
  if (I && u) x.set(I, new Set([u]));
  let k = 0,
    D = new Map(),
    capacityWake = utc(p);
  async function O() {
    let me = false,
      pe = false,
      ge = [];
    for (let [he] of activeSessions) {
      let ie = g.get(he),
        le = y.get(he);
      if (!ie || !le) continue;
      try {
        (await api.heartbeatWork(environmentId, ie, le), (me = true));
      } catch (He) {
        if (
          (T(`[bridge:heartbeat] Failed for sessionId=${he} workId=${ie}: ${be(He)}`),
          He instanceof Qq)
        )
          if (
            (G("tengu_bridge_heartbeat_error", {
              status: He.status,
              error_type: We(He.status === 401 || He.status === 403 ? "auth_failed" : "fatal"),
            }),
            He.status === 401 || He.status === 403)
          )
            ge.push(he);
          else pe = true;
      }
    }
    for (let he of ge) {
      logger.logVerbose(`Session ${he} token expired \u2014 re-queuing via bridge/reconnect`);
      try {
        (await api.reconnectSession(environmentId, he),
          T(`[bridge:heartbeat] Re-queued sessionId=${he} via bridge/reconnect`));
      } catch (ie) {
        if (dGo(ie)) {
          T(`[bridge:heartbeat] reconnectSession(${he}) skipped \u2014 resource gone: ${be(ie)}`);
          continue;
        }
        (logger.logError(`Failed to refresh session ${he} token: ${be(ie)}`),
          T(`[bridge:heartbeat] reconnectSession(${he}) failed: ${be(ie)}`, {
            level: "error",
          }));
      }
    }
    if (pe) return "fatal";
    if (ge.length > 0) return "auth_failed";
    return me ? "ok" : "failed";
  }
  let L = new Set(),
    M = getAccessToken
      ? NSn({
          getAccessToken: getAccessToken,
          onRefresh: (me, pe) => {
            let ge = activeSessions.get(me);
            if (!ge) return;
            if (L.has(me))
              (logger.logVerbose(`Refreshing session ${me} token via bridge/reconnect`),
                api.reconnectSession(environmentId, me).catch((he) => {
                  (logger.logError(`Failed to refresh session ${me} token: ${be(he)}`),
                    T(`[bridge:token] reconnectSession(${me}) failed: ${be(he)}`, {
                      level: "error",
                    }));
                }));
            else ge.updateAccessToken(pe);
          },
          label: "bridge",
        })
      : null,
    N = Date.now(),
    pendingCleanups = new Set();
  function $(me) {
    (pendingCleanups.add(me), me.finally(() => pendingCleanups.delete(me)));
  }
  let q = 0,
    W = 0,
    V = null,
    Y = null,
    z = null,
    K = null,
    Z = false,
    J = false;
  if (
    (T(
      `[bridge:work] Starting poll loop spawnMode=${config.spawnMode} maxSessions=${config.maxSessions} environmentId=${environmentId}`,
    ),
    In("info", "bridge_loop_started", {
      max_sessions: config.maxSessions,
      spawn_mode: config.spawnMode,
    }),
    logger.printBanner(config, environmentId),
    logger.updateSessionCount(0, config.maxSessions, config.spawnMode),
    initialSessionId)
  )
    logger.setAttached(initialSessionId);
  function ne() {
    logger.updateSessionCount(activeSessions.size, config.maxSessions, config.spawnMode);
    for (let [He, ye] of activeSessions) {
      let ue = ye.currentActivity;
      if (ue) logger.updateSessionActivity(h.get(He) ?? He, ue);
    }
    if (activeSessions.size === 0) {
      if (!Z) ((Z = true), logger.updateIdleStatus());
      return;
    }
    Z = false;
    let [me, pe] = [...activeSessions.entries()].pop(),
      ge = m.get(me);
    if (!ge) return;
    let he = pe.currentActivity;
    if (!he || he.type === "result" || he.type === "error") {
      if (config.maxSessions > 1) logger.refreshDisplay();
      return;
    }
    let ie = Yi(Date.now() - ge),
      le = pe.activities
        .filter((He) => He.type === "tool_start")
        .slice(-5)
        .map((He) => He.summary);
    logger.updateSessionStatus(me, ie, he, le);
  }
  function oe() {
    (re(), ne(), (K = setInterval(ne, QYf)));
  }
  function re() {
    if (K) (clearInterval(K), (K = null));
  }
  function ee(me, pe, ge) {
    return (he) => {
      let ie = g.get(me);
      (activeSessions.delete(me),
        m.delete(me),
        g.delete(me),
        y.delete(me),
        b.get(me)?.stop(),
        b.delete(me));
      let le = h.get(me) ?? me;
      if ((h.delete(me), logger.removeSession(le), titledSessions.delete(le), le === I && u))
        x.set(le, new Set([u]));
      else x.delete(le);
      (D.delete(me), L.delete(me), M?.cancel(me), capacityWake.wake());
      let He = Date.now() - pe;
      (T(
        `[bridge:session] sessionId=${me} workId=${ie ?? "unknown"} exited status=${he} duration=${Yi(He)}`,
      ),
        G("tengu_bridge_session_done", {
          status: $e(he),
          duration_ms: He,
        }),
        In("info", "bridge_session_done", {
          status: he,
          duration_ms: He,
        }),
        logger.clearStatus(),
        re());
      let ye =
          ge.lastStderr.length > 0
            ? ge.lastStderr.join(`
`)
            : void 0,
        ue;
      switch (he) {
        case "completed":
          logger.logSessionComplete(me, He);
          break;
        case "failed":
          if (!p.aborted)
            if (
              ((ue = ye ?? "Process exited with error"),
              logger.logSessionFailed(me, ue),
              !ye || ue.includes("transport closed"))
            )
              T(`Bridge session failed: ${ue}`, {
                level: "error",
              });
            else ke(Rh(Error(`Bridge session failed: ${ue}`), "Bridge session failed"));
          break;
        case "interrupted":
          logger.logVerbose(`Session ${me} interrupted`);
          break;
      }
      if (he !== "interrupted" && ie)
        (completedWorkIds.add(ie),
          $(stopWorkWithRetry(api, environmentId, ie, logger, backoffConfig.stopWorkBaseDelayMs)));
      let we = he === "failed" && !p.aborted && !J;
      if (we) A.add(me);
      let Ce = sessionWorktrees.get(me);
      if (Ce)
        if ((sessionWorktrees.delete(me), we)) {
          if (
            (logger.logStatus(`kept worktree ${Ce.worktreePath} \xB7 session crashed`),
            ue?.includes("transport closed"))
          )
            v.push(Ce.worktreePath);
        } else $(uGo(Ce, logger));
      if (he !== "interrupted" && !p.aborted)
        if (config.spawnMode !== "single-session") {
          if (he === "completed")
            $(
              api
                .archiveSession(le)
                .catch((Ie) => logger.logVerbose(`Failed to archive session ${me}: ${be(Ie)}`)),
            );
          T(`[bridge:session] Session ${he}, returning to idle (multi-session mode)`);
        } else {
          (T(`[bridge:session] Session ${he}, aborting poll loop to tear down environment`),
            controller.abort());
          return;
        }
      if (!p.aborted) oe();
    };
  }
  if (!initialSessionId) oe();
  function ce() {
    let me = A.size;
    logger.logStatus(
      me > 0
        ? `${me} ${bn(me, "session")} ended while this machine was offline \u2014 the environment was cleaned up on the server and can't be resumed.`
        : "This environment was cleaned up while the machine was offline and can't be resumed.",
    );
    let pe = Uo(v);
    if (pe.length > 0)
      logger.logStatus(`Your work is safe \u2014 worktrees kept: ${pe.join(", ")}`);
    logger.logStatus("Run `claude remote-control` to start a fresh environment.");
  }
  while (!p.aborted) {
    let me = U1e();
    try {
      let pe = await api.pollForWork(environmentId, environmentSecret, p, me.reclaim_older_than_ms);
      if (V !== null || Y !== null) {
        let ye = Date.now() - (V ?? Y ?? Date.now());
        (logger.logReconnected(ye),
          T(`[bridge:poll] Reconnected after ${Yi(ye)}`),
          G("tengu_bridge_reconnected", {
            disconnected_ms: ye,
          }),
          (Z = false));
      }
      if (((q = 0), (W = 0), (V = null), (Y = null), (z = null), !pe)) {
        if (activeSessions.size >= config.maxSessions) {
          let ue = me.multisession_poll_interval_ms_at_capacity;
          if (me.non_exclusive_heartbeat_interval_ms > 0) {
            G("tengu_bridge_heartbeat_mode_entered", {
              active_sessions: activeSessions.size,
              heartbeat_interval_ms: me.non_exclusive_heartbeat_interval_ms,
            });
            let we = ue > 0 ? Date.now() + ue : null,
              Ce = "ok",
              Ie = 0;
            while (
              !p.aborted &&
              activeSessions.size >= config.maxSessions &&
              (we === null || Date.now() < we)
            ) {
              let Ze = U1e();
              if (Ze.non_exclusive_heartbeat_interval_ms <= 0) break;
              let Be = capacityWake.signal();
              if (((Ce = await O()), Ce === "auth_failed" || Ce === "fatal")) {
                Be.cleanup();
                break;
              }
              (Ie++, await Nn(Ze.non_exclusive_heartbeat_interval_ms, Be.signal), Be.cleanup());
            }
            let Ve =
              Ce === "auth_failed" || Ce === "fatal"
                ? Ce
                : p.aborted
                  ? "shutdown"
                  : activeSessions.size < config.maxSessions
                    ? "capacity_changed"
                    : we !== null && Date.now() >= we
                      ? "poll_due"
                      : "config_disabled";
            if (
              (G("tengu_bridge_heartbeat_mode_exited", {
                reason: $e(Ve),
                heartbeat_cycles: Ie,
                active_sessions: activeSessions.size,
              }),
              Ve === "poll_due")
            )
              T(
                `[bridge:poll] Heartbeat poll_due after ${Ie} cycles \u2014 falling through to pollForWork`,
              );
            if (Ce === "auth_failed" || Ce === "fatal") {
              let Ze = capacityWake.signal();
              (await Nn(ue > 0 ? ue : me.non_exclusive_heartbeat_interval_ms, Ze.signal),
                Ze.cleanup());
            }
          } else if (ue > 0) {
            let we = capacityWake.signal();
            (await Nn(ue, we.signal), we.cleanup());
          }
        } else {
          let ue =
            activeSessions.size > 0
              ? me.multisession_poll_interval_ms_partial_capacity
              : me.multisession_poll_interval_ms_not_at_capacity;
          await Nn(ue, p);
        }
        continue;
      }
      let he = activeSessions.size >= config.maxSessions;
      if (completedWorkIds.has(pe.id)) {
        if ((T(`[bridge:work] Skipping already-completed workId=${pe.id}`), he)) {
          let ye = capacityWake.signal();
          if (me.non_exclusive_heartbeat_interval_ms > 0)
            (await O(), await Nn(me.non_exclusive_heartbeat_interval_ms, ye.signal));
          else if (me.multisession_poll_interval_ms_at_capacity > 0)
            await Nn(me.multisession_poll_interval_ms_at_capacity, ye.signal);
          ye.cleanup();
        } else await Nn(1000, p);
        continue;
      }
      let ie;
      try {
        ie = htc(pe.secret);
      } catch (ye) {
        let ue = be(ye);
        if (
          (logger.logError(`Failed to decode work secret for workId=${pe.id}: ${ue}`),
          G("tengu_bridge_work_secret_failed", {}),
          completedWorkIds.add(pe.id),
          $(
            stopWorkWithRetry(api, environmentId, pe.id, logger, backoffConfig.stopWorkBaseDelayMs),
          ),
          he)
        ) {
          let we = capacityWake.signal();
          if (me.non_exclusive_heartbeat_interval_ms > 0)
            (await O(), await Nn(me.non_exclusive_heartbeat_interval_ms, we.signal));
          else if (me.multisession_poll_interval_ms_at_capacity > 0)
            await Nn(me.multisession_poll_interval_ms_at_capacity, we.signal);
          we.cleanup();
        }
        continue;
      }
      let le = async () => {
          T(`[bridge:work] Acknowledging workId=${pe.id}`);
          try {
            await api.acknowledgeWork(environmentId, pe.id, ie.session_ingress_token);
          } catch (ye) {
            T(`[bridge:work] Acknowledge failed workId=${pe.id}: ${be(ye)}`);
          }
        },
        He = pe.data.type;
      switch (pe.data.type) {
        case "healthcheck":
          (await le(),
            T("[bridge:work] Healthcheck received"),
            logger.logVerbose("Healthcheck received"));
          break;
        case "session": {
          let ye = pe.data.id;
          try {
            Jq(ye, "session_id");
          } catch {
            (await le(), logger.logError(`Invalid session_id received: ${ye}`));
            break;
          }
          let ue = activeSessions.get(ye);
          if (ue) {
            (ue.updateAccessToken(ie.session_ingress_token),
              y.set(ye, ie.session_ingress_token),
              b.get(ye)?.updateAccessToken(ie.session_ingress_token),
              g.set(ye, pe.id),
              M?.schedule(ye, ie.session_ingress_token),
              T(`[bridge:work] Updated access token for existing sessionId=${ye} workId=${pe.id}`),
              await le());
            break;
          }
          if (activeSessions.size >= config.maxSessions) {
            T(
              `[bridge:work] At capacity (${activeSessions.size}/${config.maxSessions}), cannot spawn new session for workId=${pe.id}`,
            );
            break;
          }
          await le();
          let we = Date.now(),
            Ce,
            Ie = false,
            Ve;
          if (ie.use_code_sessions === true || ut(process.env.CLAUDE_BRIDGE_USE_CCR_V2)) {
            Ce = tQt(config.apiBaseUrl, ye);
            for (let st = 1; st <= 2; st++)
              try {
                ((Ve = await Wir(Ce, ie.session_ingress_token)),
                  (Ie = true),
                  T(
                    `[bridge:session] CCR v2: registered worker sessionId=${ye} epoch=${Ve} attempt=${st}`,
                  ),
                  xe("bridge_register_worker"));
                break;
              } catch (xt) {
                let vt = be(xt);
                if (st < 2) {
                  if (
                    (T(
                      `[bridge:session] CCR v2: registerWorker attempt ${st} failed, retrying: ${vt}`,
                    ),
                    await Nn(2000, p),
                    p.aborted)
                  )
                    break;
                  continue;
                }
                (logger.logError(`CCR v2 worker registration failed for session ${ye}: ${vt}`),
                  Le("bridge_register_worker", "request_failed"));
                let { kind: jt, status: en } = $A(xt);
                if (jt !== "other" && ((en ?? 0) < 500 || en === 503))
                  T(`registerWorker failed: ${vt}`, {
                    level: "error",
                  });
                else ke(Error(`registerWorker failed: ${vt}`));
                (completedWorkIds.add(pe.id),
                  $(
                    stopWorkWithRetry(
                      api,
                      environmentId,
                      pe.id,
                      logger,
                      backoffConfig.stopWorkBaseDelayMs,
                    ),
                  ));
              }
            if (!Ie) break;
          } else Ce = ytc(config.sessionIngressUrl, ye);
          let { spawnMode: Ze, dir: Be } = config,
            Me = 0;
          if (Ze === "worktree" && (initialSessionId === void 0 || !iGo(ye, initialSessionId))) {
            let st = Date.now();
            try {
              let xt = await M6e(`bridge-${Gir(ye)}`);
              ((Me = Date.now() - st),
                sessionWorktrees.set(ye, {
                  worktreePath: xt.worktreePath,
                  worktreeBranch: xt.worktreeBranch,
                  gitRoot: xt.gitRoot,
                  hookBased: xt.hookBased,
                  headCommit: xt.headCommit,
                }),
                (Be = xt.worktreePath),
                T(`[bridge:session] Created worktree for sessionId=${ye} at ${xt.worktreePath}`));
            } catch (xt) {
              let vt = be(xt);
              (logger.logError(`Failed to create worktree for session ${ye}: ${vt}`),
                T(`Worktree creation failed for session ${ye}: ${vt}`, {
                  level: "error",
                }),
                completedWorkIds.add(pe.id),
                $(
                  stopWorkWithRetry(
                    api,
                    environmentId,
                    pe.id,
                    logger,
                    backoffConfig.stopWorkBaseDelayMs,
                  ),
                ));
              break;
            }
          }
          T(`[bridge:session] Spawning sessionId=${ye} sdkUrl=${Ce}`);
          let Ue = oP(ye),
            tt = ++k;
          D.set(ye, tt);
          let bt = safeSpawn(
            spawner,
            {
              sessionId: ye,
              sdkUrl: Ce,
              accessToken: ie.session_ingress_token,
              useCcrV2: Ie,
              workerEpoch: Ve,
              onFirstUserMessage: (st) => {
                if (titledSessions.has(Ue)) return;
                titledSessions.add(Ue);
                let xt = a7f(st);
                (logger.setSessionTitle(Ue, xt),
                  T(`[bridge:title] derived title for ${Ue}: ${xt}`),
                  Promise.resolve()
                    .then(() => (nOe(), Dze))
                    .then(async ({ getBridgeSession: vt, updateBridgeSessionTitle: jt }) => {
                      let en = await vt(Ue, {
                        baseUrl: config.apiBaseUrl,
                      });
                      if (en === null || D.get(ye) !== tt) return;
                      let Dn = x.get(Ue);
                      if (en.title && !Dn?.has(en.title)) {
                        (logger.setSessionTitle(Ue, en.title),
                          T(`[bridge:title] remote rename for ${Ue}: ${en.title}`));
                        return;
                      }
                      (x.set(Ue, (Dn ?? new Set()).add(xt)),
                        await jt(Ue, xt, {
                          baseUrl: config.apiBaseUrl,
                        }));
                    })
                    .catch((vt) =>
                      T(`[bridge:title] failed to update title for ${Ue}: ${vt}`, {
                        level: "error",
                      }),
                    ));
              },
            },
            Be,
          );
          if (typeof bt === "string") {
            logger.logError(`Failed to spawn session ${ye}: ${bt}`);
            let st = sessionWorktrees.get(ye);
            if (st)
              (sessionWorktrees.delete(ye),
                $(
                  uGo(st, logger, {
                    force: true,
                  }),
                ));
            (completedWorkIds.add(pe.id),
              $(
                stopWorkWithRetry(
                  api,
                  environmentId,
                  pe.id,
                  logger,
                  backoffConfig.stopWorkBaseDelayMs,
                ),
              ));
            break;
          }
          let Ke = bt,
            Et = Date.now() - we;
          (G("tengu_bridge_session_started", {
            active_sessions: activeSessions.size,
            spawn_mode: $e(Ze),
            in_worktree: sessionWorktrees.has(ye),
            spawn_duration_ms: Et,
            worktree_create_ms: Me,
            inProtectedNamespace: $V(),
            ...yHt(),
          }),
            In("info", "bridge_session_started", {
              spawn_mode: Ze,
              in_worktree: sessionWorktrees.has(ye),
              spawn_duration_ms: Et,
              worktree_create_ms: Me,
            }),
            activeSessions.set(ye, Ke),
            g.set(ye, pe.id),
            y.set(ye, ie.session_ingress_token),
            h.set(ye, Ue));
          let ct = Date.now();
          (m.set(ye, ct), logger.logSessionStart(ye, `Session ${ye}`));
          let Je = Gir(ye),
            gt;
          if (config.debugFile) {
            let st = config.debugFile.lastIndexOf(".");
            if (st > 0) gt = `${config.debugFile.slice(0, st)}-${Je}${config.debugFile.slice(st)}`;
            else gt = `${config.debugFile}-${Je}`;
          } else if (config.verbose) gt = G1e.join(qE(), `bridge-session-${Je}.log`);
          if (gt) logger.logVerbose(`Debug log: ${gt}`);
          if (
            (logger.addSession(
              Ue,
              dS(Ue, config.sessionIngressUrl, {
                from: "cli",
              }),
            ),
            oe(),
            logger.setAttached(Ue),
            l7f(Ue, config.apiBaseUrl)
              .then((st) => {
                if (st && D.get(ye) === tt && !titledSessions.has(Ue)) {
                  if (
                    (logger.setSessionTitle(Ue, st),
                    T(`[bridge:title] server title for ${Ue}: ${st}`),
                    !x.get(Ue)?.has(st))
                  )
                    titledSessions.add(Ue);
                }
              })
              .catch((st) =>
                T(`[bridge:title] failed to fetch title for ${Ue}: ${st}`, {
                  level: "error",
                }),
              ),
            Ie)
          )
            L.add(ye);
          (M?.schedule(ye, ie.session_ingress_token), Ke.done.then(ee(ye, ct, Ke)));
          break;
        }
        default:
          (await le(), T(`[bridge:work] Unknown work type: ${He}, skipping`));
          break;
      }
      if (he) {
        let ye = capacityWake.signal();
        if (me.non_exclusive_heartbeat_interval_ms > 0)
          (await O(), await Nn(me.non_exclusive_heartbeat_interval_ms, ye.signal));
        else if (me.multisession_poll_interval_ms_at_capacity > 0)
          await Nn(me.multisession_poll_interval_ms_at_capacity, ye.signal);
        ye.cleanup();
      }
    } catch (pe) {
      if (p.aborted) break;
      if (pe instanceof Qq) {
        if (((J = true), pe.status !== 401 && ZJt(pe.errorType))) logger.logStatus(Atc(pe.message));
        else if (tGo(pe)) T(`[bridge:work] Suppressed 403 error: ${pe.message}`);
        else if (dGo(pe) && A.size > 0) ce();
        else
          (logger.logError(pe.message),
            T(`[bridge:work] Fatal bridge error: ${pe.message}`, {
              level: "error",
            }));
        (G("tengu_bridge_fatal_error", {
          status: pe.status,
          error_type: pe.errorType,
        }),
          In(ZJt(pe.errorType) ? "info" : "error", "bridge_fatal_error", {
            status: pe.status,
            error_type: pe.errorType,
          }));
        break;
      }
      let ge = mOa(pe);
      if (isConnectionError(pe) || isServerError(pe)) {
        let he = Date.now();
        if (z !== null && he - z > Stc(backoffConfig))
          (T(
            `[bridge:work] Detected system sleep (${Math.round((he - z) / 1000)}s gap), resetting error budget`,
          ),
            In("info", "bridge_poll_sleep_detected", {
              gapMs: he - z,
            }),
            (V = null),
            (q = 0),
            (Y = null),
            (W = 0));
        if (((z = he), !V)) V = he;
        let ie = he - V;
        if (ie >= backoffConfig.connGiveUpMs) {
          (logger.logError(`Server unreachable for ${Math.round(ie / 60000)} minutes, giving up.`),
            G("tengu_bridge_poll_give_up", {
              error_type: We("connection"),
              elapsed_ms: ie,
            }),
            In("error", "bridge_poll_give_up", {
              error_type: "connection",
              elapsed_ms: ie,
            }),
            (J = true));
          break;
        }
        ((Y = null),
          (W = 0),
          (q = q ? Math.min(q * 2, backoffConfig.connCapMs) : backoffConfig.connInitialMs));
        let le = pGo(q);
        if (
          (logger.logVerbose(
            `Connection error, retrying in ${rQt(le)} (${Math.round(ie / 1000)}s elapsed): ${ge}`,
          ),
          logger.updateReconnectingStatus(rQt(le), Yi(ie)),
          U1e().non_exclusive_heartbeat_interval_ms > 0)
        )
          await O();
        await Nn(le, p);
      } else {
        let he = Date.now();
        if (z !== null && he - z > Stc(backoffConfig))
          (T(
            `[bridge:work] Detected system sleep (${Math.round((he - z) / 1000)}s gap), resetting error budget`,
          ),
            In("info", "bridge_poll_sleep_detected", {
              gapMs: he - z,
            }),
            (V = null),
            (q = 0),
            (Y = null),
            (W = 0));
        if (((z = he), !Y)) Y = he;
        let ie = he - Y;
        if (ie >= backoffConfig.generalGiveUpMs) {
          (logger.logError(`Persistent errors for ${Math.round(ie / 60000)} minutes, giving up.`),
            G("tengu_bridge_poll_give_up", {
              error_type: We("general"),
              elapsed_ms: ie,
            }),
            In("error", "bridge_poll_give_up", {
              error_type: "general",
              elapsed_ms: ie,
            }),
            (J = true));
          break;
        }
        ((V = null),
          (q = 0),
          (W = W ? Math.min(W * 2, backoffConfig.generalCapMs) : backoffConfig.generalInitialMs));
        let le = pGo(W);
        if (
          (logger.logVerbose(
            `Poll failed, retrying in ${rQt(le)} (${Math.round(ie / 1000)}s elapsed): ${ge}`,
          ),
          logger.updateReconnectingStatus(rQt(le), Yi(ie)),
          U1e().non_exclusive_heartbeat_interval_ms > 0)
        )
          await O();
        await Nn(le, p);
      }
    }
  }
  (re(), logger.clearStatus());
  let ae = Date.now() - N;
  (G("tengu_bridge_shutdown", {
    active_sessions: activeSessions.size,
    loop_duration_ms: ae,
  }),
    In("info", "bridge_shutdown", {
      active_sessions: activeSessions.size,
      loop_duration_ms: ae,
    }));
  let de = new Set(activeSessions.keys());
  if (initialSessionId && ![...A].some((me) => iGo(me, initialSessionId))) de.add(initialSessionId);
  let Ee = new Map(h);
  if (activeSessions.size > 0) {
    (T(`[bridge:shutdown] Shutting down ${activeSessions.size} active session(s)`),
      logger.logStatus(`Shutting down ${activeSessions.size} active session(s)\u2026`));
    let me = new Map(g);
    for (let [ge, he] of activeSessions.entries())
      (T(`[bridge:shutdown] Sending SIGTERM to sessionId=${ge}`), he.kill());
    let pe = new AbortController();
    (await Promise.race([
      Promise.allSettled([...activeSessions.values()].map((ge) => ge.done)),
      Nn(backoffConfig.shutdownGraceMs ?? 30000, pe.signal),
    ]),
      pe.abort());
    for (let [ge, he] of activeSessions.entries())
      (T(`[bridge:shutdown] Force-killing stuck sessionId=${ge}`), he.forceKill());
    if ((M?.cancelAll(), sessionWorktrees.size > 0)) {
      let ge = [...sessionWorktrees.values()];
      (sessionWorktrees.clear(),
        T(`[bridge:shutdown] Cleaning up ${ge.length} worktree(s)`),
        await Promise.allSettled(ge.map((he) => uGo(he, logger))));
    }
    await Promise.allSettled(
      [...me.entries()].map(([ge, he]) =>
        api
          .stopWork(environmentId, he, true)
          .catch((ie) =>
            logger.logVerbose(`Failed to stop work ${he} for session ${ge}: ${be(ie)}`),
          ),
      ),
    );
  }
  if (pendingCleanups.size > 0) await Promise.allSettled([...pendingCleanups]);
  if (config.preserveOnShutdown && !J) {
    (logger.logStatus(
      "Environment preserved. Restart `claude remote-control` to reconnect existing sessions.",
    ),
      T(
        `[bridge:shutdown] Skipping archive+deregister to allow resume (env ${environmentId}, spawnMode ${config.spawnMode})`,
      ));
    return;
  }
  if (de.size > 0)
    (T(`[bridge:shutdown] Archiving ${de.size} session(s)`),
      await Promise.allSettled(
        [...de].map((me) =>
          api
            .archiveSession(Ee.get(me) ?? oP(me))
            .catch((pe) => logger.logVerbose(`Failed to archive session ${me}: ${be(pe)}`)),
        ),
      ));
  try {
    (await api.deregisterEnvironment(environmentId),
      T("[bridge:shutdown] Environment deregistered, bridge offline"),
      logger.logVerbose("Environment deregistered."));
  } catch (me) {
    logger.logVerbose(`Failed to deregister environment: ${be(me)}`);
  }
  if (config.preserveOnShutdown) {
    let { clearBridgePointer: me } = await Promise.resolve().then(() => (j1e(), F1e));
    await me(config.dir);
  }
  logger.logVerbose("Environment offline.");
}
function isConnectionError(err) {
  if (
    err &&
    typeof err === "object" &&
    "code" in err &&
    typeof err.code === "string" &&
    e7f.has(err.code)
  )
    return true;
  return false;
}
function isServerError(err) {
  return (
    !!err &&
    typeof err === "object" &&
    "code" in err &&
    typeof err.code === "string" &&
    err.code === "ERR_BAD_RESPONSE"
  );
}
function pGo(e) {
  return Math.max(0, e + e * 0.25 * (2 * Math.random() - 1));
}
function rQt(e) {
  return e >= 1000 ? `${(e / 1000).toFixed(1)}s` : `${Math.round(e)}ms`;
}
async function stopWorkWithRetry(api, environmentId, workId, logger, o = 1000) {
  for (let i = 1; i <= 3; i++)
    try {
      (await api.stopWork(environmentId, workId, false),
        T(`[bridge:work] stopWork succeeded for workId=${workId} on attempt ${i}/3`),
        xe("bridge_work_stop"));
      return;
    } catch (a) {
      if (a instanceof Qq) {
        if (tGo(a))
          (T(`[bridge:work] Suppressed stopWork 403 for ${workId}: ${a.message}`),
            It("bridge_work_stop", "fatal_403"));
        else if (dGo(a))
          (T(`[bridge:work] stopWork skipped for ${workId} \u2014 environment gone: ${a.message}`),
            It("bridge_work_stop", "env_gone"));
        else
          (logger.logError(`Failed to stop work ${workId}: ${a.message}`),
            Le("bridge_work_stop", "fatal_403"));
        In("error", "bridge_stop_work_failed", {
          attempts: i,
          fatal: true,
        });
        return;
      }
      let l = be(a);
      if (i < 3) {
        let c = pGo(o * Math.pow(2, i - 1));
        (logger.logVerbose(
          `Failed to stop work ${workId} (attempt ${i}/3), retrying in ${rQt(c)}: ${l}`,
        ),
          await Nn(c));
      } else
        (logger.logError(`Failed to stop work ${workId} after 3 attempts: ${l}`),
          In("error", "bridge_stop_work_failed", {
            attempts: 3,
          }),
          Le("bridge_work_stop", "retries_exhausted"));
    }
}
async function uGo(e, t, n) {
  let r = n?.force || (e.hookBased && e.headCommit === void 0),
    {
      dirty: o,
      commitsAhead: s,
      gitError: i,
    } = r
      ? {
          dirty: false,
          commitsAhead: 0,
          gitError: false,
        }
      : await SHt(e.worktreePath, e.headCommit);
  if (o || s > 0) {
    let l = `${s} ${bn(s, "commit")}`,
      c = i
        ? "git error checking changes"
        : o && s > 0
          ? `uncommitted changes \xB7 ${l}`
          : o
            ? "uncommitted changes"
            : l;
    if (e.gitRoot) await y$e(e.worktreePath, e.gitRoot);
    (t.logStatus(`kept worktree ${e.worktreePath} \xB7 ${c}`),
      T(`[bridge:worktree] kept ${e.worktreePath} dirty=${o} commitsAhead=${s} gitError=${!!i}`));
    return;
  }
  if (await joe(e.worktreePath, e.worktreeBranch, e.gitRoot, e.hookBased, "bridge"))
    t.logStatus(`removed worktree ${e.worktreePath}`);
  else t.logStatus(`worktree removal failed, kept: ${e.worktreePath}`);
}
function parseSpawnValue(raw) {
  if (raw === "session") return "single-session";
  if (raw === "same-dir") return "same-dir";
  if (raw === "worktree") return "worktree";
  return `--spawn requires one of: ${t7f.join(", ")} (got: ${raw ?? "<missing>"})`;
}
function parseCapacityValue(raw) {
  let t = raw === void 0 ? NaN : parseInt(raw, 10);
  if (isNaN(t) || t < 1)
    return `--capacity requires a positive integer (got: ${raw ?? "<missing>"})`;
  return t;
}
function o7f(e) {
  let t = e === void 0 ? NaN : Number(e);
  if (!Number.isInteger(t) || t < 1024 || t > 65535)
    return `--preview-port requires an integer in [1024, 65535] (got: ${e ?? "<missing>"})`;
  return t;
}
function parseArgs(args) {
  let t = false,
    n = false,
    r,
    o,
    s,
    i,
    a = false,
    l,
    c,
    u,
    d,
    p = false,
    f = false,
    m = [];
  for (let h = 0; h < args.length; h++) {
    let y = args[h];
    if (y === "--help" || y === "-h") a = true;
    else if (y === "--verbose" || y === "-v") t = true;
    else if (y === "--sandbox") n = true;
    else if (y === "--no-sandbox") n = false;
    else if (y === "--debug-file" && h + 1 < args.length) r = G1e.resolve(args[++h]);
    else if (y.startsWith("--debug-file=")) r = G1e.resolve(y.slice(13));
    else if (y === "--permission-mode" && h + 1 < args.length) o = args[++h];
    else if (y.startsWith("--permission-mode=")) o = y.slice(18);
    else if (y === "--name" && h + 1 < args.length) s = args[++h];
    else if (y.startsWith("--name=")) s = y.slice(7);
    else if (y === "--remote-control-session-name-prefix" && h + 1 < args.length) i = args[++h];
    else if (y.startsWith("--remote-control-session-name-prefix=")) i = y.slice(37);
    else if (y === "--spawn" || y.startsWith("--spawn=")) {
      if (l !== void 0) return g("--spawn may only be specified once");
      let b = y.startsWith("--spawn=") ? y.slice(8) : args[++h],
        _ = parseSpawnValue(b);
      if (_ === "single-session" || _ === "same-dir" || _ === "worktree") l = _;
      else return g(_);
    } else if (y === "--capacity" || y.startsWith("--capacity=")) {
      if (c !== void 0) return g("--capacity may only be specified once");
      let b = y.startsWith("--capacity=") ? y.slice(11) : args[++h],
        _ = parseCapacityValue(b);
      if (typeof _ === "number") c = _;
      else return g(_);
    } else if (y === "--create-session-in-dir") u = true;
    else if (y === "--no-create-session-in-dir") u = false;
    else if (y === "--enable-live-preview") f = true;
    else if (y === "--preview-port" || y.startsWith("--preview-port=")) {
      let b = y.startsWith("--preview-port=") ? y.slice(15) : args[++h],
        _ = o7f(b);
      if (typeof _ === "number") m.push(_);
      else return g(_);
    } else
      return g(`Unknown argument: ${y}
Run 'claude remote-control --help' for usage.`);
  }
  if (l === "single-session" && c !== void 0)
    return g(
      "--capacity cannot be used with --spawn=session (single-session mode has fixed capacity 1).",
    );
  if ((d || p) && (l !== void 0 || c !== void 0 || u !== void 0))
    return g(
      "--session-id and --continue cannot be used with --spawn, --capacity, or --create-session-in-dir.",
    );
  if (d && p) return g("--session-id and --continue cannot be used together.");
  if (f || m.length > 0)
    return g("--enable-live-preview and --preview-port are not available in this build.");
  if (Vi() && (f || m.length > 0))
    return g(
      `--enable-live-preview is unavailable while nonessential network traffic is disabled (${GZe() ?? "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC"} is set).`,
    );
  if (f && m.length === 0)
    return g("--enable-live-preview requires at least one --preview-port <port>.");
  if (!f && m.length > 0)
    return g("--preview-port requires --enable-live-preview (the tunnel is off by default).");
  return {
    verbose: t,
    sandbox: n,
    debugFile: r,
    permissionMode: o,
    name: s,
    sessionNamePrefix: i,
    spawnMode: l,
    capacity: c,
    createSessionInDir: u,
    sessionId: d,
    continueSession: p,
    enableLivePreview: f,
    previewPorts: m,
    help: a,
  };
  function g(h) {
    return {
      verbose: t,
      sandbox: n,
      debugFile: r,
      permissionMode: o,
      name: s,
      sessionNamePrefix: i,
      spawnMode: l,
      capacity: c,
      createSessionInDir: u,
      sessionId: d,
      continueSession: p,
      enableLivePreview: f,
      previewPorts: m,
      help: a,
      error: h,
    };
  }
}
async function s7f() {
  let { EXTERNAL_PERMISSION_MODES: e } = await Promise.resolve().then(() => (NB(), jRr)),
    n = `
Remote Control - Control local sessions from claude.ai/code or the Claude mobile app

USAGE
  claude remote-control [options]
OPTIONS
  --name <name>                    Name for the session (shown in claude.ai/code)
  --remote-control-session-name-prefix <prefix>
                                   Prefix for auto-generated session names
                                   (default: hostname; env:
                                   CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX)
  --permission-mode <mode>         Permission mode for spawned sessions
                                   (${e.join(", ")})
  --debug-file <path>              Write debug logs to file
  -v, --verbose                    Enable verbose output
  -h, --help                       Show this help
  --spawn <mode>                   Spawn mode: same-dir, worktree, session
                                   (default: same-dir)
  --capacity <N>                   Max concurrent sessions in worktree or
                                   same-dir mode (default: ${Etc})
  --[no-]create-session-in-dir     Pre-create a session in the current
                                   directory; in worktree mode this session
                                   stays in cwd while on-demand sessions get
                                   isolated worktrees (default: on)

DESCRIPTION
  Remote Control allows you to control sessions on your local device from
  claude.ai/code (https://claude.ai/code) or the Claude mobile app. Run
  this command in the directory you want to work in, then connect from
  your phone or a browser.

  Remote Control runs as a persistent server that accepts multiple concurrent
  sessions in the current directory. One session is pre-created on start so
  you have somewhere to type immediately. Use --spawn=worktree to isolate
  each on-demand session in its own git worktree, or --spawn=session for
  the classic single-session mode (exits when that session ends). Press 'w'
  during runtime to toggle between same-dir and worktree.

NOTES
  - You must be logged in with a Claude account that has a subscription
  - Run \`claude\` first in the directory to accept the workspace trust dialog
  - Worktree mode requires a git repository or WorktreeCreate/WorktreeRemove hooks
`;
  console.log(n);
}
function a7f(e) {
  let t = e.replace(/\s+/g, " ").trim();
  return Rs(t, i7f);
}
async function l7f(e, t) {
  let { getBridgeSession: n } = await Promise.resolve().then(() => (nOe(), Dze));
  return (
    (
      await n(e, {
        baseUrl: t,
      })
    )?.title || void 0
  );
}
async function bridgeMain(args) {
  let parsed = parseArgs(args);
  if (parsed.help) {
    await s7f();
    return;
  }
  if (parsed.error) (console.error(`Error: ${parsed.error}`), process.exit(1));
  (D9e(), bft(iVe));
  let {
    verbose: n,
    sandbox: r,
    debugFile: o,
    permissionMode: s,
    name: i,
    sessionNamePrefix: a,
    spawnMode: l,
    capacity: c,
    createSessionInDir: u,
    sessionId: d,
    continueSession: p,
    enableLivePreview: f,
    previewPorts: m,
  } = parsed;
  if (a) process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX = a;
  let g = d,
    h;
  if (s !== void 0) {
    let { PERMISSION_MODES: gt } = await Promise.resolve().then(() => (NB(), jRr)),
      st = gt;
    if (!st.includes(s))
      (console.error(`Error: Invalid permission mode '${s}'. Valid modes: ${st.join(", ")}`),
        process.exit(1));
  }
  let y = G1e.resolve("."),
    { enableConfigs: b, checkHasTrustDialogAccepted: _ } = await Promise.resolve().then(
      () => (er(), NQ),
    );
  b();
  let { initSinks: S } = await Promise.resolve().then(() => (wYe(), bHt));
  S();
  let { setOriginalCwd: A, setCwdState: v } = await Promise.resolve().then(() => (ft(), twe));
  if ((A(y), v(y), !_()))
    (console.error(
      `Error: Workspace not trusted. Please run \`claude\` in ${y} first to review and accept the workspace trust dialog.`,
    ),
      process.exit(1));
  let { clearOAuthTokenCache: C, checkAndRefreshOAuthTokenIfNeeded: x } =
      await Promise.resolve().then(() => (oo(), pU)),
    { getBridgeAccessToken: I, getBridgeBaseUrl: k } = await Promise.resolve().then(
      () => (wQ(), V0o),
    );
  if (!I()) (console.error(Myt), process.exit(1));
  let {
    getGlobalConfig: P,
    saveGlobalConfig: O,
    getCurrentProjectConfig: L,
    saveCurrentProjectConfig: M,
  } = await Promise.resolve().then(() => (er(), NQ));
  if (!P().remoteDialogSeen) {
    let st = (await import("readline")).createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log(`
Take this session with you and pick up right where you left off on any device.
Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser.

The session keeps running on this machine. Use your other devices as a remote
control. Press Ctrl+C to stop.
`);
    let xt = await new Promise((vt) => {
      st.question("Enable Remote Control? (y/n) ", vt);
    });
    if (
      (st.close(),
      O((vt) => {
        if (vt.remoteDialogSeen) return vt;
        return {
          ...vt,
          remoteDialogSeen: true,
        };
      }),
      xt.toLowerCase() !== "y" && xt.toLowerCase() !== "yes")
    )
      process.exit(0);
  }
  let baseUrl = k();
  if (
    baseUrl.startsWith("http://") &&
    !baseUrl.includes("localhost") &&
    !baseUrl.includes("127.0.0.1")
  )
    (console.error(
      "Error: Remote Control base URL uses HTTP. Only HTTPS or localhost HTTP is allowed.",
    ),
      process.exit(1));
  let B = baseUrl,
    {
      getBranch: $,
      getRemoteUrlForBridge: q,
      findGitRoot: W,
      redactGitRemoteCredentials: V,
    } = await Promise.resolve().then(() => (sa(), Sfn)),
    { hasWorktreeCreateHook: Y } = await Promise.resolve().then(() => (P3e(), jKr)),
    z = Y() || W(y) !== null,
    K = L().remoteControlSpawnMode;
  if (K === "worktree" && !z)
    (console.error(
      "Warning: Saved spawn mode is worktree but this directory is not a git repository. Falling back to same-dir.",
    ),
      (K = void 0),
      M((gt) => {
        if (gt.remoteControlSpawnMode === void 0) return gt;
        return {
          ...gt,
          remoteControlSpawnMode: void 0,
        };
      }));
  if (!K && z && l === void 0 && !g && process.stdin.isTTY) {
    let st = (await import("readline")).createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log(
      `
Remote Control is launching in spawn mode, which lets you start new sessions in this project from claude.ai/code or the Claude mobile app. Learn more: https://code.claude.com/docs/en/remote-control

Spawn mode for this project:
` +
        `  [1] same-dir \u2014 sessions share the current directory (default)
` +
        `  [2] worktree \u2014 each session gets an isolated git worktree

` +
        `This can be changed later or explicitly set with --spawn=same-dir or --spawn=worktree.
`,
    );
    let xt = await new Promise((jt) => {
      st.question("Choose [1/2] (default: 1): ", jt);
    });
    st.close();
    let vt = xt.trim() === "2" ? "worktree" : "same-dir";
    ((K = vt),
      G("tengu_bridge_spawn_mode_chosen", {
        spawn_mode: $e(vt),
      }),
      M((jt) => {
        if (jt.remoteControlSpawnMode === vt) return jt;
        return {
          ...jt,
          remoteControlSpawnMode: vt,
        };
      }));
  }
  let Z, J;
  if (g) ((J = "single-session"), (Z = "resume"));
  else if (l !== void 0) ((J = l), (Z = "flag"));
  else if (K !== void 0) ((J = K), (Z = "saved"));
  else ((J = "same-dir"), (Z = "gate_default"));
  let ne = J === "single-session" ? 1 : (c ?? Etc),
    oe = u ?? true,
    re,
    ee,
    ce,
    ae = false;
  if (!g && oe) {
    let { readBridgePointer: gt } = await Promise.resolve().then(() => (j1e(), F1e)),
      st = await gt(y);
    if (st) {
      let { isProcessRunning: xt, isSameProcessAsync: vt } = await Promise.resolve().then(
        () => (YS(), ort),
      );
      if (
        st.pid !== void 0 &&
        st.pid !== process.pid &&
        xt(st.pid) &&
        (await vt(st.pid, st.procStart))
      )
        ((ae = true),
          T(
            `[bridge:init] Pointer writer pid ${st.pid} still running; registering a fresh env and deferring pointer write`,
          ));
      else if (st.source === "standalone")
        ((re = st.environmentId),
          (ee = st.sessionId),
          T(
            `[bridge:init] Found prior environment ${re} in pointer (ageMs=${st.ageMs}); requesting reuse on registration`,
          ));
    }
  }
  if (J === "worktree" && !z)
    (console.error(
      "Error: Worktree mode requires a git repository or WorktreeCreate hooks configured. Use --spawn=session for single-session mode.",
    ),
      process.exit(1));
  let de = await $(),
    Ee = await q(),
    me = fGo.hostname(),
    pe = oQt.randomUUID(),
    { handleOAuth401Error: ge } = await Promise.resolve().then(() => (oo(), pU)),
    he = eGo({
      baseUrl: baseUrl,
      getAccessToken: I,
      runnerVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      onDebug: T,
      onAuth401: ge,
      getTrustedDeviceToken: _6,
      useCcrV2Routing: Cht,
    }),
    ie = re,
    config = {
      dir: y,
      machineName: me,
      branch: de,
      gitRepoUrl: Ee,
      maxSessions: ne,
      spawnMode: J,
      verbose: n,
      sandbox: r,
      bridgeId: pe,
      workerType: "claude_code",
      environmentId: oQt.randomUUID(),
      reuseEnvironmentId: ie,
      apiBaseUrl: baseUrl,
      sessionIngressUrl: B,
      debugFile: o,
      livePreviewPorts: f ? new Set(m) : void 0,
    };
  (T(
    `[bridge:init] bridgeId=${pe}${ie ? ` reuseEnvironmentId=${ie}` : ""} dir=${y} branch=${de} gitRepoUrl=${V(Ee)} machine=${me}`,
  ),
    T(`[bridge:init] apiBaseUrl=${baseUrl} sessionIngressUrl=${B}`),
    T(`[bridge:init] sandbox=${r}${o ? ` debugFile=${o}` : ""}`));
  let He, ye;
  try {
    let gt = await he.registerBridgeEnvironment(config);
    ((He = gt.environment_id), (ye = gt.environment_secret));
  } catch (gt) {
    (G("tengu_bridge_registration_failed", {
      status: gt instanceof Qq ? gt.status : void 0,
    }),
      console.error(
        gt instanceof Qq && gt.status === 404
          ? "Remote Control environments are not available for your account."
          : gt instanceof Qq && gt.status !== 401 && ZJt(gt.errorType)
            ? `Error: ${Atc(gt.message)}`
            : `Error: ${be(gt)}`,
      ),
      process.exit(1));
  }
  if (re)
    if (He !== re) {
      (T(`Bridge env reuse mismatch: requested ${re}, backend returned ${He}.`, {
        level: "warn",
      }),
        console.warn(
          "Warning: Could not reuse the previous environment \u2014 it has expired. Existing claude.ai/code sessions from the previous run will not reconnect.",
        ));
      let { clearBridgePointer: gt } = await Promise.resolve().then(() => (j1e(), F1e));
      await gt(y);
    } else {
      let { writeBridgePointer: gt } = await Promise.resolve().then(() => (j1e(), F1e)),
        { ownProcStartAsync: st } = await Promise.resolve().then(() => (YS(), ort));
      ((config.preserveOnShutdown = await gt(y, {
        sessionId: ee ?? "",
        environmentId: He,
        source: "standalone",
        pid: process.pid,
        procStart: await st(),
      })),
        (ce = ee));
    }
  let ue;
  T(`[bridge:init] Registered, server environmentId=${He}`);
  let we = U1e();
  (G("tengu_bridge_started", {
    max_sessions: config.maxSessions,
    has_debug_file: !!config.debugFile,
    sandbox: config.sandbox,
    verbose: config.verbose,
    heartbeat_interval_ms: we.non_exclusive_heartbeat_interval_ms,
    spawn_mode: $e(config.spawnMode),
    spawn_mode_source: $e(Z),
    pre_create_session: oe,
    worktree_available: z,
  }),
    In("info", "bridge_started", {
      max_sessions: config.maxSessions,
      sandbox: config.sandbox,
      spawn_mode: config.spawnMode,
    }));
  let Ce = sGo({
      execPath: process.execPath,
      scriptArgs: Htc(),
      env: process.env,
      verbose: n,
      sandbox: r,
      debugFile: o,
      permissionMode: s,
      onDebug: T,
      onActivity: (gt, st) => {
        T(`[bridge:activity] sessionId=${gt} ${st.type} ${st.summary}`);
      },
      onPermissionRequest: (gt, st, xt) => {
        T(
          `[bridge:perm] sessionId=${gt} tool=${st.request.tool_name} request_id=${st.request_id} (not auto-approving)`,
        );
      },
    }),
    logger = ltc({
      verbose: n,
    }),
    { parseGitHubRepository: Ve } = await Promise.resolve().then(() => (BR(), ARt)),
    Ze = Ee ? Ve(Ee) : null,
    Be = Ze ? Ze.split("/").pop() : G1e.basename(y);
  logger.setRepoInfo(Be, de);
  let Me = J !== "single-session" && z;
  if (Me) logger.setSpawnModeDisplay(J);
  let Ue = (gt) => {
    if (gt[0] === 3 || gt[0] === 4) {
      process.emit("SIGINT");
      return;
    }
    if (gt[0] === 32) {
      logger.toggleQr();
      return;
    }
    if (gt[0] === 119) {
      if (!Me) return;
      let st = config.spawnMode === "same-dir" ? "worktree" : "same-dir";
      ((config.spawnMode = st),
        G("tengu_bridge_spawn_mode_toggled", {
          spawn_mode: $e(st),
        }),
        logger.logStatus(
          st === "worktree"
            ? "Spawn mode: worktree (new sessions get isolated git worktrees)"
            : "Spawn mode: same-dir (new sessions share the current directory)",
        ),
        logger.setSpawnModeDisplay(st),
        logger.refreshDisplay(),
        M((xt) => {
          if (xt.remoteControlSpawnMode === st) return xt;
          return {
            ...xt,
            remoteControlSpawnMode: st,
          };
        }));
      return;
    }
  };
  if (process.stdin.isTTY)
    (L0(process.stdin, true), process.stdin.resume(), process.stdin.on("data", Ue));
  let controller = new AbortController(),
    bt = () => {
      (T("[bridge:shutdown] SIGINT received, shutting down"), controller.abort());
    },
    Ke = () => {
      (T("[bridge:shutdown] SIGTERM received, shutting down"), controller.abort());
    };
  (process.on("SIGINT", bt), process.on("SIGTERM", Ke));
  let Et = ce ?? null,
    ct;
  if (oe && true && !ce) {
    let gt = i ?? `${uzt()}-${$st()}`,
      { createBridgeSession: st } = await Promise.resolve().then(() => (nOe(), Dze));
    try {
      if (
        ((Et = await st({
          environmentId: He,
          title: gt,
          events: [],
          gitRepoUrl: Ee,
          branch: de,
          signal: controller.signal,
          baseUrl: baseUrl,
          getAccessToken: I,
          permissionMode: s,
          tags: [ntc],
        })),
        Et)
      ) {
        if (!i) ct = gt;
        T(`[bridge:init] Created initial session ${Et}`);
      }
    } catch (xt) {
      T(`[bridge:init] Session creation failed (non-fatal): ${be(xt)}`);
    }
  }
  let Je = null;
  if (Et && !ae) {
    let { writeBridgePointer: gt } = await Promise.resolve().then(() => (j1e(), F1e)),
      { ownProcStartAsync: st } = await Promise.resolve().then(() => (YS(), ort)),
      xt = {
        sessionId: Et,
        environmentId: He,
        source: "standalone",
        pid: process.pid,
        procStart: await st(),
      };
    if (await gt(config.dir, xt))
      ((config.preserveOnShutdown = true),
        (Je = setInterval(
          (vt, jt, en, Dn) =>
            void jt().then((nn) =>
              vt(en, {
                ...Dn,
                procStart: nn,
              }),
            ),
          3600000,
          gt,
          st,
          config.dir,
          xt,
        )),
        Je.unref?.());
  }
  try {
    await runBridgeLoop(
      config,
      He,
      ye,
      he,
      Ce,
      logger,
      controller.signal,
      void 0,
      Et ?? void 0,
      async () => (C(), await x(), I()),
      ct,
    );
  } finally {
    if (Je !== null) clearInterval(Je);
    if (
      (process.off("SIGINT", bt),
      process.off("SIGTERM", Ke),
      process.stdin.off("data", Ue),
      process.stdin.isTTY)
    )
      L0(process.stdin, false);
    process.stdin.pause();
  }
  process.exit(0);
}
async function runBridgeHeadless(opts, signal) {
  let { dir: n, log: r } = opts;
  process.chdir(n);
  let { setOriginalCwd: o, setCwdState: s } = await Promise.resolve().then(() => (ft(), twe));
  (o(n), s(n));
  let { enableConfigs: i, checkHasTrustDialogAccepted: a } = await Promise.resolve().then(
    () => (er(), NQ),
  );
  i();
  let { initSinks: l } = await Promise.resolve().then(() => (wYe(), bHt));
  l();
  let { getSettingsWithErrors: c } = await Promise.resolve().then(() => (dr(), EY));
  if (c().settings.disableRemoteControl === true)
    throw new BridgeHeadlessPermanentError(
      "Remote Control is disabled by your organization's policy (managed setting `disableRemoteControl`).",
    );
  let { loadPolicyLimits: u } = await Promise.resolve().then(() => (_F(), bWt)),
    { policyDeniedReason: d } = await Promise.resolve().then(() => (jc(), SNt));
  await u();
  let p = d("allow_remote_control", "Remote Control", "is");
  if (p) throw new BridgeHeadlessPermanentError(p);
  if (!a())
    throw new BridgeHeadlessPermanentError(
      `Workspace not trusted: ${n}. Run \`claude\` in that directory first to accept the trust dialog.`,
    );
  if (!opts.getAccessToken()) throw Error(Myt);
  let { getBridgeBaseUrl: f } = await Promise.resolve().then(() => (wQ(), V0o)),
    baseUrl = f();
  if (
    baseUrl.startsWith("http://") &&
    !baseUrl.includes("localhost") &&
    !baseUrl.includes("127.0.0.1")
  )
    throw new BridgeHeadlessPermanentError(
      "Remote Control base URL uses HTTP. Only HTTPS or localhost HTTP is allowed.",
    );
  let g = baseUrl,
    {
      getBranch: h,
      getRemoteUrlForBridge: y,
      findGitRoot: b,
    } = await Promise.resolve().then(() => (sa(), Sfn)),
    { hasWorktreeCreateHook: _ } = await Promise.resolve().then(() => (P3e(), jKr));
  if (opts.spawnMode === "worktree") {
    if (!(_() || b(n) !== null))
      throw new BridgeHeadlessPermanentError(
        `Worktree mode requires a git repository or WorktreeCreate hooks. Directory ${n} has neither.`,
      );
  }
  let S = await h(),
    A = await y(),
    v = fGo.hostname(),
    C = oQt.randomUUID(),
    x,
    I = false;
  {
    let { readBridgePointer: $ } = await Promise.resolve().then(() => (j1e(), F1e)),
      q = await $(n);
    if (q) {
      let { isProcessRunning: W, isSameProcessAsync: V } = await Promise.resolve().then(
        () => (YS(), ort),
      );
      if (q.pid !== void 0 && q.pid !== process.pid && W(q.pid) && (await V(q.pid, q.procStart)))
        ((I = true),
          r(
            `pointer writer pid ${q.pid} still running; registering fresh env, deferring pointer write`,
          ));
      else if (q.source === "standalone")
        ((x = q.environmentId),
          r(
            `found prior environment ${x} in pointer (ageMs=${q.ageMs}); requesting reuse on registration`,
          ));
    }
  }
  let k = {
      dir: n,
      machineName: v,
      branch: S,
      gitRepoUrl: A,
      maxSessions: opts.capacity,
      spawnMode: opts.spawnMode,
      verbose: false,
      sandbox: opts.sandbox,
      bridgeId: C,
      workerType: "claude_code",
      environmentId: oQt.randomUUID(),
      reuseEnvironmentId: x,
      apiBaseUrl: baseUrl,
      sessionIngressUrl: g,
    },
    D = eGo({
      baseUrl: baseUrl,
      getAccessToken: opts.getAccessToken,
      runnerVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      onDebug: r,
      onAuth401: opts.onAuth401,
      getTrustedDeviceToken: _6,
      useCcrV2Routing: Cht,
    }),
    P,
    O;
  try {
    let $ = await D.registerBridgeEnvironment(k);
    ((P = $.environment_id), (O = $.environment_secret));
  } catch ($) {
    throw Error(`Bridge registration failed: ${be($)}`, {
      cause: $,
    });
  }
  let L = sGo({
      execPath: process.execPath,
      scriptArgs: Htc(),
      env: process.env,
      verbose: false,
      sandbox: opts.sandbox,
      permissionMode: opts.permissionMode,
      onDebug: r,
    }),
    M = createHeadlessBridgeLogger(r);
  M.printBanner(k, P);
  let N;
  if (opts.createSessionOnStart) {
    let { createBridgeSession: $ } = await Promise.resolve().then(() => (nOe(), Dze));
    try {
      let q = await $({
        environmentId: P,
        title: opts.name,
        events: [],
        gitRepoUrl: A,
        branch: S,
        signal: signal,
        baseUrl: baseUrl,
        getAccessToken: opts.getAccessToken,
        permissionMode: opts.permissionMode,
        tags: [Fir],
      });
      if (q) ((N = q), r(`created initial session ${q}`));
    } catch (q) {
      r(`session pre-creation failed (non-fatal): ${be(q)}`);
    }
  }
  let B = null;
  if (!I) {
    if (x && P !== x)
      r(
        `env reuse mismatch: requested ${x}, backend returned ${P}; existing sessions will not reconnect`,
      );
    let { writeBridgePointer: $ } = await Promise.resolve().then(() => (j1e(), F1e)),
      { ownProcStartAsync: q } = await Promise.resolve().then(() => (YS(), ort)),
      W = {
        sessionId: N ?? "",
        environmentId: P,
        source: "standalone",
        pid: process.pid,
        procStart: await q(),
      };
    if (((k.preserveOnShutdown = await $(n, W)), k.preserveOnShutdown))
      ((B = setInterval(
        (V, Y, z, K) =>
          void Y().then((Z) =>
            V(z, {
              ...K,
              procStart: Z,
            }),
          ),
        3600000,
        $,
        q,
        n,
        W,
      )),
        B.unref?.());
  }
  try {
    await runBridgeLoop(k, P, O, D, L, M, signal, void 0, N, async () => opts.getAccessToken());
  } finally {
    if (B) clearInterval(B);
  }
}
function createHeadlessBridgeLogger(log) {
  let t = () => {};
  return {
    printBanner: (n, r) =>
      log(
        `registered environmentId=${r} dir=${n.dir} spawnMode=${n.spawnMode} capacity=${n.maxSessions}`,
      ),
    logSessionStart: (n, r) => log(`session start ${n}`),
    logSessionComplete: (n, r) => log(`session complete ${n} (${r}ms)`),
    logSessionFailed: (n, r) => log(`session failed ${n}: ${r}`),
    logStatus: log,
    logVerbose: log,
    logError: (n) => log(`error: ${n}`),
    logReconnected: (n) => log(`reconnected after ${n}ms`),
    addSession: (n, r) => log(`session attached ${n}`),
    removeSession: (n) => log(`session detached ${n}`),
    updateIdleStatus: t,
    updateReconnectingStatus: t,
    updateSessionStatus: t,
    updateSessionActivity: t,
    updateSessionCount: t,
    updateFailedStatus: t,
    setSpawnModeDisplay: t,
    setRepoInfo: t,
    setDebugLogPath: t,
    setAttached: t,
    setSessionTitle: t,
    clearStatus: t,
    toggleQr: t,
    refreshDisplay: t,
  };
}
var oQt,
  fGo,
  G1e,
  JYf,
  QYf = 1000,
  Etc = 32,
  e7f,
  t7f,
  i7f = 80,
  BridgeHeadlessPermanentError;
