// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ojl
// matched 2.1.88 source: src/components/CustomSelect/use-select-input.ts
// class=partial  jaccard=0.1446  score=0.3012  fileCov=0.2176
// note: low-confidence suggestion: src/components/CustomSelect/use-select-input.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ojl = E(() => {
  si();
  kt();
  Cc();
  lJ();
  Bs();
  f_();
  Ko();
  Xce();
  Ye();
  ps();
  er();
  At();
  vq();
  gHe();
  lE();
  yrr();
  Xh();
  ZC();
  dr();
  sr();
  njl = R(lt(), 1), X$ = R(rt(), 1), Ks = R(se(), 1);
});
function yXt(e, t, n) {
  let r = _b(e - n + 1, 0, Math.max(0, t - n)),
    o = Math.min(r + n, t);
  return {
    windowStart: r,
    windowEnd: o,
    moreAbove: r,
    moreBelow: t - o
  };
}
function sjl({
  count: e,
  visibleCount: t,
  containerRef: n,
  isDisabled: r = !1,
  onAccept: o,
  onRowKeyDown: s,
  onCursorChange: i,
  edge: a = "clamp"
}) {
  let [l, c] = s1e.useState(0),
    u = NLn(n),
    d = Math.max(0, e - 1),
    p = _b(l, 0, d);
  function f(b) {
    c(_ => {
      let A = _b(_, 0, d) + b;
      if (a === "wrap" && e > 0) return (A % e + e) % e;
      return _b(A, 0, d);
    });
  }
  s1e.useEffect(() => {
    if (l !== p) c(p);
  }, [l, p]);
  let m = s1e.useRef(i);
  m.current = i;
  let g = s1e.useRef(null);
  s1e.useEffect(() => {
    if (e === 0) {
      g.current = null;
      return;
    }
    if (g.current !== p) g.current = p, m.current?.(p);
  }, [p, e]), No({
    "select:next": () => f(1),
    "select:previous": () => f(-1),
    "select:pageDown": () => f(t),
    "select:pageUp": () => f(-t),
    "select:first": () => c(0),
    "select:last": () => c(d)
  }, {
    context: "Select",
    isActive: u && !r && e > 0
  });
  function h(b) {
    if (r || e === 0) return;
    if (b.key === "return" && o) {
      o(p), b.preventDefault(), b.stopImmediatePropagation();
      return;
    }
    s?.(b, p);
  }
  let y = yXt(p, e, t);
  return {
    cursor: p,
    ...y,
    isCursor: b => b === p && e > 0,
    hasFocus: u,
    setCursor: b => c(_b(b, 0, d)),
    bind: {
      tabIndex: 0,
      onKeyDown: h
    }
  };
}
var s1e;