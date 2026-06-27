// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rtr
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=modified  jaccard=0.2647  score=0.5411  fileCov=0.3413
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var rtr = E(() => {
  Un();
});
function oEt(e, t) {
  return kOe() ? t : e;
}
function sEt() {
  let e = Dt(),
    t = Dr();
  return {
    ...e,
    theme: t.theme ?? e.theme,
    editorMode: t.editorMode ?? e.editorMode,
    verbose: t.verbose ?? e.verbose,
    preferredNotifChannel: t.preferredNotifChannel ?? e.preferredNotifChannel,
    autoCompactEnabled: t.autoCompactEnabled ?? e.autoCompactEnabled,
    autoScrollEnabled: t.autoScrollEnabled ?? e.autoScrollEnabled,
    fileCheckpointingEnabled: t.fileCheckpointingEnabled ?? e.fileCheckpointingEnabled,
    showTurnDuration: t.showTurnDuration ?? e.showTurnDuration,
    showMessageTimestamps: t.showMessageTimestamps ?? e.showMessageTimestamps,
    terminalProgressBarEnabled: t.terminalProgressBarEnabled ?? e.terminalProgressBarEnabled,
    todoFeatureEnabled: t.todoFeatureEnabled ?? e.todoFeatureEnabled,
    teammateMode: t.teammateMode ?? e.teammateMode,
    remoteControlAtStartup: t.remoteControlAtStartup ?? e.remoteControlAtStartup,
    autoUploadSessions: t.autoUploadSessions ?? e.autoUploadSessions,
    inputNeededNotifEnabled: t.inputNeededNotifEnabled ?? e.inputNeededNotifEnabled,
    agentPushNotifEnabled: t.agentPushNotifEnabled ?? e.agentPushNotifEnabled,
  };
}
function gMl() {
  let e = fle();
  return [
    "default",
    ...hye.filter((t) => (e || !t.includes("fable")) && !KOo(t) && !YOo(t) && xa(t)),
  ];
}
function nRf(e) {
  let t = e.trim();
  if (!t || t.toLowerCase() === "default") return "default";
  if (t.length <= 3) {
    let n = t.toLowerCase(),
      r = tRf.get(n) ?? n;
    try {
      let o = vis().of(r);
      if (o && o !== r) return o;
    } catch {}
  }
  return t
    .split(/\s+/)
    .map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
    .join(" ");
}
function otr(e) {
  if (e === void 0) return bj(nzt());
  if (e === null) return "Default (leader's model)";
  return bj(e);
}
function iEt(e) {
  let {
    globalConfig: t,
    settingsData: n,
    themeSetting: r,
    currentOutputStyle: o,
    currentLanguage: s,
    externalIncludesApproved: i,
    thinkingEnabled: a,
    verbose: l,
    mainLoopModel: c,
    isFastMode: u,
    promptSuggestionEnabled: d,
    awaySummaryEnabled: p,
    showAutoInDefaultModePicker: f,
    showDefaultViewPicker: m,
    pushTogglesVisible: g,
    isConnectedToIde: h,
    isFileCheckpointingAvailable: y,
    workflowsToggleable: b,
    shouldShowExternalIncludesToggle: _,
    autoUpdaterDisabledReason: S,
    setAppState: A,
    setTheme: v,
    setGlobalConfig: C,
    setSettingsData: x,
    setChanges: I,
  } = e;
  function k(N) {
    G("tengu_config_model_changed", {
      from_model: c,
      to_model: N,
    });
    let $ = FQ(N),
      q = $
        ? void 0
        : io("userSettings", {
            model: N ?? void 0,
          });
    if (
      (Wie(),
      A((W) => ({
        ...W,
        mainLoopModel: N,
        mainLoopModelForSession: null,
      })),
      I((W) => {
        let V =
          bj(N) +
          (xOe(N, false, nT()) ? " \xB7 Draws from usage credits" : "") +
          ($ ? " \xB7 this session only \u2014 /model to set up" : "");
        if ("model" in W) {
          let { model: Y, ...z } = W;
          return {
            ...z,
            model: V,
          };
        }
        return {
          ...W,
          model: V,
        };
      }),
      q?.error)
    )
      return {
        error: q.error,
      };
  }
  function D(N) {
    (yI("verbose", N),
      C((B) => ({
        ...B,
        verbose: N,
      })),
      A((B) => ({
        ...B,
        verbose: N,
      })),
      I((B) => {
        if ("verbose" in B) {
          let { verbose: $, ...q } = B;
          return q;
        }
        return {
          ...B,
          verbose: N,
        };
      }));
  }
  function P(N) {
    (yI("preferredNotifChannel", N),
      C((B) => ({
        ...B,
        preferredNotifChannel: N,
      })));
  }
  function O(N) {
    (yI("inputNeededNotifEnabled", N),
      C((B) => ({
        ...B,
        inputNeededNotifEnabled: N,
      })),
      ZOo(),
      G("tengu_push_notif_pref_changed", {
        key: We("inputNeededNotifEnabled"),
        value: String(N),
      }));
  }
  function L(N) {
    (yI("agentPushNotifEnabled", N),
      C((B) => ({
        ...B,
        agentPushNotifEnabled: N,
      })),
      ZOo(),
      G("tengu_push_notif_pref_changed", {
        key: We("agentPushNotifEnabled"),
        value: String(N),
      }));
  }
  return {
    settings: [
      {
        id: "autoCompact",
        label: "Auto-compact",
        value: t.autoCompactEnabled,
        type: "boolean",
        onChange(N) {
          (yI("autoCompactEnabled", N),
            C((B) => ({
              ...B,
              autoCompactEnabled: N,
            })),
            G("tengu_auto_compact_setting_changed", {
              enabled: N,
            }));
        },
      },
      ...(w1n()
        ? [
            {
              id: "switchModelsOnFlag",
              label: caa,
              value: n?.switchModelsOnFlag ?? true,
              type: "boolean",
              onChange(N) {
                (io("userSettings", {
                  switchModelsOnFlag: N,
                }),
                  x((B) => ({
                    ...B,
                    switchModelsOnFlag: N,
                  })),
                  G("tengu_refusal_fallback_setting_changed", {
                    enabled: N,
                  }));
              },
            },
          ]
        : []),
      {
        id: "tips",
        label: "Show tips",
        value: n?.spinnerTipsEnabled ?? true,
        type: "boolean",
        onChange(N) {
          (io("localSettings", {
            spinnerTipsEnabled: N,
          }),
            x((B) => ({
              ...B,
              spinnerTipsEnabled: N,
            })),
            G("tengu_tips_setting_changed", {
              enabled: N,
            }));
        },
      },
      {
        id: "reduceMotion",
        label: "Reduce motion",
        value: n?.prefersReducedMotion ?? false,
        type: "boolean",
        onChange(N) {
          (io("localSettings", {
            prefersReducedMotion: N,
          }),
            x((B) => ({
              ...B,
              prefersReducedMotion: N,
            })),
            A((B) => ({
              ...B,
              settings: {
                ...B.settings,
                prefersReducedMotion: N,
              },
            })),
            G("tengu_reduce_motion_setting_changed", {
              enabled: N,
            }));
        },
      },
      {
        id: "thinking",
        label: "Thinking mode",
        value: a ?? true,
        type: "boolean",
        onChange(N) {
          (A((B) => ({
            ...B,
            thinkingEnabled: N,
          })),
            io("userSettings", {
              alwaysThinkingEnabled: N ? void 0 : false,
            }),
            G("tengu_thinking_toggled", {
              enabled: N,
            }),
            xe("thinking_toggle"));
        },
      },
      ...(sc() && Fx()
        ? [
            {
              id: "fast",
              label: `Fast mode (${FG()})`,
              value: !!u,
              type: "boolean",
              onChange(N) {
                if (
                  (zIe(),
                  io("userSettings", {
                    fastMode: N ? true : void 0,
                  }),
                  N)
                ) {
                  let B = !rg(c);
                  (A(($) => ({
                    ...$,
                    ...(B && {
                      mainLoopModel: Q2e(),
                      mainLoopModelForSession: null,
                    }),
                    fastMode: true,
                  })),
                    I(($) => ({
                      ...$,
                      ...(B && {
                        model: Q2e(),
                      }),
                      "Fast mode": "ON",
                    })));
                } else
                  (A((B) => ({
                    ...B,
                    fastMode: false,
                  })),
                    I((B) => ({
                      ...B,
                      "Fast mode": "OFF",
                    })));
              },
            },
          ]
        : []),
      ...(at("tengu_chomp_inflection", false)
        ? [
            {
              id: "promptSuggestionEnabled",
              label: "Prompt suggestions",
              value: d,
              type: "boolean",
              onChange(N) {
                (A((B) => ({
                  ...B,
                  promptSuggestionEnabled: N,
                })),
                  io("userSettings", {
                    promptSuggestionEnabled: N ? void 0 : false,
                  }));
              },
            },
          ]
        : []),
      ...(at("tengu_sedge_lantern", true)
        ? [
            {
              id: "recap",
              label: "Session recap",
              value: p,
              type: "boolean",
              onChange(N) {
                (A((B) => ({
                  ...B,
                  awaySummaryEnabled: N,
                })),
                  io("userSettings", {
                    awaySummaryEnabled: N ? void 0 : false,
                  }),
                  x((B) => ({
                    ...B,
                    awaySummaryEnabled: N ? void 0 : false,
                  })));
              },
            },
          ]
        : []),
      ...[],
      ...(y
        ? [
            {
              id: "checkpoints",
              label: "Rewind code (checkpoints)",
              value: t.fileCheckpointingEnabled,
              type: "boolean",
              onChange(N) {
                (yI("fileCheckpointingEnabled", N),
                  C((B) => ({
                    ...B,
                    fileCheckpointingEnabled: N,
                  })),
                  G("tengu_file_history_snapshots_setting_changed", {
                    enabled: N,
                  }));
              },
            },
          ]
        : []),
      ...(b
        ? [
            {
              id: "workflows",
              label: "Dynamic workflows",
              value: n?.disableWorkflows === true ? false : (n?.enableWorkflows ?? gKr()),
              type: "boolean",
              onChange(N) {
                let B = N === gKr() ? void 0 : N;
                (io("userSettings", {
                  enableWorkflows: B,
                  disableWorkflows: void 0,
                }),
                  x(($) => ({
                    ...$,
                    enableWorkflows: B,
                    disableWorkflows: void 0,
                  })),
                  I(($) => ({
                    ...$,
                    workflows: N ? "on" : "off",
                  })));
              },
            },
            {
              id: "workflowKeywordTriggerEnabled",
              label: "Ultracode keyword trigger",
              value: n?.workflowKeywordTriggerEnabled ?? true,
              type: "boolean",
              onChange(N) {
                let B = N ? void 0 : false;
                (io("userSettings", {
                  workflowKeywordTriggerEnabled: B,
                }),
                  x(($) => ({
                    ...$,
                    workflowKeywordTriggerEnabled: B,
                  })),
                  I(($) => ({
                    ...$,
                    ultracodeKeywordTrigger: N ? "on" : "off",
                  })));
              },
            },
          ]
        : []),
      {
        id: "verbose",
        label: oEt("Verbose output", "Verbose"),
        value: l,
        type: "boolean",
        onChange: D,
      },
      {
        id: "progressBar",
        label: "Terminal progress bar",
        value: t.terminalProgressBarEnabled,
        type: "boolean",
        onChange(N) {
          (yI("terminalProgressBarEnabled", N),
            C((B) => ({
              ...B,
              terminalProgressBarEnabled: N,
            })),
            G("tengu_terminal_progress_bar_setting_changed", {
              enabled: N,
            }));
        },
      },
      ...(at("tengu_terminal_sidebar", false)
        ? [
            {
              id: "showStatusInTerminalTab",
              label: "Show status in terminal tab",
              value: t.showStatusInTerminalTab ?? false,
              type: "boolean",
              onChange(N) {
                (gn((B) => ({
                  ...B,
                  showStatusInTerminalTab: N,
                })),
                  C((B) => ({
                    ...B,
                    showStatusInTerminalTab: N,
                  })),
                  G("tengu_terminal_tab_status_setting_changed", {
                    enabled: N,
                  }));
              },
            },
          ]
        : []),
      {
        id: "turnDuration",
        label: "Show turn duration",
        value: t.showTurnDuration,
        type: "boolean",
        onChange(N) {
          (yI("showTurnDuration", N),
            C((B) => ({
              ...B,
              showTurnDuration: N,
            })),
            G("tengu_show_turn_duration_setting_changed", {
              enabled: N,
            }));
        },
      },
      ...(at("tengu_sepia_moth", false)
        ? [
            {
              id: "precomputeCompactionEnabled",
              label: "Precompute compaction",
              value: n?.precomputeCompactionEnabled ?? true,
              type: "boolean",
              onChange(N) {
                (io("userSettings", {
                  precomputeCompactionEnabled: N,
                }),
                  x((B) => ({
                    ...B,
                    precomputeCompactionEnabled: N,
                  })),
                  G("tengu_precompute_compaction_setting_changed", {
                    enabled: N,
                  }));
              },
            },
          ]
        : []),
      ...(at("tengu_silk_hinge", false)
        ? [
            {
              id: "timestamps",
              label: "Show message timestamps",
              value: t.showMessageTimestamps,
              type: "boolean",
              onChange(N) {
                (yI("showMessageTimestamps", N),
                  C((B) => ({
                    ...B,
                    showMessageTimestamps: N,
                  })),
                  A((B) => ({
                    ...B,
                    showMessageTimestamps: N,
                  })),
                  G("tengu_show_message_timestamps_setting_changed", {
                    enabled: N,
                  }));
              },
            },
          ]
        : []),
      {
        id: "permissionMode",
        label: "Default permission mode",
        value: n?.permissions?.defaultMode || "default",
        options: (() => {
          let N = ["default", "plan"],
            B = yM,
            $ = ["bypassPermissions"];
          if (!f) $.push("auto");
          return [...N, ...B.filter((q) => !N.includes(q) && !$.includes(q))];
        })(),
        type: "enum",
        onChange(N) {
          let B = jO(N),
            $ = xet(B) ? $x(B) : B,
            q = io("userSettings", {
              permissions: {
                ...yn("userSettings")?.permissions,
                defaultMode: $,
              },
            });
          if (q.error)
            return (
              T(`Failed to update default permission mode setting: ${q.error.message}`, {
                level: "error",
              }),
              {
                error: q.error,
              }
            );
          (x((W) => ({
            ...W,
            permissions: {
              ...W?.permissions,
              defaultMode: $,
            },
          })),
            I((W) => ({
              ...W,
              permissionMode: N,
            })));
        },
      },
      {
        id: "worktreeBaseRef",
        label: "Worktree base ref",
        value: n?.worktree?.baseRef ?? "fresh",
        options: ["fresh", "head"],
        type: "enum",
        onChange(N) {
          let B = N,
            $ = io("userSettings", {
              worktree: {
                ...yn("userSettings")?.worktree,
                baseRef: B,
              },
            });
          if ($.error)
            return (
              T(`Failed to update worktree.baseRef in user settings: ${$.error.message}`, {
                level: "error",
              }),
              {
                error: $.error,
              }
            );
          (x((q) => ({
            ...q,
            worktree: {
              ...q?.worktree,
              baseRef: B,
            },
          })),
            I((q) => ({
              ...q,
              worktreeBaseRef: B,
            })));
        },
      },
      ...(f
        ? [
            {
              id: "useAutoModeDuringPlan",
              label: "Use auto mode during plan",
              value: n?.useAutoModeDuringPlan ?? true,
              type: "boolean",
              onChange(N) {
                (io("userSettings", {
                  useAutoModeDuringPlan: N,
                }),
                  x((B) => ({
                    ...B,
                    useAutoModeDuringPlan: N,
                  })),
                  A((B) => {
                    let $ = OWt(B.toolPermissionContext);
                    if ($ === B.toolPermissionContext) return B;
                    return {
                      ...B,
                      toolPermissionContext: $,
                    };
                  }),
                  I((B) => ({
                    ...B,
                    "Use auto mode during plan": N,
                  })));
              },
            },
          ]
        : []),
      {
        id: "gitignore",
        label: "Respect .gitignore in file picker",
        value: t.respectGitignore,
        type: "boolean",
        onChange(N) {
          (gn((B) => ({
            ...B,
            respectGitignore: N,
          })),
            C((B) => ({
              ...B,
              respectGitignore: N,
            })),
            G("tengu_respect_gitignore_setting_changed", {
              enabled: N,
            }));
        },
      },
      {
        id: "copyFullResponse",
        label: "Skip the /copy picker",
        value: t.copyFullResponse,
        type: "boolean",
        onChange(N) {
          (gn((B) => ({
            ...B,
            copyFullResponse: N,
          })),
            C((B) => ({
              ...B,
              copyFullResponse: N,
            })));
        },
      },
      ...(Ns()
        ? [
            {
              id: "copyOnSelect",
              label: "Copy on select",
              value: t.copyOnSelect ?? true,
              type: "boolean",
              onChange(N) {
                (gn((B) => ({
                  ...B,
                  copyOnSelect: N,
                })),
                  C((B) => ({
                    ...B,
                    copyOnSelect: N,
                  })));
              },
            },
            {
              id: "autoScroll",
              label: oEt("Auto-scroll", "Auto-scroll output"),
              value: t.autoScrollEnabled,
              type: "boolean",
              onChange(N) {
                (yI("autoScrollEnabled", N),
                  C((B) => ({
                    ...B,
                    autoScrollEnabled: N,
                  })));
              },
            },
          ]
        : []),
      ...(kOe()
        ? Kx() || $$e()
          ? [
              {
                id: "agentsView",
                label: "Agents view",
                value:
                  ($$e() && (t.leftArrowOpensAgents ?? true)) ||
                  (Kx() && (t.defaultToAgentsView ?? false))
                    ? "on"
                    : "off",
                type: "managedEnum",
                onChange() {},
              },
            ]
          : []
        : [
            ...(Kx()
              ? [
                  {
                    id: "defaultToAgentsView",
                    label: "Open agents view by default",
                    value: t.defaultToAgentsView ?? false,
                    type: "boolean",
                    onChange(N) {
                      (gn((B) => ({
                        ...B,
                        defaultToAgentsView: N,
                      })),
                        C((B) => ({
                          ...B,
                          defaultToAgentsView: N,
                        })));
                    },
                  },
                ]
              : []),
            ...($$e()
              ? [
                  {
                    id: "leftArrowOpensAgents",
                    label: `${CG} opens agents`,
                    value: t.leftArrowOpensAgents ?? true,
                    type: "boolean",
                    onChange(N) {
                      (gn((B) => ({
                        ...B,
                        leftArrowOpensAgents: N,
                      })),
                        C((B) => ({
                          ...B,
                          leftArrowOpensAgents: N,
                        })));
                    },
                  },
                ]
              : []),
          ]),
      S
        ? {
            id: "autoUpdatesChannel",
            label: "Auto-update channel",
            value: "disabled",
            type: "managedEnum",
            onChange() {},
          }
        : {
            id: "autoUpdatesChannel",
            label: "Auto-update channel",
            value: n?.autoUpdatesChannel === "rc" ? "slow" : (n?.autoUpdatesChannel ?? "latest"),
            type: "managedEnum",
            onChange() {},
          },
      {
        id: "theme",
        label: "Theme",
        value: lc("themes") && fW(r) ? `${r} (disabled in safe mode)` : r,
        type: "managedEnum",
        options: NRt,
        optionsHint: "For custom themes, use /theme.",
        onChange: v,
      },
      ...(kOe()
        ? [
            {
              id: "notifChannel",
              label: "Notifications",
              value: t1o(t.preferredNotifChannel),
              type: "managedEnum",
              options: [...pKe],
              onChange: P,
            },
          ]
        : [
            {
              id: "notifChannel",
              label: "Local notifications",
              value: t.preferredNotifChannel,
              options: [...pKe],
              type: "enum",
              onChange: P,
            },
            ...(g
              ? [
                  ...(BOn()
                    ? [
                        {
                          id: "inputNeededNotifEnabled",
                          label: "Push when actions required",
                          value: t.inputNeededNotifEnabled ?? false,
                          type: "boolean",
                          onChange: O,
                        },
                      ]
                    : []),
                  {
                    id: "agentPushNotifEnabled",
                    label: "Push when Claude decides",
                    value: t.agentPushNotifEnabled ?? false,
                    type: "boolean",
                    onChange: L,
                  },
                ]
              : []),
          ]),
      {
        id: "outputStyle",
        label: "Output style",
        value: lc("outputStyles") && !Object.hasOwn(yJ, o) ? `${o} (disabled in safe mode)` : o,
        type: "managedEnum",
        options: Object.keys(yJ),
        optionsHint: "For custom styles, open /config.",
        onChange(N) {
          let B = io("localSettings", {
            outputStyle: N,
          });
          if (
            (x(($) => ({
              ...$,
              outputStyle: N,
            })),
            B?.error)
          )
            return {
              error: B.error,
            };
        },
      },
      ...(m
        ? [
            {
              id: "defaultView",
              label: "Default view",
              value: n?.defaultView === void 0 ? "default" : String(n.defaultView),
              options: ["transcript", "chat", "default"],
              type: "enum",
              onChange(N) {
                let B = N === "default" ? void 0 : N;
                (io("localSettings", {
                  defaultView: B,
                }),
                  x((q) => ({
                    ...q,
                    defaultView: B,
                  })));
                let $ = B === "chat";
                (A((q) => {
                  if (q.isBriefOnly === $) return q;
                  return {
                    ...q,
                    isBriefOnly: $,
                  };
                }),
                  Ige($),
                  I((q) => ({
                    ...q,
                    "Default view": N,
                  })),
                  G("tengu_default_view_setting_changed", {
                    value: $e(B ?? "unset"),
                  }));
              },
            },
          ]
        : []),
      {
        id: "language",
        label: "Language",
        value: s ?? "Default (English)",
        type: "managedEnum",
        coerce: nRf,
        optionsHint: "Any language name or ISO code (e.g. 'ja'); use 'default' for English.",
        onChange(N) {
          let B = N.toLowerCase() === "default" ? void 0 : N,
            $ = io("userSettings", {
              language: B,
            });
          if (
            (x((q) => ({
              ...q,
              language: B,
            })),
            $?.error)
          )
            return {
              error: $.error,
            };
        },
      },
      {
        id: "editor",
        label: "Editor mode",
        value: t.editorMode === "emacs" ? "normal" : t.editorMode || "normal",
        options: ["normal", "vim"],
        type: "enum",
        onChange(N) {
          (yI("editorMode", N),
            C((B) => ({
              ...B,
              editorMode: N,
            })),
            G("tengu_editor_mode_changed", {
              mode: N,
              source: We("config_panel"),
            }));
        },
      },
      {
        id: "externalEditorContext",
        label: oEt("Show last response in external editor", "Show responses in IDE"),
        value: t.externalEditorContext ?? false,
        type: "boolean",
        onChange(N) {
          (gn((B) => ({
            ...B,
            externalEditorContext: N,
          })),
            C((B) => ({
              ...B,
              externalEditorContext: N,
            })),
            G("tengu_external_editor_context_changed", {
              enabled: N,
            }));
        },
      },
      {
        id: "prStatus",
        label: oEt("Show PR status footer", "Show PR status"),
        value: t.prStatusFooterEnabled ?? true,
        type: "boolean",
        onChange(N) {
          (gn((B) => {
            if (B.prStatusFooterEnabled === N) return B;
            return {
              ...B,
              prStatusFooterEnabled: N,
            };
          }),
            C((B) => ({
              ...B,
              prStatusFooterEnabled: N,
            })),
            G("tengu_pr_status_footer_setting_changed", {
              enabled: N,
            }));
        },
      },
      {
        id: "model",
        label: "Model",
        value: c === null ? "Default (recommended)" : c,
        type: "managedEnum",
        options: gMl(),
        optionsHint: "For a specific model ID, use /model.",
        onChange(N) {
          let B = N === "default" ? null : N;
          if (FQ(B))
            return (
              It("model_fable_consent", "config_shorthand_blocked"),
              {
                error: Error("needs usage-credits consent \u2014 run /model first"),
              }
            );
          return k(B);
        },
      },
      ...(h
        ? [
            {
              id: "diffTool",
              label: "Diff tool",
              value: t.diffTool ?? "auto",
              options: ["terminal", "auto"],
              type: "enum",
              onChange(N) {
                (gn((B) => ({
                  ...B,
                  diffTool: N,
                })),
                  C((B) => ({
                    ...B,
                    diffTool: N,
                  })),
                  G("tengu_diff_tool_changed", {
                    tool: N,
                    source: We("config_panel"),
                  }));
              },
            },
          ]
        : []),
      ...(!uF()
        ? [
            {
              id: "autoConnectIde",
              label: "Auto-connect to IDE (external terminal)",
              value: t.autoConnectIde ?? false,
              type: "boolean",
              onChange(N) {
                (gn((B) => ({
                  ...B,
                  autoConnectIde: N,
                })),
                  C((B) => ({
                    ...B,
                    autoConnectIde: N,
                  })),
                  G("tengu_auto_connect_ide_changed", {
                    enabled: N,
                    source: We("config_panel"),
                  }));
              },
            },
          ]
        : []),
      ...(uF()
        ? [
            {
              id: "autoInstallIdeExtension",
              label: "Auto-install IDE extension",
              value: t.autoInstallIdeExtension ?? true,
              type: "boolean",
              onChange(N) {
                (gn((B) => ({
                  ...B,
                  autoInstallIdeExtension: N,
                })),
                  C((B) => ({
                    ...B,
                    autoInstallIdeExtension: N,
                  })),
                  G("tengu_auto_install_ide_extension_changed", {
                    enabled: N,
                    source: We("config_panel"),
                  }));
              },
            },
          ]
        : []),
      {
        id: "chrome",
        label: oEt("Claude in Chrome enabled by default", "Claude in Chrome"),
        value: t.claudeInChromeDefaultEnabled ?? false,
        type: "boolean",
        onChange(N) {
          (gn((B) => ({
            ...B,
            claudeInChromeDefaultEnabled: N,
          })),
            C((B) => ({
              ...B,
              claudeInChromeDefaultEnabled: N,
            })),
            G("tengu_claude_in_chrome_setting_changed", {
              enabled: N,
            }));
        },
      },
      ...(el()
        ? (() => {
            let N = ogo();
            return [
              {
                id: "teammateMode",
                label: N ? `Teammate mode [overridden: ${N}]` : "Teammate mode",
                value: t.teammateMode ?? XGt,
                options: ["auto", "tmux", "iterm2", "in-process"],
                type: "enum",
                onChange($) {
                  if ($ !== "auto" && $ !== "tmux" && $ !== "iterm2" && $ !== "in-process") return;
                  (sgo($),
                    tzt(),
                    yI("teammateMode", $),
                    C((q) => ({
                      ...q,
                      teammateMode: $,
                    })),
                    G("tengu_teammate_mode_changed", {
                      mode: $e($),
                    }));
                },
              },
              {
                id: "teammateDefaultModel",
                label: "Default teammate model",
                value: otr(t.teammateDefaultModel),
                type: "managedEnum",
                options: gMl(),
                optionsHint: "For a specific model ID, open /config.",
                onChange($) {
                  let q = $ === "default" ? null : $;
                  if (FQ(q))
                    return (
                      It("model_fable_consent", "config_teammate_blocked"),
                      {
                        error: Error("needs usage-credits consent \u2014 run /model first"),
                      }
                    );
                  (gn((W) =>
                    W.teammateDefaultModel === q
                      ? W
                      : {
                          ...W,
                          teammateDefaultModel: q,
                        },
                  ),
                    C((W) => ({
                      ...W,
                      teammateDefaultModel: q,
                    })));
                },
              },
            ];
          })()
        : []),
      ...(xC()
        ? [
            {
              id: "remoteControl",
              label: "Enable Remote Control for all sessions",
              value:
                t.remoteControlAtStartup === void 0 ? "default" : String(t.remoteControlAtStartup),
              options: ["true", "false", "default"],
              type: "enum",
              onChange(N) {
                if (N === "default")
                  (yI("remoteControlAtStartup", void 0),
                    gn(($) => {
                      if ($.remoteControlAtStartup === void 0) return $;
                      let q = {
                        ...$,
                      };
                      return (delete q.remoteControlAtStartup, q);
                    }),
                    C(($) => ({
                      ...$,
                      remoteControlAtStartup: void 0,
                    })));
                else {
                  let $ = N === "true";
                  (yI("remoteControlAtStartup", $),
                    C((q) => ({
                      ...q,
                      remoteControlAtStartup: $,
                    })));
                }
                let B = Lfe();
                A(($) => i1o($, B));
              },
            },
          ]
        : []),
      ...[],
      ...(xC(), []),
      ...[],
      ...(_
        ? [
            {
              id: "showExternalIncludesDialog",
              label: oEt("External CLAUDE.md includes", "External CLAUDE.md files"),
              value: i ? "true" : "false",
              type: "managedEnum",
              onChange() {},
            },
          ]
        : []),
      ...(process.env.ANTHROPIC_API_KEY && !nv()
        ? [
            {
              id: "apiKey",
              consentGated: true,
              label: o1o.createElement(
                w,
                null,
                "Use custom API key: ",
                o1o.createElement(
                  w,
                  {
                    bold: true,
                  },
                  KB(process.env.ANTHROPIC_API_KEY),
                ),
              ),
              searchText: "Use custom API key",
              value: Boolean(
                process.env.ANTHROPIC_API_KEY &&
                t.customApiKeyResponses?.approved?.includes(KB(process.env.ANTHROPIC_API_KEY)),
              ),
              type: "boolean",
              onChange(N) {
                (gn((B) => {
                  let $ = {
                    ...B,
                  };
                  if (!$.customApiKeyResponses)
                    $.customApiKeyResponses = {
                      approved: [],
                      rejected: [],
                    };
                  if (!$.customApiKeyResponses.approved)
                    $.customApiKeyResponses = {
                      ...$.customApiKeyResponses,
                      approved: [],
                    };
                  if (!$.customApiKeyResponses.rejected)
                    $.customApiKeyResponses = {
                      ...$.customApiKeyResponses,
                      rejected: [],
                    };
                  if (process.env.ANTHROPIC_API_KEY) {
                    let q = KB(process.env.ANTHROPIC_API_KEY);
                    if (N)
                      $.customApiKeyResponses = {
                        ...$.customApiKeyResponses,
                        approved: [
                          ...($.customApiKeyResponses.approved ?? []).filter((W) => W !== q),
                          q,
                        ],
                        rejected: ($.customApiKeyResponses.rejected ?? []).filter((W) => W !== q),
                      };
                    else
                      $.customApiKeyResponses = {
                        ...$.customApiKeyResponses,
                        approved: ($.customApiKeyResponses.approved ?? []).filter((W) => W !== q),
                        rejected: [
                          ...($.customApiKeyResponses.rejected ?? []).filter((W) => W !== q),
                          q,
                        ],
                      };
                  }
                  return $;
                }),
                  C(sEt()));
              },
            },
          ]
        : []),
    ],
    helpers: {
      onChangeMainModelConfig: k,
      onChangeVerbose: D,
      changeNotifChannel: P,
      changeInputNeededNotif: O,
      changeAgentPushNotif: L,
    },
  };
}
var o1o,
  tRf,
  r1o = () => {},
  hMl;
