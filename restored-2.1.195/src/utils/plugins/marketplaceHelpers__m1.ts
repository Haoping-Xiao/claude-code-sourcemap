// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wGt
// matched 2.1.88 source: src/utils/plugins/marketplaceHelpers.ts
// class=modified (alt of src/utils/plugins/marketplaceHelpers.ts)  jaccard=0.1752  score=0.4783  fileCov=0.2167
// note: deminified; 15 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var nPa = {};
_t(nPa, {
  sideloadFlagsBlockedMessage: () => sideloadFlagsBlockedMessage,
  localPluginDirsBlockedMessage: () => localPluginDirsBlockedMessage,
  isSourceInBlocklist: () => isSourceInBlocklist,
  isSourceAllowedByPolicy: () => isSourceAllowedByPolicy,
  isPluginBlockedByPolicy: () => isPluginBlockedByPolicy,
  isMarketplaceSourceDeclaredByPolicy: () => isMarketplaceSourceDeclaredByPolicy,
  isGitUrlHostAmbiguous: () => isGitUrlHostAmbiguous,
  getStrictKnownMarketplaces: () => getStrictKnownMarketplaces,
  getPluginTrustMessage: () => getPluginTrustMessage,
  getPluginSuggestionMarketplaces: () => getPluginSuggestionMarketplaces,
  getHostPatternsFromAllowlist: () => getHostPatternsFromAllowlist,
  getBlockedMarketplaces: () => getBlockedMarketplaces,
  extractHostFromSource: () => extractHostFromSource,
  areSideloadFlagsDisabledByPolicy: () => areSideloadFlagsDisabledByPolicy,
  areLocalPluginDirsAllowedByPolicy: () => areLocalPluginDirsAllowedByPolicy,
});
function isPluginBlockedByPolicy(e) {
  return yn("policySettings")?.enabledPlugins?.[e] === false;
}
function getStrictKnownMarketplaces() {
  let e = yn("policySettings");
  if (!e?.strictKnownMarketplaces) return null;
  return e.strictKnownMarketplaces;
}
function areLocalPluginDirsAllowedByPolicy() {
  if (getBlockedMarketplaces()?.some((t) => t.source === "skills-dir")) return false;
  let e = getStrictKnownMarketplaces();
  return e === null || e.some((t) => t.source === "skills-dir");
}
function localPluginDirsBlockedMessage(e) {
  return `Plugins from ${e}/ are blocked by your organization's managed settings (strictKnownMarketplaces or blockedMarketplaces). Ask your administrator to add {"source":"skills-dir"} to strictKnownMarketplaces, or remove it from blockedMarketplaces.`;
}
function areSideloadFlagsDisabledByPolicy() {
  return yn("policySettings")?.disableSideloadFlags === true;
}
function sideloadFlagsBlockedMessage(e) {
  return `${e.join(", ")} ${e.length === 1 ? "is" : "are"} disabled by your organization's managed settings (disableSideloadFlags). Plugins, custom agents, and MCP servers can only be loaded from sources your administrator has approved. Ask your administrator to remove disableSideloadFlags from managed settings, or use an approved marketplace / settings file instead.`;
}
function getBlockedMarketplaces() {
  let e = yn("policySettings");
  if (!e?.blockedMarketplaces) return null;
  return e.blockedMarketplaces;
}
function getPluginTrustMessage() {
  return yn("policySettings")?.pluginTrustMessage;
}
function getPluginSuggestionMarketplaces() {
  return yn("policySettings")?.pluginSuggestionMarketplaces ?? [];
}
function isMarketplaceSourceDeclaredByPolicy(e, t) {
  let n = yn("policySettings"),
    r = n?.extraKnownMarketplaces?.[e]?.source;
  if (r && QDa(t, r)) return true;
  return n?.strictKnownMarketplaces?.some((o) => tPa(t, o)) ?? false;
}
function QDa(e, t) {
  if (e.source !== t.source) return false;
  switch (e.source) {
    case "url":
      return M2n(e.url) === M2n(t.url);
    case "github":
      return (
        e.repo === t.repo &&
        (e.ref || void 0) === (t.ref || void 0) &&
        (e.path || void 0) === (t.path || void 0)
      );
    case "git":
      return (
        JDa(e.url) === JDa(t.url) &&
        (e.ref || void 0) === (t.ref || void 0) &&
        (e.path || void 0) === (t.path || void 0)
      );
    case "npm":
      return e.package === t.package;
    case "file":
      return e.path === t.path;
    case "directory":
      return e.path === t.path;
    case "settings":
      return e.name === t.name && L_(e.plugins, t.plugins);
    default:
      return false;
  }
}
function isGitUrlHostAmbiguous(e) {
  let t = e.indexOf("://");
  if (t === -1) return false;
  let n = e.slice(t + 3),
    r = n.search(/[/?#]/);
  return (r === -1 ? n : n.slice(0, r)).includes("\\");
}
function extractHostFromSource(e) {
  let t = Bkp(e);
  return t === null ? null : CGt(t);
}
function Bkp(e) {
  switch (e.source) {
    case "github":
      return JH;
    case "git": {
      if (e.url.includes("://")) {
        if (isGitUrlHostAmbiguous(e.url)) return null;
        try {
          return new URL(e.url).hostname || null;
        } catch {
          return null;
        }
      }
      return e.url.match(/^[^@]+@([^:]+):/)?.[1] ?? null;
    }
    case "url":
      try {
        return new URL(e.url).hostname;
      } catch {
        return null;
      }
    default:
      return null;
  }
}
function ZDa(e, t) {
  let n = extractHostFromSource(e);
  if (!n) return false;
  try {
    return new RegExp(t.hostPattern).test(n);
  } catch {
    return (
      T(`Invalid hostPattern regex in policy settings: ${t.hostPattern}`, {
        level: "error",
      }),
      false
    );
  }
}
function ePa(e, t) {
  if (e.source !== "file" && e.source !== "directory") return false;
  try {
    return new RegExp(t.pathPattern).test(e.path);
  } catch {
    return (
      T(`Invalid pathPattern regex in policy settings strictKnownMarketplaces: ${t.pathPattern}`, {
        level: "error",
      }),
      false
    );
  }
}
function getHostPatternsFromAllowlist() {
  let e = getStrictKnownMarketplaces();
  if (!e) return [];
  return e.filter((t) => t.source === "hostPattern").map((t) => t.hostPattern);
}
function YDa(e) {
  let t, n;
  if (e.includes("://")) {
    if (isGitUrlHostAmbiguous(e)) return null;
    try {
      let o = new URL(e);
      ((t = o.hostname), (n = o.pathname.replace(/^\/+/, "")));
    } catch {
      return null;
    }
  } else {
    let o = e.match(/^[^@]+@([^:]+):(.+)$/);
    if (!o) return null;
    ((t = o[1]), (n = o[2]));
  }
  if (!t || !n || !$m(t)) return null;
  return n.match(/^([^/]+\/[^/]+?)(?:\.git)?\/?$/)?.[1] ?? null;
}
function XDa(e) {
  if (e.includes("://"))
    try {
      let n = new URL(e);
      return ((n.hostname = CGt(n.hostname)), (n.username = ""), (n.password = ""), n.toString());
    } catch {
      return e;
    }
  let t = e.match(/^[^@]+@([^:]+)(:.*)$/s);
  return t ? `${CGt(t[1] ?? "")}${t[2]}` : e;
}
function JDa(e) {
  if (ERt(e)) return e;
  if (e.includes("://"))
    try {
      let r = new URL(e);
      if (((r.hostname = CGt(r.hostname)), Ukp.has(r.protocol) || $m(r.hostname)))
        ((r.username = ""), (r.password = ""));
      return r.toString();
    } catch {
      return e;
    }
  let t = e.match(/^([^@]+)@([^:]+)(:.*)$/s);
  if (!t) return e;
  let n = (t[2] ?? "").toLowerCase().replace(/\.+$/, "");
  return $m(n) ? `${JH}${t[3]}` : `${t[1]}@${n}${t[3]}`;
}
function M2n(e) {
  try {
    let t = new URL(e);
    return ((t.hostname = CGt(t.hostname)), t.toString());
  } catch {
    return e;
  }
}
function CGt(e) {
  let t = SRt(e);
  return $m(t) ? JH : t;
}
function xDe(e, t) {
  if (!e) return true;
  return (e || void 0) === (t || void 0);
}
function Fkp(e, t) {
  if (e.source === t.source)
    switch (e.source) {
      case "github": {
        let n = t;
        if (e.repo !== n.repo) return false;
        return xDe(n.ref, e.ref) && xDe(n.path, e.path);
      }
      case "git": {
        let n = t;
        if (XDa(e.url) !== XDa(n.url)) return false;
        return xDe(n.ref, e.ref) && xDe(n.path, e.path);
      }
      case "url":
        return M2n(e.url) === M2n(t.url);
      case "npm":
        return e.package === t.package;
      case "file":
        return e.path === t.path;
      case "directory":
        return e.path === t.path;
      case "settings":
        return e.name === t.name;
      default:
        return false;
    }
  if (e.source === "git" && t.source === "github") {
    if (YDa(e.url) === t.repo) return xDe(t.ref, e.ref) && xDe(t.path, e.path);
  }
  if (e.source === "github" && t.source === "git") {
    if (YDa(t.url) === e.repo) return xDe(t.ref, e.ref) && xDe(t.path, e.path);
  }
  return false;
}
function isSourceInBlocklist(e) {
  let t = getBlockedMarketplaces();
  if (t === null) return false;
  return t.some((n) => {
    if (n.source === "hostPattern") return ZDa(e, n);
    if (n.source === "pathPattern") return ePa(e, n);
    return Fkp(e, n);
  });
}
function isSourceAllowedByPolicy(e) {
  if (e.source === "git" && isGitUrlHostAmbiguous(e.url)) return false;
  if (isSourceInBlocklist(e)) return false;
  let t = getStrictKnownMarketplaces();
  if (t === null) return true;
  return t.some((n) => tPa(e, n));
}
function tPa(e, t) {
  if (e.source === "git" && ERt(e.url)) return false;
  if (t.source === "hostPattern") return ZDa(e, t);
  if (t.source === "pathPattern") return ePa(e, t);
  if (t.source === "skills-dir") return false;
  return QDa(e, t);
}
var Ukp;
