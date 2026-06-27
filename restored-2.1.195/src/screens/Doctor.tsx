// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KNl
// matched 2.1.88 source: src/screens/Doctor.tsx
// class=modified  jaccard=0.1837  score=0.286  fileCov=0.3392
// note: deminified; 8 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: formatLastUpdateResult, buildFixPrompt, PluginErrorsSection, McpConnectionIssuesSection, LastUpdateNode, IneffectivePluginDisablesSection, Doctor, DistTagsDisplay
function DistTagsDisplay(e) {
  let t = JOe.c(9),
    { promise: n } = e,
    { tags: r, isNative: o } = PP.use(n);
  if (!r.latest) {
    let l;
    if (t[0] !== o)
      ((l =
        o && Vi()
          ? as.jsx(hs.Node, {
              dimColor: true,
              children: "Version check skipped (essential-traffic-only mode)",
            })
          : as.jsx(hs.Node, {
              dimColor: true,
              children: "Failed to fetch versions",
            })),
        (t[0] = o),
        (t[1] = l));
    else l = t[1];
    return l;
  }
  let s;
  if (t[2] !== r.stable)
    ((s =
      r.stable &&
      as.jsxs(hs.Node, {
        children: ["Stable version: ", r.stable],
      })),
      (t[2] = r.stable),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== r.latest)
    ((i = as.jsxs(hs.Node, {
      children: ["Latest version: ", r.latest],
    })),
      (t[4] = r.latest),
      (t[5] = i));
  else i = t[5];
  let a;
  if (t[6] !== s || t[7] !== i)
    ((a = as.jsxs(hs.Group, {
      children: [s, i],
    })),
      (t[6] = s),
      (t[7] = i),
      (t[8] = a));
  else a = t[8];
  return a;
}
function LastUpdateNode(e) {
  let t = JOe.c(4),
    { result: n } = e,
    r;
  if (t[0] !== n) ((r = formatLastUpdateResult(n)), (t[0] = n), (t[1] = r));
  else r = t[1];
  let o;
  if (t[2] !== r)
    ((o = as.jsxs(hs.Node, {
      children: ["Last update attempt: ", r],
    })),
      (t[2] = r),
      (t[3] = o));
  else o = t[3];
  return o;
}
function formatLastUpdateResult(e) {
  if (!e) return "none recorded";
  let t = e.timestamp.slice(0, 10);
  switch (e.outcome) {
    case "success":
      return e.version_to ? `success \u2192 ${e.version_to} (${t})` : `success (${t})`;
    case "failed":
      return `failed (${e.status}) \u2014 ${t}`;
  }
}
function Doctor({ onDone: e }) {
  let t = Ht((I) => I.agentDefinitions),
    n = Ht((I) => I.toolPermissionContext),
    r = Ht((I) => I.plugins.errors),
    o = Ht((I) => I.plugins.warnings).filter((I) => I.type !== "ineffective-disable"),
    s = Ht((I) => I.mcp.clients),
    i = PP.useCallback(() => {
      e("Claude Code diagnostics dismissed", {
        display: "system",
      });
    }, [e]),
    a = ig(i),
    [l, c] = PP.useState(null),
    [u, d] = PP.useState(null),
    [p, f] = PP.useState(null),
    [m, g] = PP.useState(null),
    h = Hnr(),
    y = PP.useMemo(async () => {
      let k = (await I9e()).installationType === "native";
      return {
        tags: await (k ? Dza : Lza)().catch(() => ({
          latest: null,
          stable: null,
        })),
        isNative: k,
      };
    }, []),
    b = jQ(),
    _ = h.filter((I) => I.mcpErrorMetadata === void 0),
    S = PP.useMemo(() => WNl(s, sqe), [s]),
    A = PP.useMemo(
      () =>
        [
          {
            name: "BASH_MAX_OUTPUT_LENGTH",
            default: Dmo,
            upperLimit: Lmo,
          },
          {
            name: "TASK_MAX_OUTPUT_LENGTH",
            default: dRo,
            upperLimit: uRo,
          },
          {
            name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
            ...Xxe("claude-opus-4-6"),
          },
        ]
          .map((k) => {
            let D = process.env[k.name],
              P = Fue(k.name, D, k.default, k.upperLimit);
            return {
              name: k.name,
              ...P,
            };
          })
          .filter((k) => k.status !== "valid"),
      [],
    );
  PP.useEffect(() => {
    (xe("screen_doctor"),
      I9e({
        probeKeychain: true,
      }).then(c),
      (async () => {
        let I = Inr.join(tr(), "agents"),
          k = Inr.join(yr(), ".claude", "agents"),
          { activeAgents: D, allAgents: P, failedFiles: O } = t,
          [L, M] = await Promise.all([ed(I), ed(k)]),
          N = {
            activeAgents: D.map(($) => ({
              agentType: $.agentType,
              source: $.source,
            })),
            userAgentsDir: I,
            projectAgentsDir: k,
            userDirExists: L,
            projectDirExists: M,
            failedFiles: O ?? [],
          };
        d(N);
        let B = await zNl(
          {
            activeAgents: D,
            allAgents: P,
            failedFiles: O,
          },
          async () => n,
        );
        if ((f(B), $Pe())) {
          let $ = Inr.join(Y2n(), "claude", "locks"),
            q = DVn($),
            W = zza($);
          g({
            enabled: true,
            locks: W,
            locksDir: $,
            staleLocksCleaned: q,
          });
        } else
          g({
            enabled: false,
            locks: [],
            locksDir: "",
            staleLocksCleaned: 0,
          });
      })());
  }, [n, t]);
  let v = PP.useMemo(() => OPn(), []),
    C = PP.useMemo(
      () => buildFixPrompt(l, u, _, r, o, p, A, void 0, void 0, v, S),
      [l, u, _, r, o, p, A, v, S],
    );
  if (
    (No(
      {
        "confirm:no": i,
      },
      {
        context: "Confirmation",
      },
    ),
    No(
      {
        "confirm:yes": i,
      },
      {
        context: "Confirmation",
        isActive: l !== null,
      },
    ),
    No(
      {
        "doctor:fix": () => {
          if (C)
            e(C, {
              display: "user",
              shouldQuery: true,
            });
        },
      },
      {
        context: "Doctor",
        isActive: C !== null,
      },
    ),
    !l)
  )
    return as.jsx(Fu, {
      children: as.jsx(Vc, {
        message: "Checking installation status\u2026",
        dimColor: true,
      }),
    });
  let x = as.jsxs(as.Fragment, {
    children: [
      as.jsxs(U, {
        flexDirection: "column",
        children: [
          as.jsx(nx, {
            title: "Diagnostics",
            status: l.ripgrepStatus.working ? "success" : "warning",
          }),
          as.jsxs(hs, {
            variant: "tree",
            children: [
              as.jsxs(hs.Node, {
                children: ["Currently running: ", l.installationType, " (", l.version, ")"],
              }),
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.195",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-06-26T01:00:56Z",
                GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
              }.GIT_SHA &&
                as.jsxs(hs.Node, {
                  children: [
                    "Commit: ",
                    {
                      ISSUES_EXPLAINER:
                        "report the issue at https://github.com/anthropics/claude-code/issues",
                      PACKAGE_URL: "@anthropic-ai/claude-code",
                      README_URL: "https://code.claude.com/docs/en/overview",
                      VERSION: "2.1.195",
                      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                      BUILD_TIME: "2026-06-26T01:00:56Z",
                      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                    }.GIT_SHA.slice(0, 12),
                  ],
                }),
              as.jsxs(hs.Node, {
                children: ["Platform: ", "linux", "-", "x64"],
              }),
              l.packageManager &&
                as.jsxs(hs.Node, {
                  children: ["Package manager: ", l.packageManager],
                }),
              as.jsxs(hs.Node, {
                children: ["Path: ", l.installationPath],
              }),
              l.invokedBinary !== l.installationPath &&
                as.jsxs(hs.Node, {
                  children: ["Invoked: ", l.invokedBinary],
                }),
              as.jsxs(hs.Node, {
                children: ["Config install method: ", l.configInstallMethod],
              }),
              as.jsxs(hs.Node, {
                children: [
                  "Search: ",
                  l.ripgrepStatus.working ? "OK" : "Not working",
                  " (",
                  l.ripgrepStatus.mode === "embedded"
                    ? "bundled"
                    : l.ripgrepStatus.systemPath || "system",
                  ")",
                ],
              }),
            ],
          }),
        ],
      }),
      l.multipleInstallations.length > 1 &&
        as.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            as.jsx(nx, {
              title: "Multiple installations found",
              status: "warning",
            }),
            as.jsx(hs, {
              variant: "tree",
              children: l.multipleInstallations.map((I, k) =>
                as.jsxs(
                  hs.Node,
                  {
                    children: [I.type, " at ", I.path],
                  },
                  k,
                ),
              ),
            }),
          ],
        }),
      l.warnings.length > 0 &&
        as.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            as.jsx(nx, {
              title: "Installation warnings",
              status: "warning",
            }),
            as.jsx(hs, {
              variant: "tree",
              children: l.warnings.map((I, k) =>
                as.jsxs(
                  hs.Group,
                  {
                    children: [
                      as.jsx(hs.Node, {
                        color: "warning",
                        children: I.issue,
                      }),
                      as.jsx(hs.Node, {
                        children: as.jsx(_nr, {
                          dimColor: true,
                          children: I.fix,
                        }),
                      }),
                    ],
                  },
                  k,
                ),
              ),
            }),
          ],
        }),
      _.length > 0 &&
        as.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            as.jsx(nx, {
              title: "Invalid settings",
              status: _.some((I) => I.severity !== "warning") ? "error" : "warning",
            }),
            as.jsx(Enr, {
              errors: _,
            }),
          ],
        }),
      as.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          as.jsx(nx, {
            title: "Updates",
            status:
              l.lastUpdateResult?.outcome === "failed" || l.hasUpdatePermissions === false
                ? "warning"
                : "success",
          }),
          as.jsxs(hs, {
            variant: "tree",
            children: [
              as.jsxs(hs.Node, {
                children: [
                  "Auto-updates:",
                  " ",
                  l.packageManager ? "Managed by package manager" : l.autoUpdates,
                ],
              }),
              as.jsxs(hs.Node, {
                children: ["Auto-update channel:", " ", b === "rc" ? "slow" : b],
              }),
              as.jsx(LastUpdateNode, {
                result: l.lastUpdateResult,
              }),
              as.jsx(PP.Suspense, {
                fallback: as.jsx(hs.Node, {
                  dimColor: true,
                  children: "Checking for updates\u2026",
                }),
                children: as.jsx(DistTagsDisplay, {
                  promise: y,
                }),
              }),
            ],
          }),
        ],
      }),
      as.jsx(BNl, {}),
      v_e() ? as.jsx(kNl, {}) : null,
      as.jsx($Nl, {}),
      as.jsx(SEt, {}),
      as.jsx(McpConnectionIssuesSection, {
        issues: S,
      }),
      as.jsx(lNl, {}),
      as.jsx(PNl, {}),
      A.length > 0 &&
        as.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            as.jsx(nx, {
              title: "Environment variables",
              status: A.some((I) => I.status !== "capped") ? "error" : "warning",
            }),
            as.jsx(hs, {
              variant: "tree",
              children: A.map((I, k) =>
                as.jsx(
                  hs.Node,
                  {
                    children: as.jsxs(w, {
                      children: [
                        I.name,
                        ":",
                        " ",
                        as.jsx(w, {
                          color: I.status === "capped" ? "warning" : "error",
                          children: I.message,
                        }),
                      ],
                    }),
                  },
                  k,
                ),
              ),
            }),
          ],
        }),
      m?.enabled &&
        (m.locks.length > 0 || m.staleLocksCleaned > 0) &&
        as.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            as.jsx(nx, {
              title: "Version locks",
              status: m.locks.some((I) => !I.isProcessRunning) ? "warning" : "success",
            }),
            as.jsxs(hs, {
              variant: "tree",
              children: [
                m.staleLocksCleaned > 0 &&
                  as.jsxs(hs.Node, {
                    dimColor: true,
                    children: [
                      "Cleaned ",
                      m.staleLocksCleaned,
                      " stale",
                      " ",
                      bn(m.staleLocksCleaned, "lock"),
                    ],
                  }),
                m.locks.map((I, k) =>
                  as.jsx(
                    hs.Node,
                    {
                      children: as.jsxs(w, {
                        children: [
                          I.version,
                          ": PID ",
                          I.pid,
                          " ",
                          I.isProcessRunning
                            ? as.jsx(w, {
                                children: "(running)",
                              })
                            : as.jsx(w, {
                                color: "warning",
                                children: "(stale)",
                              }),
                        ],
                      }),
                    },
                    k,
                  ),
                ),
              ],
            }),
          ],
        }),
      u &&
        u.failedFiles.length > 0 &&
        as.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            as.jsx(nx, {
              title: "Agent parse errors",
              status: "error",
            }),
            as.jsxs(hs, {
              variant: "tree",
              children: [
                as.jsx(hs.Node, {
                  color: "error",
                  children: `Failed to parse ${u.failedFiles.length} agent ${bn(u.failedFiles.length, "file")}:`,
                }),
                u.failedFiles.map((I, k) =>
                  as.jsxs(
                    hs.Node,
                    {
                      dimColor: true,
                      children: [I.path, ": ", I.error],
                    },
                    k,
                  ),
                ),
              ],
            }),
          ],
        }),
      as.jsx(PluginErrorsSection, {
        errors: r,
        warnings: o,
      }),
      as.jsx(IneffectivePluginDisablesSection, {
        disables: v,
      }),
      p?.unreachableRulesWarning &&
        as.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            as.jsx(nx, {
              title: "Unreachable permission rules",
              status: "warning",
            }),
            as.jsxs(hs, {
              variant: "tree",
              children: [
                as.jsx(hs.Node, {
                  color: "warning",
                  children: p.unreachableRulesWarning.message,
                }),
                p.unreachableRulesWarning.details.map((I, k) =>
                  as.jsx(
                    hs.Node,
                    {
                      dimColor: true,
                      children: I,
                    },
                    k,
                  ),
                ),
              ],
            }),
          ],
        }),
      p &&
        (p.claudeMdWarning || p.agentWarning) &&
        as.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            as.jsx(nx, {
              title: "Context usage warnings",
              status: "warning",
            }),
            as.jsxs(hs, {
              variant: "tree",
              children: [
                p.claudeMdWarning &&
                  as.jsx(YNl, {
                    warning: p.claudeMdWarning,
                  }),
                p.agentWarning &&
                  as.jsx(YNl, {
                    warning: p.agentWarning,
                  }),
              ],
            }),
          ],
        }),
    ],
  });
  return as.jsxs(Fu, {
    children: [
      as.jsx(U, {
        flexDirection: "column",
        children: x,
      }),
      as.jsx(U, {
        marginTop: 1,
        children: as.jsx(w, {
          dimColor: true,
          children: "Still having issues? Run /feedback to report details.",
        }),
      }),
      as.jsx(U, {
        marginTop: 1,
        children: as.jsx(w, {
          dimColor: true,
          italic: true,
          children: a.pending
            ? as.jsxs(as.Fragment, {
                children: ["Press ", a.keyName, " again to close"],
              })
            : as.jsxs(Tn, {
                children: [
                  as.jsx(ht, {
                    chord: "enter",
                    action: "close",
                  }),
                  C &&
                    as.jsx(ht, {
                      chord: "f",
                      action: "fix with Claude",
                    }),
                ],
              }),
        }),
      }),
    ],
  });
}
function rOf() {
  return xo.isSupportedPlatform() && xo.isSandboxEnabledInSettings() && xo.isPlatformInEnabledList()
    ? xo.checkDependencies().errors
    : [];
}
function ZNl(e) {
  if (e.type === "needs-auth") return "needs authentication";
  return e.errorCode === "INVALID_CONFIG" ? "config issue" : "failed";
}
function McpConnectionIssuesSection(e) {
  let t = JOe.c(15),
    { issues: n } = e;
  if (n.length === 0) return null;
  let r = n.some(sOf),
    o = r ? "error" : "warning",
    s;
  if (t[0] !== o)
    ((s = as.jsx(nx, {
      title: "MCP servers",
      status: o,
    })),
      (t[0] = o),
      (t[1] = s));
  else s = t[1];
  let i = r ? "error" : "warning",
    a = n.length,
    l;
  if (t[2] !== n.length) ((l = bn(n.length, "server")), (t[2] = n.length), (t[3] = l));
  else l = t[3];
  let c = `${a} MCP ${l} not connected \u2014 run /mcp to authenticate, retry, or see details:`,
    u;
  if (t[4] !== i || t[5] !== c)
    ((u = as.jsx(hs.Node, {
      color: i,
      children: c,
    })),
      (t[4] = i),
      (t[5] = c),
      (t[6] = u));
  else u = t[6];
  let d;
  if (t[7] !== n) ((d = n.map(oOf)), (t[7] = n), (t[8] = d));
  else d = t[8];
  let p;
  if (t[9] !== u || t[10] !== d)
    ((p = as.jsxs(hs, {
      variant: "tree",
      children: [u, d],
    })),
      (t[9] = u),
      (t[10] = d),
      (t[11] = p));
  else p = t[11];
  let f;
  if (t[12] !== s || t[13] !== p)
    ((f = as.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [s, p],
    })),
      (t[12] = s),
      (t[13] = p),
      (t[14] = f));
  else f = t[14];
  return f;
}
function oOf(e, t) {
  return as.jsxs(
    hs.Node,
    {
      dimColor: true,
      children: [e.name, ": ", ZNl(e), e.error ? ` \u2014 ${e.error}` : ""],
    },
    t,
  );
}
function sOf(e) {
  return e.type === "failed";
}
function IneffectivePluginDisablesSection(e) {
  let t = JOe.c(6),
    { disables: n } = e;
  if (n.length === 0) return null;
  let r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((r = as.jsx(nx, {
      title: "Plugin settings overridden",
      status: "warning",
    })),
      (t[0] = r));
  else r = t[0];
  let o;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((o = as.jsx(hs.Node, {
      color: "warning",
      children:
        "These plugins are disabled in ~/.claude/settings.json, but a higher-precedence source re-enables them:",
    })),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== n) ((s = n.map(iOf)), (t[2] = n), (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== s)
    ((i = as.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        r,
        as.jsxs(hs, {
          variant: "tree",
          children: [o, s],
        }),
      ],
    })),
      (t[4] = s),
      (t[5] = i));
  else i = t[5];
  return i;
}
function iOf(e, t) {
  return as.jsx(
    hs.Node,
    {
      dimColor: true,
      children: seo(e),
    },
    t,
  );
}
function nBl(e) {
  let t = JOe.c(4),
    { source: n, plugin: r, message: o } = e,
    s = n || "unknown",
    i = r ? ` [${r}]` : "",
    a;
  if (t[0] !== o || t[1] !== s || t[2] !== i)
    ((a = as.jsxs(hs.Node, {
      dimColor: true,
      children: [s, i, ": ", o],
    })),
      (t[0] = o),
      (t[1] = s),
      (t[2] = i),
      (t[3] = a));
  else a = t[3];
  return a;
}
function PluginErrorsSection(e) {
  let t = JOe.c(7),
    { errors: n, warnings: r } = e;
  if (n.length === 0 && r.length === 0) return null;
  let o;
  if (t[0] !== n)
    ((o =
      n.length > 0 &&
      as.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          as.jsx(nx, {
            title: "Plugin errors",
            status: "error",
          }),
          as.jsxs(hs, {
            variant: "tree",
            children: [
              as.jsx(hs.Node, {
                color: "error",
                children: `${n.length} plugin ${bn(n.length, "error")} detected:`,
              }),
              n.map(lOf),
            ],
          }),
        ],
      })),
      (t[0] = n),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== r)
    ((s =
      r.length > 0 &&
      as.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          as.jsx(nx, {
            title: "Plugin notes",
            status: "warning",
          }),
          as.jsxs(hs, {
            variant: "tree",
            children: [
              as.jsx(hs.Node, {
                color: "warning",
                children: `${r.length} plugin ${bn(r.length, "note")}:`,
              }),
              r.map(aOf),
            ],
          }),
        ],
      })),
      (t[2] = r),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== o || t[5] !== s)
    ((i = as.jsxs(as.Fragment, {
      children: [o, s],
    })),
      (t[4] = o),
      (t[5] = s),
      (t[6] = i));
  else i = t[6];
  return i;
}
function aOf(e, t) {
  return as.jsx(
    nBl,
    {
      source: e.source,
      plugin: "plugin" in e ? e.plugin : void 0,
      message: zM(e),
    },
    t,
  );
}
function lOf(e, t) {
  return as.jsx(
    nBl,
    {
      source: e.source,
      plugin: "plugin" in e ? e.plugin : void 0,
      message: iS(e),
    },
    t,
  );
}
function buildFixPrompt(e, t, n, r, o, s, i, a = Gj.warnings, l = rOf(), c = [], u = []) {
  let d = [];
  for (let p of e?.warnings ?? [])
    d.push(`- ${p.issue}
  Suggested fix: ${p.fix}`);
  for (let p of u) {
    let f = p.error ? ` \u2014 ${p.error}` : "";
    d.push(`- MCP server '${p.name}': ${ZNl(p)}${f}
  Run /mcp to authenticate, retry, or inspect the server.`);
  }
  for (let p of a)
    d.push(
      `- Keybinding (${rbe()}): ${p.message}${
        p.suggestion
          ? `
  Suggested fix: ${p.suggestion}`
          : ""
      }`,
    );
  for (let p of t?.failedFiles ?? [])
    d.push(`- Agent file failed to parse: ${p.path}
  Error: ${p.error}`);
  for (let p of n) {
    let f = [p.file, p.path].filter(Boolean).join(" \u203A ");
    d.push(
      `- Settings${f ? ` (${f})` : ""}: ${p.message}${
        p.suggestion
          ? `
  Suggested fix: ${p.suggestion}`
          : ""
      }`,
    );
  }
  for (let p of r) {
    let f = ["plugin" in p && p.plugin, p.source].filter(Boolean).join(" @ ");
    d.push(`- Plugin${f ? ` (${f})` : ""}: ${iS(p)}`);
  }
  for (let p of c) d.push(`- Plugin setting: ${seo(p)}`);
  for (let p of o) {
    let f = ["plugin" in p ? p.plugin : void 0, p.source].filter(Boolean).join(" @ ");
    d.push(`- Plugin note${f ? ` (${f})` : ""}: ${zM(p)}`);
  }
  for (let p of l)
    d.push(`- Sandbox: ${p}
  (See /sandbox for install instructions)`);
  for (let p of [s?.claudeMdWarning, s?.agentWarning, s?.unreachableRulesWarning])
    if (p)
      d.push(`- ${p.message}
  ${p.details.join(`
  `)}`);
  for (let p of i) d.push(`- Environment variable ${p.name}: ${p.message}`);
  if (d.length === 0) return null;
  return [
    "Help me fix the issues reported by /doctor below.",
    "",
    "For each issue: briefly explain what the fix will do, then ask me to confirm before running any shell command that deletes files, modifies global config, or changes my installation. Safe read-only checks are fine without asking. If a suggested fix looks wrong for my setup, say so instead of running it.",
    "",
    d.join(`
`),
  ].join(`
`);
}
function YNl(e) {
  let t = JOe.c(7),
    { warning: n } = e,
    r;
  if (t[0] !== n.message)
    ((r = as.jsx(hs.Node, {
      color: "warning",
      children: n.message,
    })),
      (t[0] = n.message),
      (t[1] = r));
  else r = t[1];
  let o;
  if (t[2] !== n.details) ((o = n.details.map(cOf)), (t[2] = n.details), (t[3] = o));
  else o = t[3];
  let s;
  if (t[4] !== r || t[5] !== o)
    ((s = as.jsxs(hs.Group, {
      children: [r, o],
    })),
      (t[4] = r),
      (t[5] = o),
      (t[6] = s));
  else s = t[6];
  return s;
}
function cOf(e, t) {
  return as.jsx(
    hs.Node,
    {
      dimColor: true,
      children: e,
    },
    t,
  );
}
var JOe, Inr, PP, as;
