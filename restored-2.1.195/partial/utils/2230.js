// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kv
// matched 2.1.88 source: src/utils/proxy.ts
// class=partial  jaccard=0.0761  score=0.1716  fileCov=0.1204
// note: low-confidence suggestion: src/utils/proxy.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kv = E(() => {
  Mm();
  Vkn = require("crypto"), Cke = require("fs"), TKr = require("os"), zkn = require("path");
});
function F1i(e) {
  let t = e.HTTP_PROXY || e.http_proxy || e.CLAUDE_CODE_HTTP_PROXY,
    n = e.HTTPS_PROXY || e.https_proxy || e.CLAUDE_CODE_HTTPS_PROXY,
    r = e.NO_PROXY || e.no_proxy;
  if (!t && !n) return {};
  let o = U1i(t),
    s = U1i(n);
  if (!s.host) s = o;
  let i = {},
    a = (l, c) => {
      if (c && e[l] === void 0) i[l] = c;
    };
  if (a("YARN_HTTP_PROXY", t), a("YARN_HTTPS_PROXY", n), a("npm_config_proxy", t), a("npm_config_https_proxy", n), a("npm_config_noproxy", r), a("GLOBAL_AGENT_HTTP_PROXY", t), a("GLOBAL_AGENT_HTTPS_PROXY", n), a("GLOBAL_AGENT_NO_PROXY", r), a("ELECTRON_GET_USE_PROXY", "1"), a("DOCKER_HTTP_PROXY", t), a("DOCKER_HTTPS_PROXY", n), s.host) a("CLOUDSDK_PROXY_TYPE", "http"), a("CLOUDSDK_PROXY_ADDRESS", s.host), a("CLOUDSDK_PROXY_PORT", s.port), a("CLOUDSDK_PROXY_USERNAME", s.user), a("CLOUDSDK_PROXY_PASSWORD", s.pass);
  if (a("FSSPEC_GCS", '{"session_kwargs": {"trust_env": true}}'), s.host) {
    let l = e.JAVA_TOOL_OPTIONS;
    if (!l?.includes("-Dhttps.proxyHost=")) {
      let c = n1d(o, s, r);
      i.JAVA_TOOL_OPTIONS = l ? `${l} ${c}` : c;
    }
  }
  return i;
}
function U1i(e) {
  if (!e) return {
    host: "",
    port: "",
    user: "",
    pass: ""
  };
  try {
    let t = new URL(e);
    if (!t.hostname) return {
      host: "",
      port: "",
      user: "",
      pass: ""
    };
    return {
      host: t.hostname.startsWith("[") && t.hostname.endsWith("]") ? t.hostname.slice(1, -1) : t.hostname,
      port: t.port || (t.protocol === "https:" ? "443" : "80"),
      user: decodeURIComponent(t.username),
      pass: decodeURIComponent(t.password)
    };
  } catch {
    return {
      host: "",
      port: "",
      user: "",
      pass: ""
    };
  }
}
function n1d(e, t, n) {
  let r = [],
    o = (s, i) => {
      if (i && !t1d.test(i)) r.push(`-D${s}=${i}`);
    };
  if (o("http.proxyHost", e.host), o("http.proxyPort", e.port), o("https.proxyHost", t.host), o("https.proxyPort", t.port), o("http.proxyUser", e.user), o("http.proxyPassword", e.pass), o("https.proxyUser", t.user), o("https.proxyPassword", t.pass), n) o("http.nonProxyHosts", r1d(n));
  return r.push("-Djdk.http.auth.tunneling.disabledSchemes="), r.push("-Djdk.http.auth.proxying.disabledSchemes="), r.join(" ");
}
function r1d(e) {
  return e.split(",").map(t => t.trim()).filter(Boolean).flatMap(t => {
    if (t.startsWith(".")) return [`*${t}`];
    return o1d(t) ?? [t];
  }).join("|");
}
function o1d(e) {
  let t = e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!t) return;
  let n = [Number(t[1]), Number(t[2]), Number(t[3]), Number(t[4])],
    r = Number(t[5]);
  if (n.some(c => c > 255) || r < 8 || r > 24) return [e];
  let o = Math.floor(r / 8),
    s = r % 8;
  if (s === 0) return [`${n.slice(0, o).join(".")}.*`];
  let i = 2 ** (8 - s);
  if (i > 16) return [e];
  let a = n[o] - n[o] % i,
    l = [];
  for (let c = a; c < a + i; c++) l.push(`${[...n.slice(0, o), c].join(".")}.*`);
  return l;
}
var t1d;