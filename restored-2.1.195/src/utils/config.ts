// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SC
// matched 2.1.88 source: src/utils/config.ts
// class=modified  jaccard=0.3563  score=0.5887  fileCov=0.4744
// note: deminified; 46 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: shouldSkipPluginAutoupdate, setPathTrusted, setClientDataCacheKeyGetter, saveGlobalConfig, saveCurrentProjectConfig, resetTrustDialogAcceptedCache, resetLocalSettingsGitTrackedCache, recordFirstStartTime, isWorkspacePersistedTrusted, isProjectScopeTrustAccepted, isProjectConfigKey, isPathTrusted, isLocalSettingsGitTracked, isGlobalConfigKey, isAutoUpdaterDisabled, hasClientDataCacheSlot, getWorkspacePersistedTrustKey, getUserClaudeRulesDir, getRemoteControlAtStartup, getRawCurre …
function Cme() {
  return {
    numStartups: 0,
    installMethod: void 0,
    autoUpdates: void 0,
    theme: "dark",
    preferredNotifChannel: "auto",
    verbose: false,
    editorMode: "normal",
    autoCompactEnabled: true,
    autoScrollEnabled: true,
    showTurnDuration: true,
    externalEditorContext: false,
    showMessageTimestamps: false,
    hasSeenTasksHint: false,
    hasUsedStash: false,
    hasUsedBackgroundTask: false,
    queuedCommandUpHintCount: 0,
    diffTool: "auto",
    customApiKeyResponses: {
      approved: [],
      rejected: [],
    },
    env: {},
    tipsHistory: {},
    memoryUsageCount: 0,
    promptQueueUseCount: 0,
    btwUseCount: 0,
    todoFeatureEnabled: true,
    showExpandedTodos: false,
    briefTranscript: false,
    messageIdleNotifThresholdMs: 60000,
    autoConnectIde: false,
    autoInstallIdeExtension: true,
    fileCheckpointingEnabled: true,
    terminalProgressBarEnabled: true,
    cachedDynamicConfigs: {},
    cachedGrowthBookFeatures: {},
    respectGitignore: true,
    copyFullResponse: false,
    unpinOpus47LaunchEffort: false,
    unpinOpus48LaunchEffort: false,
    unpinFable5LaunchEffort: false,
  };
}
function isGlobalConfigKey(e) {
  return GLOBAL_CONFIG_KEYS.includes(e);
}
function resetTrustDialogAcceptedCache() {
  jcc = false;
}
function checkHasTrustDialogAccepted() {
  return (jcc ||= usm());
}
function isProjectScopeTrustAccepted() {
  if (Ir()) return true;
  return checkHasTrustDialogAccepted();
}
function isWorkspacePersistedTrusted() {
  let e = getWorkspacePersistedTrustKey();
  return getGlobalConfig().projects?.[e]?.hasTrustDialogAccepted === true;
}
function getWorkspacePersistedTrustKey() {
  let e = yr();
  return t9(qf(e) ?? HS.resolve(e));
}
function isLocalSettingsGitTracked() {
  if (HZt !== void 0) return HZt;
  return ((HZt = csm()), HZt);
}
function resetLocalSettingsGitTrackedCache() {
  HZt = void 0;
}
function csm() {
  let e = yr();
  try {
    return (
      require("child_process").spawnSync(
        "git",
        ["-C", e, "ls-files", "--error-unmatch", "--", HS.join(".claude", "settings.local.json")],
        {
          cwd: e,
          encoding: "utf8",
          timeout: 2000,
          windowsHide: true,
        },
      ).status === 0
    );
  } catch {
    return false;
  }
}
function usm() {
  if (ut(process.env.CLAUDE_CODE_SANDBOXED)) return true;
  if (hJe()) return true;
  if (Js()) return true;
  let e = getGlobalConfig(),
    t = getProjectPathForConfig();
  if (e.projects?.[t]?.hasTrustDialogAccepted) return true;
  let r = t9($t());
  while (true) {
    if (e.projects?.[r]?.hasTrustDialogAccepted) return true;
    let s = t9(HS.resolve(r, ".."));
    if (s === r) break;
    r = s;
  }
  return false;
}
function isPathTrusted(e) {
  let t = getGlobalConfig(),
    n = t9(HS.resolve(e));
  while (true) {
    if (t.projects?.[n]?.hasTrustDialogAccepted) return true;
    let r = t9(HS.resolve(n, ".."));
    if (r === n) return false;
    n = r;
  }
}
function setPathTrusted(e) {
  let t = t9(HS.resolve(e));
  saveGlobalConfig((n) => {
    if (n.projects?.[t]?.hasTrustDialogAccepted) return n;
    return {
      ...n,
      projects: {
        ...n.projects,
        [t]: {
          ...(n.projects?.[t] ?? DEFAULT_PROJECT_CONFIG),
          hasTrustDialogAccepted: true,
        },
      },
    };
  });
}
function isProjectConfigKey(e) {
  return PROJECT_CONFIG_KEYS.includes(e);
}
function sTt(e) {
  let t = p2.config;
  if (!t) return false;
  let n = t.oauthAccount !== void 0 && e.oauthAccount === void 0,
    r = t.hasCompletedOnboarding === true && e.hasCompletedOnboarding !== true;
  return n || r;
}
function CZt() {
  let e = getConfig(b0(), Cme);
  if (vcr && p2.config)
    return {
      ...p2.config,
    };
  return e;
}
function saveGlobalConfig(e) {
  let t = null;
  try {
    if (
      saveConfigWithLock(b0(), Cme, (r) => {
        let o = e(r);
        if (o === r) return r;
        return (
          (t = sNe({
            ...o,
            projects: NVo(r.projects),
          })),
          t
        );
      }) &&
      t
    )
      IZt(t);
  } catch (n) {
    T(`Failed to save config with lock: ${n}`, {
      level: "error",
    });
    let r = CZt();
    if (sTt(r)) {
      (T(
        "saveGlobalConfig fallback: re-read config is missing auth that cache has; refusing to write. See GH #3117.",
        {
          level: "error",
        },
      ),
        G("tengu_config_auth_loss_prevented", {}));
      return;
    }
    let o = e(r);
    if (o === r) return;
    ((t = sNe({
      ...o,
      projects: NVo(r.projects),
    })),
      Icr(t, "save_global"));
  }
}
function reportConfigCacheStats() {
  let e = TZt + Tcr;
  if (e > 0)
    G("tengu_config_cache_stats", {
      cache_hits: TZt,
      cache_misses: Tcr,
      hit_rate: TZt / e,
    });
  ((TZt = 0), (Tcr = 0));
}
function migrateConfigFields(e) {
  if ((delete e.showSpinnerTree, e.installMethod !== void 0)) return e;
  let t = e,
    n = "unknown",
    r = e.autoUpdates ?? true;
  switch (t.autoUpdaterStatus) {
    case "migrated":
      n = "local";
      break;
    case "installed":
      n = "native";
      break;
    case "disabled":
      r = false;
      break;
    case "enabled":
    case "no_permissions":
    case "not_configured":
      n = "global";
      break;
    case void 0:
      break;
  }
  return {
    ...e,
    installMethod: n,
    autoUpdates: r,
  };
}
function sNe(e) {
  let t = e;
  if (
    t.opus1mMergeNoticeSeenCount === void 0 &&
    t.voiceNoticeSeenCount === void 0 &&
    t.opus47LaunchSeenCount === void 0 &&
    t.opus48LaunchSeenCount === void 0
  )
    return e;
  let {
    opus1mMergeNoticeSeenCount: n,
    voiceNoticeSeenCount: r,
    opus47LaunchSeenCount: o,
    opus48LaunchSeenCount: s,
    ...i
  } = t;
  return i;
}
function NVo(e) {
  if (!e) return e;
  let t = {},
    n = false;
  for (let [r, o] of Object.entries(e)) {
    if (!o || typeof o !== "object") {
      t[r] = o;
      continue;
    }
    let s = o;
    if (s.history !== void 0) {
      n = true;
      let { history: i, ...a } = s;
      t[r] = a;
    } else t[r] = o;
  }
  return n ? t : e;
}
function gsm() {
  if (LVo) return;
  LVo = true;
  let e = b0();
  (hRt(
    e,
    {
      interval: msm,
      persistent: false,
    },
    (t) => {
      if (t.mtimeMs <= p2.mtime) return;
      qt()
        .readFile(e, {
          encoding: "utf-8",
        })
        .then((n) => {
          if (t.mtimeMs <= p2.mtime) return;
          let r = Ia(TG(n), false);
          if (r === null || typeof r !== "object") return;
          ((p2 = {
            config: migrateConfigFields({
              ...Cme(),
              ...r,
            }),
            mtime: t.mtimeMs,
          }),
            (oNe = {
              mtime: t.mtimeMs,
              size: t.size,
            }));
        })
        .catch(() => {});
    },
  ),
    Ci(async () => {
      (Ucc.unwatchFile(e), (LVo = false));
    }));
}
function IZt(e) {
  ((p2 = {
    config: e,
    mtime: Date.now(),
  }),
    (oNe = null));
}
function getGlobalConfig() {
  if (p2.config) return (TZt++, p2.config);
  Tcr++;
  try {
    let e = null;
    try {
      e = qt().statSync(b0());
    } catch {}
    let t = migrateConfigFields(getConfig(b0(), Cme));
    return (
      (p2 = {
        config: t,
        mtime: e?.mtimeMs ?? Date.now(),
      }),
      (oNe = e
        ? {
            mtime: e.mtimeMs,
            size: e.size,
          }
        : null),
      gsm(),
      t
    );
  } catch {
    return migrateConfigFields(getConfig(b0(), Cme));
  }
}
function getExplicitRemoteControlAtStartup() {
  return a0()?.settings.remoteControlAtStartup ?? getGlobalConfig().remoteControlAtStartup;
}
function getRemoteControlAtStartup() {
  let e = getExplicitRemoteControlAtStartup();
  if (e !== void 0) return e;
  return (SC(), ro(Hcr)).getCcrAutoConnectDefault();
}
function getDaemonColdStart() {
  let e = process.env.CLAUDE_CODE_DAEMON_COLD_START;
  if (e === "transient" || e === "ask") return e;
  let t = a0()?.settings.daemonColdStart;
  if (t !== void 0) return t;
  return asm?.daemonColdStartGbDefault() ?? "transient";
}
function getCustomApiKeyStatus(e) {
  let t = getGlobalConfig();
  if (t.customApiKeyResponses?.approved?.includes(e)) return "approved";
  if (t.customApiKeyResponses?.rejected?.includes(e)) return "rejected";
  return "new";
}
function Icr(e, t) {
  IZt(e);
  let n = false;
  try {
    let r = b0();
    qt().mkdirSync(HS.dirname(r));
    let s = cv(e, (i, a) => De(i) !== De(DEFAULT_GLOBAL_CONFIG[a]));
    (aRt(r, De(s, null, 2), {
      encoding: "utf-8",
      mode: 384,
      allowSymlink: true,
    }),
      (n = true));
  } catch (r) {
    T(`Config fallback write also failed; continuing without persisting: ${r}`, {
      level: "error",
    });
  }
  return (
    G("tengu_config_fallback_write", {
      caller: $e(t),
      disk_ok: n,
    }),
    n
  );
}
function saveConfigWithLock(e, t, n) {
  let r = t(),
    o = HS.dirname(e),
    s = qt();
  s.mkdirSync(o);
  let i;
  try {
    let a = `${e}.lock`,
      l = Date.now();
    i = ksi(e, {
      lockfilePath: a,
      onCompromised: (m) => {
        T(`Config lock compromised: ${m}`, {
          level: "error",
        });
      },
    });
    let c = Date.now() - l;
    if (c > 100)
      (T("Lock acquisition took longer than expected - another Claude instance may be running"),
        G("tengu_config_lock_contention", {
          lock_time_ms: c,
        }));
    if (oNe && e === b0())
      try {
        let m = s.statSync(e);
        if (m.mtimeMs !== oNe.mtime || m.size !== oNe.size)
          G("tengu_config_stale_write", {
            read_mtime: oNe.mtime,
            write_mtime: m.mtimeMs,
            read_size: oNe.size,
            write_size: m.size,
          });
      } catch (m) {
        if (on(m) !== "ENOENT") throw m;
      }
    let u = getConfig(e, t),
      d = false;
    if (e === b0()) {
      let m = p2.config;
      if (vcr && m) {
        let g = 0;
        try {
          g = s.statSync(e).size;
        } catch {}
        (T(
          "saveConfigWithLock: re-read hit a parse error; auto-repairing from cached config under lock. See GH #3117.",
          {
            level: "error",
          },
        ),
          G("tengu_config_auto_repaired", {
            file_size_before: g,
            had_cached_auth:
              p2.config?.oauthAccount !== void 0 || p2.config?.hasCompletedOnboarding === true,
          }),
          (u = {
            ...m,
          }),
          (d = true));
      } else if (sTt(u))
        return (
          T(
            "saveConfigWithLock: re-read config is missing auth that cache has; refusing to write to avoid wiping ~/.claude.json. See GH #3117.",
            {
              level: "error",
            },
          ),
          G("tengu_config_auth_loss_prevented", {}),
          false
        );
    }
    let p = n(u);
    if (p === u && !d) return false;
    let f = cv(p, (m, g) => De(m) !== De(r[g]));
    try {
      let m = HS.basename(e),
        g = jVo();
      try {
        s.mkdirSync(g);
      } catch (C) {
        if (on(C) !== "EEXIST") throw C;
      }
      let h = 60000,
        y = s
          .readdirStringSync(g)
          .filter((C) => C.startsWith(`${m}.backup.`))
          .sort()
          .reverse(),
        b = y[0],
        _ = b ? Number(b.split(".backup.").pop()) : 0,
        S = !d && (Number.isNaN(_) || Date.now() - _ >= h);
      if (S) {
        let C = HS.join(g, `${m}.backup.${Date.now()}`);
        s.copyFileSync(e, C);
      }
      let A = 5,
        v = S
          ? s
              .readdirStringSync(g)
              .filter((C) => C.startsWith(`${m}.backup.`))
              .sort()
              .reverse()
          : y;
      for (let C of v.slice(A))
        try {
          s.unlinkSync(HS.join(g, C));
        } catch {}
    } catch (m) {
      if (on(m) !== "ENOENT")
        T(`Failed to backup config: ${m}`, {
          level: "error",
        });
    }
    return (
      aRt(e, De(f, null, 2), {
        encoding: "utf-8",
        mode: 384,
        allowSymlink: true,
      }),
      true
    );
  } finally {
    if (i) i();
  }
}
function enableConfigs() {
  if (BVo) {
    if (DVo !== null) throw DVo;
    return;
  }
  let e = Date.now();
  (In("info", "enable_configs_started"), (BVo = true));
  try {
    getConfig(b0(), Cme, true);
  } catch (t) {
    throw ((DVo = t), t);
  }
  In("info", "enable_configs_completed", {
    duration_ms: Date.now() - e,
  });
}
function jVo() {
  return HS.join(tr(), "backups");
}
function findMostRecentBackup(e) {
  let t = qt(),
    n = HS.basename(e),
    r = jVo();
  try {
    let i = t
      .readdirStringSync(r)
      .filter((a) => a.startsWith(`${n}.backup.`))
      .sort()
      .at(-1);
    if (i) return HS.join(r, i);
  } catch {}
  let o = HS.dirname(e);
  try {
    let i = t
      .readdirStringSync(o)
      .filter((l) => l.startsWith(`${n}.backup.`))
      .sort()
      .at(-1);
    if (i) return HS.join(o, i);
    let a = `${e}.backup`;
    try {
      return (t.statSync(a), a);
    } catch {}
  } catch {}
  return null;
}
function getConfig(e, t, n) {
  if (!BVo) throw Error("Config accessed before allowed.");
  let r = qt();
  try {
    let o = r.readFileSync(e, {
      encoding: "utf-8",
    });
    try {
      let s = Ft(TG(o));
      return (
        (vcr = false),
        {
          ...t(),
          ...s,
        }
      );
    } catch (s) {
      let i = s instanceof Error ? s.message : String(s);
      throw new _B(i, e, t());
    }
  } catch (o) {
    let s = on(o);
    if (((vcr = o instanceof _B), s === "ENOENT")) {
      let i = findMostRecentBackup(e);
      if (i)
        process.stderr.write(`
Claude configuration file not found at: ${e}
A backup file exists at: ${i}
You can manually restore it by running: cp "${i}" "${e}"

`);
      return t();
    }
    if (o instanceof _B && n) throw o;
    if (o instanceof _B) {
      (T(`Config file corrupted: ${o.message}`, {
        level: "error",
      }),
        process.stderr.write(`
Claude configuration file at ${e} is corrupted: ${o.message}
`));
      let i = 0;
      try {
        let l = HS.basename(e),
          c = jVo();
        r.mkdirSync(c);
        let u = r.readdirStringSync(c).filter((m) => m.startsWith(`${l}.corrupted.`)),
          d,
          p = false,
          f = r.readFileSync(e, {
            encoding: "utf-8",
          });
        i = f.length;
        for (let m of u)
          try {
            let g = r.readFileSync(HS.join(c, m), {
              encoding: "utf-8",
            });
            if (f === g) {
              p = true;
              break;
            }
          } catch {}
        if (!p)
          ((d = HS.join(c, `${l}.corrupted.${Date.now()}`)),
            r.copyFileSync(e, d),
            T(`Corrupted config backed up to: ${d}`, {
              level: "error",
            }));
        if (d)
          process.stderr.write(`The corrupted file has been backed up to: ${d}
`);
        else if (p)
          process.stderr.write(`The corrupted file has already been backed up.
`);
      } catch (l) {
        T(`Could not back up corrupted config (${on(l) ?? l}); continuing.`, {
          level: "error",
        });
      }
      let a = findMostRecentBackup(e);
      if (!RVo && !$Vo.has(e)) {
        ($Vo.add(e), (RVo = true));
        try {
          let l = e === b0() ? p2.config : null;
          G("tengu_config_parse_error", {
            file_size: i,
            had_cached_auth: l?.oauthAccount !== void 0 || l?.hasCompletedOnboarding === true,
            has_timestamped_backup: a !== null,
          });
        } finally {
          RVo = false;
        }
      }
      if (a)
        process.stderr.write(`A backup file exists at: ${a}
You can manually restore it by running: cp "${a}" "${e}"

`);
      else
        process.stderr.write(`
`);
    }
    return t();
  }
}
function getRawCurrentProjectConfigEntry() {
  return getGlobalConfig().projects?.[getProjectPathForConfig()];
}
function getCurrentProjectConfig() {
  let e = getProjectPathForConfig(),
    t = getGlobalConfig();
  if (!t.projects) return DEFAULT_PROJECT_CONFIG;
  let n = t.projects[e] ?? DEFAULT_PROJECT_CONFIG;
  if (typeof n.allowedTools === "string") n.allowedTools = Ia(n.allowedTools) ?? [];
  return n;
}
function saveCurrentProjectConfig(e) {
  let t = getProjectPathForConfig(),
    n = null;
  try {
    if (
      saveConfigWithLock(b0(), Cme, (o) => {
        let s = o.projects?.[t] ?? DEFAULT_PROJECT_CONFIG,
          i = e(s);
        if (i === s) return o;
        return (
          (n = sNe({
            ...o,
            projects: {
              ...o.projects,
              [t]: i,
            },
          })),
          n
        );
      }) &&
      n
    )
      IZt(n);
  } catch (r) {
    T(`Failed to save config with lock: ${r}`, {
      level: "error",
    });
    let o = CZt();
    if (sTt(o)) {
      (T(
        "saveCurrentProjectConfig fallback: re-read config is missing auth that cache has; refusing to write. See GH #3117.",
        {
          level: "error",
        },
      ),
        G("tengu_config_auth_loss_prevented", {}));
      return;
    }
    let s = o.projects?.[t] ?? DEFAULT_PROJECT_CONFIG,
      i = e(s);
    if (i === s) return;
    ((n = sNe({
      ...o,
      projects: {
        ...o.projects,
        [t]: i,
      },
    })),
      Icr(n, "save_project"));
  }
}
function deleteProjectConfig(e) {
  let t = null,
    n = null;
  try {
    let r = saveConfigWithLock(b0(), Cme, (o) => {
      if (!o.projects?.[e]) return ((n = false), o);
      n = true;
      let { [e]: s, ...i } = o.projects;
      return (
        (t = sNe({
          ...o,
          projects: i,
        })),
        t
      );
    });
    if (r && t) IZt(t);
    return r || n === false;
  } catch (r) {
    T(`Failed to save config with lock: ${r}`, {
      level: "error",
    });
    let o = CZt();
    if (sTt(o))
      return (
        T(
          "deleteProjectConfig fallback: re-read config is missing auth that cache has; refusing to write. See GH #3117.",
          {
            level: "error",
          },
        ),
        G("tengu_config_auth_loss_prevented", {}),
        false
      );
    if (!o.projects?.[e]) return true;
    let { [e]: s, ...i } = o.projects;
    return (
      (t = sNe({
        ...o,
        projects: i,
      })),
      Icr(t, "delete_project")
    );
  }
}
function deleteCurrentProjectConfigFields(e) {
  return Gcc(e, {
    projectPath: getProjectPathForConfig,
    saveWithLock: (t) => saveConfigWithLock(b0(), Cme, t),
    writeCache: IZt,
    readConfigFallback: CZt,
    wouldLoseAuth: sTt,
    fallbackSave: (t) => Icr(t, "delete_project_fields"),
  });
}
function hsm(e, t) {
  return Gcc(e, t);
}
function Gcc(e, t) {
  let n = (a) => {
      let l = {
        ...a,
      };
      for (let c of e) delete l[c];
      return l;
    },
    r = t.projectPath(),
    o = t.readConfigFallback().projects?.[r];
  if (!o || !e.some((a) => a in o)) return true;
  let s = null,
    i = null;
  try {
    let a = t.saveWithLock((l) => {
      let c = l.projects?.[r];
      if (!c || !e.some((u) => u in c)) return ((i = false), l);
      return (
        (i = true),
        (s = sNe({
          ...l,
          projects: {
            ...l.projects,
            [r]: n(c),
          },
        })),
        s
      );
    });
    if (a && s) t.writeCache(s);
    return a || i === false;
  } catch (a) {
    T(`Failed to save config with lock: ${a}`, {
      level: "error",
    });
    let l = t.readConfigFallback();
    if (t.wouldLoseAuth(l))
      return (
        T(
          "deleteCurrentProjectConfigFields fallback: re-read config is missing auth that cache has; refusing to write. See GH #3117.",
          {
            level: "error",
          },
        ),
        G("tengu_config_auth_loss_prevented", {}),
        false
      );
    let c = l.projects?.[r];
    if (!c || !e.some((u) => u in c)) return true;
    return (
      (s = sNe({
        ...l,
        projects: {
          ...l.projects,
          [r]: n(c),
        },
      })),
      t.fallbackSave(s)
    );
  }
}
function isAutoUpdaterDisabled() {
  return getAutoUpdaterDisabledReason() !== null;
}
function shouldSkipPluginAutoupdate() {
  return isAutoUpdaterDisabled() && !ut(process.env.FORCE_AUTOUPDATE_PLUGINS);
}
function formatAutoUpdaterDisabledReason(e) {
  switch (e.type) {
    case "development":
      return "development build";
    case "env":
      return `set by env: ${e.envVar}`;
    case "config":
      return "config";
  }
}
function getAutoUpdaterDisabledReason() {
  if (Oe.DISABLE_UPDATES)
    return {
      type: "env",
      envVar: "DISABLE_UPDATES",
    };
  if (Oe.DISABLE_AUTOUPDATER)
    return {
      type: "env",
      envVar: "DISABLE_AUTOUPDATER",
    };
  let e = GZe();
  if (e)
    return {
      type: "env",
      envVar: e,
    };
  let t = getGlobalConfig();
  if (
    t.autoUpdates === false &&
    (t.installMethod !== "native" || t.autoUpdatesProtectedForNative !== true)
  )
    return {
      type: "config",
    };
  return null;
}
function getOrCreateUserID() {
  let e = getGlobalConfig();
  if (e.userID) return e.userID;
  if (PVo) return PVo;
  let t = FVo.randomBytes(32).toString("hex");
  PVo = t;
  try {
    saveGlobalConfig((n) => ({
      ...n,
      userID: t,
    }));
  } catch (n) {
    T(`getOrCreateUserID: could not persist userID: ${n}`, {
      level: "error",
    });
  }
  return t;
}
function getOrCreateMachineID() {
  let e = getGlobalConfig();
  if (e.machineID) return e.machineID;
  if (MVo) return MVo;
  let t = FVo.randomBytes(32).toString("hex");
  MVo = t;
  try {
    saveGlobalConfig((n) => ({
      ...n,
      machineID: t,
    }));
  } catch (n) {
    T(`getOrCreateMachineID: could not persist machineID: ${n}`, {
      level: "error",
    });
  }
  return t;
}
function recordFirstStartTime() {
  if (!getGlobalConfig().firstStartTime) {
    let t = new Date().toISOString();
    saveGlobalConfig((n) => ({
      ...n,
      firstStartTime: n.firstStartTime ?? t,
    }));
  }
}
function getMemoryPath(e) {
  let t = yr();
  switch (e) {
    case "User":
      return HS.join(tr(), "CLAUDE.md");
    case "Local":
      return HS.join(t, "CLAUDE.local.md");
    case "Project":
      return HS.join(t, "CLAUDE.md");
    case "Managed":
      return HS.join(QC(), "CLAUDE.md");
    case "AutoMem":
      return T_e();
  }
}
function getManagedClaudeRulesDir() {
  return HS.join(QC(), ".claude", "rules");
}
function getUserClaudeRulesDir() {
  return HS.join(tr(), "rules");
}
function Asm() {
  $Vo.clear();
}
function vsm(e) {
  ((p2.config = e), (p2.mtime = e ? Date.now() : 0));
}
function setClientDataCacheKeyGetter(e) {
  vZt = e;
}
function getCachedClientData() {
  if (!vZt) return null;
  let e = getGlobalConfig(),
    t = vZt(),
    n = e.clientDataCacheSlots;
  if (n != null && Object.hasOwn(n, t)) return QOi(n, t);
  let r = e.clientDataCache;
  return typeof r === "object" && r !== null ? r : null;
}
function hasClientDataCacheSlot() {
  if (!vZt) return false;
  let e = getGlobalConfig().clientDataCacheSlots;
  return e != null && Object.hasOwn(e, vZt());
}
var FVo,
  Ucc,
  HS,
  asm,
  RVo = false,
  $Vo,
  vcr = false,
  DEFAULT_PROJECT_CONFIG,
  DEFAULT_GLOBAL_CONFIG,
  GLOBAL_CONFIG_KEYS,
  PROJECT_CONFIG_KEYS,
  jcc = false,
  HZt,
  dsm,
  LoA,
  p2,
  oNe = null,
  TZt = 0,
  Tcr = 0,
  msm = 1000,
  LVo = false,
  BVo = false,
  DVo = null,
  getProjectPathForConfig,
  PVo = null,
  MVo = null,
  ysm,
  _sm,
  bsm,
  Ssm,
  Esm,
  Hsm,
  Tsm,
  vZt = null;
