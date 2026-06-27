// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n4l
// matched 2.1.88 source: src/commands/plugin/PluginSettings.tsx
// class=modified  jaccard=0.4974  score=0.6158  fileCov=0.7211
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var n4l = E(() => {
  si();
  Ye();
  je();
  At();
  vrr();
  sr();
  ((Zjl = R(lt(), 1)), (e4l = R(rt(), 1)), (EUo = R(se(), 1)));
});
function $Bf(e) {
  let t = AXt.c(4),
    { onComplete: n } = e,
    r,
    o;
  if (t[0] !== n)
    ((r = () => {
      (async function () {
        try {
          let l = await om(),
            c = Object.keys(l);
          if (c.length === 0) n("No marketplaces configured");
          else
            n(`Configured marketplaces:
${c.map(OBf).join(`
`)}`);
        } catch (l) {
          n(`Error loading marketplaces: ${be(l)}`);
        }
      })();
    }),
      (o = [n]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o));
  else ((r = t[1]), (o = t[2]));
  UT.useEffect(r, o);
  let s;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((s = oa.jsx(w, {
      children: "Loading marketplaces...",
    })),
      (t[3] = s));
  else s = t[3];
  return s;
}
function OBf(e) {
  return `  \u2022 ${e}`;
}
function NBf(e) {
  let t = AXt.c(8),
    { onComplete: n, filter: r } = e,
    o = Ht(jBf),
    s = Ht(FBf),
    i = Ht(UBf),
    a,
    l;
  if (t[0] !== s || t[1] !== r || t[2] !== i || t[3] !== o || t[4] !== n)
    ((a = () => {
      let u = ex(),
        d = Object.keys(u.plugins).sort();
      if (d.length === 0) {
        n("No plugins installed. Use `/plugin install` to install a plugin.");
        return;
      }
      let p = Ese(),
        f = new Set(s.map(BBf)),
        m = ["Installed plugins:"],
        g = 0;
      for (let h of d) {
        let y = bi(h, "@"),
          b = p.has(h);
        if (r !== void 0 && (r === "enabled") !== b) continue;
        let _ = o.some((C) => C.source === h || ("plugin" in C && C.plugin === y)),
          S = _ ? `${nt.cross} failed to load` : b ? `${nt.tick} enabled` : `${nt.cross} disabled`,
          A = !_ && b !== f.has(h) ? " \u2014 run /reload-plugins to apply" : "",
          v = (s.find((C) => C.source === h) ?? i.find((C) => C.source === h))?.manifest.version;
        for (let C of u.plugins[h] ?? []) {
          let x = ler(C.version, v),
            I = x ? `${x}, ${C.scope}` : C.scope;
          (m.push(`  \u2022 ${h} (${I}) ${S}${A}`), g++);
        }
      }
      if (g === 0) {
        n(`No ${r} plugins.`);
        return;
      }
      n(
        m.join(`
`),
      );
    }),
      (l = [n, o, s, i, r]),
      (t[0] = s),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = n),
      (t[5] = a),
      (t[6] = l));
  else ((a = t[5]), (l = t[6]));
  UT.useEffect(a, l);
  let c;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((c = oa.jsx(w, {
      children: "Loading plugins...",
    })),
      (t[7] = c));
  else c = t[7];
  return c;
}
function BBf(e) {
  return e.source;
}
function UBf(e) {
  return e.plugins.disabled;
}
function FBf(e) {
  return e.plugins.enabled;
}
function jBf(e) {
  return e.plugins.errors;
}
function GBf() {
  return null;
}
function WBf() {
  let e = AXt.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((t = oa.jsx(U, {
      marginTop: 1,
      children: oa.jsx(qk, {
        status: "info",
        children: "Skills are now managed here under the Skills section.",
      }),
    })),
      (e[0] = t));
  else t = e[0];
  return t;
}
function AUo(e) {
  let t = [],
    n = [
      {
        source: "userSettings",
        scope: "user",
      },
      {
        source: "projectSettings",
        scope: "project",
      },
      {
        source: "localSettings",
        scope: "local",
      },
    ];
  for (let { source: s, scope: i } of n)
    if (yn(s)?.extraKnownMarketplaces?.[e])
      t.push({
        source: s,
        scope: i,
      });
  let r = yn("policySettings"),
    o = Boolean(r?.extraKnownMarketplaces?.[e]);
  return {
    editableSources: t,
    isInPolicy: o,
  };
}
function r4l(e) {
  let { editableSources: t, isInPolicy: n } = AUo(e);
  if (t.length > 0)
    return {
      kind: "remove-extra-marketplace",
      name: e,
      sources: t,
    };
  if (n)
    return {
      kind: "managed-only",
      name: e,
    };
  return {
    kind: "navigate",
    tab: "marketplaces",
    viewState: {
      type: "manage-marketplaces",
      targetMarketplace: e,
      action: "remove",
    },
  };
}
function qBf(e) {
  return {
    kind: "navigate",
    tab: "installed",
    viewState: {
      type: "manage-plugins",
      targetPlugin: e,
      action: "uninstall",
    },
  };
}
function Irr(e) {
  if (VBf.has(e.type)) return !0;
  if (e.type === "marketplace-load-failed" && e.reason === "cache-miss") return !0;
  if (e.type === "marketplace-not-found") return !0;
  return !1;
}
function HUo(e) {
  if ("pluginId" in e && e.pluginId) return e.pluginId;
  if ("plugin" in e && e.plugin) return e.plugin;
  if (e.source.includes("@")) return bi(e.source, "@");
  return;
}
function zBf(e, t, n, r, o, s, i, a) {
  let l = [];
  for (let d of s) {
    let p = "pluginId" in d ? d.pluginId : "plugin" in d ? d.plugin : void 0;
    l.push({
      label: p ?? d.source,
      message: a1e(d),
      guidance: FKe(d) ?? "Restart to retry loading plugins",
      action: {
        kind: "none",
      },
    });
  }
  let c = new Set();
  for (let d of e) {
    c.add(d.name);
    let p = r4l(d.name),
      f = AUo(d.name),
      m = f.isInPolicy ? "managed" : f.editableSources[0]?.scope;
    l.push({
      label: d.name,
      message: d.error ?? "Installation failed",
      guidance:
        p.kind === "managed-only"
          ? "Managed by your organization \u2014 contact your admin"
          : void 0,
      action: p,
      scope: m,
    });
  }
  for (let d of t) {
    let p = "marketplace" in d ? d.marketplace : d.source;
    if (c.has(p)) continue;
    c.add(p);
    let f = r4l(p),
      m = AUo(p),
      g = m.isInPolicy ? "managed" : m.editableSources[0]?.scope;
    l.push({
      label: p,
      message: a1e(d),
      guidance:
        f.kind === "managed-only"
          ? "Managed by your organization \u2014 contact your admin"
          : FKe(d),
      action: f,
      scope: g,
    });
  }
  for (let d of o) {
    if (c.has(d.name)) continue;
    (c.add(d.name),
      l.push({
        label: d.name,
        message: d.error,
        action: {
          kind: "remove-installed-marketplace",
          name: d.name,
        },
      }));
  }
  let u = new Set();
  for (let d of n) {
    let p = HUo(d);
    if (p && u.has(p)) continue;
    if (p) u.add(p);
    let f = "marketplace" in d ? d.marketplace : void 0,
      m = p ? (a.get(d.source) ?? a.get(p)) : void 0;
    l.push({
      label: p ? (f ? `${p} @ ${f}` : p) : d.source,
      message: a1e(d),
      guidance: FKe(d),
      action: p
        ? qBf(p)
        : {
            kind: "none",
          },
      scope: m,
    });
  }
  for (let d of r)
    l.push({
      label: d.source,
      message: a1e(d),
      guidance: FKe(d),
      action: {
        kind: "none",
      },
    });
  for (let d of i) {
    let p = "plugin" in d ? d.plugin : d.source;
    if (u.has(p)) continue;
    u.add(p);
    let f = a.get(d.source) ?? ("plugin" in d ? a.get(d.plugin) : void 0);
    l.push({
      label: p,
      message: zM(d),
      guidance: $Pn(d),
      action: {
        kind: "none",
      },
      scope: f,
      isAdvisory: !0,
    });
  }
  return l;
}
function KBf(e, t) {
  for (let { source: n } of t) {
    let r = yn(n);
    if (!r) continue;
    let o = {};
    if (r.extraKnownMarketplaces?.[e])
      o.extraKnownMarketplaces = {
        ...r.extraKnownMarketplaces,
        [e]: void 0,
      };
    if (r.enabledPlugins) {
      let s = `@${e}`,
        i = !1,
        a = {
          ...r.enabledPlugins,
        };
      for (let l in a) if (l.endsWith(s)) ((a[l] = void 0), (i = !0));
      if (i) o.enabledPlugins = a;
    }
    if (Object.keys(o).length > 0) io(n, o);
  }
}
function YBf(e) {
  let t = AXt.c(26),
    { setViewState: n, setActiveTab: r, markPluginsChanged: o } = e,
    s = Ht(oUf),
    i = Ht(rUf),
    a = Ht(nUf),
    l = Ho(),
    [c, u] = UT.useState(0),
    [d, p] = UT.useState(null),
    f;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((f = []), (t[0] = f));
  else f = t[0];
  let [m, g] = UT.useState(f),
    h,
    y;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((h = () => {
      (async () => {
        try {
          let ee = await om(),
            { failures: ce } = await rse(ee);
          g(ce);
        } catch {}
      })();
    }),
      (y = []),
      (t[1] = h),
      (t[2] = y));
  else ((h = t[1]), (y = t[2]));
  UT.useEffect(h, y);
  let b = a.marketplaces.filter(tUf),
    _ = new Set(b.map(eUf)),
    S = s.filter(Irr),
    A = s.filter(
      (ee) =>
        !Irr(ee) &&
        (ee.type === "marketplace-not-found" ||
          ee.type === "marketplace-load-failed" ||
          ee.type === "marketplace-blocked-by-policy") &&
        !_.has(ee.marketplace),
    ),
    v = s.filter(ZBf),
    C = s.filter(QBf),
    x = Ese(),
    I = zBf(b, A, v, C, m, S, i, x),
    k;
  if (t[3] !== n)
    ((k = () => {
      n({
        type: "menu",
      });
    }),
      (t[3] = n),
      (t[4] = k));
  else k = t[4];
  let D;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((D = {
      context: "Confirmation",
    }),
      (t[5] = D));
  else D = t[5];
  $r("confirm:no", k, D);
  let P = () => {
      let ee = I[c];
      if (!ee) return;
      let { action: ce } = ee;
      e: switch (ce.kind) {
        case "navigate": {
          (r(ce.tab), n(ce.viewState));
          break e;
        }
        case "remove-extra-marketplace": {
          let ae = ce.sources.map(JBf).join(", ");
          (KBf(ce.name, ce.sources),
            Ah(),
            l((de) => ({
              ...de,
              plugins: {
                ...de.plugins,
                errors: de.plugins.errors.filter(
                  (Ee) => !("marketplace" in Ee && Ee.marketplace === ce.name),
                ),
                installationStatus: {
                  ...de.plugins.installationStatus,
                  marketplaces: de.plugins.installationStatus.marketplaces.filter(
                    (Ee) => Ee.name !== ce.name,
                  ),
                },
              },
            })),
            p(`${nt.tick} Removed "${ce.name}" from ${ae} settings`),
            o());
          break e;
        }
        case "remove-installed-marketplace": {
          (async () => {
            try {
              (await OSt(ce.name),
                Ah(),
                g((ae) => ae.filter((de) => de.name !== ce.name)),
                p(`${nt.tick} Removed marketplace "${ce.name}"`),
                o());
            } catch (ae) {
              let de = ae;
              p(`Failed to remove "${ce.name}": ${de instanceof Error ? de.message : String(de)}`);
            }
          })();
          break e;
        }
        case "managed-only":
          break e;
        case "none":
      }
    },
    O;
  if (t[6] === Symbol.for("react.memo_cache_sentinel")) ((O = () => u(XBf)), (t[6] = O));
  else O = t[6];
  let L = I.length > 0,
    M;
  if (t[7] !== L)
    ((M = {
      context: "Select",
      isActive: L,
    }),
      (t[7] = L),
      (t[8] = M));
  else M = t[8];
  No(
    {
      "select:previous": O,
      "select:next": () => u((ee) => Math.min(I.length - 1, ee + 1)),
      "select:accept": P,
    },
    M,
  );
  let N = Math.min(c, Math.max(0, I.length - 1));
  if (N !== c) u(N);
  let B = I[N]?.action,
    $ = B && B.kind !== "none" && B.kind !== "managed-only";
  if (I.length === 0) {
    let ee;
    if (t[9] === Symbol.for("react.memo_cache_sentinel"))
      ((ee = oa.jsx(U, {
        marginLeft: 1,
        children: oa.jsx(Fl, {
          children: "No plugin errors",
        }),
      })),
        (t[9] = ee));
    else ee = t[9];
    let ce;
    if (t[10] === Symbol.for("react.memo_cache_sentinel"))
      ((ce = oa.jsxs(U, {
        flexDirection: "column",
        children: [
          ee,
          oa.jsx(U, {
            marginTop: 1,
            children: oa.jsx(w, {
              dimColor: !0,
              italic: !0,
              children: oa.jsx(mr, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "go back",
              }),
            }),
          }),
        ],
      })),
        (t[10] = ce));
    else ce = t[10];
    return ce;
  }
  let q = U,
    W = "column",
    V = 1,
    Y;
  if (t[11] !== N)
    ((Y = (ee, ce) => {
      let ae = ce === N,
        de = ee.isAdvisory ? "warning" : "error",
        Ee = ae ? nt.pointer : ee.isAdvisory ? nt.triangleUpOutline : nt.cross;
      return oa.jsxs(
        U,
        {
          marginLeft: 1,
          flexDirection: "column",
          children: [
            oa.jsxs(w, {
              children: [
                oa.jsxs(w, {
                  color: ae ? "suggestion" : de,
                  children: [Ee, " "],
                }),
                oa.jsx(w, {
                  bold: ae,
                  children: ee.label,
                }),
                ee.scope &&
                  oa.jsxs(w, {
                    dimColor: !0,
                    children: [" (", ee.scope, ")"],
                  }),
              ],
            }),
            oa.jsx(U, {
              marginLeft: 3,
              children: oa.jsx(w, {
                color: de,
                wrap: "wrap-trim",
                children: ee.message,
              }),
            }),
            ee.guidance &&
              oa.jsx(U, {
                marginLeft: 3,
                children: oa.jsx(w, {
                  dimColor: !0,
                  italic: !0,
                  wrap: "wrap-trim",
                  children: ee.guidance,
                }),
              }),
          ],
        },
        ce,
      );
    }),
      (t[11] = N),
      (t[12] = Y));
  else Y = t[12];
  let z = I.map(Y),
    K;
  if (t[13] !== d)
    ((K =
      d &&
      oa.jsx(U, {
        marginLeft: 1,
        children: oa.jsx(w, {
          color: "claude",
          children: d,
        }),
      })),
      (t[13] = d),
      (t[14] = K));
  else K = t[14];
  let Z;
  if (t[15] === Symbol.for("react.memo_cache_sentinel"))
    ((Z = oa.jsx(mr, {
      action: "select:previous",
      context: "Select",
      fallback: "\u2191",
      description: "navigate",
    })),
      (t[15] = Z));
  else Z = t[15];
  let J;
  if (t[16] !== $)
    ((J =
      $ &&
      oa.jsx(mr, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "resolve",
      })),
      (t[16] = $),
      (t[17] = J));
  else J = t[17];
  let ne;
  if (t[18] === Symbol.for("react.memo_cache_sentinel"))
    ((ne = oa.jsx(mr, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "go back",
    })),
      (t[18] = ne));
  else ne = t[18];
  let oe;
  if (t[19] !== J)
    ((oe = oa.jsx(U, {
      children: oa.jsx(w, {
        dimColor: !0,
        italic: !0,
        children: oa.jsxs(Tn, {
          children: [Z, J, ne],
        }),
      }),
    })),
      (t[19] = J),
      (t[20] = oe));
  else oe = t[20];
  let re;
  if (t[21] !== q || t[22] !== z || t[23] !== K || t[24] !== oe)
    ((re = oa.jsxs(q, {
      flexDirection: W,
      gap: V,
      children: [z, K, oe],
    })),
      (t[21] = q),
      (t[22] = z),
      (t[23] = K),
      (t[24] = oe),
      (t[25] = re));
  else re = t[25];
  return re;
}
function XBf(e) {
  return Math.max(0, e - 1);
}
function JBf(e) {
  return e.scope;
}
function QBf(e) {
  if (Irr(e)) return !1;
  if (
    e.type === "marketplace-not-found" ||
    e.type === "marketplace-load-failed" ||
    e.type === "marketplace-blocked-by-policy"
  )
    return !1;
  return HUo(e) === void 0;
}
function ZBf(e) {
  if (Irr(e)) return !1;
  if (
    e.type === "marketplace-not-found" ||
    e.type === "marketplace-load-failed" ||
    e.type === "marketplace-blocked-by-policy"
  )
    return !1;
  return HUo(e) !== void 0;
}
function eUf(e) {
  return e.name;
}
function tUf(e) {
  return e.status === "failed";
}
function nUf(e) {
  return e.plugins.installationStatus;
}
function rUf(e) {
  return e.plugins.warnings;
}
function oUf(e) {
  return e.plugins.errors;
}
function sUf(e) {
  switch (e.type) {
    case "help":
      return {
        type: "help",
      };
    case "validate":
      return {
        type: "validate",
        path: e.path,
      };
    case "eval":
      return {
        type: "eval",
        target: e.target,
      };
    case "tag":
      return {
        type: "tag",
        path: e.path,
        push: e.push,
        dryRun: e.dryRun,
        force: e.force,
        unknownFlag: e.unknownFlag,
      };
    case "install":
      if (e.marketplace)
        return {
          type: "browse-marketplace",
          targetMarketplace: e.marketplace,
          targetPlugin: e.plugin,
        };
      if (e.plugin)
        return {
          type: "discover-plugins",
          targetPlugin: e.plugin,
        };
      return {
        type: "discover-plugins",
      };
    case "manage":
      return {
        type: "manage-plugins",
      };
    case "uninstall":
      return {
        type: "manage-plugins",
        targetPlugin: e.plugin,
        action: "uninstall",
      };
    case "enable":
      return {
        type: "manage-plugins",
        targetPlugin: e.plugin,
        action: "enable",
      };
    case "disable":
      return {
        type: "manage-plugins",
        targetPlugin: e.plugin,
        action: "disable",
      };
    case "configure":
      return {
        type: "manage-plugins",
        targetPlugin: e.plugin,
        action: "configure",
      };
    case "list":
      return {
        type: "plugin-list",
        filter: e.filter,
      };
    case "marketplace":
      if (e.action === "list")
        return {
          type: "marketplace-list",
        };
      if (e.action === "add")
        return {
          type: "add-marketplace",
          initialValue: e.target,
        };
      if (e.action === "remove")
        return {
          type: "manage-marketplaces",
          targetMarketplace: e.target,
          action: "remove",
        };
      if (e.action === "update")
        return {
          type: "manage-marketplaces",
          targetMarketplace: e.target,
          action: "update",
        };
      return {
        type: "marketplace-menu",
      };
    case "menu":
    default:
      return {
        type: "discover-plugins",
      };
  }
}
function iUf(e) {
  if (e.type === "manage-plugins") return "installed";
  if (e.type === "manage-marketplaces") return "marketplaces";
  return "discover";
}
function o4l({
  onComplete: e,
  args: t,
  showMcpRedirectMessage: n,
  showSkillsRedirectMessage: r,
  getSessionContext: o,
  commands: s,
}) {
  let i = Ujl(t),
    a = sUf(i),
    [l, c] = UT.useState(a),
    u = UT.useRef(new Set()),
    [d, p] = UT.useState(iUf(a)),
    [f, m] = UT.useState(l.type === "add-marketplace" ? l.initialValue || "" : ""),
    [g, h] = UT.useState(0),
    [y, b] = UT.useState(null),
    [_, S] = UT.useState(null),
    [A, v] = UT.useState(!1),
    C = Ho(),
    x = Ht((N) => {
      let B = N.plugins.errors.length;
      for (let $ of N.plugins.installationStatus.marketplaces) if ($.status === "failed") B++;
      return B;
    }),
    I = x > 0 ? `Errors (${x})` : "Errors",
    k = ig(),
    D = i.type === "marketplace" && i.action === "add" && i.target !== void 0,
    P = UT.useCallback(() => {
      C((N) =>
        N.plugins.needsRefresh
          ? N
          : {
              ...N,
              plugins: {
                ...N.plugins,
                needsRefresh: !0,
              },
            },
      );
    }, [C]),
    O = UT.useCallback((N) => {
      let B = N;
      switch ((p(B), b(null), B)) {
        case "discover":
          c({
            type: "discover-plugins",
          });
          break;
        case "installed":
          c({
            type: "manage-plugins",
          });
          break;
        case "marketplaces":
          c({
            type: "manage-marketplaces",
          });
          break;
        case "errors":
          break;
      }
    }, []);
  UT.useEffect(() => {
    if (l.type === "menu" && !_) e();
  }, [l.type, _, e]);
  let L = UT.useRef(l.type);
  UT.useEffect(() => {
    if (l.type === L.current) return;
    L.current = l.type;
    let B = {
      "browse-marketplace": "discover",
      "manage-plugins": "installed",
      "manage-marketplaces": "marketplaces",
    }[l.type];
    if (B) p(B);
  }, [l.type]);
  let M = UT.useCallback(() => {
    (p("marketplaces"),
      c({
        type: "manage-marketplaces",
      }),
      m(""),
      b(null));
  }, []);
  if (
    ($r("confirm:no", M, {
      context: "Settings",
      isActive: l.type === "add-marketplace",
    }),
    UT.useEffect(() => {
      if (_) e(_);
    }, [_, e]),
    UT.useEffect(() => {
      if (l.type === "help") e();
    }, [l.type, e]),
    l.type === "help")
  )
    return oa.jsxs(U, {
      flexDirection: "column",
      children: [
        oa.jsx(w, {
          bold: !0,
          children: "Plugin Command Usage:",
        }),
        oa.jsx(w, {
          children: " ",
        }),
        oa.jsx(w, {
          dimColor: !0,
          children: "Installation:",
        }),
        oa.jsx(w, {
          children: " /plugin install - Browse and install plugins",
        }),
        oa.jsxs(w, {
          children: [" ", "/plugin install <marketplace> - Install from specific marketplace"],
        }),
        oa.jsx(w, {
          children: " /plugin install <plugin> - Install specific plugin",
        }),
        oa.jsxs(w, {
          children: [" ", "/plugin install <plugin>@<market> - Install plugin from marketplace"],
        }),
        oa.jsx(w, {
          children: " ",
        }),
        oa.jsx(w, {
          dimColor: !0,
          children: "Management:",
        }),
        oa.jsxs(w, {
          children: [" ", "/plugin list [--enabled|--disabled] - List installed plugins"],
        }),
        oa.jsx(w, {
          children: " /plugin manage - Manage installed plugins",
        }),
        oa.jsx(w, {
          children: " /plugin enable <plugin> - Enable a plugin",
        }),
        oa.jsx(w, {
          children: " /plugin disable <plugin> - Disable a plugin",
        }),
        oa.jsx(w, {
          children: " /plugin configure <plugin> - Set userConfig options",
        }),
        oa.jsx(w, {
          children: " /plugin uninstall <plugin> - Uninstall a plugin",
        }),
        oa.jsx(w, {
          children: " ",
        }),
        oa.jsx(w, {
          dimColor: !0,
          children: "Marketplaces:",
        }),
        oa.jsx(w, {
          children: " /plugin marketplace - Marketplace management menu",
        }),
        oa.jsx(w, {
          children: " /plugin marketplace add - Add a marketplace",
        }),
        oa.jsxs(w, {
          children: [" ", "/plugin marketplace add <path/url> - Add marketplace directly"],
        }),
        oa.jsx(w, {
          children: " /plugin marketplace update - Update marketplaces",
        }),
        oa.jsxs(w, {
          children: [" ", "/plugin marketplace update <name> - Update specific marketplace"],
        }),
        oa.jsx(w, {
          children: " /plugin marketplace remove - Remove a marketplace",
        }),
        oa.jsxs(w, {
          children: [" ", "/plugin marketplace remove <name> - Remove specific marketplace"],
        }),
        oa.jsx(w, {
          children: " /plugin marketplace list - List all marketplaces",
        }),
        oa.jsx(w, {
          children: " ",
        }),
        oa.jsx(w, {
          dimColor: !0,
          children: "Validation:",
        }),
        oa.jsxs(w, {
          children: [" ", "/plugin validate <path> - Validate a manifest file or directory"],
        }),
        oa.jsxs(w, {
          children: [
            " ",
            "/plugin tag [path] [--push] [--dry-run] [-f] - Create a release tag for the plugin",
          ],
        }),
        oa.jsx(w, {
          children: " ",
        }),
        oa.jsx(w, {
          dimColor: !0,
          children: "Other:",
        }),
        oa.jsx(w, {
          children: " /plugin - Main plugin menu",
        }),
        oa.jsx(w, {
          children: " /plugin help - Show this help",
        }),
        oa.jsx(w, {
          children: " /plugins - Alias for /plugin",
        }),
      ],
    });
  if (l.type === "validate")
    return oa.jsx(t4l, {
      onComplete: e,
      path: l.path,
    });
  if (l.type === "eval")
    return oa.jsx(z2l, {
      onComplete: e,
      target: l.target,
    });
  if (l.type === "tag")
    return oa.jsx(Jjl, {
      onComplete: e,
      path: l.path,
      push: l.push,
      dryRun: l.dryRun,
      force: l.force,
      unknownFlag: l.unknownFlag,
    });
  if (l.type === "marketplace-menu")
    return (
      c({
        type: "menu",
      }),
      null
    );
  if (l.type === "marketplace-list")
    return oa.jsx($Bf, {
      onComplete: e,
    });
  if (l.type === "plugin-list")
    return oa.jsx(NBf, {
      onComplete: e,
      filter: l.filter,
    });
  if (l.type === "add-marketplace")
    return oa.jsx(S2l, {
      inputValue: f,
      setInputValue: m,
      cursorOffset: g,
      setCursorOffset: h,
      error: y,
      setError: b,
      result: _,
      setResult: S,
      setViewState: c,
      onAddComplete: P,
      cliMode: D,
    });
  return oa.jsx(Fu, {
    color: "suggestion",
    children: oa.jsxs(cR, {
      title: "Plugins",
      selectedTab: d,
      onTabChange: O,
      color: "suggestion",
      disableNavigation: A,
      banner:
        n && d === "installed"
          ? oa.jsx(GBf, {})
          : r && d === "installed"
            ? oa.jsx(WBf, {})
            : void 0,
      children: [
        oa.jsx(sm, {
          id: "discover",
          title: "Discover",
          children:
            l.type === "browse-marketplace"
              ? oa.jsx(O2l, {
                  error: y,
                  setError: b,
                  result: _,
                  setResult: S,
                  setViewState: c,
                  onInstallComplete: P,
                  onSearchModeChange: v,
                  targetMarketplace: l.targetMarketplace,
                  targetPlugin: l.targetPlugin,
                })
              : oa.jsx(U2l, {
                  error: y,
                  setError: b,
                  result: _,
                  setResult: S,
                  setViewState: c,
                  onInstallComplete: P,
                  onSearchModeChange: v,
                  getSessionContext: o,
                  grantedSuggestions: u.current,
                  targetPlugin: l.type === "discover-plugins" ? l.targetPlugin : void 0,
                }),
        }),
        oa.jsx(sm, {
          id: "installed",
          title: "Installed",
          children: oa.jsx(Njl, {
            setViewState: c,
            setResult: S,
            onManageComplete: P,
            onSearchModeChange: v,
            commands: s,
            targetPlugin: l.type === "manage-plugins" ? l.targetPlugin : void 0,
            targetMarketplace: l.type === "manage-plugins" ? l.targetMarketplace : void 0,
            action: l.type === "manage-plugins" ? l.action : void 0,
          }),
        }),
        oa.jsx(sm, {
          id: "marketplaces",
          title: "Marketplaces",
          children: oa.jsx(rjl, {
            setViewState: c,
            error: y,
            setError: b,
            setResult: S,
            exitState: k,
            onManageComplete: P,
            targetMarketplace: l.type === "manage-marketplaces" ? l.targetMarketplace : void 0,
            action: l.type === "manage-marketplaces" ? l.action : void 0,
          }),
        }),
        oa.jsx(sm, {
          id: "errors",
          title: I,
          children: oa.jsx(YBf, {
            setViewState: c,
            setActiveTab: p,
            markPluginsChanged: P,
          }),
        }),
      ],
    }),
  });
}
var AXt, UT, oa, VBf;
