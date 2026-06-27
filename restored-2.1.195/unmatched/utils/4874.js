// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SGl
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0168  score=0.2581  fileCov=0.0177
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0168); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SGl = E(() => {
  bGl = {
    isEnabled: () => false,
    isHidden: true,
    name: "stub"
  };
});
function vGl(e) {
  let t = $Xt.c(10),
    {
      live: n,
      boxRef: r,
      children: o
    } = e,
    s;
  if (t[0] !== o) s = gR.jsx(U, {
    flexDirection: "column",
    width: gFo - 4,
    height: AGl,
    children: o
  }), t[0] = o, t[1] = s;else s = t[1];
  let i = !n,
    a = n ? "claude" : void 0,
    l = n ? `${BO} try it` : `  ${$fn} demo`,
    c;
  if (t[2] !== i || t[3] !== a || t[4] !== l) c = gR.jsx(U, {
    position: "absolute",
    marginLeft: gFo - 12,
    children: gR.jsx(w, {
      dimColor: i,
      color: a,
      children: l
    })
  }), t[2] = i, t[3] = a, t[4] = l, t[5] = c;else c = t[5];
  let u;
  if (t[6] !== r || t[7] !== s || t[8] !== c) u = gR.jsxs(U, {
    ref: r,
    borderStyle: "round",
    borderColor: "inactive",
    paddingX: 1,
    width: gFo,
    height: AGl + 2,
    children: [s, c]
  }), t[6] = r, t[7] = s, t[8] = c, t[9] = u;else u = t[9];
  return u;
}
function R2f(e) {
  let t = e.startsWith("#"),
    n = t ? e.slice(1) : e,
    r = [],
    o = 0;
  for (let s of n.matchAll(k2f)) {
    if (s.index > o) r.push({
      text: n.slice(o, s.index)
    });
    r.push({
      text: s[2],
      color: s[1]
    }), o = s.index + s[0].length;
  }
  if (o < n.length) r.push({
    text: n.slice(o)
  });
  if (r.length === 0) r.push({
    text: ""
  });
  return {
    dim: t,
    segments: r
  };
}
function Qfe(e) {
  let t = $Xt.c(7),
    {
      frames: n
    } = e,
    r;
  if (t[0] !== n) r = n.map(P2f), t[0] = n, t[1] = r;else r = t[1];
  let o = r,
    s = Mv(G_().prefersReducedMotion),
    [i, a] = Kf(s ? null : EGl),
    l = Math.floor(a / EGl) % o.length,
    c = o[l],
    u;
  if (t[2] !== c) u = c.map(L2f), t[2] = c, t[3] = u;else u = t[3];
  let d;
  if (t[4] !== i || t[5] !== u) d = gR.jsx(vGl, {
    boxRef: i,
    children: u
  }), t[4] = i, t[5] = u, t[6] = d;else d = t[6];
  return d;
}
function L2f(e, t) {
  return gR.jsx(w, {
    dimColor: e.dim,
    children: e.segments.map(D2f)
  }, t);
}
function D2f(e, t) {
  return gR.jsx(w, {
    color: e.color,
    children: e.text
  }, t);
}
function P2f(e) {
  return e.split(`
`).map(R2f);
}
function B2f(e) {
  let t = [];
  for (let n = 0; n < e; n++) t.push({
    x: Math.floor(Math.random() * CGl),
    delay: Math.random() * 400,
    speed: 0.7 + Math.random() * 0.6,
    char: HL(O2f),
    color: HL(N2f)
  });
  return t;
}
function IGl({
  onDone: e
}) {
  let t = uAt.useMemo(() => B2f(40), []),
    n = Mv(G_().prefersReducedMotion),
    [r, o] = Kf(n ? null : M2f),
    s = uAt.useRef(o),
    i = o - s.current;
  Pd(e, TGl + 600, [e]);
  let a = Array.from({
    length: zrr
  }, () => []);
  for (let l of t) {
    let c = Math.max(0, i - l.delay),
      u = Math.floor(c / TGl * zrr * l.speed);
    if (u >= 0 && u < zrr) a[u].push(l);
  }
  for (let l of a) l.sort((c, u) => c.x - u.x);
  return gR.jsx(U, {
    ref: r,
    position: "absolute",
    marginLeft: $2f,
    flexDirection: "column",
    width: CGl,
    height: zrr,
    children: a.map((l, c) => {
      let u = 0;
      return gR.jsx(U, {
        height: 1,
        children: l.map((d, p) => {
          let f = Math.max(0, d.x - u);
          return u = Math.max(u, d.x) + 1, gR.jsxs(w, {
            children: [" ".repeat(f), gR.jsx(w, {
              color: d.color,
              children: d.char
            })]
          }, p);
        })
      }, c);
    })
  });
}
function xGl(e) {
  let t = $Xt.c(14),
    {
      text: n
    } = e,
    r = rn(n),
    o = Mv(G_().prefersReducedMotion),
    [s, i] = Kf(o ? null : HGl),
    a = r + 20,
    l = Math.floor(i / HGl) % a - 10,
    c;
  if (t[0] !== l || t[1] !== n) c = v9n(n, l), t[0] = l, t[1] = n, t[2] = c;else c = t[2];
  let {
      before: u,
      shimmer: d,
      after: p
    } = c,
    f;
  if (t[3] !== u) f = gR.jsx(w, {
    bold: true,
    color: "claude",
    children: u
  }), t[3] = u, t[4] = f;else f = t[4];
  let m;
  if (t[5] !== d) m = gR.jsx(w, {
    bold: true,
    color: "claudeShimmer",
    children: d
  }), t[5] = d, t[6] = m;else m = t[6];
  let g;
  if (t[7] !== p) g = gR.jsx(w, {
    bold: true,
    color: "claude",
    children: p
  }), t[7] = p, t[8] = g;else g = t[8];
  let h;
  if (t[9] !== s || t[10] !== f || t[11] !== m || t[12] !== g) h = gR.jsxs(U, {
    ref: s,
    children: [f, m, g]
  }), t[9] = s, t[10] = f, t[11] = m, t[12] = g, t[13] = h;else h = t[13];
  return h;
}
function kGl() {
  let e = $Xt.c(11),
    [t, n] = uAt.useState(0),
    r = wGl[t],
    o = Uu("chat:cycleMode", "Chat", "shift+tab"),
    s,
    i;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) s = {
    "confirm:cycleMode": () => n(U2f)
  }, i = {
    context: "Confirmation"
  }, e[0] = s, e[1] = i;else s = e[0], i = e[1];
  No(s, i);
  let a;
  if (e[2] !== o) a = gR.jsxs(w, {
    dimColor: true,
    children: ["Press ", o, " now", `

`]
  }), e[2] = o, e[3] = a;else a = e[3];
  let l = r.symbol ? `${r.symbol} ` : "  ",
    c;
  if (e[4] !== r.color || e[5] !== r.label || e[6] !== l) c = gR.jsxs(w, {
    color: r.color,
    children: [l, r.label]
  }), e[4] = r.color, e[5] = r.label, e[6] = l, e[7] = c;else c = e[7];
  let u;
  if (e[8] !== a || e[9] !== c) u = gR.jsx(vGl, {
    live: true,
    children: gR.jsxs(w, {
      children: [a, c]
    })
  }), e[8] = a, e[9] = c, e[10] = u;else u = e[10];
  return u;
}
function U2f(e) {
  return (e + 1) % wGl.length;
}
var $Xt,
  uAt,
  gR,
  EGl = 3000,
  gFo = 48,
  AGl = 3,
  k2f,
  wGl,
  HGl = 80,
  M2f = 60,
  TGl = 1400,
  zrr = 16,
  $2f = 60,
  CGl = 100,
  O2f,
  N2f;