// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I2e
// matched 2.1.88 source: src/utils/proxy.ts
// class=modified  jaccard=0.4045  score=0.5504  fileCov=0.6042
// note: deminified; 17 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: shouldBypassProxyWithCidr, shouldBypassProxy, prefetchProxyAuthFromHelperIfSafe, getWebSocketProxyUrl, getProxyUrl, getProxyFetchOptions, getProxyAuthFromHelperCached, getProxyAuthFromHelper, getProxyAgent, getNoProxy, getConfiguredProxyAuthHelper, getAddressFamily, getAWSClientProxyConfig, disableKeepAlive, configureGlobalAgents, clearProxyCache, clearProxyAuthHelperCache, _setProxyAuthHelperConfig, _resetProxyAuthHelperForTesting, _resetKeepAliveForTesting
function disableKeepAlive() {
  LOr = true;
}
function TKu() {
  LOr = false;
}
function getAddressFamily(options) {
  switch (options.family) {
    case 0:
    case 4:
    case 6:
      return options.family;
    case "IPv6":
      return 6;
    case "IPv4":
    case void 0:
      return 4;
    default:
      throw Error(`Unsupported address family: ${options.family}`);
  }
}
function getProxyUrl(e = process.env) {
  return e.https_proxy || e.HTTPS_PROXY || e.http_proxy || e.HTTP_PROXY;
}
function getNoProxy(e = process.env) {
  return e.no_proxy || e.NO_PROXY;
}
function shouldBypassProxy(e, t = getNoProxy()) {
  if (!t) return false;
  if (t === "*") return true;
  try {
    let n = new URL(e),
      r = n.hostname.toLowerCase(),
      o = n.port || (n.protocol === "https:" ? "443" : "80"),
      s = `${r}:${o}`;
    return t
      .split(/[,\s]+/)
      .filter(Boolean)
      .some((a) => {
        if (((a = a.toLowerCase().trim()), a.includes(":"))) return s === a;
        if (a.startsWith(".")) {
          let l = a;
          return r === a.substring(1) || r.endsWith(l);
        }
        return r === a;
      });
  } catch {
    return false;
  }
}
function shouldBypassProxyWithCidr(e, t) {
  if (shouldBypassProxy(e, t)) return true;
  if (!t) return false;
  let n;
  try {
    n = new URL(e).hostname.replace(/^\[|\]$/g, "");
  } catch {
    return false;
  }
  if (kOr.isIP(n) === 0) return false;
  return t
    .split(/[,\s]+/)
    .filter(Boolean)
    .some((r) => {
      if (r.includes("/")) return zet(n, r);
      let o = kOr.isIP(r);
      if (o === 0) return false;
      return zet(n, `${r}/${o === 4 ? 32 : 128}`);
    });
}
function a4s(e) {
  let t = UB(),
    n = DG(),
    r = {
      ...(t && {
        cert: t.cert,
        key: t.key,
        passphrase: t.passphrase,
      }),
      ...(n && {
        ca: n,
      }),
    };
  if (ut(process.env.CLAUDE_CODE_PROXY_RESOLVES_HOSTS))
    r.lookup = (o, s, i) => {
      i(null, o, getAddressFamily(s));
    };
  return new s4s.HttpsProxyAgent(e, r);
}
function getWebSocketProxyUrl(e) {
  let t = getProxyUrl();
  if (!t) return;
  if (shouldBypassProxy(e)) return;
  return t;
}
function $Or(e) {
  Ftt = e;
}
function getConfiguredProxyAuthHelper() {
  if (!ut(process.env.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER)) return;
  return Ftt.helper;
}
function l4s() {
  return getConfiguredProxyAuthHelper() !== void 0 && Ftt.fromProjectOrLocal;
}
function wKu() {
  let e = process.env.CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS;
  if (e) {
    let t = parseInt(e, 10);
    if (!Number.isNaN(t) && t >= 0) return t;
  }
  return vKu;
}
async function getProxyAuthFromHelper() {
  let e = getConfiguredProxyAuthHelper();
  if (!e) return null;
  if (l4s() && !Ir() && !Ftt.trustAccepted())
    return (
      T(
        "proxyAuthHelper configured in project/local settings but workspace trust not yet accepted \u2014 skipping",
        {
          level: "warn",
        },
      ),
      null
    );
  let t = Dyn;
  if (!t && SIe && Date.now() - SIe.timestamp < wKu()) return SIe.value;
  Dyn = void 0;
  let n = getProxyUrl(),
    r;
  try {
    r = n ? new URL(n).hostname : void 0;
  } catch {
    r = void 0;
  }
  let o = await S0(e, {
    timeout: 30000,
    reject: false,
    env: {
      ...process.env,
      ...(n && {
        CLAUDE_CODE_PROXY_URL: n,
      }),
      ...(r && {
        CLAUDE_CODE_PROXY_HOST: r,
      }),
      ...(t && {
        CLAUDE_CODE_PROXY_AUTHENTICATE: t,
      }),
    },
  });
  if (o.failed || !o.stdout?.trim()) {
    let i = o.timedOut ? "timed out" : o.failed ? `exited ${o.exitCode}` : "did not return a value",
      a = o.stderr?.trim();
    return (console.error(`proxyAuthHelper failed: ${a ? `${i}: ${a}` : i}`), SIe?.value ?? null);
  }
  let s = o.stdout.trim();
  return (
    (SIe = {
      value: s,
      timestamp: Date.now(),
    }),
    s
  );
}
function getProxyAuthFromHelperCached() {
  return SIe?.value ?? null;
}
function clearProxyAuthHelperCache(e) {
  ((SIe = null), (Dyn = e));
}
function prefetchProxyAuthFromHelperIfSafe() {
  if (!getConfiguredProxyAuthHelper()) return;
  if (l4s() && !Ftt.trustAccepted()) return;
  getProxyAuthFromHelper();
}
function CKu() {
  ((SIe = null),
    (Dyn = void 0),
    (Ftt = {
      helper: void 0,
      fromProjectOrLocal: false,
      trustAccepted: () => false,
    }));
}
function getProxyFetchOptions(e) {
  let t = process.env.API_FORCE_IDLE_TIMEOUT,
    n = e.forAnthropicAPI && !ut(t) && (e.hasBodyIdleWatchdog || ml(t)),
    r = {
      ...(LOr && {
        keepalive: false,
      }),
      ...(n && {
        timeout: false,
      }),
    };
  if (e.forAnthropicAPI) {
    let s = process.env.ANTHROPIC_UNIX_SOCKET;
    if (s)
      return {
        ...r,
        unix: s,
      };
  }
  let o = getProxyUrl();
  if (o) {
    if (e.url && shouldBypassProxy(e.url))
      return {
        ...r,
        ...Ket(),
      };
    let s = getProxyAuthFromHelperCached();
    return {
      ...r,
      proxy: s
        ? {
            url: o,
            headers: {
              "Proxy-Authorization": s,
            },
          }
        : o,
      ...Ket(),
    };
  }
  if (e.fallbackProxy) {
    if (
      e.url &&
      (shouldBypassProxyWithCidr(e.url, e.fallbackProxy.noProxy) ||
        shouldBypassProxyWithCidr(e.url, getNoProxy()))
    )
      return {
        ...r,
        ...Ket(),
      };
    let s = Ket();
    return {
      ...r,
      proxy: e.fallbackProxy.url,
      ...(e.fallbackProxy.ca
        ? {
            tls: {
              ...s.tls,
              ca: e.fallbackProxy.ca,
            },
          }
        : s),
    };
  }
  return {
    ...r,
    ...Ket(),
  };
}
function configureGlobalAgents() {
  let e = getProxyUrl(),
    t = qLr();
  if (Lyn !== void 0) (po.interceptors.request.eject(Lyn), (Lyn = void 0));
  if (
    ((po.defaults.proxy = void 0),
    (po.defaults.httpAgent = void 0),
    (po.defaults.httpsAgent = void 0),
    e)
  ) {
    po.defaults.proxy = false;
    let n = a4s(e);
    ((Lyn = po.interceptors.request.use((r) => {
      if (r.url && shouldBypassProxy(r.url)) {
        if (t) ((r.httpsAgent = t), (r.httpAgent = void 0));
        else (delete r.httpsAgent, delete r.httpAgent);
      } else ((r.httpsAgent = n), (r.httpAgent = n));
      return r;
    })),
      require("undici").setGlobalDispatcher(getProxyAgent(e)));
  } else if (t) po.defaults.httpsAgent = t;
}
async function getAWSClientProxyConfig(e) {
  let t = getProxyUrl();
  if (!t || (e.url && shouldBypassProxy(e.url))) return {};
  let [{ NodeHttpHandler: n }, { defaultProvider: r }] = await Promise.all([
      Promise.resolve().then(() => R(PG(), 1)),
      Promise.resolve().then(() => (I2e(), o4s)),
    ]),
    o = a4s(t),
    s = new n({
      httpAgent: o,
      httpsAgent: o,
    });
  return {
    requestHandler: s,
    credentials: r({
      clientConfig: {
        requestHandler: s,
      },
    }),
  };
}
function clearProxyCache() {
  (getProxyAgent.cache.clear?.(), T("Cleared proxy agent cache"));
}
var s4s,
  kOr,
  LOr = false,
  getProxyAgent,
  vKu = 300000,
  Ftt,
  SIe = null,
  Dyn,
  Lyn;
