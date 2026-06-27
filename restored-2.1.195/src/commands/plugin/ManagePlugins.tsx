// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pjl
// matched 2.1.88 source: src/commands/plugin/ManagePlugins.tsx
// class=modified  jaccard=0.3095  score=0.466  fileCov=0.4797
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Pjl]
uUo = ["on", "name-only", "user-invocable-only", "off"];
function Mjl(e, t) {
  let n = yn("localSettings")?.skillOverrides,
    r = yn("projectSettings")?.skillOverrides,
    o = yn("userSettings")?.skillOverrides,
    s = (l) => r?.[l] ?? o?.[l],
    i =
      s(e.cmdName) ??
      (e.unqualifiedName != null ? (n?.[e.unqualifiedName] ?? s(e.unqualifiedName)) : void 0),
    a = e.lockSource === "author" ? (i === "off" ? "off" : "user-invocable-only") : (i ?? "on");
  return t === a ? void 0 : t;
}
function mBf(e) {
  switch (e) {
    case "flagged":
      return "Flagged";
    case "project":
      return "Project";
    case "local":
      return "Local";
    case "user":
      return "User";
    case "enterprise":
      return "Enterprise";
    case "managed":
      return "Managed";
    case "builtin":
    case "dynamic":
      return "Built-in";
    case "skills":
      return "Skills";
    default:
      return e;
  }
}
function gBf(e) {
  let t = fUo.c(11),
    { plugin: n, marketplace: r } = e,
    [o, s] = fu.useState(null),
    [i, a] = fu.useState(null),
    l,
    c;
  if (t[0] !== r || t[1] !== n)
    ((l = () => {
      let p = false;
      return (
        sUo(n, r)
          .then((f) => {
            if (!p) s(f);
          })
          .catch((f) => {
            if (!p) a(f instanceof Error ? f.message : "Failed to load components");
          }),
        () => {
          p = true;
        }
      );
    }),
      (c = [n, r]),
      (t[0] = r),
      (t[1] = n),
      (t[2] = l),
      (t[3] = c));
  else ((l = t[2]), (c = t[3]));
  if ((fu.useEffect(l, c), i)) {
    let p;
    if (t[4] === Symbol.for("react.memo_cache_sentinel"))
      ((p = vr.jsx(w, {
        bold: true,
        children: "Components:",
      })),
        (t[4] = p));
    else p = t[4];
    let f;
    if (t[5] !== i)
      ((f = vr.jsxs(U, {
        flexDirection: "column",
        marginBottom: 1,
        children: [
          p,
          vr.jsxs(w, {
            dimColor: true,
            children: ["Error: ", i],
          }),
        ],
      })),
        (t[5] = i),
        (t[6] = f));
    else f = t[6];
    return f;
  }
  if (!o) return null;
  let u, d;
  if (t[7] !== o) {
    d = Symbol.for("react.early_return_sentinel");
    e: {
      let p = crr(o);
      if (p.length === 0) {
        d = null;
        break e;
      }
      let f;
      if (t[10] === Symbol.for("react.memo_cache_sentinel"))
        ((f = vr.jsx(w, {
          bold: true,
          children: "Installed components:",
        })),
          (t[10] = f));
      else f = t[10];
      u = vr.jsxs(U, {
        flexDirection: "column",
        marginBottom: 1,
        children: [f, p.map(hBf)],
      });
    }
    ((t[7] = o), (t[8] = u), (t[9] = d));
  } else ((u = t[8]), (d = t[9]));
  if (d !== Symbol.for("react.early_return_sentinel")) return d;
  return u;
}
function hBf(e) {
  let [t, n] = e;
  return vr.jsx(
    iE,
    {
      children: vr.jsxs(w, {
        dimColor: true,
        children: [t, ": ", n.join(", ")],
      }),
    },
    t,
  );
}
async function checkIfLocalPlugin(e, t) {
  let r = (await G$(t))?.plugins.find((o) => o.name === e);
  if (r && typeof r.source === "string")
    return `Local plugins cannot be updated remotely. To update, modify the source at: ${r.source}`;
  return null;
}
function _Bf(e) {
  return e.filter((t) => !GI(t.source));
}
function $jl(e) {
  let t = fUo.c(15),
    { entries: n, color: r, noun: o } = e;
  if (n.length === 0) return null;
  let s = n.length,
    i;
  if (t[0] !== n.length || t[1] !== o)
    ((i = bn(n.length, o)), (t[0] = n.length), (t[1] = o), (t[2] = i));
  else i = t[2];
  let a;
  if (t[3] !== r || t[4] !== n.length || t[5] !== i)
    ((a = vr.jsxs(w, {
      bold: true,
      color: r,
      children: [s, " ", i, ":"],
    })),
      (t[3] = r),
      (t[4] = n.length),
      (t[5] = i),
      (t[6] = a));
  else a = t[6];
  let l;
  if (t[7] !== r || t[8] !== n) {
    let u;
    if (t[10] !== r)
      ((u = (d, p) =>
        vr.jsxs(
          U,
          {
            flexDirection: "column",
            marginLeft: 2,
            children: [
              vr.jsx(w, {
                color: r,
                children: d.message,
              }),
              d.guidance &&
                vr.jsxs(w, {
                  dimColor: true,
                  italic: true,
                  children: [nt.arrowRight, " ", d.guidance],
                }),
            ],
          },
          p,
        )),
        (t[10] = r),
        (t[11] = u));
    else u = t[11];
    ((l = n.map(u)), (t[7] = r), (t[8] = n), (t[9] = l));
  } else l = t[9];
  let c;
  if (t[12] !== a || t[13] !== l)
    ((c = vr.jsxs(U, {
      flexDirection: "column",
      children: [a, l],
    })),
      (t[12] = a),
      (t[13] = l),
      (t[14] = c));
  else c = t[14];
  return c;
}
function ManagePlugins({
  setViewState: e,
  setResult: t,
  onManageComplete: n,
  onSearchModeChange: r,
  targetPlugin: o,
  targetMarketplace: s,
  action: i,
  commands: a,
}) {
  let l = Ht((pt) => pt.mcp.clients),
    c = Ht((pt) => pt.mcp.tools),
    u = Ht((pt) => pt.plugins.errors),
    d = Ht((pt) => pt.plugins.warnings),
    p = QEt(),
    f = cjl(),
    [m, g] = fu.useState(false),
    h = () => g(false),
    y = Pg(),
    b = YE(),
    _ = br(),
    { columns: S } = _,
    { rows: A } = bb(_),
    [v, C] = fu.useState("plugin-list"),
    {
      query: x,
      setQuery: I,
      cursorOffset: k,
      setCursorOffset: D,
      handleKeyDown: P,
      handlePaste: O,
    } = Uk({
      isActive: v === "plugin-list" && m,
      onExit: h,
      onExitUp: h,
    }),
    L = m && x !== "";
  (fu.useEffect(() => {
    r(L);
  }, [L, r]),
    fu.useEffect(() => () => r(false), [r]));
  let [M, N] = fu.useState(null),
    B = fu.useMemo(() => (M ? qEt(M.plugin.source) : null), [M]),
    [$, q] = fu.useState([]),
    [W, V] = fu.useState([]),
    [Y, z] = fu.useState(true),
    [K, Z] = fu.useState(0),
    [J, ne] = fu.useState(() => new Set()),
    [oe, re] = fu.useState(new Map()),
    [ee, ce] = fu.useState(false),
    [ae, de] = fu.useState(null),
    [Ee, me] = fu.useState(null),
    [pe, ge] = fu.useState(0),
    he = fu.useCallback(
      (pt) => {
        (me(pt), ce(false), N(null), C("plugin-list"), ge((ln) => ln + 1), n());
      },
      [n],
    ),
    ie = fu.useRef(false),
    le = fu.useRef(void 0),
    He = ZOe(),
    ye = fu.useCallback(() => {
      if (v === "plugin-details") (C("plugin-list"), N(null), de(null));
      else if (typeof v === "object" && v.type === "failed-plugin-details")
        (C("plugin-list"), de(null));
      else if (v === "configuring") (C("plugin-details"), nn(null));
      else if (v === "plugin-usage") C("plugin-details");
      else if (typeof v === "object" && v.type === "plugin-options")
        he("Plugin enabled. Configuration skipped \u2014 run /reload-plugins to apply.");
      else if (typeof v === "object" && v.type === "configuring-options")
        t("Configuration cancelled.");
      else if (typeof v === "object" && v.type === "flagged-detail") (C("plugin-list"), de(null));
      else if (typeof v === "object" && v.type === "mcp-detail") (C("plugin-list"), de(null));
      else if (typeof v === "object" && v.type === "skill-detail") (C("plugin-list"), de(null));
      else if (typeof v === "object" && v.type === "mcp-tools")
        C({
          type: "mcp-detail",
          client: v.client,
        });
      else if (typeof v === "object" && v.type === "mcp-tool-detail")
        C({
          type: "mcp-tools",
          client: v.client,
        });
      else {
        if (oe.size > 0) {
          t("Run /reload-plugins to apply plugin changes.");
          return;
        }
        e({
          type: "menu",
        });
      }
    }, [v, e, oe, t, he]);
  $r("confirm:no", ye, {
    context: "Settings",
    isActive:
      (v !== "plugin-list" || !m) &&
      v !== "confirm-project-uninstall" &&
      !(typeof v === "object" && v.type === "confirm-data-cleanup"),
  });
  let ue = (pt) => {
      if (pt.type === "connected") return "connected";
      if (pt.type === "disabled") return "disabled";
      if (pt.type === "pending") return "pending";
      if (pt.type === "needs-auth") return "needs-auth";
      return "failed";
    },
    we = fu.useMemo(() => {
      let pt = jo(),
        ln = new Map();
      for (let jn of l)
        if (jn.name.startsWith("plugin:")) {
          let So = jn.name.split(":");
          if (So.length >= 3) {
            let Mo = So[1],
              rs = So.slice(2).join(":"),
              js = ln.get(Mo) || [];
            (js.push({
              displayName: rs,
              client: jn,
            }),
              ln.set(Mo, js));
          }
        }
      let pn = [];
      for (let jn of W) {
        let So = qEt(jn.plugin.source),
          Mo = VEt(So, jn.plugin.manifest, pt),
          rs = u.filter(
            (Gn) =>
              !("orphan" in Gn && Gn.orphan) &&
              (("plugin" in Gn && Gn.plugin === jn.plugin.name) || Gn.source === So),
          ),
          js = jn.plugin.isBuiltin ? "builtin" : jn.scope || "user";
        pn.push({
          item: {
            type: "plugin",
            id: So,
            name: jn.plugin.name,
            displayName: jn.plugin.manifest.displayName,
            description: jn.plugin.manifest.description,
            marketplace: jn.marketplace,
            scope: js,
            isEnabled: Mo,
            errorCount: rs.length,
            errors: rs,
            plugin: jn.plugin,
            pendingEnable: jn.pendingEnable,
            pendingUpdate: jn.pendingUpdate,
            pendingToggle: oe.get(So),
          },
          originalScope: js,
          childMcps: Mo ? ln.get(jn.plugin.name) || [] : [],
        });
      }
      let ir = new Set(pn.map(({ item: jn }) => jn.id)),
        Rr = new Set(pn.map(({ item: jn }) => jn.name)),
        _o = new Map();
      for (let jn of u) {
        let So = "orphan" in jn && jn.orphan;
        if (
          !So &&
          (ir.has(jn.source) ||
            ("plugin" in jn && typeof jn.plugin === "string" && Rr.has(jn.plugin)))
        )
          continue;
        let Mo = So ? `orphan:${jn.source}` : jn.source,
          rs = _o.get(Mo) || [];
        (rs.push(jn), _o.set(Mo, rs));
      }
      let Xo = Ese(),
        Pn = [];
      for (let [jn, So] of _o) {
        let Mo = jn.startsWith("orphan:") ? jn.slice(7) : jn;
        if (Mo in p) continue;
        let rs = Qo(Mo),
          js = rs.name || Mo,
          Gn = rs.marketplace || "unknown",
          cr = Xo.get(Mo),
          Lt = cr === "flag" || cr === void 0 ? "user" : cr;
        Pn.push({
          type: "failed-plugin",
          id: jn,
          name: js,
          marketplace: Gn,
          scope: Lt,
          errorCount: So.length,
          errors: So,
        });
      }
      let lr = [],
        eo = kUn();
      for (let jn of l) {
        if (jn.name === "ide") continue;
        if (jn.name.startsWith("plugin:")) continue;
        lr.push({
          type: "mcp",
          id: `mcp:${jn.name}`,
          name: jn.name,
          description: void 0,
          scope: jn.config.scope,
          status: ue(jn),
          client: jn,
          everConnected: jn.config.type === "claudeai-proxy" ? eo.has(jn.name) : void 0,
        });
      }
      let Kn = [];
      if (a) {
        let jn = new Set(W.filter((cr) => cr.marketplace === JE).map((cr) => cr.plugin.name)),
          So = Dt().skillUsage ?? {},
          Mo = Date.now(),
          rs = pt.skillOverrides ?? {},
          js = yn("policySettings")?.skillOverrides ?? {},
          Gn = yn("flagSettings")?.skillOverrides ?? {};
        for (let cr of a) {
          if (
            cr.type !== "prompt" ||
            (cr.loadedFrom !== "skills" && cr.loadedFrom !== "commands_DEPRECATED")
          )
            continue;
          let Lt = xu(cr);
          if (jn.has(cr.name) || jn.has(Lt)) continue;
          let En = js[cr.name],
            Sn = Gn[cr.name],
            Jn = rs[cr.name] ?? (cr.unqualifiedName != null ? rs[cr.unqualifiedName] : void 0),
            Qn,
            gr;
          if (En) ((Qn = "policy"), (gr = En));
          else if (Sn) ((Qn = "flag"), (gr = Sn));
          else if (cr.disableModelInvocation)
            ((Qn = "author"), (gr = Jn === "off" ? "off" : "user-invocable-only"));
          else gr = Jn ?? "on";
          Kn.push({
            type: "skill",
            id: `skill:${cr.source}:${cr.name}`,
            cmdName: cr.name,
            unqualifiedName: cr.unqualifiedName,
            name: Lt,
            description: cr.description,
            scope: "skills",
            source: wG(cr.source),
            override: gr,
            whenToUse: cr.whenToUse,
            skillRoot: cr.skillRoot,
            allowedTools: cr.allowedTools,
            lockSource: Qn,
            tokenEstimate: If([cr.name, cr.description, cr.whenToUse].filter(Boolean).join(" ")),
            usage: (() => {
              let fo = So[cr.name] ?? (cr.unqualifiedName ? So[cr.unqualifiedName] : void 0);
              return fo
                ? {
                    count: fo.usageCount,
                    daysSinceUse: Math.max(0, Math.floor((Mo - fo.lastUsedAt) / 86400000)),
                  }
                : void 0;
            })(),
          });
        }
      }
      let Nt = {
          flagged: -1,
          project: 0,
          local: 1,
          user: 2,
          enterprise: 3,
          managed: 4,
          dynamic: 5,
          builtin: 6,
          skills: 7,
        },
        Ut = [],
        Fn = new Map();
      for (let { item: jn, originalScope: So, childMcps: Mo } of pn) {
        let rs = jn.scope;
        if (!Fn.has(rs)) Fn.set(rs, []);
        Fn.get(rs).push(jn);
        for (let { displayName: js, client: Gn } of Mo) {
          let cr = So === "builtin" ? "user" : So;
          if (!Fn.has(cr)) Fn.set(cr, []);
          Fn.get(cr).push({
            type: "mcp",
            id: `mcp:${Gn.name}`,
            name: js,
            description: void 0,
            scope: cr,
            status: ue(Gn),
            client: Gn,
            indented: true,
            parentId: jn.id,
          });
        }
      }
      for (let jn of lr) {
        let So = jn.scope;
        if (!Fn.has(So)) Fn.set(So, []);
        Fn.get(So).push(jn);
      }
      if (Kn.length > 0) Fn.set("skills", Kn);
      for (let jn of Pn) {
        let So = jn.scope;
        if (!Fn.has(So)) Fn.set(So, []);
        Fn.get(So).push(jn);
      }
      for (let [jn, So] of Object.entries(p)) {
        let Mo = Qo(jn),
          rs = Mo.name || jn,
          js = Mo.marketplace || "unknown";
        if (!Fn.has("flagged")) Fn.set("flagged", []);
        Fn.get("flagged").push({
          type: "flagged-plugin",
          id: jn,
          name: rs,
          marketplace: js,
          scope: "flagged",
          reason: "delisted",
          text: "Removed from marketplace",
          flaggedAt: So.flaggedAt,
        });
      }
      let xi = [...Fn.keys()].sort((jn, So) => (Nt[jn] ?? 99) - (Nt[So] ?? 99));
      for (let jn of xi) {
        let So = Fn.get(jn),
          Mo = [],
          rs = [],
          js = [],
          Gn = 0;
        while (Gn < So.length) {
          let cr = So[Gn];
          if (cr.type === "plugin" || cr.type === "failed-plugin" || cr.type === "flagged-plugin") {
            let Lt = [cr];
            Gn++;
            let En = So[Gn];
            while (En?.type === "mcp" && En.indented) (Lt.push(En), Gn++, (En = So[Gn]));
            Mo.push(Lt);
          } else if (cr.type === "mcp" && !cr.indented) (rs.push(cr), Gn++);
          else if (cr.type === "skill") (js.push(cr), Gn++);
          else Gn++;
        }
        (Mo.sort((cr, Lt) => cr[0].name.localeCompare(Lt[0].name)),
          rs.sort((cr, Lt) => cr.name.localeCompare(Lt.name)),
          js.sort((cr, Lt) => cr.name.localeCompare(Lt.name)));
        for (let cr of Mo) Ut.push(...cr);
        (Ut.push(...rs), Ut.push(...js));
      }
      return Ut;
    }, [W, l, u, oe, p, a, K]),
    Ce = fu.useMemo(() => we.filter((pt) => pt.type === "flagged-plugin").map((pt) => pt.id), [we]);
  fu.useEffect(() => {
    if (Ce.length > 0) hjl(Ce);
  }, [Ce]);
  let [Ie, Ve] = fu.useState(() => new Set((Dt().favoritePlugins ?? []).map(qEt))),
    Ze = fu.useCallback((pt) => {
      Ve((ln) => {
        let pn = new Set(ln);
        if (pn.has(pt)) pn.delete(pt);
        else pn.add(pt);
        return (
          gn((ir) => ({
            ...ir,
            favoritePlugins: [...pn],
          })),
          pn
        );
      });
    }, []),
    [Be, Me] = fu.useState(false),
    [Ue, tt] = fu.useState(() => new Map());
  fu.useEffect(() => {
    let pt = false;
    return (
      _Xt().then((ln) => {
        if (pt || ln.length === 0) return;
        tt(new Map(ln.map((pn) => [qEt(pn.pluginId), pn.daysSinceLastUse])));
      }),
      () => {
        pt = true;
      }
    );
  }, []);
  let bt = fu.useCallback(
      (pt, ln) => {
        if (ln === null || !Ue.has(ln)) return;
        (xe("cli_plugin_disuse_review"),
          G("tengu_plugin_disuse_review_action", {
            action: $e(pt),
            ...e4(ln),
          }),
          tt((pn) => {
            if (!pn.has(ln)) return pn;
            let ir = new Map(pn);
            return (ir.delete(ln), ir);
          }));
      },
      [Ue],
    ),
    Ke = fu.useMemo(
      () =>
        Djl(we, {
          searchQuery: x,
          favoriteIds: Ie,
          showDisabled: Be,
          disusedDays: Ue,
          keepInPlaceIds: J,
        }),
      [we, x, Ie, Be, Ue, J],
    ),
    Et = fu.useCallback(
      (pt, ln) => {
        let pn = ln === -1 ? Math.min(pt, Ke.length - 1) : pt;
        for (let ir = pn; ir >= 0 && ir < Ke.length; ir += ln) if (ZEt(Ke[ir])) return ir;
        return -1;
      },
      [Ke],
    ),
    [ct, Je] = fu.useState(0),
    gt = fu.useRef(null);
  fu.useEffect(() => {
    if (Ke.length === 0) return;
    let pt = gt.current;
    if (pt) {
      gt.current = null;
      let ln = Ke.findIndex(
        (pn) => pn.kind === "item" && pn.section === pt.section && pn.item.id === pt.id,
      );
      if (ln === -1) ln = Ke.findIndex((pn) => pn.kind === "item" && pn.item.id === pt.id);
      if (ln !== -1) {
        Je(ln);
        return;
      }
    }
    if (!ZEt(Ke[ct])) {
      let ln = Et(ct, 1),
        pn = Et(ct, -1);
      Je(ln !== -1 ? ln : pn !== -1 ? pn : 0);
    }
  }, [Ke, ct, Et]);
  let st = b ? Math.max(8, A - 10) : 8,
    xt = fu.useMemo(() => Math.max(0, Ke.findIndex(ZEt)), [Ke]),
    vt = FEt({
      totalItems: Ke.length,
      selectedIndex: ct,
      maxVisible: st,
      firstSelectableIndex: xt,
    }),
    [jt, en] = fu.useState(0),
    [Dn, nn] = fu.useState(null),
    [Ln, Hn] = fu.useState(false),
    [kr, Mr] = fu.useState(false);
  (fu.useEffect(() => {
    if (!M) {
      Mr(false);
      return;
    }
    async function pt() {
      let ln = M.plugin.manifest.mcpServers,
        pn = false;
      if (ln)
        pn =
          (typeof ln === "string" && n6(ln)) ||
          (Array.isArray(ln) && ln.some((ir) => typeof ir === "string" && n6(ir)));
      if (!pn)
        try {
          let ir = pUo.join(M.plugin.path, ".."),
            Rr = pUo.join(ir, ".claude-plugin", "marketplace.json"),
            _o = await Ojl.readFile(Rr, "utf-8"),
            Xo = Ft(_o),
            Pn = Qo(M.plugin.source).name,
            lr = Xo.plugins?.find((eo) => eo.name === Pn || eo.name === M.plugin.name);
          if (lr?.mcpServers) {
            let eo = lr.mcpServers;
            pn =
              (typeof eo === "string" && n6(eo)) ||
              (Array.isArray(eo) && eo.some((Kn) => typeof Kn === "string" && n6(Kn)));
          }
        } catch (ir) {
          T(`Failed to read raw marketplace.json: ${ir}`);
        }
      Mr(pn);
    }
    pt();
  }, [M]),
    fu.useEffect(() => {
      let pt = pe > 0;
      async function ln() {
        if (!pt) z(true);
        try {
          let { enabled: pn, disabled: ir } = await OT(),
            Rr = jo(),
            _o = _Bf([...pn, ...ir]),
            Xo = {};
          for (let eo of _o) {
            let Kn = eo.source.split("@")[1] || "local";
            if (!Xo[Kn]) Xo[Kn] = [];
            Xo[Kn].push(eo);
          }
          let Pn = [];
          for (let [eo, Kn] of Object.entries(Xo)) {
            let Nt = On(Kn, (Fn) => {
                let xi = qEt(Fn.source);
                return VEt(xi, Fn.manifest, Rr);
              }),
              Ut = Kn.length - Nt;
            Pn.push({
              name: eo,
              installedPlugins: Kn,
              enabledCount: Nt,
              disabledCount: Ut,
            });
          }
          (Pn.sort((eo, Kn) => {
            if (eo.name === "claude-plugin-directory") return -1;
            if (Kn.name === "claude-plugin-directory") return 1;
            return eo.name.localeCompare(Kn.name);
          }),
            q(Pn));
          let lr = [];
          for (let eo of Pn)
            for (let Kn of eo.installedPlugins) {
              let Nt = Kn.isBuiltin ? "builtin" : (Kn.scope ?? grr(Kn.source).scope);
              lr.push({
                plugin: Kn,
                marketplace: eo.name,
                scope: Nt,
                pendingEnable: void 0,
                pendingUpdate: false,
              });
            }
          if ((V(lr), !pt)) Je(0);
        } finally {
          z(false);
        }
      }
      ln();
    }, [pe]),
    fu.useEffect(() => {
      if (ie.current) return;
      if (o && $.length > 0 && !Y) {
        let { name: pt, marketplace: ln } = Qo(o),
          pn = s ?? ln,
          ir = pn ? $.filter((_o) => _o.name === pn) : $;
        for (let _o of ir) {
          let Xo = _o.installedPlugins.find((Pn) => Pn.name === pt || Qo(Pn.source).name === pt);
          if (Xo) {
            let Pn = Xo.scope ?? grr(Xo.source).scope,
              lr = {
                plugin: Xo,
                marketplace: _o.name,
                scope: Pn,
                pendingEnable: void 0,
                pendingUpdate: false,
              };
            (N(lr), C("plugin-details"), (le.current = i), (ie.current = true));
            return;
          }
        }
        let Rr = we.find((_o) => _o.type === "failed-plugin" && _o.name === pt);
        if (Rr && Rr.type === "failed-plugin")
          (C({
            type: "failed-plugin-details",
            plugin: {
              id: Rr.id,
              name: Rr.name,
              marketplace: Rr.marketplace,
              errors: Rr.errors,
              scope: Rr.scope,
            },
          }),
            (ie.current = true));
        if (!ie.current && i)
          ((ie.current = true), t(`Plugin "${o}" is not installed in this project`));
      }
    }, [o, s, $, Y, we, i, t]));
  let fe = async (pt) => {
      if (!M) return;
      let ln = M.scope || "user",
        pn = ln === "builtin";
      if (pn && (pt === "update" || pt === "uninstall")) {
        de("Built-in plugins cannot be updated or uninstalled.");
        return;
      }
      if (!pn && !GEt(ln) && pt !== "update") {
        de("This plugin is managed by your organization. Contact your admin to disable it.");
        return;
      }
      (ce(true), de(null));
      try {
        let ir = B,
          Rr;
        switch (pt) {
          case "enable": {
            let Kn = await zEt(ir);
            if (!Kn.success) throw Error(Kn.message);
            break;
          }
          case "disable": {
            let Kn = await KEt(ir);
            if (!Kn.success) throw Error(Kn.message);
            Rr = Kn.reverseDependents;
            break;
          }
          case "uninstall": {
            if (pn) break;
            if (!GEt(ln)) break;
            if (X2l(ir)) {
              (ce(false), C("confirm-project-uninstall"));
              return;
            }
            let Kn = ex().plugins[ir],
              Ut = !Kn || Kn.length <= 1 ? await $ra(ir) : null;
            if (Ut) {
              (ce(false),
                C({
                  type: "confirm-data-cleanup",
                  size: Ut,
                }));
              return;
            }
            let Fn = await OHe(ir, ln);
            if (!Fn.success) throw Error(Fn.message);
            Rr = Fn.reverseDependents;
            break;
          }
          case "update": {
            if (pn) break;
            let Kn = await YEt(ir, ln);
            if (!Kn.success) throw Error(Kn.message);
            if (Kn.alreadyUpToDate || Kn.skipped) {
              (t(Kn.message),
                await n(),
                e({
                  type: "menu",
                }));
              return;
            }
            break;
          }
        }
        if ((Ah(), pt === "disable" || pt === "uninstall")) bt(pt, B);
        let Xo = jo()?.enabledPlugins?.[B] !== false;
        if (pt !== "uninstall" && pt !== "update" && Xo) {
          (ce(false),
            C({
              type: "plugin-options",
            }));
          return;
        }
        let Pn =
            pt === "enable"
              ? "Enabled"
              : pt === "disable"
                ? "Disabled"
                : pt === "update"
                  ? "Updated"
                  : "Uninstalled",
          lr = Rr && Rr.length > 0 ? ` \xB7 required by ${Rr.join(", ")}` : "",
          eo = `${nt.tick} ${Pn} ${fS(M.plugin)}${lr}. Run /reload-plugins to apply.`;
        if (pt === "update")
          (t(eo),
            await n(),
            e({
              type: "menu",
            }));
        else he(eo);
      } catch (ir) {
        ce(false);
        let Rr = ir instanceof Error ? ir.message : String(ir);
        (de(`Failed to ${pt}: ${Rr}`),
          T(`Failed to ${pt} plugin: ${Rr}`, {
            level: "error",
          }));
      }
    },
    Te = fu.useRef(fe);
  ((Te.current = fe),
    fu.useEffect(() => {
      if (v === "plugin-details" && M && le.current) {
        let pt = le.current;
        if (((le.current = void 0), pt === "configure")) {
          let ln = M.plugin.manifest.userConfig;
          if (ln && Object.keys(ln).length > 0)
            C({
              type: "configuring-options",
              schema: ln,
            });
          else t(`Plugin "${Tre(M.plugin)}" declares no userConfig options.`);
          return;
        }
        Te.current(pt);
      }
    }, [v, M, t]));
  let Re = fu.useCallback(() => {
      let pt = Ke[ct];
      if (!ZEt(pt)) return;
      if (pt.kind === "disabled-header") {
        Me((pn) => !pn);
        return;
      }
      let ln = pt.item;
      if (ln.type === "flagged-plugin") return;
      if (ln.type === "plugin") {
        let pn = ln.id,
          ir = jo(),
          Rr = oe.get(pn),
          _o = VEt(pn, ln.plugin.manifest, ir),
          Xo = ln.scope;
        if (Xo === "builtin" || GEt(Xo)) {
          let lr = new Map(oe);
          if (Rr)
            (lr.delete(pn),
              de(null),
              (async () => {
                try {
                  let eo = Rr === "will-disable" ? await zEt(pn) : await KEt(pn);
                  if (!eo.success && !eo.alreadyInGoalState) {
                    (re((Kn) => {
                      let Nt = new Map(Kn);
                      return (Nt.set(pn, Rr), Nt);
                    }),
                      de(eo.message));
                    return;
                  }
                  Ah();
                } catch (eo) {
                  ke(eo);
                }
              })());
          else
            (lr.set(pn, _o ? "will-disable" : "will-enable"),
              de(null),
              (async () => {
                try {
                  let eo = _o ? await KEt(pn) : await zEt(pn);
                  if (!eo.success) {
                    (re((Kn) => {
                      let Nt = new Map(Kn);
                      return (Nt.delete(pn), Nt);
                    }),
                      de(eo.message));
                    return;
                  }
                  if ((Ah(), _o)) bt("disable", pn);
                } catch (eo) {
                  ke(eo);
                }
              })());
          re(lr);
        }
      } else if (ln.type === "mcp") He(ln.client.name);
      else if (ln.type === "skill") {
        let pn = Ljl(ln.override, ln.lockSource);
        if (pn === ln.override) return;
        ne((Rr) => new Set(Rr).add(ln.id));
        let { error: ir } = io("localSettings", {
          skillOverrides: {
            [ln.cmdName]: Mjl(ln, pn),
          },
        });
        if (ir) {
          de(ir.message);
          return;
        }
        Z((Rr) => Rr + 1);
      }
    }, [ct, Ke, oe, W, He, bt]),
    Ne = fu.useCallback(() => {
      let pt = Ke[ct];
      if (!ZEt(pt)) return;
      if (pt.kind === "disabled-header") {
        Me((pn) => !pn);
        return;
      }
      let ln = pt.item;
      if (ln.type === "plugin") {
        let pn = W.find((ir) => ir.plugin.source === ln.plugin.source);
        if (pn) (N(pn), C("plugin-details"), en(0), de(null), me(null));
      } else if (ln.type === "flagged-plugin")
        (C({
          type: "flagged-detail",
          plugin: {
            id: ln.id,
            name: ln.name,
            marketplace: ln.marketplace,
            reason: ln.reason,
            text: ln.text,
            flaggedAt: ln.flaggedAt,
          },
        }),
          de(null));
      else if (ln.type === "failed-plugin")
        (C({
          type: "failed-plugin-details",
          plugin: {
            id: ln.id,
            name: ln.name,
            marketplace: ln.marketplace,
            errors: ln.errors,
            scope: ln.scope,
          },
        }),
          en(0),
          de(null));
      else if (ln.type === "mcp")
        (C({
          type: "mcp-detail",
          client: ln.client,
        }),
          de(null));
      else if (ln.type === "skill")
        (C({
          type: "skill-detail",
          skill: ln,
        }),
          de(null));
    }, [ct, Ke, W]);
  No(
    {
      "select:previous": () => {
        let pt = Et(ct - 1, -1);
        if (pt === -1) {
          if (!Y && we.length > 0) g(true);
        } else vt.handleSelectionChange(pt, Je);
      },
      "select:next": () => {
        let pt = Et(ct + 1, 1);
        if (pt !== -1) vt.handleSelectionChange(pt, Je);
      },
      "select:accept": Ne,
    },
    {
      context: "Select",
      isActive: v === "plugin-list" && !m,
    },
  );
  let it = fu.useCallback(() => {
    let pt = Ke[ct];
    if (pt?.kind !== "item") return false;
    ((gt.current = {
      section: pt.section,
      id: pt.item.id,
    }),
      Ze(pt.item.id));
  }, [Ke, ct, Ze]);
  No(
    {
      "plugin:toggle": Re,
      "plugin:favorite": it,
    },
    {
      context: "Plugin",
      isActive: v === "plugin-list" && !m,
    },
  );
  let Tt = fu.useCallback(() => {
    if (typeof v !== "object" || v.type !== "flagged-detail") return;
    (yjl(v.plugin.id), C("plugin-list"));
  }, [v]);
  No(
    {
      "select:accept": Tt,
    },
    {
      context: "Select",
      isActive: typeof v === "object" && v.type === "flagged-detail",
    },
  );
  let un = fu.useMemo(() => {
    if (v !== "plugin-details" || !M) return [];
    let pt = jo(),
      ln = B,
      pn = VEt(ln, M.plugin.manifest, pt),
      ir = M.marketplace === "builtin",
      Rr = U0(M.marketplace),
      _o = [];
    if (
      (_o.push({
        label: pn ? "Disable plugin" : "Enable plugin",
        action: () => void fe(pn ? "disable" : "enable"),
      }),
      _o.push({
        label: Ie.has(ln) ? "Remove from favorites" : "Add to favorites",
        action: () => Ze(ln),
      }),
      !ir && !Rr)
    ) {
      if (
        (_o.push({
          label: M.pendingUpdate ? "Unmark for update" : "Mark for update",
          action: async () => {
            try {
              let Xo = await checkIfLocalPlugin(Qo(ln).name, M.marketplace);
              if (Xo) {
                de(Xo);
                return;
              }
              let Pn = [...W],
                lr = Pn.findIndex((eo) => eo.plugin.source === M.plugin.source);
              if (lr !== -1)
                ((Pn[lr].pendingUpdate = !M.pendingUpdate),
                  V(Pn),
                  N({
                    ...M,
                    pendingUpdate: !M.pendingUpdate,
                  }));
            } catch (Xo) {
              de(Xo instanceof Error ? Xo.message : "Failed to check plugin update availability");
            }
          },
        }),
        kr)
      )
        _o.push({
          label: "Configure",
          action: async () => {
            Hn(true);
            try {
              let Xo = M.plugin.manifest.mcpServers,
                Pn = null;
              if (typeof Xo === "string" && n6(Xo)) Pn = Xo;
              else if (Array.isArray(Xo)) {
                for (let Kn of Xo)
                  if (typeof Kn === "string" && n6(Kn)) {
                    Pn = Kn;
                    break;
                  }
              }
              if (!Pn) {
                (de("No MCPB file found in plugin"), Hn(false));
                return;
              }
              let lr = B,
                eo = await c3t(Pn, M.plugin.path, lr, void 0, void 0, true);
              if ("status" in eo && eo.status === "needs-config") (nn(eo), C("configuring"));
              else de("Failed to load MCPB for configuration");
            } catch (Xo) {
              let Pn = be(Xo);
              de(`Failed to load configuration: ${Pn}`);
            } finally {
              Hn(false);
            }
          },
        });
      if (M.plugin.manifest.userConfig && Object.keys(M.plugin.manifest.userConfig).length > 0)
        _o.push({
          label: "Configure options",
          action: () => {
            C({
              type: "configuring-options",
              schema: M.plugin.manifest.userConfig,
            });
          },
        });
      (_o.push({
        label: "Update now",
        action: () => void fe("update"),
      }),
        _o.push({
          label: "Uninstall",
          action: () => void fe("uninstall"),
        }));
    }
    if (M.plugin.manifest.homepage)
      _o.push({
        label: "Open homepage",
        action: () => void ac(M.plugin.manifest.homepage),
      });
    if (M.plugin.manifest.repository)
      _o.push({
        label: "View repository",
        action: () => void ac(M.plugin.manifest.repository),
      });
    return (
      _o.push({
        label: "Back to plugin list",
        action: () => {
          (C("plugin-list"), N(null), de(null));
        },
      }),
      _o
    );
  }, [v, M, kr, W, Ie, Ze]);
  (No(
    {
      "select:previous": () => {
        if (jt > 0) en(jt - 1);
      },
      "select:next": () => {
        if (jt < un.length - 1) en(jt + 1);
      },
      "select:accept": () => {
        if (un[jt]) un[jt].action();
      },
    },
    {
      context: "Select",
      isActive: v === "plugin-details" && !!M,
    },
  ),
    No(
      {
        "select:accept": () => {
          if (typeof v === "object" && v.type === "failed-plugin-details")
            (async () => {
              (ce(true), de(null));
              let pt = v.plugin.id,
                ln = v.plugin.scope,
                pn = GEt(ln) ? await OHe(pt, ln, false) : await OHe(pt, "user", false),
                ir = pn.success;
              if (!ir) {
                for (let Rr of OO) {
                  let _o = yn(Rr);
                  if (_o?.enabledPlugins?.[pt] !== void 0)
                    (io(Rr, {
                      enabledPlugins: {
                        ..._o.enabledPlugins,
                        [pt]: void 0,
                      },
                    }),
                      (ir = true));
                }
                Ah();
              }
              if (ir) (await n(), ce(false), C("plugin-list"));
              else (ce(false), de(pn.message));
            })();
        },
      },
      {
        context: "Select",
        isActive:
          typeof v === "object" &&
          v.type === "failed-plugin-details" &&
          v.plugin.scope !== "managed" &&
          !U0(v.plugin.marketplace),
      },
    ),
    No(
      {
        "confirm:yes": () => {
          if (!M) return;
          (ce(true), de(null));
          let pt = B,
            { error: ln } = io("localSettings", {
              enabledPlugins: {
                ...yn("localSettings")?.enabledPlugins,
                [pt]: false,
              },
            });
          if (ln) {
            (ce(false), de(`Failed to write settings: ${ln.message}`));
            return;
          }
          (Ah(),
            bt("disable", pt),
            he(
              `${nt.tick} Disabled ${fS(M.plugin)} in .claude/settings.local.json. Run /reload-plugins to apply.`,
            ));
        },
        "confirm:no": () => {
          (C("plugin-details"), de(null));
        },
      },
      {
        context: "Confirmation",
        isActive: v === "confirm-project-uninstall" && !!M && !ee,
      },
    ));
  function ze(pt) {
    if (pt.ctrl || pt.meta || ee) return;
    if (!M) return;
    let ln = B,
      pn = M.scope;
    if (!pn || pn === "builtin" || !GEt(pn)) return;
    let ir = async (Rr) => {
      (ce(true), de(null));
      try {
        let _o = await OHe(ln, pn, Rr);
        if (!_o.success) throw Error(_o.message);
        (Ah(), bt("uninstall", ln));
        let Xo = Rr ? "" : " \xB7 data preserved";
        he(`${nt.tick} ${_o.message}${Xo}`);
      } catch (_o) {
        (ce(false), de(_o instanceof Error ? _o.message : String(_o)));
      }
    };
    if (pt.key === "y" || pt.key === "Y") (pt.preventDefault(), ir(true));
    else if (pt.key === "n" || pt.key === "N") (pt.preventDefault(), ir(false));
    else if (pt.key === "escape") (pt.preventDefault(), C("plugin-details"), de(null));
  }
  fu.useEffect(() => {
    Je(0);
  }, [x]);
  function Mt(pt) {
    if (m) {
      P(pt);
      return;
    }
    if (pt.ctrl || pt.meta) return;
    if (pt.key === "/") (pt.preventDefault(), g(true), I(""), Je(0));
    else if (pt.key.length === 1 && pt.key !== " ")
      (pt.preventDefault(), g(true), I(pt.key), Je(0));
  }
  function Qt(pt) {
    if (m) {
      O(pt);
      return;
    }
    let ln = (pt.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (!ln) return;
    (pt.preventDefault(), g(true), I(ln), Je(0));
  }
  if (Y)
    return vr.jsx(w, {
      children: "Loading installed plugins\u2026",
    });
  if (we.length === 0)
    return vr.jsxs(U, {
      flexDirection: "column",
      children: [
        vr.jsx(U, {
          marginBottom: 1,
          children: vr.jsx(w, {
            bold: true,
            children: "Manage plugins",
          }),
        }),
        Ee &&
          vr.jsx(U, {
            marginBottom: 1,
            paddingLeft: 2,
            children: vr.jsx(w, {
              color: "success",
              children: Ee,
            }),
          }),
        vr.jsx(Fl, {
          children: "No plugins or MCP servers installed.",
        }),
        vr.jsx(U, {
          marginTop: 1,
          children: vr.jsx(w, {
            dimColor: true,
            children: vr.jsx(mr, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back",
            }),
          }),
        }),
      ],
    });
  if (typeof v === "object" && v.type === "plugin-options" && M) {
    let pt = B;
    return vr.jsx(WBo, {
      plugin: M.plugin,
      pluginId: pt,
      onDone: (ln, pn, ir) => {
        let Rr = fS(M.plugin);
        switch (ln) {
          case "configured":
          case "skipped":
            he(
              ln === "configured" && ir
                ? `${nt.tick} Enabled and configured ${Rr}. Run /reload-plugins to apply.`
                : `${nt.tick} Enabled ${Rr}. Run /reload-plugins to apply.`,
            );
            break;
          case "error":
            (de(`Failed to save configuration: ${pn}`),
              ce(false),
              ge((_o) => _o + 1),
              C("plugin-details"),
              n());
            break;
        }
      },
    });
  }
  if (typeof v === "object" && v.type === "configuring-options" && M) {
    let pt = B;
    return vr.jsx(fXt, {
      title: `Configure ${fS(M.plugin)}`,
      subtitle: "Plugin options",
      configSchema: v.schema,
      initialValues: m$(pt),
      onSave: async (ln) => {
        try {
          (await wdt(pt, ln, v.schema), Ah());
          let pn = Object.keys(ln).length > 0;
          if (pn) n();
          t(
            pn
              ? "Configuration saved. Run /reload-plugins for changes to take effect."
              : "No configuration changes.",
          );
        } catch (pn) {
          de(`Failed to save configuration: ${be(pn)}`);
        }
        C("plugin-details");
      },
      onCancel: () => C("plugin-details"),
    });
  }
  if (v === "configuring" && Dn && M) {
    let pn = function () {
        (nn(null), C("plugin-details"));
      },
      pt = B;
    async function ln(ir) {
      if (!Dn || !M) return;
      try {
        let Rr = M.plugin.manifest.mcpServers,
          _o = null;
        if (typeof Rr === "string" && n6(Rr)) _o = Rr;
        else if (Array.isArray(Rr)) {
          for (let Xo of Rr)
            if (typeof Xo === "string" && n6(Xo)) {
              _o = Xo;
              break;
            }
        }
        if (!_o) {
          (de("No MCPB file found"), C("plugin-details"));
          return;
        }
        (await c3t(_o, M.plugin.path, pt, void 0, ir),
          de(null),
          nn(null),
          C("plugin-details"),
          t("Configuration saved. Run /reload-plugins for changes to take effect."));
      } catch (Rr) {
        let _o = be(Rr);
        (de(`Failed to save configuration: ${_o}`), C("plugin-details"));
      }
    }
    return vr.jsx(fXt, {
      title: `Configure ${tDe(Dn.manifest.display_name) ?? Dn.manifest.name}`,
      subtitle: `Plugin: ${fS(M.plugin)}`,
      configSchema: Dn.configSchema,
      initialValues: Dn.existingConfig,
      onSave: ln,
      onCancel: pn,
    });
  }
  if (typeof v === "object" && v.type === "flagged-detail") {
    let pt = v.plugin;
    return vr.jsxs(U, {
      flexDirection: "column",
      children: [
        vr.jsx(U, {
          children: vr.jsxs(w, {
            bold: true,
            children: [pt.name, " @ ", pt.marketplace],
          }),
        }),
        vr.jsxs(U, {
          marginBottom: 1,
          children: [
            vr.jsx(w, {
              dimColor: true,
              children: "Status: ",
            }),
            vr.jsx(w, {
              color: "error",
              children: "Removed",
            }),
          ],
        }),
        vr.jsxs(U, {
          marginBottom: 1,
          flexDirection: "column",
          children: [
            vr.jsxs(w, {
              color: "error",
              children: ["Removed from marketplace \xB7 reason: ", pt.reason],
            }),
            vr.jsx(w, {
              children: pt.text,
            }),
            vr.jsxs(w, {
              dimColor: true,
              children: ["Flagged on ", new Date(pt.flaggedAt).toLocaleDateString()],
            }),
          ],
        }),
        vr.jsx(U, {
          marginTop: 1,
          flexDirection: "column",
          children: vr.jsxs(U, {
            children: [
              vr.jsxs(w, {
                children: [nt.pointer, " "],
              }),
              vr.jsx(w, {
                color: "suggestion",
                children: "Dismiss",
              }),
            ],
          }),
        }),
        vr.jsxs(Tn, {
          children: [
            vr.jsx(mr, {
              action: "select:accept",
              context: "Select",
              fallback: "Enter",
              description: "dismiss",
            }),
            vr.jsx(mr, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back",
            }),
          ],
        }),
      ],
    });
  }
  if (v === "plugin-usage" && M)
    return vr.jsx(wjl, {
      plugin: M.plugin,
    });
  if (v === "confirm-project-uninstall" && M)
    return vr.jsxs(U, {
      flexDirection: "column",
      children: [
        vr.jsxs(w, {
          bold: true,
          color: "warning",
          children: [fS(M.plugin), " is enabled in .claude/settings.json (shared with your team)"],
        }),
        vr.jsxs(U, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            vr.jsx(w, {
              children: "Disable it just for you in .claude/settings.local.json?",
            }),
            vr.jsx(w, {
              dimColor: true,
              children:
                "This has the same effect as uninstalling, without affecting other contributors.",
            }),
          ],
        }),
        ae &&
          vr.jsx(U, {
            marginTop: 1,
            children: vr.jsx(Va, {
              error: ae,
            }),
          }),
        vr.jsx(U, {
          marginTop: 1,
          children: ee
            ? vr.jsx(w, {
                dimColor: true,
                children: "Disabling\u2026",
              })
            : vr.jsxs(Tn, {
                children: [
                  vr.jsx(mr, {
                    action: "confirm:yes",
                    context: "Confirmation",
                    fallback: "y",
                    description: "disable",
                  }),
                  vr.jsx(mr, {
                    action: "confirm:no",
                    context: "Confirmation",
                    fallback: "Esc",
                    description: "cancel",
                  }),
                ],
              }),
        }),
      ],
    });
  if (typeof v === "object" && v.type === "confirm-data-cleanup" && M)
    return vr.jsxs(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: ze,
      children: [
        vr.jsxs(w, {
          bold: true,
          children: [fS(M.plugin), " has", " ", v.size.human, " of persistent data"],
        }),
        vr.jsxs(U, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            vr.jsx(w, {
              children: "Delete it along with the plugin?",
            }),
            vr.jsx(w, {
              dimColor: true,
              children: M2t(B),
            }),
          ],
        }),
        ae &&
          vr.jsx(U, {
            marginTop: 1,
            children: vr.jsx(Va, {
              error: ae,
            }),
          }),
        vr.jsx(U, {
          marginTop: 1,
          children: ee
            ? vr.jsx(w, {
                dimColor: true,
                children: "Uninstalling\u2026",
              })
            : vr.jsxs(Tn, {
                children: [
                  vr.jsx(ht, {
                    chord: "y",
                    action: "delete",
                    bold: true,
                  }),
                  vr.jsx(ht, {
                    chord: "n",
                    action: "keep",
                    bold: true,
                  }),
                  vr.jsx(ht, {
                    chord: "escape",
                    action: "cancel",
                    bold: true,
                    format: {
                      keyCase: "lower",
                    },
                  }),
                ],
              }),
        }),
      ],
    });
  if (v === "plugin-details" && M) {
    let pt = jo(),
      ln = B,
      pn = VEt(ln, M.plugin.manifest, pt),
      ir = (lr, eo) => lr === M.plugin.name || eo === ln,
      Rr = u
        .filter(
          (lr) =>
            !("orphan" in lr && lr.orphan) && ir("plugin" in lr ? lr.plugin : void 0, lr.source),
        )
        .map((lr) => ({
          message: a1e(lr),
          guidance: FKe(lr),
        })),
      _o = d
        .filter((lr) => ir("plugin" in lr ? lr.plugin : void 0, lr.source))
        .map((lr) => ({
          message: zM(lr),
          guidance: $Pn(lr),
        })),
      Xo = Tjl(M.plugin.repository),
      Pn =
        Rr.length === 0 && _o.length === 0
          ? null
          : vr.jsxs(U, {
              flexDirection: "column",
              marginBottom: 1,
              children: [
                vr.jsx($jl, {
                  entries: Rr,
                  color: "error",
                  noun: "error",
                }),
                vr.jsx($jl, {
                  entries: _o,
                  color: "warning",
                  noun: "note",
                }),
              ],
            });
    return vr.jsxs(U, {
      flexDirection: "column",
      children: [
        vr.jsx(U, {
          children: vr.jsxs(w, {
            bold: true,
            children: [fS(M.plugin), " @", " ", M.marketplace],
          }),
        }),
        vr.jsxs(U, {
          children: [
            vr.jsx(w, {
              dimColor: true,
              children: "Scope: ",
            }),
            vr.jsx(w, {
              children: M.scope || "user",
            }),
          ],
        }),
        M.plugin.manifest.version &&
          vr.jsxs(U, {
            children: [
              vr.jsx(w, {
                dimColor: true,
                children: "Version: ",
              }),
              vr.jsx(w, {
                children: M.plugin.manifest.version,
              }),
            ],
          }),
        M.plugin.manifest.description &&
          vr.jsx(U, {
            marginBottom: 1,
            children: vr.jsx(w, {
              children: M.plugin.manifest.description,
            }),
          }),
        M.plugin.manifest.author &&
          vr.jsxs(U, {
            children: [
              vr.jsx(w, {
                dimColor: true,
                children: "Author: ",
              }),
              vr.jsx(w, {
                children: M.plugin.manifest.author.name,
              }),
            ],
          }),
        vr.jsxs(U, {
          marginBottom: 1,
          children: [
            vr.jsx(w, {
              dimColor: true,
              children: "Status: ",
            }),
            vr.jsx(w, {
              color: pn ? "success" : "warning",
              children: pn ? "Enabled" : "Disabled",
            }),
            M.pendingUpdate &&
              vr.jsx(w, {
                color: "suggestion",
                children: " \xB7 Marked for update",
              }),
            Xo !== null &&
              vr.jsxs(w, {
                dimColor: true,
                children: [
                  " ",
                  "\xB7 Last used:",
                  " ",
                  Xo === 0 ? "today" : `${Xo} ${bn(Xo, "day")} ago`,
                ],
              }),
          ],
        }),
        vr.jsx(gBf, {
          plugin: M.plugin,
          marketplace: M.marketplace,
        }),
        Pn,
        vr.jsx(U, {
          marginTop: 1,
          flexDirection: "column",
          children: un.map((lr, eo) => {
            let Kn = eo === jt;
            return vr.jsxs(
              U,
              {
                children: [
                  Kn &&
                    vr.jsxs(w, {
                      children: [nt.pointer, " "],
                    }),
                  !Kn &&
                    vr.jsx(w, {
                      children: "  ",
                    }),
                  vr.jsx(w, {
                    bold: Kn,
                    color: lr.label.includes("Uninstall")
                      ? "error"
                      : lr.label.includes("Update")
                        ? "suggestion"
                        : void 0,
                    children: lr.label,
                  }),
                ],
              },
              eo,
            );
          }),
        }),
        ee &&
          vr.jsx(U, {
            marginTop: 1,
            children: vr.jsx(w, {
              children: "Processing\u2026",
            }),
          }),
        ae &&
          vr.jsx(U, {
            marginTop: 1,
            children: vr.jsx(Va, {
              error: ae,
            }),
          }),
        vr.jsx(U, {
          marginTop: 1,
          children: vr.jsx(w, {
            dimColor: true,
            italic: true,
            children: vr.jsxs(Tn, {
              children: [
                vr.jsx(mr, {
                  action: "select:previous",
                  context: "Select",
                  fallback: "\u2191",
                  description: "navigate",
                }),
                vr.jsx(mr, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select",
                }),
                vr.jsx(mr, {
                  action: "confirm:no",
                  context: "Settings",
                  fallback: "Esc",
                  description: "go back",
                }),
              ],
            }),
          }),
        }),
      ],
    });
  }
  if (typeof v === "object" && v.type === "failed-plugin-details") {
    let pt = v.plugin,
      ln = pt.errors[0],
      pn = ln ? a1e(ln) : "Failed to load";
    return vr.jsxs(U, {
      flexDirection: "column",
      children: [
        vr.jsxs(w, {
          children: [
            vr.jsx(w, {
              bold: true,
              children: pt.name,
            }),
            vr.jsxs(w, {
              dimColor: true,
              children: [" @ ", pt.marketplace],
            }),
            vr.jsxs(w, {
              dimColor: true,
              children: [" (", pt.scope, ")"],
            }),
          ],
        }),
        vr.jsx(w, {
          color: "error",
          children: pn,
        }),
        pt.scope === "managed"
          ? vr.jsx(U, {
              marginTop: 1,
              children: vr.jsx(w, {
                dimColor: true,
                children: "Managed by your organization \u2014 contact your admin",
              }),
            })
          : vr.jsxs(U, {
              marginTop: 1,
              children: [
                vr.jsxs(w, {
                  color: "suggestion",
                  children: [nt.pointer, " "],
                }),
                vr.jsx(w, {
                  bold: true,
                  children: "Remove",
                }),
              ],
            }),
        ee &&
          vr.jsx(w, {
            children: "Processing\u2026",
          }),
        vr.jsx(Va, {
          error: ae,
        }),
        U0(pt.marketplace) &&
          vr.jsx(U, {
            marginTop: 1,
            children: vr.jsx(w, {
              dimColor: true,
              children:
                "This is a directory-loaded plugin \u2014 delete the directory to remove it; edits there take effect after /reload-plugins.",
            }),
          }),
        vr.jsx(U, {
          marginTop: 1,
          children: vr.jsx(w, {
            dimColor: true,
            italic: true,
            children: vr.jsxs(Tn, {
              children: [
                pt.scope !== "managed" &&
                  !U0(pt.marketplace) &&
                  vr.jsx(mr, {
                    action: "select:accept",
                    context: "Select",
                    fallback: "Enter",
                    description: "remove",
                  }),
                vr.jsx(mr, {
                  action: "confirm:no",
                  context: "Settings",
                  fallback: "Esc",
                  description: "go back",
                }),
              ],
            }),
          }),
        }),
      ],
    });
  }
  if (typeof v === "object" && v.type === "skill-detail") {
    let pt = v.skill,
      ln = [pt.override, ...fBf.filter((ir) => ir !== pt.override)],
      pn = (ir) => {
        if (ir === pt.override) return;
        let { error: Rr } = io("localSettings", {
          skillOverrides: {
            [pt.cmdName]: Mjl(pt, ir),
          },
        });
        if (Rr) {
          de(Rr.message);
          return;
        }
        (ne((_o) => new Set(_o).add(pt.id)),
          Z((_o) => _o + 1),
          C({
            type: "skill-detail",
            skill: {
              ...pt,
              override: ir,
            },
          }));
      };
    return vr.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        vr.jsx(w, {
          bold: true,
          children: pt.name,
        }),
        pt.description &&
          vr.jsx(w, {
            dimColor: true,
            children: pt.description,
          }),
        pt.whenToUse &&
          vr.jsxs(w, {
            dimColor: true,
            children: ["When to use: ", pt.whenToUse],
          }),
        vr.jsxs(w, {
          dimColor: true,
          children: ["Source: ", pt.source, " \xB7 ~", pt.tokenEstimate, " tokens"],
        }),
        vr.jsxs(w, {
          dimColor: true,
          children: [
            "Usage:",
            " ",
            pt.usage
              ? `${pt.usage.count}\xD7 \xB7 last used ${pt.usage.daysSinceUse === 0 ? "today" : `${pt.usage.daysSinceUse}d ago`}`
              : "never invoked",
          ],
        }),
        pt.allowedTools &&
          pt.allowedTools.length > 0 &&
          vr.jsxs(w, {
            dimColor: true,
            children: ["Allowed tools: ", pt.allowedTools.join(", ")],
          }),
        pt.skillRoot &&
          vr.jsxs(w, {
            dimColor: true,
            children: ["Path: ", pt.skillRoot],
          }),
        pt.lockSource === "policy" || pt.lockSource === "flag"
          ? vr.jsxs(w, {
              dimColor: true,
              children: ["State: ", pt.override, " (locked by ", pt.lockSource, " settings)"],
            })
          : vr.jsxs(U, {
              flexDirection: "column",
              children: [
                vr.jsxs(w, {
                  children: [
                    "State:",
                    pt.lockSource === "author" &&
                      vr.jsxs(w, {
                        dimColor: true,
                        children: [
                          " ",
                          "(on/name-only locked by frontmatter disable-model-invocation)",
                        ],
                      }),
                  ],
                }),
                vr.jsx(
                  JEt,
                  {
                    visibleCount: 4,
                    onSelect: (ir) => {
                      let Rr = ln[ir];
                      if (pt.lockSource === "author" && Rr !== "off") {
                        pn("user-invocable-only");
                        return;
                      }
                      pn(Rr);
                    },
                    children: ln.map((ir) => {
                      let Rr =
                        pt.lockSource === "author" && ir !== "user-invocable-only" && ir !== "off";
                      return vr.jsx(
                        JEt.Item,
                        {
                          children: vr.jsxs(w, {
                            dimColor: Rr,
                            children: [
                              ir === pt.override ? nt.radioOn : nt.radioOff,
                              " ",
                              ir,
                              Rr ? " (locked)" : "",
                            ],
                          }),
                        },
                        ir,
                      );
                    }),
                  },
                  pt.override,
                ),
              ],
            }),
        vr.jsxs(Tn, {
          children: [
            vr.jsx(ht, {
              chord: "Enter",
              action: "set state",
            }),
            vr.jsx(w, {
              dimColor: true,
              children: " \xB7 ",
            }),
            vr.jsx(ht, {
              chord: "Esc",
              action: "go back",
            }),
          ],
        }),
      ],
    });
  }
  if (typeof v === "object" && v.type === "mcp-detail") {
    let pt = v.client,
      ln = sde(c, pt.name).length,
      pn = () => {
        C({
          type: "mcp-tools",
          client: pt,
        });
      },
      ir = () => {
        C("plugin-list");
      },
      Rr = (Pn) => {
        if (Pn) t(Pn);
        C("plugin-list");
      },
      _o = pt.config.scope,
      Xo = pt.config.type ?? "stdio";
    if (Xo === "stdio") {
      let Pn = {
        name: pt.name,
        client: pt,
        scope: _o,
        transport: "stdio",
        config: pt.config,
      };
      return vr.jsx(iXt, {
        server: Pn,
        serverToolsCount: ln,
        onViewTools: pn,
        onCancel: ir,
        onComplete: Rr,
        borderless: true,
      });
    } else if (Xo === "sse") {
      let Pn = {
        name: pt.name,
        client: pt,
        scope: _o,
        transport: "sse",
        isAuthenticated: void 0,
        config: pt.config,
      };
      return vr.jsx(PKe, {
        server: Pn,
        serverToolsCount: ln,
        onViewTools: pn,
        onCancel: ir,
        onComplete: Rr,
        borderless: true,
      });
    } else if (Xo === "http") {
      let Pn = {
        name: pt.name,
        client: pt,
        scope: _o,
        transport: "http",
        isAuthenticated: void 0,
        config: pt.config,
      };
      return vr.jsx(PKe, {
        server: Pn,
        serverToolsCount: ln,
        onViewTools: pn,
        onCancel: ir,
        onComplete: Rr,
        borderless: true,
      });
    } else if (Xo === "claudeai-proxy") {
      let Pn = {
        name: pt.name,
        client: pt,
        scope: _o,
        transport: "claudeai-proxy",
        isAuthenticated: void 0,
        config: pt.config,
      };
      return vr.jsx(PKe, {
        server: Pn,
        serverToolsCount: ln,
        onViewTools: pn,
        onCancel: ir,
        onComplete: Rr,
        borderless: true,
      });
    }
    return vr.jsxs(U, {
      flexDirection: "column",
      paddingX: 1,
      children: [
        vr.jsxs(w, {
          color: "warning",
          children: ["No details view for ", pt.name, " (transport: ", Xo, ")."],
        }),
        vr.jsx(Tn, {
          children: vr.jsx(mr, {
            action: "confirm:no",
            context: "Settings",
            fallback: "Esc",
            description: "go back",
          }),
        }),
      ],
    });
  }
  if (typeof v === "object" && v.type === "mcp-tools") {
    let pt = v.client,
      ln = pt.config.scope,
      pn = pt.config.type ?? "stdio",
      ir;
    if (pn === "stdio")
      ir = {
        name: pt.name,
        client: pt,
        scope: ln,
        transport: "stdio",
        config: pt.config,
      };
    else if (pn === "sse")
      ir = {
        name: pt.name,
        client: pt,
        scope: ln,
        transport: "sse",
        isAuthenticated: void 0,
        config: pt.config,
      };
    else if (pn === "http")
      ir = {
        name: pt.name,
        client: pt,
        scope: ln,
        transport: "http",
        isAuthenticated: void 0,
        config: pt.config,
      };
    else
      ir = {
        name: pt.name,
        client: pt,
        scope: ln,
        transport: "claudeai-proxy",
        isAuthenticated: void 0,
        config: pt.config,
      };
    return vr.jsx(lXt, {
      server: ir,
      onSelectTool: (Rr) => {
        C({
          type: "mcp-tool-detail",
          client: pt,
          tool: Rr,
        });
      },
      onBack: () =>
        C({
          type: "mcp-detail",
          client: pt,
        }),
    });
  }
  if (typeof v === "object" && v.type === "mcp-tool-detail") {
    let { client: pt, tool: ln } = v,
      pn = pt.config.scope,
      ir = pt.config.type ?? "stdio",
      Rr;
    if (ir === "stdio")
      Rr = {
        name: pt.name,
        client: pt,
        scope: pn,
        transport: "stdio",
        config: pt.config,
      };
    else if (ir === "sse")
      Rr = {
        name: pt.name,
        client: pt,
        scope: pn,
        transport: "sse",
        isAuthenticated: void 0,
        config: pt.config,
      };
    else if (ir === "http")
      Rr = {
        name: pt.name,
        client: pt,
        scope: pn,
        transport: "http",
        isAuthenticated: void 0,
        config: pt.config,
      };
    else
      Rr = {
        name: pt.name,
        client: pt,
        scope: pn,
        transport: "claudeai-proxy",
        isAuthenticated: void 0,
        config: pt.config,
      };
    return vr.jsx(aXt, {
      tool: ln,
      server: Rr,
      onBack: () =>
        C({
          type: "mcp-tools",
          client: pt,
        }),
    });
  }
  let Er = vt.getVisibleItems(Ke);
  return vr.jsxs(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: Mt,
    onPaste: Qt,
    children: [
      vr.jsx(U, {
        marginBottom: 1,
        children: vr.jsx(LP, {
          query: x,
          isFocused: m,
          isTerminalFocused: y,
          width: S - 4,
          cursorOffset: k,
          onCursorOffsetChange: D,
          onFocus: () => g(true),
        }),
      }),
      Tl() &&
        vr.jsx(U, {
          marginBottom: 1,
          paddingLeft: 2,
          children: vr.jsxs(w, {
            color: "warning",
            children: [
              "Safe mode: plugins are disabled this session \u2014 changes here save but won't load until safe mode is off.",
              " ",
              Cx(qH()),
              " to re-enable.",
            ],
          }),
        }),
      Ee &&
        vr.jsx(U, {
          marginBottom: 1,
          paddingLeft: 2,
          children: vr.jsx(w, {
            color: "success",
            children: Ee,
          }),
        }),
      Ke.length === 0 &&
        x &&
        vr.jsx(U, {
          marginBottom: 1,
          children: vr.jsxs(Fl, {
            children: ['No items match "', x, '"'],
          }),
        }),
      vt.scrollPosition.canScrollUp &&
        vr.jsx(U, {
          children: vr.jsxs(w, {
            dimColor: true,
            children: [" ", nt.arrowUp, " more above"],
          }),
        }),
      Er.map((pt, ln) => {
        let pn = vt.toActualIndex(ln),
          ir = pn === ct && !m;
        switch (pt.kind) {
          case "spacer":
            return vr.jsx(
              U,
              {
                height: 1,
              },
              `spacer:${pn}`,
            );
          case "section-header":
            return vr.jsx(
              U,
              {
                paddingLeft: 2,
                children: vr.jsx(w, {
                  dimColor: pt.section !== "attention",
                  color: pt.section === "attention" ? "warning" : void 0,
                  bold: true,
                  children:
                    pt.section === "attention"
                      ? "Needs attention"
                      : pt.section === "disused"
                        ? "Not used recently"
                        : "Favorites",
                }),
              },
              `section:${pt.section}`,
            );
          case "scope-header":
            return vr.jsx(
              U,
              {
                paddingLeft: 4,
                children: vr.jsx(w, {
                  dimColor: true,
                  children: mBf(pt.scope),
                }),
              },
              `scope:${pn}`,
            );
          case "disabled-header":
            return vr.jsx(
              U,
              {
                paddingLeft: 2,
                children: vr.jsxs(w, {
                  color: ir ? "suggestion" : void 0,
                  children: [
                    ir ? `${nt.pointer} ` : "  ",
                    Be ? nt.arrowDown : nt.arrowRight,
                    " Show",
                    pt.disabledCount > 0 &&
                      vr.jsxs(vr.Fragment, {
                        children: [
                          " ",
                          "disabled ",
                          vr.jsxs(w, {
                            dimColor: true,
                            children: ["(", pt.disabledCount, ")"],
                          }),
                        ],
                      }),
                    pt.disabledCount > 0 && pt.unusedConnectorCount > 0 && " \xB7",
                    pt.unusedConnectorCount > 0 &&
                      vr.jsxs(vr.Fragment, {
                        children: [
                          " ",
                          "unused claude.ai connectors",
                          " ",
                          vr.jsxs(w, {
                            dimColor: true,
                            children: ["(", pt.unusedConnectorCount, ")"],
                          }),
                        ],
                      }),
                  ],
                }),
              },
              "section:disabled",
            );
          case "item":
            return vr.jsx(
              xjl,
              {
                item: pt.item,
                isSelected: ir,
                health: pt.item.type === "plugin" ? f?.get(pt.item.name) : void 0,
              },
              `${pt.section}:${pt.item.id}`,
            );
        }
      }),
      vt.scrollPosition.canScrollDown &&
        vr.jsx(U, {
          children: vr.jsxs(w, {
            dimColor: true,
            children: [" ", nt.arrowDown, " more below"],
          }),
        }),
      vr.jsx(U, {
        marginTop: 1,
        marginLeft: 1,
        children: vr.jsx(w, {
          dimColor: true,
          italic: true,
          children: vr.jsxs(Tn, {
            children: [
              vr.jsx(w, {
                children: "Type to search",
              }),
              vr.jsx(mr, {
                action: "plugin:toggle",
                context: "Plugin",
                fallback: "Space",
                description: "toggle",
              }),
              vr.jsx(mr, {
                action: "plugin:favorite",
                context: "Plugin",
                fallback: "f",
                description: "favorite",
              }),
              vr.jsx(mr, {
                action: "select:accept",
                context: "Select",
                fallback: "Enter",
                description: "view",
              }),
              vr.jsx(mr, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "go back",
              }),
            ],
          }),
        }),
      }),
      ae &&
        vr.jsx(U, {
          marginTop: 1,
          marginLeft: 1,
          children: vr.jsx(Va, {
            error: ae,
          }),
        }),
      oe.size > 0 &&
        vr.jsx(U, {
          marginLeft: 1,
          children: vr.jsx(w, {
            dimColor: true,
            italic: true,
            children: "Run /reload-plugins to apply changes",
          }),
        }),
    ],
  });
}
var fUo, Ojl, pUo, fu, vr, fBf;
