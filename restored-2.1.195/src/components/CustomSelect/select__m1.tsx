// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xZr
// matched 2.1.88 source: src/components/CustomSelect/select.tsx
// class=modified (alt of src/components/CustomSelect/select.tsx)  jaccard=0.0917  score=0.2658  fileCov=0.1228
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xZr] deps: react/cjs/react.production.js, components/design-system/Ratchet.tsx, marked/lib/marked.esm.js, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, hooks/useClipboardImageHint.ts, hooks/usePasteHandler.ts, utils/agentContext.ts, react/cjs/react.production.js, context/modalContext.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, components/ScrollKeybindingHandler.tsx, components/CustomSelect/select-input-option.tsx
((azi = R(lt(), 1)), (UGe = R(rt(), 1)), (rS = R(se(), 1)));
var kZr,
  czi = ({
    isDisabled: e = false,
    disableSelection: t = false,
    state: state,
    options: r,
    isMultiSelect: o = false,
    onUpFromFirstItem: s,
    onDownFromLastItem: i,
    onInputModeToggle: a,
    inputValues: l,
    imagesSelected: c = false,
    onEnterImageSelection: u,
    onExitImageSelection: d,
    hasInkFocus: p = true,
  }) => {
    let { focusDirection: f } = yat();
    Wh("select", !!state.onCancel);
    let m = kZr.useMemo(
        () => r.find((b) => b.value === state.focusedValue)?.type === "input",
        [r, state.focusedValue],
      ),
      g = kZr.useMemo(() => {
        let y = {};
        if (!m)
          ((y["select:next"] = () => {
            let b = r.at(-1);
            if (b && state.focusedValue === b.value) {
              if (i) {
                i();
                return;
              }
            }
            state.focusNextOption();
          }),
            (y["select:previous"] = () => {
              let b = r[0];
              if (b && state.focusedValue === b.value && state.visibleFromIndex === 0) {
                if (s) {
                  s();
                  return;
                }
              }
              state.focusPreviousOption();
            }),
            (y["select:accept"] = () => {
              if (t === true) return;
              if (state.focusedValue === void 0) return;
              if (r.find((_) => _.value === state.focusedValue)?.disabled === true) return;
              (state.selectFocusedOption?.(), state.onChange?.(state.focusedValue));
            }));
        if (state.onCancel)
          y["select:cancel"] = () => {
            state.onCancel();
          };
        return y;
      }, [r, state, i, s, m, t, f]);
    return (
      No(g, {
        context: "Select",
        isActive: !e && true,
      }),
      {
        handleKeyDown: (y) => {
          if (e) return;
          let b = jK(y.key),
            _ = r.find((A) => A.value === state.focusedValue),
            S = _?.type === "input";
          if (y.key === "tab") {
            if ((y.preventDefault(), a && state.focusedValue !== void 0)) a(state.focusedValue);
            return;
          }
          if (S) {
            if (c) {
              if (y.key === "up") (y.preventDefault(), d?.());
              return;
            }
            if (y.key === "down" && u?.()) {
              y.stopImmediatePropagation();
              return;
            }
            if (y.key === "down" || (y.ctrl && y.key === "n")) {
              if (i) {
                let A = r.at(-1);
                if (A && state.focusedValue === A.value) {
                  (i(), y.stopImmediatePropagation());
                  return;
                }
              }
              (state.focusNextOption(), y.stopImmediatePropagation());
              return;
            }
            if (y.key === "up" || (y.ctrl && y.key === "p")) {
              if (s && state.visibleFromIndex === 0) {
                let A = r[0];
                if (A && state.focusedValue === A.value) {
                  (s(), y.stopImmediatePropagation());
                  return;
                }
              }
              (state.focusPreviousOption(), y.stopImmediatePropagation());
              return;
            }
            return;
          }
          if (y.key === "pagedown") {
            (y.preventDefault(), state.focusNextPage());
            return;
          }
          if (y.key === "pageup") {
            (y.preventDefault(), state.focusPreviousPage());
            return;
          }
          if (t !== true) {
            if (o && nae(y.key) === " " && state.focusedValue !== void 0) {
              if (_?.disabled !== true)
                (y.preventDefault(),
                  state.selectFocusedOption?.(),
                  state.onChange?.(state.focusedValue));
              return;
            }
            if (t !== "numeric" && /^[0-9]$/.test(b)) {
              y.preventDefault();
              let A = parseInt(b) - 1;
              if (A >= 0 && A < state.options.length) {
                let v = state.options[A];
                if (v.disabled === true) return;
                if (v.type === "input") {
                  if ((l?.get(v.value) ?? "").trim()) {
                    state.onChange?.(v.value);
                    return;
                  }
                  if (v.allowEmptySubmitToCancel) {
                    state.onChange?.(v.value);
                    return;
                  }
                  state.focusOption(v.value);
                  return;
                }
                state.onChange?.(v.value);
                return;
              }
            }
          }
        },
      }
    );
  };
