// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iVl
// matched 2.1.88 source: src/components/FullscreenLayout.tsx
// class=modified  jaccard=0.2797  score=0.3703  fileCov=0.5334
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iVl] deps: gGe, Ye
((E2o = R(lt(), 1)), (sVl = R(rt(), 1)), (qHe = R(se(), 1)));
oVl = [
  {
    lines: 1,
    indent: 0,
  },
  {
    lines: 5,
    indent: 0,
  },
  {
    lines: 3,
    indent: 2,
  },
  {
    lines: 2,
    indent: 0,
  },
  {
    lines: 7,
    indent: 0,
  },
  {
    lines: 4,
    indent: 2,
  },
  {
    lines: 1,
    indent: 0,
  },
  {
    lines: 6,
    indent: 0,
  },
  {
    lines: 2,
    indent: 2,
  },
  {
    lines: 3,
    indent: 0,
  },
];
function cVl(e) {
  let [t, n] = oy.useState(null),
    r = oy.useRef(t);
  r.current = t;
  let o = oy.useRef(e);
  o.current = e;
  let s = oy.useRef(null),
    i = oy.useCallback(() => {
      if (r.current !== null) n(null);
    }, []),
    a = oy.useCallback((c) => {
      let u = Math.max(0, c.getScrollHeight() - c.getViewportHeight());
      if (c.getScrollTop() + c.getPendingDelta() >= u) return;
      if (s.current === null) ((s.current = c.getScrollHeight()), n(o.current));
    }, []),
    l = oy.useCallback((c) => {
      if (!c) return;
      c.scrollToBottom();
    }, []);
  return (
    oy.useEffect(() => {
      if (t === null) s.current = null;
      else if (e < t) ((s.current = null), n(null));
    }, [e, t]),
    {
      dividerIndex: t,
      dividerYRef: s,
      onScrollAway: a,
      onRepin: i,
      jumpToNew: l,
    }
  );
}
function X3f(e, t) {
  let n = 0,
    r = false;
  for (let o = t; o < e.length; o++) {
    let s = e[o];
    if (s.type === "progress") continue;
    if (s.type === "assistant" && !J3f(s)) continue;
    let i = s.type === "assistant";
    if (i && !r) n++;
    r = i;
  }
  return n;
}
function J3f(e) {
  if (e.type !== "assistant") return false;
  for (let t of e.message.content) if (t.type === "text" && t.text?.trim()) return true;
  return false;
}
function uVl(e, t) {
  if (t === null) return;
  let n = t;
  while (n < e.length && (e[n]?.type === "progress" || bor(e[n]))) n++;
  let r = e[n]?.uuid;
  if (!r) return;
  let o = X3f(e, t);
  return {
    firstUnseenUuid: r,
    count: Math.max(1, o),
  };
}
function T2o(e) {
  let t = tYe.c(78),
    {
      scrollable: n,
      sidebar: r,
      sidebarWidth: o,
      bottom: s,
      modal: i,
      modalScrollRef: a,
      scrollRef: l,
      dividerYRef: c,
      hidePill: u,
      hideSticky: d,
      newMessageCount: p,
      onPillClick: f,
    } = e,
    m = o === void 0 ? 0 : o,
    g = u === void 0 ? false : u,
    h = d === void 0 ? false : d,
    y = p === void 0 ? 0 : p,
    { rows: b, columns: _ } = br(),
    S = b - H2o - 1,
    A = Math.max(1, _ - m),
    v;
  if (t[0] !== A || t[1] !== b)
    ((v = {
      columns: A,
      rows: b,
    }),
      (t[0] = A),
      (t[1] = b),
      (t[2] = v));
  else v = t[2];
  let C = v,
    I = EPn() ? b - H2o : "50%",
    [k, D] = oy.useState(null),
    P;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((P = {
      setStickyPrompt: D,
    }),
      (t[3] = P));
  else P = t[3];
  let O = P,
    L;
  if (t[4] !== l) ((L = (Y) => l?.current?.subscribe(Y) ?? eGf), (t[4] = l), (t[5] = L));
  else L = t[5];
  let M = L,
    N;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((N = wc("autoScrollEnabled", true)), (t[6] = N));
  else N = t[6];
  let B = N.value,
    $;
  if (t[7] !== c || t[8] !== l)
    (($ = () => {
      let Y = l?.current;
      if (!Y) return false;
      if (Y.isSticky()) return false;
      let z = Y.getScrollTop() + Y.getPendingDelta() + Y.getViewportHeight(),
        K = c?.current;
      if (K != null) return z < K && z < Y.getScrollHeight();
      return !B && z < Y.getScrollHeight();
    }),
      (t[7] = c),
      (t[8] = l),
      (t[9] = $));
  else $ = t[9];
  let q = oy.useSyncExternalStore(M, $),
    W;
  if (t[10] === Symbol.for("react.memo_cache_sentinel")) ((W = []), (t[10] = W));
  else W = t[10];
  if ((oy.useLayoutEffect(Q3f, W), Ns())) {
    let Y = h ? null : k,
      z = Y != null && Y !== "clicked" ? Y : null,
      K = Y != null,
      Z;
    if (t[11] !== z)
      ((Z =
        z &&
        Od.jsx(rGf, {
          text: z.text,
          onClick: z.scrollTo,
        })),
        (t[11] = z),
        (t[12] = Z));
    else Z = t[12];
    let J = K ? 0 : 1,
      ne;
    if (t[13] === Symbol.for("react.memo_cache_sentinel")) ((ne = Od.jsx(A2o, {})), (t[13] = ne));
    else ne = t[13];
    let oe;
    if (t[14] !== n)
      ((oe = Od.jsxs($or, {
        value: O,
        children: [n, ne],
      })),
        (t[14] = n),
        (t[15] = oe));
    else oe = t[15];
    let re;
    if (t[16] !== l || t[17] !== J || t[18] !== oe)
      ((re = Od.jsx(Rq, {
        ref: l,
        flexGrow: 1,
        flexDirection: "column",
        paddingTop: J,
        stickyScroll: true,
        followGrowth: B,
        children: oe,
      })),
        (t[16] = l),
        (t[17] = J),
        (t[18] = oe),
        (t[19] = re));
    else re = t[19];
    let ee;
    if (t[20] !== g || t[21] !== y || t[22] !== f || t[23] !== q)
      ((ee =
        !g &&
        q &&
        Od.jsx(nGf, {
          count: y,
          onClick: f,
        })),
        (t[20] = g),
        (t[21] = y),
        (t[22] = f),
        (t[23] = q),
        (t[24] = ee));
    else ee = t[24];
    let ce, ae;
    if (t[25] === Symbol.for("react.memo_cache_sentinel"))
      ((ce = false), (ae = false), (t[25] = ce), (t[26] = ae));
    else ((ce = t[25]), (ae = t[26]));
    let de;
    if (t[27] !== Z || t[28] !== re || t[29] !== ee)
      ((de = Od.jsxs(U, {
        flexGrow: 1,
        flexDirection: "column",
        overflow: "hidden",
        children: [Z, re, ee, ce, ae],
      })),
        (t[27] = Z),
        (t[28] = re),
        (t[29] = ee),
        (t[30] = de));
    else de = t[30];
    let Ee;
    if (t[31] !== C || t[32] !== de)
      ((Ee = Od.jsx(Dce, {
        value: C,
        children: de,
      })),
        (t[31] = C),
        (t[32] = de),
        (t[33] = Ee));
    else Ee = t[33];
    let me;
    if (t[34] !== r || t[35] !== m)
      ((me =
        r != null &&
        (m > 0
          ? Od.jsx(U, {
              width: m,
              flexShrink: 0,
              flexDirection: "column",
              overflow: "hidden",
              borderStyle: "single",
              borderTop: false,
              borderRight: false,
              borderBottom: false,
              borderColor: "inactive",
              children: r,
            })
          : r)),
        (t[34] = r),
        (t[35] = m),
        (t[36] = me));
    else me = t[36];
    let pe;
    if (t[37] !== Ee || t[38] !== me)
      ((pe = Od.jsxs(U, {
        flexGrow: 1,
        flexDirection: "row",
        overflow: "hidden",
        children: [Ee, me],
      })),
        (t[37] = Ee),
        (t[38] = me),
        (t[39] = pe));
    else pe = t[39];
    let ge, he;
    if (t[40] === Symbol.for("react.memo_cache_sentinel"))
      ((ge = Od.jsx(aVl, {})), (he = Od.jsx(lVl, {})), (t[40] = ge), (t[41] = he));
    else ((ge = t[40]), (he = t[41]));
    let ie;
    if (t[42] !== s)
      ((ie = Od.jsx(U, {
        flexDirection: "column",
        width: "100%",
        flexGrow: 1,
        flexShrink: 0,
        overflowY: "hidden",
        children: s,
      })),
        (t[42] = s),
        (t[43] = ie));
    else ie = t[43];
    let le;
    if (t[44] !== I || t[45] !== ie)
      ((le = Od.jsxs(U, {
        flexDirection: "column",
        flexShrink: 0,
        width: "100%",
        maxHeight: I,
        children: [ge, he, ie],
      })),
        (t[44] = I),
        (t[45] = ie),
        (t[46] = le));
    else le = t[46];
    let He;
    if (t[47] !== _ || t[48] !== i || t[49] !== S || t[50] !== a || t[51] !== b)
      ((He =
        i != null &&
        Od.jsx(Xj, {
          value: {
            rows: S,
            columns: _ - 2 * gbe,
            scrollRef: a ?? null,
            claimScrollBox: null,
          },
          children: Od.jsxs(U, {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            maxHeight: b - H2o,
            flexDirection: "column",
            overflow: "hidden",
            opaque: true,
            children: [
              Od.jsx(U, {
                flexShrink: 0,
                children: Od.jsx(qh, {
                  color: "permission",
                  char: "\u2594",
                }),
              }),
              Od.jsx(tGf, {
                scrollRef: a,
                maxRows: S,
                children: i,
              }),
            ],
          }),
        })),
        (t[47] = _),
        (t[48] = i),
        (t[49] = S),
        (t[50] = a),
        (t[51] = b),
        (t[52] = He));
    else He = t[52];
    let ye;
    if (t[53] !== pe || t[54] !== le || t[55] !== He)
      ((ye = Od.jsxs(g2o, {
        children: [pe, le, He],
      })),
        (t[53] = pe),
        (t[54] = le),
        (t[55] = He),
        (t[56] = ye));
    else ye = t[56];
    return ye;
  }
  if (p0e()) {
    let Y;
    if (t[57] === Symbol.for("react.memo_cache_sentinel")) ((Y = Od.jsx(A2o, {})), (t[57] = Y));
    else Y = t[57];
    let z;
    if (t[58] !== n)
      ((z = Od.jsxs($or, {
        value: O,
        children: [n, Y],
      })),
        (t[58] = n),
        (t[59] = z));
    else z = t[59];
    let K, Z;
    if (t[60] === Symbol.for("react.memo_cache_sentinel"))
      ((K = Od.jsx(aVl, {})), (Z = Od.jsx(lVl, {})), (t[60] = K), (t[61] = Z));
    else ((K = t[60]), (Z = t[61]));
    let J;
    if (t[62] !== s)
      ((J = Od.jsxs(Od.Fragment, {
        children: [K, Z, s],
      })),
        (t[62] = s),
        (t[63] = J));
    else J = t[63];
    let ne;
    if (t[64] !== _ || t[65] !== i || t[66] !== S || t[67] !== a)
      ((ne =
        i != null
          ? Od.jsx(Xj, {
              value: {
                rows: S,
                columns: _ - 2 * gbe,
                scrollRef: a ?? null,
                claimScrollBox: null,
              },
              children: Od.jsx(U, {
                flexDirection: "column",
                paddingX: gbe,
                children: i,
              }),
            })
          : null),
        (t[64] = _),
        (t[65] = i),
        (t[66] = S),
        (t[67] = a),
        (t[68] = ne));
    else ne = t[68];
    let oe;
    if (t[69] !== l || t[70] !== z || t[71] !== J || t[72] !== ne)
      ((oe = Od.jsx(g2o, {
        children: Od.jsx(Xql, {
          scrollRef: l,
          scrollable: z,
          bottom: J,
          overlay: ne,
        }),
      })),
        (t[69] = l),
        (t[70] = z),
        (t[71] = J),
        (t[72] = ne),
        (t[73] = oe));
    else oe = t[73];
    return oe;
  }
  let V;
  if (t[74] !== s || t[75] !== i || t[76] !== n)
    ((V = Od.jsxs(Od.Fragment, {
      children: [n, s, i],
    })),
      (t[74] = s),
      (t[75] = i),
      (t[76] = n),
      (t[77] = V));
  else V = t[77];
  return V;
}
function Q3f() {
  if (!Ns()) return;
  let e = Cu.get(process.stdout);
  if (!e) return;
  return (
    (e.onHyperlinkClick = Z3f),
    () => {
      e.onHyperlinkClick = void 0;
    }
  );
}
function Z3f(e) {
  dIn(e);
}
function eGf() {}
function tGf(e) {
  let t = tYe.c(45),
    { scrollRef: n, maxRows: r, children: o } = e,
    s = oy.useContext(Xj),
    i = oy.useRef(null),
    [a, l] = oy.useState(null),
    c;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((c = (oe) => {
      ((i.current = oe), l(oe));
    }),
      (t[0] = c));
  else c = t[0];
  let u = c,
    d = a !== null,
    p = r - (a ?? 0),
    f = oy.useRef(null),
    m;
  if (t[1] !== n)
    ((m = () => {
      if (n && i.current === null)
        return (
          (n.current = f.current),
          () => {
            if (n.current === f.current) n.current = null;
          }
        );
    }),
      (t[1] = n),
      (t[2] = m));
  else m = t[2];
  oy.useLayoutEffect(m);
  let g;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((g = {
      overflows: false,
      above: false,
      below: false,
      hintTop: 0,
      hintBottom: 0,
    }),
      (t[3] = g));
  else g = t[3];
  let [h, y] = oy.useState(g),
    b;
  if (t[4] !== p || t[5] !== n)
    ((b = () => {
      let oe = n?.current;
      if (!oe) return;
      let re = oe.getFreshScrollHeight(),
        ee = oe.getViewportHeight() || p,
        ce = f.current?.getViewportTop() ?? 0,
        ae = f.current?.getViewportHeight() ?? 0,
        de = Math.max(0, oe.getViewportTop() - ce),
        Ee = Math.max(0, ae - de - ee),
        me = i.current !== null ? ee : p,
        pe = re > me,
        ge = oe.getScrollTop() + oe.getPendingDelta(),
        he = re - me > 2,
        ie = he && ge > 0,
        le = he && ge < re - ee;
      y((He) =>
        He.overflows === pe &&
        He.above === ie &&
        He.below === le &&
        He.hintTop === de &&
        He.hintBottom === Ee
          ? He
          : {
              overflows: pe,
              above: ie,
              below: le,
              hintTop: de,
              hintBottom: Ee,
            },
      );
    }),
      (t[4] = p),
      (t[5] = n),
      (t[6] = b));
  else b = t[6];
  let _ = b,
    S = oy.useRef(null),
    A = oy.useRef(null),
    { focusManager: v } = oy.useContext(J7),
    C;
  if (t[7] !== v)
    ((C = () => {
      let oe = S.current;
      if (!oe || !v) return;
      for (let ee = v.activeElement ?? void 0; ee; ee = ee.parentNode)
        if (ee === oe) {
          A.current = v.activeElement;
          return;
        }
      let re = A.current;
      for (let ee = re ?? void 0; ee; ee = ee.parentNode)
        if (ee === oe) {
          v.focus(re);
          return;
        }
      v.focus(oe);
    }),
      (t[7] = v),
      (t[8] = C));
  else C = t[8];
  let x = C,
    I;
  if (t[9] !== x) ((I = [x]), (t[9] = x), (t[10] = I));
  else I = t[10];
  oy.useEffect(x, I);
  let k = oy.useRef(null),
    D = oy.useRef(void 0),
    P,
    O;
  if (t[11] !== _ || t[12] !== n)
    ((P = () => (
      _(),
      (k.current = n?.current ?? null),
      (D.current = k.current?.subscribe(_)),
      () => {
        D.current?.();
      }
    )),
      (O = [_, n]),
      (t[11] = _),
      (t[12] = n),
      (t[13] = P),
      (t[14] = O));
  else ((P = t[13]), (O = t[14]));
  oy.useEffect(P, O);
  let L;
  if (t[15] !== _ || t[16] !== n || t[17] !== x)
    ((L = () => {
      let oe = n?.current ?? null;
      if (oe !== k.current) (D.current?.(), (k.current = oe), (D.current = oe?.subscribe(_)));
      (_(), x());
    }),
      (t[15] = _),
      (t[16] = n),
      (t[17] = x),
      (t[18] = L));
  else L = t[18];
  (Gc(L, 50), s?.rows, s?.columns);
  let M = s?.rows ?? r,
    N = s?.columns ?? 0,
    B = n ?? null,
    $;
  if (t[19] !== M || t[20] !== N || t[21] !== B)
    (($ = {
      rows: M,
      columns: N,
      scrollRef: B,
      claimScrollBox: u,
    }),
      (t[19] = M),
      (t[20] = N),
      (t[21] = B),
      (t[22] = $));
  else $ = t[22];
  let q = $,
    W;
  if (t[23] !== p || t[24] !== n)
    ((W = (oe) => {
      if (oe.defaultPrevented || oe.ctrl || oe.meta || oe.shift) return;
      let re = n?.current;
      if (!re) return;
      let ee = re.getFreshScrollHeight(),
        ce = re.getViewportHeight() || p,
        ae = i.current !== null ? ce : p;
      if (ee <= ae) return;
      if (oe.key === "up" || oe.key === "down")
        (re.scrollBy(oe.key === "down" ? 1 : -1), oe.preventDefault());
      else if (oe.key === "pageup" || oe.key === "pagedown") {
        let de = Math.max(1, ae);
        (re.scrollBy(oe.key === "pagedown" ? de : -de), oe.preventDefault());
      } else if (oe.key === "home") (re.scrollTo(0), oe.preventDefault());
      else if (oe.key === "end") (re.scrollToBottom(), oe.preventDefault());
    }),
      (t[23] = p),
      (t[24] = n),
      (t[25] = W));
  else W = t[25];
  let V = !d && h.overflows ? p : void 0,
    Y;
  if (t[26] !== o)
    ((Y = Od.jsx(U, {
      flexDirection: "column",
      paddingX: gbe,
      flexShrink: 0,
      children: o,
    })),
      (t[26] = o),
      (t[27] = Y));
  else Y = t[27];
  let z;
  if (t[28] !== V || t[29] !== Y)
    ((z = Od.jsx(Rq, {
      ref: f,
      flexDirection: "column",
      flexShrink: 0,
      height: V,
      stickyScroll: false,
      children: Y,
    })),
      (t[28] = V),
      (t[29] = Y),
      (t[30] = z));
  else z = t[30];
  let K;
  if (t[31] !== h.above || t[32] !== h.hintTop)
    ((K =
      h.above &&
      Od.jsx(U, {
        position: "absolute",
        top: h.hintTop,
        right: 1,
        children: Od.jsx(w, {
          dimColor: true,
          children: nt.arrowUp,
        }),
      })),
      (t[31] = h.above),
      (t[32] = h.hintTop),
      (t[33] = K));
  else K = t[33];
  let Z;
  if (t[34] !== h.below || t[35] !== h.hintBottom)
    ((Z =
      h.below &&
      Od.jsx(U, {
        position: "absolute",
        bottom: h.hintBottom,
        right: 1,
        children: Od.jsx(w, {
          dimColor: true,
          children: nt.arrowDown,
        }),
      })),
      (t[34] = h.below),
      (t[35] = h.hintBottom),
      (t[36] = Z));
  else Z = t[36];
  let J;
  if (t[37] !== W || t[38] !== z || t[39] !== K || t[40] !== Z)
    ((J = Od.jsxs(U, {
      ref: S,
      flexDirection: "column",
      flexShrink: 0,
      onKeyDown: W,
      children: [z, K, Z],
    })),
      (t[37] = W),
      (t[38] = z),
      (t[39] = K),
      (t[40] = Z),
      (t[41] = J));
  else J = t[41];
  let ne;
  if (t[42] !== q || t[43] !== J)
    ((ne = Od.jsx(Xj, {
      value: q,
      children: J,
    })),
      (t[42] = q),
      (t[43] = J),
      (t[44] = ne));
  else ne = t[44];
  return ne;
}
function nGf(e) {
  let t = tYe.c(13),
    { count: n, onClick: r } = e,
    [o, s] = oy.useState(false),
    i = Uu("scroll:bottom", "Scroll", "ctrl+end"),
    a;
  if (t[0] !== r)
    ((a = () => {
      (n1a(), r?.());
    }),
      (t[0] = r),
      (t[1] = a));
  else a = t[1];
  let l, c;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((l = () => s(true)), (c = () => s(false)), (t[2] = l), (t[3] = c));
  else ((l = t[2]), (c = t[3]));
  let u = o ? "userMessageBackgroundHover" : "userMessageBackground",
    d;
  if (t[4] !== n)
    ((d = n > 0 ? `${n} new ${bn(n, "message")}` : "Jump to bottom"), (t[4] = n), (t[5] = d));
  else d = t[5];
  let p;
  if (t[6] !== i || t[7] !== u || t[8] !== d)
    ((p = Od.jsxs(pE, {
      color: u,
      textColor: "text",
      padded: true,
      children: [d, " ", "(", i, ") ", nt.arrowDown],
    })),
      (t[6] = i),
      (t[7] = u),
      (t[8] = d),
      (t[9] = p));
  else p = t[9];
  let f;
  if (t[10] !== a || t[11] !== p)
    ((f = Od.jsx(U, {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: "center",
      children: Od.jsx(U, {
        noSelect: true,
        onClick: a,
        onMouseEnter: l,
        onMouseLeave: c,
        children: p,
      }),
    })),
      (t[10] = a),
      (t[11] = p),
      (t[12] = f));
  else f = t[12];
  return f;
}
function rGf(e) {
  let t = tYe.c(8),
    { text: n, onClick: r } = e,
    [o, s] = oy.useState(false),
    i = o ? "userMessageBackgroundHover" : "userMessageBackground",
    a,
    l;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((a = () => s(true)), (l = () => s(false)), (t[0] = a), (t[1] = l));
  else ((a = t[0]), (l = t[1]));
  let c;
  if (t[2] !== n)
    ((c = Od.jsxs(w, {
      color: "subtle",
      wrap: "truncate-end",
      children: [nt.pointer, " ", n],
    })),
      (t[2] = n),
      (t[3] = c));
  else c = t[3];
  let u;
  if (t[4] !== r || t[5] !== i || t[6] !== c)
    ((u = Od.jsx(U, {
      flexShrink: 0,
      width: "100%",
      height: 1,
      paddingRight: 1,
      backgroundColor: i,
      onClick: r,
      onMouseEnter: a,
      onMouseLeave: l,
      children: c,
    })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c),
      (t[7] = u));
  else u = t[7];
  return u;
}
function aVl() {
  let e = tYe.c(8),
    t = Uql();
  if (!t || (t.suggestions.length === 0 && !t.emptyMessage)) return null;
  let n;
  if (
    e[0] !== t.emptyMessage ||
    e[1] !== t.hoveredId ||
    e[2] !== t.maxColumnWidth ||
    e[3] !== t.onHoverChange ||
    e[4] !== t.onSelect ||
    e[5] !== t.selectedSuggestion ||
    e[6] !== t.suggestions
  )
    ((n = Od.jsx(U, {
      position: "absolute",
      bottom: "100%",
      left: 0,
      right: 0,
      paddingX: 2,
      paddingTop: 1,
      flexDirection: "column",
      opaque: true,
      children: Od.jsx(Bzi, {
        suggestions: t.suggestions,
        selectedSuggestion: t.selectedSuggestion,
        maxColumnWidth: t.maxColumnWidth,
        emptyMessage: t.emptyMessage,
        hoveredId: t.hoveredId,
        onSelect: t.onSelect,
        onHoverChange: t.onHoverChange,
        overlay: true,
        noPad: true,
      }),
    })),
      (e[0] = t.emptyMessage),
      (e[1] = t.hoveredId),
      (e[2] = t.maxColumnWidth),
      (e[3] = t.onHoverChange),
      (e[4] = t.onSelect),
      (e[5] = t.selectedSuggestion),
      (e[6] = t.suggestions),
      (e[7] = n));
  else n = e[7];
  return n;
}
function lVl() {
  let e = tYe.c(2),
    t = Fql();
  if (!t) return null;
  let n;
  if (e[0] !== t)
    ((n = Od.jsx(U, {
      position: "absolute",
      bottom: "100%",
      left: 0,
      right: 0,
      opaque: true,
      children: t,
    })),
      (e[0] = t),
      (e[1] = n));
  else n = e[1];
  return n;
}
var tYe,
  oy,
  Od,
  H2o = 2,
  $or;
