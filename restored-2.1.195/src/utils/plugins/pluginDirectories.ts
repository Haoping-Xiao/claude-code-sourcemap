// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jbe
// matched 2.1.88 source: src/utils/plugins/pluginDirectories.ts
// class=modified  jaccard=0.4218  score=0.8837  fileCov=0.4467
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jbe] deps: Qi, Is, Rm, ys, lg, xue, Yf
((_oo = require("os")), (ore = require("path")), (jrp = /[{}]/));
Pra = Cn(i_);
((qrp = /^[A-Za-z]:\/?$/), (Vrp = /^[A-Za-z]:\/[^/]+$/));
zrp = Cn((e) =>
  jd(qt(), e)
    .resolvedPath.replace(/[\\/]+/g, "/")
    .replace(/\/$/, ""),
);
function Yrp() {
  if (ICt()) return COWORK_PLUGINS_DIR;
  if (ut(process.env.CLAUDE_CODE_USE_COWORK_PLUGINS)) return COWORK_PLUGINS_DIR;
  return Krp;
}
function kI() {
  let e = process.env.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  if (e) return LR(e);
  return bct.join(tr(), Yrp());
}
function kue() {
  let e = process.env.CLAUDE_CODE_PLUGIN_SEED_DIR;
  if (!e) return [];
  return e.split(bct.delimiter).filter(Boolean).map(LR);
}
function Xrp(e) {
  return e.replace(/[^a-zA-Z0-9\-_]/g, "-");
}
function M2t(e) {
  return bct.join(kI(), "data", Xrp(e));
}
function Rue(e) {
  let t = M2t(e);
  return (qt().mkdirSync(t), t);
}
async function $ra(e) {
  let t = M2t(e),
    n = 0,
    r = async (o) => {
      for (let s of await _ct.readdir(o, {
        withFileTypes: true,
      })) {
        let i = bct.join(o, s.name);
        if (s.isDirectory()) await r(i);
        else
          try {
            n += (await _ct.stat(i)).size;
          } catch {}
      }
    };
  try {
    await r(t);
  } catch (o) {
    if (Vo(o)) return null;
    throw o;
  }
  if (n === 0) return null;
  return {
    bytes: n,
    human: Ra(n),
  };
}
async function deletePluginDataDir(e) {
  let t = M2t(e);
  try {
    await _ct.rm(t, {
      recursive: true,
      force: true,
    });
  } catch (n) {
    T(`Failed to delete plugin data dir ${t}: ${be(n)}`, {
      level: "warn",
    });
  }
}
var _ct,
  bct,
  Krp = "plugins",
  COWORK_PLUGINS_DIR = "cowork_plugins";
