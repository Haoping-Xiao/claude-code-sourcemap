// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eKo
// matched 2.1.88 source: src/components/permissions/BashPermissionRequest/BashPermissionRequest.tsx
// class=modified  jaccard=0.2431  score=0.4588  fileCov=0.3408
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eKo] deps: hooks/useTerminalSize.ts, commander/lib/command.js, utils/suggestions/directoryCompletion.ts, utils/debug.ts, utils/permissions/permissionExplainer.ts, components/PromptInput/ShimmeredInput.tsx, components/Spinner/useStalledAnimation.ts
((ctn = R(lt(), 1)), (tie = R(rt(), 1)), (WP = R(se(), 1)));
function ClassifierCheckingSubtitle() {
  let e = aHc.c(6),
    [t, n] = BVt("requesting", CHECKING_TEXT, false),
    r;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) ((r = [...CHECKING_TEXT]), (e[0] = r));
  else r = e[0];
  let o;
  if (e[1] !== n)
    ((o = PC.jsx(w, {
      children: r.map((i, a) =>
        PC.jsx(
          OGe,
          {
            char: i,
            index: a,
            glimmerIndex: n,
            messageColor: "inactive",
            shimmerColor: "subtle",
          },
          a,
        ),
      ),
    })),
      (e[1] = n),
      (e[2] = o));
  else o = e[2];
  let s;
  if (e[3] !== t || e[4] !== o)
    ((s = PC.jsx(U, {
      ref: t,
      children: o,
    })),
      (e[3] = t),
      (e[4] = o),
      (e[5] = s));
  else s = e[5];
  return s;
}
function utn(e, t, n = {}) {
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
                toolName: Co,
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
  return {
    behavior: "allow",
    updatedInput: t.input,
  };
}
function BashPermissionRequestInner({ payload: toolUseConfirm, answer: t }) {
  let n = Ho(),
    r = toolUseConfirm.command,
    o = toolUseConfirm.permissionResult.decisionReason,
    s = toolUseConfirm.permissionResult.suggestions ?? [],
    explainerState = vpr({
      toolName: toolUseConfirm.toolName,
      toolInput: toolUseConfirm.input,
      toolDescription: toolUseConfirm.description,
    }),
    [a, l] = UH.useState(""),
    [c, u] = UH.useState(""),
    [d, p] = UH.useState(false),
    [f, m] = UH.useState(false),
    [g, h] = UH.useState("yes"),
    [y, b] = UH.useState(false),
    [_, S] = UH.useState(false),
    A =
      typeof toolUseConfirm.input.description === "string"
        ? Yv(toolUseConfirm.input.description)
        : "",
    [v, C] = UH.useState(A),
    [x, I] = UH.useState(!A.trim());
  UH.useEffect(() => {
    if (!SLe()) return;
    let ne = new AbortController();
    return (
      Bca(r, A, ne.signal)
        .then((oe) => {
          if (oe && !ne.signal.aborted) (C(oe), I(false));
        })
        .catch(() => {}),
      () => ne.abort()
    );
  }, [r, A]);
  let k = o?.type === "subcommandResults",
    [D, P] = UH.useState(() => {
      if (k) {
        let re = Jjt(s).filter((ee) => ee.toolName === Co && ee.ruleContent);
        return re.length === 1 ? re[0].ruleContent : void 0;
      }
      let ne = tQn(r);
      if (ne) return `${ne} *`;
      let oe = UCl(r);
      if (oe) return `${oe} *`;
      return r;
    }),
    O = UH.useRef(false),
    L = UH.useCallback((ne) => {
      ((O.current = true), P(ne));
    }, []);
  UH.useEffect(() => {
    if (k) return;
    let ne = false;
    return (
      jPa(r, () => false)
        .then(async (oe) => {
          if (ne || O.current) return;
          if (oe.length === 0 || !oe[0]) return;
          let re = await Nmo(r, oe[0]);
          if (ne || O.current) return;
          if (!BCl(re)) P(`${oe[0]} *`);
        })
        .catch(() => {}),
      () => {
        ne = true;
      }
    );
  }, [r, k]);
  let {
      destructiveWarning: M,
      sandboxingEnabled: N,
      isSandboxed: B,
    } = UH.useMemo(() => {
      let ne = at("tengu_destructive_command_warning", false) ? Z1i(r) : null,
        oe = xo.isSandboxingEnabled(),
        re = oe && N$(toolUseConfirm.input);
      return {
        destructiveWarning: ne,
        sandboxingEnabled: oe,
        isSandboxed: re,
      };
    }, [r, toolUseConfirm.input]),
    { offered: $, enableAutoMode: q } = Hpr(toolUseConfirm.requestSource),
    W = UH.useMemo(
      () =>
        eHc({
          suggestions: s,
          decisionReason: o,
          onRejectFeedbackChange: u,
          onAcceptFeedbackChange: l,
          onClassifierDescriptionChange: C,
          classifierDescription: v,
          initialClassifierDescriptionEmpty: x,
          existingAllowDescriptions: [...toolUseConfirm.existingAllowDescriptions],
          yesInputMode: d,
          noInputMode: f,
          editablePrefix: D,
          onEditablePrefixChange: L,
          showEnableAutoModeOption: $,
        }),
      [s, o, v, x, toolUseConfirm.existingAllowDescriptions, d, f, D, L, $],
    ),
    V = UH.useMemo(() => Ui(toolUseConfirm.toolName), [toolUseConfirm.toolName]),
    Y = UH.useCallback(
      (ne) => {
        if (
          (G("tengu_permission_request_option_selected", {
            option_index: W.findIndex((oe) => oe.value === ne) + 1,
          }),
          ne === "yes")
        ) {
          let oe = a.trim();
          (G("tengu_accept_submitted", {
            toolName: V,
            isMcp: toolUseConfirm.isMcp,
            has_instructions: !!oe,
            instructions_length: oe.length,
            entered_feedback_mode: y,
          }),
            t(
              utn("yes", toolUseConfirm, {
                feedback: oe || void 0,
              }),
            ));
          return;
        }
        if (ne === "no") {
          let oe = c.trim();
          (G("tengu_reject_submitted", {
            toolName: V,
            isMcp: toolUseConfirm.isMcp,
            has_instructions: !!oe,
            instructions_length: oe.length,
            entered_feedback_mode: _,
          }),
            t(
              utn("no", toolUseConfirm, {
                feedback: oe || void 0,
              }),
            ));
          return;
        }
        if (ne === "yes-prefix-edited") {
          t(
            utn("yes-prefix-edited", toolUseConfirm, {
              editablePrefix: D,
            }),
          );
          return;
        }
        if (ne === "yes-enable-auto-mode") {
          (q(), t(utn("yes", toolUseConfirm)));
          return;
        }
        t(utn(ne, toolUseConfirm));
      },
      [t, toolUseConfirm, a, c, D, v, V, y, _, q, W],
    ),
    z = UH.useCallback(() => {
      (G("tengu_permission_request_escape", {}),
        n((ne) => ({
          ...ne,
          attribution: {
            ...ne.attribution,
            escapeCount: ne.attribution.escapeCount + 1,
          },
        })),
        t({
          behavior: "deny",
        }));
    }, [t, n]),
    K = UH.useCallback(
      (ne) => {
        let oe = {
          toolName: V,
          isMcp: toolUseConfirm.isMcp,
        };
        if (ne === "yes") {
          if (d) (p(false), G("tengu_accept_feedback_mode_collapsed", oe));
          else (p(true), b(true), G("tengu_accept_feedback_mode_entered", oe));
        } else if (ne === "no")
          if (f) (m(false), G("tengu_reject_feedback_mode_collapsed", oe));
          else (m(true), S(true), G("tengu_reject_feedback_mode_entered", oe));
      },
      [d, f, toolUseConfirm.isMcp, V],
    ),
    Z = UH.useCallback(
      (ne) => {
        if (ne !== "yes" && d && !a.trim()) p(false);
        if (ne !== "no" && f && !c.trim()) m(false);
        h(ne);
      },
      [d, f, a, c],
    ),
    J = UH.useMemo(() => {
      return;
      switch (toolUseConfirm.classifierState) {
        case "pending":
          return PC.jsx(ClassifierCheckingSubtitle, {});
        case "no-match":
        case "error":
          return PC.jsx(w, {
            dimColor: true,
            children: "Requires manual approval",
          });
        case "none":
          return;
      }
    }, [toolUseConfirm.classifierState]);
  return PC.jsxs(Lf, {
    title: N && !B ? "Bash command (unsandboxed)" : "Bash command",
    subtitle: J,
    requestSource: toolUseConfirm.requestSource,
    children: [
      PC.jsxs(U, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1,
        children: [
          PC.jsx(w, {
            dimColor: explainerState.visible,
            children: toolUseConfirm.renderedToolUseMessage,
          }),
          !explainerState.visible &&
            PC.jsx(w, {
              dimColor: true,
              children: toolUseConfirm.description,
            }),
          PC.jsx(wpr, {
            visible: explainerState.visible,
            promise: explainerState.promise,
          }),
        ],
      }),
      PC.jsxs(U, {
        flexDirection: "column",
        children: [
          PC.jsx(_2, {
            permissionResult: toolUseConfirm.permissionResult,
            toolType: "command",
          }),
          M &&
            PC.jsx(U, {
              marginBottom: 1,
              children: PC.jsx(w, {
                color: "warning",
                children: M,
              }),
            }),
          PC.jsx(w, {
            children: "Do you want to proceed?",
          }),
          PC.jsx(Sr, {
            options: W,
            inlineDescriptions: true,
            onChange: Y,
            onCancel: z,
            onFocus: Z,
            onInputModeToggle: K,
          }),
        ],
      }),
      PC.jsx(U, {
        justifyContent: "space-between",
        marginTop: 1,
        children: PC.jsx(w, {
          dimColor: true,
          children: PC.jsxs(Tn, {
            children: [
              PC.jsx(ht, {
                chord: "escape",
                action: "cancel",
              }),
              ((g === "yes" && !d) || (g === "no" && !f)) &&
                PC.jsx(ht, {
                  chord: "tab",
                  action: "amend",
                }),
              explainerState.enabled &&
                PC.jsx(ht, {
                  chord: explainerState.chord,
                  action: explainerState.visible ? "hide" : "explain",
                }),
            ],
          }),
        }),
      }),
    ],
  });
}
var aHc,
  UH,
  PC,
  CHECKING_TEXT = "Attempting to auto-approve\u2026";
