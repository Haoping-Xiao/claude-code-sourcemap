// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C7n
// matched 2.1.88 source: src/utils/swarm/spawnUtils.ts
// class=modified  jaccard=0.223  score=0.366  fileCov=0.3632
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module C7n]
((Y6t = [
  "SSL_CERT_FILE",
  "NODE_EXTRA_CA_CERTS",
  "REQUESTS_CA_BUNDLE",
  "CURL_CA_BUNDLE",
  "CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE",
  "HTTPLIB2_CA_CERTS",
]),
  (X6t = [
    "AWS_CA_BUNDLE",
    "DENO_CERT",
    "CARGO_HTTP_CAINFO",
    "PIP_CERT",
    "GIT_SSL_CAINFO",
    "GRPC_DEFAULT_SSL_ROOTS_FILE_PATH",
    "NIX_SSL_CERT_FILE",
    "HEX_CACERTS_PATH",
  ]),
  (J6t = [...Y6t, ...X6t]),
  (B6e = {
    UV_NATIVE_TLS: "true",
    DENO_TLS_CA_STORE: "system,mozilla",
  }));
function dhl() {
  if (process.env[sht]) return process.env[sht];
  return dm() ? process.execPath : process.argv[1];
}
function phl(e) {
  let t = [],
    { planModeRequired: n, permissionMode: r, skipModel: o, effortValue: s } = e || {};
  if (n);
  else if (r === "bypassPermissions") t.push("--dangerously-skip-permissions");
  else if (r === "acceptEdits") t.push("--permission-mode acceptEdits");
  else if (r === "auto") t.push("--permission-mode auto");
  if (!o) {
    let u = process.env.CLAUDE_CODE_SUBAGENT_MODEL;
    if (u && u !== "inherit") t.push(`--model ${ja([u])}`);
    else {
      let d = r_();
      if (d) t.push(`--model ${ja([d])}`);
    }
  }
  if (typeof s === "string" && vke()) t.push(`--effort ${s}`);
  let i = JBe() ?? XBe();
  if (i) t.push(`--settings ${ja([i])}`);
  let a = PV();
  for (let u of a) t.push(`--plugin-dir ${ja([u])}`);
  for (let u of MV()) t.push(`--plugin-dir-no-mcp ${ja([u])}`);
  for (let u of aee()) t.push(`--plugin-url ${ja([u])}`);
  let l = ODe();
  t.push(`--teammate-mode ${l}`);
  let c = kge();
  if (c === true) t.push("--chrome");
  else if (c === false) t.push("--no-chrome");
  return t.join(" ");
}
function Q6t() {
  let e = ["CLAUDECODE=1", "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1"];
  for (let n of yff) {
    let r = process.env[n];
    if (r !== void 0 && r !== "") e.push(`${n}=${ja([r])}`);
  }
  let t = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (t !== void 0) e.push(`CLAUDE_SECURESTORAGE_CONFIG_DIR=${ja([t])}`);
  return e.join(" ");
}
var yff;
