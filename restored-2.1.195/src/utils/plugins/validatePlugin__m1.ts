// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vrr
// matched 2.1.88 source: src/utils/plugins/validatePlugin.ts
// class=modified (alt of src/utils/plugins/validatePlugin.ts)  jaccard=0.0545  score=0.1061  fileCov=0.1007
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vrr] deps: Xr, At, Iv, Jt, YPn, her, ZC, D$o
((Gq = require("fs/promises")),
  (_f = R(require("path"))),
  (bBf = new Set(["category", "source", "tags", "strict", "id", "relevance"])),
  (jjl = new Map([
    ["publisher", "a VS Code/Cursor extension manifest"],
    ["engines", "a VS Code/Cursor extension manifest"],
    ["categories", "a VS Code/Cursor extension manifest"],
    ["icon", "a VS Code/Cursor extension manifest"],
    ["contributes", "a VS Code/Cursor extension manifest"],
    ["activationEvents", "a VS Code/Cursor extension manifest"],
    ["preview", "a VS Code/Cursor extension manifest"],
    ["main", "an npm package.json"],
    ["type", "an npm package.json"],
    ["files", "an npm package.json"],
    ["bin", "an npm package.json"],
    ["scripts", "an npm package.json"],
    ["private", "an npm package.json"],
    ["bugs", "an npm package.json"],
    ["contributors", "an npm package.json"],
    ["dxt_version", "an MCPB/DXT manifest"],
    ["mcpb_version", "an MCPB/DXT manifest"],
    ["user_config", "an MCPB/DXT manifest"],
    ["compatibility", "an MCPB/DXT manifest"],
    ["server", "an MCP server manifest"],
    ["tools", "an MCP server manifest"],
    ["prompts", "an MCP server manifest"],
    ["resources", "an MCP server manifest"],
    ["logo", "manifests across many tools"],
    ["readme", "manifests across many tools"],
    ["changelog", "manifests across many tools"],
    ["support", "manifests across many tools"],
    ["privacy_policy", "manifests across many tools"],
    ["privacy_policies", "manifests across many tools"],
    ["terms_of_service", "manifests across many tools"],
    ["_comment", "manifests across many tools"],
    ["$id", "a JSON Schema document"],
    ["$comment", "a JSON Schema document"],
  ])),
  (SBf = new Map([["user_config", "userConfig"]])),
  (EBf = ["monitors", "themes"]),
  (Gjl = new Set(["themes", "monitors", "outputStyles", "evals"])));
