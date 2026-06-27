// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kM
// matched 2.1.88 source: src/utils/teleport/api.ts
// class=modified  jaccard=0.4094  score=0.5758  fileCov=0.5862
// note: deminified; 15 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: updateSessionTitle, sendEventToRemoteSession, sendBashCommandToRemoteSession, reportClientPresence, prepareApiRequest, markSessionRead, isTransientNetworkError, getOAuthHeaders, getBranchFromSession, fetchSession, fetchCodeSessionsFromSessionsAPI, ccrSessionToResource, axiosGetWithRetry, CodeSessionSchema, CCR_BYOC_BETA
function isTransientNetworkError(e) {
  if (!po.isAxiosError(e)) return false;
  if (!e.response) return true;
  if (e.response.status >= 500) return true;
  return false;
}
async function axiosGetWithRetry(url, config) {
  let n;
  for (let r = 0; r <= yzr; r++)
    try {
      return await po.get(url, config);
    } catch (o) {
      if (((n = o), !isTransientNetworkError(o))) throw o;
      if (r >= yzr) throw (T(`Teleport request failed after ${r + 1} attempts: ${be(o)}`), o);
      let s = oOi[r] ?? 2000;
      (T(`Teleport request failed (attempt ${r + 1}/${yzr + 1}), retrying in ${s}ms: ${be(o)}`),
        await Nn(s));
    }
  throw n;
}
function ccrSessionToResource(e) {
  let t = e.status === "archived" ? "archived" : (e.worker_status ?? "idle");
  return {
    type: "session",
    id: e.id,
    title: e.title || null,
    session_status: t,
    environment_id: e.environment_id,
    created_at: e.created_at,
    updated_at: "updated_at" in e ? e.updated_at : e.last_event_at,
    session_context: {
      sources: e.config?.sources ?? [],
      outcomes: e.config?.outcomes ?? null,
      model: e.config?.model ?? null,
      cwd: "",
      custom_system_prompt: null,
      append_system_prompt: null,
    },
  };
}
async function prepareApiRequest() {
  if (!Jl())
    throw Error("Cloud sessions are only available on the first-party Anthropic API provider.");
  await ch();
  let e = Ws()?.accessToken;
  if (e === void 0)
    throw Error(
      "Claude Code web sessions require authentication with a Claude.ai account. API key authentication is not sufficient. Please run /login to authenticate, or check your authentication status with /status.",
    );
  let t = await yj();
  if (!t) throw Error("Unable to get organization UUID");
  return {
    accessToken: e,
    orgUUID: t,
  };
}
async function fetchCodeSessionsFromSessionsAPI() {
  return yl("teleport_sessions_list", async () => {
    let { accessToken: e } = await prepareApiRequest(),
      t = `${$s().BASE_API_URL}/v1/code/sessions`;
    try {
      let n = await axiosGetWithRetry(t, {
        headers: getOAuthHeaders(e),
      });
      if (n.status !== 200) throw Error(`Failed to fetch code sessions: ${n.statusText}`);
      return n.data.data.map((o) => {
        let s = o.config?.sources?.find((a) => a.type === "git_repository"),
          i = null;
        if (s?.url) {
          let a = zFe(s.url);
          if (a) {
            let [l, c] = a.split("/");
            if (l && c)
              i = {
                name: c,
                owner: {
                  login: l,
                },
                default_branch: s.revision || void 0,
              };
          }
        }
        return {
          id: o.id,
          title: o.title || "Untitled",
          description: "",
          status: o.status === "archived" ? "archived" : (o.worker_status ?? "idle"),
          repo: i,
          turns: [],
          created_at: o.created_at,
          updated_at: o.last_event_at,
        };
      });
    } catch (n) {
      let r = Zr(n);
      if (R_(n))
        T(`Failed to fetch code sessions: ${r.message}`, {
          level: "error",
        });
      else ke(r);
      throw n;
    }
  });
}
function getOAuthHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01",
    "anthropic-client-platform": _x(),
  };
}
async function fetchSession(sessionId, t) {
  if (!Jl())
    throw new qb(
      "Cloud sessions are only available on the first-party Anthropic API provider.",
      "Cloud sessions are only available on the first-party Anthropic API provider.",
    );
  let { accessToken: n } = t ?? (await prepareApiRequest()),
    r = `${$s().BASE_API_URL}/v1/code/sessions/${sessionId}`,
    o = await po.get(r, {
      headers: getOAuthHeaders(n),
      timeout: 15000,
      validateStatus: (i) => i < 500,
    });
  if (o.status !== 200) {
    let i = o.data?.error?.message;
    if (o.status === 404) {
      let a = `Session not found: ${sessionId}`;
      throw new qb(a, a);
    }
    if (o.status === 401)
      throw new qb(
        "Session expired. Please run /login to sign in again.",
        "Session expired. Please run /login to sign in again.",
      );
    if (o.status === 400 && i?.startsWith("invalid session ID")) throw new qb(i, i);
    throw Error(i || `Failed to fetch session: ${o.status} ${o.statusText}`);
  }
  let s = o.data.response_shape ?? o.data.session;
  if (!s?.id) throw Error(`Session not found: ${sessionId}`);
  return ccrSessionToResource(s);
}
function getBranchFromSession(e) {
  return e.session_context.outcomes?.find((n) => n.type === "git_repository")?.git_info
    ?.branches[0];
}
async function iOi(e, t, n) {
  if (!Jl())
    return {
      ok: false,
      reason: "Cloud sessions are only available on the first-party Anthropic API provider.",
    };
  try {
    let { accessToken: r } = await prepareApiRequest(),
      o = `${$s().BASE_API_URL}/v1/code/sessions/${e}/events`,
      s = getOAuthHeaders(r);
    T(`${n} Sending event to session ${e}`);
    let i = await po.post(
      o,
      {
        events: [
          {
            payload: t,
          },
        ],
      },
      {
        headers: s,
        validateStatus: (l) => l < 500,
        timeout: 30000,
      },
    );
    if (i.status === 200 || i.status === 201)
      return (
        T(`${n} Successfully sent event to session ${e}`),
        {
          ok: true,
        }
      );
    T(`${n} Failed with status ${i.status}: ${De(i.data)}`);
    let a = i.data?.error?.message;
    return {
      ok: false,
      reason: typeof a === "string" ? `${a} (HTTP ${i.status})` : `HTTP ${i.status}`,
    };
  } catch (r) {
    return (
      T(`${n} Error: ${be(r)}`),
      {
        ok: false,
        reason: be(r),
      }
    );
  }
}
async function sendEventToRemoteSession(e, t, n) {
  return iOi(
    e,
    {
      uuid: n?.uuid ?? _zr.randomUUID(),
      session_id: e,
      type: "user",
      parent_tool_use_id: null,
      message: {
        role: "user",
        content: t,
      },
    },
    "[sendEventToRemoteSession]",
  );
}
async function sendBashCommandToRemoteSession(e, t, n) {
  return iOi(
    e,
    {
      uuid: n?.uuid ?? _zr.randomUUID(),
      session_id: e,
      type: "bash_command",
      command: t.command,
      ...(t.cwd !== void 0 && {
        cwd: t.cwd,
      }),
    },
    "[sendBashCommandToRemoteSession]",
  );
}
async function updateSessionTitle(sessionId, title) {
  try {
    let { accessToken: n } = await prepareApiRequest(),
      r = `${$s().BASE_API_URL}/v1/code/sessions/${sessionId}`;
    T(`[updateSessionTitle] Updating title for session ${sessionId}: "${title}"`);
    let o = await po.put(
      r,
      {
        title: title,
      },
      {
        headers: getOAuthHeaders(n),
        validateStatus: (s) => s < 500,
      },
    );
    if (o.status === 200)
      return (T(`[updateSessionTitle] Successfully updated title for session ${sessionId}`), true);
    return (T(`[updateSessionTitle] Failed with status ${o.status}: ${De(o.data)}`), false);
  } catch (n) {
    return (T(`[updateSessionTitle] Error: ${be(n)}`), false);
  }
}
async function markSessionRead(e, t) {
  try {
    let { accessToken: n } = await prepareApiRequest(),
      r = `${$s().BASE_API_URL}/v1/code/sessions/${e}/mark_read`,
      o = await po.post(
        r,
        t
          ? {
              event_id: t,
            }
          : {},
        {
          headers: getOAuthHeaders(n),
          timeout: 10000 /* 1e4 */,
          validateStatus: (s) => s < 500,
        },
      );
    if (o.status !== 200) T(`[markSessionRead] Failed with status ${o.status}: ${De(o.data)}`);
  } catch (n) {
    T(`[markSessionRead] Error: ${be(n)}`);
  }
}
async function reportClientPresence(e, t, n = false) {
  try {
    let { accessToken: r } = await prepareApiRequest(),
      o = `${$s().BASE_API_URL}/v1/code/sessions/${e}/client/presence`,
      s = await po.post(
        o,
        {
          client_id: t,
          clear: n,
        },
        {
          headers: getOAuthHeaders(r),
          timeout: 10000 /* 1e4 */,
          validateStatus: (i) => i < 500,
        },
      );
    if (s.status !== 200)
      return (T(`[reportClientPresence] Failed with status ${s.status}: ${De(s.data)}`), null);
    return s.data.refresh_after_seconds ?? null;
  } catch (r) {
    return (T(`[reportClientPresence] Error: ${be(r)}`), null);
  }
}
var _zr,
  oOi,
  yzr,
  CCR_BYOC_BETA = "ccr-byoc-2025-07-29",
  CodeSessionSchema;
