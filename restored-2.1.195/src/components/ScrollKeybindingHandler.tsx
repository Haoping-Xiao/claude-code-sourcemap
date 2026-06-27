// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rnr
// matched 2.1.88 source: src/components/ScrollKeybindingHandler.tsx
// class=modified  jaccard=0.3314  score=0.558  fileCov=0.4494
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var rnr = E(() => {
  ((R1l = R(lt(), 1)),
    (yEt = R(rt(), 1)),
    (P1l = R(se(), 1)),
    (L1l = yEt.createContext({
      setHandler: () => {},
      tryDelete: () => false,
    })));
});
function UMf(e, t) {
  if (t.upArrow || t.downArrow || t.home || t.end) return true;
  if (e.length !== 1) return false;
  if (t.ctrl) return "udbfnp".includes(e);
  return "jkgGb {}".includes(e);
}
function N1l(e, t, n) {
  if (y4i()) {
    let a = n - e.time;
    if (!e.jbBypass || a > j7r) ((e.jbBypass = true), (e.frac = 0), (e.mult = 1));
    else if (t !== e.dir) e.frac = 0;
    ((e.dir = t), (e.time = n));
    let l = h4i();
    if (e.accelEnabled) e.mult = Math.min(WMf, e.mult + jMf + l * GMf);
    e.frac += FMf * e.mult;
    let c = Math.floor(e.frac);
    return ((e.frac -= c), c);
  }
  if (e.jbBypass)
    ((e.jbBypass = false),
      (e.pendingFlip = false),
      (e.wheelMode = false),
      (e.burstCount = 0),
      (e.frac = 0),
      (e.dir = 0));
  if (!e.useDecayCurve) {
    if (e.wheelFlood) {
      let l = n - e.time;
      return (
        (e.time = n),
        (e.dir = t),
        (e.mult = l > M1l ? e.base * xMf : e.base),
        Math.max(1, Math.floor(e.mult))
      );
    }
    if (e.wheelMode && n - e.time > PMf)
      ((e.wheelMode = false), (e.burstCount = 0), (e.mult = e.base));
    if (e.pendingFlip) {
      if (((e.pendingFlip = false), t !== e.dir || n - e.time > kMf))
        return ((e.dir = t), (e.time = n), (e.mult = e.base), Math.max(1, Math.floor(e.mult)));
      e.wheelMode = true;
    }
    let a = n - e.time;
    if (t !== e.dir && e.dir !== 0) return ((e.pendingFlip = true), (e.time = n), 0);
    if (((e.dir = t), (e.time = n), e.wheelMode))
      if (a < O1l) {
        if (++e.burstCount >= 5) ((e.wheelMode = false), (e.burstCount = 0), (e.mult = e.base));
        else return 1;
      } else e.burstCount = 0;
    if (e.wheelMode && e.accelEnabled) {
      let l = Math.pow(0.5, a / $1l),
        c = Math.max(LMf * Math.min(e.base, 1), e.base * 2),
        u = 1 + (e.mult - 1) * l + RMf * l;
      return ((e.mult = Math.min(c, u, e.mult + DMf)), Math.max(1, Math.floor(e.mult)));
    }
    if (a > M1l || !e.accelEnabled) e.mult = e.base;
    else {
      let l = Math.max(IMf * Math.min(e.base, 1), e.base * 2);
      e.mult = Math.min(l, e.mult + CMf);
    }
    return Math.max(1, Math.floor(e.mult));
  }
  let r = n - e.time,
    o = t === e.dir;
  if (((e.time = n), (e.dir = t), o && r < O1l)) return 1;
  if (!e.accelEnabled) return Math.max(1, Math.floor(e.base));
  if (!o || r > BMf) ((e.mult = Math.max(2, e.base)), (e.frac = 0));
  else {
    let a = Math.pow(0.5, r / $1l),
      l = r >= $Mf ? OMf : NMf;
    e.mult = Math.min(l, 1 + (e.mult - 1) * a + MMf * a);
  }
  let s = e.mult + e.frac,
    i = Math.floor(s);
  return ((e.frac = s - i), i);
}
function qMf(e = false, t = 1, n = false, r = true) {
  return {
    time: 0,
    mult: t,
    dir: 0,
    useDecayCurve: e,
    frac: 0,
    base: t,
    pendingFlip: false,
    wheelMode: false,
    burstCount: 0,
    jbBypass: false,
    wheelFlood: n,
    accelEnabled: r,
  };
}
function B1l() {
  let e = T1(),
    t = wc("wheelScrollAccelerationEnabled", true).value;
  return (
    T(
      `wheel accel: ${e.useDecayCurve ? "decay" : "window (native)"} \xB7 base=${e.base} \xB7 platform=${e.platform} \xB7 TERM_PROGRAM=${e.termProgram}${e.wheelFlood ? " \xB7 wheelFlood" : ""}${e.jediTerm ? " \xB7 jediTerm" : ""}${BRn() ? " \xB7 jbBugConfirmed" : ""}${t ? "" : " \xB7 accelDisabled"}`,
    ),
    qMf(e.useDecayCurve, e.base, e.wheelFlood, t)
  );
}
function yNo({ scrollRef: e, isActive: t, onScroll: n, isModal: r = false }) {
  let o = Z_e(),
    s = nnr(),
    { addNotification: i } = Li(),
    a = EPn(),
    l = t && !a,
    c = Lq.useRef(null),
    u = Lq.useRef(null),
    d = Lq.useRef(-1),
    p = Lq.useRef(null);
  ZMf(i);
  function f(b, _ = false) {
    let S = Ztr(b);
    if (_ && JNt() === "native" && Dt().copyOnSelect === void 0) {
      if (d.current === -1)
        if (Spe(j1l) >= zMf) (uht(j1l), (d.current = 0));
        else d.current = G1l;
      if (d.current < G1l) {
        (d.current++,
          i({
            ...S,
            text: `${S.text} \xB7 disable auto-copy in /config`,
            timeoutMs: Math.max(S.timeoutMs, 4000),
          }));
        return;
      }
    }
    i(S);
  }
  function m() {
    let b = o.copySelection();
    if (b) f(b);
  }
  let g = n != null;
  No(
    {
      "scroll:pageUp": () => {
        let b = e.current;
        if (!b) return;
        if (g) i4n();
        let _ = -Math.max(1, Math.floor(b.getViewportHeight() / 2)),
          S = Ofe(b, _, g);
        n?.(S, b);
      },
      "scroll:pageDown": () => {
        let b = e.current;
        if (!b) return;
        if (g) i4n();
        let _ = Math.max(1, Math.floor(b.getViewportHeight() / 2)),
          S = Ofe(b, _, g);
        n?.(S, b);
      },
      "scroll:lineUp": () => {
        let b = e.current;
        if (!b || b.getScrollHeight() <= b.getViewportHeight()) return false;
        if (T1() !== u.current) ((u.current = T1()), (c.current = null));
        if (g) s4n();
        ((c.current ??= B1l()), (c.current.base = T1().base));
        let _ = performance.now(),
          S = N1l(c.current, -1, _);
        (HJr(b), AJr(-1, S, c.current, _), JMf(b, S, g), n?.(false, b));
      },
      "scroll:lineDown": () => {
        let b = e.current;
        if (!b || b.getScrollHeight() <= b.getViewportHeight()) return false;
        if (T1() !== u.current) ((u.current = T1()), (c.current = null));
        if (g) s4n();
        ((c.current ??= B1l()), (c.current.base = T1().base));
        let _ = performance.now(),
          S = N1l(c.current, 1, _);
        (HJr(b), AJr(1, S, c.current, _));
        let A = XMf(b, S);
        n?.(A, b);
      },
      "scroll:top": () => {
        let b = e.current;
        if (!b) return;
        if (g) TWt();
        (b.scrollTo(0), n?.(false, b));
      },
      "scroll:bottom": () => {
        let b = e.current;
        if (!b) return;
        (b.scrollToBottom(), n?.(true, b));
      },
      "selection:copy": m,
    },
    {
      context: "Scroll",
      isActive: l,
    },
  );
  function h(b) {
    let _ = e.current;
    if (!_) return;
    if (g) {
      if (b === "lineUp" || b === "lineDown") s4n();
      else if (b === "top") TWt();
      else if (b !== "bottom") i4n();
    }
    let S = QMf(_, b, g);
    if (S === null) return;
    n?.(S, _);
  }
  (No(
    {
      "scroll:halfPageUp": () => h("halfPageUp"),
      "scroll:halfPageDown": () => h("halfPageDown"),
      "scroll:fullPageUp": () => h("fullPageUp"),
      "scroll:fullPageDown": () => h("fullPageDown"),
    },
    {
      context: "Scroll",
      isActive: l,
    },
  ),
    No(
      {
        "scroll:lineUp": () => h("lineUp"),
        "scroll:lineDown": () => h("lineDown"),
        "scroll:halfPageUp": () => h("halfPageUp"),
        "scroll:halfPageDown": () => h("halfPageDown"),
        "scroll:fullPageUp": () => h("fullPageUp"),
        "scroll:fullPageDown": () => h("fullPageDown"),
        "scroll:top": () => h("top"),
        "scroll:bottom": () => h("bottom"),
      },
      {
        context: "Transcript",
        isActive: l && r,
      },
    ));
  function y(b) {
    if (!o.hasSelection()) return false;
    let _ = o.getState();
    if (_ && i0e(_)) return;
    if (b === "up" || b === "down") {
      let S = e.current;
      if (S && _?.anchor && _.focus) {
        let A = S.getViewportTop(),
          v = A + S.getViewportHeight() - 1,
          C = _.anchor.row >= A && _.anchor.row <= v,
          x = C && b === "up" && _.focus.row <= A,
          I = C && b === "down" && _.focus.row >= v;
        if (x || I) {
          let k = Math.max(0, S.getScrollHeight() - S.getViewportHeight()),
            D = x ? S.getScrollTop() > 0 : S.getScrollTop() < k;
          if (S.getPendingDelta() === 0 && D)
            ((p.current = null),
              (_.focus = {
                col: _.focus.col,
                row: x ? A : v,
              }),
              (_.virtualFocusRow = x ? A - 1 : v + 1),
              (_.virtualFocusCol = void 0),
              S.scrollBy(x ? -1 : 1),
              n?.(false, S));
          return;
        }
      }
    }
    o.moveFocus(b);
  }
  return (
    No(
      {
        "selection:extendLeft": () => y("left"),
        "selection:extendRight": () => y("right"),
        "selection:extendUp": () => y("up"),
        "selection:extendDown": () => y("down"),
        "selection:extendLineStart": () => y("lineStart"),
        "selection:extendLineEnd": () => y("lineEnd"),
      },
      {
        context: "Scroll",
        isActive: l,
      },
    ),
    Zat(
      (b, _) => {
        if (!o.hasSelection()) return;
        if (_.escape) return (o.clearSelection(), true);
        if (_.ctrl && !_.shift && !_.meta && b === "c") {
          let S = p.current;
          if (S !== null) (o.clearSelection(), f(S));
          else m();
          return true;
        }
        if (r && UMf(b, _)) return;
        if (!r && (_.backspace || _.delete) && !_.ctrl && !_.meta && !_.shift && !_.super) {
          let S = o.getState();
          if (S && s.tryDelete(S)) return (o.clearSelection(), true);
        }
        if (x1l(_)) o.clearSelection();
      },
      {
        isActive: l,
      },
    ),
    KMf(e, o, l, n),
    enr(o, l, (b) => f(b, true), p),
    tnr(o),
    null
  );
}
function KMf(e, t, n, r) {
  let o = ks(),
    s = Lq.useRef(null),
    i = Lq.useRef(0),
    a = Lq.useRef(0),
    l = Lq.useRef(0),
    c = Lq.useRef(r);
  ((c.current = r),
    Lq.useEffect(() => {
      if (!n) return;
      function u() {
        ((i.current = 0), s.current?.(), (s.current = null));
      }
      function d() {
        let g = t.getState(),
          h = e.current,
          y = i.current;
        if (!g?.isDragging || !g.focus || !h || y === 0 || ++l.current > VMf) {
          u();
          return;
        }
        if (h.getPendingDelta() !== 0) return;
        if (y < 0) {
          if (h.getScrollTop() <= 0) {
            u();
            return;
          }
          h.scrollBy(-U1l);
        } else {
          let b = Math.max(0, h.getScrollHeight() - h.getViewportHeight());
          if (h.getScrollTop() >= b) {
            u();
            return;
          }
          h.scrollBy(U1l);
        }
        c.current?.(false, h);
      }
      function p(g) {
        if (((a.current = g), i.current === g)) return;
        if ((u(), (i.current = g), (l.current = 0), d(), i.current === g)) {
          let h = () => {
            if ((d(), i.current !== 0)) s.current = o.setTimeout(h, F1l);
          };
          s.current = o.setTimeout(h, F1l);
        }
      }
      function f() {
        let g = e.current;
        if (!g) {
          u();
          return;
        }
        let h = g.getViewportTop(),
          y = h + g.getViewportHeight() - 1,
          b = t.getState();
        if (!b?.isDragging || (b.scrolledOffAbove.length === 0 && b.scrolledOffBelow.length === 0))
          a.current = 0;
        let _ = YMf(b, h, y, a.current);
        if (_ === 0) {
          if (a.current !== 0 && b?.focus) {
            let S = b.focus.row < h ? -1 : b.focus.row > y ? 1 : 0;
            if (S !== 0 && S !== a.current)
              ((b.scrolledOffAbove = []),
                (b.scrolledOffBelow = []),
                (b.scrolledOffAboveSW = []),
                (b.scrolledOffBelowSW = []),
                (a.current = 0));
          }
          u();
        } else p(_);
      }
      let m = t.subscribe(f);
      return () => {
        (m(), u(), (a.current = 0));
      };
    }, [o, n, e, t]));
}
function YMf(e, t, n, r = 0) {
  if (!e?.isDragging || !e.anchor || !e.focus) return 0;
  let o = e.focus.row,
    s = o < t ? -1 : o > n ? 1 : 0;
  if (r !== 0) return s === r ? s : 0;
  if (e.anchor.row < t || e.anchor.row > n) return 0;
  return s;
}
function q1l(e) {
  if (wc("autoScrollEnabled", true).value) e.scrollToBottom();
  else e.scrollTo(Math.max(0, e.getScrollHeight() - e.getViewportHeight()));
  return true;
}
function Ofe(e, t, n = true) {
  let r = Math.max(0, e.getScrollHeight() - e.getViewportHeight()),
    o = e.getScrollTop() + e.getPendingDelta() + t;
  if (o >= r) return q1l(e);
  if (o <= 0 && n) TWt();
  return (e.scrollTo(Math.max(0, o)), false);
}
function XMf(e, t) {
  let n = Math.max(0, e.getScrollHeight() - e.getViewportHeight());
  if (e.getScrollTop() + e.getPendingDelta() + t >= n) return q1l(e);
  return (e.scrollBy(t), false);
}
function JMf(e, t, n = true) {
  if (e.getScrollTop() + e.getPendingDelta() - t <= 0) {
    if (n) TWt();
    e.scrollTo(0);
    return;
  }
  e.scrollBy(-t);
}
function QMf(e, t, n = true) {
  switch (t) {
    case null:
      return null;
    case "lineUp":
    case "lineDown":
      return Ofe(e, t === "lineDown" ? 1 : -1, n);
    case "halfPageUp":
    case "halfPageDown": {
      let r = Math.max(1, Math.floor(e.getViewportHeight() / 2));
      return Ofe(e, t === "halfPageDown" ? r : -r, n);
    }
    case "fullPageUp":
    case "fullPageDown": {
      let r = Math.max(1, e.getViewportHeight());
      return Ofe(e, t === "fullPageDown" ? r : -r, n);
    }
    case "top":
      return (e.scrollTo(0), false);
    case "bottom":
      return (e.scrollToBottom(), true);
  }
}
function ZMf(e) {
  let t = W1l.c(5),
    { internal_eventEmitter: n } = s8(),
    r = ks(),
    o = Lq.useRef(false),
    s,
    i;
  if (t[0] !== e || t[1] !== r || t[2] !== n)
    ((s = () => {
      let a = function (u) {
          if (!o.current)
            ((o.current = true),
              G("tengu_scroll_arrows_detected", {
                count: u.count,
                up: u.direction === "up",
              }));
          r.setTimeout(
            () =>
              e({
                key: "scroll-as-arrows",
                kind: "contextual",
                priority: "immediate",
                text: "Scroll wheel is sending arrow keys \xB7 use PgUp/PgDn to scroll",
                color: "warning",
                timeoutMs: 12000,
              }),
            200,
          );
        },
        l = function () {
          (G("tengu_jediterm_scroll_bug_detected", {}),
            e({
              key: "jediterm-scroll-bug",
              kind: "contextual",
              priority: "immediate",
              text: "Scroll support in JetBrains IDE 2025.2 terminals is experimental \xB7 upgrade to 2025.3+ for the best experience",
              color: "suggestion",
              timeoutMs: 15000,
            }));
        };
      return (
        n.on("arrow-burst", a),
        n.on("jediterm-scroll-bug", l),
        () => {
          (n.off("arrow-burst", a), n.off("jediterm-scroll-bug", l));
        }
      );
    }),
      (i = [n, e, r]),
      (t[0] = e),
      (t[1] = r),
      (t[2] = n),
      (t[3] = s),
      (t[4] = i));
  else ((s = t[3]), (i = t[4]));
  Lq.useEffect(s, i);
}
var W1l,
  Lq,
  M1l = 40,
  CMf = 0.3,
  IMf = 6,
  xMf = 3,
  kMf = 200,
  RMf = 15,
  LMf = 15,
  DMf = 3,
  PMf = 1500,
  $1l = 150,
  MMf = 7,
  O1l = 5,
  $Mf = 80,
  OMf = 3,
  NMf = 36,
  BMf = 500,
  FMf = 0.35,
  jMf = 0.008,
  GMf = 0.4,
  WMf = 4,
  U1l = 2,
  F1l = 50,
  VMf = 200,
  j1l = "auto-copy-config-hint",
  zMf = 10,
  G1l = 5;
