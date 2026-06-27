// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W$l
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=modified (alt of src/components/Settings/Config.tsx)  jaccard=0.2515  score=0.4737  fileCov=0.3489
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module W$l] deps: utils/config.ts
((M1o = [
  "Appearance",
  "Model & output",
  "Display",
  "Input & controls",
  "Connections",
  "Advanced",
  "Experimental",
  "Internal",
]),
  (U$l = new Set(["Advanced", "Experimental", "Internal"])),
  (Rtr = [
    {
      id: "autoUpdatesChannel",
      isSet: ({ settingsData: e }) => e?.autoUpdatesChannel !== void 0,
    },
    {
      id: "worktreeBaseRef",
      isSet: ({ settingsData: e }) => e?.worktree?.baseRef !== void 0,
    },
    {
      id: "gitignore",
      isSet: ({ globalConfig: e }) => e.respectGitignore !== I7.respectGitignore,
    },
    {
      id: "copyFullResponse",
      isSet: ({ globalConfig: e }) => e.copyFullResponse !== I7.copyFullResponse,
    },
    {
      id: "recap",
      isSet: ({ settingsData: e }) => e?.awaySummaryEnabled !== void 0,
    },
  ]),
  (kLf = new Set(Rtr.map((e) => e.id))));
((j$l = {
  Appearance: ["theme", "language", "reduceMotion"],
  "Model & output": [
    "model",
    "fast",
    "switchModelsOnFlag",
    "outputStyle",
    "defaultView",
    "verbose",
    "autoCompact",
    "thinking",
    "permissionMode",
    "useAutoModeDuringPlan",
  ],
  Display: [
    "autoScroll",
    "progressBar",
    "tips",
    "turnDuration",
    "prStatus",
    "externalEditorContext",
  ],
  "Input & controls": [
    "editor",
    "copyOnSelect",
    "promptSuggestionEnabled",
    "agentsView",
    "checkpoints",
    "workflows",
    "workflowKeywordTriggerEnabled",
  ],
  Connections: [
    "notifChannel",
    "inputNeededNotifEnabled",
    "agentPushNotifEnabled",
    "autoConnectIde",
    "autoInstallIdeExtension",
    "diffTool",
    "chrome",
    "remoteControl",
    "showExternalIncludesDialog",
    "apiKey",
  ],
  Advanced: Rtr.map((e) => e.id),
  Experimental: [
    "precomputeCompactionEnabled",
    "timestamps",
    "showStatusInTerminalTab",
    "teammateMode",
    "teammateDefaultModel",
  ],
  Internal: [
    "speculationEnabled",
    ...[],
    "snipEnabled",
    "snipDebug",
    "doneMeansMerged",
    "autoUploadSessions",
    "autoAddRemoteControlDaemonWorker",
    "autofixPrMode",
  ],
}),
  (RLf = new Map(M1o.flatMap((e) => j$l[e].map((t) => [t, e])))),
  (N$l = new Map(M1o.flatMap((e, t) => j$l[e].map((n, r) => [n, t * 1000 + r])))));
