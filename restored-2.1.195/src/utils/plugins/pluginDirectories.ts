// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jbe
// matched 2.1.88 source: src/utils/plugins/pluginDirectories.ts
// class=modified  jaccard=0.397  score=1  fileCov=0.397
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Jbe = E(() => {
  Qi();
  Is();
  Rm();
  ys();
  lg();
  xue();
  Yf();
  ((_oo = require("os")), (ore = require("path")), (jrp = /[{}]/));
  Pra = Cn(i_);
  ((qrp = /^[A-Za-z]:\/?$/), (Vrp = /^[A-Za-z]:\/[^/]+$/));
  zrp = Cn((e) =>
    jd(qt(), e)
      .resolvedPath.replace(/[\\/]+/g, "/")
      .replace(/\/$/, ""),
  );
});
function Yrp() {
  if (ICt()) return Mra;
  if (ut(process.env.CLAUDE_CODE_USE_COWORK_PLUGINS)) return Mra;
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
        withFileTypes: !0,
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
async function Sct(e) {
  let t = M2t(e);
  try {
    await _ct.rm(t, {
      recursive: !0,
      force: !0,
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
  Mra = "cowork_plugins";
