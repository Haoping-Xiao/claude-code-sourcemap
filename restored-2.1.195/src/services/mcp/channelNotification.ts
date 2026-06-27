// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j_t
// matched 2.1.88 source: src/services/mcp/channelNotification.ts
// class=modified  jaccard=0.4314  score=0.7085  fileCov=0.5244
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: wrapChannelMessage, isChannelsPolicyBlocked, getEffectiveChannelAllowlist, gateChannelServer, findChannelEntry, ChannelPermissionNotificationSchema, ChannelMessageNotificationSchema, CHANNEL_PERMISSION_REQUEST_METHOD, CHANNEL_PERMISSION_METHOD
// [unwrapped __esm module j_t] deps: @modelcontextprotocol/sdk/dist/esm/types.js, utils/plugins/pluginIdentifier.ts, services/analytics/growthbook.ts
kdf = ve(() =>
  H.array(
    H.object({
      marketplace: H.string(),
      plugin: H.string(),
    }),
  ),
);
function wrapChannelMessage(e, t, n) {
  let r = Object.entries(n ?? {}),
    [o, s] = Rdf(r, ([l]) => Wfl.test(l));
  if (s.length > 0)
    T(
      `[channel] ${e}: dropped ${s.length} meta key(s) that don't match ${Wfl.source}: ${s.map(([l]) => l).join(", ")}`,
      {
        level: "warn",
      },
    );
  let i = o.map(([l, c]) => ` ${l}="${ip(c)}"`).join(""),
    a = HLe(xFe, t);
  return `<${xFe} source="${ip(e)}"${i}>
${a}
</${xFe}>`;
}
function Rdf(e, t) {
  let n = [],
    r = [];
  for (let o of e) (t(o) ? n : r).push(o);
  return [n, r];
}
function getEffectiveChannelAllowlist(sub) {
  if (sub)
    return {
      entries: sub,
      source: "org",
    };
  return {
    entries: PYn(),
    source: "ledger",
  };
}
function isChannelsPolicyBlocked(e) {
  if (bo()) {
    let t = Di();
    return (t === "team" || t === "enterprise") && e?.channelsEnabled !== true;
  }
  return e !== null && e.channelsEnabled !== true;
}
function findChannelEntry(serverName, channels) {
  let n = serverName.split(":");
  return channels.find((r) =>
    r.kind === "server" ? serverName === r.name : n[0] === "plugin" && n[1] === r.name,
  );
}
function gateChannelServer(serverName, capabilities, pluginSource) {
  if (!capabilities?.experimental?.["claude/channel"])
    return {
      action: "skip",
      kind: "capability",
      reason: "server did not declare claude/channel capability",
    };
  if (fr() !== "firstParty")
    return {
      action: "skip",
      kind: "provider",
      reason: "channels are not available on third-party providers",
    };
  if (!GAe())
    return {
      action: "skip",
      kind: "disabled",
      reason: "channels feature is not currently available",
    };
  let r = yn("policySettings");
  if (isChannelsPolicyBlocked(r))
    return {
      action: "skip",
      kind: "policy",
      reason: "channels not enabled by org policy (set channelsEnabled: true in managed settings)",
    };
  let o = findChannelEntry(serverName, MA());
  if (!o)
    return {
      action: "skip",
      kind: "session",
      reason: `server ${serverName} not in --channels list for this session`,
    };
  if (o.kind === "plugin") {
    let s = pluginSource ? Qo(pluginSource).marketplace : void 0;
    if (s !== o.marketplace)
      return {
        action: "skip",
        kind: "marketplace",
        reason: `you asked for plugin:${o.name}@${o.marketplace} but the installed ${o.name} plugin is from ${s ?? "an unknown source"}`,
      };
    if (!o.dev) {
      let { entries: i, source: a } = getEffectiveChannelAllowlist(r?.allowedChannelPlugins);
      if (!i.some((l) => l.plugin === o.name && l.marketplace === o.marketplace))
        return {
          action: "skip",
          kind: "allowlist",
          reason:
            a === "org"
              ? `plugin ${o.name}@${o.marketplace} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)`
              : `plugin ${o.name}@${o.marketplace} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`,
        };
    }
  } else if (!o.dev)
    return {
      action: "skip",
      kind: "allowlist",
      reason: `server ${o.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`,
    };
  return {
    action: "register",
  };
}
var ChannelMessageNotificationSchema,
  CHANNEL_PERMISSION_METHOD = "notifications/claude/channel/permission",
  ChannelPermissionNotificationSchema,
  CHANNEL_PERMISSION_REQUEST_METHOD = "notifications/claude/channel/permission_request",
  Wfl;
