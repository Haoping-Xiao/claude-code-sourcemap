// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NKe
// matched 2.1.88 source: src/commands/plugin/PluginErrors.tsx
// class=new  jaccard=0.0202  score=0.1817  fileCov=0.0222
// note: nearest: src/commands/plugin/PluginErrors.tsx (0.0202); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var NKe = E(() => {
  Lo();
  je();
  At();
  vn();
  dr();
  KPn();
  _k();
  lE();
  $g();
  vfe();
  ZC();
  m2l = require("path");
});
async function MHe(e) {
  let t = new Map();
  for (let a of e) {
    if (a.type !== "dependency-unsatisfied" || a.reason !== "not-found") continue;
    let l = t.get(a.dependency);
    if (!l) l = new Set(), t.set(a.dependency, l);
    l.add(a.source);
  }
  if (t.size === 0) return {
    installed: [],
    stillUnresolved: [],
    marketplaceMissing: []
  };
  let n = await wP(),
    r = dNf.map(a => [a, rWe(KD(a))]),
    o = [],
    s = [],
    i = [];
  for (let [a, l] of t) {
    let c = Qo(a).marketplace;
    if (!c || !n[c]) {
      s.push(a), i.push(a);
      continue;
    }
    if (!_H(n[c].source)) {
      T(`resolveMissingDependencies: skipping "${a}" \u2014 marketplace "${c}" is blocked by enterprise policy`), s.push(a);
      continue;
    }
    let u = !1;
    for (let d of l) {
      let p = Qo(d).marketplace;
      if (p === c) {
        u = !0;
        break;
      }
      if (!p) continue;
      if ((await Iq(p))?.allowCrossMarketplaceDependenciesOn?.includes(c)) {
        u = !0;
        break;
      }
    }
    if (!u) {
      T(`resolveMissingDependencies: skipping "${a}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`), s.push(a);
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
          requiredByEnabledDependent: !0
        });
      if (f.ok) {
        for (let m of f.closure) if (!o.includes(m)) o.push(m);
      } else T(`resolveMissingDependencies: install of "${a}" did not complete (${f.reason})`, {
        level: "warn"
      }), s.push(a);
    } catch (d) {
      T(`resolveMissingDependencies: install of "${a}" threw: ${be(d)}`, {
        level: "warn"
      }), s.push(a);
    }
  }
  return {
    installed: o,
    stillUnresolved: s,
    marketplaceMissing: i
  };
}
async function $Bo(e) {
  let {
    errors: t
  } = await mp();
  return t.filter(neo).filter(n => n.source === e);
}
async function $Et(e) {
  let t = await $Bo(e);
  if (t.length === 0) return null;
  let {
      installed: n,
      marketplaceMissing: r
    } = await MHe(t),
    o = new Set(n),
    s = Uo(t.map(i => i.dependency)).filter(i => !o.has(i));
  return {
    suffix: `${rue(n)}${YKi(s, r)}`,
    changed: n.length > 0
  };
}
function pNf(e, t) {
  for (let [n, r] of t) for (let o of e) if (r.has(o)) return n;
  return;
}
var dNf;