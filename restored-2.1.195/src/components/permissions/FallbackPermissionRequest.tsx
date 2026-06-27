// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wHc
// matched 2.1.88 source: src/components/permissions/FallbackPermissionRequest.tsx
// class=modified  jaccard=0.182  score=0.3061  fileCov=0.31
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var wHc = E(() => {
  X0();
  dtn();
  WTe();
  Ye();
  wX();
  ((THc = R(lt(), 1)), (k3 = R(se(), 1)));
});
function M_m(e, t, n) {
  switch (e) {
    case "yes":
    case "yes-enable-auto-mode":
      return {
        behavior: "allow",
        updatedInput: t.input,
        ...(n && {
          feedback: n,
        }),
      };
    case "yes-dont-ask-again":
      return {
        behavior: "allow",
        updatedInput: t.input,
        permissionUpdates: [
          {
            type: "addRules",
            rules: [
              {
                toolName: t.toolName,
              },
            ],
            behavior: "allow",
            destination: "localSettings",
          },
        ],
      };
    case "no":
      return {
        behavior: "deny",
        ...(n && {
          feedback: n,
        }),
      };
  }
}
function tKo(e) {
  let t = e.permissionResult.decisionReason,
    n = t?.type === "safetyCheck" && !t.classifierApprovable;
  return e.showAlwaysAllow && !n && !e.isAskCappedByOrg;
}
function IHc(e) {
  let t = CHc.c(55),
    { payload: n, answer: r } = e,
    o;
  if (t[0] !== n) ((o = tKo(n)), (t[0] = n), (t[1] = o));
  else o = t[1];
  let s = o,
    { offered: i, enableAutoMode: a } = Hpr(n.requestSource),
    l;
  if (t[2] !== r || t[3] !== a || t[4] !== n)
    ((l = (M, N) => {
      if (M === "yes-enable-auto-mode") a();
      r(M_m(M, n, N));
    }),
      (t[2] = r),
      (t[3] = a),
      (t[4] = n),
      (t[5] = l));
  else l = t[5];
  let c = l,
    u;
  if (t[6] !== r)
    ((u = () => {
      r({
        behavior: "cancelled",
      });
    }),
      (t[6] = r),
      (t[7] = u));
  else u = t[7];
  let d = u,
    p;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) ((p = yr()), (t[8] = p));
  else p = t[8];
  let f = p,
    m;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((m = {
      label: "Yes",
      value: "yes",
      feedbackConfig: {
        type: "accept",
      },
    }),
      (t[9] = m));
  else m = t[9];
  let g;
  if (t[10] !== i || t[11] !== n.userFacingName || t[12] !== s) {
    if (((g = [m]), s)) {
      let N;
      if (t[14] !== n.userFacingName)
        ((N = b2.jsx(w, {
          bold: true,
          children: n.userFacingName,
        })),
          (t[14] = n.userFacingName),
          (t[15] = N));
      else N = t[15];
      let B;
      if (t[16] === Symbol.for("react.memo_cache_sentinel"))
        ((B = b2.jsx(w, {
          bold: true,
          children: f,
        })),
          (t[16] = B));
      else B = t[16];
      let $;
      if (t[17] !== N)
        (($ = {
          label: b2.jsxs(w, {
            children: ["Yes, and don't ask again for", " ", N, " commands in", " ", B],
          }),
          value: "yes-dont-ask-again",
        }),
          (t[17] = N),
          (t[18] = $));
      else $ = t[18];
      g.push($);
    }
    if (i) {
      let N;
      if (t[19] === Symbol.for("react.memo_cache_sentinel"))
        ((N = {
          label: Epr,
          description: Apr,
          value: "yes-enable-auto-mode",
        }),
          (t[19] = N));
      else N = t[19];
      g.push(N);
    }
    let M;
    if (t[20] === Symbol.for("react.memo_cache_sentinel"))
      ((M = {
        label: "No",
        value: "no",
        feedbackConfig: {
          type: "reject",
        },
      }),
        (t[20] = M));
    else M = t[20];
    (g.push(M), (t[10] = i), (t[11] = n.userFacingName), (t[12] = s), (t[13] = g));
  } else g = t[13];
  let h = g,
    y;
  if (t[21] !== n.toolName) ((y = Ui(n.toolName)), (t[21] = n.toolName), (t[22] = y));
  else y = t[22];
  let b;
  if (t[23] !== n.isMcp || t[24] !== y)
    ((b = {
      toolName: y,
      isMcp: n.isMcp,
    }),
      (t[23] = n.isMcp),
      (t[24] = y),
      (t[25] = b));
  else b = t[25];
  let _ = b,
    S = n.requestSource,
    A;
  if (t[26] !== n.renderedToolUseMessage)
    ((A =
      n.renderedToolUseMessage !== "" &&
      b2.jsxs(b2.Fragment, {
        children: ["(", n.renderedToolUseMessage, ")"],
      })),
      (t[26] = n.renderedToolUseMessage),
      (t[27] = A));
  else A = t[27];
  let v;
  if (t[28] !== n.hasMcpSuffix)
    ((v = n.hasMcpSuffix
      ? b2.jsx(w, {
          dimColor: true,
          children: " (MCP)",
        })
      : ""),
      (t[28] = n.hasMcpSuffix),
      (t[29] = v));
  else v = t[29];
  let C;
  if (t[30] !== n.userFacingName || t[31] !== v || t[32] !== A)
    ((C = b2.jsxs(w, {
      children: [n.userFacingName, A, v],
    })),
      (t[30] = n.userFacingName),
      (t[31] = v),
      (t[32] = A),
      (t[33] = C));
  else C = t[33];
  let x;
  if (t[34] !== n.description) ((x = jin(n.description, 3)), (t[34] = n.description), (t[35] = x));
  else x = t[35];
  let I;
  if (t[36] !== x)
    ((I = b2.jsx(w, {
      dimColor: true,
      children: x,
    })),
      (t[36] = x),
      (t[37] = I));
  else I = t[37];
  let k;
  if (t[38] !== C || t[39] !== I)
    ((k = b2.jsxs(U, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: [C, I],
    })),
      (t[38] = C),
      (t[39] = I),
      (t[40] = k));
  else k = t[40];
  let D;
  if (t[41] !== n.permissionResult)
    ((D = b2.jsx(_2, {
      permissionResult: n.permissionResult,
      toolType: "tool",
    })),
      (t[41] = n.permissionResult),
      (t[42] = D));
  else D = t[42];
  let P;
  if (t[43] !== d || t[44] !== c || t[45] !== h || t[46] !== _)
    ((P = b2.jsx(DNe, {
      options: h,
      onSelect: c,
      onCancel: d,
      toolAnalyticsContext: _,
    })),
      (t[43] = d),
      (t[44] = c),
      (t[45] = h),
      (t[46] = _),
      (t[47] = P));
  else P = t[47];
  let O;
  if (t[48] !== D || t[49] !== P)
    ((O = b2.jsxs(U, {
      flexDirection: "column",
      children: [D, P],
    })),
      (t[48] = D),
      (t[49] = P),
      (t[50] = O));
  else O = t[50];
  let L;
  if (t[51] !== n.requestSource || t[52] !== k || t[53] !== O)
    ((L = b2.jsxs(Lf, {
      title: "Tool use",
      requestSource: S,
      children: [k, O],
    })),
      (t[51] = n.requestSource),
      (t[52] = k),
      (t[53] = O),
      (t[54] = L));
  else L = t[54];
  return L;
}
var CHc, b2;
