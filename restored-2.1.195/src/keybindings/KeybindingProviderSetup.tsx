// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G1a
// matched 2.1.88 source: src/keybindings/KeybindingProviderSetup.tsx
// class=modified  jaccard=0.1932  score=0.2842  fileCov=0.3762
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: KeybindingSetup, KeybindingRoot, CHORD_TIMEOUT_MS
// [unwrapped __esm module G1a] deps: kt
j1a = new Map();
function KeybindingSetup(e) {
  let t = Fho.c(4),
    { children: n } = e;
  if (KE()) {
    let s;
    if (t[0] !== n)
      ((s = ePe.jsx(ePe.Fragment, {
        children: n,
      })),
        (t[0] = n),
        (t[1] = s));
    else s = t[1];
    return s;
  }
  let o;
  if (t[2] !== n)
    ((o = ePe.jsx(XPp, {
      children: n,
    })),
      (t[2] = n),
      (t[3] = o));
  else o = t[3];
  return o;
}
function XPp({ children: e }) {
  let [{ bindings: t }, n] = qI.useState(() => {
      let h = lUt(Gj);
      return (
        T(
          `[keybindings] KeybindingSetup initialized with ${h.bindings.length} bindings, ${h.warnings.length} warnings`,
        ),
        h
      );
    }),
    r = ks(),
    o = qI.useRef(null),
    [s, i] = qI.useState(null),
    a = qI.useRef(null),
    l = qI.useRef(new Map()),
    c = qI.useRef(new Set()),
    u = qI.useRef(new Set()),
    [d] = qI.useState(dPn),
    p = qI.useCallback((h) => {
      c.current.add(h);
    }, []),
    f = qI.useCallback((h) => {
      c.current.delete(h);
    }, []),
    m = qI.useCallback(() => {
      (a.current?.(), (a.current = null));
    }, []),
    g = qI.useCallback(
      (h) => {
        if ((m(), h !== null))
          a.current = r.setTimeout(() => {
            (T("[keybindings] Chord timeout - cancelling"), (o.current = null), i(null));
          }, CHORD_TIMEOUT_MS);
        ((o.current = h), i(h));
      },
      [m, r],
    );
  return (
    qI.useEffect(() => {
      hqi(Gj);
      let h = Gj.changed.subscribe((y) => {
        (n(y),
          T(
            `[keybindings] Reloaded: ${y.bindings.length} bindings, ${y.warnings.length} warnings`,
          ));
      });
      return () => {
        (h(), m());
      };
    }, [m]),
    ePe.jsx(pPn, {
      bindings: t,
      pendingChordRef: o,
      pendingChord: s,
      setPendingChord: g,
      activeContexts: c.current,
      registerActiveContext: p,
      unregisterActiveContext: f,
      handlerRegistryRef: l,
      preDispatchRef: u,
      keyHandlerRegistry: d,
      children: ePe.jsx(KeybindingRoot, {
        bindings: t,
        pendingChordRef: o,
        setPendingChord: g,
        activeContexts: c.current,
        handlerRegistryRef: l,
        preDispatchRef: u,
        keyHandlerRegistry: d,
        children: e,
      }),
    })
  );
}
function KeybindingRoot(e) {
  let t = Fho.c(28),
    {
      bindings: n,
      pendingChordRef: r,
      setPendingChord: o,
      activeContexts: s,
      handlerRegistryRef: i,
      preDispatchRef: a,
      keyHandlerRegistry: l,
      children: c,
    } = e,
    u;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((u = []), (t[0] = u));
  else u = t[0];
  let d = qI.useRef(u),
    p = qI.useRef(null),
    f = qI.useRef("legacy"),
    m;
  if (t[1] !== a)
    ((m = (P, O, L, M) => {
      for (let N of a.current)
        try {
          if (N(P, O, L) === true) return (M(), true);
        } catch (B) {
          ke(B);
        }
      return false;
    }),
      (t[1] = a),
      (t[2] = m));
  else m = t[2];
  let g = m,
    h;
  if (t[3] !== s || t[4] !== n || t[5] !== i || t[6] !== r || t[7] !== g || t[8] !== o)
    ((h = (P, O, L, M, N, B) => {
      let $ = B === void 0 ? false : B,
        q = i.current,
        W = new Set();
      if (q) for (let Z of q.values()) for (let J of Z) W.add(J.context);
      let V = [...W, ...s, "Global"],
        Y = r.current !== null,
        z = cUt(P, V, n, r.current);
      e: switch (z.type) {
        case "chord_started": {
          ((f.current = "legacy"), o(z.pending), N());
          return;
        }
        case "chord_cancelled": {
          (o(null), N());
          return;
        }
        case "unbound": {
          if ((o(null), Y)) {
            N();
            return;
          }
          break e;
        }
        case "match": {
          if ((o(null), Y)) {
            let Z = q?.get(z.action);
            if (Z)
              for (let J of Z) {
                (J.handler(), yVe(z.action), N());
                break;
              }
            return;
          }
          break e;
        }
        case "none":
      }
      if (!q) return;
      if (!$ && g(O, L, M, N)) return;
      let K = new Map();
      for (let Z of q.values())
        for (let J of Z) {
          if (!J.singleKey) continue;
          let ne = K.get(J.context);
          if (ne === void 0) {
            let oe = cUt(P, [...s, J.context, "Global"], n, null);
            ((ne = oe.type === "match" ? oe.action : null), K.set(J.context, ne));
          }
          if (ne === J.action) {
            if (J.handler() !== false) {
              (yVe(ne), N());
              return;
            }
          }
        }
    }),
      (t[3] = s),
      (t[4] = n),
      (t[5] = i),
      (t[6] = r),
      (t[7] = g),
      (t[8] = o),
      (t[9] = h));
  else h = t[9];
  let y = h,
    b;
  if (
    t[10] !== n ||
    t[11] !== i ||
    t[12] !== l ||
    t[13] !== y ||
    t[14] !== r ||
    t[15] !== g ||
    t[16] !== o
  )
    ((b = (P, O, L, M, N, B) => {
      let $ = l,
        q = (K, Z) => {};
      if ($.swallowAll.size > 0) {
        (q(null, true), B());
        return;
      }
      if (r.current !== null && f.current === "legacy") {
        (q(null, false), y(O, L, M, N, B));
        return;
      }
      let W = ZPp(P.target),
        V = r.current !== null && f.current === "scopeChain";
      if (W.length === 0 && $.preemptiveScopes.size === 0 && !V) {
        (q(null, false), y(O, L, M, N, B));
        return;
      }
      let Y = y4n(P.target);
      if ($.preemptiveScopes.size > 0 && !V) {
        let K = [...$.preemptiveScopes.keys(), "Global"],
          Z = oDn(O, K, n, null);
        if (Z.type === "match" && Y) {
          if (Uho(Y, P, Z.action, false, P.type === "wheel" ? "wheel" : "single")) {
            (q(Z.action, true), yVe(Z.action));
            return;
          }
        }
      }
      if (V) {
        let K = oDn(O, d.current, n, r.current);
        if (K.type === "chord_started") {
          ((f.current = "scopeChain"), o(K.pending), B(), q(null, true));
          return;
        }
        if (K.type === "match") {
          o(null);
          let Z = p.current;
          ((p.current = null), (d.current = []));
          let J = Z && Y && _ne(Z, zit(Y)) ? Z : Y;
          if (J) {
            if (Uho(J, P, K.action, true, "chord")) {
              (q(K.action, true), yVe(K.action));
              return;
            }
          }
          let ne = false,
            oe = i.current?.get(K.action);
          if (oe)
            for (let re of oe) {
              (re.handler(), yVe(K.action), B(), (ne = true));
              break;
            }
          q(K.action, ne);
          return;
        }
        ((p.current = null), (d.current = []), q(null, false), y(O, L, M, N, B));
        return;
      }
      let z = oDn(O, W, n, null);
      switch (z.type) {
        case "chord_started": {
          ((d.current = W),
            (p.current = Y ?? null),
            (f.current = "scopeChain"),
            o(z.pending),
            B(),
            q(null, true));
          return;
        }
        case "match": {
          if (!Y) {
            (q(z.action, false), y(O, L, M, N, B));
            return;
          }
          if (g(L, M, N, B)) {
            (o(null), q(z.action, true));
            return;
          }
          if (Uho(Y, P, z.action, false, P.type === "wheel" ? "wheel" : "single")) {
            (o(null), q(z.action, true), yVe(z.action));
            return;
          }
          (q(z.action, false), y(O, L, M, N, B, true));
          return;
        }
        case "unbound": {
          if (g(L, M, N, B)) {
            (o(null), q(null, true));
            return;
          }
          (o(null), q(null, false));
          return;
        }
        default: {
          (q(null, false), y(O, L, M, N, B));
          return;
        }
      }
    }),
      (t[10] = n),
      (t[11] = i),
      (t[12] = l),
      (t[13] = y),
      (t[14] = r),
      (t[15] = g),
      (t[16] = o),
      (t[17] = b));
  else b = t[17];
  let _ = b,
    S;
  if (t[18] !== _)
    ((S = (P) => {
      let { input: O, key: L } = x6i(P);
      _(P, P, O, L, P.sequence, () => W1a(P));
    }),
      (t[18] = _),
      (t[19] = S));
  else S = t[19];
  let A = S,
    v;
  if (t[20] !== _)
    ((v = (P) => {
      if (QPp(P.target, P.currentTarget)) return;
      let O = {
          name: P.deltaY < 0 ? "wheelup" : "wheeldown",
          key: "",
          ctrl: P.ctrl,
          shift: P.shift,
          meta: P.meta,
          superKey: false,
        },
        L = {
          upArrow: false,
          downArrow: false,
          leftArrow: false,
          rightArrow: false,
          pageDown: false,
          pageUp: false,
          wheelUp: P.deltaY < 0,
          wheelDown: P.deltaY > 0,
          home: false,
          end: false,
          return: false,
          escape: false,
          tab: false,
          backspace: false,
          delete: false,
          ctrl: P.ctrl,
          shift: P.shift,
          meta: P.meta,
          super: false,
        };
      _(P, O, "", L, "", () => W1a(P));
    }),
      (t[20] = _),
      (t[21] = v));
  else v = t[21];
  let C = v,
    x = qI.useRef(null),
    I,
    k;
  if (t[22] === Symbol.for("react.memo_cache_sentinel"))
    ((I = () => {
      if (!x.current) return;
      let P = bne(x.current),
        O = () => {
          let L = x.current;
          if (!L || P.activeElement === L) return;
          if (P.activeElement === null) {
            P.focus(L);
            return;
          }
          let M = L.parentNode;
          while (M) {
            if (M === P.activeElement) {
              P.focus(L);
              return;
            }
            M = M.parentNode;
          }
        };
      return (O(), P.subscribe(O));
    }),
      (k = []),
      (t[22] = I),
      (t[23] = k));
  else ((I = t[22]), (k = t[23]));
  qI.useLayoutEffect(I, k);
  let D;
  if (t[24] !== c || t[25] !== A || t[26] !== C)
    ((D = ePe.jsx(Iy, {
      ref: x,
      keybindingScope: "Global",
      tabIndex: -1,
      flexDirection: "column",
      flexGrow: 1,
      onKeyDownCapture: A,
      onWheelCapture: C,
      children: c,
    })),
      (t[24] = c),
      (t[25] = A),
      (t[26] = C),
      (t[27] = D));
  else D = t[27];
  return D;
}
function W1a(e) {
  (e.preventDefault(), e.stopImmediatePropagation());
}
function JPp(e) {
  return e !== null && "attributes" in e;
}
function y4n(e) {
  return JPp(e) ? e : void 0;
}
function QPp(e, t) {
  let n = y4n(e),
    r = y4n(t);
  while (n && n !== r) {
    if (n._eventHandlers?.onWheel) return true;
    n = n.parentNode;
  }
  return false;
}
function ZPp(e) {
  let t = [],
    n = y4n(e);
  while (n) {
    let r = n.attributes.keybindingScope;
    if (typeof r === "string" && cqi(r)) t.push(r);
    n = n.parentNode;
  }
  return t;
}
function Uho(e, t, n, r, o) {
  let s = new Bho(n, {
    sourceEvent: t,
    isChordCompletion: r,
    origin: o,
  });
  return (f8.dispatch(e, s), s.consumed);
}
var Fho,
  qI,
  ePe,
  CHORD_TIMEOUT_MS = 1000;
