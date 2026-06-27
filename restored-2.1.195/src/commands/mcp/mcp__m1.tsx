// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yfe
// matched 2.1.88 source: src/commands/mcp/mcp.tsx
// class=modified (alt of src/commands/mcp/mcp.tsx)  jaccard=0.0714  score=0.0893  fileCov=0.2622
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module Yfe] deps: VFl
((zFl = R(lt(), 1)), (LKe = R(rt(), 1)), (YFl = R(se(), 1)), (EBo = LKe.createContext(null)));
function DKe(e) {
  return e.type;
}
function TBo(e) {
  let t = DKe(e);
  switch (t) {
    case "disabled":
    case "pending":
    case "needs-approval":
      return t;
    case "connected":
    case "failed":
    case "needs-auth":
      return null;
    default:
      return t;
  }
}
function XFl(e, t) {
  if (t === "ide")
    throw Error("The IDE connection is managed automatically and can't be reconnected manually");
  let n = e.find((o) => o.name === t),
    r = n && TBo(n);
  if (r)
    throw Error(
      r === "disabled"
        ? `"${t}" is disabled \u2014 enable it first`
        : r === "pending"
          ? `"${t}" is already reconnecting \u2014 retries can take a few minutes when a server keeps failing`
          : `"${t}" is pending approval \u2014 approve it in the terminal first`,
    );
}
async function call(e, t) {
  let n = e.trim(),
    r = t.getMcp().clients.filter((_) => _.name !== "ide"),
    o = n.toLowerCase();
  if (!n || Iae.includes(o)) {
    if (r.length === 0)
      return YL(`No MCP servers are configured. Add one with \`claude mcp add\`.
${vBo}`);
    let _ = On(r, (x) => x.type === "connected"),
      S = On(r, (x) => x.type === "pending"),
      A = On(r, (x) => x.type === "failed" || x.type === "needs-auth"),
      v = On(r, (x) => x.type === "disabled"),
      C = r.length - _ - S - v;
    return YL(
      `${r.length} MCP server(s): ${_} connected, ` +
        (S > 0 ? `${S} connecting, ` : "") +
        `${C} not connected, ${v} disabled.` +
        (A > 0 ? " Reply `/mcp reconnect all` here to retry." : "") +
        ` Use \`/mcp\` in the terminal for details.
${vBo}`,
    );
  }
  if (_G.includes(o)) return YL(vBo);
  let s = /^(\S+)\s*(.*)$/.exec(n),
    i = (s?.[1] ?? "").toLowerCase(),
    a = s?.[2] || "all";
  if (i !== "reconnect" && i !== "enable" && i !== "disable")
    return YL(`"${i}" isn't a recognized /mcp action. Try reconnect, enable, or disable.`);
  G("tengu_mcp_command_inline", {
    action: $e(i),
  });
  let l = a === "all" ? r : r.filter((_) => _.name === a);
  if (l.length === 0)
    return YL(
      a === "all"
        ? "No MCP servers are configured. Add one with `claude mcp add`."
        : `There's no MCP server named "${a}". Run \`/mcp\` in the terminal to see configured servers.`,
    );
  let c = Unr(),
    u = KFl();
  if (!c || !u)
    return YL(
      "MCP controls aren't available right now \u2014 the terminal is still starting up or is showing another view.",
    );
  if (i === "reconnect") {
    let _ = a !== "all" ? l[0] : void 0,
      S = _ && TBo(_);
    if (S === "disabled")
      return YL(`"${a}" is disabled. Run \`/mcp enable ${a}\` to bring it back.`);
    if (S === "pending")
      return YL(
        `"${a}" is already reconnecting \u2014 retries can take a few minutes when a server keeps failing.`,
      );
    if (S === "needs-approval")
      return YL(`"${a}" is pending approval. Approve it with \`/mcp\` in the terminal first.`);
    let A = a === "all" ? l.filter((x) => x.type === "failed" || x.type === "needs-auth") : l;
    if (A.length === 0) {
      let x = On(l, (I) => I.type === "disabled");
      if (x > 0)
        return YL(`${x} MCP server(s) are disabled. Run \`/mcp enable all\` to bring them back.`);
      return YL("All enabled MCP servers are already connected or connecting.");
    }
    let v = await Promise.allSettled(A.map((x) => c(x.name))),
      C = On(v, (x) => x.status === "fulfilled" && x.value.client.type === "connected");
    if (a !== "all") {
      let x = v[0],
        I = x?.status === "fulfilled" ? x.value.client.type : void 0,
        k =
          I === "needs-auth"
            ? "Authenticate with `/mcp` in the terminal."
            : "Check its config with `/mcp` in the terminal.";
      return YL(
        I === "connected"
          ? `Reconnected "${a}".`
          : `Couldn't reconnect "${a}"${I ? ` (${JFl[I]})` : ""}. ${k}`,
      );
    }
    return YL(
      `Reconnected ${C} of ${A.length} MCP server(s). Run \`/mcp\` in the terminal to see status.`,
    );
  }
  let d = i === "enable";
  if (a !== "all" && l.some((_) => DKe(_) === "needs-approval"))
    return YL(`"${a}" is pending approval. Approve it with \`/mcp\` in the terminal first.`);
  let p = l.filter((_) =>
    d ? _.type === "disabled" : _.type !== "disabled" && DKe(_) !== "needs-approval",
  );
  if (p.length === 0) {
    if (d) {
      let _ = On(l, (S) => S.type === "failed" || S.type === "needs-auth");
      if (_ > 0)
        return YL(
          a === "all"
            ? `All MCP servers are already enabled, but ${_} ${_ === 1 ? "isn't" : "aren't"} connected. Reply \`/mcp reconnect all\` here to retry.`
            : `"${a}" is already enabled but not connected. Run \`/mcp reconnect ${a}\` to retry.`,
        );
    }
    return YL(
      a === "all"
        ? `All MCP servers are already ${d ? "enabled" : "disabled"}.`
        : `"${a}" is already ${d ? "enabled" : "disabled"}.`,
    );
  }
  let f = await Promise.allSettled(p.map((_) => u(_.name))),
    m = On(f, (_) => _.status === "fulfilled"),
    g = d ? On(f, (_) => _.status === "fulfilled" && _.value.type === "connected") : m,
    h = d ? "Enabled" : "Disabled",
    y = d && g < m ? ` (${m - g} enabled but not yet connected)` : "";
  if (a !== "all") {
    if (!d)
      return YL(
        m > 0
          ? `Disabled "${a}".`
          : `Couldn't disable "${a}" \u2014 it may have been removed, or its configuration couldn't be read. Run \`/mcp\` in the terminal to check.`,
      );
    let _ = f[0];
    if (_?.status !== "fulfilled")
      return YL(
        `Couldn't enable "${a}" \u2014 it may have been removed, or its configuration couldn't be read. Run \`/mcp\` in the terminal to check.`,
      );
    let S = _.value.type,
      A =
        S === "needs-auth"
          ? "Authenticate with `/mcp` in the terminal."
          : "Check its config with `/mcp` in the terminal.";
    return YL(
      S === "connected"
        ? `Enabled "${a}".`
        : `Enabled "${a}", but it isn't connected yet${S !== "failed" ? ` (${JFl[S]})` : ""}. ${A}`,
    );
  }
  let b = p.length - m;
  return YL(
    `${h} ${m} MCP server(s)${y}` +
      (b > 0 ? ` (${b} couldn't be changed \u2014 may have been removed)` : "") +
      ". Run `/mcp` in the terminal to see status.",
  );
}
function YL(e) {
  return {
    type: "text",
    value: e,
  };
}
var JFl,
  vBo =
    "Usage: /mcp [reconnect|enable|disable [<server>|all]]. With no server name, applies to all.";
