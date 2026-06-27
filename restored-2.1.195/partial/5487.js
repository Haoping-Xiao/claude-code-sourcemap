// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module z6o
// matched 2.1.88 source: src/components/PromptInput/PromptInputFooter.tsx
// class=partial  jaccard=0.1001  score=0.3924  fileCov=0.1185
// note: low-confidence suggestion: src/components/PromptInput/PromptInputFooter.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var z6o = E(() => {
  si();
  uo();
  SC();
  loe();
  W_c();
  fzn();
  q6o();
  _i();
  Ye();
  Un();
  atr();
  JFo();
  Ko();
  eKn();
  kdr = R(lt(), 1), V_c = require("path"), z_c = R(rt(), 1), UTt = R(rt(), 1), BH = R(se(), 1);
  umm = UTt.memo(function (t) {
    let n = kdr.c(26),
      {
        bridgeSelected: r,
        leadingSeparator: o
      } = t,
      s = Ht(fmm),
      i = Ht(mmm),
      a = Ht(gmm),
      l = Ht(hmm),
      c = Ht(ymm),
      u = Ht(_mm),
      d;
    if (n[0] !== l || n[1] !== c) d = !xC() || c || Boolean(l), n[0] = l, n[1] = c, n[2] = d;else d = n[2];
    let p = d,
      f;
    if (n[3] !== s || n[4] !== a || n[5] !== i) f = w9n({
      connected: s,
      sessionActive: i,
      reconnecting: a
    }), n[3] = s, n[4] = a, n[5] = i, n[6] = f;else f = n[6];
    let m = f,
      g = W6o(),
      h,
      y;
    if (n[7] !== p || n[8] !== m.label) h = () => {
      if (!p && m.label === "/rc active") G_c();
    }, y = [p, m.label], n[7] = p, n[8] = m.label, n[9] = h, n[10] = y;else h = n[9], y = n[10];
    if (UTt.useEffect(h, y), p) return null;
    let b = m.label === "/rc active" && !g ? "/rc" : m.label,
      _;
    if (n[11] !== b || n[12] !== u) _ = u ? BH.jsx(xs, {
      url: u,
      children: b
    }) : b, n[11] = b, n[12] = u, n[13] = _;else _ = n[13];
    let S = _,
      A;
    if (n[14] !== o) A = o && BH.jsx(w, {
      dimColor: !0,
      children: " \xB7 "
    }, "bridge-sep"), n[14] = o, n[15] = A;else A = n[15];
    let v = r ? "background" : m.color,
      C;
    if (n[16] !== r) C = r && BH.jsxs(w, {
      dimColor: !0,
      children: [" \xB7 ", BH.jsx(ht, {
        chord: "enter",
        action: "view"
      })]
    }), n[16] = r, n[17] = C;else C = n[17];
    let x;
    if (n[18] !== r || n[19] !== S || n[20] !== v || n[21] !== C) x = BH.jsxs(w, {
      color: v,
      inverse: r,
      wrap: "truncate",
      children: [S, C]
    }), n[18] = r, n[19] = S, n[20] = v, n[21] = C, n[22] = x;else x = n[22];
    let I;
    if (n[23] !== A || n[24] !== x) I = BH.jsxs(BH.Fragment, {
      children: [A, x]
    }), n[23] = A, n[24] = x, n[25] = I;else I = n[25];
    return I;
  });
});
function Smm(e) {
  let t = K6o.c(88),
    {
      apiKeyStatus: n,
      debug: r,
      exitMessage: o,
      leftArrowPending: s,
      leftArrowDetachAvailable: i,
      vimMode: a,
      mode: l,
      isAutoUpdating: c,
      verbose: u,
      onChangeIsUpdating: d,
      suggestions: p,
      selectedSuggestion: f,
      suggestionsEmptyMessage: m,
      maxColumnWidth: g,
      hoveredSuggestionId: h,
      onSelectSuggestion: y,
      onHoverSuggestion: b,
      toolPermissionContext: _,
      helpOpen: S,
      suppressHint: A,
      isLoading: v,
      isExternalLoading: C,
      betweenCalls: x,
      tasksSelected: I,
      bridgeSelected: k,
      tmuxSelected: D,
      ideSelection: P,
      mcpClients: O,
      isPasting: L,
      showExpandPasteHint: M,
      hasStash: N,
      isInputWrapped: B,
      messagesRef: $,
      lastAssistantMessageId: q,
      tokenUsage: W,
      isSearching: V,
      historyQuery: Y,
      setHistoryQuery: z,
      historyFailedMatch: K,
      onOpenTasksDialog: Z
    } = e,
    J = C === void 0 ? !1 : C,
    ne = x === void 0 ? !0 : x,
    oe = L === void 0 ? !1 : L,
    re = M === void 0 ? !1 : M,
    ee = N === void 0 ? !1 : N,
    ce = G_(),
    {
      columns: ae,
      rows: de
    } = br(),
    Ee;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) Ee = Ns(), t[0] = Ee;else Ee = t[0];
  let me = Ee,
    pe = Sd(),
    ge = Ht(Hmm),
    he = me && de < bmm,
    ie;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) ie = !1, t[1] = ie;else ie = t[1];
  let le = me && ge && "focus",
    He;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) He = bD() && "memory paused", t[2] = He;else He = t[2];
  let ye;
  if (t[3] !== le) ye = [ie, le, He].filter(Amm), t[3] = le, t[4] = ye;else ye = t[4];
  let ue = ye,
    we = Adr(),
    Ce = Ht(Emm),
    Ie = I && (we === 0 || Ce < 0),
    Ve;
  if (t[5] !== ce) Ve = fmc(ce), t[5] = ce, t[6] = Ve;else Ve = t[6];
  let Ze = Ve,
    Be = A || V,
    Me = Be || Ze,
    Ue = p.length > 0 || !!m,
    tt;
  if (t[7] !== Ue || t[8] !== h || t[9] !== g || t[10] !== b || t[11] !== y || t[12] !== f || t[13] !== p || t[14] !== m) tt = me && Ue ? {
    suggestions: p,
    selectedSuggestion: f,
    maxColumnWidth: g,
    emptyMessage: m,
    hoveredId: h,
    onSelect: y,
    onHoverChange: b
  } : null, t[7] = Ue, t[8] = h, t[9] = g, t[10] = b, t[11] = y, t[12] = f, t[13] = p, t[14] = m, t[15] = tt;else tt = t[15];
  if (jql(tt), Ue && !me) {
    let Hn;
    if (t[16] !== g || t[17] !== f || t[18] !== p || t[19] !== m) Hn = eB.jsx(U, {
      paddingX: 2,
      paddingY: 0,
      children: eB.jsx(jGe, {
        suggestions: p,
        selectedSuggestion: f,
        maxColumnWidth: g,
        emptyMessage: m
      })
    }), t[16] = g, t[17] = f, t[18] = p, t[19] = m, t[20] = Hn;else Hn = t[20];
    return Hn;
  }
  if (S) {
    let Hn;
    if (t[21] === Symbol.for("react.memo_cache_sentinel")) Hn = eB.jsx(Dnr, {
      dimColor: !0,
      fixedWidth: !0,
      paddingX: 2
    }), t[21] = Hn;else Hn = t[21];
    return Hn;
  }
  let Ke = pe ? "column" : "row",
    Et;
  if (t[22] !== o || t[23] !== oe || t[24] !== he || t[25] !== q || t[26] !== $ || t[27] !== l || t[28] !== Ze || t[29] !== W || t[30] !== a) Et = l === "prompt" && !he && !o.show && !oe && Ze && eB.jsx(mmc, {
    messagesRef: $,
    lastAssistantMessageId: q,
    tokenUsage: W,
    vimMode: a
  }), t[22] = o, t[23] = oe, t[24] = he, t[25] = q, t[26] = $, t[27] = l, t[28] = Ze, t[29] = W, t[30] = a, t[31] = Et;else Et = t[31];
  let ct;
  if (t[32] !== he || t[33] !== ce?.statusLine || t[34] !== Ze) ct = !he && Ze && (nKe(ce?.statusLine)?.hideVimModeIndicator ?? !1), t[32] = he, t[33] = ce?.statusLine, t[34] = Ze, t[35] = ct;else ct = t[35];
  let Je = !A,
    gt;
  if (t[36] !== ne || t[37] !== o || t[38] !== K || t[39] !== Y || t[40] !== J || t[41] !== v || t[42] !== oe || t[43] !== V || t[44] !== i || t[45] !== s || t[46] !== l || t[47] !== Z || t[48] !== Ie || t[49] !== z || t[50] !== re || t[51] !== Me || t[52] !== Be || t[53] !== ct || t[54] !== Je || t[55] !== D || t[56] !== _ || t[57] !== a) gt = eB.jsx(U_c, {
    exitMessage: o,
    leftArrowPending: s,
    leftArrowDetachAvailable: i,
    vimMode: a,
    hideVimModeIndicator: ct,
    mode: l,
    toolPermissionContext: _,
    suppressHint: Me,
    suppressHintExceptStatusline: Be,
    isInputEmpty: Je,
    isLoading: v,
    isExternalLoading: J,
    betweenCalls: ne,
    tasksSelected: Ie,
    tmuxSelected: D,
    isPasting: oe,
    showExpandPasteHint: re,
    isSearching: V,
    historyQuery: Y,
    setHistoryQuery: z,
    historyFailedMatch: K,
    onOpenTasksDialog: Z
  }), t[36] = ne, t[37] = o, t[38] = K, t[39] = Y, t[40] = J, t[41] = v, t[42] = oe, t[43] = V, t[44] = i, t[45] = s, t[46] = l, t[47] = Z, t[48] = Ie, t[49] = z, t[50] = re, t[51] = Me, t[52] = Be, t[53] = ct, t[54] = Je, t[55] = D, t[56] = _, t[57] = a, t[58] = gt;else gt = t[58];
  let st;
  if (t[59] === Symbol.for("react.memo_cache_sentinel")) st = !1, t[59] = st;else st = t[59];
  let xt;
  if (t[60] !== Et || t[61] !== gt) xt = eB.jsxs(U, {
    flexDirection: "column",
    flexShrink: 1,
    children: [Et, gt, st]
  }), t[60] = Et, t[61] = gt, t[62] = xt;else xt = t[62];
  let vt;
  if (t[63] !== n || t[64] !== ee || t[65] !== c || t[66] !== B || t[67] !== d || t[68] !== W || t[69] !== u) vt = me ? null : eB.jsx(idr, {
    apiKeyStatus: n,
    isAutoUpdating: c,
    verbose: u,
    tokenUsage: W,
    onChangeIsUpdating: d,
    isInputWrapped: B,
    hasStash: ee
  }), t[63] = n, t[64] = ee, t[65] = c, t[66] = B, t[67] = d, t[68] = W, t[69] = u, t[70] = vt;else vt = t[70];
  let jt;
  if (t[71] !== k || t[72] !== r || t[73] !== P || t[74] !== O || t[75] !== ue || t[76] !== vt) jt = eB.jsx(Tmm, {
    bridgeSelected: k,
    modeLabels: ue,
    ideSelection: P,
    mcpClients: O,
    debug: r,
    notifications: vt
  }), t[71] = k, t[72] = r, t[73] = P, t[74] = O, t[75] = ue, t[76] = vt, t[77] = jt;else jt = t[77];
  let en;
  if (t[78] !== ae || t[79] !== Ke || t[80] !== xt || t[81] !== jt) en = eB.jsxs(U, {
    width: ae,
    flexDirection: Ke,
    flexWrap: "wrap",
    alignItems: "flex-start",
    paddingLeft: 2,
    paddingRight: me ? 1 : 2,
    columnGap: 1,
    children: [xt, jt]
  }), t[78] = ae, t[79] = Ke, t[80] = xt, t[81] = jt, t[82] = en;else en = t[82];
  let Dn = l === "prompt" && !o.show && !oe,
    nn;
  if (t[83] !== Dn) nn = eB.jsx(Gyc, {
    showWorkflows: Dn
  }), t[83] = Dn, t[84] = nn;else nn = t[84];
  let Ln;
  if (t[85] !== en || t[86] !== nn) Ln = eB.jsxs(eB.Fragment, {
    children: [en, nn]
  }), t[85] = en, t[86] = nn, t[87] = Ln;else Ln = t[87];
  return Ln;
}
function Emm(e) {
  return e.coordinatorTaskIndex;
}
function Amm(e) {
  return Boolean(e);
}
function Hmm(e) {
  return e.briefTranscript;
}
function Tmm(e) {
  let t = K6o.c(9),
    {
      notifications: n,
      bridgeSelected: r,
      modeLabels: o,
      ideSelection: s,
      mcpClients: i,
      debug: a
    } = e,
    l;
  if (t[0] !== r || t[1] !== a || t[2] !== s || t[3] !== i || t[4] !== o) l = eB.jsx(K_c, {
    ideSelection: s,
    mcpClients: i,
    debug: a,
    bridgeSelected: r,
    modeLabels: o
  }), t[0] = r, t[1] = a, t[2] = s, t[3] = i, t[4] = o, t[5] = l;else l = t[5];
  let c;
  if (t[6] !== n || t[7] !== l) c = eB.jsxs(U, {
    flexShrink: 0,
    marginLeft: "auto",
    flexDirection: "column",
    alignItems: "flex-end",
    children: [n, l]
  }), t[6] = n, t[7] = l, t[8] = c;else c = t[8];
  return c;
}
var K6o,
  Y_c,
  eB,
  bmm = 15,
  X_c;