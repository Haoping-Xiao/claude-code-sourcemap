// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vq
// matched 2.1.88 source: src/utils/plugins/marketplaceHelpers.ts
// class=modified  jaccard=0.3396  score=0.8696  fileCov=0.3578
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vq] deps: Zf, G4, ty, Qbe, Vv, je, At, vn, d$o, _k, eer, vYt, A5e, YZn, Xh, i5, dOe
((nse = require("fs/promises")),
  (IYt = require("path")),
  (UIf = (Vko(), ro($ml)).clearPluginWorkflowCache));
function MSt(e, t) {
  let r = e
      .slice(0, 2)
      .map((i) => {
        let a = i.reason || i.error || "unknown error";
        return t ? `${i.name} (${a})` : i.name;
      })
      .join(t ? "; " : ", "),
    o = e.length - 2,
    s = o > 0 ? ` and ${o} more` : "";
  return `${r}${s}`;
}
function zze(e) {
  switch (e.source) {
    case "github":
      return e.repo;
    case "url":
      return e.url;
    case "git":
      return e.url;
    case "directory":
      return e.path;
    case "file":
      return e.path;
    case "settings":
      return `settings:${e.name}`;
    default:
      return "Unknown source";
  }
}
function MQ(e, t) {
  return `${e}@${t}`;
}
async function rse(e) {
  let t = [],
    n = [];
  for (let [r, o] of Object.entries(e)) {
    if (!_H(o.source)) continue;
    let s = null;
    try {
      s = await G$(r);
    } catch (i) {
      let a = i instanceof Error ? i.message : String(i);
      (n.push({
        name: r,
        error: a,
      }),
        T(`Failed to load plugin marketplace ${r}: ${a}`, {
          level: "error",
        }));
    }
    t.push({
      name: r,
      config: o,
      data: s,
    });
  }
  return {
    marketplaces: t,
    failures: n,
  };
}
function $St(e, t) {
  if (e.length === 0) return null;
  if (t > 0)
    return {
      type: "warning",
      message:
        e.length === 1
          ? `Warning: Failed to load marketplace '${e[0].name}': ${e[0].error}`
          : `Warning: Failed to load ${e.length} marketplaces: ${zIf(e)}`,
    };
  return {
    type: "error",
    message: `Failed to load all marketplaces. Errors: ${KIf(e)}`,
  };
}
function zIf(e) {
  return e.map((t) => t.name).join(", ");
}
function KIf(e) {
  return e.map((t) => `${t.name}: ${t.error}`).join("; ");
}
function mHe(e) {
  switch (e.source) {
    case "github":
      return `github:${e.repo}${e.ref ? `@${e.ref}` : ""}`;
    case "url":
      return e.url;
    case "git":
      return `git:${e.url}${e.ref ? `@${e.ref}` : ""}`;
    case "npm":
      return `npm:${e.package}`;
    case "file":
      return `file:${e.path}`;
    case "directory":
      return `dir:${e.path}`;
    case "hostPattern":
      return `hostPattern:${e.hostPattern}`;
    case "pathPattern":
      return `pathPattern:${e.pathPattern}`;
    case "skills-dir":
      return "skills-dir";
    case "settings":
      return `settings:${e.name} (${e.plugins.length} ${bn(e.plugins.length, "plugin")})`;
    default:
      return "unknown source";
  }
}
async function uRl({ configuredMarketplaceCount: e, failedMarketplaceCount: t }) {
  if (!(await sWe())) return "git-not-installed";
  let r = _5();
  if (r !== null) {
    if (r.length === 0) return "all-blocked-by-policy";
    if (e === 0) return "policy-restricts-sources";
  }
  if (e === 0) return "no-marketplaces-configured";
  if (t > 0 && t === e) return "all-marketplaces-failed";
  return "all-plugins-installed";
}
