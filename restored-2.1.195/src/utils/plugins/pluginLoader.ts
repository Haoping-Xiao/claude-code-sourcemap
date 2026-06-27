// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D$o
// matched 2.1.88 source: src/utils/plugins/pluginLoader.ts
// class=modified  jaccard=0.311  score=0.3814  fileCov=0.6276
// note: deminified; 43 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: resolvePluginRoot, resolvePluginPath, resolveContainedPluginPath, probeSeedCacheAnyVersion, mergePluginSources, loadSkillsAsPlugins, loadPluginManifest, loadAllPluginsForPreview, loadAllPluginsCacheOnly, loadAllPlugins, installFromNpm, installFromGitSubdir, gitClone, getVersionedZipCachePath, getVersionedCachePathIn, getVersionedCachePath, getPluginCachePath, getLegacyCachePath, getEnabledPluginBinPaths, generateTemporaryCacheNameForPlugin, displaySkillsDirPath, createPluginFrom …
function displaySkillsDirPath(e) {
  if (e.scope === "project") {
    let t = Es.join(yr(), ".claude", "skills");
    if (e.path.startsWith(t + Es.sep)) return "." + Es.sep + Es.relative(yr(), e.path);
  }
  return fM(e.path);
}
function getPluginCachePath() {
  return Es.join(kI(), "cache");
}
function getVersionedCachePathIn(e, t, n) {
  let { name: r, marketplace: o } = Qo(t),
    s = (o || "unknown").replace(/[^a-zA-Z0-9\-_]/g, "-"),
    i = (r || t).replace(/[^a-zA-Z0-9\-_]/g, "-"),
    a = n.replace(/[^a-zA-Z0-9\-_.]/g, "-");
  if (a === "." || a === "..") a = "-";
  return Es.join(e, "cache", s, i, a);
}
function getVersionedCachePath(e, t) {
  return getVersionedCachePathIn(kI(), e, t);
}
async function cacheDirHasPluginContent(e) {
  let t;
  try {
    t = await cd.readdir(e);
  } catch (n) {
    if (Vo(n)) return !1;
    throw n;
  }
  return t.some((n) => !bxf.has(n));
}
async function cacheMatchesDeclaredPaths(e, t, n) {
  if (!t) return !0;
  let r = [];
  function o(a, l) {
    if (!a) return;
    for (let c of Array.isArray(a) ? a : [a])
      if (typeof c === "string")
        r.push({
          relPath: c,
          mustBeDirectory: l,
        });
  }
  if (
    (o(t.agents, !1), o(t.skills, !0), typeof t.commands === "string" || Array.isArray(t.commands))
  )
    o(t.commands, !1);
  else if (t.commands && typeof t.commands === "object") {
    for (let a of Object.values(t.commands))
      if (a && typeof a === "object" && a.source)
        r.push({
          relPath: a.source,
          mustBeDirectory: !1,
        });
  }
  if (r.length === 0) return !0;
  let i = (
    await Promise.all(
      r.map(async ({ relPath: a, mustBeDirectory: l }) => {
        let c = resolveContainedPluginPath(e, a);
        if (c === null)
          return {
            relPath: a,
            ok: !0,
          };
        try {
          let u = await cd.stat(c);
          return {
            relPath: a,
            ok: l ? u.isDirectory() : !0,
          };
        } catch {
          return {
            relPath: a,
            ok: !1,
          };
        }
      }),
    )
  )
    .filter((a) => !a.ok)
    .map((a) => a.relPath);
  if (i.length > 0)
    return (
      T(
        `Cache at ${e} for ${n} is missing entry-declared component paths (${i.join(", ")}); treating as stale`,
      ),
      !1
    );
  return !0;
}
async function P$o(e) {
  await cd
    .rm(Es.join(e, ".orphaned_at"), {
      force: !0,
    })
    .catch(() => {});
}
async function Exf(e) {
  let t = e?.filter(_Oe);
  if (!t || t.length === 0) return;
  if (t.length === 1) return t[0];
  for (let n of t) {
    let r = n.installPath;
    if (!r) continue;
    if (r.endsWith(".zip") ? await ed(r) : await cacheDirHasPluginContent(r)) return n;
  }
  return t[0];
}
function getVersionedZipCachePath(e, t) {
  return `${getVersionedCachePath(e, t)}.zip`;
}
async function Ser(e, t) {
  for (let n of kue()) {
    let r = getVersionedCachePathIn(n, e, t);
    try {
      if ((await cd.readdir(r)).length > 0) return r;
    } catch {}
  }
  return null;
}
async function probeSeedCacheAnyVersion(e) {
  for (let t of kue()) {
    let n = Es.dirname(getVersionedCachePathIn(t, e, "_"));
    try {
      let r = await cd.readdir(n);
      if (r.length !== 1) continue;
      let o = Es.join(n, r[0]);
      if ((await cd.readdir(o)).length > 0) return o;
    } catch {}
  }
  return null;
}
function getLegacyCachePath(e) {
  let t = getPluginCachePath();
  return Es.join(t, e.replace(/[^a-zA-Z0-9\-_]/g, "-"));
}
async function resolvePluginPath(e, t) {
  if (t) {
    let o = getVersionedCachePath(e, t);
    if (await ed(o)) return o;
  }
  let n = Qo(e).name || e,
    r = getLegacyCachePath(n);
  if (await ed(r)) return r;
  return t ? getVersionedCachePath(e, t) : r;
}
function yer(e, t) {
  if (e === t) return !0;
  let n = t.endsWith(Es.sep) ? t : t + Es.sep;
  return e.startsWith(n);
}
async function copyDir(e, t, n = e, r = t, o = n, s = new Set()) {
  await qt().mkdir(t);
  let i = Es.resolve(e),
    a = Es.resolve(t),
    l = a.startsWith(i + Es.sep) ? Es.relative(i, a).split(Es.sep)[0] : void 0,
    c = await cd.readdir(e, {
      withFileTypes: !0,
    });
  for (let u of c) {
    if (l !== void 0 && u.name === l) continue;
    let d = Es.join(e, u.name),
      p = Es.join(t, u.name);
    if (u.isDirectory()) await copyDir(d, p, n, r, o, s);
    else if (u.isFile()) await cd.copyFile(d, p);
    else if (u.isSymbolicLink()) {
      let f;
      try {
        f = await cd.readlink(d);
      } catch (y) {
        if (on(y) !== "EINVAL")
          T(`copyDir: readlink failed for ${d}: ${be(y)}`, {
            level: "warn",
          });
        continue;
      }
      let m;
      try {
        m = await cd.realpath(d);
      } catch {
        if (!Es.isAbsolute(f)) {
          let y = Es.resolve(Es.dirname(d), f);
          if (yer(y, Es.resolve(n))) {
            await cd.symlink(f, p);
            continue;
          }
        }
        T(`copyDir: skipping broken symlink ${d} -> ${f}`);
        continue;
      }
      let g;
      try {
        g = await cd.realpath(n);
      } catch {
        g = n;
      }
      let h;
      try {
        h = await cd.realpath(o);
      } catch {
        h = o;
      }
      if (yer(m, g)) {
        let y = Es.relative(g, m),
          b = Es.join(r, y),
          _ = Es.relative(Es.dirname(p), b);
        await cd.symlink(_, p);
      } else if (yer(m, h) && !yer(g, m)) {
        if (s.has(m)) {
          T(`copyDir: skipping cyclic symlink target ${d} -> ${m}`);
          continue;
        }
        let y = await cd.stat(m).catch((b) => {
          T(`copyDir: stat failed while materializing ${d} -> ${m}: ${be(b)}`, {
            level: "warn",
          });
          return;
        });
        if (!y) continue;
        if (y.isFile()) await cd.copyFile(m, p);
        else if (y.isDirectory()) {
          s.add(m);
          try {
            await copyDir(m, p, m, p, o, s);
          } finally {
            s.delete(m);
          }
        } else T(`copyDir: skipping non-regular symlink target ${d} -> ${m}`);
      } else T(`copyDir: skipping symlink escaping containment root: ${d} -> ${m}`);
    }
  }
}
async function copyPluginToVersionedCache(sourcePath, pluginId, version, entry, marketplaceDir, s) {
  let i = az(),
    a = s?.forceOverwrite ?? !1,
    l = getVersionedCachePath(pluginId, version),
    c = getVersionedZipCachePath(pluginId, version);
  if (i) {
    if (await ed(c)) {
      if (!a) return (T(`Plugin ${pluginId} version ${version} already cached at ${c}`), c);
      await cd.rm(c, {
        force: !0,
      });
    }
  } else if (await ed(l)) {
    let m = await cacheDirHasPluginContent(l);
    if (!a && m)
      return (await P$o(l), T(`Plugin ${pluginId} version ${version} already cached at ${l}`), l);
    if (m) {
      let g = !1;
      try {
        g = await HYt(l, {
          excludeSelf: !0,
        });
      } catch {
        g = !0;
      }
      if (g)
        return (
          T(
            `Cache for ${pluginId} at ${l} is in use by another session; deferring overwrite until it exits`,
          ),
          l
        );
    }
    (T(`Removing ${m ? "superseded" : "incomplete"} cache directory for ${pluginId} at ${l}`),
      await cd.rm(l, {
        recursive: !0,
        force: !0,
      }));
  }
  let u = await Ser(pluginId, version);
  if (u) return (T(`Using seed cache for ${pluginId}@${version} at ${u}`), u);
  if (
    (await qt().mkdir(Es.dirname(l)), entry && typeof entry.source === "string" && marketplaceDir)
  ) {
    let m = ger(marketplaceDir, entry.source);
    T(`Copying source directory ${entry.source} for plugin ${pluginId}`);
    try {
      await copyDir(m, l, m, l, marketplaceDir);
    } catch (g) {
      if (wn(g) && sss(g) === m)
        throw Error(`Plugin source directory not found: ${m} (from entry.source: ${entry.source})`);
      throw g;
    }
  } else
    (T(`Copying plugin ${pluginId} to versioned cache (fallback to full copy)`),
      await copyDir(sourcePath, l));
  let d = Es.join(l, ".git");
  if (
    (await cd.rm(d, {
      recursive: !0,
      force: !0,
    }),
    (await cd.readdir(l)).length === 0)
  )
    throw Error(
      `Failed to copy plugin ${pluginId} to versioned cache: destination is empty after copy`,
    );
  let f = await cer(l);
  if (f.error)
    T(`Plugin dependency install warning for ${pluginId}: ${f.error}`, {
      level: "warn",
    });
  if (i) return (await JZn(l, c), T(`Successfully cached plugin ${pluginId} as ZIP at ${c}`), c);
  return (T(`Successfully cached plugin ${pluginId} at ${l}`), l);
}
function validateGitUrl(url) {
  try {
    let t = new URL(url);
    if (!["https:", "http:", "file:"].includes(t.protocol)) {
      if (!/^git@[a-zA-Z0-9.-]+:/.test(url))
        throw Error(
          `Invalid git URL protocol: ${t.protocol}. Only HTTPS, HTTP, file:// and SSH (git@) URLs are supported.`,
        );
    }
    return url;
  } catch {
    if (/^git@[a-zA-Z0-9.-]+:/.test(url)) return url;
    throw Error(`Invalid git URL: ${url}`);
  }
}
async function installFromNpm(packageName, targetPath, n = {}) {
  let r = Es.join(kI(), "npm-cache");
  await qt().mkdir(r);
  let o = `${packageName}@${n.version ?? "latest"}`,
    s = Es.join(r, "node_modules", packageName),
    i;
  try {
    let l = Ft(await cd.readFile(Es.join(s, "package.json"), "utf8"));
    if (typeof l.version === "string") i = l.version;
  } catch {}
  if (!(n.version && n.version === i)) {
    T(`Installing npm package ${o} to cache`);
    let l = [
      "install",
      o,
      "--prefix",
      r,
      "--no-fund",
      "--no-audit",
      "--no-progress",
      "--loglevel=error",
    ];
    if (n.registry) l.push("--registry", n.registry);
    let c = await $n("npm", l, {
      useCwd: !1,
    });
    if (c.code !== 0) throw Error(`Failed to install npm package: ${c.stderr}`);
  } else T(`npm cache hit for ${packageName}@${i} (pinned, matches requested)`);
  (await copyDir(s, targetPath),
    T(`Copied npm package ${packageName} from cache to ${targetPath}`));
}
async function eLl(e, t, n) {
  let r = await Gr(go(), ["rev-parse", "HEAD"], {
      cwd: e,
      env: n,
      stdin: "ignore",
    }),
    o = r.stdout.trim();
  if (r.code !== 0 || o.toLowerCase() !== t.toLowerCase()) {
    if (r.stderr) T(`plugin SHA pin rev-parse stderr: ${r.stderr}`);
    throw new mi(
      `SHA pin verification failed: expected HEAD to be ${t}, got ${o || "(rev-parse failed)"}. The pinned commit may have been removed upstream, or a ref with the same name exists. Refusing to install.`,
      "plugin SHA pin verification failed",
    );
  }
}
async function gitClone(gitUrl, targetPath, ref, sha) {
  if (sha?.startsWith("-")) throw Error(`Invalid sha "${sha}": cannot start with "-"`);
  if (ref?.startsWith("-")) throw Error(`Invalid ref "${ref}": cannot start with "-"`);
  let o = [...Fne, "clone", "--depth", "1", "--recurse-submodules", "--shallow-submodules"];
  if (ref && !sha) o.push("--branch", ref);
  if (sha) o.push("--no-checkout");
  o.push("--", gitUrl, targetPath);
  let s = R8(),
    i = performance.now(),
    a = await $n(go(), o, {
      useCwd: !0,
      env: s,
      stdin: "ignore",
    });
  if (a.code !== 0)
    throw (
      YD("plugin_clone", gitUrl, "failure", performance.now() - i, k8(a.stderr)),
      Error(`Failed to clone repository: ${a.stderr}`)
    );
  if (sha) {
    if (
      (
        await Gr(go(), [...Fne, "fetch", "--depth", "1", "origin", sha], {
          cwd: targetPath,
          env: s,
          stdin: "ignore",
        })
      ).code !== 0
    ) {
      T(`Shallow fetch of SHA ${sha} failed, falling back to unshallow fetch`);
      let u = await Gr(go(), [...Fne, "fetch", "--unshallow", ...(ref ? ["origin", ref] : [])], {
        cwd: targetPath,
        env: s,
        stdin: "ignore",
      });
      if (u.code !== 0)
        throw (
          YD("plugin_clone", gitUrl, "failure", performance.now() - i, k8(u.stderr)),
          Error(`Failed to fetch commit ${sha}: ${u.stderr}`)
        );
    }
    let c = await Gr(go(), ["checkout", sha], {
      cwd: targetPath,
      env: s,
      stdin: "ignore",
    });
    if (c.code !== 0)
      throw (
        YD("plugin_clone", gitUrl, "failure", performance.now() - i, k8(c.stderr)),
        Error(`Failed to checkout commit ${sha}: ${c.stderr}`)
      );
    try {
      await eLl(targetPath, sha, s);
    } catch (u) {
      throw (YD("plugin_clone", gitUrl, "failure", performance.now() - i, "sha_pin_mismatch"), u);
    }
  }
  YD("plugin_clone", gitUrl, "success", performance.now() - i);
}
async function installFromGit(gitUrl, targetPath, ref, sha) {
  let o = validateGitUrl(gitUrl);
  await gitClone(o, targetPath, ref, sha);
  let s = ref ? ` (ref: ${ref})` : "";
  T(`Cloned repository from ${o}${s} to ${targetPath}`);
}
async function installFromGitHub(repo, targetPath, ref, sha) {
  if (!/^[a-zA-Z0-9-_.]+\/[a-zA-Z0-9-_.]+$/.test(repo))
    throw Error(`Invalid GitHub repository format: ${repo}. Expected format: owner/repo`);
  let o = eRe() ? `https://github.com/${repo}.git` : `git@${JH}:${repo}.git`;
  return installFromGit(o, targetPath, ref, sha);
}
function Txf(e) {
  if (/^[a-zA-Z0-9-_.]+\/[a-zA-Z0-9-_.]+$/.test(e))
    return eRe() ? `https://github.com/${e}.git` : `git@${JH}:${e}.git`;
  return validateGitUrl(e);
}
async function installFromGitSubdir(url, targetPath, subdirPath, ref, sha) {
  if (!(await sWe()))
    throw Error(
      "git-subdir plugin source requires git to be installed and on PATH. Install git (version 2.25 or later for sparse-checkout cone mode) and try again.",
    );
  if (sha?.startsWith("-")) throw Error(`Invalid sha "${sha}": cannot start with "-"`);
  if (ref?.startsWith("-")) throw Error(`Invalid ref "${ref}": cannot start with "-"`);
  let s = Txf(url),
    i = `${targetPath}.clone`,
    a = [...Fne, "clone", "--depth", "1", "--filter=tree:0", "--no-checkout"];
  if (ref && !sha) a.push("--branch", ref);
  a.push("--", s, i);
  let l = R8(),
    c = await $n(go(), a, {
      useCwd: !0,
      env: l,
      stdin: "ignore",
    });
  if (c.code !== 0) throw Error(`Failed to clone repository for git-subdir source: ${c.stderr}`);
  try {
    let u = await Gr(go(), ["sparse-checkout", "set", "--cone", "--", subdirPath], {
      cwd: i,
      env: l,
      stdin: "ignore",
    });
    if (u.code !== 0)
      throw Error(
        `git sparse-checkout set failed (git >= 2.25 required for cone mode): ${u.stderr}`,
      );
    let d;
    if (sha) {
      if (
        (
          await Gr(go(), [...Fne, "fetch", "--depth", "1", "origin", sha], {
            cwd: i,
            env: l,
            stdin: "ignore",
          })
        ).code !== 0
      ) {
        T(`Shallow fetch of SHA ${sha} failed for git-subdir, falling back to unshallow fetch`);
        let y = await Gr(go(), [...Fne, "fetch", "--unshallow", ...(ref ? ["origin", ref] : [])], {
          cwd: i,
          env: l,
          stdin: "ignore",
        });
        if (y.code !== 0) throw Error(`Failed to fetch commit ${sha}: ${y.stderr}`);
      }
      let h = await Gr(go(), [...Fne, "checkout", sha], {
        cwd: i,
        env: l,
        stdin: "ignore",
      });
      if (h.code !== 0) throw Error(`Failed to checkout commit ${sha}: ${h.stderr}`);
      (await eLl(i, sha, l), (d = sha));
    } else {
      let [g, h] = await Promise.all([
        Gr(go(), [...Fne, "checkout", "HEAD"], {
          cwd: i,
          env: l,
          stdin: "ignore",
        }),
        Gr(go(), ["rev-parse", "HEAD"], {
          cwd: i,
          env: l,
          stdin: "ignore",
        }),
      ]);
      if (g.code !== 0) throw Error(`git checkout after sparse-checkout failed: ${g.stderr}`);
      if (h.code === 0) d = h.stdout.trim();
    }
    let p = ger(i, subdirPath);
    try {
      await cd.rename(p, targetPath);
    } catch (g) {
      if (wn(g))
        throw Error(
          `Subdirectory '${subdirPath}' not found in repository ${s}${ref ? ` (ref: ${ref})` : ""}. Check that the path is correct and exists at the specified ref/sha.`,
        );
      throw g;
    }
    let f = ref ? ` ref=${ref}` : "",
      m = d ? ` sha=${d}` : "";
    return (T(`Extracted subdir ${subdirPath} from ${s}${f}${m} to ${targetPath}`), d);
  } finally {
    await cd.rm(i, {
      recursive: !0,
      force: !0,
    });
  }
}
async function installFromLocal(sourcePath, targetPath, n) {
  if (!(await ed(sourcePath))) throw Error(`Source path does not exist: ${sourcePath}`);
  if (n) await copyDir(sourcePath, targetPath, sourcePath, targetPath, n);
  else await copyDir(sourcePath, targetPath);
  let r = Es.join(targetPath, ".git");
  await cd.rm(r, {
    recursive: !0,
    force: !0,
  });
}
function generateTemporaryCacheNameForPlugin(source) {
  let t = Date.now(),
    n = Math.random().toString(36).substring(2, 8),
    r;
  if (typeof source === "string") r = "local";
  else
    switch (source.source) {
      case "npm":
        r = "npm";
        break;
      case "github":
        r = "github";
        break;
      case "url":
        r = "git";
        break;
      case "git-subdir":
        r = "subdir";
        break;
      default:
        r = "unknown";
    }
  return `temp_${r}_${t}_${n}`;
}
async function cachePlugin(source, options) {
  let n = getPluginCachePath();
  await qt().mkdir(n);
  let r = generateTemporaryCacheNameForPlugin(source),
    o = Es.join(n, r),
    s = !1,
    i;
  try {
    if (
      (T(`Caching plugin from source: ${De(source)} to temporary path ${o}`),
      (s = !0),
      typeof source === "string")
    )
      await installFromLocal(source, o, options?.containmentRoot);
    else
      switch (source.source) {
        case "npm":
          await installFromNpm(source.package, o, {
            registry: source.registry,
            version: source.version,
          });
          break;
        case "github":
          await installFromGitHub(source.repo, o, source.ref, source.sha);
          break;
        case "url":
          await installFromGit(source.url, o, source.ref, source.sha);
          break;
        case "git-subdir":
          i = await installFromGitSubdir(source.url, o, source.path, source.ref, source.sha);
          break;
        default:
          throw Error(
            "This plugin uses a source type your Claude Code version does not support. Update Claude Code and try again.",
          );
      }
  } catch (p) {
    if (s && (await ed(o))) {
      T(`Cleaning up failed installation at ${o}`);
      try {
        await cd.rm(o, {
          recursive: !0,
          force: !0,
        });
      } catch (f) {
        T(`Failed to clean up installation: ${f}`, {
          level: "error",
        });
      }
    }
    throw p;
  }
  let a = typeof source === "string" ? source : source.source,
    {
      manifest: l,
      manifestPath: c,
      depConstraints: u,
    } = await loadPluginManifest(o, r, a, [Es.join(o, "plugin.json")]),
    d =
      c !== null
        ? l
        : options?.manifest || {
            name: r,
            description: `Plugin cached from ${a}`,
          };
  return (
    T(`Successfully cached plugin ${d.name} to ${o}`),
    {
      path: o,
      manifest: d,
      ...(i && {
        gitCommitSha: i,
      }),
      ...(u && {
        depConstraints: u,
      }),
    }
  );
}
async function loadPluginManifest(manifestPath, pluginName, source, r = []) {
  let o = [Es.join(manifestPath, ".claude-plugin", "plugin.json"), ...r];
  for (let s of o) {
    let i;
    try {
      i = await cd.readFile(s, {
        encoding: "utf-8",
      });
    } catch (d) {
      if (wn(d) || on(d) === "ENOTDIR") continue;
      let p = be(d);
      throw (
        Le("plugin_load_manifest", "plugin_load_manifest_read_failed"),
        T(`Plugin ${pluginName}: failed to read manifest file at ${s}. Read error: ${p}`, {
          level: "error",
        }),
        Error(`Plugin ${pluginName}: failed to read manifest file at ${s}.

Read error: ${p}`)
      );
    }
    let a;
    try {
      a = Ft(i);
    } catch (d) {
      let p = be(d);
      throw (
        Le("plugin_load_manifest", "plugin_load_manifest_json_invalid"),
        T(`Plugin ${pluginName} has a corrupt manifest file at ${s}. Parse error: ${p}`, {
          level: "error",
        }),
        Error(`Plugin ${pluginName} has a corrupt manifest file at ${s}.

JSON parse error: ${p}`)
      );
    }
    let l = nWe(a, "plugin-json", {
      pluginName: pluginName,
      manifestPath: s,
    });
    if (!l.ok)
      throw (
        Le("plugin_load_manifest", "plugin_load_manifest_schema_invalid"),
        T(l.error, {
          level: "error",
        }),
        Error(l.error)
      );
    let { manifest: c, rawCandidate: u } = l;
    return (
      xe("plugin_load_manifest"),
      {
        manifest: c,
        manifestPath: s,
        depConstraints: jKi(u),
      }
    );
  }
  return (
    xe("plugin_load_manifest"),
    {
      manifest: {
        name: pluginName,
        description: `Plugin from ${source}`,
      },
      manifestPath: null,
      depConstraints: void 0,
    }
  );
}
async function loadPluginHooks(hooksConfigPath, pluginName) {
  if (!(await ed(hooksConfigPath)))
    throw Error(
      `Hooks file not found at ${hooksConfigPath} for plugin ${pluginName}. If the manifest declares hooks, the file must exist.`,
    );
  let n = await cd.readFile(hooksConfigPath, {
      encoding: "utf-8",
    }),
    r = Ft(n);
  return Xfn().parse(r).hooks;
}
async function wxf(e, t, n, r) {
  let o = t.experimental?.monitors ?? t.monitors,
    s;
  if (o === void 0) {
    let i = Es.join(e, "monitors", "monitors.json");
    if (await ed(i)) s = i;
  } else if (typeof o === "string") {
    let i = resolveContainedPluginPath(e, o);
    if (i === null) {
      r.push({
        type: "path-traversal",
        source: n,
        plugin: t.name,
        path: o,
        component: "monitors",
      });
      return;
    }
    s = i;
  } else return o;
  if (s === void 0) return;
  try {
    let i = await cd.readFile(s, {
      encoding: "utf-8",
    });
    return eLr().parse(Ft(i));
  } catch (i) {
    let a = be(i);
    (T(`Failed to load monitors for ${t.name} from ${s}: ${a}`, {
      level: "error",
    }),
      r.push({
        type: "component-load-failed",
        source: n,
        plugin: t.name,
        component: "monitors",
        path: s,
        reason: a,
      }));
    return;
  }
}
function resolveContainedPluginPath(e, t) {
  let n = Es.resolve(e),
    r = Es.resolve(n, t),
    o = Es.relative(n, r);
  if (o.startsWith("..") || Es.resolve(o) === o) return null;
  return r;
}
async function validatePluginPaths(
  relPaths,
  pluginPath,
  pluginName,
  source,
  component,
  componentLabel,
  contextLabel,
  errors,
  l = !1,
) {
  let c = await Promise.all(
      relPaths.map(async (d) => {
        let p = resolveContainedPluginPath(pluginPath, d);
        if (p === null)
          return {
            relPath: d,
            fullPath: null,
            exists: !1,
            isDirectory: !1,
          };
        try {
          let f = await cd.stat(p);
          return {
            relPath: d,
            fullPath: p,
            exists: !0,
            isDirectory: f.isDirectory(),
          };
        } catch {
          return {
            relPath: d,
            fullPath: p,
            exists: !1,
            isDirectory: !1,
          };
        }
      }),
    ),
    u = [];
  for (let { relPath: d, fullPath: p, exists: f, isDirectory: m } of c) {
    if (p === null) {
      (T(`${componentLabel} path ${d} ${contextLabel} escapes plugin directory for ${pluginName}`, {
        level: "error",
      }),
        errors.push({
          type: "path-traversal",
          source: source,
          plugin: pluginName,
          path: d,
          component: component,
        }));
      continue;
    }
    if (!f)
      (T(`${componentLabel} path ${d} ${contextLabel} not found at ${p} for ${pluginName}`, {
        level: "error",
      }),
        errors.push({
          type: "path-not-found",
          source: source,
          plugin: pluginName,
          path: p,
          component: component,
        }));
    else if (l && !m) {
      let g = Es.dirname(d),
        h =
          component === "skills" && Es.basename(d).toLowerCase() === "skill.md" && g !== "."
            ? ` \u2014 point to the parent directory '${g}' instead`
            : "",
        y =
          component === "skills"
            ? `path is a file; skills entries must be directories containing SKILL.md${h}`
            : "path is a file; expected a directory";
      (T(
        `${componentLabel} path ${d} ${contextLabel} is a file, not a directory, for ${pluginName}`,
        {
          level: "error",
        },
      ),
        errors.push({
          type: "component-load-failed",
          source: source,
          plugin: pluginName,
          path: d,
          component: component,
          reason: y,
        }));
    } else u.push(p);
  }
  return u;
}
function qRl(e, t, n) {
  let r = [];
  if (typeof e === "string") r.push(e);
  else if (Array.isArray(e)) {
    for (let s of e) if (typeof s === "string") r.push(s);
  } else if (e && typeof e === "object") {
    for (let s of Object.values(e))
      if (s && typeof s === "object" && "source" in s && typeof s.source === "string")
        r.push(s.source);
  }
  let o = n + Es.sep;
  return r.some((s) => {
    let i = resolveContainedPluginPath(t, s);
    return i !== null && (i + Es.sep).startsWith(o);
  });
}
async function createPluginFromPath(pluginPath, source, enabled, fallbackName, o = !0) {
  let s = [],
    i = [],
    {
      manifest: a,
      manifestPath: l,
      depConstraints: c,
    } = await loadPluginManifest(pluginPath, fallbackName, source),
    u = {
      name: a.name,
      manifest: a,
      path: pluginPath,
      source: source,
      repository: source,
      enabled: enabled,
      depConstraints: c,
    },
    [d, p, f, m, g, h] = await Promise.all([
      ed(Es.join(pluginPath, "commands")),
      ed(Es.join(pluginPath, "agents")),
      ed(Es.join(pluginPath, "skills")),
      ed(Es.join(pluginPath, "output-styles")),
      ed(Es.join(pluginPath, "themes")),
      ed(Es.join(pluginPath, "workflows")),
    ]),
    { marketplace: y } = Qo(source);
  for (let [W, V, Y, z] of [
    ["commands", d, "commands", "commands"],
    ["agents", p, "agents", "agents"],
    ["outputStyles", m, "output-styles", "output-styles"],
    ["themes", g, "themes", "themes"],
  ]) {
    let K = a.experimental?.[W],
      Z = a[W];
    if (W === "themes") Z = a.experimental?.themes ?? a.themes;
    else if (W === "outputStyles") Z = a.outputStyles;
    let J = [];
    if (K !== void 0) J.push(`experimental.${W}`);
    if (a[W] !== void 0 && (K === void 0 || !0)) J.push(W);
    if (!Z || !V) continue;
    VPn(a.name, y, Y);
    let ne = Es.join(pluginPath, z);
    if (qRl(Z, pluginPath, ne)) continue;
    (T(
      `Plugin ${a.name}: ${z}/ folder exists but is not auto-loaded because the manifest sets ${J.map((oe) => `"${oe}"`).join(" and ")}`,
    ),
      i.push({
        type: "folder-shadowed-by-manifest",
        source: source,
        plugin: a.name,
        component: Y,
        folderPath: ne,
        manifestFields: J,
      }));
  }
  if (a.workflows && h) {
    VPn(a.name, y, "workflows");
    let W = Es.join(pluginPath, "workflows");
    if (!qRl(a.workflows, pluginPath, W))
      i.push({
        type: "folder-shadowed-by-manifest",
        source: source,
        plugin: a.name,
        component: "workflows",
        folderPath: W,
        manifestFields: [
          a.experimental?.workflows !== void 0 ? "experimental.workflows" : "workflows",
        ],
      });
  }
  if (
    (a.experimental?.monitors ?? a.monitors) !== void 0 &&
    (await ed(Es.join(pluginPath, "monitors", "monitors.json")))
  )
    VPn(a.name, y, "monitors");
  let b = !a.commands && d,
    _ = !a.agents && p,
    S = f,
    A = a.outputStyles,
    v = !A && m,
    C = !(a.experimental?.themes ?? a.themes) && g,
    x = !a.workflows && h,
    I = Es.join(pluginPath, "commands");
  if (b) u.commandsPath = I;
  if (a.commands) {
    let W = Object.values(a.commands)[0];
    if (
      typeof a.commands === "object" &&
      !Array.isArray(a.commands) &&
      W &&
      typeof W === "object" &&
      ("source" in W || "content" in W)
    ) {
      let V = {},
        Y = [],
        z = Object.entries(a.commands),
        K = await Promise.all(
          z.map(async ([Z, J]) => {
            if (!J || typeof J !== "object")
              return {
                commandName: Z,
                metadata: J,
                kind: "skip",
              };
            if (J.source) {
              let ne = resolveContainedPluginPath(pluginPath, J.source);
              return {
                commandName: Z,
                metadata: J,
                kind: "source",
                fullPath: ne,
                exists: ne !== null && (await ed(ne)),
              };
            }
            if (J.content)
              return {
                commandName: Z,
                metadata: J,
                kind: "content",
              };
            return {
              commandName: Z,
              metadata: J,
              kind: "skip",
            };
          }),
        );
      for (let Z of K) {
        if (Z.kind === "skip") continue;
        if (Z.kind === "content") {
          V[Z.commandName] = Z.metadata;
          continue;
        }
        if (Z.fullPath === null)
          (T(
            `Command ${Z.commandName} source ${Z.metadata.source} specified in manifest but escapes plugin directory for ${a.name}`,
            {
              level: "error",
            },
          ),
            s.push({
              type: "path-traversal",
              source: source,
              plugin: a.name,
              path: Z.metadata.source ?? "",
              component: "commands",
            }));
        else if (Z.exists) (Y.push(Z.fullPath), (V[Z.commandName] = Z.metadata));
        else
          (T(
            `Command ${Z.commandName} path ${Z.metadata.source} specified in manifest but not found at ${Z.fullPath} for ${a.name}`,
            {
              level: "error",
            },
          ),
            s.push({
              type: "path-not-found",
              source: source,
              plugin: a.name,
              path: Z.fullPath,
              component: "commands",
            }));
      }
      if (Y.length > 0) u.commandsPaths = Y;
      if (Object.keys(V).length > 0) u.commandsMetadata = V;
    } else {
      let V = Array.isArray(a.commands) ? a.commands : [a.commands],
        Y = await Promise.all(
          V.map(async (K) => {
            if (typeof K !== "string")
              return {
                cmdPath: K,
                kind: "invalid",
              };
            let Z = resolveContainedPluginPath(pluginPath, K);
            return {
              cmdPath: K,
              kind: "path",
              fullPath: Z,
              exists: Z !== null && (await ed(Z)),
            };
          }),
        ),
        z = [];
      for (let K of Y) {
        if (K.kind === "invalid") {
          T(`Unexpected command format in manifest for ${a.name}`, {
            level: "error",
          });
          continue;
        }
        if (K.fullPath === null) {
          (T(
            `Command path ${K.cmdPath} specified in manifest but escapes plugin directory for ${a.name}`,
            {
              level: "error",
            },
          ),
            s.push({
              type: "path-traversal",
              source: source,
              plugin: a.name,
              path: K.cmdPath,
              component: "commands",
            }));
          continue;
        }
        if (K.exists) z.push(K.fullPath);
        else
          (T(
            `Command path ${K.cmdPath} specified in manifest but not found at ${K.fullPath} for ${a.name}`,
            {
              level: "error",
            },
          ),
            s.push({
              type: "path-not-found",
              source: source,
              plugin: a.name,
              path: K.fullPath,
              component: "commands",
            }));
      }
      if (z.length > 0) u.commandsPaths = z;
    }
  }
  let k = Es.join(pluginPath, "agents");
  if (_) u.agentsPath = k;
  if (a.agents) {
    let W = Array.isArray(a.agents) ? a.agents : [a.agents],
      V = await validatePluginPaths(
        W,
        pluginPath,
        a.name,
        source,
        "agents",
        "Agent",
        "specified in manifest but",
        s,
      );
    if (V.length > 0) u.agentsPaths = V;
  }
  let D = Es.join(pluginPath, "skills");
  if (S) u.skillsPath = D;
  if (a.skills) {
    let W = Array.isArray(a.skills) ? a.skills : [a.skills],
      V = Es.resolve(D),
      Y = Es.resolve(pluginPath),
      z = (
        await validatePluginPaths(
          W,
          pluginPath,
          a.name,
          source,
          "skills",
          "Skill",
          "specified in manifest but",
          s,
          !0,
        )
      ).filter((K) => {
        let Z = Es.resolve(K);
        if (Z === V) return !1;
        if (y === JE && Z === Y) return !1;
        return !0;
      });
    if (z.length > 0) u.skillsPaths = z;
  } else if (!S && y !== JE) {
    if (await ed(Es.join(pluginPath, "SKILL.md"))) u.skillsPaths = [pluginPath];
  }
  let P = Es.join(pluginPath, "output-styles");
  if (v) u.outputStylesPath = P;
  if (A) {
    let W = Array.isArray(A) ? A : [A],
      V = await validatePluginPaths(
        W,
        pluginPath,
        a.name,
        source,
        "output-styles",
        "Output style",
        "specified in manifest but",
        s,
      );
    if (V.length > 0) u.outputStylesPaths = V;
  }
  let O = Es.join(pluginPath, "themes");
  if (C) u.themesPath = O;
  let L = a.experimental?.themes ?? a.themes;
  if (L) {
    let W = Array.isArray(L) ? L : [L],
      V = await validatePluginPaths(
        W,
        pluginPath,
        a.name,
        source,
        "themes",
        "Theme",
        "specified in manifest but",
        s,
      );
    if (V.length > 0) u.themesPaths = V;
  }
  if (x) u.workflowsPath = Es.join(pluginPath, "workflows");
  if (a.workflows) {
    let W = Array.isArray(a.workflows) ? a.workflows : [a.workflows],
      V = await validatePluginPaths(
        W,
        pluginPath,
        a.name,
        source,
        "workflows",
        "Workflow",
        "specified in manifest but",
        s,
      );
    if (V.length > 0) u.workflowsPaths = V;
  }
  let M,
    N = new Set(),
    B = Es.join(pluginPath, "hooks", "hooks.json");
  if (await ed(B))
    try {
      M = await loadPluginHooks(B, a.name);
      try {
        N.add(await cd.realpath(B));
      } catch {
        N.add(B);
      }
      T(
        `Read hooks.json for plugin ${a.name} (enabled=${enabled}${enabled ? "" : "; will NOT register, plugin is disabled"}): ${B}`,
      );
    } catch (W) {
      let V = be(W);
      (T(`Failed to load hooks for ${a.name}: ${V}`, {
        level: "error",
      }),
        s.push({
          type: "hook-load-failed",
          source: source,
          plugin: a.name,
          hookPath: B,
          reason: V,
        }));
    }
  if (a.hooks) {
    let W = Array.isArray(a.hooks) ? a.hooks : [a.hooks];
    for (let V of W)
      if (typeof V === "string") {
        let Y = resolveContainedPluginPath(pluginPath, V);
        if (Y === null) {
          (T(`Hooks file ${V} specified in manifest but escapes plugin directory for ${a.name}`, {
            level: "error",
          }),
            s.push({
              type: "path-traversal",
              source: source,
              plugin: a.name,
              path: V,
              component: "hooks",
            }));
          continue;
        }
        if (!(await ed(Y))) {
          (T(`Hooks file ${V} specified in manifest but not found at ${Y} for ${a.name}`, {
            level: "error",
          }),
            s.push({
              type: "path-not-found",
              source: source,
              plugin: a.name,
              path: Y,
              component: "hooks",
            }));
          continue;
        }
        let z;
        try {
          z = await cd.realpath(Y);
        } catch {
          z = Y;
        }
        if (N.has(z)) {
          if (
            (T(
              `Skipping duplicate hooks file for plugin ${a.name}: ${V} (resolves to already-loaded file: ${z})`,
            ),
            o)
          ) {
            let K = `Duplicate hooks file detected: ${V} resolves to already-loaded file ${z}. The standard hooks/hooks.json is loaded automatically, so manifest.hooks should only reference additional hook files.`;
            (T(K, {
              level: "error",
            }),
              s.push({
                type: "hook-load-failed",
                source: source,
                plugin: a.name,
                hookPath: Y,
                reason: K,
              }));
          }
          continue;
        }
        try {
          let K = await loadPluginHooks(Y, a.name);
          try {
            ((M = zRl(M, K)),
              N.add(z),
              T(
                `Read manifest hooks for plugin ${a.name} (enabled=${enabled}${enabled ? "" : "; will NOT register, plugin is disabled"}): ${V}`,
              ));
          } catch (Z) {
            let J = be(Z);
            (T(`Failed to merge hooks from ${V} for ${a.name}: ${J}`, {
              level: "error",
            }),
              ke(Zr(Z)),
              s.push({
                type: "hook-load-failed",
                source: source,
                plugin: a.name,
                hookPath: Y,
                reason: `Failed to merge: ${J}`,
              }));
          }
        } catch (K) {
          let Z = be(K);
          (T(`Failed to load hooks from ${V} for ${a.name}: ${Z}`, {
            level: "error",
          }),
            s.push({
              type: "hook-load-failed",
              source: source,
              plugin: a.name,
              hookPath: Y,
              reason: Z,
            }));
        }
      } else if (typeof V === "object") M = zRl(M, V);
  }
  if (M) u.hooksConfig = M;
  let $ = await wxf(pluginPath, a, source, s);
  if ($) u.monitors = $;
  let q = await loadPluginSettings(pluginPath, a);
  if (q) u.settings = q;
  return {
    plugin: u,
    errors: s,
    warnings: i,
    hasManifest: l !== null,
  };
}
function VRl(e) {
  let t = Cxf().safeParse(e);
  if (!t.success) return;
  let n = t.data;
  if (Object.keys(n).length === 0) return;
  return n;
}
async function loadPluginSettings(pluginPath, manifest) {
  let n = Es.join(pluginPath, "settings.json"),
    r = !1;
  try {
    let o = await cd.readFile(n, {
        encoding: "utf-8",
      }),
      s = Ft(o);
    if (Mxf(s)) {
      let i = VRl(s);
      if (i)
        return (
          T(`Loaded settings from settings.json for plugin ${manifest.name}`),
          xe("plugin_load_settings"),
          i
        );
    }
  } catch (o) {
    if (!Vo(o))
      ((r = !0),
        T(`Failed to parse settings.json for plugin ${manifest.name}: ${o}`, {
          level: "warn",
        }));
  }
  if (manifest.settings) {
    let o = VRl(manifest.settings);
    if (o) {
      if ((T(`Loaded settings from manifest for plugin ${manifest.name}`), r))
        It("plugin_load_settings", "plugin_load_settings_parse_failed");
      else xe("plugin_load_settings");
      return o;
    }
  }
  if (r) It("plugin_load_settings", "plugin_load_settings_parse_failed");
  else xe("plugin_load_settings");
  return;
}
function zRl(e, t) {
  if (!e) return t;
  let n = {
    ...e,
  };
  for (let [r, o] of Object.entries(t))
    if (!n[r]) n[r] = o;
    else n[r] = [...(n[r] || []), ...o];
  return n;
}
async function loadPluginsFromMarketplaces({ cacheOnly: e, preview: t = !1 }) {
  let n = jo(),
    r = {
      ...tWe(),
      ...(n.enabledPlugins || {}),
    },
    o = [],
    s = [],
    i = [],
    a = Object.entries(r).filter(([S, A]) => {
      if (!s2e().safeParse(S).success || A === void 0) return !1;
      let { marketplace: C } = Qo(S);
      return C !== JGe && !U0(C);
    }),
    l = await wP(),
    c = _5(),
    u = xGt(),
    d = c !== null || (u !== null && u.some((S) => S.source !== "skills-dir")),
    p = new Set(a.map(([S]) => Qo(S).marketplace).filter((S) => !!S)),
    f = new Map();
  await Promise.all(
    [...p].map(async (S) => {
      f.set(S, await Iq(S));
    }),
  );
  let m = [],
    g = new Set(a.map(([S]) => S)),
    h = new Map(),
    y = a.flatMap(([S, A]) => {
      let { name: v, marketplace: C } = Qo(S),
        x = C ? f.get(C) : null,
        I = C ? l[C] : void 0;
      if (!v || !C || !x?.renames || A === !1 || (!I && d) || (I && !_H(I.source))) return [[S, A]];
      let k = h.get(C);
      if (!k) ((k = new Set(x.plugins.map((O) => O.name))), h.set(C, k));
      if (k.has(v)) return [[S, A]];
      let D = FSt(v, x.renames, k);
      if (D === null) return [[S, A]];
      if (D.kind === "unresolved") {
        if (!t) zPn(v, C, D);
        return (
          T(
            `Plugin "${S}" has a renames entry but it does not resolve (${D.reason}); falling through to plugin-not-found`,
            {
              level: "warn",
            },
          ),
          [[S, A]]
        );
      }
      let P = D.kind === "renamed" ? `${D.to}@${C}` : null;
      if (P !== null && !s2e().safeParse(P).success) {
        if (!t)
          zPn(v, C, {
            kind: "unresolved",
            reason: "target-missing",
          });
        return (
          T(
            `Plugin "${S}" rename target "${P}" is not a valid PluginIdSchema id; falling through to plugin-not-found`,
            {
              level: "warn",
            },
          ),
          [[S, A]]
        );
      }
      if (!t) zPn(v, C, D);
      if (
        (m.push({
          marketplace: C,
          oldName: v,
          oldId: S,
          newId: P,
          resolution: D,
        }),
        i.push({
          type: "plugin-renamed",
          source: S,
          plugin: v,
          marketplace: C,
          renamedTo: D.kind === "renamed" ? D.to : null,
        }),
        P === null || g.has(P))
      )
        return [];
      return (g.add(P), [[P, A]]);
    });
  if (!t && m.length > 0)
    try {
      wRl(
        m.flatMap((S) =>
          S.newId === null
            ? []
            : [
                {
                  oldId: S.oldId,
                  newId: S.newId,
                },
              ],
        ),
      );
    } catch (S) {
      T(`renamePluginInstallations failed: ${Zr(S).message}`, {
        level: "warn",
      });
    }
  let b = MYt(),
    _ = await Promise.allSettled(
      y.map(async ([S, A]) => {
        let { name: v, marketplace: C } = Qo(S),
          x = l[C];
        if (!x && d)
          return (
            s.push({
              type: "marketplace-blocked-by-policy",
              source: S,
              plugin: v,
              marketplace: C,
              blockedByBlocklist: c === null,
              allowedSources: (c ?? []).map((O) => mHe(O)),
            }),
            null
          );
        if (x && !_H(x.source)) {
          let O = Ppt(x.source),
            L = _5() || [];
          return (
            s.push({
              type: "marketplace-blocked-by-policy",
              source: S,
              plugin: v,
              marketplace: C,
              blockedByBlocklist: O,
              allowedSources: O ? [] : L.map((M) => mHe(M)),
            }),
            null
          );
        }
        let I = null,
          k = f.get(C);
        if (k && x) {
          let O = k.plugins.find((L) => L.name === v);
          if (O)
            I = {
              entry: O,
              marketplaceInstallLocation: x.installLocation,
            };
        } else I = await T$o(S);
        if (!I) {
          let O = !!b.plugins[S]?.length;
          if (!x) {
            if (O)
              s.push({
                type: "marketplace-not-found",
                source: S,
                marketplace: C,
                availableMarketplaces: Object.keys(l),
              });
            else T(`Skipping orphaned enabledPlugins entry ${S}: marketplace not registered`);
          } else if (!k)
            s.push({
              type: "marketplace-load-failed",
              source: S,
              marketplace: C,
              reason: "cache-miss",
            });
          else if (O)
            s.push({
              type: "plugin-not-found",
              source: S,
              pluginId: v,
              marketplace: C,
            });
          else T(`Skipping orphaned enabledPlugins entry ${S}: not in marketplace catalog`);
          return null;
        }
        let D = await Exf(b.plugins[S]);
        if (typeof I.entry.source !== "string" && !D) {
          if (
            !(
              ["userSettings", "flagSettings", "policySettings"].some(
                (M) => yn(M)?.enabledPlugins?.[S] === !0,
              ) ||
              (!SSe() && yn("localSettings")?.enabledPlugins?.[S] === !0)
            )
          ) {
            let M = await lse(
              S,
              I.entry.source,
              void 0,
              void 0,
              I.entry.version,
              "sha" in I.entry.source ? I.entry.source.sha : void 0,
            );
            if (
              !((await Ser(S, M)) ?? (M === "unknown" ? await probeSeedCacheAnyVersion(S) : null))
            )
              return (
                s.push({
                  type: "plugin-not-installed",
                  source: S,
                  plugin: I.entry.name,
                }),
                null
              );
          }
        }
        let P = await (e
          ? xxf(I.entry, I.marketplaceInstallLocation, x?.source, S, A === !0, s, i, D?.installPath)
          : loadPluginFromMarketplaceEntry(
              I.entry,
              I.marketplaceInstallLocation,
              x?.source,
              S,
              A === !0,
              s,
              i,
              D?.version,
            ));
        if (P && D?.resolvedVersion !== void 0) P.resolvedVersion = D.resolvedVersion;
        return P;
      }),
    );
  for (let [S, A] of _.entries())
    if (A.status === "fulfilled" && A.value) o.push(A.value);
    else if (A.status === "rejected") {
      let v = Zr(A.reason),
        C = y[S][0];
      (T(`Failed to load plugin ${C}: ${v.message}`, {
        level: "error",
      }),
        s.push({
          type: "generic-error",
          source: C,
          plugin: bi(C, "@"),
          error: v.message,
        }));
    }
  if (!t) FRl(m);
  return {
    plugins: o,
    errors: s,
    warnings: i,
  };
}
async function xxf(e, t, n, r, o, s, i, a) {
  let l;
  if (typeof e.source === "string") {
    let c = n && s9(n);
    if (!c && a && (a.endsWith(".zip") ? await ed(a) : await cacheDirHasPluginContent(a))) l = a;
    else if (!c) {
      if (o)
        s.push({
          type: "plugin-cache-miss",
          source: r,
          plugin: e.name,
          installPath: a ?? t,
        });
      return null;
    } else {
      let u;
      try {
        u = (await cd.stat(t)).isDirectory() ? t : Es.join(t, "..");
      } catch {
        return (
          s.push({
            type: "generic-error",
            source: r,
            error: `Marketplace directory not found at path: ${t}`,
          }),
          null
        );
      }
      if (((l = Es.join(u, e.source)), !(await ed(l))))
        return (
          s.push({
            type: "generic-error",
            source: r,
            error: `Plugin directory not found at path: ${l}. Check that the marketplace entry has the correct path.`,
          }),
          null
        );
    }
  } else if (a && (a.endsWith(".zip") ? await ed(a) : await cacheDirHasPluginContent(a))) l = a;
  else if (!a) {
    let u =
        ["userSettings", "flagSettings", "policySettings"].some(
          (f) => yn(f)?.enabledPlugins?.[r] === !0,
        ) ||
        (!SSe() && yn("localSettings")?.enabledPlugins?.[r] === !0),
      d = await lse(
        r,
        e.source,
        void 0,
        void 0,
        e.version,
        "sha" in e.source ? e.source.sha : void 0,
      ),
      p;
    if (u) {
      let f = getVersionedZipCachePath(r, d),
        m = getVersionedCachePath(r, d);
      if (az() && (await ed(f))) p = f;
      else if (await cacheDirHasPluginContent(m)) (await P$o(m), (p = m));
    }
    if (!p)
      p =
        (await Ser(r, d)) ?? (d === "unknown" ? await probeSeedCacheAnyVersion(r) : null) ?? void 0;
    if (p) l = p;
    else if (u)
      return (
        s.push({
          type: "plugin-cache-miss",
          source: r,
          plugin: e.name,
          installPath: "(not recorded)",
        }),
        null
      );
    else
      return (
        s.push({
          type: "plugin-not-installed",
          source: r,
          plugin: e.name,
        }),
        null
      );
  } else {
    if (o)
      s.push({
        type: "plugin-cache-miss",
        source: r,
        plugin: e.name,
        installPath: a,
      });
    return null;
  }
  if (az() && l.endsWith(".zip")) {
    let c = await CYt(),
      u = Es.join(c, r.replace(/[^a-zA-Z0-9@\-_]/g, "-"));
    try {
      (await uOe(l, u), (l = u));
    } catch (d) {
      return (
        T(`Failed to extract plugin ZIP ${l}: ${d}`, {
          level: "error",
        }),
        s.push({
          type: "plugin-cache-miss",
          source: r,
          plugin: e.name,
          installPath: l,
        }),
        null
      );
    }
  }
  return finishLoadingPluginFromPath(e, r, o, s, i, l);
}
async function loadPluginFromMarketplaceEntry(
  entry,
  marketplaceInstallLocation,
  pluginId,
  enabled,
  errorsOut,
  installedVersion,
  i,
  a,
) {
  T(`Loading plugin ${entry.name} from source: ${De(entry.source)}`);
  let l;
  if (typeof entry.source === "string") {
    let c = (await cd.stat(marketplaceInstallLocation)).isDirectory()
        ? marketplaceInstallLocation
        : Es.join(marketplaceInstallLocation, ".."),
      u = Es.join(c, entry.source);
    if (!(await ed(u)))
      return (
        T(`Plugin path not found: ${u}`, {
          level: "error",
        }),
        installedVersion.push({
          type: "generic-error",
          source: enabled,
          error: `Plugin directory not found at path: ${u}. Check that the marketplace entry has the correct path.`,
        }),
        null
      );
    if (pluginId && s9(pluginId)) l = u;
    else
      try {
        let d;
        try {
          d = (await loadPluginManifest(u, entry.name, entry.source)).manifest;
        } catch {}
        let p = await lse(enabled, entry.source, d, c, entry.version);
        ((l = await copyPluginToVersionedCache(u, enabled, p, entry, c)),
          T(`Copied plugin ${entry.name} to versioned cache: ${l}`));
      } catch (d) {
        let p = be(d);
        (T(
          `Failed to copy plugin ${entry.name} to versioned cache: ${p}. Using marketplace path.`,
          {
            level: "warn",
          },
        ),
          (l = u));
      }
  } else
    try {
      let c = await lse(
          enabled,
          entry.source,
          void 0,
          void 0,
          a ?? entry.version,
          "sha" in entry.source ? entry.source.sha : void 0,
        ),
        u = getVersionedCachePath(enabled, c),
        d = getVersionedZipCachePath(enabled, c);
      if (az() && (await ed(d)))
        (T(`Using versioned cached plugin ZIP ${entry.name} from ${d}`), (l = d));
      else if (await cacheDirHasPluginContent(u))
        (await P$o(u), T(`Using versioned cached plugin ${entry.name} from ${u}`), (l = u));
      else {
        let p =
          (await Ser(enabled, c)) ??
          (c === "unknown" ? await probeSeedCacheAnyVersion(enabled) : null);
        if (p) ((l = p), T(`Using seed cache for external plugin ${entry.name} at ${p}`));
        else {
          let f = await cachePlugin(entry.source, {
              manifest: {
                name: entry.name,
              },
            }),
            m =
              c !== "unknown"
                ? c
                : await lse(
                    enabled,
                    entry.source,
                    f.manifest,
                    f.path,
                    a ?? entry.version,
                    f.gitCommitSha,
                  );
          if (
            ((l = await copyPluginToVersionedCache(f.path, enabled, m, entry, void 0)),
            f.path !== l && !Es.resolve(l).startsWith(Es.resolve(f.path) + Es.sep))
          )
            await cd.rm(f.path, {
              recursive: !0,
              force: !0,
            });
        }
      }
    } catch (c) {
      let u = be(c);
      return (
        T(`Failed to cache plugin ${entry.name}: ${u}`, {
          level: "error",
        }),
        installedVersion.push({
          type: "generic-error",
          source: enabled,
          error: `Failed to download/cache plugin ${entry.name}: ${u}`,
        }),
        null
      );
    }
  if (az() && l.endsWith(".zip")) {
    let c = await CYt(),
      u = Es.join(c, enabled.replace(/[^a-zA-Z0-9@\-_]/g, "-"));
    try {
      (await uOe(l, u), T(`Extracted plugin ZIP to session dir: ${u}`), (l = u));
    } catch (d) {
      throw (
        T(`Failed to extract plugin ZIP ${l}, deleting corrupt file: ${d}`),
        await cd
          .rm(l, {
            force: !0,
          })
          .catch(() => {}),
        d
      );
    }
  }
  return finishLoadingPluginFromPath(entry, enabled, errorsOut, installedVersion, i, l);
}
async function finishLoadingPluginFromPath(entry, pluginId, enabled, errorsOut, pluginPath, s) {
  let i = [],
    {
      plugin: a,
      errors: l,
      warnings: c,
      hasManifest: u,
    } = await createPluginFromPath(s, pluginId, enabled, entry.name, entry.strict ?? !0);
  if ((i.push(...l), typeof entry.source === "object" && "sha" in entry.source && entry.source.sha))
    a.sha = entry.source.sha;
  if (
    typeof entry.source === "string" &&
    entry.source.split(/[\\/]/).every((p) => p === "" || p === ".") &&
    entry.skills !== void 0
  ) {
    let p = Array.isArray(entry.skills) ? entry.skills : [entry.skills];
    if (p.length > 0) {
      let f = await validatePluginPaths(
        p,
        s,
        entry.name,
        pluginId,
        "skills",
        "Skill",
        "declared in marketplace entry but",
        [],
        !0,
      );
      if (f.length > 0) {
        let m = Es.join(s, "skills"),
          g = Es.resolve(m),
          h = Es.resolve(s),
          y = f.some((_) => {
            let S = Es.resolve(_);
            return S === g || S === h;
          });
        a.skillsPath = y ? a.skillsPath : void 0;
        let b = f.filter((_) => {
          let S = Es.resolve(_);
          return S !== g && S !== h;
        });
        a.skillsPaths = b.length > 0 ? b : void 0;
      }
    }
  }
  if (!u) {
    let p = nWe(entry, "marketplace-entry", {
      pluginName: entry.name,
      manifestPath: pluginId,
    });
    if (p.ok) a.manifest = p.manifest;
    else
      (T(
        `marketplace entry ${entry.name}: canonicalizeManifest rejected an entry that PluginMarketplaceEntrySchema accepted \u2014 falling back to legacy cast. ${p.error}`,
        {
          level: "warn",
        },
      ),
        (a.manifest = {
          ...entry,
          id: void 0,
          source: void 0,
          strict: void 0,
        }));
    if (((a.name = a.manifest.name), entry.commands)) {
      let m = Object.values(entry.commands)[0];
      if (
        typeof entry.commands === "object" &&
        !Array.isArray(entry.commands) &&
        m &&
        typeof m === "object" &&
        ("source" in m || "content" in m)
      ) {
        let g = {},
          h = [],
          y = Object.entries(entry.commands),
          b = await Promise.all(
            y.map(async ([_, S]) => {
              if (!S || typeof S !== "object" || !S.source)
                return {
                  commandName: _,
                  metadata: S,
                  skip: !0,
                };
              let A = Es.join(s, S.source);
              return {
                commandName: _,
                metadata: S,
                skip: !1,
                fullPath: A,
                exists: await ed(A),
              };
            }),
          );
        for (let _ of b) {
          if (_.skip) continue;
          if (_.exists) (h.push(_.fullPath), (g[_.commandName] = _.metadata));
          else
            (T(
              `Command ${_.commandName} path ${_.metadata.source} from marketplace entry not found at ${_.fullPath} for ${entry.name}`,
              {
                level: "error",
              },
            ),
              i.push({
                type: "path-not-found",
                source: pluginId,
                plugin: entry.name,
                path: _.fullPath,
                component: "commands",
              }));
        }
        if (h.length > 0) ((a.commandsPaths = h), (a.commandsMetadata = g));
      } else {
        let g = Array.isArray(entry.commands) ? entry.commands : [entry.commands],
          h = await Promise.all(
            g.map(async (b) => {
              if (typeof b !== "string")
                return {
                  cmdPath: b,
                  kind: "invalid",
                };
              let _ = Es.join(s, b);
              return {
                cmdPath: b,
                kind: "path",
                fullPath: _,
                exists: await ed(_),
              };
            }),
          ),
          y = [];
        for (let b of h) {
          if (b.kind === "invalid") {
            T(`Unexpected command format in marketplace entry for ${entry.name}`, {
              level: "error",
            });
            continue;
          }
          if (b.exists) y.push(b.fullPath);
          else
            (T(
              `Command path ${b.cmdPath} from marketplace entry not found at ${b.fullPath} for ${entry.name}`,
              {
                level: "error",
              },
            ),
              i.push({
                type: "path-not-found",
                source: pluginId,
                plugin: entry.name,
                path: b.fullPath,
                component: "commands",
              }));
        }
        if (y.length > 0) a.commandsPaths = y;
      }
    }
    if (entry.agents) {
      let m = Array.isArray(entry.agents) ? entry.agents : [entry.agents],
        g = await validatePluginPaths(
          m,
          s,
          entry.name,
          pluginId,
          "agents",
          "Agent",
          "from marketplace entry",
          i,
        );
      if (g.length > 0) a.agentsPaths = g;
    }
    if (entry.skills) {
      T(
        `Processing ${Array.isArray(entry.skills) ? entry.skills.length : 1} skill paths for plugin ${entry.name}`,
      );
      let m = Array.isArray(entry.skills) ? entry.skills : [entry.skills],
        g = Es.resolve(Es.join(s, "skills")),
        h = (
          await validatePluginPaths(
            m,
            s,
            entry.name,
            pluginId,
            "skills",
            "Skill",
            "from marketplace entry",
            i,
            !0,
          )
        ).filter((y) => Es.resolve(y) !== g);
      if (
        (T(`Found ${h.length} valid skill paths for plugin ${entry.name}, setting skillsPaths`),
        h.length > 0)
      )
        a.skillsPaths = h;
    } else T(`Plugin ${entry.name} has no entry.skills defined`);
    if (entry.outputStyles) {
      let m = Array.isArray(entry.outputStyles) ? entry.outputStyles : [entry.outputStyles],
        g = await validatePluginPaths(
          m,
          s,
          entry.name,
          pluginId,
          "output-styles",
          "Output style",
          "from marketplace entry",
          i,
        );
      if (g.length > 0) a.outputStylesPaths = g;
    }
    let f = entry.experimental?.themes ?? entry.themes;
    if (f) {
      let m = Array.isArray(f) ? f : [f],
        g = await validatePluginPaths(
          m,
          s,
          entry.name,
          pluginId,
          "themes",
          "Theme",
          "from marketplace entry",
          i,
        );
      if (g.length > 0) a.themesPaths = g;
    }
    if (entry.hooks) a.hooksConfig = entry.hooks;
  } else if (
    !entry.strict &&
    u &&
    (entry.commands ||
      entry.agents ||
      entry.skills ||
      entry.hooks ||
      entry.outputStyles ||
      entry.themes ||
      entry.experimental?.themes)
  )
    return (
      T(
        `Plugin ${entry.name} has both plugin.json and marketplace manifest entries for commands/agents/skills/hooks/outputStyles/themes. This is a conflict.`,
        {
          level: "error",
        },
      ),
      errorsOut.push({
        type: "generic-error",
        source: pluginId,
        error: `Plugin ${entry.name} has conflicting manifests: both plugin.json and marketplace entry specify components. Set strict: true in marketplace entry or remove component specs from one location.`,
      }),
      null
    );
  else if (u) {
    if (entry.commands) {
      let f = Object.values(entry.commands)[0];
      if (
        typeof entry.commands === "object" &&
        !Array.isArray(entry.commands) &&
        f &&
        typeof f === "object" &&
        ("source" in f || "content" in f)
      ) {
        let m = {
            ...(a.commandsMetadata || {}),
          },
          g = [],
          h = Object.entries(entry.commands),
          y = await Promise.all(
            h.map(async ([b, _]) => {
              if (!_ || typeof _ !== "object" || !_.source)
                return {
                  commandName: b,
                  metadata: _,
                  skip: !0,
                };
              let S = Es.join(s, _.source);
              return {
                commandName: b,
                metadata: _,
                skip: !1,
                fullPath: S,
                exists: await ed(S),
              };
            }),
          );
        for (let b of y) {
          if (b.skip) continue;
          if (b.exists) (g.push(b.fullPath), (m[b.commandName] = b.metadata));
          else
            (T(
              `Command ${b.commandName} path ${b.metadata.source} from marketplace entry not found at ${b.fullPath} for ${entry.name}`,
              {
                level: "error",
              },
            ),
              i.push({
                type: "path-not-found",
                source: pluginId,
                plugin: entry.name,
                path: b.fullPath,
                component: "commands",
              }));
        }
        if (g.length > 0)
          ((a.commandsPaths = [...(a.commandsPaths || []), ...g]), (a.commandsMetadata = m));
      } else {
        let m = Array.isArray(entry.commands) ? entry.commands : [entry.commands],
          g = await Promise.all(
            m.map(async (y) => {
              if (typeof y !== "string")
                return {
                  cmdPath: y,
                  kind: "invalid",
                };
              let b = Es.join(s, y);
              return {
                cmdPath: y,
                kind: "path",
                fullPath: b,
                exists: await ed(b),
              };
            }),
          ),
          h = [];
        for (let y of g) {
          if (y.kind === "invalid") {
            T(`Unexpected command format in marketplace entry for ${entry.name}`, {
              level: "error",
            });
            continue;
          }
          if (y.exists) h.push(y.fullPath);
          else
            (T(
              `Command path ${y.cmdPath} from marketplace entry not found at ${y.fullPath} for ${entry.name}`,
              {
                level: "error",
              },
            ),
              i.push({
                type: "path-not-found",
                source: pluginId,
                plugin: entry.name,
                path: y.fullPath,
                component: "commands",
              }));
        }
        if (h.length > 0) a.commandsPaths = [...(a.commandsPaths || []), ...h];
      }
    }
    if (entry.agents) {
      let f = Array.isArray(entry.agents) ? entry.agents : [entry.agents],
        m = await validatePluginPaths(
          f,
          s,
          entry.name,
          pluginId,
          "agents",
          "Agent",
          "from marketplace entry",
          i,
        );
      if (m.length > 0) a.agentsPaths = [...(a.agentsPaths || []), ...m];
    }
    if (entry.skills) {
      let f = Array.isArray(entry.skills) ? entry.skills : [entry.skills],
        m = Es.resolve(Es.join(s, "skills")),
        g = (
          await validatePluginPaths(
            f,
            s,
            entry.name,
            pluginId,
            "skills",
            "Skill",
            "from marketplace entry",
            i,
            !0,
          )
        ).filter((h) => Es.resolve(h) !== m);
      if (g.length > 0) {
        let h = new Set((a.skillsPaths || []).map((b) => Es.resolve(b))),
          y = g.filter((b) => !h.has(Es.resolve(b)));
        if (y.length > 0) a.skillsPaths = [...(a.skillsPaths || []), ...y];
      }
    }
    if (entry.outputStyles) {
      let f = Array.isArray(entry.outputStyles) ? entry.outputStyles : [entry.outputStyles],
        m = await validatePluginPaths(
          f,
          s,
          entry.name,
          pluginId,
          "output-styles",
          "Output style",
          "from marketplace entry",
          i,
        );
      if (m.length > 0) a.outputStylesPaths = [...(a.outputStylesPaths || []), ...m];
    }
    let p = entry.experimental?.themes ?? entry.themes;
    if (p) {
      let f = Array.isArray(p) ? p : [p],
        m = await validatePluginPaths(
          f,
          s,
          entry.name,
          pluginId,
          "themes",
          "Theme",
          "from marketplace entry",
          i,
        );
      if (m.length > 0) a.themesPaths = [...(a.themesPaths || []), ...m];
    }
    if (entry.hooks)
      a.hooksConfig = {
        ...(a.hooksConfig || {}),
        ...entry.hooks,
      };
  }
  if (enabled) (errorsOut.push(...i), pluginPath.push(...c));
  return a;
}
async function resolvePluginRoot(e) {
  let t = (
    await cd.readdir(e, {
      withFileTypes: !0,
    })
  ).filter((n) => n.name !== "__MACOSX" && n.name !== ".DS_Store");
  if (t.some((n) => n.name === ".claude-plugin")) return e;
  if (t.length === 1 && t[0].isDirectory() && (await ed(Es.join(e, t[0].name, ".claude-plugin"))))
    return Es.join(e, t[0].name);
  return e;
}
async function loadSessionOnlyPlugins(sessionPluginPaths) {
  if (sessionPluginPaths.length === 0)
    return {
      plugins: [],
      errors: [],
      warnings: [],
    };
  let t = new Map(Object.entries(jo().enabledPlugins ?? {}).map(([i, a]) => [i.toLowerCase(), a])),
    n = await Promise.all(
      sessionPluginPaths.map(async (i, a) => {
        try {
          let l;
          if (i.kind === "url") {
            let g = await CYt(),
              h = new URL(i.value),
              y = h.origin + h.pathname,
              b = Es.basename(h.pathname).replace(/\.zip$/i, "") || "download";
            l = Es.join(g, `url-${a}-${b.replace(/[^a-zA-Z0-9\-_]/g, "-")}.zip`);
            try {
              let _ = await fetch(i.value, {
                ...kg({
                  url: i.value,
                }),
                signal: AbortSignal.timeout(Rxf),
              });
              if (!_.ok || !_.body) throw Error(`HTTP ${_.status} ${_.statusText} from ${y}`);
              let S = Number(_.headers.get("content-length"));
              if (S > _er)
                throw Error(`Plugin archive too large (${S} bytes, max ${_er}) from ${y}`);
              let A = 0,
                v = YRl.Readable.fromWeb(_.body);
              v.on("data", (x) => {
                if (((A += x.byteLength), A > _er))
                  v.destroy(Error(`Plugin archive exceeded ${_er} bytes from ${y}`));
              });
              let C = `${l}.part`;
              (await XRl.pipeline(v, KRl.createWriteStream(C)),
                await cd.rename(C, l),
                T(`Downloaded inline plugin from ${y}`));
            } catch (_) {
              if (!(await ed(l))) throw _;
              T(`Re-fetch of inline plugin from ${y} failed; reusing cached ${l}`, {
                level: "warn",
              });
            }
          } else {
            l = Es.resolve(i.value);
            let g;
            try {
              await cd.stat(l);
            } catch (y) {
              g = on(y) ?? "UNKNOWN";
            }
            let h = g;
            if (g !== void 0 && g !== "ENOENT" && l.startsWith("/mnt/")) {
              await Nn(250);
              try {
                (await cd.stat(l),
                  T(
                    `Plugin path ${l}: first stat failed with ${g}, retry succeeded (transient mount race)`,
                    {
                      level: "warn",
                    },
                  ),
                  (g = void 0));
              } catch (y) {
                g = on(y) ?? "UNKNOWN";
              }
            }
            if (g !== void 0) {
              let y = g !== "ENOENT" ? g : h !== "ENOENT" ? h : void 0;
              return (
                T(
                  `Plugin path does not exist: ${l} (${g}${y && y !== g ? `, first ${y}` : ""}), skipping`,
                  {
                    level: "warn",
                  },
                ),
                {
                  plugin: void 0,
                  errors: [
                    {
                      type: "path-not-found",
                      source: `inline[${a}]`,
                      path: l,
                      component: "commands",
                      ...(y && {
                        errno: y,
                      }),
                    },
                  ],
                  warnings: [],
                }
              );
            }
          }
          let c = l.toLowerCase().endsWith(".zip"),
            u = c ? Es.basename(l).replace(/\.zip$/i, "") : Es.basename(l);
          if (c) {
            let g = await CYt(),
              h = Es.join(g, `inline-${a}-${u.replace(/[^a-zA-Z0-9\-_]/g, "-")}`);
            if (
              (await cd.rm(h, {
                recursive: !0,
                force: !0,
              }),
              await uOe(l, h),
              T(`Extracted inline plugin zip to ${h}`),
              (l = await resolvePluginRoot(h)),
              l !== h)
            )
              T(`Inline plugin zip had wrapper directory; using ${l}`);
          }
          let {
            plugin: d,
            errors: p,
            warnings: f,
          } = await createPluginFromPath(l, `${u}@${Bne}`, !0, u);
          ((d.source = `${d.name}@${Bne}`), (d.repository = `${d.name}@${Bne}`));
          let m = t.get(d.source.toLowerCase());
          if (
            ((d.enabled = m !== void 0 ? m !== !1 : d.manifest.defaultEnabled !== !1),
            i.kind === "path" && i.skipMcpDiscovery)
          )
            ((d.skipMcpDiscovery = !0), (d.mcpServers = {}));
          return (
            T(`Loaded inline plugin from path: ${d.name}`),
            {
              plugin: d,
              errors: p,
              warnings: f,
            }
          );
        } catch (l) {
          let c = (d) => d.replace(/\?[^\s"']*/g, ""),
            u = c(be(l));
          return (
            T(
              `Failed to load session plugin from ${i.kind === "url" ? c(i.value) : i.value}: ${u}`,
              {
                level: "warn",
              },
            ),
            {
              plugin: void 0,
              errors: [
                {
                  type: "generic-error",
                  source: `inline[${a}]`,
                  error: `Failed to load plugin: ${u}`,
                },
              ],
              warnings: [],
            }
          );
        }
      }),
    ),
    r = n.flatMap((i) => (i.plugin ? [i.plugin] : [])),
    o = n.flatMap((i) => i.errors),
    s = n.flatMap((i) => i.warnings);
  if (r.length > 0) T(`Loaded ${r.length} session-only plugins from --plugin-dir`);
  return {
    plugins: r,
    errors: o,
    warnings: s,
  };
}
async function loadSkillsAsPlugins() {
  let e = await iPa(),
    t = [],
    n = e.filter((u) => {
      if (u.scope === "project" && !ter()) return (t.push(u), !1);
      return !0;
    }),
    r = await C8(
      n,
      async ({ dir: u, scope: d }) => {
        await new Promise((f) => setImmediate(f));
        let p = Es.basename(u);
        try {
          let f = new Set(await cd.readdir(u).catch(() => []));
          if (!f.has(".claude-plugin")) return null;
          let {
            plugin: m,
            errors: g,
            warnings: h,
            hasManifest: y,
          } = await createPluginFromPath(u, `${p}@${JE}`, !0, p, !1);
          if (!sPa(m, y))
            return g.length || h.length
              ? {
                  plugin: null,
                  errors: g,
                  warnings: h,
                }
              : null;
          if (
            ((m.source = `${m.name}@${JE}`),
            (m.repository = m.source),
            (m.scope = d),
            d === "project")
          ) {
            let b = (m.monitors ?? []).map((_, S) => _.name ?? `#${S + 1}`);
            if (b.length > 0)
              h.push({
                type: "project-scope-server-stripped",
                source: m.source,
                plugin: m.name,
                monitors: b,
                warning: `${bn(b.length, "monitor")} (${b.join(", ")}) from project-scope plugin "${m.name}" ${bn(b.length, "was", "were")} not armed \u2014 project-supplied monitors have no per-item approval flow.`,
              });
            m.monitors = [];
          }
          return {
            plugin: m,
            errors: g,
            warnings: h,
          };
        } catch (f) {
          return {
            plugin: null,
            errors: [
              {
                type: "generic-error",
                source: `${p}@${JE}`,
                error: `Failed to load skill folder as plugin: ${be(f)}`,
              },
            ],
            warnings: [],
          };
        }
      },
      {
        concurrency: 32,
      },
    ),
    o = [],
    s = [],
    i = new Map();
  for (let u of r) {
    if (!u) continue;
    if (!u.plugin) {
      (o.push(...u.errors), s.push(...u.warnings));
      continue;
    }
    let d = i.get(u.plugin.name);
    if (d) {
      let p = d.scope !== u.plugin.scope;
      o.push({
        type: "generic-error",
        orphan: !0,
        source: `${Es.basename(u.plugin.path)}@${JE}`,
        error: p
          ? `Not loaded \u2014 your ${displaySkillsDirPath(d)} (same plugin name "${u.plugin.name}") shadowed the project's ${displaySkillsDirPath(u.plugin)}. To use the project's copy here, rename or move yours.`
          : `Not loaded \u2014 same plugin name "${u.plugin.name}" as ${displaySkillsDirPath(d)} (which loaded instead). Delete ${displaySkillsDirPath(u.plugin)}, or give it a different "name" in its plugin.json.`,
      });
      continue;
    }
    (o.push(...u.errors), s.push(...u.warnings), i.set(u.plugin.name, u.plugin));
  }
  let a = [...i.values()],
    l = jo().enabledPlugins ?? {};
  for (let u of a) {
    let d = l[u.source];
    u.enabled = d !== void 0 ? d !== !1 : u.manifest.defaultEnabled !== !1;
  }
  let c = (
    await C8(
      t,
      async (u) => {
        try {
          return (await cd.readdir(Es.join(u.dir, ".claude-plugin")), u);
        } catch {
          return null;
        }
      },
      {
        concurrency: 32,
      },
    )
  ).filter((u) => u !== null);
  if (c.length > 0) {
    let u = c.length;
    s.push({
      type: "project-scope-suppressed-untrusted",
      source: `(suppressed)@${JE}`,
      count: u,
      warning: `${u} project-scope plugin ${u === 1 ? "directory" : "directories"} under ./.claude/skills/ ${u === 1 ? "was" : "were"} not loaded because this workspace was not trusted when plugins were scanned. After accepting the trust dialog, run /reload-plugins (or relaunch) to load ${u === 1 ? "it" : "them"}.`,
    });
  }
  if (
    (G("tengu_plugin_skills_dir_loaded", {
      count: a.length,
      user_count: On(a, (u) => u.scope === "user"),
      project_count: On(a, (u) => u.scope === "project"),
      project_suppressed_count: c.length,
      error_count: o.length,
    }),
    a.length > 0)
  )
    T(`Loaded ${a.length} skills-as-plugins`);
  return {
    plugins: a,
    errors: o,
    warnings: s,
  };
}
function mergePluginSources(sources) {
  let t = [],
    n = sources.managedNames,
    r = sources.session.filter((a) => {
      if (n?.has(a.name))
        return (
          T(`Plugin "${a.name}" from --plugin-dir is blocked by managed settings`, {
            level: "warn",
          }),
          t.push({
            type: "generic-error",
            source: a.source,
            plugin: a.name,
            error: `--plugin-dir copy of "${a.name}" ignored: plugin is locked by managed settings`,
          }),
          !1
        );
      return !0;
    }),
    o = new Set(r.filter((a) => a.enabled !== !1).map((a) => a.name)),
    s = sources.marketplace.filter((a) => {
      if (o.has(a.name))
        return (T(`Plugin "${a.name}" from --plugin-dir overrides installed version`), !1);
      return !0;
    }),
    i = [];
  if (sources.skill?.length) {
    let a = new Map();
    for (let l of s) a.set(l.name, `an installed plugin (${l.source})`);
    for (let l of o) a.set(l, "a session-only plugin (--plugin-dir / --plugin-url)");
    i = sources.skill.filter((l) => {
      let c = n?.has(l.name) ? "managed settings" : a.get(l.name);
      if (!c) return !0;
      return (
        t.push({
          type: "generic-error",
          orphan: !0,
          source: `${Es.basename(l.path)}@${JE}`,
          error: `Not loaded \u2014 the name "${l.name}" is already taken by ${c}, which takes precedence. Give the plugin at ${displaySkillsDirPath(l)} a different "name" (in plugin.json or SKILL.md frontmatter) to load this copy.`,
        }),
        !1
      );
    });
  }
  return {
    plugins: [...r, ...s, ...i, ...sources.builtin],
    errors: t,
  };
}
async function loadAllPluginsForPreview() {
  return assemblePluginLoadResult(
    () =>
      loadPluginsFromMarketplaces({
        cacheOnly: !0,
        preview: !0,
      }),
    {
      preview: !0,
    },
  );
}
async function getEnabledPluginBinPaths() {
  let { enabled: e } = await loadAllPluginsCacheOnly();
  return e
    .filter((t) => !t.isBuiltin && t.path)
    .map((t) => Es.join(t.path, "bin"))
    .filter((t) => {
      if (Es.sep !== "\\" && /[:"'$`\\\n\r]/.test(t))
        return (T(`Dropping plugin bin path with shell metacharacters: ${t}`), !1);
      return !0;
    });
}
async function assemblePluginLoadResult(marketplaceLoader, t) {
  let n = yr(),
    r = Lpt();
  if (r && (PV().length > 0 || MV().length > 0 || aee().length > 0))
    T(
      `disableSideloadFlags: dropping @inline plugin specs at load time (parse-site gate should have caught this earlier): ${Dpt(["--plugin-dir", "--plugin-url"])}`,
      {
        level: "warn",
      },
    );
  let s = [
      ...(r
        ? []
        : [
            ...PV().map((b) => ({
              kind: "path",
              value: b,
            })),
            ...MV().map((b) => ({
              kind: "path",
              value: b,
              skipMcpDiscovery: !0,
            })),
            ...aee().map((b) => ({
              kind: "url",
              value: b,
            })),
          ]),
      ...Nbr().map((b) => ({
        kind: "path",
        value: b,
      })),
    ],
    i = {
      plugins: [],
      errors: [],
      warnings: [],
    },
    [a, l, c] = await Promise.all([
      marketplaceLoader(),
      s.length > 0 ? loadSessionOnlyPlugins(s) : Promise.resolve(i),
      loadSkillsAsPlugins(),
    ]),
    u = oeo(),
    { plugins: d, errors: p } = mergePluginSources({
      session: l.plugins,
      marketplace: a.plugins,
      skill: c.plugins,
      builtin: [...u.enabled, ...u.disabled],
      managedNames: R0(),
    }),
    f = [...a.errors, ...l.errors, ...c.errors, ...p],
    m = [...a.warnings, ...l.warnings, ...c.warnings],
    { demoted: g, errors: h } = qKi(d);
  for (let b of d) if (g.has(b.source)) b.enabled = !1;
  f.push(...h);
  let y = d.filter((b) => b.enabled);
  if (
    (T(`Found ${d.length} plugins (${y.length} enabled, ${d.length - y.length} disabled)`),
    t?.preview)
  );
  else if (n === yr()) {
    let b = new Set(y.map((_) => _.source));
    for (let _ of OPn())
      if (b.has(_.pluginId))
        m.push({
          type: "ineffective-disable",
          source: _.pluginId,
          overriddenBy: _.overriddenBy,
        });
    if ((Dxf(y), cachePluginSettings(y), f.length > 0 && d.length === 0))
      Le("plugin_load_all", "plugin_load_total_failure");
    else if (f.length > 0) It("plugin_load_all", "plugin_load_partial_failures");
    else xe("plugin_load_all");
  } else
    T(
      "assemblePluginLoadResult: originalCwd changed mid-scan; skipping side-effects (stale early-kick)",
    );
  return {
    enabled: y,
    disabled: d.filter((b) => !b.enabled),
    errors: f,
    warnings: m,
  };
}
async function Dxf(e) {
  let t = getPluginCachePath(),
    n = e.flatMap((r) => {
      if (!r.path || r.path.endsWith(".zip")) return [];
      let o = Es.relative(t, r.path);
      if (!o || o.startsWith(`..${Es.sep}`) || o === ".." || Es.isAbsolute(o)) return [];
      return [r.path];
    });
  (await Promise.all(n.map((r) => W0l(r))), await q0l(n));
}
function clearPluginCache(reason) {
  if (reason) T(`clearPluginCache: invalidating loadAllPlugins cache (${reason})`);
  if ((loadAllPlugins.cache?.clear?.(), loadAllPluginsCacheOnly.cache?.clear?.(), Yon() !== void 0))
    n_();
  ars();
}
function mergePluginSettings(plugins) {
  let t;
  for (let n of plugins) {
    if (!n.settings) continue;
    if (!t) t = {};
    for (let [r, o] of Object.entries(n.settings)) {
      if (r in t)
        T(`Plugin "${n.name}" overrides setting "${r}" (previously set by another plugin)`);
      t[r] = o;
    }
  }
  return t;
}
function cachePluginSettings(plugins) {
  let t = mergePluginSettings(plugins);
  if ((irs(t), t && Object.keys(t).length > 0))
    (n_(), T(`Cached plugin settings with keys: ${Object.keys(t).join(", ")}`));
}
function Mxf(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var KRl,
  cd,
  Es,
  YRl,
  XRl,
  bxf,
  Cxf,
  Rxf = 30000,
  _er = 268435456,
  IMPLICIT_PLUGIN_LAYOUT_ENTRIES,
  loadAllPlugins,
  loadAllPluginsCacheOnly;
