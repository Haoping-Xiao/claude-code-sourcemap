// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module i2e
// matched 2.1.88 source: src/utils/settings/settings.ts
// class=modified  jaccard=0.3272  score=0.5235  fileCov=0.466
// note: deminified; 36 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module i2e] deps: Xr, dn, je, Bi, Rd, vn, Is, ih, Jt, Sx, Smn, lj, oLt
((iCs = require("path")),
  (kLr = Mi()),
  (D1u = ve(() =>
    H.looseObject({
      managedSettings: H.unknown().optional(),
      claudeMd: H.string().optional(),
      appendSystemPrompt: H.string().optional(),
    }),
  )),
  (P1u = new Set(["plist", "hklm", "file"])));
var EY = {};
_t(EY, {
  updateSettingsForSource: () => updateSettingsForSource,
  surfaceManagedSettingsErrorsHeadless: () => surfaceManagedSettingsErrorsHeadless,
  shouldIncludeParentTier: () => hLr,
  settingsMergeCustomizer: () => SY,
  rawSettingsContainsKey: () => rawSettingsContainsKey,
  projectSettingsAliasesUserSettings: () => projectSettingsAliasesUserSettings,
  parseSettingsFileUncached: () => gLr,
  parseSettingsFile: () => a9,
  parseRemoteManagedSettings: () => parseRemoteManagedSettings,
  loadManagedFileSettingsFromDir: () => sLt,
  loadManagedFileSettings: () => loadManagedFileSettings,
  keepRestrictiveFromParent: () => yLr,
  isAutoModeClassifyAllShellEnabled: () => isAutoModeClassifyAllShellEnabled,
  isAdminPolicyOrigin: () => Bet,
  hasSurvivingAdminPolicySource: () => hasSurvivingAdminPolicySource,
  hasSkipWorkflowUsageWarning: () => hasSkipWorkflowUsageWarning,
  hasSkipDangerousModePermissionPrompt: () => hasSkipDangerousModePermissionPrompt,
  hasIsolatePeerMachines: () => hasIsolatePeerMachines,
  hasDisableClaudeAiConnectors: () => hasDisableClaudeAiConnectors,
  hasAutoModeOptIn: () => hasAutoModeOptIn,
  handleFileSystemError: () => lLt,
  getUseAutoModeDuringPlan: () => getUseAutoModeDuringPlan,
  getSettings_DEPRECATED: () => getSettings_DEPRECATED,
  getSettingsWithSources: () => getSettingsWithSources,
  getSettingsWithErrors: () => getSettingsWithErrors,
  getSettingsRootPathForSource: () => getSettingsRootPathForSource,
  getSettingsForSource: () => getSettingsForSource,
  getSettingsFilePathForSource: () => getSettingsFilePathForSource,
  getSettingsAfterPluginLoad: () => getSettingsAfterPluginLoad,
  getSecuritySensitiveSetting: () => getSecuritySensitiveSetting,
  getRelativeSettingsFilePathForSource: () => kG,
  getPolicySettingsOrigin: () => getPolicySettingsOrigin,
  getPolicySettingsLoadErrors: () => getPolicySettingsLoadErrors,
  getManagedSettingsKeysForLogging: () => getManagedSettingsKeysForLogging,
  getManagedFileSettingsPresence: () => getManagedFileSettingsPresence,
  getLocalSettingsValidationErrors: () => getLocalSettingsValidationErrors,
  getInitialSettings: () => getInitialSettings,
  getFatalAdminPolicyLoadErrors: () => getFatalAdminPolicyLoadErrors,
  getEffectiveSettingSource: () => getEffectiveSettingSource,
  getBasePolicySettingsOrigin: () => getBasePolicySettingsOrigin,
  getBasePolicySettings: () => getBasePolicySettings,
  getAutoModeConfig: () => getAutoModeConfig,
  getAllPolicyTierSettings: () => getAllPolicyTierSettings,
  getAdminPolicyLoadErrors: () => getAdminPolicyLoadErrors,
  filterFatalPolicyErrors: () => filterFatalPolicyErrors,
});
function cj() {
  let e = {
    cwd: yr(),
    allowedSources: wCt(),
    parentManaged: _br(),
    flagInline: HCt(),
    flagPath: XBe(),
    flagExpectedContent: JBe(),
    coworkPlugins: ICt(),
    mdm: () => Uae(),
    hkcu: () => kCe(),
    helper: () => Amn(),
    helperWarnings: () => cCs(),
    wslInherits: () => Vee(),
  };
  return ((e.file = () => aLt(e)), e);
}
function getSettingsRootPathForSource(e) {
  return fmn(e, cj());
}
function getSettingsFilePathForSource(e) {
  return CCe(e, cj());
}
function projectSettingsAliasesUserSettings() {
  let e = getSettingsFilePathForSource("projectSettings"),
    t = getSettingsFilePathForSource("userSettings");
  return !!e && !!t && jae.resolve(e) === jae.resolve(t);
}
function getLocalSettingsValidationErrors() {
  let e = getSettingsFilePathForSource("localSettings");
  if (!e) return [];
  return a9(e).errors;
}
function parseRemoteManagedSettings() {
  return wCe(cj());
}
function loadManagedFileSettings() {
  return aLt(cj());
}
function getSettingsForSource(e) {
  return gmn(e, cj());
}
function getAllPolicyTierSettings() {
  return Vws(cj());
}
function getInitialSettings() {
  return getSettingsWithErrors().settings || {};
}
function getSettingsWithSources() {
  n_();
  let e = [];
  for (let t of $w()) {
    let n = getSettingsForSource(t);
    if (n && Object.keys(n).length > 0)
      e.push({
        source: t,
        settings: n,
      });
  }
  return {
    effective: getInitialSettings(),
    sources: e,
  };
}
function getEffectiveSettingSource(e) {
  let t = $w();
  for (let n = t.length - 1; n >= 0; n--) {
    let r = t[n];
    if (getSettingsForSource(r)?.[e] !== void 0) return r;
  }
  return null;
}
function getSettingsWithErrors() {
  let e = a0();
  if (e !== null) return e;
  pa("loadSettingsFromDisk_start");
  let t = SLr(cj());
  return (pa("loadSettingsFromDisk_end"), Kon(t), t);
}
function getManagedFileSettingsPresence() {
  let e = [QC()];
  if (Vt() === "wsl" && Vee()) e.unshift(NO);
  for (let t of e) {
    let { settings: n } = a9(jae.join(t, "managed-settings.json"), void 0, true),
      { wslInheritsWindowsSettings: r, ...o } = n ?? {},
      s = Object.keys(o).length > 0,
      i = false;
    try {
      let a = jae.join(t, "managed-settings.d");
      i = qt()
        .readdirSync(a)
        .some((l) => {
          if (
            !(l.isFile() || l.isSymbolicLink()) ||
            !l.name.endsWith(".json") ||
            l.name.startsWith(".")
          )
            return false;
          let { settings: c } = a9(jae.join(a, l.name), void 0, true),
            { wslInheritsWindowsSettings: u, ...d } = c ?? {};
          return Object.keys(d).length > 0;
        });
    } catch {}
    if (s || i)
      return {
        hasBase: s,
        hasDropIns: i,
      };
  }
  return {
    hasBase: false,
    hasDropIns: false,
  };
}
function N1u() {
  let e = Uae();
  return {
    settings: Object.keys(e.settings).length > 0 ? e.settings : null,
    errors: e.errors,
  };
}
function getBasePolicySettings() {
  let e = cj(),
    { settings: t } = wCe(e);
  if (t) return t;
  let { settings: n } = N1u();
  if (n) return n;
  let { settings: r } = loadManagedFileSettings();
  if (r) return r;
  let { settings: o } = mmn(e);
  if (o) return o;
  let s = kCe();
  return Object.keys(s.settings).length > 0 ? s.settings : null;
}
function getBasePolicySettingsOrigin() {
  let e = hmn({
    ...cj(),
    helper: void 0,
  });
  return e === "helper" ? null : e;
}
function getPolicySettingsOrigin() {
  let e = Zns();
  if (e !== void 0) return e.value;
  let t = Fae() && Amn() ? "helper" : getBasePolicySettingsOrigin();
  return (ers(t), t);
}
function getPolicySettingsLoadErrors() {
  let e = zns();
  if (e !== void 0) return e;
  let t = [];
  return (
    t.push(...wCe(cj()).errors),
    t.push(...Uae().errors),
    t.push(...loadManagedFileSettings().errors),
    t.push(...mmn(cj()).errors),
    t.push(...kCe().errors),
    Kns(t),
    t
  );
}
function getAdminPolicyLoadErrors() {
  let e = Yns();
  if (e !== void 0) return e;
  let t = [];
  return (
    t.push(...wCe(cj()).errors),
    t.push(...Uae().errors),
    t.push(...loadManagedFileSettings().errors),
    Xns(t),
    t
  );
}
function getFatalAdminPolicyLoadErrors() {
  return filterFatalPolicyErrors(getAdminPolicyLoadErrors());
}
function filterFatalPolicyErrors(e) {
  return e.filter((t) => t.severity !== "warning");
}
function hasSurvivingAdminPolicySource() {
  let e = Jns();
  if (e !== void 0) return e;
  let t = (r) => r != null && Object.keys(r).length > 0,
    n =
      (Fae() && t(Amn())) ||
      t(wCe(cj()).settings) ||
      t(Uae().settings) ||
      t(loadManagedFileSettings().settings);
  return (Qns(n), n);
}
function surfaceManagedSettingsErrorsHeadless() {
  let e = getPolicySettingsLoadErrors();
  if (e.length === 0) return;
  let t = e.some((o) => o.severity !== "warning"),
    n = t
      ? "Managed settings failed to load; policies from the failed source are NOT in effect:"
      : "Managed settings contain invalid entries (remaining valid policies are still enforced):",
    r = e.map(
      (o) => `  ${o.file ?? "managed settings"}${o.path ? ` (${o.path})` : ""}: ${o.message}`,
    );
  (process.stderr.write(`${n}
${r.join(`
`)}
`),
    G("tengu_managed_settings_validation_errors", {
      error_count: e.length,
      remote_error_count: On(e, (o) => o.file === "remote managed settings"),
      fatal: t,
    }));
}
function updateSettingsForSource(e, t) {
  if (e === "policySettings" || e === "flagSettings")
    return {
      error: null,
    };
  let n = getSettingsFilePathForSource(e);
  if (!n)
    return {
      error: null,
    };
  try {
    qt().mkdirSync(jae.dirname(n));
    let r = bLr(e, cj());
    if (!r) {
      let i = null;
      try {
        i = XC(n);
      } catch (a) {
        if (!wn(a)) throw a;
      }
      if (i !== null) {
        let a = Ia(i, false);
        if (a === null)
          return (
            T(`updateSettingsForSource: invalid JSON in settings file at ${n}`, {
              level: "error",
            }),
            {
              error: Error(`Invalid JSON syntax in settings file at ${n}`),
            }
          );
        if (a && typeof a === "object")
          ((r = a), T(`Using raw settings from ${n} due to validation failure`));
      }
    }
    let o = ZV(r || {}, t, (i, a, l, c) => {
      if (a === void 0 && c && typeof l === "string") {
        delete c[l];
        return;
      }
      if (Array.isArray(a)) return a;
      return;
    });
    wRr(n);
    let s = jae.dirname(n) === getSettingsRootPathForSource("userSettings");
    if (
      (aRt(
        n,
        De(o, null, 2) +
          `
`,
        {
          encoding: "utf-8",
          allowSymlink: e === "userSettings" || s,
          checkParentDir: (e === "projectSettings" || e === "localSettings") && !s,
        },
      ),
      n_(),
      e === "localSettings")
    )
      ZTs(kG("localSettings"), yr()).then((i) => {
        if (!i.written) return;
        if (i.effective) xe("gitignore_global_rule");
        else if (i.reason === "already_tracked") It("gitignore_global_rule", i.reason);
        else Le("gitignore_global_rule", i.reason ?? "write_ineffective");
      });
  } catch (r) {
    let o = Error(`Failed to read raw settings from ${n}: ${r}`);
    return (
      T(o.message, {
        level: "error",
      }),
      {
        error: o,
      }
    );
  }
  try {
    getSettingsWithErrors();
  } catch (r) {
    ke(r);
  }
  try {
    Fet.emit(e);
  } catch (r) {
    for (let o of r instanceof AggregateError ? r.errors : [r]) ke(o);
  }
  return {
    error: null,
  };
}
function getManagedSettingsKeysForLogging(e) {
  let t = _M().strip().parse(e),
    n = ["permissions", "sandbox", "hooks"],
    r = [],
    o = {
      permissions: new Set([
        "allow",
        "deny",
        "ask",
        "defaultMode",
        "disableBypassPermissionsMode",
        "disableAutoMode",
        "additionalDirectories",
      ]),
      sandbox: new Set([
        "enabled",
        "failIfUnavailable",
        "allowUnsandboxedCommands",
        "network",
        "filesystem",
        "ignoreViolations",
        "excludedCommands",
        "autoAllowBashIfSandboxed",
        "enableWeakerNestedSandbox",
        "enableWeakerNetworkIsolation",
        "allowAppleEvents",
        "ripgrep",
      ]),
      hooks: new Set([
        "PreToolUse",
        "PostToolUse",
        "Notification",
        "UserPromptSubmit",
        "UserPromptExpansion",
        "SessionStart",
        "SessionEnd",
        "Stop",
        "SubagentStop",
        "PreCompact",
        "PostCompact",
        "TeammateIdle",
        "TaskCreated",
        "TaskCompleted",
      ]),
    };
  for (let s of Object.keys(t))
    if (n.includes(s) && t[s] && typeof t[s] === "object") {
      let i = t[s],
        a = o[s];
      if (a) {
        for (let l of Object.keys(i)) if (a.has(l)) r.push(`${s}.${l}`);
      }
    } else r.push(s);
  return r.sort();
}
function getSettingsAfterPluginLoad(e) {
  if (!lrs())
    G("tengu_plugin_settings_premature_read", {
      key: e,
    });
  let { settings: t } = getSettingsWithErrors();
  return (t || {})[e];
}
function getSecuritySensitiveSetting(e) {
  let t = [];
  for (let n of ["policySettings", "flagSettings", "userSettings"]) {
    let r = getSettingsForSource(n)?.[e];
    if (r !== void 0) t.push(r);
  }
  return t;
}
function hasSkipDangerousModePermissionPrompt() {
  return !!(
    getSettingsForSource("userSettings")?.skipDangerousModePermissionPrompt ||
    getSettingsForSource("localSettings")?.skipDangerousModePermissionPrompt ||
    getSettingsForSource("flagSettings")?.skipDangerousModePermissionPrompt ||
    getSettingsForSource("policySettings")?.skipDangerousModePermissionPrompt
  );
}
function hasSkipWorkflowUsageWarning() {
  return !!(
    getSettingsForSource("userSettings")?.skipWorkflowUsageWarning ||
    getSettingsForSource("localSettings")?.skipWorkflowUsageWarning ||
    getSettingsForSource("flagSettings")?.skipWorkflowUsageWarning ||
    getSettingsForSource("policySettings")?.skipWorkflowUsageWarning
  );
}
function hasIsolatePeerMachines() {
  return $w().some((e) => getSettingsForSource(e)?.isolatePeerMachines === true);
}
function hasDisableClaudeAiConnectors() {
  return $w().some((e) => getSettingsForSource(e)?.disableClaudeAiConnectors === true);
}
function hasAutoModeOptIn() {
  return true;
}
function getUseAutoModeDuringPlan() {
  return (
    getSettingsForSource("policySettings")?.useAutoModeDuringPlan !== false &&
    getSettingsForSource("flagSettings")?.useAutoModeDuringPlan !== false &&
    getSettingsForSource("userSettings")?.useAutoModeDuringPlan !== false &&
    getSettingsForSource("localSettings")?.useAutoModeDuringPlan !== false
  );
}
function getAutoModeConfig() {
  {
    let e = U1u(),
      t = [],
      n = [],
      r = [],
      o = [],
      s = false;
    for (let i of fCs) {
      let a = getSettingsForSource(i);
      if (!a) continue;
      let l = e.safeParse(a.autoMode);
      if (l.success) {
        if (l.data.allow) t.push(...l.data.allow);
        if (l.data.soft_deny) n.push(...l.data.soft_deny);
        if (l.data.hard_deny) r.push(...l.data.hard_deny);
        if (l.data.environment) o.push(...l.data.environment);
      }
    }
    if (t.length > 0 || n.length > 0 || r.length > 0 || o.length > 0 || s)
      return {
        ...(t.length > 0 && {
          allow: t,
        }),
        ...(n.length > 0 && {
          soft_deny: n,
        }),
        ...(r.length > 0 && {
          hard_deny: r,
        }),
        ...(o.length > 0 && {
          environment: o,
        }),
        ...{},
      };
  }
  return;
}
function isAutoModeClassifyAllShellEnabled() {
  for (let e of fCs) if (getSettingsForSource(e)?.autoMode?.classifyAllShell === true) return true;
  return false;
}
function rawSettingsContainsKey(e) {
  let t = cj();
  for (let n of iLt(t)) {
    if (n === "policySettings") continue;
    if (n === "flagSettings" && t.flagExpectedContent !== void 0) {
      let o = Ia(t.flagExpectedContent, false);
      if (o && typeof o === "object" && e in o) return true;
      continue;
    }
    let r = CCe(n, t);
    if (!r) continue;
    try {
      let { resolvedPath: o } = jd(qt(), r),
        s = XC(o);
      if (!s.trim()) continue;
      let i = Ia(s, false);
      if (i && typeof i === "object" && e in i) return true;
    } catch (o) {
      lLt(o, r);
    }
  }
  return false;
}
var jae, getSettings_DEPRECATED, U1u, fCs;
