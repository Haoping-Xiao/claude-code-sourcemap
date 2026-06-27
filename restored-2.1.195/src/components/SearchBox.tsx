// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n$l
// matched 2.1.88 source: src/components/SearchBox.tsx
// class=modified  jaccard=0.1989  score=0.222  fileCov=0.657
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function LP({
  query: e,
  placeholder: t = "Search\u2026",
  isFocused: n,
  isTerminalFocused: r,
  prefix: o = Ovs,
  width: s,
  cursorOffset: i,
  borderless: a = false,
  highlights: l = [],
  dimRange: c,
  cursorChar: u,
  prefixDim: d = false,
  prefixColor: p,
  onCursorOffsetChange: f,
  onFocus: m,
  wrapColumns: g,
}) {
  let h = i ?? e.length,
    y = a ? 0 : 2,
    b = a ? 0 : 1,
    _ = `${o} ${e}`,
    S = o.length + 1,
    A = S1o.useMemo(() => QMl(_, g ?? 0), [_, g]),
    v = S1o.useMemo(wne, []),
    C = Oe.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT && Oe.CLAUDE_CODE_SESSION_KIND !== "bg",
    x = ZMl(A, S + h),
    I = RW({
      line: b + x.line,
      column: y + x.column,
      active: n,
      visible: u === void 0 && !C,
    }),
    k = r && !(v && !C && u === void 0);
  return g3.jsx(U, {
    ref: I,
    flexShrink: 0,
    borderStyle: a ? void 0 : "round",
    borderColor: n ? "suggestion" : void 0,
    borderDimColor: !n,
    paddingX: a ? 0 : 1,
    width: s,
    onClick:
      f || m
        ? (P) => {
            if (!n) {
              m?.();
              return;
            }
            if (!e || !f) return;
            let O = P.localRow - b;
            if (O < 0) return;
            let L = Math.max(0, P.localCol - y),
              M = e$l(A, O, L);
            f(Math.max(0, Math.min(e.length, M - S)));
          }
        : void 0,
    children: g3.jsxs(w, {
      dimColor: !n,
      children: [
        g3.jsx(w, {
          dimColor: d,
          color: p,
          children: o,
        }),
        " ",
        n
          ? e
            ? oLf(e, l, c, k ? h : -1, u)
            : k
              ? g3.jsxs(g3.Fragment, {
                  children: [
                    u ??
                      g3.jsx(w, {
                        inverse: true,
                        children: t.charAt(0),
                      }),
                    g3.jsx(w, {
                      dimColor: true,
                      children: u ? t : t.slice(1),
                    }),
                  ],
                })
              : g3.jsx(w, {
                  dimColor: true,
                  children: t,
                })
          : e
            ? g3.jsx(w, {
                children: e,
              })
            : g3.jsx(w, {
                children: t,
              }),
      ],
    }),
  });
}
function oLf(e, t, n, r, o) {
  let s = (u) => t.some(([d, p]) => u >= d && u < p),
    i = (u) => !!n && u >= n[0] && u < n[1],
    a = new Set([0, e.length]);
  for (let [u, d] of t) (a.add(u), a.add(d));
  if (n) (a.add(n[0]), a.add(n[1]));
  if (r >= 0) (a.add(r), a.add(r + 1));
  let l = [...a].sort((u, d) => u - d),
    c = [];
  for (let u = 0; u < l.length - 1; u++) {
    let d = l[u],
      p = l[u + 1],
      f = d < e.length ? e.slice(d, p) : " ";
    if (!f) continue;
    let m = d === r,
      g =
        m &&
        f ===
          `
`;
    c.push(
      m && o
        ? g3.jsxs(
            w,
            {
              children: [
                o,
                g
                  ? `
`
                  : null,
              ],
            },
            d,
          )
        : g3.jsx(
            w,
            {
              color: s(d) ? "suggestion" : void 0,
              dimColor: i(d),
              inverse: m,
              children: g
                ? ` 
`
                : f,
            },
            d,
          ),
    );
  }
  return c;
}
var S1o, g3;
