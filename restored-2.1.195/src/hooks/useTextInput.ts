// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jat
// matched 2.1.88 source: src/hooks/useTextInput.ts
// class=modified  jaccard=0.3319  score=0.558  fileCov=0.4502
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jat] deps: Ye
P0e = R(rt(), 1);
function a6i(e) {
  let t = new Map(e);
  return function (n) {
    return (t.get(n) ?? O6d)(n);
  };
}
function rPn({
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
  inlineGhostText: x,
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
    B = Ul.fromText(e, h, M),
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
    if (B.text === "") return (z(), B);
    return B.del();
  }
  function J() {
    let { cursor: ye, killed: ue } = B.deleteToLineEnd();
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
    let { cursor: ye, killed: ue } = B.deleteToLineStart();
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
    let { cursor: ye, killed: ue } = B.deleteWordBefore();
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
      let ue = B.offset,
        we = B.insert(ye);
      return (
        L.dispatch({
          type: "yank",
          start: ue,
          length: ye.length,
        }),
        we
      );
    }
    return B;
  }
  function ee() {
    let ye = BDn(L.state);
    if (!ye) return B;
    let { text: ue, start: we, length: Ce } = ye;
    L.dispatch({
      type: "yankPop",
    });
    let Ie = B.text.slice(0, we),
      Ve = B.text.slice(we + Ce),
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
      ["a", () => B.startOfLogicalLine()],
      ["b", () => B.left()],
      ["c", () => (V(), B)],
      ["d", Z],
      ["e", () => B.endOfLogicalLine()],
      ["f", () => B.right()],
      ["h", () => B.deleteTokenBefore() ?? B.backspace()],
      ["k", J],
      ["n", () => me()],
      ["p", () => Ee()],
      ["u", ne],
      ["w", oe],
      ["y", re],
    ]),
    ae = a6i([
      ["b", () => B.prevWord()],
      ["f", () => B.nextWord()],
      ["d", () => B.deleteWordAfter()],
      ["y", ee],
    ]);
  function de({ meta: ye, shift: ue }) {
    if (f && B.offset > 0 && B.text[B.offset - 1] === "\\")
      return (
        nZr(),
        B.backspace().insert(`
`)
      );
    if (ye || ue)
      return B.insert(`
`);
    if (Oe.terminal === "Apple_Terminal" && i6i("shift"))
      return B.insert(`
`);
    if (n) (n(B.text), ($ = true));
    return B;
  }
  function Ee() {
    if (b) return (l?.(), B);
    if (l && B.getPosition().line === 0) return (l(), B);
    let ye = B.up();
    if (!ye.equals(B)) return ye;
    if (f) {
      let ue = B.upLogicalLine();
      if (!ue.equals(B)) return ue;
    }
    return B;
  }
  function me() {
    if (b) return (c?.(), B);
    if (c && B.getPosition().line >= B.measuredText.lineCount - 1) return (c(), B);
    let ye = B.down();
    if (!ye.equals(B)) return ye;
    if (f) {
      let ue = B.downLogicalLine();
      if (!ue.equals(B)) return ue;
    }
    return B;
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
        return (Y(), B);
      case "left":
        if (ye.superKey) return B.startOfLine();
        if (ye.ctrl || ye.meta || ye.fn) return B.prevWord();
        if (s && !ye.shift && B.text === "") {
          if (i) K();
          else s();
          return B;
        }
        return B.left();
      case "right":
        if (ye.superKey) return B.endOfLine();
        if (ye.ctrl || ye.meta || ye.fn) return B.nextWord();
        return B.right();
      case "up":
        if (ye.shift || ye.ctrl || ye.meta) return;
        return Ee();
      case "down":
        if (ye.shift || ye.ctrl || ye.meta) return;
        return me();
      case "backspace":
        if (ye.superKey) return ne();
        if (ye.meta || ye.ctrl) return oe();
        return B.deleteTokenBefore() ?? B.backspace();
      case "delete":
        if (ye.superKey) return J();
        if (ye.meta) return J();
        return B.del();
      case "home":
        if (ye.ctrl) return;
        return B.startOfLine();
      case "end":
        if (ye.ctrl) return;
        return B.endOfLine();
      case "pagedown":
        if (Ns() || ye.ctrl) return;
        return B.endOfLine();
      case "pageup":
        if (Ns() || ye.ctrl) return;
        return B.startOfLine();
      case "return":
        if (ye.ctrl) return;
        return de(ye);
      case "enter":
        return B.insert(`
`);
      case "tab":
        return;
    }
    if (ye.ctrl) return ce(ye.key);
    if (ye.meta) return ae(ye.key);
    if (N6d.has(ye.name)) return;
    if (ue.length === 0) return;
    if (B.isAtStart() && AUt(ue)) return B.insert(ue).left();
    return B.insert(ue);
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
    if ((ye.preventDefault(), !B.equals(we))) {
      if (B.text !== we.text) t(we.text);
      (N(we.offset), (B = we));
    }
    if ($) (($ = false), (B = Ul.fromText("", h, 0)));
  }
  let le =
      x && I && x.insertPosition === M
        ? {
            text: x.text,
            dim: I,
          }
        : void 0,
    He = B.getPosition();
  return {
    handleKeyDown: ie,
    renderedValue: B.render(m, p, g, le, S, D ?? void 0, P),
    offset: M,
    setOffset: N,
    cursorLine: He.line - B.getViewportStartLine(S),
    cursorColumn: He.column,
    viewportCharOffset: B.getViewportCharOffset(S),
    viewportCharEnd: B.getViewportCharEnd(S),
  };
}
var O6d = () => {},
  N6d;
