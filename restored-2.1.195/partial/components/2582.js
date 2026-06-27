// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vzi
// matched 2.1.88 source: src/ink/components/ScrollBox.tsx
// class=partial  jaccard=0.0638  score=0.1769  fileCov=0.0908
// note: low-confidence suggestion: src/ink/components/ScrollBox.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vzi] deps: fGe, Tc, Ye, dn, Ezi, Yj, H0e
Azi = R(lt(), 1), fbe = R(rt(), 1), Tzi = R(se(), 1);
function Izi(e) {
  let t = PZr.c(17),
    {
      scope: n,
      bindings: r,
      active: o,
      preemptive: s,
      swallowAll: i,
      claimFocus: a,
      ref: l,
      flexGrow: c,
      flexDirection: u,
      flexShrink: d,
      children: p
    } = e,
    f = o === void 0 ? true : o,
    m = s === void 0 ? false : s,
    g = i === void 0 ? false : i,
    h = a === void 0 ? false : a,
    y = c === void 0 ? 0 : c,
    b = Jce.useRef(null),
    _;
  if (t[0] !== f || t[1] !== r || t[2] !== m || t[3] !== n || t[4] !== g) _ = {
    scope: n,
    bindings: r,
    active: f,
    preemptive: m,
    swallowAll: g
  }, t[0] = f, t[1] = r, t[2] = m, t[3] = n, t[4] = g, t[5] = _;else _ = t[5];
  let S = Yzd(b, _);
  Jzd(b, h), Qzd(b, n, h);
  let A;
  if (t[6] !== l) A = I => {
    if (b.current = I, typeof l === "function") l(I);else if (l) l.current = I;
  }, t[6] = l, t[7] = A;else A = t[7];
  let v = A,
    C = h ? -1 : void 0,
    x;
  if (t[8] !== p || t[9] !== u || t[10] !== y || t[11] !== d || t[12] !== S || t[13] !== n || t[14] !== v || t[15] !== C) x = xzi.jsx(Iy, {
    ref: v,
    keybindingScope: n,
    onAction: S,
    tabIndex: C,
    flexGrow: y,
    flexDirection: u,
    flexShrink: d,
    children: p
  }), t[8] = p, t[9] = u, t[10] = y, t[11] = d, t[12] = S, t[13] = n, t[14] = v, t[15] = C, t[16] = x;else x = t[16];
  return x;
}
function Kzd(e, t) {
  for (let n of t) {
    if (n.action !== e.action) continue;
    if (n.chordOnly && !e.isChordCompletion) continue;
    if (n.run() === false) continue;
    e.consume();
    return;
  }
}
function Yzd(e, {
  scope: t,
  bindings: n,
  active: r = true,
  preemptive: o = false,
  swallowAll: s = false
}) {
  let i = KE(),
    a = Jce.useRef([]);
  a.current = r ? n : [];
  let l = Jce.useCallback(p => Kzd(p, a.current), []),
    c = Xzd(t, r, o, s, a.current),
    u = r && o && Boolean(t),
    d = u && s;
  return Jce.useLayoutEffect(() => {
    if (!i) return;
    let p = e.current;
    if (!p) return;
    let {
        decls: f,
        scopesChanged: m,
        preemptiveScopes: g,
        swallowAll: h
      } = i.keyHandlerRegistry,
      y = {
        scope: t,
        active: r,
        preemptive: o,
        swallowAll: s,
        entriesRef: a
      };
    if (f.set(p, y), u && t) {
      if (wzi(g, t), d) wzi(h, t);
    }
    return m.emit(), () => {
      if (f.delete(p), u && t) {
        if (Czi(g, t), d) Czi(h, t);
      }
      m.emit();
    };
  }, [i, e, t, u, d, c]), l;
}
function wzi(e, t) {
  e.set(t, (e.get(t) ?? 0) + 1);
}
function Czi(e, t) {
  let n = (e.get(t) ?? 0) - 1;
  if (n <= 0) e.delete(t);else e.set(t, n);
}
function Xzd(e, t, n, r, o) {
  return De([e ?? "", t, n, r, o.map(s => [s.action ?? "", s.hint ?? "", Boolean(s.chordOnly)])]);
}
function Jzd(e, t) {
  Jce.useLayoutEffect(() => {
    if (!t) return;
    let n = e.current;
    if (!n) return;
    let r = bne(n),
      o = false,
      s = () => {
        if (o) return;
        let i = e.current;
        if (!i) return;
        let a = r.activeElement;
        if (a && _ne(a, i)) return;
        o = true;
        try {
          r.focus(i);
        } finally {
          o = false;
        }
      };
    return r.pushAutoFocusFallback(n), s(), r.subscribe(s);
  }, [e, t]);
}
function Qzd(e, t, n) {
  let r = PZr.c(6),
    o = KE(),
    s = Jce.useRef(false),
    i,
    a;
  if (r[0] !== n || r[1] !== o || r[2] !== e || r[3] !== t) i = () => {
    return;
  }, a = [e, t, n, o], r[0] = n, r[1] = o, r[2] = e, r[3] = t, r[4] = i, r[5] = a;else i = r[4], a = r[5];
  Jce.useLayoutEffect(i, a);
}
var PZr, Jce, xzi;