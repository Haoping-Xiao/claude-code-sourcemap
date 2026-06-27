// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K2l
// matched 2.1.88 source: src/services/plugins/pluginOperations.ts
// class=modified  jaccard=0.2894  score=0.3985  fileCov=0.5139
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module K2l] deps: si, Ye, je, At, V2l
((mrr = R(rt(), 1)), (JBo = R(se(), 1)));
function QBo(e, t) {
  let n = {
    install: "installed",
    update: "updated",
    uninstall: "uninstalled",
  }[t];
  if (e === Bne)
    return `This plugin is loaded via --plugin-dir for this session with no marketplace backing \u2014 it cannot be ${n}. Drop the --plugin-dir flag to stop loading it, or \`claude plugin disable\` to turn it off.`;
  return `This plugin is loaded from ${fM(Ase.join(tr(), "skills"))}/ with no marketplace backing \u2014 it cannot be ${n}. Delete the directory to remove it; \`claude plugin disable\` to turn it off; edits there take effect after /reload-plugins.`;
}
function ZBo(e) {
  if (!JL.includes(e)) throw Error(`Invalid scope "${e}". Must be one of: ${JL.join(", ")}`);
}
function GEt(e) {
  return JL.includes(e);
}
function WEt(e) {
  return e === "project" || e === "local" ? yr() : void 0;
}
function X2l(e) {
  let t = yn("projectSettings")?.enabledPlugins;
  if (!t) return !1;
  let n = Une(Object.keys(t), e);
  return n !== void 0 && t[n] === !0;
}
function qEt(e) {
  let t = ex(),
    n = Une(Object.keys(t.plugins), e);
  if (n) return n;
  for (let r of ["local", "project", "user"]) {
    let o = yn(KD(r))?.enabledPlugins;
    if (!o) continue;
    let s = Une(Object.keys(o), e);
    if (s) return s;
  }
  return e;
}
function VEt(e, t, n) {
  let r = n?.enabledPlugins?.[e];
  return r !== void 0 ? r !== !1 : t.defaultEnabled !== !1;
}
function Y2l(e) {
  let t = e.includes("@"),
    n = e.toLowerCase(),
    r = ["local", "project", "user"];
  for (let o of r) {
    let s = yn(KD(o))?.enabledPlugins;
    if (!s) continue;
    for (let i of Object.keys(s))
      if (t ? Y0e(i, e) : i.toLowerCase().startsWith(`${n}@`))
        return {
          pluginId: i,
          scope: o,
        };
  }
  return null;
}
function J2l(e, t) {
  let { name: n, marketplace: r } = Qo(e);
  return t.find((o) => {
    if (Y0e(o.name, e) || Y0e(o.name, n)) return !0;
    if (r && o.source)
      return Y0e(o.name, n) && o.source.toLowerCase().includes(`@${r.toLowerCase()}`);
    return !1;
  });
}
function ONf(e) {
  let { name: t } = Qo(e),
    n = ex(),
    r = Object.keys(n.plugins),
    o = Une(r, e);
  if (o && n.plugins[o]?.length)
    return {
      pluginId: o,
      pluginName: t,
    };
  let s = r.find((i) => {
    let { name: a } = Qo(i);
    return Y0e(a, t) && (n.plugins[i]?.length ?? 0) > 0;
  });
  if (s)
    return {
      pluginId: s,
      pluginName: t,
    };
  return null;
}
function grr(e) {
  let t = ex(),
    n = Une(Object.keys(t.plugins), e),
    r = n ? t.plugins[n] : void 0;
  if (!r || r.length === 0)
    return {
      scope: "user",
    };
  let o = yr(),
    s = r.find((l) => l.scope === "local" && l.projectPath === o);
  if (s)
    return {
      scope: s.scope,
      projectPath: s.projectPath,
    };
  let i = r.find((l) => l.scope === "project" && l.projectPath === o);
  if (i)
    return {
      scope: i.scope,
      projectPath: i.projectPath,
    };
  let a = r.find((l) => l.scope === "user");
  if (a)
    return {
      scope: a.scope,
    };
  return {
    scope: r[0].scope,
    projectPath: r[0].projectPath,
  };
}
async function Q2l(e, t = "user") {
  ZBo(t);
  let { name: n, marketplace: r } = Qo(e);
  if (U0(r))
    return {
      success: !1,
      message: QBo(r, "install"),
    };
  let o,
    s,
    i,
    a = !1;
  if (r) {
    let f = await EL(e);
    if (!f) {
      let g = (await om())[r];
      if (g && _H(g.source) && khe(r, g, f3()[r]?.autoUpdate))
        try {
          (await ise(r, void 0, {
            skipIfRecent: !0,
          }),
            (a = !0),
            (f = await EL(e)));
        } catch (h) {
          T(`Failed to refresh marketplace '${r}' before install; using cached data: ${be(h)}`, {
            level: "warn",
          });
        }
    }
    if (f) ((o = f.entry), (s = r), (i = f.marketplaceInstallLocation));
  } else {
    let f = await om();
    for (let [m, g] of Object.entries(f)) {
      if (!_H(g.source)) continue;
      try {
        let y = (await G$(m)).plugins.find((b) => b.name === n);
        if (y) {
          ((o = y), (s = m), (i = g.installLocation));
          break;
        }
      } catch (h) {
        T(`Failed to load marketplace "${m}" while searching for plugin "${n}": ${be(h)}`, {
          level: "error",
        });
        continue;
      }
    }
  }
  if (!o || !s) {
    let f = r ? `marketplace "${r}"` : "any configured marketplace",
      m = r ? xy("plugin marketplace update", r) : null,
      g =
        r && !a
          ? `. Your local copy may be out of date${m ? ` \u2014 try \`${m}\`` : " \u2014 update it from /plugin > Marketplaces"}.`
          : "";
    return {
      success: !1,
      message: `Plugin "${n}" not found in ${f}${g}`,
    };
  }
  let l = o,
    c = `${l.name}@${s}`;
  if (await URl(c, t)) {
    if (
      !(await $Bo(c)).some((g) => g.type !== "dependency-unsatisfied" || g.reason !== "not-found")
    ) {
      let g = xRl(c, t, WEt(t)),
        h = await $Et(c);
      return {
        success: !0,
        message: `Plugin "${c}" is already installed (scope: ${t})${g ? " \u2014 marked as manually installed" : ""}${h?.suffix ?? ""}`,
        pluginId: c,
        pluginName: l.name,
        scope: t,
      };
    }
  }
  let u = await BYt({
    pluginId: c,
    entry: l,
    scope: t,
    marketplaceInstallLocation: i,
    trigger: "cli",
  });
  if (!u.ok)
    switch (u.reason) {
      case "local-source-no-location":
        return {
          success: !1,
          message: `Cannot install local plugin "${u.pluginName}" without marketplace install location`,
        };
      case "settings-write-failed":
        return {
          success: !1,
          message: `Failed to update settings: ${u.message}`,
        };
      case "resolution-failed":
        return {
          success: !1,
          message: L$o(u.resolution),
        };
      case "blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${u.pluginName}" is blocked by your organization's policy and cannot be installed`,
        };
      case "dependency-blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${u.pluginName}" depends on "${u.blockedDependency}", which is blocked by your organization's policy`,
        };
      case "marketplace-blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${u.pluginName}" is from marketplace "${u.marketplaceName}", which is blocked by your organization's policy`,
        };
      case "dependency-marketplace-blocked-by-policy":
        return {
          success: !1,
          message: `Plugin "${u.pluginName}" depends on "${u.blockedDependency}" from marketplace "${u.marketplaceName}", which is blocked by your organization's policy`,
        };
      case "range-conflict": {
        let f = u.dep === c ? "Plugin" : "Dependency";
        return {
          success: !1,
          message: uFt(f, u.dep, u.ranges, u.why, u.installed),
        };
      }
      case "no-matching-tag": {
        let f = u.dep === c ? "Plugin" : "Dependency";
        return {
          success: !1,
          message: JPn(f, u.dep, u.range),
        };
      }
    }
  let d = xy("plugin enable", c),
    p = u.installedDisabled.includes(c)
      ? `. This plugin is disabled by default${d ? ` \u2014 enable it with: ${d}` : " \u2014 enable it in /plugin"}`
      : "";
  return {
    success: !0,
    message: `Successfully installed plugin: ${c} (scope: ${t})${u.depNote}${p}`,
    pluginId: c,
    pluginName: l.name,
    scope: t,
  };
}
async function OHe(e, t = "user", n = !0) {
  ZBo(t);
  let { marketplace: r } = Qo(e);
  if (U0(r))
    return {
      success: !1,
      message: QBo(r, "uninstall"),
    };
  let { enabled: o, disabled: s } = await OT(),
    i = [...o, ...s],
    a = J2l(e, i),
    l = KD(t),
    c = yn(l),
    u,
    d;
  if (a) {
    let x = Object.keys(c?.enabledPlugins ?? {}),
      I = a.name.toLowerCase(),
      k = e.includes("@");
    ((u =
      x.find((D) => D === e || D === a.name || D.startsWith(`${a.name}@`)) ??
      x.find((D) => {
        let P = D.toLowerCase();
        return Y0e(D, e) || P === I || (!k && P.startsWith(`${I}@`));
      }) ??
      (k ? e : a.name)),
      (d = a.name));
  } else {
    let x = ONf(e);
    if (!x)
      return {
        success: !1,
        message: `Plugin "${e}" not found in installed plugins`,
      };
    ((u = x.pluginId), (d = x.pluginName));
  }
  let p = WEt(t),
    f = ex();
  u = Une(Object.keys(f.plugins), u) ?? u;
  let m = f.plugins[u],
    g = m?.find((x) => x.scope === t && x.projectPath === p);
  if (!g) {
    let { scope: x } = grr(u);
    if (x !== t && m && m.length > 0) {
      if (x === "project") {
        let I = xy("plugin disable", e, "--scope local");
        return {
          success: !1,
          message: `Plugin "${e}" is enabled at project scope (.claude/settings.json, shared with your team). To disable just for you${I ? `: ${I}` : ", use claude plugin disable with --scope local"}`,
        };
      }
      return {
        success: !1,
        message: `Plugin "${e}" is installed in ${x} scope, not ${t}. Use --scope ${x} to uninstall.`,
      };
    }
    return {
      success: !1,
      message: `Plugin "${e}" is not installed in ${t} scope. Use --scope to specify the correct scope.`,
    };
  }
  let h = g.installPath,
    y = {
      ...c?.enabledPlugins,
    },
    b = Une(Object.keys(y), u) ?? u;
  ((y[b] = void 0),
    io(l, {
      enabledPlugins: y,
    }),
    Ah(),
    aer(u, t, p));
  let S = ex().plugins[u],
    A = !S || S.length === 0;
  if (A && h) await pOe(h);
  if (A) {
    if ((await Cdt(u), Slt([u]), n)) await Sct(u);
  }
  let v = ZPn(u, i),
    C = Eeo(v);
  return {
    success: !0,
    message: `Successfully uninstalled plugin: ${d} (scope: ${t})${C}`,
    pluginId: u,
    pluginName: d,
    scope: t,
    reverseDependents: v.length > 0 ? v : void 0,
  };
}
async function eUo(e, t, n, r) {
  let o = t ? "enable" : "disable",
    { marketplace: s } = Qo(e);
  if (hKi(e) || s === JE || s === Bne) {
    let S = "user",
      A = e,
      v;
    if (s === JE || s === Bne) {
      let D = await OT(),
        P = J2l(
          e,
          [...D.enabled, ...D.disabled].filter((L) => Qo(L.source).marketplace === s),
        );
      if (P) ((A = P.source), (v = P.manifest.defaultEnabled === !1));
      let O = Y2l(A);
      if (((A = O?.pluginId ?? A), n)) {
        if (yn(KD(n))?.enabledPlugins?.[A] === void 0 && O && r1e[O.scope] > r1e[n])
          return {
            success: !1,
            message: `Plugin "${A}" is set at ${O.scope} scope (which overrides ${n}). Use --scope ${O.scope} or omit --scope to auto-detect.`,
          };
        S = n;
      } else S = O?.scope ?? "user";
    }
    if (t && s === JE) {
      if (!Uqe())
        return {
          success: !1,
          message: IGt(fM(Ase.join(tr(), "skills"))),
        };
    }
    if (t && GI(A))
      return {
        success: !1,
        message: `Plugin "${A}" is blocked by your organization's policy and cannot be enabled`,
      };
    let C = KD(S),
      x = t && (s === JE || s === Bne) && C === "userSettings" && v === !1 ? void 0 : t,
      { error: I } = io(C, {
        enabledPlugins: {
          ...yn(C)?.enabledPlugins,
          [A]: x,
        },
      });
    if (I)
      return {
        success: !1,
        message: `Failed to ${o} plugin: ${I.message}`,
      };
    Ah();
    let { name: k } = Qo(A);
    return {
      success: !0,
      message: `Successfully ${o}d plugin: ${k}`,
      pluginId: A,
      pluginName: k,
      scope: S,
    };
  }
  if (n) ZBo(n);
  let i,
    a,
    l = Y2l(e);
  if (n) {
    if (((a = n), l)) i = l.pluginId;
    else if (e.includes("@")) i = e;
    else
      return {
        success: !1,
        message: `Plugin "${e}" not found in settings. Use plugin@marketplace format.`,
      };
  } else if (l) ((i = l.pluginId), (a = l.scope));
  else if (e.includes("@")) ((i = e), (a = "user"));
  else
    return {
      success: !1,
      message: `Plugin "${e}" not found in any editable settings scope. Use plugin@marketplace format.`,
    };
  if (t && GI(i))
    return {
      success: !1,
      message: `Plugin "${i}" is blocked by your organization's policy and cannot be enabled`,
    };
  let c = KD(a),
    u = yn(c)?.enabledPlugins?.[i],
    d = n && l && r1e[n] > r1e[l.scope];
  if (n && u === void 0 && l && l.scope !== n && !d)
    return {
      success: !1,
      message: `Plugin "${e}" is installed at ${l.scope} scope, not ${n}. Use --scope ${l.scope} or omit --scope to auto-detect.`,
    };
  let p = n && !d ? u === !0 : Ese().has(i);
  if (t === p)
    return {
      success: !1,
      alreadyInGoalState: !0,
      message: `Plugin "${e}" is already ${t ? "enabled" : "disabled"}${n ? ` at ${n} scope` : ""}`,
    };
  let f;
  if (!t) {
    let { enabled: S, disabled: A } = await OT(),
      v = ZPn(i, [...S, ...A]);
    if (v.length > 0) f = v;
    if (v.length > 0 && !r?.bypassDependentsBlock) {
      let { name: C } = Qo(i),
        I = [...VKi(i, [...S, ...A]), i].map((D) => xy("plugin disable", D)),
        k = I.every((D) => D !== null)
          ? `, or disable everything together: ${I.join(" && ")}`
          : ", or disable them together in /plugin.";
      return {
        success: !1,
        message: `${C} is still required by ${v.join(", ")}. Disable ${bn(v.length, "that plugin", "those plugins")} first${k}`,
        reverseDependents: v,
      };
    }
  }
  let m = [];
  if (t) {
    let { enabled: S, disabled: A } = await OT(),
      { closure: v, missing: C } = XKi(i, [...S, ...A]);
    if (C.length > 0) {
      let { name: P } = Qo(i),
        O = C.map((M) => xy("plugin install", M)),
        L = O.every((M) => M !== null) ? `: ${O.join(" && ")}` : " from /plugin.";
      return {
        success: !1,
        message: `${P} depends on ${C.join(", ")}, which ${bn(C.length, "is", "are")} not installed. Install ${bn(C.length, "it", "them")} first${L}`,
      };
    }
    let x = v.filter((P) => GI(P));
    if (x.length > 0) {
      let { name: P } = Qo(i);
      return {
        success: !1,
        message: `${P} depends on ${x.join(", ")}, which ${bn(x.length, "is", "are")} blocked by your organization's plugin policy. Ask an admin to allow ${bn(x.length, "it", "them")}.`,
      };
    }
    let I = [...JL].sort((P, O) => r1e[O] - r1e[P]),
      k = [];
    for (let P of v)
      for (let O of I) {
        if (r1e[O] <= r1e[a]) continue;
        let L = yn(KD(O))?.enabledPlugins?.[P];
        if (L === void 0) continue;
        if (L === !1)
          k.push({
            dep: P,
            scope: O,
          });
        break;
      }
    if (k.length > 0) {
      let { name: P } = Qo(i),
        O = k.map((N) => `${N.dep} (${N.scope} scope)`).join(", "),
        L = Uo(k.map((N) => N.scope)),
        M = L.length === 1 ? `, or use --scope ${L[0]} to write where the override lives` : "";
      return {
        success: !1,
        message: `${P} depends on ${O}, which ${bn(k.length, "is", "are")} disabled there. Enable ${bn(k.length, "it", "them")} at that scope${M}.`,
      };
    }
    let D = rWe(c);
    m = v.filter((P) => !D.has(P));
  }
  let g = {
      ...yn(c)?.enabledPlugins,
      [i]: t,
      ...Object.fromEntries(m.map((S) => [S, !0])),
    },
    { error: h } = io(c, {
      enabledPlugins: g,
    });
  if (h)
    return {
      success: !1,
      message: `Failed to ${o} plugin: ${h.message}`,
    };
  if ((Ah(), t)) (jPn([i, ...m]), xKi([i, ...m]));
  let { name: y } = Qo(i),
    b = Eeo(f),
    _ =
      m.length > 0
        ? ` (also enabled ${m.length} ${bn(m.length, "dependency", "dependencies")}: ${m.map((S) => Qo(S).name).join(", ")})`
        : "";
  return {
    success: !0,
    message: `Successfully ${o}d plugin: ${y} (scope: ${a})${b}${_}`,
    pluginId: i,
    pluginName: y,
    scope: a,
    reverseDependents: f,
  };
}
async function zEt(e, t) {
  return eUo(e, !0, t);
}
async function KEt(e, t) {
  return eUo(e, !1, t);
}
async function Z2l() {
  let e = Ese();
  if (e.size === 0)
    return {
      success: !0,
      message: "No enabled plugins to disable",
    };
  let t = [],
    n = [];
  for (let [r] of e) {
    let o = await eUo(r, !1, void 0, {
      bypassDependentsBlock: !0,
    });
    if (o.success) t.push(r);
    else n.push(`${r}: ${o.message}`);
  }
  if (n.length > 0)
    return {
      success: !1,
      message: `Disabled ${t.length} ${bn(t.length, "plugin")}, ${n.length} failed:
${n.join(`
`)}`,
    };
  return {
    success: !0,
    message: `Disabled ${t.length} ${bn(t.length, "plugin")}`,
  };
}
async function YEt(e, t) {
  let { name: n, marketplace: r } = Qo(e);
  if (U0(r))
    return {
      success: !1,
      message: QBo(r, "update"),
    };
  let o = r,
    s = o ? `${n}@${o}` : e,
    i = BL(),
    a = Une(Object.keys(i.plugins), s);
  if (a) ((s = a), ({ marketplace: o } = Qo(s)));
  let l = a ? i.plugins[a] : void 0,
    c;
  if (o) {
    let b = (await om())[o]?.source;
    if (b && !_H(b))
      return {
        success: !1,
        message: `Plugin "${n}" is from marketplace "${o}", which is blocked by your organization's policy`,
        pluginId: s,
        scope: t,
      };
    if (b && (b.source === "github" || b.source === "git" || b.source === "url"))
      try {
        await ise(o, void 0, {
          skipIfRecent: !0,
        });
      } catch (_) {
        ((c = `marketplace not refreshed (${be(_)})`),
          T(`Failed to refresh marketplace '${o}' before update; using cached data: ${be(_)}`, {
            level: "warn",
          }));
      }
  }
  let u = await EL(s);
  if (!u)
    return {
      success: !1,
      message: `Plugin "${n}" not found`,
      pluginId: s,
      scope: t,
    };
  let { entry: d, marketplaceInstallLocation: p } = u;
  if (!l || l.length === 0)
    return {
      success: !1,
      message: `Plugin "${n}" is not installed`,
      pluginId: s,
      scope: t,
    };
  let f = WEt(t),
    m = l.filter((y) => y.scope === t),
    g = m.find((y) => y.projectPath === f);
  if (!g && m.length > 1)
    T(
      `updatePluginOp: ${m.length} ${t}-scope installs, none match CWD '${f}'; updating '${m[0]?.projectPath}' only`,
      {
        level: "warn",
      },
    );
  let h = g ?? m[0];
  if (!h) {
    let y = f ? `${t} (${f})` : t;
    return {
      success: !1,
      message: `Plugin "${n}" is not installed at scope ${y}`,
      pluginId: s,
      scope: t,
    };
  }
  return NNf({
    pluginId: s,
    pluginName: n,
    entry: d,
    marketplaceInstallLocation: p,
    installation: h,
    scope: t,
    projectPath: h.projectPath,
    refreshWarning: c,
  });
}
async function NNf({
  pluginId: e,
  pluginName: t,
  entry: n,
  marketplaceInstallLocation: r,
  installation: o,
  scope: s,
  projectPath: i,
  refreshWarning: a,
}) {
  let l = qt(),
    c = o.version,
    { enabled: u, disabled: d } = await OT(),
    p = GKi(e, [...u, ...d]),
    f = p.filter((C) => C.constraint.version !== void 0),
    m = p.map((C) => C.constraint.version).filter((C) => C !== void 0),
    g,
    h = "";
  if (m.length > 0) {
    let C = cFt(m);
    if (!C.ok)
      return {
        success: !0,
        skipped: !0,
        message: `Skipped \u2014 ${uFt("Plugin", e, m, C.reason)}`,
        pluginId: e,
        scope: s,
        blockedBy: f.map((k) => k.plugin.source),
        oldVersion: c,
      };
    let x = (await om())[Qo(e).marketplace ?? ""]?.source,
      I = der(n.source) ?? (typeof n.source === "string" ? $Yt(x) : null);
    if (I !== null && C.range !== "*") {
      let k = await fer(I, n.name, C.range);
      if (k === null)
        T(
          `performPluginUpdate(${e}): no ${n.name}--v* tag satisfying ${C.range}; falling back to HEAD + post-fetch guard`,
        );
      else if (k.version === o.resolvedVersion && k.sha === o.gitCommitSha)
        return {
          success: !0,
          message: `${t} is already at the latest version satisfying ${m.join(", ")} (${k.version}, required by ${f.map((D) => D.plugin.name).join(", ")}).${a ? ` Warning: ${a} \u2014 version shown may be stale.` : ""}`,
          pluginId: e,
          newVersion: o.version,
          oldVersion: c,
          alreadyUpToDate: !0,
          scope: s,
        };
      else if (
        ((g = k),
        (h = ` (highest tag satisfying ${m.join(", ")} from ${f.map((D) => D.plugin.name).join(", ")})`),
        typeof n.source === "string")
      ) {
        let D = per(x, n.source);
        if (D !== null)
          n = {
            ...n,
            source: D,
          };
      }
    }
  }
  let y,
    b,
    _,
    S = !1,
    A,
    v;
  if (typeof n.source !== "string") {
    let C = n.source,
      x =
        g && (C.source === "github" || C.source === "url" || C.source === "git-subdir")
          ? {
              ...C,
              ref: g.ref,
              sha: g.sha,
            }
          : C,
      I = await USt(x, {
        manifest: {
          name: n.name,
        },
      });
    ((y = I.path), (S = !0), (A = g?.sha ?? I.gitCommitSha), (_ = I.manifest?.version));
    let k = await lse(e, n.source, I.manifest, I.path, n.version, g?.sha ?? I.gitCommitSha);
    b = g && (I.manifest?.version || n.version) ? `${k}-${g.sha.substring(0, 12)}` : k;
  } else {
    let C;
    try {
      C = await l.stat(r);
    } catch (I) {
      if (wn(I))
        return {
          success: !1,
          message: `Marketplace directory not found at ${r}`,
          pluginId: e,
          scope: s,
        };
      throw I;
    }
    ((v = C.isDirectory() ? r : Ase.dirname(r)), (y = Ase.join(v, n.source)));
    try {
      await l.stat(y);
    } catch (I) {
      if (wn(I))
        return {
          success: !1,
          message: `Plugin source not found at ${y}`,
          pluginId: e,
          scope: s,
        };
      throw I;
    }
    let x;
    try {
      x = (await jSt(y, n.name, n.source)).manifest;
    } catch {}
    ((_ = x?.version),
      (A = (await R$o(y)) ?? void 0),
      (b = await lse(e, n.source, x, y, n.version)));
  }
  try {
    if (g === void 0 && m.length > 0) {
      let L = jEt.valid(_) ?? jEt.coerce(_)?.version,
        M = p
          .filter(
            ({ constraint: N }) =>
              N.version !== void 0 && L !== void 0 && !jEt.satisfies(L, N.version),
          )
          .map(({ plugin: N }) => N.source);
      if (M.length > 0)
        return {
          success: !0,
          skipped: !0,
          message: `Skipped \u2014 ${M.join(", ")} requires ${t} at a version range that ${_ ?? b} does not satisfy`,
          pluginId: e,
          scope: s,
          blockedBy: M,
          oldVersion: c,
        };
    }
    let C = BN(e, b),
      x = b === "unknown",
      I = SOe(e, b);
    if (!x && (o.version === b || o.installPath === C || o.installPath === I)) {
      let L = `${t} is already at the latest version (${b}).`;
      return {
        success: !0,
        message: a ? `${L} Warning: ${a} \u2014 version shown may be stale.` : L,
        pluginId: e,
        newVersion: b,
        oldVersion: c,
        alreadyUpToDate: !0,
        scope: s,
      };
    }
    C = await UYt(y, e, b, n, v, {
      forceOverwrite: x,
    });
    let D = o.installPath;
    if ((CRl(e, s, i, C, b, A, g?.version), D && D !== C)) {
      let L = BL();
      if (!Object.values(L.plugins).some((N) => N.some((B) => B.installPath === D))) await pOe(D);
    }
    let P = i ? `${s} (${i})` : s,
      O =
        x && (c ?? "unknown") === "unknown"
          ? `Plugin "${t}" refreshed from source for scope ${P}. Restart to apply changes.`
          : `Plugin "${t}" updated from ${c || "unknown"} to ${b}${h} for scope ${P}. Restart to apply changes.`;
    return {
      success: !0,
      message: a ? `${O} Warning: ${a}.` : O,
      pluginId: e,
      newVersion: b,
      oldVersion: c,
      scope: s,
    };
  } finally {
    let C = BN(e, b);
    if (S && y !== C && !Ase.resolve(C).startsWith(Ase.resolve(y) + Ase.sep))
      await l.rm(y, {
        recursive: !0,
        force: !0,
      });
  }
}
var Ase, jEt, JL, r1e, UKe;
