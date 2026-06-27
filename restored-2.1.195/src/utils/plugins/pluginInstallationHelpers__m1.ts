// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YPn
// matched 2.1.88 source: src/utils/plugins/pluginInstallationHelpers.ts
// class=modified (alt of src/utils/plugins/pluginInstallationHelpers.ts)  jaccard=0.0602  score=0.1422  fileCov=0.0946
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function jKi(e) {
  if (e === null || typeof e !== "object") return;
  let t = "dependencies" in e ? e.dependencies : void 0;
  if (!Array.isArray(t)) return;
  let n = new Map();
  for (let r of t) {
    if (r === null || typeof r !== "object") continue;
    let o = "name" in r ? r.name : void 0;
    if (typeof o !== "string" || o.length === 0) continue;
    let s = "version" in r && typeof r.version === "string" ? r.version : void 0,
      i = "sha" in r && typeof r.sha === "string" ? r.sha : void 0;
    if (s === void 0 && i === void 0) continue;
    let a = "marketplace" in r && typeof r.marketplace === "string" ? r.marketplace : void 0,
      l = a ? `${o}@${a}` : o;
    n.set(l, {
      version: s,
      sha: i,
    });
  }
  return n.size > 0 ? n : void 0;
}
function KM(e, t) {
  if (Qo(e).marketplace) return e;
  let n = Qo(t).marketplace;
  if (!n || U0(n)) return e;
  return `${e}@${n}`;
}
function _eo(e) {
  return (
    T(`intersectConstraints: ${e} \u2014 treating as too complex`, {
      level: "warn",
    }),
    {
      ok: false,
      reason: "too-complex",
    }
  );
}
function cFt(e) {
  if (e.length === 0)
    return {
      ok: true,
      range: "*",
    };
  let t = 0;
  for (let i of e) t += i.length;
  if (t > FKi) return _eo(`total input ${t} chars > ${FKi}`);
  let n = [];
  for (let i of e) {
    let a = cX.validRange(i);
    if (a === null)
      return {
        ok: false,
        reason: "invalid",
      };
    n.push(
      a
        .split("||")
        .map((l) => l.trim())
        .filter(Boolean),
    );
  }
  let r = n[0] ?? [];
  if (r.length > XPn) return _eo(`${r.length} conjuncts after 1/${e.length} inputs > ${XPn}`);
  for (let i = 1; i < n.length; i++) {
    let a = n[i] ?? [],
      l = r.length * a.length;
    if (l > XPn) return _eo(`${l} conjuncts after ${i + 1}/${e.length} inputs > ${XPn}`);
    let c = [];
    for (let u of r) for (let d of a) c.push(`${u} ${d}`);
    r = c;
  }
  let o = r.filter((i) => {
    let a = cX.validRange(i);
    return a !== null && cX.minVersion(a) !== null;
  });
  if (o.length === 0)
    return {
      ok: false,
      reason: "disjoint",
    };
  let s = cX.validRange(o.join(" || "));
  return s === null
    ? {
        ok: false,
        reason: "disjoint",
      }
    : {
        ok: true,
        range: s,
      };
}
function lFt(e) {
  return Ja(e).replace(VKd, "");
}
function Seo(e) {
  if (e.length <= beo) return e;
  return `${e.slice(0, beo)}\u2026 (+${e.length - beo} chars)`;
}
function uFt(e, t, n, r, o) {
  let s = Seo(lFt(n.join(", "))),
    i = lFt(t);
  switch (r) {
    case "disjoint":
      return `${e} "${i}" has conflicting version requirements (no version satisfies all of: ${s})`;
    case "too-complex":
      return `${e} "${i}" has version requirements too complex to intersect \u2014 simplify the ranges: ${s}`;
    case "invalid":
      return `${e} "${i}" has an invalid version requirement among: ${s}`;
    case "installed-unsatisfied":
      return `${e} "${i}" is installed at ${Seo(lFt(o ?? "an unknown version"))}, which does not satisfy: ${s}`;
  }
}
function JPn(e, t, n) {
  let r = Seo(lFt(n));
  return `${e} "${lFt(t)}" has no git tag satisfying ${r}`;
}
function QPn(e, t) {
  let n = cX.valid(e) ?? cX.coerce(e)?.version;
  return n !== void 0 && cX.satisfies(n, t);
}
function GKi(e, t) {
  let n = [];
  for (let r of t) {
    if (!r.depConstraints) continue;
    for (let [o, s] of r.depConstraints)
      if (KM(o, r.source) === e) {
        n.push({
          plugin: r,
          constraint: s,
        });
        break;
      }
  }
  return n;
}
async function formatResolutionError(e, t, n, r = new Set(), o) {
  let s = Qo(e).marketplace,
    i = [],
    a = new Set(),
    l = [];
  async function c(d, p) {
    if (d !== e && n.has(d) && !o?.has(d)) return null;
    let f = Qo(d).marketplace;
    if (!n.has(d) && f !== s && !(f && r.has(f)))
      return {
        ok: false,
        reason: "cross-marketplace",
        dependency: d,
        requiredBy: p,
      };
    if (l.includes(d))
      return {
        ok: false,
        reason: "cycle",
        chain: [...l, d],
      };
    if (a.has(d)) return null;
    a.add(d);
    let m = await t(d);
    if (!m) {
      if (d !== e && n.has(d))
        return (
          T(
            `resolveDependencyClosure: force-included ${d} has no catalog entry; skipping (pinner stays demoted)`,
          ),
          null
        );
      return {
        ok: false,
        reason: "not-found",
        missing: d,
        requiredBy: p,
      };
    }
    l.push(d);
    for (let g of m.dependencies ?? []) {
      let h = KM(g, d),
        y = await c(h, d);
      if (y) return y;
    }
    return (l.pop(), i.push(d), null);
  }
  let u = await c(e, e);
  if (u) return u;
  return {
    ok: true,
    closure: i,
  };
}
function qKi(e) {
  let t = new Set(e.map((c) => c.source)),
    n = new Set(e.filter((c) => c.enabled).map((c) => c.source)),
    r = new Map(e.map((c) => [c.source, c])),
    o = new Set(e.map((c) => Qo(c.source).name)),
    s = new Map();
  for (let c of n) {
    let u = Qo(c).name;
    s.set(u, (s.get(u) ?? 0) + 1);
  }
  let i = [],
    a = true;
  while (a) {
    a = false;
    for (let c of e) {
      if (!n.has(c.source)) continue;
      for (let u of c.manifest.dependencies ?? []) {
        let d = KM(u, c.source),
          p = !Qo(d).marketplace,
          f = p ? (s.get(d) ?? 0) > 0 : n.has(d),
          m;
        if (!f)
          m = {
            type: "dependency-unsatisfied",
            source: c.source,
            plugin: c.name,
            dependency: d,
            reason: (p ? o.has(d) : t.has(d)) ? "not-enabled" : "not-found",
          };
        else if (!p) {
          let g = c.depConstraints?.get(u)?.version;
          if (g !== void 0) {
            let h = r.get(d),
              y = h?.resolvedVersion ?? h?.manifest.version;
            if (!QPn(y, g))
              m = {
                type: "dependency-version-unsatisfied",
                source: c.source,
                plugin: c.name,
                dependency: d,
                required: g,
                installed: y,
              };
          }
        }
        if (m) {
          n.delete(c.source);
          let g = Qo(c.source).name,
            h = s.get(g) ?? 0;
          if (h <= 1) s.delete(g);
          else s.set(g, h - 1);
          (i.push(m), (a = true));
          break;
        }
      }
    }
  }
  return {
    demoted: new Set(e.filter((c) => c.enabled && !n.has(c.source)).map((c) => c.source)),
    errors: i,
  };
}
function ZPn(e, t) {
  let { name: n } = Qo(e);
  return t
    .filter(
      (r) =>
        r.enabled &&
        r.source !== e &&
        (r.manifest.dependencies ?? []).some((o) => {
          let s = KM(o, r.source);
          return Qo(s).marketplace ? s === e : s === n;
        }),
    )
    .map((r) => r.name);
}
function VKi(e, t) {
  let n = new Set([e]),
    r = [],
    o = new Map();
  for (let i of t) {
    let a = o.get(i.name) ?? [];
    (a.push(i.source), o.set(i.name, a));
  }
  let s = (i) => {
    for (let a of ZPn(i, t))
      for (let l of o.get(a) ?? [a]) {
        if (n.has(l)) continue;
        (n.add(l), s(l), r.push(l));
      }
  };
  return (s(e), r);
}
function rWe(e) {
  return new Set(
    Object.entries(yn(e)?.enabledPlugins ?? {})
      .filter(([, t]) => t === true || Array.isArray(t))
      .map(([t]) => t),
  );
}
function zKi(e, t, n, r) {
  let o = new Set(),
    s = new Set();
  for (let [d, p] of Object.entries(e)) {
    let f = p.find((m) => m.scope === n && m.projectPath === r);
    if (!f) continue;
    if (f.auto === true) s.add(d);
    else o.add(d);
  }
  if (s.size === 0)
    return {
      orphans: new Set(),
      unloadable: [],
      autoCount: 0,
    };
  let i = new Map(t.map((d) => [d.source, d])),
    a = [];
  for (let d of [...o, ...s]) if (!i.has(d)) a.push(d);
  if (a.length > 0)
    return {
      orphans: new Set(),
      unloadable: a,
      autoCount: s.size,
    };
  let l = new Set();
  function c(d) {
    if (l.has(d)) return;
    l.add(d);
    let p = i.get(d);
    if (!p) return;
    for (let f of p.manifest.dependencies ?? []) c(KM(f, p.source));
  }
  for (let d of o) c(d);
  let u = new Set();
  for (let d of s) if (!l.has(d)) u.add(d);
  return {
    orphans: u,
    unloadable: [],
    autoCount: s.size,
  };
}
function KKi(e, t) {
  if (e.size === 0) return "";
  let n = [...e].map((i) => Qo(i).name),
    r = 5,
    o = n.length <= r ? n.join(", ") : `${n.slice(0, r).join(", ")}, \u2026`,
    s = t === "user" ? "" : ` --scope ${t}`;
  return `
${e.size} auto-installed ${bn(e.size, "dependency", "dependencies")} no longer needed: ${o}. Run \`claude plugin prune${s}\` to remove.`;
}
function rue(e) {
  if (e.length === 0) return "";
  let t = e.length,
    n = 5,
    r = e.map((s) => Qo(s).name),
    o = r.length <= n ? r.join(", ") : `${r.slice(0, n).join(", ")}, \u2026`;
  return ` (+ ${t} ${bn(t, "dependency", "dependencies")}: ${o})`;
}
function YKi(e, t) {
  if (e.length === 0) return "";
  let n = e.length,
    r = t.map((s) => Qo(s).marketplace).find((s) => s !== void 0),
    o =
      r !== void 0
        ? ` Is the "${r}" marketplace added?`
        : t.length > 0
          ? " Add the dependency's marketplace, then re-run install."
          : "";
  return ` \u2014 ${n} ${bn(n, "dependency", "dependencies")} still unresolved: ${e.join(", ")}.${o}`;
}
function Eeo(e) {
  if (!e || e.length === 0) return "";
  return ` \u2014 warning: required by ${e.join(", ")}`;
}
function XKi(e, t) {
  let n = new Map(t.map((c) => [c.source, c])),
    r = new Map(t.map((c) => [c.name, c])),
    o = (c) => {
      let u = n.get(c);
      if (u) return u;
      return c.includes("@") ? void 0 : r.get(c);
    },
    s = [],
    i = [],
    a = new Set([e]),
    l = (o(e)?.manifest.dependencies ?? []).map((c) => ({
      id: c,
      declaringId: e,
    }));
  while (l.length > 0) {
    let c = l.shift();
    if (!c) break;
    let u = KM(c.id, c.declaringId),
      d = o(u);
    if (!d) {
      if (!a.has(u)) (a.add(u), i.push(u));
      continue;
    }
    if (a.has(d.source)) continue;
    (a.add(d.source), s.push(d.source));
    for (let p of d.manifest.dependencies ?? [])
      l.push({
        id: p,
        declaringId: d.source,
      });
  }
  return {
    closure: s,
    missing: i,
  };
}
var cX,
  XPn = 1024,
  FKi = 4096,
  beo = 200,
  VKd;
