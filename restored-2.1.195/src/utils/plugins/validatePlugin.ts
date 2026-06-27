// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bjl
// matched 2.1.88 source: src/utils/plugins/validatePlugin.ts
// class=modified  jaccard=0.2895  score=0.3799  fileCov=0.549
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Bjl] deps: @xmldom/xmldom/lib/entities.js, context/modalContext.tsx, components/StructuredDiff/Fallback.tsx, components/CustomSelect/select.tsx, components/PromptInput/PromptInputFooterSuggestions.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, react/cjs/react.production.js, components/mcp/MCPAgentServerMenu.tsx, components/mcp/MCPToolDetailView.tsx, components/mcp/MCPToolListView.tsx, components/mcp/MCPSettings.tsx, components/Settings/Config.tsx, react/cjs/react.production.js, hooks/useSearchInput.ts, components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, dn, utils/debug.ts, utils/plugins/pluginFlagging.ts, services/mcp/config.ts, commands/mcp/mcp.tsx, services/mcp/xaa.ts, utils/plugins/pluginAutoupdate.ts, U1, context/notifications.tsx, p-map/index.js, @mixmark-io/domino/lib/htmlelts.js, utils/config.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/sequential.ts, utils/plugins/marketplaceHelpers.ts, utils/generatedFiles.ts, utils/plugins/installedPluginsManager.ts, utils/plugins/pluginOptionsStorage.ts, tools/SkillTool/prompt.ts, commands/plugin/ManagePlugins.tsx, utils/plugins/pluginIdentifier.ts, utils/telemetry/pluginTelemetry.ts, utils/plugins/loadPluginAgents.ts, utils/plugins/mcpPluginIntegration.ts, commands/plugin/ManagePlugins.tsx, commands/plugin/PluginErrors.tsx, utils/settings/changeDetector.ts, utils/settings/settings.ts, utils/fsOperations.ts, services/teamMemorySync/secretScanner.ts, commands/plugin/PluginErrors.tsx, utils/plugins/addDirPluginSettings.ts, commands/plugin/ManagePlugins.tsx, commands/plugin/PluginOptionsFlow.tsx, ink/Ansi.tsx, commands/plugin/UnifiedInstalledCell.tsx, utils/plugins/validatePlugin.ts, commands/plugin/ManagePlugins.tsx, commands/plugin/BrowseMarketplace.tsx
((fUo = R(lt(), 1)),
  (Ojl = R(require("fs/promises"))),
  (pUo = R(require("path"))),
  (fu = R(rt(), 1)),
  (vr = R(se(), 1)),
  (fBf = ["on", "name-only", "user-invocable-only", "off"]));
