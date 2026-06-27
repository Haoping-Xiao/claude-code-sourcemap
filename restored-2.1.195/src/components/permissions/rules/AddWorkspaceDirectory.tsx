// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OUt
// matched 2.1.88 source: src/components/permissions/rules/AddWorkspaceDirectory.tsx
// class=modified  jaccard=0.2595  score=0.4718  fileCov=0.3658
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var OUt = E(() => {
  si();
  Xa();
  _i();
  Tc();
  Ye();
  es();
  sr();
  B_();
  ((OZr = R(lt(), 1)), (NZr = R(rt(), 1)), (pT = R(se(), 1)), ($Zr = /\s+/g));
  nKd = NZr.memo(function (t) {
    let n = OZr.c(98),
      { item: r, maxColumnWidth: o, isSelected: s, allowWrap: i } = t,
      a = i === void 0 ? !0 : i,
      l = br().columns;
    if (Nzi(r.id)) {
      let ne;
      if (n[0] !== r.id) ((ne = eKd(r.id)), (n[0] = r.id), (n[1] = ne));
      else ne = n[1];
      let oe = ne,
        re = s ? "suggestion" : void 0,
        ee = !s,
        ce = r.id.startsWith("file-"),
        ae = r.id.startsWith("mcp-resource-"),
        de;
      if (n[2] !== r.id)
        ((de = r.id.startsWith("mcp-template-value::")), (n[2] = r.id), (n[3] = de));
      else de = n[3];
      let Ee = de,
        me = r.id.startsWith("mcp-template::"),
        pe = r.description ? 3 : 0,
        ge;
      if (ce || me || Ee) {
        let He;
        if (n[4] !== r.description)
          ((He = r.description ? Math.min(20, rn(r.description)) : 0),
            (n[4] = r.description),
            (n[5] = He));
        else He = n[5];
        let ye = He,
          ue = l - 2 - 4 - pe - ye,
          we;
        if (n[6] !== Ee || n[7] !== r.displayText || n[8] !== ue)
          ((we = Ee ? UV(r.displayText, ue) : JJe(r.displayText, ue)),
            (n[6] = Ee),
            (n[7] = r.displayText),
            (n[8] = ue),
            (n[9] = we));
        else we = n[9];
        ge = we;
      } else if (ae) {
        let He;
        if (n[10] !== r.displayText)
          ((He = Rs(r.displayText, 30)), (n[10] = r.displayText), (n[11] = He));
        else He = n[11];
        ge = He;
      } else ge = r.displayText;
      let he = l - 2 - rn(ge) - pe - 4,
        ie;
      if (r.description) {
        let He = Math.max(0, he),
          ye;
        if (n[12] !== r.description || n[13] !== He)
          ((ye = Rs(r.description.replace($Zr, " "), He)),
            (n[12] = r.description),
            (n[13] = He),
            (n[14] = ye));
        else ye = n[14];
        ie = `${oe} ${ge} \u2013 ${ye}`;
      } else ie = `${oe} ${ge}`;
      let le;
      if (n[15] !== ee || n[16] !== ie || n[17] !== re)
        ((le = pT.jsx(w, {
          color: re,
          dimColor: ee,
          wrap: "truncate",
          children: ie,
        })),
          (n[15] = ee),
          (n[16] = ie),
          (n[17] = re),
          (n[18] = le));
      else le = n[18];
      return le;
    }
    let d =
        r.description || r.tag || r.kind !== void 0 || r.sourceTag ? Math.floor(l * 0.4) : l - 4,
      p = Math.min(o ?? rn(r.displayText) + 5, d),
      f = r.color || (s ? "suggestion" : void 0),
      m = !s,
      g;
    if (n[19] !== r.id) ((g = r.id.startsWith("emoji:")), (n[19] = r.id), (n[20] = g));
    else g = n[20];
    let h = g,
      y = h ? (s ? `${nt.pointer} ` : "  ") : "",
      b = rn(y),
      _ = h && s,
      S = r.displayText;
    if (rn(S) > p - 2) {
      let ne;
      if (n[21] !== S) ((ne = S.includes("/") || S.includes("\\")), (n[21] = S), (n[22] = ne));
      else ne = n[22];
      let oe = ne,
        re;
      if (n[23] !== p || n[24] !== S || n[25] !== oe)
        ((re = oe ? UV(S, p - 2) : Rs(S, p - 2)),
          (n[23] = p),
          (n[24] = S),
          (n[25] = oe),
          (n[26] = re));
      else re = n[26];
      S = re;
    }
    let A;
    if (n[27] !== p || n[28] !== S || n[29] !== b)
      ((A = " ".repeat(Math.max(0, p - rn(S) - b))),
        (n[27] = p),
        (n[28] = S),
        (n[29] = b),
        (n[30] = A));
    else A = n[30];
    let v = A,
      C = r.tag ? `[${r.tag}] ` : "",
      x = rn(C),
      I,
      k,
      D,
      P,
      O;
    if (n[31] !== r) {
      let { kindLaneText: ne, kindLabel: oe, sourceText: re } = Uzi(r);
      ((k = ne),
        (D = re),
        (I = oe === "skill" ? "skill" : oe === "agent" ? "background" : void 0),
        (P = rn(k)),
        (O = rn(D)),
        (n[31] = r),
        (n[32] = I),
        (n[33] = k),
        (n[34] = D),
        (n[35] = P),
        (n[36] = O));
    } else ((I = n[32]), (k = n[33]), (D = n[34]), (P = n[35]), (O = n[36]));
    let L = P + O,
      M = Math.max(0, l - p - x - L - 4),
      N,
      B,
      $,
      q,
      W;
    if (
      n[37] !== a ||
      n[38] !== _ ||
      n[39] !== l ||
      n[40] !== M ||
      n[41] !== p ||
      n[42] !== S ||
      n[43] !== s ||
      n[44] !== r.description ||
      n[45] !== r.query ||
      n[46] !== I ||
      n[47] !== k ||
      n[48] !== L ||
      n[49] !== v ||
      n[50] !== y ||
      n[51] !== m ||
      n[52] !== D ||
      n[53] !== C ||
      n[54] !== x ||
      n[55] !== f
    ) {
      W = Symbol.for("react.early_return_sentinel");
      e: {
        let ne = r.description ? r.description.replace($Zr, " ").trim() : "",
          [oe, re] = a ? oKd(ne, M) : [Rs(ne, M), ""];
        N = s ? "suggestion" : void 0;
        let ee;
        if (n[61] !== _ || n[62] !== y || n[63] !== m || n[64] !== f)
          ((ee = y
            ? pT.jsx(w, {
                color: f,
                dimColor: m,
                bold: _,
                children: y,
              })
            : null),
            (n[61] = _),
            (n[62] = y),
            (n[63] = m),
            (n[64] = f),
            (n[65] = ee));
        else ee = n[65];
        let ce;
        if (n[66] !== _ || n[67] !== S || n[68] !== r.query || n[69] !== m || n[70] !== f)
          ((ce = pT.jsx(MZr, {
            text: S,
            query: r.query,
            color: f,
            dimColor: m,
            bold: _,
          })),
            (n[66] = _),
            (n[67] = S),
            (n[68] = r.query),
            (n[69] = m),
            (n[70] = f),
            (n[71] = ce));
        else ce = n[71];
        let ae;
        if (n[72] !== _ || n[73] !== v || n[74] !== m || n[75] !== f)
          ((ae = pT.jsx(w, {
            color: f,
            dimColor: m,
            bold: _,
            children: v,
          })),
            (n[72] = _),
            (n[73] = v),
            (n[74] = m),
            (n[75] = f),
            (n[76] = ae));
        else ae = n[76];
        let de;
        if (n[77] !== I || n[78] !== k)
          ((de = k
            ? pT.jsx(w, {
                color: I,
                dimColor: I === void 0,
                children: k,
              })
            : null),
            (n[77] = I),
            (n[78] = k),
            (n[79] = de));
        else de = n[79];
        let Ee;
        if (n[80] !== C)
          ((Ee = C
            ? pT.jsx(w, {
                dimColor: !0,
                children: C,
              })
            : null),
            (n[80] = C),
            (n[81] = Ee));
        else Ee = n[81];
        let me;
        if (n[82] !== D)
          ((me = D
            ? pT.jsx(w, {
                dimColor: !0,
                children: D,
              })
            : null),
            (n[82] = D),
            (n[83] = me));
        else me = n[83];
        if (
          ((B = pT.jsxs(w, {
            wrap: "truncate",
            children: [
              ee,
              ce,
              ae,
              de,
              Ee,
              me,
              pT.jsx(MZr, {
                text: oe,
                query: r.query,
                color: N,
                dimColor: !s,
                bold: _,
                contiguousOnly: !0,
              }),
            ],
          })),
          !re)
        ) {
          W = B;
          break e;
        }
        (($ = p + x + L), (q = Rs(re, Math.max(0, l - $ - 4))));
      }
      ((n[37] = a),
        (n[38] = _),
        (n[39] = l),
        (n[40] = M),
        (n[41] = p),
        (n[42] = S),
        (n[43] = s),
        (n[44] = r.description),
        (n[45] = r.query),
        (n[46] = I),
        (n[47] = k),
        (n[48] = L),
        (n[49] = v),
        (n[50] = y),
        (n[51] = m),
        (n[52] = D),
        (n[53] = C),
        (n[54] = x),
        (n[55] = f),
        (n[56] = N),
        (n[57] = B),
        (n[58] = $),
        (n[59] = q),
        (n[60] = W));
    } else ((N = n[56]), (B = n[57]), ($ = n[58]), (q = n[59]), (W = n[60]));
    if (W !== Symbol.for("react.early_return_sentinel")) return W;
    let V = q,
      Y;
    if (n[84] !== $) ((Y = " ".repeat($)), (n[84] = $), (n[85] = Y));
    else Y = n[85];
    let z = !s,
      K;
    if (n[86] !== _ || n[87] !== N || n[88] !== V || n[89] !== r.query || n[90] !== z)
      ((K = pT.jsx(MZr, {
        text: V,
        query: r.query,
        color: N,
        dimColor: z,
        bold: _,
        contiguousOnly: !0,
      })),
        (n[86] = _),
        (n[87] = N),
        (n[88] = V),
        (n[89] = r.query),
        (n[90] = z),
        (n[91] = K));
    else K = n[91];
    let Z;
    if (n[92] !== K || n[93] !== Y)
      ((Z = pT.jsxs(w, {
        wrap: "truncate",
        children: [Y, K],
      })),
        (n[92] = K),
        (n[93] = Y),
        (n[94] = Z));
    else Z = n[94];
    let J;
    if (n[95] !== B || n[96] !== Z)
      ((J = pT.jsxs(U, {
        flexDirection: "column",
        children: [B, Z],
      })),
        (n[95] = B),
        (n[96] = Z),
        (n[97] = J));
    else J = n[97];
    return J;
  });
  Bzi = NZr.memo(jGe);
});
function Fzi() {
  let e = NUt.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((t = $v.jsx(w, {
      dimColor: !0,
      children:
        "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on.",
    })),
      (e[0] = t));
  else t = e[0];
  return t;
}
function iKd(e) {
  let t = NUt.c(5),
    { path: n } = e,
    r;
  if (t[0] !== n)
    ((r = $v.jsx(w, {
      color: "permission",
      children: n,
    })),
      (t[0] = n),
      (t[1] = r));
  else r = t[1];
  let o;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((o = $v.jsx(Fzi, {})), (t[2] = o));
  else o = t[2];
  let s;
  if (t[3] !== r)
    ((s = $v.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [r, o],
    })),
      (t[3] = r),
      (t[4] = s));
  else s = t[4];
  return s;
}
function aKd(e) {
  let t = NUt.c(14),
    { value: n, onChange: r, onSubmit: o, error: s, suggestions: i, selectedSuggestion: a } = e,
    l;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((l = $v.jsx(w, {
      children: "Enter the path to the directory:",
    })),
      (t[0] = l));
  else l = t[0];
  let c;
  if (t[1] !== r || t[2] !== o || t[3] !== n)
    ((c = $v.jsx(U, {
      borderDimColor: !0,
      borderStyle: "round",
      marginTop: 1,
      paddingLeft: 1,
      children: $v.jsx(Ta, {
        showCursor: !0,
        placeholder: `Directory path${nt.ellipsis}`,
        value: n,
        onChange: r,
        onSubmit: o,
        columns: 80,
        cursorOffset: n.length,
        onChangeCursorOffset: lKd,
      }),
    })),
      (t[1] = r),
      (t[2] = o),
      (t[3] = n),
      (t[4] = c));
  else c = t[4];
  let u;
  if (t[5] !== a || t[6] !== i)
    ((u =
      i.length > 0 &&
      $v.jsx(U, {
        marginBottom: 1,
        children: $v.jsx(jGe, {
          suggestions: i,
          selectedSuggestion: a,
          noPad: !0,
        }),
      })),
      (t[5] = a),
      (t[6] = i),
      (t[7] = u));
  else u = t[7];
  let d;
  if (t[8] !== s)
    ((d = $v.jsx(Va, {
      error: s,
    })),
      (t[8] = s),
      (t[9] = d));
  else d = t[9];
  let p;
  if (t[10] !== c || t[11] !== u || t[12] !== d)
    ((p = $v.jsxs(U, {
      flexDirection: "column",
      children: [l, c, u, d],
    })),
      (t[10] = c),
      (t[11] = u),
      (t[12] = d),
      (t[13] = p));
  else p = t[13];
  return p;
}
function lKd() {}
function BUt(e) {
  let t = NUt.c(36),
    { onAddDirectory: n, onCancel: r, permissionContext: o, directoryPath: s } = e,
    [i, a] = GGe.useState(""),
    [l, c] = GGe.useState(null),
    u;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((u = []), (t[0] = u));
  else u = t[0];
  let [d, p] = GGe.useState(u),
    [f, m] = GGe.useState(0),
    g;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((g = async (B) => {
      if (!B) {
        (p([]), m(0));
        return;
      }
      let $ = await mPn(B);
      (p($), m(0));
    }),
      (t[1] = g));
  else g = t[1];
  let y = vW(g, 100),
    b,
    _;
  if (t[2] !== y || t[3] !== i)
    ((b = () => {
      y(i);
    }),
      (_ = [i, y]),
      (t[2] = y),
      (t[3] = i),
      (t[4] = b),
      (t[5] = _));
  else ((b = t[4]), (_ = t[5]));
  GGe.useEffect(b, _);
  let S;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((S = (B) => {
      let $ = B.id + "/";
      (a($), c(null));
    }),
      (t[6] = S));
  else S = t[6];
  let A = S,
    v;
  if (t[7] !== n || t[8] !== o)
    ((v = async (B) => {
      let $ = await Aat(B, o);
      if ($.resultType === "success") n($.absolutePath, !1);
      else c(Hat($));
    }),
      (t[7] = n),
      (t[8] = o),
      (t[9] = v));
  else v = t[9];
  let C = v,
    x;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((x = {
      context: "Settings",
    }),
      (t[10] = x));
  else x = t[10];
  $r("confirm:no", r, x);
  let I;
  if (t[11] !== C || t[12] !== f || t[13] !== d)
    ((I = (B) => {
      if (d.length > 0) {
        if (B.key === "tab") {
          B.preventDefault();
          let $ = d[f];
          if ($) A($);
          return;
        }
        if (B.key === "return") {
          B.preventDefault();
          let $ = d[f];
          if ($) C($.id + "/");
          return;
        }
        if (B.key === "up" || (B.ctrl && B.key === "p")) {
          (B.preventDefault(), m(($) => ($ <= 0 ? d.length - 1 : $ - 1)));
          return;
        }
        if (B.key === "down" || (B.ctrl && B.key === "n")) {
          (B.preventDefault(), m(($) => ($ >= d.length - 1 ? 0 : $ + 1)));
          return;
        }
      }
    }),
      (t[11] = C),
      (t[12] = f),
      (t[13] = d),
      (t[14] = I));
  else I = t[14];
  let k = I,
    D;
  if (t[15] !== s || t[16] !== n || t[17] !== r)
    ((D = (B) => {
      if (!s) return;
      let $ = B;
      e: switch ($) {
        case "yes-session": {
          n(s, !1);
          break e;
        }
        case "yes-remember": {
          n(s, !0);
          break e;
        }
        case "no":
          r();
      }
    }),
      (t[15] = s),
      (t[16] = n),
      (t[17] = r),
      (t[18] = D));
  else D = t[18];
  let P = D,
    O;
  if (t[19] !== s)
    ((O = s
      ? void 0
      : $v.jsxs(Tn, {
          children: [
            $v.jsx(ht, {
              chord: "tab",
              action: "complete",
            }),
            $v.jsx(ht, {
              chord: "enter",
              action: "add",
            }),
            $v.jsx(mr, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "cancel",
            }),
          ],
        })),
      (t[19] = s),
      (t[20] = O));
  else O = t[20];
  let L;
  if (
    t[21] !== i ||
    t[22] !== s ||
    t[23] !== l ||
    t[24] !== P ||
    t[25] !== C ||
    t[26] !== f ||
    t[27] !== d
  )
    ((L = s
      ? $v.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [
            $v.jsx(iKd, {
              path: s,
            }),
            $v.jsx(Sr, {
              options: sKd,
              onChange: P,
              onCancel: () => P("no"),
            }),
          ],
        })
      : $v.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [
            $v.jsx(Fzi, {}),
            $v.jsx(aKd, {
              value: i,
              onChange: a,
              onSubmit: C,
              error: l,
              suggestions: d,
              selectedSuggestion: f,
            }),
          ],
        })),
      (t[21] = i),
      (t[22] = s),
      (t[23] = l),
      (t[24] = P),
      (t[25] = C),
      (t[26] = f),
      (t[27] = d),
      (t[28] = L));
  else L = t[28];
  let M;
  if (t[29] !== r || t[30] !== O || t[31] !== L)
    ((M = $v.jsx(zn, {
      title: "Add directory to workspace",
      onCancel: r,
      color: "permission",
      isCancelActive: !1,
      inputGuide: O,
      children: L,
    })),
      (t[29] = r),
      (t[30] = O),
      (t[31] = L),
      (t[32] = M));
  else M = t[32];
  let N;
  if (t[33] !== k || t[34] !== M)
    ((N = $v.jsx(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: k,
      children: M,
    })),
      (t[33] = k),
      (t[34] = M),
      (t[35] = N));
  else N = t[35];
  return N;
}
var NUt, GGe, $v, sKd;
