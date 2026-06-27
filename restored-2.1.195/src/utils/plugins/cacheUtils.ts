// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dOe
// matched 2.1.88 source: src/utils/plugins/cacheUtils.ts
// class=modified  jaccard=0.2719  score=0.8045  fileCov=0.2911
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dOe] deps: fd, je, eqe, fn, ys, Jbe, kv
((y$o = require("crypto")), (NL = require("fs/promises")), (KF = require("path")));
tRl = new Map();
function GIf() {
  (PI(), KZn(), ZZn(), mNn(), Eao().catch((e) => ke(e)), AUn(), h$o(), cRl(), UIf?.());
}
function Ah() {
  (GIf(), W0(), wq(), woo(), KW());
}
async function markPluginVersionOrphaned(e) {
  try {
    await nse.writeFile(b$o(e), `${Date.now()}`, "utf-8");
  } catch (t) {
    T(`Failed to write .orphaned_at: ${e}: ${t}`);
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
async function removeOrphanedAtMarker(e) {
  let t = b$o(e);
  try {
    await nse.unlink(t);
  } catch (n) {
    if (on(n) === "ENOENT") return;
    T(`Failed to remove .orphaned_at: ${e}: ${n}`);
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
async function processOrphanedPluginVersion(e, t) {
  let n = b$o(e),
    r;
  try {
    r = (await nse.stat(n)).mtimeMs;
  } catch (o) {
    if (on(o) === "ENOENT") {
      await markPluginVersionOrphaned(e);
      return;
    }
    T(`Failed to stat orphaned marker: ${e}: ${o}`);
    return;
  }
  if (t - r > jIf) {
    try {
      if (await HYt(e)) {
        T(`Skipping orphan cleanup, in use by live session: ${e}`);
        return;
      }
    } catch (o) {
      T(`Failed to check ${e} for live users, skipping cleanup: ${o}`);
      return;
    }
    try {
      await nse.rm(e, {
        recursive: true,
        force: true,
      });
    } catch (o) {
      T(`Failed to delete orphaned version: ${e}: ${o}`);
    }
  }
}
async function removeIfEmpty(e) {
  if ((await QZn(e)).length === 0)
    try {
      await nse.rm(e, {
        recursive: true,
        force: true,
      });
    } catch (t) {
      T(`Failed to remove empty dir: ${e}: ${t}`);
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
