// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TMl
// matched 2.1.88 source: src/components/CustomSelect/use-multi-select-state.ts
// class=modified  jaccard=0.3471  score=0.6041  fileCov=0.4493
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TMl] deps: services/analytics/index.ts, react/cjs/react.production.js, hooks/useTerminalSize.ts, services/mcp/channelNotification.ts, services/mcp/channelPermissions.ts, utils/signal.ts, components/PackageManagerAutoUpdater.tsx, context/notifications.tsx, utils/fsOperations.ts, utils/debug.ts, main.tsx, utils/nativeInstaller/download.ts, utils/status.tsx, @xmldom/xmldom/lib/entities.js, utils/plans.ts, utils/settings/settings.ts, cli/handlers/auth.ts, context/modalContext.tsx, undici/lib/mock/mock-agent.js, components/Settings/Status.tsx
((ltr = R(lt(), 1)), (ctr = R(rt(), 1)), (hA = R(se(), 1)));
function useMultiSelectState({
  isDisabled: e = false,
  visibleOptionCount: t = 5,
  options: n,
  defaultValue: r = [],
  onChange: o,
  onCancel: s,
  onFocus: i,
  focusValue: a,
  submitButtonText: l,
  onSubmit: c,
  onDownFromLastItem: u,
  onUpFromFirstItem: d,
  initialFocusLast: p,
  hideIndexes: f = false,
}) {
  let [m, g] = POe.useState(r),
    [h, y] = POe.useState(false),
    [b, _] = POe.useState(n);
  if (n !== b && !vMl.isDeepStrictEqual(n, b)) (g(r), _(n));
  let [S, A] = POe.useState(() => {
      let k = new Map();
      return (
        n.forEach((D) => {
          if (D.type === "input" && D.initialValue) k.set(D.value, D.initialValue);
        }),
        k
      );
    }),
    v = POe.useCallback(
      (k) => {
        let D = typeof k === "function" ? k(m) : k;
        (g(D), o?.(D));
      },
      [m, o],
    ),
    C = wPn({
      visibleOptionCount: t,
      options: n,
      initialFocusValue: p ? n[n.length - 1]?.value : void 0,
      onFocus: i,
      focusValue: a,
    });
  Wh("multi-select");
  let x = POe.useCallback(
    (k, D) => {
      A((O) => {
        let L = new Map(O);
        return (L.set(k, D), L);
      });
      let P = n.find((O) => O.value === k);
      if (P && P.type === "input") P.onChange(D);
      v((O) => {
        if (D) {
          if (!O.includes(k)) return [...O, k];
          return O;
        } else return O.filter((L) => L !== k);
      });
    },
    [n, v],
  );
  return {
    ...C,
    selectedValues: m,
    inputValues: S,
    isSubmitFocused: h,
    updateInputValue: x,
    onCancel: s,
    handleKeyDown: (k) => {
      if (e) return;
      let D = jK(k.key),
        O = n.find((M) => M.value === C.focusedValue)?.type === "input";
      if (O) {
        if (
          !(
            k.key === "up" ||
            k.key === "down" ||
            k.key === "escape" ||
            k.key === "tab" ||
            k.key === "return" ||
            (k.ctrl && (k.key === "n" || k.key === "p" || k.key === "return"))
          )
        )
          return;
      }
      let L = n[n.length - 1]?.value;
      if (k.key === "tab" && !k.shift) {
        if ((k.preventDefault(), l && c && C.focusedValue === L && !h)) y(true);
        else if (!h) C.focusNextOption();
        return;
      }
      if (k.key === "tab" && k.shift) {
        if ((k.preventDefault(), l && c && h)) (y(false), C.focusOption(L));
        else C.focusPreviousOption();
        return;
      }
      if (k.key === "down" || (k.ctrl && k.key === "n") || (!k.ctrl && !k.shift && k.key === "j")) {
        if ((k.preventDefault(), h && u)) u();
        else if (l && c && C.focusedValue === L && !h) y(true);
        else if (!l && u && C.focusedValue === L) u();
        else if (!h) C.focusNextOption();
        return;
      }
      if (k.key === "up" || (k.ctrl && k.key === "p") || (!k.ctrl && !k.shift && k.key === "k")) {
        if ((k.preventDefault(), l && c && h)) (y(false), C.focusOption(L));
        else if (d && C.focusedValue === n[0]?.value) d();
        else C.focusPreviousOption();
        return;
      }
      if (k.key === "pagedown") {
        (k.preventDefault(), C.focusNextPage());
        return;
      }
      if (k.key === "pageup") {
        (k.preventDefault(), C.focusPreviousPage());
        return;
      }
      if (k.key === "return" || nae(k.key) === " ") {
        if ((k.preventDefault(), k.ctrl && k.key === "return" && O && c)) {
          c(m);
          return;
        }
        if (h && c) {
          c(m);
          return;
        }
        if (k.key === "return" && !l && c) {
          c(m);
          return;
        }
        if (C.focusedValue !== void 0) {
          let M = m.includes(C.focusedValue)
            ? m.filter((N) => N !== C.focusedValue)
            : [...m, C.focusedValue];
          v(M);
        }
        return;
      }
      if (!f && /^[0-9]$/.test(D)) {
        k.preventDefault();
        let M = parseInt(D) - 1;
        if (M >= 0 && M < n.length) {
          let N = n[M].value,
            B = m.includes(N) ? m.filter(($) => $ !== N) : [...m, N];
          v(B);
        }
        return;
      }
      if (k.key === "escape") (s(), k.stopImmediatePropagation());
    },
  };
}
var POe, vMl;
