// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jyc
// matched 2.1.88 source: src/components/VimTextInput.tsx
// class=modified  jaccard=0.5668  score=0.758  fileCov=0.692
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jyc] deps: components/permissions/PermissionRequestTitle.tsx, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, context/modalContext.tsx, components/ThemePicker.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, components/design-system/Dialog.tsx
((Kyc = R(lt(), 1)), (Yyc = R(rt(), 1)), (jP = R(se(), 1)));
function k6o(e) {
  let [t] = na(),
    n = Pg(),
    r = Tdr.useMemo(wne, []);
  xDn(n, !!e.onImagePaste);
  let o = O$l({
      value: e.value,
      onChange: e.onChange,
      onSubmit: e.onSubmit,
      onExit: e.onExit,
      onExitMessage: e.onExitMessage,
      onLeftArrowOnEmpty: e.onLeftArrowOnEmpty,
      onLeftArrowOnEmptyMessage: e.onLeftArrowOnEmptyMessage,
      onLeftArrowOnEmptyTimeout: e.onLeftArrowOnEmptyTimeout,
      onHistoryReset: e.onHistoryReset,
      onHistoryUp: e.onHistoryUp,
      onHistoryDown: e.onHistoryDown,
      onClearInput: e.onClearInput,
      focus: e.focus,
      mask: e.mask,
      multiline: e.multiline,
      cursorChar: e.showCursor && !r ? " " : "",
      highlightPastedText: e.highlightPastedText,
      invert: n ? oGe : (a) => a,
      themeText: Io("text", t),
      columns: e.columns,
      maxVisibleLines: e.maxVisibleLines,
      onImagePaste: e.onImagePaste,
      disableCursorMovementForUpDownKeys: e.disableCursorMovementForUpDownKeys,
      disableEscapeDoublePress: e.disableEscapeDoublePress,
      externalOffset: e.cursorOffset,
      onOffsetChange: e.onChangeCursorOffset,
      inputFilter: e.inputFilter,
      onModeChange: e.onModeChange,
      onUndo: e.onUndo,
      onOpenHistorySearch: e.onOpenHistorySearch,
    }),
    { mode: s, setMode: i } = o;
  return (
    Tdr.useEffect(() => {
      if (e.initialMode && e.initialMode !== s) i(e.initialMode);
    }, [e.initialMode, s, i]),
    x6o.jsx(U, {
      flexDirection: "column",
      children: x6o.jsx(uPn, {
        inputState: o,
        terminalFocus: n,
        highlights: e.highlights,
        ...e,
      }),
    })
  );
}
var Tdr, x6o;
