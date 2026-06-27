// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mE
// matched 2.1.88 source: src/components/ThemePicker.tsx
// class=modified  jaccard=0.5099  score=0.7223  fileCov=0.6343
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mE = E(() => {
  w7t();
  Vl();
});
function lEt(e) {
  let t = xMl.c(88),
    {
      onThemeSelect: n,
      showIntroText: r,
      helpText: o,
      showHelpTextBelow: s,
      hideEscToCancel: i,
      skipExitHandling: a,
      onCancel: l,
      onCustomTheme: c,
    } = e,
    u = r === void 0 ? !1 : r,
    d = o === void 0 ? "" : o,
    p = s === void 0 ? !1 : s,
    f = i === void 0 ? !1 : i,
    m = a === void 0 ? !1 : a,
    [g] = na(),
    h = Fke(),
    { columns: y } = br(),
    b;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((b = A4t()), (t[0] = b));
  else b = t[0];
  let _ = b,
    S;
  if (t[1] !== g) ((S = _ === null ? zba(g) : null), (t[1] = g), (t[2] = S));
  else S = t[2];
  let A = S,
    { setPreviewTheme: v, savePreview: C, cancelPreview: x } = eRn(),
    I = Ht(jRf) ?? !1,
    k = Ho();
  fPn("ThemePicker");
  let D = Uu("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t"),
    P;
  if (t[3] !== k || t[4] !== I)
    ((P = () => {
      if (_ === null) {
        let Ue = !I;
        (io("userSettings", {
          syntaxHighlightingDisabled: Ue,
        }),
          k((tt) => ({
            ...tt,
            settings: {
              ...tt.settings,
              syntaxHighlightingDisabled: Ue,
            },
          })));
      }
    }),
      (t[3] = k),
      (t[4] = I),
      (t[5] = P));
  else P = t[5];
  let O;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((O = {
      context: "ThemePicker",
    }),
      (t[6] = O));
  else O = t[6];
  $r("theme:toggleSyntaxHighlighting", P, O);
  let L = ig(m ? FRf : void 0),
    { customThemes: M } = jke(),
    [N, B] = kMl.useState(h),
    $;
  if (t[7] !== N) (($ = fW(N)), (t[7] = N), (t[8] = $));
  else $ = t[8];
  let q = $,
    W;
  if (t[9] !== M || t[10] !== q)
    ((W = q ? M.find((Ue) => Ue.slug === q) : void 0), (t[9] = M), (t[10] = q), (t[11] = W));
  else W = t[11];
  let V = W,
    Y = Uu("theme:editCustom", "ThemePicker", "ctrl+e"),
    z;
  if (t[12] !== V || t[13] !== c || t[14] !== C)
    ((z = () => {
      if (V && c) (C(), c(V));
    }),
      (t[12] = V),
      (t[13] = c),
      (t[14] = C),
      (t[15] = z));
  else z = t[15];
  let K;
  if (t[16] === Symbol.for("react.memo_cache_sentinel"))
    ((K = {
      context: "ThemePicker",
    }),
      (t[16] = K));
  else K = t[16];
  $r("theme:editCustom", z, K);
  let Z, J, ne, oe, re, ee, ce;
  if (t[17] === Symbol.for("react.memo_cache_sentinel"))
    ((Z = {
      label: "Auto (match terminal)",
      value: "auto",
    }),
      (J = {
        label: "Dark mode",
        value: "dark",
      }),
      (ne = {
        label: "Light mode",
        value: "light",
      }),
      (oe = {
        label: "Dark mode (colorblind-friendly)",
        value: "dark-daltonized",
      }),
      (re = {
        label: "Light mode (colorblind-friendly)",
        value: "light-daltonized",
      }),
      (ee = {
        label: "Dark mode (ANSI colors only)",
        value: "dark-ansi",
      }),
      (ce = {
        label: "Light mode (ANSI colors only)",
        value: "light-ansi",
      }),
      (t[17] = Z),
      (t[18] = J),
      (t[19] = ne),
      (t[20] = oe),
      (t[21] = re),
      (t[22] = ee),
      (t[23] = ce));
  else
    ((Z = t[17]),
      (J = t[18]),
      (ne = t[19]),
      (oe = t[20]),
      (re = t[21]),
      (ee = t[22]),
      (ce = t[23]));
  let ae;
  if (t[24] !== M || t[25] !== c) {
    let Ue;
    if (t[27] !== c)
      ((Ue = c
        ? [
            {
              label: "New custom theme\u2026",
              value: p1o,
            },
          ]
        : []),
        (t[27] = c),
        (t[28] = Ue));
    else Ue = t[28];
    ((ae = [Z, J, ne, oe, re, ee, ce, ...M.map(URf), ...Ue]),
      (t[24] = M),
      (t[25] = c),
      (t[26] = ae));
  } else ae = t[26];
  let de = ae,
    Ee;
  if (t[29] !== u)
    ((Ee = u
      ? gE.jsx(w, {
          children: "Let's get started.",
        })
      : gE.jsx(w, {
          bold: !0,
          color: "permission",
          children: "Theme",
        })),
      (t[29] = u),
      (t[30] = Ee));
  else Ee = t[30];
  let me;
  if (t[31] === Symbol.for("react.memo_cache_sentinel"))
    ((me = gE.jsx(w, {
      bold: !0,
      children: "Choose the text style that looks best with your terminal",
    })),
      (t[31] = me));
  else me = t[31];
  let pe;
  if (t[32] !== d || t[33] !== p)
    ((pe =
      d &&
      !p &&
      gE.jsx(w, {
        dimColor: !0,
        children: d,
      })),
      (t[32] = d),
      (t[33] = p),
      (t[34] = pe));
  else pe = t[34];
  let ge;
  if (t[35] !== pe)
    ((ge = gE.jsxs(U, {
      flexDirection: "column",
      children: [me, pe],
    })),
      (t[35] = pe),
      (t[36] = ge));
  else ge = t[36];
  let he;
  if (t[37] !== x || t[38] !== v)
    ((he = (Ue) => {
      if ((B(Ue), Ue === p1o)) x();
      else v(Ue);
    }),
      (t[37] = x),
      (t[38] = v),
      (t[39] = he));
  else he = t[39];
  let ie;
  if (t[40] !== x || t[41] !== c || t[42] !== n || t[43] !== C)
    ((ie = (Ue) => {
      if (Ue === p1o) {
        (x(), c?.(void 0));
        return;
      }
      (C(), n(Ue));
    }),
      (t[40] = x),
      (t[41] = c),
      (t[42] = n),
      (t[43] = C),
      (t[44] = ie));
  else ie = t[44];
  let le;
  if (t[45] !== x || t[46] !== l || t[47] !== m)
    ((le = m
      ? () => {
          (x(), l?.());
        }
      : async () => {
          (x(), await ki(0));
        }),
      (t[45] = x),
      (t[46] = l),
      (t[47] = m),
      (t[48] = le));
  else le = t[48];
  let He = Math.min(de.length, 12),
    ye;
  if (t[49] !== he || t[50] !== ie || t[51] !== le || t[52] !== He || t[53] !== de || t[54] !== h)
    ((ye = gE.jsx(Sr, {
      options: de,
      onFocus: he,
      onChange: ie,
      onCancel: le,
      visibleOptionCount: He,
      defaultValue: h,
      defaultFocusValue: h,
    })),
      (t[49] = he),
      (t[50] = ie),
      (t[51] = le),
      (t[52] = He),
      (t[53] = de),
      (t[54] = h),
      (t[55] = ye));
  else ye = t[55];
  let ue;
  if (t[56] !== Ee || t[57] !== ge || t[58] !== ye)
    ((ue = gE.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Ee, ge, ye],
    })),
      (t[56] = Ee),
      (t[57] = ge),
      (t[58] = ye),
      (t[59] = ue));
  else ue = t[59];
  let we;
  if (t[60] === Symbol.for("react.memo_cache_sentinel"))
    ((we = {
      oldStart: 1,
      newStart: 1,
      oldLines: 3,
      newLines: 3,
      lines: [
        " function greet() {",
        '-  console.log("Hello, World!");',
        '+  console.log("Hello, Claude!");',
        " }",
      ],
    }),
      (t[60] = we));
  else we = t[60];
  let Ce;
  if (t[61] !== y)
    ((Ce = gE.jsx(Q4, {
      paddingX: 0,
      children: gE.jsx(Xue, {
        patch: we,
        dim: !1,
        filePath: "demo.js",
        firstLine: null,
        width: y,
      }),
    })),
      (t[61] = y),
      (t[62] = Ce));
  else Ce = t[62];
  let Ie =
      _ === "env"
        ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${process.env.CLAUDE_CODE_SYNTAX_HIGHLIGHT})`
        : I
          ? `Syntax highlighting disabled (${D} to enable)`
          : A
            ? `Syntax theme: ${A.theme}${A.source ? ` (from ${A.source})` : ""} (${D} to disable)`
            : `Syntax highlighting enabled (${D} to disable)`,
    Ve;
  if (t[63] !== Ie)
    ((Ve = gE.jsxs(w, {
      dimColor: !0,
      children: [" ", Ie],
    })),
      (t[63] = Ie),
      (t[64] = Ve));
  else Ve = t[64];
  let Ze;
  if (t[65] !== Ce || t[66] !== Ve)
    ((Ze = gE.jsxs(U, {
      flexDirection: "column",
      width: "100%",
      children: [Ce, Ve],
    })),
      (t[65] = Ce),
      (t[66] = Ve),
      (t[67] = Ze));
  else Ze = t[67];
  let Be;
  if (t[68] !== ue || t[69] !== Ze)
    ((Be = gE.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [ue, Ze],
    })),
      (t[68] = ue),
      (t[69] = Ze),
      (t[70] = Be));
  else Be = t[70];
  let Me = Be;
  if (!u) {
    let Ue;
    if (t[71] !== Me)
      ((Ue = gE.jsx(U, {
        flexDirection: "column",
        children: Me,
      })),
        (t[71] = Me),
        (t[72] = Ue));
    else Ue = t[72];
    let tt;
    if (t[73] !== d || t[74] !== p)
      ((tt =
        p &&
        d &&
        gE.jsx(U, {
          marginLeft: 3,
          children: gE.jsx(w, {
            dimColor: !0,
            children: d,
          }),
        })),
        (t[73] = d),
        (t[74] = p),
        (t[75] = tt));
    else tt = t[75];
    let bt;
    if (t[76] !== Y || t[77] !== L || t[78] !== V || t[79] !== f || t[80] !== c)
      ((bt =
        !f &&
        gE.jsx(U, {
          children: gE.jsx(w, {
            dimColor: !0,
            italic: !0,
            children: L.pending
              ? gE.jsxs(gE.Fragment, {
                  children: ["Press ", L.keyName, " again to exit"],
                })
              : gE.jsxs(Tn, {
                  children: [
                    gE.jsx(ht, {
                      chord: "enter",
                      action: "select",
                    }),
                    V &&
                      c &&
                      gE.jsx(ht, {
                        chord: Y,
                        action: "edit",
                      }),
                    gE.jsx(ht, {
                      chord: "escape",
                      action: "cancel",
                    }),
                  ],
                }),
          }),
        })),
        (t[76] = Y),
        (t[77] = L),
        (t[78] = V),
        (t[79] = f),
        (t[80] = c),
        (t[81] = bt));
    else bt = t[81];
    let Ke;
    if (t[82] !== tt || t[83] !== bt)
      ((Ke = gE.jsxs(U, {
        marginTop: 1,
        children: [tt, bt],
      })),
        (t[82] = tt),
        (t[83] = bt),
        (t[84] = Ke));
    else Ke = t[84];
    let Et;
    if (t[85] !== Ue || t[86] !== Ke)
      ((Et = gE.jsxs(gE.Fragment, {
        children: [Ue, Ke],
      })),
        (t[85] = Ue),
        (t[86] = Ke),
        (t[87] = Et));
    else Et = t[87];
    return Et;
  }
  return Me;
}
function URf(e) {
  return {
    label: e.source === "user" ? `${e.name} (custom)` : `${e.name} (from ${e.source.plugin})`,
    value: V3e(e.slug),
  };
}
function FRf() {}
function jRf(e) {
  return e.settings.syntaxHighlightingDisabled;
}
var xMl,
  kMl,
  gE,
  p1o = "__new_custom_theme__";
