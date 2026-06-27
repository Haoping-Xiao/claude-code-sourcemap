// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hfo
// matched 2.1.88 source: src/services/mcp/client.ts
// class=modified (alt of src/services/mcp/client.ts)  jaccard=0.2113  score=0.3936  fileCov=0.3132
// note: deminified; 16 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hfo] deps: spt, jun, Vb, k7, y1, ZSe, er, je, kRa, KFn, lpt, mfo
LRa = require("os");
function r2n(e, t) {
  t((n) => {
    let r = n.mcp.clients.findIndex((i) => i.name === e);
    if (r === -1) return n;
    let o = n.mcp.clients[r];
    if (!o || o.type !== "connected") return n;
    let s = [...n.mcp.clients];
    return (
      (s[r] = {
        name: e,
        type: "needs-auth",
        config: o.config,
      }),
      {
        ...n,
        mcp: {
          ...n.mcp,
          clients: s,
        },
      }
    );
  });
}
function qRa(e) {
  if (e instanceof gpt) return true;
  if (e instanceof gi) return false;
  let t = "code" in e ? e.code : void 0;
  if (t === 404) return !(e instanceof wSe && e.message.includes("Failed to open SSE stream"));
  return (
    t === 400 &&
    /Server not initialized|No valid session ID|Mcp-Session-Id header is required/i.test(e.message)
  );
}
function hxp(e) {
  if (e.name === "AbortError") return true;
  let t = e.message;
  return (
    t.includes("ECONNRESET") ||
    t.includes("ETIMEDOUT") ||
    t.includes("EPIPE") ||
    t.includes("EHOSTUNREACH") ||
    t.includes("ECONNREFUSED") ||
    t.includes("Body Timeout Error") ||
    /\bterminated\b/.test(t) ||
    t.includes("SSE stream disconnected") ||
    t.includes("Failed to reconnect SSE stream")
  );
}
function bxp(e) {
  if (V3t(e)) return false;
  if (e instanceof DOMException && e.name === "TimeoutError") return false;
  if (
    e instanceof Error &&
    !(e instanceof gi) &&
    "code" in e &&
    typeof e.code === "number" &&
    e.code >= 400 &&
    e.code < 500
  )
    return false;
  if (e instanceof gi)
    return (
      e.code !== Si.RequestTimeout &&
      e.code !== Si.MethodNotFound &&
      e.code !== Si.InvalidRequest &&
      e.code !== Si.InvalidParams
    );
  return true;
}
async function o2n(e, t, n, r, o) {
  let s = false;
  for (let i = 0; ; i++) {
    let a = [],
      l,
      c = 0,
      u = false;
    try {
      do {
        let d = await e.request(
          {
            method: n,
            ...(l && {
              params: {
                cursor: l,
              },
            }),
          },
          r,
          {
            timeout: o6(),
          },
        );
        c++;
        let p = o(d);
        if (p) a.push(...p);
        if (((l = d.nextCursor), l && c >= PRa)) {
          u = true;
          break;
        }
      } while (l);
      if (u) sn(t, `${n} still returning nextCursor after ${PRa} pages; stopping`);
      if (c > 1) MRa(n, c, a.length, u ? "capped" : "complete");
      return a;
    } catch (d) {
      if (c > 0 && !s) ((s = true), MRa(n, c, a.length, "error"));
      let p = _xp[i];
      if (p === void 0 || !bxp(d)) throw d;
      (sn(t, `${n} failed (${be(d)}); retrying in ${p}ms`), await Nn(p));
    }
  }
}
function MRa(e, t, n, r) {
  G("tengu_mcp_list_paginated", {
    method: e,
    pageCount: t,
    itemCount: n,
    outcome: $e(r),
  });
}
function zRa(e) {
  let t = parseInt(process.env.MCP_TOOL_TIMEOUT || "", 10),
    r =
      (e?.timeout !== void 0 && e.timeout >= 1000 ? e.timeout : void 0) ??
      (t > 0 ? t : void 0) ??
      yxp;
  return Math.min(Math.max(r, 1000), VRa);
}
function Axp(e) {
  if (!Exp.has(e?.type ?? "")) return 0;
  let t = Oe.CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT ?? Sxp;
  if (t <= 0) return 0;
  return Math.min(Math.max(t, 1000), zRa(e));
}
function getMcpAuthCachePath() {
  return s2n.join(tr(), "mcp-needs-auth-cache.json");
}
function kfo() {
  if (!fpt)
    fpt = qs()
      .read(getMcpAuthCachePath())
      .then((e) => Ft(e))
      .catch(() => ({}));
  return fpt;
}
async function $Ra(e, t) {
  let r = (await kfo())[e];
  if (!r) return false;
  if (t.type === "claudeai-proxy" && r.id !== t.id) return false;
  if ((t.type === "stdio" || t.type === void 0) && t.pluginSource === void 0) return false;
  if ((t.type === "stdio" || t.type === void 0) && t.pluginSource !== void 0 && r.id !== aDe(t))
    return false;
  if ((t.type === "http" || t.type === "sse") && t.pluginSource !== void 0 && r.id !== void 0)
    return false;
  let s =
    t.type === "claudeai-proxy" ||
    (t.pluginSource !== void 0 && (t.type === "http" || t.type === "sse") && !yIn(t))
      ? wxp
      : vxp;
  return Date.now() - r.timestamp < s;
}
function Rfo(e, t) {
  n2n = n2n
    .then(async () => {
      let n = await kfo();
      n[e] = {
        timestamp: Date.now(),
        ...(t && {
          id: t,
        }),
      };
      let r = qs(),
        o = getMcpAuthCachePath();
      (await r.mkdir(s2n.dirname(o)), await r.write(o, De(n)), (fpt = null));
    })
    .catch(() => {});
}
function hGt(e) {
  let t = n2n
    .then(async () => {
      let n = await kfo();
      if (!(e in n)) return;
      (delete n[e], await qs().write(getMcpAuthCachePath(), De(n)), (fpt = null));
    })
    .catch(() => {});
  return ((n2n = t), t);
}
function JUn() {
  ((fpt = null),
    qs()
      .delete(getMcpAuthCachePath())
      .catch(() => {}));
}
function hde(e) {
  let t = c5(e);
  return t
    ? {
        mcpServerBaseUrl: t,
      }
    : {};
}
function Tfo(e, t, n) {
  let r = sg(),
    o = t.pluginSource ? Qo(t.pluginSource) : void 0,
    s = o && (Q0e(eWe(o.name, o.marketplace, null)) || r);
  Jc("mcp_server_connection", {
    status: n.status,
    transport_type: t.type ?? "stdio",
    server_scope: t.scope,
    duration_ms: String(Math.round(n.durationMs)),
    is_plugin: o !== void 0,
    ...(o && {
      plugin_id_hash: Abe(o.name, o.marketplace),
      "plugin.name": s ? o.name : Qj,
    }),
    ...(n.errorCode && {
      error_code: n.errorCode,
    }),
    ...(r && {
      server_name: e,
      ...(n.error && {
        error: n.error,
      }),
    }),
  });
}
function handleRemoteAuthFailure(name, serverRef, transportType, r) {
  let o = r instanceof OQe,
    s = o ? r.issues[0] : void 0,
    i = s
      ? `Server OAuth metadata invalid: ${s.path.join(".") || "(root)"} \u2014 ${s.message}`
      : void 0;
  return (
    G("tengu_mcp_server_needs_auth", {
      transportType: $e(transportType),
      ...(o && {
        cause: We("discovery_schema"),
      }),
      ...hde(serverRef),
    }),
    sn(
      name,
      `Authentication required for ${
        {
          sse: "SSE",
          http: "HTTP",
          "claudeai-proxy": "claude.ai proxy",
        }[transportType]
      } server`,
    ),
    Rfo(name, serverRef.type === "claudeai-proxy" ? serverRef.id : void 0),
    It("mcp_connect", "mcp_connect_needs_auth"),
    {
      name: name,
      type: "needs-auth",
      config: serverRef,
      error: i,
    }
  );
}
function ORa(e, t, n, r) {
  let o =
    `Server rejected the configured Authorization header (HTTP ${r ?? 401}). ` +
    "Check that the token is valid for this MCP endpoint \u2014 OAuth fallback is " +
    "disabled when headers.Authorization is set.";
  return (
    G("tengu_mcp_server_connection_failed", {
      transportType: $e(n),
      errorCode: We("AUTH_HEADER_REJECTED"),
      ...hde(t),
    }),
    It("mcp_connect", "mcp_connect_auth_header_rejected"),
    au(e, o),
    {
      name: e,
      type: "failed",
      config: t,
      error: o,
      errorCode: "AUTH_HEADER_REJECTED",
    }
  );
}
function NRa(e, t, n, r) {
  let o = "api.anthropic.com";
  try {
    if ("url" in t) o = new URL(t.url).host;
  } catch {}
  let s = !Ws()?.accessToken && KSe(),
    i;
  if (s)
    i =
      r === 403
        ? `${o} rejected your /design-login credential (HTTP 403). Your ` +
          "token may be missing a scope this server needs \u2014 run /design-login " +
          "to re-authorize it, or check that your account has access."
        : `${o} rejected your /design-login credential (HTTP ${r ?? 401}). Run /design-login to re-authorize it.`;
  else
    i =
      r === 403
        ? `${o} rejected your claude.ai login (HTTP 403). Your token may be ` +
          `missing a scope this server needs \u2014 run ${"/login"} and retry, or check that your account has access.`
        : `${o} rejected your claude.ai login (HTTP ${r ?? 401}). Run /login and retry.`;
  return (
    G("tengu_mcp_server_connection_failed", {
      transportType: $e(n),
      errorCode: We("FIRST_PARTY_AUTH_REJECTED"),
      ...hde(t),
    }),
    It("mcp_connect", "mcp_connect_first_party_auth_rejected"),
    au(e, i),
    {
      name: e,
      type: "failed",
      config: t,
      error: i,
      errorCode: "FIRST_PARTY_AUTH_REJECTED",
    }
  );
}
function Cxp(e) {
  return async (t, n) => {
    let r = new Headers(n?.headers);
    if (!r.has("Authorization")) {
      let o = XS();
      if (o) r.set("Authorization", `Bearer ${o}`);
    }
    return e(t, {
      ...n,
      headers: r,
    });
  };
}
function createClaudeAiProxyFetch(innerFetch) {
  return async (t, n) => {
    let r = async () => {
      await ch();
      let c = Ws();
      if (!c) throw Error("No claude.ai OAuth token available");
      let u = new Headers(n?.headers);
      return (
        u.set("Authorization", `Bearer ${c.accessToken}`),
        {
          response: await innerFetch(t, {
            ...n,
            headers: u,
          }),
          sentToken: c.accessToken,
        }
      );
    };
    async function o(c) {
      if (c.status >= 400 && c.headers.get("content-type")?.includes("text/event-stream")) {
        let u = await c.text(),
          d = u
            .split(
              `
`,
            )
            .find((p) => p.startsWith("data: "));
        return new Response(d ? d.slice(6) : u, {
          status: c.status,
          statusText: c.statusText,
          headers: c.headers,
        });
      }
      return c;
    }
    let { response: s, sentToken: i } = await r();
    if (s.status !== 401) return o(s);
    let a = s.headers.get("X-Mcp-Error-Code") ?? void 0;
    if (a)
      return (
        G("tengu_mcp_claudeai_proxy_401", {
          tokenChanged: false,
          proxyErrorCode: a,
        }),
        s
      );
    let l = await ZB(i).catch(() => false);
    if (
      (G("tengu_mcp_claudeai_proxy_401", {
        tokenChanged: l,
      }),
      !l)
    ) {
      let c = Ws()?.accessToken;
      if (!c || c === i) return s;
    }
    try {
      return o((await r()).response);
    } catch {
      return s;
    }
  };
}
async function xxp(e) {
  if (new URL(e).pathname.startsWith("/v1/design/")) {
    let t = await Lka()?.();
    if (t?.ok) {
      if (t.expanded)
        (Pka(
          "Added user:design:read and user:design:write to your claude.ai login (for the Design MCP connector).",
        ),
          G("tengu_mcp_first_party_scope_expanded", {
            pathPrefix: We("/v1/design/"),
          }));
      return t.accessToken;
    }
  }
  return (await ch(), Ws()?.accessToken);
}
function wfo(e) {
  return async (t, n) => {
    if (new Headers(n?.headers).has("Authorization") || !X9(t) || !Jl()) return e(t, n);
    let o = async () => {
        let l = await xxp(t);
        if (!l)
          return {
            response: await e(t, n),
            sentToken: void 0,
          };
        let c = {
          ...Object.fromEntries(new Headers(n?.headers)),
          Authorization: `Bearer ${l}`,
        };
        return {
          response: await e(t, {
            ...n,
            headers: c,
          }),
          sentToken: l,
        };
      },
      { response: s, sentToken: i } = await o();
    if (s.status !== 401 || !i) return s;
    if (!(await ZB(i).catch(() => false))) {
      let l = Ws()?.accessToken;
      if (!l || l === i) return s;
    }
    try {
      return (await o()).response;
    } catch {
      return s;
    }
  };
}
function kxp(e, t, n) {
  let r = new Headers({
    "User-Agent": d_e(),
    "Accept-Encoding": "identity",
    ...t,
  });
  new Headers(e).forEach((o, s) => r.set(s, o));
  for (let [o, s] of Object.entries(n)) r.set(o, s);
  return (r.set("Accept", "text/event-stream"), r);
}
function BRa(e) {
  if (!e) return false;
  let t = bi(e, ";").trim().toLowerCase();
  return Rxp.has(t === "image/jpg" ? "image/jpeg" : t);
}
function KRa(e) {
  let t = parseInt(process.env.MCP_TOOL_TIMEOUT || "", 10),
    r = (e?.timeout !== void 0 && e.timeout >= 1000 ? e.timeout : void 0) ?? (t > 0 ? t : void 0);
  return r !== void 0 ? Math.min(Math.max(r, URa), VRa) : URa;
}
function wrapFetchWithTimeout(baseFetch, t) {
  let n = KRa(t);
  return async (r, o) => {
    if ((o?.method ?? "GET").toUpperCase() === "GET") return baseFetch(r, o);
    let i = new Headers(o?.headers);
    if (!i.has("accept")) i.set("accept", MCP_STREAMABLE_HTTP_ACCEPT);
    if (ZDt()) {
      let u = EFn();
      if (u && !i.has("traceparent")) i.set("traceparent", u);
    }
    let a = new AbortController(),
      l = setTimeout(
        (u) => u.abort(new DOMException("The operation timed out.", "TimeoutError")),
        n,
        a,
      );
    l.unref?.();
    let c = o?.signal;
    if (c?.aborted) a.abort(c.reason);
    else
      c?.addEventListener("abort", () => a.abort(c.reason), {
        once: true,
      });
    try {
      return await baseFetch(r, {
        ...o,
        headers: i,
        signal: a.signal,
      });
    } finally {
      clearTimeout(l);
    }
  };
}
function hpt() {
  let e = parseInt(process.env.MCP_SERVER_CONNECTION_BATCH_SIZE || "", 10);
  return e > 0 ? e : 3;
}
function a2n() {
  let e = parseInt(process.env.MCP_REMOTE_SERVER_CONNECTION_BATCH_SIZE || "", 10);
  return e > 0 ? e : 20;
}
function mGt(e) {
  return !e.type || e.type === "stdio" || e.type === "sdk";
}
function Pxp(e) {
  return !e.name.startsWith("mcp__ide__") || Dxp.includes(e.name);
}
function Mxp(e) {
  let t = at("tengu_mcp_normalize_root_combinators", []);
  if (!Array.isArray(t) || t.length === 0) return false;
  if (t.includes("*")) return true;
  if (!("url" in e) || typeof e.url !== "string") return false;
  try {
    let n = new URL(e.url).hostname.toLowerCase();
    return t.some((r) => {
      if (typeof r !== "string" || r === "") return false;
      let o = r.toLowerCase();
      return n === o || n.endsWith(`.${o}`);
    });
  } catch {
    return false;
  }
}
function kqe(e, t) {
  return `${e}-${aDe(t)}`;
}
function $xp() {
  return {
    roots: [
      {
        uri: GRa.pathToFileURL(yr()).href,
      },
    ],
  };
}
async function ST(e, t) {
  let n = kqe(e, t),
    r = aP.cache?.get?.(n);
  if (r)
    try {
      let o = await r;
      if (o.type === "connected") await o.cleanup();
    } catch {}
  if (
    (aP.cache?.delete?.(n),
    lP.cache.delete(e),
    v4.cache.delete(e),
    cde.cache.delete(e),
    mJ.cache.delete(e),
    hk())
  )
    mpt.cache.delete(e);
}
async function ensureConnectedClient(client) {
  if (client.config.type === "sdk") return client;
  let t = await aP(client.name, client.config);
  if (t.type !== "connected")
    throw new mi(`MCP server "${client.name}" is not connected`, "MCP server not connected");
  return t;
}
function Lqe(e, t) {
  return aDe(e) === aDe(t);
}
function Nxp(e, t) {
  let n = Object.keys(e);
  if (n.length === 0) return t;
  return n
    .map((r) => {
      let o = e[r],
        s = typeof o === "object" && o !== null ? JSON.stringify(o) : String(o);
      return `${r}=${s}`;
    })
    .join(" ");
}
function YRa(e, t) {
  let n = [];
  for (let r of e) {
    if (r.type !== "connected") continue;
    if (r.name in t) continue;
    n.push(
      cde(r).then((o) => ({
        client: r,
        templates: o,
      })),
    );
  }
  return Promise.all(n);
}
async function XRa(e, t, n, r, o) {
  if (!e.capabilities?.completions) return [];
  try {
    let s = await e.client.complete({
      ref: {
        type: "ref/resource",
        uri: t,
      },
      argument: {
        name: n,
        value: r,
      },
      context:
        Object.keys(o).length > 0
          ? {
              arguments: o,
            }
          : void 0,
    });
    return (xe("mcp_complete_resource_template"), s.completion.values);
  } catch (s) {
    return (
      Le("mcp_complete_resource_template", "mcp_complete_resource_template_failed"),
      sn(e.name, `Failed to complete resource template: ${be(s)}`),
      []
    );
  }
}
async function Rre(e, t, n) {
  return (
    await callMCPTool({
      client: n,
      tool: e,
      args: t,
      signal: Sl().signal,
      imageLimits: H8,
      idleTimeoutMs: 0,
    })
  ).content;
}
async function reconnectMcpServerImpl(name, config) {
  try {
    (dye(), await ST(name, config));
    let n = await aP(name, config);
    if (n.type === "needs-auth") {
      sn(name, "Reconnect returned 'needs-auth'; retrying once after cache clear");
      let u = kqe(name, config);
      (aP.cache?.delete?.(u), (n = await aP(name, config)));
    }
    if (n.type !== "connected")
      return (
        It("mcp_reconnect", "mcp_reconnect_not_connected"),
        {
          client: n,
          tools: [],
          commands: [],
        }
      );
    if ((hGt(name), config.type === "http" || config.type === "sse")) await Rdo(name, config);
    let r = !!n.capabilities?.resources,
      [o, s, i, a] = await Promise.all([
        lP(n),
        mJ(n),
        hk() && r ? mpt(n) : Promise.resolve([]),
        r ? v4(n) : Promise.resolve([]),
      ]);
    if (n.discoveryAuthFailure)
      return (
        It("mcp_reconnect", "mcp_reconnect_needs_auth_discovery"),
        {
          client: {
            name: name,
            type: "needs-auth",
            config: config,
          },
          tools: [],
          commands: [],
        }
      );
    if (config.type === "claudeai-proxy") mdo(name);
    let l = [...s, ...i],
      c = [];
    if (r) {
      if (![QW, u5].some((d) => o.some((p) => Ql(p, d.name)))) c.push(QW, u5, xre);
    }
    return (
      xe("mcp_reconnect"),
      {
        client: n,
        tools: [...o, ...c],
        commands: l,
        resources: a.length > 0 ? a : void 0,
        resourceTemplates: [],
      }
    );
  } catch (n) {
    return (
      Le("mcp_reconnect", "mcp_reconnect_failed"),
      au(name, `Error during reconnection: ${be(n)}`),
      {
        client: {
          name: name,
          type: "failed",
          config: config,
        },
        tools: [],
        commands: [],
      }
    );
  }
}
async function FRa(e, t, n) {
  await C8(e, n, {
    concurrency: t,
  });
}
async function JRa(e, t) {
  if (e.length === 0) return 0;
  let n,
    r = new Promise((o) => {
      n = setTimeout((s) => s("deadline"), t, o);
    });
  try {
    let o = await Promise.all(
      e.map((s) =>
        Promise.race([
          s.then(
            () => "settled",
            () => "settled",
          ),
          r,
        ]),
      ),
    );
    return On(o, (s) => s === "deadline");
  } finally {
    clearTimeout(n);
  }
}
async function getMcpToolsCommandsAndResources(onConnectionAttempt, mcpConfigs) {
  let n = false,
    r = Object.entries(mcpConfigs ?? (await M4()).servers),
    o = [];
  for (let h of r)
    if (mk(h[0]))
      onConnectionAttempt({
        client: {
          name: h[0],
          type: "disabled",
          config: h[1],
        },
        tools: [],
        commands: [],
      });
    else o.push(h);
  let s = o.length,
    i = On(o, ([h, y]) => y.type === "stdio"),
    a = On(o, ([h, y]) => y.type === "sse"),
    l = On(o, ([h, y]) => y.type === "http"),
    c = On(o, ([h, y]) => y.type === "sse-ide"),
    u = On(o, ([h, y]) => y.type === "ws-ide"),
    d = o.filter(([h, y]) => mGt(y)),
    p = o.filter(([h, y]) => !mGt(y)),
    f = {
      totalServers: s,
      stdioCount: i,
      sseCount: a,
      httpCount: l,
      sseIdeCount: c,
      wsIdeCount: u,
    },
    m = [],
    g = async ([h, y]) => {
      try {
        if (mk(h)) {
          onConnectionAttempt({
            client: {
              name: h,
              type: "disabled",
              config: y,
            },
            tools: [],
            commands: [],
          });
          return;
        }
        if (
          (y.type === "claudeai-proxy" || y.type === "http" || y.type === "sse") &&
          ((await $Ra(h, y)) || ((y.type === "http" || y.type === "sse") && bIn(h, y, await hIn())))
        ) {
          if (y.type !== "claudeai-proxy" && y.pluginSource === void 0)
            sn(h, "Skipping connection (cached needs-auth)");
          onConnectionAttempt({
            client: {
              name: h,
              type: "needs-auth",
              config: y,
            },
            tools: XUn(h, y),
            commands: [],
          });
          return;
        }
        if (
          (y.type === "stdio" || y.type === void 0) &&
          y.pluginSource !== void 0 &&
          (await $Ra(h, y))
        ) {
          onConnectionAttempt({
            client: {
              name: h,
              type: "failed",
              config: y,
              error:
                "Skipping connection (recent failure cached; retries automatically in 15 min, or edit the plugin config to retry now)",
            },
            tools: [],
            commands: [],
          });
          return;
        }
        let b = await aP(h, y, f);
        if (b.type !== "connected") {
          onConnectionAttempt({
            client: b,
            tools: b.type === "needs-auth" ? XUn(h, y) : [],
            commands: [],
          });
          return;
        }
        if ((hGt(h), y.type === "http" || y.type === "sse")) await Rdo(h, y);
        m.push(
          (async () => {
            try {
              let _ = !!b.capabilities?.resources,
                [S, A, v, C] = await Promise.all([
                  lP(b),
                  mJ(b),
                  hk() && _ ? mpt(b) : Promise.resolve([]),
                  _ ? v4(b) : Promise.resolve([]),
                ]);
              if (b.discoveryAuthFailure) {
                onConnectionAttempt({
                  client: {
                    name: h,
                    type: "needs-auth",
                    config: y,
                  },
                  tools: XUn(h, y),
                  commands: [],
                });
                return;
              }
              if (y.type === "claudeai-proxy") mdo(h);
              let x = [...A, ...v],
                I = [];
              if (_ && !n) ((n = true), I.push(QW, u5, xre));
              onConnectionAttempt({
                client: b,
                tools: [...S, ...I],
                commands: x,
                resources: C.length > 0 ? C : void 0,
                resourceTemplates: void 0,
              });
            } catch (_) {
              (au(h, `Error fetching tools/commands/resources: ${be(_)}`),
                onConnectionAttempt({
                  client: {
                    name: h,
                    type: "failed",
                    config: y,
                  },
                  tools: [],
                  commands: [],
                }));
            }
          })(),
        );
      } catch (b) {
        (au(h, `Error fetching tools/commands/resources: ${be(b)}`),
          onConnectionAttempt({
            client: {
              name: h,
              type: "failed",
              config: y,
            },
            tools: [],
            commands: [],
          }));
      }
    };
  (await Promise.all([FRa(d, hpt(), g), FRa(p, a2n(), g)]), await Promise.all(m));
}
function prefetchAllMcpResources(mcpConfigs) {
  return new Promise((t) => {
    let n = 0,
      r = 0;
    if (((n = Object.keys(mcpConfigs).length), n === 0)) {
      t({
        clients: [],
        tools: [],
        commands: [],
      });
      return;
    }
    let o = [],
      s = [],
      i = [];
    getMcpToolsCommandsAndResources((a) => {
      if ((o.push(a.client), s.push(...a.tools), i.push(...a.commands), r++, r >= n)) {
        let l = i.reduce((c, u) => {
          let d = u.name.length + (u.description ?? "").length + (u.argumentHint ?? "").length;
          return c + d;
        }, 0);
        (G("tengu_mcp_tools_commands_loaded", {
          tools_count: s.length,
          commands_count: i.length,
          commands_metadata_length: l,
        }),
          t({
            clients: o,
            tools: s,
            commands: i,
          }));
      }
    }, mcpConfigs).catch((a) => {
      (au("prefetchAllMcpResources", `Failed to get MCP resources: ${be(a)}`),
        t({
          clients: [],
          tools: [],
          commands: [],
        }));
    });
  });
}
async function transformResultContent(resultContent, serverName, n, r = false) {
  switch (resultContent.type) {
    case "text": {
      let o = {
        type: "text",
        text: resultContent.text,
      };
      if (r) {
        let s = resultContent._meta;
        if (s) o._meta = s;
      }
      return [o];
    }
    case "audio": {
      let o = resultContent;
      return await persistBlobToTextBlock(
        Buffer.from(o.data, "base64"),
        o.mimeType,
        serverName,
        `[Audio from ${serverName}] `,
      );
    }
    case "image": {
      if (BRa(resultContent.mimeType)) {
        let { block: o } = await FM({
          data: String(resultContent.data),
          mediaType: resultContent.mimeType,
          limits: n,
        });
        return [o];
      }
      return await persistBlobToTextBlock(
        Buffer.from(String(resultContent.data), "base64"),
        resultContent.mimeType,
        serverName,
        `[Image from ${serverName}] `,
      );
    }
    case "resource": {
      let o = resultContent.resource,
        s = `[Resource from ${serverName} at ${o.uri}] `;
      if ("text" in o)
        return [
          {
            type: "text",
            text: `${s}${o.text}`,
          },
        ];
      else if ("blob" in o)
        if (BRa(o.mimeType)) {
          let { block: a } = await FM({
              data: o.blob,
              mediaType: o.mimeType,
              limits: n,
            }),
            l = [];
          if (s)
            l.push({
              type: "text",
              text: s,
            });
          return (l.push(a), l);
        } else
          return await persistBlobToTextBlock(
            Buffer.from(o.blob, "base64"),
            o.mimeType,
            serverName,
            s,
          );
      return [];
    }
    case "resource_link": {
      let o = resultContent,
        s = `[Resource link: ${o.name}] ${o.uri}`;
      if (o.description) s += ` (${o.description})`;
      return [
        {
          type: "text",
          text: s,
        },
      ];
    }
    default:
      return [];
  }
}
async function persistBlobToTextBlock(bytes, mimeType, serverName, sourceDescription) {
  let o = `mcp-${hc(serverName)}-blob-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    s = await fqe(bytes, mimeType, o);
  if ("error" in s)
    return [
      {
        type: "text",
        text: `${sourceDescription}Binary content (${mimeType || "unknown type"}, ${bytes.length} bytes) could not be saved to disk: ${s.error}`,
      },
    ];
  return [
    {
      type: "text",
      text: C3t(s.filepath, mimeType, s.size, sourceDescription),
    },
  ];
}
function fGt(e, t = 2) {
  if (e === null) return "null";
  if (Array.isArray(e)) {
    if (e.length === 0) return "[]";
    return `[${fGt(e[0], t - 1)}]`;
  }
  if (typeof e === "object") {
    if (t <= 0) return "{...}";
    let r = Object.entries(e)
        .slice(0, 10)
        .map(([s, i]) => `${s}: ${fGt(i, t - 1)}`),
      o = Object.keys(e).length > 10 ? ", ..." : "";
    return `{${r.join(", ")}${o}}`;
  }
  return typeof e;
}
async function transformMCPResult(result, tool, name, r) {
  if (result && typeof result === "object") {
    if ("toolResult" in result)
      return {
        content: String(result.toolResult),
        type: "toolResult",
      };
    if ("structuredContent" in result && result.structuredContent !== void 0) {
      let s = De(result.structuredContent),
        i = fGt(result.structuredContent);
      if ("content" in result && Array.isArray(result.content)) {
        let a = result.content.filter(
          (l) => l && typeof l === "object" && "type" in l && l.type !== "text",
        );
        if (a.length > 0) {
          let l = (
            await Promise.all(a.map((c) => transformResultContent(c, name, r, true)))
          ).flat();
          if (l.length > 0) {
            let c = [
              ...l,
              {
                type: "text",
                text: s,
              },
            ];
            return {
              content: c,
              type: "contentArray",
              schema: fGt(Uut(c)),
            };
          }
        }
      }
      return {
        content: s,
        type: "structuredContent",
        schema: i,
      };
    }
    if ("content" in result && Array.isArray(result.content)) {
      let s = (
        await Promise.all(result.content.map((i) => transformResultContent(i, name, r, true)))
      ).flat();
      return {
        content: s,
        type: "contentArray",
        schema: fGt(Uut(s)),
      };
    }
  }
  let o = `MCP server "${name}" tool "${tool}": unexpected response format`;
  throw (au(name, o), new mi(o, "MCP tool unexpected response format"));
}
function jRa(e) {
  if (!e || typeof e === "string") return false;
  return e.some((t) => t.type === "image");
}
async function processMCPResult(result, tool, name, r, o = false) {
  let { content: s, type: i, schema: a } = await transformMCPResult(result, tool, name, r);
  if (name === "ide") return s;
  if (o && !jRa(s)) return s;
  if (!(await Tlo(s))) return s;
  let l = g4t(s);
  if (ml(process.env.ENABLE_MCP_LARGE_OUTPUT_FILES))
    return (
      G("tengu_mcp_large_result_handled", {
        outcome: "truncated",
        reason: "env_disabled",
        sizeEstimateTokens: l,
      }),
      await h4t(s)
    );
  if (!s) return s;
  if (jRa(s))
    return (
      G("tengu_mcp_large_result_handled", {
        outcome: "truncated",
        reason: "contains_images",
        sizeEstimateTokens: l,
      }),
      await h4t(s)
    );
  let c = Date.now(),
    u = `mcp-${hc(name)}-${hc(tool)}-${c}`,
    d = Uut(s),
    p = tFn() || at("tengu_mcp_singleton_unwrap", true),
    f = Array.isArray(d) ? d.length : void 0,
    m =
      p &&
      Array.isArray(d) &&
      d.length === 1 &&
      d[0]?.type === "text" &&
      !("annotations" in d[0]) &&
      !("_meta" in d[0])
        ? d[0].text
        : void 0,
    g = typeof d === "string" ? d : (m ?? De(d, null, 2)),
    h = i === "toolResult" || m !== void 0,
    y = h ? "text" : "json",
    b;
  if (h) {
    let A = g.split(`
`);
    if (A.length > 1 && A.at(-1) === "") A.pop();
    let v = 0;
    for (let C of A) if (C.length > v) v = C.length;
    b = {
      count: A.length,
      maxLen: v,
    };
  }
  let _ = await pDe(g, u);
  if (mDe(_)) {
    let A = g.length;
    return (
      G("tengu_mcp_large_result_handled", {
        outcome: "truncated",
        reason: "persist_failed",
        sizeEstimateTokens: l,
      }),
      `Error: result (${A.toLocaleString()} characters) exceeds maximum allowed tokens. Failed to save output to file: ${_.error}. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data.`
    );
  }
  G("tengu_mcp_large_result_handled", {
    outcome: "persisted",
    reason: "file_saved",
    sizeEstimateTokens: l,
    persistedSizeChars: _.originalSize,
    resultType: i,
    blockCount: f,
    persistedAs: y,
  });
  let S = m !== void 0 ? nFn("toolResult") : nFn(i, a);
  return $do(_.filepath, _.originalSize, S, void 0, b);
}
function Lfo(e) {
  let t = e.data;
  return (
    t != null && typeof t === "object" && "elicitations" in t && Array.isArray(t.elicitations)
      ? t.elicitations
      : []
  ).filter((r) => qvr.safeParse(r).success);
}
async function callMCPToolWithUrlElicitationRetry({
  client: e,
  clientConnection: t,
  tool: n,
  args: r,
  meta: o,
  signal: s,
  setAppState: i,
  onProgress: a,
  callToolFn: l = callMCPTool,
  requestDialog: c,
  hasResultSizeAnnotation: u = false,
  imageLimits: d,
  toolExecution: p,
  taskRegistry: f,
  toolUseId: m,
}) {
  for (let h = 0; ; h++)
    try {
      let y = () =>
        l({
          client: e,
          tool: n,
          args: r,
          meta: o,
          signal: s,
          onProgress: a,
          hasResultSizeAnnotation: u,
          imageLimits: d,
          toolExecution: p,
          taskRegistry: f,
          toolUseId: m,
        });
      if (!ude()) return await y();
      let b;
      try {
        b = iP(De(r)).content;
      } catch {
        b = void 0;
      }
      return await lka(
        "claude_code.mcp.rpc",
        {
          spanType: "mcp.rpc",
          attrs: {
            "rpc.system": "mcp",
            "rpc.service": e.name,
            "rpc.method": "tools/call",
            mcp_tool: n,
            attempt: h,
            ...(b !== void 0 && {
              mcp_args: b,
            }),
          },
          isExpectedError: (_) => _ instanceof gi && _.code === Si.UrlElicitationRequired,
        },
        y,
      );
    } catch (y) {
      if (!(y instanceof gi) || y.code !== Si.UrlElicitationRequired) throw y;
      if (h >= 3) throw y;
      let b = Lfo(y),
        _ = t.type === "connected" ? t.name : "unknown";
      if (b.length === 0)
        throw (sn(_, `Tool '${n}' returned -32042 but no valid elicitations in error data`), y);
      sn(
        _,
        `Tool '${n}' requires URL elicitation (error -32042, attempt ${h + 1}), processing ${b.length} elicitation(s)`,
      );
      for (let S of b) {
        let { elicitationId: A } = S,
          v = await j3t(_, S, s);
        if (v) {
          if ((sn(_, `URL elicitation ${A} resolved by hook: ${De(v)}`), v.action !== "accept"))
            return {
              content: `URL elicitation was ${v.action === "decline" ? "declined" : v.action + "ed"} by a hook. The tool "${n}" could not complete because it requires the user to open a URL.`,
              urlElicitationDeclined: {
                url: S.url,
              },
              isError: true,
            };
          continue;
        }
        let C = c
            ? await c(
                But,
                {
                  serverName: _,
                  params: S,
                },
                {
                  signal: s,
                },
              )
            : {
                action: "cancel",
              },
          x = await G3t(_, C, s, "url", A);
        if (x.action !== "accept")
          return (
            sn(
              _,
              `User ${x.action === "decline" ? "declined" : x.action + "ed"} URL elicitation ${A}`,
            ),
            {
              content: `URL elicitation was ${x.action === "decline" ? "declined" : x.action + "ed"} by the user. The tool "${n}" could not complete because it requires the user to open a URL.`,
              urlElicitationDeclined: {
                url: S.url,
              },
              isError: true,
            }
          );
        sn(_, `Elicitation ${A} completed, retrying tool call`);
      }
    }
}
function Fxp(e, t) {
  if (!e.isError) return;
  let n = "Unknown error";
  if (Array.isArray(e.content) && e.content.length > 0) {
    let r = e.content.flatMap((o) => {
      if (o == null || typeof o !== "object") return [];
      if ("text" in o) return [String(o.text)];
      if (o.type === "resource_link") {
        let s = o,
          i = `[Resource link: ${s.name}] ${s.uri}`;
        if (s.description) i += ` (${s.description})`;
        return [i];
      }
      return [];
    });
    if (r.length > 0)
      n = r.join(`
`);
  } else if ("error" in e) n = String(e.error);
  throw (
    au(t, n),
    new gGt(
      n,
      "MCP tool returned error",
      e._meta
        ? {
            _meta: e._meta,
          }
        : void 0,
    )
  );
}
async function callMCPTool({
  client: { client: e, name: t, config: n, transportErrorState: r },
  tool: o,
  args: s,
  meta: i,
  signal: a,
  onProgress: l,
  hasResultSizeAnnotation: c = false,
  imageLimits: u,
  toolExecution: d,
  taskRegistry: p,
  toolUseId: f,
  idleTimeoutMs: m,
  isAuthRetry: g = false,
}) {
  let h = Date.now(),
    y,
    b = {
      armedAt: 0,
    };
  r?.activeCallWatchdogs.add(b);
  try {
    sn(t, `Calling MCP tool: ${o}`);
    let _ = m ?? Axp(n),
      S = h,
      A,
      v = new Promise((N, B) => {
        A = B;
      });
    y = setInterval(() => {
      let N = Math.floor((Date.now() - h) / 1000);
      if (
        (sn(t, `Tool '${o}' still running (${N}s elapsed)`),
        b.armedAt > 0 && Date.now() - b.armedAt > 90000)
      ) {
        (sn(
          t,
          `Tool '${o}' aborting: transport error ${Math.floor((Date.now() - b.armedAt) / 1000)}s ago, response presumed lost`,
        ),
          A(
            new mi(
              `MCP server "${t}" transport dropped mid-call; response for tool "${o}" was lost`,
              "MCP transport lost mid-call",
            ),
          ));
        return;
      }
      if (r?.pendingElicitations) S = Date.now();
      else if (r && r.lastElicitationClosedAt > S) S = r.lastElicitationClosedAt;
      if (_ > 0 && Date.now() - S > _) {
        let B = Math.floor((Date.now() - S) / 1000);
        (sn(
          t,
          `Tool '${o}' aborting: no response or progress notification for ${B}s (idle timeout ${Math.floor(_ / 1000)}s)`,
        ),
          A(
            new mi(
              `MCP server "${t}" tool "${o}" sent no response or progress for ${B}s; aborting. Set CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT (ms) higher or to 0 if this tool is expected to run silently for longer.`,
              "MCP tool idle timeout",
            ),
          ));
      }
    }, 30000);
    let C = zRa(n),
      x,
      I = new Promise((N, B) => {
        x = setTimeout(
          ($, q, W, V) => {
            $(
              new mi(
                `MCP server "${q}" tool "${W}" timed out after ${Math.floor(V / 1000)}s`,
                "MCP tool timeout",
              ),
            );
          },
          C,
          B,
          t,
          o,
          C,
        );
      }),
      k = () => {
        if (x) clearTimeout(x);
        if (y !== void 0) (clearInterval(y), (y = void 0));
        r?.activeCallWatchdogs.delete(b);
      },
      D = await Promise.race([
        e.callTool(
          {
            name: o,
            arguments: s,
            _meta: i,
          },
          z2,
          {
            signal: a,
            timeout: C,
            onprogress: (N) => {
              if (((b.armedAt = 0), (S = Date.now()), l))
                l({
                  type: "mcp_progress",
                  status: "progress",
                  serverName: t,
                  toolName: o,
                  progress: N.progress,
                  total: N.total,
                  progressMessage: N.message,
                });
            },
          },
        ),
        I,
        v,
      ]).finally(k);
    Fxp(D, t);
    let P = Date.now() - h,
      O =
        P < 1000
          ? `${P}ms`
          : P < 60000
            ? `${Math.floor(P / 1000)}s`
            : `${Math.floor(P / 60000)}m ${Math.floor((P % 60000) / 1000)}s`;
    sn(t, `Tool '${o}' completed successfully in ${O}`);
    let L = LIa(t);
    if (L)
      G("tengu_code_indexing_tool_used", {
        tool: $e(L),
        source: We("mcp"),
        success: true,
      });
    return {
      content: await processMCPResult(D, o, t, u, c),
      _meta: D._meta,
      structuredContent: D.structuredContent,
    };
  } catch (_) {
    if (y !== void 0) clearInterval(y);
    r?.activeCallWatchdogs.delete(b);
    let S = Date.now() - h;
    if (_ instanceof Error && _.name !== "AbortError")
      sn(t, `Tool '${o}' failed after ${Math.floor(S / 1000)}s: ${_.message}`);
    if (_ instanceof Error) {
      let v = _ instanceof gi ? void 0 : "code" in _ ? _.code : void 0,
        C = (n.type === "http" || n.type === "sse" || n.type === "ws") && !!n.headersHelper,
        x = v === 401 || _ instanceof sL || (v === 403 && C);
      if (C && !g) {
        let D = kqe(t, n),
          P = Cfo.get(D),
          O = P !== void 0 && _ instanceof gi && _.code === Si.ConnectionClosed;
        if (x || O) {
          if (
            (sn(t, `Tool '${o}' returned ${v ?? 401}; re-running headersHelper and retrying once`),
            It("mcp_headers_helper", "reauth_retry"),
            !P)
          )
            ((P = (async () => (await ST(t, n), aP(t, n)))()),
              Cfo.set(D, P),
              P.finally(() => Cfo.delete(D)).catch(() => {}));
          let L = await P;
          if (L.type === "connected")
            return callMCPTool({
              client: L,
              tool: o,
              args: s,
              meta: i,
              signal: a,
              onProgress: l,
              hasResultSizeAnnotation: c,
              imageLimits: u,
              toolExecution: d,
              taskRegistry: p,
              toolUseId: f,
              idleTimeoutMs: m,
              isAuthRetry: true,
            });
          sn(t, `headersHelper reconnect returned '${L.type}'; falling through to needs-auth`);
        }
      }
      if (x) {
        sn(t, "Tool call returned 401 Unauthorized - token may have expired");
        let D = hde(n);
        throw (
          G("tengu_mcp_tool_call_auth_error", {
            errorCode: String(v ?? 401),
            transportType: $e(n.type ?? "stdio"),
            ...D,
            ...(fke(t, n) && {
              mcpServerName: hc(t),
              mcpToolName: hc(o),
            }),
          }),
          new Rqe(t, `MCP server "${t}" requires re-authorization (token expired)`)
        );
      }
      let I = qRa(_),
        k =
          "code" in _ &&
          _.code === -32000 &&
          _.message.includes("Connection closed") &&
          (n.type === "http" || n.type === "claudeai-proxy");
      if (I || k) {
        sn(
          t,
          `MCP session expired during tool call (${I ? "stale session" : "connection closed"}), clearing connection cache for re-initialization`,
        );
        let D = hde(n);
        throw (
          G("tengu_mcp_session_expired", {
            errorCode: v !== void 0 ? String(v) : void 0,
            transportType: $e(n.type ?? "stdio"),
            ...D,
            ...(fke(t, n) && {
              mcpServerName: hc(t),
              mcpToolName: hc(o),
            }),
          }),
          await ST(t, n),
          new gpt(t)
        );
      }
    }
    let A = _;
    if (
      _ instanceof OQe ||
      ((A?.name === "ZodError" || A?.name === "$ZodError") && Array.isArray(A?.issues))
    )
      throw new WRa(t, _);
    if (!(_ instanceof Error) || _.name !== "AbortError") throw _;
    return {
      content: void 0,
      isError: true,
    };
  } finally {
    if (y !== void 0) clearInterval(y);
  }
}
function jxp(e) {
  if (e.message.content[0]?.type !== "tool_use") return;
  return e.message.content[0].id;
}
async function connectToServer(e, t) {
  let n = [],
    r = [],
    o = [],
    s = await Promise.allSettled(
      Object.entries(e).map(async ([a, l]) => {
        let c = new Hpo(a, t),
          u = new ONn(
            {
              name: "claude-code",
              title: "Claude Code",
              version:
                {
                  ISSUES_EXPLAINER:
                    "report the issue at https://github.com/anthropics/claude-code/issues",
                  PACKAGE_URL: "@anthropic-ai/claude-code",
                  README_URL: "https://code.claude.com/docs/en/overview",
                  VERSION: "2.1.195",
                  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                  BUILD_TIME: "2026-06-26T01:00:56Z",
                  GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                }.VERSION ?? "unknown",
              description: "Anthropic's agentic coding tool",
              websiteUrl: L5e,
            },
            {
              capabilities: {},
            },
          );
        try {
          await u.connect(c);
          let d = u.getServerCapabilities(),
            p = u.getInstructions(),
            f = p;
          if (p && p.length > uJ)
            ((f = Ix(p, uJ) + "\u2026 [truncated]"),
              sn(a, `Server instructions truncated from ${p.length} to ${uJ} chars`));
          let m = {
            type: "connected",
            name: a,
            capabilities: d || {},
            instructions: f,
            client: u,
            config: {
              ...l,
              scope: "dynamic",
            },
            cleanup: async () => {
              await u.close();
            },
          };
          if ((lP.cache.delete(a), hk())) mpt.cache.delete(a);
          let g = [];
          if (d?.tools) {
            let y = await lP(m);
            g.push(...y);
          }
          let h = hk() && d?.resources ? await mpt(m) : [];
          return (
            xe("mcp_sdk_connect"),
            {
              client: m,
              tools: g,
              commands: h,
            }
          );
        } catch (d) {
          return (
            Le("mcp_sdk_connect", "mcp_sdk_connect_failed"),
            au(a, `Failed to connect SDK MCP server: ${d}`),
            {
              client: {
                type: "failed",
                name: a,
                config: {
                  ...l,
                  scope: "user",
                },
              },
              tools: [],
              commands: [],
            }
          );
        }
      }),
    );
  for (let a of s)
    if (a.status === "fulfilled")
      (n.push(a.value.client), r.push(...a.value.tools), o.push(...a.value.commands));
  if (n.some((a) => a.type === "connected" && !!a.capabilities?.resources)) {
    if (![QW, u5].some((l) => r.some((c) => Ql(c, l.name)))) r.push(QW, u5, xre);
  }
  return {
    clients: n,
    tools: r,
    commands: o,
  };
}
async function Mfo(e) {
  await Promise.all(
    e.map(async (t) => {
      if (t.type !== "connected") return;
      try {
        await t.cleanup();
      } catch (n) {
        T(`MCP client cleanup failed for ${t.name}: ${n}`, {
          level: "error",
        });
      }
    }),
  );
}
var GRa,
  s2n,
  mpt,
  Rqe,
  gpt,
  gGt,
  WRa,
  yxp = 100000000 /* 1e8 */,
  VRa = 2147483647,
  PRa = 20,
  _xp,
  Sxp = 300000,
  Exp,
  Hxp = () => (f0a(), ro(p0a)),
  Txp = () => (CRa(), ro(wRa)),
  vxp = 900000,
  wxp = 14400000,
  fpt = null,
  n2n,
  Rxp,
  URa = 60000,
  MCP_STREAMABLE_HTTP_ACCEPT = "application/json, text/event-stream",
  Dxp,
  Cfo,
  aP,
  l2n = 20,
  Oxp,
  lP,
  v4,
  cde,
  mJ;
