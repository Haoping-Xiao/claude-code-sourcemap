// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DHc
// matched 2.1.88 source: src/components/permissions/PowerShellPermissionRequest/PowerShellPermissionRequest.tsx
// class=modified  jaccard=0.252  score=0.574  fileCov=0.3099
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var DHc = E(() => {
  Omo();
  Mmo();
  sr();
  ZLo();
  bde();
});
function Cpr(e, t, n = {}) {
  switch (e) {
    case "yes":
      return {
        behavior: "allow",
        updatedInput: t.input,
        ...(n.feedback && {
          feedback: n.feedback,
        }),
      };
    case "yes-apply-suggestions": {
      let r = "suggestions" in t.permissionResult ? (t.permissionResult.suggestions ?? []) : [];
      return {
        behavior: "allow",
        updatedInput: t.input,
        permissionUpdates: r,
      };
    }
    case "yes-prefix-edited": {
      let r = (n.editablePrefix ?? "").trim();
      if (!r)
        return {
          behavior: "allow",
          updatedInput: t.input,
        };
      return {
        behavior: "allow",
        updatedInput: t.input,
        permissionUpdates: [
          {
            type: "addRules",
            rules: [
              {
                toolName: Ss,
                ruleContent: r,
              },
            ],
            behavior: "allow",
            destination: "localSettings",
          },
        ],
      };
    }
    case "no":
      return {
        behavior: "deny",
        ...(n.feedback && {
          feedback: n.feedback,
        }),
      };
  }
}
function PHc({ payload: e, answer: t }) {
  let n = Ho(),
    r = e.command,
    o = vpr({
      toolName: e.toolName,
      toolInput: e.input,
      toolDescription: e.description,
    }),
    [s, i] = cx.useState(""),
    [a, l] = cx.useState(""),
    [c, u] = cx.useState(false),
    [d, p] = cx.useState(false),
    [f, m] = cx.useState("yes"),
    [g, h] = cx.useState(false),
    [y, b] = cx.useState(false),
    [_, S] = cx.useState(
      r.includes(`
`)
        ? void 0
        : r,
    ),
    A = cx.useRef(false);
  cx.useEffect(() => {
    let M = false;
    return (
      LHc(r, (N) => pze(N, N.text))
        .then((N) => {
          if (M || A.current) return;
          if (N.length > 0) S(`${N[0]} *`);
        })
        .catch(() => {}),
      () => {
        M = true;
      }
    );
  }, [r]);
  let v = cx.useCallback((M) => {
      ((A.current = true), S(M));
    }, []),
    C = cx.useMemo(() => {
      if (!at("tengu_destructive_command_warning", false)) return null;
      return D$a(r);
    }, [r]),
    x = e.permissionResult.suggestions,
    I = cx.useMemo(
      () =>
        xHc({
          suggestions: x,
          onRejectFeedbackChange: l,
          onAcceptFeedbackChange: i,
          yesInputMode: c,
          noInputMode: d,
          editablePrefix: _,
          onEditablePrefixChange: v,
        }),
      [x, c, d, _, v],
    ),
    k = cx.useMemo(() => Ui(e.toolName), [e.toolName]),
    D = cx.useCallback(
      (M) => {
        if (
          (G("tengu_permission_request_option_selected", {
            option_index: {
              yes: 1,
              "yes-apply-suggestions": 2,
              "yes-prefix-edited": 2,
              no: 3,
            }[M],
          }),
          M === "yes")
        ) {
          let B = s.trim();
          (G("tengu_accept_submitted", {
            toolName: k,
            isMcp: e.isMcp,
            has_instructions: !!B,
            instructions_length: B.length,
            entered_feedback_mode: g,
          }),
            t(
              Cpr("yes", e, {
                feedback: B || void 0,
              }),
            ));
          return;
        }
        if (M === "no") {
          let B = a.trim();
          (G("tengu_reject_submitted", {
            toolName: k,
            isMcp: e.isMcp,
            has_instructions: !!B,
            instructions_length: B.length,
            entered_feedback_mode: y,
          }),
            t(
              Cpr("no", e, {
                feedback: B || void 0,
              }),
            ));
          return;
        }
        if (M === "yes-prefix-edited") {
          t(
            Cpr("yes-prefix-edited", e, {
              editablePrefix: _,
            }),
          );
          return;
        }
        t(Cpr(M, e));
      },
      [t, e, s, a, _, k, g, y],
    ),
    P = cx.useCallback(() => {
      (G("tengu_permission_request_escape", {}),
        n((M) => ({
          ...M,
          attribution: {
            ...M.attribution,
            escapeCount: M.attribution.escapeCount + 1,
          },
        })),
        t({
          behavior: "deny",
        }));
    }, [t, n]),
    O = cx.useCallback(
      (M) => {
        let N = {
          toolName: k,
          isMcp: e.isMcp,
        };
        if (M === "yes") {
          if (c) (u(false), G("tengu_accept_feedback_mode_collapsed", N));
          else (u(true), h(true), G("tengu_accept_feedback_mode_entered", N));
        } else if (M === "no")
          if (d) (p(false), G("tengu_reject_feedback_mode_collapsed", N));
          else (p(true), b(true), G("tengu_reject_feedback_mode_entered", N));
      },
      [c, d, e.isMcp, k],
    ),
    L = cx.useCallback(
      (M) => {
        if (M !== "yes" && c && !s.trim()) u(false);
        if (M !== "no" && d && !a.trim()) p(false);
        m(M);
      },
      [c, d, s, a],
    );
  return qP.jsxs(Lf, {
    title: "PowerShell command",
    requestSource: e.requestSource,
    children: [
      qP.jsxs(U, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1,
        children: [
          qP.jsx(w, {
            dimColor: o.visible,
            children: e.renderedToolUseMessage,
          }),
          !o.visible &&
            qP.jsx(w, {
              dimColor: true,
              children: e.description,
            }),
          qP.jsx(wpr, {
            visible: o.visible,
            promise: o.promise,
          }),
        ],
      }),
      qP.jsxs(U, {
        flexDirection: "column",
        children: [
          qP.jsx(_2, {
            permissionResult: e.permissionResult,
            toolType: "command",
          }),
          C &&
            qP.jsx(U, {
              marginBottom: 1,
              children: qP.jsx(w, {
                color: "warning",
                children: C,
              }),
            }),
          qP.jsx(w, {
            children: "Do you want to proceed?",
          }),
          qP.jsx(Sr, {
            options: I,
            inlineDescriptions: true,
            onChange: D,
            onCancel: P,
            onFocus: L,
            onInputModeToggle: O,
          }),
        ],
      }),
      qP.jsx(U, {
        justifyContent: "space-between",
        marginTop: 1,
        children: qP.jsx(w, {
          dimColor: true,
          children: qP.jsxs(Tn, {
            children: [
              qP.jsx(ht, {
                chord: "escape",
                action: "cancel",
              }),
              ((f === "yes" && !c) || (f === "no" && !d)) &&
                qP.jsx(ht, {
                  chord: "tab",
                  action: "amend",
                }),
              o.enabled &&
                qP.jsx(ht, {
                  chord: o.chord,
                  action: o.visible ? "hide" : "explain",
                }),
            ],
          }),
        }),
      }),
    ],
  });
}
var cx, qP;
