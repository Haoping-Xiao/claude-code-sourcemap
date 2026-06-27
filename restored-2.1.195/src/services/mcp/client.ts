// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BI
// matched 2.1.88 source: src/services/mcp/client.ts
// class=modified  jaccard=0.3339  score=0.5539  fileCov=0.4568
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var BI = E(() => {
  yua();
  vua();
  plo();
  Rua();
  Vb();
  Sae();
  Qi();
  Mua();
  ZUt();
  Xr();
  ft();
  Lne();
  Rc();
  GNn();
  ii();
  m4t();
  sSa();
  eIa();
  H3t();
  I3t();
  kIa();
  fp();
  oo();
  fd();
  Udo();
  je();
  wr();
  fn();
  At();
  lT();
  Gx();
  aE();
  xW();
  mFn();
  vn();
  qdt();
  y4t();
  wxa();
  SG();
  Sbe();
  I1();
  Ls();
  u9();
  $g();
  Mh();
  zH();
  cDe();
  Ist();
  kM();
  SKr();
  sr();
  _1();
  I8();
  WSe();
  aS();
  II();
  m5();
  K0();
  dn();
  Un();
  kt();
  Du();
  hka();
  fpo();
  udo();
  AFn();
  sst();
  Ire();
  Ox();
  wUn();
  bka();
  Eka();
  pdo();
  jdt();
  kst();
  g$();
  wka();
  oke();
  xka();
  S9();
  Cre();
  Yle();
  a5();
  Kv();
  Oka();
  Apo();
  VM();
  S_e();
  db();
  fn();
  Jt();
  Yle();
  ((GRa = require("url")),
    (s2n = require("path")),
    (mpt = (Mpo(), ro(Ppo)).fetchMcpSkillsForClient));
  Rqe = class Rqe extends Error {
    serverName;
    constructor(e, t) {
      super(t);
      ((this.name = "McpAuthError"), (this.serverName = e));
    }
  };
  gpt = class gpt extends Error {
    constructor(e) {
      super(`MCP server "${e}" session expired`);
      this.name = "McpSessionExpiredError";
    }
  };
  gGt = class gGt extends mi {
    mcpMeta;
    constructor(e, t, n) {
      super(e, t);
      this.mcpMeta = n;
      this.name = "McpToolCallError";
    }
  };
  WRa = class WRa extends mi {
    constructor(e, t) {
      let n = typeof t?.message === "string" ? t.message : String(t);
      super(
        `MCP server "${e}" returned a malformed result that failed schema validation: ${n}`,
        "MCP server returned a malformed result",
      );
      ((this.name = "McpResponseSchemaError"), (this.cause = t));
    }
  };
  _xp = [250, 500, 1000];
  Exp = new Set(["http", "sse", "ws", "claudeai-proxy"]);
  n2n = Promise.resolve();
  Rxp = new Set(["image/jpeg", "image/png", "image/gif", "image/webp"]);
  Dxp = ["mcp__ide__executeCode", "mcp__ide__getDiagnostics"];
  Cfo = new Map();
  aP = Cn(async (e, t, n) => {
    let r = Date.now();
    {
      let a = t.configError;
      if (!a && "url" in t)
        try {
          new URL(t.url);
        } catch {
          a = `'url' is not a valid URL: ${De(t.url)}. Update the server's config and reconnect.`;
        }
      if (a)
        return (
          G("tengu_mcp_server_config_invalid", {
            transportType: $e(t.type ?? "stdio"),
            field: We("url"),
            source: We(t.configError ? "loader" : "connect"),
          }),
          sn(e, a),
          au(e, a),
          {
            name: e,
            type: "failed",
            config: t,
            error: a,
            errorCode: "INVALID_CONFIG",
          }
        );
    }
    let o, s, i;
    try {
      let k = function () {
          let B = Date.now();
          for (let $ of I.activeCallWatchdogs) if ($.armedAt === 0) $.armedAt = B;
        },
        a = "url" in t && ukn(t.url),
        l = (t.type === "sse" || t.type === "http") && e3e(t),
        c =
          (t.type === "sse" || t.type === "http") &&
          !l &&
          !a &&
          X9(t.url) &&
          Jl() &&
          (!!Ws()?.accessToken || KSe());
      if (c)
        G("tengu_mcp_first_party_auto_auth", {
          transportType: $e(t.type),
          ...hde(t),
        });
      if (t.type === "sse") {
        let B = l || c ? void 0 : new lqe(e, t);
        s = B;
        let $ = await TFn(e, t),
          q = await HFn(t.url),
          W = Zdt(R5e(void 0, q));
        if (B) W = KUn(W, B);
        if (((W = t2n(W, t)), c)) W = wfo(W);
        let V = {
            authProvider: B,
            fetch: W,
            requestInit: {
              ...q,
              headers: {
                "User-Agent": d_e(),
                "Accept-Encoding": "identity",
                ...$,
              },
            },
          },
          Y = async (z, K) => {
            let Z = {},
              J = await B?.tokens();
            if (J) Z.Authorization = `Bearer ${J.access_token}`;
            let ne = await HFn(String(z));
            return fetch(z, {
              ...K,
              ...ne,
              headers: kxp(K?.headers, Z, $),
            });
          };
        ((V.eventSourceInit = {
          fetch: Zdt(B ? KUn(Y, B) : c ? wfo(Y) : Y),
        }),
          (i = new UNn(new URL(t.url), V)),
          sn(e, "SSE transport initialized, awaiting connection"));
      } else if (t.type === "sse-ide") {
        sn(e, `Setting up SSE-IDE transport to ${t.url}`);
        let B = {
          fetch: Zdt(globalThis.fetch),
          requestInit: {
            headers: {
              "User-Agent": d_e(),
              "Accept-Encoding": "identity",
            },
          },
        };
        i = new UNn(new URL(t.url), B);
      } else if (t.type === "ws-ide") {
        let B = HY(),
          $ = {
            "User-Agent": d_e(),
            ...(t.authToken && {
              "X-Claude-Code-Ide-Authorization": t.authToken,
            }),
          },
          q = new globalThis.WebSocket(t.url, {
            protocols: ["mcp"],
            headers: $,
            proxy: h9(t.url),
            tls: B || void 0,
          });
        i = new hFn(q);
      } else if (t.type === "ws") {
        sn(e, `Initializing WebSocket transport to ${t.url}`);
        let B = await TFn(e, t),
          $ = HY(),
          q = a ? XS() : null,
          W = {
            "User-Agent": d_e(),
            ...(q && {
              Authorization: `Bearer ${q}`,
            }),
            ...B,
          },
          V = xw(W, (z, K) => (K.toLowerCase().endsWith("authorization") ? "[REDACTED]" : z));
        sn(
          e,
          `WebSocket transport options: ${De({
            url: t.url,
            headers: V,
            hasSessionAuth: !!q,
          })}`,
        );
        let Y = new globalThis.WebSocket(t.url, {
          protocols: ["mcp"],
          headers: W,
          proxy: h9(t.url),
          tls: $ || void 0,
        });
        i = new hFn(Y);
      } else if (t.type === "http") {
        (sn(e, `Initializing HTTP transport to ${t.url}`),
          sn(e, `Node version: ${process.version}, Platform: linux`),
          sn(
            e,
            `Environment: ${De({
              NODE_OPTIONS: process.env.NODE_OPTIONS || "not set",
              UV_THREADPOOL_SIZE: process.env.UV_THREADPOOL_SIZE || "default",
              HTTP_PROXY: zge(process.env.HTTP_PROXY || "not set"),
              HTTPS_PROXY: zge(process.env.HTTPS_PROXY || "not set"),
              NO_PROXY: process.env.NO_PROXY || "not set",
            })}`,
          ));
        let B = l || c ? void 0 : new lqe(e, t);
        s = B;
        let $ = await TFn(e, t),
          q = await HFn(t.url),
          W = Zdt(R5e(void 0, q));
        if (B) W = KUn(W, B);
        if (((W = t2n(W, t)), c)) W = wfo(W);
        if (a) W = Cxp(W);
        if (Wwi(t)) W = ddo(W, t.url);
        let V = {
            authProvider: B,
            fetch: W,
            requestInit: {
              ...q,
              headers: {
                "User-Agent": d_e(),
                "Accept-Encoding": "identity",
                ...$,
              },
            },
          },
          Y = V.requestInit?.headers
            ? xw(V.requestInit.headers, (z, K) =>
                K.toLowerCase().endsWith("authorization") ? "[REDACTED]" : z,
              )
            : void 0;
        (sn(
          e,
          `HTTP transport options: ${De({
            url: t.url,
            headers: Y,
            hasAuthProvider: !!B,
            timeoutMs: KRa(t),
          })}`,
        ),
          (i = new jNn(new URL(t.url), V)),
          sn(e, "HTTP transport created successfully"));
      } else if (t.type === "sdk") throw Error("SDK servers should be handled in print.ts");
      else if (t.type === "claudeai-proxy") {
        if (!Jl()) throw Error("claude.ai MCP proxy is not available on third-party providers");
        if ((sn(e, `Initializing claude.ai proxy transport for server ${t.id}`), !Ws()))
          throw Error("No claude.ai OAuth token found");
        let $ = $s(),
          q = `${$.MCP_PROXY_URL}${$.MCP_PROXY_PATH.replace("{server_id}", t.id)}`;
        sn(e, `Using claude.ai proxy at ${q}`);
        let W = Ixp(Zdt(globalThis.fetch)),
          V = kg({
            url: q,
          }),
          z = {
            fetch: IUn(t) ? ddo(t2n(W, t), q) : t2n(W, t),
            requestInit: {
              ...V,
              headers: {
                "User-Agent": d_e(),
                "Accept-Encoding": "identity",
                "X-Mcp-Client-Session-Id": Rt(),
              },
            },
          };
        ((i = new jNn(new URL(q), z)), sn(e, "claude.ai proxy transport created successfully"));
      } else if ((t.type === "stdio" || !t.type) && bbe(e)) {
        let { createChromeContext: B } = await Promise.resolve().then(() => (Ofo(), $fo)),
          { createChromeSocketClient: $, createClaudeForChromeMcpServer: q } =
            await Promise.resolve().then(() => (fIr(), Cfs)),
          { createLinkedTransportPair: W } = await Promise.resolve().then(() => bfo),
          { setChromeBinding: V } = await Promise.resolve().then(() => (Upo(), u0a)),
          Y = B(t.env),
          z = $(Y);
        (V(Y, z), (o = q(Y, z)));
        let [K, Z] = W();
        (await o.connect(Z), (i = K), sn(e, "In-process Chrome MCP server started"));
      } else if ((t.type === "stdio" || !t.type) && uke(e)) {
        let { createComputerUseMcpServerForCli: B } = await Promise.resolve().then(
            () => (Hfo(), Afo),
          ),
          { createLinkedTransportPair: $ } = await Promise.resolve().then(() => bfo);
        o = await B();
        let [q, W] = $();
        (await o.connect(W), (i = q), sn(e, "In-process Computer Use MCP server started"));
      } else if (t.type === "stdio" || !t.type) {
        let B = process.env.CLAUDE_CODE_SHELL_PREFIX || t.command,
          $ = process.env.CLAUDE_CODE_SHELL_PREFIX ? [ja([t.command, ...t.args])] : t.args,
          q = LKr()
            ? {
                ...ulo(),
                ...Qst(),
              }
            : DM(),
          { CLAUDE_CODE_CHILD_SESSION: W, ...V } = q;
        i = new F3t({
          command: B,
          args: $,
          env: {
            ...V,
            CLAUDE_PROJECT_DIR: rc(),
            CLAUDE_CODE_SESSION_ID: Rt(),
            CLAUDECODE: "1",
            ...t.env,
          },
          stderr: "pipe",
        });
      } else throw Error(`Unsupported server type: ${t.type}`);
      let u,
        d = "";
      if (t.type === "stdio" || !t.type) {
        let B = i;
        if (B.stderr)
          ((u = ($) => {
            if (d.length < 67108864)
              try {
                d += $.toString();
              } catch {}
          }),
            B.stderr.on("data", u));
      }
      let p = new ONn(
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
          capabilities: CUn(),
        },
      );
      if (t.type === "http") sn(e, "Client created, setting up request handler");
      if (
        (p.setRequestHandler(
          zvr,
          async () => (sn(e, "Received ListRoots request from server"), $xp()),
        ),
        sn(e, `Starting connection with timeout of ${o6()}ms`),
        t.type === "http")
      ) {
        sn(e, `Testing basic HTTP connectivity to ${t.url}`);
        try {
          let B = new URL(t.url);
          if (
            (sn(
              e,
              `Parsed URL: host=${B.hostname}, port=${B.port || "default"}, protocol=${B.protocol}`,
            ),
            B.hostname === "127.0.0.1" || B.hostname === "localhost")
          )
            sn(e, `Using loopback address: ${B.hostname}`);
        } catch (B) {
          sn(e, `Failed to parse URL: ${B}`);
        }
      }
      let f = bCa(t);
      if (IUn(t))
        (sn(
          e,
          f
            ? "Stateless claudeai-proxy \u2014 resolving MCP initialize from cached projection"
            : "Stateless claudeai-proxy \u2014 no cached projection; real initialize, GET SSE suppressed",
        ),
          SCa(i, f));
      let m = p.connect(i),
        g = new Promise((B, $) => {
          let q = setTimeout(() => {
            let W = Date.now() - r;
            if ((sn(e, `Connection timeout triggered after ${W}ms (limit: ${o6()}ms)`), o))
              o.close().catch(() => {});
            (i?.close().catch(() => {}),
              $(
                new mi(
                  `MCP server "${e}" connection timed out after ${o6()}ms`,
                  "MCP connection timeout",
                ),
              ));
          }, o6());
          m.then(
            () => {
              clearTimeout(q);
            },
            (W) => {
              clearTimeout(q);
            },
          );
        });
      try {
        if ((await Promise.race([m, g]), d)) (au(e, `Server stderr: ${d}`), (d = ""));
        let B = Date.now() - r;
        if (
          (sn(e, `Successfully connected (transport: ${t.type || "stdio"}) in ${B}ms`),
          (t.type === "stdio" || !t.type) && i instanceof F3t && i.pid)
        )
          skn("mcp_stdio", i.pid);
      } catch (B) {
        let $ = Date.now() - r;
        if (i instanceof F3t && i.overflowError) {
          if ((au(e, i.overflowError.message), d)) au(e, `Server stderr: ${d}`);
          throw i.overflowError;
        }
        if (t.type === "sse" && B instanceof Error) {
          (sn(
            e,
            `SSE Connection failed after ${$}ms: ${De({
              url: t.url,
              error: B.message,
              errorType: B.constructor.name,
              stack: B.stack,
            })}`,
          ),
            au(e, B));
          let q = B.code;
          if (
            B instanceof sL ||
            (B instanceof OQe && s?.sawAuthChallenge) ||
            q === 401 ||
            q === 403
          ) {
            if (l) return ORa(e, t, "sse", q);
            if (c) return NRa(e, t, "sse", q);
            return vfo(e, t, "sse", B);
          }
        } else if (t.type === "http" && B instanceof Error) {
          let q = B;
          (sn(
            e,
            `HTTP Connection failed after ${$}ms: ${B.message} (code: ${q.code || "none"}, errno: ${q.errno || "none"})`,
          ),
            au(e, B));
          let W = B.code;
          if (
            B instanceof sL ||
            (B instanceof OQe && s?.sawAuthChallenge) ||
            W === 401 ||
            W === 403
          ) {
            if (l) return ORa(e, t, "http", W);
            if (c) return NRa(e, t, "http", W);
            return vfo(e, t, "http", B);
          }
        } else if (t.type === "claudeai-proxy" && B instanceof Error) {
          (sn(e, `claude.ai proxy connection failed after ${$}ms: ${B.message}`), au(e, B));
          let q = B.code;
          if (q === 401 || q === 403) return vfo(e, t, "claudeai-proxy");
        } else if (t.type === "sse-ide" || t.type === "ws-ide")
          G("tengu_mcp_ide_server_connection_failed", {
            connectionDurationMs: $,
          });
        if (o) o.close().catch(() => {});
        if ((i.close().catch(() => {}), d)) au(e, `Server stderr: ${d}`);
        throw B;
      }
      let h = p.getServerCapabilities(),
        y = p.getServerVersion(),
        b = p.getInstructions(),
        _ = b;
      if (b && b.length > uJ)
        ((_ = Ix(b, uJ) + "\u2026 [truncated]"),
          sn(e, `Server instructions truncated from ${b.length} to ${uJ} chars`));
      if (
        (sn(
          e,
          `Connection established with capabilities: ${De({
            hasTools: !!h?.tools,
            hasPrompts: !!h?.prompts,
            hasResources: !!h?.resources,
            hasResourceSubscribe: !!h?.resources?.subscribe,
            serverVersion: y || "unknown",
          })}`,
        ),
        T(`[MCP] Server "${e}" connected with subscribe=${!!h?.resources?.subscribe}`),
        p.setRequestHandler(
          uhe,
          async (B) => (
            sn(e, `Elicitation request received during initialization: ${De(B)}`),
            {
              action: "cancel",
            }
          ),
        ),
        t.type === "sse-ide" || t.type === "ws-ide")
      ) {
        let B = Date.now() - r;
        (G("tengu_mcp_ide_server_connection_succeeded", {
          connectionDurationMs: B,
          serverVersion: tS(y?.version),
        }),
          mxa(p).catch(($) => {
            au(e, `Failed to send ide_connected notification: ${$}`);
          }));
      }
      let S = Date.now(),
        A = false,
        v = p.onerror,
        C = p.onclose,
        x = 3,
        I = {
          consecutiveErrors: 0,
          activeCallWatchdogs: new Set(),
          pendingElicitations: 0,
          lastElicitationClosedAt: 0,
        },
        D = false,
        P = (B) => {
          if (D) return;
          ((D = true),
            sn(e, `Closing transport (${B})`),
            p.close().catch(($) => {
              sn(e, `Error during close: ${be($)}`);
            }));
        };
      if (
        ((p.onerror = (B) => {
          let $ = t.type || "stdio";
          if ($ === "stdio" && B instanceof SyntaxError) {
            au(e, `Ignoring non-JSON line on stdout: ${B.message}`);
            return;
          }
          if ($ === "stdio" && B instanceof U3t) {
            if ((au(e, B.message), (A = true), P("stdout overflow"), v)) v(B);
            return;
          }
          if (
            ($ === "sse" || $ === "sse-ide" || $ === "http" || $ === "claudeai-proxy") &&
            B.message.includes(mpo)
          ) {
            if ((au(e, B.message), (A = true), P("http body overflow"), v)) v(B);
            return;
          }
          if (($ === "sse" || $ === "http" || $ === "claudeai-proxy") && B instanceof SyntaxError) {
            if (((A = true), k(), P("malformed JSON-RPC message (response truncated)"), v)) v(B);
            return;
          }
          let q = Date.now() - S;
          if (
            ((A = true),
            sn(e, `${$.toUpperCase()} connection dropped after ${Math.floor(q / 1000)}s uptime`),
            B.message)
          )
            if (B.message.includes("ECONNRESET"))
              sn(e, "Connection reset - server may have crashed or restarted");
            else if (B.message.includes("ETIMEDOUT"))
              sn(e, "Connection timeout - network issue or server unresponsive");
            else if (B.message.includes("ECONNREFUSED"))
              sn(e, "Connection refused - server may be down");
            else if (B.message.includes("EPIPE"))
              sn(e, "Broken pipe - server closed connection unexpectedly");
            else if (B.message.includes("EHOSTUNREACH"))
              sn(e, "Host unreachable - network connectivity issue");
            else if (B.message.includes("ESRCH"))
              sn(e, "Process not found - stdio server process terminated");
            else if (B.message.includes("spawn"))
              sn(e, "Failed to spawn process - check command and permissions");
            else sn(e, `Connection error: ${B.message}`);
          if (
            ($ === "http" || $ === "claudeai-proxy") &&
            p.transport?.sessionId !== void 0 &&
            qRa(B)
          ) {
            if (
              (sn(
                e,
                "MCP session expired (server no longer recognizes session ID), triggering reconnection",
              ),
              P("session expired"),
              v)
            )
              v(B);
            return;
          }
          if ($ === "sse" || $ === "http" || $ === "claudeai-proxy") {
            if (B.message.includes("Maximum reconnection attempts")) {
              if (
                (sn(
                  e,
                  "SSE GET-stream reconnection exhausted; leaving transport up (POST still works)",
                ),
                (I.consecutiveErrors = 0),
                k(),
                v)
              )
                v(B);
              return;
            }
            if (hxp(B)) {
              if (
                (I.consecutiveErrors++,
                k(),
                sn(e, `Terminal connection error ${I.consecutiveErrors}/${x}`),
                I.consecutiveErrors >= x)
              )
                ((I.consecutiveErrors = 0), P("max consecutive terminal errors"));
            } else I.consecutiveErrors = 0;
          }
          if (v) v(B);
        }),
        p.transport)
      ) {
        let B = p.transport.onmessage;
        p.transport.onmessage = ($, q) => {
          if (I.consecutiveErrors !== 0) I.consecutiveErrors = 0;
          B?.($, q);
        };
      }
      p.onclose = () => {
        let B = Date.now() - S,
          $ = t.type ?? "unknown";
        (sn(
          e,
          `${$.toUpperCase()} connection closed after ${Math.floor(B / 1000)}s (${A ? "with errors" : "cleanly"})`,
        ),
          Tfo(e, t, {
            status: "disconnected",
            durationMs: B,
          }));
        let q = kqe(e, t);
        if ((lP.cache.delete(e), v4.cache.delete(e), cde.cache.delete(e), mJ.cache.delete(e), hk()))
          mpt.cache.delete(e);
        if ((aP.cache.delete(q), sn(e, "Cleared connection cache for reconnection"), C)) C();
      };
      let O = async () => {
          if (o) {
            try {
              await o.close();
            } catch (B) {
              sn(e, `Error closing in-process server: ${B}`);
            }
            try {
              await p.close();
            } catch (B) {
              sn(e, `Error closing client: ${B}`);
            }
            return;
          }
          if (u && (t.type === "stdio" || !t.type)) i.stderr?.off("data", u);
          if (t.type === "stdio" || !t.type)
            try {
              let $ = i.pid;
              if ($) {
                sn(e, "Sending SIGINT to MCP server process");
                try {
                  process.kill($, "SIGINT");
                } catch (q) {
                  sn(e, `Error sending SIGINT: ${q}`);
                  return;
                }
                await new Promise(async (q) => {
                  let W = false,
                    V = setInterval(() => {
                      try {
                        process.kill($, 0);
                      } catch {
                        if (!W)
                          ((W = true),
                            clearInterval(V),
                            clearTimeout(Y),
                            sn(e, "MCP server process exited cleanly"),
                            q());
                      }
                    }, 50),
                    Y = setTimeout(() => {
                      if (!W)
                        ((W = true),
                          clearInterval(V),
                          sn(e, "Cleanup timeout reached, stopping process monitoring"),
                          q());
                    }, 600);
                  try {
                    if ((await Nn(100), !W)) {
                      try {
                        (process.kill($, 0),
                          sn(e, "SIGINT failed, sending SIGTERM to MCP server process"));
                        try {
                          process.kill($, "SIGTERM");
                        } catch (z) {
                          (sn(e, `Error sending SIGTERM: ${z}`),
                            (W = true),
                            clearInterval(V),
                            clearTimeout(Y),
                            q());
                          return;
                        }
                      } catch {
                        ((W = true), clearInterval(V), clearTimeout(Y), q());
                        return;
                      }
                      if ((await Nn(400), !W))
                        try {
                          (process.kill($, 0),
                            sn(e, "SIGTERM failed, sending SIGKILL to MCP server process"));
                          try {
                            process.kill($, "SIGKILL");
                          } catch (z) {
                            sn(e, `Error sending SIGKILL: ${z}`);
                          }
                        } catch {
                          ((W = true), clearInterval(V), clearTimeout(Y), q());
                        }
                    }
                    if (!W) ((W = true), clearInterval(V), clearTimeout(Y), q());
                  } catch {
                    if (!W) ((W = true), clearInterval(V), clearTimeout(Y), q());
                  }
                });
              }
            } catch (B) {
              sn(e, `Error terminating process: ${B}`);
            }
          try {
            await p.close();
          } catch (B) {
            sn(e, `Error closing client: ${B}`);
          }
        },
        L = Ci(O),
        M = async () => {
          (L?.(), await O());
        },
        N = Date.now() - r;
      return (
        Tfo(e, t, {
          status: "connected",
          durationMs: N,
        }),
        G("tengu_mcp_server_connection_succeeded", {
          connectionDurationMs: N,
          transportType: $e(t.type ?? "stdio"),
          scope: $e(t.scope),
          isPlugin: t.pluginSource !== void 0,
          totalServers: n?.totalServers,
          stdioCount: n?.stdioCount,
          sseCount: n?.sseCount,
          httpCount: n?.httpCount,
          sseIdeCount: n?.sseIdeCount,
          wsIdeCount: n?.wsIdeCount,
          ...hde(t),
        }),
        xe("mcp_connect"),
        {
          name: e,
          client: p,
          type: "connected",
          capabilities: h ?? {},
          serverInfo: y,
          instructions: _,
          config: t,
          cleanup: M,
          transportErrorState: I,
        }
      );
    } catch (a) {
      let l = Date.now() - r,
        c = be(a),
        u = a instanceof Error ? a.cause : void 0,
        d =
          (a && typeof a === "object" && "code" in a ? a.code : void 0) ??
          (u && typeof u === "object" && "code" in u ? u.code : void 0),
        p = d !== void 0 ? String(d) : void 0;
      if (t.type === "http" && p === "404" && i?.sessionId === void 0 && !ukn(t.url))
        ((p = "ENDPOINT_NOT_FOUND"),
          (c = `MCP endpoint not found at ${dke(t) ?? "(unparseable url)"}. Check the URL in your MCP config.`));
      Tfo(e, t, {
        status: "failed",
        durationMs: l,
        errorCode: p,
        error: c,
      });
      let f =
        p === "ECONNREFUSED"
          ? "mcp_connect_refused"
          : c.includes("timed out")
            ? "mcp_connect_timeout"
            : "mcp_connect_failed";
      if (
        (It("mcp_connect", `${f}_${t.type ?? "stdio"}`),
        G("tengu_mcp_server_connection_failed", {
          connectionDurationMs: l,
          errorCode: p,
          errorClassName: rss(a),
          errorMessageHash: Dd(EKr(c)),
          totalServers: n?.totalServers || 1,
          stdioCount: n?.stdioCount || (t.type === "stdio" ? 1 : 0),
          sseCount: n?.sseCount || (t.type === "sse" ? 1 : 0),
          httpCount: n?.httpCount || (t.type === "http" ? 1 : 0),
          sseIdeCount: n?.sseIdeCount || (t.type === "sse-ide" ? 1 : 0),
          wsIdeCount: n?.wsIdeCount || (t.type === "ws-ide" ? 1 : 0),
          transportType: $e(t.type ?? "stdio"),
          scope: $e(t.scope),
          isPlugin: t.pluginSource !== void 0,
          ...hde(t),
        }),
        sn(e, `Connection failed after ${l}ms: ${c}`),
        au(e, `Connection failed: ${c}`),
        o)
      )
        o.close().catch(() => {});
      if ((t.type === "stdio" || t.type === void 0) && t.pluginSource !== void 0) Rfo(e, aDe(t));
      return {
        name: e,
        type: "failed",
        config: t,
        error: c,
        errorCode: p,
      };
    }
  }, kqe);
  Nua({
    ensureConnectedClient: CSe,
  });
  Oxp = {
    [Si.ConnectionClosed]: "connection_closed",
    [Si.RequestTimeout]: "request_timeout",
    [Si.ParseError]: "parse_error",
    [Si.InvalidRequest]: "invalid_request",
    [Si.MethodNotFound]: "method_not_found",
    [Si.InvalidParams]: "invalid_params",
    [Si.InternalError]: "internal_error",
  };
  ((lP = JC(
    async (e) => {
      if (e.type !== "connected") return [];
      try {
        if (!e.capabilities?.tools) return [];
        let t = Date.now(),
          n = await o2n(e.client, e.name, "tools/list", kkt, (g) => g.tools);
        e.toolsListError = void 0;
        let r = B4(n),
          o = c5(e.config),
          s = o
            ? {
                mcpServerBaseUrl: o,
              }
            : {};
        if (r.length === 0)
          G("tengu_mcp_degraded", {
            reason: We("connected_zero_tools"),
            transportType: $e(e.config.type ?? "stdio"),
            ...s,
          });
        let i = e.config.type === "sdk" && ut(process.env.CLAUDE_AGENT_SDK_MCP_NO_PREFIX),
          a =
            e.config.type === "claudeai-proxy" ||
            e.config.type === "http" ||
            e.config.type === "sse"
              ? e.config.toolPermissions
              : void 0;
        if (a) {
          let g = Object.keys(a).length;
          if (g > 0 && !r.some((h) => a[h.name] !== void 0))
            T(
              `[claudeai-mcp] ${e.name}: toolPermissions has ${g} entries but none matched upstream tool names \u2014 backend name drift?`,
              {
                level: "warn",
              },
            );
        }
        let l = Mxp(e.config),
          c = 0,
          u = 0,
          d = 0,
          p = r.flatMap((g) => {
            let h = Ska(g.inputSchema);
            if (h.outcome === "unchanged") return [g];
            if (h.outcome === "normalized" && l) {
              (c++,
                sn(
                  e.name,
                  `Normalized input schema for tool "${g.name}" (flattened top-level ${h.combinators.join("/")})`,
                ));
              let b = g.description
                ? `${h.note}

${g.description}`
                : h.note;
              return [
                {
                  ...g,
                  inputSchema: h.schema,
                  description: b,
                },
              ];
            }
            if (h.outcome === "normalized") u++;
            else d++;
            let y =
              h.outcome === "drop"
                ? h.reason
                : `its input schema uses top-level ${h.combinators.join("/")}, which the Anthropic API does not accept`;
            return (
              au(
                e.name,
                `Skipping tool "${g.name}": ${y}. Other tools from this server remain available.`,
              ),
              []
            );
          });
        if (c > 0)
          G("tengu_mcp_degraded", {
            reason: We("tool_schema_normalized"),
            transportType: $e(e.config.type ?? "stdio"),
            normalizedCount: c,
            ...s,
          });
        if (u > 0)
          G("tengu_mcp_degraded", {
            reason: We("tool_schema_normalize_gated"),
            transportType: $e(e.config.type ?? "stdio"),
            skippedCount: u,
            ...s,
          });
        if (d > 0)
          G("tengu_mcp_degraded", {
            reason: We("tool_schema_unsupported"),
            transportType: $e(e.config.type ?? "stdio"),
            skippedCount: d,
            ...s,
          });
        let f = () => fke(e.name, e.config);
        Tka(p, e.name, f(), o, e.instructions);
        let m = p
          .map((g) => {
            let h = i9(e.name, g.name),
              y = g._meta?.["anthropic/maxResultSizeChars"],
              b = typeof y === "number" && Number.isFinite(y) && y > 0,
              _ = {
                ...lco,
                name: i ? g.name : h,
                mcpInfo: {
                  serverName: e.name,
                  scope: e.config.scope,
                  displayName: "displayName" in e.config ? e.config.displayName : void 0,
                  iconUrl: "iconUrl" in e.config ? e.config.iconUrl : void 0,
                  serverInfoName: e.serverInfo?.name,
                  toolName: g.name,
                  title: g.annotations?.title?.replace(/\s+/g, " ").trim() || void 0,
                  execution: g.execution,
                  role: "role" in e.config ? e.config.role : void 0,
                  effectiveMaxPermission: a?.[g.name],
                },
                isMcp: true,
                searchHint:
                  typeof g._meta?.["anthropic/searchHint"] === "string"
                    ? g._meta["anthropic/searchHint"].replace(/\s+/g, " ").trim() || void 0
                    : void 0,
                alwaysLoad:
                  e.config.alwaysLoad === true || g._meta?.["anthropic/alwaysLoad"] === true,
                async description() {
                  return g.description ?? "";
                },
                async prompt() {
                  let A = g.description ?? "";
                  return A.length > uJ ? Ix(A, uJ) + "\u2026 [truncated]" : A;
                },
                isConcurrencySafe() {
                  return g.annotations?.readOnlyHint ?? false;
                },
                isReadOnly() {
                  return g.annotations?.readOnlyHint ?? false;
                },
                readOnlyHint: g.annotations?.readOnlyHint,
                toAutoClassifierInput(A) {
                  return Nxp(A, g.name);
                },
                isDestructive() {
                  return g.annotations?.destructiveHint ?? false;
                },
                isOpenWorld() {
                  return g.annotations?.openWorldHint ?? false;
                },
                maxResultSizeChars: b ? Math.min(y, $ao) : lco.maxResultSizeChars,
                persistenceThresholdCeiling: b ? $ao : void 0,
                inputJSONSchema: g.inputSchema,
                async checkPermissions() {
                  return {
                    behavior: "passthrough",
                    message: "MCPTool requires permission.",
                    suggestions: [
                      {
                        type: "addRules",
                        rules: [
                          {
                            toolName: h,
                            ruleContent: void 0,
                          },
                        ],
                        behavior: "allow",
                        destination: "localSettings",
                      },
                    ],
                  };
                },
                async call(A, v, C, x, I) {
                  let k = jxp(x),
                    D = k
                      ? {
                          "claudecode/toolUseId": k,
                        }
                      : {};
                  if (I && k)
                    I({
                      type: "progress",
                      toolUseID: k,
                      data: {
                        type: "mcp_progress",
                        status: "started",
                        serverName: e.name,
                        toolName: g.name,
                      },
                    });
                  let P = Date.now(),
                    O = 1;
                  for (let L = 0; ; L++)
                    try {
                      let M = await CSe(e),
                        N = await Dfo({
                          client: M,
                          clientConnection: e,
                          tool: g.name,
                          args: A,
                          meta: D,
                          signal: v.abortController.signal,
                          setAppState: v.setAppState,
                          imageLimits: Gh(v.options.mainLoopModel),
                          toolExecution: g.execution,
                          taskRegistry: v.taskRegistry,
                          toolUseId: k,
                          onProgress:
                            I && k
                              ? (B) => {
                                  I({
                                    type: "progress",
                                    toolUseID: k,
                                    data: B,
                                  });
                                }
                              : void 0,
                          requestDialog: v.requestDialog,
                          hasResultSizeAnnotation: b,
                        });
                      if (I && k)
                        I({
                          type: "progress",
                          toolUseID: k,
                          data: {
                            type: "mcp_progress",
                            status: "completed",
                            serverName: e.name,
                            toolName: g.name,
                            elapsedTimeMs: Date.now() - P,
                          },
                        });
                      if (!N.isError) xIa(g.name);
                      return {
                        data: N.content,
                        ...((N._meta || N.structuredContent) && {
                          mcpMeta: {
                            ...(N._meta && {
                              _meta: N._meta,
                            }),
                            ...(N.structuredContent && {
                              structuredContent: N.structuredContent,
                            }),
                          },
                        }),
                      };
                    } catch (M) {
                      if (M instanceof gpt && L < O) {
                        sn(e.name, `Retrying tool '${g.name}' after session recovery`);
                        continue;
                      }
                      if (I && k)
                        I({
                          type: "progress",
                          toolUseID: k,
                          data: {
                            type: "mcp_progress",
                            status: "failed",
                            serverName: e.name,
                            toolName: g.name,
                            elapsedTimeMs: Date.now() - P,
                          },
                        });
                      if (M instanceof Error && !(M instanceof mi)) {
                        let N = M.constructor.name;
                        if (N === "Error") throw new mi(M.message, M.message.slice(0, 200));
                        if (N === "McpError" && "code" in M && typeof M.code === "number")
                          throw new mi(M.message, `McpError ${M.code}`);
                      }
                      throw M;
                    }
                },
                userFacingName() {
                  let A = (g.annotations?.title || g.name).replace(/\s+/g, " ").trim();
                  return `${e.name} - ${A} (MCP)`;
                },
                ...(bbe(e.name) && (e.config.type === "stdio" || !e.config.type)
                  ? Hxp().getClaudeInChromeMCPToolOverrides(g.name)
                  : {}),
                ...((e.config.type === "stdio" || !e.config.type) && uke(e.name)
                  ? Txp().getComputerUseMCPToolOverrides(g.name)
                  : {}),
                ...(Cka(g.name) ? Ika() : {}),
              },
              S = _.call;
            return (
              (_.call = async (A, v, C, x, I) => {
                if (
                  ((v.options.activeMcpServer = e.name),
                  (v.options.activeMcpTool = g.name),
                  e.config.pluginSource)
                )
                  Zj(e.config.pluginSource);
                let k = f();
                if (k) AKi(e.name);
                return S(
                  vka(A, g.name, e.name, k, at("tengu_mcp_strip_trailing_xml_tags", false), o),
                  v,
                  C,
                  x,
                  I,
                );
              }),
              _
            );
          })
          .filter(Pxp);
        return (
          G("tengu_mcp_tools_listed", {
            transportType: $e(e.config.type ?? "stdio"),
            listDurationMs: Date.now() - t,
            toolCount: m.length,
            alwaysLoadCount: On(m, (g) => g.alwaysLoad === true),
            ...s,
            ...(fke(e.name, e.config) && {
              mcpServerName: hc(e.name),
            }),
          }),
          xe("mcp_list_tools"),
          m
        );
      } catch (t) {
        let n = be(t);
        if (e.config.type === "claudeai-proxy" && V3t(t))
          return (
            G("tengu_mcp_server_needs_auth", {
              transportType: We("claudeai-proxy"),
              cause: We("discovery_tools_list"),
              ...hde(e.config),
            }),
            Rfo(e.name, e.config.id),
            It("mcp_list_tools", "mcp_list_tools_needs_auth"),
            sn(e.name, "tools/list 401/403 on claude.ai proxy \u2014 flagging needs-auth"),
            (e.discoveryAuthFailure = true),
            lP.cache.delete(e.name),
            []
          );
        let r =
          t instanceof gi
            ? `mcp_list_tools_${Oxp[t.code] ?? "mcperr_other"}`
            : n.includes("timed out")
              ? "mcp_list_tools_timeout"
              : "mcp_list_tools_failed";
        (It("mcp_list_tools", r),
          au(e.name, `Failed to fetch tools: ${n}`),
          (e.toolsListError = n));
        let o = hde(e.config);
        return (
          G("tengu_mcp_degraded", {
            reason: We("tools_list_failed"),
            transportType: $e(e.config.type ?? "stdio"),
            ...o,
            ...(fke(e.name, e.config) && {
              mcpServerName: hc(e.name),
            }),
          }),
          lP.cache.delete(e.name),
          []
        );
      }
    },
    (e) => e.name,
    l2n,
  )),
    (v4 = JC(
      async (e) => {
        if (e.type !== "connected") return [];
        try {
          if (!e.capabilities?.resources) return [];
          let t = await o2n(e.client, e.name, "resources/list", zUe, (n) => n.resources);
          return (
            xe("mcp_list_resources"),
            t.map((n) => ({
              ...n,
              server: e.name,
            }))
          );
        } catch (t) {
          return (
            Le("mcp_list_resources", "mcp_list_resources_failed"),
            au(e.name, `Failed to fetch resources: ${be(t)}`),
            v4.cache.delete(e.name),
            []
          );
        }
      },
      (e) => e.name,
      l2n,
    )),
    (cde = JC(
      async (e) => {
        if (e.type !== "connected") return [];
        try {
          if (!e.capabilities?.resources) return [];
          let t = await o2n(
            e.client,
            e.name,
            "resources/templates/list",
            wkt,
            (n) => n.resourceTemplates,
          );
          return (
            G("tengu_mcp_resource_templates_fetched", {
              template_count: t.length,
            }),
            xe("mcp_list_resource_templates"),
            t.map((n) => ({
              ...n,
              server: e.name,
            }))
          );
        } catch (t) {
          return (
            cde.cache.delete(e.name),
            sn(e.name, `Failed to fetch resource templates: ${be(t)}`),
            []
          );
        }
      },
      (e) => e.name,
      l2n,
    )));
  mJ = JC(
    async (e) => {
      if (e.type !== "connected") return [];
      try {
        if (!e.capabilities?.prompts) return [];
        let t = await o2n(e.client, e.name, "prompts/list", Ikt, (s) => s.prompts),
          n = B4(t);
        xe("mcp_list_prompts");
        let r = e.config,
          o = (r.type === "http" || r.type === "sse") && X9(r.url);
        return n.map((s) => {
          let i = Object.values(s.arguments ?? {}),
            a = i.map((l) => l.name);
          return {
            type: "prompt",
            name: "mcp__" + hc(e.name) + "__" + s.name,
            description: s.description ?? "",
            hasUserSpecifiedDescription: !!s.description,
            contentLength: 0,
            isEnabled: () => true,
            isHidden: false,
            isMcp: true,
            progressMessage: "running",
            userFacingName() {
              return o ? s.name : `${e.name}:${s.name} (MCP)`;
            },
            aliases: o ? [`${e.name}:${s.name}`, `${e.name}:${s.name} (MCP)`] : void 0,
            argNames: a,
            source: "mcp",
            async getPromptForCommand(l, c) {
              let u = l.trim(),
                d = u ? u.split(/\s+/) : [];
              try {
                let p = i.filter((y, b) => y.required && d[b] === void 0).map((y) => y.name);
                if (p.length > 0)
                  throw Error(
                    `Missing required ${bn(p.length, "argument")}: ${p.join(", ")}. Usage: /mcp__${hc(e.name)}__${s.name} ${a.join(" ")}`,
                  );
                let f = await CSe(e),
                  m = await f.client.getPrompt({
                    name: s.name,
                    arguments: Pua(a, d),
                  }),
                  g = Gh(c.options.mainLoopModel),
                  h = await Promise.all(m.messages.map((y) => xfo(y.content, f.name, g)));
                return (xe("mcp_get_prompt"), h.flat());
              } catch (p) {
                throw (
                  Le("mcp_get_prompt", "mcp_get_prompt_failed"),
                  au(e.name, `Error running command '${s.name}': ${be(p)}`),
                  p
                );
              }
            },
          };
        });
      } catch (t) {
        return (
          Le("mcp_list_prompts", "mcp_list_prompts_failed"),
          au(e.name, `Failed to fetch commands: ${be(t)}`),
          mJ.cache.delete(e.name),
          []
        );
      }
    },
    (e) => e.name,
    l2n,
  );
});
class y5 {
  static instance;
  baseline = new Map();
  initialized = false;
  mcpClient;
  lastProcessedTimestamps = new Map();
  rightFileDiagnosticsState = new Map();
  static getInstance() {
    if (!y5.instance) y5.instance = new y5();
    return y5.instance;
  }
  initialize(e) {
    if (this.initialized) return;
    ((this.mcpClient = e), (this.initialized = true));
  }
  async shutdown() {
    ((this.initialized = false),
      this.baseline.clear(),
      this.rightFileDiagnosticsState.clear(),
      this.lastProcessedTimestamps.clear());
  }
  reset() {
    (this.baseline.clear(),
      this.rightFileDiagnosticsState.clear(),
      this.lastProcessedTimestamps.clear());
  }
  normalizeFileUri(e) {
    let t = ["file://", "_claude_fs_right:", "_claude_fs_left:"],
      n = e;
    for (let r of t)
      if (e.startsWith(r)) {
        n = e.slice(r.length);
        break;
      }
    return dv(n);
  }
  async ensureFileOpened(e) {
    if (!this.initialized || !this.mcpClient || this.mcpClient.type !== "connected") return;
    try {
      await Rre(
        "openFile",
        {
          filePath: e,
          preview: false,
          startText: "",
          endText: "",
          selectToEndOfLine: false,
          makeFrontmost: false,
        },
        this.mcpClient,
      );
    } catch (t) {
      T(`Failed to open file in IDE via MCP: ${t}`, {
        level: "error",
      });
    }
  }
  async beforeFileEdited(e) {
    if (!this.initialized || !this.mcpClient || this.mcpClient.type !== "connected") return;
    let t = Date.now();
    try {
      let n = await Rre(
          "getDiagnostics",
          {
            uri: `file://${e}`,
          },
          this.mcpClient,
        ),
        r = this.parseDiagnosticResult(n)[0];
      if (r) {
        if (!cAs(this.normalizeFileUri(e), this.normalizeFileUri(r.uri))) {
          ke(new eLa(`Diagnostics file path mismatch: expected ${e}, got ${r.uri})`));
          return;
        }
        let o = this.normalizeFileUri(e);
        (this.baseline.set(o, r.diagnostics), this.lastProcessedTimestamps.set(o, t));
      } else {
        let o = this.normalizeFileUri(e);
        (this.baseline.set(o, []), this.lastProcessedTimestamps.set(o, t));
      }
    } catch (n) {}
  }
  async getNewDiagnostics() {
    if (!this.initialized || !this.mcpClient || this.mcpClient.type !== "connected") return [];
    let e = [];
    try {
      let o = await Rre("getDiagnostics", {}, this.mcpClient);
      e = this.parseDiagnosticResult(o);
    } catch (o) {
      return [];
    }
    let t = e
        .filter((o) => this.baseline.has(this.normalizeFileUri(o.uri)))
        .filter((o) => o.uri.startsWith("file://")),
      n = new Map();
    e.filter((o) => this.baseline.has(this.normalizeFileUri(o.uri)))
      .filter((o) => o.uri.startsWith("_claude_fs_right:"))
      .forEach((o) => {
        n.set(this.normalizeFileUri(o.uri), o);
      });
    let r = [];
    for (let o of t) {
      let s = this.normalizeFileUri(o.uri),
        i = this.baseline.get(s) || [],
        a = n.get(s),
        l = o;
      if (a) {
        let u = this.rightFileDiagnosticsState.get(s);
        if (!u || !this.areDiagnosticArraysEqual(u, a.diagnostics)) l = a;
        this.rightFileDiagnosticsState.set(s, a.diagnostics);
      }
      let c = l.diagnostics.filter((u) => !i.some((d) => this.areDiagnosticsEqual(u, d)));
      if (c.length > 0)
        r.push({
          uri: o.uri,
          diagnostics: c,
        });
      this.baseline.set(s, l.diagnostics);
    }
    return r;
  }
  parseDiagnosticResult(e) {
    if (Array.isArray(e)) {
      let t = e.find((n) => n.type === "text");
      if (t && "text" in t) return Ft(t.text);
    }
    return [];
  }
  areDiagnosticsEqual(e, t) {
    return (
      e.message === t.message &&
      e.severity === t.severity &&
      e.source === t.source &&
      e.code === t.code &&
      e.range.start.line === t.range.start.line &&
      e.range.start.character === t.range.start.character &&
      e.range.end.line === t.range.end.line &&
      e.range.end.character === t.range.end.character
    );
  }
  areDiagnosticArraysEqual(e, t) {
    if (e.length !== t.length) return false;
    return (
      e.every((n) => t.some((r) => this.areDiagnosticsEqual(n, r))) &&
      t.every((n) => e.some((r) => this.areDiagnosticsEqual(r, n)))
    );
  }
  async handleQueryStart(e) {
    if (!this.initialized) {
      let t = p5(e);
      if (t) this.initialize(t);
    } else this.reset();
  }
  static formatDiagnosticsSummary(e) {
    let n = e.map((r) => {
      let o = r.uri.split("/").pop() || r.uri,
        s = r.diagnostics.map(
          (i) =>
            `  ${y5.getSeveritySymbol(i.severity)} [Line ${i.range.start.line + 1}:${i.range.start.character + 1}] ${i.message}${i.code ? ` [${i.code}]` : ""}${i.source ? ` (${i.source})` : ""}`,
        ).join(`
`);
      return `${o}:
${s}`;
    }).join(`

`);
    if (n.length > ZRa) return n.slice(0, ZRa - 12) + "\u2026[truncated]";
    return n;
  }
  static formatDiagnosticsBlock(e) {
    return `<new-diagnostics>The following new diagnostic issues were detected:

${y5.formatDiagnosticsSummary(e)}</new-diagnostics>`;
  }
  static getSeveritySymbol(e) {
    return (
      {
        Error: nt.cross,
        Warning: nt.warning,
        Info: nt.info,
        Hint: nt.star,
      }[e] || nt.bullet
    );
  }
}
var eLa,
  ZRa = 4000,
  tEe;
