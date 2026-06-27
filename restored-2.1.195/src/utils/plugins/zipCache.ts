// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YZn
// matched 2.1.88 source: src/utils/plugins/zipCache.ts
// class=modified  jaccard=0.3667  score=0.6342  fileCov=0.465
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module YZn] deps: lodash-es/memoize.js, dn, p-map/index.js, utils/debug.ts, hooks/useSettings.ts, utils/fsOperations.ts, utils/markdownConfigLoader.ts, utils/plugins/loadPluginAgents.ts, utils/plugins/loadPluginCommands.ts
Z0l = require("path");
g$o = Cn(async () => {
  let { enabled: e, errors: t } = await mp(),
    n = [];
  if (t.length > 0) T(`Plugin loading errors: ${t.map((o) => iS(o)).join(", ")}`);
  let r = null;
  for (let o of e) {
    let s = new Set();
    if (o.outputStylesPath)
      try {
        let i = await Q0l(o.outputStylesPath, o.name, s);
        if ((n.push(...i), i.length > 0))
          T(`Loaded ${i.length} output styles from plugin ${o.name} default directory`);
      } catch (i) {
        ((r = "plugin_load_output_styles_dir_failed"),
          T(`Failed to load output styles from plugin ${o.name} default directory: ${i}`, {
            level: "error",
          }));
      }
    if (o.outputStylesPaths)
      for (let i of o.outputStylesPaths)
        try {
          let l = await qt().stat(i);
          if (l.isDirectory()) {
            let c = await Q0l(i, o.name, s);
            if ((n.push(...c), c.length > 0))
              T(`Loaded ${c.length} output styles from plugin ${o.name} custom path: ${i}`);
          } else if (l.isFile() && i.endsWith(".md")) {
            let c = await eRl(i, o.name, s);
            if (c) (n.push(c), T(`Loaded output style from plugin ${o.name} custom file: ${i}`));
          }
        } catch (a) {
          ((r = "plugin_load_output_styles_path_failed"),
            T(`Failed to load output styles from plugin ${o.name} custom path ${i}: ${a}`, {
              level: "error",
            }));
        }
  }
  if ((T(`Total plugin output styles loaded: ${n.length}`), r)) Le("plugin_load_output_styles", r);
  else xe("plugin_load_output_styles");
  return n;
});
function az() {
  return ut(process.env.CLAUDE_CODE_PLUGIN_USE_ZIP_CACHE);
}
function wYt() {
  if (!az()) return;
  let e = process.env.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  return e ? LR(e) : void 0;
}
function getZipCacheKnownMarketplacesPath() {
  let e = wYt();
  if (!e) throw Error("Plugin zip cache is not enabled");
  return KF.join(e, "known_marketplaces.json");
}
function getZipCacheMarketplacesDir() {
  let e = wYt();
  if (!e) throw Error("Plugin zip cache is not enabled");
  return KF.join(e, "marketplaces");
}
function getZipCachePluginsDir() {
  let e = wYt();
  if (!e) throw Error("Plugin zip cache is not enabled");
  return KF.join(e, "plugins");
}
function MIf() {
  return {
    path: null,
    promise: null,
    cleanupHandle: null,
  };
}
function cleanupSessionPluginCache() {
  let e = OIf(),
    t = tRl.get(e);
  if (t) return t;
  let n = MIf();
  return (
    tRl.set(e, n),
    (n.cleanupHandle = Ci(async () => {
      if (n.path)
        try {
          (await NL.rm(n.path, {
            recursive: true,
            force: true,
          }),
            T(`Cleaned up session plugin cache at ${n.path}`));
        } catch (r) {
          T(`Failed to clean up session plugin cache: ${r}`);
        }
    })),
    n
  );
}
async function getSessionPluginCachePath() {
  let e = cleanupSessionPluginCache();
  if (e.path) return e.path;
  if (!e.promise)
    e.promise = (async () => {
      let t = y$o.randomBytes(8).toString("hex"),
        n = KF.join(vU(), `claude-plugin-session-${t}`);
      return (await qt().mkdir(n), (e.path = n), T(`Created session plugin cache at ${n}`), n);
    })();
  return e.promise;
}
async function XZn(e, t) {
  let n = KF.dirname(e);
  await qt().mkdir(n);
  let r = `.${KF.basename(e)}.tmp.${y$o.randomBytes(4).toString("hex")}`,
    o = KF.join(n, r);
  try {
    if (typeof t === "string")
      await NL.writeFile(o, t, {
        encoding: "utf-8",
      });
    else await NL.writeFile(o, t);
    await NL.rename(o, e);
  } catch (s) {
    try {
      await NL.rm(o, {
        force: true,
      });
    } catch {}
    throw s;
  }
}
async function createZipFromDirectory(sourceDir) {
  let t = {};
  await collectFilesForZip(sourceDir, "", t, new Set());
  let { zipSync: r } = await Promise.resolve().then(() => (Y5e(), G4t)),
    o = r(t, {
      level: 6,
    });
  return (T(`Created ZIP from ${sourceDir}: ${Object.keys(t).length} files, ${o.length} bytes`), o);
}
async function collectFilesForZip(baseDir, relativePath, files, visited) {
  let o = relativePath ? KF.join(baseDir, relativePath) : baseDir,
    s;
  try {
    s = await NL.readdir(o);
  } catch {
    return;
  }
  try {
    let i = await NL.stat(o, {
      bigint: true,
    });
    if (i.dev !== 0n || i.ino !== 0n) {
      let a = `${i.dev}:${i.ino}`;
      if (visited.has(a)) {
        T(`Skipping symlink cycle at ${o}`);
        return;
      }
      visited.add(a);
    }
  } catch {
    return;
  }
  for (let i of s) {
    if (i === ".git") continue;
    let a = KF.join(o, i),
      l = relativePath ? `${relativePath}/${i}` : i,
      c;
    try {
      c = await NL.lstat(a);
    } catch {
      continue;
    }
    if (c.isSymbolicLink()) continue;
    if (c.isDirectory()) await collectFilesForZip(baseDir, l, files, visited);
    else if (c.isFile())
      try {
        let u = await NL.readFile(a);
        files[l] = [
          new Uint8Array(u),
          {
            os: 3,
            attrs: (c.mode & 65535) << 16,
          },
        ];
      } catch (u) {
        T(`Failed to read file for zip: ${l}: ${u}`);
      }
  }
}
async function extractZipToDirectory(zipPath, targetDir) {
  let n = await qt().readFileBytes(zipPath),
    r = await nde(n),
    o = ZLe(n);
  await qt().mkdir(targetDir);
  for (let [s, i] of Object.entries(r)) {
    if (s.endsWith("/")) {
      await qt().mkdir(KF.join(targetDir, s));
      continue;
    }
    let a = KF.join(targetDir, s);
    (await qt().mkdir(KF.dirname(a)), await NL.writeFile(a, i));
    let l = o[s];
    if (l && l & 73) await NL.chmod(a, l & 511).catch(() => {});
  }
  T(`Extracted ZIP to ${targetDir}: ${Object.keys(r).length} entries`);
}
async function JZn(e, t) {
  let n = await createZipFromDirectory(e);
  (await XZn(t, n),
    await NL.rm(e, {
      recursive: true,
      force: true,
    }));
}
function sRl(e) {
  let t = e.replace(/[^a-zA-Z0-9\-_]/g, "-");
  return KF.join("marketplaces", `${t}.json`);
}
function isMarketplaceSourceSupportedByZipCache(source) {
  return ["github", "git", "url", "settings"].includes(source.source);
}
var y$o,
  NL,
  KF,
  $If = "cli",
  OIf = () => $If,
  tRl;
