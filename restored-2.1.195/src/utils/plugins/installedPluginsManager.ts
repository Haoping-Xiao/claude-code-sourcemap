// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lE
// matched 2.1.88 source: src/utils/plugins/installedPluginsManager.ts
// class=modified  jaccard=0.3394  score=0.5089  fileCov=0.5047
// note: deminified; 15 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lE] deps: Ree, Sae, Qi, xpn, Xr, dn, Un, Rx, Pw, je, fn, At, Bi, ys, sa, Mx, vf, dr, ICe, Jt, I8, KPn, vq, dFt, iWe, _k, gHe, oWe, S$o, B1, $g, i5, WI, ZC, E$o
((gRl = require("fs/promises")), ($d = require("path")));
JIf = new Set(["projectSettings", "localSettings"]);
G$ = Cn(async (e) => {
  let t = await om(),
    n = t[e];
  if (!n)
    throw Rh(
      Error(
        `Marketplace '${e}' not found in configuration. Available marketplaces: ${Object.keys(t).join(", ")}`,
      ),
      "Marketplace not found in configuration",
    );
  if (s9(n.source) && !$d.isAbsolute(n.source.path)) {
    let o = xy("plugin marketplace remove", e);
    throw Rh(
      Error(
        `Marketplace "${e}" has a relative source path (${n.source.path}) ` +
          "in known_marketplaces.json \u2014 this is stale state from an older " +
          `Claude Code version. ${o ? `Run \`${o}\` and re-add` : "Remove and re-add"} it from the original project directory.`,
      ),
      "Marketplace has relative source path (legacy state)",
    );
  }
  try {
    return await kYt(n.installLocation);
  } catch (o) {
    T(`Cache corrupted or missing for marketplace ${e}, re-fetching from source: ${be(o)}`, {
      level: "warn",
    });
  }
  let r;
  try {
    ({ marketplace: r } = await H$o(n.source));
  } catch (o) {
    throw Rh(
      Error(`Failed to load marketplace "${e}" from source (${n.source.source}): ${be(o)}`),
      "Failed to load marketplace from source",
    );
  }
  return ((t[e].lastUpdated = new Date().toISOString()), await sse(t), r);
});
rer = new Map();
function getInstalledPluginsFilePath() {
  return lz.join(kI(), "installed_plugins.json");
}
function getInstalledPluginsV2FilePath() {
  return lz.join(kI(), "installed_plugins_v2.json");
}
function clearInstalledPluginsCache() {
  ((ase = null), (Yze = null), T("Cleared installed plugins cache"));
}
function PYt(e, t, n) {
  let r =
    t instanceof SyntaxError
      ? "syntax-error"
      : t instanceof Error && t.name === "ZodError"
        ? "validation-error"
        : (xd(t) ?? "unknown");
  G("tengu_plugin_state_file_error", {
    operation: $e(e),
    error_kind: r,
    recovered: n,
  });
}
function migrateToSinglePluginFile() {
  if (LYt) return;
  let e = qt(),
    t = getInstalledPluginsFilePath(),
    n = getInstalledPluginsV2FilePath();
  try {
    try {
      (e.renameSync(n, t), T("Renamed installed_plugins_v2.json to installed_plugins.json"));
      let i = loadInstalledPluginsV2();
      (cleanupLegacyCache(i), (LYt = true));
      return;
    } catch (i) {
      let a = on(i);
      if (a !== "ENOENT" && a !== "EEXIST") throw i;
      if (a === "EEXIST")
        try {
          e.unlinkSync(n);
        } catch {}
    }
    let r;
    try {
      r = e.readFileSync(t, {
        encoding: "utf-8",
      });
    } catch (i) {
      if (!wn(i)) throw i;
      LYt = true;
      return;
    }
    let o = Ft(r);
    if ((typeof o?.version === "number" ? o.version : 1) === 1) {
      let i = tLt().parse(o),
        a = w$o(i);
      (oj(t, De(a, null, 2)),
        T(
          `Converted installed_plugins.json from V1 to V2 format (${Object.keys(i.plugins).length} plugins)`,
        ),
        cleanupLegacyCache(a));
    }
    LYt = true;
  } catch (r) {
    let o = be(r);
    if (
      (T(`Failed to migrate plugin files: ${o}`, {
        level: "error",
      }),
      !gd(r) && !(r instanceof SyntaxError))
    )
      ke(Zr(r));
    (PYt("migrate-single-file", r, true), (LYt = true));
  }
}
function cleanupLegacyCache(v2Data) {
  let t = qt(),
    n = fOe();
  try {
    let r = new Set();
    for (let s of Object.values(v2Data.plugins)) for (let i of s) r.add(i.installPath);
    let o = t.readdirSync(n);
    for (let s of o) {
      if (!s.isDirectory()) continue;
      let i = s.name,
        a = lz.join(n, i);
      if (
        t.readdirSync(a).some((u) => {
          if (!u.isDirectory()) return false;
          let d = lz.join(a, u.name);
          return t.readdirSync(d).some((f) => f.isDirectory());
        })
      )
        continue;
      if (!r.has(a))
        (t.rmSync(a, {
          recursive: true,
          force: true,
        }),
          T(`Cleaned up legacy cache directory: ${i}`));
    }
  } catch (r) {
    let o = be(r);
    T(`Failed to clean up legacy cache: ${o}`, {
      level: "warn",
    });
  }
}
function v$o() {
  let e = qt(),
    t = getInstalledPluginsFilePath(),
    n;
  try {
    n = e.readFileSync(t, {
      encoding: "utf-8",
    });
  } catch (s) {
    if (wn(s)) return null;
    throw s;
  }
  let r = Ft(n);
  return {
    version: typeof r?.version === "number" ? r.version : 1,
    data: r,
  };
}
function w$o(e) {
  let t = {};
  for (let [n, r] of Object.entries(e.plugins)) {
    let o = BN(n, r.version);
    t[n] = [
      {
        scope: "user",
        installPath: o,
        version: r.version,
        installedAt: r.installedAt,
        lastUpdated: r.lastUpdated,
        gitCommitSha: r.gitCommitSha,
      },
    ];
  }
  return {
    version: 2,
    plugins: t,
  };
}
function loadInstalledPluginsV2() {
  if (ase !== null) return ase;
  let e = getInstalledPluginsFilePath();
  try {
    let t = v$o();
    if (t) {
      if (t.version === 2) {
        let o = nLt().parse(t.data);
        return (
          (ase = o),
          T(`Loaded ${Object.keys(o.plugins).length} installed plugins from ${e}`),
          o
        );
      }
      let n = tLt().parse(t.data),
        r = w$o(n);
      return (
        (ase = r),
        T(`Loaded and converted ${Object.keys(n.plugins).length} plugins from V1 format`),
        r
      );
    }
    return (
      T("installed_plugins.json doesn't exist, returning empty V2 object"),
      (ase = {
        version: 2,
        plugins: {},
      }),
      ase
    );
  } catch (t) {
    let n = be(t);
    if (
      (T(`Failed to load installed_plugins.json: ${n}. Starting with empty state.`, {
        level: "error",
      }),
      !gd(t) && !(t instanceof SyntaxError))
    )
      ke(Zr(t));
    return (
      PYt("load", t, true),
      (ase = {
        version: 2,
        plugins: {},
      }),
      ase
    );
  }
}
function saveInstalledPluginsV2(data) {
  let t = qt(),
    n = getInstalledPluginsFilePath();
  try {
    t.mkdirSync(kI());
    let r = De(data, null, 2);
    (oj(n, r),
      (ase = data),
      T(`Saved ${Object.keys(data.plugins).length} installed plugins to ${n}`));
  } catch (r) {
    throw (
      T(`Failed to save installed_plugins.json to ${n}: ${be(r)}`, {
        level: "error",
      }),
      PYt("save", r, false),
      r
    );
  }
}
function removePluginInstallation(pluginId, scope, projectPath) {
  let r = loadInstalledPluginsFromDisk(),
    o = r.plugins[pluginId];
  if (!o) return;
  if (
    ((r.plugins[pluginId] = o.filter((s) => !(s.scope === scope && s.projectPath === projectPath))),
    r.plugins[pluginId].length === 0)
  )
    delete r.plugins[pluginId];
  (saveInstalledPluginsV2(r), T(`Removed installation for ${pluginId} at scope ${scope}`));
}
function wRl(e) {
  if (e.length === 0) return;
  let t = loadInstalledPluginsFromDisk(),
    n = false;
  for (let { oldId: r, newId: o } of e) {
    let s = t.plugins[r];
    if (!s) continue;
    let i = s.filter((a) => a.scope === "managed");
    if (i.length === s.length) continue;
    if (i.length > 0) t.plugins[r] = i;
    else delete t.plugins[r];
    n = true;
  }
  if (!n) return;
  (saveInstalledPluginsV2(t), fxf());
}
function MYt() {
  if (Yze === null) Yze = loadInstalledPluginsV2();
  return Yze;
}
function loadInstalledPluginsFromDisk() {
  try {
    let e = v$o();
    if (e) {
      if (e.version === 2) return nLt().parse(e.data);
      let t = tLt().parse(e.data);
      return w$o(t);
    }
    return {
      version: 2,
      plugins: {},
    };
  } catch (e) {
    let t = be(e);
    return (
      T(`Failed to load installed plugins from disk: ${t}`, {
        level: "error",
      }),
      PYt("load-from-disk", e, true),
      {
        version: 2,
        plugins: {},
      }
    );
  }
}
function updateInstallationPathOnDisk(
  pluginId,
  scope,
  projectPath,
  newPath,
  newVersion,
  gitCommitSha,
  i,
) {
  let a = loadInstalledPluginsFromDisk(),
    l = a.plugins[pluginId];
  if (!l) {
    T(`Cannot update ${pluginId} on disk: plugin not found in installed plugins`);
    return;
  }
  let c = l.find((u) => u.scope === scope && u.projectPath === projectPath);
  if (c) {
    if (((c.installPath = newPath), c.version !== void 0)) c.version = newVersion;
    if (i !== void 0) c.resolvedVersion = i;
    else delete c.resolvedVersion;
    if (((c.lastUpdated = new Date().toISOString()), gitCommitSha !== void 0))
      c.gitCommitSha = gitCommitSha;
    let u = getInstalledPluginsFilePath();
    (oj(u, De(a, null, 2)),
      (ase = null),
      T(`Updated ${pluginId} on disk to version ${newVersion} at ${newPath}`));
  } else T(`Cannot update ${pluginId} on disk: no installation for scope ${scope}`);
}
function fxf() {
  Yze = null;
}
async function initializeVersionedPlugins() {
  migrateToSinglePluginFile();
  try {
    await migrateFromEnabledPlugins();
  } catch (t) {
    if (gd(t) || t instanceof SyntaxError)
      T(`Plugin migration skipped (fs/parse error): ${be(t)}`, {
        level: "error",
      });
    else ke(t);
    PYt("migrate-from-enabled", t, true);
  }
  let e = MYt();
  T(`Initialized versioned plugins system with ${Object.keys(e.plugins).length} plugins`);
}
function removeAllPluginsForMarketplace(marketplaceName) {
  if (!marketplaceName)
    return {
      orphanedPaths: [],
      removedPluginIds: [],
    };
  let t = loadInstalledPluginsFromDisk(),
    n = `@${marketplaceName}`,
    r = new Set(),
    o = [];
  for (let s of Object.keys(t.plugins)) {
    if (!s.endsWith(n)) continue;
    for (let i of t.plugins[s] ?? []) if (i.installPath) r.add(i.installPath);
    (delete t.plugins[s], o.push(s), T(`Removed installed plugin for marketplace removal: ${s}`));
  }
  if (o.length > 0) saveInstalledPluginsV2(t);
  return {
    orphanedPaths: Array.from(r),
    removedPluginIds: o,
  };
}
function _Oe(e) {
  return e.scope === "user" || e.scope === "managed" || e.projectPath === yr();
}
function ler(...e) {
  let t = e.find((n) => n && n !== "unknown");
  return t ? `v${t}` : void 0;
}
function b5(e) {
  let n = loadInstalledPluginsV2().plugins[e];
  if (!n || n.length === 0) return false;
  if (!n.some(_Oe)) return false;
  return jo().enabledPlugins?.[e] !== void 0;
}
function Xze(e) {
  let n = loadInstalledPluginsV2().plugins[e];
  if (!n || n.length === 0) return false;
  if (!n.some((o) => o.scope === "user" || o.scope === "managed")) return false;
  return jo().enabledPlugins?.[e] !== void 0;
}
function addInstalledPlugin(pluginId, metadata, n = "user", projectPath) {
  let o = loadInstalledPluginsFromDisk(),
    s = o.plugins[pluginId] || [],
    i = s.findIndex((d) => d.scope === n && d.projectPath === projectPath),
    a = i >= 0 && s[i]?.auto !== true,
    l = metadata.auto === true && !a,
    c = {
      scope: n,
      installPath: metadata.installPath,
      version: metadata.version,
      installedAt: metadata.installedAt,
      lastUpdated: metadata.lastUpdated,
      gitCommitSha: metadata.gitCommitSha,
      ...(metadata.resolvedVersion && {
        resolvedVersion: metadata.resolvedVersion,
      }),
      ...(projectPath && {
        projectPath: projectPath,
      }),
      ...(l && {
        auto: true,
      }),
    },
    u = i >= 0;
  if (u) s[i] = c;
  else s.push(c);
  ((o.plugins[pluginId] = s),
    saveInstalledPluginsV2(o),
    (Yze = null),
    T(`${u ? "Updated" : "Added"} installed plugin: ${pluginId} (scope: ${n})`));
}
function xRl(e, t, n) {
  let r = loadInstalledPluginsFromDisk(),
    s = r.plugins[e]?.find((i) => i.scope === t && i.projectPath === n);
  if (s?.auto !== true) return false;
  return (delete s.auto, saveInstalledPluginsV2(r), (Yze = null), true);
}
async function ier(e) {
  return (await _Rt(e)) ?? void 0;
}
async function getPluginVersionFromManifest(pluginCachePath, pluginId) {
  let n = qt(),
    r = lz.join(pluginCachePath, ".claude-plugin", "plugin.json");
  try {
    let o = await n.readFileBytes(r, 65537);
    if (o.length > 65536)
      return (T(`Manifest for ${pluginId} exceeds 64 KB, treating as unversioned`), "unknown");
    return Ft(o.toString("utf-8")).version || "unknown";
  } catch {
    return (T(`Could not extract version from manifest for ${pluginId}`), "unknown");
  }
}
async function migrateFromEnabledPlugins() {
  let e = new Set(
      Object.entries(yn("policySettings")?.enabledPlugins || {})
        .filter(([d, p]) => d.includes("@") && p === true)
        .map(([d]) => d),
    ),
    t = $t(),
    n = new Map(),
    r = new Set();
  for (let d of OO) {
    let p = xg(d);
    if (p) {
      if (r.has(p)) continue;
      r.add(p);
    }
    let m = yn(d)?.enabledPlugins || {};
    for (let g of Object.keys(m)) {
      if (!g.includes("@")) continue;
      let h = FPn(d);
      n.set(g, {
        scope: h,
        projectPath: h === "user" ? void 0 : t,
      });
    }
  }
  for (let d of e)
    n.set(d, {
      scope: "managed",
      projectPath: void 0,
    });
  let o = v$o(),
    s = o !== null,
    i = s && o?.version === 2;
  if (n.size === 0 && !s) return;
  if (i && o) {
    let d = nLt().safeParse(o.data);
    if (d?.success) {
      let p = d.data.plugins,
        f = [...n.keys()].every((g) => {
          let h = p[g];
          if (!h || h.length === 0) return false;
          if (e.has(g)) return h.length === 1 && h[0]?.scope === "managed";
          return true;
        }),
        m = Object.entries(p).every(([g, h]) => e.has(g) || !h.some((y) => y.scope === "managed"));
      if (f && m) {
        T("All plugins already exist, skipping migration");
        return;
      }
    }
  }
  T(
    s
      ? "Syncing installed_plugins.json with enabledPlugins from all settings.json files"
      : "Creating installed_plugins.json from settings.json files",
  );
  let a = new Date().toISOString(),
    l = {};
  if (s)
    l = {
      ...loadInstalledPluginsV2().plugins,
    };
  let c = 0,
    u = 0;
  for (let [d, p] of Object.entries(l)) {
    if (e.has(d)) continue;
    if (n.has(d)) continue;
    if (!p.some((m) => m.scope === "managed")) continue;
    let f = p.filter((m) => m.scope !== "managed");
    if (f.length === 0) delete l[d];
    else l[d] = f;
    (c++, T(`Dropped orphaned managed entry for ${d} (no longer policy-required)`));
  }
  for (let [d, p] of n) {
    let f = l[d];
    if (f && f.length > 0) {
      let m = f[0],
        g = false;
      if (m && (m.scope !== p.scope || m.projectPath !== p.projectPath)) {
        if (((m.scope = p.scope), p.projectPath)) m.projectPath = p.projectPath;
        else delete m.projectPath;
        ((m.lastUpdated = a),
          (g = true),
          T(`Updated ${d} scope to ${p.scope} (settings.json is source of truth)`));
      }
      if (p.scope === "managed") {
        if (f.length > 1)
          (T(`Collapsed ${d} to single managed entry (was ${f.length})`),
            (l[d] = f.slice(0, 1)),
            (g = true));
      } else if (f.length > 1) {
        let h = new Set(),
          y = f.filter((b) => {
            if (b.scope === "managed") return false;
            let _ = `${b.scope}|${b.projectPath ?? ""}`;
            if (h.has(_)) return false;
            return (h.add(_), true);
          });
        if (y.length < f.length)
          (T(`Cleaned ${d} (${f.length}\u2192${y.length}: stripped stale managed and/or dedupes)`),
            (l[d] = y),
            (g = true));
      }
      if (g) c++;
    } else {
      let { name: m, marketplace: g } = Qo(d);
      if (!m || !g) continue;
      try {
        T(`Looking up plugin ${d} in marketplace ${g}`);
        let h = await EL(d);
        if (!h) {
          T(`Plugin ${d} not found in any marketplace, skipping`);
          continue;
        }
        let { entry: y, marketplaceInstallLocation: b } = h,
          _,
          S,
          A = void 0;
        if (typeof y.source === "string") {
          let v = lz.join(b, y.source);
          if (
            ((S = await getPluginVersionFromManifest(v, d)),
            (A = await ier(v)),
            S === "unknown" && y.version)
          )
            S = y.version;
          if (S === "unknown" && A) S = A.substring(0, 12);
          _ = BN(d, S);
        } else {
          let v = lz.dirname(BN(d, "x")),
            C;
          try {
            C = (await qt().readdir(v)).filter((P) => P.isDirectory()).map((P) => P.name);
          } catch (P) {
            if (!wn(P)) throw P;
            T(`External plugin ${d} not in cache, skipping`);
            continue;
          }
          if (C.length === 0) {
            T(`External plugin ${d} has no cached versions, skipping`);
            continue;
          }
          let x = y.version ? BN(d, y.version) : void 0,
            I = x && C.includes(lz.basename(x)) ? x : lz.join(v, C[0]),
            k = lz.basename(I);
          ((_ = I), (A = await ier(I)));
          let D =
            !("sha" in y.source && y.source.sha) &&
            !y.version &&
            /^[0-9a-f]{12}(-[0-9a-f]{8})?$/.test(k) &&
            (await getPluginVersionFromManifest(I, d)) === "unknown";
          if (((S = D ? void 0 : k), D))
            T(
              `External plugin ${d} is ref-tracked (cache dir ${k} is a git SHA, no manifest version), recording without a version so the loader re-clones it each load`,
            );
        }
        ((l[d] = [
          {
            scope: p.scope,
            installPath: _,
            ...(S !== void 0 && {
              version: S,
            }),
            installedAt: a,
            lastUpdated: a,
            gitCommitSha: A,
            ...(p.projectPath && {
              projectPath: p.projectPath,
            }),
          },
        ]),
          u++,
          T(`Added ${d} with scope ${p.scope}`));
      } catch (h) {
        T(`Failed to add plugin ${d}: ${h}`);
      }
    }
  }
  if (!s || c > 0 || u > 0)
    (saveInstalledPluginsV2({
      version: 2,
      plugins: l,
    }),
      T(`Sync completed: ${u} added, ${c} updated in installed_plugins.json`));
}
var lz,
  LYt = false,
  ase = null,
  Yze = null;
