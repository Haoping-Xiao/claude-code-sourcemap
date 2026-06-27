// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zBo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zBo = E(() => {
  Cc();
  Bs();
  Ye();
  pXt();
  BEt = R(lt(), 1), urr = R(rt(), 1), XL = R(se(), 1);
});
function FEt({
  totalItems: e,
  maxVisible: t = INf,
  selectedIndex: n = 0,
  firstSelectableIndex: r = 0
}) {
  let o = e > t,
    s = _z.useRef(0),
    i = _z.useMemo(() => {
      if (!o) return 0;
      let _ = s.current;
      if (n < _) {
        let v = n <= r ? 0 : n;
        return s.current = v, v;
      }
      if (n >= _ + t) {
        let v = n - t + 1;
        return s.current = v, v;
      }
      let S = Math.max(0, e - t),
        A = Math.min(_, S);
      return s.current = A, A;
    }, [n, t, o, e, r]),
    a = i,
    l = Math.min(i + t, e),
    c = _z.useCallback(_ => {
      if (!o) return _;
      return _.slice(a, l);
    }, [o, a, l]),
    u = _z.useCallback(_ => a + _, [a]),
    d = _z.useCallback(_ => _ >= a && _ < l, [a, l]),
    p = _z.useCallback(_ => {}, []),
    f = _z.useCallback(() => {}, []),
    m = _z.useCallback(() => {}, []),
    g = _z.useCallback((_, S) => {
      let A = Math.max(0, Math.min(_, e - 1));
      S(A);
    }, [e]),
    h = _z.useCallback((_, S) => !1, []),
    y = Math.max(1, Math.ceil(e / t));
  return {
    currentPage: Math.floor(i / t),
    totalPages: y,
    startIndex: a,
    endIndex: l,
    needsPagination: o,
    pageSize: t,
    getVisibleItems: c,
    toActualIndex: u,
    isOnCurrentPage: d,
    goToPage: p,
    nextPage: f,
    prevPage: m,
    handleSelectionChange: g,
    handlePageNavigation: h,
    scrollPosition: {
      current: n + 1,
      total: e,
      canScrollUp: i > 0,
      canScrollDown: i + t < e
    }
  };
}
var _z,
  INf = 5;