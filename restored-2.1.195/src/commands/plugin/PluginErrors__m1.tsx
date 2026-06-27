// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NKe
// matched 2.1.88 source: src/commands/plugin/PluginErrors.tsx
// class=modified (alt of src/commands/plugin/PluginErrors.tsx)  jaccard=0.0207  score=0.098  fileCov=0.0255
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NKe] deps: utils/fsOperations.ts, utils/debug.ts, utils/errors.ts, utils/sequential.ts, utils/settings/settings.ts, utils/plugins/pluginLoader.ts, utils/generatedFiles.ts, utils/plugins/installedPluginsManager.ts, utils/plugins/pluginIdentifier.ts, @opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js, utils/plugins/schemas.ts
m2l = require("path");
async function formatErrorMessage(error) {
  let t = new Map();
  for (let a of error) {
    if (a.type !== "dependency-unsatisfied" || a.reason !== "not-found") continue;
    let l = t.get(a.dependency);
    if (!l) ((l = new Set()), t.set(a.dependency, l));
    l.add(a.source);
  }
  if (t.size === 0)
    return {
      installed: [],
      stillUnresolved: [],
      marketplaceMissing: [],
    };
  let n = await wP(),
    r = dNf.map((a) => [a, rWe(KD(a))]),
    o = [],
    s = [],
    i = [];
  for (let [a, l] of t) {
    let c = Qo(a).marketplace;
    if (!c || !n[c]) {
      (s.push(a), i.push(a));
      continue;
    }
    if (!_H(n[c].source)) {
      (T(
        `resolveMissingDependencies: skipping "${a}" \u2014 marketplace "${c}" is blocked by enterprise policy`,
      ),
        s.push(a));
      continue;
    }
    let u = false;
    for (let d of l) {
      let p = Qo(d).marketplace;
      if (p === c) {
        u = true;
        break;
      }
      if (!p) continue;
      if ((await Iq(p))?.allowCrossMarketplaceDependenciesOn?.includes(c)) {
        u = true;
        break;
      }
    }
    if (!u) {
      (T(
        `resolveMissingDependencies: skipping "${a}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`,
      ),
        s.push(a));
      continue;
    }
    try {
      let d = await EL(a);
      if (!d) {
        s.push(a);
        continue;
      }
      let p = pNf(l, r),
        f = await BYt({
          pluginId: a,
          entry: d.entry,
          scope: p ?? "user",
          marketplaceInstallLocation: d.marketplaceInstallLocation,
          trigger: "dependency-resolution",
          auto: p !== void 0,
          requiredByEnabledDependent: true,
        });
      if (f.ok) {
        for (let m of f.closure) if (!o.includes(m)) o.push(m);
      } else
        (T(`resolveMissingDependencies: install of "${a}" did not complete (${f.reason})`, {
          level: "warn",
        }),
          s.push(a));
    } catch (d) {
      (T(`resolveMissingDependencies: install of "${a}" threw: ${be(d)}`, {
        level: "warn",
      }),
        s.push(a));
    }
  }
  return {
    installed: o,
    stillUnresolved: s,
    marketplaceMissing: i,
  };
}
async function $Bo(e) {
  let { errors: t } = await mp();
  return t.filter(neo).filter((n) => n.source === e);
}
async function $Et(e) {
  let t = await $Bo(e);
  if (t.length === 0) return null;
  let { installed: n, marketplaceMissing: r } = await formatErrorMessage(t),
    o = new Set(n),
    s = Uo(t.map((i) => i.dependency)).filter((i) => !o.has(i));
  return {
    suffix: `${rue(n)}${YKi(s, r)}`,
    changed: n.length > 0,
  };
}
function pNf(e, t) {
  for (let [n, r] of t) for (let o of e) if (r.has(o)) return n;
  return;
}
var dNf;
