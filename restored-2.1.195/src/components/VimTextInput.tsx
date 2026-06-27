// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jyc
// matched 2.1.88 source: src/components/VimTextInput.tsx
// class=modified  jaccard=0.5668  score=0.758  fileCov=0.692
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jyc] deps: components/permissions/PermissionRequestTitle.tsx, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, context/modalContext.tsx, components/ThemePicker.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, components/design-system/Dialog.tsx
((Kyc = R(lt(), 1)), (Yyc = R(rt(), 1)), (jP = R(se(), 1)));
function k6o(props) {
  let [t] = na(),
    n = Pg(),
    r = Tdr.useMemo(wne, []);
  xDn(n, !!props.onImagePaste);
  let o = O$l({
      value: props.value,
      onChange: props.onChange,
      onSubmit: props.onSubmit,
      onExit: props.onExit,
      onExitMessage: props.onExitMessage,
      onLeftArrowOnEmpty: props.onLeftArrowOnEmpty,
      onLeftArrowOnEmptyMessage: props.onLeftArrowOnEmptyMessage,
      onLeftArrowOnEmptyTimeout: props.onLeftArrowOnEmptyTimeout,
      onHistoryReset: props.onHistoryReset,
      onHistoryUp: props.onHistoryUp,
      onHistoryDown: props.onHistoryDown,
      onClearInput: props.onClearInput,
      focus: props.focus,
      mask: props.mask,
      multiline: props.multiline,
      cursorChar: props.showCursor && !r ? " " : "",
      highlightPastedText: props.highlightPastedText,
      invert: n ? oGe : (a) => a,
      themeText: Io("text", t),
      columns: props.columns,
      maxVisibleLines: props.maxVisibleLines,
      onImagePaste: props.onImagePaste,
      disableCursorMovementForUpDownKeys: props.disableCursorMovementForUpDownKeys,
      disableEscapeDoublePress: props.disableEscapeDoublePress,
      externalOffset: props.cursorOffset,
      onOffsetChange: props.onChangeCursorOffset,
      inputFilter: props.inputFilter,
      onModeChange: props.onModeChange,
      onUndo: props.onUndo,
      onOpenHistorySearch: props.onOpenHistorySearch,
    }),
    { mode: s, setMode: i } = o;
  return (
    Tdr.useEffect(() => {
      if (props.initialMode && props.initialMode !== s) i(props.initialMode);
    }, [props.initialMode, s, i]),
    x6o.jsx(U, {
      flexDirection: "column",
      children: x6o.jsx(uPn, {
        inputState: o,
        terminalFocus: n,
        highlights: props.highlights,
        ...props,
      }),
    })
  );
}
var Tdr, x6o;