function Ujl(e) {
  if (!e)
    return {
      type: "menu",
    };
  let t = e.trim().split(/\s+/);
  switch (t[0]?.toLowerCase()) {
    case "help":
    case "--help":
    case "-h":
      return {
        type: "help",
      };
    case "list":
    case "ls": {
      let r = t.slice(1).find((o) => o === "--enabled" || o === "--disabled");
      if (r)
        return {
          type: "list",
          filter: r === "--enabled" ? "enabled" : "disabled",
        };
      return {
        type: "list",
      };
    }
    case "install":
    case "i": {
      let r = t[1];
      if (!r)
        return {
          type: "install",
        };
      let o = r.lastIndexOf("@");
      if (o > 0) {
        let i = r.slice(0, o),
          a = r.slice(o + 1);
        return {
          type: "install",
          plugin: i,
          marketplace: a,
        };
      }
      if (
        !r.startsWith("@") &&
        (r.startsWith("http://") ||
          r.startsWith("https://") ||
          r.startsWith("file://") ||
          r.includes("/") ||
          r.includes("\\"))
      )
        return {
          type: "install",
          marketplace: r,
        };
      return {
        type: "install",
        plugin: r,
      };
    }
    case "manage":
      return {
        type: "manage",
      };
    case "uninstall":
      return {
        type: "uninstall",
        plugin: t[1],
      };
    case "enable":
      return {
        type: "enable",
        plugin: t[1],
      };
    case "disable":
      return {
        type: "disable",
        plugin: t[1],
      };
    case "configure":
    case "config":
      return {
        type: "configure",
        plugin: t[1],
      };
    case "validate":
      return {
        type: "validate",
        path: t.slice(1).join(" ").trim() || void 0,
      };
    case "eval":
      return {
        type: "menu",
      };
    case "tag": {
      let r = new Set(["--push", "--dry-run", "--force", "-f"]),
        o = t.slice(1),
        s = o.filter((l) => l.startsWith("-")),
        i = o.filter((l) => !l.startsWith("-")),
        a = s.find((l) => !r.has(l)) ?? i[1];
      return {
        type: "tag",
        path: i[0],
        push: s.includes("--push"),
        dryRun: s.includes("--dry-run"),
        force: s.includes("--force") || s.includes("-f"),
        ...(a !== void 0 && {
          unknownFlag: a,
        }),
      };
    }
    case "marketplace":
    case "market": {
      let r = t[1]?.toLowerCase(),
        o = t.slice(2).join(" ");
      switch (r) {
        case "add":
          return {
            type: "marketplace",
            action: "add",
            target: o,
          };
        case "remove":
        case "rm":
          return {
            type: "marketplace",
            action: "remove",
            target: o,
          };
        case "update":
          return {
            type: "marketplace",
            action: "update",
            target: o,
          };
        case "list":
          return {
            type: "marketplace",
            action: "list",
          };
        default:
          return {
            type: "marketplace",
          };
      }
    }
    default:
      return {
        type: "menu",
      };
  }
}
function Wjl(e, t) {
  let n = e.every((o) => o.success),
    r = e.some((o) => o.warnings.length > 0);
  return {
    noErrors: n,
    hasWarnings: r,
    allSuccess: t.strict ? n && !r : n,
  };
}
function Fjl(e) {
  try {
    return (new RegExp(e), true);
  } catch {
    return false;
  }
}
function yUo(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function detectManifestType(filePath) {
  let t = _f.basename(filePath),
    n = _f.basename(_f.dirname(filePath));
  if (t === "plugin.json") return "plugin";
  if (t === "marketplace.json") return "marketplace";
  if (n === ".claude-plugin") return "plugin";
  return "unknown";
}
function qjl(e) {
  return e.issues.map((t) => ({
    path: t.path.join(".") || "root",
    message: t.message,
    code: t.code,
  }));
}
function HBf(e, t) {
  if (jjl.has(e)) return;
  let n = e.length <= 3 ? 1 : 2,
    r = e.toLowerCase(),
    o,
    s = n + 1;
  for (let i of t) {
    if (Math.abs(i.length - e.length) > n) continue;
    if (i.toLowerCase() === r) return i;
    let a = i8t(e, i);
    if (a < s) ((s = a), (o = i));
  }
  return o;
}
function TBf(e, t, n) {
  if (n?.has(e))
    return (
      `Field '${e}' belongs in the marketplace entry (marketplace.json), ` +
      "not plugin.json. It's harmless here but unused \u2014 Claude Code " +
      "ignores it at load time."
    );
  let r = HBf(e, t);
  if (r)
    return `Unknown field '${e}' \u2014 did you mean '${r}'? Claude Code ignores unrecognized fields at load time, so this field has no effect.`;
  let o = SBf.get(e);
  if (o && t.has(o))
    return (
      `Field '${e}' is the cross-tool spelling of Claude Code's '${o}'. Rename it to '${o}' for Claude Code to read it (the option ` +
      "shapes differ slightly \u2014 re-run validate after renaming to check). " +
      "As-is, Claude Code ignores it at load time."
    );
  let s = jjl.get(e);
  if (s)
    return `Unknown field '${e}' (commonly seen in ${s}). Claude Code ignores unrecognized fields at load time, so it's safe to keep.`;
  return `Unknown field '${e}'. Claude Code ignores it at load time.`;
}
function l1e(e, t, n, r, o) {
  for (let s of Object.keys(e)) {
    if (t.has(s)) continue;
    r.push({
      path: n ? `${n}.${s}` : s,
      message: TBf(s, t, o),
    });
  }
}
function checkPathTraversal(e, field, errors, hint) {
  if (e.includes(".."))
    errors.push({
      path: field,
      message: hint
        ? `Path contains "..": ${e}. ${hint}`
        : `Path contains ".." which could be a path traversal attempt: ${e}`,
    });
}
function marketplaceSourceHint(e) {
  let t = e.replace(/^(\.\.\/)+/, "");
  return `Plugin source paths are resolved relative to the marketplace root (the directory containing .claude-plugin/), not relative to marketplace.json. Use "${t !== e ? `./${t}` : "./plugins/my-plugin"}" instead of "${e}".`;
}
async function validatePluginManifest(filePath) {
  let t = [],
    n = [],
    r = _f.resolve(filePath),
    o;
  try {
    o = await Gq.readFile(r, {
      encoding: "utf-8",
    });
  } catch (l) {
    let c = on(l),
      u;
    if (c === "ENOENT") u = `File not found: ${r}`;
    else if (c === "EISDIR") u = `Path is not a file: ${r}`;
    else u = `Failed to read file: ${be(l)}`;
    return {
      success: false,
      errors: [
        {
          path: "file",
          message: u,
          code: c,
        },
      ],
      warnings: [],
      filePath: r,
      fileType: "plugin",
    };
  }
  let s;
  try {
    s = Ft(o);
  } catch (l) {
    return {
      success: false,
      errors: [
        {
          path: "json",
          message: `Invalid JSON syntax: ${be(l)}`,
        },
      ],
      warnings: [],
      filePath: r,
      fileType: "plugin",
    };
  }
  let i = nWe(s, "plugin-json", {
    pluginName: _f.basename(_f.dirname(_f.dirname(r))),
    manifestPath: r,
  });
  if (!i.ok)
    t.push(
      ...i.errors.map((l) => ({
        ...l,
        path: l.path || "root",
      })),
    );
  if (s && typeof s === "object") {
    let l = i.rawCandidate ?? s,
      c = _f.dirname(r),
      u = _f.basename(c) === ".claude-plugin" ? _f.dirname(c) : c,
      d = async (p, f) => {
        if ((checkPathTraversal(p, f, t), p.includes("..") || _f.isAbsolute(p))) return;
        try {
          return await Gq.stat(_f.resolve(u, p));
        } catch (m) {
          let g = on(m);
          t.push({
            path: f,
            message: `Path not found: ${p}${g && g !== "ENOENT" ? ` (${g})` : ""}. The runtime loader will report this as a load failure.`,
          });
          return;
        }
      };
    if (l.commands) {
      if (typeof l.commands === "string") await d(l.commands, "commands");
      else if (Array.isArray(l.commands)) {
        for (let [p, f] of l.commands.entries())
          if (typeof f === "string") await d(f, `commands[${p}]`);
      } else if (typeof l.commands === "object") {
        for (let [p, f] of Object.entries(l.commands))
          if (f && typeof f === "object" && "source" in f && typeof f.source === "string")
            await d(f.source, `commands.${p}.source`);
      }
    }
    if (l.hooks) {
      let p = Array.isArray(l.hooks) ? l.hooks : [l.hooks];
      for (let [f, m] of p.entries()) if (typeof m === "string") await d(m, `hooks[${f}]`);
    }
    if (l.agents) {
      let p = Array.isArray(l.agents) ? l.agents : [l.agents];
      for (let [f, m] of p.entries()) if (typeof m === "string") await d(m, `agents[${f}]`);
    }
    if (l.skills) {
      let p = Array.isArray(l.skills) ? l.skills : [l.skills];
      for (let [f, m] of p.entries()) {
        if (typeof m !== "string") continue;
        let g = await d(m, `skills[${f}]`);
        if (g && !g.isDirectory()) {
          let h = _f.dirname(m),
            y =
              _f.basename(m).toLowerCase() === "skill.md" && h !== "."
                ? ` \u2014 point to the parent directory '${h}' instead`
                : "";
          t.push({
            path: `skills[${f}]`,
            message: `Path is a file; skills entries must be directories containing SKILL.md${y}: ${m}`,
          });
        }
      }
    }
    if (l.workflows) {
      let p = Array.isArray(l.workflows) ? l.workflows : [l.workflows];
      for (let [f, m] of p.entries()) if (typeof m === "string") await d(m, `workflows[${f}]`);
    }
  }
  if (typeof s === "object" && s !== null && !Array.isArray(s)) {
    let l = s,
      c = i.rawCandidate ?? l;
    l1e(c, new Set(Object.keys(o2e().shape)), "", n, bBf);
    for (let u of EBf)
      if (u in l)
        n.push({
          path: u,
          message: `'${u}' is an experimental component; declare it under 'experimental.${u}' instead of at the top level. Top-level still loads for now but will be removed in a future release.`,
        });
    if ("experimental" in l)
      if (
        typeof l.experimental === "object" &&
        l.experimental !== null &&
        !Array.isArray(l.experimental)
      ) {
        let u = l.experimental;
        l1e(u, Gjl, "experimental", n);
      } else
        n.push({
          path: "experimental",
          message: `'experimental' must be an object containing component declarations; got ${yUo(l.experimental)}. It will be ignored at load time.`,
        });
  }
  let a = i.manifest;
  if (a) {
    let l = a;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(l.name))
      n.push({
        path: "name",
        message: `Plugin name "${l.name}" is not kebab-case. Claude Code accepts it, but the Claude.ai marketplace sync requires kebab-case (lowercase letters, digits, and hyphens only, e.g., "my-plugin").`,
      });
    if (!l.version)
      n.push({
        path: "version",
        message: 'No version specified. Consider adding a version following semver (e.g., "1.0.0")',
      });
    if (!l.description)
      n.push({
        path: "description",
        message:
          "No description provided. Adding a description helps users understand what your plugin does",
      });
    if (!l.author)
      n.push({
        path: "author",
        message:
          "No author information provided. Consider adding author details for plugin attribution",
      });
  }
  return {
    success: t.length === 0,
    errors: t,
    warnings: n,
    filePath: r,
    fileType: "plugin",
  };
}
async function validateMarketplaceManifest(filePath) {
  let t = [],
    n = [],
    r = _f.resolve(filePath),
    o;
  try {
    o = await Gq.readFile(r, {
      encoding: "utf-8",
    });
  } catch (u) {
    let d = on(u),
      p;
    if (d === "ENOENT") p = `File not found: ${r}`;
    else if (d === "EISDIR") p = `Path is not a file: ${r}`;
    else p = `Failed to read file: ${be(u)}`;
    return {
      success: false,
      errors: [
        {
          path: "file",
          message: p,
          code: d,
        },
      ],
      warnings: [],
      filePath: r,
      fileType: "marketplace",
    };
  }
  let s;
  try {
    s = Ft(o);
  } catch (u) {
    return {
      success: false,
      errors: [
        {
          path: "json",
          message: `Invalid JSON syntax: ${be(u)}`,
        },
      ],
      warnings: [],
      filePath: r,
      fileType: "marketplace",
    };
  }
  if (s && typeof s === "object") {
    let u = s;
    if (Array.isArray(u.plugins))
      u.plugins.forEach((d, p) => {
        if (d && typeof d === "object" && "source" in d) {
          let f = d.source;
          if (typeof f === "string")
            checkPathTraversal(f, `plugins[${p}].source`, t, marketplaceSourceHint(f));
          if (f && typeof f === "object" && "path" in f && typeof f.path === "string")
            checkPathTraversal(f.path, `plugins[${p}].source.path`, t);
        }
      });
  }
  let i = Qfn()
      .extend({
        topic: H.string().min(1).max(64).optional(),
        signals: Jfn()
          .extend({
            cli: H.array(H.string().min(1).max(64)).max(10).optional(),
            hosts: H.array(
              H.string()
                .min(1)
                .max(128)
                .refine(
                  (u) => /^[a-z0-9.-]+$/.test(u),
                  "must be a lowercase bare hostname (no scheme, port, or path)",
                ),
            )
              .max(20)
              .optional(),
            filesRead: H.array(
              H.string()
                .min(1)
                .max(256)
                .refine(
                  (u) => !u.includes("\\"),
                  'must use forward slashes (e.g. "**/*.tf"), not backslashes',
                ),
            )
              .max(10)
              .optional(),
            manifestDeps: H.array(
              H.object({
                file: H.string().min(1).max(256).refine(Fjl, "must be a valid regular expression"),
                pattern: H.string()
                  .min(1)
                  .max(256)
                  .refine(Fjl, "must be a valid regular expression"),
              }),
            )
              .min(1)
              .max(10)
              .optional(),
            cwd: H.array(
              H.string()
                .min(1)
                .max(256)
                .refine(
                  (u) => !u.includes("\\"),
                  'must use forward slashes (e.g. "Engine/Source/**"), not backslashes',
                ),
            )
              .max(10)
              .optional(),
          })
          .refine(
            (u) =>
              (u.cli?.length ?? 0) > 0 ||
              (u.hosts?.length ?? 0) > 0 ||
              (u.filesRead?.length ?? 0) > 0 ||
              (u.manifestDeps?.length ?? 0) > 0 ||
              (u.cwd?.length ?? 0) > 0,
            "must declare at least one signal (cli, hosts, filesRead, manifestDeps, or cwd)",
          ),
      })
      .optional(),
    a = Zfn()
      .extend({
        relevance: H.preprocess(
          (u) => (typeof u === "object" && u !== null && !Array.isArray(u) ? u : void 0),
          i,
        ),
      })
      .refine((u) => typeof u.source === "string" || u.source.source !== "unsupported", {
        message: "source.source: 'unsupported' is a parse-time placeholder and cannot be authored",
      }),
    c = bY()
      .extend({
        plugins: H.array(a),
        renames: H.record(H.string(), H.string().nullable()).optional(),
      })
      .safeParse(s);
  if (!c.success) t.push(...qjl(c.error));
  if (c.success && c.data.renames) {
    let u = new Set(c.data.plugins.map((d) => d.name));
    for (let d of Object.keys(c.data.renames)) {
      let p = FSt(d, c.data.renames, u);
      if (p?.kind === "unresolved")
        t.push({
          path: `renames.${d}`,
          message: `chain does not resolve (${p.reason}) \u2014 target must be a name in plugins[], a key in renames, or null`,
        });
      else if (p?.kind === "renamed" && !s2e().safeParse(`${p.to}@placeholder`).success)
        t.push({
          path: `renames.${d}`,
          message: `target "${p.to}" is not a valid plugin name (PluginIdSchema)`,
        });
    }
  }
  if (typeof s === "object" && s !== null && !Array.isArray(s)) {
    let u = s;
    l1e(u, new Set(Object.keys(bY().shape)), "", n);
    let d = u.metadata;
    if (typeof d === "object" && d !== null && !Array.isArray(d))
      l1e(d, new Set(Object.keys(bY().shape.metadata.unwrap().shape)), "metadata", n);
    if (Array.isArray(u.plugins)) {
      let p = new Set(Object.keys(Zfn().shape)),
        f = new Set(Object.keys(Qfn().shape)),
        m = new Set(Object.keys(Jfn().shape));
      u.plugins.forEach((g, h) => {
        if (typeof g !== "object" || g === null || Array.isArray(g)) return;
        let y = g;
        l1e(y, p, `plugins[${h}]`, n);
        let b = y.experimental;
        if (typeof b === "object" && b !== null && !Array.isArray(b))
          l1e(b, Gjl, `plugins[${h}].experimental`, n);
        else if (b !== void 0)
          n.push({
            path: `plugins[${h}].experimental`,
            message: `'experimental' must be an object containing component declarations; got ${yUo(b)}. It will be ignored at load time.`,
          });
        let _ = y.relevance;
        if (typeof _ === "object" && _ !== null && !Array.isArray(_)) {
          l1e(_, f, `plugins[${h}].relevance`, n);
          let S = _.signals;
          if (typeof S === "object" && S !== null && !Array.isArray(S))
            l1e(S, m, `plugins[${h}].relevance.signals`, n);
        } else if (_ !== void 0)
          n.push({
            path: `plugins[${h}].relevance`,
            message: `'relevance' must be an object containing topic and signals; got ${yUo(_)}. It will be ignored at load time.`,
          });
      });
    }
  }
  if (c.success) {
    let u = c.data;
    if (!u.plugins || u.plugins.length === 0)
      n.push({
        path: "plugins",
        message: "Marketplace has no plugins defined",
      });
    if (u.plugins) {
      u.plugins.forEach((f, m) => {
        if (u.plugins.filter((h) => h.name === f.name).length > 1)
          t.push({
            path: `plugins[${m}].name`,
            message: `Duplicate plugin name "${f.name}" found in marketplace`,
          });
      });
      let d = _f.dirname(r),
        p = _f.basename(d) === ".claude-plugin" ? _f.dirname(d) : d;
      for (let [f, m] of u.plugins.entries()) {
        if (!m.version || typeof m.source !== "string" || !m.source.startsWith("./")) continue;
        let g = _f.join(p, m.source),
          h = _f.join(g, ".claude-plugin", "plugin.json"),
          y;
        try {
          let b = await Gq.readFile(h, {
            encoding: "utf-8",
          });
          try {
            let _ = Ft(b);
            if (typeof _.version === "string") y = _.version;
          } catch (_) {
            n.push({
              path: `plugins[${f}].source`,
              message: `Could not parse ${_f.relative(p, h)} for version cross-check: ${be(_)}`,
            });
          }
        } catch (b) {
          if (!wn(b) && on(b) !== "ENOTDIR")
            n.push({
              path: `plugins[${f}].source`,
              message: `Could not read ${_f.relative(p, h)} for version cross-check: ${be(b)}`,
            });
        }
        if (y && y !== m.version) {
          let b = _f.relative(p, h);
          n.push({
            path: `plugins[${f}].version`,
            message:
              `Entry declares version "${m.version}" but ${b} says "${y}". ` +
              "At install time, plugin.json wins (calculatePluginVersion precedence) \u2014 the entry version is silently ignored. " +
              `Update this entry to "${y}" to match.`,
          });
        }
      }
    }
    if (!u.description && !u.metadata?.description)
      n.push({
        path: "description",
        message:
          "No marketplace description provided. Adding a description helps users understand what this marketplace offers",
      });
  }
  return {
    success: t.length === 0,
    errors: t,
    warnings: n,
    filePath: r,
    fileType: "marketplace",
  };
}
function validateComponentFile(filePath, content, fileType) {
  let r = [],
    o = [],
    s = content.match(I_e);
  if (!s)
    return (
      o.push({
        path: "frontmatter",
        message:
          "No frontmatter block found. Add YAML frontmatter between --- delimiters at the top of the file to set description and other metadata.",
      }),
      {
        success: true,
        errors: r,
        warnings: o,
        filePath: filePath,
        fileType: fileType,
      }
    );
  let i = s[1] || "",
    a;
  try {
    a = Kte(i);
  } catch (d) {
    return (
      r.push({
        path: "frontmatter",
        message: `YAML frontmatter failed to parse: ${be(d)}. At runtime this ${fileType} loads with empty metadata (all frontmatter fields silently dropped).`,
      }),
      {
        success: false,
        errors: r,
        warnings: o,
        filePath: filePath,
        fileType: fileType,
      }
    );
  }
  if (a === null || typeof a !== "object" || Array.isArray(a))
    return (
      r.push({
        path: "frontmatter",
        message: `Frontmatter must be a YAML mapping (key: value pairs), got ${Array.isArray(a) ? "an array" : a === null ? "null" : typeof a}.`,
      }),
      {
        success: false,
        errors: r,
        warnings: o,
        filePath: filePath,
        fileType: fileType,
      }
    );
  let l = a;
  if (l.description !== void 0) {
    let d = l.description;
    if (typeof d !== "string" && typeof d !== "number" && typeof d !== "boolean" && d !== null)
      r.push({
        path: "description",
        message: `description must be a string, got ${Array.isArray(d) ? "array" : typeof d}. At runtime this value is dropped.`,
      });
  } else
    o.push({
      path: "description",
      message: `No description in frontmatter. A description helps users and Claude understand when to use this ${fileType}.`,
    });
  if (l.name !== void 0 && l.name !== null && typeof l.name !== "string")
    r.push({
      path: "name",
      message: `name must be a string, got ${typeof l.name}.`,
    });
  let c = l["allowed-tools"];
  if (c !== void 0 && c !== null) {
    if (typeof c !== "string" && !Array.isArray(c))
      r.push({
        path: "allowed-tools",
        message: `allowed-tools must be a string or array of strings, got ${typeof c}.`,
      });
    else if (Array.isArray(c) && c.some((d) => typeof d !== "string"))
      r.push({
        path: "allowed-tools",
        message: "allowed-tools array must contain only strings.",
      });
  }
  let u = l.shell;
  if (u !== void 0 && u !== null)
    if (typeof u !== "string")
      r.push({
        path: "shell",
        message: `shell must be a string, got ${typeof u}.`,
      });
    else {
      let d = u.trim().toLowerCase();
      if (d !== "bash" && d !== "powershell")
        r.push({
          path: "shell",
          message: `shell must be 'bash' or 'powershell', got '${u}'.`,
        });
    }
  return {
    success: r.length === 0,
    errors: r,
    warnings: o,
    filePath: filePath,
    fileType: fileType,
  };
}
async function CBf(e) {
  let t;
  try {
    t = await Gq.readFile(e, {
      encoding: "utf-8",
    });
  } catch (o) {
    if (on(o) === "ENOENT")
      return {
        success: true,
        errors: [],
        warnings: [],
        filePath: e,
        fileType: "hooks",
      };
    return {
      success: false,
      errors: [
        {
          path: "file",
          message: `Failed to read file: ${be(o)}`,
        },
      ],
      warnings: [],
      filePath: e,
      fileType: "hooks",
    };
  }
  let n;
  try {
    n = Ft(t);
  } catch (o) {
    return {
      success: false,
      errors: [
        {
          path: "json",
          message: `Invalid JSON syntax: ${be(o)}. At runtime this breaks the entire plugin load.`,
        },
      ],
      warnings: [],
      filePath: e,
      fileType: "hooks",
    };
  }
  let r = Xfn().safeParse(n);
  if (!r.success)
    return {
      success: false,
      errors: qjl(r.error),
      warnings: [],
      filePath: e,
      fileType: "hooks",
    };
  return {
    success: true,
    errors: [],
    warnings: [],
    filePath: e,
    fileType: "hooks",
  };
}
async function collectMarkdown(dir, isSkillsDir) {
  let n;
  try {
    n = await Gq.readdir(dir, {
      withFileTypes: true,
    });
  } catch (o) {
    let s = on(o);
    if (s === "ENOENT" || s === "ENOTDIR") return [];
    throw o;
  }
  if (isSkillsDir)
    return n.filter((o) => o.isDirectory()).map((o) => _f.join(dir, o.name, "SKILL.md"));
  let r = [];
  for (let o of n) {
    let s = _f.join(dir, o.name);
    if (o.isDirectory()) r.push(...(await collectMarkdown(s, false)));
    else if (o.isFile() && o.name.toLowerCase().endsWith(".md")) r.push(s);
  }
  return r;
}
async function validatePluginContents(pluginDir) {
  let t = [],
    n = new Set(["claude.md", "claude.local.md"]),
    r = [];
  try {
    r = await Gq.readdir(pluginDir, {
      withFileTypes: true,
    });
  } catch {}
  for (let i of r) {
    if (!i.isFile() || !n.has(i.name.toLowerCase())) continue;
    let l =
      i.name.toLowerCase() === "claude.local.md"
        ? "Remove it from the plugin root."
        : "To ship context with your plugin, use a skill (skills/<name>/SKILL.md) instead.";
    t.push({
      success: true,
      errors: [],
      warnings: [
        {
          path: "root",
          message: `${i.name} at the plugin root is not loaded as project context. ${l}`,
        },
      ],
      filePath: _f.join(pluginDir, i.name),
      fileType: "plugin",
    });
  }
  let o = [
    ["skill", _f.join(pluginDir, "skills")],
    ["agent", _f.join(pluginDir, "agents")],
    ["command", _f.join(pluginDir, "commands")],
  ];
  for (let [i, a] of o) {
    let l = await collectMarkdown(a, i === "skill");
    for (let c of l) {
      let u;
      try {
        u = await Gq.readFile(c, {
          encoding: "utf-8",
        });
      } catch (p) {
        if (wn(p)) continue;
        t.push({
          success: false,
          errors: [
            {
              path: "file",
              message: `Failed to read: ${be(p)}`,
            },
          ],
          warnings: [],
          filePath: c,
          fileType: i,
        });
        continue;
      }
      let d = validateComponentFile(c, u, i);
      if (d.errors.length > 0 || d.warnings.length > 0) t.push(d);
    }
  }
  let s = await CBf(_f.join(pluginDir, "hooks", "hooks.json"));
  if (s.errors.length > 0 || s.warnings.length > 0) t.push(s);
  return t;
}
async function gUo(e) {
  let t = _f.dirname(e.filePath);
  if (_f.basename(t) !== ".claude-plugin") return;
  let n = _f.dirname(t),
    r;
  try {
    r = Ft(
      await Gq.readFile(e.filePath, {
        encoding: "utf-8",
      }),
    );
  } catch {
    return;
  }
  if (!r || typeof r !== "object") return;
  let o = r.plugins;
  if (!Array.isArray(o)) return;
  for (let s = 0; s < o.length; s++) {
    let i = o[s];
    if (!i || typeof i !== "object") continue;
    let a = i.source;
    if (typeof a !== "string" || !a.startsWith("./") || a.includes("..")) continue;
    let l = _f.join(n, a, ".claude-plugin", "plugin.json"),
      c = await validatePluginManifest(l);
    if (c.errors.length === 1 && c.errors[0]?.code === "ENOENT") continue;
    let u = `plugins[${s}] plugin.json \u2192 `;
    for (let d of c.errors)
      e.errors.push({
        ...d,
        path: u + d.path,
      });
    for (let d of c.warnings)
      e.warnings.push({
        ...d,
        path: u + d.path,
      });
    if (!c.success) e.success = false;
  }
}
async function validateManifest(filePath) {
  let t = _f.resolve(filePath),
    n = null;
  try {
    n = await Gq.stat(t);
  } catch (o) {
    if (!wn(o)) throw o;
  }
  if (n?.isDirectory()) {
    let o = _f.join(t, ".claude-plugin", "marketplace.json"),
      s = await validateMarketplaceManifest(o),
      i = s.errors[0]?.code;
    if (i !== "ENOENT" && i !== "ENOTDIR") return (await gUo(s), s);
    let a = _f.join(t, ".claude-plugin", "plugin.json"),
      l = await validatePluginManifest(a),
      c = l.errors[0]?.code;
    if (c !== "ENOENT" && c !== "ENOTDIR") return l;
    return {
      success: false,
      errors: [
        {
          path: "directory",
          message:
            "No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json",
        },
      ],
      warnings: [],
      filePath: t,
      fileType: "plugin",
    };
  }
  switch (detectManifestType(filePath)) {
    case "plugin":
      return validatePluginManifest(filePath);
    case "marketplace": {
      let o = await validateMarketplaceManifest(filePath);
      return (await gUo(o), o);
    }
    case "unknown": {
      try {
        let o = await Gq.readFile(t, {
            encoding: "utf-8",
          }),
          s = Ft(o);
        if (Array.isArray(s.plugins)) {
          let i = await validateMarketplaceManifest(filePath);
          return (await gUo(i), i);
        }
      } catch (o) {
        if (on(o) === "ENOENT")
          return {
            success: false,
            errors: [
              {
                path: "file",
                message: `File not found: ${t}`,
              },
            ],
            warnings: [],
            filePath: t,
            fileType: "plugin",
          };
      }
      return validatePluginManifest(filePath);
    }
  }
}
var Gq, _f, bBf, jjl, SBf, EBf, Gjl;
