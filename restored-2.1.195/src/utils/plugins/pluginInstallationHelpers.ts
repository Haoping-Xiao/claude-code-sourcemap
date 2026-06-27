// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OYt
// matched 2.1.88 source: src/utils/plugins/pluginInstallationHelpers.ts
// class=modified  jaccard=0.2913  score=0.3876  fileCov=0.5396
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OYt] deps: je, Bi, gM, Mx, iWe
((RRl = require("crypto")), (uer = R(Uj(), 1)));
function ORl() {
  return new Date().toISOString();
}
function validatePathWithinBase(e, t) {
  let n = xq.resolve(e, t),
    r = xq.resolve(e) + xq.sep;
  if (!n.startsWith(r) && n !== xq.resolve(e))
    throw Error(`Path traversal detected: "${t}" would escape the base directory`);
  return n;
}
async function cacheAndRegisterPlugin(e, t, n = "user", r, o, s, i, a) {
  let l = typeof t.source === "string" && o ? o : t.source,
    c =
      s &&
      typeof l === "object" &&
      (l.source === "github" || l.source === "url" || l.source === "git-subdir")
        ? {
            ...l,
            ref: s.ref,
            sha: s.sha,
          }
        : l,
    u = await USt(c, {
      manifest: t,
      containmentRoot: typeof t.source === "string" && o ? a : void 0,
    }),
    d = o || u.path,
    p = s?.sha ?? u.gitCommitSha ?? (await ier(d)),
    f = ORl(),
    m = await lse(e, t.source, u.manifest, d, t.version, s?.sha ?? u.gitCommitSha),
    g = s && (u.manifest.version || t.version) ? `${m}-${s.sha.substring(0, 12)}` : m,
    h = BN(e, g),
    y = u.path;
  if (u.path !== h) {
    (await qt().mkdir(xq.dirname(h)),
      await BSt.rm(h, {
        recursive: !0,
        force: !0,
      }));
    let _ = u.path.endsWith(xq.sep) ? u.path : u.path + xq.sep;
    if (h.startsWith(_)) {
      let A = xq.join(
        xq.dirname(u.path),
        `.claude-plugin-temp-${Date.now()}-${$Rl.randomBytes(4).toString("hex")}`,
      );
      (await BSt.rename(u.path, A), await qt().mkdir(xq.dirname(h)), await BSt.rename(A, h));
    } else await BSt.rename(u.path, h);
    y = h;
  }
  let b = await cer(y);
  if (b.error)
    T(`Plugin dependency install warning for ${e}: ${b.error}`, {
      level: "warn",
    });
  if (az()) {
    let _ = SOe(e, g);
    (await JZn(y, _), (y = _));
  }
  if (s && u.manifest.version && s.version !== u.manifest.version)
    T(
      `Tag ${s.ref} resolved to a commit whose plugin.json says version ${u.manifest.version} \u2014 using tag-derived ${s.version} for constraint checks`,
      {
        level: "warn",
      },
    );
  return (
    C$o(
      e,
      {
        version: g,
        installedAt: f,
        lastUpdated: f,
        installPath: y,
        gitCommitSha: p,
        ...(s && {
          resolvedVersion: s.version,
        }),
        ...(i && {
          auto: !0,
        }),
      },
      n,
      r,
    ),
    {
      path: y,
      depConstraints: u.depConstraints,
      dependencies: u.manifest.dependencies,
      defaultEnabled: u.manifest.defaultEnabled,
    }
  );
}
function NRl(e, t = "user", n) {
  let r = ORl();
  C$o(
    e.pluginId,
    {
      version: e.version || "unknown",
      installedAt: r,
      lastUpdated: r,
      installPath: e.installPath,
    },
    t,
    n,
  );
}
function formatResolutionError(e) {
  switch (e.reason) {
    case "cycle":
      return `Dependency cycle: ${e.chain.join(" \u2192 ")}`;
    case "cross-marketplace": {
      let t = Qo(e.dependency).marketplace,
        n = t ? `marketplace "${t}"` : "a different marketplace",
        r = t
          ? ` Add "${t}" to allowCrossMarketplaceDependenciesOn in the ROOT marketplace's marketplace.json (the marketplace of the plugin you're installing \u2014 only its allowlist applies; no transitive trust).`
          : "";
      return `Dependency "${e.dependency}" (required by ${e.requiredBy}) is in ${n}, which is not in the allowlist \u2014 cross-marketplace dependencies are blocked by default. Install it manually first.${r}`;
    }
    case "not-found": {
      let { marketplace: t } = Qo(e.missing);
      return t
        ? `Dependency "${e.missing}" (required by ${e.requiredBy}) not found. Is the "${t}" marketplace added?`
        : `Dependency "${e.missing}" (required by ${e.requiredBy}) not found in any configured marketplace`;
    }
  }
}
async function BRl(e, t, n, { deleteDataDir: r = !0 } = {}) {
  if (e.size === 0) return [];
  let o = BL().plugins,
    s = [],
    i = [];
  for (let d of e) {
    let p = o[d],
      f = p?.find((m) => m.scope === t && m.projectPath === n);
    if (!f) continue;
    if ((aer(d, t, n), i.push(d), (p?.length ?? 0) <= 1))
      s.push({
        id: d,
        installPath: f.installPath,
      });
  }
  if (i.length === 0) return [];
  let a = KD(t),
    c = {
      ...yn(a)?.enabledPlugins,
    };
  for (let d of i) c[d] = void 0;
  let { error: u } = io(a, {
    enabledPlugins: c,
  });
  if (u) T(`pruneOrphanedAutoDeps: settings write failed at ${t}: ${u.message}`);
  Ah();
  for (let { id: d, installPath: p } of s) if ((await pOe(p), await Cdt(d), r)) await Sct(d);
  return (Slt(s.map((d) => d.id)), i);
}
async function URl(e, t) {
  let n = KD(t);
  if (!rWe(n).has(e)) return !1;
  let r = t !== "user" ? $t() : void 0,
    o = BL().plugins[e]?.find((s) => s.scope === t && s.projectPath === r);
  if (!o) return !1;
  try {
    return (await qt().stat(o.installPath), !0);
  } catch (s) {
    if (Vo(s)) return !1;
    throw s;
  }
}
function mer(e, t) {
  let n = Qo(e).marketplace,
    r = n ? t[n]?.source : void 0;
  return r && !_H(r) ? n : void 0;
}
async function yxf(e) {
  let t = [];
  for (let n of e.rootManifestDeps ?? []) {
    let r = KM(n, e.pluginId);
    if (e.closureSet.has(r) || (e.alreadyEnabled.has(r) && !e.forceInclude.has(r))) continue;
    let o = Qo(r).marketplace;
    if (
      o !== e.rootMarketplace &&
      !(o && e.allowedCrossMarketplaces.has(o)) &&
      !e.alreadyEnabled.has(r)
    ) {
      T(
        `${e.pluginId} plugin.json declares dependency "${r}" in a different marketplace; not auto-installing \u2014 install it manually`,
        {
          level: "warn",
        },
      );
      continue;
    }
    if (GI(r))
      return {
        ok: !1,
        blockedDependency: r,
      };
    let s = mer(r, e.knownMarketplaces);
    if (s)
      return {
        ok: !1,
        blockedDependency: r,
        blockedMarketplace: s,
      };
    let i = await EL(r);
    if (!i) {
      T(
        `${e.pluginId} plugin.json declares dependency "${r}" not found in any known marketplace; not auto-installing`,
        {
          level: "warn",
        },
      );
      continue;
    }
    (e.depInfo.set(r, i), t.push(r));
  }
  return {
    ok: !0,
    ids: t,
  };
}
function PRl({
  closure: e,
  rootId: t,
  rootRequiredByDependent: n,
  priorEnabled: r,
  explicitAnywhere: o,
  defaultsById: s,
  dependenciesById: i,
}) {
  let a = new Set(e),
    l = new Set();
  for (let u of e) {
    let d = r[u],
      p = s.get(u) ?? !0;
    if (d !== void 0) {
      if (d !== !1 || p) l.add(u);
      continue;
    }
    if (o.has(u) || p || (u === t && n)) l.add(u);
  }
  let c = [...l];
  while (c.length > 0) {
    let u = c.pop();
    if (u === void 0) break;
    for (let d of i.get(u) ?? []) if (a.has(d) && !l.has(d)) (l.add(d), c.push(d));
  }
  return new Map(e.map((u) => [u, l.has(u)]));
}
async function installResolvedPlugin({
  pluginId: e,
  entry: t,
  scope: n,
  marketplaceInstallLocation: r,
  trigger: o,
  auto: s,
  requiredByEnabledDependent: i,
}) {
  let a = KD(n);
  if (GI(e))
    return {
      ok: !1,
      reason: "blocked-by-policy",
      pluginName: t.name,
    };
  let l = await wP(),
    c = mer(e, l);
  if (c)
    return {
      ok: !1,
      reason: "marketplace-blocked-by-policy",
      pluginName: t.name,
      marketplaceName: c,
    };
  let u = new Map();
  if (eLt(t.source) && !r)
    return {
      ok: !1,
      reason: "local-source-no-location",
      pluginName: t.name,
    };
  if (r)
    u.set(e, {
      entry: t,
      marketplaceInstallLocation: r,
    });
  let d = Qo(e).marketplace,
    p = new Set((d ? (await Iq(d))?.allowCrossMarketplaceDependenciesOn : void 0) ?? []),
    f = n !== "user" ? $t() : void 0,
    m = BL().plugins,
    g = new Set();
  for (let me of rWe(a)) if (m[me]?.some((pe) => pe.scope === n && pe.projectPath === f)) g.add(me);
  let h = await mp(),
    y = h.enabled.concat(h.disabled),
    b = new Map();
  for (let me of y) b.set(me.source, me.resolvedVersion ?? me.manifest.version);
  let _ = yn(a)?.enabledPlugins,
    S = new Set();
  for (let me of y) {
    if (!me.depConstraints) continue;
    for (let [pe, ge] of me.depConstraints) {
      if (ge.version === void 0) continue;
      let he = KM(pe, me.source);
      if (Array.isArray(_?.[he])) continue;
      if (GI(he) || mer(he, l)) {
        T(
          `installResolvedPlugin: ${he} version-unsatisfied but policy-blocked; not force-including`,
        );
        continue;
      }
      if (!QPn(b.get(he), ge.version)) S.add(he);
    }
  }
  let A = await WKi(
    e,
    async (me) => {
      if (u.has(me)) return u.get(me).entry;
      if (me === e) return t;
      let pe = await EL(me);
      if (pe) u.set(me, pe);
      return pe?.entry ?? null;
    },
    g,
    p,
    S,
  );
  if (!A.ok)
    return {
      ok: !1,
      reason: "resolution-failed",
      resolution: A,
    };
  for (let me of A.closure) {
    if (me === e || g.has(me)) continue;
    if (GI(me))
      return {
        ok: !1,
        reason: "dependency-blocked-by-policy",
        pluginName: t.name,
        blockedDependency: me,
      };
    let pe = mer(me, l);
    if (pe)
      return {
        ok: !1,
        reason: "dependency-marketplace-blocked-by-policy",
        pluginName: t.name,
        blockedDependency: me,
        marketplaceName: pe,
      };
  }
  let v = {
      ...(yn(a)?.enabledPlugins ?? {}),
    },
    C = {};
  for (let me of $w()) Object.assign(C, yn(me)?.enabledPlugins ?? {});
  let x = new Set(Object.keys(C).filter((me) => C[me] !== void 0)),
    I = Qo(e).name,
    k =
      i === !0 ||
      y.some((me) => {
        if (me.source === e) return !1;
        let pe = C[me.source];
        return (
          (pe !== void 0 ? pe === !0 || Array.isArray(pe) : me.manifest.defaultEnabled !== !1) &&
          (me.manifest.dependencies ?? []).some((he) => {
            let ie = KM(he, me.source);
            return Qo(ie).marketplace ? ie === e : ie === I;
          })
        );
      });
  function D(me) {
    return me === e ? t : u.get(me)?.entry;
  }
  let P = new Map(),
    O = new Map();
  for (let me of A.closure) {
    let pe = D(me);
    (P.set(me, pe?.defaultEnabled ?? !0),
      O.set(
        me,
        (pe?.dependencies ?? []).map((ge) => KM(ge, me)),
      ));
  }
  let L = PRl({
      closure: A.closure,
      rootId: e,
      rootRequiredByDependent: k,
      priorEnabled: v,
      explicitAnywhere: x,
      defaultsById: P,
      dependenciesById: O,
    }),
    M = new Map(),
    N = {};
  for (let me of A.closure) {
    let pe = v[me];
    ((N[me] = Array.isArray(pe) ? pe : (L.get(me) ?? !0)), M.set(me, N[me]));
  }
  let { error: B } = io(a, {
    enabledPlugins: {
      ...v,
      ...N,
    },
  });
  if (B)
    return {
      ok: !1,
      reason: "settings-write-failed",
      message: B.message,
    };
  function $(me) {
    return eLt(me.entry.source)
      ? validatePathWithinBase(me.marketplaceInstallLocation, me.entry.source)
      : void 0;
  }
  let q = new Set(),
    W = A.closure;
  function V() {
    let me = {};
    for (let ge of W)
      me[ge] = ge === e && q.has(ge) && !Array.isArray(v[ge]) ? (L.get(e) ?? !0) : v[ge];
    let { error: pe } = io(a, {
      enabledPlugins: me,
    });
    if (pe)
      T(
        `Failed to roll back enabledPlugins after install failure for ${e}: ${pe.message}. Retry may skip un-cached deps; manually disable then reinstall to recover.`,
        {
          level: "error",
        },
      );
  }
  let Y,
    z = new Map(),
    K = new Map();
  try {
    if (!u.has(e)) {
      let ye = (await EL(e))?.marketplaceInstallLocation;
      if (ye)
        u.set(e, {
          entry: t,
          marketplaceInstallLocation: ye,
        });
    }
    let me = new Set(W),
      pe = new Map();
    for (let ye of y) {
      if (!ye.depConstraints) continue;
      if (me.has(ye.source)) continue;
      for (let [ue, we] of ye.depConstraints) {
        if (we.version === void 0) continue;
        let Ce = KM(ue, ye.source),
          Ie = pe.get(Ce);
        if (Ie) Ie.push(we.version);
        else pe.set(Ce, [we.version]);
      }
    }
    let ge = new Map(),
      he = new Map();
    async function ie(ye) {
      let ue = u.get(ye);
      if (!ue)
        return {
          ok: !0,
          dependencies: void 0,
        };
      let we = [...(ge.get(ye) ?? []), ...(pe.get(ye) ?? [])],
        Ce,
        Ie = ue.entry;
      if (we.length > 0) {
        let Ze = cFt(we);
        if (!Ze.ok)
          return {
            ok: !1,
            reason: "range-conflict",
            dep: ye,
            ranges: we,
            why: Ze.reason,
          };
        if (Ze.range !== "*") {
          let Be = der(ue.entry.source),
            Me = l[Qo(ye).marketplace ?? ""]?.source,
            Ue = Be === null && typeof ue.entry.source === "string",
            tt = Ue ? $Yt(Me) : Be;
          if (tt !== null) {
            let bt = await fer(tt, ue.entry.name, Ze.range, he);
            if (bt === null && !Ue)
              return {
                ok: !1,
                reason: "no-matching-tag",
                dep: ye,
                range: Ze.range,
              };
            if (bt === null)
              T(
                `materializeOne(${ye}): no ${ue.entry.name}--v* tag satisfying ${Ze.range} on marketplace repo; falling through to HEAD copy`,
              );
            else if (((Ce = bt), Ue && typeof ue.entry.source === "string")) {
              let Ke = per(Me, ue.entry.source);
              if (Ke !== null)
                Ie = {
                  ...ue.entry,
                  source: Ke,
                };
            }
          }
        }
      }
      let Ve = await cacheAndRegisterPlugin(
        ye,
        Ie,
        n,
        f,
        $({
          ...ue,
          entry: Ie,
        }),
        Ce,
        s === !0 || ye !== e,
        ue.marketplaceInstallLocation,
      );
      (q.add(ye), z.set(ye, Ve.defaultEnabled), K.set(ye, Ve.dependencies ?? []));
      for (let [Ze, Be] of Ve.depConstraints ?? []) {
        if (Be.version === void 0) continue;
        let Me = KM(Ze, ye),
          Ue = ge.get(Me);
        if (Ue) Ue.push(Be.version);
        else ge.set(Me, [Be.version]);
      }
      return {
        ok: !0,
        dependencies: Ve.dependencies ?? [],
      };
    }
    for (let ye = A.closure.length - 1; ye >= 0; ye--) {
      let ue = A.closure[ye];
      if (ue === void 0) continue;
      let we = ue !== e && g.has(ue),
        Ce;
      try {
        Ce = await ie(ue);
      } catch (Ie) {
        if (we) {
          T(
            `installResolvedPlugin: force-included ${ue} fetch threw (${Ie instanceof Error ? Ie.message : String(Ie)}); skipping (pinner stays demoted)`,
          );
          continue;
        }
        throw Ie;
      }
      if (!Ce.ok) {
        if (we) {
          T(
            Ce.reason === "range-conflict"
              ? `installResolvedPlugin: force-included ${ue} has disjoint pinner ranges ${Ce.ranges.join(", ")}; skipping (pinner stays demoted)`
              : `installResolvedPlugin: force-included ${ue} has no tag satisfying ${Ce.range}; skipping (pinner stays demoted)`,
          );
          continue;
        }
        return (V(), Ce);
      }
      if (ue === e) Y = Ce.dependencies;
    }
    let le = new Set((Y ?? []).map((ye) => KM(ye, e)));
    for (let [ye, ue] of ge) {
      if (me.has(ye) || (S.has(ye) && le.has(ye)) || !g.has(ye)) continue;
      let we = ue.concat(pe.get(ye) ?? []),
        Ce = cFt(we);
      if (!Ce.ok)
        return (
          V(),
          {
            ok: !1,
            reason: "range-conflict",
            dep: ye,
            ranges: we,
            why: Ce.reason,
          }
        );
      let Ie = b.get(ye);
      if (Ce.range !== "*" && !QPn(Ie, Ce.range))
        return (
          V(),
          {
            ok: !1,
            reason: "range-conflict",
            dep: ye,
            ranges: we,
            why: "installed-unsatisfied",
            installed: Ie,
          }
        );
    }
    let He = [
      {
        manifestDeps: Y,
        declaringId: e,
      },
    ];
    while (He.length > 0) {
      let ye = [];
      for (let { manifestDeps: Ie, declaringId: Ve } of He) {
        let Ze = await yxf({
          rootManifestDeps: Ie,
          pluginId: Ve,
          closureSet: me,
          alreadyEnabled: g,
          forceInclude: S,
          rootMarketplace: d,
          allowedCrossMarketplaces: p,
          knownMarketplaces: l,
          depInfo: u,
        });
        if (!Ze.ok) {
          if ((V(), Ze.blockedMarketplace))
            return {
              ok: !1,
              reason: "dependency-marketplace-blocked-by-policy",
              pluginName: t.name,
              blockedDependency: Ze.blockedDependency,
              marketplaceName: Ze.blockedMarketplace,
            };
          return {
            ok: !1,
            reason: "dependency-blocked-by-policy",
            pluginName: t.name,
            blockedDependency: Ze.blockedDependency,
          };
        }
        for (let Be of Ze.ids) {
          if (me.has(Be)) continue;
          (me.add(Be), W.push(Be), ye.push(Be));
        }
      }
      if (ye.length === 0) break;
      let ue = {};
      for (let Ie of ye) ((ue[Ie] = !0), M.set(Ie, !0));
      let { error: we } = io(a, {
        enabledPlugins: {
          ...(yn(a)?.enabledPlugins ?? {}),
          ...ue,
        },
      });
      if (we)
        return (
          V(),
          {
            ok: !1,
            reason: "settings-write-failed",
            message: we.message,
          }
        );
      let Ce = [];
      for (let Ie of ye) {
        let Ve = g.has(Ie),
          Ze;
        try {
          Ze = await ie(Ie);
        } catch (Be) {
          if (Ve) {
            T(
              `installResolvedPlugin: force-included ${Ie} fetch threw (${Be instanceof Error ? Be.message : String(Be)}); skipping (pinner stays demoted)`,
            );
            continue;
          }
          throw Be;
        }
        if (!Ze.ok) {
          if (Ve) {
            T(
              `installResolvedPlugin: force-included ${Ie} ${Ze.reason}; skipping (pinner stays demoted)`,
            );
            continue;
          }
          return (V(), Ze);
        }
        Ce.push({
          manifestDeps: Ze.dependencies,
          declaringId: Ie,
        });
      }
      He = Ce;
    }
  } catch (me) {
    throw (V(), me);
  }
  if (Y !== void 0) {
    let me = new Set(Y.map((pe) => KM(pe, e)));
    for (let pe of t.dependencies ?? []) {
      let ge = KM(pe, e);
      if (!me.has(ge))
        T(
          `Marketplace entry for ${e} lists dependency "${pe}" not present in plugin.json \u2014 catalog may be stale`,
        );
    }
  }
  let Z = new Map(),
    J = new Map();
  for (let me of W) {
    let pe = D(me);
    Z.set(me, pe?.defaultEnabled ?? z.get(me) ?? !0);
    let ge = (pe?.dependencies ?? []).map((he) => KM(he, me));
    for (let he of K.get(me) ?? []) ge.push(KM(he, me));
    J.set(me, ge);
  }
  let ne = PRl({
      closure: W,
      rootId: e,
      rootRequiredByDependent: k,
      priorEnabled: v,
      explicitAnywhere: x,
      defaultsById: Z,
      dependenciesById: J,
    }),
    oe = {};
  for (let me of W) {
    let pe = v[me],
      ge = ne.get(me) ?? !0;
    if (pe !== void 0 && pe !== ge) continue;
    if (M.get(me) !== ge) oe[me] = ge;
  }
  let re = !0;
  if (Object.keys(oe).length > 0) {
    let { error: me } = io(a, {
      enabledPlugins: {
        ...(yn(a)?.enabledPlugins ?? {}),
        ...oe,
      },
    });
    if (me)
      ((re = !1),
        T(`Failed to apply defaultEnabled correction for ${e}: ${me.message}`, {
          level: "warn",
        }));
  }
  let ee = W.filter((me) => ne.get(me) === !1 && (re || M.get(me) === !1));
  Ah();
  let ce = Qo(e).marketplace,
    ae = zD(ce),
    de = ae || sg();
  Jc("plugin_installed", {
    ...(de && {
      "plugin.name": t.name,
    }),
    ...(de &&
      t.version && {
        "plugin.version": t.version,
      }),
    ...(de &&
      ce && {
        "marketplace.name": ce,
      }),
    "marketplace.is_official": String(ae),
    ...(o && {
      "install.trigger": o,
    }),
    ...(ee.includes(e) && {
      "install.disabled_by_default": "true",
    }),
  });
  let Ee = rue([...q].filter((me) => me !== e));
  return {
    ok: !0,
    closure: A.closure,
    depNote: Ee,
    installedDisabled: ee,
  };
}
function MRl({ reason: e, errorKind: t, pluginId: n, entry: r, marketplaceName: o, trigger: s }) {
  G("tengu_plugin_install_failed", {
    reason: $e(e),
    ...(t && {
      error_kind: $e(t),
    }),
    ...x8(r.name, o, R0()),
    plugin_id: ceo(o) ? n : "third-party",
    trigger: $e(s),
    install_source: We(s === "hint" ? "ui-suggestion" : "ui-discover"),
    ...(r.version && {
      version: tS(r.version),
    }),
  });
}
async function installPluginFromMarketplace({
  pluginId: e,
  entry: t,
  marketplaceName: n,
  scope: r = "user",
  trigger: o = "user",
}) {
  try {
    let i = (await EL(e))?.marketplaceInstallLocation,
      a = await installResolvedPlugin({
        pluginId: e,
        entry: t,
        scope: r,
        marketplaceInstallLocation: i,
        trigger: "ui",
      });
    if (!a.ok)
      switch (
        (MRl({
          reason: a.reason,
          pluginId: e,
          entry: t,
          marketplaceName: n,
          trigger: o,
        }),
        a.reason)
      ) {
        case "local-source-no-location":
          return {
            success: !1,
            error: `Cannot install local plugin "${a.pluginName}" without marketplace install location`,
          };
        case "settings-write-failed":
          return {
            success: !1,
            error: `Failed to update settings: ${a.message}`,
          };
        case "resolution-failed":
          return {
            success: !1,
            error: formatResolutionError(a.resolution),
          };
        case "blocked-by-policy":
          return {
            success: !1,
            error: `Plugin "${a.pluginName}" is blocked by your organization's policy and cannot be installed`,
          };
        case "dependency-blocked-by-policy":
          return {
            success: !1,
            error: `Cannot install "${a.pluginName}": dependency "${a.blockedDependency}" is blocked by your organization's policy`,
          };
        case "marketplace-blocked-by-policy":
          return {
            success: !1,
            error: `Cannot install "${a.pluginName}": marketplace "${a.marketplaceName}" is blocked by your organization's policy`,
          };
        case "dependency-marketplace-blocked-by-policy":
          return {
            success: !1,
            error: `Cannot install "${a.pluginName}": dependency "${a.blockedDependency}" is from marketplace "${a.marketplaceName}", which is blocked by your organization's policy`,
          };
        case "range-conflict": {
          let c = a.dep === e ? "Plugin" : "Dependency";
          return {
            success: !1,
            error: uFt(c, a.dep, a.ranges, a.why, a.installed),
          };
        }
        case "no-matching-tag": {
          let c = a.dep === e ? "Plugin" : "Dependency";
          return {
            success: !1,
            error: JPn(c, a.dep, a.range),
          };
        }
      }
    G("tengu_plugin_installed", {
      ...x8(t.name, n, R0()),
      plugin_id: ceo(n) ? e : "third-party",
      trigger: $e(o),
      install_source: We(o === "hint" ? "ui-suggestion" : "ui-discover"),
      ...(t.version && {
        version: tS(t.version),
      }),
    });
    let l = xy("plugin enable", e);
    return {
      success: !0,
      message: a.installedDisabled.includes(e)
        ? `\u2713 Installed ${t.name}${a.depNote}. This plugin is disabled by default \u2014 enable it in /plugin${l ? ` or run: ${l}` : ""}`
        : `\u2713 Installed ${t.name}${a.depNote}. Run /reload-plugins to activate.`,
      depNote: a.depNote,
      installedDisabled: a.installedDisabled.includes(e),
    };
  } catch (s) {
    let i = s instanceof Error ? s.message : String(s);
    return (
      T(`installPluginFromMarketplace failed for ${e}: ${i}`, {
        level: "error",
      }),
      MRl({
        reason: "unexpected-error",
        errorKind: lX(s),
        pluginId: e,
        entry: t,
        marketplaceName: n,
        trigger: o,
      }),
      {
        success: !1,
        error: `Failed to install: ${i}`,
      }
    );
  }
}
var $Rl, BSt, xq;
