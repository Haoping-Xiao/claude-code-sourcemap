// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TPn
// matched 2.1.88 source: src/components/CustomSelect/select-input-option.tsx
// class=modified  jaccard=0.4791  score=0.6034  fileCov=0.6994
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TPn] deps: components/CustomSelect/select.tsx
((szi = R(lt(), 1)), (izi = R(se(), 1)));
function Czd(e, t, n, r) {
  let o = 2 + t + 2;
  return Math.max(1, e - o - n - r);
}
function SelectInputOption(t0) {
  let t = azi.c(102),
    {
      option: option,
      isFocused: r,
      isSelected: o,
      shouldShowDownArrow: s,
      shouldShowUpArrow: i,
      maxIndexWidth: a,
      index: l,
      inputValue: inputValue,
      onInputChange: u,
      onSubmit: d,
      onExit: p,
      layout: f,
      children: m,
      showLabel: g,
      onOpenEditor: h,
      resetCursorOnUpdate: y,
      onImagePaste: b,
      pastedContents: _,
      onRemoveImage: S,
      imagesSelected: A,
      selectedImageIndex: v,
      onImagesSelectedChange: C,
      onSelectedImageIndexChange: x,
      extraChromeWidth: I,
    } = t0,
    k = g === void 0 ? false : g,
    D = y === void 0 ? false : y,
    P = v === void 0 ? 0 : v,
    O = I === void 0 ? 0 : I,
    L;
  if (t[0] !== _) ((L = _ ? Object.values(_).filter(Izd) : []), (t[0] = _), (t[1] = L));
  else L = t[1];
  let imageAttachments = L,
    N = k || option.showLabelWithValue === true,
    [B, $] = UGe.useState(inputValue.length),
    q = UGe.useRef(false),
    W;
  if (t[2] !== inputValue.length || t[3] !== r || t[4] !== D)
    ((W = () => {
      if (D && r)
        if (q.current) q.current = false;
        else $(inputValue.length);
    }),
      (t[2] = inputValue.length),
      (t[3] = r),
      (t[4] = D),
      (t[5] = W));
  else W = t[5];
  let V;
  if (t[6] !== inputValue || t[7] !== r || t[8] !== D)
    ((V = [D, r, inputValue]), (t[6] = inputValue), (t[7] = r), (t[8] = D), (t[9] = V));
  else V = t[9];
  UGe.useEffect(W, V);
  let Y;
  if (t[10] !== inputValue || t[11] !== u || t[12] !== h)
    ((Y = () => {
      h?.(inputValue, u);
    }),
      (t[10] = inputValue),
      (t[11] = u),
      (t[12] = h),
      (t[13] = Y));
  else Y = t[13];
  let z = r && !!h,
    K;
  if (t[14] !== z)
    ((K = {
      context: "Chat",
      isActive: z,
    }),
      (t[14] = z),
      (t[15] = K));
  else K = t[15];
  $r("chat:externalEditor", Y, K);
  let Z;
  if (t[16] !== b)
    ((Z = () => {
      if (!b) return;
      k0e(Gh(As())).then((ct) => {
        if (ct) b(ct.base64, ct.mediaType, void 0, ct.dimensions);
      });
    }),
      (t[16] = b),
      (t[17] = Z));
  else Z = t[17];
  let J = r && !!b,
    ne;
  if (t[18] !== J)
    ((ne = {
      context: "Chat",
      isActive: J,
    }),
      (t[18] = J),
      (t[19] = ne));
  else ne = t[19];
  $r("chat:imagePaste", Z, ne);
  let oe;
  if (t[20] !== imageAttachments || t[21] !== S)
    ((oe = () => {
      if (imageAttachments.length > 0 && S) S(imageAttachments.at(-1).id);
    }),
      (t[20] = imageAttachments),
      (t[21] = S),
      (t[22] = oe));
  else oe = t[22];
  let re = r && !A && inputValue === "" && imageAttachments.length > 0 && !!S,
    ee;
  if (t[23] !== re)
    ((ee = {
      context: "Attachments",
      isActive: re,
    }),
      (t[23] = re),
      (t[24] = ee));
  else ee = t[24];
  $r("attachments:remove", oe, ee);
  let ce, ae;
  if (t[25] !== imageAttachments.length || t[26] !== x || t[27] !== P)
    ((ce = () => {
      if (imageAttachments.length > 1) x?.((P + 1) % imageAttachments.length);
    }),
      (ae = () => {
        if (imageAttachments.length > 1)
          x?.((P - 1 + imageAttachments.length) % imageAttachments.length);
      }),
      (t[25] = imageAttachments.length),
      (t[26] = x),
      (t[27] = P),
      (t[28] = ce),
      (t[29] = ae));
  else ((ce = t[28]), (ae = t[29]));
  let de;
  if (t[30] !== imageAttachments || t[31] !== C || t[32] !== S || t[33] !== x || t[34] !== P)
    ((de = () => {
      let ct = imageAttachments[P];
      if (ct && S)
        if ((S(ct.id), imageAttachments.length <= 1)) C?.(false);
        else x?.(Math.min(P, imageAttachments.length - 2));
    }),
      (t[30] = imageAttachments),
      (t[31] = C),
      (t[32] = S),
      (t[33] = x),
      (t[34] = P),
      (t[35] = de));
  else de = t[35];
  let Ee;
  if (t[36] !== C)
    ((Ee = () => {
      C?.(false);
    }),
      (t[36] = C),
      (t[37] = Ee));
  else Ee = t[37];
  let me;
  if (t[38] !== ce || t[39] !== ae || t[40] !== de || t[41] !== Ee)
    ((me = {
      "attachments:next": ce,
      "attachments:previous": ae,
      "attachments:remove": de,
      "attachments:exit": Ee,
    }),
      (t[38] = ce),
      (t[39] = ae),
      (t[40] = de),
      (t[41] = Ee),
      (t[42] = me));
  else me = t[42];
  let pe = r && !!A,
    ge;
  if (t[43] !== pe)
    ((ge = {
      context: "Attachments",
      isActive: pe,
    }),
      (t[43] = pe),
      (t[44] = ge));
  else ge = t[44];
  No(me, ge);
  let he, ie;
  if (t[45] !== A || t[46] !== r || t[47] !== C)
    ((he = () => {
      if (!r && A) C?.(false);
    }),
      (ie = [r, A, C]),
      (t[45] = A),
      (t[46] = r),
      (t[47] = C),
      (t[48] = he),
      (t[49] = ie));
  else ((he = t[48]), (ie = t[49]));
  UGe.useEffect(he, ie);
  let le = f === "expanded" ? a + 3 : a + 4,
    { columns: He } = bb(br()),
    ye =
      N && typeof option.label === "string"
        ? rn(option.label) + rn(option.labelValueSeparator ?? ", ")
        : 0,
    ue;
  if (t[50] !== He || t[51] !== O || t[52] !== ye || t[53] !== a)
    ((ue = Czd(He, a, ye, O)), (t[50] = He), (t[51] = O), (t[52] = ye), (t[53] = a), (t[54] = ue));
  else ue = t[54];
  let we = ue,
    Ce = f === "compact" ? 0 : void 0,
    Ie = `${l}.`,
    Ve;
  if (t[55] !== a || t[56] !== Ie)
    ((Ve = Ie.padEnd(a + 2)), (t[55] = a), (t[56] = Ie), (t[57] = Ve));
  else Ve = t[57];
  let Ze;
  if (t[58] !== Ve)
    ((Ze = rS.jsx(U, {
      flexShrink: 0,
      children: rS.jsx(w, {
        dimColor: true,
        children: Ve,
      }),
    })),
      (t[58] = Ve),
      (t[59] = Ze));
  else Ze = t[59];
  let Be;
  if (
    t[60] !== B ||
    t[61] !== A ||
    t[62] !== inputValue ||
    t[63] !== r ||
    t[64] !== p ||
    t[65] !== b ||
    t[66] !== u ||
    t[67] !== d ||
    t[68] !== option ||
    t[69] !== N ||
    t[70] !== we
  )
    ((Be = N
      ? r
        ? rS.jsxs(rS.Fragment, {
            children: [
              rS.jsxs(w, {
                color: "suggestion",
                children: [option.label, option.labelValueSeparator ?? ", "],
              }),
              rS.jsx(Ta, {
                value: inputValue,
                onChange: (ct) => {
                  ((q.current = true), u(ct), option.onChange(ct));
                },
                onSubmit: d,
                onExit: p,
                placeholder: option.placeholder,
                focus: !A,
                showCursor: true,
                multiline: true,
                cursorOffset: B,
                onChangeCursorOffset: $,
                columns: we,
                onImagePaste: b,
                onPaste: (ct) => {
                  q.current = true;
                  let Je = inputValue.slice(0, B),
                    gt = inputValue.slice(B),
                    st = Je + ct + gt;
                  (u(st), option.onChange(st), $(Je.length + ct.length));
                },
              }),
            ],
          })
        : rS.jsxs(w, {
            children: [
              option.label,
              inputValue ? (option.labelValueSeparator ?? ", ") : null,
              inputValue || null,
            ],
          })
      : r
        ? rS.jsx(Ta, {
            value: inputValue,
            onChange: (ct) => {
              ((q.current = true), u(ct), option.onChange(ct));
            },
            onSubmit: d,
            onExit: p,
            placeholder:
              option.placeholder || (typeof option.label === "string" ? option.label : void 0),
            focus: !A,
            showCursor: true,
            multiline: true,
            cursorOffset: B,
            onChangeCursorOffset: $,
            columns: we,
            onImagePaste: b,
            onPaste: (ct) => {
              q.current = true;
              let Je = inputValue.slice(0, B),
                gt = inputValue.slice(B),
                st = Je + ct + gt;
              (u(st), option.onChange(st), $(Je.length + ct.length));
            },
          })
        : rS.jsx(w, {
            color: inputValue ? void 0 : "inactive",
            children: inputValue || option.placeholder || option.label,
          })),
      (t[60] = B),
      (t[61] = A),
      (t[62] = inputValue),
      (t[63] = r),
      (t[64] = p),
      (t[65] = b),
      (t[66] = u),
      (t[67] = d),
      (t[68] = option),
      (t[69] = N),
      (t[70] = we),
      (t[71] = Be));
  else Be = t[71];
  let Me;
  if (t[72] !== m || t[73] !== Ce || t[74] !== Ze || t[75] !== Be)
    ((Me = rS.jsxs(U, {
      flexDirection: "row",
      flexShrink: Ce,
      children: [Ze, m, Be],
    })),
      (t[72] = m),
      (t[73] = Ce),
      (t[74] = Ze),
      (t[75] = Be),
      (t[76] = Me));
  else Me = t[76];
  let Ue;
  if (t[77] !== r || t[78] !== o || t[79] !== s || t[80] !== i || t[81] !== Me)
    ((Ue = rS.jsx(U0e, {
      isFocused: r,
      isSelected: o,
      shouldShowDownArrow: s,
      shouldShowUpArrow: i,
      declareCursor: false,
      children: Me,
    })),
      (t[77] = r),
      (t[78] = o),
      (t[79] = s),
      (t[80] = i),
      (t[81] = Me),
      (t[82] = Ue));
  else Ue = t[82];
  let tt;
  if (
    t[83] !== le ||
    t[84] !== r ||
    t[85] !== o ||
    t[86] !== option.description ||
    t[87] !== option.dimDescription
  )
    ((tt =
      option.description &&
      rS.jsx(U, {
        paddingLeft: le,
        children: rS.jsx(w, {
          dimColor: option.dimDescription !== false,
          color: o ? "success" : r ? "suggestion" : void 0,
          children: option.description,
        }),
      })),
      (t[83] = le),
      (t[84] = r),
      (t[85] = o),
      (t[86] = option.description),
      (t[87] = option.dimDescription),
      (t[88] = tt));
  else tt = t[88];
  let bt;
  if (t[89] !== le || t[90] !== imageAttachments || t[91] !== A || t[92] !== r || t[93] !== P)
    ((bt =
      imageAttachments.length > 0 &&
      rS.jsxs(U, {
        flexDirection: "row",
        gap: 1,
        paddingLeft: le,
        children: [
          imageAttachments.map((ct, Je) =>
            rS.jsx(
              ezi,
              {
                imageId: ct.id,
                isSelected: !!A && Je === P,
              },
              ct.id,
            ),
          ),
          rS.jsx(U, {
            flexGrow: 1,
            justifyContent: "flex-start",
            flexDirection: "row",
            children: rS.jsx(w, {
              dimColor: true,
              children: A
                ? rS.jsxs(Tn, {
                    children: [
                      imageAttachments.length > 1 &&
                        rS.jsxs(rS.Fragment, {
                          children: [
                            rS.jsx(mr, {
                              action: "attachments:next",
                              context: "Attachments",
                              fallback: "\u2192",
                              description: "next",
                            }),
                            rS.jsx(mr, {
                              action: "attachments:previous",
                              context: "Attachments",
                              fallback: "\u2190",
                              description: "prev",
                            }),
                          ],
                        }),
                      rS.jsx(mr, {
                        action: "attachments:remove",
                        context: "Attachments",
                        fallback: "backspace",
                        description: "remove",
                      }),
                      rS.jsx(mr, {
                        action: "attachments:exit",
                        context: "Attachments",
                        fallback: "esc",
                        description: "cancel",
                      }),
                    ],
                  })
                : r
                  ? rS.jsx(ht, {
                      chord: "down",
                      action: "select",
                      parens: true,
                    })
                  : null,
            }),
          }),
        ],
      })),
      (t[89] = le),
      (t[90] = imageAttachments),
      (t[91] = A),
      (t[92] = r),
      (t[93] = P),
      (t[94] = bt));
  else bt = t[94];
  let Ke;
  if (t[95] !== f)
    ((Ke =
      f === "expanded" &&
      rS.jsx(w, {
        children: " ",
      })),
      (t[95] = f),
      (t[96] = Ke));
  else Ke = t[96];
  let Et;
  if (t[97] !== Ue || t[98] !== tt || t[99] !== bt || t[100] !== Ke)
    ((Et = rS.jsxs(U, {
      flexDirection: "column",
      flexShrink: 0,
      children: [Ue, tt, bt, Ke],
    })),
      (t[97] = Ue),
      (t[98] = tt),
      (t[99] = bt),
      (t[100] = Ke),
      (t[101] = Et));
  else Et = t[101];
  return Et;
}
function Izd(e) {
  return e.type === "image";
}
var azi, UGe, rS;
