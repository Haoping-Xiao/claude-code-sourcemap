// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s1o
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=modified (alt of src/components/Settings/Config.tsx)  jaccard=0.0476  score=0.3224  fileCov=0.0529
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: parseConfigShorthand, listConfigKeys, getConfigArgumentCompletions, applyConfigShorthand, _resetSettableConfigKeysForTesting
// [unwrapped __esm module s1o] deps: hooks/useTerminalSize.ts, utils/config.ts, @smithy/smithy-client/dist-cjs/index.js, components/Settings/Config.tsx, utils/permissions/PermissionMode.ts, utils/markdownConfigLoader.ts, utils/debug.ts, utils/debug.ts, dn, utils/config.ts, EHe, utils/model/modelOptions.ts, utils/model/model.ts, utils/agentContext.ts, commands/model/model.tsx, utils/plugins/schemas.ts, utils/systemTheme.ts, @xmldom/xmldom/lib/entities.js, ink/line-width-cache.ts, utils/ide.ts, utils/settings/settings.ts, utils/effort.ts, services/analytics/index.ts, utils/imageValidation.ts, constants/outputStyles.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, services/analytics/growthbook.ts, lH, tools/AgentTool/resumeAgent.ts, components/Settings/Config.tsx, utils/configConstants.ts, highlight.js/lib/languages/mathematica.js, services/PromptSuggestion/promptSuggestion.ts, utils/agentSwarmsEnabled.ts, utils/swarm/teammateLayoutManager.ts, tools/shared/spawnMultiAgent.ts, utils/modelCost.ts, main.tsx, components/Settings/Config.tsx, @xmldom/xmldom/lib/entities.js
o1o = R(rt(), 1);
tRf = new Map([
  ["jp", "ja"],
  ["kr", "ko"],
  ["cn", "zh"],
  ["tw", "zh-Hant"],
]);
hMl = {
  setGlobalConfig: r1o,
  setSettingsData: r1o,
  setChanges: r1o,
};
function parseConfigShorthand(e) {
  let t = e.trim();
  if (!t || !t.includes("=")) return null;
  let n = t.split(/\s+/);
  if (On(n, (o) => o.includes("=")) === 1) {
    let o = t.indexOf("="),
      s = t.slice(0, o);
    if (!s || /\s/.test(s)) return null;
    return [
      {
        key: s,
        raw: t.slice(o + 1),
      },
    ];
  }
  let r = [];
  for (let o of n) {
    let s = o.indexOf("=");
    if (s <= 0) return null;
    r.push({
      key: o.slice(0, s),
      raw: o.slice(s + 1),
    });
  }
  return r;
}
function rRf(e, t) {
  let n = e.toLowerCase();
  return t.find((r) => r.id.toLowerCase() === n);
}
function applyConfigShorthand(e, t, n) {
  let { settings: r } = iEt(a1o(t, n));
  return e.map(({ key: o, raw: s }) => Config(o, s, r));
}
function Config(e, t, n) {
  let r = rRf(e, n);
  if (
    (G("tengu_config_shorthand", {
      key_hash: Dd(e),
      matched: r !== void 0,
    }),
    !r)
  )
    return {
      ok: false,
      message: `${e} isn't a /config setting. Run /config to see what's available.`,
    };
  let o = "searchText" in r ? r.searchText : r.label;
  if (r.consentGated)
    return {
      ok: false,
      message: `${o} can't be set with key=value \u2014 open /config to change it from the panel.`,
    };
  switch (r.type) {
    case "boolean": {
      let s = t.toLowerCase(),
        i = ["true", "1", "on", "yes"].includes(s),
        a = ["false", "0", "off", "no"].includes(s);
      if (!i && !a)
        return {
          ok: false,
          message: `${o} takes true or false, not "${t}".`,
        };
      let l = r.onChange(i);
      if (l?.error)
        return {
          ok: false,
          message: `Couldn't save ${o}: ${l.error.message}`,
        };
      return {
        ok: true,
        message: `Set ${o} to ${i ? "true" : "false"}`,
      };
    }
    case "enum":
    case "managedEnum": {
      let s = r.type === "managedEnum" ? r.coerce : void 0;
      if (!r.options && !s)
        return {
          ok: false,
          message: `${o} can't be set with key=value \u2014 use ${oRf.get(r.id) ?? "/config"}.`,
        };
      let i = s ? s(t) : r.options?.find((l) => l.toLowerCase() === t.toLowerCase());
      if (i === void 0) {
        let l = r.type === "managedEnum" && r.optionsHint ? ` ${r.optionsHint}` : "";
        return {
          ok: false,
          message: r.options
            ? `${o} takes one of: ${r.options.join(", ")}.${l}`
            : `${o} doesn't accept "${t}".${l}`,
        };
      }
      let a = r.onChange(i);
      if (a?.error)
        return {
          ok: false,
          message: `Couldn't save ${o}: ${a.error.message}`,
        };
      return {
        ok: true,
        message: `Set ${o} to ${i}`,
      };
    }
  }
}
function listConfigKeys(e) {
  let { settings: t } = iEt(a1o(e));
  return t
    .flatMap((n) => {
      if (n.consentGated) return [];
      let r =
        n.type === "boolean"
          ? "true|false"
          : n.options
            ? n.options.join("|")
            : n.type === "managedEnum" && n.coerce
              ? "<value>"
              : null;
      return r ? [`  ${n.id}=${r}`] : [];
    })
    .sort().join(`
`);
}
function getConfigArgumentCompletions(e, t) {
  let n = aRf(),
    r = t.indexOf("=");
  if (r === -1) {
    let a = t.toLowerCase();
    return n
      .filter((l) => l.id.toLowerCase().startsWith(a))
      .sort((l, c) => l.id.localeCompare(c.id))
      .map((l) => ({
        value: `${l.id}=`,
        description: l.options?.slice(0, 4).join(" | ") ?? l.hint,
        isFinal: false,
        appendSpace: false,
      }));
  }
  let o = t.slice(0, r),
    s = t.slice(r + 1).toLowerCase(),
    i = n.find((a) => a.id.toLowerCase() === o.toLowerCase());
  if (!i?.options) return [];
  return i.options
    .filter((a) => a.toLowerCase().startsWith(s))
    .map((a) => ({
      value: `${i.id}=${a}`,
      isFinal: true,
    }));
}
function aRf() {
  if (E7t) return E7t;
  let e = {
      getAppState: () => ({
        thinkingEnabled: false,
        verbose: false,
        mainLoopModel: null,
        fastMode: false,
        promptSuggestionEnabled: false,
        awaySummaryEnabled: false,
      }),
      setAppState: () => {},
      options: {
        mcpClients: [],
      },
    },
    { settings: t } = iEt(a1o(e));
  return (
    (E7t = t.flatMap((n) => {
      if (n.consentGated) return [];
      let r =
        n.type === "boolean" ? ["true", "false"] : "options" in n && n.options ? n.options : void 0;
      if (r || (n.type === "managedEnum" && n.coerce))
        return [
          {
            id: n.id,
            options: r,
            hint: n.type === "managedEnum" ? n.optionsHint : void 0,
          },
        ];
      return [];
    })),
    E7t
  );
}
function lRf() {
  E7t = void 0;
}
function a1o(e, t) {
  let n = e.getAppState(),
    r = Dr(),
    o = sEt(),
    s = wc("disableWorkflows", false),
    i = wc("enableWorkflows", false),
    a =
      Ukn() &&
      (s.value !== true || s.source === "userSettings") &&
      (i.source === "default" || i.source === "userSettings"),
    l = (l3(), ro(CQ)).isBriefEntitled();
  return {
    globalConfig: o,
    settingsData: r,
    themeSetting: o.theme,
    currentOutputStyle: r?.outputStyle || uP,
    currentLanguage: r?.language,
    externalIncludesApproved: false,
    thinkingEnabled: n.thinkingEnabled,
    verbose: n.verbose,
    mainLoopModel: n.mainLoopModel,
    isFastMode: sc() ? n.fastMode : false,
    promptSuggestionEnabled: n.promptSuggestionEnabled,
    awaySummaryEnabled: n.awaySummaryEnabled,
    showAutoInDefaultModePicker: ROe() || fKe() === "enabled",
    showDefaultViewPicker: l,
    pushTogglesVisible: $ue() && !Vi() && WE(),
    isConnectedToIde: yqe(e.options.mcpClients),
    isFileCheckpointingAvailable: !Oe.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING,
    workflowsToggleable: a,
    shouldShowExternalIncludesToggle: false,
    autoUpdaterDisabledReason: jEe(),
    setAppState: (c) => e.setAppState(c),
    setTheme: t?.setTheme ?? ((c) => yI("theme", c)),
    ...hMl,
  };
}
var oRf, E7t;
