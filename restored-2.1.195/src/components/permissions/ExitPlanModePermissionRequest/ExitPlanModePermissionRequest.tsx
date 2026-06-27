// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WTe
// matched 2.1.88 source: src/components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx
// class=modified  jaccard=0.3423  score=0.6082  fileCov=0.4392
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module WTe] deps: @mixmark-io/domino/lib/Document.js, hooks/useTerminalSize.ts, context/notifications.tsx, tools/TaskStopTool/prompt.ts, components/shell/ExpandShellOutputContext.tsx
((wEc = R(lt(), 1)), (v7e = R(se(), 1)));
function buildPermissionUpdates(mode, allowedPrompts) {
  let n = [
    {
      type: "setMode",
      mode: $x(mode),
      destination: "session",
    },
  ];
  if (SLe() && allowedPrompts && allowedPrompts.length > 0)
    n.push({
      type: "addRules",
      rules: allowedPrompts.map((r) => ({
        toolName: r.tool,
        ruleContent: $ca(r.prompt),
      })),
      behavior: "allow",
      destination: "session",
    });
  return n;
}
function Ahm(e, t, n) {
  if (Z3()) return;
  if (!n && Gg(Rt())) return;
  pAt(
    [
      Rn({
        content: e.slice(0, 1000),
      }),
    ],
    new AbortController().signal,
  )
    .then(async (r) => {
      if (!r || Gg(Rt())) return;
      let o = Rt(),
        s = em();
      (DQ(o, r),
        await Pze(o, r, s, "auto"),
        t((i) => {
          if (i.standaloneAgentContext?.name === r) return i;
          return {
            ...i,
            standaloneAgentContext: {
              ...i.standaloneAgentContext,
              name: r,
            },
          };
        }));
    })
    .catch(ke);
}
function buildPlanApprovalOptions({
  showClearContext: e,
  showUltraplan: t,
  usedPercent: n,
  isAutoModeAvailable: r,
  isBypassPermissionsModeAvailable: o,
  onFeedbackChange: s,
}) {
  let i = [],
    a = n !== null ? ` (${n}% used)` : "";
  if (e)
    if (o)
      i.push({
        label: `Yes, clear context${a} and bypass permissions`,
        value: "yes-bypass-permissions",
      });
    else if (r)
      i.push({
        label: `Yes, clear context${a} and use auto mode`,
        value: "yes-auto-clear-context",
      });
    else
      i.push({
        label: `Yes, clear context${a} and auto-accept edits`,
        value: "yes-accept-edits",
      });
  if (o)
    i.push({
      label: "Yes, and bypass permissions",
      value: "yes-accept-edits-keep-context",
    });
  else if (r)
    i.push({
      label: "Yes, and use auto mode",
      value: "yes-resume-auto-mode",
    });
  else
    i.push({
      label: "Yes, auto-accept edits",
      value: "yes-accept-edits-keep-context",
    });
  if (
    (i.push({
      label: "Yes, manually approve edits",
      value: "yes-default-keep-context",
    }),
    t)
  )
    i.push({
      label: "No, refine with Ultraplan on Claude Code on the web",
      value: "ultraplan",
    });
  return (
    i.push({
      type: "input",
      label: "No, keep planning",
      value: "no",
      placeholder: "Tell Claude what to change",
      description: "shift+tab to approve with this feedback",
      onChange: s,
    }),
    i
  );
}
function Thm(e, t) {
  if (!e) return null;
  let n = VR({
      permissionMode: t,
      mainLoopModel: As(),
      exceeds200kTokens: false,
    }),
    r = nH(n, OS()),
    { used: o } = CCn(
      {
        input_tokens: e.input_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens ?? 0,
        cache_read_input_tokens: e.cache_read_input_tokens ?? 0,
      },
      r,
    );
  return o;
}
function ipr(e, t) {
  let {
      currentPlan: n,
      planEditedLocally: r,
      allowedPrompts: o,
      acceptFeedback: s,
      isBypassPermissionsModeAvailable: i,
      trimmedFeedback: a,
      hasImages: l,
      imageBlocks: c,
      showClearContext: u,
    } = t,
    d = r
      ? {
          plan: n,
        }
      : {};
  if (e === "ultraplan")
    return {
      behavior: "deny",
      feedback: Ehm,
    };
  if (
    u &&
    (e === "yes-bypass-permissions" || e === "yes-accept-edits" || e === "yes-auto-clear-context")
  )
    return {
      behavior: "deny",
    };
  if (e === "yes-resume-auto-mode" && Zv())
    return {
      behavior: "allow",
      updatedInput: d,
      permissionUpdates: [],
      feedback: s,
    };
  let m =
    e === "yes-accept-edits-keep-context"
      ? i
        ? "bypassPermissions"
        : "acceptEdits"
      : e === "yes-default-keep-context"
        ? "default"
        : e === "yes-resume-auto-mode"
          ? "default"
          : void 0;
  if (m !== void 0)
    return {
      behavior: "allow",
      updatedInput: d,
      permissionUpdates: buildPermissionUpdates(m, o),
      feedback: s,
    };
  if (e === "no") {
    if (!a && !l) return null;
    return {
      behavior: "deny",
      feedback: a || (l ? "(See attached image)" : void 0),
      contentBlocks: c && c.length > 0 ? c : void 0,
    };
  }
  return null;
}
function ExitPlanModePermissionRequest(e) {
  let t = IEc.c(106),
    { payload: n, answer: r } = e,
    o = Ht(Phm),
    s = Ho(),
    store = Dc(),
    { addNotification: a } = Li(),
    [l, c] = Qz.useState(""),
    u;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((u = {}), (t[0] = u));
  else u = t[0];
  let [d, p] = Qz.useState(u),
    f = Qz.useRef(0),
    m = Ht(Dhm) ?? false,
    g = Ht(Lhm),
    h = Ht(Rhm),
    y = kH(),
    b;
  if (t[1] !== h || t[2] !== g)
    ((b = tme() && Us("allow_remote_sessions") && !g && !h), (t[1] = h), (t[2] = g), (t[3] = b));
  else b = t[3];
  let _ = b,
    { mode: S, isAutoModeAvailable: A, isBypassPermissionsModeAvailable: v } = o,
    { plan: C, planFilePath: x, allowedPrompts: imageAttachments, usage: k } = n,
    D;
  if (t[4] !== C)
    ((D = () =>
      C && C.length > 0 ? C : "No plan found. Please write your plan to the plan file first."),
      (t[4] = C),
      (t[5] = D));
  else D = t[5];
  let [P, O] = Qz.useState(D),
    L = !C || C.trim() === "",
    M;
  if (t[6] !== A || t[7] !== v || t[8] !== S || t[9] !== m || t[10] !== _ || t[11] !== k) {
    let Mr;
    if (t[13] !== A) ((Mr = A && !v6o()), (t[13] = A), (t[14] = Mr));
    else Mr = t[14];
    ((M = buildPlanApprovalOptions({
      showClearContext: m,
      showUltraplan: _,
      usedPercent: m ? Thm(k, S) : null,
      isAutoModeAvailable: Mr,
      isBypassPermissionsModeAvailable: v,
      onFeedbackChange: c,
    })),
      (t[6] = A),
      (t[7] = v),
      (t[8] = S),
      (t[9] = m),
      (t[10] = _),
      (t[11] = k),
      (t[12] = M));
  } else M = t[12];
  let N = M,
    [B, $] = Qz.useState(false),
    [q, W] = Qz.useState(false),
    V;
  if (t[15] === Symbol.for("react.memo_cache_sentinel")) ((V = () => $(false)), (t[15] = V));
  else V = t[15];
  let Y;
  if (t[16] !== B) ((Y = [B]), (t[16] = B), (t[17] = Y));
  else Y = t[17];
  Pd(V, B ? 5000 : null, Y);
  let z;
  if (t[18] !== s)
    ((z = function (fe, Te, Re, Ne, it) {
      f.current = f.current + 1;
      let Tt = f.current,
        un = {
          id: Tt,
          type: "image",
          content: fe,
          mediaType: Te || "image/png",
          filename: Re || "Pasted image",
          dimensions: Ne,
        };
      (hTt(un, s),
        yTt(un, s),
        p((ze) => ({
          ...ze,
          [Tt]: un,
        })));
    }),
      (t[18] = s),
      (t[19] = z));
  else z = t[19];
  let K = z,
    Z;
  if (t[20] === Symbol.for("react.memo_cache_sentinel"))
    ((Z = (Mr) => {
      p((fe) => {
        let Te = {
          ...fe,
        };
        return (delete Te[Mr], Te);
      });
    }),
      (t[20] = Z));
  else Z = t[20];
  let J = Z,
    ne;
  if (t[21] !== d) ((ne = Object.values(d).filter(khm)), (t[21] = d), (t[22] = ne));
  else ne = t[22];
  let oe = ne,
    re = oe.length > 0,
    ee = elt(),
    ce = bPn(),
    ae = Qz.useRef(null),
    [de, Ee] = Qz.useState(0),
    me;
  if (t[23] !== de)
    ((me = () => {
      let Mr = ae.current ? tX(ae.current).height : 0;
      if (Mr !== de) Ee(Mr);
    }),
      (t[23] = de),
      (t[24] = me));
  else me = t[24];
  Qz.useLayoutEffect(me);
  let pe, ge;
  if (t[25] !== ce || t[26] !== de)
    ((pe = () => {
      if (!ce) return;
      return (ce(de), () => ce(null));
    }),
      (ge = [ce, de]),
      (t[25] = ce),
      (t[26] = de),
      (t[27] = pe),
      (t[28] = ge));
  else ((pe = t[27]), (ge = t[28]));
  Qz.useLayoutEffect(pe, ge);
  let he;
  if (t[29] === Symbol.for("react.memo_cache_sentinel"))
    ((he = {
      rows: 0,
      columns: 0,
    }),
      (t[29] = he));
  else he = t[29];
  let { rows: ie } = bb(he),
    le = br(),
    He = ce !== null && ee !== null,
    ye = He ? Math.max(1, ie - de) : Math.max(1, le.rows - de - 4),
    ue;
  if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
    let Mr = $q();
    ((ue = Mr ? yk(Mr) : null), (t[30] = ue));
  } else ue = t[30];
  let we = ue,
    Ce;
  if (
    t[31] !== imageAttachments ||
    t[32] !== r ||
    t[33] !== P ||
    t[34] !== re ||
    t[35] !== oe ||
    t[36] !== v ||
    t[37] !== y ||
    t[38] !== q ||
    t[39] !== l ||
    t[40] !== s ||
    t[41] !== m ||
    t[42] !== store
  )
    ((Ce = async function (fe) {
      let Te = l.trim(),
        Re = Te || void 0;
      if (fe === "ultraplan") {
        (G("tengu_plan_exit", {
          planLengthChars: P.length,
          outcome: We("ultraplan"),
        }),
          r(
            ipr(fe, {
              currentPlan: P,
              planEditedLocally: q,
              allowedPrompts: imageAttachments,
              acceptFeedback: Re,
              isBypassPermissionsModeAvailable: v,
              trimmedFeedback: Te,
              hasImages: re,
              imageBlocks: void 0,
              showClearContext: m,
            }),
          ));
        let ze = xhm;
        dJt({
          arg: "",
          source: "exit_plan_mode",
          seedPlan: P,
          getAppState: store.getState,
          setAppState: store.setState,
          signal: new AbortController().signal,
          onStatusMessage: ze,
        })
          .then(ze)
          .catch(ke);
        return;
      }
      let it =
        fe === "yes-accept-edits-keep-context" ||
        fe === "yes-default-keep-context" ||
        fe === "yes-resume-auto-mode";
      {
        let ze = (fe === "yes-resume-auto-mode" || fe === "yes-auto-clear-context") && Zv(),
          Mt = qTt?.isAutoModeActive() ?? false;
        if (fe !== "no" && !ze && Mt) (qTt?.setAutoModeActive(false), B2(true), s(Ihm));
      }
      if (fe !== "no") Ahm(P, s, !it);
      if (
        m &&
        (fe === "yes-bypass-permissions" ||
          fe === "yes-accept-edits" ||
          fe === "yes-auto-clear-context")
      ) {
        let ze = "default";
        if (fe === "yes-bypass-permissions") ze = "bypassPermissions";
        else if (fe === "yes-accept-edits") ze = "acceptEdits";
        else if (fe === "yes-auto-clear-context" && Zv())
          ((ze = "auto"), qTt?.setAutoModeActive(true));
        (G("tengu_plan_exit", {
          planLengthChars: P.length,
          outcome: $e(fe),
          clearContext: true,
          hasFeedback: !!Re,
        }),
          Ebe({
            from: "plan",
            to: ze,
            trigger: "exit_plan_mode",
          }));
        let Qt = `

If you need specific details from before exiting plan mode (like exact code snippets, error messages, or content you generated), read the full transcript at: ${em()}`,
          Er = el()
            ? `

If this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${ss} tool (pass a \`name\`) to parallelize the work.`
            : "",
          pt = Re
            ? `

User feedback on this plan: ${Re}`
            : "";
        (s((ln) => ({
          ...ln,
          initialMessage: {
            message: {
              ...Rn({
                content: `Implement the following plan:

${P}${Qt}${Er}${pt}`,
                origin: {
                  kind: "auto-continuation",
                },
              }),
              planContent: P,
            },
            clearContext: true,
            mode: ze,
            allowedPrompts: imageAttachments,
          },
        })),
          xK(true),
          r({
            behavior: "deny",
          }));
        return;
      }
      if (fe === "yes-resume-auto-mode" && Zv()) {
        (G("tengu_plan_exit", {
          planLengthChars: P.length,
          outcome: $e(fe),
          clearContext: false,
          hasFeedback: !!Re,
        }),
          xK(true),
          Vie(true),
          qTt?.setAutoModeActive(true),
          Ebe({
            from: "plan",
            to: "auto",
            trigger: "exit_plan_mode",
          }),
          s(Chm),
          r(
            ipr(fe, {
              currentPlan: P,
              planEditedLocally: q,
              allowedPrompts: imageAttachments,
              acceptFeedback: Re,
              isBypassPermissionsModeAvailable: v,
              trimmedFeedback: Te,
              hasImages: re,
              imageBlocks: void 0,
              showClearContext: m,
            }),
          ));
        return;
      }
      if (it) {
        (Ebe({
          from: "plan",
          to:
            fe === "yes-accept-edits-keep-context"
              ? v
                ? "bypassPermissions"
                : "acceptEdits"
              : "default",
          trigger: "exit_plan_mode",
        }),
          G("tengu_plan_exit", {
            planLengthChars: P.length,
            outcome: $e(fe),
            clearContext: false,
            hasFeedback: !!Re,
          }),
          xK(true),
          Vie(true),
          r(
            ipr(fe, {
              currentPlan: P,
              planEditedLocally: q,
              allowedPrompts: imageAttachments,
              acceptFeedback: Re,
              isBypassPermissionsModeAvailable: v,
              trimmedFeedback: Te,
              hasImages: re,
              imageBlocks: void 0,
              showClearContext: m,
            }),
          ));
        return;
      }
      if (fe === "no") {
        if (!Te && !re) return;
        G("tengu_plan_exit", {
          planLengthChars: P.length,
          outcome: We("no"),
        });
        let ze;
        if (re)
          ze = await Promise.all(
            oe.map(async (Mt) => {
              let { block: Qt } = await FM({
                data: Mt.content,
                mediaType: Mt.mediaType,
                limits: Gh(y),
              });
              return Qt;
            }),
          );
        r(
          ipr(fe, {
            currentPlan: P,
            planEditedLocally: q,
            allowedPrompts: imageAttachments,
            acceptFeedback: Re,
            isBypassPermissionsModeAvailable: v,
            trimmedFeedback: Te,
            hasImages: re,
            imageBlocks: ze,
            showClearContext: m,
          }),
        );
        return;
      }
    }),
      (t[31] = imageAttachments),
      (t[32] = r),
      (t[33] = P),
      (t[34] = re),
      (t[35] = oe),
      (t[36] = v),
      (t[37] = y),
      (t[38] = q),
      (t[39] = l),
      (t[40] = s),
      (t[41] = m),
      (t[42] = store),
      (t[43] = Ce));
  else Ce = t[43];
  let Ie = Ce,
    Ve;
  if (t[44] !== r || t[45] !== P.length)
    ((Ve = () => {
      (G("tengu_plan_exit", {
        planLengthChars: P.length,
        outcome: We("no"),
      }),
        r({
          behavior: "deny",
        }));
    }),
      (t[44] = r),
      (t[45] = P.length),
      (t[46] = Ve));
  else Ve = t[46];
  let Ze = Ve,
    Be;
  if (t[47] !== r || t[48] !== s)
    ((Be = function (fe) {
      if (fe === "yes") {
        if (
          (G("tengu_plan_exit", {
            planLengthChars: 0,
            outcome: We("yes-default"),
          }),
          qTt?.isAutoModeActive() ?? false)
        )
          (qTt?.setAutoModeActive(false), B2(true), s(whm));
        (xK(true),
          Vie(true),
          r({
            behavior: "allow",
            updatedInput: {},
            permissionUpdates: [
              {
                type: "setMode",
                mode: "default",
                destination: "session",
              },
            ],
          }));
        return;
      }
      (G("tengu_plan_exit", {
        planLengthChars: 0,
        outcome: We("no"),
      }),
        r({
          behavior: "deny",
        }));
    }),
      (t[47] = r),
      (t[48] = s),
      (t[49] = Be));
  else Be = t[49];
  let Me = Be,
    Ue;
  if (t[50] !== a || t[51] !== P || t[52] !== Ie || t[53] !== x || t[54] !== m)
    ((Ue = (Mr) => {
      if (Mr.ctrl && Mr.key === "g") {
        (Mr.preventDefault(),
          G("tengu_plan_external_editor_used", {}),
          (async () => {
            if (x) {
              let fe = await yz(x);
              if (fe.error)
                a({
                  key: "external-editor-error",
                  kind: "warning",
                  text: fe.error,
                  color: "warning",
                  priority: "high",
                });
              if (fe.content !== null) {
                if (fe.content !== P) W(true);
                (O(fe.content), $(true));
              }
            } else {
              let fe = await K$(P);
              if (fe.error)
                a({
                  key: "external-editor-error",
                  kind: "warning",
                  text: fe.error,
                  color: "warning",
                  priority: "high",
                });
              if (fe.content !== null && fe.content !== P) (O(fe.content), $(true));
            }
          })());
        return;
      }
      if (Mr.shift && Mr.key === "tab") {
        (Mr.preventDefault(), Ie(m ? "yes-accept-edits" : "yes-accept-edits-keep-context"));
        return;
      }
    }),
      (t[50] = a),
      (t[51] = P),
      (t[52] = Ie),
      (t[53] = x),
      (t[54] = m),
      (t[55] = Ue));
  else Ue = t[55];
  let tt = Ue;
  if (L) {
    let Mr;
    if (t[56] === Symbol.for("react.memo_cache_sentinel"))
      ((Mr = iy.jsx(w, {
        children: "Claude wants to exit plan mode",
      })),
        (t[56] = Mr));
    else Mr = t[56];
    let fe;
    if (t[57] === Symbol.for("react.memo_cache_sentinel"))
      ((fe = {
        label: "Yes",
        value: "yes",
      }),
        (t[57] = fe));
    else fe = t[57];
    let Te;
    if (t[58] === Symbol.for("react.memo_cache_sentinel"))
      ((Te = [
        fe,
        {
          label: "No",
          value: "no",
        },
      ]),
        (t[58] = Te));
    else Te = t[58];
    let Re;
    if (t[59] !== Me) ((Re = () => Me("no")), (t[59] = Me), (t[60] = Re));
    else Re = t[60];
    let Ne;
    if (t[61] !== Me || t[62] !== Re)
      ((Ne = iy.jsxs(U, {
        flexDirection: "column",
        paddingX: 1,
        marginTop: 1,
        children: [
          Mr,
          iy.jsx(U, {
            marginTop: 1,
            children: iy.jsx(Sr, {
              options: Te,
              onChange: Me,
              onCancel: Re,
            }),
          }),
        ],
      })),
        (t[61] = Me),
        (t[62] = Re),
        (t[63] = Ne));
    else Ne = t[63];
    let it;
    if (t[64] !== n.requestSource || t[65] !== Ne)
      ((it = iy.jsx(Lf, {
        color: "planMode",
        title: "Exit plan mode?",
        requestSource: n.requestSource,
        children: Ne,
      })),
        (t[64] = n.requestSource),
        (t[65] = Ne),
        (t[66] = it));
    else it = t[66];
    return it;
  }
  let bt = ee ?? void 0,
    Ke = He ? ye : void 0,
    Et;
  if (t[67] === Symbol.for("react.memo_cache_sentinel"))
    ((Et = iy.jsx(U, {
      paddingX: 1,
      flexDirection: "column",
      children: iy.jsx(w, {
        children: "Here is Claude's plan:",
      }),
    })),
      (t[67] = Et));
  else Et = t[67];
  let ct;
  if (t[68] !== P)
    ((ct = iy.jsx(Q4, {
      marginBottom: 1,
      children: iy.jsx(zg, {
        children: P,
      }),
    })),
      (t[68] = P),
      (t[69] = ct));
  else ct = t[69];
  let Je;
  if (t[70] !== n.permissionResult)
    ((Je = iy.jsx(_2, {
      permissionResult: n.permissionResult,
      toolType: "tool",
    })),
      (t[70] = n.permissionResult),
      (t[71] = Je));
  else Je = t[71];
  let gt;
  if (t[72] !== imageAttachments)
    ((gt =
      SLe() &&
      imageAttachments &&
      imageAttachments.length > 0 &&
      iy.jsxs(U, {
        flexDirection: "column",
        marginBottom: 1,
        children: [
          iy.jsx(w, {
            bold: true,
            children: "Requested permissions:",
          }),
          imageAttachments.map(vhm),
        ],
      })),
      (t[72] = imageAttachments),
      (t[73] = gt));
  else gt = t[73];
  let st;
  if (t[74] !== Je || t[75] !== gt)
    ((st = iy.jsxs(U, {
      flexDirection: "column",
      paddingX: 1,
      children: [Je, gt],
    })),
      (t[74] = Je),
      (t[75] = gt),
      (t[76] = st));
  else st = t[76];
  let xt;
  if (t[77] !== ct || t[78] !== st)
    ((xt = iy.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [Et, ct, st],
    })),
      (t[77] = ct),
      (t[78] = st),
      (t[79] = xt));
  else xt = t[79];
  let vt;
  if (t[80] !== n.requestSource || t[81] !== xt)
    ((vt = iy.jsx(Lf, {
      color: "planMode",
      title: "Ready to code?",
      innerPaddingX: 0,
      requestSource: n.requestSource,
      children: xt,
    })),
      (t[80] = n.requestSource),
      (t[81] = xt),
      (t[82] = vt));
  else vt = t[82];
  let jt;
  if (t[83] !== bt || t[84] !== Ke || t[85] !== vt)
    ((jt = iy.jsx(Rq, {
      ref: bt,
      flexDirection: "column",
      height: Ke,
      stickyScroll: false,
      children: vt,
    })),
      (t[83] = bt),
      (t[84] = Ke),
      (t[85] = vt),
      (t[86] = jt));
  else jt = t[86];
  let en;
  if (t[87] === Symbol.for("react.memo_cache_sentinel"))
    ((en = iy.jsx(w, {
      dimColor: true,
      children: "Claude has written up a plan and is ready to execute. Would you like to proceed?",
    })),
      (t[87] = en));
  else en = t[87];
  let Dn;
  if (t[88] !== Ie) ((Dn = (Mr) => void Ie(Mr)), (t[88] = Ie), (t[89] = Dn));
  else Dn = t[89];
  let nn;
  if (t[90] !== Ze || t[91] !== K || t[92] !== N || t[93] !== d || t[94] !== Dn)
    ((nn = iy.jsx(U, {
      marginTop: 1,
      children: iy.jsx(Sr, {
        options: N,
        onChange: Dn,
        onCancel: Ze,
        onImagePaste: K,
        pastedContents: d,
        onRemoveImage: J,
      }),
    })),
      (t[90] = Ze),
      (t[91] = K),
      (t[92] = N),
      (t[93] = d),
      (t[94] = Dn),
      (t[95] = nn));
  else nn = t[95];
  let Ln;
  if (t[96] !== x || t[97] !== B)
    ((Ln =
      we &&
      iy.jsxs(U, {
        flexDirection: "row",
        gap: 1,
        marginTop: 1,
        children: [
          iy.jsxs(w, {
            dimColor: true,
            children: [
              iy.jsx(ht, {
                chord: "ctrl+g",
                action: "edit in",
              }),
              " ",
            ],
          }),
          iy.jsx(w, {
            bold: true,
            dimColor: true,
            children: we,
          }),
          x &&
            iy.jsxs(w, {
              dimColor: true,
              children: [" \xB7 ", kd(x)],
            }),
          B &&
            iy.jsxs(iy.Fragment, {
              children: [
                iy.jsx(w, {
                  dimColor: true,
                  children: " \xB7 ",
                }),
                iy.jsxs(w, {
                  color: "success",
                  children: [
                    iy.jsx(Hs, {
                      status: "success",
                      withSpace: true,
                    }),
                    "Plan saved!",
                  ],
                }),
              ],
            }),
        ],
      })),
      (t[96] = x),
      (t[97] = B),
      (t[98] = Ln));
  else Ln = t[98];
  let Hn;
  if (t[99] !== nn || t[100] !== Ln)
    ((Hn = iy.jsxs(U, {
      ref: ae,
      flexDirection: "column",
      borderStyle: "round",
      borderColor: "planMode",
      borderLeft: false,
      borderRight: false,
      borderBottom: false,
      paddingX: 1,
      flexShrink: 0,
      children: [en, nn, Ln],
    })),
      (t[99] = nn),
      (t[100] = Ln),
      (t[101] = Hn));
  else Hn = t[101];
  let kr;
  if (t[102] !== tt || t[103] !== jt || t[104] !== Hn)
    ((kr = iy.jsxs(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: tt,
      children: [jt, Hn],
    })),
      (t[102] = tt),
      (t[103] = jt),
      (t[104] = Hn),
      (t[105] = kr));
  else kr = t[105];
  return kr;
}
function vhm(e, t) {
  return iy.jsxs(
    w,
    {
      dimColor: true,
      children: ["  ", "\xB7 ", e.tool, "(", TNn, " ", e.prompt, ")"],
    },
    t,
  );
}
function whm(e) {
  return {
    ...e,
    toolPermissionContext: {
      ...CTe(e.toolPermissionContext),
      prePlanMode: void 0,
    },
  };
}
function Chm(e) {
  return {
    ...e,
    toolPermissionContext: rV({
      ...e.toolPermissionContext,
      mode: "auto",
      prePlanMode: void 0,
    }),
  };
}
function Ihm(e) {
  return {
    ...e,
    toolPermissionContext: {
      ...CTe(e.toolPermissionContext),
      prePlanMode: void 0,
    },
  };
}
function xhm(e) {
  return Ad({
    agentId: ls(),
    value: e,
    mode: "task-notification",
  });
}
function khm(e) {
  return e.type === "image";
}
function Rhm(e) {
  return e.ultraplanLaunching;
}
function Lhm(e) {
  return e.ultraplanSessionUrl;
}
function Dhm(e) {
  return e.settings.showClearContextOnPlanAccept;
}
function Phm(e) {
  return e.toolPermissionContext;
}
var IEc,
  Qz,
  iy,
  qTt,
  Ehm =
    "I'm sending this plan to Ultraplan to be refined remotely. Let me know it's been handed off and that a web link will appear here in a moment \u2014 I can use that to edit and iterate on the plan in the browser once the plan has been generated. I can continue to work here in the meantime; Claude Code will notify me when the cloud plan is ready for review, and I have the option to teleport the plan back here for implementation post-approval.";
