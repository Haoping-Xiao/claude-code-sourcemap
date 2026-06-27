// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fic
// matched 2.1.88 source: src/utils/hooks/execHttpHook.ts
// class=modified  jaccard=0.5286  score=0.8542  fileCov=0.5811
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fic] deps: MAe, kt, ii, fh, i$, LL, $S, fp, Vv, EAe, je, At, ys, co, Ao, Gy, y_, Jt, P5o
M5o = require("crypto");
async function Fem() {
  let { SandboxManager: e } = await Promise.resolve().then(() => (lg(), Rro));
  if (!e.isSandboxingEnabled()) return;
  await e.waitForNetworkInitialization();
  let t = e.getProxyPort();
  if (!t) return;
  let n = e.getProxyAuthToken();
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
  let s = jem();
  if (s.allowedUrls !== void 0) {
    if (!s.allowedUrls.some((u) => d3t(hook.url, u))) {
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
        g = s.allowedEnvVars !== void 0 ? m.filter((y) => s.allowedEnvVars.includes(y)) : m,
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
