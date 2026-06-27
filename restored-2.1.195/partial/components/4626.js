// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CMl
// matched 2.1.88 source: src/components/CustomSelect/select.tsx
// class=partial  jaccard=0.222  score=0.4649  fileCov=0.2982
// note: low-confidence suggestion: src/components/CustomSelect/select.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module CMl] deps: tC, sr, RZr
POe = R(rt(), 1), vMl = require("util");
function MOe(e) {
  let t = d1o.c(11);
  if (Sd()) {
    let o;
    if (t[0] !== e.defaultValue || t[1] !== e.isDisabled || t[2] !== e.onCancel || t[3] !== e.onChange || t[4] !== e.onFocus || t[5] !== e.onSubmit || t[6] !== e.options || t[7] !== e.submitButtonText) o = RP.jsx(Y6i, {
      options: e.options,
      defaultValue: e.defaultValue,
      onChange: e.onChange,
      onSubmit: e.onSubmit,
      onFocus: e.onFocus,
      onCancel: e.onCancel,
      isDisabled: e.isDisabled,
      submitButtonText: e.submitButtonText
    }), t[0] = e.defaultValue, t[1] = e.isDisabled, t[2] = e.onCancel, t[3] = e.onChange, t[4] = e.onFocus, t[5] = e.onSubmit, t[6] = e.options, t[7] = e.submitButtonText, t[8] = o;else o = t[8];
    return o;
  }
  let r;
  if (t[9] !== e) r = RP.jsx(ORf, {
    ...e
  }), t[9] = e, t[10] = r;else r = t[10];
  return r;
}
function ORf(e) {
  let t = d1o.c(51),
    {
      isDisabled: n,
      visibleOptionCount: r,
      options: o,
      defaultValue: s,
      onCancel: i,
      onChange: a,
      onFocus: l,
      focusValue: c,
      submitButtonText: u,
      onSubmit: d,
      onDownFromLastItem: p,
      onUpFromFirstItem: f,
      initialFocusLast: m,
      onOpenEditor: g,
      hideIndexes: h,
      onImagePaste: y,
      pastedContents: b,
      onRemoveImage: _
    } = e,
    S = n === void 0 ? false : n,
    A = r === void 0 ? 5 : r,
    v;
  if (t[0] !== s) v = s === void 0 ? [] : s, t[0] = s, t[1] = v;else v = t[1];
  let C = v,
    x = h === void 0 ? false : h,
    I = o.some(BRf),
    k = LZr(A, I ? "compact-vertical" : "compact"),
    D;
  if (t[2] !== C || t[3] !== c || t[4] !== x || t[5] !== m || t[6] !== S || t[7] !== i || t[8] !== a || t[9] !== p || t[10] !== l || t[11] !== d || t[12] !== f || t[13] !== o || t[14] !== u || t[15] !== k) D = {
    isDisabled: S,
    visibleOptionCount: k,
    options: o,
    defaultValue: C,
    onChange: a,
    onCancel: i,
    onFocus: l,
    focusValue: c,
    submitButtonText: u,
    onSubmit: d,
    onDownFromLastItem: p,
    onUpFromFirstItem: f,
    initialFocusLast: m,
    hideIndexes: x
  }, t[2] = C, t[3] = c, t[4] = x, t[5] = m, t[6] = S, t[7] = i, t[8] = a, t[9] = p, t[10] = l, t[11] = d, t[12] = f, t[13] = o, t[14] = u, t[15] = k, t[16] = D;else D = t[16];
  let P = wMl(D),
    O = IMl.useRef(null);
  M0(O, !S);
  let L, M, N, B, $, q, W;
  if (t[17] !== x || t[18] !== S || t[19] !== i || t[20] !== y || t[21] !== g || t[22] !== _ || t[23] !== o.length || t[24] !== b || t[25] !== P) {
    let K = o.length.toString().length;
    if (M = U, N = "column", B = O, t[33] !== S || t[34] !== P.handleKeyDown) $ = S ? {} : {
      tabIndex: 0,
      onKeyDown: P.handleKeyDown
    }, t[33] = S, t[34] = P.handleKeyDown, t[35] = $;else $ = t[35];
    L = U, q = "column", W = P.visibleOptions.map((Z, J) => {
      let ne = !S && P.focusedValue === Z.value && !P.isSubmitFocused,
        oe = P.selectedValues.includes(Z.value),
        re = Z.index === P.visibleFromIndex,
        ee = Z.index === P.visibleToIndex - 1,
        ce = P.visibleToIndex < o.length,
        ae = P.visibleFromIndex > 0,
        de = P.visibleFromIndex + J + 1;
      if (Z.type === "input") {
        let Ee = P.inputValues.get(Z.value) || "";
        return RP.jsx(U, {
          gap: 1,
          children: RP.jsx(nlt, {
            option: Z,
            isFocused: ne,
            isSelected: false,
            shouldShowDownArrow: ce && ee,
            shouldShowUpArrow: ae && re,
            maxIndexWidth: K,
            index: de,
            inputValue: Ee,
            onInputChange: me => {
              P.updateInputValue(Z.value, me);
            },
            onSubmit: NRf,
            onExit: () => {
              i();
            },
            layout: "compact",
            onOpenEditor: g,
            onImagePaste: y,
            pastedContents: b,
            onRemoveImage: _,
            extraChromeWidth: 4,
            children: RP.jsxs(w, {
              color: oe ? "success" : void 0,
              children: ["[", oe ? nt.tick : " ", "]", " "]
            })
          })
        }, String(Z.value));
      }
      return RP.jsx(U, {
        gap: 1,
        children: RP.jsxs(U0e, {
          isFocused: ne,
          isSelected: false,
          shouldShowDownArrow: ce && ee,
          shouldShowUpArrow: ae && re,
          description: Z.description,
          children: [!x && RP.jsx(w, {
            dimColor: true,
            children: `${de}.`.padEnd(K)
          }), RP.jsxs(w, {
            color: oe ? "success" : void 0,
            children: ["[", oe ? nt.tick : " ", "]"]
          }), RP.jsx(w, {
            color: ne ? "suggestion" : void 0,
            children: Z.label
          })]
        })
      }, String(Z.value));
    }), t[17] = x, t[18] = S, t[19] = i, t[20] = y, t[21] = g, t[22] = _, t[23] = o.length, t[24] = b, t[25] = P, t[26] = L, t[27] = M, t[28] = N, t[29] = B, t[30] = $, t[31] = q, t[32] = W;
  } else L = t[26], M = t[27], N = t[28], B = t[29], $ = t[30], q = t[31], W = t[32];
  let V;
  if (t[36] !== L || t[37] !== q || t[38] !== W) V = RP.jsx(L, {
    flexDirection: q,
    children: W
  }), t[36] = L, t[37] = q, t[38] = W, t[39] = V;else V = t[39];
  let Y;
  if (t[40] !== d || t[41] !== P.isSubmitFocused || t[42] !== u) Y = u && d && RP.jsxs(U, {
    marginTop: 0,
    gap: 1,
    children: [P.isSubmitFocused ? RP.jsx(w, {
      color: "suggestion",
      children: nt.pointer
    }) : RP.jsx(w, {
      children: " "
    }), RP.jsx(U, {
      marginLeft: 3,
      children: RP.jsx(w, {
        color: P.isSubmitFocused ? "suggestion" : void 0,
        bold: true,
        children: u
      })
    })]
  }), t[40] = d, t[41] = P.isSubmitFocused, t[42] = u, t[43] = Y;else Y = t[43];
  let z;
  if (t[44] !== M || t[45] !== N || t[46] !== B || t[47] !== $ || t[48] !== V || t[49] !== Y) z = RP.jsxs(M, {
    flexDirection: N,
    ref: B,
    ...$,
    children: [V, Y]
  }), t[44] = M, t[45] = N, t[46] = B, t[47] = $, t[48] = V, t[49] = Y, t[50] = z;else z = t[50];
  return z;
}
function NRf() {}
function BRf(e) {
  return e.description;
}
var d1o, IMl, RP;