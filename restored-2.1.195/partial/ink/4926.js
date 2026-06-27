// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b2o
// matched 2.1.88 source: src/ink/render-node-to-output.ts
// class=partial  jaccard=0.0942  score=0.2895  fileCov=0.1225
// note: low-confidence suggestion: src/ink/render-node-to-output.ts; dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module b2o] deps: Tne
Vql = R(lt(), 1), TAt = R(rt(), 1), Kql = R(se(), 1), _2o = TAt.createContext(null);
function Xql({
  scrollable: e,
  bottom: t,
  pushUp: n,
  overlay: r,
  scrollRef: o
}) {
  let s = br(),
    i = s.columns,
    a = s.rows,
    l = Cse.useRef(null),
    c = Cse.useRef(null),
    u = Cse.useRef(null),
    d = Cse.useRef(null),
    p = Cse.useRef(null),
    f = o ?? p;
  Cse.useInsertionEffect(() => {
    let g = Cu.get(process.stdout);
    if (!g) return;
    let h = new y2o(process.stdout, i, a);
    h.setup(), l.current = h;
    let y = false;
    return g.frameSink = (b, _) => {
      let S = l.current;
      if (!S) return false;
      if (g.isAltScreenActive) {
        if (!y) S.suspend(), y = true;
        return false;
      }
      if (y) y = false, S.resume(S.cols, S.rows);
      let A = S.tickPump(),
        v = Yql(b, _, c.current),
        C = Yql(b, _, u.current),
        x = S.computeLayout(v, C),
        I = f.current?.getDomElement() ?? null;
      if (I) {
        let D = Cy.get(I),
          P = [];
        if (D && D.height > 0) {
          let M = Math.min(D.y + D.height, b.screen.height);
          for (let N = D.y; N < M; N++) P.push(Mor(b.screen, _, N));
        }
        let O = I.scrollHeight ?? 0,
          L = M3f(d.current, I) ?? O;
        S.syncViewport({
          lines: P,
          scrollTop: I.scrollTop ?? 0,
          scrollHeight: O,
          transcriptEnd: L
        }, x.contentHeight);
      }
      let k = false;
      if (I) {
        let D = S.consumeGapRange(),
          P = S.consumeBackfillNeeded();
        if (D || P) {
          let O = D ? D.from : 0,
            L = D ? D.to : I.scrollTop ?? 0,
            M = $3f(I, O, L, S.cols, g.getStylePool());
          if (M.length > 0) S.primeBackfill(M), k = true;
        }
      }
      return S.draw(x), A || k ? "tick" : true;
    }, () => {
      g.frameSink = null, h.restore(), l.current = null;
    };
  }, []);
  let m = Cse.useRef({
    cols: i,
    rows: a
  });
  return Cse.useLayoutEffect(() => {
    if (i === m.current.cols && a === m.current.rows) return;
    m.current = {
      cols: i,
      rows: a
    }, l.current?.handleResize(i, a);
  }, [i, a]), eYe.jsxs(Iy, {
    flexDirection: "column",
    height: a,
    width: "100%",
    flexShrink: 0,
    children: [eYe.jsx(Rq, {
      ref: g => {
        if (f) f.current = g;
      },
      flexGrow: 1,
      flexDirection: "column",
      stickyScroll: true,
      children: eYe.jsx(_2o.Provider, {
        value: d,
        children: e
      })
    }), eYe.jsxs(Iy, {
      ref: c,
      flexDirection: "column",
      flexShrink: 0,
      minHeight: HAt,
      maxHeight: a - 2,
      children: [n, t]
    }), r != null ? eYe.jsx(Iy, {
      ref: u,
      flexDirection: "column",
      flexShrink: 0,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      opaque: true,
      children: r
    }) : null]
  });
}
function M3f(e, t) {
  if (!e) return;
  let n = 0,
    r = e;
  while (r && r.parentNode !== t) n += r.yogaNode?.getComputedTop() ?? 0, r = r.parentNode;
  return r ? n : void 0;
}
function $3f(e, t, n, r, o) {
  let s = e.childNodes[0];
  if (!s) return [];
  if ((e.scrollHeight ?? 0) <= 0 || n <= t) return [];
  let a = Cu.get(process.stdout);
  if (!a) return [];
  let l = Math.ceil(n),
    c = Math.max(0, Math.floor(t), l - AAt),
    u = l - c;
  if (u <= 0) return [];
  let d = Y7(r, u, o, a.getCharPool(), a.getHyperlinkPool()),
    p = new Q_e({
      width: r,
      height: u,
      stylePool: o,
      screen: d
    });
  p.clip({
    x1: void 0,
    x2: void 0,
    y1: 0,
    y2: u
  });
  let f = Cy.get(s);
  if (yGe(s, p, hGe(), {
    offsetX: 0,
    offsetY: -c,
    prevScreen: void 0
  }), p.unclip(), zBt(s), f) Cy.set(s, f);
  let m = p.get();
  s.dirty = true;
  let g = [];
  for (let h = 0; h < u; h++) g.push(Mor(m, o, h));
  return g;
}
function Yql(e, t, n) {
  if (!n) return [];
  let r = Cy.get(n);
  if (!r || r.height <= 0) return [];
  let o = [],
    s = Math.min(r.y + r.height, e.screen.height);
  for (let i = Math.max(0, r.y); i < s; i++) o.push(Mor(e.screen, t, i));
  return o;
}
var Cse, eYe;