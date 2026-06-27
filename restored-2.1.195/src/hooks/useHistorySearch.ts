// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qhc
// matched 2.1.88 source: src/hooks/useHistorySearch.ts
// class=modified  jaccard=0.4063  score=0.6818  fileCov=0.5014
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var qhc = E(() => {
  Ed();
  Cc();
  adr();
  zj();
  Ye();
  ((wS = R(rt(), 1)), (a6o = R(se(), 1)));
});
function Vhc(e, t, n, r, o, s, i, a, l, c, u) {
  let [d, p] = qT.useState(""),
    [f, m] = qT.useState(!1),
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
      (l(!1), p(""), m(!1), h(""), b(0), S("prompt"), v({}), x(void 0), P(), k.current.clear());
    }, [l, P]),
    L = qT.useCallback(
      async (z, K) => {
        if (!a) return;
        if (d.length === 0) {
          (P(), k.current.clear(), x(void 0), m(!1), n(g), r(y), s(_), c(A));
          return;
        }
        if (!z) (P(), (I.current = cZr()), k.current.clear());
        if (!I.current) return;
        let Z = d.toLowerCase();
        while (!0) {
          if (K?.aborted) return;
          let J = await I.current.next();
          if (J.done) {
            m(!0);
            return;
          }
          let ne = J.value.display,
            oe = ne.toLowerCase().lastIndexOf(Z);
          if (oe !== -1 && !k.current.has(ne)) {
            (k.current.add(ne), x(J.value), m(!1));
            let re = ek(ne);
            (s(re), n(ne), c(J.value.pastedContents));
            let ce = BU(ne).toLowerCase().lastIndexOf(Z);
            r(ce !== -1 ? ce : oe);
            return;
          }
        }
      },
      [a, d, P, n, r, s, c, g, y, _, A],
    ),
    M = qT.useCallback(() => {
      (xe("history_search_open"),
        l(!0),
        h(t),
        b(o),
        S(i),
        v(u),
        (I.current = cZr()),
        k.current.clear());
    }, [l, t, o, i, u]),
    N = qT.useCallback(() => {
      L(!0);
    }, [L]),
    B = qT.useCallback(() => {
      if (C) {
        xe("history_search_accept");
        let z = ek(C.display),
          K = BU(C.display);
        (n(K), s(z), c(C.pastedContents));
      } else c(A);
      O();
    }, [C, n, s, c, A, O]),
    $ = qT.useCallback(() => {
      (n(g), r(y), c(A), O());
    }, [n, r, c, g, y, A, O]),
    q = qT.useCallback(() => {
      if (d.length === 0)
        e({
          display: g,
          pastedContents: A,
        });
      else if (C) {
        xe("history_search_execute");
        let z = ek(C.display),
          K = BU(C.display);
        (s(z),
          e({
            display: K,
            pastedContents: C.pastedContents,
          }));
      }
      O();
    }, [d, C, e, s, g, A, O]);
  $r("history:search", M, {
    context: "Global",
    isActive: lne() ? !1 : !a,
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
    isActive: a,
  });
  let V = (z) => {
      if (!a) return;
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
        Y.current(!1, z.signal),
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
