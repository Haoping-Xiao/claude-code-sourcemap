// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pfc
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0036  score=0.0543  fileCov=0.0038
// note: nearest: src/cli/print.ts (0.0036); dir inferred from dep-graph -> utils; 6 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: resetAgentProxyForTests, installIntoSystemTrust, initAgentProxy, getAgentProxyEnv, findSystemCaBundle, SESSION_TOKEN_PATH
// [unwrapped __esm module pfc] deps: dn, je, wr, At, Bi, _0, aEe, C7n
fw = require("fs/promises"), Q9o = require("os"), Fz = require("path"), Blm = /[\s'"]/;
async function initAgentProxy(e) {
  let t = process.env.AGENT_PROXY_URL,
    n = process.env.AGENT_PROXY_AUTH_TOKEN;
  if (Oe.unset("AGENT_PROXY_URL"), Oe.unset("AGENT_PROXY_AUTH_TOKEN"), !ut(process.env.CLAUDE_CODE_REMOTE)) return vS;
  if (!Oe.CCR_AGENT_PROXY_ENABLED) return vS;
  let r = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!r) return T("[agent-proxy] CLAUDE_CODE_REMOTE_SESSION_ID unset; proxy disabled", {
    level: "warn"
  }), Le("agent_proxy_init", "agent_proxy_init_no_session_id"), vS;
  let o = e?.tokenPath ?? SESSION_TOKEN_PATH,
    s = await Zlm(o),
    i = s.existed,
    a = s.token;
  if (!a) a = XS();
  if (!a && !n) return T("[agent-proxy] no session token; proxy disabled"), Le("agent_proxy_init", "agent_proxy_init_no_token"), vS;
  T(`[agent-proxy] token via ${i ? o : "sessionIngressAuth"}`), ecm();
  let l = t ?? e?.ccrBaseUrl ?? process.env.ANTHROPIC_BASE_URL ?? "https://api.anthropic.com",
    c = e?.caBundlePath ?? $Te.join(e8o.homedir(), ".ccr", "ca-bundle.crt"),
    u = e?.systemCaPath ? await sO.readFile(e.systemCaPath, "utf8").catch(() => "") : await findSystemCaBundle(),
    d = await rcm(u, c),
    p = await scm(l, d ? `${u}
${d}` : u, c);
  if (!p) return vS;
  await icm(e?.awsConfigPath ?? $Te.join(e8o.homedir(), ".aws", "config"));
  try {
    let f = l.replace(/^http/, "ws") + _fc + "/ws",
      m = $Te.join(c, "..", "README.md"),
      g = await Zpc({
        wsUrl: f,
        sessionId: r,
        token: n ?? a ?? "",
        statusProvider: () => ({
          ...vS,
          readmePath: m,
          gitConfigInjection: n8o(),
          gitSshRewrite: n8o() && yfc()
        })
      });
    Ci(async () => g.stop()), t8o = g, vS = {
      enabled: true,
      port: g.port,
      caBundlePath: c,
      hasSystemCa: u !== "",
      noProxy: t ? Vlm : r8o,
      standalone: Boolean(t)
    }, T(`[agent-proxy] enabled on 127.0.0.1:${g.port}`), xe("agent_proxy_init");
    let h = vS;
    if (LNt(Z9o(c, void 0)), sO.writeFile(m, Jlm(g.port, c), "utf8").then(() => {
      if (vS !== h) return;
      LNt(Z9o(c, m));
    }).catch(y => {
      if (T(`[agent-proxy] README write failed: ${y instanceof Error ? y.message : String(y)}`), vS !== h) return;
      LNt(Z9o(c, void 0));
    }), Xlm().then(y => {
      if (y.length > 0 && vS === h) vS.gitConfigConflicts = y, T(`[agent-proxy] git config may defeat proxy routing: ${y.join(", ")}`, {
        level: "warn"
      });
    }).catch(() => {}), installIntoSystemTrust(p, e?.systemTrustTargets ?? ocm).catch(() => {}), e?.toolTrust !== false) cfc({
      ccrCa: p,
      caBundlePath: c,
      hasSystemCa: vS.hasSystemCa ?? false,
      stateDir: $Te.join(c, ".."),
      ...(e?.toolTrust ?? {})
    }).then(y => {
      if (vS !== h) return;
      if (y.javaTrustStorePath) vS.javaTrustStorePath = y.javaTrustStorePath;
      if (y.profileDPath) {
        let b = y.profileDPath;
        Ci(() => sO.unlink(b).catch(() => {}));
      }
      if (y.failureCodes.length > 0) vS.toolTrustFailureCodes = y.failureCodes;
    }).catch(y => {
      T(`[agent-proxy] tool trust setup failed: ${y instanceof Error ? y.message : String(y)}`, {
        level: "warn"
      }), It("agent_proxy_tool_trust", "setup_threw");
    });
    if (i) await sO.unlink(o).catch(() => {
      T("[agent-proxy] token file unlink failed", {
        level: "warn"
      });
    });
  } catch (f) {
    T(`[agent-proxy] relay start failed: ${f instanceof Error ? f.message : String(f)}; proxy disabled`, {
      level: "warn"
    }), Le("agent_proxy_init", "agent_proxy_init_relay_start_failed");
  }
  return vS;
}
function getAgentProxyEnv() {
  if (!vS.enabled || !vS.port || !vS.caBundlePath) {
    if (process.env.HTTPS_PROXY && process.env.SSL_CERT_FILE) {
      let s = {};
      for (let i of ["HTTPS_PROXY", "https_proxy", "NO_PROXY", "no_proxy", ...J6t, ...Object.keys(B6e), "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "GH_TOKEN", "GITHUB_TOKEN", "CLOUDSDK_AUTH_ACCESS_TOKEN"]) if (process.env[i]) s[i] = process.env[i];
      return s;
    }
    return {};
  }
  let e = `http://127.0.0.1:${vS.port}`,
    t = {
      HTTPS_PROXY: e,
      https_proxy: e,
      NO_PROXY: vS.noProxy,
      no_proxy: vS.noProxy
    };
  for (let s of Y6t) t[s] = vS.caBundlePath;
  if (vS.hasSystemCa) {
    for (let s of X6t) t[s] = vS.caBundlePath;
    for (let [s, i] of Object.entries(B6e)) if (process.env[s] === void 0) t[s] = i;
  }
  if (vS.javaTrustStorePath) t.JAVA_TOOL_OPTIONS = lfc(vS.javaTrustStorePath, Oe.JAVA_TOOL_OPTIONS);
  if (Oe.GIT_TERMINAL_PROMPT === void 0) t.GIT_TERMINAL_PROMPT = pFt.GIT_TERMINAL_PROMPT;
  if (Oe.GIT_ASKPASS === void 0) t.GIT_ASKPASS = pFt.GIT_ASKPASS;
  if (Oe.GCM_INTERACTIVE === void 0) t.GCM_INTERACTIVE = pFt.GCM_INTERACTIVE;
  if (n8o()) {
    let s = [["credential.interactive", "false"]];
    if (yfc()) s.push([`url.https://${JH}/.insteadOf`, `git@${JH}:`], [`url.https://${JH}/.insteadOf`, `ssh://git@${JH}/`]);
    Object.assign(t, Aeo(void 0, s));
  }
  if (!(process.env.GH_TOKEN || process.env.GITHUB_TOKEN)) t.GH_TOKEN = "proxy-injected", t.GITHUB_TOKEN = "proxy-injected";
  if (!(process.env.AWS_ACCESS_KEY_ID || process.env.AWS_SECRET_ACCESS_KEY || process.env.AWS_SESSION_TOKEN || process.env.AWS_PROFILE || process.env.AWS_SHARED_CREDENTIALS_FILE || process.env.AWS_CONFIG_FILE || process.env.AWS_WEB_IDENTITY_TOKEN_FILE || process.env.AWS_ROLE_ARN || process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI || process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI)) t.AWS_ACCESS_KEY_ID = "proxy-injected", t.AWS_SECRET_ACCESS_KEY = "proxy-injected";
  if (!(process.env.CLOUDSDK_AUTH_ACCESS_TOKEN || process.env.GOOGLE_APPLICATION_CREDENTIALS)) t.CLOUDSDK_AUTH_ACCESS_TOKEN = "proxy-injected";
  return t;
}
function n8o() {
  return Oe.GIT_CONFIG_COUNT === void 0;
}
function yfc() {
  return !vS.standalone && Oe.SSH_AUTH_SOCK === void 0 && Oe.GIT_SSH_COMMAND === void 0;
}
function Z9o(e, t) {
  let n = t ? `see ${t} and ` : "";
  return `Outbound HTTPS goes through a pre-configured agent proxy (CA bundle: ${e}). If a tool fails TLS verification or gets 403/405/407 from the proxy, ${n}run curl -sS "$HTTPS_PROXY/__agentproxy/status" for per-tool fixes and proxy state; never disable TLS verification or unset HTTPS_PROXY.`;
}
async function Xlm() {
  let e = new Set(),
    t = await Promise.all(["--global", "--system"].map(n => $n("git", ["config", n, "--list", "--name-only"], {
      timeout: 5000,
      preserveOutputOnError: true,
      useCwd: false
    })));
  for (let n of t) {
    if (n.code !== 0) continue;
    for (let [r, o] of Ylm) if (o.test(n.stdout)) e.add(r);
  }
  return [...e];
}
function Jlm(e, t) {
  let n = $Te.join(t, ".."),
    r = `http://127.0.0.1:${e}`;
  return `# Claude Code agent proxy

Outbound HTTPS from this session goes through a local proxy at ${r}
(set via HTTPS_PROXY) which tunnels to a policy-enforcing egress proxy. TLS is
re-terminated there, so every tool must trust the CA bundle at
${t}. The standard CA environment variables, the system trust
store (where possible), a JVM truststore, the Bazel system bazelrc, the
browser NSS store, and gsutil's boto config are already set up.

## Quick diagnosis

1. Run: curl -sS ${r}/__agentproxy/status
   It reports proxy state, which trust and git accommodations are active
   (javaTrustStorePath, toolTrustFailureCodes, gitSshRewrite,
   gitConfigConflicts), and the most recent proxy-side failures.
2. Find the failure class below and apply the matching fix; gitConfigConflicts
   codes map to the git section, toolTrustFailureCodes to the JVM section.
3. Never disable TLS verification, never unset HTTPS_PROXY, and do not retry
   organization policy denials (403/407) \u2014 report them instead.

## Failure classes and fixes

### "certificate verify failed" / "self-signed certificate in chain" / PKIX errors

The failing tool is not reading the pre-set CA configuration. In order:

- If the tool has a CA flag or env var, point it at ${t}
  (examples: --cacert, SSL_CERT_FILE, NODE_EXTRA_CA_CERTS, REQUESTS_CA_BUNDLE,
  AWS_CA_BUNDLE, DENO_CERT, CARGO_HTTP_CAINFO, PIP_CERT, GIT_SSL_CAINFO,
  BUNDLE_SSL_CA_CERT, HEX_CACERTS_PATH, NIX_SSL_CERT_FILE).
- Tool config files override environment variables. If one of these sets its
  own CA or disables verification, point it at the bundle instead:
  pip.conf "cert", npm "cafile" (npm config get cafile), ~/.curlrc "cacert",
  .wgetrc "ca_certificate", conda "ssl_verify", git "http.sslCAInfo",
  gradle.properties / MAVEN_OPTS "-Djavax.net.ssl.trustStore".
- JVM tools (Maven, Gradle, plain Java): when a JDK is present, a truststore
  is built at ${n}/java-truststore.p12 (password "changeit") and
  injected via JAVA_TOOL_OPTIONS \u2014 confirm javaTrustStorePath is set in the
  status output before pointing a build at it (toolTrustFailureCodes explains
  why it is missing). If the image or the build sets its own trustStore, that
  one wins \u2014 import the proxy CA into it with
  keytool -importcert -noprompt -alias ccr-agent-proxy -file ${n}/agent-proxy-ca.crt -keystore <their store>
  or point the build at the ready-made one. Bazel reads the managed block in
  /etc/bazel.bazelrc rather than JAVA_TOOL_OPTIONS.

### "405 Method Not Allowed" from the proxy

The tool sent a plain-HTTP (non-CONNECT) request: usually axios older than
1.16.1 (upgrade it) or a tool configured with HTTP_PROXY (unset HTTP_PROXY for
that tool \u2014 only HTTPS_PROXY is supported).

### 403 / 407 from the proxy

The destination host is not allowed by your organization's egress policy for
this session. Do not retry or route around it \u2014 report the blocked host.
Note: curl hides response bodies on failed CONNECTs; the status endpoint
records the reason.

### Tool ignores the proxy entirely (timeouts with no proxy error)

Some clients do not read HTTPS_PROXY: Node's built-in fetch (run that command
with NODE_USE_ENV_PROXY=1 on Node >= 22.21), aiohttp (pass trust_env=True),
Ruby bundler (reads only HTTP_PROXY, which this proxy does not serve),
hand-rolled Go dialers. Prefer the tool's own proxy option where one exists.

### git

SSH-form GitHub remotes (git@github.com:...) are rewritten to HTTPS
automatically unless this session has its own SSH setup or supplies its own
GIT_CONFIG_* (see gitSshRewrite in the status output). A gitconfig that sets
http.proxy / http.<url>.proxy (even empty), its own http.sslCAInfo, or an
https-to-ssh insteadOf makes git bypass the proxy or fail verification \u2014 the
status output's gitConfigConflicts codes name which of these were detected;
adjust those keys for this session if git times out.

### docker build / docker run

Processes inside containers cannot reach 127.0.0.1:${e} and do not trust
the CA. Workarounds: run builds with --network host, copy ${t}
into the build context and install it in an early layer, and pass proxy/CA
settings explicitly to the build.

### Not supported through the proxy (report, do not work around)

gRPC / HTTP/2-only APIs, WebSocket upgrades, client-mTLS, certificate-pinned
clients (e.g. Snowflake, ngrok), non-443 HTTPS ports, raw-TCP databases.

If a tool still cannot work through the proxy, report it to your
administrator or Anthropic support so the policy or tooling can be fixed.
`;
}
function resetAgentProxyForTests() {
  vS = {
    enabled: false,
    noProxy: r8o
  }, LNt(void 0), t8o?.stop(), t8o = void 0;
}
async function Zlm(e) {
  try {
    return {
      existed: true,
      token: (await sO.readFile(e, "utf8")).trim() || null
    };
  } catch (t) {
    if (wn(t)) return {
      existed: false,
      token: null
    };
    return T(`[agent-proxy] token read failed: ${t instanceof Error ? t.message : String(t)}`, {
      level: "warn"
    }), {
      existed: false,
      token: null
    };
  }
}
function ecm() {
  try {
    let t = require("bun:ffi").dlopen("libc.so.6", {
        prctl: {
          args: ["int", "u64", "u64", "u64", "u64"],
          returns: "int"
        }
      }),
      n = 4;
    if (t.symbols.prctl(4, 0n, 0n, 0n, 0n) !== 0) T("[agent-proxy] prctl(PR_SET_DUMPABLE,0) returned nonzero", {
      level: "warn"
    });
  } catch (e) {
    T(`[agent-proxy] prctl unavailable: ${e instanceof Error ? e.message : String(e)}`, {
      level: "warn"
    });
  }
}
async function findSystemCaBundle(e = gfc) {
  for (let t of e) try {
    return await sO.readFile(t, "utf8");
  } catch {}
  return "";
}
async function rcm(e, t) {
  let n = new Set(),
    r = [],
    o = e;
  for (let s of J6t) {
    let i = process.env[s]?.trim();
    if (!i || i === t || n.has(i) || gfc.includes(i)) continue;
    n.add(i);
    let a;
    try {
      let u = await sO.stat(i);
      if (!u.isFile() || u.size > tcm) continue;
      a = await sO.readFile(i, "utf8");
    } catch (u) {
      if (!wn(u)) T(`[agent-proxy] could not read customer CA bundle from ${s}: ${u instanceof Error ? u.message : String(u)}`, {
        level: "warn"
      });
      continue;
    }
    let l = a.match(ncm);
    if (!l) continue;
    let c = 0;
    for (let u of l) {
      if (o.includes(u)) continue;
      r.push(u), o += `
${u}`, c++;
    }
    if (c > 0) T(`[agent-proxy] folded ${c} customer CA cert(s) from ${s} into the relay bundle`);
  }
  return r.join(`
`);
}
async function installIntoSystemTrust(e, t) {
  for (let {
    dir: n,
    name: r,
    refresh: o
  } of t) try {
    await sO.writeFile($Te.join(n, r), e, "utf8");
    let s = await new Promise(i => {
      ffc.execFile(o[0], o.slice(1), {
        timeout: 10000 /* 1e4 */,
        cwd: "/",
        windowsHide: true
      }, a => i(a ? wn(a) ? 127 : 1 : 0));
    });
    if (s === 0) {
      T(`[agent-proxy] CA installed to system trust via ${o[0]}`), xe("agent_proxy_system_trust");
      return;
    }
    T(`[agent-proxy] ${o[0]} exited ${s}; falling back to env-var trust`, {
      level: "warn"
    });
  } catch (s) {
    if (wn(s)) continue;
    T(`[agent-proxy] system trust install via ${n} failed: ${s instanceof Error ? s.message : String(s)}`, {
      level: "warn"
    });
  }
  if (t.length > 0) It("agent_proxy_system_trust", "unavailable");
}
async function scm(e, t, n) {
  let r = AbortSignal.timeout(5000),
    o = "";
  for (let s = 0; s < 3; s++) try {
    let i = await fetch(`${e}${_fc}/ca-cert`, {
      signal: r
    });
    if (i.status >= 500) {
      o = `status ${i.status}`;
      continue;
    }
    if (!i.ok) {
      T(`[agent-proxy] ca-cert fetch ${i.status}; proxy disabled`, {
        level: "warn"
      }), Le("agent_proxy_init", "agent_proxy_init_ca_http_error");
      return;
    }
    let a = await i.text();
    return await sO.mkdir($Te.join(n, ".."), {
      recursive: true
    }), await sO.writeFile(n, t + `
` + a, "utf8"), a;
  } catch (i) {
    o = i instanceof Error ? i.message : String(i);
  }
  T(`[agent-proxy] ca-cert fetch exhausted (${o}); proxy disabled`, {
    level: "warn"
  }), Le("agent_proxy_init", "agent_proxy_init_ca_exhausted");
  return;
}
async function icm(e) {
  try {
    await sO.mkdir($Te.join(e, ".."), {
      recursive: true,
      mode: 448
    }), await sO.writeFile(e, `[default]
s3 =
  payload_signing_enabled = false
`, {
      flag: "wx",
      mode: 384
    });
  } catch (t) {
    if (on(t) === "EEXIST") return;
    T(`[agent-proxy] aws config write failed: ${t instanceof Error ? t.message : String(t)}`, {
      level: "warn"
    });
  }
}
var ffc,
  sO,
  e8o,
  $Te,
  SESSION_TOKEN_PATH = "/run/ccr/session_token",
  gfc,
  hfc,
  r8o,
  Vlm,
  vS,
  t8o,
  Ylm,
  _fc = "/v1/code/agent-proxy",
  tcm = 1048576,
  ncm,
  ocm;