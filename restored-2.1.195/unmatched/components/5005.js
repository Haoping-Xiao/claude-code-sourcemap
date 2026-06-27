// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xjo
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0141  score=0.1429  fileCov=0.0154
// note: nearest: src/components/Settings/Config.tsx (0.0141); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xjo = E(() => {
  dse();
  _i();
  m8();
  Ye();
  Pfe();
  Bs();
  B_();
  Ko();
  Xce();
  eE();
  B6l = R(lt(), 1), QHe = R(rt(), 1), OH = R(se(), 1);
});
function Tsr(e) {
  let t = kjo.c(2),
    {
      value: n
    } = e,
    r = n,
    o;
  if (t[0] !== r) o = Nf.jsx(w, {
    color: r,
    children: cqf
  }), t[0] = r, t[1] = o;else o = t[1];
  return o;
}
function F6l(e) {
  let t = kjo.c(150),
    {
      initial: n,
      defaultBase: r,
      onDone: o,
      onCancel: s
    } = e,
    [, i] = na(),
    {
      customThemes: a,
      reloadCustomThemes: l,
      setPreviewOverrides: c
    } = jke(),
    u = n !== void 0 && n.source !== "user",
    [d, p] = Tz.useState(n && !u ? "colors" : "name"),
    [f, m] = Tz.useState(n?.name ?? ""),
    [g, h] = Tz.useState(f.length),
    [y, b] = Tz.useState(u ? "" : n?.slug ?? ""),
    _;
  if (t[0] !== r || t[1] !== n?.base) _ = () => n?.base ?? r, t[0] = r, t[1] = n?.base, t[2] = _;else _ = t[2];
  let [S] = Tz.useState(_),
    A;
  if (t[3] !== S) A = O7(S), t[3] = S, t[4] = A;else A = t[4];
  let v = A,
    C;
  if (t[5] !== n?.overrides) C = n?.overrides ?? {}, t[5] = n?.overrides, t[6] = C;else C = t[6];
  let [x, I] = Tz.useState(C),
    k;
  if (t[7] !== v) k = Object.keys(v).sort(), t[7] = v, t[8] = k;else k = t[8];
  let D = k,
    [P, O] = Tz.useState(""),
    [L, M] = Tz.useState(null),
    [N, B] = Tz.useState(""),
    [$, q] = Tz.useState(0),
    W;
  if (t[9] !== D || t[10] !== P) {
    let tt = P.toLowerCase();
    W = tt ? D.filter(bt => bt.toLowerCase().includes(tt)) : D, t[9] = D, t[10] = P, t[11] = W;
  } else W = t[11];
  let V = W,
    Y;
  if (t[12] !== a || t[13] !== f || t[14] !== y) Y = y || pqf(f, a), t[12] = a, t[13] = f, t[14] = y, t[15] = Y;else Y = t[15];
  let z = Y,
    K;
  if (t[16] !== x) K = Object.keys(x), t[16] = x, t[17] = K;else K = t[17];
  let Z = K.length,
    J,
    ne;
  if (t[18] !== c) J = () => () => c(null), ne = [c], t[18] = c, t[19] = J, t[20] = ne;else J = t[19], ne = t[20];
  Tz.useEffect(J, ne);
  let oe;
  if (t[21] !== x || t[22] !== v) oe = function (bt) {
    return x[bt] ?? v[bt];
  }, t[21] = x, t[22] = v, t[23] = oe;else oe = t[23];
  let re = oe,
    ee;
  if (t[24] !== S || t[25] !== f || t[26] !== c) ee = function (bt, Ke) {
    I(Ke), c(Ke), xYr({
      slug: bt,
      name: f.trim(),
      base: S,
      overrides: Ke,
      source: "user"
    }).catch(Et => {
      T(`[theme] save ${bt} failed: ${Et}`, {
        level: "warn"
      });
    });
  }, t[24] = S, t[25] = f, t[26] = c, t[27] = ee;else ee = t[27];
  let ce = ee,
    ae;
  if (t[28] !== re) ae = function (bt) {
    let Ke = re(bt);
    B(Ke), q(Ke.length), M(bt);
  }, t[28] = re, t[29] = ae;else ae = t[29];
  let de = ae,
    Ee;
  if (t[30] !== ce || t[31] !== N || t[32] !== L || t[33] !== x || t[34] !== v || t[35] !== y) Ee = function () {
    if (L === null || !W3e(N)) return;
    ce(y, N === v[L] ? $F(x, L) : {
      ...x,
      [L]: N
    }), M(null);
  }, t[30] = ce, t[31] = N, t[32] = L, t[33] = x, t[34] = v, t[35] = y, t[36] = Ee;else Ee = t[36];
  let me = Ee,
    pe;
  if (t[37] !== x || t[38] !== c) pe = function () {
    c(x), M(null);
  }, t[37] = x, t[38] = c, t[39] = pe;else pe = t[39];
  let ge = pe,
    he;
  if (t[40] !== ce || t[41] !== x || t[42] !== y) he = function (bt) {
    if (!(bt in x)) return;
    ce(y, $F(x, bt));
  }, t[40] = ce, t[41] = x, t[42] = y, t[43] = he;else he = t[43];
  let ie = he,
    le;
  if (t[44] !== L || t[45] !== x || t[46] !== c) le = function (bt) {
    if (B(bt), L && W3e(bt)) c({
      ...x,
      [L]: bt
    });
  }, t[44] = L, t[45] = x, t[46] = c, t[47] = le;else le = t[47];
  let He = le,
    ye;
  if (t[48] !== ge || t[49] !== L || t[50] !== s) ye = () => {
    if (L !== null) ge();else s();
  }, t[48] = ge, t[49] = L, t[50] = s, t[51] = ye;else ye = t[51];
  let ue = d === "name" || L !== null,
    we;
  if (t[52] !== ue) we = {
    context: "Settings",
    isActive: ue
  }, t[52] = ue, t[53] = we;else we = t[53];
  if ($r("confirm:no", ye, we), d === "name") {
    let tt;
    if (t[54] !== f) tt = f.trim(), t[54] = f, t[55] = tt;else tt = t[55];
    let bt = tt,
      Ke = bt.length > 0,
      Et = u && n ? `Fork ${n.name} to your themes` : "New custom theme",
      ct;
    if (t[56] !== Et) ct = Nf.jsx(w, {
      bold: !0,
      color: "permission",
      children: Et
    }), t[56] = Et, t[57] = ct;else ct = t[57];
    let Je;
    if (t[58] === Symbol.for("react.memo_cache_sentinel")) Je = Nf.jsx(w, {
      children: "Name: "
    }), t[58] = Je;else Je = t[58];
    let gt;
    if (t[59] !== S || t[60] !== z || t[61] !== x || t[62] !== l || t[63] !== i || t[64] !== bt || t[65] !== Ke) gt = () => {
      if (!Ke) return;
      b(z), m(bt), p("colors"), xYr({
        slug: z,
        name: bt,
        base: S,
        overrides: x,
        source: "user"
      }).then(() => {
        l(), i(V3e(z));
      }).catch(Hn => {
        T(`[theme] save ${z} failed: ${Hn}`, {
          level: "warn"
        });
      });
    }, t[59] = S, t[60] = z, t[61] = x, t[62] = l, t[63] = i, t[64] = bt, t[65] = Ke, t[66] = gt;else gt = t[66];
    let st;
    if (t[67] !== f || t[68] !== g || t[69] !== s || t[70] !== gt) st = Nf.jsxs(U, {
      children: [Je, Nf.jsx(Ta, {
        value: f,
        onChange: m,
        onSubmit: gt,
        onExit: s,
        placeholder: "my-theme",
        columns: 40,
        cursorOffset: g,
        onChangeCursorOffset: h,
        disableCursorMovementForUpDownKeys: !0,
        disableEscapeDoublePress: !0,
        focus: !0,
        showCursor: !0
      })]
    }), t[67] = f, t[68] = g, t[69] = s, t[70] = gt, t[71] = st;else st = t[71];
    let xt;
    if (t[72] === Symbol.for("react.memo_cache_sentinel")) xt = KNt(), t[72] = xt;else xt = t[72];
    let vt;
    if (t[73] !== S || t[74] !== z) vt = Nf.jsxs(w, {
      dimColor: !0,
      children: ["based on ", S, " \xB7 saved to ", xt, U6l.sep, z, ".json"]
    }), t[73] = S, t[74] = z, t[75] = vt;else vt = t[75];
    let jt;
    if (t[76] !== st || t[77] !== vt) jt = Nf.jsxs(U, {
      flexDirection: "column",
      children: [st, vt]
    }), t[76] = st, t[77] = vt, t[78] = jt;else jt = t[78];
    let en;
    if (t[79] !== Ke) en = Ke && Nf.jsx(ht, {
      chord: "enter",
      action: "continue"
    }), t[79] = Ke, t[80] = en;else en = t[80];
    let Dn;
    if (t[81] === Symbol.for("react.memo_cache_sentinel")) Dn = Nf.jsx(ht, {
      chord: "escape",
      action: "cancel"
    }), t[81] = Dn;else Dn = t[81];
    let nn;
    if (t[82] !== en) nn = Nf.jsx(w, {
      dimColor: !0,
      children: Nf.jsxs(Tn, {
        children: [en, Dn]
      })
    }), t[82] = en, t[83] = nn;else nn = t[83];
    let Ln;
    if (t[84] !== ct || t[85] !== jt || t[86] !== nn) Ln = Nf.jsx(Fu, {
      color: "permission",
      children: Nf.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [ct, jt, nn]
      })
    }), t[84] = ct, t[85] = jt, t[86] = nn, t[87] = Ln;else Ln = t[87];
    return Ln;
  }
  if (L !== null) {
    let tt;
    if (t[88] !== N) tt = W3e(N), t[88] = N, t[89] = tt;else tt = t[89];
    let bt = tt,
      Ke;
    if (t[90] !== f) Ke = Nf.jsx(w, {
      bold: !0,
      color: "permission",
      children: f
    }), t[90] = f, t[91] = Ke;else Ke = t[91];
    let Et = bt ? N : v[L],
      ct;
    if (t[92] !== Et) ct = Nf.jsx(Tsr, {
      value: Et
    }), t[92] = Et, t[93] = ct;else ct = t[93];
    let Je;
    if (t[94] === Symbol.for("react.memo_cache_sentinel")) Je = Nf.jsx(w, {
      children: " "
    }), t[94] = Je;else Je = t[94];
    let gt;
    if (t[95] !== L) gt = Nf.jsx(w, {
      bold: !0,
      children: L
    }), t[95] = L, t[96] = gt;else gt = t[96];
    let st;
    if (t[97] !== ct || t[98] !== gt) st = Nf.jsxs(U, {
      children: [ct, Je, gt]
    }), t[97] = ct, t[98] = gt, t[99] = st;else st = t[99];
    let xt = v[L],
      vt;
    if (t[100] !== xt) vt = Nf.jsxs(w, {
      dimColor: !0,
      children: ["preset: ", xt]
    }), t[100] = xt, t[101] = vt;else vt = t[101];
    let jt;
    if (t[102] !== st || t[103] !== vt) jt = Nf.jsxs(U, {
      flexDirection: "column",
      children: [st, vt]
    }), t[102] = st, t[103] = vt, t[104] = jt;else jt = t[104];
    let en;
    if (t[105] === Symbol.for("react.memo_cache_sentinel")) en = Nf.jsx(w, {
      children: "Value: "
    }), t[105] = en;else en = t[105];
    let Dn;
    if (t[106] !== ge || t[107] !== me || t[108] !== $ || t[109] !== N || t[110] !== He) Dn = Nf.jsxs(U, {
      children: [en, Nf.jsx(Ta, {
        value: N,
        onChange: He,
        onSubmit: me,
        onExit: ge,
        placeholder: "rgb(r,g,b) \xB7 #rrggbb \xB7 ansi:red",
        columns: 40,
        cursorOffset: $,
        onChangeCursorOffset: q,
        disableCursorMovementForUpDownKeys: !0,
        disableEscapeDoublePress: !0,
        focus: !0,
        showCursor: !0
      })]
    }), t[106] = ge, t[107] = me, t[108] = $, t[109] = N, t[110] = He, t[111] = Dn;else Dn = t[111];
    let nn;
    if (t[112] !== bt) nn = bt ? Nf.jsxs(Tn, {
      children: [Nf.jsx(ht, {
        chord: "enter",
        action: "save"
      }), Nf.jsx(ht, {
        chord: "escape",
        action: "cancel"
      })]
    }) : "Accepts rgb(r,g,b), #rrggbb, ansi256(n), or ansi:name", t[112] = bt, t[113] = nn;else nn = t[113];
    let Ln;
    if (t[114] !== nn) Ln = Nf.jsx(w, {
      dimColor: !0,
      children: nn
    }), t[114] = nn, t[115] = Ln;else Ln = t[115];
    let Hn;
    if (t[116] !== Ke || t[117] !== jt || t[118] !== Dn || t[119] !== Ln) Hn = Nf.jsx(Fu, {
      color: "permission",
      children: Nf.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [Ke, jt, Dn, Ln]
      })
    }), t[116] = Ke, t[117] = jt, t[118] = Dn, t[119] = Ln, t[120] = Hn;else Hn = t[120];
    return Hn;
  }
  let Ce = `${f} \xB7 based on ${S}`,
    Ie;
  if (t[121] !== ie) Ie = {
    action: "reset",
    handler: tt => {
      if (tt) ie(tt);
    }
  }, t[121] = ie, t[122] = Ie;else Ie = t[122];
  let Ve;
  if (t[123] !== S || t[124] !== f || t[125] !== o || t[126] !== x || t[127] !== c || t[128] !== y) Ve = () => {
    c(null), o({
      slug: y,
      name: f,
      base: S,
      overrides: x,
      source: "user"
    });
  }, t[123] = S, t[124] = f, t[125] = o, t[126] = x, t[127] = c, t[128] = y, t[129] = Ve;else Ve = t[129];
  let Ze;
  if (t[130] !== Z || t[131] !== y) Ze = Z > 0 ? `${Z} ${bn(Z, "color")} customized \xB7 ${y}.json` : `editing ${y}.json`, t[130] = Z, t[131] = y, t[132] = Ze;else Ze = t[132];
  let Be;
  if (t[133] !== x || t[134] !== re) Be = (tt, bt) => {
    let Ke = x[tt] !== void 0;
    return Nf.jsxs(U, {
      children: [Nf.jsx(Tsr, {
        value: re(tt)
      }), Nf.jsx(w, {
        children: " "
      }), Nf.jsx(w, {
        color: bt ? "suggestion" : void 0,
        children: tt
      }), Nf.jsx(mz, {
        when: Ke,
        children: "custom"
      })]
    });
  }, t[133] = x, t[134] = re, t[135] = Be;else Be = t[135];
  let Me;
  if (t[136] !== x || t[137] !== v || t[138] !== re) Me = tt => Nf.jsxs(U, {
    flexDirection: "column",
    children: [Nf.jsxs(w, {
      children: ["current: ", Nf.jsx(Tsr, {
        value: re(tt)
      }), " ", re(tt)]
    }), x[tt] !== void 0 && Nf.jsxs(w, {
      dimColor: !0,
      children: ["preset: ", Nf.jsx(Tsr, {
        value: v[tt]
      }), " ", v[tt]]
    })]
  }), t[136] = x, t[137] = v, t[138] = re, t[139] = Me;else Me = t[139];
  let Ue;
  if (t[140] !== V || t[141] !== P || t[142] !== de || t[143] !== Ce || t[144] !== Ie || t[145] !== Ve || t[146] !== Ze || t[147] !== Be || t[148] !== Me) Ue = Nf.jsx(Hsr, {
    title: Ce,
    placeholder: "Filter color tokens\u2026",
    items: V,
    getKey: dqf,
    initialQuery: P,
    onQueryChange: O,
    onSelect: de,
    onTab: Ie,
    onCancel: Ve,
    selectAction: "edit",
    cancelAction: "done",
    matchLabel: Ze,
    renderItem: Be,
    renderPreview: Me,
    emptyMessage: uqf
  }), t[140] = V, t[141] = P, t[142] = de, t[143] = Ce, t[144] = Ie, t[145] = Ve, t[146] = Ze, t[147] = Be, t[148] = Me, t[149] = Ue;else Ue = t[149];
  return Ue;
}
function uqf(e) {
  return `No color named "${e}"`;
}
function dqf(e) {
  return e;
}
function pqf(e, t) {
  let n = aUi(e);
  if (!t.some(r => r.slug === n)) return n;
  for (let r = 2;; r++) {
    let o = `${n}-${r}`;
    if (!t.some(s => s.slug === o)) return o;
  }
}
var kjo, U6l, Tz, Nf, cqf;