async function wrr(e, t = {}) {
  let n = [],
    r = await validateMarketplaceManifest(e);
  if (!r.ok)
    return {
      ok: false,
      error: r.error,
      warnings: n,
    };
  let { pluginRoot: o, manifestPath: s, manifest: i } = r,
    a = await eAt(s),
    l = [a];
  if (a.success) l.push(...(await Trr(o)));
  for (let y of l)
    for (let b of y.warnings) n.push(`${rx.relative($t(), y.filePath)}: ${b.message}`);
  let c = l.find((y) => !y.success);
  if (c) {
    let y = c.errors.map((b) => `  ${b.path}: ${b.message}`).join(`
`);
    return {
      ok: false,
      error: `Plugin validation failed for ${c.filePath}:
${y}`,
      warnings: n,
    };
  }
  let u = i.name;
  if (typeof u !== "string" || u.length === 0)
    return {
      ok: false,
      error: `plugin.json at ${s} has no "name" field`,
      warnings: n,
    };
  let d = await xBf(o, u),
    p = typeof i.version === "string" && i.version.length > 0 ? i.version : void 0,
    f,
    m;
  if (p !== void 0) ((f = p), (m = "plugin.json"));
  else if (d?.entry.version) ((f = d.entry.version), (m = "marketplace entry"));
  else
    return {
      ok: false,
      error:
        `No version to tag. Set "version" in ${rx.relative($t(), s)}` +
        (d
          ? ` or in the marketplace entry at ${rx.relative($t(), d.path)} plugins[${d.entryIndex}].`
          : ".") +
        " Tags are only used for dependency version constraints, which require an explicit semver \u2014 the git-SHA fallback does not need a tag.",
      warnings: n,
    };
  if (d?.entry.version && p !== void 0 && d.entry.version !== p)
    return {
      ok: false,
      error: `Version mismatch: plugin.json says "${p}" but ${rx.relative($t(), d.path)} plugins[${d.entryIndex}].version says "${d.entry.version}". plugin.json wins at install time, so update the marketplace entry to "${p}" (or remove it) before tagging.`,
      warnings: n,
    };
  if (zjl.valid(f) === null)
    return {
      ok: false,
      error: `Version "${f}" is not valid semver. Dependency resolution (resolveVersionRange) ignores tags whose suffix doesn't parse as semver, so this tag would never be selected.`,
      warnings: n,
    };
  let g = DRl(u, f);
  if (!Uie(g))
    return {
      ok: false,
      error: `Computed tag name "${g}" is not a valid git ref. Check the plugin name for characters git rejects (spaces, ~, ^, :, ?, *, [, \\, or sequences like .., @{, //).`,
      warnings: n,
    };
  let h = Tu(o);
  if (h === null)
    return {
      ok: false,
      error: `${o} is not inside a git repository. Dependency tags are resolved via git ls-remote, so the plugin must live in a git repo.`,
      warnings: n,
    };
  if (!t.force) {
    let y = await DBf(h, d ? [o, d.path] : [o]);
    if (y.length > 0) {
      let b = y.slice(0, 5).join(`
  `),
        _ =
          y.length > 5
            ? `
  \u2026and ${y.length - 5} more`
            : "";
      return {
        ok: false,
        error: `Uncommitted changes affecting this release \u2014 commit them first so the tag points at the version you intend to release (or use --force):
  ${b}${_}`,
        warnings: n,
      };
    }
  }
  if (!t.force) {
    if (await PBf(h, g))
      return {
        ok: false,
        error: `Tag "${g}" already exists locally. Bump the version in ${m}, or re-run with --force to move the tag.`,
        warnings: n,
      };
  }
  return {
    ok: true,
    warnings: n,
    plan: {
      pluginName: u,
      version: f,
      versionFrom: m,
      tag: g,
      pluginRoot: o,
      gitRoot: h,
      marketplace: d
        ? {
            path: d.path,
            entryIndex: d.entryIndex,
            entryVersion: d.entry.version,
          }
        : void 0,
      validation: l,
    },
  };
}
async function Crr(e, t) {
  let n = ["-C", e.gitRoot, "tag"];
  if (t.force) n.push("-f");
  n.push("-a", e.tag, "-m", EXt(e, t.message), "HEAD");
  let r = await $n("git", n);
  if (r.code !== 0)
    return {
      ok: false,
      error: `git tag failed (exit ${r.code}): ${r.stderr.trim() || r.stdout.trim()}`,
    };
  if (!t.push)
    return {
      ok: true,
      pushed: false,
    };
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(t.remote))
    return {
      ok: false,
      error: `Tag created locally but not pushed: "${t.remote}" is not a valid remote name.`,
    };
  let o = ["-C", e.gitRoot, "push"];
  if (t.force) o.push("--force");
  o.push(t.remote, `refs/tags/${e.tag}`);
  let s = await $n("git", o);
  if (s.code !== 0)
    return {
      ok: false,
      error: `Tag created locally but push failed (exit ${s.code}): ${s.stderr.trim() || s.stdout.trim()}`,
    };
  return {
    ok: true,
    pushed: true,
  };
}
function EXt(e, t) {
  return t === void 0 ? `${e.pluginName} ${e.version}` : t.replaceAll("%s", e.version);
}
async function validateMarketplaceManifest(e) {
  let t = rx.resolve(e),
    n;
  try {
    n = await SXt.stat(t);
  } catch (o) {
    return {
      ok: false,
      error: wn(o) ? `Path not found: ${t}` : `Cannot stat ${t}: ${be(o)}`,
    };
  }
  let r = n.isFile()
    ? [[rx.dirname(rx.dirname(t)), t]]
    : [
        [t, rx.join(t, ".claude-plugin", "plugin.json")],
        [rx.dirname(t), rx.join(t, "plugin.json")],
      ];
  for (let [o, s] of r) {
    let i;
    try {
      i = await SXt.readFile(s, {
        encoding: "utf-8",
      });
    } catch (l) {
      if (wn(l)) continue;
      return {
        ok: false,
        error: `Cannot read ${s}: ${be(l)}`,
      };
    }
    let a;
    try {
      a = Ft(i);
    } catch (l) {
      return {
        ok: false,
        error: `Invalid JSON in ${s}: ${be(l)}`,
      };
    }
    return {
      ok: true,
      pluginRoot: o,
      manifestPath: s,
      manifest: typeof a === "object" && a !== null ? a : {},
    };
  }
  return {
    ok: false,
    error: `No plugin manifest found. Expected ${rx.join(t, ".claude-plugin", "plugin.json")}.`,
  };
}
async function xBf(e, t) {
  let n = Tu(e) ?? void 0,
    r = e;
  for (;;) {
    let o = rx.join(r, ".claude-plugin", "marketplace.json"),
      s = await kBf(o);
    if (s) {
      for (let [a, l] of s.plugins.entries())
        if (RBf(l, r, e, t))
          return {
            path: o,
            entryIndex: a,
            entry: l,
          };
    }
    if (r === n) return;
    let i = rx.dirname(r);
    if (i === r) return;
    r = i;
  }
}
async function kBf(e) {
  let t;
  try {
    t = await SXt.readFile(e, {
      encoding: "utf-8",
    });
  } catch (o) {
    if (wn(o)) return;
    return;
  }
  let n;
  try {
    n = Ft(t);
  } catch {
    return;
  }
  let r = bY().safeParse(n);
  return r.success ? r.data : void 0;
}
function RBf(e, t, n, r) {
  if (typeof e.source === "string") {
    let o = rx.resolve(t, e.source);
    return LBf(o, n);
  }
  return e.name === r;
}
function LBf(e, t) {
  let n = (r) => {
    let o = rx.resolve(r);
    return o.endsWith(rx.sep) ? o.slice(0, -rx.sep.length) : o;
  };
  return n(e) === n(t);
}
async function DBf(e, t) {
  let n = t.map((o) => rx.relative(e, o) || "."),
    r = await $n("git", ["-C", e, "status", "--porcelain", "--", ...n]);
  if (r.code !== 0) return [];
  return r.stdout
    .split(
      `
`,
    )
    .map((o) => o.slice(3).trim())
    .filter((o) => o.length > 0);
}
async function PBf(e, t) {
  let n = await $n("git", ["-C", e, "tag", "-l", "--", t]);
  return n.code === 0 && n.stdout.trim() === t;
}
var SXt, rx, zjl;
