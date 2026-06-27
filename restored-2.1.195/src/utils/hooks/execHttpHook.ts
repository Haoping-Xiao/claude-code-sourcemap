// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fic
// matched 2.1.88 source: src/utils/hooks/execHttpHook.ts
// class=modified  jaccard=0.5286  score=0.8542  fileCov=0.5811
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fic] deps: utils/telemetry/betaSessionTracing.ts, utils/debug.ts, services/mockRateLimits.ts, commands/insights.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, utils/sessionActivity.ts, google-auth-library/build/src/crypto/node/crypto.js, screens/REPL.tsx, services/PromptSuggestion/speculation.ts, hooks/useCanUseTool.tsx, utils/debug.ts, utils/errors.ts, utils/fsOperations.ts, utils/messages.ts, utils/agentContext.ts, utils/permissions/permissionSetup.ts, utils/stats.ts, utils/fsOperations.ts, utils/hooks/execPromptHook.ts
M5o = require("crypto");
async function Fem() {
  let { SandboxManager: SandboxManager } = await Promise.resolve().then(() => (lg(), Rro));
  if (!SandboxManager.isSandboxingEnabled()) return;
  await SandboxManager.waitForNetworkInitialization();
  let t = SandboxManager.getProxyPort();
  if (!t) return;
  let n = SandboxManager.getProxyAuthToken();
  return {
    host: "127.0.0.1",
    port: t,
    protocol: "http",
    ...(n && {
      auth: {
        username: "srt",
        password: n,
      },
    }),
  };
}
function jem() {
  let e = Dr();
  return {
    allowedUrls: e.allowedHttpHookUrls,
    allowedEnvVars: e.httpHookAllowedEnvVars,
  };
}
function Gem(e) {
  return e.replace(/[\r\n\x00]/g, "");
}
function interpolateEnvVars(value, allowedEnvVars) {
  let n = value.replace(/\$\{([A-Z_][A-Z0-9_]*)\}|\$([A-Z_][A-Z0-9_]*)/g, (r, o, s) => {
    let i = o ?? s;
    if (!allowedEnvVars.has(i))
      return (
        T(`Hooks: env var $${i} not in allowedEnvVars, skipping interpolation`, {
          level: "warn",
        }),
        ""
      );
    return DM()[i] ?? "";
  });
  return Gem(n);
}
async function execHttpHook(hook, _hookEvent, jsonInput, signal, o = lp) {
  let policy = jem();
  if (policy.allowedUrls !== void 0) {
    if (!policy.allowedUrls.some((u) => d3t(hook.url, u))) {
      let u = `HTTP hook blocked: ${hook.url} does not match any pattern in allowedHttpHookUrls`;
      return (
        T(u, {
          level: "warn",
        }),
        {
          ok: false,
          body: "",
          error: u,
        }
      );
    }
  }
  let i = hook.timeout ? hook.timeout * 1000 : o,
    { signal: a, cleanup: l } = xL(signal, {
      timeoutMs: i,
    });
  try {
    let c = {
      "Content-Type": "application/json",
    };
    if (hook.headers) {
      let m = hook.allowedEnvVars ?? [],
        g =
          policy.allowedEnvVars !== void 0 ? m.filter((y) => policy.allowedEnvVars.includes(y)) : m,
        h = new Set(g);
      for (let [y, b] of Object.entries(hook.headers)) c[y] = interpolateEnvVars(b, h);
    }
    let u = await Fem(),
      d = !u && ID() !== void 0 && !g9(hook.url);
    if (u) T(`Hooks: HTTP hook POST to ${hook.url} (via sandbox proxy :${u.port})`);
    else if (d) T(`Hooks: HTTP hook POST to ${hook.url} (via env-var proxy)`);
    else T(`Hooks: HTTP hook POST to ${hook.url}`);
    let p = await lb.post(hook.url, jsonInput, {
      headers: c,
      signal: a,
      responseType: "text",
      validateStatus: () => true,
      maxRedirects: 0,
      proxy: u ?? false,
      lookup: u || d ? void 0 : Tgl,
    });
    l();
    let f = p.data ?? "";
    return (
      T(`Hooks: HTTP hook response status ${p.status}, body length ${f.length}`),
      {
        ok: p.status >= 200 && p.status < 300,
        statusCode: p.status,
        body: f,
      }
    );
  } catch (c) {
    if ((l(), a.aborted))
      return {
        ok: false,
        body: "",
        aborted: true,
      };
    let u = be(c);
    return (
      T(`Hooks: HTTP hook error: ${u}`, {
        level: "error",
      }),
      {
        ok: false,
        body: "",
        error: u,
      }
    );
  }
}
