// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Zr
// matched 2.1.88 source: src/context/voice.tsx
// class=partial  jaccard=0.207  score=1  fileCov=0.207
// note: low-confidence suggestion: src/context/voice.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Zr = E(() => {
  f6i();
  yZr();
  $Ge();
  y0e();
  Kce();
  Ye();
  _Ge();
  C6i();
  $0e = R(rt(), 1), $ne = R(se(), 1);
});
function Ta(e) {
  let [t] = na(),
    n = Pg(),
    r = I6i.useMemo(wne, []),
    s = P0(u => u.voiceState) === "recording",
    [i, a] = aPn();
  xDn(n, !!e.onImagePaste);
  let l = !n ? u => u : a ? () => wt.hex(a.hex)(a.char) : r ? u => u : oGe,
    c = rPn({
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
      cursorChar: e.showCursor ? " " : "",
      highlightPastedText: e.highlightPastedText,
      invert: l,
      themeText: Io("text", t),
      columns: e.columns,
      maxVisibleLines: e.maxVisibleLines,
      onImagePaste: e.onImagePaste,
      disableCursorMovementForUpDownKeys: e.disableCursorMovementForUpDownKeys,
      disableEscapeDoublePress: e.disableEscapeDoublePress,
      externalOffset: e.cursorOffset,
      onOffsetChange: e.onChangeCursorOffset,
      inputFilter: e.inputFilter,
      inlineGhostText: e.inlineGhostText,
      dim: wt.dim
    });
  return bZr.jsx(U, {
    ref: i,
    children: bZr.jsx(uPn, {
      inputState: c,
      terminalFocus: n,
      highlights: e.highlights,
      invert: l,
      hidePlaceholderText: s,
      cursorCellPainted: a != null,
      ...e
    })
  });
}
var I6i, bZr;