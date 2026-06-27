// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sFc
// matched 2.1.88 source: src/cli/print.ts
// class=modified  jaccard=0.2726  score=0.4545  fileCov=0.4052
// note: deminified; 29 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: waitForPendingMcpBeforeFirstCommand, shouldWarnRestrictedStartupModel, shouldIgnoreStaleEndSession, runHeadless, restoreDeclaredDialogKinds, resolveDefaultPickRepoint, reportTurnFailed, reconcileMcpServers, modelOverrideToAdoptAfterTurn, mergeMcpClientLists, loadInitialMessages, kickOffBackgroundPluginInstall, joinPromptValues, isRestartedWorkerEpoch, handleOrphanedPermissionResponse, handleMcpSetServers, getCanUseToolFn, findRewindAnchors, createPrintRequestDialog, createKeepAl …
// [unwrapped __esm module sFc] deps: env-paths/index.js, dn, utils/fsOperations.ts, constants/files.ts, utils/processUserInput/processBashCommand.tsx, fast-xml-parser/lib/fxp.cjs
rFc = require("crypto");
function uFc(e) {
  if (fnn.has(e)) return false;
  if ((fnn.add(e), Dmr.push(e), Dmr.length > cFc)) {
    let t = Dmr.splice(0, Dmr.length - cFc);
    for (let n of t) fnn.delete(n);
  }
  return true;
}
function mFc(e) {
  let t = e?.[NLm];
  if (t == null || typeof t !== "object") return;
  let n = t,
    r = (o) => (typeof n[o] === "string" ? n[o] : void 0);
  return {
    title: r("title"),
    displayName: r("displayName"),
    description: r("description"),
  };
}
function createPrintRequestDialog(e) {
  return (
    x_r(true),
    async function (n, r, o) {
      if (n.kind === But.kind) {
        let s = r;
        return await e.handleElicitation(
          s.serverName,
          s.params.message,
          void 0,
          o?.signal,
          s.params.mode,
          s.params.url,
          "elicitationId" in s.params ? s.params.elicitationId : void 0,
          mFc(s.params._meta),
        );
      }
      if (n.kind === LQ.kind || n.kind === ySe.kind) {
        if (J8((a) => V0(a) && a.mode === "prompt") !== void 0)
          return (
            G("tengu_request_user_dialog_implicit_cancel", {
              dialog_kind: Dd(n.kind),
              reason: $e("queued_at_park"),
            }),
            n.default
          );
        let s = await e.requestUserDialog(n.kind, r, {
          signal: o?.signal,
        });
        if (s.behavior === "cancelled") return n.default;
        let i = n.result().safeParse(s.result);
        return i.success ? i.data : n.default;
      }
      return n.default;
    }
  );
}
function BLm(e) {
  return typeof e === "string"
    ? [
        {
          type: "text",
          text: e,
        },
      ]
    : e;
}
function kickOffBackgroundPluginInstall(e) {
  let t = {
    needsRefresh: false,
  };
  return (
    e()
      .then((n) => {
        t.needsRefresh = n;
      })
      .catch(ke),
    t
  );
}
function joinPromptValues(e) {
  if (e.length === 1) return e[0];
  if (e.every((t) => typeof t === "string"))
    return e.join(`
`);
  return e.flatMap(BLm);
}
function canBatchWith(e, t) {
  return (
    t !== void 0 &&
    t.mode === "prompt" &&
    t.workload === e.workload &&
    t.isMeta === e.isMeta &&
    t.shouldQuery === e.shouldQuery &&
    ULm(e.origin, t.origin) &&
    !!t.verifiedSlackHumanTurn === !!e.verifiedSlackHumanTurn &&
    t.priority === e.priority &&
    !kur(e.value) &&
    !kur(t.value)
  );
}
function shouldIgnoreStaleEndSession(e, t) {
  return parseInt(t ?? "1", 10) > 1 && e === "archived";
}
function isRestartedWorkerEpoch(e) {
  return (e ?? 1) > 1;
}
function restoreDeclaredDialogKinds(e) {
  let t = e?.internal?.declared_dialog_kinds;
  if (!Array.isArray(t) || VBe() !== void 0) return;
  let n = lTe(t);
  (osn(n, "restored"),
    G("tengu_supported_dialog_kinds_restored", {
      n_kinds: yB(n.length),
    }),
    T(`[print.ts] restored ${n.length} declared dialog kind(s) from prior worker epoch`));
}
function ULm(e, t) {
  if (e === t) return true;
  if (!e || !t) return false;
  if (e.kind !== t.kind) return false;
  if (e.kind === "peer" && t.kind === "peer")
    return e.from === t.from && e.inbound_origin === t.inbound_origin;
  if (e.kind === "channel" && t.kind === "channel") return e.server === t.server;
  return true;
}
function createKeepAlivePulse(e, t) {
  let r = Date.now();
  return () => {
    if (!t) return;
    let o = Date.now();
    if (o - r >= 30000)
      (e.enqueue({
        type: "keep_alive",
      }),
        (r = o));
  };
}
async function runHeadless(
  inputPrompt,
  getAppState,
  setAppState,
  commands,
  tools,
  sdkMcpConfigs,
  agents,
  options,
  l,
) {
  if ((PLr(), DMe())) oNc();
  if (rnn()) DNc();
  function c(J) {
    if ((v4n(J, setAppState), sc()))
      setAppState((ne) => {
        let oe = T2r(ne.settings);
        return ne.fastMode === oe
          ? ne
          : {
              ...ne,
              fastMode: oe,
            };
      });
  }
  if (
    (n$.subscribe(c),
    w4n(() => c("policySettings")),
    setInterval(Bun.gc, 1000).unref(),
    EPo(),
    wC("runHeadless_entry"),
    G("tengu_timer", {
      event: We("startup"),
      durationMs: Math.round(process.uptime() * 1000),
      mcpNonBlocking: Vve(),
      mcpClientCount: l.configuredMcpServerCount,
      resumed: !!(l.resume || l.continue),
    }),
    await Tft())
  )
    await k1a();
  if ((wC("after_grove_check"), iL().catch((J) => ke(Zr(J))), l.resumeSessionAt && !l.resume)) {
    (process.stderr.write(`Error: --resume-session-at requires --resume
`),
      Bc(1));
    return;
  }
  if (l.rewindFiles && !l.resume) {
    (process.stderr.write(`Error: --rewind-files requires --resume
`),
      Bc(1));
    return;
  }
  if (l.rewindFiles && inputPrompt) {
    (process.stderr
      .write(`Error: --rewind-files is a standalone operation and cannot be used with a prompt
`),
      Bc(1));
    return;
  }
  sbr(typeof inputPrompt !== "string");
  let d = Date.now(),
    p,
    f = Boolean(l.sdkUrl) && process.env.CLAUDE_CODE_ENVIRONMENT_KIND !== "bridge";
  function m(J, ne) {
    if (!f) return;
    ((p = J),
      process.stderr
        .write(`SDKStartup: phase=${J} t=${Math.round((Date.now() - d) / 100) / 10}s${ne ? ` ${ne}` : ""}
`));
  }
  m("connecting_transport");
  let structuredIO = VLm(inputPrompt, l);
  if (l.sdkUrl || l.outputFormat === "stream-json") fwo(structuredIO);
  if (
    ut(process.env.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH) &&
    K9r.has(process.env.CLAUDE_CODE_ENTRYPOINT ?? "")
  )
    U_r(() => structuredIO.requestOAuthTokenRefresh());
  if (ut(process.env.CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH) && oY()) {
    let J = Number(process.env.CLAUDE_CODE_HOST_AUTH_REFRESH_TIMEOUT_MS) || void 0;
    F_r(() => structuredIO.requestHostAuthTokenRefresh(J));
  }
  if (l.outputFormat === "stream-json") pUc();
  let h = {
      current: [],
    },
    y = {
      current: sdkMcpConfigs,
    },
    b = xo.getSandboxUnavailableReason();
  if (b) {
    if (xo.isSandboxRequired()) {
      if (l.outputFormat === "stream-json")
        (reportTurnFailed(structuredIO.sessionState, `Sandbox required but unavailable: ${b}`),
          await structuredIO.write({
            type: "result",
            subtype: "error_during_execution",
            duration_ms: 0,
            duration_api_ms: 0,
            is_error: true,
            num_turns: 0,
            stop_reason: null,
            session_id: Rt(),
            total_cost_usd: 0,
            usage: xb,
            modelUsage: {},
            permission_denials: [],
            uuid: px.randomUUID(),
            errors: [
              `Sandbox required but unavailable: ${b}. Set sandbox.failIfUnavailable=false to allow unsandboxed execution.`,
            ],
          }),
          await Promise.race([
            structuredIO.flushSessionState(),
            Nn(5000, void 0, {
              unref: true,
            }),
          ]));
      (process.stderr.write(
        `
Error: sandbox required but unavailable: ${b}
` +
          `  sandbox.failIfUnavailable is set \u2014 refusing to start without a working sandbox.

`,
      ),
        Bc(1));
      return;
    }
    process.stderr.write(`
\u26A0 Sandbox disabled: ${b}
  Commands will run WITHOUT sandboxing. Network and filesystem restrictions will NOT be enforced.

`);
  } else if (xo.isSandboxingEnabled()) {
    pa("before_sandbox_init");
    try {
      await xo.initialize(
        IUc(
          structuredIO.createSandboxAskCallback((J) =>
            setAppState((ne) => ({
              ...ne,
              toolPermissionContext: J(ne.toolPermissionContext),
            })),
          ),
          () => getAppState().toolPermissionContext,
          () => h.current,
          () => y.current,
        ),
      );
    } catch (J) {
      (process.stderr.write(`
\u274C Sandbox Error: ${be(J)}
`),
        Bc(1, "other"));
      return;
    }
    pa("after_sandbox_init");
  }
  if (l.setupTrigger)
    await rve({
      kind: "setup",
      trigger: l.setupTrigger,
    });
  (wC("before_loadInitialMessages"),
    pa("before_loadInitialMessages", {
      once: true,
    }));
  let appState = getAppState(),
    {
      messages: initialMessages,
      turnInterruptionState: A,
      supersededToolUseIds: v,
      deferredToolUse: C,
      agentSetting: x,
    } = await loadInitialMessages(setAppState, {
      continue: l.continue,
      teleport: l.teleport,
      resume: l.resume,
      resumeSessionAt: l.resumeSessionAt,
      forkSession: l.forkSession,
      outputFormat: l.outputFormat,
      sessionStartHooksPromise: l.sessionStartHooksPromise,
      restoredWorkerState: structuredIO.restoredWorkerState,
      hydratePrefetch: structuredIO.hydratePrefetch,
      sdkUrl: l.sdkUrl,
    });
  h.current = initialMessages;
  let I = Sca();
  if (I) structuredIO.prependUserMessage(I);
  if (!l.agent && !TO() && x) {
    let { agentDefinition: J } = VTe(x, void 0, {
      activeAgents: options,
      allAgents: options,
    });
    if (J) {
      if (
        (setAppState((ne) => ({
          ...ne,
          agent: J.agentType,
        })),
        !l.systemPrompt && !Sh(J))
      ) {
        let ne = J.getSystemPrompt();
        if (ne) l.systemPrompt = ne;
      }
      FYe(J.agentType);
    }
  }
  if (l.forkSession) etn(initialMessages);
  let k = w7e(initialMessages, appState.mainLoopModel, (J) =>
      initialMessages.push(cc(J, "warning")),
    ),
    D = k ? C7e(initialMessages, k, Boolean(l.forkSession)) : void 0;
  if (D)
    setAppState((J) =>
      J.mainLoopModel === D
        ? J
        : {
            ...J,
            mainLoopModel: D,
          },
    );
  if (initialMessages.length === 0 && process.exitCode !== void 0) return;
  let P;
  if (
    l.restrictedStartupModel &&
    shouldWarnRestrictedStartupModel(l.userSpecifiedModel, l.restrictedStartupModel)
  ) {
    let J = moe(l.restrictedStartupModel, As());
    if (
      !initialMessages.some(
        (oe) => oe.type === "system" && oe.subtype === "informational" && oe.content.includes(J),
      )
    )
      initialMessages.push(cc(J, "warning"));
    P = cc(J, "warning");
  }
  if (l.rewindFiles) {
    let J = initialMessages.find((re) => re.uuid === l.rewindFiles);
    if (!J || J.type !== "user") {
      (process.stderr
        .write(`Error: --rewind-files requires a user message UUID, but ${l.rewindFiles} is not a user message in this session
`),
        Bc(1));
      return;
    }
    let ne = getAppState(),
      oe = await handleRewindFiles(l.rewindFiles, ne, false);
    if (!oe.canRewind) {
      (process.stderr.write(`Error: ${oe.error || "Unexpected error"}
`),
        Bc(1));
      return;
    }
    (process.stdout.write(`Files rewound to state at message ${l.rewindFiles}
`),
      Bc(0));
    return;
  }
  let O = typeof l.resume === "string" && l.resume.trim().length > 0,
    L = Boolean(l.sdkUrl);
  if (!inputPrompt && !L && !C && !I) {
    (process.stderr.write(
      O || l.continue
        ? `Error: No deferred tool marker found in the resumed session. Either the session was not deferred, the marker is stale (tool already ran), or it exceeds the tail-scan window. Provide a prompt to continue the conversation.
`
        : `Error: Input must be provided either through stdin or as a prompt argument when using --print
`,
    ),
      Bc(1));
    return;
  }
  if (l.outputFormat === "stream-json" && !l.verbose) {
    (process.stderr.write(`Error: When using --print, --output-format=stream-json requires --verbose
`),
      Bc(1));
    return;
  }
  let M = Woe(appState.mcp.tools, appState.toolPermissionContext),
    N = [...sdkMcpConfigs, ...M];
  y.current = N;
  let B = l.sdkUrl ? "stdio" : l.permissionPromptToolName,
    $ = (J) => {
      (structuredIO.sessionState.notifyStateChanged("requires_action", J),
        iFc?.runClassifierSummaryForBlocked(J, structuredIO.sessionState));
    };
  structuredIO.onUserDialogParked = (J) => {
    iFc?.runClassifierSummaryForBlocked(J, structuredIO.sessionState);
  };
  let q = getCanUseToolFn(B, structuredIO, () => getAppState().mcp.tools, $);
  if (l.permissionPromptToolName) N = N.filter((J) => !Ql(J, l.permissionPromptToolName));
  if (ut(process.env.CLAUDE_CODE_RESUME_INTERRUPTED_TURN)) {
    let J = await structuredIO.restoredWorkerState,
      ne = J?.internal?.running_background_tasks,
      oe = J?.internal?.orphaned_background_tasks_pending_notification,
      re = Array.isArray(ne) ? ne : [],
      ee = Array.isArray(oe) ? oe : [],
      ce = new Map();
    for (let de of [...ee, ...re]) {
      if (typeof de?.task_id !== "string" || !de.task_id) continue;
      let Ee = ce.get(de.task_id);
      if (!Ee || (!Ee.description && de.description)) ce.set(de.task_id, de);
    }
    let ae = Array.from(ce.values());
    if (ae.length > 0) {
      (T(`[print.ts] ${ae.length} orphaned background task(s) after restart`),
        initialMessages.push(
          Rn({
            content: m1c(ae),
            isMeta: true,
          }),
        ));
      for (let Ee of ae)
        xf(Ee.task_id, "stopped", {
          summary: `Stopped by a worker restart: ${Ee.description || Ee.task_id}`,
        });
      let de = false;
      try {
        for (let Ee of VX()) await structuredIO.write(Ee);
        de = await Promise.race([
          structuredIO.flushClientEvents(),
          Nn(20000, void 0, {
            unref: true,
          }).then(() => false),
        ]);
      } catch (Ee) {
        T(
          `[print.ts] orphaned-task notification flush failed; keeping orphans pending for re-emit: ${Zr(Ee).message}`,
        );
      }
      if (!de)
        T(
          "[print.ts] orphaned-task notification delivery unconfirmed; keeping orphans pending for re-emit",
        );
      structuredIO.sessionState.notifyInternalMetadataChanged({
        running_background_tasks: [],
        orphaned_background_tasks_pending_notification: de ? null : ae,
      });
    }
  } else if (initialMessages.length > 0) {
    let J = $L(getAppState, setAppState);
    (svt(initialMessages, J),
      a9t({
        abortController: new AbortController(),
        taskRegistry: J,
      }),
      Ctn({
        taskRegistry: J,
        getMcpClients: () => getAppState().mcp.clients,
      }));
  }
  (restoreDeclaredDialogKinds(await structuredIO.restoredWorkerState),
    structuredIO.restoredWorkerState
      .then((J) => mUc(structuredIO, J))
      .catch((J) => {
        T(`[print.ts] stale parked prompt cancel failed: ${J}`, {
          level: "error",
        });
      }),
    wC("after_loadInitialMessages"),
    pa("after_loadInitialMessages", {
      once: true,
    }),
    m("transcript_hydrated", `messages=${initialMessages.length}`),
    await OSn(),
    wC("after_modelStrings"));
  let W = l.outputFormat === "json" && l.verbose,
    V = [],
    lastMessage,
    z = 0,
    K = false;
  (wC("before_runHeadlessStreaming"), m("starting_query_loop"));
  for await (let J of runHeadlessStreaming(
    structuredIO,
    appState.mcp.clients,
    tools,
    N,
    initialMessages,
    q,
    agents,
    getAppState,
    setAppState,
    commands,
    options,
    l,
    A,
    v,
    C,
  )) {
    if ((z++, z === 1)) m("first_message_drained", `type=${J.type}`);
    if (!K && J.type === "system" && J.subtype === "init") ((K = true), m("system_init_emitted"));
    if (l.outputFormat === "stream-json" && l.verbose) {
      if ((await structuredIO.write(J), K && P)) {
        let ne = P;
        ((P = void 0),
          await structuredIO.write({
            ...ne,
            session_id: Rt(),
          }));
      }
    }
    if (
      J.type !== "control_response" &&
      J.type !== "control_request" &&
      J.type !== "control_cancel_request" &&
      !(
        J.type === "system" &&
        (J.subtype === "session_state_changed" ||
          J.subtype === "task_notification" ||
          J.subtype === "task_started" ||
          J.subtype === "task_updated" ||
          J.subtype === "task_progress" ||
          J.subtype === "notification" ||
          J.subtype === "post_turn_summary" ||
          J.subtype === "task_summary" ||
          J.subtype === "hook_started" ||
          J.subtype === "hook_progress" ||
          J.subtype === "hook_response" ||
          J.subtype === "commands_changed" ||
          J.subtype === "elicitation_complete" ||
          J.subtype === "files_persisted" ||
          J.subtype === "mirror_error")
      ) &&
      J.type !== "stream_event" &&
      J.type !== "keep_alive" &&
      J.type !== "prompt_suggestion" &&
      J.type !== "transcript_mirror"
    ) {
      if (W) V.push(J);
      lastMessage = J;
    }
  }
  switch (l.outputFormat) {
    case "json":
      if (!lastMessage || lastMessage.type !== "result") {
        (process.stderr.write(`Error: No messages returned from query
`),
          T("runHeadless: no result message returned from query", {
            level: "error",
          }),
          Bc(1));
        return;
      }
      if (l.verbose) {
        $i(
          De(V) +
            `
`,
        );
        break;
      }
      $i(
        De(lastMessage) +
          `
`,
      );
      break;
    case "stream-json":
      break;
    default:
      if (!lastMessage || lastMessage.type !== "result") {
        (process.stderr.write(`Error: No messages returned from query
`),
          T("runHeadless: no result message returned from query", {
            level: "error",
          }),
          Bc(1));
        return;
      }
      switch (lastMessage.subtype) {
        case "success":
          $i(
            lastMessage.result.endsWith(`
`)
              ? lastMessage.result
              : lastMessage.result +
                  `
`,
          );
          break;
        case "error_during_execution":
          $i("Execution error");
          break;
        case "error_max_turns":
          $i(`Error: Reached max turns (${l.maxTurns})`);
          break;
        case "error_max_budget_usd":
          $i(`Error: Exceeded USD budget (${l.maxBudgetUsd})`);
          break;
        case "error_max_structured_output_retries":
          $i("Error: Failed to provide valid structured output after maximum retries");
      }
  }
  if ((APo(), Ckn())) await OLm.drainPendingExtraction();
  await F5o();
  let Z = structuredIO instanceof kvt && structuredIO.permanentCloseCode !== void 0;
  if (f && lastMessage?.type !== "result") {
    let J;
    if (Z) J = "transport closed permanently";
    else if (z === 0) J = "zero messages drained \u2014 input stream ended before any output";
    else if (!K) J = "input stream ended before system/init was emitted";
    else J = "input stream ended without a result message";
    process.stderr
      .write(`SDKStartup: exiting without result: ${J} (last_phase=${p}, drained=${z}, exit=${Z ? 1 : 0})
`);
  }
  (fwo(void 0), Bc((lastMessage?.type === "result" && lastMessage?.is_error) || Z ? 1 : 0));
}
function shouldWarnRestrictedStartupModel(e, t) {
  return e === void 0 || zo(e) !== zo(t);
}
function resolveDefaultPickRepoint(e, t, n) {
  if (
    "model" in e &&
    (e.model == null || String(e.model).trim().toLowerCase() === "default") &&
    t !== void 0 &&
    t !== n
  )
    return n;
  return;
}
function modelOverrideToAdoptAfterTurn({
  activeUserSpecifiedModel: e,
  overrideAtTurnStart: t,
  overrideAtTurnEnd: n,
}) {
  if (e === void 0) {
    if (n !== t) {
      if (typeof n === "string") {
        let o = n.trim().toLowerCase() === "default" ? Ey() : n;
        if (!xa(o) && !KS(o))
          return {
            kind: "keep",
            blockedByAllowlist: n,
          };
      }
      return {
        kind: "keep",
        allowedOverrideApplied: true,
      };
    }
    return {
      kind: "keep",
    };
  }
  if (n === t)
    return {
      kind: "keep",
    };
  if (n === null)
    return {
      kind: "clearToSessionDefault",
    };
  if (typeof n !== "string")
    return {
      kind: "keep",
    };
  let r = n.trim().toLowerCase() === "default" ? Ey() : n;
  if (zo(r) === zo(e))
    return {
      kind: "keep",
    };
  if (!KS(r) && !xa(r))
    return {
      kind: "keep",
      blockedByAllowlist: n,
    };
  return {
    kind: "adopt",
    model: r,
  };
}
function findRewindAnchors(e, t) {
  let n = null,
    r = null;
  for (let o = t - 1; o >= 0; o--) {
    let s = e[o];
    if (!s) continue;
    if (s.type === "assistant") {
      ((r = s.uuid), (n ??= s.uuid));
      break;
    }
    if (s.type === "user" && n === null) n = s.uuid;
  }
  return {
    persistAnchor: n,
    precedingAssistantUuid: r,
  };
}
function runHeadlessStreaming(
  structuredIO,
  mcpClients,
  commands,
  tools,
  initialMessages,
  canUseTool,
  sdkMcpConfigs,
  getAppState,
  setAppState,
  agents,
  options,
  d,
  turnInterruptionState,
  f,
  m,
) {
  let g = false,
    h,
    y = false,
    b,
    _ = m,
    S,
    A = false,
    v = false,
    C = [],
    x = new Map(),
    abortController,
    k = 0,
    D = Sl(500),
    output = structuredIO.outbound;
  if (
    (x5e(() => {
      for (let Gn of VX()) output.enqueue(Gn);
    }),
    d.outputFormat === "stream-json" && d.sessionMirror)
  )
    r5o((Gn, cr) => {
      structuredIO.write({
        type: "transcript_mirror",
        filePath: Gn,
        entries: cr,
      });
    });
  let O = () => {
    if (
      (In("info", "shutdown_signal", {
        signal: "SIGINT",
      }),
      abortController && !abortController.signal.aborted)
    )
      abortController.abort(eP("user-cancel"));
    (D.abort(), ki(0));
  };
  (process.on("SIGINT", O),
    Ci(async () => {
      if (h && !abortController?.signal.aborted && !y)
        (G("tengu_sdk_result", {
          subtype: We("terminated"),
          is_error: true,
          duration_ms: Date.now() - h,
          run_phase: $e(S ?? "init"),
          exit_code: process.exitCode,
        }),
          (y = true),
          (h = void 0));
      let Gn = {};
      for (let cr of Ubt(getAppState())) if (wH(cr)) Gn[cr.type] = (Gn[cr.type] ?? 0) + 1;
      In("info", "run_state_at_shutdown", {
        run_active: g,
        run_phase: S,
        worker_status: structuredIO.sessionState.getState(),
        internal_events_pending: structuredIO.internalEventsPending,
        bg_tasks: Gn,
      });
    }),
    (structuredIO.sessionState.onPermissionModeChanged = (Gn) => {
      if (
        Gn === "default" ||
        Gn === "acceptEdits" ||
        Gn === "bypassPermissions" ||
        Gn === "plan" ||
        Gn === "auto" ||
        Gn === "dontAsk"
      )
        output.enqueue({
          type: "system",
          subtype: "status",
          status: null,
          permissionMode: Gn,
          uuid: px.randomUUID(),
          session_id: Rt(),
        });
    }));
  let L = new Set(),
    suggestionState = {
      abortController: null,
      inflightPromise: null,
      lastEmitted: null,
      pendingSuggestion: null,
      pendingLastEmittedEntry: null,
    },
    N;
  if (d.enableAuthStatus)
    N = LD.getInstance().subscribe((cr) => {
      output.enqueue({
        type: "auth_status",
        isAuthenticating: cr.isAuthenticating,
        output: cr.output,
        error: cr.error,
        uuid: px.randomUUID(),
        session_id: Rt(),
      });
    });
  let B = (Gn) => {
    let cr = I8l(Gn, {
      includeOverageInUse: !zB(),
    });
    if (cr)
      output.enqueue({
        type: "rate_limit_event",
        rate_limit_info: cr,
        uuid: px.randomUUID(),
        session_id: Rt(),
      });
  };
  cLe.add(B);
  let mutableMessages = initialMessages;
  function q(Gn, cr) {
    let Lt = 0,
      En = 0,
      Sn = 0,
      Jn = new Set(
        cr.filter((Qn) => Qn.mcpInfo && !Qn.name.startsWith("mcp__")).map((Qn) => Qn.name),
      );
    for (let Qn = Gn; Qn < mutableMessages.length; Qn++) {
      let gr = mutableMessages[Qn];
      if (gr?.type !== "assistant") continue;
      for (let fo of gr.message.content) {
        if (fo.type !== "tool_use") continue;
        if ((Lt++, fo.name.startsWith("mcp__") || Jn.has(fo.name))) En++;
        else if (fo.name === _h) Sn++;
      }
    }
    return {
      tool_use_count: Lt,
      mcp_tool_calls: En,
      toolsearch_calls: Sn,
      builtin_tool_calls: Lt - En - Sn,
    };
  }
  let readFileState = Obt(initialMessages, Kme.cwd(), V1);
  if (WRe()) {
    let { frameUrls: Gn, artifactReadVersions: cr } = Kfr(initialMessages);
    setAppState((Lt) => ({
      ...Lt,
      frameUrls: Gn,
      artifactReadVersions: cr,
    }));
  }
  (gzr("messages", () => ({
    entries: mutableMessages.length,
  })),
    gzr("file_state_cache", () => ({
      entries: readFileState.size,
      bytes: readFileState.calculatedSize,
    })));
  let V = new Map(),
    Y = C$e(rZt() ?? Azt(initialMessages, tools), Ife),
    pendingSeeds = QU(V1),
    K = [],
    Z = process.env.CLAUDE_CODE_RESUME_INTERRUPTED_TURN;
  if (turnInterruptionState && turnInterruptionState.kind !== "none" && Z)
    (T(`[print.ts] Auto-resuming interrupted turn (kind: ${turnInterruptionState.kind})`),
      t9t(mutableMessages, turnInterruptionState.message),
      j_({
        mode: "prompt",
        agentId: ls(),
        value: turnInterruptionState.message.message.content,
        uuid: turnInterruptionState.message.isMeta
          ? px.randomUUID()
          : (turnInterruptionState.message.uuid ?? px.randomUUID()),
        isMeta: turnInterruptionState.message.isMeta,
        origin: turnInterruptionState.message.origin,
      }));
  let J = Xct(),
    ne = J.filter((Gn) => !Gn.disabled),
    oe = wjt(Hio(J)),
    re = ne.map((Gn) => {
      let cr = Gn.value === null ? "default" : Gn.value,
        Lt = cr === "default" ? Ey() : zo(cr),
        En = Kw(Lt),
        Sn = Uot(Lt),
        Jn = rg(Gn.value),
        Qn = a_e(Lt);
      return {
        value: cr,
        displayName: Gn.label,
        description: Gn.description,
        ...(En && {
          supportsEffort: true,
          supportedEffortLevels: xv.filter((gr) => {
            if (gr === "max" && !Hke(Lt)) return false;
            if (gr === "xhigh" && !Yte(Lt)) return false;
            return true;
          }),
        }),
        ...(Sn && {
          supportsAdaptiveThinking: true,
        }),
        ...(Jn && {
          supportsFastMode: true,
        }),
        ...(Qn && {
          supportsAutoMode: true,
        }),
      };
    }),
    ee = d.userSpecifiedModel;
  eNa(() => {
    ee = void 0;
  });
  let ce =
      d.thinkingConfig && d.thinkingConfig.type !== "disabled" ? d.thinkingConfig.display : void 0,
    ae = d.thinkingConfig;
  function de(Gn, cr) {
    let Lt = scc(Gn, bj(cr));
    if ((mutableMessages.push(...Lt), Oe.CLAUDE_CODE_REMOTE)) {
      let En = bj(cr);
      mutableMessages.push(
        Rn({
          content: `<system-reminder>The model for this session has been changed to ${En}. You are now running as ${En}.</system-reminder>`,
          isMeta: true,
        }),
      );
    }
    for (let En of Lt)
      if (typeof En.message.content === "string" && En.message.content.includes(`<${KC}>`))
        output.enqueue({
          type: "user",
          message: En.message,
          session_id: Rt(),
          parent_tool_use_id: null,
          uuid: En.uuid,
          timestamp: En.timestamp,
          isReplay: true,
        });
  }
  let Ee;
  function me(Gn, cr) {
    if (Gn === Ee) return;
    Ee = Gn;
    let Lt = cc(moe(Gn, cr ?? As()), "warning");
    (mutableMessages.push(Lt),
      output.enqueue({
        ...Lt,
        session_id: Rt(),
      }));
  }
  function pe() {
    Ee = void 0;
  }
  let sdkClients = [],
    he = [],
    ie = [],
    le = new WeakSet();
  function He(Gn) {
    for (let cr of Gn) {
      if (cr.type !== "connected" || le.has(cr.client)) continue;
      if (cr.config.type === "sdk") continue;
      let Lt = cr.name;
      try {
        (cr.client.setRequestHandler(uhe, async (En, Sn) => {
          if (cr.transportErrorState) cr.transportErrorState.pendingElicitations++;
          try {
            sn(Lt, `Elicitation request received in print mode: ${De(En)}`);
            let Jn = En.params.mode === "url" ? "url" : "form";
            G("tengu_mcp_elicitation_shown", {
              mode: $e(Jn),
            });
            let Qn = await j3t(Lt, En.params, Sn.signal);
            if (Qn)
              return (
                sn(Lt, `Elicitation resolved by hook: ${De(Qn)}`),
                G("tengu_mcp_elicitation_response", {
                  mode: $e(Jn),
                  action: $e(Qn.action),
                }),
                Qn
              );
            let gr = "url" in En.params ? En.params.url : void 0,
              fo = "requestedSchema" in En.params ? En.params.requestedSchema : void 0,
              cs = "elicitationId" in En.params ? En.params.elicitationId : void 0,
              Gs = mFc(En.params._meta),
              la = await structuredIO.handleElicitation(
                Lt,
                En.params.message,
                fo,
                Sn.signal,
                Jn,
                gr,
                cs,
                Gs,
              ),
              Fi = await G3t(Lt, la, Sn.signal, Jn, cs);
            return (
              G("tengu_mcp_elicitation_response", {
                mode: $e(Jn),
                action: $e(Fi.action),
              }),
              Fi
            );
          } finally {
            if (cr.transportErrorState)
              (cr.transportErrorState.pendingElicitations--,
                (cr.transportErrorState.lastElicitationClosedAt = Date.now()));
          }
        }),
          cr.client.setNotificationHandler(Dkt, (En) => {
            let { elicitationId: Sn } = En.params;
            (sn(Lt, `Elicitation completion notification: ${Sn}`),
              cJ({
                message: `MCP server "${Lt}" confirmed elicitation ${Sn} complete`,
                notificationType: "elicitation_complete",
              }),
              zv({
                type: "system",
                subtype: "elicitation_complete",
                mcp_server_name: Lt,
                elicitation_id: Sn,
              }));
          }),
          le.add(cr.client));
      } catch {}
    }
  }
  let ye = new WeakSet();
  function ue(Gn) {
    for (let cr of Gn) {
      if (cr.type !== "connected" || ye.has(cr.client)) continue;
      if ((ye.add(cr.client), !cr.capabilities?.tools?.listChanged)) continue;
      let Lt = cr.name;
      cr.client.setNotificationHandler(KUe, async () => {
        sn(Lt, "Received tools/list_changed notification, refreshing tools");
        let En = lP.cache.get(Lt);
        lP.cache.delete(Lt);
        let Sn = await lP(cr);
        if (cr.toolsListError) {
          sn(Lt, "tools/list failed after list_changed \u2014 keeping previous tool set");
          return;
        }
        let Jn = Sn.length,
          Qn = (fo) =>
            G("tengu_mcp_list_changed", {
              type: We("tools"),
              previousCount: fo,
              newCount: Jn,
            });
        if (En)
          En.then(
            (fo) => Qn(fo.length),
            () => Qn(),
          );
        else Qn();
        let gr = xG(Lt);
        setAppState((fo) => ({
          ...fo,
          mcp: {
            ...fo.mcp,
            tools: [...bL(fo.mcp.tools, (cs) => cs.name?.startsWith(gr)), ...Sn],
          },
        }));
      });
    }
  }
  let we = getAppState().mcp.clients;
  (He(we),
    ue(we),
    agents(() => {
      let Gn = getAppState().mcp.clients;
      if (Gn === we) return;
      ((we = Gn), He(Gn), ue(Gn));
    }));
  async function Ce() {
    let Gn = new Set(Object.keys(sdkMcpConfigs)),
      cr = new Set(sdkClients.map((gr) => gr.name)),
      Lt = Array.from(Gn).some((gr) => !cr.has(gr)),
      En = Array.from(cr).some((gr) => !Gn.has(gr)),
      Sn = sdkClients.some((gr) => gr.type === "pending"),
      Jn = sdkClients.some((gr) => gr.type === "failed");
    if (Lt || En || Sn || Jn) {
      for (let cs of sdkClients)
        if (!Gn.has(cs.name)) {
          if (cs.type === "connected") await cs.cleanup();
        }
      let gr = await QRa(sdkMcpConfigs, (cs, Gs) => structuredIO.sendMcpMessage(cs, Gs));
      ((sdkClients = gr.clients), (he = gr.tools), (ie = gr.commands));
      let fo = Uo([...cr, ...Gn]);
      (setAppState((cs) => ({
        ...cs,
        mcp: {
          ...cs.mcp,
          tools: [
            ...cs.mcp.tools.filter((Gs) => !fo.some((la) => Gs.name.startsWith(xG(la)))),
            ...he,
          ],
          commands: [
            ...cs.mcp.commands.filter((Gs) => !fo.some((la) => $4(Gs, la))),
            ...gr.commands,
          ],
        },
      })),
        Yca(sdkClients, {
          onFeedbackSurveyEvent: RUc,
          refusalFallbackSettingToggleVisible: w1n() ? true : false,
          refusalFallbackLaneEnabled: BX(),
          fable5LaunchShow: false,
          startupAnnouncement: Eql(),
        }),
        LUc(sdkClients));
    }
  }
  Ce();
  let dynamicMcpState = {
      clients: [],
      tools: [],
      configs: {},
    },
    Ve = ut(process.env.CLAUDE_CODE_REMOTE)
      ? Object.fromEntries(
          getAppState()
            .mcp.clients.filter(
              (Gn) =>
                Gn.config.scope === "dynamic" &&
                !("pluginSource" in Gn.config) &&
                Cdo(Gn.config) &&
                !m3t(Gn.name),
            )
            .map((Gn) => [Gn.name, Gn.config]),
        )
      : {};
  yJe(() => [...getAppState().mcp.clients, ...sdkClients, ...dynamicMcpState.clients]);
  let Ze = Array.isArray(commands) ? commands : [],
    Be = false,
    Me = Array.isArray(commands)
      ? null
      : (async () => {
          let Gn = performance.now(),
            cr = await commands.catch((Lt) => (ke(Lt), []));
          if (!Be) Ze = cr;
          Zc("commands_deferred_join_ms", performance.now() - Gn, Gn);
        })(),
    Ue = options,
    tt,
    bt,
    Ke = (Gn) => {
      let cr = TQ(Gn.toolPermissionContext, Gn.mcp.tools, {
          skillTools: Gn.skillTools,
        }),
        Lt = Woe(dynamicMcpState.tools, Gn.toolPermissionContext),
        En = oE(hYe([...tools, ...he, ...Lt], cr, Gn.toolPermissionContext.mode), "name"),
        Sn = TO();
      if (((bt = void 0), Sn)) {
        let Qn = Ue.find((gr) => gr.agentType === Sn);
        if (Qn) {
          let gr = voe(Qn, En, false, true);
          ((En = gr.resolvedTools), (bt = gr.allowedAgentTypes));
        }
      }
      if (d.permissionPromptToolName) En = En.filter((Qn) => !Ql(Qn, d.permissionPromptToolName));
      let Jn = Hsn();
      if (Jn && !d.jsonSchema) {
        let Qn = Lct(Jn);
        if ("tool" in Qn) En = [...En, Qn.tool];
      }
      return En;
    },
    Et = ut(process.env.CLAUDE_CODE_REMOTE)
      ? process.env.CLAUDE_CODE_SYSTEM_PROMPT_GB_FEATURE
      : void 0,
    ct = () => {
      if (!Et) return d.systemPrompt;
      let Gn = at(Et, "");
      return typeof Gn === "string" && Gn.length > 0 ? Gn : d.systemPrompt;
    },
    bridgeHandle = null,
    gt = false,
    st = Promise.resolve(),
    xt = 0;
  function vt() {
    if (!bridgeHandle) return;
    let Gn = Math.min(xt, mutableMessages.length),
      cr = mutableMessages.slice(Gn).filter((Lt) => Lt.type === "user" || Lt.type === "assistant");
    if (((xt = mutableMessages.length), cr.length > 0)) bridgeHandle.writeMessages(cr);
  }
  let jt = Promise.resolve({
    response: {
      added: [],
      removed: [],
      errors: {},
    },
    sdkServersChanged: false,
  });
  function en(Gn, { authoritative: cr, caller: Lt, deferConnect: En = false }) {
    let Sn = async () => {
      let Jn = new Set(sdkClients.map((cs) => cs.name)),
        Qn = {
          ...dynamicMcpState,
          configs: {
            ...Ve,
            ...dynamicMcpState.configs,
          },
        },
        gr = Gn;
      if (!cr && Object.keys(Ve).length > 0) {
        let cs = {};
        for (let [Gs, la] of Object.entries(Ve)) {
          if (Gs in Gn) continue;
          let { scope: Fi, ...xn } = la;
          if (Cdo(xn)) cs[Gs] = xn;
        }
        gr = {
          ...cs,
          ...Gn,
        };
      }
      let fo = await handleMcpSetServers(
        gr,
        {
          configs: sdkMcpConfigs,
          clients: sdkClients,
          tools: he,
          commands: ie,
        },
        Qn,
        setAppState,
        getAppState,
        Lt,
        En,
        cr,
      );
      if (cr) {
        let cs = new Set(Object.keys(fo.newDynamicState.configs));
        Ve = Object.fromEntries(
          Object.entries(Gn)
            .filter(([Gs]) => cs.has(Gs))
            .map(([Gs, la]) => [
              Gs,
              {
                ...la,
                scope: "dynamic",
              },
            ]),
        );
      }
      for (let cs of Object.keys(sdkMcpConfigs)) delete sdkMcpConfigs[cs];
      if (
        (Object.assign(sdkMcpConfigs, fo.newSdkState.configs),
        (sdkClients = fo.newSdkState.clients),
        (he = fo.newSdkState.tools),
        (ie = fo.newSdkState.commands),
        (dynamicMcpState = fo.newDynamicState),
        fo.deferredSettle)
      )
        fo.deferredSettle.then(({ clients: cs, tools: Gs }) => {
          let la = new Map(cs.map((xn) => [xn.name, xn])),
            Fi = (xn) => {
              let nr = new Set(),
                Yn = dynamicMcpState.clients.map((Xn) => {
                  let Jr = la.get(Xn.name);
                  if (Jr && Xn.type === "pending" && Lqe(Xn.config, Jr.config))
                    return (nr.add(Xn.name), Jr);
                  return Xn;
                });
              return (
                (dynamicMcpState = {
                  ...dynamicMcpState,
                  clients: Yn,
                  tools: oE(
                    [
                      ...dynamicMcpState.tools,
                      ...Gs.filter((Xn) =>
                        [...nr].some((Jr) => Xn.name.startsWith(`mcp__${Jr}__`)),
                      ),
                    ],
                    "name",
                  ),
                }),
                xn
              );
            };
          jt = jt.then(Fi, Fi);
        });
      if (fo.sdkServersChanged) {
        let cs = new Set(sdkClients.map((la) => la.name)),
          Gs = Uo([...Jn, ...cs]);
        setAppState((la) => ({
          ...la,
          mcp: {
            ...la.mcp,
            tools: [
              ...la.mcp.tools.filter((Fi) => !Gs.some((xn) => Fi.name.startsWith(xG(xn)))),
              ...he,
            ],
            commands: [...la.mcp.commands.filter((Fi) => !Gs.some((xn) => $4(Fi, xn))), ...ie],
          },
        }));
      }
      return {
        response: fo.response,
        sdkServersChanged: fo.sdkServersChanged,
      };
    };
    return ((jt = jt.then(Sn, Sn)), jt);
  }
  function Dn() {
    let Gn = getAppState(),
      cr = Gn.mcp.clients,
      Lt = oE([...Gn.mcp.tools, ...dynamicMcpState.tools], "name"),
      En = new Set([...cr.map((Sn) => Sn.name), ...sdkClients.map((Sn) => Sn.name)]);
    return [...cr, ...sdkClients, ...dynamicMcpState.clients.filter((Sn) => !En.has(Sn.name))].map(
      (Sn) => {
        let Jn;
        if (Sn.config.type === "sse" || Sn.config.type === "http")
          Jn = {
            type: Sn.config.type,
            url: Sn.config.url,
            headers: Sn.config.headers,
            oauth: Sn.config.oauth,
          };
        else if (Sn.config.type === "claudeai-proxy")
          Jn = {
            type: "claudeai-proxy",
            url: Sn.config.url,
            id: Sn.config.id,
          };
        else if (Sn.config.type === "stdio" || Sn.config.type === void 0)
          Jn = {
            type: "stdio",
            command: Sn.config.command,
            args: Sn.config.args,
          };
        let Qn =
            Sn.type === "connected"
              ? sde(Lt, Sn.name).map((fo) => ({
                  name: fo.mcpInfo?.toolName ?? fo.name,
                  annotations: {
                    readOnly: fo.isReadOnly({}) || void 0,
                    destructive: fo.isDestructive?.({}) || void 0,
                    openWorld: fo.isOpenWorld?.({}) || void 0,
                  },
                }))
              : void 0,
          gr;
        if (Sn.type === "connected" && Sn.capabilities.experimental) {
          let fo = {
            ...Sn.capabilities.experimental,
          };
          if (fo["claude/channel"] && (!GAe() || !Iko(Sn.config.pluginSource)))
            delete fo["claude/channel"];
          if (Object.keys(fo).length > 0)
            gr = {
              experimental: fo,
            };
        }
        return {
          name: Sn.name,
          status: Sn.type,
          serverInfo: Sn.type === "connected" ? Sn.serverInfo : void 0,
          error: Sn.type === "failed" ? Sn.error : void 0,
          config: Jn,
          scope: Sn.config.scope,
          tools: Qn,
          capabilities: gr,
        };
      },
    );
  }
  async function nn(Gn) {
    try {
      await Promise.all([Promise.resolve(), pet("headless_managed_settings_wait", () => bVe())]);
    } catch (Lt) {
      ke(Lt);
    }
    let cr = false;
    try {
      let Lt = new Set(Object.keys((await M4()).servers));
      if (((cr = await mXo(Gn)), Oe.CLAUDE_CODE_SYNC_PLUGIN_INSTALL))
        fe = {
          start: performance.now(),
        };
      if (cr) await ln(Lt, "plugin_install_diff");
    } catch (Lt) {
      T(`Headless plugin install / MCP reconcile failed: ${be(Lt)}`, {
        level: "error",
      });
    }
    if (fe)
      ((fe.end = performance.now()), Zc("plugin_mcp_reconcile_ms", fe.end - fe.start, fe.start));
    return cr;
  }
  let Ln = null,
    Hn = null,
    kr,
    Mr = parseInt(process.env.CLAUDE_CODE_SYNC_PLUGIN_INSTALL_TIMEOUT_MS || "", 10),
    fe,
    Te = performance.now(),
    Re = DMe() ? sNc() : null,
    Ne = performance.now(),
    it = rnn() ? PNc() : null,
    Tt = null,
    un = false,
    ze;
  if (!md())
    if (Oe.CLAUDE_CODE_SYNC_PLUGIN_INSTALL) {
      ((ze =
        d.outputFormat === "stream-json"
          ? (En) =>
              void structuredIO.write({
                type: "system",
                subtype: "plugin_install",
                status: En.status,
                name: "name" in En ? En.name : void 0,
                error: "error" in En ? En.error : void 0,
                uuid: px.randomUUID(),
                session_id: Rt(),
              })
          : void 0),
        ze?.({
          status: "started",
        }),
        (Ln = nn((En) => ze?.(En))));
      let Gn = Ln,
        cr = it,
        Lt = new Promise((En) => {
          kr = En;
        });
      Hn = (async () => {
        try {
          if ((await Promise.race([Gn.catch(() => {}), Lt]), cr)) {
            let Jn = onn() - (performance.now() - Ne);
            await Promise.race([cr.catch(() => {}), Nn(Math.max(0, Jn))]);
          }
          let En = rnn() ? new Set(Object.keys((await M4()).servers)) : null,
            Sn = performance.now();
          if ((await pt(), Zc("registry_refresh_ms", performance.now() - Sn, Sn), En)) await pn(En);
        } catch (En) {
          ke(En);
        }
        try {
          let { setupPluginHookHotReload: En } = await Promise.resolve().then(() => (A5e(), Aao));
          En();
        } catch (En) {
          ke(En);
        }
      })();
    } else Tt = kickOffBackgroundPluginInstall(nn);
  let Mt = getAppState().mcp.clients.length,
    Qt = waitForPendingMcpBeforeFirstCommand(getAppState),
    idleTimeout = wUc(() => !g);
  async function pt() {
    let { agentDefinitions: Gn } = await iTe(setAppState);
    ((Ze = Ame(await mA(Kme.cwd()))), (Be = true));
    let cr = Ue.filter((Lt) => Lt.source === "flagSettings");
    ((Ue = [...Gn.allAgents, ...cr]),
      mp().then(
        (Lt) =>
          Jge({
            plugin_count: Lt.enabled.length,
          }),
        () => {},
      ));
  }
  async function ln(Gn, cr) {
    let { servers: Lt } = await M4();
    Jge({
      mcp_server_count: Object.keys(Lt).length,
    });
    let En = qtn(),
      Sn = {};
    for (let [gr, fo] of Object.entries(Lt)) {
      if (En && (fo.scope === "project" || fo.scope === "local")) continue;
      if (Gn?.has(gr) && !(gr in dynamicMcpState.configs)) continue;
      let cs = fo.type;
      if (cs === void 0 || cs === "stdio" || cs === "sse" || cs === "http" || cs === "sdk")
        Sn[gr] = fo;
    }
    for (let [gr, fo] of Object.entries(sdkMcpConfigs))
      if (fo.type === "sdk" && (!(gr in Sn) || Lt[gr]?.scope === "dynamic")) Sn[gr] = fo;
    let { response: Jn, sdkServersChanged: Qn } = await en(Sn, {
      authoritative: false,
      caller: cr,
      deferConnect: Vve(),
    });
    if (Qn) Ce();
    T(`Headless MCP refresh: added=${Jn.added.length}, removed=${Jn.removed.length}`);
  }
  async function pn(Gn) {
    let cr = performance.now(),
      Lt = RNc(),
      En = ln(Gn, "plugins_sync");
    if (Lt === 0) {
      (En.catch((Jn) => ke(Jn)),
        Zc("plugins_sync_mcp_ms", 0),
        G("tengu_plugins_sync_mcp_skipped", {}));
      return;
    }
    let Sn = Nn(Lt).then(() => "timeout");
    try {
      if ((await Promise.race([En, Sn])) === "timeout")
        (G("tengu_plugins_sync_mcp_timeout", {
          timeout_ms: Lt,
        }),
          En.catch((Jn) => ke(Jn)));
    } catch (Jn) {
      ke(Jn);
    }
    Zc("plugins_sync_mcp_ms", performance.now() - cr);
  }
  let ir = true,
    Rr = () => {
      if (!ir || d.outputFormat !== "stream-json") return;
      zv({
        type: "system",
        subtype: "commands_changed",
        commands: oE([...Ze, ...getAppState().mcp.commands], "name")
          .filter((Gn) => Gn.userInvocable !== false)
          .map((Gn) => ({
            name: xu(Gn),
            description: yse(Gn),
            argumentHint: Gn.argumentHint || "",
            aliases: Gn.aliases?.length ? Gn.aliases : void 0,
          })),
      });
    },
    _o = KTt.subscribe(() => {
      (W0(),
        mA(Kme.cwd())
          .then((Gn) => {
            ((Ze = Ame(Gn)), (Be = true), Rr());
          })
          .catch(ke),
        CP(Kme.cwd()).then((Gn) => {
          let cr = Ue.filter((Lt) => Lt.source === "flagSettings");
          Ue = [...Gn.allAgents, ...cr];
        }));
    });
  HSe(() => {
    if (abortController && pua("now").length > 0) abortController.abort(eP("interrupt"));
  });
  let Xo = false,
    Pn = 0,
    lr = () => {
      let Gn = jb();
      if (Gn !== Pn)
        (structuredIO.sessionState.notifyInternalMetadataChanged({
          cumulative_cost_usd: Gn,
        }),
          (Pn = Gn));
    },
    eo = async () => {
      if (g || HT()) return;
      if (
        ((g = true),
        (S = void 0),
        structuredIO.sessionState.notifyStateChanged("running"),
        qMa(),
        structuredIO.resetStallWatchdog(),
        idleTimeout.stop(),
        Me)
      )
        await Me;
      if ((wC("run_entry"), !Xo))
        ((Xo = true), Zc("first_message_read_ms", performance.now(), 0), cZa());
      try {
        let Sn = performance.now();
        if (
          (await Ce(),
          Zc("sdk_mcp_update_ms", performance.now() - Sn, Sn),
          wC("after_updateSdkMcp"),
          Re)
        ) {
          let Jn = performance.now(),
            Qn = tNc() - (Jn - Te),
            gr = Nn(Math.max(0, Qn)).then(() => "timeout");
          if ((await Promise.race([Re, gr])) === "timeout") G("tengu_skills_sync_wait_timeout", {});
          (Zc("skills_sync_wait_ms", performance.now() - Jn, Jn),
            W0(),
            (Ze = Ame(await mA(Kme.cwd()))),
            (Be = true),
            Rr(),
            (Re = null));
        }
        if (it) {
          let Jn = performance.now(),
            Qn = onn() - (Jn - Ne),
            gr = Nn(Math.max(0, Qn)).then(() => "timeout"),
            fo = (await Promise.race([it, gr])) === "timeout";
          if (
            (In("info", "plugins_sync_wait", {
              timed_out: fo,
            }),
            fo)
          )
            (G("tengu_plugins_sync_wait_timeout", {}),
              it
                .then(() => {
                  un = true;
                })
                .catch(ke));
          if ((Zc("plugins_sync_install_ms", performance.now() - Jn), (it = null), !Ln)) {
            let cs = performance.now();
            try {
              let Gs = new Set(Object.keys((await M4()).servers));
              (await pt(),
                await pn(Gs),
                Zc("plugin_state_refresh_inline_ms", performance.now() - cs, cs));
            } catch (Gs) {
              ke(Gs);
            }
          }
        }
        if (Ln) {
          let Jn = performance.now();
          if (Mr > 0) {
            let Qn = Nn(Mr).then(() => "timeout");
            if ((await Promise.race([Ln, Qn])) === "timeout")
              (T(`CLAUDE_CODE_SYNC_PLUGIN_INSTALL: plugin installation timed out after ${Mr}ms`, {
                level: "error",
              }),
                G("tengu_sync_plugin_install_timeout", {
                  timeout_ms: Mr,
                }));
          } else await Ln;
          if ((Zc("plugin_install_ms", performance.now() - Jn, Jn), fe))
            Zc("plugin_mcp_reconcile_ms", (fe.end ?? performance.now()) - fe.start, fe.start);
          ((Ln = null), kr?.(), Zc("plugin_install_total_ms", performance.now() - Jn, Jn));
        }
      } finally {
        (ze?.({
          status: "completed",
        }),
          (ze = void 0),
          kr?.());
      }
      let Gn = ut(process.env.CLAUDE_CODE_ENABLE_BACKGROUND_PLUGIN_REFRESH),
        cr = async () => {
          if ((Gn && Tt?.needsRefresh) || un) {
            if (Tt) Tt.needsRefresh = false;
            un = false;
            try {
              await pt();
            } catch (Sn) {
              ke(Sn);
            }
          }
        },
        Lt = createKeepAlivePulse(output, ut(process.env.CLAUDE_CODE_REMOTE)),
        En = createKeepAlivePulse(output, true);
      try {
        let Sn,
          Jn = false,
          Qn = null,
          gr = false,
          fo = null,
          cs = false,
          Gs = true,
          la = 0,
          Fi = (Yn) => V0(Yn) && Yn.mode === "orphaned-permission",
          xn = () => {
            let Yn = I5e(Fi);
            if (Yn)
              return (
                T(
                  `drainCommandQueue: prioritizing orphaned-permission for toolUseID=${Yn.orphanedPermission?.permissionResult?.toolUseID ?? "<unknown>"}`,
                ),
                Yn
              );
            return cgc(V0);
          },
          nr = async () => {
            while ((Sn = xn())) {
              if (
                (la++,
                k++,
                structuredIO.sessionState.notifyTurnStarting(),
                Sn.mode !== "prompt" &&
                  Sn.mode !== "orphaned-permission" &&
                  Sn.mode !== "task-notification")
              )
                throw Error("only prompt commands are supported in streaming mode");
              let Yn = [Sn];
              if (Sn.mode === "prompt") {
                while (canBatchWith(Sn, J8(V0))) Yn.push(I5e(V0));
                if (Yn.length > 1)
                  Sn = {
                    ...Sn,
                    value: joinPromptValues(Yn.map((To) => To.value)),
                    uuid: Yn.findLast((To) => To.uuid)?.uuid ?? Sn.uuid,
                    fileAttachments: Yn.flatMap((To) => To.fileAttachments ?? []),
                    clientPlatform:
                      Yn.find((To) => To.clientPlatform)?.clientPlatform ?? Sn.clientPlatform,
                  };
              }
              let Xn = Yn.map((To) => To.uuid).filter((To) => To !== void 0);
              if (d.replayUserMessages && Yn.length > 1) {
                for (let To of Yn)
                  if (To.uuid && To.uuid !== Sn.uuid)
                    output.enqueue({
                      type: "user",
                      message: {
                        role: "user",
                        content: To.value,
                      },
                      session_id: Rt(),
                      parent_tool_use_id: null,
                      uuid: To.uuid,
                      isReplay: true,
                      ...(To.fileAttachments?.length && {
                        file_attachments: To.fileAttachments,
                      }),
                      ...(To.origin && {
                        origin: To.origin,
                      }),
                    });
              }
              if (Gs) {
                if (((Gs = false), Hn)) {
                  let ji = performance.now();
                  (await Hn,
                    (Hn = null),
                    Zc("registry_refresh_join_ms", performance.now() - ji, ji));
                }
                wC("before_mcp_prewait");
                let To = performance.now();
                if (getAppState().mcp.clients.length > Mt)
                  await waitForPendingMcpBeforeFirstCommand(getAppState, void 0, Mt > 0);
                else await Qt;
                (Zc("mcp_prewait_ms", performance.now() - To, To), wC("after_mcp_prewait"));
              }
              let Jr = getAppState(),
                zr = mergeMcpClientLists(Jr.mcp.clients, sdkClients, dynamicMcpState.clients);
              He(zr);
              for (let To of zr) reregisterChannelHandlerAfterReconnect(To);
              let to = Ke(Jr);
              for (let To of Xn) structuredIO.onCommandLifecycle?.(To, "started");
              if (Sn.mode === "task-notification") {
                let To = typeof Sn.value === "string" ? Sn.value : "",
                  ji = To.match(/<task-id>([^<]+)<\/task-id>/),
                  us = To.match(/<tool-use-id>([^<]+)<\/tool-use-id>/),
                  X = To.match(/<output-file>([^<]+)<\/output-file>/),
                  Se = To.match(/<status>([^<]+)<\/status>/),
                  qe = To.match(/<summary>([^<]+)<\/summary>/),
                  ot = (Pa) =>
                    Pa === "completed" || Pa === "failed" || Pa === "stopped" || Pa === "killed",
                  zt = Se?.[1],
                  cn = ot(zt) ? (zt === "killed" ? "stopped" : zt) : "completed",
                  Tr = To.match(/<usage>([\s\S]*?)<\/usage>/)?.[1] ?? "",
                  Br = Tr.match(/<subagent_tokens>(\d+)<\/subagent_tokens>/),
                  fi = Tr.match(/<tool_uses>(\d+)<\/tool_uses>/),
                  oi = Tr.match(/<duration_ms>(\d+)<\/duration_ms>/);
                if (Se)
                  output.enqueue({
                    type: "system",
                    subtype: "task_notification",
                    task_id: ji?.[1] ?? "",
                    tool_use_id: us?.[1],
                    status: cn,
                    output_file: X?.[1] ?? "",
                    summary: qe?.[1] ?? "",
                    usage:
                      Br && fi
                        ? {
                            total_tokens: parseInt(Br[1], 10),
                            tool_uses: parseInt(fi[1], 10),
                            duration_ms: oi ? parseInt(oi[1], 10) : 0,
                          }
                        : void 0,
                    session_id: Rt(),
                    uuid: px.randomUUID(),
                  });
              }
              let vs = Sn.value;
              if (structuredIO instanceof kvt && Sn.mode === "prompt")
                G("tengu_bridge_message_received", {
                  is_repl: false,
                });
              if (Sn.shouldQuery !== false) {
                if (
                  (suggestionState.abortController?.abort(),
                  (suggestionState.abortController = null),
                  (suggestionState.pendingSuggestion = null),
                  (suggestionState.pendingLastEmittedEntry = null),
                  suggestionState.lastEmitted && Sn.mode === "prompt")
                ) {
                  let To = typeof vs === "string" ? vs : vs.find((ji) => ji.type === "text")?.text;
                  if (typeof To === "string")
                    XMa(
                      suggestionState.lastEmitted.text,
                      To,
                      suggestionState.lastEmitted.emittedAt,
                      suggestionState.lastEmitted.promptId,
                      suggestionState.lastEmitted.generationRequestId,
                    );
                  suggestionState.lastEmitted = null;
                }
              }
              abortController = Sl();
              let bs = void 0;
              (wC("before_ask"), jKt());
              let Da = Sn;
              if (Da.uuid !== void 0 && iua(Da.uuid)) {
                structuredIO.onCommandLifecycle?.(Da.uuid, "completed");
                continue;
              }
              let Qs =
                typeof vs === "string"
                  ? vs
                  : zl(
                      vs,
                      `
`,
                    );
              await CAn(Da.workload ?? d.workload, () =>
                SFn(Qs, async () => {
                  let To = false,
                    ji = false,
                    us = 0,
                    X = WH(),
                    Se = mutableMessages.length,
                    qe = r_();
                  ((h = Date.now()), VJ.startCLIActivity("print-ask"));
                  try {
                    for await (let ot of bUc({
                      commands: oE([...Ze, ...Jr.mcp.commands], "name"),
                      prompt: vs,
                      promptUuid: Da.uuid,
                      isMeta: Da.isMeta,
                      shouldQuery: Da.shouldQuery,
                      stopHookActive: Da.stopHookActive,
                      fileAttachments: Da.fileAttachments,
                      origin:
                        Da.origin ??
                        (Da.mode === "task-notification"
                          ? {
                              kind: "task-notification",
                            }
                          : void 0),
                      clientPlatform: Da.clientPlatform,
                      verifiedSlackHumanTurn: Da.verifiedSlackHumanTurn,
                      cwd: Kme.cwd(),
                      tools: to,
                      refreshTools: () => Ke(getAppState()),
                      refreshMcpClients: () =>
                        mergeMcpClientLists(
                          getAppState().mcp.clients,
                          sdkClients,
                          dynamicMcpState.clients,
                        ),
                      verbose: d.verbose,
                      mcpClients: zr,
                      thinkingConfig: ae,
                      maxTurns: d.maxTurns,
                      maxBudgetUsd: d.maxBudgetUsd,
                      taskBudget: d.taskBudget,
                      canUseTool: canUseTool,
                      userSpecifiedModel: ee,
                      fallbackModel: d.fallbackModel,
                      jsonSchema: Hsn() ?? d.jsonSchema,
                      mutableMessages: mutableMessages,
                      sessionEnvVars: V,
                      isolationLatch: Y,
                      pendingNestedMemoryTriggers: K,
                      getReadFileCache: () =>
                        pendingSeeds.size === 0 ? readFileState : Bct(readFileState, pendingSeeds),
                      setReadFileCache: (zt) => {
                        readFileState = zt;
                        for (let [cn, hr] of pendingSeeds.entries()) {
                          let Tr = readFileState.get(cn);
                          if (!Tr || hr.timestamp > Tr.timestamp) readFileState.set(cn, hr);
                        }
                        pendingSeeds.clear();
                      },
                      customSystemPrompt: ct(),
                      appendSystemPrompt: d.appendSystemPrompt,
                      planModeInstructions: d.planModeInstructions,
                      appendSubagentSystemPrompt: d.appendSubagentSystemPrompt,
                      toolAliases: d.toolAliases,
                      excludeDynamicSections: d.excludeDynamicSections,
                      getAppState: getAppState,
                      setAppState: setAppState,
                      abortController: abortController,
                      replayUserMessages: d.replayUserMessages,
                      includePartialMessages: d.includePartialMessages,
                      forwardSubagentText: d.forwardSubagentText,
                      onCommandLifecycle: structuredIO.onCommandLifecycle,
                      sessionState: structuredIO.sessionState,
                      requestDialog: _Ct() ? createPrintRequestDialog(structuredIO) : void 0,
                      agents: Ue,
                      allowedAgentTypes: bt,
                      orphanedPermission: Da.orphanedPermission,
                      deferredToolUse: _,
                      setSDKStatus: (zt, cn) => {
                        output.enqueue({
                          type: "system",
                          subtype: "status",
                          status: zt,
                          ...(cn?.compactResult !== void 0 && {
                            compact_result: cn.compactResult,
                          }),
                          ...(cn?.compactError !== void 0 && {
                            compact_error: cn.compactError,
                          }),
                          session_id: Rt(),
                          uuid: px.randomUUID(),
                        });
                      },
                    })) {
                      if (((_ = void 0), vt(), ot.type === "system")) {
                        if (ot.subtype === "api_retry")
                          ((To = true), (us = Math.max(us, ot.error_status ?? 0)));
                        if (ot.subtype === "compact_boundary")
                          ((ji = true), (Se = mutableMessages.length));
                      }
                      if (
                        ot.type === "assistant" &&
                        ot.parent_tool_use_id === null &&
                        ot.message.model !== _I &&
                        ot.message.model !== b
                      )
                        ((b = ot.message.model),
                          structuredIO.sessionState.notifyMetadataChanged({
                            last_served_model: ot.message.model,
                          }));
                      if (ot.type === "result") {
                        if (h !== void 0)
                          (G("tengu_sdk_result", {
                            subtype: $e(ot.subtype),
                            is_error: ot.is_error,
                            num_turns: ot.num_turns,
                            duration_ms: ot.duration_ms,
                            duration_api_ms: WH() - X,
                            saw_retry: To,
                            saw_compact: ji,
                            retry_status: To ? us : void 0,
                            api_error_status:
                              ot.subtype === "success" ? (ot.api_error_status ?? void 0) : void 0,
                            ...q(Se, to),
                          }),
                            (h = void 0));
                        if (ot.is_error)
                          reportTurnFailed(
                            structuredIO.sessionState,
                            ot.subtype === "success" ? ot.result : ot.errors[0],
                          );
                        for (let cn of VX()) output.enqueue(cn);
                        let zt = getAppState();
                        if (Da.shouldQuery === false) {
                          if (d.sessionMirror) await IC();
                          output.enqueue(ot);
                        } else if (
                          UUc({
                            inputClosed: A,
                            runningTasks: Ubt(zt),
                          }) ||
                          (A &&
                            gXo({
                              tasks: Object.values(zt.tasks ?? {}),
                              waits: x,
                              now: Date.now(),
                            }))
                        )
                          yXo({
                            message: ot,
                            held: C,
                            holdBackActive: true,
                            emit: (cn) => output.enqueue(cn),
                          });
                        else {
                          if (d.sessionMirror) await IC();
                          yXo({
                            message: ot,
                            held: C,
                            holdBackActive: false,
                            emit: (cn) => output.enqueue(cn),
                          });
                        }
                      } else {
                        for (let zt of VX()) output.enqueue(zt);
                        output.enqueue(ot);
                      }
                    }
                  } finally {
                    let ot = modelOverrideToAdoptAfterTurn({
                      activeUserSpecifiedModel: ee,
                      overrideAtTurnStart: qe,
                      overrideAtTurnEnd: r_(),
                    });
                    if (ot.kind !== "keep" && ee !== void 0)
                      (G("tengu_print_model_override_adopted", {
                        from_model_scope: $e(fSe(ee)),
                        ...(ot.kind === "adopt"
                          ? {
                              to_model_scope: $e(fSe(ot.model)),
                            }
                          : {
                              cleared_to_session_default: true,
                            }),
                      }),
                        (ee = ot.kind === "adopt" ? ot.model : void 0),
                        pe());
                    if (ot.kind === "keep" && ot.allowedOverrideApplied) Ee = void 0;
                    if (
                      ot.kind === "keep" &&
                      ot.blockedByAllowlist !== void 0 &&
                      (ee === void 0 || KS(ee) || xa(ee))
                    )
                      me(ot.blockedByAllowlist, ee);
                    (dde(), VJ.endCLIActivity("print-ask"));
                  }
                }),
              );
              for (let To of Xn) structuredIO.onCommandLifecycle?.(To, "completed");
              if (
                (In("info", "cli_ask_turn_complete", {
                  should_query: Da.shouldQuery,
                  batch_size: Yn.length,
                  mode: Da.mode,
                }),
                vt(),
                bridgeHandle?.sendResult(),
                cXo().snapshot(uXo(), {}).catch(ke),
                d.promptSuggestions &&
                  Da.shouldQuery !== false &&
                  !HT() &&
                  !ml(process.env.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION))
              ) {
                suggestionState.abortController?.abort();
                let ji = new AbortController();
                suggestionState.abortController = ji;
                let us = Tde();
                if (!us) b$("sdk_no_params", void 0, void 0, "sdk");
                else {
                  let X = {
                    promise: null,
                  };
                  ((X.promise = (async () => {
                    try {
                      let Se = await ugo(ji, mutableMessages, getAppState, us, "sdk");
                      if (!Se || ji.signal.aborted) return;
                      let qe = {
                          type: "prompt_suggestion",
                          suggestion: Se.suggestion,
                          uuid: px.randomUUID(),
                          session_id: Rt(),
                        },
                        ot = {
                          text: Se.suggestion,
                          emittedAt: Date.now(),
                          promptId: Se.promptId,
                          generationRequestId: Se.generationRequestId,
                        };
                      if (C.length > 0)
                        ((suggestionState.pendingSuggestion = qe),
                          (suggestionState.pendingLastEmittedEntry = {
                            text: ot.text,
                            promptId: ot.promptId,
                            generationRequestId: ot.generationRequestId,
                          }));
                      else ((suggestionState.lastEmitted = ot), output.enqueue(qe));
                    } catch (Se) {
                      if (
                        Se instanceof Error &&
                        (Se.name === "AbortError" || Se.name === "APIUserAbortError")
                      ) {
                        b$("aborted", void 0, void 0, "sdk");
                        return;
                      }
                      ke(Zr(Se));
                    } finally {
                      if (suggestionState.inflightPromise === X.promise)
                        suggestionState.inflightPromise = null;
                    }
                  })()),
                    (suggestionState.inflightPromise = X.promise));
                }
              }
              (APo(), wQn(), EPo());
            }
          };
        do {
          for (let Xn of VX()) output.enqueue(Xn);
          if ((await cr(), structuredIO.sessionState.getState() === "idle" && J8(V0) !== void 0))
            structuredIO.sessionState.notifyStateChanged("running");
          S = "draining_commands";
          let Yn = la;
          (await nr(), lr(), (Jn = false));
          {
            let Xn = getAppState(),
              Jr = Ubt(Xn).filter((us) => wH(us) && us.type !== "in_process_teammate"),
              zr = J8(V0) !== void 0,
              to = Date.now(),
              vs = gXo({
                tasks: Object.values(Xn.tasks ?? {}),
                waits: x,
                now: to,
              }),
              bs = la > Yn;
            if (A && !zr && !bs) fo ??= to;
            else ((fo = null), (cs = false));
            let Da = GUc(),
              Qs = Da > 0 && fo !== null && to - fo >= Da,
              To = WUc({
                runningBackgroundTasks: Jr,
                inputClosed: A,
                hasMainThreadQueued: zr,
                hasActiveTeammates: A && (YPt(Xn) || cje(Xn.teamContext)),
                hasPendingNotification: vs,
                ceilingExceeded: Qs,
                deadline: Qn,
                swept: gr,
                now: to,
              });
            if (
              ((Qn = To.deadline),
              (gr = To.swept),
              To.shouldSweep && !abortController?.signal.aborted)
            ) {
              if (Qs && !cs)
                ((cs = true),
                  process.stderr
                    .write(`Background tasks still running after ${Math.round(Da / 1000)}s; terminating. Set CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS=0 to wait indefinitely.
`));
              (qUc(Jr, $L(getAppState, setAppState)), (Jn = true));
            }
            if (((!To.swept && Jr.length > 0) || zr || vs) && !abortController?.signal.aborted) {
              if (((Jn = true), !zr)) {
                if (
                  ((S = "waiting_for_agents"),
                  FUc({
                    inputClosed: A,
                    currentState: structuredIO.sessionState.getState(),
                    hasRunningBgTasks: Jr.some(zJ),
                  }))
                )
                  structuredIO.sessionState.notifyStateChanged("idle");
                (Lt(), await Nn(100));
              }
            }
          }
        } while (Jn);
        if (
          (In("info", "cli_drain_queue_complete", {
            commands_processed: la,
            queue_depth_at_exit: Bao(),
          }),
          C.length > 0)
        ) {
          if (d.sessionMirror) await IC();
          if ((_Xo(C, (Yn) => output.enqueue(Yn)), suggestionState.pendingSuggestion)) {
            if (
              (output.enqueue(suggestionState.pendingSuggestion),
              suggestionState.pendingLastEmittedEntry)
            )
              ((suggestionState.lastEmitted = {
                ...suggestionState.pendingLastEmittedEntry,
                emittedAt: Date.now(),
              }),
                (suggestionState.pendingLastEmittedEntry = null));
            suggestionState.pendingSuggestion = null;
          }
        }
      } catch (Sn) {
        if ((G("tengu_sdk_session_crash", zLm(Sn)), !y))
          (G("tengu_sdk_result", {
            subtype: We("error_during_execution"),
            is_error: true,
            num_turns: 0,
            duration_ms: 0,
            duration_api_ms: 0,
            saw_retry: false,
            saw_compact: false,
          }),
            (y = true));
        try {
          if (d.sessionMirror) await IC();
          (reportTurnFailed(structuredIO.sessionState, be(Sn)),
            await structuredIO.write({
              type: "result",
              subtype: "error_during_execution",
              duration_ms: 0,
              duration_api_ms: 0,
              is_error: true,
              num_turns: 0,
              stop_reason: null,
              session_id: Rt(),
              total_cost_usd: 0,
              usage: xb,
              modelUsage: {},
              permission_denials: [],
              uuid: px.randomUUID(),
              errors: [be(Sn), ...PFe().map((Jn) => Jn.error)],
            }));
        } catch {}
        (await Promise.race([
          structuredIO.flushSessionState(),
          Nn(5000, void 0, {
            unref: true,
          }),
        ]),
          suggestionState.abortController?.abort(),
          Bc(1));
        return;
      } finally {
        if (
          ((S = "finally_flush"),
          await structuredIO.flushInternalEvents(),
          (S = "finally_post_flush"),
          !HT())
        )
          await Promise.race([
            structuredIO.flushDeliveryAcks(),
            Nn(5000, void 0, {
              unref: true,
            }),
          ]);
        if (!HT()) {
          (structuredIO.sessionState.notifyStateChanged("idle"), lr());
          for (let Sn of VX()) output.enqueue(Sn);
          WMa(structuredIO.sessionState);
        }
        ((g = false), idleTimeout.start());
      }
      if (J8(V0) !== void 0) {
        eo();
        return;
      }
      {
        let Jn = getAppState().teamContext;
        if (Jn && wM(Jn))
          while (true) {
            let fo = getAppState();
            if (!(YPt(fo) || cje(fo.teamContext))) {
              T("[print.ts] No more active teammates, stopping poll");
              break;
            }
            let Gs = await p8e("team-lead", fo.teamContext?.teamName);
            if (Gs.length > 0) {
              (T(`[print.ts] Team-lead found ${Gs.length} unread messages`),
                await f8e("team-lead", fo.teamContext?.teamName, Gs));
              let la = fo.teamContext?.teamName;
              for (let nr of Gs) {
                let Yn = fAe(nr.text);
                if (Yn && la) {
                  let Xn = Yn.from;
                  T(`[print.ts] Processing shutdown_approved from ${Xn}`);
                  let Jr = fo.teamContext?.teammates
                    ? Object.entries(fo.teamContext.teammates).find(([, zr]) => zr.name === Xn)?.[0]
                    : void 0;
                  if (Jr)
                    (c8e(la, {
                      agentId: Jr,
                      name: Xn,
                    }),
                      T(`[print.ts] Removed ${Xn} from team file`),
                      await gft(la, Jr, Xn, "shutdown"),
                      setAppState((zr) => {
                        if (!zr.teamContext?.teammates) return zr;
                        if (!(Jr in zr.teamContext.teammates)) return zr;
                        let { [Jr]: to, ...vs } = zr.teamContext.teammates;
                        return {
                          ...zr,
                          teamContext: {
                            ...zr.teamContext,
                            teammates: vs,
                          },
                        };
                      }));
                }
              }
              let Fi = Gs.filter((nr) => tvo(nr.text));
              if (Fi.length === 0) {
                En();
                continue;
              }
              let xn = Fht(Fi, {
                recipientIsLead: true,
              });
              (j_({
                mode: "prompt",
                agentId: ls(),
                value: xn,
                uuid: px.randomUUID(),
              }),
                eo());
              return;
            }
            if (A && !v) {
              ((v = true),
                T("[print.ts] Input closed with active teammates, injecting shutdown prompt"),
                j_({
                  mode: "prompt",
                  agentId: ls(),
                  value: SHUTDOWN_TEAM_PROMPT,
                  uuid: px.randomUUID(),
                }),
                eo());
              return;
            }
            (Lt(), await Nn(500));
          }
      }
      if (A)
        if (
          await (async () => {
            let Jn = getAppState();
            if (Q2r(Jn)) await Z2r(setAppState, Jn);
            let Qn = getAppState();
            return cje(Qn.teamContext) || YPt(Qn);
          })()
        )
          (j_({
            mode: "prompt",
            agentId: ls(),
            value: SHUTDOWN_TEAM_PROMPT,
            uuid: px.randomUUID(),
          }),
            eo());
        else {
          if (suggestionState.inflightPromise) {
            let Jn = setTimeout((Qn) => Qn?.abort(), 30000, suggestionState.abortController);
            try {
              await suggestionState.inflightPromise;
            } finally {
              clearTimeout(Jn);
            }
          }
          if (
            (suggestionState.abortController?.abort(),
            (suggestionState.abortController = null),
            L.size > 0)
          )
            await Promise.allSettled(L);
          (await KMo(),
            (ir = false),
            _o(),
            N?.(),
            cLe.delete(B),
            await Mfo([...getAppState().mcp.clients, ...sdkClients, ...dynamicMcpState.clients]),
            x5e(null));
          for (let Jn of VX()) output.enqueue(Jn);
          output.done();
        }
    };
  if (
    (HSe(() => {
      if (!g && !A && J8(V0) !== void 0) eo();
    }),
    !g && !A && J8(V0) !== void 0)
  )
    eo();
  if (m)
    (T(`[print.ts] Auto-resuming deferred tool: ${m.toolName} (${m.toolUseID})`),
      j_({
        mode: "prompt",
        agentId: ls(),
        value: h8n(),
        uuid: px.randomUUID(),
        isMeta: true,
      }),
      eo());
  function Kn(Gn) {
    let cr = structuredIO.cancelPendingUserDialogs(LQ.kind, Gn);
    if (cr > 0)
      In("info", "cli_user_dialog_implicit_cancel", {
        cancelled_count: cr,
        reason: Gn,
      });
  }
  let Nt = null;
  if (aFc.isKairosCronEnabled())
    ((Nt = PLm.createCronScheduler({
      onFire: (Gn) => {
        if (A) return;
        let cr = $Lm.resolveLoopDefaultFire(Gn);
        (j_({
          mode: "prompt",
          agentId: ls(),
          value: cr,
          uuid: px.randomUUID(),
          priority: "later",
          isMeta: true,
          workload: rrt,
        }),
          Kn("cron_fire"),
          eo());
      },
      isLoading: () => g || A,
      getJitterConfig: MLm.getCronJitterConfig,
      isKilled: () => !aFc.isKairosCronEnabled(),
    })),
      Nt.start());
  let Ut = function (Gn, cr) {
      output.enqueue({
        type: "control_response",
        response: {
          subtype: "success",
          request_id: Gn.request_id,
          response: cr,
        },
      });
    },
    Fn = function (Gn, cr) {
      output.enqueue({
        type: "control_response",
        response: {
          subtype: "error",
          request_id: Gn.request_id,
          error: cr,
        },
      });
    };
  async function xi(Gn, cr) {
    try {
      let Lt = await V7e.realpath($t()),
        En = await V7e.realpath(cr.directory);
      if (
        En === Lt ||
        !dL(En, Lt, {
          caseFold: false,
        })
      )
        throw Error(`register_repo_root: ${cr.directory} is not a subdirectory of cwd`);
      setAppState((Jn) => ({
        ...Jn,
        toolPermissionContext: My(Jn.toolPermissionContext, {
          type: "addDirectories",
          directories: [En],
          destination: "session",
        }),
      }));
      let Sn = c0();
      if (!Sn.includes(En)) Pge([...Sn, En]);
      if ((xo.refreshConfig(), cr.reload_claude_md)) {
        ak();
        let Jn = q7e.join(En, "CLAUDE.md");
        if (!K.includes(Jn)) K.push(Jn);
      }
      if (cr.reload_skills) (W0(), wq(), KW(), rF.emit());
      if (cr.reload_plugins) {
        (await Promise.race([Promise.allSettled([mXo()]), Nn(onn())]), await iTe(setAppState));
        let Jn = new Set(Object.keys(dynamicMcpState.configs)),
          Qn = new Set(
            getAppState()
              .mcp.clients.filter((gr) => !Jn.has(gr.name))
              .map((gr) => gr.name),
          );
        await Promise.allSettled([ln(Qn, "reload_plugins")]);
      }
      Ut(Gn, {
        directory: En,
      });
    } catch (Lt) {
      Fn(Gn, be(Lt));
    }
  }
  async function jn(Gn, cr) {
    try {
      let { stageFile: Lt, destFromMountPath: En } = await Promise.resolve().then(
          () => (AXo(), EXo),
        ),
        Sn;
      try {
        Sn = En(cr.mount_path);
      } catch (fo) {
        Fn(Gn, be(fo));
        return;
      }
      if (!ut(Oe.CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD)) {
        Fn(
          Gn,
          "add_directory requires CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD to be set in the container environment",
        );
        return;
      }
      let Jn = await Lt({
        mount_path: cr.mount_path,
        force: true,
      });
      if (!Jn.ok) {
        Fn(Gn, Jn.error);
        return;
      }
      let Qn = q7e.dirname(Sn),
        gr = c0();
      if (!gr.includes(Qn)) Pge([...gr, Qn]);
      (ak(),
        uS.cache.clear?.(),
        Ut(Gn, {
          staged_path: Sn,
          directory: Qn,
        }));
    } catch (Lt) {
      Fn(Gn, be(Lt));
    }
  }
  let So = new Set();
  if (
    f &&
    turnInterruptionState &&
    turnInterruptionState.kind !== "none" &&
    Oe.CLAUDE_CODE_RESUME_INTERRUPTED_TURN
  )
    for (let Gn of f) So.add(Gn);
  structuredIO.setUnexpectedResponseCallback(async (Gn) => {
    await handleOrphanedPermissionResponse({
      message: Gn,
      setAppState: setAppState,
      handledToolUseIds: So,
      onEnqueued: () => {
        eo();
      },
    });
  });
  let elicitationRegistered = new Set(),
    activeOAuthFlows = new Map(),
    js = null;
  return (
    (async () => {
      if (Me) await Me;
      let Gn = false,
        cr = initialMessages.some((Lt) => Lt.type !== "system") || XGl();
      (Zc("input_ready_ms", performance.now(), 0),
        uZa(),
        In("info", "cli_message_loop_started"),
        wC("stdin_listen_started"));
      for await (let Lt of structuredIO.structuredInput) {
        let En = "uuid" in Lt ? Lt.uuid : void 0;
        if (
          En &&
          Lt.type !== "user" &&
          Lt.type !== "bash_command" &&
          Lt.type !== "control_response"
        )
          structuredIO.onCommandLifecycle?.(En, "completed");
        if (Lt.type === "control_request") {
          if (Lt.request.subtype === "interrupt") {
            if (abortController) abortController.abort(eP("remote-cancel"));
            (lzt({
              taskRegistry: $L(getAppState, setAppState),
              setAppState: setAppState,
            }),
              suggestionState.abortController?.abort(),
              (suggestionState.abortController = null),
              (suggestionState.lastEmitted = null),
              (suggestionState.pendingSuggestion = null),
              Ut(Lt));
          } else if (Lt.request.subtype === "end_session") {
            if (
              shouldIgnoreStaleEndSession(Lt.request.reason, process.env.CLAUDE_CODE_WORKER_EPOCH)
            ) {
              (T(
                "[print.ts] stale 'archived' end_session ignored on epoch>1 \u2014 from prior lifecycle",
              ),
                Ut(Lt));
              continue;
            }
            if (
              (T(`[print.ts] end_session received, reason=${Lt.request.reason ?? "unspecified"}`),
              abortController)
            )
              abortController.abort();
            (D.abort(),
              suggestionState.abortController?.abort(),
              (suggestionState.abortController = null),
              (suggestionState.lastEmitted = null),
              (suggestionState.pendingSuggestion = null),
              Ut(Lt));
            break;
          } else if (Lt.request.subtype === "initialize") {
            let xn = typeof Lt.request.title === "string" ? Lt.request.title.trim() : void 0;
            if (xn) ((cr = true), jYe(xn));
            if (Lt.request.sdkMcpServers && Lt.request.sdkMcpServers.length > 0)
              for (let Yn of Lt.request.sdkMcpServers)
                sdkMcpConfigs[Yn] = {
                  type: "sdk",
                  name: Yn,
                };
            if (Lt.request.webSearchIsolationExemptMcpServers)
              qyl(Y, Lt.request.webSearchIsolationExemptMcpServers);
            let nr = await GLm(
              Lt.request,
              Lt.request_id,
              Gn,
              output,
              [...Ze, ...getAppState().mcp.commands],
              re,
              oe,
              structuredIO,
              !!d.enableAuthStatus,
              d,
              options,
              getAppState,
              setAppState,
            );
            if (nr.restrictedAgentModel) me(nr.restrictedAgentModel);
            if (d.promptSuggestions && Sjn())
              setAppState((Yn) => {
                if (Yn.promptSuggestionEnabled) return Yn;
                return {
                  ...Yn,
                  promptSuggestionEnabled: true,
                };
              });
            if (Lt.request.agentProgressSummaries && at("tengu_slate_prism", true)) abr(true);
            if (((Gn = true), TSe())) eo();
          } else if (Lt.request.subtype === "set_permission_mode") {
            let xn = Lt.request;
            setAppState((nr) => ({
              ...nr,
              toolPermissionContext: handleSetPermissionMode(
                xn,
                Lt.request_id,
                nr.toolPermissionContext,
                output,
              ),
              isUltraplanMode: xn.ultraplan ?? nr.isUltraplanMode,
            }));
          } else if (Lt.request.subtype === "set_model") {
            let xn = Lt.request.model ?? "default",
              nr = xn.trim().toLowerCase() === "default",
              Yn = nr ? Ey() : xn;
            if (!nr && !KS(Yn) && !(nU(Yn) ?? xa(Yn))) {
              let Xn = ee !== void 0 && (KS(ee) || xa(ee)) ? zo(ee) : void 0;
              (me(xn, Xn), Fn(Lt, moe(xn, Xn ?? As())));
            } else {
              let Xn = As(),
                Jr = ee;
              if (
                ((ee = Yn),
                py(Yn),
                setAppState((to) => ({
                  ...to,
                  mainLoopModelForSession: Yn,
                })),
                structuredIO.sessionState.notifyMetadataChanged({
                  model: Yn,
                }),
                As() !== Xn || zo(Yn) !== zo(Jr ?? Xn))
              )
                de(xn, Yn);
              (pe(), Ut(Lt));
            }
          } else if (Lt.request.subtype === "set_max_thinking_tokens") {
            if (Lt.request.thinking_display !== void 0) ce = Lt.request.thinking_display ?? void 0;
            ((ae = fFc(Lt.request.max_thinking_tokens, ce)), Ut(Lt));
          } else if (Lt.request.subtype === "mcp_status")
            Ut(Lt, {
              mcpServers: Dn(),
            });
          else if (Lt.request.subtype === "get_binary_version")
            Ut(Lt, {
              version: `${
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
              }${L2()}`,
              buildTime: {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.195",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-06-26T01:00:56Z",
                GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
              }.BUILD_TIME,
            });
          else if (Lt.request.subtype === "get_context_usage")
            try {
              let xn = getAppState(),
                nr = await gEt({
                  messages: mutableMessages,
                  getAppState: getAppState,
                  options: {
                    mainLoopModel: As(),
                    tools: Ke(xn),
                    agentDefinitions: {
                      activeAgents: YF(Ue),
                      allAgents: Ue,
                    },
                    customSystemPrompt: ct(),
                    appendSystemPrompt: d.appendSystemPrompt,
                    excludeDynamicSections: d.excludeDynamicSections,
                  },
                });
              Ut(Lt, {
                ...nr,
              });
            } catch (xn) {
              Fn(Lt, be(xn));
            }
          else if (Lt.request.subtype === "get_session_cost")
            Ut(Lt, {
              text: Ja(hMe()),
            });
          else if (Lt.request.subtype === "get_usage")
            try {
              let xn = await L7t();
              Ut(Lt, {
                ...xn,
              });
            } catch (xn) {
              Fn(Lt, be(xn));
            }
          else if (Lt.request.subtype === "mcp_message") {
            let xn = Lt.request,
              nr = sdkClients.find((Yn) => Yn.name === xn.server_name);
            if (nr && nr.type === "connected" && nr.client?.transport?.onmessage)
              nr.client.transport.onmessage(xn.message);
            Ut(Lt);
          } else if (Lt.request.subtype === "rewind_files") {
            let xn = getAppState(),
              nr = await handleRewindFiles(
                Lt.request.user_message_id,
                xn,
                Lt.request.dry_run ?? false,
              );
            if (nr.canRewind || Lt.request.dry_run) Ut(Lt, nr);
            else Fn(Lt, nr.error ?? "Unexpected error");
          } else if (Lt.request.subtype === "cancel_async_message") {
            let xn = Lt.request.message_uuid,
              nr = ALe((Yn) => Yn.uuid === xn);
            if (nr.length === 0) sua(xn);
            Ut(Lt, {
              cancelled: nr.length > 0,
            });
          } else if (Lt.request.subtype === "rewind_conversation") {
            let xn = Lt.request.target_message_uuid,
              nr = structuredIO.sessionState.getState() !== "idle";
            if (nr && Lt.request.interrupt_if_running && !TSe()) {
              (lzt({
                taskRegistry: $L(getAppState, setAppState),
                setAppState: setAppState,
              }),
                suggestionState.abortController?.abort(),
                (suggestionState.abortController = null),
                (suggestionState.lastEmitted = null),
                (suggestionState.pendingSuggestion = null));
              let Yn = k,
                Xn = Date.now() + 10000; /* 1e4 */
              while (structuredIO.sessionState.getState() !== "idle" && k === Yn && Date.now() < Xn)
                (abortController?.abort(eP("remote-cancel")), await Nn(20));
              nr = k > Yn || structuredIO.sessionState.getState() !== "idle";
            }
            if (nr || TSe())
              Ut(Lt, {
                rewound: false,
                prefillText: null,
                precedingAssistantUuid: null,
                error: TSe() ? "commands queued" : "turn running",
              });
            else {
              let Yn = xn.slice(0, t8e),
                Xn = mutableMessages.findIndex(
                  (zr) => zr.type === "user" && zr.uuid.slice(0, t8e) === Yn,
                ),
                Jr = mutableMessages.some((zr, to) => to > Xn && Qoe(zr));
              if (Xn < 0)
                Ut(Lt, {
                  rewound: false,
                  prefillText: null,
                  precedingAssistantUuid: null,
                  error: "target not found",
                });
              else if (Jr)
                Ut(Lt, {
                  rewound: false,
                  prefillText: null,
                  precedingAssistantUuid: null,
                  error: "stale target",
                });
              else {
                let zr = mutableMessages[Xn],
                  to = null;
                if (zr?.type === "user") {
                  let To = zr.message.content;
                  to =
                    typeof To === "string"
                      ? To
                      : To.filter((ji) => ji.type === "text").map((ji) => ji.text).join(`
`);
                }
                let { persistAnchor: vs, precedingAssistantUuid: bs } = findRewindAnchors(
                    mutableMessages,
                    Xn,
                  ),
                  Da = at("tengu_rewind_first_message", false),
                  Qs = Da ? vs : bs;
                if (bs === null && !Da)
                  Ut(Lt, {
                    rewound: false,
                    prefillText: null,
                    precedingAssistantUuid: null,
                    error: "no preceding assistant",
                  });
                else {
                  let To = true,
                    ji = Da
                      ? {
                          rewound: true,
                        }
                      : void 0;
                  try {
                    (await o5o(Qs, ji),
                      await structuredIO.flushInternalEvents(),
                      await LJt(Qs, ji));
                  } catch (us) {
                    ((To = false), ke(us));
                  }
                  if (!To)
                    Ut(Lt, {
                      rewound: false,
                      prefillText: null,
                      precedingAssistantUuid: null,
                      error: "failed to persist rewind anchor",
                    });
                  else if (mutableMessages[Xn]?.uuid !== zr?.uuid)
                    Ut(Lt, {
                      rewound: false,
                      prefillText: null,
                      precedingAssistantUuid: null,
                      error: "state changed",
                    });
                  else
                    (mutableMessages.splice(Xn),
                      (xt = mutableMessages.length),
                      Ut(Lt, {
                        rewound: true,
                        targetMessageUuid: zr?.uuid ?? xn,
                        prefillText: to,
                        precedingAssistantUuid: bs,
                      }));
                }
              }
            }
          } else if (Lt.request.subtype === "read_file")
            try {
              let { readFileForRemote: xn } = await Promise.resolve().then(() => (een(), Yfc)),
                nr = await xn(
                  Lt.request.path,
                  Lt.request.max_bytes,
                  getAppState().toolPermissionContext,
                  Lt.request.encoding,
                );
              Ut(Lt, nr);
            } catch (xn) {
              Fn(Lt, be(xn));
            }
          else if (Lt.request.subtype === "stage_file") {
            let xn = Lt.request;
            (async () => {
              try {
                let { stageFile: nr } = await Promise.resolve().then(() => (AXo(), EXo)),
                  Yn = setInterval(
                    (Jr) => {
                      try {
                        Jr.enqueue({
                          type: "keep_alive",
                        });
                      } catch {}
                    },
                    30000,
                    output,
                  ),
                  Xn;
                try {
                  Xn = await nr(xn);
                } finally {
                  clearInterval(Yn);
                }
                if (Xn.ok) Ut(Lt, Xn);
                else Fn(Lt, Xn.error);
              } catch (nr) {
                Fn(Lt, be(nr));
              }
            })();
          } else if (Lt.request.subtype === "register_repo_root") xi(Lt, Lt.request);
          else if (Lt.request.subtype === "add_directory") {
            let xn = Lt.request;
            (async () => {
              let nr = setInterval(
                (Yn) => {
                  try {
                    Yn.enqueue({
                      type: "keep_alive",
                    });
                  } catch {}
                },
                30000,
                output,
              );
              try {
                await jn(Lt, xn);
              } finally {
                clearInterval(nr);
              }
            })();
          } else if (Lt.request.subtype === "file_suggestions")
            try {
              let { generateFileSuggestions: xn, globalFileIndexCache: nr } =
                  await Promise.resolve().then(() => (JSt(), YDl)),
                Yn = await xn(nr, Lt.request.query, true);
              Ut(Lt, {
                suggestions: Yn.map((Xn) => ({
                  path: Xn.displayText,
                })),
              });
            } catch (xn) {
              Fn(Lt, be(xn));
            }
          else if (Lt.request.subtype === "seed_read_state") {
            try {
              let xn = ds(Lt.request.path),
                nr = Math.floor((await V7e.stat(xn)).mtimeMs);
              if (nr <= Lt.request.mtime) {
                let Yn = await V7e.readFile(xn, "utf-8"),
                  Xn = (Yn.charCodeAt(0) === 65279 ? Yn.slice(1) : Yn).replaceAll(
                    `\r
`,
                    `
`,
                  );
                pendingSeeds.set(xn, {
                  content: Xn,
                  timestamp: nr,
                  offset: void 0,
                  limit: void 0,
                });
              }
            } catch {}
            Ut(Lt);
          } else if (Lt.request.subtype === "mcp_set_servers") {
            let { response: xn, sdkServersChanged: nr } = await en(Lt.request.servers, {
              authoritative: true,
              caller: "mcp_set_servers",
            });
            if ((Ut(Lt, xn), nr)) Ce();
          } else if (Lt.request.subtype === "reload_plugins")
            try {
              if (rnn()) await Promise.race([Promise.allSettled([MNc()]), Nn(onn())]);
              let xn = await iTe(setAppState),
                nr = Ue.filter((bs) => bs.source === "flagSettings");
              Ue = [...xn.agentDefinitions.allAgents, ...nr];
              let Yn = new Set(Object.keys(dynamicMcpState.configs)),
                Xn = new Set(
                  getAppState()
                    .mcp.clients.filter((bs) => !Yn.has(bs.name))
                    .map((bs) => bs.name),
                ),
                Jr = [],
                [zr, to, vs] = await Promise.allSettled([
                  mA(Kme.cwd()),
                  ln(Xn, "reload_plugins"),
                  mp(),
                ]);
              if (zr.status === "fulfilled") Ze = Ame(zr.value);
              else ke(zr.reason);
              if (to.status === "rejected")
                T(`reload_plugins: applyPluginMcpDiff failed: ${be(to.reason)}`, {
                  level: "error",
                });
              if (vs.status === "fulfilled")
                Jr = vs.value.enabled.map((bs) => ({
                  name: bs.name,
                  path: bs.path,
                  source: bs.source,
                }));
              else ke(vs.reason);
              Ut(Lt, {
                commands: Ze.filter((bs) => bs.userInvocable !== false).map((bs) => ({
                  name: xu(bs),
                  description: yse(bs),
                  argumentHint: bs.argumentHint || "",
                  aliases: bs.aliases?.length ? bs.aliases : void 0,
                })),
                agents: Ue.map((bs) => ({
                  name: bs.agentType,
                  description: bs.whenToUse,
                  model: bs.model === "inherit" ? void 0 : bs.model,
                })),
                plugins: Jr,
                mcpServers: Dn(),
                error_count: xn.error_count,
              });
            } catch (xn) {
              Fn(Lt, be(xn));
            }
          else if (Lt.request.subtype === "reload_skills")
            try {
              if (DMe()) await Promise.race([Promise.allSettled([iNc()]), Nn(nNc())]);
              (W0(), KW(), (Ze = Ame(await mA(Kme.cwd()))));
              let xn = (await aC(Kme.cwd())).map((nr) => ({
                name: xu(nr),
                description: yse(nr),
                argumentHint: nr.argumentHint || "",
                aliases: nr.aliases?.length ? nr.aliases : void 0,
              }));
              Ut(Lt, {
                skills: xn,
              });
            } catch (xn) {
              Fn(Lt, be(xn));
            }
          else if (Lt.request.subtype === "mcp_reconnect") {
            let xn = getAppState(),
              { serverName: nr } = Lt.request,
              Yn =
                P4(nr) ??
                mcpClients.find((Xn) => Xn.name === nr)?.config ??
                sdkClients.find((Xn) => Xn.name === nr)?.config ??
                dynamicMcpState.clients.find((Xn) => Xn.name === nr)?.config ??
                xn.mcp.clients.find((Xn) => Xn.name === nr)?.config ??
                null;
            if (!Yn) Fn(Lt, `Server not found: ${nr}`);
            else if (D4(nr, Yn)) Fn(Lt, `MCP server ${nr} is blocked by enterprise managed policy`);
            else {
              let Xn = await iJ(nr, Yn),
                Jr = xG(nr);
              if (
                (setAppState((zr) => ({
                  ...zr,
                  mcp: {
                    ...zr.mcp,
                    clients: zr.mcp.clients.map((to) => (to.name === nr ? Xn.client : to)),
                    tools: [...bL(zr.mcp.tools, (to) => to.name?.startsWith(Jr)), ...Xn.tools],
                    commands: [...bL(zr.mcp.commands, (to) => $4(to, nr)), ...Xn.commands],
                    resources:
                      Xn.resources && Xn.resources.length > 0
                        ? {
                            ...zr.mcp.resources,
                            [nr]: Xn.resources,
                          }
                        : $F(zr.mcp.resources, nr),
                  },
                })),
                (dynamicMcpState = {
                  ...dynamicMcpState,
                  clients: [...dynamicMcpState.clients.filter((zr) => zr.name !== nr), Xn.client],
                  tools: [
                    ...dynamicMcpState.tools.filter((zr) => !zr.name?.startsWith(Jr)),
                    ...Xn.tools,
                  ],
                }),
                Xn.client.type === "connected")
              )
                (He([Xn.client]), reregisterChannelHandlerAfterReconnect(Xn.client), Ut(Lt));
              else {
                let zr =
                  Xn.client.type === "failed"
                    ? (Xn.client.error ?? "Connection failed")
                    : `Server status: ${Xn.client.type}`;
                Fn(Lt, zr);
              }
            }
          } else if (Lt.request.subtype === "mcp_call") {
            let { tool: xn, arguments: nr } = Lt.request,
              Yn = eI(xn);
            if (!Yn || !Yn.toolName) Fn(Lt, `Not a fully-qualified MCP tool name: ${xn}`);
            else {
              let Xn = [
                ...getAppState().mcp.clients,
                ...sdkClients,
                ...dynamicMcpState.clients,
              ].find((Jr) => Jr.type === "connected" && hc(Jr.name) === Yn.serverName);
              if (!Xn || Xn.type !== "connected")
                Fn(Lt, `MCP server not connected: ${Yn.serverName}`);
              else if (Xn.config.type === "sdk")
                Fn(
                  Lt,
                  "mcp_call does not support SDK MCP servers. " +
                    `SDK servers are caller-provided \u2014 invoke ${Yn.serverName} directly.`,
                );
              else {
                let Jr =
                  [...getAppState().mcp.tools, ...dynamicMcpState.tools].find((zr) => Ql(zr, xn))
                    ?.mcpInfo?.toolName ?? Yn.toolName;
                (async () => {
                  if (D.signal.aborted) return;
                  let zr = Sl(),
                    to = () => zr.abort(D.signal.reason);
                  D.signal.addEventListener("abort", to, {
                    once: true,
                  });
                  try {
                    let vs = await Dfo({
                      client: Xn,
                      clientConnection: Xn,
                      tool: Jr,
                      args: nr ?? {},
                      imageLimits: H8,
                      signal: zr.signal,
                      setAppState: setAppState,
                      requestDialog: void 0,
                    });
                    if (D.signal.aborted) return;
                    if (vs.urlElicitationDeclined)
                      Fn(
                        Lt,
                        `URL elicitation required (open URL, then retry mcp_call): ${vs.urlElicitationDeclined.url}` +
                          (typeof vs.content === "string" ? ` \u2014 ${vs.content}` : ""),
                      );
                    else
                      Ut(Lt, {
                        content: vs.content,
                        structuredContent: vs.structuredContent,
                        _meta: vs._meta,
                      });
                  } catch (vs) {
                    if (D.signal.aborted) return;
                    if (vs instanceof Rqe) r2n(vs.serverName, setAppState);
                    let bs = vs instanceof Error ? vs.message : String(vs);
                    if (vs instanceof gpt)
                      bs = `MCP session expired for ${Yn.serverName} \u2014 send mcp_reconnect and retry mcp_call: ${bs}`;
                    else if (vs instanceof gi && vs.code === Si.UrlElicitationRequired) {
                      let Da = Lfo(vs).map((Qs) => Qs.url);
                      bs =
                        Da.length > 0
                          ? `URL elicitation required (open URL, then retry mcp_call): ${Da.join(", ")} \u2014 ${bs}`
                          : `URL elicitation required (no URL in error data): ${bs}`;
                    }
                    Fn(Lt, bs);
                  } finally {
                    D.signal.removeEventListener("abort", to);
                  }
                })();
              }
            }
          } else if (Lt.request.subtype === "mcp_toggle") {
            let xn = getAppState(),
              { serverName: nr, enabled: Yn } = Lt.request,
              Xn =
                P4(nr) ??
                mcpClients.find((Jr) => Jr.name === nr)?.config ??
                sdkClients.find((Jr) => Jr.name === nr)?.config ??
                dynamicMcpState.clients.find((Jr) => Jr.name === nr)?.config ??
                xn.mcp.clients.find((Jr) => Jr.name === nr)?.config ??
                null;
            if (!Xn) Fn(Lt, `Server not found: ${nr}`);
            else if (!Yn) {
              iqe(nr, false);
              let Jr = [
                ...mcpClients,
                ...sdkClients,
                ...dynamicMcpState.clients,
                ...xn.mcp.clients,
              ].find((to) => to.name === nr);
              if (Jr && Jr.type === "connected") await ST(nr, Xn);
              let zr = xG(nr);
              (setAppState((to) => ({
                ...to,
                mcp: {
                  ...to.mcp,
                  clients: to.mcp.clients.map((vs) =>
                    vs.name === nr
                      ? {
                          name: nr,
                          type: "disabled",
                          config: Xn,
                        }
                      : vs,
                  ),
                  tools: bL(to.mcp.tools, (vs) => vs.name?.startsWith(zr)),
                  commands: bL(to.mcp.commands, (vs) => $4(vs, nr)),
                  resources: $F(to.mcp.resources, nr),
                },
              })),
                Ut(Lt));
            } else if (D4(nr, Xn))
              Fn(Lt, `MCP server ${nr} is blocked by enterprise managed policy`);
            else {
              iqe(nr, true);
              let Jr = await iJ(nr, Xn),
                zr = xG(nr);
              if (
                (setAppState((to) => ({
                  ...to,
                  mcp: {
                    ...to.mcp,
                    clients: to.mcp.clients.map((vs) => (vs.name === nr ? Jr.client : vs)),
                    tools: [...bL(to.mcp.tools, (vs) => vs.name?.startsWith(zr)), ...Jr.tools],
                    commands: [...bL(to.mcp.commands, (vs) => $4(vs, nr)), ...Jr.commands],
                    resources:
                      Jr.resources && Jr.resources.length > 0
                        ? {
                            ...to.mcp.resources,
                            [nr]: Jr.resources,
                          }
                        : $F(to.mcp.resources, nr),
                  },
                })),
                Jr.client.type === "connected")
              )
                (He([Jr.client]), reregisterChannelHandlerAfterReconnect(Jr.client), Ut(Lt));
              else {
                let to =
                  Jr.client.type === "failed"
                    ? (Jr.client.error ?? "Connection failed")
                    : `Server status: ${Jr.client.type}`;
                Fn(Lt, to);
              }
            }
          } else if (Lt.request.subtype === "set_mcp_permission_mode_override") {
            let { serverName: xn, mode: nr } = Lt.request,
              Yn = e0a(nr);
            if (!Yn.ok)
              (T(
                `set_mcp_permission_mode_override: rejected mode='${Yn.rejected}' for ${xn} (tighten-only)`,
                {
                  level: "warn",
                },
              ),
                Fn(
                  Lt,
                  `Permission mode override over the control channel is tighten-only ('default', 'auto', or null); rejected '${Yn.rejected}'`,
                ));
            else if (Yn.override === "auto" && !Zv()) {
              let Xn = Pz();
              Fn(
                Lt,
                Xn
                  ? `Cannot pin MCP server '${xn}' to auto: ${HZ(Xn)}`
                  : `Cannot pin MCP server '${xn}' to auto`,
              );
            } else {
              let Xn = Yn.override;
              setAppState((zr) => {
                let to = zr.toolPermissionContext.mcpPermissionModeOverrides,
                  vs =
                    Xn === void 0
                      ? $F(to, xn)
                      : {
                          ...to,
                          [xn]: Xn,
                        };
                return {
                  ...zr,
                  toolPermissionContext: {
                    ...zr.toolPermissionContext,
                    mcpPermissionModeOverrides: vs,
                  },
                };
              });
              let Jr =
                mcpClients.some((zr) => zr.name === xn) ||
                sdkClients.some((zr) => zr.name === xn) ||
                Object.prototype.hasOwnProperty.call(sdkMcpConfigs, xn) ||
                dynamicMcpState.clients.some((zr) => zr.name === xn) ||
                getAppState().mcp.clients.some((zr) => zr.name === xn) ||
                P4(xn) !== null;
              Ut(
                Lt,
                Jr
                  ? void 0
                  : {
                      warning:
                        Xn === void 0
                          ? `MCP server '${xn}' is not known; no override was present to clear.`
                          : `MCP server '${xn}' is not yet known; override stored but will not apply until a server with that exact name connects.`,
                    },
              );
            }
          } else if (Lt.request.subtype === "channel_enable") {
            let xn = getAppState();
            handleChannelEnable(
              Lt.request_id,
              Lt.request.serverName,
              [...xn.mcp.clients, ...sdkClients, ...dynamicMcpState.clients],
              output,
            );
          } else if (Lt.request.subtype === "mcp_authenticate") {
            let { serverName: xn, redirectUri: nr } = Lt.request,
              Yn = getAppState(),
              Xn =
                P4(xn) ??
                mcpClients.find((zr) => zr.name === xn)?.config ??
                Yn.mcp.clients.find((zr) => zr.name === xn)?.config ??
                null,
              Jr = Xn ? r6(xn, Xn) : null;
            if (!Xn || !Jr) Fn(Lt, `Server not found: ${xn}`);
            else if (Jr.kind === "claudeai-proxy") {
              let zr = oDe(Jr.config);
              if (!zr)
                Fn(Lt, "Unable to build claude.ai connector auth URL (missing org or server id)");
              else
                (G("tengu_claudeai_mcp_auth_started", {}),
                  Ut(Lt, {
                    authUrl: zr,
                    requiresUserAction: true,
                    callbackExpected: false,
                  }));
            } else if (Jr.kind === "unsupported-transport")
              Fn(Lt, `Server type "${Jr.transport}" does not support OAuth authentication`);
            else if (Jr.kind === "anthropic-hosted") Fn(Lt, Jr.message);
            else
              try {
                let zr = (Se) => {
                    let qe,
                      ot = new Promise((Tr) => {
                        qe = Tr;
                      }),
                      zt,
                      cn,
                      hr = sJ(xn, Jr.config, (Tr) => qe(Tr), void 0, {
                        skipBrowserOpen: true,
                        redirectUri: Se,
                        onWaitingForCallback: (Tr, Br, fi) => {
                          ((zt = Br), (cn = fi));
                        },
                      });
                    return {
                      oauthPromise: hr,
                      raced: Promise.race([ot, hr.then(() => null)]).then((Tr) => ({
                        authUrl: Tr,
                        callbackPort: zt,
                        state: cn,
                      })),
                    };
                  },
                  to = Jr.config.oauth?.clientId ? void 0 : nr,
                  vs = "localhost",
                  bs = zr(to),
                  Da;
                if (to)
                  try {
                    ((Da = await bs.raced), (vs = "custom"));
                  } catch (Se) {
                    (T(
                      `[mcp_authenticate] AS rejected custom redirectUri for ${xn}; falling back to localhost: ${be(Se)}`,
                    ),
                      (bs = zr()),
                      (Da = await bs.raced));
                  }
                else Da = await bs.raced;
                let Qs = bs.oauthPromise,
                  { authUrl: To, callbackPort: ji, state: us } = Da;
                if (To)
                  Ut(Lt, {
                    authUrl: To,
                    requiresUserAction: true,
                    callbackExpected: true,
                    redirectScheme: vs,
                    state: us,
                    ...(vs === "localhost" && {
                      callbackPort: ji,
                    }),
                  });
                else
                  Ut(Lt, {
                    requiresUserAction: false,
                    callbackExpected: false,
                  });
                (activeOAuthFlows.set(xn, Qs), Udt(xn, Qs));
                let X = Qs.then(async () => {
                  if (mk(xn)) return;
                  if (D4(xn, Xn)) {
                    T(
                      `MCP server ${xn} blocked by managed policy after OAuth \u2014 skipping reconnect`,
                      {
                        level: "warn",
                      },
                    );
                    return;
                  }
                  if (elicitationRegistered.has(xn)) return;
                  let Se = await iJ(xn, Xn),
                    qe = xG(xn);
                  (setAppState((ot) => ({
                    ...ot,
                    mcp: {
                      ...ot.mcp,
                      clients: ot.mcp.clients.map((zt) => (zt.name === xn ? Se.client : zt)),
                      tools: [...bL(ot.mcp.tools, (zt) => zt.name?.startsWith(qe)), ...Se.tools],
                      commands: [...bL(ot.mcp.commands, (zt) => $4(zt, xn)), ...Se.commands],
                      resources:
                        Se.resources && Se.resources.length > 0
                          ? {
                              ...ot.mcp.resources,
                              [xn]: Se.resources,
                            }
                          : $F(ot.mcp.resources, xn),
                    },
                  })),
                    (dynamicMcpState = {
                      ...dynamicMcpState,
                      clients: [
                        ...dynamicMcpState.clients.filter((ot) => ot.name !== xn),
                        Se.client,
                      ],
                      tools: [
                        ...dynamicMcpState.tools.filter((ot) => !ot.name?.startsWith(qe)),
                        ...Se.tools,
                      ],
                    }));
                })
                  .catch((Se) => {
                    T(`MCP OAuth failed for ${xn}: ${Se}`, {
                      level: "error",
                    });
                  })
                  .finally(() => {
                    if (activeOAuthFlows.get(xn) === Qs)
                      (elicitationRegistered.delete(xn), activeOAuthFlows.delete(xn));
                  });
              } catch (zr) {
                Fn(Lt, be(zr));
              }
          } else if (Lt.request.subtype === "mcp_oauth_callback_url") {
            let { serverName: xn, callbackUrl: nr } = Lt.request,
              Yn = Bdt(xn);
            if (Yn) {
              let Xn = false;
              try {
                let Jr = new URL(nr);
                Xn = Jr.searchParams.has("code") || Jr.searchParams.has("error");
              } catch {}
              if (!Xn)
                Fn(
                  Lt,
                  "Invalid callback URL: missing authorization code. Please paste the full redirect URL including the code parameter.",
                );
              else {
                (elicitationRegistered.add(xn), Yn(nr));
                let Jr = activeOAuthFlows.get(xn) ?? Fdt(xn);
                if (Jr)
                  try {
                    (await Jr, Ut(Lt));
                  } catch (zr) {
                    Fn(Lt, zr instanceof Error ? zr.message : "OAuth authentication failed");
                  }
                else Ut(Lt);
              }
            } else Fn(Lt, `No active OAuth flow for server: ${xn}`);
          } else if (Lt.request.subtype === "claude_authenticate") {
            let { loginWithClaudeAi: xn } = Lt.request;
            (js?.service.cleanup(),
              G("tengu_oauth_flow_start", {
                loginWithClaudeAi: xn ?? true,
              }));
            let nr = new I6(),
              Yn,
              Xn = new Promise((zr) => {
                Yn = zr;
              }),
              Jr = nr
                .startOAuthFlow(
                  async (zr, to) => {
                    Yn({
                      manualUrl: zr,
                      automaticUrl: to,
                    });
                  },
                  {
                    loginWithClaudeAi: xn ?? true,
                    skipBrowserOpen: true,
                  },
                )
                .then(async (zr) => {
                  (await P9e(zr),
                    G("tengu_oauth_success", {
                      loginWithClaudeAi: xn ?? true,
                    }));
                })
                .finally(() => {
                  if ((nr.cleanup(), js?.service === nr)) js = null;
                });
            ((js = {
              service: nr,
              flow: Jr,
            }),
              Jr.catch((zr) =>
                T(`claude_authenticate flow ended: ${zr}`, {
                  level: "info",
                }),
              ));
            try {
              let { manualUrl: zr, automaticUrl: to } = await Promise.race([
                Xn,
                Jr.then(() => {
                  throw Error("OAuth flow completed without producing auth URLs");
                }),
              ]);
              Ut(Lt, {
                manualUrl: zr,
                automaticUrl: to,
              });
            } catch (zr) {
              Fn(Lt, be(zr));
            }
          } else if (
            Lt.request.subtype === "claude_oauth_callback" ||
            Lt.request.subtype === "claude_oauth_wait_for_completion"
          ) {
            if (!js) Fn(Lt, "No active claude_authenticate flow");
            else {
              if (Lt.request.subtype === "claude_oauth_callback")
                js.service.handleManualAuthCodeInput({
                  authorizationCode: Lt.request.authorizationCode,
                  state: Lt.request.state,
                });
              let { flow: xn } = js;
              xn.then(
                () => {
                  let nr = X4e();
                  Ut(Lt, {
                    account: {
                      email: nr?.email,
                      organization: nr?.organization,
                      subscriptionType: nr?.subscription,
                      tokenSource: nr?.tokenSource,
                      apiKeySource: nr?.apiKeySource,
                      apiProvider: fr(),
                    },
                  });
                },
                (nr) => Fn(Lt, be(nr)),
              );
            }
          } else if (Lt.request.subtype === "mcp_clear_auth") {
            let { serverName: xn } = Lt.request,
              nr = getAppState(),
              Yn =
                P4(xn) ??
                mcpClients.find((Xn) => Xn.name === xn)?.config ??
                nr.mcp.clients.find((Xn) => Xn.name === xn)?.config ??
                null;
            if (!Yn) Fn(Lt, `Server not found: ${xn}`);
            else if (Yn.type !== "sse" && Yn.type !== "http")
              Fn(Lt, `Cannot clear auth for server type "${Yn.type}"`);
            else if (D4(xn, Yn)) Fn(Lt, `MCP server ${xn} is blocked by enterprise managed policy`);
            else {
              await FSe(xn, Yn);
              let Xn = await iJ(xn, Yn),
                Jr = xG(xn);
              (setAppState((zr) => ({
                ...zr,
                mcp: {
                  ...zr.mcp,
                  clients: zr.mcp.clients.map((to) => (to.name === xn ? Xn.client : to)),
                  tools: [...bL(zr.mcp.tools, (to) => to.name?.startsWith(Jr)), ...Xn.tools],
                  commands: [...bL(zr.mcp.commands, (to) => $4(to, xn)), ...Xn.commands],
                  resources:
                    Xn.resources && Xn.resources.length > 0
                      ? {
                          ...zr.mcp.resources,
                          [xn]: Xn.resources,
                        }
                      : $F(zr.mcp.resources, xn),
                },
              })),
                Ut(Lt, {}));
            }
          } else if (Lt.request.subtype === "apply_flag_settings") {
            let xn = As(),
              nr = HCt() ?? {},
              Yn = Lt.request.settings;
            if ("agent" in Yn) {
              let Qs = PUc({
                requestedAgent: Yn.agent,
                agents: Ue,
                systemPrompt: d.systemPrompt,
                preAgentSystemPrompt: tt,
              });
              if (!Qs.ok) {
                Fn(Lt, Qs.error);
                continue;
              }
              ((d.systemPrompt = Qs.systemPrompt), (tt = Qs.preAgentSystemPrompt));
              let To = Qs.agentDefinition?.agentType;
              setAppState((ji) =>
                ji.agent === To
                  ? ji
                  : {
                      ...ji,
                      agent: To,
                    },
              );
            }
            let Xn = {
              ...nr,
              ...Yn,
            };
            for (let Qs of Object.keys(Xn)) if (Xn[Qs] === null) delete Xn[Qs];
            if ((ybr(Xn), n$.notifyChange("flagSettings"), "viewMode" in Yn)) RNt();
            let Jr =
                "model" in Yn &&
                Yn.model != null &&
                String(Yn.model).trim().toLowerCase() !== "default" &&
                !KS(String(Yn.model)) &&
                !(nU(String(Yn.model)) ?? xa(String(Yn.model))),
              zr =
                "model" in Yn && Yn.model != null
                  ? String(Yn.model).trim().toLowerCase() === "default"
                    ? Ey()
                    : String(Yn.model)
                  : null;
            if ("model" in Yn && !Jr) py(zr);
            let to = "model" in Yn && !Jr && Yn.model != null && zr != null ? zr : void 0,
              vs = As(),
              bs = to !== void 0 && vs === xn && zo(to) !== zo(xn),
              Da = resolveDefaultPickRepoint(Yn, ee, vs);
            if (Da !== void 0) ee = Da;
            if (vs !== xn || bs) {
              let Qs = bs ? zo(to) : vs;
              ((ee = bs ? to : vs),
                setAppState((ji) => ({
                  ...ji,
                  mainLoopModelForSession: Qs,
                })));
              let To = Yn.model && !Jr ? String(Yn.model) : "model" in Yn && !Jr ? "default" : vs;
              (structuredIO.sessionState.notifyMetadataChanged({
                model: vs,
              }),
                de(To, vs));
            }
            if ("model" in Yn)
              if (Yn.model == null) pe();
              else if (Jr)
                me(String(Yn.model), ee !== void 0 && (KS(ee) || xa(ee)) ? zo(ee) : void 0);
              else pe();
            if ("effortLevel" in Yn) {
              let Qs = Yn.effortLevel == null ? void 0 : TU(Yn.effortLevel);
              if (Yn.effortLevel == null || Qs !== void 0)
                (setAppState((To) =>
                  To.effortValue === Qs
                    ? To
                    : {
                        ...To,
                        effortValue: Qs,
                      },
                ),
                  Dj());
              structuredIO.sessionState.notifyMetadataChanged({
                effort_level: Yn.effortLevel == null ? null : String(Yn.effortLevel),
              });
            }
            if ("ultracode" in Yn) {
              let Qs = Yn.ultracode === true;
              if (
                (setAppState((To) => {
                  if (To.ultracode === Qs && (!Qs || To.effortValue === "xhigh")) return To;
                  return {
                    ...To,
                    ultracode: Qs,
                    effortValue: Qs ? "xhigh" : To.effortValue,
                  };
                }),
                Qs)
              )
                Dj();
            }
            Ut(Lt);
          } else if (Lt.request.subtype === "get_settings") {
            let xn = getAppState(),
              nr = As(),
              Yn = Kw(nr) ? x7(nr, xn.effortValue) : void 0,
              Xn = LLr(),
              Jr = l9()
                .errors.filter((zr) => zr.severity !== "warning")
                .map((zr) => ({
                  file: zr.file,
                  path: zr.path,
                  message: zr.message,
                }));
            Ut(Lt, {
              ...Xn,
              applied: {
                model: nr,
                effort: typeof Yn === "string" ? Yn : null,
                ultracode: Xte(nr, xn.effortValue, xn.ultracode),
              },
              errors: Jr.length > 0 ? Jr : void 0,
            });
          } else if (Lt.request.subtype === "stop_task") {
            let { task_id: xn } = Lt.request;
            try {
              (await mbt(xn, {
                taskRegistry: $L(getAppState, setAppState),
                setAppState: setAppState,
                source: "user",
              }),
                Ut(Lt, {}));
            } catch (nr) {
              if (nr instanceof W6e && (nr.code === "not_found" || nr.code === "not_running"))
                Ut(Lt, {});
              else Fn(Lt, be(nr));
            }
          } else if (Lt.request.subtype === "background_tasks")
            try {
              let xn = $L(getAppState, setAppState),
                nr = Lt.request.tool_use_id;
              if (nr) {
                let Yn = xJn(nr, xn);
                Ut(Lt, {
                  backgrounded: Yn,
                });
              } else (j$e(xn), Ut(Lt, {}));
            } catch (xn) {
              Fn(Lt, be(xn));
            }
          else if (Lt.request.subtype === "generate_session_title") {
            let { description: xn, persist: nr } = Lt.request;
            if (nr) cr = true;
            let Yn = (abortController && !abortController.signal.aborted ? abortController : Sl())
              .signal;
            (async () => {
              try {
                let Xn = await vse(xn, Yn);
                if (Xn && nr) {
                  try {
                    DQ(Rt(), Xn);
                  } catch (Jr) {
                    if (Vo(Jr)) T(`saveAiGeneratedTitle failed: ${Jr}`);
                    else ke(Jr);
                  }
                  vFo(Xn);
                }
                Ut(Lt, {
                  title: Xn,
                });
              } catch (Xn) {
                Fn(Lt, be(Xn));
              }
            })();
          } else if (Lt.request.subtype === "rename_session")
            try {
              let xn = Lt.request.title.trim();
              if (!xn) Fn(Lt, "title must be non-empty");
              else {
                if (ML()) await Aq(Rt(), xn, void 0, "remote");
                else jYe(xn);
                ((cr = true), Ut(Lt));
              }
            } catch (xn) {
              Fn(Lt, be(xn));
            }
          else if (Lt.request.subtype === "submit_feedback") {
            let { description: xn, surface: nr } = Lt.request;
            (async () => {
              try {
                let Yn = Mer();
                if (Yn) {
                  Ut(Lt, {
                    feedback_id: null,
                    unavailable_reason: Yn,
                  });
                  return;
                }
                let Xn = await KSt({
                  messages: mutableMessages,
                  description: xn,
                  surface: nr ?? "sdk",
                });
                if (Xn.success) {
                  let Jr;
                  Ut(Lt, {
                    feedback_id: Xn.feedbackId,
                    ccshare_url: Jr,
                  });
                } else
                  Ut(Lt, {
                    feedback_id: null,
                    is_zdr_org: Xn.isZdrOrg,
                    failure_reason: Xn.failureReason,
                    status_code: Xn.statusCode,
                  });
              } catch (Yn) {
                Fn(Lt, be(Yn));
              }
            })();
          } else if (Lt.request.subtype === "side_question") {
            if (HT()) {
              Fn(Lt, "Session is shutting down");
              continue;
            }
            let { question: xn } = Lt.request;
            (async () => {
              try {
                let nr = Tde(),
                  Yn = nr
                    ? {
                        ...nr,
                        toolUseContext: {
                          ...nr.toolUseContext,
                          abortController: Sl(),
                        },
                      }
                    : await hUc({
                        tools: Ke(getAppState()),
                        commands: [...Ze, ...getAppState().mcp.commands],
                        mcpClients: [
                          ...getAppState().mcp.clients,
                          ...sdkClients,
                          ...dynamicMcpState.clients,
                        ],
                        messages: mutableMessages,
                        readFileState: readFileState,
                        getAppState: getAppState,
                        setAppState: setAppState,
                        customSystemPrompt: ct(),
                        appendSystemPrompt: d.appendSystemPrompt,
                        excludeDynamicSections: d.excludeDynamicSections,
                        thinkingConfig: ae,
                        agents: Ue,
                      }),
                  Xn = await qYt({
                    question: xn,
                    cacheSafeParams: Yn,
                    threadHistory: false,
                  });
                Ut(Lt, {
                  response: Xn.response,
                  synthetic: Xn.synthetic,
                });
              } catch (nr) {
                Fn(Lt, be(nr));
              }
            })();
          } else if (Lt.request.subtype === "ultrareview_launch") {
            let { args: xn = "", confirm: nr = false } = Lt.request;
            (async () => {
              try {
                let Yn = await cJt(xn, {
                  confirm: nr,
                  context: {
                    abortController: Sl(),
                    taskRegistry: $L(getAppState, setAppState),
                  },
                });
                if (Yn.status === "launched") {
                  let Xn = [
                    Rn({
                      content: `<command-name>/ultrareview${xn ? " " + xn : ""}</command-name>`,
                      isMeta: true,
                    }),
                    Rn({
                      content: `<${KC}>${Yn.message}</${KC}>`,
                      isMeta: true,
                    }),
                  ];
                  mutableMessages.push(...Xn);
                  for (let Jr of Xn)
                    output.enqueue({
                      type: "user",
                      message: Jr.message,
                      session_id: Rt(),
                      parent_tool_use_id: null,
                      uuid: Jr.uuid,
                      timestamp: Jr.timestamp,
                      isReplay: true,
                    });
                }
                Ut(Lt, Yn);
              } catch (Yn) {
                Fn(Lt, be(Yn));
              }
            })();
          } else if (Lt.request.subtype === "message_rated") {
            if (Us("allow_product_feedback")) {
              let {
                messageUuid: xn,
                sentiment: nr,
                surface: Yn = "tool_use",
                cleared: Xn = false,
              } = Lt.request;
              G("tengu_message_rated", {
                message_uuid: Hr(xn),
                sentiment: $e(nr),
                surface: $e(Yn),
                cleared: Xn,
              });
            }
            Ut(Lt, {});
          } else if (Lt.request.subtype === "remote_control") {
            if (Lt.request.enabled) {
              if (bridgeHandle && gt)
                (structuredIO.setOnControlRequestSent(void 0),
                  structuredIO.setOnControlRequestResolved(void 0),
                  await bridgeHandle.teardown(),
                  (bridgeHandle = null),
                  (gt = false));
              if (bridgeHandle)
                Ut(Lt, {
                  session_url: dS(bridgeHandle.bridgeSessionId, bridgeHandle.sessionIngressUrl),
                  connect_url: vVt(bridgeHandle.environmentId, bridgeHandle.sessionIngressUrl),
                  environment_id: bridgeHandle.environmentId,
                });
              else {
                let xn;
                try {
                  let { initReplBridge: nr } = await Promise.resolve().then(() => (j8o(), F8o)),
                    Yn = await nr({
                      tags: [rtc],
                      getTools: () => Ke(getAppState()),
                      getToolPermissionContext: () => getAppState().toolPermissionContext,
                      async onInboundMessage(Xn) {
                        let Jr = st,
                          zr;
                        st = new Promise((to) => {
                          zr = to;
                        });
                        try {
                          let to = Iur(Xn);
                          if (!to) return;
                          let { uuid: vs } = to,
                            bs = void 0,
                            Da = ien(bs, to.clientPlatform);
                          await Jr;
                          let Qs = TTt(Xn),
                            To = await Pur(Xn, to.content);
                          (j_({
                            value: To,
                            mode: "prompt",
                            agentId: ls(),
                            uuid: vs,
                            skipSlashCommands: true,
                            ...(Qs.length > 0 && {
                              fileAttachments: Qs,
                            }),
                            ...(bs?.kind === "peer"
                              ? {
                                  origin: bs,
                                  isMeta: true,
                                  ...(cen() && {
                                    priority: "later",
                                  }),
                                }
                              : {
                                  bridgeOrigin: true,
                                  clientPlatform: to.clientPlatform,
                                  ...(Da && {
                                    origin: Da,
                                  }),
                                  ...(Da?.kind === "task-notification" &&
                                    oen(void 0, to.clientPlatform) === "later" && {
                                      priority: "later",
                                    }),
                                  ...(sen(to.clientPlatform, to.inboundOrigin) && {
                                    priority: aen(void 0, to.content, len()),
                                    verifiedSlackHumanTurn: true,
                                  }),
                                }),
                          }),
                            eo());
                        } catch (to) {
                          T(`[bridge:sdk] onInboundMessage failed: ${to}`, {
                            level: "error",
                          });
                        } finally {
                          Jr.then(zr, zr);
                        }
                      },
                      onPermissionResponse(Xn) {
                        return (structuredIO.injectControlResponse(Xn), true);
                      },
                      onInterrupt() {
                        abortController?.abort();
                      },
                      onSetModel(Xn) {
                        let Jr = Xn == null || Xn.trim().toLowerCase() === "default",
                          zr = Jr ? Ey() : Xn;
                        if (!Jr && !KS(zr) && !(nU(zr) ?? xa(zr))) {
                          let to = ee !== void 0 && (KS(ee) || xa(ee)) ? zo(ee) : void 0;
                          return (
                            me(zr, to),
                            {
                              ok: false,
                              error: moe(zr, to ?? As()),
                            }
                          );
                        }
                        ((ee = zr),
                          py(zr),
                          setAppState((to) => ({
                            ...to,
                            mainLoopModelForSession: zr ?? null,
                          })),
                          pe());
                      },
                      onSetMaxThinkingTokens(Xn, Jr) {
                        if (Jr !== void 0) ce = Jr ?? void 0;
                        ae = fFc(Xn, ce);
                      },
                      onStateChange(Xn, Jr) {
                        if (Xn === "failed") {
                          if (((xn = Jr), bridgeHandle)) ((gt = true), ewe(false));
                        } else if (Xn === "connected" || Xn === "ready") {
                          if (((gt = false), bridgeHandle)) ewe(true);
                        }
                        (T(`[bridge:sdk] State change: ${Xn}${Jr ? ` \u2014 ${Jr}` : ""}`),
                          output.enqueue({
                            type: "system",
                            subtype: "bridge_state",
                            state: Xn,
                            detail: Jr,
                            uuid: px.randomUUID(),
                            session_id: Rt(),
                          }));
                      },
                      initialMessages: mutableMessages.length > 0 ? mutableMessages : void 0,
                      initialName: Lt.request.name,
                    });
                  if (!Yn) Fn(Lt, xn ?? "Remote Control initialization failed");
                  else
                    ((bridgeHandle = Yn),
                      (gt = false),
                      ewe(true),
                      (xt = mutableMessages.length),
                      structuredIO.setOnControlRequestSent((Xn) => {
                        Yn.sendControlRequest(Xn);
                      }),
                      structuredIO.setOnControlRequestResolved((Xn) => {
                        Yn.sendControlCancelRequest(Xn);
                      }),
                      Ut(Lt, {
                        session_url: dS(Yn.bridgeSessionId, Yn.sessionIngressUrl),
                        connect_url: vVt(Yn.environmentId, Yn.sessionIngressUrl),
                        environment_id: Yn.environmentId,
                      }));
                } catch (nr) {
                  Fn(Lt, be(nr));
                }
              }
            } else {
              if (bridgeHandle)
                (structuredIO.setOnControlRequestSent(void 0),
                  structuredIO.setOnControlRequestResolved(void 0),
                  await bridgeHandle.teardown({
                    reason: "remote_control_disabled",
                  }),
                  (bridgeHandle = null),
                  (gt = false),
                  ewe(false));
              Ut(Lt);
            }
          } else Fn(Lt, `Unsupported control request subtype: ${Lt.request.subtype}`);
          continue;
        } else if (Lt.type === "control_response") {
          if (d.replayUserMessages) output.enqueue(Lt);
          continue;
        } else if (Lt.type === "keep_alive") continue;
        else if (Lt.type === "update_environment_variables") continue;
        else if (Lt.type === "assistant" || Lt.type === "system") {
          let xn = csr([Lt]);
          if ((mutableMessages.push(...xn), Lt.type === "assistant" && d.replayUserMessages))
            output.enqueue(Lt);
          continue;
        }
        if (Lt.type === "bash_command") {
          let xn = Rt();
          if (Lt.uuid) {
            if (fnn.has(Lt.uuid)) {
              T(`Skipping duplicate bash_command message: ${Lt.uuid}`);
              continue;
            }
            uFc(Lt.uuid);
          }
          if (typeof Lt.command !== "string") {
            if (
              (output.enqueue({
                type: "user",
                message: {
                  role: "user",
                  content: `<${wae}>Command failed: missing command</${wae}>`,
                },
                session_id: xn,
                parent_tool_use_id: null,
                uuid: px.randomUUID(),
                timestamp: new Date().toISOString(),
                isReplay: true,
              }),
              Lt.uuid)
            )
              structuredIO.onCommandLifecycle?.(Lt.uuid, "completed");
            continue;
          }
          output.enqueue({
            type: "user",
            message: {
              role: "user",
              content: `<${J0t}>${ec(Lt.command)}</${J0t}>`,
            },
            session_id: xn,
            parent_tool_use_id: null,
            uuid: px.randomUUID(),
            timestamp: new Date().toISOString(),
            isReplay: true,
          });
          let nr = (async () => {
            try {
              let { runHeadlessBashCommand: Yn } = await Promise.resolve().then(() => (sFc(), oFc)),
                Xn = await Yn({
                  command: Lt.command,
                  cwd: Lt.cwd,
                  abortSignal: D.signal,
                });
              output.enqueue({
                type: "user",
                message: {
                  role: "user",
                  content: Xn.outputText,
                },
                session_id: xn,
                parent_tool_use_id: null,
                uuid: Xn.outputUuid,
                timestamp: new Date().toISOString(),
                isReplay: true,
              });
            } catch (Yn) {
              (ke(Yn),
                output.enqueue({
                  type: "user",
                  message: {
                    role: "user",
                    content: `<${wae}>Command failed: ${ec(be(Yn))}</${wae}>`,
                  },
                  session_id: xn,
                  parent_tool_use_id: null,
                  uuid: px.randomUUID(),
                  timestamp: new Date().toISOString(),
                  isReplay: true,
                }));
            }
            if (Lt.uuid) structuredIO.onCommandLifecycle?.(Lt.uuid, "completed");
          })();
          (L.add(nr), nr.finally(() => L.delete(nr)));
          continue;
        }
        if (Lt.type !== "user") continue;
        if (((Gn = true), Lt.uuid)) {
          let xn = Rt(),
            nr = await y5o(xn, Lt.uuid),
            Yn = fnn.has(Lt.uuid);
          if (nr || Yn) {
            if (
              (In("info", "cli_user_message_dedup_skipped", {
                exists_in_session: nr,
                runtime_dup: Yn,
              }),
              T(`Skipping duplicate user message: ${Lt.uuid}`),
              d.replayUserMessages)
            ) {
              T(`Sending acknowledgment for duplicate user message: ${Lt.uuid}`);
              let Xn = TTt(Lt);
              output.enqueue({
                type: "user",
                message: Lt.message,
                session_id: xn,
                parent_tool_use_id: null,
                uuid: Lt.uuid,
                timestamp: Lt.timestamp,
                isReplay: true,
                ...(Xn.length > 0 && {
                  file_attachments: Xn,
                }),
              });
            }
            if (nr) structuredIO.onCommandLifecycle?.(Lt.uuid, "completed");
            if (TSe()) eo();
            else if (!g) structuredIO.sessionState.notifyStateChanged("idle");
            continue;
          }
          uFc(Lt.uuid);
        }
        Kn("new_user_message");
        let Jn = !(structuredIO instanceof kvt)
            ? Lt.message.content
            : typeof Lt.message.content === "string"
              ? Cur(Lt.message.content)
              : Array.isArray(Lt.message.content)
                ? I8o(Lt.message.content)
                : Lt.message.content,
          Qn = Lt.client_platform,
          gr = void 0,
          fo = gr ? (gr.kind === "peer" ? gr.from : void 0) : agc(Jn),
          cs = ien(gr, Qn),
          Gs = gr ? sgc(Lt.inbound_origin) : sen(Qn, Lt.inbound_origin);
        if (!cr && Lt.shouldQuery !== false && !fo && YW(cs)) {
          let xn = lQ(Jn);
          if (xn && !_fe(xn)) {
            cr = true;
            let nr = Rt();
            if (!Gg(nr)) {
              let Yn = (abortController && !abortController.signal.aborted ? abortController : Sl())
                .signal;
              vse(xn, Yn)
                .then((Xn) => {
                  if (!Xn) {
                    cr = false;
                    return;
                  }
                  if (Gg(nr)) return;
                  (DQ(nr, Xn), vFo(Xn));
                })
                .catch((Xn) => {
                  ((cr = false), ke(Xn));
                });
            }
          }
        }
        let la = TTt(Lt),
          Fi = fo
            ? igc(Lt.priority, cen())
            : cs?.kind === "task-notification"
              ? oen(Lt.priority, Qn, Lt.inbound_origin)
              : Gs
                ? aen(Lt.priority, Jn, len())
                : Lt.priority;
        (j_({
          mode: "prompt",
          agentId: ls(),
          value: await Pur(Lt, Jn),
          uuid: Lt.uuid,
          priority: Fi,
          shouldQuery: Lt.shouldQuery,
          ...(la.length > 0 && {
            fileAttachments: la,
          }),
          ...(fo
            ? {
                origin:
                  gr?.kind === "peer"
                    ? gr
                    : {
                        kind: "peer",
                        from: fo,
                      },
                isMeta: true,
                skipSlashCommands: true,
              }
            : {
                clientPlatform: Qn,
                ...(cs && {
                  origin: cs,
                }),
                ...(Gs && {
                  verifiedSlackHumanTurn: true,
                }),
              }),
        }),
          In("info", "cli_user_message_enqueued", {
            has_uuid: Lt.uuid !== void 0,
            should_query: Lt.shouldQuery,
            has_priority: Lt.priority !== void 0,
            queue_depth: Bao(),
          }),
          eo());
      }
      if ((In("info", "cli_message_loop_ended"), (A = true), D.abort(), Nt?.stop(), !g)) {
        if (suggestionState.inflightPromise) {
          let Lt = setTimeout((En) => En?.abort(), 30000, suggestionState.abortController);
          try {
            await suggestionState.inflightPromise;
          } finally {
            clearTimeout(Lt);
          }
        }
        if (
          (suggestionState.abortController?.abort(),
          (suggestionState.abortController = null),
          L.size > 0)
        )
          await Promise.allSettled(L);
        (await KMo(),
          _o(),
          N?.(),
          cLe.delete(B),
          await Mfo([...getAppState().mcp.clients, ...sdkClients, ...dynamicMcpState.clients]),
          x5e(null));
        for (let Lt of VX()) output.enqueue(Lt);
        output.done();
      }
    })(),
    output
  );
}
async function waitForPendingMcpBeforeFirstCommand(e, t = 2000, n = false) {
  let r = process.env.CLAUDE_CODE_ENTRYPOINT === "remote_baku",
    o = o$() && CX(As()),
    s = (p) =>
      p.type === "pending" && (!r || mGt(p.config)) && (!o || p.config.alwaysLoad === true),
    i = e().mcp,
    a = On(i.clients, (p) => p.type === "pending"),
    l = On(i.clients, s),
    c = i.tools.length,
    u = 0;
  if (l > 0) {
    let p = Date.now(),
      f = p + t;
    while (Date.now() < f) {
      if (!e().mcp.clients.some(s)) break;
      await Nn(50);
    }
    u = Date.now() - p;
  }
  if (n) return;
  let d = e().mcp;
  G("tengu_headless_mcp_prewait", {
    localOnly: r,
    willDeferMcp: o,
    pendingBefore: a,
    pendingWaitedBefore: l,
    toolsBefore: c,
    waitedMs: u,
    pendingAfter: On(d.clients, (p) => p.type === "pending"),
    pendingWaitedAfter: On(d.clients, s),
    toolsAfter: d.tools.length,
    mcpNonBlocking: Vve(),
  });
}
function createCanUseToolWithPermissionPrompt(permissionPromptTool) {
  let t = async (n, r, o, s, i, a) => {
    let l = a ?? (await RL(n, r, o, s, i));
    if (l.behavior === "allow" || l.behavior === "deny") return l;
    let c = l.updatedInput ?? r,
      { signal: u, cleanup: d } = xL(o.abortController.signal);
    if (u.aborted)
      return (
        d(),
        {
          behavior: "deny",
          message: "Permission prompt was aborted.",
          decisionReason: {
            type: "permissionPromptTool",
            permissionPromptToolName: n.name,
            toolResult: void 0,
          },
        }
      );
    let p = new Promise((y) => {
        u.addEventListener("abort", () => y("aborted"), {
          once: true,
        });
      }),
      f = permissionPromptTool.call(
        {
          tool_name: n.name,
          input: c,
          tool_use_id: i,
        },
        o,
        t,
        s,
      ),
      m = await Promise.race([f, p]);
    if ((d(), m === "aborted" || u.aborted))
      return {
        behavior: "deny",
        message: "Permission prompt was aborted.",
        decisionReason: {
          type: "permissionPromptTool",
          permissionPromptToolName: n.name,
          toolResult: void 0,
        },
      };
    let g = m,
      h = permissionPromptTool.mapToolResultToToolResultBlockParam(g.data, "1");
    if (
      !h.content ||
      !Array.isArray(h.content) ||
      !h.content[0] ||
      h.content[0].type !== "text" ||
      typeof h.content[0].text !== "string"
    )
      throw Error(
        'Permission prompt tool returned an invalid result. Expected a single text block param with type="text" and a string text value.',
      );
    return Ivt(unn().parse(Ia(h.content[0].text)), permissionPromptTool, c, o);
  };
  return t;
}
function getCanUseToolFn(permissionPromptToolName, structuredIO, getMcpTools, onPermissionPrompt) {
  if (permissionPromptToolName === "stdio")
    return structuredIO.createCanUseTool(onPermissionPrompt);
  if (!permissionPromptToolName) return async (s, i, a, l, c, u) => u ?? (await RL(s, i, a, l, c));
  let o = null;
  return async (s, i, a, l, c, u) => {
    if (!o) {
      let d = getMcpTools(),
        p = d.find((f) => Ql(f, permissionPromptToolName));
      if (!p) {
        let f = `Error: MCP tool ${permissionPromptToolName} (passed via --permission-prompt-tool) not found. Available MCP tools: ${d.map((m) => m.name).join(", ") || "none"}`;
        throw (
          process.stderr.write(`${f}
`),
          Bc(1),
          Error(f)
        );
      }
      if (!p.inputJSONSchema) {
        let f = `Error: tool ${permissionPromptToolName} (passed via --permission-prompt-tool) must be an MCP tool`;
        throw (
          process.stderr.write(`${f}
`),
          Bc(1),
          Error(f)
        );
      }
      o = createCanUseToolWithPermissionPrompt(p);
    }
    return o(s, i, a, l, c, u);
  };
}
function jLm(e) {
  return Array.isArray(e) && e.length === 1 && e[0] === "";
}
async function GLm(e, t, n, r, o, s, i, a, l, c, u, d, p) {
  let f;
  if (n) {
    let g = a.getPendingPermissionRequests(),
      h = a.getPendingUserDialogRequests();
    return (
      G("tengu_reinit_pending_redelivery", {
        n_pending_permissions: yB(g.length),
        n_pending_dialogs: yB(h.length),
      }),
      r.enqueue({
        type: "control_response",
        response: {
          subtype: "success",
          request_id: t,
          response: await dFc(o, u, s, i, d, c.userSpecifiedModel),
          pending_permission_requests: g,
          pending_user_dialog_requests: h,
        },
      }),
      {}
    );
  }
  if (e.systemPrompt !== void 0) c.systemPrompt = jLm(e.systemPrompt) ? "" : e.systemPrompt;
  if (e.supportedDialogKinds !== void 0) {
    let g = lTe(e.supportedDialogKinds);
    (osn(g, isRestartedWorkerEpoch(Oe.CLAUDE_CODE_WORKER_EPOCH) ? "attach_time" : "create_time"),
      a.sessionState.notifyInternalMetadataChanged({
        declared_dialog_kinds: g,
      }));
  }
  if (e.appendSystemPrompt !== void 0) c.appendSystemPrompt = e.appendSystemPrompt;
  if (e.planModeInstructions !== void 0) c.planModeInstructions = e.planModeInstructions;
  if (e.appendSubagentSystemPrompt !== void 0)
    c.appendSubagentSystemPrompt = e.appendSubagentSystemPrompt;
  if (e.toolAliases !== void 0)
    ((c.toolAliases = e.toolAliases),
      p((g) => ({
        ...g,
        toolPermissionContext: {
          ...g.toolPermissionContext,
          toolAliases: e.toolAliases,
        },
      })));
  if (e.excludeDynamicSections !== void 0) c.excludeDynamicSections = e.excludeDynamicSections;
  if (e.promptSuggestions !== void 0) c.promptSuggestions = e.promptSuggestions;
  if (e.forwardSubagentText !== void 0) c.forwardSubagentText = e.forwardSubagentText;
  if (e.skills !== void 0) tSr(e.skills);
  if (e.agents) {
    let g = WYt(e.agents, "flagSettings");
    u.push(...g);
  }
  if (c.agent) {
    let g = TO() === c.agent,
      h = u.find((y) => y.agentType === c.agent);
    if (h && !g) {
      if ((kK(h.agentType), CNe(h), !c.systemPrompt && !Sh(h))) {
        let y = h.getSystemPrompt();
        if (y) c.systemPrompt = y;
      }
      if (!c.userSpecifiedModel && h.model && h.model !== "inherit") {
        let y = zo(h.model);
        if (KS(y) || xa(y)) py(y);
        else f = h.model;
      }
      if (h.initialPrompt) a.prependUserMessage(h.initialPrompt);
    } else if (h?.initialPrompt) a.prependUserMessage(h.initialPrompt);
  }
  if (e.hooks) {
    let g = {};
    for (let [h, y] of Object.entries(e.hooks))
      g[h] = y.map((b) => {
        let _ = b.hookCallbackIds.map((S) => a.createHookCallback(S, b.timeout));
        return {
          matcher: b.matcher,
          hooks: _,
        };
      });
    Dge(g);
  }
  if (e.jsonSchema) Jbr(e.jsonSchema);
  r.enqueue({
    type: "control_response",
    response: {
      subtype: "success",
      request_id: t,
      response: await dFc(o, u, s, i, d, c.userSpecifiedModel),
    },
  });
  let m = d().mcp;
  if (
    (G("tengu_sdk_init_handshake", {
      uptime_ms: Math.round(process.uptime() * 1000),
      mcp_client_count: m.clients.length,
      mcp_pending_count: On(m.clients, (g) => g.type === "pending"),
      mcpNonBlocking: Vve(),
      session_mirror: !!c.sessionMirror,
    }),
    l)
  ) {
    let h = LD.getInstance().getStatus();
    if (h)
      r.enqueue({
        type: "auth_status",
        isAuthenticating: h.isAuthenticating,
        output: h.output,
        error: h.error,
        uuid: px.randomUUID(),
        session_id: Rt(),
      });
  }
  return {
    restrictedAgentModel: f,
  };
}
async function dFc(e, t, n, r, o, s) {
  let a = jo()?.outputStyle || uP,
    l = await uEt($t()),
    c = X4e(),
    u = {
      commands: e
        .filter((d) => d.userInvocable !== false)
        .map((d) => ({
          name: xu(d),
          description: yse(d),
          argumentHint: d.argumentHint || "",
          aliases: d.aliases?.length ? d.aliases : void 0,
        })),
      agents: t.map((d) => ({
        name: d.agentType,
        description: d.whenToUse,
        model: d.model === "inherit" ? void 0 : d.model,
      })),
      output_style: a,
      available_output_styles: Object.keys(l),
      models: n,
      ...(r.length > 0 && {
        unavailable_models: r,
      }),
      account: {
        email: c?.email,
        organization: c?.organization,
        subscriptionType: c?.subscription,
        tokenSource: c?.tokenSource,
        apiKeySource: c?.apiKeySource,
        apiProvider: fr(),
      },
      pid: process.pid,
      feedback_survey_config: kUc(),
    };
  if (sc() && Fx()) {
    let d = o();
    u.fast_mode_state = QB(s ?? null, d.fastMode);
  }
  return u;
}
async function handleRewindFiles(userMessageId, appState, setAppState) {
  if (!K_())
    return {
      canRewind: false,
      error: "File rewinding is not enabled.",
    };
  if (!KVt(appState.fileHistory, userMessageId))
    return {
      canRewind: false,
      error: "No file checkpoint found for this message.",
    };
  if (setAppState) {
    let r = await yht(appState.fileHistory, userMessageId);
    return {
      canRewind: true,
      filesChanged: r?.filesChanged,
      insertions: r?.insertions,
      deletions: r?.deletions,
    };
  }
  try {
    await zVt(() => appState.fileHistory, userMessageId);
  } catch (r) {
    return {
      canRewind: false,
      error: `Failed to rewind: ${be(r)}`,
    };
  }
  return {
    canRewind: true,
  };
}
function handleSetPermissionMode(request, requestId, toolPermissionContext, output) {
  if (request.mode === "bypassPermissions") {
    if (wU())
      return (
        output.enqueue({
          type: "control_response",
          response: {
            subtype: "error",
            request_id: requestId,
            error:
              "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration",
          },
        }),
        toolPermissionContext
      );
    if (!toolPermissionContext.isBypassPermissionsModeAvailable)
      return (
        output.enqueue({
          type: "control_response",
          response: {
            subtype: "error",
            request_id: requestId,
            error:
              "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions",
          },
        }),
        toolPermissionContext
      );
  }
  if (request.mode === "auto" && !Zv()) {
    let o = Pz();
    return (
      output.enqueue({
        type: "control_response",
        response: {
          subtype: "error",
          request_id: requestId,
          error: o
            ? `Cannot set permission mode to auto: ${HZ(o)}`
            : "Cannot set permission mode to auto",
        },
      }),
      toolPermissionContext
    );
  }
  return (
    output.enqueue({
      type: "control_response",
      response: {
        subtype: "success",
        request_id: requestId,
        response: {
          mode: request.mode,
        },
      },
    }),
    {
      ...AZ(toolPermissionContext.mode, request.mode, toolPermissionContext),
      mode: request.mode,
    }
  );
}
function handleChannelEnable(requestId, serverName, connectionPool, output) {
  let o = (f) =>
      output.enqueue({
        type: "control_response",
        response: {
          subtype: "error",
          request_id: requestId,
          error: f,
        },
      }),
    connection = connectionPool.find((f) => f.name === serverName && f.type === "connected");
  if (!connection || connection.type !== "connected")
    return o(`server ${serverName} is not connected`);
  let i = connection.config.pluginSource,
    parsed = i ? Qo(i) : void 0;
  if (!parsed?.marketplace)
    return o(
      `server ${serverName} is not plugin-sourced; channel_enable requires a marketplace plugin`,
    );
  let l = {
      kind: "plugin",
      name: parsed.name,
      marketplace: parsed.marketplace,
    },
    c = MA(),
    u = c.some((f) => f.kind === "plugin" && f.name === l.name && f.marketplace === l.marketplace);
  if (!u) Mge([...c, l]);
  let gate = V_t(serverName, connection.capabilities, i);
  if (gate.action === "skip") {
    if (!u) Mge(c);
    return o(gate.reason);
  }
  let p = `${l.name}@${l.marketplace}`;
  (sn(serverName, "Channel notifications registered"),
    G("tengu_mcp_channel_enable", {
      plugin: p,
    }),
    connection.client.setNotificationHandler(G_t(), async (f) => {
      let { content: m, meta: g } = f.params;
      (sn(serverName, `notifications/claude/channel: ${m.slice(0, 80)}`),
        G("tengu_mcp_channel_message", {
          content_length: m.length,
          meta_key_count: Object.keys(g ?? {}).length,
          entry_kind: We("plugin"),
          is_dev: false,
          plugin: p,
        }),
        j_({
          mode: "prompt",
          agentId: ls(),
          value: W_t(serverName, m, g),
          priority: "next",
          isMeta: true,
          origin: {
            kind: "channel",
            server: serverName,
          },
          skipSlashCommands: true,
        }));
    }),
    output.enqueue({
      type: "control_response",
      response: {
        subtype: "success",
        request_id: requestId,
        response: void 0,
      },
    }));
}
function reregisterChannelHandlerAfterReconnect(connection) {
  if (connection.type !== "connected") return;
  if (
    V_t(connection.name, connection.capabilities, connection.config.pluginSource).action !==
    "register"
  )
    return;
  let entry = p$e(connection.name, MA()),
    r = entry?.kind === "plugin" ? `${entry.name}@${entry.marketplace}` : void 0;
  (sn(connection.name, "Channel notifications re-registered after reconnect"),
    connection.client.setNotificationHandler(G_t(), async (o) => {
      let { content: s, meta: i } = o.params;
      (sn(connection.name, `notifications/claude/channel: ${s.slice(0, 80)}`),
        G("tengu_mcp_channel_message", {
          content_length: s.length,
          meta_key_count: Object.keys(i ?? {}).length,
          entry_kind: Oo(entry?.kind),
          is_dev: entry?.dev ?? false,
          plugin: r,
        }),
        j_({
          mode: "prompt",
          agentId: ls(),
          value: W_t(connection.name, s, i),
          priority: "next",
          isMeta: true,
          origin: {
            kind: "channel",
            server: connection.name,
          },
          skipSlashCommands: true,
        }));
    }));
}
function reportTurnFailed(e, t) {
  let n = {
    status_category: "failed",
    status_detail: t || "Run failed",
    needs_action: "",
  };
  e.notifyMetadataChanged({
    post_turn_summary: n,
  });
}
function pnn(e, t) {
  if (
    (process.stderr.write(
      e +
        `
`,
    ),
    T(e, {
      level: "error",
    }),
    t === "stream-json")
  ) {
    let n = {
      type: "result",
      subtype: "error_during_execution",
      duration_ms: 0,
      duration_api_ms: 0,
      is_error: true,
      num_turns: 0,
      stop_reason: null,
      session_id: Rt(),
      total_cost_usd: 0,
      usage: xb,
      modelUsage: {},
      permission_denials: [],
      uuid: px.randomUUID(),
      errors: [e],
    };
    process.stdout.write(
      De(n) +
        `
`,
    );
  }
}
function pFc(e, t) {
  return false;
}
async function loadInitialMessages(setAppState, options) {
  let n = !Z3();
  if (options.continue)
    try {
      G("tengu_continue_print", {});
      let { clearSessionCaches: r } = await Promise.resolve().then(() => (rKe(), QSt));
      r();
      let o = await vpe(void 0, void 0, {
        forkSession: !!options.forkSession,
      });
      if (pFc(o, options.outputFormat))
        return {
          messages: [],
        };
      if (o) {
        if (WNe) {
          let s = WNe.matchSessionMode(o.mode);
          if (s) {
            process.stderr.write(
              s +
                `
`,
            );
            let { getAgentDefinitionsWithOverrides: i, getActiveAgentsFromList: a } =
              (ty(), ro(GSt));
            i.cache.clear?.();
            let l = await i($t());
            setAppState((c) => ({
              ...c,
              agentDefinitions: {
                ...l,
                allAgents: l.allAgents,
                activeAgents: a(l.allAgents),
              },
            }));
          }
        }
        if (!options.forkSession) {
          if (o.sessionId) {
            if ((PA(Fb(o.sessionId), "resume", o.fullPath ? q7e.dirname(o.fullPath) : null), n))
              await BQ();
          }
        }
        if (
          (Qen(o, setAppState),
          Gse(
            options.forkSession
              ? {
                  ...o,
                  worktreeSession: void 0,
                  bridgeSessionId: void 0,
                  bridgeLastSeq: void 0,
                  bridgeDialogKinds: void 0,
                }
              : o,
          ),
          !options.forkSession && n && o.sessionId)
        )
          Hme();
        if (WNe) Z1e(WNe.isCoordinatorMode() ? "coordinator" : "normal");
        return {
          messages: o.messages,
          turnInterruptionState: o.turnInterruptionState,
          supersededToolUseIds: o.supersededToolUseIds,
          deferredToolUse: o.deferredToolUse,
          agentSetting: o.agentSetting,
        };
      }
      G("tengu_continue", {
        success: false,
        entrypoint: We("print"),
      });
    } catch (r) {
      return (
        ke(r),
        Bc(1),
        {
          messages: [],
        }
      );
    }
  if (options.teleport)
    try {
      await tV();
      let r = qZt();
      if (r) throw Error(r);
      if ((G("tengu_teleport_print", {}), typeof options.teleport !== "string"))
        throw Error("No session ID provided for teleport");
      let { clearSessionCaches: o } = await Promise.resolve().then(() => (rKe(), QSt));
      o();
      let {
        checkOutTeleportedSessionBranch: s,
        processMessagesForTeleportResume: i,
        teleportResumeCodeSession: a,
        validateGitState: l,
      } = await Promise.resolve().then(() => (gP(), i9t));
      await l();
      let c = await a(options.teleport),
        { branchError: u } = await s(c.branch);
      return {
        messages: i(c.log, u),
      };
    } catch (r) {
      return (
        T(`Teleport in print mode failed: ${be(r)}`, {
          level: "error",
        }),
        Bc(1),
        {
          messages: [],
        }
      );
    }
  if (options.resume) {
    let r = "load_error",
      o = performance.now();
    try {
      G("tengu_resume_print", {});
      let s = typeof options.resume === "string" ? options.resume.trim() : "",
        i = Uyr(s);
      if (!i && s) {
        let u = await OQ(s, {
          exact: true,
        });
        if (u.length === 1) {
          let d = qg(u[0]);
          if (d) i = Uyr(d);
        } else if (u.length > 1) {
          let d = u.map((p) => `  ${qg(p) ?? "(unknown)"}  (modified ${p.modified.toISOString()})`)
            .join(`
`);
          return (
            G("tengu_session_resumed", {
              entrypoint: We("print"),
              success: false,
              failure_reason: We("not_found_explicit_id"),
            }),
            pnn(
              `Error: --resume "${s}" matches ${u.length} sessions. Pass one of these session IDs to disambiguate:
${d}`,
              options.outputFormat,
            ),
            Bc(1),
            {
              messages: [],
            }
          );
        }
      }
      if (!i) {
        let u =
          "Error: --resume requires a valid session ID or session title when used with --print. Usage: claude -p --resume <session-id|title>";
        if (s) u += `. Provided value "${s}" is not a UUID and does not match any session title.`;
        return (
          G("tengu_session_resumed", {
            entrypoint: We("print"),
            success: false,
            failure_reason: We("not_found_explicit_id"),
          }),
          pnn(u, options.outputFormat),
          Bc(1),
          {
            messages: [],
          }
        );
      }
      let { clearSessionCaches: a } = await Promise.resolve().then(() => (rKe(), QSt));
      if ((a(), options.sdkUrl)) {
        let u = performance.now(),
          [, d] = await Promise.all([
            (options.hydratePrefetch ?? Promise.resolve(null)).then(
              (p) => (aZa(p, u), l5o(i.sessionId, p, kmr())),
            ),
            options.restoredWorkerState,
            cXo().restore(uXo()),
          ]);
        if ((Zc("resume_hydrate_ms", performance.now() - u, u), d?.external || d?.internal)) {
          if (
            (setAppState((p) => rpc(d.external ?? {})(opc(d.internal ?? {})(p))),
            typeof d.external?.model === "string")
          ) {
            let p = d.external.model.trim().toLowerCase() === "default" ? Ey() : d.external.model;
            if (KS(p) || xa(p))
              (py(p),
                setAppState((f) => ({
                  ...f,
                  mainLoopModel: p,
                })));
          }
        }
      } else if (i.isUrl && i.ingressUrl && ut("true")) await s5o(i.sessionId, i.ingressUrl);
      if (!options.forkSession) {
        let u = performance.now(),
          d = await Tpe(i.sessionId);
        if ((Zc("resume_live_check_ms", performance.now() - u, u), d))
          return (
            process.stderr
              .write(`Error: Session ${i.sessionId} is currently running as a background agent (${d.kind}). Use \`claude agents\` to find and attach to it, or add --fork-session to branch off a copy.
`),
            Bc(1),
            {
              messages: [],
            }
          );
      }
      let l = performance.now(),
        c = await vpe(i.sessionId, i.jsonlFile || void 0, {
          forkSession: !!options.forkSession,
        });
      if (
        (Zc("resume_deserialize_ms", performance.now() - l - (rZa("hooks_init_ms") ?? 0), l),
        (r = "processing_error"),
        pFc(c, options.outputFormat))
      )
        return {
          messages: [],
        };
      if (!c || (c.messages.length === 0 && (i.isUrl || options.sdkUrl || !c.sessionId)))
        if (i.isUrl || options.sdkUrl) {
          let u = [];
          if (cMe()) {
            let f = process.env.CLAUDE_CODE_RESUME_FROM_SESSION;
            if (f)
              try {
                T(`[resume-from] Hydrating from source session ${f}`);
                let { prepareApiRequest: m } = await Promise.resolve().then(() => (Cv(), sce)),
                  { teleportFromSessionsAPI: g } = await Promise.resolve().then(() => (gP(), i9t)),
                  { deserializeMessages: h } = await Promise.resolve().then(() => (wpe(), TZa)),
                  { accessToken: y, orgUUID: b } = await m(),
                  { log: _ } = await g(f, b, y);
                ((u = h(_)), T(`[resume-from] Loaded ${u.length} messages from ${f}`));
              } catch (m) {
                T(`[resume-from] Failed to hydrate from ${f}: ${be(m)}`);
              }
          }
          let d = performance.now(),
            p = await (options.sessionStartHooksPromise ??
              rve({
                kind: "session-start",
                source: "startup",
              }));
          if ((Zc("hooks_init_ms", performance.now() - d, d), c?.sessionId && !options.forkSession))
            (PA(Fb(c.sessionId), "resume", c.fullPath ? q7e.dirname(c.fullPath) : null), Gse(c));
          return {
            messages: [...u, ...Eht(u, p)],
          };
        } else
          return (
            G("tengu_session_resumed", {
              entrypoint: We("print"),
              success: false,
              failure_reason: We("not_found_explicit_id"),
            }),
            pnn(`No conversation found with session ID: ${i.sessionId}`, options.outputFormat),
            Bc(1),
            {
              messages: [],
            }
          );
      if (options.resumeSessionAt) {
        let u = c.messages.findIndex((d) => d.uuid === options.resumeSessionAt);
        if (u < 0)
          return (
            G("tengu_session_resumed", {
              entrypoint: We("print"),
              success: false,
              failure_reason: We("processing_error"),
            }),
            pnn(
              `No message found with message.uuid of: ${options.resumeSessionAt}`,
              options.outputFormat,
            ),
            Bc(1),
            {
              messages: [],
            }
          );
        c.messages = u >= 0 ? c.messages.slice(0, u + 1) : [];
      }
      if (WNe) {
        let u = WNe.matchSessionMode(c.mode);
        if (u) {
          process.stderr.write(
            u +
              `
`,
          );
          let { getAgentDefinitionsWithOverrides: d, getActiveAgentsFromList: p } = (ty(), ro(GSt));
          d.cache.clear?.();
          let f = await d($t());
          setAppState((m) => ({
            ...m,
            agentDefinitions: {
              ...f,
              allAgents: f.allAgents,
              activeAgents: p(f.allAgents),
            },
          }));
        }
      }
      if (!options.forkSession && c.sessionId) {
        if ((PA(Fb(c.sessionId), "resume", c.fullPath ? q7e.dirname(c.fullPath) : null), n))
          await BQ();
      }
      if (
        (Qen(c, setAppState),
        Gse(
          options.forkSession
            ? {
                ...c,
                worktreeSession: void 0,
                bridgeSessionId: void 0,
                bridgeLastSeq: void 0,
                bridgeDialogKinds: void 0,
              }
            : c,
        ),
        !options.forkSession && n && c.sessionId)
      )
        Hme();
      if (WNe) Z1e(WNe.isCoordinatorMode() ? "coordinator" : "normal");
      return (
        G("tengu_session_resumed", {
          entrypoint: We("print"),
          success: true,
          interruption_kind: $e(c.turnInterruptionState?.kind ?? "none"),
          resume_duration_ms: Math.round(performance.now() - o),
        }),
        {
          messages: c.messages,
          turnInterruptionState: c.turnInterruptionState,
          supersededToolUseIds: c.supersededToolUseIds,
          deferredToolUse: c.deferredToolUse,
          agentSetting: c.agentSetting,
        }
      );
    } catch (s) {
      let i = r;
      (G("tengu_session_resumed", {
        entrypoint: We("print"),
        success: false,
        failure_reason: $e(i),
        error_name: Zr(s).name,
      }),
        ke(s));
      let a =
        s instanceof Error
          ? `Failed to resume session: ${s.message}`
          : "Failed to resume session with --print mode";
      return (
        pnn(a, options.outputFormat),
        Bc(1),
        {
          messages: [],
        }
      );
    }
  }
  return {
    messages: await (options.sessionStartHooksPromise ??
      rve({
        kind: "session-start",
        source: "startup",
      })),
  };
}
function VLm(e, t) {
  let n;
  if (typeof e === "string") {
    if (e.trim() !== "")
      n = HIo([
        De({
          type: "user",
          session_id: "",
          message: {
            role: "user",
            content: e,
          },
          parent_tool_use_id: null,
        }),
      ]);
    else n = HIo([]);
  } else n = e;
  return t.sdkUrl
    ? new kvt(t.sdkUrl, n, t.replayUserMessages, t.sessionState)
    : new dnn(n, t.replayUserMessages, t.sessionState);
}
async function handleOrphanedPermissionResponse({
  message: e,
  setAppState: t,
  onEnqueued: n,
  handledToolUseIds: handledToolUseIds,
}) {
  if (
    e.response.subtype === "success" &&
    e.response.response?.toolUseID &&
    typeof e.response.response.toolUseID === "string"
  ) {
    let o = e.response.response,
      { toolUseID: s } = o;
    if (!s) return false;
    if (
      (T(
        `handleOrphanedPermissionResponse: received orphaned control_response for toolUseID=${s} request_id=${e.response.request_id}`,
      ),
      handledToolUseIds.has(s))
    )
      return (
        T(
          `handleOrphanedPermissionResponse: skipping duplicate orphaned permission for toolUseID=${s} (already handled)`,
        ),
        false
      );
    let i = await b5o(s);
    if (!i)
      return (
        T(
          `handleOrphanedPermissionResponse: dropping orphaned control_response for toolUseID=${s} \u2014 no unresolved tool_use found`,
          {
            level: "warn",
          },
        ),
        false
      );
    return (
      handledToolUseIds.add(s),
      T(
        `handleOrphanedPermissionResponse: enqueuing orphaned permission for toolUseID=${s} messageID=${i.message.id}`,
      ),
      j_({
        mode: "orphaned-permission",
        agentId: ls(),
        value: [],
        orphanedPermission: {
          permissionResult: o,
          assistantMessage: i,
        },
      }),
      n?.(),
      true
    );
  }
  return false;
}
function buildToolPermissionsFromPolicy(e) {
  if (!e?.length) return;
  let t = {};
  for (let n of e)
    if (n.org_max_permission && n.org_max_permission !== "allow") t[n.name] = n.org_max_permission;
  return Object.keys(t).length > 0 ? t : void 0;
}
function Lvt(e) {
  if (e.type === "http" || e.type === "sse") {
    let { tools: t, ...n } = e,
      r = buildToolPermissionsFromPolicy(t);
    return {
      ...n,
      ...(r && {
        toolPermissions: r,
      }),
      scope: "dynamic",
    };
  }
  return {
    ...e,
    scope: "dynamic",
  };
}
async function handleMcpSetServers(
  servers,
  sdkState,
  dynamicState,
  setAppState,
  o,
  s,
  i = false,
  a = false,
) {
  let l = new Set(
      (o?.()?.mcp.clients ?? [])
        .filter((D) => m3t(D.name) && !(D.name in dynamicState.configs))
        .map((D) => D.name),
    ),
    c = {},
    u = CB(servers, (D, P) => {
      if (!l.has(P)) return false;
      return ((c[P] = "Builtin server is CLI-owned; ignored"), true);
    });
  if (Object.values(u).some((D) => D.type !== "sdk"))
    await oV({
      hasDynamicMcpConfig: true,
    });
  let { allowed: d, blocked: p } = l5(u),
    f = {};
  for (let D of p) f[D] = "Blocked by enterprise policy (allowedMcpServers/deniedMcpServers)";
  let m = s === "plugin_install_diff" || s === "plugins_sync" || s === "reload_plugins",
    g = d;
  if (qtn() && !m) {
    g = cv(d, (D) => D.type === "sdk");
    for (let D of Object.keys(d))
      if (!Object.hasOwn(g, D)) f[D] = "Ignored in hermetic mode (not declared in user config)";
  }
  let h = {},
    y = {};
  for (let [D, P] of Object.entries(g))
    if (P.type === "sdk") h[D] = P;
    else y[D] = P;
  let b = new Set(Object.keys(sdkState.configs)),
    _ = new Set(Object.keys(h)),
    sdkAdded = [],
    A = [],
    v = {
      ...sdkState.configs,
    },
    newSdkClients = [...sdkState.clients],
    x = [...sdkState.tools],
    I = [...sdkState.commands];
  for (let D of b)
    if (!_.has(D)) {
      let P = newSdkClients.find((L) => L.name === D);
      if (P && P.type === "connected") await P.cleanup();
      newSdkClients = newSdkClients.filter((L) => L.name !== D);
      let O = `mcp__${D}__`;
      ((x = x.filter((L) => !L.name.startsWith(O))),
        (I = I.filter((L) => !$4(L, D))),
        delete v[D],
        A.push(D));
    }
  for (let [D, P] of Object.entries(h))
    if (!b.has(D)) {
      v[D] = P;
      let O = {
        type: "pending",
        name: D,
        config: {
          ...P,
          scope: "dynamic",
        },
      };
      ((newSdkClients = [...newSdkClients, O]), sdkAdded.push(D));
    }
  let processResult = await reconcileMcpServers(y, dynamicState, setAppState, o, s, i, a);
  return {
    response: {
      added: [...sdkAdded, ...processResult.response.added],
      removed: [...A, ...processResult.response.removed],
      errors: {
        ...c,
        ...f,
        ...processResult.response.errors,
      },
    },
    newSdkState: {
      configs: v,
      clients: newSdkClients,
      tools: x,
      commands: I,
    },
    newDynamicState: processResult.newState,
    sdkServersChanged: sdkAdded.length > 0 || A.length > 0,
    deferredSettle: processResult.deferredSettle,
  };
}
async function reconcileMcpServers(e, t, n, r, o = "unknown", s = false, i = false) {
  let a = new Set(Object.keys(t.configs)),
    l = new Set(Object.keys(e)),
    c = [...a].filter((q) => !l.has(q)),
    u = [...l].filter((q) => !a.has(q)),
    p = [...a]
      .filter((q) => l.has(q))
      .filter((q) => {
        let W = t.configs[q],
          V = e[q];
        if (!W || !V) return true;
        let Y = Lvt(V);
        if (!Lqe(W, Y))
          return (sn(q, `reconcileMcpServers: config changed, will replace (caller=${o})`), true);
        return false;
      });
  G("tengu_mcp_reconcile", {
    caller: o,
    desiredCount: l.size,
    currentCount: a.size,
    toRemoveCount: c.length,
    toAddCount: u.length,
    toReplaceCount: p.length,
  });
  let f = [],
    m = [],
    g = {},
    h = [...t.clients],
    y = [...t.tools];
  for (let q of [...c, ...p]) {
    let W = h.find((z) => z.name === q) ?? r?.().mcp.clients.find((z) => z.name === q),
      V = t.configs[q];
    if (V) {
      if (W?.type === "connected")
        try {
          await W.cleanup();
        } catch (z) {
          T(`MCP client cleanup failed for ${q}: ${z}`, {
            level: "error",
          });
        }
      await ST(q, V);
    }
    let Y = `mcp__${q}__`;
    if (
      ((y = y.filter((z) => !z.name.startsWith(Y))),
      (h = h.filter((z) => z.name !== q)),
      c.includes(q))
    )
      f.push(q);
  }
  let b = [...u, ...p],
    _ = [QW, u5].some(
      (q) => y.some((W) => Ql(W, q.name)) || (r?.().mcp.tools ?? []).some((W) => Ql(W, q.name)),
    ),
    S = async (q) => {
      let W = e[q];
      if (!W) return null;
      if (W.type === "sdk")
        return {
          name: q,
          added: true,
          client: null,
          tools: [],
          error: null,
          fetched: null,
        };
      let V = Lvt(W);
      try {
        let Y = await aP(q, V),
          z = [],
          K = null;
        if (Y.type === "connected") {
          if (((z = await lP(Y)), Y.capabilities?.resources && !_))
            ((_ = true), (z = [...z, QW, u5, xre]));
          try {
            let [J, ne] = await Promise.all([mJ(Y), v4(Y)]);
            K = {
              name: q,
              cmds: J,
              res: ne,
            };
          } catch (J) {
            ke(J);
          }
        }
        let Z = Y.type === "failed" ? Y.error || "Connection failed" : null;
        return {
          name: q,
          added: true,
          client: Y,
          tools: z,
          error: Z,
          fetched: K,
        };
      } catch (Y) {
        let z = Zr(Y);
        return (
          ke(z),
          {
            name: q,
            added: false,
            client: null,
            tools: [],
            error: z.message,
            fetched: null,
          }
        );
      }
    },
    A = (q) => {
      let W = e[q];
      return !W || mGt(Lvt(W));
    },
    C = s
      ? new Map()
      : await (() =>
          Promise.all([
            C8(b.filter(A), S, {
              concurrency: hpt(),
            }),
            C8(
              b.filter((q) => !A(q)),
              S,
              {
                concurrency: a2n(),
              },
            ),
          ]).then(
            ([q, W]) => new Map([...q, ...W].filter((V) => V !== null).map((V) => [V.name, V])),
          ))(),
    x = s
      ? b.map((q) => ({
          type: "pending",
          name: q,
          config: Lvt(e[q]),
        }))
      : [];
  if ((h.push(...x), s)) m.push(...b);
  let I = [...x],
    k = [],
    D = [];
  for (let q of b) {
    let W = C.get(q);
    if (!W) continue;
    if (W.client) (h.push(W.client), I.push(W.client));
    if ((y.push(...W.tools), k.push(...W.tools), W.error)) g[W.name] = W.error;
    if (W.added) m.push(W.name);
    if (W.fetched) D.push(W.fetched);
  }
  let P = {};
  for (let q of l) {
    let W = e[q];
    if (W) P[q] = Lvt(W);
  }
  let {
      allow: O,
      deny: L,
      ask: M,
    } = i
      ? nLr(e)
      : {
          allow: [],
          deny: [],
          ask: [],
        },
    N = {
      clients: h,
      tools: y,
      configs: P,
    },
    B = new Set([...c, ...p, ...I.map((q) => q.name)]);
  n((q) => {
    let W = q.mcp.tools.filter((re) => {
        for (let ee of B) if (re.name.startsWith(`mcp__${ee}__`)) return false;
        return true;
      }),
      V = q.mcp.clients.filter((re) => !B.has(re.name)),
      Y = q.mcp.commands.filter((re) => {
        for (let ee of B) if ($4(re, ee)) return false;
        return true;
      }),
      z = q.toolPermissionContext,
      K = (re, ee) => {
        let ce = re.mcpServerPolicy ?? [];
        if (ee.length === ce.length && ee.every((ae, de) => ae === ce[de])) return re;
        if (ee.length === 0) {
          let { mcpServerPolicy: ae, ...de } = re;
          return de;
        }
        return {
          ...re,
          mcpServerPolicy: ee,
        };
      },
      Z = i ? K(z.alwaysAllowRules, O) : z.alwaysAllowRules,
      J = i ? K(z.alwaysDenyRules, L) : z.alwaysDenyRules,
      ne = i ? K(z.alwaysAskRules, M) : z.alwaysAskRules,
      oe =
        Z === z.alwaysAllowRules && J === z.alwaysDenyRules && ne === z.alwaysAskRules
          ? z
          : {
              ...z,
              alwaysAllowRules: Z,
              alwaysDenyRules: J,
              alwaysAskRules: ne,
            };
    if (B.size === 0 && oe === z) return q;
    return {
      ...q,
      mcp: {
        ...q.mcp,
        tools: [...W, ...k],
        clients: [...V, ...I],
        commands: oE([...Y, ...D.flatMap((re) => re.cmds)], "name"),
        resources: {
          ...$F(q.mcp.resources, [...B]),
          ...Object.fromEntries(D.map((re) => [re.name, re.res])),
        },
      },
      toolPermissionContext: oe,
    };
  });
  let $;
  if (s && b.length > 0) {
    let q = () => {};
    $ = new Promise((J) => {
      q = J;
    });
    let W = [],
      V = [],
      Y = Object.fromEntries(b.map((J) => [J, Lvt(e[J])])),
      z = {
        getClients: () => r?.().mcp.clients ?? [],
        applyMcpUpdate: (J) =>
          n((ne) => ({
            ...ne,
            mcp: J(ne.mcp),
          })),
      },
      K = async (J) => {
        let ne = await S(J),
          oe = Y[J],
          re = ne?.client ?? {
            type: "failed",
            name: J,
            config: oe,
            error: ne?.error ?? "Connection failed",
          };
        if (
          (_mr(z, {
            client: re,
            tools: ne?.tools ?? [],
            commands: ne?.fetched?.cmds ?? [],
          }),
          ne?.fetched)
        ) {
          let ee = ne.fetched.res;
          z.applyMcpUpdate((ce) => {
            let ae = ce.clients.find((de) => de.name === J);
            if (!ae || !Lqe(ae.config, oe)) return ce;
            return {
              ...ce,
              resources: {
                ...ce.resources,
                [J]: ee,
              },
            };
          });
        }
        (W.push(re), V.push(...(ne?.tools ?? [])));
      },
      Z = () => {
        Promise.all([
          C8(b.filter(A), K, {
            concurrency: hpt(),
          }),
          C8(
            b.filter((J) => !A(J)),
            K,
            {
              concurrency: a2n(),
            },
          ),
        ])
          .catch((J) => {
            ke(J);
            let ne = new Set(b);
            z.applyMcpUpdate((oe) => ({
              ...oe,
              clients: oe.clients.map((re) =>
                re.type === "pending" && ne.has(re.name) && Lqe(re.config, Y[re.name])
                  ? {
                      type: "failed",
                      name: re.name,
                      config: re.config,
                      error: be(J),
                    }
                  : re,
              ),
            }));
          })
          .finally(() => {
            (q({
              clients: W,
              tools: V,
            }),
              v7o(Y, z).catch((J) => ke(J)));
          });
      };
    setImmediate(Z);
  }
  return {
    response: {
      added: m,
      removed: f,
      errors: g,
    },
    newState: N,
    deferredSettle: $,
  };
}
function mergeMcpClientLists(...e) {
  return oE(e.flat(), "name");
}
function fFc(e, t) {
  if (e === null)
    return t !== void 0 && Ule()
      ? {
          type: "adaptive",
          display: t,
        }
      : void 0;
  if (e === 0)
    return {
      type: "disabled",
    };
  return {
    type: "enabled",
    budgetTokens: e,
    display: t,
  };
}
function zLm(e) {
  let t = e instanceof Fo,
    n = t ? W1n(e) : XXn(e),
    r = t && typeof e.status === "number" ? e.status : void 0,
    o = e instanceof Error && e.cause !== void 0 ? XXn(e.cause) : void 0;
  return {
    error_name: n,
    api_error_status: r,
    cause_name: o,
  };
}
var V7e,
  q7e,
  Kme,
  px,
  iFc,
  WNe,
  PLm,
  MLm,
  aFc,
  $Lm,
  OLm,
  SHUTDOWN_TEAM_PROMPT = `<system-reminder>
You are running in non-interactive mode and cannot return a response to the user until your team is shut down.

You MUST shut down your team before preparing your final response:
1. Use requestShutdown to ask each team member to shut down gracefully
2. Wait for shutdown approvals
3. Use the cleanup operation to clean up the team
4. Only then provide your final response to the user

The user cannot receive your response until the team is completely shut down.
</system-reminder>

Shut down your team and prepare your final response for the user.`,
  cFc = 10000 /* 1e4 */,
  fnn,
  Dmr,
  NLm = "anthropic/permissionDisplay";
