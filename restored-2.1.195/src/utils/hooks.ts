// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $ic
// matched 2.1.88 source: src/utils/hooks.ts
// class=modified  jaccard=0.2542  score=0.3472  fileCov=0.4868
// note: deminified; 38 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: shouldSkipHookDueToTrust, persistHookOutput, parseElicitationHookOutput, isPluginEligibleForCredentials, isBareMcpServerMatcher, hasInstructionsLoadedHook, hasHookForEvent, hasBlockingResult, getUserPromptSubmitHookBlockingMessage, getTelemetryHookName, getTeammateIdleHookMessage, getTaskCreatedHookMessage, getTaskCompletedHookMessage, getStopHookMessage, getSessionEndHookTimeoutMs, getPreToolHookBlockingMessage, getPluginHookCounts, getMatchingHooks, getAnthropicCredentialsForO …
// [unwrapped __esm module $ic] deps: entrypoints/sdk/coreSchemas.ts, entrypoints/sdk/coreSchemas.ts, entrypoints/sdk/coreSchemas.ts, entrypoints/sdk/coreSchemas.ts, utils/attachments.ts, entrypoints/sdk/coreSchemas.ts, utils/hooks.ts, components/tasks/BackgroundTask.tsx, entrypoints/sdk/coreSchemas.ts, utils/hooks.ts, screens/REPL.tsx, uuid/dist/rng.js, utils/hooks.ts, Mic
zem = {
  PreToolUse: bzt,
  PostToolUse: Szt,
  PostToolUseFailure: Ezt,
  PostToolBatch: wSt,
  PermissionDenied: tKt,
  PermissionRequest: jAe,
  Notification: cJ,
  Stop: OAe,
  SubagentStop: OAe,
  StopFailure: sOe,
  TeammateIdle: oYt,
  TaskCreated: Rzt,
  TaskCompleted: Z6e,
  UserPromptSubmit: aZt,
  UserPromptExpansion: G8t,
  SessionStart: qjt,
  SessionEnd: oKe,
  Setup: Vjt,
  SubagentStart: J8t,
  PreCompact: RQ,
  PostCompact: eOe,
  ConfigChange: vRe,
  CwdChanged: Gjt,
  FileChanged: Wjt,
  InstructionsLoaded: o5e,
  Elicitation: W3t,
  ElicitationResult: q3t,
  WorktreeCreate: WYe,
  WorktreeRemove: QHt,
  MessageDisplay: JHt,
};
function Bic() {
  return Yem;
}
async function flushPendingAsyncRewakeHooks() {
  let e = Bic();
  if (e.size === 0) return;
  let t = Promise.allSettled([...e]);
  await Promise.race([
    t,
    Nn(ASYNC_REWAKE_FLUSH_TIMEOUT_MS, void 0, {
      unref: true,
    }),
  ]);
}
function getSessionEndHookTimeoutMs() {
  let e = process.env.CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS,
    t = e ? parseInt(e, 10) : NaN;
  if (Number.isFinite(t) && t > 0) return t;
  let n = 0,
    r = N_() ? [] : (eG()?.SessionEnd ?? []),
    o = [...(CU()?.SessionEnd ?? []), ...r];
  for (let s of o)
    for (let i of s.hooks) if (i.timeout && i.timeout * 1000 > n) n = i.timeout * 1000;
  return Math.max(SESSION_END_HOOK_TIMEOUT_MS_DEFAULT, Math.min(n, Kem));
}
function executeInBackground({
  processId: e,
  hookId: t,
  shellCommand: shellCommand,
  asyncResponse: r,
  hookEvent: o,
  hookName: s,
  command: i,
  asyncRewake: a,
  rewakeMessage: l,
  rewakeSummary: c,
  pluginId: u,
}) {
  if (a) {
    let d = shellCommand.result.then(async (f) => {
        await new Promise((y) => setImmediate(y));
        let m = await shellCommand.taskOutput.getStdout(),
          g = shellCommand.taskOutput.getStderr();
        (shellCommand.cleanup(),
          Ok({
            hookId: t,
            hookName: s,
            hookEvent: o,
            output: m + g,
            stdout: m,
            stderr: g,
            exitCode: f.code,
            outcome: f.code === 0 ? "success" : "error",
          }));
        let h;
        if (u)
          for (let y of m.split(`
`)) {
            let b = y.trim();
            if (!b.startsWith("{")) continue;
            try {
              let _ = Ft(b);
              if ("async" in _) continue;
              if (eO(_)) {
                if (
                  (emitHookMetrics(_.metrics, u, o),
                  typeof _.rewakeSummary === "string" && _.rewakeSummary.trim() && jlr(u))
                )
                  h = _.rewakeSummary.trim().replace(/\s+/g, " ").slice(0, Xem);
              }
              break;
            } catch {}
          }
        if (f.code === 2) {
          let y = `Stop hook blocking error from command "${s}":`,
            b = "Stop hook feedback";
          if (l !== void 0) y = l;
          if (h !== void 0) b = h;
          else if (c !== void 0) b = c;
          let _ = aw(`${y} ${g || m}`);
          Ad({
            value: `<${Oc}>
<${Zu}>${ec(b)}</${Zu}>
</${Oc}>
${_}`,
            mode: "task-notification",
            agentId: ls(),
            priority: "next",
            stopHookActive: true,
          });
        }
      }),
      p = Bic();
    return (p.add(d), d.finally(() => p.delete(d)), true);
  }
  if (
    !shellCommand.background(e, {
      skipSpill: true,
    })
  )
    return false;
  return (
    d0l({
      processId: e,
      hookId: t,
      asyncResponse: r,
      hookEvent: o,
      hookName: s,
      command: i,
      shellCommand: shellCommand,
      pluginId: u,
    }),
    true
  );
}
function shouldSkipHookDueToTrust() {
  return !yke();
}
function createBaseHookInput(e, t, n) {
  let r = t ?? Rt(),
    o = n?.agentType ?? TO(),
    s = n?.options?.mainLoopModel,
    i = n?.getAppState?.().effortValue;
  for (let l of n?.permissionLayers ?? [])
    if (l.kind === "effort" && l.effort !== void 0) i = l.effort;
  let a =
    s && n?.getAppState && Kw(s)
      ? {
          level: RM(s, i),
        }
      : void 0;
  return {
    session_id: r,
    transcript_path: Pk(r),
    cwd: $t(),
    permission_mode: e,
    agent_id: n?.agentId,
    agent_type: o,
    effort: a,
  };
}
function validateHookJson(jsonString) {
  let t = Ft(jsonString),
    validation = XHt().safeParse(t);
  if (validation.success)
    return (
      T("Successfully parsed and validated hook JSON output"),
      hic(t, validation.data),
      {
        json: validation.data,
      }
    );
  let r = validation.error.issues,
    o = r[0],
    s = o ? `${o.path.join(".") || "(root)"}: ${o.message}` : "unknown error";
  if (
    t &&
    typeof t === "object" &&
    "hookSpecificOutput" in t &&
    t.hookSpecificOutput &&
    typeof t.hookSpecificOutput === "object" &&
    !Array.isArray(t.hookSpecificOutput) &&
    !("hookEventName" in t.hookSpecificOutput)
  )
    s = 'hookSpecificOutput is missing required field "hookEventName"';
  let i = r.slice(1).map((a) => `  - ${a.path.join(".") || "(root)"}: ${a.message}`).join(`
`);
  return {
    validationError: `Hook JSON output validation failed \u2014 ${s}${
      i
        ? `
` + i
        : ""
    }

The hook's output was: ${De(t, null, 2)}`,
  };
}
async function persistHookOutput(e, t, n, r = zca) {
  if (e.length <= r) return e;
  let o = await pDe(e, `hook-${t}-${n}`);
  if (mDe(o))
    return (
      G("tengu_hook_output_persisted", {
        source: $e(n),
        originalSizeBytes: e.length,
        persistedSizeBytes: 0,
        truncatedFallback: true,
      }),
      `${e.slice(0, r)}

[Hook ${n} truncated at ${r} chars \u2014 persist-to-disk failed: ${o.error}]`
    );
  let s = fDe(o);
  return (
    G("tengu_hook_output_persisted", {
      source: $e(n),
      originalSizeBytes: o.originalSize,
      persistedSizeBytes: s.length,
      truncatedFallback: false,
    }),
    s
  );
}
function parseHookOutput(stdout) {
  let trimmed = stdout.trim();
  if (!trimmed.startsWith("{"))
    return (
      T("Hook output does not start with {, treating as plain text"),
      {
        plainText: stdout,
      }
    );
  try {
    let n = validateHookJson(trimmed);
    if ("json" in n) return n;
    let r = `${n.validationError}

Expected schema:
${De(
  {
    continue: "boolean (optional)",
    suppressOutput: "boolean (optional)",
    stopReason: "string (optional)",
    decision: '"approve" | "block" (optional)',
    reason: "string (optional)",
    systemMessage: "string (optional)",
    terminalSequence: "string (optional)",
    permissionDecision: '"allow" | "deny" | "ask" (optional)',
    hookSpecificOutput: {
      "for PreToolUse": {
        hookEventName: '"PreToolUse"',
        permissionDecision: '"allow" | "deny" | "ask" | "defer" (optional)',
        permissionDecisionReason: "string (optional)",
        updatedInput: "object (optional) - Modified tool input to use",
      },
      "for UserPromptSubmit": {
        hookEventName: '"UserPromptSubmit"',
        additionalContext: "string (required)",
      },
      "for PostToolUse": {
        hookEventName: '"PostToolUse"',
        additionalContext: "string (optional)",
      },
      "for PostToolBatch": {
        hookEventName: '"PostToolBatch"',
        additionalContext: "string (optional)",
      },
      "for Stop / SubagentStop": {
        hookEventName: '"Stop" | "SubagentStop"',
        additionalContext:
          "string (optional) - Feedback for the model; the conversation continues so the model can act on it",
      },
    },
  },
  null,
  2,
)}`;
    return (
      T(r),
      {
        plainText: stdout,
        validationError: r,
      }
    );
  } catch (n) {
    return (
      T(`Failed to parse hook output as JSON: ${n}`),
      {
        plainText: stdout,
      }
    );
  }
}
function parseHttpHookOutput(body) {
  let trimmed = body.trim();
  if (trimmed === "") {
    let n = XHt().safeParse({});
    if (n.success)
      return (
        T("HTTP hook returned empty body, treating as empty JSON object"),
        {
          json: n.data,
        }
      );
  }
  if (!trimmed.startsWith("{")) {
    let n = `HTTP hook must return JSON, but got non-JSON response body: ${trimmed.length > 200 ? trimmed.slice(0, 200) + "\u2026" : trimmed}`;
    return (
      T(n),
      {
        validationError: n,
      }
    );
  }
  try {
    let n = validateHookJson(trimmed);
    if ("json" in n) return n;
    return (T(n.validationError), n);
  } catch (n) {
    let r = `HTTP hook must return valid JSON, but parsing failed: ${n}`;
    return (
      T(r),
      {
        validationError: r,
      }
    );
  }
}
function processHookJSONOutput({
  json: json,
  command: t,
  hookName: n,
  toolUseID: r,
  hookEvent: o,
  expectedHookEvent: s,
  stdout: i,
  stderr: a,
  exitCode: l,
  durationMs: c,
}) {
  let result = {},
    syncJson = json;
  if (syncJson.continue === false) {
    if (((result.preventContinuation = true), syncJson.stopReason))
      result.stopReason = syncJson.stopReason;
  }
  if (json.decision)
    switch (json.decision) {
      case "approve":
        result.permissionBehavior = "allow";
        break;
      case "block":
        ((result.permissionBehavior = "deny"),
          (result.blockingError = {
            blockingError: json.reason || "Blocked by hook",
            command: t,
          }));
        break;
      default:
        throw Error(
          `Unknown hook decision type: ${json.decision}. Valid types are: approve, block`,
        );
    }
  if (json.systemMessage) result.systemMessage = json.systemMessage;
  if (json.terminalSequence) {
    let p = OFo(json.terminalSequence);
    if (p !== null) result.terminalSequence = p;
    else
      T(
        `Hook ${n} (${o}) returned a terminalSequence that was rejected by the allowlist (only OSC 0/1/2/9/99/777 and BEL are permitted)`,
      );
  }
  if (
    json.hookSpecificOutput?.hookEventName === "PreToolUse" &&
    json.hookSpecificOutput.permissionDecision
  )
    switch (json.hookSpecificOutput.permissionDecision) {
      case "allow":
        result.permissionBehavior = "allow";
        break;
      case "deny":
        ((result.permissionBehavior = "deny"),
          (result.blockingError = {
            blockingError: json.reason || "Blocked by hook",
            command: t,
          }));
        break;
      case "ask":
        result.permissionBehavior = "ask";
        break;
      case "defer":
        result.permissionBehavior = "defer";
        break;
      default:
        throw Error(
          `Unknown hook permissionDecision type: ${json.hookSpecificOutput.permissionDecision}. Valid types are: allow, deny, ask, defer`,
        );
    }
  if (result.permissionBehavior !== void 0 && json.reason !== void 0)
    result.hookPermissionDecisionReason = json.reason;
  if (json.hookSpecificOutput) {
    if (s && json.hookSpecificOutput.hookEventName !== s)
      throw Error(
        `Hook returned incorrect event name: expected '${s}' but got '${json.hookSpecificOutput.hookEventName}'. Full stdout: ${De(json, null, 2)}`,
      );
    switch (json.hookSpecificOutput.hookEventName) {
      case "PreToolUse":
        if (json.hookSpecificOutput.permissionDecision)
          switch (json.hookSpecificOutput.permissionDecision) {
            case "allow":
              result.permissionBehavior = "allow";
              break;
            case "deny":
              ((result.permissionBehavior = "deny"),
                (result.blockingError = {
                  blockingError:
                    json.hookSpecificOutput.permissionDecisionReason ||
                    json.reason ||
                    "Blocked by hook",
                  command: t,
                }));
              break;
            case "ask":
              result.permissionBehavior = "ask";
              break;
            case "defer":
              result.permissionBehavior = "defer";
              break;
          }
        if (
          ((result.hookPermissionDecisionReason = json.hookSpecificOutput.permissionDecisionReason),
          json.hookSpecificOutput.updatedInput)
        )
          result.updatedInput = json.hookSpecificOutput.updatedInput;
        result.additionalContext = json.hookSpecificOutput.additionalContext;
        break;
      case "UserPromptSubmit":
        ((result.additionalContext = json.hookSpecificOutput.additionalContext),
          (result.sessionTitle = json.hookSpecificOutput.sessionTitle),
          (result.suppressOriginalPrompt = json.hookSpecificOutput.suppressOriginalPrompt));
        break;
      case "UserPromptExpansion":
        result.additionalContext = json.hookSpecificOutput.additionalContext;
        break;
      case "SessionStart":
        if (
          ((result.additionalContext = json.hookSpecificOutput.additionalContext),
          (result.initialUserMessage = json.hookSpecificOutput.initialUserMessage),
          (result.sessionTitle = json.hookSpecificOutput.sessionTitle),
          "watchPaths" in json.hookSpecificOutput && json.hookSpecificOutput.watchPaths)
        )
          result.watchPaths = json.hookSpecificOutput.watchPaths;
        result.reloadSkills = json.hookSpecificOutput.reloadSkills;
        break;
      case "Setup":
        result.additionalContext = json.hookSpecificOutput.additionalContext;
        break;
      case "SubagentStart":
        result.additionalContext = json.hookSpecificOutput.additionalContext;
        break;
      case "PostToolUse":
        if (
          ((result.additionalContext = json.hookSpecificOutput.additionalContext),
          json.hookSpecificOutput.updatedToolOutput !== void 0)
        )
          result.updatedToolOutput = json.hookSpecificOutput.updatedToolOutput;
        if (json.hookSpecificOutput.updatedMCPToolOutput)
          result.updatedMCPToolOutput = json.hookSpecificOutput.updatedMCPToolOutput;
        break;
      case "PostToolUseFailure":
        result.additionalContext = json.hookSpecificOutput.additionalContext;
        break;
      case "PostToolBatch":
        result.additionalContext = json.hookSpecificOutput.additionalContext;
        break;
      case "Stop":
      case "SubagentStop":
        result.additionalContext = json.hookSpecificOutput.additionalContext;
        break;
      case "PermissionDenied":
        result.retry = json.hookSpecificOutput.retry;
        break;
      case "PermissionRequest":
        if (json.hookSpecificOutput.decision) {
          if (
            ((result.permissionRequestResult = json.hookSpecificOutput.decision),
            (result.permissionBehavior =
              json.hookSpecificOutput.decision.behavior === "allow" ? "allow" : "deny"),
            json.hookSpecificOutput.decision.behavior === "allow" &&
              json.hookSpecificOutput.decision.updatedInput)
          )
            result.updatedInput = json.hookSpecificOutput.decision.updatedInput;
        }
        break;
      case "Elicitation":
        if (json.hookSpecificOutput.action) {
          if (
            ((result.elicitationResponse = {
              action: json.hookSpecificOutput.action,
              content: json.hookSpecificOutput.content,
            }),
            json.hookSpecificOutput.action === "decline")
          )
            result.blockingError = {
              blockingError: json.reason || "Elicitation denied by hook",
              command: t,
            };
        }
        break;
      case "ElicitationResult":
        if (json.hookSpecificOutput.action) {
          if (
            ((result.elicitationResultResponse = {
              action: json.hookSpecificOutput.action,
              content: json.hookSpecificOutput.content,
            }),
            json.hookSpecificOutput.action === "decline")
          )
            result.blockingError = {
              blockingError: json.reason || "Elicitation result blocked by hook",
              command: t,
            };
        }
        break;
      case "MessageDisplay":
        result.displayContent = json.hookSpecificOutput.displayContent;
        break;
    }
  }
  return {
    ...result,
    message: result.blockingError
      ? ai({
          type: "hook_blocking_error",
          hookName: n,
          toolUseID: r,
          hookEvent: o,
          blockingError: result.blockingError,
        })
      : ai({
          type: "hook_success",
          hookName: n,
          toolUseID: r,
          hookEvent: o,
          content: "",
          stdout: i,
          stderr: a,
          exitCode: l,
          command: t,
          durationMs: c,
        }),
  };
}
async function execCommandHook(
  hook,
  hookEvent,
  hookName,
  jsonInput,
  signal,
  hookId,
  hookIndex,
  pluginRoot,
  pluginId,
  skillRoot,
  forceSyncExecution,
  requestPrompt,
) {
  let p = hookEvent === "SessionStart" || hookEvent === "Setup" || hookEvent === "SessionEnd",
    f = Date.now(),
    m,
    g = false,
    h = Vt() === "windows",
    y = hook.shell ?? XWe(),
    b = y === "powershell",
    _ = hook.args !== void 0;
  if (_ && /\s/.test(hook.command) && !/[\\/]/.test(hook.command))
    T(
      `Hook command "${hook.command}" has both "args" and whitespace in "command". Exec form treats "command" as a single executable name; move the rest into "args". Example: { "command": "node", "args": ["script.js"] }.`,
      {
        level: "warn",
      },
    );
  let S = h && !b && !_ ? (ge) => ge.replaceAll("\\", "/") : (ge) => ge,
    A = rc(),
    v = hook.command,
    C;
  for (let [ge, he] of [
    ["CLAUDE_PLUGIN_ROOT", pluginId || forceSyncExecution],
    ["CLAUDE_PLUGIN_DATA", pluginId],
  ]) {
    if (he) continue;
    let ie = "${" + ge + "}";
    if (!hook.command.includes(ie) && !hook.args?.some((He) => He.includes(ie))) continue;
    let le = eTe(hook);
    throw Error(
      forceSyncExecution
        ? `Hook command references \${${ge}} but only \${CLAUDE_PLUGIN_ROOT} is available for skill hooks (\${CLAUDE_PLUGIN_DATA} is plugin-only). Command: ${le}`
        : `Hook command references \${${ge}} but the hook is not associated with a plugin. This variable is only available in hooks defined in a plugin's hooks/hooks.json file, not in settings.json. Command: ${le}`,
    );
  }
  if (pluginId) {
    if (!(await ed(pluginId)))
      throw Error(
        `Plugin directory does not exist: ${pluginId}` +
          (skillRoot ? ` (${skillRoot} \u2014 run /plugin to reinstall)` : ""),
      );
    if (skillRoot) C = m$(skillRoot);
    if (!_) {
      if (b) {
        let ge = S(pluginId);
        v = v.replaceAll("${CLAUDE_PLUGIN_ROOT}", () => ge);
        let he = S(A);
        if (((v = v.replaceAll("${CLAUDE_PROJECT_DIR}", () => he)), skillRoot)) {
          let ie = S(Rue(skillRoot));
          v = v.replaceAll("${CLAUDE_PLUGIN_DATA}", () => ie);
        }
      }
      if (C) v = $Se(v, C);
    }
  }
  let x;
  if (hook.args !== void 0) {
    let ge = pluginId ?? forceSyncExecution,
      he = pluginId && skillRoot ? skillRoot : void 0,
      ie = (le) => {
        if (!le.includes("${")) return le;
        if (((le = le.replaceAll("${CLAUDE_PROJECT_DIR}", () => A)), ge))
          le = le.replaceAll("${CLAUDE_PLUGIN_ROOT}", () => ge);
        if (he) le = le.replaceAll("${CLAUDE_PLUGIN_DATA}", () => Rue(he));
        if (C) le = $Se(le, C);
        return le;
      };
    x = [ie(hook.command), hook.args.map(ie)];
  }
  let I = eTe(hook);
  if (h && !b && !_) v = Bpn(v);
  let k =
      !b && !_ && process.env.CLAUDE_CODE_SHELL_PREFIX
        ? Z2n(process.env.CLAUDE_CODE_SHELL_PREFIX, v)
        : v,
    D = hook.timeout ? hook.timeout * 1000 : lp,
    envVars = {
      ...DM(),
      ...Upt(signal),
      CLAUDE_PROJECT_DIR: S(A),
    },
    { columns: O, rows: L } = process.stdout;
  if (O) envVars.COLUMNS = String(O);
  if (L) envVars.LINES = String(L);
  if (pluginId) {
    if (((envVars.CLAUDE_PLUGIN_ROOT = S(pluginId)), skillRoot))
      envVars.CLAUDE_PLUGIN_DATA = S(Rue(skillRoot));
  }
  if ((Object.assign(envVars, getAnthropicCredentialsForOfficialPluginHook(skillRoot)), C))
    for (let [ge, he] of Object.entries(C)) {
      let ie = ge.replace(/[^A-Za-z0-9_]/g, "_").toUpperCase();
      envVars[`CLAUDE_PLUGIN_OPTION_${ie}`] = String(he);
    }
  if (forceSyncExecution) envVars.CLAUDE_PLUGIN_ROOT = S(forceSyncExecution);
  if (
    !b &&
    (hookEvent === "SessionStart" ||
      hookEvent === "Setup" ||
      hookEvent === "CwdChanged" ||
      hookEvent === "FileChanged") &&
    pluginRoot !== void 0
  )
    envVars.CLAUDE_ENV_FILE = await fca(hookEvent, pluginRoot);
  let M = $t(),
    N = (await ed(M)) ? M : yr();
  if (N !== M)
    T(`Hooks: cwd ${M} not found, falling back to original cwd`, {
      level: "warn",
    });
  let B = !h,
    child;
  if (x)
    child = Nlr.spawn(x[0], x[1], {
      env: envVars,
      cwd: N,
      detached: B,
      windowsHide: true,
    });
  else if (y === "powershell") {
    let ge = await d6();
    if (!ge)
      throw Error(
        `Hook "${hook.command}" has shell: 'powershell' but no PowerShell executable (pwsh or powershell) was found on PATH. Install PowerShell, or remove "shell": "powershell" to use bash.`,
      );
    child = Nlr.spawn(ge, WGt(k), {
      env: envVars,
      cwd: N,
      detached: B,
      windowsHide: true,
    });
  } else {
    let ge = h ? Hhe() : null;
    if (h && !ge)
      throw Error(
        `Hook "${hook.command}" requires bash but Git Bash was not found. Install Git for Windows (https://git-scm.com/downloads/win), or add "shell": "powershell" to this hook's config.`,
      );
    let he = h ? ge : true;
    if (h && ge) Npn(envVars, ge);
    child = Nlr.spawn(k, [], {
      env: envVars,
      cwd: N,
      shell: he,
      detached: B,
      windowsHide: true,
    });
  }
  let q = new Tb(`hook_${child.pid}`, null),
    W = rjn(child, hookId, D, q),
    V = false,
    Y = false,
    z = !Ir() || _Ct();
  if ((hook.async || (hook.asyncRewake && z)) && !requestPrompt) {
    let ge = `async_hook_${child.pid}`;
    T(`Hooks: Config-based async hook, backgrounding process ${ge}`);
    let he = (le) => {
      T(
        `Async hook stdin write failed (${on(le) ?? le}); hook command likely exited without reading stdin`,
      );
    };
    child.stdin.on("error", he);
    try {
      (child.stdin.write(
        jsonInput +
          `
`,
        "utf8",
      ),
        child.stdin.end());
    } catch (le) {
      he(le);
    }
    if (
      ((Y = true),
      executeInBackground({
        processId: ge,
        hookId: hookIndex,
        shellCommand: W,
        asyncResponse: {
          async: true,
          asyncTimeout: D,
        },
        hookEvent: hookEvent,
        hookName: hookName,
        command: I,
        asyncRewake: hook.asyncRewake,
        rewakeMessage: hook.rewakeMessage,
        rewakeSummary: hook.rewakeSummary,
        pluginId: skillRoot,
      }))
    )
      return {
        stdout: "",
        stderr: "",
        output: "",
        status: 0,
        backgrounded: true,
      };
  }
  let K = "",
    Z = "",
    J = "";
  (child.stdout.setEncoding("utf8"), child.stderr.setEncoding("utf8"));
  let ne = false,
    oe = null,
    re = new Promise((ge) => {
      oe = ge;
    });
  (child.stdout.on("data", (ge) => {
    if (((K += ge), (J += ge), !ne)) {
      let he = Gd(K).trim();
      if (!he.includes("}")) return;
      ((ne = true), T(`Hooks: Checking first line for async: ${he}`));
      try {
        let ie = Ft(he);
        if ((T(`Hooks: Parsed initial response: ${De(ie)}`), vme(ie) && !requestPrompt)) {
          let le = `async_hook_${child.pid}`;
          if (
            (T(`Hooks: Detected async hook, backgrounding process ${le}`),
            executeInBackground({
              processId: le,
              hookId: hookIndex,
              shellCommand: W,
              asyncResponse: ie,
              hookEvent: hookEvent,
              hookName: hookName,
              command: I,
              pluginId: skillRoot,
            }))
          )
            ((V = true),
              oe?.({
                stdout: K,
                stderr: Z,
                output: J,
                status: 0,
              }));
        } else if (vme(ie) && requestPrompt)
          T("Hooks: Detected async hook but forceSyncExecution is true, waiting for completion");
        else T("Hooks: Initial response is not async, continuing normal processing");
      } catch (ie) {
        T(`Hooks: Failed to parse initial response as JSON: ${ie}`);
      }
    }
  }),
    child.stderr.on("data", (ge) => {
      ((Z += ge), (J += ge));
    }));
  let ee = DZn({
      hookId: hookIndex,
      hookName: hookName,
      hookEvent: hookEvent,
      getOutput: async () => ({
        stdout: K,
        stderr: Z,
        output: J,
      }),
    }),
    ce = new Promise((ge) => {
      child.stdout.on("end", () => ge());
    }),
    ae = new Promise((ge) => {
      child.stderr.on("end", () => ge());
    }),
    de = Y
      ? Promise.resolve()
      : new Promise((ge, he) => {
          (child.stdin.on("error", (ie) => {
            he(ie);
          }),
            child.stdin.write(
              jsonInput +
                `
`,
              "utf8",
            ),
            child.stdin.end(),
            ge());
        }),
    Ee = new Promise((ge, he) => {
      child.on("error", he);
    }),
    me = false;
  child.on("exit", () => {
    if (!hookId.aborted) me = true;
  });
  let pe = new Promise((ge) => {
    let he = null;
    child.on("close", (ie) => {
      ((he = ie ?? 1),
        Promise.all([ce, ae]).then(() => {
          ge({
            stdout: K,
            stderr: Z,
            output: J,
            status: he,
            aborted: hookId.aborted && !me,
          });
        }));
    });
  });
  try {
    if (p)
      In("info", "hook_spawn_started", {
        hook_event_name: hookEvent,
        index: pluginRoot,
      });
    await Promise.race([de, Ee]);
    let ge = await Promise.race([re, pe, Ee]);
    return (
      (m = ge.status),
      (g = ge.aborted ?? false),
      {
        ...ge,
        stdout: B2n(ge.stdout),
        stderr: B2n(ge.stderr),
        output: B2n(ge.output),
      }
    );
  } catch (ge) {
    let he = on(ge);
    if (((m = 1), he === "EPIPE")) {
      T("EPIPE error while writing to hook stdin (hook command likely closed early)");
      let ie = "Hook command closed stdin before hook input was fully written (EPIPE)";
      return {
        stdout: "",
        stderr: ie,
        output: ie,
        status: 1,
      };
    } else if (he === "ABORT_ERR")
      return (
        (g = true),
        {
          stdout: "",
          stderr: "Hook cancelled",
          output: "Hook cancelled",
          status: 1,
          aborted: true,
        }
      );
    else {
      let le = `Error occurred while executing hook command: ${be(ge)}`;
      return {
        stdout: "",
        stderr: le,
        output: le,
        status: 1,
      };
    }
  } finally {
    if (p)
      In("info", "hook_spawn_completed", {
        hook_event_name: hookEvent,
        index: pluginRoot,
        duration_ms: Date.now() - f,
        exit_code: m,
        aborted: g,
      });
    if ((ee(), !V)) W.cleanup();
  }
}
function isBareMcpServerMatcher(e) {
  if (!/^[a-zA-Z0-9_|, -]+$/.test(e)) return false;
  return e
    .split(/[|,]/)
    .map((t) => t.trim())
    .some((t) => t.startsWith("mcp__") && !t.slice(5).includes("__"));
}
function Zem() {
  U5o.clear();
}
function etm(e, t) {
  if (!t || !Qem.has(e) || U5o.has(t) || !isBareMcpServerMatcher(t)) return;
  U5o.add(t);
  let n =
    t
      .split(/[|,]/)
      .map((r) => r.trim())
      .find((r) => r.startsWith("mcp__") && !r.slice(5).includes("__")) ?? t;
  T(
    `Hook matcher \`${n}\` matches no tool (it is compared as an exact string). To match all tools from this server, use \`${n}__.*\`. See CHANGELOG v2.1.195.`,
    {
      level: "warn",
    },
  );
}
function matchesPattern(matchQuery, matcher, n, r) {
  if (!matcher || matcher === "*") return true;
  if ((n ? /^[a-zA-Z0-9_|, -]+$/ : /^[a-zA-Z0-9_|]+$/).test(matcher))
    return matcher
      .split(n ? /[|,]/ : "|")
      .map((i) => i.trim())
      .filter(Boolean)
      .flatMap((i) => omn(wD(i), r))
      .includes(matchQuery);
  try {
    let s = new RegExp(matcher);
    if (s.test(matchQuery)) return true;
    for (let i of rmn(matchQuery)) if (s.test(i)) return true;
    for (let i of smn(matchQuery, r)) if (s.test(i)) return true;
    return false;
  } catch {
    return (T(`Invalid regex pattern in hook matcher: ${matcher}`), false);
  }
}
async function ntm(e, t) {
  if (
    e.hook_event_name !== "PreToolUse" &&
    e.hook_event_name !== "PostToolUse" &&
    e.hook_event_name !== "PostToolUseFailure" &&
    e.hook_event_name !== "PermissionRequest" &&
    e.hook_event_name !== "PermissionDenied"
  )
    return;
  let n = wD(e.tool_name),
    r = t && _l(t, e.tool_name),
    o = r?.inputSchema.safeParse(e.tool_input),
    s =
      o?.success && r?.preparePermissionMatcher ? await r.preparePermissionMatcher(o.data) : void 0;
  return (i) => {
    let a = Ig(i);
    if (wD(a.toolName) !== n) return false;
    if (!a.ruleContent) return true;
    return s ? s(a.ruleContent) : false;
  };
}
function Wic(e) {
  return e.hook.type === "callback" && e.hook.internal === true;
}
function lZt(e, t) {
  return `${e.pluginRoot ?? e.skillRoot ?? ""}\x00${t}`;
}
function jlr(e) {
  let t = e.lastIndexOf("@");
  if (t <= 0) return false;
  let n = e.slice(t + 1);
  if (SCe.has(n)) return true;
  return false;
}
function getPluginHookCounts(e) {
  let t = e.filter((r) => r.pluginId);
  if (t.length === 0) return;
  let n = {};
  for (let r of t) {
    let o = jlr(r.pluginId) ? r.pluginId : "third-party";
    n[o] = (n[o] || 0) + 1;
  }
  return n;
}
function isPluginEligibleForCredentials(e) {
  if (!jlr(e)) return false;
  let t = e.lastIndexOf("@"),
    n = e.slice(0, t);
  return (at("tengu_amber_lattice", {}).plugins ?? []).includes(n);
}
function getAnthropicCredentialsForOfficialPluginHook(e) {
  if (!e || !isPluginEligibleForCredentials(e)) return {};
  if (!Jl()) return {};
  if (Vi()) return {};
  if (process.env.ANTHROPIC_UNIX_SOCKET) return {};
  try {
    if (bo()) {
      let n = Ws()?.accessToken;
      return n
        ? {
            ANTHROPIC_AUTH_TOKEN: n,
          }
        : {};
    }
    let t = lI();
    return t
      ? {
          ANTHROPIC_API_KEY: t,
        }
      : {};
  } catch {
    return {};
  }
}
function emitHookMetrics(e, t, n) {
  if (!e || !t) return;
  if (!jlr(t)) return;
  let r = Object.entries(e)
    .slice(0, rtm)
    .filter(([, o]) => typeof o === "boolean" || typeof o === "number");
  (G("tengu_hook_plugin_metrics", {
    ...Object.fromEntries(r),
    pluginId: t,
    hookEvent: $e(n),
  }),
    Jc("hook_plugin_metrics", {
      ...Object.fromEntries(r),
      plugin_id: t,
      hook_event: n,
    }));
}
function zic(e) {
  let t = {};
  for (let n of e) t[n.hook.type] = (t[n.hook.type] || 0) + 1;
  return t;
}
function otm(e, t, n) {
  let r = lc("hooks"),
    o = r ? [] : [...(CU()?.[n] ?? [])],
    s = N_(),
    i = s && !Tl() ? R7() : null;
  if (!r && !s) {
    let l = eG()?.[n];
    if (l) for (let c of l) o.push(c);
  }
  let a = r ? void 0 : U2()?.[n];
  if (a)
    for (let l of a) {
      if (s && "pluginRoot" in l && !i?.has(l.pluginId)) continue;
      o.push(l);
    }
  if (!hce() && e !== void 0) {
    let l = XMe(e, t, n).get(n);
    if (l) for (let c of l) o.push(c);
  }
  if (!hce() && e !== void 0) {
    let l = Vll(e, t, n).get(n);
    if (l) for (let c of l) o.push(c);
  }
  return o;
}
function hasHookForEvent(e, t, n) {
  let r = CU()?.[e];
  if (r && r.length > 0) return true;
  if (!N_()) {
    let s = eG()?.[e];
    if (s && s.length > 0) return true;
  }
  let o = U2()?.[e];
  if (o && o.length > 0) return true;
  if (t?.sessionHooks.get(n)?.hooks[e]) return true;
  return false;
}
async function getMatchingHooks(appState, sessionId, hookEvent, hookInput, tools) {
  try {
    let s = otm(appState, sessionId, hookEvent),
      i = void 0;
    switch (hookInput.hook_event_name) {
      case "PreToolUse":
      case "PostToolUse":
      case "PostToolUseFailure":
      case "PermissionRequest":
      case "PermissionDenied":
        i = hookInput.tool_name;
        break;
      case "UserPromptExpansion":
        i = hookInput.command_name;
        break;
      case "SessionStart":
        i = hookInput.source;
        break;
      case "Setup":
        i = hookInput.trigger;
        break;
      case "PreCompact":
      case "PostCompact":
        i = hookInput.trigger;
        break;
      case "Notification":
        i = hookInput.notification_type;
        break;
      case "SessionEnd":
        i = hookInput.reason;
        break;
      case "StopFailure":
        i = hookInput.error;
        break;
      case "SubagentStart":
        i = hookInput.agent_type;
        break;
      case "SubagentStop":
        i = hookInput.agent_type;
        break;
      case "TeammateIdle":
      case "TaskCreated":
      case "TaskCompleted":
        break;
      case "Elicitation":
        i = hookInput.mcp_server_name;
        break;
      case "ElicitationResult":
        i = hookInput.mcp_server_name;
        break;
      case "ConfigChange":
        i = hookInput.source;
        break;
      case "InstructionsLoaded":
        i = hookInput.load_reason;
        break;
      case "FileChanged":
        i = Nic.basename(hookInput.file_path);
        break;
      default:
        break;
    }
    let a = Jem.has(hookInput.hook_event_name);
    for (let x of s) etm(hookEvent, x.matcher);
    (T(`Getting matching hook commands for ${hookEvent} with query: ${i}`, {
      level: "verbose",
    }),
      T(`Found ${s.length} hook matchers in settings`, {
        level: "verbose",
      }));
    let l = appState?.toolPermissionContext.toolAliases,
      u = (i ? s.filter((x) => !x.matcher || matchesPattern(i, x.matcher, a, l)) : s).flatMap(
        (x) => {
          let I = "pluginRoot" in x ? x.pluginRoot : void 0,
            k = "pluginId" in x ? x.pluginId : void 0,
            D = "skillRoot" in x ? x.skillRoot : void 0,
            P = I
              ? "pluginName" in x
                ? `plugin:${x.pluginName}`
                : "plugin"
              : D
                ? "skillName" in x
                  ? `skill:${x.skillName}`
                  : "skill"
                : "settings",
            O = !x.matcher || x.matcher === "*" || x.matcher === ".*";
          return x.hooks.map((L) => ({
            hook: L,
            pluginRoot: I,
            pluginId: k,
            skillRoot: D,
            hookSource: P,
            matcherIsMatchAll: O,
          }));
        },
      );
    if (u.every((x) => x.hook.type === "callback" || x.hook.type === "function")) return u;
    let d = (x) => x.if ?? "",
      p = Array.from(
        new Map(
          u
            .filter((x) => x.hook.type === "command")
            .map((x) => [
              lZt(
                x,
                `${x.hook.shell ?? XWe()}\x00${x.hook.command}\x00${De(x.hook.args ?? null)}\x00${d(x.hook)}`,
              ),
              x,
            ]),
        ).values(),
      ),
      f = Array.from(
        new Map(
          u
            .filter((x) => x.hook.type === "prompt")
            .map((x) => [lZt(x, `${x.hook.prompt}\x00${d(x.hook)}`), x]),
        ).values(),
      ),
      m = Array.from(
        new Map(
          u
            .filter((x) => x.hook.type === "agent")
            .map((x) => [lZt(x, `${x.hook.prompt}\x00${d(x.hook)}`), x]),
        ).values(),
      ),
      g = Array.from(
        new Map(
          u
            .filter((x) => x.hook.type === "http")
            .map((x) => [lZt(x, `${x.hook.url}\x00${d(x.hook)}`), x]),
        ).values(),
      ),
      h = Array.from(
        new Map(
          u
            .filter((x) => x.hook.type === "mcp_tool")
            .map((x) => {
              let I = x.hook;
              return [lZt(x, `${I.server}\x00${I.tool}\x00${De(I.input ?? {})}\x00${d(I)}`), x];
            }),
        ).values(),
      ),
      y = u.filter((x) => x.hook.type === "callback"),
      b = u.filter((x) => x.hook.type === "function"),
      _ = [...p, ...f, ...m, ...g, ...h, ...y, ...b],
      A = _.some(
        (x) =>
          (x.hook.type === "command" ||
            x.hook.type === "prompt" ||
            x.hook.type === "agent" ||
            x.hook.type === "http" ||
            x.hook.type === "mcp_tool") &&
          x.hook.if,
      )
        ? await ntm(hookInput, tools)
        : void 0,
      v = _.filter((x) => {
        if (
          x.hook.type !== "command" &&
          x.hook.type !== "prompt" &&
          x.hook.type !== "agent" &&
          x.hook.type !== "http" &&
          x.hook.type !== "mcp_tool"
        )
          return true;
        let I = x.hook.if;
        if (!I) return true;
        if (!A)
          return (
            T(
              `Hook if condition "${I}" cannot be evaluated for non-tool event ${hookInput.hook_event_name}`,
            ),
            false
          );
        if (A(I)) return true;
        return (T(`Skipping hook due to if condition "${I}" not matching`), false);
      }),
      C =
        hookEvent === "SessionStart" || hookEvent === "Setup"
          ? v.filter((x) => {
              if (x.hook.type === "http")
                return (
                  T(
                    `Skipping HTTP hook ${x.hook.url} \u2014 HTTP hooks are not supported for ${hookEvent}`,
                  ),
                  false
                );
              return true;
            })
          : v;
    return (
      T(
        `Matched ${C.length} unique hooks for query "${i || "no match query"}" (${u.length} before deduplication)`,
        {
          level: "verbose",
        },
      ),
      C
    );
  } catch {
    return [];
  }
}
function getPreToolHookBlockingMessage(hookName, blockingError) {
  return `${hookName} hook error: ${blockingError.blockingError}`;
}
function getStopHookMessage(blockingError) {
  return `Stop hook feedback:
${blockingError.blockingError}`;
}
function getTeammateIdleHookMessage(blockingError) {
  return `TeammateIdle hook feedback:
${blockingError.blockingError}`;
}
function getTaskCreatedHookMessage(blockingError) {
  return `TaskCreated hook feedback:
${blockingError.blockingError}`;
}
function getTaskCompletedHookMessage(blockingError) {
  return `TaskCompleted hook feedback:
${blockingError.blockingError}`;
}
function getUserPromptSubmitHookBlockingMessage(blockingError) {
  return `UserPromptSubmit operation blocked by hook:
${blockingError.blockingError}`;
}
async function* executeHooks({
  hookInput: hookInput,
  extendedHookInput: t,
  toolUseID: n,
  matchQuery: r,
  signal: o,
  timeoutMs: s = lp,
  toolUseContext: i,
  getAppState: a,
  messages: l,
  forceSyncExecution: c,
  suppressPerInvocationTelemetry: u,
}) {
  if (Mj()) return;
  let d = hookInput.hook_event_name,
    p = r ? `${d}:${r}` : d;
  if (shouldSkipHookDueToTrust()) {
    T(`Skipping ${p} hook execution - workspace trust not accepted`);
    return;
  }
  let f = i ? i.getAppState() : a?.(),
    m = i?.agentId ?? Rt(),
    matchingHooks = await getMatchingHooks(f, m, d, hookInput, i?.options?.tools);
  if (matchingHooks.length === 0) return;
  if (o?.aborted) return;
  let userHooks = matchingHooks.filter(($) => !Wic($));
  if (userHooks.length > 0) {
    if (!u) {
      let $ = getPluginHookCounts(userHooks),
        q = zic(userHooks),
        W = On(userHooks, (V) => V.matcherIsMatchAll);
      G("tengu_run_hook", {
        hookName: p,
        numCommands: userHooks.length,
        numMatchAllMatchers: W,
        numSpecificMatchers: userHooks.length - W,
        hookTypeCounts: De(q),
        ...($ && {
          pluginHookCounts: De($),
        }),
      });
    }
  } else {
    let $ = Date.now(),
      q = i
        ? {
            getAppState: i.getAppState,
            applyAttributionOp: i.applyAttributionOp,
          }
        : void 0;
    for (let [V, { hook: Y }] of matchingHooks.entries())
      if (Y.type === "callback") await Y.callback(hookInput, n, o, V, q);
    let W = Date.now() - $;
    (Kve()?.observe("hook_duration_ms", W),
      G("tengu_repl_hook_finished", {
        hookName: p,
        numCommands: matchingHooks.length,
        numSuccess: matchingHooks.length,
        numBlocking: 0,
        numNonBlockingError: 0,
        numCancelled: 0,
        totalDurationMs: W,
      }));
    return;
  }
  let y = mC() && sg(),
    b = y || ude() ? De(getHookDefinitionsForTelemetry(matchingHooks)) : "[]",
    _ = getTelemetryHookName(d, r);
  if (!u)
    Jc("hook_execution_start", {
      hook_event: d,
      hook_name: _,
      num_hooks: String(matchingHooks.length),
      managed_only: String(hce()),
      hook_source: hce() ? "policySettings" : "merged",
      safe_mode: String(Tl()),
      ...(y && {
        hook_definitions: b,
      }),
    });
  let S = u ? void 0 : pka(d, _, matchingHooks.length, b);
  for (let { hook: $ } of matchingHooks)
    yield {
      message: {
        type: "progress",
        data: {
          type: "hook_progress",
          hookEvent: d,
          hookName: p,
          command: o2($),
          ...($.type === "prompt" && {
            promptText: $.prompt,
          }),
          ...("statusMessage" in $ &&
            $.statusMessage != null && {
              statusMessage: $.statusMessage,
            }),
        },
        parentToolUseID: n,
        toolUseID: n,
        timestamp: new Date().toISOString(),
        uuid: qYe.randomUUID(),
      },
    };
  let A = Date.now(),
    v,
    C;
  function x($) {
    if (v !== void 0) return v;
    try {
      return (v = {
        ok: true,
        value: De(hookInput),
      });
    } catch (q) {
      return (
        ke(
          Error(`Failed to stringify hook ${p} input`, {
            cause: q,
          }),
        ),
        (v = {
          ok: false,
          error: q,
        })
      );
    }
  }
  let I = matchingHooks.map(async function* (
      { hook: $, pluginRoot: q, pluginId: W, skillRoot: V },
      Y,
    ) {
      if ($.type === "callback") {
        let ee = $.timeout ? $.timeout * 1000 : s,
          { signal: ce, cleanup: ae } = xL(o, {
            timeoutMs: ee,
          });
        yield executeHookCallback({
          toolUseID: n,
          hook: $,
          hookEvent: d,
          hookInput: hookInput,
          signal: ce,
          hookIndex: Y,
          toolUseContext: i,
        }).finally(ae);
        return;
      }
      if ($.type === "function") {
        if (!l) {
          yield {
            message: ai({
              type: "hook_error_during_execution",
              hookName: p,
              toolUseID: n,
              hookEvent: d,
              content: "Messages not provided for function hook",
            }),
            outcome: "non_blocking_error",
            hook: $,
          };
          return;
        }
        yield executeFunctionHook({
          hook: $,
          messages: l,
          hookName: p,
          toolUseID: n,
          hookEvent: d,
          timeoutMs: s,
          signal: o,
        });
        return;
      }
      let z = $.timeout ? $.timeout * 1000 : s,
        { signal: K, cleanup: Z } = xL(o, {
          timeoutMs: z,
        }),
        J = qYe.randomUUID(),
        ne = Date.now(),
        oe = o2($),
        re = eTe($);
      try {
        let ee = x(W);
        if (!ee.ok) {
          (yield {
            message: ai({
              type: "hook_error_during_execution",
              hookName: p,
              toolUseID: n,
              hookEvent: d,
              content: `Failed to prepare hook input: ${be(ee.error)}`,
              command: oe,
              durationMs: Date.now() - ne,
            }),
            outcome: "non_blocking_error",
            hook: $,
          },
            Z());
          return;
        }
        let ce = ee.value;
        if ($.type === "prompt") {
          if (!i)
            throw Error(
              `prompt-type hooks are not supported for ${d} events (no conversation context is available). Use a command-type hook instead.`,
            );
          if (i.agentId?.startsWith(Rlr)) {
            (Z(),
              yield {
                message: ai({
                  type: "hook_cancelled",
                  hookName: p,
                  toolUseID: n,
                  hookEvent: d,
                }),
                outcome: "cancelled",
                hook: $,
              });
            return;
          }
          let ge = await cic($, p, d, ce, K, i, l, n);
          if (ge.message?.type === "attachment") {
            let he = ge.message.attachment;
            if (he.type === "hook_success" || he.type === "hook_non_blocking_error")
              ((he.command = oe), (he.durationMs = Date.now() - ne));
          }
          (yield ge, Z?.());
          return;
        }
        if ($.type === "agent") {
          if (!i)
            throw Error(
              `agent-type hooks are not supported for ${d} events (no conversation context is available). Use a command-type hook instead.`,
            );
          if (i.agentId?.startsWith(Rlr)) {
            (Z(),
              yield {
                message: ai({
                  type: "hook_cancelled",
                  hookName: p,
                  toolUseID: n,
                  hookEvent: d,
                }),
                outcome: "cancelled",
                hook: $,
              });
            return;
          }
          let ge = await pic(
            $,
            p,
            d,
            ce,
            K,
            i,
            n,
            "agent_type" in hookInput ? hookInput.agent_type : void 0,
          );
          if (ge.message?.type === "attachment") {
            let he = ge.message.attachment;
            if (he.type === "hook_success" || he.type === "hook_non_blocking_error")
              ((he.command = oe), (he.durationMs = Date.now() - ne));
          }
          (yield ge, Z?.());
          return;
        }
        if ($.type === "http") {
          LZn(J, p, d);
          let ge = await $5o($, d, ce, o, s);
          if ((Z?.(), ge.aborted)) {
            (Ok({
              hookId: J,
              hookName: p,
              hookEvent: d,
              output: "Hook cancelled",
              stdout: "",
              stderr: "",
              exitCode: void 0,
              outcome: "cancelled",
            }),
              yield {
                message: ai({
                  type: "hook_cancelled",
                  hookName: p,
                  toolUseID: n,
                  hookEvent: d,
                }),
                outcome: "cancelled",
                hook: $,
              });
            return;
          }
          if (ge.error || !ge.ok) {
            let le = ge.error || `HTTP ${ge.statusCode} from ${$.url}`;
            (Ok({
              hookId: J,
              hookName: p,
              hookEvent: d,
              output: le,
              stdout: "",
              stderr: le,
              exitCode: ge.statusCode,
              outcome: "error",
            }),
              yield {
                message: ai({
                  type: "hook_non_blocking_error",
                  hookName: p,
                  toolUseID: n,
                  hookEvent: d,
                  stderr: le,
                  stdout: "",
                  exitCode: ge.statusCode ?? 0,
                }),
                outcome: "non_blocking_error",
                hook: $,
              });
            return;
          }
          let { json: he, validationError: ie } = parseHttpHookOutput(ge.body);
          if (ie) {
            (Ok({
              hookId: J,
              hookName: p,
              hookEvent: d,
              output: ge.body,
              stdout: ge.body,
              stderr: ie,
              exitCode: ge.statusCode,
              outcome: "error",
            }),
              yield {
                message: ai({
                  type: "hook_non_blocking_error",
                  hookName: p,
                  toolUseID: n,
                  hookEvent: d,
                  stderr: ie,
                  stdout: ge.body,
                  exitCode: ge.statusCode ?? 0,
                }),
                outcome: "non_blocking_error",
                hook: $,
              });
            return;
          }
          if (he && vme(he)) {
            (Ok({
              hookId: J,
              hookName: p,
              hookEvent: d,
              output: ge.body,
              stdout: ge.body,
              stderr: "",
              exitCode: ge.statusCode,
              outcome: "success",
            }),
              yield {
                outcome: "success",
                hook: $,
              });
            return;
          }
          if (he) {
            let le = processHookJSONOutput({
              json: he,
              command: $.url,
              hookName: p,
              toolUseID: n,
              hookEvent: d,
              expectedHookEvent: d,
              stdout: ge.body,
              stderr: "",
              exitCode: ge.statusCode,
            });
            (emitHookMetrics(he.metrics, W, d),
              Ok({
                hookId: J,
                hookName: p,
                hookEvent: d,
                output: ge.body,
                stdout: ge.body,
                stderr: "",
                exitCode: ge.statusCode,
                outcome: "success",
              }),
              yield {
                ...le,
                outcome: "success",
                hook: $,
              });
            return;
          }
          return;
        }
        if ($.type === "mcp_tool") {
          LZn(J, p, d);
          let ge = await O5o($, d, hookInput, i?.options.mcpClients, o, s);
          if ((Z?.(), ge.aborted)) {
            (Ok({
              hookId: J,
              hookName: p,
              hookEvent: d,
              output: "Hook cancelled",
              stdout: "",
              stderr: "",
              exitCode: void 0,
              outcome: "cancelled",
            }),
              yield {
                message: ai({
                  type: "hook_cancelled",
                  hookName: p,
                  toolUseID: n,
                  hookEvent: d,
                }),
                outcome: "cancelled",
                hook: $,
              });
            return;
          }
          if (ge.error || !ge.ok) {
            let le = ge.error || "MCP tool returned an error";
            (Ok({
              hookId: J,
              hookName: p,
              hookEvent: d,
              output: le,
              stdout: ge.body,
              stderr: le,
              exitCode: 1,
              outcome: "error",
            }),
              yield {
                message: ai({
                  type: "hook_non_blocking_error",
                  hookName: p,
                  toolUseID: n,
                  hookEvent: d,
                  stderr: le,
                  stdout: ge.body,
                  exitCode: 1,
                }),
                outcome: "non_blocking_error",
                hook: $,
              });
            return;
          }
          let { json: he, validationError: ie } = parseHookOutput(ge.body);
          if (ie) {
            (Ok({
              hookId: J,
              hookName: p,
              hookEvent: d,
              output: ge.body,
              stdout: ge.body,
              stderr: ie,
              exitCode: 1,
              outcome: "error",
            }),
              yield {
                message: ai({
                  type: "hook_non_blocking_error",
                  hookName: p,
                  toolUseID: n,
                  hookEvent: d,
                  stderr: ie,
                  stdout: ge.body,
                  exitCode: 1,
                }),
                outcome: "non_blocking_error",
                hook: $,
              });
            return;
          }
          if (
            (Ok({
              hookId: J,
              hookName: p,
              hookEvent: d,
              output: ge.body,
              stdout: ge.body,
              stderr: "",
              exitCode: 0,
              outcome: "success",
            }),
            he && eO(he))
          ) {
            let le = processHookJSONOutput({
              json: he,
              command: oe,
              hookName: p,
              toolUseID: n,
              hookEvent: d,
              expectedHookEvent: d,
              stdout: ge.body,
              stderr: "",
              exitCode: 0,
            });
            (emitHookMetrics(he.metrics, W, d),
              yield {
                ...le,
                outcome: "success",
                hook: $,
              });
            return;
          }
          yield {
            message: ai({
              type: "hook_success",
              hookName: p,
              toolUseID: n,
              hookEvent: d,
              content: `${wt.bold(p)} completed`,
              stdout: ge.body,
              stderr: "",
              command: oe,
              durationMs: Date.now() - ne,
            }),
            outcome: "success",
            hook: $,
          };
          return;
        }
        LZn(J, p, d);
        let ae = await execCommandHook($, d, p, ce, Wqe(hookInput), K, J, Y, q, W, V, c);
        Z?.();
        let de = Date.now() - ne;
        if (ae.backgrounded) {
          yield {
            outcome: "success",
            hook: $,
          };
          return;
        }
        if (ae.aborted) {
          (Ok({
            hookId: J,
            hookName: p,
            hookEvent: d,
            output: ae.output,
            stdout: ae.stdout,
            stderr: ae.stderr,
            exitCode: ae.status,
            outcome: "cancelled",
          }),
            yield {
              message: ai({
                type: "hook_cancelled",
                hookName: p,
                toolUseID: n,
                hookEvent: d,
                command: oe,
                durationMs: de,
              }),
              outcome: "cancelled",
              hook: $,
            });
          return;
        }
        let { json: Ee, plainText: me, validationError: pe } = parseHookOutput(ae.stdout);
        if (pe) {
          (Ok({
            hookId: J,
            hookName: p,
            hookEvent: d,
            output: ae.output,
            stdout: ae.stdout,
            stderr: pe,
            exitCode: 1,
            outcome: "error",
          }),
            yield {
              message: ai({
                type: "hook_non_blocking_error",
                hookName: p,
                toolUseID: n,
                hookEvent: d,
                stderr: pe,
                stdout: ae.stdout,
                exitCode: 1,
                command: oe,
                durationMs: de,
              }),
              outcome: "non_blocking_error",
              hook: $,
            });
          return;
        }
        if (Ee) {
          if (vme(Ee)) {
            yield {
              outcome: "success",
              hook: $,
            };
            return;
          }
          let ge = processHookJSONOutput({
            json: Ee,
            command: oe,
            hookName: p,
            toolUseID: n,
            hookEvent: d,
            expectedHookEvent: d,
            stdout: ae.stdout,
            stderr: ae.stderr,
            exitCode: ae.status,
            durationMs: de,
          });
          if (
            (emitHookMetrics(Ee.metrics, W, d),
            eO(Ee) && !Ee.suppressOutput && me && ae.status === 0)
          ) {
            let he = `${wt.bold(p)} completed`;
            (Ok({
              hookId: J,
              hookName: p,
              hookEvent: d,
              output: ae.output,
              stdout: ae.stdout,
              stderr: ae.stderr,
              exitCode: ae.status,
              outcome: "success",
            }),
              yield {
                ...ge,
                message:
                  ge.message ||
                  ai({
                    type: "hook_success",
                    hookName: p,
                    toolUseID: n,
                    hookEvent: d,
                    content: he,
                    stdout: ae.stdout,
                    stderr: ae.stderr,
                    exitCode: ae.status,
                    command: oe,
                    durationMs: de,
                  }),
                outcome: "success",
                hook: $,
              });
            return;
          }
          if (ae.status === 2 && !ge.blockingError)
            ge.blockingError = {
              blockingError: `[${re}]: ${ae.stderr || "No stderr output"}`,
              command: re,
            };
          (Ok({
            hookId: J,
            hookName: p,
            hookEvent: d,
            output: ae.output,
            stdout: ae.stdout,
            stderr: ae.stderr,
            exitCode: ae.status,
            outcome: ae.status === 0 ? "success" : "error",
          }),
            yield {
              ...ge,
              outcome: ge.blockingError ? "blocking" : "success",
              hook: $,
            });
          return;
        }
        if (ae.status === 0) {
          Ok({
            hookId: J,
            hookName: p,
            hookEvent: d,
            output: ae.output,
            stdout: ae.stdout,
            stderr: ae.stderr,
            exitCode: ae.status,
            outcome: "success",
          });
          let ge = await persistHookOutput(ae.stdout.trim(), J, "stdout");
          yield {
            message: ai({
              type: "hook_success",
              hookName: p,
              toolUseID: n,
              hookEvent: d,
              content: ge,
              stdout: ae.stdout,
              stderr: ae.stderr,
              exitCode: ae.status,
              command: oe,
              durationMs: de,
            }),
            outcome: "success",
            hook: $,
          };
          return;
        }
        if (
          ae.status === 2 &&
          (d === "Stop" ||
            d === "SubagentStop" ||
            d === "TaskCompleted" ||
            d === "TeammateIdle" ||
            (W && d === "UserPromptSubmit")) &&
          !ae.stdout.trim() &&
          /no such file|can't open/i.test(ae.stderr)
        ) {
          (Ok({
            hookId: J,
            hookName: p,
            hookEvent: d,
            output: ae.output,
            stdout: ae.stdout,
            stderr: ae.stderr,
            exitCode: ae.status,
            outcome: "error",
          }),
            yield {
              message: ai({
                type: "hook_non_blocking_error",
                hookName: p,
                toolUseID: n,
                hookEvent: d,
                stderr:
                  `Hook script appears to be missing \u2014 "${re}" exited 2 with: ${ae.stderr.trim()}. Treating as non-blocking. ` +
                  (W
                    ? `Run \`/plugin\` to reinstall '${W}' or remove it from settings.`
                    : "If this is a plugin hook, check the plugin install (run /plugin)."),
                stdout: ae.stdout,
                exitCode: ae.status,
                command: oe,
                durationMs: de,
              }),
              outcome: "non_blocking_error",
              hook: $,
            });
          return;
        }
        if (ae.status === 2) {
          (Ok({
            hookId: J,
            hookName: p,
            hookEvent: d,
            output: ae.output,
            stdout: ae.stdout,
            stderr: ae.stderr,
            exitCode: ae.status,
            outcome: "error",
          }),
            yield {
              blockingError: {
                blockingError: `[${re}]: ${ae.stderr || "No stderr output"}`,
                command: re,
              },
              outcome: "blocking",
              hook: $,
            });
          return;
        }
        (Ok({
          hookId: J,
          hookName: p,
          hookEvent: d,
          output: ae.output,
          stdout: ae.stdout,
          stderr: ae.stderr,
          exitCode: ae.status,
          outcome: "error",
        }),
          yield {
            message: ai({
              type: "hook_non_blocking_error",
              hookName: p,
              toolUseID: n,
              hookEvent: d,
              stderr: `Failed with non-blocking status code: ${ae.stderr.trim() || "No stderr output"}`,
              stdout: ae.stdout,
              exitCode: ae.status,
              command: oe,
              durationMs: de,
            }),
            outcome: "non_blocking_error",
            hook: $,
          });
        return;
      } catch (ee) {
        Z?.();
        let ce = ee instanceof Error ? ee.message : String(ee);
        (Ok({
          hookId: J,
          hookName: p,
          hookEvent: d,
          output: `Failed to run: ${ce}`,
          stdout: "",
          stderr: `Failed to run: ${ce}`,
          exitCode: 1,
          outcome: "error",
        }),
          yield {
            message: ai({
              type: "hook_non_blocking_error",
              hookName: p,
              toolUseID: n,
              hookEvent: d,
              stderr: `Failed to run: ${ce}`,
              stdout: "",
              exitCode: 1,
              command: oe,
              durationMs: Date.now() - ne,
            }),
            outcome: "non_blocking_error",
            hook: $,
          });
        return;
      }
    }),
    outcomes = {
      success: 0,
      blocking: 0,
      non_blocking_error: 0,
      cancelled: 0,
    },
    D = {
      additionalContextChars: 0,
      systemMessageChars: 0,
      initialUserMessageChars: 0,
      hookSuccessStdoutChars: 0,
    },
    P = new Map(matchingHooks.map(($) => [$.hook, $.pluginId])),
    O = new Map();
  function L($, q, W) {
    let V = P.get($);
    if (!V || W === 0) return;
    let Y = O.get(V);
    if (!Y)
      ((Y = {
        additionalContextChars: 0,
        systemMessageChars: 0,
        initialUserMessageChars: 0,
        hookSuccessStdoutChars: 0,
      }),
        O.set(V, Y));
    Y[q] += W;
  }
  let M = 0,
    N;
  for await (let $ of fKn(I)) {
    if (
      (outcomes[$.outcome]++,
      $.message?.type === "attachment" && $.message.attachment.type === "hook_success")
    ) {
      let W = $.message.attachment.stdout?.length ?? 0;
      ((D.hookSuccessStdoutChars += W), L($.hook, "hookSuccessStdoutChars", W));
    }
    if ($.updatedToolOutput !== void 0)
      (T(`Hook ${d} (${o2($.hook)}) replaced tool output`),
        yield {
          updatedToolOutput: $.updatedToolOutput,
        });
    if ($.updatedMCPToolOutput !== void 0 && $.updatedToolOutput === void 0)
      (T(`Hook ${d} (${o2($.hook)}) replaced tool output (updatedMCPToolOutput)`),
        yield {
          updatedMCPToolOutput: $.updatedMCPToolOutput,
        });
    if ($.displayContent !== void 0)
      yield {
        displayContent: $.displayContent,
      };
    if ($.preventContinuation)
      (T(`Hook ${d} (${o2($.hook)}) requested preventContinuation`),
        yield {
          preventContinuation: true,
          stopReason: $.stopReason,
        });
    let q =
      $.hook?.type === "prompt"
        ? {
            hook: $.hook,
            stopReason: $.stopReason,
            impossible: $.impossible,
          }
        : {};
    if ($.blockingError)
      (yield {
        blockingError: $.blockingError,
        suppressOriginalPrompt: $.suppressOriginalPrompt,
        ...q,
      },
        (N = "deny"));
    if ($.message)
      yield {
        message: $.message,
        ...q,
      };
    if ((M++, $.systemMessage)) {
      ((D.systemMessageChars += $.systemMessage.length),
        L($.hook, "systemMessageChars", $.systemMessage.length));
      let W = await persistHookOutput($.systemMessage, `${n}-${M}`, "systemMessage");
      yield {
        message: ai({
          type: "hook_system_message",
          content: W,
          hookName: p,
          toolUseID: n,
          hookEvent: d,
        }),
      };
    }
    if ($.terminalSequence) NFo($.terminalSequence);
    if ($.additionalContext)
      ((D.additionalContextChars += $.additionalContext.length),
        L($.hook, "additionalContextChars", $.additionalContext.length),
        T(
          `Hook ${d} (${o2($.hook)}) provided additionalContext (${$.additionalContext.length} chars)`,
        ),
        yield {
          additionalContexts: [
            await persistHookOutput($.additionalContext, `${n}-${M}`, "additionalContext"),
          ],
        });
    if ($.initialUserMessage)
      ((D.initialUserMessageChars += $.initialUserMessage.length),
        L($.hook, "initialUserMessageChars", $.initialUserMessage.length),
        T(
          `Hook ${d} (${o2($.hook)}) provided initialUserMessage (${$.initialUserMessage.length} chars)`,
        ),
        yield {
          initialUserMessage: await persistHookOutput(
            $.initialUserMessage,
            `${n}-${M}`,
            "initialUserMessage",
          ),
        });
    if ($.watchPaths && $.watchPaths.length > 0)
      (T(`Hook ${d} (${o2($.hook)}) provided ${$.watchPaths.length} watchPaths`),
        yield {
          watchPaths: $.watchPaths,
        });
    if ($.reloadSkills)
      (T(`Hook ${d} (${o2($.hook)}) requested reloadSkills`),
        yield {
          reloadSkills: true,
        });
    if ($.sessionTitle)
      (T(`Hook ${d} (${o2($.hook)}) provided sessionTitle (${[...$.sessionTitle].length} chars)`),
        yield {
          sessionTitle: $.sessionTitle,
        });
    if ($.permissionBehavior)
      switch (
        (T(
          `Hook ${d} (${o2($.hook)}) returned permissionDecision: ${$.permissionBehavior}${$.hookPermissionDecisionReason ? ` (reason: ${$.hookPermissionDecisionReason})` : ""}`,
        ),
        $.permissionBehavior)
      ) {
        case "deny":
          N = "deny";
          break;
        case "defer":
          if (N !== "deny") N = "defer";
          break;
        case "ask":
          if (N !== "deny" && N !== "defer") N = "ask";
          break;
        case "allow":
          if (!N) N = "allow";
          break;
        case "passthrough":
          break;
      }
    if ($.permissionBehavior && N === $.permissionBehavior) {
      let W =
        $.updatedInput && ($.permissionBehavior === "allow" || $.permissionBehavior === "ask")
          ? $.updatedInput
          : void 0;
      if (W)
        T(`Hook ${d} (${o2($.hook)}) modified tool input keys: [${Object.keys(W).join(", ")}]`);
      yield {
        permissionBehavior: N,
        hookPermissionDecisionReason: $.hookPermissionDecisionReason,
        hookSource: matchingHooks.find((V) => V.hook === $.hook)?.hookSource,
        updatedInput: W,
      };
    }
    if ($.updatedInput && $.permissionBehavior === void 0)
      (T(
        `Hook ${d} (${o2($.hook)}) modified tool input keys: [${Object.keys($.updatedInput).join(", ")}]`,
      ),
        yield {
          updatedInput: $.updatedInput,
        });
    if ($.permissionRequestResult)
      yield {
        permissionRequestResult: $.permissionRequestResult,
      };
    if ($.retry)
      yield {
        retry: $.retry,
      };
    if ($.elicitationResponse)
      yield {
        elicitationResponse: $.elicitationResponse,
      };
    if ($.elicitationResultResponse)
      yield {
        elicitationResultResponse: $.elicitationResultResponse,
      };
    if (f && $.hook.type !== "callback") {
      let W = Rt(),
        Y = zll(f, W, d, r ?? "", $.hook);
      if (Y?.onHookSuccess && $.outcome === "success")
        try {
          Y.onHookSuccess($.hook, $);
        } catch (z) {
          ke(
            Error("Session hook success callback failed", {
              cause: z,
            }),
          );
        }
    }
  }
  let B = Date.now() - A;
  for (let $ of new Set(P.values())) if ($) Zj($);
  if (!u) {
    Kve()?.observe("hook_duration_ms", B);
    for (let [$, q] of O) {
      let { name: W, marketplace: V } = Qo($);
      G("tengu_hook_plugin_injected", {
        hookName: p,
        ...x8(W, V),
        ...q,
      });
    }
    if (
      (G("tengu_repl_hook_finished", {
        hookName: p,
        numCommands: matchingHooks.length,
        numSuccess: outcomes.success,
        numBlocking: outcomes.blocking,
        numNonBlockingError: outcomes.non_blocking_error,
        numCancelled: outcomes.cancelled,
        totalDurationMs: B,
        ...D,
      }),
      Jc("hook_execution_complete", {
        hook_event: d,
        hook_name: _,
        num_hooks: String(matchingHooks.length),
        num_success: String(outcomes.success),
        num_blocking: String(outcomes.blocking),
        num_non_blocking_error: String(outcomes.non_blocking_error),
        num_cancelled: String(outcomes.cancelled),
        total_duration_ms: String(B),
        managed_only: String(hce()),
        hook_source: hce() ? "policySettings" : "merged",
        safe_mode: String(Tl()),
        ...(y && {
          hook_definitions: b,
        }),
      }),
      S)
    )
      fka(S, {
        numSuccess: outcomes.success,
        numBlocking: outcomes.blocking,
        numNonBlockingError: outcomes.non_blocking_error,
        numCancelled: outcomes.cancelled,
      });
    if (outcomes.non_blocking_error > 0) Le(EFe(d), "hook_non_blocking_error");
    else if (outcomes.cancelled > 0) It(EFe(d), "hook_cancelled");
    else xe(EFe(d));
  }
}
function Olr(e, t) {
  if (!e || !eO(e) || !e.terminalSequence) return;
  let n = OFo(e.terminalSequence);
  if (n !== null) NFo(n);
  else
    T(
      `Hook ${t} returned a terminalSequence that was rejected by the allowlist (only OSC 0/1/2/9/99/777 and BEL are permitted)`,
    );
}
function hasBlockingResult(e) {
  return e.some((t) => t.blocked);
}
async function executeHooksOutsideREPL({
  getAppState: e,
  hookInput: t,
  matchQuery: n,
  signal: r,
  timeoutMs: o = lp,
}) {
  let s = t.hook_event_name,
    i = n ? `${s}:${n}` : s;
  if (Mj()) return (T(`Skipping hooks for ${i} due to 'disableAllHooks' managed setting`), []);
  if (shouldSkipHookDueToTrust())
    return (T(`Skipping ${i} hook execution - workspace trust not accepted`), []);
  let a = e ? e() : void 0,
    l = Rt(),
    matchingHooks = await getMatchingHooks(a, l, s, t);
  if (matchingHooks.length === 0) return [];
  if (r?.aborted) return [];
  let userHooks = matchingHooks.filter((g) => !Wic(g));
  if (userHooks.length > 0) {
    let g = getPluginHookCounts(userHooks),
      h = zic(userHooks),
      y = On(userHooks, (b) => b.matcherIsMatchAll);
    G("tengu_run_hook", {
      hookName: i,
      numCommands: userHooks.length,
      numMatchAllMatchers: y,
      numSpecificMatchers: userHooks.length - y,
      hookTypeCounts: De(h),
      ...(g && {
        pluginHookCounts: De(g),
      }),
    });
  }
  let d;
  try {
    d = De(t);
  } catch (g) {
    return (ke(g), Le(EFe(s), "hook_input_stringify_failed"), []);
  }
  let p,
    f = matchingHooks.map(async ({ hook: g, pluginRoot: h, pluginId: y, skillRoot: b }, _) => {
      if (g.type === "callback") {
        let x = g.timeout ? g.timeout * 1000 : o,
          { signal: I, cleanup: k } = xL(r, {
            timeoutMs: x,
          });
        try {
          let D = qYe.randomUUID(),
            P = await g.callback(t, D, I, _);
          if ((k?.(), vme(P)))
            return (
              T(`${i} [callback] returned async response, returning empty output`),
              {
                command: "callback",
                succeeded: true,
                output: "",
                blocked: false,
              }
            );
          let O =
              s === "WorktreeCreate" &&
              eO(P) &&
              P.hookSpecificOutput?.hookEventName === "WorktreeCreate"
                ? P.hookSpecificOutput.worktreePath
                : P.systemMessage || "",
            L = eO(P) && P.decision === "block";
          return (
            Olr(P, i),
            T(`${i} [callback] completed successfully`),
            {
              command: "callback",
              succeeded: true,
              output: O,
              blocked: L,
            }
          );
        } catch (D) {
          k?.();
          let P = D instanceof Error ? D.message : String(D);
          return (
            T(`${i} [callback] failed to run: ${P}`, {
              level: "error",
            }),
            (p ??= "hook_callback_failed"),
            {
              command: "callback",
              succeeded: false,
              output: P,
              blocked: false,
            }
          );
        }
      }
      if (g.type === "prompt")
        return (
          (p ??= "hook_type_unsupported"),
          {
            command: g.prompt,
            succeeded: false,
            output: "Prompt stop hooks are not yet supported outside REPL",
            blocked: false,
          }
        );
      if (g.type === "mcp_tool") {
        let x = `${g.server}/${g.tool}`;
        try {
          let I = await O5o(g, s, t, void 0, r, o);
          if (I.aborted)
            return (
              (p ??= "hook_cancelled"),
              {
                command: x,
                succeeded: false,
                output: "Hook cancelled",
                blocked: false,
              }
            );
          if (I.error || !I.ok)
            return (
              (p ??= "hook_mcp_tool_failed"),
              {
                command: x,
                succeeded: false,
                output: I.error || "MCP tool returned an error",
                blocked: false,
              }
            );
          let { json: k, validationError: D } = parseHookOutput(I.body);
          if (D) throw Error(D);
          let P = k && eO(k) ? k : void 0,
            O = P?.decision === "block";
          if (P) emitHookMetrics(P.metrics, y, s);
          return (
            Olr(k, i),
            {
              command: x,
              succeeded: true,
              output: O ? P?.reason || "" : I.body,
              blocked: O,
              watchPaths:
                P?.hookSpecificOutput && "watchPaths" in P.hookSpecificOutput
                  ? P.hookSpecificOutput.watchPaths
                  : void 0,
              systemMessage: P?.systemMessage,
            }
          );
        } catch (I) {
          let k = I instanceof Error ? I.message : String(I);
          return (
            T(`${i} [${x}] failed to run: ${k}`, {
              level: "error",
            }),
            (p ??= "hook_mcp_exec_failed"),
            {
              command: x,
              succeeded: false,
              output: k,
              blocked: false,
            }
          );
        }
      }
      if (g.type === "agent")
        return (
          (p ??= "hook_type_unsupported"),
          {
            command: g.prompt,
            succeeded: false,
            output: "Agent stop hooks are not yet supported outside REPL",
            blocked: false,
          }
        );
      if (g.type === "function")
        return (
          ke(
            Error(
              `Function hook reached executeHooksOutsideREPL for ${s}. Function hooks should only be used in REPL context (Stop hooks).`,
            ),
          ),
          (p ??= "hook_type_unsupported"),
          {
            command: "function",
            succeeded: false,
            output: "Internal error: function hook executed outside REPL context",
            blocked: false,
          }
        );
      if (g.type === "http")
        try {
          let x = await $5o(g, s, d, r, o);
          if (x.aborted)
            return (
              T(`${i} [${g.url}] cancelled`),
              (p ??= "hook_cancelled"),
              {
                command: g.url,
                succeeded: false,
                output: "Hook cancelled",
                blocked: false,
              }
            );
          if (x.error || !x.ok) {
            let O = x.error || `HTTP ${x.statusCode} from ${g.url}`;
            return (
              T(`${i} [${g.url}] failed: ${O}`, {
                level: "error",
              }),
              (p ??= "hook_http_request_failed"),
              {
                command: g.url,
                succeeded: false,
                output: O,
                blocked: false,
              }
            );
          }
          let { json: I, validationError: k } = parseHttpHookOutput(x.body);
          if (k) throw Error(k);
          if (I && !vme(I))
            T(`Parsed JSON output from HTTP hook: ${De(I)}`, {
              level: "verbose",
            });
          if (I && eO(I)) emitHookMetrics(I.metrics, y, s);
          Olr(I, i);
          let D = I && eO(I) && I.decision === "block",
            P = D
              ? (I && eO(I) && I.reason) || ""
              : s === "WorktreeCreate"
                ? I && eO(I) && I.hookSpecificOutput?.hookEventName === "WorktreeCreate"
                  ? I.hookSpecificOutput.worktreePath
                  : ""
                : x.body;
          return {
            command: g.url,
            succeeded: true,
            output: P,
            blocked: !!D,
          };
        } catch (x) {
          let I = x instanceof Error ? x.message : String(x);
          return (
            T(`${i} [${g.url}] failed to run: ${I}`, {
              level: "error",
            }),
            (p ??= "hook_http_exec_failed"),
            {
              command: g.url,
              succeeded: false,
              output: I,
              blocked: false,
            }
          );
        }
      let S = g.timeout ? g.timeout * 1000 : o,
        A = eTe(g),
        { signal: v, cleanup: C } = xL(r, {
          timeoutMs: S,
        });
      try {
        let x = await execCommandHook(g, s, i, d, Wqe(t), v, qYe.randomUUID(), _, h, y, b);
        if ((C?.(), x.aborted))
          return (
            T(`${i} [${A}] cancelled`),
            (p ??= "hook_cancelled"),
            {
              command: A,
              succeeded: false,
              output: "Hook cancelled",
              blocked: false,
            }
          );
        T(`${i} [${A}] completed with status ${x.status}`);
        let { json: I, validationError: k } = parseHookOutput(x.stdout);
        if (k) throw Error(k);
        if (I && !vme(I))
          T(`Parsed JSON output from hook: ${De(I)}`, {
            level: "verbose",
          });
        if (I && eO(I)) emitHookMetrics(I.metrics, y, s);
        Olr(I, i);
        let D = I && eO(I) && I.decision === "block",
          P = x.status === 2 || !!D,
          O = D
            ? (I && eO(I) && I.reason) || x.stderr || ""
            : x.status === 0
              ? x.stdout || ""
              : x.stderr || "",
          L =
            I && eO(I) && I.hookSpecificOutput && "watchPaths" in I.hookSpecificOutput
              ? I.hookSpecificOutput.watchPaths
              : void 0,
          M = I && eO(I) ? I.systemMessage : void 0;
        if (x.status !== 0 && !P) p ??= "hook_nonzero_exit";
        return {
          command: A,
          succeeded: x.status === 0,
          output: O,
          blocked: P,
          watchPaths: L,
          systemMessage: M,
        };
      } catch (x) {
        C?.();
        let I = x instanceof Error ? x.message : String(x);
        return (
          T(`${i} [${A}] failed to run: ${I}`, {
            level: "error",
          }),
          (p ??= "hook_exec_failed"),
          {
            command: A,
            succeeded: false,
            output: I,
            blocked: false,
          }
        );
      }
    }),
    m = await Promise.all(f);
  if (p) Le(EFe(s), p);
  else xe(EFe(s));
  for (let g of new Set(matchingHooks.map((h) => h.pluginId))) if (g) Zj(g);
  return m;
}
function hasInstructionsLoadedHook() {
  let e = CU()?.InstructionsLoaded;
  if (e && e.length > 0) return true;
  if (!N_()) {
    let n = eG()?.InstructionsLoaded;
    if (n && n.length > 0) return true;
  }
  let t = U2()?.InstructionsLoaded;
  if (t && t.length > 0) return true;
  return false;
}
function parseElicitationHookOutput(result, expectedEventName) {
  if (result.blocked && !result.succeeded)
    return {
      blockingError: {
        blockingError: result.output || "Elicitation blocked by hook",
        command: result.command,
      },
    };
  if (!result.output.trim()) return {};
  let n = result.output.trim();
  if (!n.startsWith("{")) return {};
  try {
    let r = XHt().parse(Ft(n));
    if (vme(r)) return {};
    if (!eO(r)) return {};
    if (r.decision === "block" || result.blocked)
      return {
        blockingError: {
          blockingError: r.reason || "Elicitation blocked by hook",
          command: result.command,
        },
      };
    let o = r.hookSpecificOutput;
    if (!o || o.hookEventName !== expectedEventName) return {};
    if (!o.action) return {};
    let i = {
      response: {
        action: o.action,
        content: o.content,
      },
    };
    if (o.action === "decline")
      i.blockingError = {
        blockingError:
          r.reason ||
          (expectedEventName === "Elicitation"
            ? "Elicitation denied by hook"
            : "Elicitation result blocked by hook"),
        command: result.command,
      };
    return i;
  } catch {
    return {};
  }
}
async function executeStatusLineCommand(statusLineInput, signal, n = 5000, r = false) {
  if (Mj()) return;
  if (lc("statusLine")) return;
  if (shouldSkipHookDueToTrust()) {
    T("Skipping StatusLine command execution - workspace trust not accepted");
    return;
  }
  let statusLine = nKe(jo()?.statusLine);
  if (!statusLine || statusLine.type !== "command") return;
  let s = signal || AbortSignal.timeout(n);
  try {
    let i = De(statusLineInput),
      a = await execCommandHook(
        statusLine,
        "StatusLine",
        "statusLine",
        i,
        Wqe(statusLineInput),
        s,
        qYe.randomUUID(),
      );
    if (a.aborted) return;
    let l = a.stderr.trim();
    if (l) T(`StatusLine [${statusLine.command}] stderr: ${l}`);
    if (a.status === 0) {
      let c = a.stdout
        .trim()
        .split(
          `
`,
        )
        .flatMap((u) => u.trim() || []).join(`
`);
      if (c) {
        if (r) T(`StatusLine [${statusLine.command}] completed with status ${a.status}`);
        return c;
      }
    } else if (r)
      T(`StatusLine [${statusLine.command}] completed with status ${a.status}`, {
        level: "warn",
      });
    return;
  } catch (i) {
    T(`Status hook failed: ${i}`, {
      level: "error",
    });
    return;
  }
}
async function executeFileSuggestionCommand(fileSuggestionInput, signal, n = 5000) {
  if (Mj()) return [];
  if (lc("fileSuggestion")) return [];
  if (shouldSkipHookDueToTrust())
    return (T("Skipping FileSuggestion command execution - workspace trust not accepted"), []);
  let fileSuggestion = Fer(jo()?.fileSuggestion);
  if (!fileSuggestion || fileSuggestion.type !== "command") return [];
  let o = signal || AbortSignal.timeout(n);
  try {
    let s = De(fileSuggestionInput),
      i = {
        type: "command",
        command: fileSuggestion.command,
      },
      a = await execCommandHook(
        i,
        "FileSuggestion",
        "FileSuggestion",
        s,
        Wqe(fileSuggestionInput),
        o,
        qYe.randomUUID(),
      );
    if (a.aborted || a.status !== 0) return [];
    return a.stdout
      .split(
        `
`,
      )
      .map((l) => l.trim())
      .filter(Boolean);
  } catch (s) {
    return (
      T(`File suggestion helper failed: ${s}`, {
        level: "error",
      }),
      []
    );
  }
}
async function executeFunctionHook({
  hook: hook,
  messages: t,
  hookName: n,
  toolUseID: r,
  hookEvent: o,
  timeoutMs: s,
  signal: i,
}) {
  let a = hook.timeout ?? s,
    { signal: abortSignal, cleanup: c } = xL(i, {
      timeoutMs: a,
    });
  try {
    if (abortSignal.aborted)
      return (
        c(),
        {
          outcome: "cancelled",
          hook: hook,
        }
      );
    let u = await new Promise((d, p) => {
      let f = () => p(Error("Function hook cancelled"));
      (abortSignal.addEventListener("abort", f),
        Promise.resolve(hook.callback(t, abortSignal))
          .then((m) => {
            (abortSignal.removeEventListener("abort", f), d(m));
          })
          .catch((m) => {
            (abortSignal.removeEventListener("abort", f), p(m));
          }));
    });
    if ((c(), u))
      return {
        outcome: "success",
        hook: hook,
      };
    return {
      blockingError: {
        blockingError: hook.errorMessage,
        command: "function",
      },
      outcome: "blocking",
      hook: hook,
    };
  } catch (u) {
    if (
      (c(),
      u instanceof Error && (u.message === "Function hook cancelled" || u.name === "AbortError"))
    )
      return {
        outcome: "cancelled",
        hook: hook,
      };
    return (
      ke(u),
      {
        message: ai({
          type: "hook_error_during_execution",
          hookName: n,
          toolUseID: r,
          hookEvent: o,
          content: u instanceof Error ? u.message : "Function hook execution error",
        }),
        outcome: "non_blocking_error",
        hook: hook,
      }
    );
  }
}
async function executeHookCallback({
  toolUseID: e,
  hook: t,
  hookEvent: n,
  hookInput: r,
  signal: o,
  hookIndex: s,
  toolUseContext: i,
}) {
  let a = i
      ? {
          getAppState: i.getAppState,
          applyAttributionOp: i.applyAttributionOp,
        }
      : void 0,
    l = await t.callback(r, e, o, s, a);
  if (vme(l))
    return {
      outcome: "success",
      hook: t,
    };
  return {
    ...processHookJSONOutput({
      json: l,
      command: "callback",
      hookName: `${n}:Callback`,
      toolUseID: e,
      hookEvent: n,
      expectedHookEvent: n,
      stdout: void 0,
      stderr: void 0,
      exitCode: void 0,
    }),
    outcome: "success",
    hook: t,
  };
}
function getTelemetryHookName(e, t) {
  if (!t) return e;
  if (sg()) return `${e}:${t}`;
  switch (e) {
    case "PreToolUse":
    case "PostToolUse":
    case "PostToolUseFailure":
    case "PermissionRequest":
    case "PermissionDenied":
      return `${e}:${Ui(t)}`;
    case "Elicitation":
    case "ElicitationResult":
      return `${e}:mcp_server`;
    case "SubagentStart":
      return e;
    default:
      return `${e}:${t}`;
  }
}
function getHookDefinitionsForTelemetry(matchedHooks) {
  return matchedHooks.map(({ hook: t }) => {
    if (t.type === "command")
      return {
        type: "command",
        command: eTe(t),
      };
    else if (t.type === "prompt")
      return {
        type: "prompt",
        prompt: t.prompt,
      };
    else if (t.type === "http")
      return {
        type: "http",
        command: t.url,
      };
    else if (t.type === "mcp_tool")
      return {
        type: "mcp_tool",
        command: `${t.server}/${t.tool}`,
      };
    else if (t.type === "function")
      return {
        type: "function",
        name: "function",
      };
    else if (t.type === "callback")
      return {
        type: "callback",
        name: "callback",
      };
    return {
      type: "unknown",
    };
  });
}
var Nic,
  Nlr,
  qYe,
  SESSION_END_HOOK_TIMEOUT_MS_DEFAULT = 1500,
  Kem = 60000,
  Yem,
  ASYNC_REWAKE_FLUSH_TIMEOUT_MS = 30000,
  Xem = 300,
  Jem,
  Qem,
  U5o,
  rtm = 20;
