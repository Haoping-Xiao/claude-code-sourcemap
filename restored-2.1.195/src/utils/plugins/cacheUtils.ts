// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dOe
// matched 2.1.88 source: src/utils/plugins/cacheUtils.ts
// class=modified  jaccard=0.3617  score=0.7118  fileCov=0.4237
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var dOe = E(() => {
  fd();
  je();
  eqe();
  fn();
  ys();
  Jbe();
  kv();
  ((y$o = require("crypto")), (NL = require("fs/promises")), (KF = require("path")));
  tRl = new Map();
});
function GIf() {
  (PI(), KZn(), ZZn(), mNn(), Eao().catch((e) => ke(e)), AUn(), h$o(), cRl(), UIf?.());
}
function Ah() {
  (GIf(), W0(), wq(), woo(), KW());
}
async function pOe(e) {
  try {
    await nse.writeFile(b$o(e), `${Date.now()}`, "utf-8");
  } catch (t) {
    T(`Failed to write .orphaned_at: ${e}: ${t}`);
  }
}
async function lRl() {
  if (az()) return;
  try {
    let e = qIf();
    if (!e || e.size === 0) return;
    let t = fOe(),
      n = Date.now();
    await Promise.all([...e].map((r) => WIf(r)));
    for (let r of await QZn(t)) {
      let o = IYt.join(t, r);
      for (let s of await QZn(o)) {
        let i = IYt.join(o, s);
        for (let a of await QZn(i)) {
          let l = IYt.join(i, a);
          if (e.has(l)) continue;
          await VIf(l, n);
        }
        await aRl(i);
      }
      await aRl(o);
    }
  } catch (e) {
    T(`Plugin cache cleanup failed: ${e}`);
  }
}
function b$o(e) {
  return IYt.join(e, FIf);
}
async function WIf(e) {
  let t = b$o(e);
  try {
    await nse.unlink(t);
  } catch (n) {
    if (on(n) === "ENOENT") return;
    T(`Failed to remove .orphaned_at: ${e}: ${n}`);
  }
}
function qIf() {
  try {
    let e = new Set(),
      t = BL();
    for (let n of Object.values(t.plugins)) for (let r of n) e.add(r.installPath);
    return e;
  } catch (e) {
    return (T(`Failed to load installed plugins: ${e}`), null);
  }
}
async function VIf(e, t) {
  let n = b$o(e),
    r;
  try {
    r = (await nse.stat(n)).mtimeMs;
  } catch (o) {
    if (on(o) === "ENOENT") {
      await pOe(e);
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
async function aRl(e) {
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
  FIf = ".orphaned_at",
  jIf = 1209600000;
