// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SZr
// matched 2.1.88 source: src/ink/events/input-event.ts
// class=partial  jaccard=0.1674  score=0.2811  fileCov=0.2929
// note: low-confidence suggestion: src/ink/events/input-event.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SZr = E(() => {
  z6d = {
    up: "upArrow",
    down: "downArrow",
    left: "leftArrow",
    right: "rightArrow",
    pagedown: "pageDown",
    pageup: "pageUp",
    home: "home",
    end: "end",
    return: "return",
    escape: "escape",
    tab: "tab",
    backspace: "backspace",
    delete: "delete"
  };
});
function dPn() {
  return {
    decls: new WeakMap(),
    scopesChanged: Mi(),
    preemptiveScopes: new Map(),
    swallowAll: new Map(),
    keyDispatchTrace: Mi()
  };
}
function pPn(e) {
  let t = EZr.c(24),
    {
      bindings: n,
      pendingChordRef: r,
      pendingChord: o,
      setPendingChord: s,
      activeContexts: i,
      registerActiveContext: a,
      unregisterActiveContext: l,
      handlerRegistryRef: c,
      preDispatchRef: u,
      keyHandlerRegistry: d,
      children: p
    } = e,
    f;
  if (t[0] !== n) f = (C, x) => rDn(C, x, n), t[0] = n, t[1] = f;else f = t[1];
  let m = f,
    g;
  if (t[2] !== u) g = C => (u.current.add(C), () => u.current.delete(C)), t[2] = u, t[3] = g;else g = t[3];
  let h = g,
    y;
  if (t[4] !== c) y = C => {
    let x = c.current;
    if (!x) return K6d;
    if (!x.has(C.action)) x.set(C.action, new Set());
    return x.get(C.action).add(C), () => {
      let I = x.get(C.action);
      if (I) {
        if (I.delete(C), I.size === 0) x.delete(C.action);
      }
    };
  }, t[4] = c, t[5] = y;else y = t[5];
  let b = y,
    _;
  if (t[6] !== n || t[7] !== r) _ = (C, x, I) => cUt(k6i(C, x), I, n, r.current), t[6] = n, t[7] = r, t[8] = _;else _ = t[8];
  let S;
  if (t[9] !== i || t[10] !== n || t[11] !== m || t[12] !== d || t[13] !== o || t[14] !== a || t[15] !== b || t[16] !== h || t[17] !== s || t[18] !== _ || t[19] !== l) S = {
    resolve: _,
    setPendingChord: s,
    getDisplayText: m,
    bindings: n,
    pendingChord: o,
    activeContexts: i,
    registerActiveContext: a,
    unregisterActiveContext: l,
    registerHandler: b,
    registerPreDispatch: h,
    keyHandlerRegistry: d
  }, t[9] = i, t[10] = n, t[11] = m, t[12] = d, t[13] = o, t[14] = a, t[15] = b, t[16] = h, t[17] = s, t[18] = _, t[19] = l, t[20] = S;else S = t[20];
  let A = S,
    v;
  if (t[21] !== p || t[22] !== A) v = L6i.jsx(R6i.Provider, {
    value: A,
    children: p
  }), t[21] = p, t[22] = A, t[23] = v;else v = t[23];
  return v;
}
function K6d() {}
function KE() {
  return Qat.useContext(R6i);
}
function fPn(e, t) {
  let n = EZr.c(5),
    r = t === void 0 ? !0 : t,
    o = KE(),
    s,
    i;
  if (n[0] !== e || n[1] !== r || n[2] !== o) s = () => {
    if (!o || !r) return;
    return o.registerActiveContext(e), () => {
      o.unregisterActiveContext(e);
    };
  }, i = [e, o, r], n[0] = e, n[1] = r, n[2] = o, n[3] = s, n[4] = i;else s = n[3], i = n[4];
  Qat.useLayoutEffect(s, i);
}
var EZr, Qat, L6i, R6i;