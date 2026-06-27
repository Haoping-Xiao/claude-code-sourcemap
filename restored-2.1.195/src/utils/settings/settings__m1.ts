// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oLt
// matched 2.1.88 source: src/utils/settings/settings.ts
// class=modified (alt of src/utils/settings/settings.ts)  jaccard=0.1508  score=0.4455  fileCov=0.1857
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var oLt = E(() => {
  qee();
  Jt();
  sr();
  lmn();
  Ows();
  lj();
  Bws();
  g1u = ve(() => _M().strict());
  _1u = new Set(GO);
  S1u = [
    {
      key: "allowedMcpServers",
      schema: cmn,
    },
    {
      key: "deniedMcpServers",
      schema: umn,
    },
  ];
});
function iLt(e) {
  let t = new Set(e.allowedSources);
  return (t.add("flagSettings"), t.add("policySettings"), fv.filter((n) => t.has(n)));
}
function A1u() {
  return qO.join(QC(), "managed-settings.json");
}
function aLt(e) {
  if (Vt() === "wsl" && e.wslInherits?.()) {
    let t = sLt(NO);
    if (t.settings) return t;
    let n = sLt(QC());
    return {
      settings: n.settings,
      errors: [...t.errors, ...n.errors],
    };
  }
  return sLt(QC());
}
function sLt(e) {
  let t = [],
    n = {},
    r = false,
    { settings: o, errors: s } = a9(qO.join(e, "managed-settings.json"), void 0, true);
  if ((t.push(...s), o && Object.keys(o).length > 0)) ((n = ZV(n, o, SY)), (r = true));
  let i = qO.join(e, "managed-settings.d");
  try {
    let c = qt()
      .readdirSync(i)
      .filter(
        (u) =>
          (u.isFile() || u.isSymbolicLink()) && u.name.endsWith(".json") && !u.name.startsWith("."),
      )
      .map((u) => u.name)
      .sort();
    for (let u of c) {
      let { settings: d, errors: p } = a9(qO.join(i, u), void 0, true);
      if ((t.push(...p), d && Object.keys(d).length > 0)) ((n = ZV(n, d, SY)), (r = true));
    }
  } catch (c) {
    let u = on(c);
    if (u !== "ENOENT" && u !== "ENOTDIR")
      T(`managed-settings.d read failed: ${c}`, {
        level: "error",
      });
  }
  let { wslInheritsWindowsSettings: a, ...l } = n;
  return {
    settings: r && Object.keys(l).length > 0 ? n : null,
    errors: t,
  };
}
function lLt(e, t) {
  if (wn(e)) T(`Broken symlink or missing file encountered for settings.json at path: ${t}`);
  else
    T(`settings file read failed at ${t}: ${e}`, {
      level: "error",
    });
}
function a9(e, t, n) {
  let r = rrs(e);
  if (r)
    return {
      settings: r.settings ? sM(r.settings) : null,
      errors: r.errors,
    };
  let o = gLr(e, t, n);
  return (
    ors(e, o),
    {
      settings: o.settings ? sM(o.settings) : null,
      errors: o.errors,
    }
  );
}
function Wws(e) {
  if (!e.mdm)
    return {
      settings: null,
      errors: [],
    };
  let t = e.mdm();
  return {
    settings: Object.keys(t.settings).length > 0 ? t.settings : null,
    errors: t.errors,
  };
}
function vCe(e, t) {
  let n = sM(e),
    r = Dhe(n, t, {
      skipMcpServerEntryFilter: true,
    }),
    o = [],
    s = dLr((i) =>
      o.push({
        file: t,
        path: i.path,
        message: i.message,
        severity: "warning",
      }),
    ).safeParse(n);
  if (!s.success)
    return {
      settings: null,
      errors: [...r, ...Net(s.error, t)],
    };
  return {
    settings: Object.keys(s.data).length > 0 ? s.data : null,
    errors: [...r, ...o],
  };
}
function wCe(e) {
  let t = e?.remote ? e.remote() : xhe();
  if (!t || Object.keys(t).length === 0)
    return {
      settings: null,
      errors: [],
    };
  return vCe(t, "remote managed settings");
}
function mmn(e) {
  let t = e.parentManaged;
  if (!t || Object.keys(t).length === 0)
    return {
      settings: null,
      errors: [],
    };
  return vCe(t, "parent managed settings");
}
function qws(e) {
  let t = e.flagInline;
  if (!t)
    return {
      settings: null,
      errors: [],
    };
  let n = sM(t),
    r = Dhe(n, "SDK inline settings"),
    o = _M().safeParse(n);
  if (!o.success)
    return {
      settings: null,
      errors: [...r, ...Net(o.error, "SDK inline settings")],
    };
  return {
    settings: o.data,
    errors: r,
  };
}
function gLr(e, t, n) {
  try {
    let r;
    if (t !== void 0) r = t;
    else {
      let { resolvedPath: a } = jd(qt(), e);
      r = XC(a);
    }
    if (r.trim() === "")
      return {
        settings: {},
        errors: [],
      };
    let o = sM(Ia(r, false));
    if (n) {
      let a = Dhe(o, e, {
          skipMcpServerEntryFilter: true,
        }),
        l = [],
        c = dLr((u) =>
          l.push({
            file: e,
            path: u.path,
            message: u.message,
            severity: "warning",
          }),
        ).safeParse(o);
      if (!c.success)
        return {
          settings: null,
          errors: [...a, ...Net(c.error, e)],
        };
      return {
        settings: c.data,
        errors: [...a, ...l],
      };
    }
    let s = Dhe(o, e),
      i = _M().safeParse(o);
    if (!i.success) {
      let a = Net(i.error, e);
      return {
        settings: null,
        errors: [...s, ...a],
      };
    }
    return {
      settings: i.data,
      errors: s,
    };
  } catch (r) {
    if ((lLt(r, e), wn(r)))
      return {
        settings: null,
        errors: [],
      };
    return {
      settings: null,
      errors: [
        {
          file: e,
          path: "",
          message: `Settings file could not be read: ${r instanceof Error ? r.message : String(r)}`,
          severity: "fatal",
        },
      ],
    };
  }
}
function fmn(e, t) {
  switch (e) {
    case "userSettings":
      return qO.resolve(tr());
    case "policySettings":
    case "projectSettings":
    case "localSettings":
      return qO.resolve(t.cwd);
    case "flagSettings":
      return t.flagPath ? qO.dirname(qO.resolve(t.flagPath)) : qO.resolve(t.cwd);
  }
}
function H1u(e) {
  if (e.coworkPlugins || ut(process.env.CLAUDE_CODE_USE_COWORK_PLUGINS))
    return "cowork_settings.json";
  return "settings.json";
}
function CCe(e, t) {
  switch (e) {
    case "userSettings":
      return qO.join(fmn(e, t), H1u(t));
    case "projectSettings":
    case "localSettings":
      return qO.join(fmn(e, t), kG(e));
    case "policySettings":
      return A1u();
    case "flagSettings":
      return t.flagPath;
  }
}
function kG(e) {
  switch (e) {
    case "projectSettings":
      return qO.join(".claude", "settings.json");
    case "localSettings":
      return qO.join(".claude", "settings.local.json");
  }
}
function gmn(e, t) {
  let n = qns(e);
  if (n !== void 0) return n;
  let r = bLr(e, t);
  return (Vns(e, r), r);
}
function hLr(e) {
  return !e || e.parentSettingsBehavior === "merge";
}
function yLr(e, t) {
  let n = {};
  if (e.allowManagedHooksOnly === true) n.allowManagedHooksOnly = true;
  if (e.allowManagedMcpServersOnly === true) n.allowManagedMcpServersOnly = true;
  if (e.disableClaudeAiConnectors === true) n.disableClaudeAiConnectors = true;
  if (e.allowManagedPermissionRulesOnly === true) n.allowManagedPermissionRulesOnly = true;
  let r = e.strictPluginOnlyCustomization;
  if (r === true || (Array.isArray(r) && r.length > 0)) n.strictPluginOnlyCustomization = r;
  if (e.deniedMcpServers) n.deniedMcpServers = e.deniedMcpServers;
  if (t.forceLoginOrgUUID === void 0 && e.forceLoginOrgUUID)
    n.forceLoginOrgUUID = e.forceLoginOrgUUID;
  if (t.allowedMcpServers === void 0 && e.allowedMcpServers)
    n.allowedMcpServers = e.allowedMcpServers;
  if (t.availableModels === void 0 && e.availableModels) n.availableModels = e.availableModels;
  if (e.enforceAvailableModels === true) n.enforceAvailableModels = true;
  if (e.permissions) {
    let o = Rfn(e.permissions, ["deny", "ask"]);
    if (e.permissions.disableBypassPermissionsMode === "disable")
      o.disableBypassPermissionsMode = "disable";
    if (t.allowManagedPermissionRulesOnly !== true) {
      let { allow: s, additionalDirectories: i } = e.permissions;
      if (s && t.sandbox?.network?.allowManagedDomainsOnly !== true) o.allow = s;
      if (i) o.additionalDirectories = i;
    }
    if (Object.keys(o).length > 0) n.permissions = o;
  }
  if (e.sandbox) {
    let { network: o, filesystem: s, credentials: i } = e.sandbox,
      a = {};
    if (e.sandbox.enabled === true) a.enabled = true;
    if (e.sandbox.failIfUnavailable === true) a.failIfUnavailable = true;
    if (e.sandbox.allowUnsandboxedCommands === false) a.allowUnsandboxedCommands = false;
    if (e.sandbox.autoAllowBashIfSandboxed === false) a.autoAllowBashIfSandboxed = false;
    if (o) {
      let l = Rfn(o, ["deniedDomains"]);
      if (o.allowManagedDomainsOnly === true) l.allowManagedDomainsOnly = true;
      if (t.sandbox?.network?.allowManagedDomainsOnly !== true && o.allowedDomains)
        l.allowedDomains = o.allowedDomains;
      if (Object.keys(l).length > 0) a.network = l;
    }
    if (s) {
      let l = Rfn(s, ["denyRead", "denyWrite"]);
      if (s.allowManagedReadPathsOnly === true) l.allowManagedReadPathsOnly = true;
      if (t.sandbox?.filesystem?.allowManagedReadPathsOnly !== true && s.allowRead)
        l.allowRead = s.allowRead;
      if (Object.keys(l).length > 0) a.filesystem = l;
    }
    if (i) {
      let l = (i.files ?? []).filter((u) => u.mode === "deny"),
        c = (i.envVars ?? []).filter((u) => u.mode === "deny");
      if (l.length > 0 || c.length > 0)
        a.credentials = {
          ...(l.length > 0 && {
            files: l,
          }),
          ...(c.length > 0 && {
            envVars: c,
          }),
        };
    }
    if (Object.keys(a).length > 0) n.sandbox = a;
  }
  return n;
}
function Vws(e) {
  let t = trs();
  if (t !== void 0) return t;
  let n = T1u(e);
  return (nrs(n), n);
}
function Bet(e) {
  return e === "helper" || e === "plist" || e === "hklm" || e === "file";
}
function hmn(e) {
  if (e.helper?.()) return "helper";
  if (wCe(e).settings) return "remote";
  if (Wws(e).settings) return Vt() === "macos" ? "plist" : "hklm";
  if ((e.file?.() ?? aLt(e)).settings) return "file";
  if (_Lr(e).parentSlice) return "parent";
  let t = e.hkcu?.();
  return t && Object.keys(t.settings).length > 0 ? "hkcu" : null;
}
function _Lr(e) {
  let t = [],
    { settings: n, errors: r } = wCe(e);
  t.push(...r);
  let { settings: o, errors: s } = Wws(e);
  t.push(...s);
  let { settings: i, errors: a } = e.file?.() ?? aLt(e);
  t.push(...a);
  let { settings: l, errors: c } = mmn(e);
  t.push(...c);
  let u = [n, o, i].filter((g) => g !== null),
    d = u[0] ?? null,
    p = {
      allowManagedPermissionRulesOnly:
        u.some((g) => g.allowManagedPermissionRulesOnly === true) || void 0,
      forceLoginOrgUUID: u.find((g) => g.forceLoginOrgUUID !== void 0)?.forceLoginOrgUUID,
      allowedMcpServers: u.find((g) => g.allowedMcpServers !== void 0)?.allowedMcpServers,
      availableModels: u[0]?.availableModels,
      sandbox: {
        network: {
          allowManagedDomainsOnly:
            u.some((g) => g.sandbox?.network?.allowManagedDomainsOnly === true) || void 0,
        },
        filesystem: {
          allowManagedReadPathsOnly:
            u.some((g) => g.sandbox?.filesystem?.allowManagedReadPathsOnly === true) || void 0,
        },
      },
    },
    f = l && hLr(d) ? yLr(l, p) : null,
    m = f && Object.keys(f).length > 0 ? f : null;
  return {
    tiers: u,
    admin: d,
    parentSlice: m,
    errors: t,
  };
}
function T1u(e) {
  let t = e.helper?.();
  if (t) return [t];
  let { tiers: n, parentSlice: r } = _Lr(e);
  return r ? [...n, r] : n;
}
function zws(e) {
  let t = e.helper?.();
  if (t)
    return {
      settings: t,
      errors: e.helperWarnings?.() ?? [],
    };
  let { tiers: n, admin: r, parentSlice: o, errors: s } = _Lr(e);
  if (!r && !o) {
    let a = e.hkcu?.();
    if (a && Object.keys(a.settings).length > 0)
      return {
        settings: a.settings,
        errors: [...s, ...a.errors],
      };
    return {
      settings: null,
      errors: [...s, ...(a?.errors ?? [])],
    };
  }
  let i = ZV({}, o ?? {}, r ?? {}, SY);
  if (n.some((a) => a.forceRemoteSettingsRefresh === true)) i.forceRemoteSettingsRefresh = true;
  return {
    settings: i,
    errors: s,
  };
}
function bLr(e, t) {
  if (e === "policySettings") return zws(t).settings;
  let n = CCe(e, t),
    { settings: r } = n
      ? a9(n, e === "flagSettings" ? t.flagExpectedContent : void 0)
      : {
          settings: null,
        };
  if (e === "flagSettings") {
    let { settings: o } = qws(t);
    if (o) return ZV(r || {}, o, SY);
  }
  return r;
}
function v1u(e, t) {
  return Uo([...e, ...t]);
}
function SY(e, t, n) {
  if (Array.isArray(e) && Array.isArray(t)) {
    if (n === "fallbackModel") return t;
    return v1u(e, t);
  }
  return;
}
function SLr(e) {
  if (mLr)
    return {
      settings: {},
      errors: [],
    };
  let t = Date.now();
  (In("info", "settings_load_started"), (mLr = true));
  try {
    let n = Yon(),
      r = {};
    if (n) r = ZV(r, n, SY);
    let o = [],
      s = new Set(),
      i = new Set(),
      a = null;
    for (let l of iLt(e)) {
      if (l === "policySettings") {
        let { settings: u, errors: d } = zws(e);
        if (((a = u), u)) r = ZV(r, u, SY);
        for (let p of d) {
          let f = `${p.file}:${p.path}:${p.message}`;
          if (!s.has(f)) (s.add(f), o.push(p));
        }
        continue;
      }
      let c = CCe(l, e);
      if (c) {
        let u = qO.resolve(c);
        if (!i.has(u)) {
          i.add(u);
          let { settings: d, errors: p } = a9(
            c,
            l === "flagSettings" ? e.flagExpectedContent : void 0,
          );
          for (let f of p) {
            let m = `${f.file}:${f.path}:${f.message}`;
            if (!s.has(m)) (s.add(m), o.push(f));
          }
          if (d) r = ZV(r, d, SY);
        }
      }
      if (l === "flagSettings") {
        let { settings: u, errors: d } = qws(e);
        for (let p of d) {
          let f = `${p.file}:${p.path}:${p.message}`;
          if (!s.has(f)) (s.add(f), o.push(p));
        }
        if (u) r = ZV(r, u, SY);
      }
    }
    if (a) {
      if (a.availableModels !== void 0) r.availableModels = [...a.availableModels];
      if (a.enforceAvailableModels !== void 0) r.enforceAvailableModels = a.enforceAvailableModels;
    }
    return (
      In("info", "settings_load_completed", {
        duration_ms: Date.now() - t,
        source_count: i.size,
        error_count: o.length,
      }),
      {
        settings: r,
        errors: o,
      }
    );
  } finally {
    mLr = false;
  }
}
function w1u(e) {
  let t = a0();
  if (t !== null) return t;
  let n = SLr(e);
  return (Kon(n), n);
}
function C1u(e) {
  let { settings: t } = w1u(e);
  return t || {};
}
function Kws(e) {
  n_();
  let t = [];
  for (let n of iLt(e)) {
    let r = gmn(n, e);
    if (r && Object.keys(r).length > 0)
      t.push({
        source: n,
        settings: r,
      });
  }
  return {
    effective: C1u(e),
    sources: t,
  };
}
function Yws(e, t) {
  let n = iLt(t);
  for (let r = n.length - 1; r >= 0; r--) {
    let o = n[r];
    if (gmn(o, t)?.[e] !== void 0) return o;
  }
  return null;
}
var qO,
  mLr = false;
