// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P1o
// matched 2.1.88 source: src/hooks/useSearchInput.ts
// class=modified  jaccard=0.3474  score=0.4545  fileCov=0.5959
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module P1o] deps: MGe, m0, C1o, M$l, R1o, mZr
((GQ = R(rt(), 1)),
  ($$l = new Set([
    "backspace",
    "delete",
    "tab",
    "home",
    "end",
    "pageup",
    "pagedown",
    "insert",
    "clear",
    "enter",
    "center",
    "undefined",
    "mouse",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12",
  ])));
function CLf(e) {
  if (e.ctrl && (e.key === "k" || e.key === "u" || e.key === "w")) return true;
  if (e.meta && e.key === "backspace") return true;
  return false;
}
function ILf(e) {
  return (e.ctrl || e.meta) && e.key === "y";
}
function Uk({
  isActive: e,
  onExit: t,
  onCancel: n,
  onExitUp: r,
  onExitDown: o,
  columns: s,
  passthroughCtrlKeys: i = [],
  initialQuery: a = "",
  backspaceExitsOnEmpty: l = true,
  multiline: c = false,
  onSpaceOnEmpty: u,
  onTabOnEmpty: d,
  killRing: p,
  onChange: f,
  honorEditorMode: m = false,
}) {
  let g = UDn(),
    h = p ?? g,
    { columns: y } = br(),
    b = s ?? y,
    [_, S] = use.useState(a),
    [A, v] = use.useState(a.length),
    C = use.useRef(_),
    x = use.useRef(A),
    I = use.useRef(f);
  I.current = f;
  let k = use.useCallback(($) => {
      ((C.current = $), S($), I.current?.($));
    }, []),
    D = use.useCallback(($) => {
      ((x.current = $), v($));
    }, []),
    P = use.useCallback(
      ($) => {
        (k($), D($.length));
      },
      [k, D],
    ),
    O = ($) => {
      if (!e) return;
      let q = C.current,
        W = x.current,
        V = Ul.fromText(q, b, W);
      if ($.ctrl && i.includes($.key.toLowerCase())) return;
      if (!CLf($) && !ILf($))
        h.dispatch({
          type: "interrupt",
        });
      if ($.name === "return") {
        if (($.preventDefault(), c)) {
          if (W > 0 && q[W - 1] === "\\") {
            k(
              q.slice(0, W - 1) +
                `
` +
                q.slice(W),
            );
            return;
          }
          if ($.shift || $.meta) {
            (k(
              q.slice(0, W) +
                `
` +
                q.slice(W),
            ),
              D(W + 1));
            return;
          }
        }
        t();
        return;
      }
      if (c && $.name === "enter") {
        $.preventDefault();
        let Y = V.insert(`
`);
        (k(Y.text), D(Y.offset));
        return;
      }
      if ($.name === "down") {
        if (($.preventDefault(), c)) {
          let Y = V.down();
          if (!Y.equals(V)) {
            D(Y.offset);
            return;
          }
        }
        if (o) o();
        else if (!c) t();
        return;
      }
      if ($.name === "up") {
        if (($.preventDefault(), c)) {
          let Y = V.up();
          if (!Y.equals(V)) {
            D(Y.offset);
            return;
          }
        }
        if (r) r();
        return;
      }
      if ($.name === "escape") {
        if (($.preventDefault(), n)) n();
        else if (q.length > 0) (k(""), D(0));
        else t();
        return;
      }
      if ($.name === "backspace") {
        if (($.preventDefault(), $.meta)) {
          let { cursor: z, killed: K } = V.deleteWordBefore();
          (h.dispatch({
            type: "kill",
            text: K,
            direction: "prepend",
          }),
            k(z.text),
            D(z.offset));
          return;
        }
        if (q.length === 0) {
          if (l) (n ?? t)();
          return;
        }
        let Y = V.backspace();
        (k(Y.text), D(Y.offset));
        return;
      }
      if ($.name === "delete") {
        $.preventDefault();
        let Y = V.del();
        (k(Y.text), D(Y.offset));
        return;
      }
      if ($.name === "left" && ($.ctrl || $.meta || $.fn)) {
        $.preventDefault();
        let Y = V.prevWord();
        D(Y.offset);
        return;
      }
      if ($.name === "right" && ($.ctrl || $.meta || $.fn)) {
        $.preventDefault();
        let Y = V.nextWord();
        D(Y.offset);
        return;
      }
      if ($.name === "left") {
        $.preventDefault();
        let Y = V.left();
        D(Y.offset);
        return;
      }
      if ($.name === "right") {
        $.preventDefault();
        let Y = V.right();
        D(Y.offset);
        return;
      }
      if ($.name === "home") {
        ($.preventDefault(), D(V.startOfLine().offset));
        return;
      }
      if ($.name === "end") {
        ($.preventDefault(), D(V.endOfLine().offset));
        return;
      }
      if ($.ctrl) {
        switch (($.preventDefault(), $.key.toLowerCase())) {
          case "a":
            D(V.startOfLogicalLine().offset);
            return;
          case "e":
            D(V.endOfLogicalLine().offset);
            return;
          case "b":
            D(V.left().offset);
            return;
          case "f":
            D(V.right().offset);
            return;
          case "d": {
            if (q.length === 0) {
              (n ?? t)();
              return;
            }
            let Y = V.del();
            (k(Y.text), D(Y.offset));
            return;
          }
          case "h": {
            if (q.length === 0) {
              if (l) (n ?? t)();
              return;
            }
            let Y = V.backspace();
            (k(Y.text), D(Y.offset));
            return;
          }
          case "k": {
            let { cursor: Y, killed: z } = V.deleteToLineEnd();
            (h.dispatch({
              type: "kill",
              text: z,
              direction: "append",
            }),
              k(Y.text),
              D(Y.offset));
            return;
          }
          case "u": {
            let { cursor: Y, killed: z } = V.deleteToLineStart();
            (h.dispatch({
              type: "kill",
              text: z,
              direction: "prepend",
            }),
              k(Y.text),
              D(Y.offset));
            return;
          }
          case "w": {
            let { cursor: Y, killed: z } = V.deleteWordBefore();
            (h.dispatch({
              type: "kill",
              text: z,
              direction: "prepend",
            }),
              k(Y.text),
              D(Y.offset));
            return;
          }
          case "y": {
            let Y = NDn(h.state);
            if (Y.length > 0) {
              let z = V.offset,
                K = V.insert(Y);
              (h.dispatch({
                type: "yank",
                start: z,
                length: Y.length,
              }),
                k(K.text),
                D(K.offset));
            }
            return;
          }
          case "g":
          case "c":
            if (n) {
              n();
              return;
            }
        }
        return;
      }
      if ($.meta) {
        switch (($.preventDefault(), $.key.toLowerCase())) {
          case "b":
            D(V.prevWord().offset);
            return;
          case "f":
            D(V.nextWord().offset);
            return;
          case "d": {
            let Y = V.deleteWordAfter();
            (k(Y.text), D(Y.offset));
            return;
          }
          case "y": {
            let Y = BDn(h.state);
            if (Y) {
              let { text: z, start: K, length: Z } = Y;
              h.dispatch({
                type: "yankPop",
              });
              let J = q.slice(0, K),
                ne = q.slice(K + Z),
                oe = J + z + ne,
                re = K + z.length;
              (h.dispatch({
                type: "updateYankLength",
                length: z.length,
              }),
                k(oe),
                D(re));
            }
            return;
          }
        }
        return;
      }
      if ($.name === "tab") {
        if (($.preventDefault(), d && q === "")) d();
        return;
      }
      if (u && $.key === " " && q === "") {
        ($.preventDefault(), u());
        return;
      }
      if ($.key.length >= 1 && !xLf.has($.name)) {
        $.preventDefault();
        let Y = V.insert($.key);
        (k(Y.text), D(Y.offset));
      }
    },
    L = m && V$(),
    M = D1o({
      value: _,
      onChange: k,
      columns: b,
      onHistoryUp: r,
      onHistoryDown: o,
    });
  return (
    (M.baseRef.current = {
      handleKeyDown: O,
      offset: A,
      setOffset: D,
    }),
    {
      query: _,
      queryRef: C,
      setQuery: P,
      cursorOffset: A,
      setCursorOffset: D,
      handleKeyDown: ($) => {
        if (!L) {
          O($);
          return;
        }
        if (!e) return;
        if ($.name === "escape" && M.mode === "NORMAL") {
          (M.handleKeyDown($), O($));
          return;
        }
        M.handleKeyDown($);
      },
      handlePaste: ($) => {
        if (!e || $.text.length === 0) return;
        $.preventDefault();
        let q = c
          ? $.text.replace(
              /\r\n|\r/g,
              `
`,
            )
          : ($.text.split(/\r\n|\r|\n/, 2)[0] ?? "");
        if (q.length === 0) return;
        let V = Ul.fromText(C.current, b, x.current).insert(q);
        (k(V.text), D(V.offset));
      },
      vimMode: L ? M.mode : void 0,
    }
  );
}
var use, xLf;
