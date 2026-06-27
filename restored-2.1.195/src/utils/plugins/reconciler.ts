// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hDc
// matched 2.1.88 source: src/utils/plugins/reconciler.ts
// class=modified  jaccard=0.4725  score=0.8026  fileCov=0.5347
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hDc] deps: context/notifications.tsx, hooks/useTerminalSize.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, context/notifications.tsx, utils/debug.ts, commands/plugin/ManageMarketplaces.tsx
((mDc = R(lt(), 1)), (Mtn = R(rt(), 1)), ($7e = R(se(), 1)));
function MYo(e, t, n) {
  let r = [],
    o = [],
    s = [];
  for (let [i, a] of Object.entries(e)) {
    let l = t[i],
      c = yDc(a.source, n?.projectRoot);
    if (!l) r.push(i);
    else if (a.sourceIsFallback) s.push(i);
    else if (!L_(c, l.source))
      o.push({
        name: i,
        declaredSource: c,
        materializedSource: l.source,
      });
    else s.push(i);
  }
  return {
    missing: r,
    sourceChanged: o,
    upToDate: s,
  };
}
async function reconcileMarketplaces(opts) {
  let t = f3();
  if (Object.keys(t).length === 0)
    return {
      installed: [],
      updated: [],
      failed: [],
      upToDate: [],
      skipped: [],
    };
  let n;
  try {
    n = await om();
  } catch (u) {
    (T(`reconciler: failed to load known_marketplaces.json, treating as empty: ${be(u)}`, {
      level: "error",
    }),
      (n = {}));
  }
  let r = MYo(t, n, {
      projectRoot: yr(),
    }),
    o = [
      ...r.missing.map((u) => ({
        name: u,
        source: yDc(t[u].source),
        action: "install",
      })),
      ...r.sourceChanged.map(({ name: u, declaredSource: d }) => ({
        name: u,
        source: d,
        action: "update",
      })),
    ],
    s = [],
    i = [];
  for (let u of o) {
    if (opts?.skip?.(u.name, u.source)) {
      s.push(u.name);
      continue;
    }
    if (u.action === "update" && s9(u.source) && !(await ed(u.source.path))) {
      (T(`[reconcile] '${u.name}' declared path does not exist; keeping materialized entry`),
        s.push(u.name));
      continue;
    }
    i.push(u);
  }
  let a = [],
    l = [],
    c = [];
  if (i.length > 0) {
    T(
      `[reconcile] ${i.length} marketplace(s): ${i.map((u) => `${u.name}(${u.action})`).join(", ")}`,
    );
    for (let u = 0; u < i.length; u++) {
      let { name: d, source: p, action: f } = i[u];
      opts?.onProgress?.({
        type: "installing",
        name: d,
        action: f,
        index: u + 1,
        total: i.length,
      });
      try {
        let m = await yOe(p);
        if (f === "install") a.push(d);
        else l.push(d);
        opts?.onProgress?.({
          type: "installed",
          name: d,
          alreadyMaterialized: m.alreadyMaterialized,
        });
      } catch (m) {
        let g = be(m);
        (c.push({
          name: d,
          error: g,
        }),
          opts?.onProgress?.({
            type: "failed",
            name: d,
            error: g,
          }),
          T(`[reconcile] failed to ${f} marketplace '${d}': ${g}`, {
            level: "error",
          }));
      }
    }
  }
  try {
    await ERl(i.length === 0 ? n : void 0);
  } catch (u) {
    T(`reconciler: syncDeclaredAutoUpdateToJson failed: ${be(u)}`, {
      level: "error",
    });
  }
  return {
    installed: a,
    updated: l,
    failed: c,
    upToDate: r.upToDate,
    skipped: s,
  };
}
function yDc(e, t) {
  if ((e.source === "directory" || e.source === "file") && !Bfr.isAbsolute(e.path)) {
    let n = t ?? yr(),
      r = qf(n);
    return {
      ...e,
      path: Bfr.resolve(r ?? n, e.path),
    };
  }
  return e;
}
var Bfr;
