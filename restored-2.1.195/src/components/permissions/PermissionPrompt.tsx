// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AHc
// matched 2.1.88 source: src/components/permissions/PermissionPrompt.tsx
// class=modified  jaccard=0.5475  score=0.8929  fileCov=0.586
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var AHc = E(() => {
  Vl();
  Bs();
  Ko();
  _Hc();
  X0();
  Ye();
  ps();
  kt();
  Du();
  uo();
  u_();
  Lo();
  aE();
  Yf();
  ((bHc = R(lt(), 1)), (SHc = require("path")), (RNe = R(rt(), 1)), (EE = R(se(), 1)));
});
function DNe(e) {
  let t = HHc.c(57),
    { options: n, onSelect: r, onCancel: o, question: s, toolAnalyticsContext: i } = e,
    a = s === void 0 ? "Do you want to proceed?" : s,
    l = Ho(),
    [c, u] = LNe.useState(""),
    [d, p] = LNe.useState(""),
    [f, m] = LNe.useState(false),
    [g, h] = LNe.useState(false),
    [y, b] = LNe.useState(null),
    [_, S] = LNe.useState(false),
    [A, v] = LNe.useState(false),
    C;
  if (t[0] !== y || t[1] !== n) {
    let re;
    if (t[3] !== y) ((re = (ee) => ee.value === y), (t[3] = y), (t[4] = re));
    else re = t[4];
    ((C = n.find(re)), (t[0] = y), (t[1] = n), (t[2] = C));
  } else C = t[2];
  let I = C?.feedbackConfig?.type,
    k = (I === "accept" && !f) || (I === "reject" && !g),
    D;
  if (t[5] !== f || t[6] !== n || t[7] !== g) {
    let re;
    if (t[9] !== f || t[10] !== g)
      ((re = (ee) => {
        let { value: ce, label: ae, feedbackConfig: de } = ee;
        if (!de)
          return {
            label: ae,
            value: ce,
            description: ee.description,
          };
        let { type: Ee, placeholder: me } = de,
          pe = Ee === "accept" ? f : g,
          ge = Ee === "accept" ? u : p,
          he = k_m[Ee];
        if (pe)
          return {
            type: "input",
            label: ae,
            value: ce,
            placeholder: me ?? he,
            onChange: ge,
            allowEmptySubmitToCancel: true,
          };
        return {
          label: ae,
          value: ce,
          description: ee.description,
        };
      }),
        (t[9] = f),
        (t[10] = g),
        (t[11] = re));
    else re = t[11];
    ((D = n.map(re)), (t[5] = f), (t[6] = n), (t[7] = g), (t[8] = D));
  } else D = t[8];
  let P = D,
    O;
  if (t[12] !== f || t[13] !== n || t[14] !== g || t[15] !== i?.isMcp || t[16] !== i?.toolName)
    ((O = (re) => {
      let ee = n.find((de) => de.value === re);
      if (!ee?.feedbackConfig) return;
      let { type: ce } = ee.feedbackConfig,
        ae = {
          toolName: i?.toolName,
          isMcp: i?.isMcp ?? false,
        };
      if (ce === "accept") {
        if (f) (m(false), G("tengu_accept_feedback_mode_collapsed", ae));
        else (m(true), S(true), G("tengu_accept_feedback_mode_entered", ae));
      } else if (ce === "reject")
        if (g) (h(false), G("tengu_reject_feedback_mode_collapsed", ae));
        else (h(true), v(true), G("tengu_reject_feedback_mode_entered", ae));
    }),
      (t[12] = f),
      (t[13] = n),
      (t[14] = g),
      (t[15] = i?.isMcp),
      (t[16] = i?.toolName),
      (t[17] = O));
  else O = t[17];
  let L = O,
    M;
  if (
    t[18] !== c ||
    t[19] !== _ ||
    t[20] !== r ||
    t[21] !== n ||
    t[22] !== d ||
    t[23] !== A ||
    t[24] !== i?.isMcp ||
    t[25] !== i?.toolName
  )
    ((M = (re) => {
      let ee = n.find((ae) => ae.value === re);
      if (!ee) return;
      let ce;
      if (ee.feedbackConfig) {
        let de = (ee.feedbackConfig.type === "accept" ? c : d).trim();
        if (de) ce = de;
        let Ee = {
          toolName: i?.toolName,
          isMcp: i?.isMcp ?? false,
          has_instructions: !!de,
          instructions_length: de?.length ?? 0,
          entered_feedback_mode: ee.feedbackConfig.type === "accept" ? _ : A,
        };
        if (ee.feedbackConfig.type === "accept") G("tengu_accept_submitted", Ee);
        else if (ee.feedbackConfig.type === "reject") G("tengu_reject_submitted", Ee);
      }
      r(re, ce);
    }),
      (t[18] = c),
      (t[19] = _),
      (t[20] = r),
      (t[21] = n),
      (t[22] = d),
      (t[23] = A),
      (t[24] = i?.isMcp),
      (t[25] = i?.toolName),
      (t[26] = M));
  else M = t[26];
  let N = M,
    B;
  if (t[27] !== N || t[28] !== n) {
    B = {};
    for (let re of n) if (re.keybinding) B[re.keybinding] = () => N(re.value);
    ((t[27] = N), (t[28] = n), (t[29] = B));
  } else B = t[29];
  let $ = B,
    q;
  if (t[30] === Symbol.for("react.memo_cache_sentinel"))
    ((q = {
      context: "Confirmation",
    }),
      (t[30] = q));
  else q = t[30];
  No($, q);
  let W;
  if (t[31] !== o || t[32] !== l)
    ((W = () => {
      (G("tengu_permission_request_escape", {}), l(R_m), o?.());
    }),
      (t[31] = o),
      (t[32] = l),
      (t[33] = W));
  else W = t[33];
  let V = W,
    Y;
  if (t[34] !== a)
    ((Y =
      typeof a === "string"
        ? Fme.jsx(w, {
            children: a,
          })
        : a),
      (t[34] = a),
      (t[35] = Y));
  else Y = t[35];
  let z;
  if (t[36] !== c || t[37] !== f || t[38] !== n || t[39] !== d || t[40] !== g)
    ((z = (re) => {
      let ee = n.find((ce) => ce.value === re);
      if (ee?.feedbackConfig?.type !== "accept" && f && !c.trim()) m(false);
      if (ee?.feedbackConfig?.type !== "reject" && g && !d.trim()) h(false);
      b(re);
    }),
      (t[36] = c),
      (t[37] = f),
      (t[38] = n),
      (t[39] = d),
      (t[40] = g),
      (t[41] = z));
  else z = t[41];
  let K;
  if (t[42] !== V || t[43] !== L || t[44] !== N || t[45] !== P || t[46] !== z)
    ((K = Fme.jsx(Sr, {
      options: P,
      inlineDescriptions: true,
      onChange: N,
      onCancel: V,
      onFocus: z,
      onInputModeToggle: L,
    })),
      (t[42] = V),
      (t[43] = L),
      (t[44] = N),
      (t[45] = P),
      (t[46] = z),
      (t[47] = K));
  else K = t[47];
  let Z;
  if (t[48] === Symbol.for("react.memo_cache_sentinel"))
    ((Z = Fme.jsx(ht, {
      chord: "escape",
      action: "cancel",
    })),
      (t[48] = Z));
  else Z = t[48];
  let J;
  if (t[49] !== k)
    ((J =
      k &&
      Fme.jsx(ht, {
        chord: "tab",
        action: "amend",
      })),
      (t[49] = k),
      (t[50] = J));
  else J = t[50];
  let ne;
  if (t[51] !== J)
    ((ne = Fme.jsx(U, {
      marginTop: 1,
      children: Fme.jsx(w, {
        dimColor: true,
        children: Fme.jsxs(Tn, {
          children: [Z, J],
        }),
      }),
    })),
      (t[51] = J),
      (t[52] = ne));
  else ne = t[52];
  let oe;
  if (t[53] !== K || t[54] !== ne || t[55] !== Y)
    ((oe = Fme.jsxs(U, {
      flexDirection: "column",
      children: [Y, K, ne],
    })),
      (t[53] = K),
      (t[54] = ne),
      (t[55] = Y),
      (t[56] = oe));
  else oe = t[56];
  return oe;
}
function R_m(e) {
  return {
    ...e,
    attribution: {
      ...e.attribution,
      escapeCount: e.attribution.escapeCount + 1,
    },
  };
}
var HHc, LNe, Fme, k_m;
