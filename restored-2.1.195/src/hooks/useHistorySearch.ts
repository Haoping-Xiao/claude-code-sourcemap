// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qhc
// matched 2.1.88 source: src/hooks/useHistorySearch.ts
// class=modified  jaccard=0.3256  score=0.8064  fileCov=0.3532
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qhc] deps: context/notifications.tsx, context/modalContext.tsx, hooks/useArrowKeyHistory.tsx, utils/Cursor.ts, hooks/useTerminalSize.ts
((wS = R(rt(), 1)), (a6o = R(se(), 1)));
function useHistorySearch(
  onAcceptHistory,
  currentInput,
  onInputChange,
  onCursorChange,
  currentCursorOffset,
  onModeChange,
  currentMode,
  isSearching,
  setIsSearching,
  setPastedContents,
  currentPastedContents,
) {
  let [d, p] = qT.useState(""),
    [f, m] = qT.useState(false),
    [g, h] = qT.useState(""),
    [y, b] = qT.useState(0),
    [_, S] = qT.useState("prompt"),
    [A, v] = qT.useState({}),
    [C, x] = qT.useState(void 0),
    I = qT.useRef(void 0),
    k = qT.useRef(new Set()),
    D = qT.useRef(null),
    P = qT.useCallback(() => {
      if (I.current) (I.current.return(void 0), (I.current = void 0));
    }, []),
    O = qT.useCallback(() => {
      (setIsSearching(false),
        p(""),
        m(false),
        h(""),
        b(0),
        S("prompt"),
        v({}),
        x(void 0),
        P(),
        k.current.clear());
    }, [setIsSearching, P]),
    L = qT.useCallback(
      async (z, K) => {
        if (!isSearching) return;
        if (d.length === 0) {
          (P(),
            k.current.clear(),
            x(void 0),
            m(false),
            onInputChange(g),
            onCursorChange(y),
            onModeChange(_),
            setPastedContents(A));
          return;
        }
        if (!z) (P(), (I.current = cZr()), k.current.clear());
        if (!I.current) return;
        let Z = d.toLowerCase();
        while (true) {
          if (K?.aborted) return;
          let J = await I.current.next();
          if (J.done) {
            m(true);
            return;
          }
          let ne = J.value.display,
            oe = ne.toLowerCase().lastIndexOf(Z);
          if (oe !== -1 && !k.current.has(ne)) {
            (k.current.add(ne), x(J.value), m(false));
            let re = ek(ne);
            (onModeChange(re), onInputChange(ne), setPastedContents(J.value.pastedContents));
            let ce = BU(ne).toLowerCase().lastIndexOf(Z);
            onCursorChange(ce !== -1 ? ce : oe);
            return;
          }
        }
      },
      [
        isSearching,
        d,
        P,
        onInputChange,
        onCursorChange,
        onModeChange,
        setPastedContents,
        g,
        y,
        _,
        A,
      ],
    ),
    M = qT.useCallback(() => {
      (xe("history_search_open"),
        setIsSearching(true),
        h(currentInput),
        b(currentCursorOffset),
        S(currentMode),
        v(currentPastedContents),
        (I.current = cZr()),
        k.current.clear());
    }, [setIsSearching, currentInput, currentCursorOffset, currentMode, currentPastedContents]),
    N = qT.useCallback(() => {
      L(true);
    }, [L]),
    B = qT.useCallback(() => {
      if (C) {
        xe("history_search_accept");
        let z = ek(C.display),
          K = BU(C.display);
        (onInputChange(K), onModeChange(z), setPastedContents(C.pastedContents));
      } else setPastedContents(A);
      O();
    }, [C, onInputChange, onModeChange, setPastedContents, A, O]),
    $ = qT.useCallback(() => {
      (onInputChange(g), onCursorChange(y), setPastedContents(A), O());
    }, [onInputChange, onCursorChange, setPastedContents, g, y, A, O]),
    q = qT.useCallback(() => {
      if (d.length === 0)
        onAcceptHistory({
          display: g,
          pastedContents: A,
        });
      else if (C) {
        xe("history_search_execute");
        let z = ek(C.display),
          K = BU(C.display);
        (onModeChange(z),
          onAcceptHistory({
            display: K,
            pastedContents: C.pastedContents,
          }));
      }
      O();
    }, [d, C, onAcceptHistory, onModeChange, g, A, O]);
  $r("history:search", M, {
    context: "Global",
    isActive: lne() ? false : !isSearching,
  });
  let W = qT.useMemo(
    () => ({
      "historySearch:next": N,
      "historySearch:accept": B,
      "historySearch:cancel": $,
      "historySearch:execute": q,
    }),
    [N, B, $, q],
  );
  No(W, {
    context: "HistorySearch",
    isActive: isSearching,
  });
  let V = (z) => {
      if (!isSearching) return;
      if (z.key === "backspace" && d === "") (z.preventDefault(), $());
    },
    Y = qT.useRef(L);
  return (
    (Y.current = L),
    qT.useEffect(() => {
      D.current?.abort();
      let z = new AbortController();
      return (
        (D.current = z),
        Y.current(false, z.signal),
        () => {
          z.abort();
        }
      );
    }, [d]),
    {
      historyQuery: d,
      setHistoryQuery: p,
      historyMatch: C,
      historyFailedMatch: f,
      handleKeyDown: V,
      openSearch: M,
    }
  );
}
var qT;
