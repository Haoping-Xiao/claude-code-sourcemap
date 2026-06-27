// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j_t
// matched 2.1.88 source: src/services/mcp/channelNotification.ts
// class=modified  jaccard=0.6014  score=0.7846  fileCov=0.7203
// note: deminified; 9 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var j_t = E(() => {
  Xr();
  $g();
  Un();
  kdf = ve(() =>
    H.array(
      H.object({
        marketplace: H.string(),
        plugin: H.string(),
      }),
    ),
  );
});
var qfl = {};
_t(qfl, {
  wrapChannelMessage: () => wrapChannelMessage,
  isChannelsPolicyBlocked: () => isChannelsPolicyBlocked,
  getEffectiveChannelAllowlist: () => getEffectiveChannelAllowlist,
  gateChannelServer: () => gateChannelServer,
  findChannelEntry: () => findChannelEntry,
  ChannelPermissionNotificationSchema: () => ChannelPermissionNotificationSchema,
  ChannelMessageNotificationSchema: () => ChannelMessageNotificationSchema,
  CHANNEL_PERMISSION_REQUEST_METHOD: () => CHANNEL_PERMISSION_REQUEST_METHOD,
  CHANNEL_PERMISSION_METHOD: () => CHANNEL_PERMISSION_METHOD,
});
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
function getEffectiveChannelAllowlist(e) {
  if (e)
    return {
      entries: e,
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
    return (t === "team" || t === "enterprise") && e?.channelsEnabled !== !0;
  }
  return e !== null && e.channelsEnabled !== !0;
}
function findChannelEntry(e, t) {
  let n = e.split(":");
  return t.find((r) => (r.kind === "server" ? e === r.name : n[0] === "plugin" && n[1] === r.name));
}
function gateChannelServer(e, t, n) {
  if (!t?.experimental?.["claude/channel"])
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
  let o = findChannelEntry(e, MA());
  if (!o)
    return {
      action: "skip",
      kind: "session",
      reason: `server ${e} not in --channels list for this session`,
    };
  if (o.kind === "plugin") {
    let s = n ? Qo(n).marketplace : void 0;
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
