// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _pr
// matched 2.1.88 source: src/components/permissions/AskUserQuestionPermissionRequest/PreviewQuestionView.tsx
// class=modified  jaccard=0.2504  score=0.4624  fileCov=0.3533
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var _pr = E(() => {
  si();
  _i();
  Tc();
  Ye();
  es();
  Coe();
  ((NAc = R(lt(), 1)), (KTe = R(se(), 1)));
});
function BAc({
  question: e,
  questions: t,
  currentQuestionIndex: n,
  answers: r,
  questionStates: o,
  hideSubmitTab: s = false,
  minContentWidth: i,
  onUpdateQuestionState: a,
  onAnswer: l,
  onTextInputFocus: c,
  onCancel: u,
  onTabPrev: d,
  onTabNext: p,
  onRespondToClaude: f,
}) {
  let [m, g] = I3.useState(false),
    [h, y] = I3.useState(false),
    [b, _] = I3.useState(0),
    S = $q(),
    A = S ? yk(S) : null,
    v = e.question,
    C = o[v],
    x = e.options,
    [I, k] = I3.useState(0),
    D = I3.useRef(v);
  if (D.current !== v) {
    D.current = v;
    let ee = C?.selectedValue,
      ce = ee ? x.findIndex((ae) => ae.label === ee) : -1;
    k(ce >= 0 ? ce : 0);
  }
  let P = x[I],
    O = C?.selectedValue,
    L = C?.textInputValue || "",
    M = I3.useCallback(
      (ee) => {
        let ce = x[ee];
        if (!ce) return;
        (k(ee),
          a(
            v,
            {
              selectedValue: ce.label,
            },
            false,
          ),
          l(v, ce.label));
      },
      [x, v, a, l],
    ),
    N = I3.useCallback(
      (ee) => {
        if (h) return;
        let ce;
        if (typeof ee === "number") ce = ee;
        else if (ee === "up") ce = I > 0 ? I - 1 : I;
        else ce = I < x.length - 1 ? I + 1 : I;
        if (ce >= 0 && ce < x.length) k(ce);
      },
      [I, x.length, h],
    );
  ($r(
    "chat:externalEditor",
    async () => {
      let ee = C?.textInputValue || "",
        ce = await K$(ee);
      if (ce.content !== null && ce.content !== ee)
        a(
          v,
          {
            textInputValue: ce.content,
          },
          false,
        );
    },
    {
      context: "Chat",
      isActive: h && !!S,
    },
  ),
    No(
      {
        "tabs:previous": d,
        "tabs:next": p,
      },
      {
        context: "Tabs",
        isActive: !h && !m,
      },
    ));
  let B = I3.useCallback(() => {
      (y(false), c(false));
    }, [c]),
    $ = I3.useCallback(() => {
      if ((B(), O)) l(v, O);
      else if (L.trim()) l(v, Yvo);
    }, [B, O, L, v, l]),
    q = I3.useCallback(() => {
      g(true);
    }, []),
    W = I3.useCallback(() => {
      g(false);
    }, []),
    V = I3.useCallback(
      (ee) => {
        if (m) {
          if (ee.key === "up" || (ee.ctrl && ee.key === "p")) {
            (ee.preventDefault(), W());
            return;
          }
          if (ee.key === "return") {
            (ee.preventDefault(), f());
            return;
          }
          if (ee.key === "escape") (ee.preventDefault(), u());
          return;
        }
        if (h) {
          if (ee.key === "escape") (ee.preventDefault(), B());
          return;
        }
        if (ee.key === "up" || (ee.ctrl && ee.key === "p")) {
          if ((ee.preventDefault(), I > 0)) N("up");
        } else if (ee.key === "down" || (ee.ctrl && ee.key === "n")) {
          if ((ee.preventDefault(), I === x.length - 1)) q();
          else N("down");
        } else if (ee.key === "return") (ee.preventDefault(), M(I));
        else if (ee.key === "n" && !ee.ctrl && !ee.meta) (ee.preventDefault(), y(true), c(true));
        else if (ee.key === "escape") (ee.preventDefault(), u());
        else if (ee.key.length === 1 && ee.key >= "1" && ee.key <= "9") {
          ee.preventDefault();
          let ce = parseInt(ee.key, 10) - 1;
          if (ce < x.length) N(ce);
        }
      },
      [m, h, I, x.length, W, q, N, M, B, f, u, c],
    ),
    Y = P?.preview || null,
    z = 30,
    K = 4,
    { columns: Z, rows: J } = br(),
    ne = Z - z - K,
    re = Math.max(1, J - 26);
  return eh.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: V,
    children: [
      eh.jsx(qh, {
        color: "inactive",
      }),
      eh.jsxs(U, {
        flexDirection: "column",
        paddingTop: 0,
        children: [
          eh.jsx(XTt, {
            questions: t,
            currentQuestionIndex: n,
            answers: r,
            hideSubmitTab: s,
          }),
          eh.jsx(ZDe, {
            title: e.question,
            color: "text",
          }),
          eh.jsxs(U, {
            flexDirection: "column",
            children: [
              eh.jsxs(U, {
                marginTop: 1,
                flexDirection: "row",
                gap: 4,
                children: [
                  eh.jsx(U, {
                    flexDirection: "column",
                    width: 30,
                    children: x.map((ee, ce) => {
                      let ae = I === ce,
                        de = O === ee.label;
                      return eh.jsxs(
                        U,
                        {
                          flexDirection: "row",
                          children: [
                            ae
                              ? eh.jsx(w, {
                                  color: "suggestion",
                                  children: nt.pointer,
                                })
                              : eh.jsx(w, {
                                  children: " ",
                                }),
                            eh.jsxs(w, {
                              dimColor: true,
                              children: [" ", ce + 1, "."],
                            }),
                            eh.jsxs(w, {
                              color: de ? "success" : ae ? "suggestion" : void 0,
                              bold: ae,
                              children: [" ", ee.label],
                            }),
                            de &&
                              eh.jsxs(w, {
                                color: "success",
                                children: [" ", nt.tick],
                              }),
                          ],
                        },
                        ee.label,
                      );
                    }),
                  }),
                  eh.jsxs(U, {
                    flexDirection: "column",
                    flexGrow: 1,
                    children: [
                      eh.jsx($Ac, {
                        content: Y || "No preview available",
                        maxLines: re,
                        minWidth: i,
                        maxWidth: ne,
                      }),
                      eh.jsxs(U, {
                        marginTop: 1,
                        flexDirection: "row",
                        gap: 1,
                        children: [
                          eh.jsx(w, {
                            color: "suggestion",
                            children: "Notes:",
                          }),
                          h
                            ? eh.jsx(Ta, {
                                value: L,
                                placeholder: "Add notes on this design\u2026",
                                onChange: (ee) => {
                                  a(
                                    v,
                                    {
                                      textInputValue: ee,
                                    },
                                    false,
                                  );
                                },
                                onSubmit: $,
                                onExit: B,
                                focus: true,
                                showCursor: true,
                                columns: 60,
                                cursorOffset: b,
                                onChangeCursorOffset: _,
                                disableEscapeDoublePress: true,
                              })
                            : eh.jsx(w, {
                                dimColor: true,
                                italic: true,
                                children: L || "press n to add notes",
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              eh.jsxs(U, {
                flexDirection: "column",
                marginTop: 1,
                children: [
                  eh.jsx(qh, {
                    color: "inactive",
                  }),
                  eh.jsxs(U, {
                    flexDirection: "row",
                    gap: 1,
                    children: [
                      m
                        ? eh.jsx(w, {
                            color: "suggestion",
                            children: nt.pointer,
                          })
                        : eh.jsx(w, {
                            children: " ",
                          }),
                      eh.jsx(w, {
                        color: m ? "suggestion" : void 0,
                        children: "Chat about this",
                      }),
                    ],
                  }),
                ],
              }),
              eh.jsx(U, {
                marginTop: 1,
                children: eh.jsx(w, {
                  color: "inactive",
                  dimColor: true,
                  children: eh.jsxs(Tn, {
                    children: [
                      eh.jsx(ht, {
                        chord: "enter",
                        action: "select",
                      }),
                      eh.jsx(ht, {
                        chord: ["up", "down"],
                        action: "navigate",
                      }),
                      eh.jsx(ht, {
                        chord: "n",
                        action: "add notes",
                      }),
                      t.length > 1 &&
                        eh.jsx(ht, {
                          chord: "tab",
                          action: "switch questions",
                        }),
                      h &&
                        A &&
                        eh.jsx(ht, {
                          chord: "ctrl+g",
                          action: `edit in ${A}`,
                        }),
                      eh.jsx(ht, {
                        chord: "escape",
                        action: "cancel",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var I3, eh;
