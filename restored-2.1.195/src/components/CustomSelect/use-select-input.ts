// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xZr
// matched 2.1.88 source: src/components/CustomSelect/use-select-input.ts
// class=modified  jaccard=0.4358  score=0.7527  fileCov=0.5086
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xZr = E(() => {
  fH();
  _i();
  Tc();
  Ye();
  ps();
  DGe();
  I1();
  Ao();
  tzi();
  Cc();
  Bs();
  Ko();
  Mg();
  TPn();
  ((azi = R(lt(), 1)), (UGe = R(rt(), 1)), (rS = R(se(), 1)));
});
var kZr,
  czi = ({
    isDisabled: e = !1,
    disableSelection: t = !1,
    state: n,
    options: r,
    isMultiSelect: o = !1,
    onUpFromFirstItem: s,
    onDownFromLastItem: i,
    onInputModeToggle: a,
    inputValues: l,
    imagesSelected: c = !1,
    onEnterImageSelection: u,
    onExitImageSelection: d,
    hasInkFocus: p = !0,
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
              if (t === !0) return;
              if (n.focusedValue === void 0) return;
              if (r.find((_) => _.value === n.focusedValue)?.disabled === !0) return;
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
        isActive: !e && !0,
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
          if (t !== !0) {
            if (o && nae(y.key) === " " && n.focusedValue !== void 0) {
              if (_?.disabled !== !0)
                (y.preventDefault(), n.selectFocusedOption?.(), n.onChange?.(n.focusedValue));
              return;
            }
            if (t !== "numeric" && /^[0-9]$/.test(b)) {
              y.preventDefault();
              let A = parseInt(b) - 1;
              if (A >= 0 && A < n.options.length) {
                let v = n.options[A];
                if (v.disabled === !0) return;
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
