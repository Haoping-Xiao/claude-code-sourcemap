// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C6i
// matched 2.1.88 source: src/components/BaseTextInput.tsx
// class=modified  jaccard=0.3171  score=0.434  fileCov=0.5407
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var C6i = E(() => {
  RUt();
  Ye();
  A6i();
  LUt();
  ((v6i = R(lt(), 1)), (M0e = R(se(), 1)));
});
function uPn({
  inputState: e,
  children: t,
  terminalFocus: n,
  invert: r,
  hidePlaceholderText: o,
  cursorCellPainted: s,
  ...i
}) {
  let { handleKeyDown: a, renderedValue: l, cursorLine: c, cursorColumn: u } = e,
    d = RW({
      line: c,
      column: u,
      active: Boolean(i.focus && i.showCursor),
      visible: !s,
    }),
    p = $0e.useRef(null),
    f = $0e.useCallback(
      (M) => {
        ((p.current = M), d(M));
      },
      [d],
    ),
    {
      handleKeyDown: m,
      handlePaste: g,
      isPasting: h,
    } = kUt({
      onPaste: i.onPaste,
      handleKeyDown: (M) => {
        if ((i.onKeyDownBefore?.(M), M.defaultPrevented || M.didStopImmediatePropagation())) return;
        a(M);
      },
      onImagePaste: i.onImagePaste,
    }),
    { onIsPastingChange: y } = i;
  $0e.useEffect(() => {
    if (y) y(h);
  }, [h, y]);
  let b = i.focus !== false;
  M0(p, b);
  let _ = $0e.useMemo(wne, []),
    S = Sd(),
    { showPlaceholder: A, renderedPlaceholder: v } = p6i({
      placeholder: i.placeholder,
      value: i.value,
      showCursor: i.showCursor && !_,
      focus: i.focus,
      terminalFocus: n,
      invert: r,
      hidePlaceholderText: o || S,
    }),
    C = b
      ? {
          tabIndex: 0,
          autoFocus: true,
          onKeyDown: m,
          onPaste: g,
        }
      : {},
    x = (i.value && i.value.trim().indexOf(" ") === -1) || (i.value && i.value.endsWith(" ")),
    I = Boolean(i.argumentHint && i.value && x && i.value.startsWith("/")),
    k =
      i.showCursor && i.highlights
        ? i.highlights.filter(
            (M) => M.dimColor || i.cursorOffset < M.start || i.cursorOffset >= M.end,
          )
        : i.highlights,
    { viewportCharOffset: D, viewportCharEnd: P } = e,
    O =
      k && D > 0
        ? k
            .filter((M) => M.end > D && M.start < P)
            .map((M) => ({
              ...M,
              start: Math.max(0, M.start - D),
              end: M.end - D,
            }))
        : k;
  if (O && O.length > 0)
    return $ne.jsxs(U, {
      ref: f,
      ...C,
      children: [
        $ne.jsx(U, {
          flexShrink: 0,
          children: $ne.jsx(w6i, {
            text: l,
            highlights: O,
          }),
        }),
        I &&
          $ne.jsxs(w, {
            dimColor: true,
            wrap: "truncate-end",
            children: [i.value?.endsWith(" ") ? "" : " ", i.argumentHint],
          }),
        t,
      ],
    });
  return $ne.jsx(U, {
    ref: f,
    ...C,
    children: $ne.jsxs(w, {
      wrap: "truncate-end",
      dimColor: i.dimColor,
      children: [
        A && i.placeholderElement
          ? i.placeholderElement
          : A && v
            ? $ne.jsx(bd, {
                children: v,
              })
            : $ne.jsx(bd, {
                children: l,
              }),
        I &&
          $ne.jsxs(w, {
            dimColor: true,
            children: [i.value?.endsWith(" ") ? "" : " ", i.argumentHint],
          }),
        t,
      ],
    }),
  });
}
var $0e, $ne;
