// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wb
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.03  score=0.5903  fileCov=0.0306
// note: nearest: src/components/Settings/Config.tsx (0.03); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wb = E(() => {
  gHo();
  vH();
  mHo();
});
function qPe(e) {
  let t = yHo.c(107),
    {
      title: n,
      subtitle: r,
      fields: o,
      values: s,
      onChange: i,
      onSubmit: a,
      onCancel: l,
      submitLabel: c
    } = e,
    u = c === void 0 ? "Save" : c,
    d = o.length + 1,
    [p, f] = hHo.useState(0),
    m;
  if (t[0] !== o[0] || t[1] !== s) m = () => {
    let Ve = o[0];
    return Ve?.type === "text" ? (s[Ve.key] ?? "").length : 0;
  }, t[0] = o[0], t[1] = s, t[2] = m;else m = t[2];
  let [g, h] = hHo.useState(m),
    y = p < o.length ? o[p] : null,
    b = y?.type === "text",
    _;
  if (t[3] !== o) _ = Math.max(...o.map(L7p)), t[3] = o, t[4] = _;else _ = t[4];
  let S = _,
    A;
  if (t[5] !== s) A = function (Ze) {
    if (Ze.type !== "text") return null;
    let Be = s[Ze.key] ?? "";
    if (Ze.required && Be.trim() === "") return `${Ze.label} is required`;
    return Ze.validate ? Ze.validate(Be, s) : null;
  }, t[5] = s, t[6] = A;else A = t[6];
  let v = A,
    C;
  if (t[7] !== v || t[8] !== o) C = o.map(v).find(R7p), t[7] = v, t[8] = o, t[9] = C;else C = t[9];
  let x = C,
    I;
  if (t[10] !== o || t[11] !== p || t[12] !== d || t[13] !== s) I = function (Ze) {
    let Be = Math.max(0, Math.min(d - 1, Ze));
    if (Be === p) return;
    f(Be);
    let Me = o[Be];
    if (Me?.type === "text") h((s[Me.key] ?? "").length);
  }, t[10] = o, t[11] = p, t[12] = d, t[13] = s, t[14] = I;else I = t[14];
  let k = I,
    D;
  if (t[15] !== x || t[16] !== a) D = function () {
    if (x) return;
    a();
  }, t[15] = x, t[16] = a, t[17] = D;else D = t[17];
  let P = D,
    O;
  if (t[18] !== y || t[19] !== i || t[20] !== s) O = function (Ze) {
    if (y?.type !== "select") return;
    let Be = y.options,
      Me = s[y.key] ?? Be[0]?.value ?? "",
      Ue = Be.findIndex(bt => bt.value === Me),
      tt = Be[(Ue + Ze + Be.length) % Be.length];
    if (tt) i(y.key, tt.value);
  }, t[18] = y, t[19] = i, t[20] = s, t[21] = O;else O = t[21];
  let L = O,
    M,
    N;
  if (t[22] !== p || t[23] !== k) N = () => k(p - 1), M = () => k(p + 1), t[22] = p, t[23] = k, t[24] = M, t[25] = N;else M = t[24], N = t[25];
  let B;
  if (t[26] !== p || t[27] !== k || t[28] !== d || t[29] !== P) B = () => {
    if (p === d - 1) P();else k(p + 1);
  }, t[26] = p, t[27] = k, t[28] = d, t[29] = P, t[30] = B;else B = t[30];
  let $;
  if (t[31] !== l || t[32] !== M || t[33] !== B || t[34] !== N) $ = {
    "select:previous": N,
    "select:next": M,
    "select:accept": B,
    "select:cancel": l
  }, t[31] = l, t[32] = M, t[33] = B, t[34] = N, t[35] = $;else $ = t[35];
  let q = !b,
    W;
  if (t[36] !== q) W = {
    context: "Select",
    isActive: q
  }, t[36] = q, t[37] = W;else W = t[37];
  No($, W);
  let V;
  if (t[38] === Symbol.for("react.memo_cache_sentinel")) V = {
    context: "Settings"
  }, t[38] = V;else V = t[38];
  $r("confirm:no", l, V);
  let Y;
  if (t[39] !== L) Y = {
    "tabs:previous": () => L(-1),
    "tabs:next": () => L(1)
  }, t[39] = L, t[40] = Y;else Y = t[40];
  let z = y?.type === "select",
    K;
  if (t[41] !== z) K = {
    context: "Tabs",
    isActive: z
  }, t[41] = z, t[42] = K;else K = t[42];
  No(Y, K);
  let Z = y ? s[y.key] ?? "" : "",
    J;
  if (t[43] !== y || t[44] !== Z || t[45] !== s) J = y?.type === "text" && y.validate ? y.validate(Z, s) : null, t[43] = y, t[44] = Z, t[45] = s, t[46] = J;else J = t[46];
  let ne = J,
    oe;
  if (t[47] !== ne || t[48] !== y || t[49] !== Z || t[50] !== s) oe = !ne && y?.hint ? y.hint(Z, s) : void 0, t[47] = ne, t[48] = y, t[49] = Z, t[50] = s, t[51] = oe;else oe = t[51];
  let re = oe,
    ee;
  if (t[52] !== g || t[53] !== o || t[54] !== p || t[55] !== S || t[56] !== k || t[57] !== l || t[58] !== i || t[59] !== P || t[60] !== s) {
    let Ve;
    if (t[62] !== g || t[63] !== o.length || t[64] !== p || t[65] !== S || t[66] !== k || t[67] !== l || t[68] !== i || t[69] !== P || t[70] !== s) Ve = (Ze, Be) => {
      let Me = Be === p,
        Ue = s[Ze.key] ?? "";
      return z_.jsx(D7p, {
        field: Ze,
        value: Ue,
        isFocused: Me,
        labelWidth: S,
        cursor: g,
        setCursor: h,
        onChange: tt => i(Ze.key, tt),
        onCancel: l,
        onUp: () => k(Be - 1),
        onDown: () => k(Be + 1),
        onEnter: () => {
          if (Be === o.length - 1) P();else k(Be + 1);
        }
      }, Ze.key);
    }, t[62] = g, t[63] = o.length, t[64] = p, t[65] = S, t[66] = k, t[67] = l, t[68] = i, t[69] = P, t[70] = s, t[71] = Ve;else Ve = t[71];
    ee = o.map(Ve), t[52] = g, t[53] = o, t[54] = p, t[55] = S, t[56] = k, t[57] = l, t[58] = i, t[59] = P, t[60] = s, t[61] = ee;
  } else ee = t[61];
  let ce = p === d - 1 ? "suggestion" : void 0,
    ae = p === d - 1 ? nt.pointer : " ",
    de;
  if (t[72] !== ce || t[73] !== ae) de = z_.jsxs(w, {
    color: ce,
    children: [ae, " "]
  }), t[72] = ce, t[73] = ae, t[74] = de;else de = t[74];
  let Ee = p === d - 1,
    me = !!x,
    pe;
  if (t[75] !== u || t[76] !== Ee || t[77] !== me) pe = z_.jsx(w, {
    bold: Ee,
    dimColor: me,
    children: u
  }), t[75] = u, t[76] = Ee, t[77] = me, t[78] = pe;else pe = t[78];
  let ge;
  if (t[79] !== x || t[80] !== p || t[81] !== d) ge = x && p === d - 1 && z_.jsxs(w, {
    color: "error",
    children: [" \xB7 ", x]
  }), t[79] = x, t[80] = p, t[81] = d, t[82] = ge;else ge = t[82];
  let he;
  if (t[83] !== de || t[84] !== pe || t[85] !== ge) he = z_.jsxs(U, {
    marginTop: 1,
    children: [de, pe, ge]
  }), t[83] = de, t[84] = pe, t[85] = ge, t[86] = he;else he = t[86];
  let ie;
  if (t[87] !== ne || t[88] !== re) ie = z_.jsx(U, {
    marginTop: 1,
    minHeight: 1,
    children: ne ? z_.jsx(Va, {
      error: ne
    }) : re ? z_.jsx(w, {
      dimColor: true,
      children: re
    }) : z_.jsx(w, {
      children: " "
    })
  }), t[87] = ne, t[88] = re, t[89] = ie;else ie = t[89];
  let le;
  if (t[90] === Symbol.for("react.memo_cache_sentinel")) le = z_.jsx(ht, {
    chord: ["up", "down"],
    action: "move"
  }), t[90] = le;else le = t[90];
  let He;
  if (t[91] !== y?.type) He = y?.type === "select" && z_.jsx(ht, {
    chord: ["left", "right"],
    action: "change"
  }), t[91] = y?.type, t[92] = He;else He = t[92];
  let ye, ue;
  if (t[93] === Symbol.for("react.memo_cache_sentinel")) ye = z_.jsx(ht, {
    chord: "enter",
    action: "continue"
  }), ue = z_.jsx(ht, {
    chord: "escape",
    action: "cancel"
  }), t[93] = ye, t[94] = ue;else ye = t[93], ue = t[94];
  let we;
  if (t[95] !== He) we = z_.jsx(U, {
    marginTop: 1,
    children: z_.jsx(w, {
      dimColor: true,
      children: z_.jsxs(Tn, {
        children: [le, He, ye, ue]
      })
    })
  }), t[95] = He, t[96] = we;else we = t[96];
  let Ce;
  if (t[97] !== ee || t[98] !== he || t[99] !== ie || t[100] !== we) Ce = z_.jsxs(U, {
    flexDirection: "column",
    children: [ee, he, ie, we]
  }), t[97] = ee, t[98] = he, t[99] = ie, t[100] = we, t[101] = Ce;else Ce = t[101];
  let Ie;
  if (t[102] !== l || t[103] !== r || t[104] !== Ce || t[105] !== n) Ie = z_.jsx(zn, {
    title: n,
    subtitle: r,
    onCancel: l,
    hideInputGuide: true,
    isCancelActive: false,
    children: Ce
  }), t[102] = l, t[103] = r, t[104] = Ce, t[105] = n, t[106] = Ie;else Ie = t[106];
  return Ie;
}
function R7p(e) {
  return e !== null;
}
function L7p(e) {
  return rn(e.label);
}
function D7p(e) {
  let t = yHo.c(44),
    {
      field: n,
      value: r,
      isFocused: o,
      labelWidth: s,
      cursor: i,
      setCursor: a,
      onChange: l,
      onCancel: c,
      onUp: u,
      onDown: d,
      onEnter: p
    } = e,
    f;
  if (t[0] !== n.label || t[1] !== s) f = " ".repeat(Math.max(0, s - rn(n.label))), t[0] = n.label, t[1] = s, t[2] = f;else f = t[2];
  let m = f,
    g;
  if (t[3] !== n.required || t[4] !== n.type || t[5] !== r) g = n.type === "text" && n.required && r.trim() === "", t[3] = n.required, t[4] = n.type, t[5] = r, t[6] = g;else g = t[6];
  let h = g,
    y = o ? "suggestion" : void 0,
    b = o ? nt.pointer : " ",
    _;
  if (t[7] !== y || t[8] !== b) _ = z_.jsxs(w, {
    color: y,
    children: [b, " "]
  }), t[7] = y, t[8] = b, t[9] = _;else _ = t[9];
  let S = _,
    A = !o,
    v;
  if (t[10] !== h) v = h ? z_.jsx(w, {
    color: "error",
    children: "*"
  }) : " ", t[10] = h, t[11] = v;else v = t[11];
  let C;
  if (t[12] !== n.label || t[13] !== m || t[14] !== A || t[15] !== v) C = z_.jsxs(w, {
    dimColor: A,
    children: [n.label, v, m, " "]
  }), t[12] = n.label, t[13] = m, t[14] = A, t[15] = v, t[16] = C;else C = t[16];
  let x = C;
  if (n.type === "select") {
    let D;
    if (t[17] !== n.options || t[18] !== r) D = n.options.find(M => M.value === r) ?? n.options[0], t[17] = n.options, t[18] = r, t[19] = D;else D = t[19];
    let P = D,
      O;
    if (t[20] !== o || t[21] !== P?.label || t[22] !== r) O = o ? z_.jsxs(w, {
      children: [z_.jsxs(w, {
        dimColor: true,
        children: [nt.triangleLeft, " "]
      }), P?.label ?? r, z_.jsxs(w, {
        dimColor: true,
        children: [" ", nt.triangleRight]
      })]
    }) : z_.jsx(w, {
      children: P?.label ?? r
    }), t[20] = o, t[21] = P?.label, t[22] = r, t[23] = O;else O = t[23];
    let L;
    if (t[24] !== x || t[25] !== S || t[26] !== O) L = z_.jsxs(U, {
      children: [S, x, O]
    }), t[24] = x, t[25] = S, t[26] = O, t[27] = L;else L = t[27];
    return L;
  }
  let I;
  if (t[28] !== i || t[29] !== n.mask || t[30] !== n.placeholder || t[31] !== o || t[32] !== c || t[33] !== l || t[34] !== d || t[35] !== p || t[36] !== u || t[37] !== a || t[38] !== r) I = o ? z_.jsx(Ta, {
    value: r,
    onChange: l,
    onSubmit: () => p(),
    onExit: c,
    onHistoryUp: u,
    onHistoryDown: d,
    placeholder: n.placeholder,
    mask: n.mask,
    columns: 60,
    cursorOffset: i,
    onChangeCursorOffset: a,
    disableCursorMovementForUpDownKeys: true,
    disableEscapeDoublePress: true,
    focus: true,
    showCursor: true
  }) : r ? z_.jsx(w, {
    children: n.mask ? n.mask.repeat(Math.min(rn(r), 60)) : r
  }) : z_.jsx(w, {
    dimColor: true,
    children: n.placeholder ?? ""
  }), t[28] = i, t[29] = n.mask, t[30] = n.placeholder, t[31] = o, t[32] = c, t[33] = l, t[34] = d, t[35] = p, t[36] = u, t[37] = a, t[38] = r, t[39] = I;else I = t[39];
  let k;
  if (t[40] !== x || t[41] !== S || t[42] !== I) k = z_.jsxs(U, {
    children: [S, x, I]
  }), t[40] = x, t[41] = S, t[42] = I, t[43] = k;else k = t[43];
  return k;
}
var yHo, hHo, z_;