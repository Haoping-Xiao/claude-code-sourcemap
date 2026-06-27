// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M$l
// matched 2.1.88 source: src/hooks/useVimInput.ts
// class=modified  jaccard=0.3456  score=0.5115  fileCov=0.5159
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function useVimInput(props) {
  let {
      value: t,
      onChange: n,
      columns: r,
      disableEscapeDoublePress: o,
      onModeChange: s,
      onUndo: i,
      onOpenHistorySearch: a,
      onHistoryUp: l,
      onHistoryDown: c,
      inputFilter: u,
    } = props,
    d = GQ.useRef(null),
    p = GQ.useRef(I$l()),
    [f, m] = GQ.useState("INSERT"),
    [g, h] = GQ.useState(null),
    y = GQ.useRef(x$l());
  function b(P, O) {
    let L = p.current;
    if (L.mode === "INSERT" && !O.ctrl && !O.meta && [...O.key].length === 1)
      p.current = {
        mode: "INSERT",
        insertedText: L.insertedText + P,
      };
  }
  let _ = GQ.useCallback(
      (P) => {
        if (P !== void 0) d.current?.setOffset(P);
        ((p.current = {
          mode: "INSERT",
          insertedText: "",
        }),
          m("INSERT"),
          h(null),
          s?.("INSERT"));
      },
      [s],
    ),
    S = GQ.useCallback(() => {
      let P = p.current;
      if (P.mode === "INSERT") {
        let O = y.current.lastChange;
        if (O?.type === "visualOp" && O.op === "change")
          y.current.lastChange = {
            type: "visualChange",
            span: O.span,
            linewise: O.linewise,
            text: P.insertedText ?? "",
          };
        else if (P.insertedText)
          y.current.lastChange = {
            type: "insert",
            text: P.insertedText,
          };
        let L = d.current;
        if (L) {
          let M = L.offset;
          if (
            M > 0 &&
            t.normalize("NFC")[M - 1] !==
              `
`
          )
            L.setOffset(M - 1);
        }
      }
      ((p.current = {
        mode: "NORMAL",
        command: {
          type: "idle",
        },
      }),
        m("NORMAL"),
        h(null),
        s?.("NORMAL"));
    }, [s, t]),
    A = GQ.useCallback(
      (P, O) => {
        p.current = {
          mode: "VISUAL",
          kind: O,
          anchor: P,
          command: {
            type: "idle",
          },
        };
        let L = O === "line" ? "VISUAL LINE" : "VISUAL";
        (m(L), h(P), s?.(L));
      },
      [s],
    );
  function v(P, O, L = false) {
    return {
      cursor: P,
      text: P.text,
      setText: (M) => n(M),
      setOffset: (M) => O.setOffset(M),
      enterInsert: (M) => _(M),
      getRegister: () => y.current.register,
      getRegisterIsLinewise: () => y.current.registerIsLinewise,
      setRegister: (M, N) => {
        ((y.current.register = M), (y.current.registerIsLinewise = N));
      },
      getLastFind: () => y.current.lastFind,
      setLastFind: (M, N) => {
        y.current.lastFind = {
          type: M,
          char: N,
        };
      },
      recordChange: L
        ? () => {}
        : (M) => {
            y.current.lastChange = M;
          },
    };
  }
  function C(P, O, L) {
    switch (P.type) {
      case "insert":
        if (P.text) {
          let M = O.insert(P.text);
          (L.setText(M.text), L.setOffset(M.offset));
        }
        break;
      case "x":
        btr(P.count, L);
        break;
      case "replace":
        Str(P.char, P.count, L);
        break;
      case "toggleCase":
        Etr(P.count, L);
        break;
      case "indent":
        Htr(P.dir, P.count, L);
        break;
      case "join":
        Atr(P.count, L);
        break;
      case "openLine":
        x7t(P.direction, L);
        break;
      case "operator":
        _Ke(P.op, P.motion, P.count, L);
        break;
      case "operatorFind":
        ytr(P.op, P.find, P.char, P.count, L);
        break;
      case "operatorTextObj":
        _tr(P.op, P.scope, P.objType, P.count, L);
        break;
      case "visualOp":
        g$l(P.op, P.span, P.linewise, L);
        break;
      case "visualReplace":
        b$l(P.char, P.span, P.linewise, L);
        break;
      case "visualCase":
        A$l(P.caseOp, P.span, P.linewise, L);
        break;
      case "visualPaste":
        T$l(P.content, P.span, P.linewise, L);
        break;
      case "visualIndent":
        p$l(P.dir, P.count, P.lines, L);
        break;
      case "visualChange":
        h$l(P.span, P.linewise, P.text, L);
        break;
    }
  }
  function x() {
    let P = y.current.lastChange,
      O = d.current;
    if (!P || !O) return;
    let L = Ul.fromText(t, r, O.offset);
    C(P, L, v(L, O, true));
  }
  function I(P, O) {
    let L = t.normalize("NFC"),
      M = O.offset,
      N = () => {
        let $ = y.current.lastChange;
        if (!$) return;
        let q = Ul.fromText(L, r, M);
        C($, q, {
          ...v(q, O, true),
          text: L,
          setText: (W) => {
            ((L = W), n(W));
          },
          setOffset: (W) => {
            ((M = W), O.setOffset(W));
          },
          enterInsert: (W) => {
            ((M = W), _(W));
          },
        });
      },
      B = [...P];
    for (let $ = 0; $ < B.length; $++) {
      if (p.current.mode === "INSERT") {
        let K = B.slice($).join(""),
          Z = Ul.fromText(L, r, M).insert(K);
        (n(Z.text),
          O.setOffset(Z.offset),
          (p.current = {
            mode: "INSERT",
            insertedText: p.current.insertedText + K,
          }));
        return;
      }
      let q = p.current;
      if (q.mode !== "NORMAL") return;
      let W = B[$];
      if ((W === "v" || W === "V") && (q.command.type === "idle" || q.command.type === "count")) {
        A(M, W === "V" ? "line" : "char");
        return;
      }
      let V = Ul.fromText(L, r, M),
        Y = {
          ...v(V, O, false),
          text: L,
          setText: (K) => {
            ((L = K), n(K));
          },
          setOffset: (K) => {
            ((M = K), O.setOffset(K));
          },
          enterInsert: (K) => {
            ((M = K), _(K));
          },
          onDotRepeat: N,
        },
        z = L1o(q.command, W, Y);
      if (z.execute) z.execute();
      if (p.current.mode === "NORMAL") {
        if (z.next)
          p.current = {
            mode: "NORMAL",
            command: z.next,
          };
        else if (z.execute)
          p.current = {
            mode: "NORMAL",
            command: {
              type: "idle",
            },
          };
      }
    }
  }
  function k(P) {
    let O = d.current;
    if (!O) return;
    let L = p.current,
      M = Ul.fromText(t, r, O.offset),
      N = () => u?.(P.key, P);
    if (P.ctrl || P.meta) {
      if (L.mode === "VISUAL") {
        (N(), S(), P.preventDefault());
        return;
      }
      O.handleKeyDown(P);
      return;
    }
    if (P.name === "escape" && L.mode === "INSERT") {
      if ((N(), S(), !o)) P.preventDefault();
      return;
    }
    if (P.name === "escape" && L.mode === "NORMAL") {
      if (
        (N(),
        (p.current = {
          mode: "NORMAL",
          command: {
            type: "idle",
          },
        }),
        !o)
      )
        P.preventDefault();
      return;
    }
    if (P.name === "escape" && L.mode === "VISUAL") {
      if ((N(), L.command.type !== "idle"))
        p.current = {
          ...L,
          command: {
            type: "idle",
          },
        };
      else S();
      if (!o) P.preventDefault();
      return;
    }
    if (P.name === "return" && L.mode !== "VISUAL") {
      O.handleKeyDown(P);
      return;
    }
    if (L.mode === "INSERT") {
      if (P.name === "backspace" || P.name === "delete") {
        if (L.insertedText.length > 0)
          p.current = {
            mode: "INSERT",
            insertedText: L.insertedText.slice(0, -(GK(L.insertedText).length || 1)),
          };
      }
      O.handleKeyDown(P);
      return;
    }
    if (L.mode === "VISUAL") {
      let V = {
          ...v(M, O, false),
          onUndo: i,
          onDotRepeat: x,
        },
        Y = L.command.type === "idle" || L.command.type === "count",
        z = P.key;
      if (P.name === "left") z = Y ? "h" : "";
      else if (P.name === "right") z = Y ? "l" : "";
      else if (P.name === "up") z = Y ? "k" : "";
      else if (P.name === "down") z = Y ? "j" : "";
      else if (P.name === "return")
        z = Y
          ? "j"
          : `
`;
      else if (P.name === "backspace") z = Y ? "h" : "";
      else if (P.name === "delete") z = Y && L.command.type !== "count" ? "x" : "";
      else if (P.key === "" || $$l.has(P.name)) {
        P.preventDefault();
        return;
      } else if ([...P.key].length > 1) {
        P.preventDefault();
        return;
      }
      N();
      let K = D$l(L.command, z, V),
        Z = L.kind === "line";
      if ("next" in K)
        (K.move?.(),
          (p.current = {
            mode: "VISUAL",
            kind: L.kind,
            anchor: L.anchor,
            command: K.next,
          }));
      else if (K.exit === "operator") {
        if ((m$l(K.op, L.anchor, V, Z || K.forceLinewise === true), p.current.mode === "VISUAL"))
          S();
      } else if (K.exit === "replace") (_$l(K.char, L.anchor, V, Z), S());
      else if (K.exit === "case") (E$l(K.op, L.anchor, V, Z), S());
      else if (K.exit === "paste") {
        if (V.getRegister()) (H$l(L.anchor, V, Z), S());
        else
          p.current = {
            ...L,
            command: {
              type: "idle",
            },
          };
      } else if (K.exit === "join") (u$l(L.anchor, V), S());
      else if (K.exit === "indent") (d$l(K.dir, K.count, L.anchor, V), S());
      else if (K.exit === "swap") {
        let J = M.offset;
        (O.setOffset(L.anchor),
          (p.current = {
            mode: "VISUAL",
            kind: L.kind,
            anchor: J,
            command: {
              type: "idle",
            },
          }),
          h(J));
      } else if (K.exit === "selectRange") {
        let J = K.end > K.start ? M.measuredText.prevOffset(K.end) : K.start;
        (O.setOffset(J),
          (p.current = {
            mode: "VISUAL",
            kind: L.kind,
            anchor: K.start,
            command: {
              type: "idle",
            },
          }),
          h(K.start));
      } else {
        let J = K.key === "V" ? "line" : "char";
        if (J === L.kind) S();
        else A(L.anchor, J);
      }
      P.preventDefault();
      return;
    }
    if (L.mode !== "NORMAL") return;
    if (L.command.type === "idle" && (P.name === "up" || P.name === "down") && !P.shift) {
      O.handleKeyDown(P);
      return;
    }
    if ((N(), L.command.type === "idle" && P.key === "/" && a)) {
      (a(), P.preventDefault());
      return;
    }
    if (L.command.type === "idle") {
      if (P.key === "k") {
        let V = M.text.indexOf(`
`);
        if (V === -1 || M.offset <= V) {
          (l?.(), P.preventDefault());
          return;
        }
      }
      if (P.key === "j") {
        let V = M.text.lastIndexOf(`
`);
        if (V === -1 || M.offset > V) {
          (c?.(), P.preventDefault());
          return;
        }
      }
    }
    let B = {
        ...v(M, O, false),
        onUndo: i,
        onDotRepeat: x,
      },
      $ =
        L.command.type === "idle" ||
        L.command.type === "count" ||
        L.command.type === "operator" ||
        L.command.type === "operatorCount",
      q = P.key;
    if (P.name === "left") q = "h";
    else if (P.name === "right") q = "l";
    else if (P.name === "up") q = "k";
    else if (P.name === "down") q = "j";
    else if ($ && P.name === "backspace") q = "h";
    else if ($ && L.command.type !== "count" && P.name === "delete") q = "x";
    else if (P.key === "" || $$l.has(P.name)) return;
    else if ([...P.key].length > 1) {
      (I(P.key, O), P.preventDefault());
      return;
    }
    if ((q === "v" || q === "V") && (L.command.type === "idle" || L.command.type === "count")) {
      A(M.offset, q === "V" ? "line" : "char");
      return;
    }
    let W = L1o(L.command, q, B);
    if (W.execute) W.execute();
    if (p.current.mode === "NORMAL") {
      if (W.next)
        p.current = {
          mode: "NORMAL",
          command: W.next,
        };
      else if (W.execute)
        p.current = {
          mode: "NORMAL",
          command: {
            type: "idle",
          },
        };
    }
    if (P.key === "?" && L.mode === "NORMAL" && L.command.type === "idle") n("?");
    P.preventDefault();
  }
  let D = GQ.useCallback(
    (P) => {
      if (P === "INSERT")
        ((p.current = {
          mode: "INSERT",
          insertedText: "",
        }),
          h(null));
      else if (P === "NORMAL")
        ((p.current = {
          mode: "NORMAL",
          command: {
            type: "idle",
          },
        }),
          h(null));
      else {
        let O = P === "VISUAL LINE" ? "line" : "char",
          L = d.current?.offset ?? 0;
        ((p.current = {
          mode: "VISUAL",
          kind: O,
          anchor: L,
          command: {
            type: "idle",
          },
        }),
          h(L));
      }
      (m(P), s?.(P));
    },
    [s],
  );
  return {
    handleKeyDown: k,
    mode: f,
    setMode: D,
    visualAnchor: g,
    baseRef: d,
    recordInsertedText: b,
  };
}
function O$l(e) {
  let { inputFilter: t } = e,
    n = useVimInput({
      value: e.value,
      onChange: e.onChange,
      columns: e.columns,
      disableEscapeDoublePress: e.disableEscapeDoublePress,
      onModeChange: e.onModeChange,
      onUndo: e.onUndo,
      onOpenHistorySearch: e.onOpenHistorySearch,
      onHistoryUp: e.onHistoryUp,
      onHistoryDown: e.onHistoryDown,
      inputFilter: t,
    }),
    r = rPn({
      ...e,
      selectionAnchor: n.visualAnchor,
      selectionLinewise: n.mode === "VISUAL LINE",
      inputFilter: (o, s) => {
        let i = t ? t(o, s) : o;
        return (n.recordInsertedText(i, s), i);
      },
    });
  return (
    (n.baseRef.current = r),
    {
      ...r,
      handleKeyDown: n.handleKeyDown,
      mode: n.mode,
      setMode: n.setMode,
    }
  );
}
var GQ, $$l;