B$l = M1o.indexOf("Advanced") * 1000 + 999;
function Config({
  onClose: e,
  context: t,
  setTabsHidden: n,
  onIsSearchModeChange: r,
  contentHeight: o,
}) {
  let { headerFocused: s, focusHeader: i } = tx(),
    a = YE(),
    [, l] = na(),
    c = Fke(),
    [u, d] = Em.useState(sEt),
    p = Em.useRef(u),
    [f, m] = Em.useState(Dr()),
    g = Em.useRef(Dr()),
    [h, y] = Em.useState(f?.outputStyle || uP),
    b = Em.useRef(h),
    [_, S] = Em.useState(() => Lg().hasClaudeMdExternalIncludesApproved === true),
    [A, v] = Em.useState(f?.language),
    C = Em.useRef(A),
    [x, I] = Em.useState(0),
    [k, D] = Em.useState(0),
    P = Sd(),
    [O, L] = Em.useState(!P),
    M = Pg(),
    { rows: N, columns: B } = br(),
    $ = Math.min(44, Math.max(14, B - 16)),
    q = o ?? Math.min(Math.floor(N * 0.8), 30),
    W = Math.max(5, q - 10),
    V = Ht((fe) => fe.mainLoopModel),
    Y = Ht((fe) => fe.verbose),
    z = Ht((fe) => fe.thinkingEnabled),
    K = Ht((fe) => (sc() ? fe.fastMode : false)),
    Z = Ht((fe) => fe.promptSuggestionEnabled),
    J = Ht((fe) => fe.awaySummaryEnabled),
    ne = ROe() || fKe() === "enabled",
    oe = (l3(), ro(CQ)).isBriefEntitled(),
    re = Ho(),
    [ee, ce] = Em.useState({}),
    ae = Em.useRef(z);
  Em.useEffect(() => uMl(() => d(sEt())), []);
  let [de, Ee] = Em.useState(false),
    [me, pe] = Em.useState(null),
    [ge, he] = Em.useState(0),
    {
      query: ie,
      setQuery: le,
      cursorOffset: He,
      handleKeyDown: ye,
      handlePaste: ue,
    } = Uk({
      isActive: O && me === null && !s,
      onExit: () => L(false),
      onExitUp: i,
      passthroughCtrlKeys: ["c", "d"],
    }),
    we = !s;
  Em.useEffect(() => {
    r(we);
  }, [we, r]);
  let Ce = yqe(t.options.mcpClients),
    Ie = !Oe.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING,
    Ve = wc("disableWorkflows", false),
    Ze = wc("enableWorkflows", false),
    Be =
      Ukn() &&
      (Ve.value !== true || Ve.source === "userSettings") &&
      (Ze.source === "default" || Ze.source === "userSettings"),
    Me = Em.use(Wv(true)),
    Ue = o1n(Me),
    tt = jEe(),
    bt = $ue() && !Vi() && WE(),
    {
      settings: Ke,
      helpers: {
        onChangeMainModelConfig: Et,
        changeNotifChannel: ct,
        changeInputNeededNotif: Je,
        changeAgentPushNotif: gt,
      },
    } = iEt({
      globalConfig: u,
      settingsData: f,
      themeSetting: c,
      currentOutputStyle: h,
      currentLanguage: A,
      externalIncludesApproved: _,
      thinkingEnabled: z,
      verbose: Y,
      mainLoopModel: V,
      isFastMode: K,
      promptSuggestionEnabled: Z,
      awaySummaryEnabled: J,
      showAutoInDefaultModePicker: ne,
      showDefaultViewPicker: oe,
      pushTogglesVisible: bt,
      isConnectedToIde: Ce,
      isFileCheckpointingAvailable: Ie,
      workflowsToggleable: Be,
      shouldShowExternalIncludesToggle: Ue,
      autoUpdaterDisabledReason: tt,
      setAppState: re,
      setTheme: l,
      setGlobalConfig: d,
      setSettingsData: m,
      setChanges: ce,
    }),
    st = kOe(),
    xt = Em.useMemo(() => {
      let fe = st ? G$l(Ke) : Ke;
      if (!ie) return fe;
      let Te = ie.toLowerCase();
      return fe.filter((Re) => {
        if (Re.id.toLowerCase().includes(Te)) return true;
        if (("searchText" in Re ? Re.searchText : Re.label).toLowerCase().includes(Te)) return true;
        if (Re.type === "enum") return Re.options.some((it) => it.toLowerCase().includes(Te));
        return false;
      });
    }, [Ke, ie, st]);
  Em.useEffect(() => {
    if (x >= xt.length) {
      let fe = Math.max(0, xt.length - 1);
      (I(fe), D(Math.max(0, fe - W + 1)));
      return;
    }
    D((fe) => {
      if (x < fe) return x;
      if (x >= fe + W) return x - W + 1;
      return fe;
    });
  }, [xt.length, x, W]);
  let vt = Em.useCallback(
      (fe) => {
        D((Te) => {
          if (fe < Te) return fe;
          if (fe >= Te + W) return fe - W + 1;
          return Te;
        });
      },
      [W],
    ),
    jt = Em.useCallback(() => {
      if (me !== null) return;
      let fe = Object.entries(ee).map(
          ([it, Tt]) => (
            G("tengu_config_changed", {
              key: it,
              setting: it,
              value: Dd(String(Tt)),
            }),
            `Set ${it} to ${wt.bold(Tt)}`
          ),
        ),
        Te = nv() ? void 0 : process.env.ANTHROPIC_API_KEY,
        Re = Boolean(Te && p.current.customApiKeyResponses?.approved?.includes(KB(Te))),
        Ne = Boolean(Te && u.customApiKeyResponses?.approved?.includes(KB(Te)));
      if (Re !== Ne)
        (fe.push(`${Ne ? "Enabled" : "Disabled"} custom API key`),
          G("tengu_config_changed", {
            key: We("env.ANTHROPIC_API_KEY"),
            setting: We("env.ANTHROPIC_API_KEY"),
            value: Ne,
          }));
      if (u.theme !== p.current.theme) fe.push(`Set theme to ${wt.bold(u.theme)}`);
      if (u.preferredNotifChannel !== p.current.preferredNotifChannel)
        fe.push(`Set notifications to ${wt.bold(u.preferredNotifChannel)}`);
      if (h !== b.current) fe.push(`Set output style to ${wt.bold(h)}`);
      if (A !== C.current) fe.push(`Set response language to ${wt.bold(A ?? "Default (English)")}`);
      if (u.editorMode !== p.current.editorMode)
        fe.push(`Set editor mode to ${wt.bold(u.editorMode || "emacs")}`);
      if (u.diffTool !== p.current.diffTool) fe.push(`Set diff tool to ${wt.bold(u.diffTool)}`);
      if (u.autoConnectIde !== p.current.autoConnectIde)
        fe.push(`${u.autoConnectIde ? "Enabled" : "Disabled"} auto-connect to IDE`);
      if (u.autoInstallIdeExtension !== p.current.autoInstallIdeExtension)
        fe.push(`${u.autoInstallIdeExtension ? "Enabled" : "Disabled"} auto-install IDE extension`);
      if (u.autoCompactEnabled !== p.current.autoCompactEnabled)
        fe.push(`${u.autoCompactEnabled ? "Enabled" : "Disabled"} auto-compact`);
      if (u.autoScrollEnabled !== p.current.autoScrollEnabled)
        fe.push(`${u.autoScrollEnabled ? "Enabled" : "Disabled"} auto-scroll`);
      if (u.respectGitignore !== p.current.respectGitignore)
        fe.push(`${u.respectGitignore ? "Enabled" : "Disabled"} respect .gitignore in file picker`);
      if (u.copyFullResponse !== p.current.copyFullResponse)
        fe.push(`${u.copyFullResponse ? "Enabled" : "Disabled"} always copy full response`);
      if (u.copyOnSelect !== p.current.copyOnSelect)
        fe.push(`${u.copyOnSelect ? "Enabled" : "Disabled"} copy on select`);
      if (u.leftArrowOpensAgents !== p.current.leftArrowOpensAgents)
        fe.push(`${(u.leftArrowOpensAgents ?? true) ? "Enabled" : "Disabled"} ${CG} opens agents`);
      if (u.defaultToAgentsView !== p.current.defaultToAgentsView)
        fe.push(`${u.defaultToAgentsView ? "Enabled" : "Disabled"} open agents view by default`);
      if (u.terminalProgressBarEnabled !== p.current.terminalProgressBarEnabled)
        fe.push(`${u.terminalProgressBarEnabled ? "Enabled" : "Disabled"} terminal progress bar`);
      if (u.showStatusInTerminalTab !== p.current.showStatusInTerminalTab)
        fe.push(`${u.showStatusInTerminalTab ? "Enabled" : "Disabled"} terminal tab status`);
      if (u.showTurnDuration !== p.current.showTurnDuration)
        fe.push(`${u.showTurnDuration ? "Enabled" : "Disabled"} turn duration`);
      if (u.showMessageTimestamps !== p.current.showMessageTimestamps)
        fe.push(`${u.showMessageTimestamps ? "Enabled" : "Disabled"} message timestamps`);
      if (u.remoteControlAtStartup !== p.current.remoteControlAtStartup) {
        let it =
          u.remoteControlAtStartup === void 0
            ? "Reset Remote Control to default"
            : `${u.remoteControlAtStartup ? "Enabled" : "Disabled"} Remote Control for all sessions`;
        fe.push(it);
      }
      if (f?.autoUpdatesChannel !== g.current?.autoUpdatesChannel)
        fe.push(
          `Set auto-update channel to ${wt.bold(f?.autoUpdatesChannel === "rc" ? "slow" : (f?.autoUpdatesChannel ?? "latest"))}`,
        );
      if (fe.length > 0)
        e(
          fe.join(`
`),
        );
      else
        e("Config dialog dismissed", {
          display: "system",
        });
    }, [me, ee, u, V, h, A, f?.autoUpdatesChannel, sc() ? f?.fastMode : void 0, e]);
  $r("confirm:no", jt, {
    context: "Settings",
    isActive: me === null && !O && !s && !P,
  });
  let en = Em.useCallback(
      (fe) => st && fe.type === "managedEnum" && fe.id === "showExternalIncludesDialog" && _,
      [st, _],
    ),
    Dn = Em.useCallback(
      (fe) =>
        Rtr.find((Te) => Te.id === fe)?.isSet({
          settingsData: f,
          globalConfig: u,
        }) ?? false,
      [f, u],
    ),
    nn = Em.useCallback(
      (fe) => {
        let Re = xt[fe ?? x];
        if (!Re || !Re.onChange) return;
        if (Re.type === "boolean") {
          let Ne = !Re.value;
          if (
            (Re.onChange(Ne),
            G("tengu_config_changed", {
              setting: Re.id,
              value: String(Ne),
            }),
            Re.id === "thinking")
          ) {
            if (Ne === ae.current) Ee(false);
            else if (t.messages.some((Tt) => Tt.type === "assistant")) Ee(true);
          }
          return;
        }
        if (en(Re)) {
          (ftr(false, "config_toggle"), S(false));
          return;
        }
        if (Re.id === "agentsView") {
          (he(0), pe("AgentsView"), n(true));
          return;
        }
        if (Re.id === "notifChannel" && Re.type === "managedEnum") {
          (pe("Notifications"), n(true));
          return;
        }
        if (
          Re.id === "theme" ||
          Re.id === "model" ||
          Re.id === "teammateDefaultModel" ||
          Re.id === "showExternalIncludesDialog" ||
          Re.id === "outputStyle" ||
          Re.id === "language"
        )
          switch (Re.id) {
            case "theme":
              (pe("Theme"), n(true));
              return;
            case "model":
              (pe("Model"), n(true));
              return;
            case "teammateDefaultModel":
              (pe("TeammateModel"), n(true));
              return;
            case "showExternalIncludesDialog":
              (pe("ExternalIncludes"), n(true));
              return;
            case "outputStyle":
              (pe("OutputStyle"), n(true));
              return;
            case "language":
              (pe("Language"), n(true));
              return;
          }
        if (Re.id === "autoUpdatesChannel") {
          if (tt) {
            (pe("EnableAutoUpdates"), n(true));
            return;
          }
          if ((f?.autoUpdatesChannel ?? "latest") === "latest") (pe("ChannelDowngrade"), n(true));
          else
            (io("userSettings", {
              autoUpdatesChannel: void 0,
              minimumVersion: void 0,
            }),
              m((it) => ({
                ...it,
                autoUpdatesChannel: void 0,
                minimumVersion: void 0,
              })),
              G("tengu_autoupdate_channel_changed", {
                channel: We("latest"),
              }));
          return;
        }
        if (Re.type === "enum") {
          let it = (Re.options.indexOf(Re.value) + 1) % Re.options.length,
            Tt = Re.options[it];
          (Re.onChange(Tt),
            G("tengu_config_changed", {
              setting: Re.id,
              value: Tt,
            }));
          return;
        }
      },
      [tt, en, xt, x, f?.autoUpdatesChannel, n],
    ),
    Ln = (fe) => {
      Ee(false);
      let Te = Math.max(0, Math.min(xt.length - 1, x + fe));
      (I(Te), vt(Te));
    };
  No(
    {
      "select:previous": () => {
        if (x === 0) (Ee(false), L(true), D(0));
        else Ln(-1);
      },
      "select:next": () => Ln(1),
      "scroll:lineUp": () => Ln(-1),
      "scroll:lineDown": () => Ln(1),
      "select:accept": () => nn(),
      "settings:search": () => {
        (L(true), le(""));
      },
    },
    {
      context: "Settings",
      isActive: me === null && !O && !s && !P,
    },
  );
  let Hn = Em.useMemo(
      () => [
        ...($$e()
          ? [
              {
                id: "leftArrowOpensAgents",
                label: `${CG} opens agents`,
                value: u.leftArrowOpensAgents ?? true,
              },
            ]
          : []),
        ...(Kx()
          ? [
              {
                id: "defaultToAgentsView",
                label: "Start in agent view",
                value: u.defaultToAgentsView ?? false,
              },
            ]
          : []),
      ],
      [u.leftArrowOpensAgents, u.defaultToAgentsView],
    ),
    kr = Em.useCallback(
      (fe) => {
        let Te = Hn[fe ?? ge];
        if (!Te) return;
        let Re = !Te.value;
        if (Te.id === "leftArrowOpensAgents")
          (gn((Ne) => ({
            ...Ne,
            leftArrowOpensAgents: Re,
          })),
            d((Ne) => ({
              ...Ne,
              leftArrowOpensAgents: Re,
            })));
        else
          (gn((Ne) => ({
            ...Ne,
            defaultToAgentsView: Re,
          })),
            d((Ne) => ({
              ...Ne,
              defaultToAgentsView: Re,
            })));
        G("tengu_config_changed", {
          setting: $e(Te.id),
          value: Re ? We("true") : We("false"),
        });
      },
      [Hn, ge],
    );
  No(
    {
      "select:previous": () => he((fe) => Math.max(0, fe - 1)),
      "select:next": () => he((fe) => Math.min(Hn.length - 1, fe + 1)),
      "select:accept": () => kr(),
    },
    {
      context: "Settings",
      isActive: me === "AgentsView" && !P,
    },
  );
  let Mr = Em.useCallback(
    (fe) => {
      if (me !== null) return;
      if (s) return;
      if (O) {
        if ((ye(fe), fe.key === "escape")) {
          if ((fe.preventDefault(), ie.length > 0)) le("");
          else L(false);
          return;
        }
        if (fe.key === "return" || fe.key === "down") (fe.preventDefault(), L(false), I(0), D(0));
        return;
      }
      if (fe.key === "left" || fe.key === "right" || fe.key === "tab") {
        (fe.preventDefault(), nn());
        return;
      }
      if (fe.ctrl || fe.meta) return;
      if (fe.key.length === 1 && fe.key !== " ")
        (fe.preventDefault(), L(true), le(fe.key === "/" ? "" : fe.key));
    },
    [me, s, O, ie, le, ye, nn],
  );
  return Zo.jsx(U, {
    flexDirection: "column",
    width: "100%",
    ...(P
      ? {}
      : {
          tabIndex: 0,
          autoFocus: !s,
          onKeyDown: Mr,
          onPaste: ue,
        }),
    children:
      me === "Theme"
        ? Zo.jsxs(Zo.Fragment, {
            children: [
              Zo.jsx(lEt, {
                onThemeSelect: (fe) => {
                  (l(fe), pe(null), n(false));
                },
                onCancel: () => {
                  (pe(null), n(false));
                },
                helpText: lc("themes")
                  ? `Custom themes are disabled in safe mode \u2014 ${qH()} to load them${fW(c) ? `. Your saved theme "${fW(c)}" is a custom theme; selecting a preset here replaces it` : ""}`
                  : "",
                hideEscToCancel: true,
                skipExitHandling: true,
              }),
              Zo.jsx(U, {
                children: Zo.jsx(w, {
                  dimColor: true,
                  italic: true,
                  children: Zo.jsxs(Tn, {
                    children: [
                      Zo.jsx(ht, {
                        chord: "enter",
                        action: "select",
                      }),
                      Zo.jsx(mr, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        : me === "Model"
          ? Zo.jsxs(Zo.Fragment, {
              children: [
                Zo.jsx(hKe, {
                  initial: V,
                  onSelect: (fe, Te) => {
                    (Et(fe), pe(null), n(false));
                  },
                  onCancel: () => {
                    (pe(null), n(false));
                  },
                  showFastModeNotice: sc() ? K && rg(V) && Fx() : false,
                }),
                Zo.jsx(w, {
                  dimColor: true,
                  children: Zo.jsxs(Tn, {
                    children: [
                      Zo.jsx(ht, {
                        chord: "enter",
                        action: "confirm",
                      }),
                      Zo.jsx(mr, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel",
                      }),
                    ],
                  }),
                }),
              ],
            })
          : me === "TeammateModel"
            ? Zo.jsxs(Zo.Fragment, {
                children: [
                  Zo.jsx(hKe, {
                    initial: u.teammateDefaultModel ?? null,
                    skipSettingsWrite: true,
                    headerText:
                      "Default model for newly spawned teammates. The leader can override via the tool call's model parameter.",
                    onSelect: (fe, Te) => {
                      if ((pe(null), n(false), u.teammateDefaultModel === void 0 && fe === null))
                        return;
                      if (FQ(fe)) {
                        (It("model_fable_consent", "config_teammate_blocked"),
                          ce((Re) => ({
                            ...Re,
                            teammateDefaultModel: `${otr(u.teammateDefaultModel)} (Fable 5 needs usage-credits consent \u2014 /model to set up)`,
                          })));
                        return;
                      }
                      (gn((Re) =>
                        Re.teammateDefaultModel === fe
                          ? Re
                          : {
                              ...Re,
                              teammateDefaultModel: fe,
                            },
                      ),
                        d((Re) => ({
                          ...Re,
                          teammateDefaultModel: fe,
                        })),
                        ce((Re) => ({
                          ...Re,
                          teammateDefaultModel: otr(fe),
                        })),
                        G("tengu_teammate_default_model_changed", {
                          model: fe,
                        }));
                    },
                    onCancel: () => {
                      (pe(null), n(false));
                    },
                  }),
                  Zo.jsx(w, {
                    dimColor: true,
                    children: Zo.jsxs(Tn, {
                      children: [
                        Zo.jsx(ht, {
                          chord: "enter",
                          action: "confirm",
                        }),
                        Zo.jsx(mr, {
                          action: "confirm:no",
                          context: "Confirmation",
                          fallback: "Esc",
                          description: "cancel",
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : me === "ExternalIncludes"
              ? Zo.jsxs(Zo.Fragment, {
                  children: [
                    Zo.jsx(y1o, {
                      onDone: () => {
                        (S(Lg().hasClaudeMdExternalIncludesApproved === true), pe(null), n(false));
                      },
                      externalIncludes: Uct(Me),
                    }),
                    Zo.jsx(w, {
                      dimColor: true,
                      children: Zo.jsxs(Tn, {
                        children: [
                          Zo.jsx(ht, {
                            chord: "enter",
                            action: "confirm",
                          }),
                          Zo.jsx(mr, {
                            action: "confirm:no",
                            context: "Confirmation",
                            fallback: "Esc",
                            description: "disable external includes",
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : me === "OutputStyle"
                ? Zo.jsxs(Zo.Fragment, {
                    children: [
                      Zo.jsx(VMl, {
                        initialStyle: h,
                        onComplete: (fe) => {
                          (y(fe ?? uP),
                            pe(null),
                            n(false),
                            io("localSettings", {
                              outputStyle: fe,
                            }),
                            G("tengu_output_style_changed", {
                              style: fe ?? uP,
                              source: We("config_panel"),
                              settings_source: We("localSettings"),
                            }));
                        },
                        onCancel: () => {
                          (pe(null), n(false));
                        },
                      }),
                      Zo.jsx(w, {
                        dimColor: true,
                        children: Zo.jsxs(Tn, {
                          children: [
                            Zo.jsx(ht, {
                              chord: "enter",
                              action: "confirm",
                            }),
                            Zo.jsx(mr, {
                              action: "confirm:no",
                              context: "Confirmation",
                              fallback: "Esc",
                              description: "cancel",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : me === "Language"
                  ? Zo.jsxs(Zo.Fragment, {
                      children: [
                        Zo.jsx(YMl, {
                          initialLanguage: A,
                          onComplete: (fe) => {
                            (v(fe),
                              pe(null),
                              n(false),
                              io("userSettings", {
                                language: fe,
                              }),
                              G("tengu_language_changed", {
                                language: fe ?? "default",
                                source: We("config_panel"),
                              }));
                          },
                          onCancel: () => {
                            (pe(null), n(false));
                          },
                        }),
                        Zo.jsx(w, {
                          dimColor: true,
                          children: Zo.jsxs(Tn, {
                            children: [
                              Zo.jsx(ht, {
                                chord: "enter",
                                action: "confirm",
                              }),
                              Zo.jsx(mr, {
                                action: "confirm:no",
                                context: "Settings",
                                fallback: "Esc",
                                description: "cancel",
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  : me === "AgentsView"
                    ? Zo.jsxs(zn, {
                        title: "Agents view",
                        onCancel: () => {
                          (pe(null), n(false));
                        },
                        hideBorder: true,
                        hideInputGuide: true,
                        children: [
                          P
                            ? Zo.jsx(V$l, {
                                rows: Hn.map((fe) => ({
                                  id: fe.id,
                                  label: fe.label,
                                  value: String(fe.value),
                                })),
                                onSelect: (fe) => kr(fe),
                                onCancel: () => {
                                  (pe(null), n(false));
                                },
                                cancelHint: "Escape to close",
                              })
                            : Zo.jsx(U, {
                                flexDirection: "column",
                                children: Hn.map((fe, Te) => {
                                  let Re = Te === ge;
                                  return Zo.jsxs(
                                    U,
                                    {
                                      children: [
                                        Zo.jsx(U, {
                                          width: $,
                                          flexShrink: 0,
                                          marginRight: 1,
                                          children: Zo.jsxs(w, {
                                            color: Re ? "suggestion" : void 0,
                                            wrap: "truncate-end",
                                            children: [Re ? nt.pointer : " ", " ", fe.label],
                                          }),
                                        }),
                                        Zo.jsx(w, {
                                          color: Re ? "suggestion" : void 0,
                                          children: String(fe.value),
                                        }),
                                      ],
                                    },
                                    fe.id,
                                  );
                                }),
                              }),
                          !P &&
                            Zo.jsx(w, {
                              dimColor: true,
                              children: Zo.jsxs(Tn, {
                                children: [
                                  Zo.jsx(ht, {
                                    chord: ["enter", "space"],
                                    action: "toggle",
                                  }),
                                  Zo.jsx(mr, {
                                    action: "confirm:no",
                                    context: "Confirmation",
                                    fallback: "Esc",
                                    description: "close",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      })
                    : me === "EnableAutoUpdates"
                      ? Zo.jsx(zn, {
                          title: "Enable Auto-Updates",
                          onCancel: () => {
                            (pe(null), n(false));
                          },
                          hideBorder: true,
                          hideInputGuide: true,
                          children:
                            tt?.type !== "config"
                              ? Zo.jsxs(Zo.Fragment, {
                                  children: [
                                    Zo.jsx(w, {
                                      children:
                                        tt?.type === "env"
                                          ? "Auto-updates are controlled by an environment variable and cannot be changed here."
                                          : "Auto-updates are disabled in development builds.",
                                    }),
                                    tt?.type === "env" &&
                                      Zo.jsxs(w, {
                                        dimColor: true,
                                        children: [
                                          "Unset ",
                                          tt.envVar,
                                          " to re-enable auto-updates.",
                                        ],
                                      }),
                                  ],
                                })
                              : Zo.jsx(Sr, {
                                  options: [
                                    {
                                      label: "Enable with latest channel",
                                      value: "latest",
                                    },
                                    {
                                      label: "Enable with stable channel",
                                      value: "stable",
                                    },
                                  ],
                                  onChange: (fe) => {
                                    (pe(null),
                                      n(false),
                                      gn((Te) => ({
                                        ...Te,
                                        autoUpdates: true,
                                      })),
                                      d((Te) => ({
                                        ...Te,
                                        autoUpdates: true,
                                      })),
                                      io("userSettings", {
                                        autoUpdatesChannel: fe,
                                        minimumVersion: void 0,
                                      }),
                                      m((Te) => ({
                                        ...Te,
                                        autoUpdatesChannel: fe,
                                        minimumVersion: void 0,
                                      })),
                                      G("tengu_autoupdate_enabled", {
                                        channel: fe,
                                      }));
                                  },
                                }),
                        })
                      : me === "ChannelDowngrade"
                        ? Zo.jsx(jMl, {
                            currentVersion: {
                              ISSUES_EXPLAINER:
                                "report the issue at https://github.com/anthropics/claude-code/issues",
                              PACKAGE_URL: "@anthropic-ai/claude-code",
                              README_URL: "https://code.claude.com/docs/en/overview",
                              VERSION: "2.1.195",
                              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                              BUILD_TIME: "2026-06-26T01:00:56Z",
                              GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                            }.VERSION,
                            onChoice: (fe) => {
                              if ((pe(null), n(false), fe === "cancel")) return;
                              let Te = {
                                autoUpdatesChannel: "stable",
                              };
                              if (fe === "stay")
                                Te.minimumVersion = {
                                  ISSUES_EXPLAINER:
                                    "report the issue at https://github.com/anthropics/claude-code/issues",
                                  PACKAGE_URL: "@anthropic-ai/claude-code",
                                  README_URL: "https://code.claude.com/docs/en/overview",
                                  VERSION: "2.1.195",
                                  FEEDBACK_CHANNEL:
                                    "https://github.com/anthropics/claude-code/issues",
                                  BUILD_TIME: "2026-06-26T01:00:56Z",
                                  GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                                }.VERSION;
                              (io("userSettings", Te),
                                m((Re) => ({
                                  ...Re,
                                  ...Te,
                                })),
                                G("tengu_autoupdate_channel_changed", {
                                  channel: We("stable"),
                                  minimum_version_set: fe === "stay",
                                }));
                            },
                          })
                        : me === "Notifications"
                          ? Zo.jsx(mMl, {
                              channel: u.preferredNotifChannel,
                              showInputNeededRow: bt && BOn(),
                              showDoneRow: bt,
                              inputNeededEnabled: u.inputNeededNotifEnabled ?? false,
                              doneEnabled: u.agentPushNotifEnabled ?? false,
                              onCycleChannel: () => {
                                let fe = pKe.indexOf(u.preferredNotifChannel),
                                  Te = pKe[(fe + 1) % pKe.length];
                                (ct(Te),
                                  G("tengu_config_changed", {
                                    setting: We("notifChannel"),
                                    value: $e(Te),
                                  }));
                              },
                              onToggleInputNeeded: () => {
                                let fe = !(u.inputNeededNotifEnabled ?? false);
                                (Je(fe),
                                  G("tengu_config_changed", {
                                    setting: We("inputNeededNotifEnabled"),
                                    value: fe ? We("true") : We("false"),
                                  }));
                              },
                              onToggleDone: () => {
                                let fe = !(u.agentPushNotifEnabled ?? false);
                                (gt(fe),
                                  G("tengu_config_changed", {
                                    setting: We("agentPushNotifEnabled"),
                                    value: fe ? We("true") : We("false"),
                                  }));
                              },
                              onClose: () => {
                                (pe(null), n(false));
                              },
                            })
                          : P
                            ? Zo.jsxs(U, {
                                flexDirection: "column",
                                children: [
                                  Zo.jsx(V$l, {
                                    rows: xt.map((fe) => ({
                                      id: fe.id,
                                      label: typeof fe.label === "string" ? fe.label : GU(fe.label),
                                      value: LLf(fe, {
                                        autoUpdaterDisabledReason: tt,
                                        revampSections: st,
                                      }),
                                    })),
                                    onSelect: (fe) => {
                                      (I(fe), nn(fe));
                                    },
                                    onCancel: jt,
                                    cancelHint: "Escape to save and close",
                                  }),
                                  de &&
                                    Zo.jsx(w, {
                                      children: q$l,
                                    }),
                                  xt.some(
                                    (fe) =>
                                      fe.id === "inputNeededNotifEnabled" ||
                                      fe.id === "agentPushNotifEnabled",
                                  ) && Zo.jsx(ntr, {}),
                                ],
                              })
                            : Zo.jsxs(U, {
                                flexDirection: "column",
                                gap: 1,
                                marginY: a ? void 0 : 1,
                                children: [
                                  Zo.jsx(LP, {
                                    query: ie,
                                    isFocused: O && !s,
                                    isTerminalFocused: M,
                                    cursorOffset: He,
                                    placeholder: "Search settings\u2026",
                                  }),
                                  Zo.jsx(U, {
                                    flexDirection: "column",
                                    children:
                                      xt.length === 0
                                        ? Zo.jsxs(w, {
                                            dimColor: true,
                                            italic: true,
                                            children: ['No settings match "', ie, '"'],
                                          })
                                        : Zo.jsxs(Zo.Fragment, {
                                            children: [
                                              k > 0 &&
                                                Zo.jsxs(w, {
                                                  dimColor: true,
                                                  children: [nt.arrowUp, " ", k, " more above"],
                                                }),
                                              xt.slice(k, k + W).map((fe, Te) => {
                                                let Re = k + Te,
                                                  Ne = Re === x && !s && !O,
                                                  it = st ? O1o(fe.id) : void 0,
                                                  Tt =
                                                    it !== void 0 &&
                                                    (Re === 0 || O1o(xt[Re - 1]?.id ?? "") !== it),
                                                  un =
                                                    it !== void 0 &&
                                                    U$l.has(it) &&
                                                    (it !== "Advanced" || $1o(fe.id)) &&
                                                    !Ne;
                                                return Zo.jsxs(
                                                  z$l.Fragment,
                                                  {
                                                    children: [
                                                      Tt &&
                                                        Zo.jsx(U, {
                                                          marginTop: Re === k ? 0 : 1,
                                                          children: Zo.jsx(w, {
                                                            dimColor: true,
                                                            children: F$l(it, fe.id),
                                                          }),
                                                        }),
                                                      Zo.jsxs(U, {
                                                        children: [
                                                          Zo.jsx(U, {
                                                            width: $,
                                                            flexShrink: 0,
                                                            marginRight: 1,
                                                            children: Zo.jsxs(w, {
                                                              color: Ne ? "suggestion" : void 0,
                                                              dimColor: un,
                                                              wrap: "truncate-end",
                                                              children: [
                                                                Ne ? nt.pointer : " ",
                                                                " ",
                                                                fe.label,
                                                              ],
                                                            }),
                                                          }),
                                                          Zo.jsxs(
                                                            U,
                                                            {
                                                              flexGrow: 1,
                                                              minWidth: 0,
                                                              children: [
                                                                it === "Advanced" &&
                                                                  Dn(fe.id) &&
                                                                  Zo.jsx(w, {
                                                                    color: "warning",
                                                                    dimColor: un,
                                                                    wrap: "truncate-end",
                                                                    children:
                                                                      "\u2192 settings.json ",
                                                                  }),
                                                                fe.type === "boolean"
                                                                  ? Zo.jsx(w, {
                                                                      color: Ne
                                                                        ? "suggestion"
                                                                        : void 0,
                                                                      dimColor: un,
                                                                      wrap: "truncate-end",
                                                                      children: fe.value.toString(),
                                                                    })
                                                                  : fe.id === "theme"
                                                                    ? Zo.jsx(w, {
                                                                        color: Ne
                                                                          ? "suggestion"
                                                                          : void 0,
                                                                        dimColor: un,
                                                                        wrap: "truncate-end",
                                                                        children:
                                                                          Y$l[
                                                                            fe.value.toString()
                                                                          ] ?? fe.value.toString(),
                                                                      })
                                                                    : !st &&
                                                                        fe.id === "notifChannel"
                                                                      ? Zo.jsx(w, {
                                                                          color: Ne
                                                                            ? "suggestion"
                                                                            : void 0,
                                                                          dimColor: un,
                                                                          wrap: "truncate-end",
                                                                          children: Zo.jsx(
                                                                            NotifChannelLabel,
                                                                            {
                                                                              value:
                                                                                fe.value.toString(),
                                                                            },
                                                                          ),
                                                                        })
                                                                      : fe.id === "permissionMode"
                                                                        ? Zo.jsx(w, {
                                                                            color: Ne
                                                                              ? "suggestion"
                                                                              : void 0,
                                                                            dimColor: un,
                                                                            wrap: "truncate-end",
                                                                            children: _Y(fe.value),
                                                                          })
                                                                        : fe.id ===
                                                                              "autoUpdatesChannel" &&
                                                                            tt
                                                                          ? Zo.jsxs(w, {
                                                                              color: Ne
                                                                                ? "suggestion"
                                                                                : void 0,
                                                                              dimColor: un,
                                                                              wrap: "truncate-end",
                                                                              children: [
                                                                                "disabled",
                                                                                " ",
                                                                                Zo.jsxs(w, {
                                                                                  dimColor: true,
                                                                                  children: [
                                                                                    "(",
                                                                                    Lgt(tt),
                                                                                    ")",
                                                                                  ],
                                                                                }),
                                                                              ],
                                                                            })
                                                                          : Zo.jsx(w, {
                                                                              color: Ne
                                                                                ? "suggestion"
                                                                                : void 0,
                                                                              dimColor: un,
                                                                              wrap: "truncate-end",
                                                                              children:
                                                                                fe.value.toString(),
                                                                            }),
                                                                st &&
                                                                  fe.type === "managedEnum" &&
                                                                  !en(fe) &&
                                                                  (fe.id !== "autoUpdatesChannel" ||
                                                                    tt !== null ||
                                                                    (f?.autoUpdatesChannel ??
                                                                      "latest") === "latest") &&
                                                                  Zo.jsx(w, {
                                                                    color: Ne
                                                                      ? "suggestion"
                                                                      : "permission",
                                                                    dimColor: un,
                                                                    children: ` ${nt.pointerSmall}`,
                                                                  }),
                                                              ],
                                                            },
                                                            Ne ? "selected" : "unselected",
                                                          ),
                                                        ],
                                                      }),
                                                      (fe.id === "inputNeededNotifEnabled" ||
                                                        fe.id === "agentPushNotifEnabled") &&
                                                        Zo.jsx(ntr, {}),
                                                      de &&
                                                        fe.id === "thinking" &&
                                                        Zo.jsx(U, {
                                                          paddingLeft: 2,
                                                          children: Zo.jsx(w, {
                                                            color: "warning",
                                                            children: q$l,
                                                          }),
                                                        }),
                                                    ],
                                                  },
                                                  fe.id,
                                                );
                                              }),
                                              k + W < xt.length &&
                                                Zo.jsxs(w, {
                                                  dimColor: true,
                                                  children: [
                                                    nt.arrowDown,
                                                    " ",
                                                    xt.length - k - W,
                                                    " ",
                                                    "more below",
                                                  ],
                                                }),
                                            ],
                                          }),
                                  }),
                                  s
                                    ? Zo.jsx(w, {
                                        dimColor: true,
                                        children: Zo.jsxs(Tn, {
                                          children: [
                                            Zo.jsx(ht, {
                                              chord: ["left", "right", "tab"],
                                              action: "switch",
                                              format: {
                                                keyCase: "lower",
                                              },
                                            }),
                                            Zo.jsx(ht, {
                                              chord: "down",
                                              action: "return",
                                            }),
                                            Zo.jsx(mr, {
                                              action: "confirm:no",
                                              context: "Settings",
                                              fallback: "Esc",
                                              description: "close",
                                            }),
                                          ],
                                        }),
                                      })
                                    : O
                                      ? Zo.jsx(w, {
                                          dimColor: true,
                                          children: Zo.jsxs(Tn, {
                                            children: [
                                              Zo.jsx(w, {
                                                children: "Type to filter",
                                              }),
                                              Zo.jsx(ht, {
                                                chord: ["enter", "down"],
                                                action: "select",
                                              }),
                                              Zo.jsx(ht, {
                                                chord: "up",
                                                action: "tabs",
                                              }),
                                              Zo.jsx(mr, {
                                                action: "confirm:no",
                                                context: "Settings",
                                                fallback: "Esc",
                                                description: "clear",
                                              }),
                                            ],
                                          }),
                                        })
                                      : Zo.jsx(w, {
                                          dimColor: true,
                                          children: Zo.jsxs(Tn, {
                                            children: [
                                              Zo.jsx(ht, {
                                                chord: ["enter", "space"],
                                                action: "change",
                                              }),
                                              Zo.jsx(mr, {
                                                action: "settings:search",
                                                context: "Settings",
                                                fallback: "/",
                                                description: "search",
                                              }),
                                              Zo.jsx(mr, {
                                                action: "confirm:no",
                                                context: "Settings",
                                                fallback: "Esc",
                                                description: "close",
                                              }),
                                            ],
                                          }),
                                        }),
                                ],
                              }),
  });
}
function NotifChannelLabel(t0) {
  let t = N1o.c(4),
    { value: n } = t0;
  switch (n) {
    case "auto":
      return "Auto";
    case "iterm2": {
      let r;
      if (t[0] === Symbol.for("react.memo_cache_sentinel"))
        ((r = Zo.jsxs(w, {
          children: [
            "iTerm2 ",
            Zo.jsx(w, {
              dimColor: true,
              children: "(OSC 9)",
            }),
          ],
        })),
          (t[0] = r));
      else r = t[0];
      return r;
    }
    case "terminal_bell": {
      let r;
      if (t[1] === Symbol.for("react.memo_cache_sentinel"))
        ((r = Zo.jsxs(w, {
          children: [
            "Terminal Bell ",
            Zo.jsx(w, {
              dimColor: true,
              children: "(\\a)",
            }),
          ],
        })),
          (t[1] = r));
      else r = t[1];
      return r;
    }
    case "kitty": {
      let r;
      if (t[2] === Symbol.for("react.memo_cache_sentinel"))
        ((r = Zo.jsxs(w, {
          children: [
            "Kitty ",
            Zo.jsx(w, {
              dimColor: true,
              children: "(OSC 99)",
            }),
          ],
        })),
          (t[2] = r));
      else r = t[2];
      return r;
    }
    case "ghostty": {
      let r;
      if (t[3] === Symbol.for("react.memo_cache_sentinel"))
        ((r = Zo.jsxs(w, {
          children: [
            "Ghostty ",
            Zo.jsx(w, {
              dimColor: true,
              children: "(OSC 777)",
            }),
          ],
        })),
          (t[3] = r));
      else r = t[3];
      return r;
    }
    case "iterm2_with_bell":
      return "iTerm2 w/ Bell";
    case "notifications_disabled":
      return "Disabled";
    default:
      return n;
  }
}
function LLf(e, t) {
  let n = String(e.value);
  if (e.id === "theme") return Y$l[n] ?? n;
  if (e.id === "permissionMode") return _Y(e.value);
  if (e.id === "autoUpdatesChannel" && t.autoUpdaterDisabledReason)
    return `disabled (${Lgt(t.autoUpdaterDisabledReason)})`;
  if (e.id === "notifChannel" && !t.revampSections)
    return GU(
      NotifChannelLabel({
        value: n,
      }),
    );
  return n;
}
function V$l(e) {
  let t = N1o.c(20),
    { rows: n, onSelect: r, onCancel: o, cancelHint: s } = e,
    [i, a] = Em.useState(""),
    l = Em.useRef(""),
    [c, u] = Em.useState(null),
    d = Em.useRef(null);
  M0(d, true);
  let p;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((p = (v) => {
      ((l.current = v(l.current)), a(l.current));
    }),
      (t[0] = p));
  else p = t[0];
  let f = p,
    m;
  if (t[1] !== r || t[2] !== n.length)
    ((m = (v) => {
      let C = Number.parseInt(v, 10);
      if (!Number.isFinite(C) || C < 1 || C > n.length) {
        (u(`Invalid selection "${v}". Enter a number between 1 and ${n.length}.`), f($Lf));
        return;
      }
      (u(null), f(MLf), r(C - 1));
    }),
      (t[1] = r),
      (t[2] = n.length),
      (t[3] = m));
  else m = t[3];
  let g = m,
    h;
  if (t[4] !== o || t[5] !== g)
    ((h = (v) => {
      if (v.key === "escape") {
        (v.preventDefault(), o());
        return;
      }
      if (v.key === "return") {
        if ((v.preventDefault(), l.current.length > 0)) g(l.current);
        return;
      }
      if (v.key === "backspace" || v.key === "delete") {
        (v.preventDefault(), f(PLf));
        return;
      }
      let C = jK(v.key);
      if (/^[0-9]$/.test(C) && !v.ctrl && !v.meta) (v.preventDefault(), u(null), f((x) => x + C));
    }),
      (t[4] = o),
      (t[5] = g),
      (t[6] = h));
  else h = t[6];
  let y = h,
    b;
  if (t[7] !== n) ((b = n.map(DLf)), (t[7] = n), (t[8] = b));
  else b = t[8];
  let _;
  if (t[9] !== c)
    ((_ =
      c &&
      Zo.jsx(w, {
        children: c,
      })),
      (t[9] = c),
      (t[10] = _));
  else _ = t[10];
  let S;
  if (t[11] !== i || t[12] !== s || t[13] !== n.length)
    ((S = Zo.jsxs(w, {
      children: ["Enter a number to change [1-", n.length, "], or ", s, ": ", i],
    })),
      (t[11] = i),
      (t[12] = s),
      (t[13] = n.length),
      (t[14] = S));
  else S = t[14];
  let A;
  if (t[15] !== y || t[16] !== b || t[17] !== _ || t[18] !== S)
    ((A = Zo.jsxs(U, {
      ref: d,
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: y,
      children: [b, _, S],
    })),
      (t[15] = y),
      (t[16] = b),
      (t[17] = _),
      (t[18] = S),
      (t[19] = A));
  else A = t[19];
  return A;
}
function DLf(e, t) {
  return Zo.jsxs(
    w,
    {
      children: [t + 1, ". ", e.label, ": ", e.value],
    },
    e.id,
  );
}
function PLf(e) {
  return e.slice(0, -1);
}
function MLf() {
  return "";
}
function $Lf() {
  return "";
}
var N1o,
  z$l,
  Em,
  Zo,
  q$l = "Changing thinking mode mid-conversation will increase latency and may reduce quality.",
  Y$l;
