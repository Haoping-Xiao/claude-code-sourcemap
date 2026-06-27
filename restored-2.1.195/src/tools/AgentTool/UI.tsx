// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N8t
// matched 2.1.88 source: src/tools/AgentTool/UI.tsx
// class=modified  jaccard=0.3126  score=0.5524  fileCov=0.4186
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var N8t = E(() => {
  RAe = {
    agentType: "general-purpose",
    whenToUse:
      "General-purpose agent for researching complex questions, searching for code, and executing multi-step tasks. When you are searching for a keyword or file and are not confident that you will find the right match in the first few tries use this agent to perform the search for you.",
    tools: ["*"],
    source: "built-in",
    baseDir: "built-in",
    getSystemPrompt: pif,
  };
});
function r3(e) {
  if (!("message" in e)) return !1;
  let t = e.message;
  return t != null && typeof t === "object" && "type" in t;
}
function wll(e) {
  let t = e.data.message.message.content[0];
  return t?.type === "tool_use" || t?.type === "tool_result";
}
function Cll(e, t, n) {
  if (!r3(e.data)) return null;
  let r = e.data.message;
  if (r.type === "assistant") return U8t(r.message.content[0], t);
  if (r.type === "user") {
    let o = r.message.content[0];
    if (o?.type === "tool_result") {
      let s = n.get(o.tool_use_id);
      if (s) return U8t(s, t);
    }
  }
  return null;
}
function fif(e, t, n) {
  return e
    .filter((l) => r3(l.data) && l.data.message.type !== "user")
    .map((l) => ({
      type: "original",
      message: l,
    }));
  function s(l) {
    if (o && (o.searchCount > 0 || o.readCount > 0 || o.replCount > 0))
      r.push({
        type: "summary",
        searchCount: o.searchCount,
        readCount: o.readCount,
        replCount: o.replCount,
        uuid: `summary-${o.startUuid}`,
        isActive: l,
      });
    o = null;
  }
}
function B8t(e) {
  let t = dKn.c(3),
    { prompt: n, dim: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = ia.jsx(w, {
      color: "success",
      bold: !0,
      children: "Prompt:",
    })),
      (t[0] = o));
  else o = t[0];
  let s;
  if (t[1] !== n)
    ((s = ia.jsxs(U, {
      flexDirection: "column",
      children: [
        o,
        ia.jsx(U, {
          paddingLeft: 2,
          children: ia.jsx(zg, {
            children: n,
          }),
        }),
      ],
    })),
      (t[1] = n),
      (t[2] = s));
  else s = t[2];
  return s;
}
function _Io(e) {
  let t = dKn.c(5),
    { content: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((r = ia.jsx(w, {
      color: "success",
      bold: !0,
      children: "Response:",
    })),
      (t[0] = r));
  else r = t[0];
  let o;
  if (t[1] !== n) ((o = n.map(hif)), (t[1] = n), (t[2] = o));
  else o = t[2];
  let s;
  if (t[3] !== o)
    ((s = ia.jsxs(U, {
      flexDirection: "column",
      children: [r, o],
    })),
      (t[3] = o),
      (t[4] = s));
  else s = t[4];
  return s;
}
function hif(e, t) {
  return ia.jsx(
    U,
    {
      paddingLeft: 2,
      marginTop: t === 0 ? 0 : 1,
      children: ia.jsx(zg, {
        children: e.text,
      }),
    },
    t,
  );
}
function yif(e) {
  let t = dKn.c(15),
    { progressMessages: n, tools: r, verbose: o } = e,
    s;
  if (t[0] !== n) ((s = j8t(n.filter(Sif).map(bif))), (t[0] = n), (t[1] = s));
  else s = t[1];
  let { lookups: i, inProgressToolUseIDs: a } = s,
    l;
  if (t[2] !== i || t[3] !== a || t[4] !== n || t[5] !== r || t[6] !== o) {
    let u = n.filter(_if),
      d;
    if (t[8] !== i || t[9] !== a || t[10] !== r || t[11] !== o)
      ((d = (p) =>
        ia.jsx(
          qn,
          {
            height: 1,
            children: ia.jsx(dQ, {
              message: p.data.message,
              lookups: i,
              addMargin: !1,
              tools: r,
              commands: [],
              verbose: o,
              inProgressToolUseIDs: a,
              progressMessagesForMessage: [],
              shouldAnimate: !1,
              shouldShowDot: !1,
              isTranscriptMode: !1,
              isStatic: !0,
            }),
          },
          p.uuid,
        )),
        (t[8] = i),
        (t[9] = a),
        (t[10] = r),
        (t[11] = o),
        (t[12] = d));
    else d = t[12];
    ((l = u.map(d)), (t[2] = i), (t[3] = a), (t[4] = n), (t[5] = r), (t[6] = o), (t[7] = l));
  } else l = t[7];
  let c;
  if (t[13] !== l)
    ((c = ia.jsx(ia.Fragment, {
      children: l,
    })),
      (t[13] = l),
      (t[14] = c));
  else c = t[14];
  return c;
}
function _if(e) {
  if (!r3(e.data)) return !1;
  let t = e.data.message;
  if (t.type === "user" && t.toolUseResult === void 0) return !1;
  return !0;
}
function bif(e) {
  return e.data;
}
function Sif(e) {
  return r3(e.data);
}
function Ill(e, t, { tools: n, verbose: r, theme: o, isTranscriptMode: s = !1 }) {
  let i = e;
  if (i.status === "remote_launched")
    return ia.jsx(U, {
      flexDirection: "column",
      children: ia.jsx(qn, {
        height: 1,
        children: ia.jsxs(w, {
          children: [
            "Cloud agent launched",
            " ",
            ia.jsxs(w, {
              dimColor: !0,
              children: ["\xB7 ", i.taskId, " \xB7 ", i.sessionUrl],
            }),
          ],
        }),
      }),
    });
  if (e.status === "async_launched") {
    let { prompt: h } = e;
    return ia.jsxs(U, {
      flexDirection: "column",
      children: [
        ia.jsx(qn, {
          height: 1,
          children: ia.jsxs(w, {
            children: [
              "Backgrounded agent",
              !s &&
                ia.jsxs(w, {
                  dimColor: !0,
                  children: [
                    " (",
                    ia.jsxs(Tn, {
                      children: [
                        ia.jsx(ht, {
                          chord: "down",
                          action: "manage",
                        }),
                        h &&
                          ia.jsx(mr, {
                            action: "app:toggleTranscript",
                            context: "Global",
                            fallback: "ctrl+o",
                            description: "expand",
                          }),
                      ],
                    }),
                    ")",
                  ],
                }),
            ],
          }),
        }),
        s &&
          h &&
          ia.jsx(qn, {
            children: ia.jsx(B8t, {
              prompt: h,
              theme: o,
            }),
          }),
      ],
    });
  }
  if (e.status !== "completed") return null;
  let {
      totalDurationMs: a,
      totalToolUseCount: l,
      totalTokens: c,
      usage: u,
      content: d,
      prompt: p,
    } = e,
    m = `Done (${[l === 1 ? "1 tool use" : `${l} tool uses`, ou(c) + " tokens", Yi(a)].join(" \xB7 ")})`,
    g = dE({
      content: m,
      usage: {
        ...u,
        inference_geo: null,
        iterations: null,
        speed: null,
      },
    });
  return ia.jsxs(U, {
    flexDirection: "column",
    children: [
      s &&
        p &&
        ia.jsx(qn, {
          children: ia.jsx(B8t, {
            prompt: p,
            theme: o,
          }),
        }),
      s
        ? ia.jsx(p4t, {
            children: ia.jsx(yif, {
              progressMessages: t,
              tools: n,
              verbose: r,
            }),
          })
        : null,
      s &&
        d &&
        d.length > 0 &&
        ia.jsx(qn, {
          children: ia.jsx(_Io, {
            content: d,
            theme: o,
          }),
        }),
      ia.jsx(qn, {
        height: 1,
        children: ia.jsx(dQ, {
          message: g,
          lookups: LAe,
          addMargin: !1,
          tools: n,
          commands: [],
          verbose: r,
          inProgressToolUseIDs: new Set(),
          progressMessagesForMessage: [],
          shouldAnimate: !1,
          shouldShowDot: !1,
          isTranscriptMode: !1,
          isStatic: !0,
        }),
      }),
      !s &&
        ia.jsxs(w, {
          dimColor: !0,
          children: ["  ", ia.jsx(NI, {})],
        }),
    ],
  });
}
function xll({ description: e, prompt: t }) {
  if (!e || !t) return null;
  return e.replace(/\s+/g, " ").trim();
}
function Eif(e) {
  let t = e?.progressMessages?.findLast(
    (o) => o.data.type === "agent_progress" && typeof o.data.resolvedModel === "string",
  );
  if (t) return t.data.resolvedModel;
  let n = e?.toolUseResult;
  if (!n || typeof n !== "object") return;
  let r = n;
  if (typeof r.resolvedModel === "string") return r.resolvedModel;
  if (r.status === "teammate_spawned" && typeof r.model === "string") return zo(r.model);
  return;
}
function kll(e, t) {
  let n = [];
  if (e.model && e.model !== "inherit") {
    let r = Eif(t);
    if (r) {
      let o = As(),
        s = zo(e.model);
      if (r !== o || s !== r)
        n.push(
          ia.jsx(
            U,
            {
              flexWrap: "nowrap",
              marginLeft: 1,
              children: ia.jsx(w, {
                dimColor: !0,
                children: wp(r),
              }),
            },
            "model",
          ),
        );
    }
  }
  if (n.length === 0) return null;
  return ia.jsx(ia.Fragment, {
    children: n,
  });
}
function KMe(
  e,
  { tools: t, verbose: n, terminalSize: r, inProgressToolCallCount: o, isTranscriptMode: s = !1 },
) {
  if (!e.length)
    return ia.jsx(qn, {
      height: 1,
      children: ia.jsx(w, {
        dimColor: !0,
        children: Tll,
      }),
    });
  let i = (o ?? 1) * mif + gif,
    a = !s && r && r.rows && r.rows < i,
    l = () => {
      let y = On(e, (S) => {
          if (!r3(S.data)) return !1;
          return S.data.message.message.content.some((v) => v.type === "tool_use");
        }),
        b = e.findLast((S) => r3(S.data) && S.data.message.type === "assistant"),
        _ = null;
      if (b?.data.message.type === "assistant") {
        let S = b.data.message.message.usage;
        _ =
          (S.cache_creation_input_tokens ?? 0) +
          (S.cache_read_input_tokens ?? 0) +
          S.input_tokens +
          S.output_tokens;
      }
      return {
        toolUseCount: y,
        tokens: _,
      };
    };
  if (a) {
    let { toolUseCount: y, tokens: b } = l();
    return ia.jsx(qn, {
      height: 1,
      children: ia.jsxs(w, {
        dimColor: !0,
        children: [
          "In progress\u2026 \xB7 ",
          ia.jsx(w, {
            bold: !0,
            children: y,
          }),
          " tool",
          " ",
          y === 1 ? "use" : "uses",
          b && ` \xB7 ${ou(b)} tokens`,
          " \xB7",
          " ",
          ia.jsx(mr, {
            action: "app:toggleTranscript",
            context: "Global",
            fallback: "ctrl+o",
            description: "expand",
            parens: !0,
          }),
        ],
      }),
    });
  }
  let c = fif(e, t, !0),
    u = s ? c : c.slice(-Hll),
    d = s ? [] : c.slice(0, Math.max(0, c.length - Hll)),
    p = On(d, (y) => {
      if (y.type === "summary") return y.searchCount + y.readCount + y.replCount > 0;
      let b = y.message.data;
      if (!r3(b)) return !1;
      return b.message.message.content.some((_) => _.type === "tool_use");
    }),
    f = e[0]?.data,
    m = f && r3(f) ? f.prompt : void 0;
  if (u.length === 0 && !(s && m))
    return ia.jsx(qn, {
      height: 1,
      children: ia.jsx(w, {
        dimColor: !0,
        children: Tll,
      }),
    });
  let { lookups: g, inProgressToolUseIDs: h } = j8t(e.filter((y) => r3(y.data)).map((y) => y.data));
  return ia.jsx(qn, {
    children: ia.jsxs(U, {
      flexDirection: "column",
      children: [
        ia.jsxs(p4t, {
          children: [
            s &&
              m &&
              ia.jsx(U, {
                marginBottom: 1,
                children: ia.jsx(B8t, {
                  prompt: m,
                }),
              }),
            u.map((y) => {
              if (y.type === "summary") {
                let b = pKn(y.searchCount, y.readCount, y.isActive, y.replCount);
                return ia.jsx(
                  U,
                  {
                    height: 1,
                    overflow: "hidden",
                    children: ia.jsx(w, {
                      dimColor: !0,
                      children: b,
                    }),
                  },
                  y.uuid,
                );
              }
              return ia.jsx(
                dQ,
                {
                  message: y.message.data.message,
                  lookups: g,
                  addMargin: !1,
                  tools: t,
                  commands: [],
                  verbose: n,
                  inProgressToolUseIDs: h,
                  progressMessagesForMessage: [],
                  shouldAnimate: !1,
                  shouldShowDot: !1,
                  style: "condensed",
                  isTranscriptMode: !1,
                  isStatic: !0,
                },
                y.message.uuid,
              );
            }),
          ],
        }),
        ia.jsx(d$, {
          count: p,
          unit: "tool use",
          expandable: !0,
        }),
      ],
    }),
  });
}
function Rll(e, { progressMessagesForMessage: t, tools: n, verbose: r, isTranscriptMode: o }) {
  return ia.jsxs(ia.Fragment, {
    children: [
      KMe(t, {
        tools: n,
        verbose: r,
        isTranscriptMode: o,
      }),
      ia.jsx(jpe, {}),
    ],
  });
}
function Lll(e, { progressMessagesForMessage: t, tools: n, verbose: r, isTranscriptMode: o }) {
  return ia.jsxs(ia.Fragment, {
    children: [
      KMe(t, {
        tools: n,
        verbose: r,
        isTranscriptMode: o,
      }),
      ia.jsx(AT, {
        result: e,
        verbose: r,
      }),
    ],
  });
}
function Aif(e) {
  let t = On(e, (o) => {
      if (!r3(o.data)) return !1;
      let s = o.data.message;
      return s.type === "user" && s.message.content.some((i) => i.type === "tool_result");
    }),
    n = e.findLast((o) => r3(o.data) && o.data.message.type === "assistant"),
    r = null;
  if (n?.data.message.type === "assistant") {
    let o = n.data.message.message.usage;
    r =
      (o.cache_creation_input_tokens ?? 0) +
      (o.cache_read_input_tokens ?? 0) +
      o.input_tokens +
      o.output_tokens;
  }
  return {
    toolUseCount: t,
    tokens: r,
  };
}
function Dll(e, t) {
  let { shouldAnimate: n, tools: r, addMargin: o = !0 } = t,
    s = e.map(({ param: p, isResolved: f, isError: m, progressMessages: g, result: h }) => {
      let y = Aif(g),
        b = Hif(g, r),
        _ = EIo().safeParse(p.input),
        S = h?.output?.status === "teammate_spawned",
        A,
        v,
        C,
        x,
        I;
      if (S && _.success && _.data.name) {
        A = `@${_.data.name}`;
        let M = _.data.subagent_type;
        ((v = vll(M) ? M : void 0),
          (I = _.data.description?.replace(/\s+/g, " ").trim() || void 0),
          (x = vll(M) ? JEe(M) : void 0));
      } else
        ((A = _.success ? bIo(_.data) : "Agent"),
          (v = _.success ? _.data.description?.replace(/\s+/g, " ").trim() || void 0 : void 0),
          (C = _.success ? SIo(_.data) : void 0),
          (I = void 0));
      let k = _.success && "run_in_background" in _.data && _.data.run_in_background === !0,
        D = h?.output?.status,
        O = k || D === "async_launched" || D === "remote_launched" || S,
        L = _.success ? _.data.name : void 0;
      return {
        id: p.id,
        agentType: A,
        description: v,
        toolUseCount: y.toolUseCount,
        tokens: y.tokens,
        isResolved: f,
        isError: m,
        isAsync: O,
        color: C,
        descriptionColor: x,
        lastToolInfo: b,
        taskDescription: I,
        name: L,
      };
    }),
    i = e.some((p) => !p.isResolved),
    a = e.some((p) => p.isError),
    l = !i,
    c = s.length > 0 && s.every((p) => p.agentType === s[0]?.agentType),
    u = c && s[0]?.agentType !== "Agent" ? s[0]?.agentType : null,
    d = s.every((p) => p.isAsync);
  return ia.jsxs(U, {
    flexDirection: "column",
    marginTop: o ? 1 : 0,
    children: [
      ia.jsxs(U, {
        flexDirection: "row",
        children: [
          ia.jsx(koe, {
            shouldAnimate: n && i,
            isUnresolved: i,
            isError: a,
          }),
          ia.jsxs(w, {
            children: [
              l
                ? d
                  ? ia.jsxs(ia.Fragment, {
                      children: [
                        ia.jsx(w, {
                          bold: !0,
                          children: e.length,
                        }),
                        " background agents launched",
                        " ",
                        ia.jsx(w, {
                          dimColor: !0,
                          children: ia.jsx(ht, {
                            chord: "down",
                            action: "manage",
                            parens: !0,
                          }),
                        }),
                      ],
                    })
                  : ia.jsxs(ia.Fragment, {
                      children: [
                        ia.jsx(w, {
                          bold: !0,
                          children: e.length,
                        }),
                        " ",
                        u ? `${u} agents` : "agents",
                        " finished",
                      ],
                    })
                : ia.jsxs(ia.Fragment, {
                    children: [
                      "Running ",
                      ia.jsx(w, {
                        bold: !0,
                        children: e.length,
                      }),
                      " ",
                      u ? `${u} agents` : "agents",
                      "\u2026",
                    ],
                  }),
              " ",
            ],
          }),
          !d && ia.jsx(NI, {}),
        ],
      }),
      s.map((p, f) =>
        ia.jsx(
          Bol,
          {
            agentType: p.agentType,
            description: p.description,
            descriptionColor: p.descriptionColor,
            taskDescription: p.taskDescription,
            toolUseCount: p.toolUseCount,
            tokens: p.tokens,
            color: p.color,
            isLast: f === s.length - 1,
            isResolved: p.isResolved,
            isError: p.isError,
            isAsync: p.isAsync,
            shouldAnimate: n,
            lastToolInfo: p.lastToolInfo,
            hideType: c,
            name: p.name,
          },
          p.id,
        ),
      ),
    ],
  });
}
function bIo(e) {
  if (e?.subagent_type && e.subagent_type !== RAe.agentType) {
    if (e.subagent_type === "worker") return "Agent";
    return e.subagent_type;
  }
  return "Agent";
}
function SIo(e) {
  if (!e?.subagent_type) return;
  return JEe(e.subagent_type);
}
function Hif(e, t) {
  let n = new Map();
  for (let i of e) {
    if (!r3(i.data)) continue;
    if (i.data.message.type === "assistant") {
      for (let a of i.data.message.message.content) if (a.type === "tool_use") n.set(a.id, a);
    }
  }
  let r = 0,
    o = 0;
  for (let i = e.length - 1; i >= 0; i--) {
    let a = e[i];
    if (!r3(a.data)) continue;
    if (!wll(a)) continue;
    let l = Cll(a, t, n);
    if (l && (l.isSearch || l.isRead)) {
      if (a.data.message.type === "user") {
        if (l.isSearch) r++;
        else if (l.isRead) o++;
      }
    } else break;
  }
  if (r + o >= 2) return pKn(r, o, !0);
  let s = e.findLast((i) => {
    if (!r3(i.data)) return !1;
    let a = i.data.message;
    return a.type === "user" && a.message.content.some((l) => l.type === "tool_result");
  });
  if (s?.data.message.type === "user") {
    let i = s.data.message.message.content.find((a) => a.type === "tool_result");
    if (i?.type === "tool_result") {
      let a = n.get(i.tool_use_id);
      if (a) {
        let l = _l(t, a.name);
        if (!l) return a.name;
        let c = a.input,
          u = l.inputSchema.safeParse(c),
          d = l.userFacingName(u.success ? u.data : void 0);
        if (l.getToolUseSummary) {
          let p = l.getToolUseSummary(u.success ? u.data : void 0);
          if (p) return `${d}: ${p}`;
        }
        return d;
      }
    }
  }
  return null;
}
function vll(e) {
  return !!e && e !== RAe.agentType && e !== "worker";
}
var dKn,
  ia,
  Hll = 3,
  mif = 9,
  gif = 7,
  Tll = "Initializing\u2026";
