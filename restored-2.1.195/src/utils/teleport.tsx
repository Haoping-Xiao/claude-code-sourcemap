// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CTo
// matched 2.1.88 source: src/utils/teleport.tsx
// class=modified  jaccard=0.4221  score=0.5171  fileCov=0.6967
// note: deminified; 24 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: validateSessionRepository, validateGitState, toServerErrorType, toServerErrorReason, teleportToRemoteWithErrorHandling, teleportToRemote, teleportResumeCodeSession, teleportFromSessionsAPI, subscribeRemoteSessionToPR, processMessagesForTeleportResume, pollRemoteSessionEvents, interruptRemoteSession, checkOutTeleportedSessionBranch, awaitRemoteSessionResult, archiveRemoteSession
// [unwrapped __esm module CTo] deps: utils/debug.ts, dn, services/analytics/growthbook.ts, utils/teleport/gitBundle.ts, utils/fsOperations.ts, utils/debug.ts, constants/files.ts, utils/git.ts, services/teamMemorySync/secretScanner.ts, proxy-from-env/index.js
vht = require("fs/promises");
function createTeleportResumeSystemMessage(branchError) {
  if (branchError === null) return cc("Session resumed", "suggestion");
  let t = branchError instanceof qb ? branchError.formattedMessage : branchError.message;
  return cc(`Session resumed without branch: ${t}`, "warning");
}
function createTeleportResumeUserMessage() {
  return Rn({
    content: `This session is being continued from another machine. Application state may have changed. The updated working directory is ${yr()}`,
    isMeta: !0,
  });
}
async function generateTitleAndBranch(description, signal) {
  let n = Rs(description, 75),
    r = "claude/task";
  try {
    let o = SESSION_TITLE_AND_BRANCH_PROMPT.replace("{description}", description),
      i = (
        await R$({
          systemPrompt: Sc([]),
          userPrompt: o,
          outputFormat: {
            type: "json_schema",
            schema: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                },
                branch: {
                  type: "string",
                },
              },
              required: ["title", "branch"],
              additionalProperties: !1,
            },
          },
          signal: signal,
          options: {
            querySource: "teleport_generate_title",
            agents: [],
            isNonInteractiveSession: !1,
            hasAppendSystemPrompt: !1,
            mcpTools: [],
            agentContext: of(),
          },
        })
      ).message.content[0];
    if (i?.type !== "text")
      return {
        title: n,
        branchName: "claude/task",
      };
    let a = Ia(vG(i.text), !1),
      l = H.object({
        title: H.string(),
        branch: H.string(),
      }).safeParse(a);
    if (l.success)
      return {
        title: l.data.title || n,
        branchName: l.data.branch || "claude/task",
      };
    return {
      title: n,
      branchName: "claude/task",
    };
  } catch (o) {
    return (
      T(`Error generating title and branch: ${be(o)}`, {
        level: "error",
      }),
      {
        title: n,
        branchName: "claude/task",
      }
    );
  }
}
async function validateGitState() {
  if (
    !(await YFe({
      ignoreUntracked: !0,
    }))
  )
    throw (
      G("tengu_teleport_error_git_not_clean", {}),
      new qb(
        "Git working directory is not clean. Please commit or stash your changes before using --teleport.",
        wt.red(`Error: Git working directory is not clean. Please commit or stash your changes before using --teleport.
`),
      )
    );
}
async function fetchFromOrigin(branch) {
  let t = branch ? ["fetch", "origin", `${branch}:${branch}`] : ["fetch", "origin"],
    n = R8(),
    { code: r, stderr: o } = await $n(go(), t, {
      env: n,
    });
  if (r !== 0)
    if (branch && o.includes("refspec")) {
      T(`Specific branch fetch failed, trying to fetch ref: ${branch}`);
      let { code: s, stderr: i } = await $n(go(), ["fetch", "origin", branch], {
        env: n,
      });
      if (s !== 0)
        T(`Failed to fetch from remote origin: ${i}`, {
          level: "error",
        });
    } else
      T(`Failed to fetch from remote origin: ${o}`, {
        level: "error",
      });
}
async function ensureUpstreamIsSet(branchName) {
  let { code: t } = await $n(go(), ["rev-parse", "--abbrev-ref", `${branchName}@{upstream}`]);
  if (t === 0) {
    T(`Branch '${branchName}' already has upstream set`);
    return;
  }
  let { code: n } = await $n(go(), ["rev-parse", "--verify", `origin/${branchName}`]);
  if (n === 0) {
    T(`Setting upstream for '${branchName}' to 'origin/${branchName}'`);
    let { code: r, stderr: o } = await $n(go(), [
      "branch",
      "--set-upstream-to",
      `origin/${branchName}`,
      branchName,
    ]);
    if (r !== 0) T(`Failed to set upstream for '${branchName}': ${o}`);
    else T(`Successfully set upstream for '${branchName}'`);
  } else T(`Remote branch 'origin/${branchName}' does not exist, skipping upstream setup`);
}
async function checkoutBranch(branchName) {
  let { code: t, stderr: n } = await $n(go(), ["checkout", branchName]);
  if (t !== 0) {
    T(`Local checkout failed, trying to checkout from origin: ${n}`);
    let r = await $n(go(), ["checkout", "-b", branchName, "--track", `origin/${branchName}`]);
    if (((t = r.code), (n = r.stderr), t !== 0)) {
      T(`Remote checkout with -b failed, trying without -b: ${n}`);
      let o = await $n(go(), ["checkout", "--track", `origin/${branchName}`]);
      ((t = o.code), (n = o.stderr));
    }
  }
  if (t !== 0)
    throw (
      G("tengu_teleport_error_branch_checkout_failed", {}),
      new qb(
        `Failed to checkout branch '${branchName}': ${n}`,
        wt.red(`Failed to checkout branch '${branchName}'
`),
      )
    );
  await ensureUpstreamIsSet(branchName);
}
async function getCurrentBranch() {
  let { stdout: e } = await $n(go(), ["branch", "--show-current"]);
  return e.trim();
}
function processMessagesForTeleportResume(e, t) {
  return [...n9t(e), createTeleportResumeUserMessage(), createTeleportResumeSystemMessage(t)];
}
async function checkOutTeleportedSessionBranch(branch) {
  try {
    let t = await getCurrentBranch();
    if ((T(`Current branch before teleport: '${t}'`), branch)) {
      if (!Uie(branch))
        throw new qb(
          `Invalid branch name from cloud session: ${branch}`,
          wt.red(`Invalid branch name from cloud session
`),
        );
      (T(`Switching to branch '${branch}'...`),
        await fetchFromOrigin(branch),
        await checkoutBranch(branch));
      let r = await getCurrentBranch();
      T(`Branch after checkout: '${r}'`);
    } else T("No branch specified, staying on current branch");
    return {
      branchName: await getCurrentBranch(),
      branchError: null,
    };
  } catch (t) {
    let n = await getCurrentBranch(),
      r = Zr(t);
    return {
      branchName: n,
      branchError: r,
    };
  }
}
async function validateSessionRepository(sessionData) {
  let t = await $O(),
    n = t ? `${t.owner}/${t.name}` : null,
    r = sessionData.session_context.sources.find((c) => c.type === "git_repository");
  if (!r?.url)
    return (
      T(
        n
          ? "Session has no associated repository, proceeding without validation"
          : "Session has no repo requirement and not in git directory, proceeding",
      ),
      {
        status: "no_repo_required",
      }
    );
  let o = Dae(r.url),
    s = o ? `${o.owner}/${o.name}` : zFe(r.url);
  if (!s)
    return {
      status: "no_repo_required",
    };
  if ((T(`Session is for repository: ${s}, current repo: ${n ?? "none"}`), !n))
    return {
      status: "not_in_repo",
      sessionRepo: s,
      sessionHost: o?.host,
      currentRepo: null,
    };
  let i = (c) => c.replace(/:\d+$/, ""),
    a = n.toLowerCase() === s.toLowerCase(),
    l = !t || !o || i(t.host.toLowerCase()) === i(o.host.toLowerCase());
  if (a && l)
    return {
      status: "match",
      sessionRepo: s,
      currentRepo: n,
    };
  return {
    status: "mismatch",
    sessionRepo: s,
    currentRepo: n,
    sessionHost: o?.host,
    currentHost: t?.host,
  };
}
async function teleportResumeCodeSession(sessionId, onProgress) {
  if (!Jl())
    throw Error("Cloud sessions are only available on the first-party Anthropic API provider.");
  let n = dW("allow_remote_sessions", "Cloud sessions", "are");
  if (n) throw new mi(n, "allow_remote_sessions policy denied");
  T(`Resuming code session ID: ${sessionId}`);
  try {
    let r = Ws()?.accessToken;
    if (!r)
      throw (
        G("tengu_teleport_resume_error", {
          error_type: We("no_access_token"),
        }),
        Error(
          "Claude Code web sessions require authentication with a Claude.ai account. API key authentication is not sufficient. Please run /login to authenticate, or check your authentication status with /status.",
        )
      );
    let o = await yj();
    if (!o)
      throw (
        G("tengu_teleport_resume_error", {
          error_type: We("no_org_uuid"),
        }),
        Error("Unable to get organization UUID for constructing session URL")
      );
    onProgress?.("validating");
    let s = await b_e(sessionId),
      i = await validateSessionRepository(s);
    switch (i.status) {
      case "match":
      case "no_repo_required":
        break;
      case "not_in_repo": {
        G("tengu_teleport_error_repo_not_in_git_dir_sessions_api", {
          sessionId: Hr(sessionId),
        });
        let a =
          i.sessionHost && !$m(i.sessionHost) ? `${i.sessionHost}/${i.sessionRepo}` : i.sessionRepo;
        throw new qb(
          `You must run claude --teleport ${sessionId} from a checkout of ${a}.`,
          wt.red(`You must run claude --teleport ${sessionId} from a checkout of ${wt.bold(a)}.
`),
        );
      }
      case "mismatch": {
        G("tengu_teleport_error_repo_mismatch_sessions_api", {
          sessionId: Hr(sessionId),
        });
        let a =
            i.sessionHost &&
            i.currentHost &&
            i.sessionHost.replace(/:\d+$/, "").toLowerCase() !==
              i.currentHost.replace(/:\d+$/, "").toLowerCase(),
          l = a ? `${i.sessionHost}/${i.sessionRepo}` : i.sessionRepo,
          c = a ? `${i.currentHost}/${i.currentRepo}` : i.currentRepo;
        throw new qb(
          `You must run claude --teleport ${sessionId} from a checkout of ${l}.
This repo is ${c}.`,
          wt.red(`You must run claude --teleport ${sessionId} from a checkout of ${wt.bold(l)}.
This repo is ${wt.bold(c)}.
`),
        );
      }
      case "error":
        throw new qb(
          i.errorMessage || "Failed to validate session repository",
          wt.red(`Error: ${i.errorMessage || "Failed to validate session repository"}
`),
        );
      default: {
        let a = i.status;
        throw Error(`Unhandled repo validation status: ${a}`);
      }
    }
    return await teleportFromSessionsAPI(sessionId, o, r, onProgress, s);
  } catch (r) {
    if (r instanceof qb) throw r;
    let o = Zr(r);
    throw (
      T(`Failed to resume teleport session ${sessionId}: ${o.message}`, {
        level: "error",
      }),
      G("tengu_teleport_resume_error", {
        error_type: We("resume_session_id_catch"),
      }),
      new qb(
        o.message,
        wt.red(`Error: ${o.message}
`),
      )
    );
  }
}
async function handleTeleportPrerequisites(root, errorsToIgnore) {
  let n = vZa(await oTo(), errorsToIgnore);
  if (n.size > 0)
    (G("tengu_teleport_errors_detected", {
      error_types: Array.from(n).join(","),
      errors_ignored: Array.from(errorsToIgnore).join(","),
    }),
      await new Promise((r) => {
        root.render(
          H8n.jsx(AH, {
            children: H8n.jsx(TT, {
              children: H8n.jsx(c8n, {
                errorsToIgnore: errorsToIgnore,
                onComplete: () => {
                  (G("tengu_teleport_errors_resolved", {
                    error_types: Array.from(n).join(","),
                  }),
                    r());
                },
              }),
            }),
          }),
        );
      }));
}
function FZa(e, t, n, r) {
  if (
    (G("tengu_ccr_session_link", {
      ccr_session_id: e,
      source: $e(t),
      create_endpoint: $e(r.endpoint),
      grouped: r.grouped,
    }),
    n.project && !Lg().hasUsedRemoteSession)
  )
    pH((o) =>
      o.hasUsedRemoteSession
        ? o
        : {
            ...o,
            hasUsedRemoteSession: !0,
          },
    );
  if (n.global && !Dt().hasRemoteEnvironment)
    gn((o) =>
      o.hasRemoteEnvironment
        ? o
        : {
            ...o,
            hasRemoteEnvironment: !0,
          },
    );
}
function toServerErrorType(e) {
  if (typeof e !== "string" || e === "") return;
  switch (e) {
    case "authentication_error":
    case "invalid_request_error":
    case "permission_error":
    case "api_error":
    case "not_found_error":
    case "rate_limit_error":
    case "billing_error":
    case "overloaded_error":
    case "request_too_large":
      return e;
    default:
      return "other";
  }
}
function toServerErrorReason(e) {
  if (typeof e !== "string" || e === "") return;
  switch (e) {
    case "github_repo_access_denied":
    case "environment_not_found":
    case "monorepo_source_required":
    case "monorepo_env_required":
    case "model_not_available_for_org":
    case "invalid_set_model_request":
    case "org_storage_quota_exceeded":
    case "feature_disabled":
    case "invalid_id":
    case "public_grouping_hosted_only":
    case "public_grouping_requires_agent":
    case "public_grouping_default_agent_deleted":
    case "public_grouping_default_agent_invalid":
      return e;
    default:
      return "other";
  }
}
async function teleportToRemoteWithErrorHandling(root, description) {
  await handleTeleportPrerequisites(root, new Set(["needsGitStash"]));
  let r,
    o,
    s,
    i = await teleportToRemote({
      initialMessage: description.description,
      initialMessageUuid: description.descriptionUuid,
      signal: description.signal,
      source: description.source,
      branchName: description.branchName,
      explicitRef: description.explicitRef,
      permissionMode: description.permissionMode,
      environmentVariables: description.environmentVariables,
      poolId: description.poolId,
      sessionGroupingId: description.sessionGroupingId,
      allowBundle: !0,
      onBundleFail: (a, l) => {
        switch (l) {
          case "env_create":
            r = "env_create_failed";
            break;
          case "bundle":
            r = "bundle_failed";
            break;
          default: {
            let c = l;
          }
        }
        ((o = a),
          process.stderr.write(`
${a}
`));
      },
      onCreateFail: (a, l, c) => {
        ((r = l),
          (o = a),
          (s = c),
          process.stderr.write(`
${a}
`));
      },
    });
  if (i)
    return {
      ok: !0,
      session: i,
    };
  return {
    ok: !1,
    failReason: r ?? (description.signal.aborted ? "aborted" : "unknown"),
    failMessage: o,
    failDetail: s,
  };
}
async function teleportFromSessionsAPI(sessionId, orgUUID, accessToken, onProgress, sessionData) {
  let s = Date.now();
  try {
    (T(`[teleport] Starting fetch for session: ${sessionId}`), onProgress?.("fetching_logs"));
    let i = Date.now(),
      a;
    if (cMe()) {
      let { readStoredTrustedDeviceToken: p } = await Promise.resolve().then(() => (SJ(), Qjn));
      a = await p();
    }
    let l = await NQa(sessionId, accessToken, orgUUID, a);
    if (l === null)
      (T("[teleport] v2 endpoint returned null, trying session-ingress"),
        (l = await OQa(sessionId, accessToken, orgUUID)));
    if ((T(`[teleport] Session logs fetched in ${Date.now() - i}ms`), l === null))
      throw Error("Failed to fetch session logs");
    let c = Date.now(),
      u = l.filter((p) => J5(p) && !p.isSidechain);
    (T(`[teleport] Filtered ${l.length} entries to ${u.length} messages in ${Date.now() - c}ms`),
      onProgress?.("fetching_branch"));
    let d = sessionData ? lkn(sessionData) : void 0;
    if (d) T(`[teleport] Found branch: ${d}`);
    return (
      T(`[teleport] Total teleportFromSessionsAPI time: ${Date.now() - s}ms`),
      {
        log: u,
        branch: d,
      }
    );
  } catch (i) {
    if (i instanceof qb) throw i;
    let a = Zr(i);
    if (po.isAxiosError(i) && i.response?.status === 404)
      throw (
        G("tengu_teleport_error_session_not_found_404", {
          sessionId: Hr(sessionId),
        }),
        new qb(
          `${sessionId} not found.
Run /status in Claude Code to check your account.`,
          `${sessionId} not found.
${wt.dim("Run /status in Claude Code to check your account.")}`,
        )
      );
    throw (
      ke(Rh(Zr(a), "Failed to fetch session from Sessions API")),
      Error(`Failed to fetch session from Sessions API: ${a.message}`)
    );
  }
}
function v8n() {
  return (
    Ws()?.accessToken ??
    (ut(process.env.CLAUDE_CODE_REMOTE)
      ? process.env.CLAUDE_CODE_OAUTH_TOKEN || b9() || void 0
      : void 0)
  );
}
async function pollRemoteSessionEvents(sessionId, t = null, opts) {
  if (!Jl())
    throw Error("Cloud sessions are only available on the first-party Anthropic API provider.");
  await ch();
  let r = v8n();
  if (!r) throw Error("No access token for polling");
  let o = aH(r),
    s = `${$s().BASE_API_URL}/v1/code/sessions/${sessionId}/events`,
    i = 50,
    a = [],
    l = t;
  for (let p = 0; p < i; p++) {
    let f = await akn(s, {
      headers: o,
      params: {
        sort_order: "asc",
        ...(l && {
          cursor: l,
        }),
      },
      timeout: 30000,
    });
    if (f.status !== 200) throw Error(`Failed to fetch session events: ${f.statusText}`);
    let m = f.data;
    if (!m?.data || !Array.isArray(m.data)) throw Error("Invalid events response");
    for (let g of m.data) {
      let h = g?.sequence_num;
      if (h !== void 0) l = String(h);
      let y = g?.payload;
      if (y && typeof y === "object" && "type" in y) {
        if (y.type === "env_manager_log" || y.type === "control_response") continue;
        if ("session_id" in y) a.push(y);
      }
    }
    if (!m.next_cursor) break;
  }
  if (opts?.skipMetadata)
    return {
      newEvents: a,
      lastEventId: l,
    };
  let c, u, d;
  try {
    let p = await b_e(sessionId, {
      accessToken: r,
    });
    ((c = lkn(p)), (u = p.session_status));
  } catch (p) {
    ((d = be(p)),
      T(`teleport: failed to fetch session ${sessionId} metadata: ${p}`, {
        level: "warn",
      }));
  }
  return {
    newEvents: a,
    lastEventId: l,
    branch: c,
    sessionStatus: u,
    metadataFetchError: d,
  };
}
async function awaitRemoteSessionResult(e, t) {
  if (!Jl())
    throw Error("Cloud sessions are only available on the first-party Anthropic API provider.");
  let n = 1000,
    r = 1800000,
    o = 5,
    s = 10,
    i = null,
    a,
    l,
    c = 0,
    u = 0,
    d = 0,
    p = !1,
    f = Date.now();
  while (Date.now() - f < r) {
    if (t?.aborted) throw Error("Workflow aborted");
    let h = await pollRemoteSessionEvents(e, i);
    i = h.lastEventId;
    for (let y of h.newEvents)
      if (y.type === "assistant") {
        a = y;
        for (let b of y.message.content) if (b.type === "tool_use") c++;
      } else if (y.type === "result") l = y;
    if (h.sessionStatus === "archived") {
      p = !0;
      break;
    }
    if (h.sessionStatus === "requires_action")
      throw Error(
        `Cloud session ${e} entered 'requires_action' (likely a permission prompt) with no client to answer it. Ensure the cloud agent's allowed_tools cover what it needs, or set a permissive mode.`,
      );
    if (h.sessionStatus === void 0) {
      if ((d++, d >= s))
        throw Error(
          `Cloud session ${e}: fetchSession failed ${s} times in a row (last error: ${h.metadataFetchError ?? "unknown"}). Bailing instead of polling to the 30-min timeout.`,
        );
    } else d = 0;
    if (h.sessionStatus === "idle" && h.newEvents.length === 0) {
      if ((u++, u >= o)) {
        p = !0;
        break;
      }
    } else u = 0;
    await Nn(n, t);
  }
  if (!p) throw Error(`Cloud session ${e} timed out after ${r / 60000} min`);
  let m =
      a && a.type === "assistant"
        ? zl(
            a.message.content,
            `
`,
          )
        : "",
    g = l && l.type === "result" ? l : void 0;
  return {
    text: m,
    structuredOutput: g?.subtype === "success" ? g.structured_output : void 0,
    resultSubtype: g?.subtype,
    usage: g?.usage,
    totalCostUsd: g?.total_cost_usd,
    modelUsage: g?.modelUsage,
    numTurns: g?.num_turns,
    toolCalls: c,
  };
}
function jZa(e) {
  let t = [];
  if (e.permissionMode)
    t.push({
      type: "event",
      data: {
        type: "control_request",
        request_id: `set-mode-${wht.randomUUID()}`,
        request: {
          subtype: "set_permission_mode",
          mode: e.permissionMode,
          ultraplan: e.ultraplan,
        },
      },
    });
  if (!Ir() && nit())
    t.push({
      type: "event",
      data: {
        type: "control_request",
        request_id: `apply-flag-settings-${wht.randomUUID()}`,
        request: {
          subtype: "apply_flag_settings",
          settings: {
            viewMode: "focus",
          },
        },
      },
    });
  if (
    typeof e.initialMessage === "string"
      ? e.initialMessage
      : e.initialMessage && e.initialMessage.length > 0
  )
    t.push({
      type: "event",
      data: {
        uuid: e.initialMessageUuid ?? wht.randomUUID(),
        session_id: "",
        type: "user",
        parent_tool_use_id: null,
        message: {
          role: "user",
          content: e.initialMessage,
        },
      },
    });
  return t;
}
function GQp(e) {
  if (typeof e === "string") return e;
  if (!e) return "";
  return e
    .filter((t) => t.type === "text" && typeof t.text === "string")
    .map((t) => t.text)
    .join(" ");
}
function GZa(e, t, n) {
  return {
    url: `${$s().BASE_API_URL}${e === "v1alpha2" ? "/v1/code/sessions" : "/v1/sessions"}`,
    headers: {
      ...aH(t),
      "x-organization-uuid": n,
      ...(e === "v1" && {
        "anthropic-beta": ikn,
      }),
    },
  };
}
function WZa(e, t) {
  return e === "v1alpha2" ? t?.session : t;
}
async function teleportToRemote(options) {
  let { initialMessage: t, signal: n } = options,
    r = options.cwd ?? $t(),
    o = dW("allow_remote_sessions", "Cloud sessions", "are");
  if (o) return (options.onCreateFail?.(o, "policy_denied"), null);
  if (!Jl())
    return (
      options.onCreateFail?.(
        "Cloud sessions are only available on the first-party Anthropic API provider.",
        "not_first_party",
      ),
      null
    );
  try {
    if (options.sessionGroupingId)
      return (
        options.onCreateFail?.(
          CZa(options)
            ? "--project requires the new session-create endpoint, which isn't enabled for your account yet \u2014 no session was created."
            : "--project cannot be used on a GitHub-PR-bound create; it has no Project input \u2014 no session was created.",
          "project_not_enabled",
          {
            endpoint: "v1",
          },
        ),
        null
      );
    await ch();
    let i = v8n();
    if (!i) {
      let V =
        "Cloud sessions require a claude.ai login. Run /login to authenticate." +
        (ut(process.env.CLAUDE_CODE_REMOTE)
          ? ` (in CCR: env=${process.env.CLAUDE_CODE_OAUTH_TOKEN ? "set" : "unset"}, fd=${process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR ? "set" : "unset"})`
          : "");
      return (ke(Error(V)), options.onCreateFail?.(V, "no_access_token"), null);
    }
    let a = await yj();
    if (!a) {
      let V =
        "Unable to get organization UUID for cloud session creation" +
        (ut(process.env.CLAUDE_CODE_REMOTE)
          ? ` (in CCR: CLAUDE_CODE_ORGANIZATION_UUID=${process.env.CLAUDE_CODE_ORGANIZATION_UUID ? "set" : "unset"})`
          : "");
      return (ke(Error(V)), options.onCreateFail?.(V, "no_org_uuid"), null);
    }
    let l = {
      ...options.environmentVariables,
    };
    if ((delete l.CLAUDE_CODE_OAUTH_TOKEN, options.environmentId)) {
      let { url: V, headers: Y } = GZa("v1", i, a),
        z = null,
        K = null;
      if (options.useBundle) {
        let ee = await wTo(
          {
            oauthToken: i,
            sessionId: Rt(),
            baseUrl: $s().BASE_API_URL,
          },
          {
            signal: n,
            baseRef: options.bundleBaseRef,
          },
        );
        if (!ee.success) {
          if (
            (T(`Bundle upload failed: ${ee.error}`, {
              level: "error",
            }),
            ee.failReason !== "too_large")
          )
            options.onBundleFail?.(ee.error, "bundle");
          return null;
        }
        ((K = ee.fileId),
          G("tengu_teleport_bundle_mode", {
            size_bytes: ee.bundleSizeBytes,
            scope: $e(ee.scope),
            has_wip: ee.hasWip,
            reason: We("explicit_env_bundle"),
          }));
      } else if (options.sourceUrl)
        z = {
          type: "git_repository",
          url: options.sourceUrl,
          revision: options.branchName,
        };
      else {
        let ee = await $O();
        if (ee)
          z = {
            type: "git_repository",
            url: `https://${ee.host}/${ee.owner}/${ee.name}`,
            revision: options.branchName,
          };
      }
      let Z = options.title || options.description || "Remote task",
        J = jZa({
          initialMessage: t,
          initialMessageUuid: options.initialMessageUuid,
          permissionMode: options.permissionMode,
          ultraplan: options.ultraplan,
        }),
        ne = {
          title: Z,
          events: J,
          session_context: {
            sources: z ? [z] : [],
            ...(K && {
              seed_bundle_file_id: K,
            }),
            outcomes: [],
            environment_variables: l,
            ...(options.model && {
              model: options.model,
            }),
            ...(options.appendSystemPrompt && {
              append_system_prompt: options.appendSystemPrompt,
            }),
            ...(options.outputSchema && {
              output_schema: options.outputSchema,
            }),
          },
          ...fWt(options.environmentId),
          ...(options.tags && {
            tags: options.tags,
          }),
        };
      T(
        `[teleportToRemote] explicit env ${options.environmentId}, ${Object.keys(l).length} env vars, ${K ? `bundle=${K}` : `source=${z?.url ?? "none"}@${options.branchName ?? "default"}`}`,
      );
      let oe = await po.post(V, ne, {
        headers: Y,
        signal: n,
        validateStatus: (ee) => ee < 500,
      });
      if (oe.status !== 200 && oe.status !== 201) {
        let ee = `CreateSession ${oe.status}: ${De(oe.data)}`,
          ce = oe.data;
        if (
          [401, 403, 429].includes(oe.status) ||
          ce?.error?.reason === "github_repo_access_denied"
        )
          T(`[teleportToRemote] ${ee}`, {
            level: "error",
          });
        else {
          let ae = (de) => (de && /^[a-z][a-z0-9_]*$/.test(de) ? de : void 0);
          ke(Error(`[type=${ae(ce?.error?.type)},reason=${ae(ce?.error?.reason)}] ${ee}`));
        }
        return (
          options.onCreateFail?.(
            (options.sessionGroupingId && TTo(options.sessionGroupingId, ce?.error)) ||
              ce?.error?.message ||
              `${oe.status} ${oe.statusText || ""}`.trim(),
            "create_request_failed",
            {
              status: oe.status,
              serverType: toServerErrorType(ce?.error?.type),
              serverReason: toServerErrorReason(ce?.error?.reason),
              endpoint: "v1",
            },
          ),
          null
        );
      }
      let re = WZa("v1", oe.data);
      if (!re || typeof re.id !== "string")
        return (
          ke(
            Rh(
              Error(`No session id in response: ${De(oe.data)}`),
              "CreateSession response missing session id",
            ),
          ),
          options.onCreateFail?.(
            "Server returned a malformed session response (no session id)",
            "malformed_response",
          ),
          null
        );
      return (
        FZa(
          re.id,
          options.source,
          {
            project: !1,
            global: !1,
          },
          {
            endpoint: "v1",
            grouped: options.sessionGroupingId != null,
          },
        ),
        {
          id: re.id,
          title: re.title || Z,
        }
      );
    }
    let c = options.poolId ?? jo()?.remote?.defaultEnvironmentId,
      u = qjn(c);
    T("[teleport] phase: env-select");
    let d = u ? [] : await Ure(i);
    if (!u && d.length === 0)
      try {
        ((d = [await yft(void 0, n, i)]), T("[teleportToRemote] Auto-created default cloud env"));
      } catch (V) {
        return (
          T(`[teleportToRemote] auto-create env failed: ${be(V)}`, {
            level: "warn",
          }),
          options.onBundleFail?.(
            "Could not create a cloud environment. Set one up at https://claude.ai/code/onboarding?magic=env-setup",
            "env_create",
          ),
          null
        );
      }
    T(
      `Available environments: ${d.map((V) => `${V.environment_id} (${V.name}, ${V.kind})`).join(", ")}`,
    );
    let p = c,
      f = p ? d.find((V) => V.environment_id === p) : void 0,
      m = d.find((V) => V.kind === "anthropic_cloud");
    if (!u && options.useDefaultEnvironment && !f && !m) {
      if (
        (T(
          `No configured default or anthropic_cloud in env list (${d.length} envs); retrying fetchEnvironments`,
        ),
        (d = await Ure(i)),
        (f = p ? d.find((V) => V.environment_id === p) : void 0),
        (m = d.find((V) => V.kind === "anthropic_cloud")),
        !f && !m)
      ) {
        let V = `No configured default or anthropic_cloud environment available after retry (got: ${d.map((Y) => `${Y.name} (${Y.kind})`).join(", ")}${p ? `; configured default ${p} not in list` : ""})`;
        return (
          T(
            `[teleportToRemote] ${V}. Silent byoc fallthrough would launch into a dead env \u2014 fail fast instead.`,
            {
              level: "error",
            },
          ),
          options.onCreateFail?.(V, "no_default_env"),
          null
        );
      }
    }
    let g = u ? void 0 : f || m || d.find((V) => V.kind !== "bridge") || d[0];
    if (!g && !u)
      return (
        ke(Error("No environments available for session creation")),
        options.onCreateFail?.("No environments available for session creation", "no_environments"),
        null
      );
    if (p && g) {
      let V = g.environment_id === p;
      T(
        V
          ? `Using configured default environment: ${p}`
          : `Configured default environment ${p} not found, using first available`,
      );
    }
    let h = u ? p : g.environment_id;
    T(g ? `Selected environment: ${h} (${g.name}, ${g.kind})` : `Selected environment: ${h}`);
    let y = null,
      b = null,
      _ = null;
    if (options.sourceUrl)
      y = {
        type: "git_repository",
        url: options.sourceUrl,
        revision: options.branchName,
      };
    T("[teleport] phase: branch-detect");
    let S = y ? null : await $O(options.cwd),
      A,
      v;
    if (options.title && options.reuseOutcomeBranch)
      ((A = options.title), (v = options.reuseOutcomeBranch));
    else {
      let V = await generateTitleAndBranch(options.description || GQp(t) || "Background task", n);
      ((A = options.title || V.title), (v = options.reuseOutcomeBranch || V.branchName));
    }
    let C = !1,
      x = options.sourceUrl ? "explicit_source_url" : "no_git_at_all",
      I = Tu(r),
      k = u || g?.kind === "byoc",
      D = options.allowBundle && !k && ut(process.env.CCR_FORCE_BUNDLE),
      P =
        options.allowBundle &&
        !k &&
        I !== null &&
        (ut(process.env.CCR_ENABLE_BUNDLE) || (await _U("tengu_ccr_bundle_seed_enabled")));
    if (S && !D) {
      if (k) ((C = !0), (x = "byoc_env_skip_preflight"));
      else if ($m(S.host))
        ((C = await oVe(S.owner, S.name, n)),
          (x = C ? "github_preflight_ok" : "github_preflight_failed"));
      else ((C = !0), (x = "ghes_optimistic"));
    } else if (D) x = "forced_bundle";
    else if (I) x = "no_github_remote";
    if (!C && !P && S) C = !0;
    if (C && S) {
      let { host: V, owner: Y, name: z } = S,
        K = options.branchName ?? (await vD()) ?? void 0;
      (T(`[teleportToRemote] Git source: ${V}/${Y}/${z}, revision: ${K ?? "none"}`),
        (y = {
          type: "git_repository",
          url: `https://${V}/${Y}/${z}`,
          revision: K,
          ...(options.reuseOutcomeBranch && {
            allow_unrestricted_git_push: !0,
          }),
        }),
        (b = {
          type: "git_repository",
          git_info: {
            type: "github",
            repo: `${Y}/${z}`,
            branches: [v],
          },
        }));
    }
    if (!y && !k && options.explicitRef) {
      let V = D
          ? "CCR_FORCE_BUNDLE is set"
          : S
            ? "the GitHub App preflight did not pass"
            : "no GitHub remote was detected in this directory",
        Y = P ? "be seeded from your local working tree" : "start with an empty sandbox";
      return (
        options.onCreateFail?.(
          `--ref ${options.explicitRef} cannot be honored: ${V}, so the session would ${Y} instead. ` +
            (S ? "Set up the GitHub integration at https://claude.ai/code, or " : "") +
            (P
              ? "drop --ref to seed from local HEAD."
              : "drop --ref to start with an empty sandbox."),
          "explicit_ref_no_git_source",
        ),
        null
      );
    }
    if (!y && P) {
      (T("[teleport] phase: bundle-upload"), T(`[teleportToRemote] Bundling (reason: ${x})`));
      let V = await wTo(
        {
          oauthToken: i,
          sessionId: Rt(),
          baseUrl: $s().BASE_API_URL,
        },
        {
          signal: n,
        },
      );
      if (!V.success) {
        T(`Bundle upload failed: ${V.error}`, {
          level: "error",
        });
        let Y = S ? ". Please setup GitHub on https://claude.ai/code" : "",
          z;
        switch (V.failReason) {
          case "empty_repo":
            z =
              'Repository has no commits \u2014 run `git add . && git commit -m "initial"` then retry';
            break;
          case "too_large":
            z = `Repo is too large to teleport${Y}`;
            break;
          case "git_error":
            z = `Failed to create git bundle (${V.error})${Y}`;
            break;
          case "stash_failed":
          case "no_changes":
            z = V.error;
            break;
          case void 0:
            z = `Bundle upload failed: ${V.error}${Y}`;
            break;
          default: {
            let K = V.failReason;
            z = `Bundle upload failed: ${V.error}`;
          }
        }
        return (options.onBundleFail?.(z, "bundle"), null);
      }
      ((_ = V.fileId),
        G("tengu_teleport_bundle_mode", {
          size_bytes: V.bundleSizeBytes,
          scope: $e(V.scope),
          has_wip: V.hasWip,
          reason: $e(x),
        }));
    }
    if (
      (G("tengu_teleport_source_decision", {
        reason: $e(x),
        path: We(y ? "github" : _ ? "bundle" : "empty"),
      }),
      !y && !_)
    ) {
      if (k) {
        let V = `The selected environment "${g?.name ?? h}" requires a git source, but no GitHub remote was detected. Check that \`git remote get-url origin\` returns a GitHub URL.`;
        return (
          T(`[teleportToRemote] ${V} (byoc env, sourceReason=${x})`, {
            level: "error",
          }),
          options.onCreateFail?.(V, "byoc_no_git_source"),
          null
        );
      }
      T("[teleportToRemote] No repository detected \u2014 session will have an empty sandbox");
    }
    let { url: O, headers: L } = GZa("v1", i, a),
      M = options.ultraplan ? `ultraplan: ${A}` : A,
      N = jZa({
        initialMessage: t,
        initialMessageUuid: options.initialMessageUuid,
        permissionMode: options.permissionMode,
        ultraplan: options.ultraplan,
      }),
      B = {
        title: M,
        events: N,
        session_context: {
          sources: y ? [y] : [],
          ...(_ && {
            seed_bundle_file_id: _,
          }),
          outcomes: b ? [b] : [],
          model: options.model ?? As(),
          ...(options.reuseOutcomeBranch && {
            reuse_outcome_branches: !0,
          }),
          ...(options.githubPr && {
            github_pr: options.githubPr,
          }),
          ...(Object.keys(l).length > 0 && {
            environment_variables: l,
          }),
          ...(options.appendSystemPrompt && {
            append_system_prompt: options.appendSystemPrompt,
          }),
          ...(options.outputSchema && {
            output_schema: options.outputSchema,
          }),
        },
        ...fWt(h),
        ...(options.tags && {
          tags: options.tags,
        }),
      };
    (T(`Creating session with payload: ${De(B, null, 2)}`), T("[teleport] phase: POST-sent"));
    let $ = await po.post(O, B, {
      headers: L,
      signal: n,
      validateStatus: (V) => V < 500,
    });
    if (
      (T(`[teleport] phase: POST-response status=${$.status}`),
      !($.status === 200 || $.status === 201))
    ) {
      let V = `API request failed with status ${$.status}: ${$.statusText}

Response data: ${De($.data, null, 2)}`,
        Y = $.data,
        z = Y?.error?.type,
        K = Y?.error?.reason,
        Z = Y?.error?.message,
        J = y ? Dae(y.url) : null,
        ne = J
          ? `${J.owner}/${J.name}`
          : _
            ? "a seed bundle (no git source)"
            : (y?.url ?? "no source"),
        oe =
          J !== null &&
          $m(J.host) &&
          J.owner.toLowerCase() === "anthropics" &&
          J.name.toLowerCase() === "anthropic",
        re = toServerErrorReason(K),
        ee =
          (typeof Z === "string" &&
            Z.includes("source repository configuration is not permitted for this environment")) ||
          re === "monorepo_source_required" ||
          re === "monorepo_env_required" ||
          ($.status === 400 &&
            !K &&
            z === "invalid_request_error" &&
            !k &&
            y !== null &&
            !_ &&
            oe &&
            typeof Z === "string" &&
            /^the request was invalid\.?$/i.test(Z));
      if ([401, 403, 429].includes($.status) || K === "github_repo_access_denied" || ee)
        T(V, {
          level: "error",
        });
      else {
        let de = (Ee) => (Ee && /^[a-z][a-z0-9_]*$/.test(Ee) ? Ee : void 0);
        ke(Error(`[type=${de(z)},reason=${de(K)},isByocEnv=${k},sentMonorepo=${oe}] ${V}`));
      }
      let ce = Z || `${$.status} ${$.statusText || ""}`.trim();
      if (ee)
        ce = oe
          ? `The source anthropics/anthropic requires a monorepo environment, but "${g?.name ?? h}" was selected. Configure a monorepo environment, or run from a different repository.`
          : `The selected environment "${g?.name ?? h}" only accepts the Anthropic monorepo (anthropics/anthropic), but the source was ${ne}. Run this from a monorepo checkout, or select a different environment.`;
      let ae = options.sessionGroupingId && TTo(options.sessionGroupingId, Y?.error);
      return (
        options.onCreateFail?.(ae || ce, "create_request_failed", {
          status: $.status,
          serverType: toServerErrorType(z),
          serverReason: re,
          endpoint: "v1",
        }),
        null
      );
    }
    let W = WZa("v1", $.data);
    if (!W || typeof W.id !== "string")
      return (
        ke(
          Rh(
            Error(`Cannot determine session ID from API response: ${De($.data)}`),
            "CreateSession response missing session id",
          ),
        ),
        options.onCreateFail?.(
          "Server returned a malformed session response (no session id)",
          "malformed_response",
        ),
        null
      );
    return (
      T(`Successfully created remote session: ${W.id}`),
      FZa(
        W.id,
        options.source,
        {
          project: y !== null && x !== "github_preflight_failed",
          global: _ === null,
        },
        {
          endpoint: "v1",
          grouped: options.sessionGroupingId != null,
        },
      ),
      {
        id: W.id,
        title: W.title || M,
      }
    );
  } catch (s) {
    let i = Zr(s);
    if (lh(s) || po.isCancel(s)) return (T(`Remote session create aborted: ${i.message}`), null);
    let a = R_(s);
    if (a)
      T(`Remote session create failed (network): ${i.message}`, {
        level: "error",
      });
    else ke(Rh(Zr(i), "Remote session create failed"));
    return (
      options.onCreateFail?.(
        `Cloud session create failed: ${i.message}`,
        a ? "network_error" : "exception",
      ),
      null
    );
  }
}
async function archiveRemoteSession(sessionId, t = 1e4) {
  if (!Jl())
    return (T(`[archiveRemoteSession] ${sessionId} skipped: non-first-party provider`), !1);
  let n = v8n();
  if (!n) return !1;
  let r = `${$s().BASE_API_URL}/v1/code/sessions/${sessionId}/archive`;
  try {
    let o = await po.post(
      r,
      {},
      {
        headers: aH(n),
        timeout: t,
        validateStatus: (s) => s < 500,
      },
    );
    if (o.status === 200 || o.status === 409)
      return (T(`[archiveRemoteSession] archived ${sessionId}`), !0);
    return (T(`[archiveRemoteSession] ${sessionId} failed ${o.status}: ${De(o.data)}`), !1);
  } catch (o) {
    return (
      T(`[archiveRemoteSession] ${sessionId} failed: ${be(o)}`, {
        level: "error",
      }),
      !1
    );
  }
}
async function interruptRemoteSession(e, t = 1e4) {
  if (!Jl()) return (T(`[interruptRemoteSession] ${e} skipped: non-first-party provider`), !1);
  let n = v8n();
  if (!n) return !1;
  try {
    let r = oP(e);
    if (!/^session_[A-Za-z0-9_-]+$/.test(r)) return !1;
    let o = await yj();
    if (!o) return !1;
    let { url: s, body: i } = zjn(
        $s().BASE_API_URL,
        r,
        [
          {
            type: "control_request",
            request_id: wht.randomUUID(),
            request: {
              subtype: "interrupt",
            },
            uuid: wht.randomUUID(),
          },
        ],
        Cht(),
      ),
      a = await _6(),
      l = await po.post(s, i, {
        headers: {
          ...aH(n),
          "anthropic-beta": ikn,
          "x-organization-uuid": o,
          ...(a && {
            "X-Trusted-Device-Token": a,
          }),
        },
        timeout: t,
        validateStatus: (c) => c < 500,
      });
    if (l.status >= 200 && l.status < 300)
      return (T(`[interruptRemoteSession] interrupted ${e}`), !0);
    return (T(`[interruptRemoteSession] ${e} failed ${l.status}: ${De(l.data)}`), !1);
  } catch (r) {
    return (
      T(`[interruptRemoteSession] ${e} failed: ${be(r)}`, {
        level: "error",
      }),
      !1
    );
  }
}
function subscribeRemoteSessionToPR(e, t, n) {
  return lWt("subscribe", e, t, n, $s().BASE_API_URL, () => Ws()?.accessToken, _6);
}
var wht,
  H8n,
  SESSION_TITLE_AND_BRANCH_PROMPT = `You are coming up with a succinct title and git branch name for a coding session based on the provided description. The title should be clear, concise, and accurately reflect the content of the coding task.
You should keep it short and simple, ideally no more than 6 words. Avoid using jargon or overly technical terms unless absolutely necessary. The title should be easy to understand for anyone reading it.
Use sentence case for the title (capitalize only the first word and proper nouns), not Title Case.

The branch name should be clear, concise, and accurately reflect the content of the coding task.
You should keep it short and simple, ideally no more than 4 words. The branch should always start with "claude/" and should be all lower case, with words separated by dashes.

Return a JSON object with "title" and "branch" fields.

Example 1: {"title": "Fix login button not working on mobile", "branch": "claude/fix-mobile-login-button"}
Example 2: {"title": "Update README with installation instructions", "branch": "claude/update-readme"}
Example 3: {"title": "Improve performance of data processing script", "branch": "claude/improve-data-processing"}

Here is the session description:
<description>{description}</description>
Please generate a title and branch name for this session.`;
