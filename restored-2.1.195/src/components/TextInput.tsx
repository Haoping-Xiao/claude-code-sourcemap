// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Zr
// matched 2.1.88 source: src/components/TextInput.tsx
// class=modified  jaccard=0.4284  score=0.7542  fileCov=0.4979
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _Zr] deps: f6i, ink/hooks/use-declared-cursor.ts, ink/focus.ts, components/ConfigurableShortcutHint.tsx, components/Settings/Config.tsx, hooks/useTerminalSize.ts, components/design-system/color.ts, components/BaseTextInput.tsx
(($0e = R(rt(), 1)), ($ne = R(se(), 1)));
function Ta(props) {
  let [t] = na(),
    n = Pg(),
    r = I6i.useMemo(wne, []),
    s = P0((u) => u.voiceState) === "recording",
    [i, a] = aPn();
  xDn(n, !!props.onImagePaste);
  let l = !n ? (u) => u : a ? () => wt.hex(a.hex)(a.char) : r ? (u) => u : oGe,
    c = rPn({
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
      cursorChar: props.showCursor ? " " : "",
      highlightPastedText: props.highlightPastedText,
      invert: l,
      themeText: Io("text", t),
      columns: props.columns,
      maxVisibleLines: props.maxVisibleLines,
      onImagePaste: props.onImagePaste,
      disableCursorMovementForUpDownKeys: props.disableCursorMovementForUpDownKeys,
      disableEscapeDoublePress: props.disableEscapeDoublePress,
      externalOffset: props.cursorOffset,
      onOffsetChange: props.onChangeCursorOffset,
      inputFilter: props.inputFilter,
      inlineGhostText: props.inlineGhostText,
      dim: wt.dim,
    });
  return bZr.jsx(U, {
    ref: i,
    children: bZr.jsx(uPn, {
      inputState: c,
      terminalFocus: n,
      highlights: props.highlights,
      invert: l,
      hidePlaceholderText: s,
      cursorCellPainted: a != null,
      ...props,
    }),
  });
}
var I6i, bZr;
