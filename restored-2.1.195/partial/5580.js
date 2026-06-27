// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eKo
// matched 2.1.88 source: src/components/permissions/BashPermissionRequest/BashPermissionRequest.tsx
// class=partial  jaccard=0.2469  score=0.5704  fileCov=0.3033
// note: low-confidence suggestion: src/components/permissions/BashPermissionRequest/BashPermissionRequest.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eKo = E(() => {
  Ye();
  N0e();
  ps();
  kt();
  rHc();
  LUt();
  V9n();
  ctn = R(lt(), 1), tie = R(rt(), 1), WP = R(se(), 1);
});
function S_m() {
  let e = aHc.c(6),
    [t, n] = BVt("requesting", iHc, !1),
    r;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) r = [...iHc], e[0] = r;else r = e[0];
  let o;
  if (e[1] !== n) o = PC.jsx(w, {
    children: r.map((i, a) => PC.jsx(OGe, {
      char: i,
      index: a,
      glimmerIndex: n,
      messageColor: "inactive",
      shimmerColor: "subtle"
    }, a))
  }), e[1] = n, e[2] = o;else o = e[2];
  let s;
  if (e[3] !== t || e[4] !== o) s = PC.jsx(U, {
    ref: t,
    children: o
  }), e[3] = t, e[4] = o, e[5] = s;else s = e[5];
  return s;
}
function utn(e, t, n = {}) {
  switch (e) {
    case "yes":
      return {
        behavior: "allow",
        updatedInput: t.input,
        ...(n.feedback && {
          feedback: n.feedback
        })
      };
    case "yes-apply-suggestions":
      {
        let r = "suggestions" in t.permissionResult ? t.permissionResult.suggestions ?? [] : [];
        return {
          behavior: "allow",
          updatedInput: t.input,
          permissionUpdates: r
        };
      }
    case "yes-prefix-edited":
      {
        let r = (n.editablePrefix ?? "").trim();
        if (!r) return {
          behavior: "allow",
          updatedInput: t.input
        };
        return {
          behavior: "allow",
          updatedInput: t.input,
          permissionUpdates: [{
            type: "addRules",
            rules: [{
              toolName: Co,
              ruleContent: r
            }],
            behavior: "allow",
            destination: "localSettings"
          }]
        };
      }
    case "no":
      return {
        behavior: "deny",
        ...(n.feedback && {
          feedback: n.feedback
        })
      };
  }
  return {
    behavior: "allow",
    updatedInput: t.input
  };
}
function lHc({
  payload: e,
  answer: t
}) {
  let n = Ho(),
    r = e.command,
    o = e.permissionResult.decisionReason,
    s = e.permissionResult.suggestions ?? [],
    i = vpr({
      toolName: e.toolName,
      toolInput: e.input,
      toolDescription: e.description
    }),
    [a, l] = UH.useState(""),
    [c, u] = UH.useState(""),
    [d, p] = UH.useState(!1),
    [f, m] = UH.useState(!1),
    [g, h] = UH.useState("yes"),
    [y, b] = UH.useState(!1),
    [_, S] = UH.useState(!1),
    A = typeof e.input.description === "string" ? Yv(e.input.description) : "",
    [v, C] = UH.useState(A),
    [x, I] = UH.useState(!A.trim());
  UH.useEffect(() => {
    if (!SLe()) return;
    let ne = new AbortController();
    return Bca(r, A, ne.signal).then(oe => {
      if (oe && !ne.signal.aborted) C(oe), I(!1);
    }).catch(() => {}), () => ne.abort();
  }, [r, A]);
  let k = o?.type === "subcommandResults",
    [D, P] = UH.useState(() => {
      if (k) {
        let re = Jjt(s).filter(ee => ee.toolName === Co && ee.ruleContent);
        return re.length === 1 ? re[0].ruleContent : void 0;
      }
      let ne = tQn(r);
      if (ne) return `${ne} *`;
      let oe = UCl(r);
      if (oe) return `${oe} *`;
      return r;
    }),
    O = UH.useRef(!1),
    L = UH.useCallback(ne => {
      O.current = !0, P(ne);
    }, []);
  UH.useEffect(() => {
    if (k) return;
    let ne = !1;
    return jPa(r, () => !1).then(async oe => {
      if (ne || O.current) return;
      if (oe.length === 0 || !oe[0]) return;
      let re = await Nmo(r, oe[0]);
      if (ne || O.current) return;
      if (!BCl(re)) P(`${oe[0]} *`);
    }).catch(() => {}), () => {
      ne = !0;
    };
  }, [r, k]);
  let {
      destructiveWarning: M,
      sandboxingEnabled: N,
      isSandboxed: B
    } = UH.useMemo(() => {
      let ne = at("tengu_destructive_command_warning", !1) ? Z1i(r) : null,
        oe = xo.isSandboxingEnabled(),
        re = oe && N$(e.input);
      return {
        destructiveWarning: ne,
        sandboxingEnabled: oe,
        isSandboxed: re
      };
    }, [r, e.input]),
    {
      offered: $,
      enableAutoMode: q
    } = Hpr(e.requestSource),
    W = UH.useMemo(() => eHc({
      suggestions: s,
      decisionReason: o,
      onRejectFeedbackChange: u,
      onAcceptFeedbackChange: l,
      onClassifierDescriptionChange: C,
      classifierDescription: v,
      initialClassifierDescriptionEmpty: x,
      existingAllowDescriptions: [...e.existingAllowDescriptions],
      yesInputMode: d,
      noInputMode: f,
      editablePrefix: D,
      onEditablePrefixChange: L,
      showEnableAutoModeOption: $
    }), [s, o, v, x, e.existingAllowDescriptions, d, f, D, L, $]),
    V = UH.useMemo(() => Ui(e.toolName), [e.toolName]),
    Y = UH.useCallback(ne => {
      if (G("tengu_permission_request_option_selected", {
        option_index: W.findIndex(oe => oe.value === ne) + 1
      }), ne === "yes") {
        let oe = a.trim();
        G("tengu_accept_submitted", {
          toolName: V,
          isMcp: e.isMcp,
          has_instructions: !!oe,
          instructions_length: oe.length,
          entered_feedback_mode: y
        }), t(utn("yes", e, {
          feedback: oe || void 0
        }));
        return;
      }
      if (ne === "no") {
        let oe = c.trim();
        G("tengu_reject_submitted", {
          toolName: V,
          isMcp: e.isMcp,
          has_instructions: !!oe,
          instructions_length: oe.length,
          entered_feedback_mode: _
        }), t(utn("no", e, {
          feedback: oe || void 0
        }));
        return;
      }
      if (ne === "yes-prefix-edited") {
        t(utn("yes-prefix-edited", e, {
          editablePrefix: D
        }));
        return;
      }
      if (ne === "yes-enable-auto-mode") {
        q(), t(utn("yes", e));
        return;
      }
      t(utn(ne, e));
    }, [t, e, a, c, D, v, V, y, _, q, W]),
    z = UH.useCallback(() => {
      G("tengu_permission_request_escape", {}), n(ne => ({
        ...ne,
        attribution: {
          ...ne.attribution,
          escapeCount: ne.attribution.escapeCount + 1
        }
      })), t({
        behavior: "deny"
      });
    }, [t, n]),
    K = UH.useCallback(ne => {
      let oe = {
        toolName: V,
        isMcp: e.isMcp
      };
      if (ne === "yes") {
        if (d) p(!1), G("tengu_accept_feedback_mode_collapsed", oe);else p(!0), b(!0), G("tengu_accept_feedback_mode_entered", oe);
      } else if (ne === "no") if (f) m(!1), G("tengu_reject_feedback_mode_collapsed", oe);else m(!0), S(!0), G("tengu_reject_feedback_mode_entered", oe);
    }, [d, f, e.isMcp, V]),
    Z = UH.useCallback(ne => {
      if (ne !== "yes" && d && !a.trim()) p(!1);
      if (ne !== "no" && f && !c.trim()) m(!1);
      h(ne);
    }, [d, f, a, c]),
    J = UH.useMemo(() => {
      return;
      switch (e.classifierState) {
        case "pending":
          return PC.jsx(S_m, {});
        case "no-match":
        case "error":
          return PC.jsx(w, {
            dimColor: !0,
            children: "Requires manual approval"
          });
        case "none":
          return;
      }
    }, [e.classifierState]);
  return PC.jsxs(Lf, {
    title: N && !B ? "Bash command (unsandboxed)" : "Bash command",
    subtitle: J,
    requestSource: e.requestSource,
    children: [PC.jsxs(U, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: [PC.jsx(w, {
        dimColor: i.visible,
        children: e.renderedToolUseMessage
      }), !i.visible && PC.jsx(w, {
        dimColor: !0,
        children: e.description
      }), PC.jsx(wpr, {
        visible: i.visible,
        promise: i.promise
      })]
    }), PC.jsxs(U, {
      flexDirection: "column",
      children: [PC.jsx(_2, {
        permissionResult: e.permissionResult,
        toolType: "command"
      }), M && PC.jsx(U, {
        marginBottom: 1,
        children: PC.jsx(w, {
          color: "warning",
          children: M
        })
      }), PC.jsx(w, {
        children: "Do you want to proceed?"
      }), PC.jsx(Sr, {
        options: W,
        inlineDescriptions: !0,
        onChange: Y,
        onCancel: z,
        onFocus: Z,
        onInputModeToggle: K
      })]
    }), PC.jsx(U, {
      justifyContent: "space-between",
      marginTop: 1,
      children: PC.jsx(w, {
        dimColor: !0,
        children: PC.jsxs(Tn, {
          children: [PC.jsx(ht, {
            chord: "escape",
            action: "cancel"
          }), (g === "yes" && !d || g === "no" && !f) && PC.jsx(ht, {
            chord: "tab",
            action: "amend"
          }), i.enabled && PC.jsx(ht, {
            chord: i.chord,
            action: i.visible ? "hide" : "explain"
          })]
        })
      })
    })]
  });
}
var aHc,
  UH,
  PC,
  iHc = "Attempting to auto-approve\u2026";