// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _rr
// matched 2.1.88 source: src/components/ui/OrderedListItem.tsx
// class=partial  jaccard=0.1048  score=0.1314  fileCov=0.3416
// note: low-confidence suggestion: src/components/ui/OrderedListItem.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _rr = E(() => {
  FJr();
  m8();
  ps();
  s1e = R(rt(), 1);
});
function ljl() {
  return bz.useContext(ajl);
}
function WNf({
  children: e,
  visibleCount: t,
  onSelect: n,
  onFocus: r,
  isDisabled: o = false,
  wrap: s = false,
  overflowHint: i = "glyph",
  emptyMessage: a
}) {
  let l = bz.useRef(null),
    c = bz.Children.toArray(e),
    u = c.length,
    d = sjl({
      count: u,
      visibleCount: t,
      containerRef: l,
      isDisabled: o,
      edge: s ? "wrap" : "clamp",
      onAccept: n
    }),
    p = bz.useRef(r);
  if (p.current = r, bz.useEffect(() => {
    if (u > 0) p.current?.(d.cursor);
  }, [d.cursor, u]), M0(l, !o), u === 0) return Uq.jsx(U, {
    ref: l,
    flexDirection: "column",
    tabIndex: 0,
    children: a && Uq.jsx(w, {
      dimColor: true,
      children: a
    })
  });
  let f = i === "glyph" && t === 1 ? "count" : i,
    m = c.slice(d.windowStart, d.windowEnd);
  return Uq.jsxs(U, {
    ref: l,
    flexDirection: "column",
    ...d.bind,
    children: [f === "count" && d.moreAbove > 0 && Uq.jsx(U, {
      paddingLeft: 2,
      children: Uq.jsxs(w, {
        dimColor: true,
        children: [Wee, " ", d.moreAbove, " more above"]
      })
    }), m.map((g, h) => {
      let y = d.windowStart + h,
        b = d.isCursor(y),
        _ = h === 0 && d.moreAbove > 0,
        S = h === m.length - 1 && d.moreBelow > 0;
      return Uq.jsx(ajl.Provider, {
        value: b,
        children: Uq.jsx(mH, {
          isFocused: b,
          showScrollUp: f === "glyph" && _,
          showScrollDown: f === "glyph" && S,
          styled: false,
          children: g
        })
      }, bz.isValidElement(g) ? g.key ?? y : y);
    }), f === "count" && d.moreBelow > 0 && Uq.jsx(U, {
      paddingLeft: 2,
      children: Uq.jsxs(w, {
        dimColor: true,
        children: [r9, " ", d.moreBelow, " more below"]
      })
    })]
  });
}
function qNf(e) {
  let t = ijl.c(2),
    {
      children: n
    } = e,
    r;
  if (t[0] !== n) r = Uq.jsx(Uq.Fragment, {
    children: n
  }), t[0] = n, t[1] = r;else r = t[1];
  return r;
}
var ijl, bz, Uq, ajl, JEt;