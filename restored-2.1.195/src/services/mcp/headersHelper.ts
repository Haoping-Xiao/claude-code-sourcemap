// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xka
// matched 2.1.88 source: src/services/mcp/headersHelper.ts
// class=modified  jaccard=0.3122  score=0.5365  fileCov=0.4275
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xka] deps: ink/supports-hyperlinks.ts, hooks/useTerminalSize.ts, context/stats.tsx, utils/settings/constants.ts, utils/fsOperations.ts
((ypo = R(se(), 1)),
  (Kwp = /^[CDG][A-Z0-9]{6,}$/),
  (Ywp = new Set(["slack_send_message", "slack_post_message"])));
function Rka(e) {
  let t = _po;
  return ((_po = e), t);
}
function Lka() {
  return _po;
}
function Dka(e) {
  let t = bpo;
  return ((bpo = e), t);
}
function KSe() {
  return bpo?.() ?? false;
}
function Pka(e) {
  if (kka) return;
  ((kka = true), (Spo = e));
}
function Epo() {
  let e = Spo;
  return ((Spo = void 0), e);
}
function Mka() {
  let e = Epo();
  if (e)
    process.stderr.write(`${e}
`);
}
var _po = null,
  bpo = null,
  Spo,
  kka = false;
function Jwp(e) {
  return e.scope === "project" || e.scope === "local";
}
async function getMcpHeadersFromHelper(serverName, config) {
  if (!config.headersHelper) return null;
  if ("scope" in config && Jwp(config) && !Ir()) {
    if (!ad()) {
      let o = Error(
        `Security: headersHelper for MCP server '${serverName}' executed before workspace trust is confirmed. If you see this message, post in ${
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.FEEDBACK_CHANNEL
        }.`,
      );
      return (
        rG("MCP headersHelper invoked before trust check", o),
        G("tengu_mcp_headersHelper_missing_trust", {}),
        Le("mcp_headers_helper", "missing_trust"),
        null
      );
    }
  }
  let n =
    "pluginPath" in config &&
    typeof config.pluginPath === "string" &&
    $ka.isAbsolute(config.pluginPath)
      ? config.pluginPath
      : void 0;
  try {
    sn(serverName, "Executing headersHelper to get dynamic headers");
    let r = await Gr(config.headersHelper, [], {
      shell: true,
      timeout: 10000 /* 1e4 */,
      cwd: n,
      env: {
        ...process.env,
        CLAUDE_CODE_MCP_SERVER_NAME: serverName,
        CLAUDE_CODE_MCP_SERVER_URL: config.url,
        ...(n && {
          CLAUDE_PLUGIN_ROOT: n,
        }),
      },
    });
    if (r.code !== 0 || !r.stdout)
      throw (
        Le("mcp_headers_helper", "exec_failed"),
        Error(`headersHelper for MCP server '${serverName}' did not return a valid value`)
      );
    let o = r.stdout.trim(),
      s;
    try {
      s = Ft(o);
    } catch (i) {
      throw (Le("mcp_headers_helper", "parse_failed"), i);
    }
    if (typeof s !== "object" || s === null || Array.isArray(s))
      throw (
        Le("mcp_headers_helper", "non_object"),
        Error(
          `headersHelper for MCP server '${serverName}' must return a JSON object with string key-value pairs`,
        )
      );
    for (let [i, a] of Object.entries(s))
      if (typeof a !== "string")
        throw (
          Le("mcp_headers_helper", "non_string_value"),
          Error(
            `headersHelper for MCP server '${serverName}' returned non-string value for key "${i}": ${typeof a}`,
          )
        );
    return (
      sn(serverName, `Successfully retrieved ${Object.keys(s).length} headers from headersHelper`),
      xe("mcp_headers_helper"),
      s
    );
  } catch (r) {
    return (
      au(serverName, `Error getting headers from headersHelper: ${be(r)}`),
      T(`Error getting MCP headers from headersHelper for server '${serverName}': ${be(r)}`, {
        level: "error",
      }),
      null
    );
  }
}
async function TFn(e, t) {
  let n = {},
    r = [];
  for (let [s, i] of Object.entries(t.headers ?? {})) {
    let { expanded: a, missingVars: l } = gre(i);
    ((n[s] = a), r.push(...l));
  }
  if (r.length > 0)
    sn(e, `Header values reference unset environment variables: ${Uo(r).join(", ")}`);
  let o = (await getMcpHeadersFromHelper(e, t)) || {};
  return {
    ...n,
    ...o,
  };
}
var $ka;
