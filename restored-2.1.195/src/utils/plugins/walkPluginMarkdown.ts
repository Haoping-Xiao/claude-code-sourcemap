// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d$o
// matched 2.1.88 source: src/utils/plugins/walkPluginMarkdown.ts
// class=modified  jaccard=0.3226  score=0.4399  fileCov=0.5476
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module d$o] deps: zb, Pw, fd, je, At, YS, Rd, Jt, B1
((iz = require("fs/promises")),
  (LSt = require("path")),
  (CIf = ve(() =>
    dt.object({
      pid: dt.number(),
      procStart: dt.string().optional(),
    }),
  )),
  (u$o = new Set()));
async function PSt(e, t, n = {}) {
  let r = qt(),
    o = n.logLabel ?? "plugin",
    s = 0,
    i = false;
  async function a(l, c) {
    if (c.length >= V0l) {
      T(`Skipping ${o} directory beyond depth ${V0l}: ${l}`, {
        level: "error",
      });
      return;
    }
    if (++s > z0l) {
      if (!i)
        ((i = true),
          T(`Stopping ${o} scan after ${z0l} directories (root=${e})`, {
            level: "error",
          }));
      return;
    }
    try {
      let u = await r.readdir(l);
      if (n.stopAtSkillDir && u.some((d) => d.isFile() && RIf.test(d.name))) {
        await Promise.all(
          u.map((d) =>
            d.isFile() && d.name.toLowerCase().endsWith(".md") ? t(p$o.join(l, d.name), c) : void 0,
          ),
        );
        return;
      }
      await Promise.all(
        u.map((d) => {
          let p = p$o.join(l, d.name);
          if (d.isDirectory()) return a(p, [...c, d.name]);
          if (d.isFile() && d.name.toLowerCase().endsWith(".md")) return t(p, c);
          return;
        }),
      );
    } catch (u) {
      T(`Failed to scan ${o} directory ${l}: ${u}`, {
        level: "error",
      });
    }
  }
  await a(e, []);
}
var p$o,
  RIf,
  V0l = 32,
  z0l = 4096;
