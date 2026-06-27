// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module adr
// matched 2.1.88 source: src/hooks/useArrowKeyHistory.tsx
// class=modified  jaccard=0.3692  score=0.6509  fileCov=0.4604
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var adr = E(() => {
  si();
  Ed();
  kt();
  uo();
  ft();
  nbe();
  HN();
  Cen();
  Ye();
  id();
  mLe();
  Vyt();
  ZU();
  X8o();
  oo();
  QOe();
  fn();
  es();
  jjt();
  aE();
  e6o();
  Cc();
  n6o();
  Ahc();
  Pzn();
  vhc();
  Ihc();
  Rhc();
  ((jhc = R(lt(), 1)),
    (SNe = R(rt(), 1)),
    (sy = R(se(), 1)),
    (Fdm = (tdr(), ro(Lhc)).VoiceIndicator),
    (jdm = (Uhc(), ro(Bhc)).ClosedIssueNotice));
});
async function Xdm(e, t) {
  let n = Math.ceil(e / Ghc) * Ghc;
  if (p7e && ldr >= n && i6o === t) return p7e;
  if (p7e) await p7e;
  ((ldr = n),
    (i6o = t),
    (p7e = (async () => {
      let r = [],
        o = 0;
      for await (let s of QDn()) {
        if (t) {
          if (ek(s.display) !== t) continue;
        }
        if ((r.push(s), o++, o >= ldr)) break;
      }
      return r;
    })()));
  try {
    return await p7e;
  } finally {
    ((p7e = null), (ldr = 0), (i6o = void 0));
  }
}
function Whc(e, t, n, r, o, s) {
  let [i, a] = wS.useState(0),
    [l, c] = wS.useState(null),
    u = wS.useRef(0),
    d = wS.useRef(false),
    [p, f] = wS.useState(void 0),
    m = wS.useRef(false),
    { addNotification: g, removeNotification: h } = Li(),
    y = wS.useRef([]),
    b = wS.useRef(void 0),
    _ = wS.useRef(0),
    S = wS.useRef(null),
    A = wS.useRef(void 0),
    v = wS.useRef(new Map()),
    C = wS.useRef(0),
    x = wS.useRef(false),
    I = wS.useRef(0),
    k = wS.useRef(t),
    D = wS.useRef(n),
    P = wS.useRef(o),
    O = wS.useRef(s);
  ((k.current = t), (D.current = n), (P.current = o), (O.current = s));
  let L = wS.useCallback(
      (Y, z, K, Z) => {
        ((S.current = Y),
          e(Y, z, K),
          r(Z === "end" ? Y.length : 0),
          (k.current = Y),
          (D.current = K),
          (P.current = z));
      },
      [e, r],
    ),
    M = wS.useCallback(
      (Y, z) => {
        if (!Y || !Y.display) return false;
        let K = ek(Y.display),
          Z = K === "bash" ? Y.display.slice(1) : Y.display;
        return (L(Z, K, Y.pastedContents ?? {}, z), true);
      },
      [L],
    ),
    N = wS.useCallback(
      (Y, z) => {
        let K = v.current.get(Y);
        if (K) return (L(K.display, K.mode, K.pastedContents, z), true);
        return M(y.current[Y], z);
      },
      [L, M],
    ),
    B = wS.useCallback(() => {
      g({
        key: "search-history-hint",
        kind: "contextual",
        jsx: a6o.jsx(w, {
          dimColor: true,
          children: a6o.jsx(mr, {
            action: "history:search",
            context: "Global",
            fallback: "ctrl+r",
            description: "search history",
          }),
        }),
        priority: "immediate",
        timeoutMs: sdr,
      });
    }, [g]),
    $ = wS.useCallback(() => {
      let Y = _.current,
        z = k.current,
        K = D.current,
        Z = P.current,
        J = C.current === 0;
      if (Y === 0) A.current = Z === "bash" ? Z : void 0;
      let ne = A.current;
      if (b.current !== ne)
        ((y.current = []),
          (b.current = ne),
          v.current.clear(),
          u.current++,
          (d.current = false),
          c(null));
      let oe = O.current;
      if (oe) {
        let ce = ne ? oe.filter((de) => ek(de.display) === ne) : oe,
          ae = y.current;
        if (ce.length > ae.length) {
          let de = ce.length - ae.length;
          if (ae.length === 0 || ce[de]?.display === ae[0]?.display) {
            if (_.current > 0) ((_.current += de), a(_.current));
            if (C.current > 0) C.current += de;
            if (v.current.size > 0)
              v.current = new Map([...v.current].map(([Ee, me]) => [Ee + de, me]));
          } else ((_.current = 0), a(0), (C.current = 0), v.current.clear());
          ((y.current = ce), (Y = _.current));
        }
        c(y.current.length);
      }
      if (Y === 0 && !oe && !d.current) {
        d.current = true;
        let ce = u.current;
        X8i(ne ? (ae) => ek(ae) === ne : void 0).then((ae) => {
          if (u.current !== ce) return;
          ((d.current = false), c(ae));
        });
      }
      let re = () => {
        if (_.current !== Y) return;
        if (Y >= y.current.length) return;
        if (Y === 0) {
          if (J) {
            let ae = z.trim() !== "";
            f(
              ae
                ? {
                    display: z,
                    pastedContents: K,
                    mode: Z,
                  }
                : void 0,
            );
          }
        } else if (Y === C.current)
          v.current.set(Y - 1, {
            display: z,
            pastedContents: K,
            mode: Z,
          });
        let ce = Y + 1;
        if (((_.current = ce), a(ce), N(Y, "end"))) C.current = ce;
        if (ce >= 2 && !oe && !m.current) ((m.current = true), B());
      };
      if (Y < y.current.length || oe) {
        re();
        return;
      }
      x.current = true;
      let ee = ++I.current;
      (async () => {
        try {
          let ce = await Xdm(Y + 1, ne);
          if (I.current !== ee) return;
          if (ce.length > y.current.length && b.current === ne) y.current = ce;
          re();
        } catch {
        } finally {
          if (I.current === ee) x.current = false;
        }
      })();
    }, [N, B]),
    q = wS.useCallback(() => {
      let Y = x.current;
      if (Y) (I.current++, (x.current = false));
      let z = _.current;
      if (z > 0 && z === C.current)
        v.current.set(z - 1, {
          display: k.current,
          pastedContents: D.current,
          mode: P.current,
        });
      if (z > 1) {
        if ((_.current--, a(z - 1), N(z - 2, "start"))) C.current = z - 1;
      } else if (z === 1) {
        if (((_.current = 0), a(0), p)) L(p.display, p.mode, p.pastedContents ?? {}, "start");
        else L("", A.current ?? "prompt", {}, "start");
        C.current = 0;
      }
      return z <= 0 && !Y;
    }, [p, N, L]),
    W = wS.useCallback(() => {
      (f(void 0),
        a(0),
        c(null),
        u.current++,
        (d.current = false),
        (_.current = 0),
        (C.current = 0),
        I.current++,
        (x.current = false),
        (S.current = null),
        (A.current = void 0),
        h("search-history-hint"),
        (y.current = []),
        (b.current = void 0),
        v.current.clear());
    }, [h]),
    V = wS.useCallback(() => {
      h("search-history-hint");
    }, [h]);
  return {
    historyIndex: i,
    historyTotal: l,
    historyEdited: i > 0 && t !== S.current,
    setHistoryIndex: a,
    onHistoryUp: $,
    onHistoryDown: q,
    resetHistory: W,
    dismissSearchHint: V,
  };
}
var wS,
  a6o,
  Ghc = 10,
  p7e = null,
  ldr = 0,
  i6o = void 0;
