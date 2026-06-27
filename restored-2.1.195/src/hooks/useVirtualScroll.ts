// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lql
// matched 2.1.88 source: src/hooks/useVirtualScroll.ts
// class=modified  jaccard=0.6611  score=0.8766  fileCov=0.7289
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Lql = E(() => {
  _i();
  Ye();
  a5();
  JFo();
  uo();
  dC();
  er();
  gb();
  GXt();
  DD();
  Ao();
  gz();
  u2o();
  Hor();
  SEe();
  lEe();
  ((f2o = R(lt(), 1)), (p2o = R(rt(), 1)), (Dor = R(rt(), 1)), (iZ = R(se(), 1)), (kql = []));
});
function k3f(e) {
  return Math.max(x3f, Math.min(Math.round(e * 1.5), I3f));
}
function Pql(e, t, n) {
  let r = Hh.useRef(new Map()),
    o = Hh.useRef(0),
    s = Hh.useRef(0),
    i = Hh.useRef({
      arr: new Float64Array(0),
      version: -1,
      n: -1,
    }),
    a = Hh.useRef(new Map()),
    l = Hh.useRef(new Map()),
    c = Hh.useRef({
      len: 0,
      first: void 0,
      last: void 0,
    }),
    u = Hh.useRef(n),
    d = Hh.useRef(false),
    p = Hh.useRef(null),
    f = Hh.useRef(0);
  if (u.current !== n) {
    let J = u.current / n;
    u.current = n;
    for (let [ne, oe] of r.current) r.current.set(ne, Math.max(1, Math.round(oe * J)));
    (o.current++, (d.current = true), (f.current = 2));
  }
  let m = f.current > 0 ? p.current : null,
    g = Hh.useRef(0),
    [, h] = Hh.useState(0),
    y = Hh.useRef(null),
    b = Hh.useCallback((J) => e.current?.subscribe(J) ?? L3f, [e]);
  Hh.useSyncExternalStore(b, () => {
    let J = e.current;
    if (!J) return NaN;
    let ne = J.getScrollTop() + J.getPendingDelta(),
      oe = Math.floor(ne / Dql);
    return J.isSticky() ? ~oe : oe;
  });
  let _ = e.current?.getScrollTop() ?? -1,
    S = e.current?.getPendingDelta() ?? 0,
    A = e.current?.getViewportHeight() ?? 0,
    v = k3f(A),
    C = e.current?.isSticky() ?? true;
  (Hh.useEffect(() => (mho(C), () => mho(true)), [C]),
    Hh.useMemo(() => {
      let J = c.current,
        ne = t[0],
        oe = t.length >= J.len && ne === J.first && t[J.len - 1] === J.last;
      if (((J.len = t.length), (J.first = ne), (J.last = t.at(-1)), oe)) return;
      let re = new Set(t),
        ee = false;
      for (let ce of r.current.keys()) if (!re.has(ce)) (r.current.delete(ce), (ee = true));
      for (let ce of l.current.keys()) if (!re.has(ce)) l.current.delete(ce);
      if (ee) o.current++;
    }, [t]));
  let x = t.length;
  if (i.current.version !== o.current || i.current.n !== x) {
    let J = i.current.arr.length >= x + 1 ? i.current.arr : new Float64Array(x + 1);
    J[0] = 0;
    for (let ne = 0; ne < x; ne++) J[ne + 1] = J[ne] + (r.current.get(t[ne]) ?? C3f);
    i.current = {
      arr: J,
      version: o.current,
      n: x,
    };
  }
  let I = i.current.arr,
    k = I[x],
    D,
    P;
  if (m) (([D, P] = m), (D = Math.min(D, x)), (P = Math.min(P, x)));
  else if (A === 0 || _ < 0) ((D = Math.max(0, x - R3f)), (P = x));
  else {
    if (C) {
      let ce = A + v;
      D = x;
      while (D > 0 && k - I[D - 1] < ce) D--;
      P = x;
    } else {
      let ce = g.current,
        ae = A * 3,
        de = Math.min(_, _ + S),
        Ee = Math.max(_, _ + S),
        me = Ee - de,
        pe = me > ae ? (S < 0 ? Ee - ae : de) : de,
        ge = pe + Math.min(me, ae),
        he = Math.max(0, pe - ce),
        ie = ge - ce,
        le = he - v;
      {
        let we = 0,
          Ce = x;
        while (we < Ce) {
          let Ie = (we + Ce) >> 1;
          if (I[Ie + 1] <= le) we = Ie + 1;
          else Ce = Ie;
        }
        D = we;
      }
      {
        let we = p.current;
        if (we && we[0] < D)
          for (let Ce = we[0]; Ce < Math.min(D, we[1]); Ce++) {
            let Ie = t[Ce];
            if (a.current.has(Ie) && !r.current.has(Ie)) {
              D = Ce;
              break;
            }
          }
      }
      let He = A + 2 * v,
        ye = Math.min(x, D + eJt),
        ue = 0;
      P = D;
      while (P < ye && (ue < He || I[P] < ie + A + v)) ((ue += r.current.get(t[P]) ?? m2o), P++);
    }
    let J = A + 2 * v,
      ne = Math.max(0, P - eJt),
      oe = 0;
    for (let ce = D; ce < P; ce++) oe += r.current.get(t[ce]) ?? m2o;
    while (D > ne && oe < J) (D--, (oe += r.current.get(t[D]) ?? m2o));
    let re = p.current,
      ee = Math.abs(_ - s.current) + Math.abs(S);
    if (re && ee > A * 2) {
      let [ce, ae] = re;
      if (D < ce - tJt) D = ce - tJt;
      if (P > ae + tJt) P = ae + tJt;
      if (D > P) P = Math.min(D + tJt, x);
    }
    s.current = _;
  }
  if (f.current > 0) f.current--;
  else p.current = [D, P];
  let O = Hh.useDeferredValue(D),
    L = Hh.useDeferredValue(P),
    M = D < O ? O : D,
    N = P > L ? L : P;
  if (M > N || C) ((M = D), (N = P));
  if (S > 0) N = P;
  if (N - M > eJt) {
    let J = (I[M] + I[N]) / 2;
    if (_ - g.current < J) N = M + eJt;
    else M = N - eJt;
  }
  let B = I[M],
    $ = N === x ? 1 / 0 : Math.max(B, I[N] - A),
    q = Hh.useRef(null);
  (Hh.useLayoutEffect(() => {
    if (C || _ < 0 || A === 0) {
      q.current = null;
      return;
    }
    let J = q.current;
    if (J && J.scrollTop === _ && S === 0) {
      let ee = t[J.idx] === J.key ? J.idx : t.lastIndexOf(J.key);
      if (ee >= 0) {
        let ce = I[ee],
          ae = ce - J.offset;
        if (ae !== 0) {
          (e.current?.scrollTo(_ + ae),
            (q.current = {
              key: J.key,
              idx: ee,
              offset: ce,
              scrollTop: _ + ae,
            }));
          return;
        }
      }
    }
    let ne = Math.max(0, _ - g.current),
      oe = M;
    while (oe + 1 < N && I[oe + 1] <= ne) oe++;
    let re = t[oe];
    q.current = re
      ? {
          key: re,
          idx: oe,
          offset: I[oe],
          scrollTop: _,
        }
      : null;
  }),
    Hh.useLayoutEffect(() => {
      let J = y.current?.yogaNode;
      if (J && J.getComputedWidth() > 0) {
        let re = J.getComputedTop(),
          ee = g.current;
        if (((g.current = re), ee !== 0 && Math.abs(re - ee) > 1)) h((ce) => ce + 1);
      }
      let ne = g.current;
      if (C) e.current?.setClampBounds(void 0, void 0);
      else e.current?.setClampBounds(M === 0 ? 0 : B + ne, $ === 1 / 0 ? 1 / 0 : $ + ne);
      if (d.current) {
        d.current = false;
        return;
      }
      let oe = false;
      for (let [re, ee] of a.current) {
        let ce = ee.yogaNode;
        if (!ce) continue;
        let ae = ce.getComputedHeight(),
          de = r.current.get(re);
        if (ae > 0) {
          if (de !== ae) (r.current.set(re, ae), (oe = true));
        } else if (ce.getComputedWidth() > 0 && de !== 0) (r.current.set(re, 0), (oe = true));
      }
      if (oe) o.current++;
    }));
  let W = Hh.useCallback((J) => {
      let ne = l.current.get(J);
      if (!ne)
        ((ne = (oe) => {
          if (oe) a.current.set(J, oe);
          else {
            let re = a.current.get(J)?.yogaNode;
            if (re && !d.current) {
              let ee = re.getComputedHeight();
              if ((ee > 0 || re.getComputedWidth() > 0) && r.current.get(J) !== ee)
                (r.current.set(J, ee), o.current++);
            }
            a.current.delete(J);
          }
        }),
          l.current.set(J, ne));
      return ne;
    }, []),
    V = Hh.useCallback(
      (J) => {
        let ne = a.current.get(t[J])?.yogaNode;
        if (!ne || ne.getComputedWidth() === 0) return -1;
        return ne.getComputedTop();
      },
      [t],
    ),
    Y = Hh.useCallback((J) => a.current.get(t[J]) ?? null, [t]),
    z = Hh.useCallback((J) => r.current.get(t[J]), [t]),
    K = Hh.useCallback(
      (J) => {
        let ne = i.current;
        if (J < 0 || J >= ne.n) return;
        e.current?.scrollTo(ne.arr[J] + g.current);
      },
      [e],
    ),
    Z = k - I[N];
  return {
    range: [M, N],
    topSpacer: B,
    bottomSpacer: Z,
    measureRef: W,
    spacerRef: y,
    offsets: I,
    getItemTop: V,
    getItemElement: Y,
    getItemHeight: z,
    scrollToIndex: K,
  };
}
var Hh,
  C3f = 3,
  Dql = 40,
  I3f = 80,
  x3f,
  R3f = 30,
  m2o = 1,
  eJt = 300,
  tJt = 25,
  L3f = () => {};
