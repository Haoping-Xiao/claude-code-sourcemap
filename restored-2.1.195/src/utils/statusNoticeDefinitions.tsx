// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u2o
// matched 2.1.88 source: src/utils/statusNoticeDefinitions.tsx
// class=modified  jaccard=0.1121  score=0.1426  fileCov=0.3438
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var u2o = E(() => {
  Ye();
  dC();
  MEt();
  Lo();
  es();
  sr();
  er();
  SC();
  oo();
  qd();
  GY();
  Ls();
  Cnr();
  fn();
  QFo();
  wr();
  ft();
  Eor();
  kt();
  M5l();
  Hor();
  SEe();
  U5l();
  G5l();
  Ao();
  q5l();
  J5l();
  sql();
  lql();
  gql();
  p4n();
  i2o();
  m_t();
  mVe();
  je();
  Un();
  ((l2o = R(lt(), 1)),
    (wql = require("path")),
    ($u = R(se(), 1)),
    (WHe = {
      org: 30,
      launch: 20,
      campaign: 15,
      promo: 10,
      hint: 5,
    }),
    (U4f = {
      id: "safe-mode",
      tier: "warning",
      type: "warning",
      isActive: () => Tl(),
      render: () =>
        $u.jsxs($u.Fragment, {
          children: [
            $u.jsxs(qk, {
              status: "warning",
              children: [
                "Safe mode: all customizations are disabled (CLAUDE.md, skills, plugins, hooks, MCP, agents, and more)",
                Sor() &&
                  $u.jsxs($u.Fragment, {
                    children: [
                      " \xB7 ",
                      "managed hooks and settings policy from your organization still apply; managed plugins, skills, CLAUDE.md, and MCP servers do not",
                    ],
                  }),
              ],
            }),
            $u.jsx(U, {
              paddingLeft: 2,
              children: $u.jsx(w, {
                dimColor: true,
                children: `${Cx(qH())} to re-enable`,
              }),
            }),
          ],
        }),
    }),
    (F4f = {
      id: "large-memory-files",
      tier: "warning",
      type: "warning",
      isActive: (e) => XRe(e.memoryFiles).length > 0,
      render: (e) => {
        let t = XRe(e.memoryFiles),
          n = YRe();
        return $u.jsx($u.Fragment, {
          children: t.map((r) => {
            let o = r.path.startsWith($t()) ? wql.relative($t(), r.path) : r.path;
            return $u.jsxs(
              qk,
              {
                status: "warning",
                children: [
                  $u.jsx(w, {
                    bold: true,
                    children: o,
                  }),
                  " is over the",
                  " ",
                  ou(n),
                  "-char limit (",
                  ou(r.content.length),
                  " chars)",
                  $u.jsx(w, {
                    dimColor: true,
                    children: " \xB7 /memory to free up context",
                  }),
                ],
              },
              r.path,
            );
          }),
        });
      },
    }),
    (j4f = {
      id: "claude-ai-external-token",
      tier: "warning",
      type: "warning",
      isActive: () => {
        let e = aI();
        return bo() && (e.source === "ANTHROPIC_AUTH_TOKEN" || e.source === "apiKeyHelper");
      },
      render: () => {
        let e = aI();
        return $u.jsx(U, {
          marginTop: 1,
          children: $u.jsxs(qk, {
            status: "warning",
            children: [
              e.source,
              " overriding Claude subscription login",
              $u.jsx(w, {
                dimColor: true,
                children: " \xB7 unset it or /logout to sign it out",
              }),
            ],
          }),
        });
      },
    }),
    (G4f = {
      id: "api-key-conflict",
      tier: "warning",
      type: "warning",
      isActive: () => {
        let { source: e } = Ty({
          skipRetrievingKeyFromApiKeyHelper: true,
        });
        return !!V4e() && (e === "ANTHROPIC_API_KEY" || e === "apiKeyHelper");
      },
      render: () => {
        let { source: e } = Ty({
          skipRetrievingKeyFromApiKeyHelper: true,
        });
        return $u.jsx(U, {
          marginTop: 1,
          children: $u.jsxs(qk, {
            status: "warning",
            children: [
              e,
              " overriding saved Console key",
              $u.jsx(w, {
                dimColor: true,
                children: " \xB7 unset it or /logout to clear the saved key",
              }),
            ],
          }),
        });
      },
    }),
    (W4f = {
      id: "both-auth-methods",
      tier: "warning",
      type: "warning",
      isActive: () => {
        let { source: e } = Ty({
            skipRetrievingKeyFromApiKeyHelper: true,
          }),
          t = aI();
        return (
          e !== "none" &&
          t.source !== "none" &&
          !(e === "apiKeyHelper" && t.source === "apiKeyHelper")
        );
      },
      render: () => {
        let { source: e } = Ty({
            skipRetrievingKeyFromApiKeyHelper: true,
          }),
          t = aI();
        return $u.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            $u.jsxs(qk, {
              status: "warning",
              children: ["Both ", t.source, " and ", e, " set \xB7 auth may not work as expected"],
            }),
            $u.jsxs(U, {
              flexDirection: "column",
              paddingLeft: 2,
              children: [
                $u.jsxs(w, {
                  dimColor: true,
                  children: [
                    "\xB7 to use",
                    " ",
                    t.source === "claude.ai" ? "claude.ai" : t.source,
                    ":",
                    " ",
                    e === "ANTHROPIC_API_KEY"
                      ? 'Unset the ANTHROPIC_API_KEY environment variable, or claude /logout then say "No" to the API key approval before login.'
                      : e === "apiKeyHelper"
                        ? "Unset the apiKeyHelper setting."
                        : "claude /logout",
                  ],
                }),
                $u.jsxs(w, {
                  dimColor: true,
                  children: ["\xB7 to use ", e, ":", " ", W4e(t.source)],
                }),
              ],
            }),
          ],
        });
      },
    }),
    (q4f = {
      id: "large-agent-descriptions",
      tier: "warning",
      type: "warning",
      isActive: (e) => Y7t(e.agentDefinitions) > xKe,
      render: (e) => {
        let t = Y7t(e.agentDefinitions);
        return $u.jsxs(qk, {
          status: "warning",
          children: [
            "Agent descriptions are over the",
            " ",
            ou(xKe),
            "-token limit (~",
            ou(t),
            " tokens)",
            $u.jsx(w, {
              dimColor: true,
              children: " \xB7 /agents to free up context",
            }),
          ],
        });
      },
    }),
    (V4f = {
      id: "model-source",
      tier: "info",
      type: "info",
      isActive: (e) => e.modelRestrictedWarning === null && (jPt() !== "" || wnr()),
      render: () => $u.jsx(N5l, {}),
    }),
    (z4f = {
      id: "install-broken",
      tier: "warning",
      type: "warning",
      isActive: (e) => e.installBrokenMessages.length > 0,
      render: (e) =>
        $u.jsx(j5l, {
          messages: e.installBrokenMessages,
        }),
    }),
    (K4f = {
      id: "npm-deprecation",
      tier: "warning",
      type: "warning",
      isActive: (e) => e.npmInstallDeprecated,
      render: () =>
        $u.jsxs(qk, {
          status: "warning",
          children: [
            "Installed via npm (deprecated)",
            $u.jsxs(w, {
              dimColor: true,
              children: [" ", "\xB7 run claude install to switch to the native version"],
            }),
          ],
        }),
    }),
    (Y4f = {
      id: "mcp-needs-auth",
      tier: "warning",
      type: "warning",
      isActive: (e) => e.mcpNeedsAuthCount > 0,
      render: (e) =>
        $u.jsxs(qk, {
          status: "warning",
          children: [
            e.mcpNeedsAuthCount,
            " MCP",
            " ",
            bn(e.mcpNeedsAuthCount, "server needs", "servers need"),
            " ",
            "authentication",
            $u.jsx(w, {
              dimColor: true,
              children: " \xB7 run /mcp",
            }),
          ],
        }),
    }),
    (X4f = {
      id: "model-deprecation",
      tier: "warning",
      type: "warning",
      isActive: (e) => e.modelDeprecationWarning !== null,
      render: (e) =>
        e.modelDeprecationWarning === null
          ? null
          : $u.jsxs(qk, {
              status: "warning",
              children: [
                e.modelDeprecationWarning.message,
                $u.jsxs(w, {
                  dimColor: true,
                  children: [" \xB7 ", e.modelDeprecationWarning.action],
                }),
              ],
            }),
    }),
    (J4f = {
      id: "model-restricted",
      tier: "warning",
      type: "warning",
      isActive: (e) => e.modelRestrictedWarning !== null,
      render: (e) =>
        e.modelRestrictedWarning === null
          ? null
          : $u.jsx(qk, {
              status: "warning",
              children: moe(e.modelRestrictedWarning.requested, e.modelRestrictedWarning.effective),
            }),
    }),
    (Q4f = {
      id: "hipaa-compliance",
      tier: "warning",
      type: "info",
      isActive: () => T9("hipaa"),
      render: () =>
        $u.jsxs(qk, {
          status: "info",
          children: [
            "HIPAA \xB7 some features are restricted",
            $u.jsx(w, {
              dimColor: true,
              children: " \xB7 /status for details",
            }),
          ],
        }),
    }),
    (Z4f = {
      id: "debug-mode",
      tier: "info",
      type: "info",
      isActive: () => vO(),
      render: () =>
        $u.jsxs(GHe, {
          children: ["Debug mode enabled \xB7 logging to", " ", wO() ? "stderr" : Yge()],
        }),
    }),
    (e3f = {
      id: "tmux-session",
      tier: "info",
      type: "info",
      isActive: () => !!process.env.CLAUDE_CODE_TMUX_SESSION,
      render: () =>
        $u.jsxs(GHe, {
          children: [
            "tmux session: ",
            process.env.CLAUDE_CODE_TMUX_SESSION,
            " \xB7 detach with",
            " ",
            process.env.CLAUDE_CODE_TMUX_PREFIX_CONFLICTS
              ? `${process.env.CLAUDE_CODE_TMUX_PREFIX} ${process.env.CLAUDE_CODE_TMUX_PREFIX} d (press prefix twice - Claude uses ${process.env.CLAUDE_CODE_TMUX_PREFIX})`
              : `${process.env.CLAUDE_CODE_TMUX_PREFIX} d`,
          ],
        }),
    }));
  r3f = {
    id: EAt,
    tier: "info",
    type: "info",
    claimsFirstShow: () => (Dt().seenNotifications?.[EAt] ?? 0) === 0,
    isActive: (e) => t3f(e),
    render: (e) =>
      $u.jsx(o3f, {
        ctx: e,
      }),
  };
  s3f = {
    id: "powerup-discovery",
    tier: "info",
    type: "info",
    isActive: () => Fbr() && ZFo() === "banner",
    render: () => $u.jsx(i3f, {}),
  };
  ((l3f = {
    id: "emergency-tip",
    tier: "warning",
    type: "warning",
    isActive: () => n2o(t2o()),
    render: () => $u.jsx(W5l, {}),
  }),
    (c3f = {
      id: "channels",
      tier: "info",
      type: "info",
      isActive: () => MA().length > 0,
      render: () => $u.jsx(P5l, {}),
    }),
    (u3f = {
      id: "prompt-caching-disabled",
      tier: "warning",
      type: "warning",
      isActive: () => Hql().length > 0,
      render: () => {
        let e = Hql();
        return $u.jsxs(qk, {
          status: "warning",
          children: [
            "Prompt caching off (",
            e.join(", "),
            "), requests will be slower and cost more",
            $u.jsx(w, {
              dimColor: true,
              children: " \xB7 unset it to re-enable",
            }),
          ],
        });
      },
    }),
    (d3f = {
      id: "company-announcement",
      tier: "announcement",
      type: "info",
      promo: false,
      priority: WHe.org,
      isActive: () => K5l(),
      render: () => $u.jsx(X5l, {}),
    }),
    (p3f = {
      id: "startup-announcement",
      tier: "announcement",
      type: "info",
      promo: false,
      priority: WHe.launch,
      isActive: () => kor(false) !== void 0 && !(fQ()?.isTopPriorityAnnouncement === true && Ior()),
      render: () => $u.jsx(Aql, {}),
    }),
    (f3f = {
      id: "fotw-nudge",
      tier: "announcement",
      type: "info",
      promo: false,
      priority: WHe.campaign,
      isActive: () => Ior(),
      render: () => $u.jsx(aql, {}),
    }),
    (m3f = {
      id: "guest-passes",
      tier: "announcement",
      type: "info",
      promo: true,
      maxImpressions: 3,
      priority: WHe.promo,
      isActive: () => rql() && !QMe() && !f_t(),
      render: () => $u.jsx(oql, {}),
    }),
    (g3f = {
      id: "fullscreen-downsell",
      tier: "announcement",
      type: "info",
      promo: false,
      priority: WHe.hint,
      claimsFirstShow: () => (Dt().fullscreenDownsellSeenCount ?? 0) === 0,
      isActive: () => Oe.CLAUDE_CODE_TUI_JUST_SWITCHED === void 0 && fql(),
      render: () => $u.jsx(mql, {}),
    }),
    (h3f = {
      id: "subscription-switch",
      tier: "announcement",
      type: "info",
      promo: true,
      maxImpressions: kho,
      priority: WHe.promo,
      isActive: (e) => e.existingClaudeSubscription !== null,
      render: (e) =>
        e.existingClaudeSubscription === null
          ? null
          : $u.jsx(w1a, {
              subscriptionType: e.existingClaudeSubscription,
            }),
    }),
    (y3f = [
      U4f,
      F4f,
      q4f,
      j4f,
      G4f,
      W4f,
      c3f,
      u3f,
      l3f,
      V4f,
      X4f,
      J4f,
      z4f,
      K4f,
      Y4f,
      Q4f,
      Z4f,
      e3f,
      r3f,
      s3f,
      d3f,
      p3f,
      f3f,
      m3f,
      h3f,
      g3f,
    ]));
  Tql = ["debug-mode", "model-source", "channels", "tmux-session"];
  xde(S3f);
});
function E3f() {
  let e = f2o.c(3),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) ((t = gce() ? null : Wv()), (e[0] = t));
  else t = e[0];
  let n = t,
    [r, o] = Dor.useState(kql),
    s,
    i;
  if (e[1] === Symbol.for("react.memo_cache_sentinel"))
    ((s = () => {
      if (n === null) {
        o(kql);
        return;
      }
      let a = true;
      return (
        n.then((l) => {
          if (a) o(l);
        }, A3f),
        () => {
          a = false;
        }
      );
    }),
      (i = [n]),
      (e[1] = s),
      (e[2] = i));
  else ((s = e[1]), (i = e[2]));
  return (Dor.useEffect(s, i), r);
}
function A3f() {}
function Rql(e) {
  let t = f2o.c(7),
    { agentDefinitions: n, latchAnnouncementSlot: r } = e === void 0 ? {} : e,
    o = r === void 0 ? true : r,
    { columns: s } = br(),
    i = uor(s),
    a = dT(w3f),
    l = dT(v3f),
    c = dT(T3f),
    u = dT(H3f) ?? 0;
  x5l();
  let d = E3f(),
    p = Dt(),
    f;
  e: {
    let I = a?.modelRestrictedWarning;
    if (!I) {
      f = null;
      break e;
    }
    let k = As(),
      D = ya(I.requested.trim().toLowerCase());
    if (!trt(D) && D !== "best" && zo(I.requested).toLowerCase() === k.toLowerCase()) {
      f = null;
      break e;
    }
    f = {
      requested: I.requested,
      effective: k,
    };
  }
  let m = {
      config: p,
      agentDefinitions: n,
      memoryFiles: d,
      installBrokenMessages: a?.installBrokenMessages ?? [],
      npmInstallDeprecated: a?.npmInstallDeprecated ?? false,
      modelDeprecationWarning: a?.modelDeprecationWarning ?? null,
      modelRestrictedWarning: f,
      existingClaudeSubscription: a?.existingClaudeSubscription ?? null,
      replBridgeAutoOnByDefault: l ?? false,
      replBridgeSessionUrl: c,
      mcpNeedsAuthCount: u,
    },
    h = (o ? xql : c2o)(Iql(m), i, {
      suppressPromos: Lor(),
    }),
    y = h.warnings.length > 0,
    b = h.slot !== null,
    _ = h.ant.length > 0,
    S = xho,
    A = cP,
    v =
      !y && !b && !_
        ? null
        : iZ.jsxs(U, {
            flexDirection: "column",
            paddingLeft: 1,
            children: [
              h.warnings.map((I) =>
                iZ.jsx(
                  p2o.Fragment,
                  {
                    children: I.render(m),
                  },
                  I.id,
                ),
              ),
              h.slot === null
                ? null
                : iZ.jsxs(U, {
                    flexDirection: "column",
                    marginTop: y ? 1 : 0,
                    children: [
                      iZ.jsx(U, {
                        flexDirection: "column",
                        paddingLeft: 1,
                        borderStyle: "quote",
                        borderTop: false,
                        borderBottom: false,
                        borderRight: false,
                        borderColor: h.slot.tier === "announcement" ? "claude" : void 0,
                        borderDimColor: h.slot.tier !== "announcement",
                        children: h.slot.render(m),
                      }),
                      h.slotOverflowCount > 0 &&
                        iZ.jsx(U, {
                          paddingLeft: 2,
                          children: iZ.jsxs(GHe, {
                            command: "/status",
                            children: ["+", h.slotOverflowCount, " more"],
                          }),
                        }),
                    ],
                  }),
              _ &&
                iZ.jsx(U, {
                  flexDirection: "column",
                  paddingLeft: 2,
                  marginTop: y || b ? 1 : 0,
                  children: h.ant.map((I) =>
                    iZ.jsx(
                      p2o.Fragment,
                      {
                        children: I.render(m),
                      },
                      I.id,
                    ),
                  ),
                }),
            ],
          }),
    C;
  if (t[0] !== A || t[1] !== v)
    ((C = iZ.jsx(A, {
      children: v,
    })),
      (t[0] = A),
      (t[1] = v),
      (t[2] = C));
  else C = t[2];
  let x;
  if (t[3] !== o || t[4] !== S.Provider || t[5] !== C)
    ((x = iZ.jsx(S.Provider, {
      value: o,
      children: C,
    })),
      (t[3] = o),
      (t[4] = S.Provider),
      (t[5] = C),
      (t[6] = x));
  else x = t[6];
  return x;
}
function H3f(e) {
  return GNl(e.mcp.clients, sqe);
}
function T3f(e) {
  return e.replBridgeSessionUrl;
}
function v3f(e) {
  return e.replBridgeAutoOnByDefault;
}
function w3f(e) {
  return e.setupIssues;
}
var f2o, p2o, Dor, iZ, kql;
