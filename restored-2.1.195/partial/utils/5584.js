// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Hc
// matched 2.1.88 source: src/components/permissions/FilePermissionDialog/usePermissionHandler.ts
// class=partial  jaccard=0.1868  score=0.2821  fileCov=0.3561
// note: low-confidence suggestion: src/components/permissions/FilePermissionDialog/usePermissionHandler.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _Hc] deps: ft, Ye, kne, Hu, Yf
hHc = require("os"), k7e = require("path"), kNe = R(se(), 1);
function C_m(e, t, n, r) {
  switch (e.type) {
    case "accept-once":
      return {
        behavior: "allow",
        updatedInput: t.input,
        ...(r && {
          feedback: r
        })
      };
    case "accept-session":
      {
        if (e.scope === "claude-folder" || e.scope === "global-claude-folder") {
          let o = e.scope === "global-claude-folder" ? g0n : m0n;
          return {
            behavior: "allow",
            updatedInput: t.input,
            permissionUpdates: [{
              type: "addRules",
              rules: [{
                toolName: ka,
                ruleContent: o
              }],
              behavior: "allow",
              destination: "session"
            }]
          };
        }
        return {
          behavior: "allow",
          updatedInput: t.input,
          permissionUpdates: YHt(t.filePath, t.operationType, n)
        };
      }
    case "reject":
      return {
        behavior: "deny",
        ...(r && {
          feedback: r
        })
      };
  }
}
function EHc(e) {
  let t = bHc.c(98),
    {
      payload: n,
      answer: r
    } = e,
    o = Ht(x_m),
    [s, i] = RNe.useState(""),
    [a, l] = RNe.useState(""),
    [c, u] = RNe.useState("yes"),
    [d, p] = RNe.useState(false),
    [f, m] = RNe.useState(false),
    [g, h] = RNe.useState(false),
    [y, b] = RNe.useState(false),
    _;
  if (t[0] !== n.toolName) _ = Ui(n.toolName), t[0] = n.toolName, t[1] = _;else _ = t[1];
  let S;
  if (t[2] !== n.isMcp || t[3] !== _) S = {
    toolName: _,
    isMcp: n.isMcp
  }, t[2] = n.isMcp, t[3] = _, t[4] = S;else S = t[4];
  let A = S,
    v;
  if (t[5] !== f || t[6] !== n.filePath || t[7] !== n.operationType || t[8] !== o || t[9] !== d) v = yHc({
    filePath: n.filePath,
    toolPermissionContext: o,
    operationType: n.operationType,
    onRejectFeedbackChange: l,
    onAcceptFeedbackChange: i,
    yesInputMode: d,
    noInputMode: f
  }), t[5] = f, t[6] = n.filePath, t[7] = n.operationType, t[8] = o, t[9] = d, t[10] = v;else v = t[10];
  let C = v,
    x;
  if (t[11] !== A || t[12] !== r || t[13] !== y || t[14] !== n || t[15] !== o || t[16] !== g) x = (de, Ee) => {
    if (de.type === "reject") G("tengu_reject_submitted", {
      ...A,
      has_instructions: !!Ee,
      instructions_length: Ee?.length ?? 0,
      entered_feedback_mode: y
    });else if (de.type === "accept-once") G("tengu_accept_submitted", {
      ...A,
      has_instructions: !!Ee,
      instructions_length: Ee?.length ?? 0,
      entered_feedback_mode: g
    });
    r(C_m(de, n, o, Ee));
  }, t[11] = A, t[12] = r, t[13] = y, t[14] = n, t[15] = o, t[16] = g, t[17] = x;else x = t[17];
  let I = x,
    k;
  if (t[18] !== C || t[19] !== I) k = () => {
    let de = C.find(I_m);
    if (de) I(de.option);
  }, t[18] = C, t[19] = I, t[20] = k;else k = t[20];
  let D = k,
    P;
  if (t[21] !== D) P = {
    "confirm:cycleMode": D
  }, t[21] = D, t[22] = P;else P = t[22];
  let O;
  if (t[23] === Symbol.for("react.memo_cache_sentinel")) O = {
    context: "Confirmation"
  }, t[23] = O;else O = t[23];
  No(P, O);
  let L;
  if (t[24] !== s || t[25] !== f || t[26] !== a || t[27] !== d) L = de => {
    if (de !== "yes" && d && !s.trim()) p(false);
    if (de !== "no" && f && !a.trim()) m(false);
    u(de);
  }, t[24] = s, t[25] = f, t[26] = a, t[27] = d, t[28] = L;else L = t[28];
  let M = L,
    N;
  if (t[29] !== A || t[30] !== f || t[31] !== d) N = de => {
    if (de === "yes") {
      if (d) p(false), G("tengu_accept_feedback_mode_collapsed", A);else p(true), h(true), G("tengu_accept_feedback_mode_entered", A);
    } else if (de === "no") if (f) m(false), G("tengu_reject_feedback_mode_collapsed", A);else m(true), b(true), G("tengu_reject_feedback_mode_entered", A);
  }, t[29] = A, t[30] = f, t[31] = d, t[32] = N;else N = t[32];
  let B = N,
    $;
  if (t[33] !== n.symlinkTarget) $ = n.symlinkTarget ? EE.jsx(U, {
    paddingX: 1,
    marginBottom: 1,
    children: EE.jsx(w, {
      color: "warning",
      children: SHc.relative($t(), n.symlinkTarget).startsWith("..") ? `This will modify ${n.symlinkTarget} (outside working directory) via a symlink` : `Symlink target: ${n.symlinkTarget}`
    })
  }) : null, t[33] = n.symlinkTarget, t[34] = $;else $ = t[34];
  let q = $,
    W;
  if (t[35] !== s || t[36] !== C || t[37] !== a || t[38] !== I) W = de => {
    let Ee = C.find(me => me.value === de);
    if (!Ee) return;
    if (Ee.option.type === "reject") {
      let me = a.trim();
      I(Ee.option, me || void 0);
      return;
    }
    if (Ee.option.type === "accept-once") {
      let me = s.trim();
      I(Ee.option, me || void 0);
      return;
    }
    I(Ee.option);
  }, t[35] = s, t[36] = C, t[37] = a, t[38] = I, t[39] = W;else W = t[39];
  let V = W,
    Y;
  if (t[40] !== I) Y = () => {
    I({
      type: "reject"
    });
  }, t[40] = I, t[41] = Y;else Y = t[41];
  let z = Y;
  if (n.showingDiffInIDE) {
    let Ee = `Opened changes in ${n.ideName ?? "IDE"} \u29C9`,
      me;
    if (t[42] === Symbol.for("react.memo_cache_sentinel")) me = k3t() && EE.jsx(U, {
      paddingX: 1,
      marginBottom: 1,
      children: EE.jsx(w, {
        dimColor: true,
        children: "Save file to continue\u2026"
      })
    }), t[42] = me;else me = t[42];
    let pe;
    if (t[43] !== n.question) pe = typeof n.question === "string" ? EE.jsx(w, {
      children: n.question
    }) : n.question, t[43] = n.question, t[44] = pe;else pe = t[44];
    let ge = C,
      he;
    if (t[45] !== z || t[46] !== M || t[47] !== B || t[48] !== V || t[49] !== ge) he = EE.jsx(Sr, {
      options: ge,
      inlineDescriptions: true,
      onChange: V,
      onCancel: z,
      onFocus: M,
      onInputModeToggle: B
    }), t[45] = z, t[46] = M, t[47] = B, t[48] = V, t[49] = ge, t[50] = he;else he = t[50];
    let ie;
    if (t[51] !== pe || t[52] !== he) ie = EE.jsxs(U, {
      flexDirection: "column",
      paddingX: 1,
      children: [pe, he]
    }), t[51] = pe, t[52] = he, t[53] = ie;else ie = t[53];
    let le;
    if (t[54] !== n.requestSource || t[55] !== n.subtitle || t[56] !== q || t[57] !== Ee || t[58] !== ie) le = EE.jsxs(Lf, {
      title: Ee,
      subtitle: n.subtitle,
      innerPaddingX: 0,
      requestSource: n.requestSource,
      children: [q, me, ie]
    }), t[54] = n.requestSource, t[55] = n.subtitle, t[56] = q, t[57] = Ee, t[58] = ie, t[59] = le;else le = t[59];
    let He;
    if (t[60] === Symbol.for("react.memo_cache_sentinel")) He = EE.jsx(ht, {
      chord: "escape",
      action: "cancel"
    }), t[60] = He;else He = t[60];
    let ye;
    if (t[61] !== c || t[62] !== f || t[63] !== d) ye = (c === "yes" && !d || c === "no" && !f) && EE.jsx(ht, {
      chord: "tab",
      action: "amend"
    }), t[61] = c, t[62] = f, t[63] = d, t[64] = ye;else ye = t[64];
    let ue;
    if (t[65] !== ye) ue = EE.jsx(U, {
      paddingX: 1,
      marginTop: 1,
      children: EE.jsx(w, {
        dimColor: true,
        children: EE.jsxs(Tn, {
          children: [He, ye]
        })
      })
    }), t[65] = ye, t[66] = ue;else ue = t[66];
    let we;
    if (t[67] !== le || t[68] !== ue) we = EE.jsxs(EE.Fragment, {
      children: [le, ue]
    }), t[67] = le, t[68] = ue, t[69] = we;else we = t[69];
    return we;
  }
  let K;
  if (t[70] !== n.question) K = typeof n.question === "string" ? EE.jsx(w, {
    children: n.question
  }) : n.question, t[70] = n.question, t[71] = K;else K = t[71];
  let Z = C,
    J;
  if (t[72] !== z || t[73] !== M || t[74] !== B || t[75] !== V || t[76] !== Z) J = EE.jsx(Sr, {
    options: Z,
    inlineDescriptions: true,
    onChange: V,
    onCancel: z,
    onFocus: M,
    onInputModeToggle: B
  }), t[72] = z, t[73] = M, t[74] = B, t[75] = V, t[76] = Z, t[77] = J;else J = t[77];
  let ne;
  if (t[78] !== K || t[79] !== J) ne = EE.jsxs(U, {
    flexDirection: "column",
    paddingX: 1,
    children: [K, J]
  }), t[78] = K, t[79] = J, t[80] = ne;else ne = t[80];
  let oe;
  if (t[81] !== n.content || t[82] !== n.requestSource || t[83] !== n.subtitle || t[84] !== n.title || t[85] !== q || t[86] !== ne) oe = EE.jsxs(Lf, {
    title: n.title,
    subtitle: n.subtitle,
    innerPaddingX: 0,
    requestSource: n.requestSource,
    children: [q, n.content, ne]
  }), t[81] = n.content, t[82] = n.requestSource, t[83] = n.subtitle, t[84] = n.title, t[85] = q, t[86] = ne, t[87] = oe;else oe = t[87];
  let re;
  if (t[88] === Symbol.for("react.memo_cache_sentinel")) re = EE.jsx(ht, {
    chord: "escape",
    action: "cancel"
  }), t[88] = re;else re = t[88];
  let ee;
  if (t[89] !== c || t[90] !== f || t[91] !== d) ee = (c === "yes" && !d || c === "no" && !f) && EE.jsx(ht, {
    chord: "tab",
    action: "amend"
  }), t[89] = c, t[90] = f, t[91] = d, t[92] = ee;else ee = t[92];
  let ce;
  if (t[93] !== ee) ce = EE.jsx(U, {
    paddingX: 1,
    marginTop: 1,
    children: EE.jsx(w, {
      dimColor: true,
      children: EE.jsxs(Tn, {
        children: [re, ee]
      })
    })
  }), t[93] = ee, t[94] = ce;else ce = t[94];
  let ae;
  if (t[95] !== oe || t[96] !== ce) ae = EE.jsxs(EE.Fragment, {
    children: [oe, ce]
  }), t[95] = oe, t[96] = ce, t[97] = ae;else ae = t[97];
  return ae;
}
function I_m(e) {
  return e.option.type === "accept-session";
}
function x_m(e) {
  return e.toolPermissionContext;
}
var bHc, SHc, RNe, EE;