// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pq
// matched 2.1.88 source: src/utils/markdownConfigLoader.ts
// class=modified (alt of src/utils/markdownConfigLoader.ts)  jaccard=0.2636  score=0.9124  fileCov=0.2704
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module pq] deps: Qi, kt, ft, je, fn, At, oc, Iv, sa, __, tre, vf, hY, L7
((Dlc = require("fs")),
  (Mz = require("fs/promises")),
  (Plc = require("os")),
  (d2 = require("path")),
  (XDl = ["commands", "agents", "output-styles", "skills", "workflows", "routines"]));
_q = Cn(
  async function (e, t) {
    let n = Date.now(),
      r = d2.join(tr(), e),
      o = d2.join(QC(), ".claude", e),
      s = O6e(e, t),
      i = new Set(await Promise.all(s.map(async (A) => dv(await Mz.realpath(A).catch(() => A))))),
      a =
        e === "agents"
          ? Uo(
              await Promise.all(
                c0().map(async (A) => {
                  let v = d2.join(d2.resolve(A), ".claude", e);
                  return await Mz.realpath(v).catch(() => v);
                }),
              ),
            ).filter((A) => !i.has(dv(A)))
          : [],
      l = Tu(t),
      c = qf(t);
    if (l && c && c !== l) {
      let A = dv(d2.join(l, ".claude", e));
      if (!s.some((C) => dv(C) === A)) {
        let C = d2.join(c, ".claude", e);
        if (!s.includes(C)) s.push(C);
      }
    }
    let [u, d, p, f] = await Promise.all([
        Kbt(o).then((A) =>
          A.map((v) => ({
            ...v,
            baseDir: o,
            source: "policySettings",
          })),
        ),
        Om("userSettings") && !(e === "agents" && VE("agents"))
          ? Kbt(r).then((A) =>
              A.map((v) => ({
                ...v,
                baseDir: r,
                source: "userSettings",
              })),
            )
          : Promise.resolve([]),
        Om("projectSettings") && !(e === "agents" && VE("agents"))
          ? Promise.all(
              s.map((A) =>
                Kbt(A).then((v) =>
                  v.map((C) => ({
                    ...C,
                    baseDir: A,
                    source: "projectSettings",
                  })),
                ),
              ),
            )
          : Promise.resolve([]),
        Om("projectSettings") && !(e === "agents" && VE("agents"))
          ? Promise.all(
              a.map((A) =>
                Kbt(A).then((v) =>
                  v.map((C) => ({
                    ...C,
                    baseDir: A,
                    source: "projectSettings",
                    fromAdditionalDirectory: true,
                  })),
                ),
              ),
            )
          : Promise.resolve([]),
      ]),
      m = p.flat(),
      g = f.flat(),
      h = [...u, ...d, ...g, ...m],
      y = await Promise.all(h.map((A) => grm(A.filePath))),
      b = new Map(),
      _ = [];
    for (let [A, v] of h.entries()) {
      let C = y[A] ?? null;
      if (C === null) {
        _.push(v);
        continue;
      }
      let x = b.get(C);
      if (x !== void 0) {
        T(
          `Skipping duplicate file '${v.filePath}' from ${v.source} (same inode already loaded from ${x})`,
        );
        continue;
      }
      (b.set(C, v.source), _.push(v));
    }
    let S = h.length - _.length;
    if (S > 0) T(`Deduplicated ${S} files in ${e} (same inode via symlinks or hard links)`);
    return (
      G("tengu_dir_search", {
        durationMs: Date.now() - n,
        managedFilesFound: u.length,
        userFilesFound: d.length,
        projectFilesFound: m.length,
        projectDirsSearched: s.length,
        subdir: $e(e),
      }),
      _
    );
  },
  (e, t) => `${e}:${t}`,
);
var $lc, Olc;
