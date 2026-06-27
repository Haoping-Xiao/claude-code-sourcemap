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
    state: n,
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
    Wh("select", !!n.onCancel);
    let m = kZr.useMemo(
        () => r.find((b) => b.value === n.focusedValue)?.type === "input",
        [r, n.focusedValue],
      ),
      g = kZr.useMemo(() => {
        let y = {};
        if (!m)
          ((y["select:next"] = () => {
            let b = r.at(-1);
            if (b && n.focusedValue === b.value) {
              if (i) {
                i();
                return;
              }
            }
            n.focusNextOption();
          }),
            (y["select:previous"] = () => {
              let b = r[0];
              if (b && n.focusedValue === b.value && n.visibleFromIndex === 0) {
                if (s) {
                  s();
                  return;
                }
              }
              n.focusPreviousOption();
            }),
            (y["select:accept"] = () => {
              if (t === true) return;
              if (n.focusedValue === void 0) return;
              if (r.find((_) => _.value === n.focusedValue)?.disabled === true) return;
              (n.selectFocusedOption?.(), n.onChange?.(n.focusedValue));
            }));
        if (n.onCancel)
          y["select:cancel"] = () => {
            n.onCancel();
          };
        return y;
      }, [r, n, i, s, m, t, f]);
    return (
      No(g, {
        context: "Select",
        isActive: !e && true,
      }),
      {
        handleKeyDown: (y) => {
          if (e) return;
          let b = jK(y.key),
            _ = r.find((A) => A.value === n.focusedValue),
            S = _?.type === "input";
          if (y.key === "tab") {
            if ((y.preventDefault(), a && n.focusedValue !== void 0)) a(n.focusedValue);
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
                if (A && n.focusedValue === A.value) {
                  (i(), y.stopImmediatePropagation());
                  return;
                }
              }
              (n.focusNextOption(), y.stopImmediatePropagation());
              return;
            }
            if (y.key === "up" || (y.ctrl && y.key === "p")) {
              if (s && n.visibleFromIndex === 0) {
                let A = r[0];
                if (A && n.focusedValue === A.value) {
                  (s(), y.stopImmediatePropagation());
                  return;
                }
              }
              (n.focusPreviousOption(), y.stopImmediatePropagation());
              return;
            }
            return;
          }
          if (y.key === "pagedown") {
            (y.preventDefault(), n.focusNextPage());
            return;
          }
          if (y.key === "pageup") {
            (y.preventDefault(), n.focusPreviousPage());
            return;
          }
          if (t !== true) {
            if (o && nae(y.key) === " " && n.focusedValue !== void 0) {
              if (_?.disabled !== true)
                (y.preventDefault(), n.selectFocusedOption?.(), n.onChange?.(n.focusedValue));
              return;
            }
            if (t !== "numeric" && /^[0-9]$/.test(b)) {
              y.preventDefault();
              let A = parseInt(b) - 1;
              if (A >= 0 && A < n.options.length) {
                let v = n.options[A];
                if (v.disabled === true) return;
                if (v.type === "input") {
                  if ((l?.get(v.value) ?? "").trim()) {
                    n.onChange?.(v.value);
                    return;
                  }
                  if (v.allowEmptySubmitToCancel) {
                    n.onChange?.(v.value);
                    return;
                  }
                  n.focusOption(v.value);
                  return;
                }
                n.onChange?.(v.value);
                return;
              }
            }
          }
        },
      }
    );
  };
