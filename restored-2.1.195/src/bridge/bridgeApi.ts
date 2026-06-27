// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jir
// matched 2.1.88 source: src/bridge/bridgeApi.ts
// class=modified  jaccard=0.687  score=0.87  fileCov=0.7656
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function validateBridgeId(e, t) {
  if (!e || !MYf.test(e)) throw Error(`Invalid ${t}: contains unsafe characters`);
  return e;
}
function createBridgeApiClient(e) {
  function t(a) {
    e.onDebug?.(a);
  }
  let n = 0,
    r = 100;
  async function o(a) {
    let l = {
        Authorization: `Bearer ${a}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "anthropic-beta": y2r.header,
        "x-environment-runner-version": e.runnerVersion,
        "User-Agent": dy(),
      },
      c = await e.getTrustedDeviceToken?.();
    if (c) l["X-Trusted-Device-Token"] = c;
    return l;
  }
  function s() {
    let a = e.getAccessToken();
    if (!a) throw Error(Z8e);
    return a;
  }
  async function i(a, l) {
    let c = s(),
      u = await a(c);
    if (u.status !== 401) return u;
    if (!e.onAuth401) return (t(`[bridge:api] ${l}: 401 received, no refresh handler`), u);
    if ((t(`[bridge:api] ${l}: 401 received, attempting token refresh`), await e.onAuth401(c))) {
      t(`[bridge:api] ${l}: Token refreshed, retrying request`);
      let p = s(),
        f = await a(p);
      if (f.status !== 401) return f;
      t(`[bridge:api] ${l}: Retry after refresh also got 401`);
    } else t(`[bridge:api] ${l}: Token refresh failed`);
    return u;
  }
  return {
    async registerBridgeEnvironment(a) {
      return yl(
        "bridge_environment_register",
        async () => {
          t(`[bridge:api] POST /v1/environments/bridge bridgeId=${a.bridgeId}`);
          let l = await i(
            async (c) =>
              po.post(
                `${e.baseUrl}/v1/environments/bridge`,
                {
                  machine_name: a.machineName,
                  directory: a.dir,
                  branch: a.branch,
                  git_repo_url: a.gitRepoUrl,
                  max_sessions: a.maxSessions,
                  metadata: {
                    worker_type: a.workerType,
                  },
                  ...(a.reuseEnvironmentId && {
                    environment_id: a.reuseEnvironmentId,
                  }),
                },
                {
                  headers: await o(c),
                  timeout: 15000,
                  validateStatus: (u) => u < 500,
                },
              ),
            "Registration",
          );
          return (
            handleErrorStatus(l.status, l.data, "Registration"),
            t(
              `[bridge:api] POST /v1/environments/bridge -> ${l.status} environment_id=${l.data.environment_id}`,
            ),
            t(
              `[bridge:api] >>> ${dft({
                machine_name: a.machineName,
                directory: a.dir,
                branch: a.branch,
                git_repo_url: het(a.gitRepoUrl),
                max_sessions: a.maxSessions,
                metadata: {
                  worker_type: a.workerType,
                },
              })}`,
            ),
            t(`[bridge:api] <<< ${dft(l.data)}`),
            l.data
          );
        },
        stc,
      );
    },
    async pollForWork(a, l, c, u) {
      validateBridgeId(a, "environmentId");
      let d = n;
      n = 0;
      let p = await po.get(`${e.baseUrl}/v1/environments/${a}/work/poll`, {
        headers: await o(l),
        params:
          u !== void 0
            ? {
                reclaim_older_than_ms: u,
              }
            : void 0,
        timeout: 10000 /* 1e4 */,
        signal: c,
        validateStatus: (f) => f < 500,
      });
      if ((handleErrorStatus(p.status, p.data, "Poll", p.headers), !p.data)) {
        if (((n = d + 1), n === 1 || n % r === 0))
          t(
            `[bridge:api] GET .../work/poll -> ${p.status} (no work, ${n} consecutive empty polls)`,
          );
        return null;
      }
      return (
        t(
          `[bridge:api] GET .../work/poll -> ${p.status} workId=${p.data.id} type=${p.data.data?.type}${p.data.data?.id ? ` sessionId=${p.data.data.id}` : ""}`,
        ),
        t(`[bridge:api] <<< ${dft(p.data)}`),
        p.data
      );
    },
    async acknowledgeWork(a, l, c) {
      (validateBridgeId(a, "environmentId"),
        validateBridgeId(l, "workId"),
        t(`[bridge:api] POST .../work/${l}/ack`));
      let u = await po.post(
        `${e.baseUrl}/v1/environments/${a}/work/${l}/ack`,
        {},
        {
          headers: await o(c),
          timeout: 10000 /* 1e4 */,
          validateStatus: (d) => d < 500,
        },
      );
      (handleErrorStatus(u.status, u.data, "Acknowledge"),
        t(`[bridge:api] POST .../work/${l}/ack -> ${u.status}`));
    },
    async stopWork(a, l, c) {
      (validateBridgeId(a, "environmentId"),
        validateBridgeId(l, "workId"),
        t(`[bridge:api] POST .../work/${l}/stop force=${c}`));
      let u = await i(
        async (d) =>
          po.post(
            `${e.baseUrl}/v1/environments/${a}/work/${l}/stop`,
            {
              force: c,
            },
            {
              headers: await o(d),
              timeout: 10000 /* 1e4 */,
              validateStatus: (p) => p < 500,
            },
          ),
        "StopWork",
      );
      (handleErrorStatus(u.status, u.data, "StopWork"),
        t(`[bridge:api] POST .../work/${l}/stop -> ${u.status}`));
    },
    async deregisterEnvironment(a) {
      (validateBridgeId(a, "environmentId"), t(`[bridge:api] DELETE /v1/environments/bridge/${a}`));
      let l = await i(
        async (c) =>
          po.delete(`${e.baseUrl}/v1/environments/bridge/${a}`, {
            headers: await o(c),
            timeout: 10000 /* 1e4 */,
            validateStatus: (u) => u < 500,
          }),
        "Deregister",
      );
      (handleErrorStatus(l.status, l.data, "Deregister"),
        t(`[bridge:api] DELETE /v1/environments/bridge/${a} -> ${l.status}`));
    },
    async archiveSession(a) {
      (validateBridgeId(a, "sessionId"), t(`[bridge:api] POST /v1/sessions/${a}/archive`));
      let l = await i(
        async (c) =>
          po.post(
            `${e.baseUrl}/v1/sessions/${a}/archive`,
            {},
            {
              headers: await o(c),
              timeout: 10000 /* 1e4 */,
              validateStatus: (u) => u < 500,
            },
          ),
        "ArchiveSession",
      );
      if (l.status === 409) {
        t(`[bridge:api] POST /v1/sessions/${a}/archive -> 409 (already archived)`);
        return;
      }
      (handleErrorStatus(l.status, l.data, "ArchiveSession"),
        t(`[bridge:api] POST /v1/sessions/${a}/archive -> ${l.status}`));
    },
    async reconnectSession(a, l) {
      return yl(
        "bridge_session_reconnect",
        async () => {
          (validateBridgeId(a, "environmentId"),
            validateBridgeId(l, "sessionId"),
            t(`[bridge:api] POST /v1/environments/${a}/bridge/reconnect session_id=${l}`));
          let c = await i(
            async (u) =>
              po.post(
                `${e.baseUrl}/v1/environments/${a}/bridge/reconnect`,
                {
                  session_id: l,
                },
                {
                  headers: await o(u),
                  timeout: 10000 /* 1e4 */,
                  validateStatus: (d) => d < 500,
                },
              ),
            "ReconnectSession",
          );
          (handleErrorStatus(c.status, c.data, "ReconnectSession"),
            t(`[bridge:api] POST .../bridge/reconnect -> ${c.status}`));
        },
        stc,
      );
    },
    async heartbeatWork(a, l, c) {
      (validateBridgeId(a, "environmentId"),
        validateBridgeId(l, "workId"),
        t(`[bridge:api] POST .../work/${l}/heartbeat`));
      let u = await po.post(
        `${e.baseUrl}/v1/environments/${a}/work/${l}/heartbeat`,
        {},
        {
          headers: await o(c),
          timeout: 10000 /* 1e4 */,
          validateStatus: (d) => d < 500,
        },
      );
      return (
        handleErrorStatus(u.status, u.data, "Heartbeat"),
        t(
          `[bridge:api] POST .../work/${l}/heartbeat -> ${u.status} lease_extended=${u.data.lease_extended} state=${u.data.state}`,
        ),
        u.data
      );
    },
    async sendPermissionResponseEvent(a, l, c) {
      validateBridgeId(a, "sessionId");
      let { url: u, body: d } = zjn(e.baseUrl, a, [l], e.useCcrV2Routing?.() ?? false);
      t(`[bridge:api] POST ${u} type=${l.type}`);
      let p = await po.post(u, d, {
        headers: await o(c),
        timeout: 10000 /* 1e4 */,
        validateStatus: (f) => f < 500,
      });
      (handleErrorStatus(p.status, p.data, "SendPermissionResponseEvent"),
        t(`[bridge:api] POST ${u} -> ${p.status}`),
        t(`[bridge:api] >>> ${dft(d)}`),
        t(`[bridge:api] <<< ${dft(p.data)}`));
    },
  };
}
function handleErrorStatus(e, t, n, r) {
  if (e === 200 || e === 204) return;
  let o = _J(t),
    s = extractErrorTypeFromData(t);
  switch (e) {
    case 401:
      throw new Qq(`${n}: Authentication failed (401)${o ? `: ${o}` : ""}. ${Z8e}`, 401, s);
    case 403:
      throw new Qq(
        isExpiredErrorType(s)
          ? "Remote Control session expired."
          : `${n}: Access denied (403)${o ? `: ${o}` : ""}. Check your organization permissions.`,
        403,
        s,
      );
    case 404:
      throw new Qq(
        o ?? `${n}: Not found (404). Remote Control may not be available for this organization.`,
        404,
        s,
      );
    case 410:
      throw new Qq(o ?? "Remote Control session expired.", 410, s ?? "environment_expired");
    case 429: {
      let i = Ujn(typeof r?.["retry-after"] === "string" ? r["retry-after"] : void 0);
      throw Object.assign(
        Error(`${n}: Rate limited (429). Polling too frequently.`),
        i !== void 0
          ? {
              status: e,
              retryAfterMs: i,
            }
          : {
              status: e,
            },
      );
    }
    default:
      throw Object.assign(Error(`${n}: Failed with status ${e}${o ? `: ${o}` : ""}`), {
        status: e,
      });
  }
}
function isExpiredErrorType(e) {
  if (!e) return false;
  return e.includes("expired") || e.includes("lifetime");
}
function isSuppressible403(e) {
  if (e.status !== 403) return false;
  return e.message.includes("external_poll_sessions") || e.message.includes("environments:manage");
}
function stc(e) {
  if (e instanceof Qq) return e.status === 401 ? "auth_failed" : "http_error";
  if (e instanceof Error) {
    if (e.message === Z8e) return "no_token";
    if ("status" in e && typeof e.status === "number") return "http_error";
  }
  return "request_failed";
}
function extractErrorTypeFromData(e) {
  if (e && typeof e === "object") {
    if (
      "error" in e &&
      e.error &&
      typeof e.error === "object" &&
      "type" in e.error &&
      typeof e.error.type === "string"
    )
      return e.error.type;
  }
  return;
}
var MYf, Qq;
