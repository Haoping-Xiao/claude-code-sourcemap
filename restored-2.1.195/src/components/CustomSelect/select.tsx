// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gzi
// matched 2.1.88 source: src/components/CustomSelect/select.tsx
// class=modified  jaccard=0.3761  score=0.5145  fileCov=0.583
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gzi] deps: RZr
CPn = R(rt(), 1);
function Sr(e) {
  let t = IPn.c(10);
  if (Sd()) {
    let o;
    if (
      t[0] !== e.defaultValue ||
      t[1] !== e.disableSelection ||
      t[2] !== e.isDisabled ||
      t[3] !== e.onCancel ||
      t[4] !== e.onChange ||
      t[5] !== e.onFocus ||
      t[6] !== e.options
    )
      ((o = Zl.jsx(K6i, {
        options: e.options,
        onChange: e.onChange,
        onFocus: e.onFocus,
        onCancel: e.onCancel,
        isDisabled: e.isDisabled,
        disableSelection: e.disableSelection,
        defaultValue: e.defaultValue,
      })),
        (t[0] = e.defaultValue),
        (t[1] = e.disableSelection),
        (t[2] = e.isDisabled),
        (t[3] = e.onCancel),
        (t[4] = e.onChange),
        (t[5] = e.onFocus),
        (t[6] = e.options),
        (t[7] = o));
    else o = t[7];
    return o;
  }
  let r;
  if (t[8] !== e)
    ((r = Zl.jsx(kzd, {
      ...e,
    })),
      (t[8] = e),
      (t[9] = r));
  else r = t[9];
  return r;
}
function kzd(e) {
  let t = IPn.c(86),
    {
      isDisabled: n,
      hideIndexes: r,
      visibleOptionCount: o,
      highlightText: s,
      options: i,
      defaultValue: a,
      onCancel: l,
      onChange: c,
      onFocus: u,
      defaultFocusValue: d,
      layout: p,
      disableSelection: f,
      inlineDescriptions: m,
      onUpFromFirstItem: g,
      onDownFromLastItem: h,
      onInputModeToggle: y,
      onOpenEditor: b,
      onImagePaste: _,
      pastedContents: S,
      onRemoveImage: A,
    } = e,
    v = n === void 0 ? false : n,
    C = r === void 0 ? false : r,
    x = o === void 0 ? 5 : o,
    I = p === void 0 ? "compact" : p,
    k = f === void 0 ? false : f,
    D = m === void 0 ? false : m,
    [P, O] = One.useState(false),
    [L, M] = One.useState(0),
    N;
  if (t[0] !== i)
    ((N = () => {
      let ue = new Map();
      return (
        i.forEach((we) => {
          if (we.type === "input" && we.initialValue) ue.set(we.value, we.initialValue);
        }),
        ue
      );
    }),
      (t[0] = i),
      (t[1] = N));
  else N = t[1];
  let [B, $] = One.useState(N),
    q;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((q = new Map()), (t[2] = q));
  else q = t[2];
  let W = One.useRef(q),
    V,
    Y;
  if (t[3] !== B || t[4] !== i)
    ((Y = () => {
      for (let ue of i)
        if (ue.type === "input" && ue.initialValue !== void 0) {
          let we = W.current.get(ue.value) ?? "",
            Ce = B.get(ue.value) ?? "",
            Ie = ue.initialValue;
          if (Ie !== we && Ce === we)
            $((Ve) => {
              let Ze = new Map(Ve);
              return (Ze.set(ue.value, Ie), Ze);
            });
          W.current.set(ue.value, Ie);
        }
    }),
      (V = [i, B]),
      (t[3] = B),
      (t[4] = i),
      (t[5] = V),
      (t[6] = Y));
  else ((V = t[5]), (Y = t[6]));
  One.useEffect(Y, V);
  let z = I === "compact" && !D && !i.some(Uzd) && i.some(Bzd),
    { columns: K } = bb(br()),
    Z = LZr(x, z ? "compact-vertical" : I),
    J;
  if (
    t[7] !== d ||
    t[8] !== a ||
    t[9] !== l ||
    t[10] !== c ||
    t[11] !== u ||
    t[12] !== i ||
    t[13] !== Z
  )
    ((J = {
      visibleOptionCount: Z,
      options: i,
      defaultValue: a,
      onChange: c,
      onCancel: l,
      onFocus: u,
      focusValue: d,
    }),
      (t[7] = d),
      (t[8] = a),
      (t[9] = l),
      (t[10] = c),
      (t[11] = u),
      (t[12] = i),
      (t[13] = Z),
      (t[14] = J));
  else J = t[14];
  let ne = mzi(J),
    [oe, re] = One.useState(true),
    ee;
  if (t[15] !== k || t[16] !== v || t[17] !== ne)
    ((ee = (ue) =>
      v || k === true || ue.disabled === true ? void 0 : () => ne.onChange?.(ue.value)),
      (t[15] = k),
      (t[16] = v),
      (t[17] = ne),
      (t[18] = ee));
  else ee = t[18];
  let ce = ee,
    ae = k || (C ? "numeric" : false),
    de;
  if (t[19] !== S)
    ((de = () => {
      if (S && Object.values(S).some(Nzd)) {
        let ue = On(Object.values(S), Ozd);
        return (O(true), M(ue - 1), true);
      }
      return false;
    }),
      (t[19] = S),
      (t[20] = de));
  else de = t[20];
  let Ee;
  if (t[21] === Symbol.for("react.memo_cache_sentinel"))
    ((Ee = () => {
      O(false);
    }),
      (t[21] = Ee));
  else Ee = t[21];
  let me;
  if (
    t[22] !== oe ||
    t[23] !== P ||
    t[24] !== B ||
    t[25] !== v ||
    t[26] !== h ||
    t[27] !== y ||
    t[28] !== g ||
    t[29] !== i ||
    t[30] !== ne ||
    t[31] !== ae ||
    t[32] !== de
  )
    ((me = {
      isDisabled: v,
      hasInkFocus: oe,
      disableSelection: ae,
      state: ne,
      options: i,
      isMultiSelect: false,
      onUpFromFirstItem: g,
      onDownFromLastItem: h,
      onInputModeToggle: y,
      inputValues: B,
      imagesSelected: P,
      onEnterImageSelection: de,
      onExitImageSelection: Ee,
    }),
      (t[22] = oe),
      (t[23] = P),
      (t[24] = B),
      (t[25] = v),
      (t[26] = h),
      (t[27] = y),
      (t[28] = g),
      (t[29] = i),
      (t[30] = ne),
      (t[31] = ae),
      (t[32] = de),
      (t[33] = me));
  else me = t[33];
  let { handleKeyDown: pe } = czi(me),
    ge = One.useRef(null);
  M0(ge, !v);
  let he, ie, le, He;
  if (
    t[34] !== K ||
    t[35] !== ce ||
    t[36] !== pe ||
    t[37] !== C ||
    t[38] !== s ||
    t[39] !== P ||
    t[40] !== D ||
    t[41] !== B ||
    t[42] !== v ||
    t[43] !== I ||
    t[44] !== l ||
    t[45] !== c ||
    t[46] !== _ ||
    t[47] !== b ||
    t[48] !== A ||
    t[49] !== i ||
    t[50] !== S ||
    t[51] !== L ||
    t[52] !== ne.focusedValue ||
    t[53] !== ne.options ||
    t[54] !== ne.value ||
    t[55] !== ne.visibleFromIndex ||
    t[56] !== ne.visibleOptions ||
    t[57] !== ne.visibleToIndex
  ) {
    He = Symbol.for("react.early_return_sentinel");
    e: {
      let ue = {
        container: () => ({
          flexDirection: "column",
          ref: ge,
          ...(v
            ? {}
            : {
                tabIndex: 0,
                onKeyDown: pe,
                onFocus: () => re(true),
                onBlur: () => re(false),
              }),
        }),
        highlightedText: $zd,
      };
      if (I === "expanded") {
        let Ze;
        if (t[62] !== ne.options.length)
          ((Ze = ne.options.length.toString()), (t[62] = ne.options.length), (t[63] = Ze));
        else Ze = t[63];
        let Be = Ze.length;
        He = Zl.jsx(U, {
          ...ue.container(),
          children: ne.visibleOptions.map((Me, Ue) => {
            let tt = Me.index === ne.visibleFromIndex,
              bt = Me.index === ne.visibleToIndex - 1,
              Ke = ne.visibleToIndex < i.length,
              Et = ne.visibleFromIndex > 0,
              ct = ne.visibleFromIndex + Ue + 1,
              Je = !v && ne.focusedValue === Me.value,
              gt = ne.value === Me.value;
            if (Me.type === "input") {
              let jt = B.has(Me.value) ? B.get(Me.value) : Me.initialValue || "";
              return Zl.jsx(
                nlt,
                {
                  option: Me,
                  isFocused: Je,
                  isSelected: gt,
                  shouldShowDownArrow: Ke && bt,
                  shouldShowUpArrow: Et && tt,
                  maxIndexWidth: Be,
                  index: ct,
                  inputValue: jt,
                  onInputChange: (en) => {
                    $((Dn) => {
                      let nn = new Map(Dn);
                      return (nn.set(Me.value, en), nn);
                    });
                  },
                  onSubmit: (en) => {
                    let Dn = S && Object.values(S).some(Mzd);
                    if (en.trim() || Dn || Me.allowEmptySubmitToCancel) c?.(Me.value);
                    else l?.();
                  },
                  onExit: l,
                  layout: "expanded",
                  showLabel: D,
                  onOpenEditor: b,
                  resetCursorOnUpdate: Me.resetCursorOnUpdate,
                  onImagePaste: _,
                  pastedContents: S,
                  onRemoveImage: A,
                  imagesSelected: P,
                  selectedImageIndex: L,
                  onImagesSelectedChange: O,
                  onSelectedImageIndexChange: M,
                },
                String(Me.value),
              );
            }
            let st = Me.label;
            if (typeof Me.label === "string" && s && Me.label.includes(s)) {
              let jt = Me.label,
                en = jt.indexOf(s);
              st = Zl.jsxs(Zl.Fragment, {
                children: [
                  jt.slice(0, en),
                  Zl.jsx(w, {
                    ...ue.highlightedText(),
                    children: s,
                  }),
                  jt.slice(en + s.length),
                ],
              });
            }
            let xt = Me.disabled === true,
              vt = xt ? void 0 : gt ? "success" : Je ? "suggestion" : void 0;
            return Zl.jsxs(
              U,
              {
                flexDirection: "column",
                flexShrink: 0,
                children: [
                  Zl.jsx(U0e, {
                    isFocused: Je,
                    isSelected: gt,
                    shouldShowDownArrow: Ke && bt,
                    shouldShowUpArrow: Et && tt,
                    onClick: ce(Me),
                    children: Zl.jsx(w, {
                      dimColor: xt,
                      color: vt,
                      children: st,
                    }),
                  }),
                  Me.description &&
                    Zl.jsx(U, {
                      paddingLeft: 2,
                      children: Zl.jsx(w, {
                        dimColor: xt || Me.dimDescription !== false,
                        color: vt,
                        children: Zl.jsx(bd, {
                          children: Me.description,
                        }),
                      }),
                    }),
                  Zl.jsx(w, {
                    children: " ",
                  }),
                ],
              },
              String(Me.value),
            );
          }),
        });
        break e;
      }
      if (I === "compact-vertical") {
        let Ze;
        if (t[64] !== C || t[65] !== ne.options)
          ((Ze = C ? 0 : ne.options.length.toString().length),
            (t[64] = C),
            (t[65] = ne.options),
            (t[66] = Ze));
        else Ze = t[66];
        let Be = Ze;
        He = Zl.jsx(U, {
          ...ue.container(),
          children: ne.visibleOptions.map((Me, Ue) => {
            let tt = Me.index === ne.visibleFromIndex,
              bt = Me.index === ne.visibleToIndex - 1,
              Ke = ne.visibleToIndex < i.length,
              Et = ne.visibleFromIndex > 0,
              ct = ne.visibleFromIndex + Ue + 1,
              Je = !v && ne.focusedValue === Me.value,
              gt = ne.value === Me.value;
            if (Me.type === "input") {
              let vt = B.has(Me.value) ? B.get(Me.value) : Me.initialValue || "";
              return Zl.jsx(
                nlt,
                {
                  option: Me,
                  isFocused: Je,
                  isSelected: gt,
                  shouldShowDownArrow: Ke && bt,
                  shouldShowUpArrow: Et && tt,
                  maxIndexWidth: Be,
                  index: ct,
                  inputValue: vt,
                  onInputChange: (jt) => {
                    $((en) => {
                      let Dn = new Map(en);
                      return (Dn.set(Me.value, jt), Dn);
                    });
                  },
                  onSubmit: (jt) => {
                    let en = S && Object.values(S).some(Pzd);
                    if (jt.trim() || en || Me.allowEmptySubmitToCancel) c?.(Me.value);
                    else l?.();
                  },
                  onExit: l,
                  layout: "compact",
                  showLabel: D,
                  onOpenEditor: b,
                  resetCursorOnUpdate: Me.resetCursorOnUpdate,
                  onImagePaste: _,
                  pastedContents: S,
                  onRemoveImage: A,
                  imagesSelected: P,
                  selectedImageIndex: L,
                  onImagesSelectedChange: O,
                  onSelectedImageIndexChange: M,
                },
                String(Me.value),
              );
            }
            let st = Me.label;
            if (typeof Me.label === "string" && s && Me.label.includes(s)) {
              let vt = Me.label,
                jt = vt.indexOf(s);
              st = Zl.jsxs(Zl.Fragment, {
                children: [
                  vt.slice(0, jt),
                  Zl.jsx(w, {
                    ...ue.highlightedText(),
                    children: s,
                  }),
                  vt.slice(jt + s.length),
                ],
              });
            }
            let xt = Me.disabled === true;
            return Zl.jsxs(
              U,
              {
                flexDirection: "column",
                flexShrink: 0,
                children: [
                  Zl.jsx(U0e, {
                    isFocused: Je,
                    isSelected: gt,
                    shouldShowDownArrow: Ke && bt,
                    shouldShowUpArrow: Et && tt,
                    onClick: ce(Me),
                    children: Zl.jsxs(Zl.Fragment, {
                      children: [
                        !C &&
                          Zl.jsx(w, {
                            dimColor: true,
                            children: `${ct}.`.padEnd(Be + 1),
                          }),
                        Zl.jsx(w, {
                          dimColor: xt,
                          color: xt ? void 0 : gt ? "success" : Je ? "suggestion" : void 0,
                          children: st,
                        }),
                      ],
                    }),
                  }),
                  Me.description &&
                    Zl.jsx(U, {
                      paddingLeft: C ? 4 : Be + 4,
                      children: Zl.jsx(w, {
                        dimColor: xt || Me.dimDescription !== false,
                        color: xt ? void 0 : gt ? "success" : Je ? "suggestion" : void 0,
                        children: Zl.jsx(bd, {
                          children: Me.description,
                        }),
                      }),
                    }),
                ],
              },
              String(Me.value),
            );
          }),
        });
        break e;
      }
      let we;
      if (t[67] !== C || t[68] !== ne.options)
        ((we = C ? 0 : ne.options.length.toString().length),
          (t[67] = C),
          (t[68] = ne.options),
          (t[69] = we));
      else we = t[69];
      let Ce = we,
        Ie = i.some(Dzd);
      if (!D && !Ie && i.some(Lzd)) {
        let Ze = C ? 0 : Ce + 2,
          Be;
        if (t[70] !== Ze || t[71] !== i || t[72] !== ne.value) {
          let bt;
          if (t[74] !== Ze || t[75] !== ne.value)
            ((bt = (Ke) => {
              if (Ke.type === "input") return 0;
              let Et = ne.value === Ke.value ? 2 : 0;
              return 2 + Ze + rn(GU(Ke.label)) + Et;
            }),
              (t[74] = Ze),
              (t[75] = ne.value),
              (t[76] = bt));
          else bt = t[76];
          ((Be = Math.max(...i.map(bt))),
            (t[70] = Ze),
            (t[71] = i),
            (t[72] = ne.value),
            (t[73] = Be));
        } else Be = t[73];
        let Me = Math.min(Be, Math.floor(K * jzd)),
          Ue = ne.visibleOptions.map((bt, Ke) => {
            let Et = bt.index === ne.visibleFromIndex,
              ct = bt.index === ne.visibleToIndex - 1,
              Je = ne.visibleToIndex < i.length,
              gt = ne.visibleFromIndex > 0,
              st = ne.visibleFromIndex + Ke + 1,
              xt = !v && ne.focusedValue === bt.value,
              vt = ne.value === bt.value,
              jt = bt.disabled === true,
              en = vt ? 2 : 0,
              Dn = GU(bt.label),
              nn = bt.label,
              Ln = Me - 2 - Ze - en;
            if (rn(Dn) > Ln) ((Dn = Rs(Dn, Ln)), (nn = Dn));
            if (typeof nn === "string" && s && nn.includes(s)) {
              let Hn = nn,
                kr = Hn.indexOf(s);
              nn = Zl.jsxs(Zl.Fragment, {
                children: [
                  Hn.slice(0, kr),
                  Zl.jsx(w, {
                    ...ue.highlightedText(),
                    children: s,
                  }),
                  Hn.slice(kr + s.length),
                ],
              });
            }
            return {
              option: bt,
              index: st,
              label: nn,
              labelWidth: 2 + Ze + rn(Dn) + en,
              isFocused: xt,
              isSelected: vt,
              isOptionDisabled: jt,
              shouldShowDownArrow: Je && ct,
              shouldShowUpArrow: gt && Et,
            };
          }),
          tt;
        if (t[77] !== ce || t[78] !== C || t[79] !== Ce || t[80] !== Me)
          ((tt = (bt) => {
            if (bt.option.type === "input") return null;
            let Ke = Me - bt.labelWidth;
            return Zl.jsxs(
              Gzd,
              {
                isFocused: bt.isFocused,
                shouldShowDownArrow: bt.shouldShowDownArrow,
                shouldShowUpArrow: bt.shouldShowUpArrow,
                onClick: ce(bt.option),
                children: [
                  Zl.jsxs(U, {
                    flexDirection: "row",
                    flexShrink: 0,
                    children: [
                      Zl.jsx(w, {
                        children: " ",
                      }),
                      Zl.jsxs(w, {
                        dimColor: bt.isOptionDisabled,
                        color: bt.isOptionDisabled
                          ? void 0
                          : bt.isSelected
                            ? "success"
                            : bt.isFocused
                              ? "suggestion"
                              : void 0,
                        children: [
                          !C &&
                            Zl.jsx(w, {
                              dimColor: true,
                              children: `${bt.index}.`.padEnd(Ce + 2),
                            }),
                          bt.label,
                        ],
                      }),
                      bt.isSelected &&
                        Zl.jsxs(w, {
                          children: [
                            " ",
                            Zl.jsx(Hs, {
                              status: "success",
                            }),
                          ],
                        }),
                      Ke > 0 &&
                        Zl.jsx(w, {
                          children: " ".repeat(Ke),
                        }),
                    ],
                  }),
                  Zl.jsx(U, {
                    flexGrow: 1,
                    marginLeft: 2,
                    children: Zl.jsx(w, {
                      wrap: "wrap",
                      dimColor:
                        bt.option.descriptionColor === void 0 &&
                        (bt.isOptionDisabled || bt.option.dimDescription !== false),
                      color: bt.isOptionDisabled
                        ? bt.option.descriptionColor
                        : bt.isSelected
                          ? "success"
                          : bt.isFocused
                            ? "suggestion"
                            : bt.option.descriptionColor,
                      children: Zl.jsx(bd, {
                        children: bt.option.description || " ",
                      }),
                    }),
                  }),
                ],
              },
              String(bt.option.value),
            );
          }),
            (t[77] = ce),
            (t[78] = C),
            (t[79] = Ce),
            (t[80] = Me),
            (t[81] = tt));
        else tt = t[81];
        He = Zl.jsx(U, {
          ...ue.container(),
          children: Ue.map(tt),
        });
        break e;
      }
      ((he = U),
        (ie = ue.container()),
        (le = ne.visibleOptions.map((Ze, Be) => {
          if (Ze.type === "input") {
            let st = B.has(Ze.value) ? B.get(Ze.value) : Ze.initialValue || "",
              xt = Ze.index === ne.visibleFromIndex,
              vt = Ze.index === ne.visibleToIndex - 1,
              jt = ne.visibleToIndex < i.length,
              en = ne.visibleFromIndex > 0,
              Dn = ne.visibleFromIndex + Be + 1,
              nn = !v && ne.focusedValue === Ze.value,
              Ln = ne.value === Ze.value;
            return Zl.jsx(
              nlt,
              {
                option: Ze,
                isFocused: nn,
                isSelected: Ln,
                shouldShowDownArrow: jt && vt,
                shouldShowUpArrow: en && xt,
                maxIndexWidth: Ce,
                index: Dn,
                inputValue: st,
                onInputChange: (Hn) => {
                  $((kr) => {
                    let Mr = new Map(kr);
                    return (Mr.set(Ze.value, Hn), Mr);
                  });
                },
                onSubmit: (Hn) => {
                  let kr = S && Object.values(S).some(Rzd);
                  if (Hn.trim() || kr || Ze.allowEmptySubmitToCancel) c?.(Ze.value);
                  else l?.();
                },
                onExit: l,
                layout: "compact",
                showLabel: D,
                onOpenEditor: b,
                resetCursorOnUpdate: Ze.resetCursorOnUpdate,
                onImagePaste: _,
                pastedContents: S,
                onRemoveImage: A,
                imagesSelected: P,
                selectedImageIndex: L,
                onImagesSelectedChange: O,
                onSelectedImageIndexChange: M,
              },
              String(Ze.value),
            );
          }
          let Me = Ze.label;
          if (typeof Ze.label === "string" && s && Ze.label.includes(s)) {
            let st = Ze.label,
              xt = st.indexOf(s);
            Me = Zl.jsxs(Zl.Fragment, {
              children: [
                st.slice(0, xt),
                Zl.jsx(w, {
                  ...ue.highlightedText(),
                  children: s,
                }),
                st.slice(xt + s.length),
              ],
            });
          }
          let Ue = Ze.index === ne.visibleFromIndex,
            tt = Ze.index === ne.visibleToIndex - 1,
            bt = ne.visibleToIndex < i.length,
            Ke = ne.visibleFromIndex > 0,
            Et = ne.visibleFromIndex + Be + 1,
            ct = !v && ne.focusedValue === Ze.value,
            Je = ne.value === Ze.value,
            gt = Ze.disabled === true;
          return Zl.jsxs(
            U0e,
            {
              isFocused: ct,
              isSelected: Je,
              shouldShowDownArrow: bt && tt,
              shouldShowUpArrow: Ke && Ue,
              onClick: ce(Ze),
              children: [
                Zl.jsxs(U, {
                  flexDirection: "row",
                  flexShrink: 0,
                  children: [
                    !C &&
                      Zl.jsx(w, {
                        dimColor: true,
                        children: `${Et}.`.padEnd(Ce + 2),
                      }),
                    Zl.jsxs(w, {
                      dimColor: gt,
                      color: gt ? void 0 : Je ? "success" : ct ? "suggestion" : void 0,
                      children: [
                        Me,
                        D &&
                          Ze.description &&
                          Zl.jsxs(w, {
                            dimColor: gt || Ze.dimDescription !== false,
                            children: [" ", Ze.description],
                          }),
                      ],
                    }),
                  ],
                }),
                !D &&
                  Ze.description &&
                  Zl.jsx(U, {
                    flexShrink: 99,
                    marginLeft: 2,
                    children: Zl.jsx(w, {
                      wrap: "wrap-trim",
                      dimColor: gt || Ze.dimDescription !== false,
                      color: gt ? void 0 : Je ? "success" : ct ? "suggestion" : void 0,
                      children: Zl.jsx(bd, {
                        children: Ze.description,
                      }),
                    }),
                  }),
              ],
            },
            String(Ze.value),
          );
        })));
    }
    ((t[34] = K),
      (t[35] = ce),
      (t[36] = pe),
      (t[37] = C),
      (t[38] = s),
      (t[39] = P),
      (t[40] = D),
      (t[41] = B),
      (t[42] = v),
      (t[43] = I),
      (t[44] = l),
      (t[45] = c),
      (t[46] = _),
      (t[47] = b),
      (t[48] = A),
      (t[49] = i),
      (t[50] = S),
      (t[51] = L),
      (t[52] = ne.focusedValue),
      (t[53] = ne.options),
      (t[54] = ne.value),
      (t[55] = ne.visibleFromIndex),
      (t[56] = ne.visibleOptions),
      (t[57] = ne.visibleToIndex),
      (t[58] = he),
      (t[59] = ie),
      (t[60] = le),
      (t[61] = He));
  } else ((he = t[58]), (ie = t[59]), (le = t[60]), (He = t[61]));
  if (He !== Symbol.for("react.early_return_sentinel")) return He;
  let ye;
  if (t[82] !== he || t[83] !== ie || t[84] !== le)
    ((ye = Zl.jsx(he, {
      ...ie,
      children: le,
    })),
      (t[82] = he),
      (t[83] = ie),
      (t[84] = le),
      (t[85] = ye));
  else ye = t[85];
  return ye;
}
function Rzd(e) {
  return e.type === "image";
}
function Lzd(e) {
  return e.description;
}
function Dzd(e) {
  return e.type === "input";
}
function Pzd(e) {
  return e.type === "image";
}
function Mzd(e) {
  return e.type === "image";
}
function $zd() {
  return {
    bold: true,
  };
}
function Ozd(e) {
  return e.type === "image";
}
function Nzd(e) {
  return e.type === "image";
}
function Bzd(e) {
  return e.description;
}
function Uzd(e) {
  return e.type === "input";
}
function LZr(e, t) {
  let n = t === void 0 ? "compact" : t,
    { rows: r } = bb(br()),
    o = n === "expanded" ? 3 : n === "compact" ? 1 : 2,
    s = Math.max(1, Math.floor((r - Fzd) / o));
  return Math.min(e, s);
}
function Gzd(e) {
  let t = IPn.c(19),
    { isFocused: n, shouldShowDownArrow: r, shouldShowUpArrow: o, onClick: s, children: i } = e,
    [a, l] = One.useState(false),
    c = s !== void 0,
    u;
  if (t[0] !== n)
    ((u = {
      line: 0,
      column: 0,
      active: n,
    }),
      (t[0] = n),
      (t[1] = u));
  else u = t[1];
  let d = RW(u),
    p;
  if (t[2] !== c) ((p = c ? () => l(true) : void 0), (t[2] = c), (t[3] = p));
  else p = t[3];
  let f;
  if (t[4] !== c) ((f = c ? () => l(false) : void 0), (t[4] = c), (t[5] = f));
  else f = t[5];
  let m;
  if (t[6] !== c || t[7] !== a || t[8] !== n || t[9] !== r || t[10] !== o)
    ((m = Zl.jsx(U, {
      flexShrink: 0,
      children: n
        ? Zl.jsx(w, {
            color: "suggestion",
            children: nt.pointer,
          })
        : r
          ? Zl.jsx(w, {
              dimColor: true,
              children: nt.arrowDown,
            })
          : o
            ? Zl.jsx(w, {
                dimColor: true,
                children: nt.arrowUp,
              })
            : c && a
              ? Zl.jsx(w, {
                  dimColor: true,
                  children: nt.pointer,
                })
              : Zl.jsx(w, {
                  children: " ",
                }),
    })),
      (t[6] = c),
      (t[7] = a),
      (t[8] = n),
      (t[9] = r),
      (t[10] = o),
      (t[11] = m));
  else m = t[11];
  let g;
  if (t[12] !== i || t[13] !== d || t[14] !== s || t[15] !== p || t[16] !== f || t[17] !== m)
    ((g = Zl.jsxs(U, {
      ref: d,
      flexDirection: "row",
      flexShrink: 0,
      onClick: s,
      onMouseEnter: p,
      onMouseLeave: f,
      children: [m, i],
    })),
      (t[12] = i),
      (t[13] = d),
      (t[14] = s),
      (t[15] = p),
      (t[16] = f),
      (t[17] = m),
      (t[18] = g));
  else g = t[18];
  return g;
}
var IPn,
  One,
  Zl,
  Fzd = 8,
  jzd = 0.6;
