// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jat
// matched 2.1.88 source: src/hooks/useTextInput.ts
// class=modified  jaccard=0.3319  score=0.558  fileCov=0.4502
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jat] deps: hooks/useTerminalSize.ts
P0e = R(rt(), 1);
function a6i(e) {
  let t = new Map(e);
  return function (n) {
    return (t.get(n) ?? O6d)(n);
  };
}
function useTextInput({
  value: e,
  onChange: t,
  onSubmit: n,
  onExit: r,
  onExitMessage: o,
  onLeftArrowOnEmpty: s,
  onLeftArrowOnEmptyMessage: i,
  onLeftArrowOnEmptyTimeout: a,
  onHistoryUp: l,
  onHistoryDown: c,
  onHistoryReset: u,
  onClearInput: d,
  mask: p = "",
  multiline: f = false,
  cursorChar: m,
  invert: g,
  columns: h,
  onImagePaste: y,
  disableCursorMovementForUpDownKeys: b = false,
  disableEscapeDoublePress: _ = false,
  maxVisibleLines: S,
  externalOffset: A,
  onOffsetChange: v,
  inputFilter: C,
  inlineGhostText: inlineGhostText,
  dim: I,
  killRing: k,
  selectionAnchor: D,
  selectionLinewise: P = false,
}) {
  let O = UDn(),
    L = k ?? O;
  if (Oe.terminal === "Apple_Terminal") s6i();
  let M = A,
    N = v,
    cursor = Ul.fromText(e, h, M),
    $ = false,
    { addNotification: q, removeNotification: W } = Li(),
    V = Kj(
      (ye) => {
        o?.(ye, "Ctrl-C");
      },
      () => r?.(),
      () => {
        if (e) (t(""), N(0), u?.());
      },
    ),
    Y = Kj(
      (ye) => {
        if (!e || !ye) return;
        q({
          key: "escape-again-to-clear",
          kind: "feedback",
          text: "Esc again to clear",
          priority: "immediate",
          timeoutMs: 1000,
        });
      },
      () => {
        if ((W("escape-again-to-clear"), d?.(), e)) {
          if (e.trim() !== "") Yat(e);
          (t(""), N(0), u?.());
        }
      },
    ),
    z = Kj(
      (ye) => {
        if (e !== "") return;
        o?.(ye, "Ctrl-D");
      },
      () => {
        if (e !== "") return;
        r?.();
      },
    ),
    K = Kj(
      (ye) => i?.(ye),
      () => s?.(),
      void 0,
      void 0,
      a,
    );
  function Z() {
    if (cursor.text === "") return (z(), cursor);
    return cursor.del();
  }
  function J() {
    let { cursor: ye, killed: ue } = cursor.deleteToLineEnd();
    return (
      L.dispatch({
        type: "kill",
        text: ue,
        direction: "append",
      }),
      ye
    );
  }
  function ne() {
    let { cursor: ye, killed: ue } = cursor.deleteToLineStart();
    if (
      (L.dispatch({
        type: "kill",
        text: ue,
        direction: "prepend",
      }),
      ue.length >= 3)
    )
      q({
        key: "kill-paste-hint",
        kind: "hint",
        text: "Ctrl+Y to paste deleted text",
        priority: "immediate",
        timeoutMs: 5000,
      });
    return ye;
  }
  function oe() {
    let { cursor: ye, killed: ue } = cursor.deleteWordBefore();
    return (
      L.dispatch({
        type: "kill",
        text: ue,
        direction: "prepend",
      }),
      ye
    );
  }
  function re() {
    let ye = NDn(L.state);
    if (ye.length > 0) {
      let ue = cursor.offset,
        we = cursor.insert(ye);
      return (
        L.dispatch({
          type: "yank",
          start: ue,
          length: ye.length,
        }),
        we
      );
    }
    return cursor;
  }
  function ee() {
    let ye = BDn(L.state);
    if (!ye) return cursor;
    let { text: ue, start: we, length: Ce } = ye;
    L.dispatch({
      type: "yankPop",
    });
    let Ie = cursor.text.slice(0, we),
      Ve = cursor.text.slice(we + Ce),
      Ze = Ie + ue + Ve,
      Be = we + ue.length;
    return (
      L.dispatch({
        type: "updateYankLength",
        length: ue.length,
      }),
      Ul.fromText(Ze, h, Be)
    );
  }
  let ce = a6i([
      ["a", () => cursor.startOfLogicalLine()],
      ["b", () => cursor.left()],
      ["c", () => (V(), cursor)],
      ["d", Z],
      ["e", () => cursor.endOfLogicalLine()],
      ["f", () => cursor.right()],
      ["h", () => cursor.deleteTokenBefore() ?? cursor.backspace()],
      ["k", J],
      ["n", () => me()],
      ["p", () => Ee()],
      ["u", ne],
      ["w", oe],
      ["y", re],
    ]),
    ae = a6i([
      ["b", () => cursor.prevWord()],
      ["f", () => cursor.nextWord()],
      ["d", () => cursor.deleteWordAfter()],
      ["y", ee],
    ]);
  function de({ meta: ye, shift: ue }) {
    if (f && cursor.offset > 0 && cursor.text[cursor.offset - 1] === "\\")
      return (
        nZr(),
        cursor.backspace().insert(`
`)
      );
    if (ye || ue)
      return cursor.insert(`
`);
    if (Oe.terminal === "Apple_Terminal" && i6i("shift"))
      return cursor.insert(`
`);
    if (n) (n(cursor.text), ($ = true));
    return cursor;
  }
  function Ee() {
    if (b) return (l?.(), cursor);
    if (l && cursor.getPosition().line === 0) return (l(), cursor);
    let ye = cursor.up();
    if (!ye.equals(cursor)) return ye;
    if (f) {
      let ue = cursor.upLogicalLine();
      if (!ue.equals(cursor)) return ue;
    }
    return cursor;
  }
  function me() {
    if (b) return (c?.(), cursor);
    if (c && cursor.getPosition().line >= cursor.measuredText.lineCount - 1) return (c(), cursor);
    let ye = cursor.down();
    if (!ye.equals(cursor)) return ye;
    if (f) {
      let ue = cursor.downLogicalLine();
      if (!ue.equals(cursor)) return ue;
    }
    return cursor;
  }
  function pe(ye) {
    if (ye.ctrl && (ye.key === "k" || ye.key === "u" || ye.key === "w")) return true;
    if (ye.key === "backspace" && (ye.meta || ye.superKey || ye.ctrl)) return true;
    if (ye.key === "delete" && (ye.meta || ye.superKey)) return true;
    return false;
  }
  function ge(ye) {
    return (ye.ctrl || ye.meta) && ye.key === "y";
  }
  function he(ye, ue) {
    switch (ye.name) {
      case "escape":
        if (_) return;
        return (Y(), cursor);
      case "left":
        if (ye.superKey) return cursor.startOfLine();
        if (ye.ctrl || ye.meta || ye.fn) return cursor.prevWord();
        if (s && !ye.shift && cursor.text === "") {
          if (i) K();
          else s();
          return cursor;
        }
        return cursor.left();
      case "right":
        if (ye.superKey) return cursor.endOfLine();
        if (ye.ctrl || ye.meta || ye.fn) return cursor.nextWord();
        return cursor.right();
      case "up":
        if (ye.shift || ye.ctrl || ye.meta) return;
        return Ee();
      case "down":
        if (ye.shift || ye.ctrl || ye.meta) return;
        return me();
      case "backspace":
        if (ye.superKey) return ne();
        if (ye.meta || ye.ctrl) return oe();
        return cursor.deleteTokenBefore() ?? cursor.backspace();
      case "delete":
        if (ye.superKey) return J();
        if (ye.meta) return J();
        return cursor.del();
      case "home":
        if (ye.ctrl) return;
        return cursor.startOfLine();
      case "end":
        if (ye.ctrl) return;
        return cursor.endOfLine();
      case "pagedown":
        if (Ns() || ye.ctrl) return;
        return cursor.endOfLine();
      case "pageup":
        if (Ns() || ye.ctrl) return;
        return cursor.startOfLine();
      case "return":
        if (ye.ctrl) return;
        return de(ye);
      case "enter":
        return cursor.insert(`
`);
      case "tab":
        return;
    }
    if (ye.ctrl) return ce(ye.key);
    if (ye.meta) return ae(ye.key);
    if (N6d.has(ye.name)) return;
    if (ue.length === 0) return;
    if (cursor.isAtStart() && AUt(ue)) return cursor.insert(ue).left();
    return cursor.insert(ue);
  }
  function ie(ye) {
    let ue = C ? C(ye.key, ye) : ye.key;
    if (ue === "" && ye.key !== "") {
      ye.preventDefault();
      return;
    }
    if (!pe(ye) && !ge(ye))
      L.dispatch({
        type: "interrupt",
      });
    let we = he(ye, ue);
    if (we === void 0) return;
    if ((ye.preventDefault(), !cursor.equals(we))) {
      if (cursor.text !== we.text) t(we.text);
      (N(we.offset), (cursor = we));
    }
    if ($) (($ = false), (cursor = Ul.fromText("", h, 0)));
  }
  let le =
      inlineGhostText && I && inlineGhostText.insertPosition === M
        ? {
            text: inlineGhostText.text,
            dim: I,
          }
        : void 0,
    cursorPos = cursor.getPosition();
  return {
    handleKeyDown: ie,
    renderedValue: cursor.render(m, p, g, le, S, D ?? void 0, P),
    offset: M,
    setOffset: N,
    cursorLine: cursorPos.line - cursor.getViewportStartLine(S),
    cursorColumn: cursorPos.column,
    viewportCharOffset: cursor.getViewportCharOffset(S),
    viewportCharEnd: cursor.getViewportCharEnd(S),
  };
}
var O6d = () => {},
  N6d;
