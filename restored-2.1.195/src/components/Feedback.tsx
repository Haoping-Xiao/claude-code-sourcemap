// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SDl
// matched 2.1.88 source: src/components/Feedback.tsx
// class=modified  jaccard=0.2136  score=0.4004  fileCov=0.314
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SDl] deps: SGe, jh, dn, uo, At, ik
((Lkf = R(lt(), 1)), (mOo = R(rt(), 1)), (Dkf = R(se(), 1)));
function TDl({
  abortSignal: e,
  messages: t,
  initialDescription: n,
  onDone: r,
  backgroundTasks: o = {},
  mode: s = "post",
  readFileState: i,
  surveyFeedbackSource: a,
}) {
  let [l, c] = FN.useState("userInput"),
    [u, d] = FN.useState(0),
    [p, f] = FN.useState(n ?? ""),
    [m, g] = FN.useState(null),
    [h, y] = FN.useState(null),
    [b, _] = FN.useState(null),
    [S, A] = FN.useState({
      isGit: !1,
      gitState: null,
    }),
    [v, C] = FN.useState(null),
    [x, I] = FN.useState("session"),
    k = Ht((q) => q.transcripts),
    D = br().columns - 4,
    P = at("tengu_amber_lynx", !1);
  FN.useEffect(() => {
    async function q() {
      let W = await cb(),
        V = null;
      if (W) V = await pRr();
      A({
        isGit: W,
        gitState: V,
      });
    }
    q();
  }, []);
  let O = FN.useCallback(async () => {
      if ((c("submitting"), _(null), g(null), s === "bundle")) {
        let V = await bDl({
          messages: t,
          description: p,
          surface: "cli",
          scope: x,
          backgroundTasks: o,
          transcripts: k,
          surveyFeedbackSource: a,
        });
        if (V.success) (g(V.bundleId), y(V.zipPath), c("done"));
        else (_(`Couldn't save the feedback bundle to disk: ${V.error}`), c("userInput"));
        return;
      }
      let [q, W] = await Promise.all([
        KSt({
          messages: t,
          description: p,
          surface: "cli",
          scope: x,
          backgroundTasks: o,
          transcripts: k,
          signal: e,
          surveyFeedbackSource: a,
        }),
        P ? Promise.resolve(null) : Okf(p, e),
      ]);
      if ((C(W), q.success)) (g(q.feedbackId), c("done"));
      else {
        if (q.isZdrOrg)
          _(
            "Feedback collection is not available for organizations with custom data retention policies.",
          );
        else if (q.failureReason === "auth_error")
          _("Couldn't send feedback: not signed in. Run /login, then retry.");
        else {
          let V = q.statusCode
            ? ` (server returned ${q.statusCode})`
            : q.failureReason === "timeout"
              ? " (request timed out)"
              : q.failureReason === "network_error"
                ? " (couldn't reach the service)"
                : "";
          _(`Couldn't send feedback${V}. If it keeps failing, you can file at ${HDl} instead.`);
        }
        c("userInput");
      }
    }, [p, t, P, o, k, e, s, x]),
    L = FN.useCallback(() => {
      r("Feedback / bug report cancelled", {
        display: "system",
      });
    }, [r]),
    M = FN.useCallback(() => {
      c("done");
    }, []),
    N = FN.useCallback((q) => {
      (_(q), c("userInput"));
    }, []);
  $r("confirm:no", L, {
    context: "Settings",
    isActive: l === "userInput",
  });
  let B = l === "done" || (b && l !== "userInput");
  function $(q) {
    if (q.ctrl || q.meta) return;
    if (l === "done") {
      if ((q.preventDefault(), s === "share")) return;
      if (!P && q.key === "return" && v) {
        let W = $kf(m ?? "", v, p, dOo());
        ac(W);
      }
      if (b)
        r("Error submitting feedback / bug report", {
          display: "system",
        });
      else if (s === "bundle" && h)
        r(`Feedback bundle saved to \`${h}\``, {
          display: "system",
        });
      else
        r("Feedback / bug report submitted", {
          display: "system",
        });
      return;
    }
    if (b && l !== "userInput") {
      (q.preventDefault(),
        r("Error submitting feedback / bug report", {
          display: "system",
        }));
      return;
    }
    if (l === "consent") {
      if (q.key === "left") {
        (q.preventDefault(), c(s === "share" ? "userInput" : "scope"));
        return;
      }
      if (q.key === "return" || q.key === " ") (q.preventDefault(), O());
    }
  }
  return nl.jsx(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: $,
    children: nl.jsxs(zn, {
      title: "Submit feedback / bug report",
      onCancel: L,
      isCancelActive: l !== "userInput" && !B,
      hideInputGuide: l === "done",
      inputGuide:
        l === "userInput"
          ? nl.jsxs(Tn, {
              children: [
                nl.jsx(ht, {
                  chord: "enter",
                  action: "continue",
                }),
                nl.jsx(mr, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "cancel",
                }),
              ],
            })
          : l === "scope"
            ? nl.jsxs(Tn, {
                children: [
                  nl.jsx(ht, {
                    chord: "enter",
                    action: "choose",
                  }),
                  nl.jsx(mr, {
                    action: "confirm:no",
                    context: "Confirmation",
                    fallback: "Esc",
                    description: "cancel",
                  }),
                ],
              })
            : l === "consent"
              ? nl.jsxs(Tn, {
                  children: [
                    nl.jsx(ht, {
                      chord: "enter",
                      action: $er[s].consentAction,
                    }),
                    nl.jsx(ht, {
                      chord: "left",
                      action: "change",
                    }),
                    nl.jsx(mr, {
                      action: "confirm:no",
                      context: "Confirmation",
                      fallback: "Esc",
                      description: "cancel",
                    }),
                  ],
                })
              : null,
      children: [
        l === "userInput" &&
          nl.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            children: [
              nl.jsx(w, {
                children: "Describe the issue below:",
              }),
              nl.jsx(Ta, {
                value: p,
                onChange: (q) => {
                  if ((f(q), b)) _(null);
                },
                columns: D,
                onSubmit: (q) => {
                  if (s !== "share" && q.trim() === "") {
                    _("Please describe the issue before submitting.");
                    return;
                  }
                  (_(null), c(s === "share" ? "consent" : "scope"));
                },
                onExitMessage: () =>
                  r("Feedback cancelled", {
                    display: "system",
                  }),
                cursorOffset: u,
                onChangeCursorOffset: d,
                showCursor: !0,
              }),
              b &&
                nl.jsxs(U, {
                  flexDirection: "column",
                  gap: 1,
                  children: [
                    nl.jsx(Va, {
                      error: b,
                    }),
                    nl.jsx(w, {
                      dimColor: !0,
                      children: "Edit and press Enter to retry, or Esc to cancel",
                    }),
                  ],
                }),
            ],
          }),
        l === "scope" &&
          nl.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            children: [
              nl.jsx(w, {
                children: "How much session history should we include?",
              }),
              nl.jsx(Sr, {
                options: Mkf,
                defaultFocusValue: x,
                onChange: (q) => {
                  (I(q), c("consent"));
                },
                onCancel: L,
              }),
            ],
          }),
        l === "consent" &&
          nl.jsxs(U, {
            flexDirection: "column",
            children: [
              nl.jsx(w, {
                children: $er[s].consentIntro,
              }),
              nl.jsxs(U, {
                marginLeft: 2,
                flexDirection: "column",
                children: [
                  nl.jsxs(w, {
                    children: [
                      "- Your feedback / bug description:",
                      " ",
                      nl.jsx(w, {
                        dimColor: !0,
                        children: p,
                      }),
                    ],
                  }),
                  nl.jsxs(w, {
                    children: [
                      "- Environment info:",
                      " ",
                      nl.jsxs(w, {
                        dimColor: !0,
                        children: [
                          Oe.platform,
                          ", ",
                          Oe.terminal,
                          ", v",
                          {
                            ISSUES_EXPLAINER:
                              "report the issue at https://github.com/anthropics/claude-code/issues",
                            PACKAGE_URL: "@anthropic-ai/claude-code",
                            README_URL: "https://code.claude.com/docs/en/overview",
                            VERSION: "2.1.195",
                            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                            BUILD_TIME: "2026-06-26T01:00:56Z",
                            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                          }.VERSION,
                        ],
                      }),
                    ],
                  }),
                  s !== "share" &&
                    S.gitState &&
                    nl.jsxs(w, {
                      children: [
                        "- Git repo metadata:",
                        " ",
                        nl.jsxs(w, {
                          dimColor: !0,
                          children: [
                            S.gitState.branchName,
                            S.gitState.commitHash ? `, ${S.gitState.commitHash.slice(0, 7)}` : "",
                            S.gitState.remoteUrl ? ` @ ${S.gitState.remoteUrl}` : "",
                            !S.gitState.isHeadOnRemote && ", not synced",
                            !S.gitState.isClean && ", has local changes",
                          ],
                        }),
                      ],
                    }),
                  nl.jsxs(w, {
                    children: [
                      "- Session transcript:",
                      " ",
                      nl.jsx(w, {
                        dimColor: !0,
                        children: s === "share" ? ADl.session : ADl[x],
                      }),
                    ],
                  }),
                ],
              }),
              nl.jsx(U, {
                marginTop: 1,
                children: nl.jsx(w, {
                  wrap: "wrap",
                  dimColor: !0,
                  children: $er[s].consentFooter,
                }),
              }),
            ],
          }),
        l === "submitting" &&
          nl.jsx(U, {
            flexDirection: "row",
            gap: 1,
            children: nl.jsx(w, {
              children: $er[s].submitting,
            }),
          }),
        l === "done" &&
          s === "bundle" &&
          nl.jsxs(U, {
            flexDirection: "column",
            children: [
              nl.jsxs(w, {
                color: "success",
                children: [
                  nl.jsx(Hs, {
                    status: "success",
                    withSpace: !0,
                  }),
                  "Feedback bundle saved",
                ],
              }),
              h &&
                nl.jsxs(U, {
                  marginTop: 1,
                  flexDirection: "column",
                  children: [
                    nl.jsxs(w, {
                      children: [
                        "Bundle: ",
                        nl.jsx(w, {
                          dimColor: !0,
                          children: h,
                        }),
                      ],
                    }),
                    nl.jsxs(w, {
                      children: [
                        "Reference ID: ",
                        nl.jsx(w, {
                          dimColor: !0,
                          children: m,
                        }),
                      ],
                    }),
                    nl.jsx(U, {
                      marginTop: 1,
                      children: nl.jsx(w, {
                        wrap: "wrap",
                        children:
                          "Send this file to your Anthropic account representative or attach it to your support request.",
                      }),
                    }),
                  ],
                }),
              nl.jsx(U, {
                marginTop: 1,
                children: nl.jsx(w, {
                  dimColor: !0,
                  children: "Press any key to close",
                }),
              }),
            ],
          }),
        l === "done" &&
          s === "post" &&
          (P
            ? nl.jsxs(U, {
                flexDirection: "column",
                children: [
                  b
                    ? nl.jsx(Va, {
                        error: b,
                      })
                    : nl.jsxs(w, {
                        color: "success",
                        children: [
                          nl.jsx(Hs, {
                            status: "success",
                            withSpace: !0,
                          }),
                          "Feedback sent",
                        ],
                      }),
                  m &&
                    nl.jsxs(nl.Fragment, {
                      children: [
                        nl.jsx(U, {
                          marginTop: 1,
                          children: nl.jsxs(w, {
                            children: [
                              "Reference ID: ",
                              nl.jsx(w, {
                                dimColor: !0,
                                children: m,
                              }),
                            ],
                          }),
                        }),
                        nl.jsx(U, {
                          marginTop: 1,
                          children: nl.jsx(w, {
                            wrap: "wrap",
                            children:
                              "If you're working with Anthropic support, please include the ID above.",
                          }),
                        }),
                      ],
                    }),
                  nl.jsx(U, {
                    marginTop: 1,
                    children: nl.jsx(w, {
                      dimColor: !0,
                      italic: !0,
                      children: "Any key to close",
                    }),
                  }),
                ],
              })
            : nl.jsxs(U, {
                flexDirection: "column",
                children: [
                  b
                    ? nl.jsx(Va, {
                        error: b,
                      })
                    : nl.jsx(w, {
                        color: "success",
                        children: "Thank you for your report!",
                      }),
                  m &&
                    nl.jsxs(w, {
                      dimColor: !0,
                      children: ["Feedback ID: ", m],
                    }),
                  nl.jsx(U, {
                    marginTop: 1,
                    children: nl.jsx(w, {
                      dimColor: !0,
                      italic: !0,
                      children: nl.jsxs(Tn, {
                        children: [
                          nl.jsx(ht, {
                            chord: "enter",
                            action: "open GitHub issue",
                          }),
                          nl.jsx(w, {
                            children: "any key to close",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              })),
        null,
      ],
    }),
  });
}
function $kf(e, t, n, r) {
  let o = xc(t),
    i = `**Bug Description**
${xc(n)}

**Environment Info**
- Platform: ${Oe.platform}
- Terminal: ${Oe.terminal}
- Version: ${
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION || "unknown"
    }
- Feedback ID: ${e}

**Errors**
\`\`\`json
`,
    a = "\n```\n",
    l = De(r),
    c = `${HDl}/new?title=${encodeURIComponent(o)}&labels=user-reported,bug&body=`,
    u = `
**Note:** Content was truncated.
`,
    d = encodeURIComponent(i),
    p = encodeURIComponent("\n```\n"),
    f = encodeURIComponent(`
**Note:** Content was truncated.
`),
    m = encodeURIComponent(l),
    g = EDl - c.length - d.length - p.length - f.length;
  if (g <= 0) {
    let S = encodeURIComponent("\u2026"),
      A = 50,
      v = EDl - c.length - S.length - f.length - 50,
      C = i + l + "\n```\n",
      x = encodeURIComponent(C);
    if (x.length > v) {
      x = x.slice(0, v);
      let I = x.lastIndexOf("%");
      if (I >= x.length - 2) x = x.slice(0, I);
    }
    return c + x + S + f;
  }
  if (m.length <= g) return c + d + m + p;
  let h = encodeURIComponent("\u2026"),
    y = 50,
    b = m.slice(0, g - h.length - y),
    _ = b.lastIndexOf("%");
  if (_ >= b.length - 2) b = b.slice(0, _);
  return c + d + b + h + p + f;
}
async function Okf(e, t) {
  try {
    let n = await R$({
        systemPrompt: Sc([
          "Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.",
          "Claude Code is an agentic coding CLI based on the Anthropic API.",
          "The title should:",
          "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title",
          "- Be concise, specific and descriptive of the actual problem",
          "- Use technical terminology appropriate for a software issue",
          '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)',
          "- Be direct and clear for developers to understand the problem",
          '- If you cannot determine a clear issue, use "Bug Report: [brief description]"',
          "- Any LLM API errors are from the Anthropic API, not from any other model provider",
          "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination",
          'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"',
        ]),
        userPrompt: e,
        signal: t,
        options: {
          hasAppendSystemPrompt: !1,
          toolChoice: void 0,
          isNonInteractiveSession: !1,
          agents: [],
          querySource: "feedback",
          mcpTools: [],
          agentContext: of(),
        },
      }),
      r = n.message.content[0]?.type === "text" ? n.message.content[0].text : "Bug Report";
    if (K1(r)) return gOo(e);
    if (Bkf(r)) return gOo(e);
    return r;
  } catch (n) {
    if (lh(n))
      T("Feedback title generation via Haiku aborted, using fallback", {
        level: "debug",
      });
    else ke(n);
    return gOo(e);
  }
}
function Bkf(e) {
  let t = e.trim();
  return t === "" || Nkf.test(t);
}
function gOo(e) {
  let t = Gd(e);
  if (t.length <= 60 && t.length > 5) return t;
  let n = t.slice(0, 60);
  if (t.length > 60) {
    let r = n.lastIndexOf(" ");
    if (r > 30) n = n.slice(0, r);
    n += "...";
  }
  return n.length < 10 ? "Bug Report" : n;
}
var FN,
  nl,
  EDl = 7250,
  HDl = "https://github.com/anthropics/claude-code/issues",
  ADl,
  Mkf,
  $er,
  Nkf;
