// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ngc
// matched 2.1.88 source: src/components/MessageSelector.tsx
// class=modified  jaccard=0.3721  score=0.5486  fileCov=0.5363
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: selectableUserMessagesFilter, replayableUserMessagesFilter, messagesAfterAreOnlySynthetic, MessageSelector
// [unwrapped __esm module Ngc] deps: services/analytics/index.ts, services/analytics/index.ts, utils/config.ts, QXn, utils/swarm/constants.ts, bridge/codeSessionApi.ts, bridge/trustedDevice.ts, @anthropic-ai/sdk/internal/detect-platform.mjs, constants/systemPromptSections.ts, utils/sessionStorage.ts, context/notifications.tsx, hooks/useTerminalSize.ts, utils/claudeInChrome/common.ts, utils/toolSearch.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, services/analytics/growthbook.ts, utils/debug.ts, services/mcp/auth.ts, tools/McpAuthTool/McpAuthTool.ts, services/mcp/config.ts, commands/mcp/mcp.tsx, context/fpsMetrics.tsx, context/notifications.tsx, tools/BashTool/UI.tsx, tasks/InProcessTeammateTask/InProcessTeammateTask.tsx, tools/AgentTool/agentColorManager.ts, utils/debugFilter.ts, utils/concurrentSessions.ts, utils/config.ts, utils/fsOperations.ts, utils/debug.ts, utils/git.ts, utils/errors.ts, utils/modelCost.ts, services/api/claude.ts, utils/sequential.ts, utils/messageQueueManager.ts, utils/crypto.ts, utils/messages.ts, utils/agentContext.ts, utils/model/model.ts, utils/permissions/PermissionMode.ts, utils/markdownConfigLoader.ts, fast-xml-parser/lib/fxp.cjs, utils/stats.ts, utils/plans.ts, q8t, tools/BashTool/shouldUseSandbox.ts, utils/plugins/pluginPolicy.ts
((bE = R(rt(), 1)), (Dme = R(se(), 1)));
$gc = Promise.resolve();
function isSummarizeOption(option) {
  return option === "summarize" || option === "summarize_up_to";
}
function MessageSelector({
  messages: e,
  onPreRestore: t,
  onRestoreMessage: n,
  onRestoreCode: r,
  onSummarize: o,
  onClose: s,
  preselectedMessage: i,
  onResumePreviousSession: a,
  parentSessionId: l,
}) {
  let c = Ht((ie) => ie.fileHistory),
    [u, d] = GT.useState(void 0),
    p = K_(),
    { rows: f } = br(),
    m = Ns() ? Math.floor(f / 2) : f,
    g = p ? 3 : 2,
    h = 12,
    y = Math.max(2, Math.floor((m - 12) / g)),
    b = GT.useMemo(W8o.randomUUID, []),
    _ = GT.useMemo(W8o.randomUUID, []),
    S = !!a,
    A = GT.useMemo(
      () => [
        ...(S
          ? [
              {
                ...Rn({
                  content: "",
                }),
                uuid: _,
              },
            ]
          : []),
        ...e.filter(Qoe),
        {
          ...Rn({
            content: "",
          }),
          uuid: b,
        },
      ],
      [e, b, _, S],
    ),
    [v, C] = GT.useState(A.length - 1),
    x = Math.max(0, Math.min(v - Math.floor(y / 2), A.length - y)),
    I = x + y,
    k = A.length > 1,
    [D, P] = GT.useState(i),
    [O, L] = GT.useState(void 0);
  GT.useEffect(() => {
    if (!i || !p) return;
    let ie = false;
    return (
      yht(c, i.uuid).then((le) => {
        if (!ie) L(le);
      }),
      () => {
        ie = true;
      }
    );
  }, [i, p, c]);
  let [M, N] = GT.useState(false),
    [B, $] = GT.useState(null),
    [q, W] = GT.useState("both"),
    [V, Y] = GT.useState(""),
    [z, K] = GT.useState("");
  function Z(ie) {
    let le = ie
        ? [
            {
              value: "both",
              label: "Restore code and conversation",
            },
            {
              value: "conversation",
              label: "Restore conversation",
            },
            {
              value: "code",
              label: "Restore code",
            },
          ]
        : [
            {
              value: "conversation",
              label: "Restore conversation",
            },
          ],
      He = {
        type: "input",
        placeholder: "add context (optional)",
        initialValue: "",
        allowEmptySubmitToCancel: true,
        showLabelWithValue: true,
        labelValueSeparator: ": ",
      };
    return (
      le.push({
        value: "summarize",
        label: "Summarize from here",
        ...He,
        onChange: Y,
      }),
      le.push({
        value: "summarize_up_to",
        label: "Summarize up to here",
        ...He,
        onChange: K,
      }),
      le.push({
        value: "nevermind",
        label: "Never mind",
      }),
      le
    );
  }
  GT.useEffect(() => {
    G("tengu_message_selector_opened", {});
  }, []);
  async function J(ie) {
    (t(), N(true));
    try {
      (await n(ie), N(false), s());
    } catch (le) {
      (ke(le),
        N(false),
        d(`Failed to restore the conversation:
${le}`));
    }
  }
  async function ne(ie) {
    if (ie.uuid === _) {
      (t(), s(), a?.());
      return;
    }
    let le = e.indexOf(ie),
      He = e.length - 1 - le;
    if (
      (G("tengu_message_selector_selected", {
        index_from_end: He,
        message_type: $e(ie.type),
        is_current_prompt: false,
      }),
      !e.includes(ie))
    ) {
      s();
      return;
    }
    if (!p) {
      await J(ie);
      return;
    }
    let ye = await yht(c, ie.uuid);
    (P(ie), L(ye));
  }
  async function oe(ie) {
    if (
      (G("tengu_message_selector_restore_option_selected", {
        option: $e(ie),
      }),
      !D)
    ) {
      d("Message not found.");
      return;
    }
    if (ie === "nevermind") {
      if (i) s();
      else P(void 0);
      return;
    }
    if (isSummarizeOption(ie)) {
      (t(), N(true), $(ie), d(void 0));
      try {
        let ye = ie === "summarize_up_to" ? "up_to" : "from",
          ue = (ye === "up_to" ? z : V).trim() || void 0;
        (await o(D, ue, ye), N(false), $(null), P(void 0), s());
      } catch (ye) {
        if (!(ye instanceof Tq)) ke(ye);
        (N(false),
          $(null),
          P(void 0),
          d(`Failed to summarize:
${ye}`));
      }
      return;
    }
    (t(), N(true), d(void 0));
    let le = null,
      He = null;
    if (ie === "code" || ie === "both")
      try {
        await r(D);
      } catch (ye) {
        ((le = ye), ke(le));
      }
    if (ie === "conversation" || ie === "both")
      try {
        await n(D);
      } catch (ye) {
        ((He = ye), ke(He));
      }
    if ((N(false), P(void 0), He && le))
      d(`Failed to restore the conversation and code:
${He}
${le}`);
    else if (He)
      d(`Failed to restore the conversation:
${He}`);
    else if (le)
      d(`Failed to restore the code:
${le}`);
    else s();
  }
  let re = GT.useCallback(() => {
      if (D && !i) {
        P(void 0);
        return;
      }
      (G("tengu_message_selector_cancelled", {}), s());
    }, [s, D, i]),
    ee = GT.useCallback(() => C((ie) => Math.max(0, ie - 1)), []),
    ce = GT.useCallback(() => C((ie) => Math.min(A.length - 1, ie + 1)), [A.length]),
    ae = GT.useCallback(() => C(0), []),
    de = GT.useCallback(() => C(A.length - 1), [A.length]),
    Ee = GT.useCallback(() => {
      let ie = A[v];
      if (ie) ne(ie);
    }, [A, v, ne]);
  (ig(void 0, void 0, !!D),
    No(
      {
        "messageSelector:up": ee,
        "messageSelector:down": ce,
        "messageSelector:top": ae,
        "messageSelector:bottom": de,
        "messageSelector:select": Ee,
      },
      {
        context: "MessageSelector",
        isActive: !M && !u && !D && k,
      },
    ));
  let [me, pe] = GT.useState({});
  GT.useEffect(() => {
    async function ie() {
      if (!p) return;
      Promise.all(
        A.map(async (le, He) => {
          if (le.uuid !== b && le.uuid !== _) {
            let ye = KVt(c, le.uuid),
              ue = A.at(He + 1),
              we = ye ? Wum(e, le.uuid, ue?.uuid !== b ? ue?.uuid : void 0) : void 0;
            if (we !== void 0)
              pe((Ce) => ({
                ...Ce,
                [He]: we,
              }));
            else
              pe((Ce) => ({
                ...Ce,
                [He]: void 0,
              }));
          }
        }),
      );
    }
    ie();
  }, [A, e, b, _, c, p]);
  let ge = p && O?.filesChanged && O.filesChanged.length > 0,
    he = !u && !D && !i && k;
  return ul.jsxs(zn, {
    title: "Rewind",
    color: "suggestion",
    onCancel: re,
    isCancelActive: !D,
    hideInputGuide: !!D,
    inputGuide: ul.jsxs(Tn, {
      children: [
        !u &&
          k &&
          ul.jsx(ht, {
            chord: "enter",
            action: "continue",
          }),
        ul.jsx(ht, {
          chord: "escape",
          action: "cancel",
        }),
      ],
    }),
    children: [
      ul.jsx(Va, {
        error: u,
      }),
      !k &&
        ul.jsx(Fl, {
          children: "Nothing to rewind to yet.",
        }),
      !u &&
        D &&
        k &&
        ul.jsxs(ul.Fragment, {
          children: [
            ul.jsxs(w, {
              children: [
                "Confirm you want to restore",
                " ",
                !O && "the conversation ",
                "to the point before you sent this message:",
              ],
            }),
            ul.jsxs(U, {
              flexDirection: "column",
              paddingLeft: 1,
              borderStyle: "single",
              borderRight: false,
              borderTop: false,
              borderBottom: false,
              borderLeft: true,
              borderLeftDimColor: true,
              children: [
                ul.jsx(UserMessageOption, {
                  userMessage: D,
                  color: "text",
                  isCurrent: false,
                }),
                ul.jsxs(w, {
                  dimColor: true,
                  children: ["(", WK(new Date(D.timestamp)), ")"],
                }),
              ],
            }),
            ul.jsx(jum, {
              selectedRestoreOption: q,
              canRestoreCode: !!ge,
              diffStatsForRestore: O,
            }),
            M && isSummarizeOption(B)
              ? ul.jsxs(U, {
                  flexDirection: "row",
                  gap: 1,
                  children: [
                    ul.jsx(Vu, {}),
                    ul.jsx(w, {
                      children: "Summarizing\u2026",
                    }),
                  ],
                })
              : ul.jsx(Sr, {
                  isDisabled: M,
                  options: Z(!!ge),
                  defaultFocusValue: ge ? "both" : "conversation",
                  onFocus: (ie) => W(ie),
                  onChange: (ie) => oe(ie),
                  onCancel: () => (i ? s() : P(void 0)),
                }),
            ge &&
              ul.jsx(U, {
                marginBottom: 1,
                children: ul.jsxs(w, {
                  dimColor: true,
                  children: [
                    nt.warning,
                    " Rewinding does not affect files edited manually or via bash.",
                  ],
                }),
              }),
          ],
        }),
      he &&
        ul.jsxs(ul.Fragment, {
          children: [
            p
              ? ul.jsx(w, {
                  children: "Restore the code and/or conversation to the point before\u2026",
                })
              : ul.jsx(w, {
                  children: "Restore and fork the conversation to the point before\u2026",
                }),
            x > 0 &&
              ul.jsx(U, {
                paddingLeft: 1,
                children: ul.jsxs(w, {
                  dimColor: true,
                  children: [nt.arrowUp, " ", x, " more above"],
                }),
              }),
            ul.jsx(U, {
              width: "100%",
              flexDirection: "column",
              children: A.slice(x, I).map((ie, le) => {
                let He = x + le,
                  ye = He === v,
                  ue = ie.uuid === b,
                  we = ie.uuid === _,
                  Ce = He in me,
                  Ie = me[He],
                  Ve = Ie?.filesChanged && Ie.filesChanged.length;
                return ul.jsxs(
                  U,
                  {
                    height: p ? 3 : 2,
                    overflow: "hidden",
                    width: "100%",
                    flexDirection: "row",
                    children: [
                      ul.jsx(U, {
                        width: 2,
                        minWidth: 2,
                        children: ye
                          ? ul.jsxs(w, {
                              color: "permission",
                              bold: true,
                              children: [nt.pointer, " "],
                            })
                          : ul.jsx(w, {
                              children: "  ",
                            }),
                      }),
                      ul.jsxs(U, {
                        flexDirection: "column",
                        children: [
                          ul.jsx(U, {
                            flexShrink: 1,
                            height: 1,
                            overflow: "hidden",
                            children: we
                              ? ul.jsx(U, {
                                  width: "100%",
                                  children: ul.jsxs(w, {
                                    color: ye ? "suggestion" : void 0,
                                    children: ["/resume ", l, " (previous session)"],
                                  }),
                                })
                              : ul.jsx(UserMessageOption, {
                                  userMessage: ie,
                                  color: ye ? "suggestion" : void 0,
                                  isCurrent: ue,
                                  paddingRight: 10,
                                }),
                          }),
                          p &&
                            Ce &&
                            ul.jsx(U, {
                              height: 1,
                              flexDirection: "row",
                              children: Ie
                                ? ul.jsx(ul.Fragment, {
                                    children: ul.jsx(w, {
                                      dimColor: !ye,
                                      color: "inactive",
                                      children: Ve
                                        ? ul.jsxs(ul.Fragment, {
                                            children: [
                                              Ve === 1 && Ie.filesChanged[0]
                                                ? `${vTt.basename(Ie.filesChanged[0])} `
                                                : `${Ve} files changed `,
                                              ul.jsx(d5, {
                                                added: Ie.insertions,
                                                removed: Ie.deletions,
                                              }),
                                            ],
                                          })
                                        : ul.jsx(ul.Fragment, {
                                            children: "No code changes",
                                          }),
                                    }),
                                  })
                                : ul.jsxs(w, {
                                    dimColor: true,
                                    color: "warning",
                                    children: [nt.warning, " No code restore"],
                                  }),
                            }),
                        ],
                      }),
                    ],
                  },
                  ie.uuid,
                );
              }),
            }),
            I < A.length &&
              ul.jsx(U, {
                paddingLeft: 1,
                children: ul.jsxs(w, {
                  dimColor: true,
                  children: [nt.arrowDown, " ", A.length - I, " ", "more below"],
                }),
              }),
          ],
        }),
    ],
  });
}
function getRestoreOptionConversationText(option) {
  switch (option) {
    case "summarize":
      return "Messages after this point will be summarized.";
    case "summarize_up_to":
      return "Preceding messages will be summarized. This and subsequent messages will remain unchanged \u2014 you will stay at the end of the conversation.";
    case "both":
    case "conversation":
      return "The conversation will be forked.";
    case "code":
    case "nevermind":
      return "The conversation will be unchanged.";
  }
}
function jum(e) {
  let t = Mur.c(11),
    { selectedRestoreOption: n, canRestoreCode: r, diffStatsForRestore: o } = e,
    s = r && (n === "both" || n === "code"),
    i;
  if (t[0] !== n) ((i = getRestoreOptionConversationText(n)), (t[0] = n), (t[1] = i));
  else i = t[1];
  let a;
  if (t[2] !== i)
    ((a = ul.jsx(w, {
      dimColor: true,
      children: i,
    })),
      (t[2] = i),
      (t[3] = a));
  else a = t[3];
  let l;
  if (t[4] !== o || t[5] !== n || t[6] !== s)
    ((l =
      !isSummarizeOption(n) &&
      (s
        ? ul.jsx(RestoreCodeConfirmation, {
            diffStatsForRestore: o,
          })
        : ul.jsx(w, {
            dimColor: true,
            children: "The code will be unchanged.",
          }))),
      (t[4] = o),
      (t[5] = n),
      (t[6] = s),
      (t[7] = l));
  else l = t[7];
  let c;
  if (t[8] !== a || t[9] !== l)
    ((c = ul.jsxs(U, {
      flexDirection: "column",
      children: [a, l],
    })),
      (t[8] = a),
      (t[9] = l),
      (t[10] = c));
  else c = t[10];
  return c;
}
function RestoreCodeConfirmation(t0) {
  let t = Mur.c(15),
    { diffStatsForRestore: n } = t0;
  if (n === void 0) return;
  if (!n.filesChanged || !n.filesChanged[0]) {
    let a;
    if (t[0] === Symbol.for("react.memo_cache_sentinel"))
      ((a = ul.jsx(w, {
        dimColor: true,
        children: "The code has not changed (nothing will be restored).",
      })),
        (t[0] = a));
    else a = t[0];
    return a;
  }
  let r = n.filesChanged.length,
    o;
  if (r === 1) {
    let a;
    if (t[1] !== n.filesChanged[0])
      ((a = vTt.basename(n.filesChanged[0] || "")), (t[1] = n.filesChanged[0]), (t[2] = a));
    else a = t[2];
    o = a;
  } else if (r === 2) {
    let a;
    if (t[3] !== n.filesChanged[0])
      ((a = vTt.basename(n.filesChanged[0] || "")), (t[3] = n.filesChanged[0]), (t[4] = a));
    else a = t[4];
    let l = a,
      c;
    if (t[5] !== n.filesChanged[1])
      ((c = vTt.basename(n.filesChanged[1] || "")), (t[5] = n.filesChanged[1]), (t[6] = c));
    else c = t[6];
    o = `${l} and ${c}`;
  } else {
    let a;
    if (t[7] !== n.filesChanged[0])
      ((a = vTt.basename(n.filesChanged[0] || "")), (t[7] = n.filesChanged[0]), (t[8] = a));
    else a = t[8];
    o = `${a} and ${n.filesChanged.length - 1} other files`;
  }
  let s;
  if (t[9] !== n.deletions || t[10] !== n.insertions)
    ((s = ul.jsx(d5, {
      added: n.insertions,
      removed: n.deletions,
    })),
      (t[9] = n.deletions),
      (t[10] = n.insertions),
      (t[11] = s));
  else s = t[11];
  let i;
  if (t[12] !== o || t[13] !== s)
    ((i = ul.jsx(ul.Fragment, {
      children: ul.jsxs(w, {
        dimColor: true,
        children: ["The code will be restored", " ", s, " ", "in ", o, "."],
      }),
    })),
      (t[12] = o),
      (t[13] = s),
      (t[14] = i));
  else i = t[14];
  return i;
}
function UserMessageOption(t0) {
  let t = Mur.c(30),
    { userMessage: n, color: r, dimColor: o, isCurrent: s, paddingRight: i } = t0,
    { columns: a } = br();
  if (s) {
    let b;
    if (t[0] !== r || t[1] !== o)
      ((b = ul.jsx(U, {
        width: "100%",
        children: ul.jsx(w, {
          italic: true,
          color: r,
          dimColor: o,
          children: "(current)",
        }),
      })),
        (t[0] = r),
        (t[1] = o),
        (t[2] = b));
    else b = t[2];
    return b;
  }
  let l, c, u, d, p, f, m, g;
  if (t[3] !== r || t[4] !== a || t[5] !== o || t[6] !== i || t[7] !== n) {
    g = Symbol.for("react.early_return_sentinel");
    e: {
      let b = P$(n)?.trim() || "(no prompt)",
        _ = Apn(b);
      if (kzn(_)) {
        let S;
        if (t[16] !== r || t[17] !== o)
          ((S = ul.jsx(U, {
            flexDirection: "row",
            width: "100%",
            children: ul.jsx(w, {
              italic: true,
              color: r,
              dimColor: o,
              children: "((empty message))",
            }),
          })),
            (t[16] = r),
            (t[17] = o),
            (t[18] = S));
        else S = t[18];
        g = S;
        break e;
      }
      if (_.includes("<bash-input>")) {
        let S = xl(_, "bash-input");
        if (S) {
          let A;
          if (t[19] === Symbol.for("react.memo_cache_sentinel"))
            ((A = ul.jsx(w, {
              color: "bashBorder",
              children: "!",
            })),
              (t[19] = A));
          else A = t[19];
          g = ul.jsxs(U, {
            flexDirection: "row",
            width: "100%",
            children: [
              A,
              ul.jsxs(w, {
                color: r,
                dimColor: o,
                children: [" ", S],
              }),
            ],
          });
          break e;
        }
      }
      if (_.includes(`<${zC}>`)) {
        let S = xl(_, zC),
          A = xl(_, "command-args"),
          v = xl(_, "skill-format") === "true";
        if (S)
          if (v) {
            g = ul.jsx(U, {
              flexDirection: "row",
              width: "100%",
              children: ul.jsxs(w, {
                color: r,
                dimColor: o,
                children: ["Skill(", S, ")"],
              }),
            });
            break e;
          } else {
            g = ul.jsx(U, {
              flexDirection: "row",
              width: "100%",
              children: ul.jsxs(w, {
                color: r,
                dimColor: o,
                children: ["/", S, " ", A],
              }),
            });
            break e;
          }
      }
      ((c = U),
        (f = "row"),
        (m = "100%"),
        (l = w),
        (u = r),
        (d = o),
        (p = i
          ? $a(_, a - i, true)
          : _.slice(0, 500)
              .split(
                `
`,
              )
              .slice(0, 4).join(`
`)));
    }
    ((t[3] = r),
      (t[4] = a),
      (t[5] = o),
      (t[6] = i),
      (t[7] = n),
      (t[8] = l),
      (t[9] = c),
      (t[10] = u),
      (t[11] = d),
      (t[12] = p),
      (t[13] = f),
      (t[14] = m),
      (t[15] = g));
  } else
    ((l = t[8]),
      (c = t[9]),
      (u = t[10]),
      (d = t[11]),
      (p = t[12]),
      (f = t[13]),
      (m = t[14]),
      (g = t[15]));
  if (g !== Symbol.for("react.early_return_sentinel")) return g;
  let h;
  if (t[20] !== l || t[21] !== u || t[22] !== d || t[23] !== p)
    ((h = ul.jsx(l, {
      color: u,
      dimColor: d,
      children: p,
    })),
      (t[20] = l),
      (t[21] = u),
      (t[22] = d),
      (t[23] = p),
      (t[24] = h));
  else h = t[24];
  let y;
  if (t[25] !== c || t[26] !== f || t[27] !== m || t[28] !== h)
    ((y = ul.jsx(c, {
      flexDirection: f,
      width: m,
      children: h,
    })),
      (t[25] = c),
      (t[26] = f),
      (t[27] = m),
      (t[28] = h),
      (t[29] = y));
  else y = t[29];
  return y;
}
function Wum(e, t, n) {
  let r = e.findIndex((l) => l.uuid === t);
  if (r === -1) return;
  let o = n ? e.findIndex((l) => l.uuid === n) : e.length;
  if (o === -1) o = e.length;
  let s = [],
    i = 0,
    a = 0;
  for (let l = r + 1; l < o; l++) {
    let c = e[l];
    if (!c || !Sht(c)) continue;
    let u = c.toolUseResult;
    if (!u || !u.filePath || !u.structuredPatch) continue;
    if (!s.includes(u.filePath)) s.push(u.filePath);
    try {
      if ("type" in u && u.type === "create") i += u.content.split(/\r?\n/).length;
      else
        for (let d of u.structuredPatch) {
          let p = On(d.lines, (m) => m.startsWith("+")),
            f = On(d.lines, (m) => m.startsWith("-"));
          ((i += p), (a += f));
        }
    } catch {
      continue;
    }
  }
  return {
    filesChanged: s,
    insertions: i,
    deletions: a,
  };
}
function messagesAfterAreOnlySynthetic(messages, fromIndex) {
  for (let n = fromIndex + 1; n < messages.length; n++) {
    let r = messages[n];
    if (!r) continue;
    if (KAe(r)) continue;
    if (Sht(r)) continue;
    if (r.type === "progress") continue;
    if (r.type === "system") continue;
    if (r.type === "attachment") continue;
    if (r.type === "user" && r.isMeta) continue;
    if (r.type === "assistant") {
      let o = r.message.content;
      if (Array.isArray(o)) {
        if (o.some((i) => (i.type === "text" && i.text?.trim()) || i.type === "tool_use"))
          return false;
      }
      continue;
    }
    if (r.type === "user") return false;
  }
  return true;
}
var Mur, W8o, vTt, GT, ul;
