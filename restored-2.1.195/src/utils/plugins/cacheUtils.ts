// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dOe
// matched 2.1.88 source: src/utils/plugins/cacheUtils.ts
// class=modified  jaccard=0.2719  score=0.8045  fileCov=0.2911
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dOe] deps: utils/debugFilter.ts, utils/debug.ts, utils/systemDirectories.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/fsOperations.ts, utils/plugins/pluginDirectories.ts, proxy-from-env/index.js
((y$o = require("crypto")), (NL = require("fs/promises")), (KF = require("path")));
tRl = new Map();
function GIf() {
  (PI(), KZn(), ZZn(), mNn(), Eao().catch((e) => ke(e)), AUn(), h$o(), cRl(), UIf?.());
}
function Ah() {
  (GIf(), W0(), wq(), woo(), KW());
}
async function markPluginVersionOrphaned(versionPath) {
  try {
    await nse.writeFile(b$o(versionPath), `${Date.now()}`, "utf-8");
  } catch (t) {
    T(`Failed to write .orphaned_at: ${versionPath}: ${t}`);
  }
}
async function cleanupOrphanedPluginVersionsInBackground() {
  if (az()) return;
  try {
    let e = getInstalledVersionPaths();
    if (!e || e.size === 0) return;
    let t = fOe(),
      n = Date.now();
    await Promise.all([...e].map((r) => removeOrphanedAtMarker(r)));
    for (let r of await QZn(t)) {
      let o = IYt.join(t, r);
      for (let s of await QZn(o)) {
        let i = IYt.join(o, s);
        for (let a of await QZn(i)) {
          let l = IYt.join(i, a);
          if (e.has(l)) continue;
          await processOrphanedPluginVersion(l, n);
        }
        await removeIfEmpty(i);
      }
      await removeIfEmpty(o);
    }
  } catch (e) {
    T(`Plugin cache cleanup failed: ${e}`);
  }
}
function b$o(e) {
  return IYt.join(e, ORPHANED_AT_FILENAME);
}
async function removeOrphanedAtMarker(versionPath) {
  let t = b$o(versionPath);
  try {
    await nse.unlink(t);
  } catch (n) {
    if (on(n) === "ENOENT") return;
    T(`Failed to remove .orphaned_at: ${versionPath}: ${n}`);
  }
}
function getInstalledVersionPaths() {
  try {
    let e = new Set(),
      t = BL();
    for (let n of Object.values(t.plugins)) for (let r of n) e.add(r.installPath);
    return e;
  } catch (e) {
    return (T(`Failed to load installed plugins: ${e}`), null);
  }
}
async function processOrphanedPluginVersion(versionPath, now) {
  let n = b$o(versionPath),
    r;
  try {
    r = (await nse.stat(n)).mtimeMs;
  } catch (o) {
    if (on(o) === "ENOENT") {
      await markPluginVersionOrphaned(versionPath);
      return;
    }
    T(`Failed to stat orphaned marker: ${versionPath}: ${o}`);
    return;
  }
  if (now - r > jIf) {
    try {
      if (await HYt(versionPath)) {
        T(`Skipping orphan cleanup, in use by live session: ${versionPath}`);
        return;
      }
    } catch (o) {
      T(`Failed to check ${versionPath} for live users, skipping cleanup: ${o}`);
      return;
    }
    try {
      await nse.rm(versionPath, {
        recursive: true,
        force: true,
      });
    } catch (o) {
      T(`Failed to delete orphaned version: ${versionPath}: ${o}`);
    }
  }
}
async function removeIfEmpty(dirPath) {
  if ((await QZn(dirPath)).length === 0)
    try {
      await nse.rm(dirPath, {
        recursive: true,
        force: true,
      });
    } catch (t) {
      T(`Failed to remove empty dir: ${dirPath}: ${t}`);
    }
}
async function QZn(e) {
  try {
    return (
      await nse.readdir(e, {
        withFileTypes: true,
      })
    )
      .filter((n) => n.isDirectory())
      .map((n) => n.name);
  } catch {
    return [];
  }
}
var nse,
  IYt,
  UIf,
  ORPHANED_AT_FILENAME = ".orphaned_at",
  jIf = 1209600000;
