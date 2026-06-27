// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NHc
// matched 2.1.88 source: src/components/permissions/SkillPermissionRequest/SkillPermissionRequest.tsx
// class=partial  jaccard=0.2397  score=0.6539  fileCov=0.2746
// note: low-confidence suggestion: src/components/permissions/SkillPermissionRequest/SkillPermissionRequest.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var NHc = E(() => {
  mE();
  X0();
  gIo();
  Ye();
  UX();
  $Hc = R(lt(), 1), YTe = R(se(), 1);
});
function N_m(e, t, n) {
  switch (e) {
    case "yes":
      return {
        behavior: "allow",
        updatedInput: t.input,
        ...(n && {
          feedback: n
        })
      };
    case "yes-exact":
      return {
        behavior: "allow",
        updatedInput: t.input,
        permissionUpdates: [{
          type: "addRules",
          rules: [{
            toolName: nE,
            ruleContent: t.skill
          }],
          behavior: "allow",
          destination: "localSettings"
        }]
      };
    case "yes-prefix":
      {
        let r = t.skill.indexOf(" "),
          o = r > 0 ? t.skill.substring(0, r) : t.skill;
        return {
          behavior: "allow",
          updatedInput: t.input,
          permissionUpdates: [{
            type: "addRules",
            rules: [{
              toolName: nE,
              ruleContent: `${o}:*`
            }],
            behavior: "allow",
            destination: "localSettings"
          }]
        };
      }
    case "no":
      return {
        behavior: "deny",
        ...(n && {
          feedback: n
        })
      };
  }
}
function B_m(e) {
  return e.showAlwaysAllow && e.skill !== "";
}
function U_m(e) {
  if (!e.showAlwaysAllow) return !1;
  return e.skill.indexOf(" ") > 0;
}
function UHc(e) {
  let t = BHc.c(51),
    {
      payload: n,
      answer: r
    } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) o = yr(), t[0] = o;else o = t[0];
  let s = o,
    i;
  if (t[1] !== n) i = B_m(n), t[1] = n, t[2] = i;else i = t[2];
  let a = i,
    l;
  if (t[3] !== n) l = U_m(n), t[3] = n, t[4] = l;else l = t[4];
  let c = l,
    u;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) u = {
    label: "Yes",
    value: "yes",
    feedbackConfig: {
      type: "accept"
    }
  }, t[5] = u;else u = t[5];
  let d;
  if (t[6] !== n.skill || t[7] !== a || t[8] !== c) {
    if (d = [u], a) {
      let P;
      if (t[10] !== n.skill) P = R3.jsx(w, {
        bold: !0,
        children: n.skill
      }), t[10] = n.skill, t[11] = P;else P = t[11];
      let O;
      if (t[12] === Symbol.for("react.memo_cache_sentinel")) O = R3.jsx(w, {
        bold: !0,
        children: s
      }), t[12] = O;else O = t[12];
      let L;
      if (t[13] !== P) L = {
        label: R3.jsxs(w, {
          children: ["Yes, and don't ask again for ", P, " ", "in ", O]
        }),
        value: "yes-exact"
      }, t[13] = P, t[14] = L;else L = t[14];
      d.push(L);
    }
    if (c) {
      let P;
      if (t[15] !== n.skill) {
        let $ = n.skill.indexOf(" ");
        P = n.skill.substring(0, $), t[15] = n.skill, t[16] = P;
      } else P = t[16];
      let L = P + ":*",
        M;
      if (t[17] !== L) M = R3.jsx(w, {
        bold: !0,
        children: L
      }), t[17] = L, t[18] = M;else M = t[18];
      let N;
      if (t[19] === Symbol.for("react.memo_cache_sentinel")) N = R3.jsx(w, {
        bold: !0,
        children: s
      }), t[19] = N;else N = t[19];
      let B;
      if (t[20] !== M) B = {
        label: R3.jsxs(w, {
          children: ["Yes, and don't ask again for", " ", M, " commands in", " ", N]
        }),
        value: "yes-prefix"
      }, t[20] = M, t[21] = B;else B = t[21];
      d.push(B);
    }
    let D;
    if (t[22] === Symbol.for("react.memo_cache_sentinel")) D = {
      label: "No",
      value: "no",
      feedbackConfig: {
        type: "reject"
      }
    }, t[22] = D;else D = t[22];
    d.push(D), t[6] = n.skill, t[7] = a, t[8] = c, t[9] = d;
  } else d = t[9];
  let p = d,
    f;
  if (t[23] !== n.toolName) f = Ui(n.toolName), t[23] = n.toolName, t[24] = f;else f = t[24];
  let m;
  if (t[25] !== n.isMcp || t[26] !== f) m = {
    toolName: f,
    isMcp: n.isMcp
  }, t[25] = n.isMcp, t[26] = f, t[27] = m;else m = t[27];
  let g = m,
    h;
  if (t[28] !== r || t[29] !== n) h = (D, P) => {
    r(N_m(D, n, P));
  }, t[28] = r, t[29] = n, t[30] = h;else h = t[30];
  let y = h,
    b;
  if (t[31] !== r) b = () => {
    r({
      behavior: "deny"
    });
  }, t[31] = r, t[32] = b;else b = t[32];
  let _ = b,
    S = `Use skill "${n.skill}"?`,
    A;
  if (t[33] === Symbol.for("react.memo_cache_sentinel")) A = R3.jsx(w, {
    children: "Claude may use instructions, code, or files from this Skill."
  }), t[33] = A;else A = t[33];
  let v;
  if (t[34] !== n.skillDescription) v = n.skillDescription ? R3.jsx(U, {
    flexDirection: "column",
    paddingX: 2,
    paddingY: 1,
    children: R3.jsx(w, {
      dimColor: !0,
      children: n.skillDescription
    })
  }) : null, t[34] = n.skillDescription, t[35] = v;else v = t[35];
  let C;
  if (t[36] !== n.permissionResult) C = R3.jsx(_2, {
    permissionResult: n.permissionResult,
    toolType: "tool"
  }), t[36] = n.permissionResult, t[37] = C;else C = t[37];
  let x;
  if (t[38] !== _ || t[39] !== y || t[40] !== p || t[41] !== g) x = R3.jsx(DNe, {
    options: p,
    onSelect: y,
    onCancel: _,
    toolAnalyticsContext: g
  }), t[38] = _, t[39] = y, t[40] = p, t[41] = g, t[42] = x;else x = t[42];
  let I;
  if (t[43] !== C || t[44] !== x) I = R3.jsxs(U, {
    flexDirection: "column",
    children: [C, x]
  }), t[43] = C, t[44] = x, t[45] = I;else I = t[45];
  let k;
  if (t[46] !== n.requestSource || t[47] !== v || t[48] !== I || t[49] !== S) k = R3.jsxs(Lf, {
    title: S,
    requestSource: n.requestSource,
    children: [A, v, I]
  }), t[46] = n.requestSource, t[47] = v, t[48] = I, t[49] = S, t[50] = k;else k = t[50];
  return k;
}
var BHc, R3;