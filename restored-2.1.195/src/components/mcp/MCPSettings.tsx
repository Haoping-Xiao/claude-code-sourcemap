// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xnr
// matched 2.1.88 source: src/components/mcp/MCPSettings.tsx
// class=modified  jaccard=0.394  score=0.8141  fileCov=0.433
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Xnr] deps: Ox, g$, uo, sr, Cc, mE, Bs, vi, B_, Ko
((i2l = R(lt(), 1)), (PHe = R(se(), 1)));
function MCPSettings(e) {
  let t = a2l.c(76),
    { onComplete: n } = e,
    r = Ht(rNf),
    o = Ht(nNf),
    s = r.clients,
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((i = {
      type: "list",
    }),
      (t[0] = i));
  else i = t[0];
  let [a, l] = $Ke.useState(i),
    c;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) ((c = []), (t[1] = c));
  else c = t[1];
  let [u, d] = $Ke.useState(c),
    [p, f] = $Ke.useState(false),
    m;
  if (t[2] !== o.allAgents) ((m = MCa(o.allAgents)), (t[2] = o.allAgents), (t[3] = m));
  else m = t[3];
  let g = m,
    h;
  if (t[4] !== s) ((h = s.filter(tNf).sort(eNf)), (t[4] = s), (t[5] = h));
  else h = t[5];
  let y = h,
    b;
  if (t[6] !== y || t[7] !== r.tools) {
    b = {};
    for (let I of y) b[I.name] = sde(r.tools, I.name).length;
    ((t[6] = y), (t[7] = r.tools), (t[8] = b));
  } else b = t[8];
  let _ = b,
    S,
    A;
  if (t[9] !== y || t[10] !== r.tools)
    ((S = () => {
      let I = false;
      return (
        (async function () {
          let P = await Promise.all(
            y.map(async (O) => {
              let L = O.config.scope,
                M = O.config.type === "sse",
                N = O.config.type === "http",
                B = O.config.type === "claudeai-proxy",
                $ = void 0;
              if (M || N) {
                let V = await new lqe(O.name, O.config).tokens(),
                  Y = XS() !== null && O.type === "connected",
                  z = O.type === "connected" && sde(r.tools, O.name).length > 0;
                $ = Boolean(V) || Y || z;
              }
              let q = {
                name: O.name,
                client: O,
                scope: L,
              };
              if (B)
                return {
                  ...q,
                  transport: "claudeai-proxy",
                  isAuthenticated: false,
                  config: O.config,
                };
              else if (M)
                return {
                  ...q,
                  transport: "sse",
                  isAuthenticated: $,
                  config: O.config,
                };
              else if (N)
                return {
                  ...q,
                  transport: "http",
                  isAuthenticated: $,
                  config: O.config,
                };
              else
                return {
                  ...q,
                  transport: "stdio",
                  config: O.config,
                };
            }),
          );
          if (I) return;
          d(P);
        })(),
        () => {
          I = true;
        }
      );
    }),
      (A = [y, r.tools]),
      (t[9] = y),
      (t[10] = r.tools),
      (t[11] = S),
      (t[12] = A));
  else ((S = t[11]), (A = t[12]));
  $Ke.useEffect(S, A);
  let v;
  if (
    t[13] !== g.length ||
    t[14] !== y.length ||
    t[15] !== r.suppressedClaudeAiConnectors?.length ||
    t[16] !== n ||
    t[17] !== u.length
  )
    ((v = () => {
      if (u.length === 0 && y.length > 0) return;
      if (u.length === 0 && g.length === 0 && (r.suppressedClaudeAiConnectors?.length ?? 0) === 0)
        n(
          "No MCP servers configured. Please run /doctor if this is unexpected. Otherwise, run `claude mcp --help` or visit https://code.claude.com/docs/en/mcp to learn more.",
        );
    }),
      (t[13] = g.length),
      (t[14] = y.length),
      (t[15] = r.suppressedClaudeAiConnectors?.length),
      (t[16] = n),
      (t[17] = u.length),
      (t[18] = v));
  else v = t[18];
  let C = r.suppressedClaudeAiConnectors?.length,
    x;
  if (t[19] !== g.length || t[20] !== y.length || t[21] !== n || t[22] !== u.length || t[23] !== C)
    ((x = [u.length, y.length, g.length, C, n]),
      (t[19] = g.length),
      (t[20] = y.length),
      (t[21] = n),
      (t[22] = u.length),
      (t[23] = C),
      (t[24] = x));
  else x = t[24];
  switch (($Ke.useEffect(v, x), a.type)) {
    case "list": {
      let I, k;
      if (t[25] === Symbol.for("react.memo_cache_sentinel"))
        ((I = (O) =>
          l({
            type: "server-menu",
            server: O,
          })),
          (k = (O) =>
            l({
              type: "agent-server-menu",
              agentServer: O,
            })),
          (t[25] = I),
          (t[26] = k));
      else ((I = t[25]), (k = t[26]));
      let D;
      if (t[27] === Symbol.for("react.memo_cache_sentinel")) ((D = () => f(Z1f)), (t[27] = D));
      else D = t[27];
      let P;
      if (
        t[28] !== g ||
        t[29] !== r.suppressedClaudeAiConnectors ||
        t[30] !== n ||
        t[31] !== u ||
        t[32] !== p ||
        t[33] !== _ ||
        t[34] !== a.defaultTab
      )
        ((P = MKe.jsx(IBo, {
          servers: u,
          suppressedClaudeAiConnectors: r.suppressedClaudeAiConnectors,
          toolCountsByServer: _,
          agentServers: g,
          onSelectServer: I,
          onSelectAgentServer: k,
          onComplete: n,
          defaultTab: a.defaultTab,
          showUnusedConnectors: p,
          onToggleUnusedConnectors: D,
        })),
          (t[28] = g),
          (t[29] = r.suppressedClaudeAiConnectors),
          (t[30] = n),
          (t[31] = u),
          (t[32] = p),
          (t[33] = _),
          (t[34] = a.defaultTab),
          (t[35] = P));
      else P = t[35];
      return P;
    }
    case "server-menu": {
      let I;
      if (t[36] !== r.tools || t[37] !== a.server.name)
        ((I = sde(r.tools, a.server.name)),
          (t[36] = r.tools),
          (t[37] = a.server.name),
          (t[38] = I));
      else I = t[38];
      let k = I,
        D = a.server.transport === "claudeai-proxy" ? "claude.ai" : "Claude Code";
      if (a.server.transport === "stdio") {
        let P;
        if (t[39] !== a.server)
          ((P = () =>
            l({
              type: "server-tools",
              server: a.server,
            })),
            (t[39] = a.server),
            (t[40] = P));
        else P = t[40];
        let O;
        if (t[41] !== D)
          ((O = () =>
            l({
              type: "list",
              defaultTab: D,
            })),
            (t[41] = D),
            (t[42] = O));
        else O = t[42];
        let L;
        if (t[43] !== n || t[44] !== k.length || t[45] !== P || t[46] !== O || t[47] !== a.server)
          ((L = MKe.jsx(iXt, {
            server: a.server,
            serverToolsCount: k.length,
            onViewTools: P,
            onCancel: O,
            onComplete: n,
          })),
            (t[43] = n),
            (t[44] = k.length),
            (t[45] = P),
            (t[46] = O),
            (t[47] = a.server),
            (t[48] = L));
        else L = t[48];
        return L;
      } else {
        let P;
        if (t[49] !== a.server)
          ((P = () =>
            l({
              type: "server-tools",
              server: a.server,
            })),
            (t[49] = a.server),
            (t[50] = P));
        else P = t[50];
        let O;
        if (t[51] !== D)
          ((O = () =>
            l({
              type: "list",
              defaultTab: D,
            })),
            (t[51] = D),
            (t[52] = O));
        else O = t[52];
        let L;
        if (t[53] !== n || t[54] !== k.length || t[55] !== P || t[56] !== O || t[57] !== a.server)
          ((L = MKe.jsx(PKe, {
            server: a.server,
            serverToolsCount: k.length,
            onViewTools: P,
            onCancel: O,
            onComplete: n,
          })),
            (t[53] = n),
            (t[54] = k.length),
            (t[55] = P),
            (t[56] = O),
            (t[57] = a.server),
            (t[58] = L));
        else L = t[58];
        return L;
      }
    }
    case "server-tools": {
      let I, k;
      if (t[59] !== a.server)
        ((I = (P) =>
          l({
            type: "server-tool-detail",
            server: a.server,
            tool: P,
          })),
          (k = () =>
            l({
              type: "server-menu",
              server: a.server,
            })),
          (t[59] = a.server),
          (t[60] = I),
          (t[61] = k));
      else ((I = t[60]), (k = t[61]));
      let D;
      if (t[62] !== I || t[63] !== k || t[64] !== a.server)
        ((D = MKe.jsx(lXt, {
          server: a.server,
          onSelectTool: I,
          onBack: k,
        })),
          (t[62] = I),
          (t[63] = k),
          (t[64] = a.server),
          (t[65] = D));
      else D = t[65];
      return D;
    }
    case "server-tool-detail": {
      let I;
      if (t[66] !== a.server)
        ((I = () =>
          l({
            type: "server-tools",
            server: a.server,
          })),
          (t[66] = a.server),
          (t[67] = I));
      else I = t[67];
      let k;
      if (t[68] !== I || t[69] !== a.server || t[70] !== a.tool)
        ((k = MKe.jsx(aXt, {
          tool: a.tool,
          server: a.server,
          onBack: I,
        })),
          (t[68] = I),
          (t[69] = a.server),
          (t[70] = a.tool),
          (t[71] = k));
      else k = t[71];
      return k;
    }
    case "agent-server-menu": {
      let I;
      if (t[72] === Symbol.for("react.memo_cache_sentinel"))
        ((I = () =>
          l({
            type: "list",
            defaultTab: "Agents",
          })),
          (t[72] = I));
      else I = t[72];
      let k;
      if (t[73] !== n || t[74] !== a.agentServer)
        ((k = MKe.jsx(wBo, {
          agentServer: a.agentServer,
          onCancel: I,
          onComplete: n,
        })),
          (t[73] = n),
          (t[74] = a.agentServer),
          (t[75] = k));
      else k = t[75];
      return k;
    }
  }
}
function Z1f(e) {
  return !e;
}
function eNf(e, t) {
  return e.name.localeCompare(t.name);
}
function tNf(e) {
  return e.name !== "ide";
}
function nNf(e) {
  return e.agentDefinitions;
}
function rNf(e) {
  return e.mcp;
}
var a2l, $Ke, MKe;
