// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UAc
// matched 2.1.88 source: src/components/permissions/AskUserQuestionPermissionRequest/QuestionView.tsx
// class=modified  jaccard=0.3171  score=0.4773  fileCov=0.4858
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module UAc] deps: @xmldom/xmldom/lib/entities.js, components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, tools/AskUserQuestionTool/AskUserQuestionTool.tsx, utils/editor.ts, utils/ide.ts, commands/memory/memory.tsx, components/CustomSelect/select.tsx, ink/components/Box.tsx, components/ConfigurableShortcutHint.tsx, components/ScrollKeybindingHandler.tsx, ink/styles.ts, @xmldom/xmldom/lib/entities.js, components/permissions/AskUserQuestionPermissionRequest/PreviewQuestionView.tsx
((I3 = R(rt(), 1)), (eh = R(se(), 1)));
function QuestionView(t0) {
  let t = FAc.c(59),
    {
      question: n,
      questions: r,
      currentQuestionIndex: o,
      answers: s,
      questionStates: i,
      hideSubmitTab: a,
      planFilePath: l,
      minContentWidth: c,
      onUpdateQuestionState: u,
      onAnswer: d,
      onTextInputFocus: p,
      onCancel: f,
      onSubmit: m,
      onTabPrev: g,
      onTabNext: h,
      onRespondToClaude: y,
      onImagePaste: b,
      pastedContents: _,
      onRemoveImage: S,
    } = t0,
    A = a === void 0 ? false : a,
    v = Ht(Gym) === "plan",
    C = Sd(),
    [x, I] = itn.useState(false),
    [k, D] = itn.useState(false),
    P;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
    let we = $q();
    ((P = we ? yk(we) : null), (t[0] = P));
  } else P = t[0];
  let O = P,
    L;
  if (t[1] !== p)
    ((L = (we) => {
      let Ce = we === "__other__";
      (D(Ce), p(Ce));
    }),
      (t[1] = p),
      (t[2] = L));
  else L = t[2];
  let M = L,
    N;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((N = () => {
      I(true);
    }),
      (t[3] = N));
  else N = t[3];
  let B = N,
    $;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    (($ = () => {
      I(false);
    }),
      (t[4] = $));
  else $ = t[4];
  let q = $,
    V = n.options.length + 1 + 1,
    Y;
  if (t[5] !== V || t[6] !== x || t[7] !== k || t[8] !== C || t[9] !== f || t[10] !== y)
    ((Y = (we) => {
      if (!x) {
        if (!C && !k && jK(we.key) === String(V)) (we.preventDefault(), y());
        return;
      }
      if (we.key === "up" || (we.ctrl && we.key === "p")) {
        (we.preventDefault(), q());
        return;
      }
      if (we.key === "return" || jK(we.key) === String(V)) {
        (we.preventDefault(), y());
        return;
      }
      if (we.key === "escape") (we.preventDefault(), f());
    }),
      (t[5] = V),
      (t[6] = x),
      (t[7] = k),
      (t[8] = C),
      (t[9] = f),
      (t[10] = y),
      (t[11] = Y));
  else Y = t[11];
  let z = Y,
    K = n.options.map(jym),
    Z = n.question,
    J = i[Z],
    ne = itn.useRef(null),
    oe;
  if (t[12] !== u || t[13] !== n.multiSelect || t[14] !== Z)
    ((oe = async (we, Ce) => {
      let Ie = await K$(we);
      if (Ie.content !== null && Ie.content !== we)
        (Ce(Ie.content),
          u(
            Z,
            {
              textInputValue: Ie.content,
            },
            n.multiSelect ?? false,
          ));
    }),
      (t[12] = u),
      (t[13] = n.multiSelect),
      (t[14] = Z),
      (t[15] = oe));
  else oe = t[15];
  let re = oe,
    ee = n.multiSelect ? "Type something" : "Type something.",
    ce = J?.textInputValue ?? "",
    ae;
  if (t[16] !== u || t[17] !== n.multiSelect || t[18] !== Z)
    ((ae = (we) => {
      ((ne.current = {
        question: Z,
        value: we,
      }),
        u(
          Z,
          {
            textInputValue: we,
          },
          n.multiSelect ?? false,
        ));
    }),
      (t[16] = u),
      (t[17] = n.multiSelect),
      (t[18] = Z),
      (t[19] = ae));
  else ae = t[19];
  let de;
  if (t[20] !== ae || t[21] !== ee || t[22] !== ce)
    ((de = {
      type: "input",
      value: "__other__",
      label: "Other",
      placeholder: ee,
      initialValue: ce,
      onChange: ae,
    }),
      (t[20] = ae),
      (t[21] = ee),
      (t[22] = ce),
      (t[23] = de));
  else de = t[23];
  let Ee = de,
    me;
  if (t[24] !== C || t[25] !== n.multiSelect)
    ((me =
      C && !n.multiSelect
        ? [
            {
              type: "text",
              value: "__chat__",
              label: "Chat about this",
            },
          ]
        : []),
      (t[24] = C),
      (t[25] = n.multiSelect),
      (t[26] = me));
  else me = t[26];
  let pe = me,
    ge = [...K, Ee, ...pe];
  if (!n.multiSelect && n.options.some(Fym) && !C) {
    let we;
    if (
      t[27] !== s ||
      t[28] !== o ||
      t[29] !== A ||
      t[30] !== c ||
      t[31] !== d ||
      t[32] !== f ||
      t[33] !== y ||
      t[34] !== h ||
      t[35] !== g ||
      t[36] !== p ||
      t[37] !== u ||
      t[38] !== n ||
      t[39] !== i ||
      t[40] !== r
    )
      ((we = w_.jsx(BAc, {
        question: n,
        questions: r,
        currentQuestionIndex: o,
        answers: s,
        questionStates: i,
        hideSubmitTab: A,
        minContentWidth: c,
        onUpdateQuestionState: u,
        onAnswer: d,
        onTextInputFocus: p,
        onCancel: f,
        onTabPrev: g,
        onTabNext: h,
        onRespondToClaude: y,
      })),
        (t[27] = s),
        (t[28] = o),
        (t[29] = A),
        (t[30] = c),
        (t[31] = d),
        (t[32] = f),
        (t[33] = y),
        (t[34] = h),
        (t[35] = g),
        (t[36] = p),
        (t[37] = u),
        (t[38] = n),
        (t[39] = i),
        (t[40] = r),
        (t[41] = we));
    else we = t[41];
    return we;
  }
  let ie;
  if (t[42] !== v || t[43] !== l)
    ((ie =
      v &&
      l &&
      w_.jsxs(U, {
        flexDirection: "column",
        gap: 0,
        children: [
          w_.jsx(qh, {
            color: "inactive",
          }),
          w_.jsxs(w, {
            color: "inactive",
            children: [
              "Planning: ",
              w_.jsx(SN, {
                filePath: l,
              }),
            ],
          }),
        ],
      })),
      (t[42] = v),
      (t[43] = l),
      (t[44] = ie));
  else ie = t[44];
  let le;
  if (t[45] === Symbol.for("react.memo_cache_sentinel"))
    ((le = w_.jsx(qh, {
      color: "inactive",
    })),
      (t[45] = le));
  else le = t[45];
  let He;
  if (t[46] !== s || t[47] !== o || t[48] !== A || t[49] !== r)
    ((He = w_.jsx(XTt, {
      questions: r,
      currentQuestionIndex: o,
      answers: s,
      hideSubmitTab: A,
    })),
      (t[46] = s),
      (t[47] = o),
      (t[48] = A),
      (t[49] = r),
      (t[50] = He));
  else He = t[50];
  let ye;
  if (t[51] !== n.question)
    ((ye = w_.jsx(ZDe, {
      title: n.question,
      color: "text",
    })),
      (t[51] = n.question),
      (t[52] = ye));
  else ye = t[52];
  let ue;
  if (t[53] !== V || t[54] !== x || t[55] !== k || t[56] !== C || t[57] !== r)
    ((ue =
      !C &&
      w_.jsxs(w_.Fragment, {
        children: [
          w_.jsxs(U, {
            flexDirection: "column",
            children: [
              w_.jsx(qh, {
                color: "inactive",
              }),
              w_.jsxs(U, {
                flexDirection: "row",
                gap: 1,
                children: [
                  x
                    ? w_.jsx(w, {
                        color: "suggestion",
                        children: nt.pointer,
                      })
                    : w_.jsx(w, {
                        children: " ",
                      }),
                  w_.jsxs(w, {
                    color: x ? "suggestion" : void 0,
                    children: [V, ". Chat about this"],
                  }),
                ],
              }),
            ],
          }),
          w_.jsx(U, {
            marginTop: 1,
            children: w_.jsx(w, {
              color: "inactive",
              dimColor: true,
              children: w_.jsxs(Tn, {
                children: [
                  w_.jsx(ht, {
                    chord: "enter",
                    action: "select",
                  }),
                  r.length === 1
                    ? w_.jsx(ht, {
                        chord: ["up", "down"],
                        action: "navigate",
                      })
                    : w_.jsx(w, {
                        children: "Tab/Arrow keys to navigate",
                      }),
                  k &&
                    O &&
                    w_.jsx(ht, {
                      chord: "ctrl+g",
                      action: `edit in ${O}`,
                    }),
                  w_.jsx(ht, {
                    chord: "escape",
                    action: "cancel",
                  }),
                ],
              }),
            }),
          }),
        ],
      })),
      (t[53] = V),
      (t[54] = x),
      (t[55] = k),
      (t[56] = C),
      (t[57] = r),
      (t[58] = ue));
  else ue = t[58];
  return w_.jsxs(U, {
    flexDirection: "column",
    marginTop: 0,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: z,
    children: [
      ie,
      le,
      w_.jsxs(U, {
        flexDirection: "column",
        paddingTop: 0,
        children: [
          He,
          ye,
          w_.jsxs(U, {
            flexDirection: "column",
            children: [
              w_.jsx(U, {
                marginTop: 1,
                children: n.multiSelect
                  ? w_.jsx(
                      MOe,
                      {
                        options: ge,
                        defaultValue: i[n.question]?.selectedValue,
                        onChange: (we) => {
                          u(
                            Z,
                            {
                              selectedValue: we,
                            },
                            true,
                          );
                          let Ce = we.includes("__other__")
                              ? ne.current?.question === Z
                                ? ne.current.value
                                : i[Z]?.textInputValue
                              : void 0,
                            Ie = we.filter(Uym).concat(Ce ? [Ce] : []);
                          d(Z, Ie, void 0, false);
                        },
                        onFocus: M,
                        onCancel: f,
                        submitButtonText: o === r.length - 1 ? "Submit" : "Next",
                        onSubmit: m,
                        onDownFromLastItem: B,
                        isDisabled: x,
                        onOpenEditor: re,
                        onImagePaste: b,
                        pastedContents: _,
                        onRemoveImage: S,
                      },
                      n.question,
                    )
                  : w_.jsx(
                      Sr,
                      {
                        options: ge,
                        defaultValue: i[n.question]?.selectedValue,
                        onChange: (we) => {
                          if (we === "__chat__") {
                            y();
                            return;
                          }
                          u(
                            Z,
                            {
                              selectedValue: we,
                            },
                            false,
                          );
                          let Ce = we === "__other__" ? i[Z]?.textInputValue : void 0;
                          d(Z, we, Ce);
                        },
                        onFocus: M,
                        onCancel: f,
                        onDownFromLastItem: B,
                        isDisabled: x,
                        layout: "compact-vertical",
                        onOpenEditor: re,
                        onImagePaste: b,
                        pastedContents: _,
                        onRemoveImage: S,
                      },
                      n.question,
                    ),
              }),
              ue,
            ],
          }),
        ],
      }),
    ],
  });
}
function Uym(e) {
  return e !== "__other__";
}
function Fym(e) {
  return e.preview;
}
function jym(e) {
  return {
    type: "text",
    value: e.label,
    label: e.label,
    description: e.description,
  };
}
function Gym(e) {
  return e.toolPermissionContext.mode;
}
var FAc, itn, w_;
