// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module e1e
// matched 2.1.88 source: src/utils/plugins/parseMarketplaceInput.ts
// class=modified  jaccard=0.5697  score=0.9389  fileCov=0.5916
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module e1e] deps: p-map/index.js, utils/debug.ts, utils/errors.ts, utils/plugins/officialMarketplace.ts, utils/plugins/installedPluginsManager.ts, utils/plugins/pluginIdentifier.ts, @opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js, utils/plugins/loadPluginAgents.ts, commands/plugin/ManagePlugins.tsx
dNf = ["user", "project", "local"];
async function parseMarketplaceInput(input) {
  let trimmed = input.trim(),
    n = qt(),
    r = trimmed.match(/^([a-zA-Z0-9._-]+@[^:]+:.+?(?:\.git)?)(#(.+))?$/);
  if (r?.[1]) {
    let i = r[1],
      a = r[3];
    return a
      ? {
          source: "git",
          url: i,
          ref: a,
        }
      : {
          source: "git",
          url: i,
        };
  }
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    let i = trimmed.match(/^([^#]+)(#(.+))?$/),
      a = i?.[1] || trimmed,
      l = i?.[3];
    if (a.endsWith(".git") || a.includes("/_git/"))
      return l
        ? {
            source: "git",
            url: a,
            ref: l,
          }
        : {
            source: "git",
            url: a,
          };
    let c;
    try {
      c = new URL(a);
    } catch (u) {
      return {
        source: "url",
        url: a,
      };
    }
    if ($m(c.hostname)) {
      if (c.pathname.match(/^\/([^/]+\/[^/]+?)(\/|\.git|$)/)?.[1]) {
        let d = a.endsWith(".git") ? a : `${a}.git`;
        return l
          ? {
              source: "git",
              url: d,
              ref: l,
            }
          : {
              source: "git",
              url: d,
            };
      }
    }
    return {
      source: "url",
      url: a,
    };
  }
  let s = false;
  if (
    trimmed.startsWith("./") ||
    trimmed.startsWith("../") ||
    trimmed.startsWith("/") ||
    trimmed.startsWith("~") ||
    s
  ) {
    let i = _2l.resolve(trimmed.startsWith("~") ? trimmed.replace(/^~/, y2l.homedir()) : trimmed),
      a;
    try {
      a = await n.stat(i);
    } catch (l) {
      let c = on(l);
      return {
        error:
          c === "ENOENT" ? `Path does not exist: ${i}` : `Cannot access path: ${i} (${c ?? l})`,
      };
    }
    if (a.isFile()) {
      if (i.endsWith(".json"))
        return {
          source: "file",
          path: i,
        };
      else
        return {
          error: `File path must point to a .json file (marketplace.json), but got: ${i}`,
        };
    } else if (a.isDirectory())
      return {
        source: "directory",
        path: i,
      };
    else
      return {
        error: `Path is neither a file nor a directory: ${i}`,
      };
  }
  if (trimmed.includes("/") && !trimmed.startsWith("@")) {
    if (trimmed.includes(":")) return null;
    let i = trimmed.match(/^([^#@]+)(?:[#@](.+))?$/),
      a = i?.[1] || trimmed,
      l = i?.[2];
    return l
      ? {
          source: "github",
          repo: a,
          ref: l,
        }
      : {
          source: "github",
          repo: a,
        };
  }
  return null;
}
var y2l, _2l;
