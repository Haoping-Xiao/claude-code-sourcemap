// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module x8t
// matched 2.1.88 source: src/components/LogoV2/AnimatedClawd.tsx
// class=partial  jaccard=0.1816  score=0.2325  fileCov=0.4532
// note: low-confidence suggestion: src/components/LogoV2/AnimatedClawd.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module x8t] deps: Ye, wr
hCo = R(lt(), 1), kL = R(se(), 1), brf = {
  default: {
    r1L: " \u2590",
    r1E: "\u259B\u2588\u2588\u2588\u259C",
    r1R: "\u258C",
    r2L: "\u259D\u259C",
    r2R: "\u259B\u2598"
  },
  "look-left": {
    r1L: " \u2590",
    r1E: "\u259F\u2588\u2588\u2588\u259F",
    r1R: "\u258C",
    r2L: "\u259D\u259C",
    r2R: "\u259B\u2598"
  },
  "look-right": {
    r1L: " \u2590",
    r1E: "\u2599\u2588\u2588\u2588\u2599",
    r1R: "\u258C",
    r2L: "\u259D\u259C",
    r2R: "\u259B\u2598"
  },
  "arms-up": {
    r1L: "\u2597\u259F",
    r1E: "\u259B\u2588\u2588\u2588\u259C",
    r1R: "\u2599\u2596",
    r2L: " \u259C",
    r2R: "\u259B "
  }
}, Srf = {
  default: " \u2597   \u2596 ",
  "look-left": " \u2598   \u2598 ",
  "look-right": " \u259D   \u259D ",
  "arms-up": " \u2597   \u2596 "
};
function ew(e, t, n, r) {
  return Array.from({
    length: n
  }, () => ({
    pose: e,
    offset: t,
    x: r
  }));
}
function _Co(e) {
  return [{
    pose: "default",
    offset: 1,
    x: e,
    poof: "dot"
  }, {
    pose: "default",
    offset: 1,
    x: e,
    poof: "wave"
  }];
}
function Hrf(e, t) {
  if (!t || e.length === 0) return e;
  let n = e[0],
    r = n.x !== void 0 && n.x !== 0 ? n : wsl,
    o = Math.max(1, Math.round(t / Csl));
  return [...Array.from({
    length: o
  }, () => r), ...e];
}
function r6e(e) {
  let t = Tsl.c(15),
    n;
  if (t[0] !== e) n = e === void 0 ? {} : e, t[0] = e, t[1] = n;else n = t[1];
  let {
      autoplay: r,
      sequence: o,
      delayMs: s,
      onComplete: i
    } = n,
    a = r === void 0 ? false : r,
    {
      pose: l,
      bounceOffset: c,
      x: u,
      poof: d,
      onClick: p
    } = Irf(a, o, s, i),
    f;
  if (t[2] !== l) f = q6.jsx(rQ, {
    pose: l
  }), t[2] = l, t[3] = f;else f = t[3];
  let m;
  if (t[4] !== c || t[5] !== f || t[6] !== u) m = q6.jsx(U, {
    marginTop: c,
    marginLeft: u,
    flexShrink: 0,
    children: f
  }), t[4] = c, t[5] = f, t[6] = u, t[7] = m;else m = t[7];
  let g;
  if (t[8] !== c || t[9] !== d) g = d && c > 0 ? q6.jsxs(q6.Fragment, {
    children: [q6.jsx(U, {
      position: "absolute",
      top: yCo - 1,
      left: 0,
      children: q6.jsx(w, {
        color: "inactive",
        children: Esl[d]
      })
    }), q6.jsx(U, {
      position: "absolute",
      top: yCo - 1,
      right: 0,
      children: q6.jsx(w, {
        color: "inactive",
        children: Esl[d]
      })
    })]
  }) : null, t[8] = c, t[9] = d, t[10] = g;else g = t[10];
  let h;
  if (t[11] !== p || t[12] !== m || t[13] !== g) h = q6.jsx(_0e, {
    children: q6.jsxs(U, {
      height: yCo,
      width: Isl,
      flexDirection: "column",
      flexShrink: 0,
      overflow: "hidden",
      onClick: p,
      children: [m, g]
    })
  }), t[11] = p, t[12] = m, t[13] = g, t[14] = h;else h = t[14];
  return h;
}
function Irf(e, t, n, r) {
  let o = Sd(),
    [s] = Gpe.useState(() => Mv(Dr().prefersReducedMotion) || o),
    i = (e || t !== void 0) && !s,
    [a, l] = Gpe.useState(i ? 0 : -1),
    c = Gpe.useRef(Hrf(t ? Hsl[t] : e ? Arf : Azn, t ? n : void 0)),
    u = Gpe.useRef(r);
  u.current = r;
  let d = Gpe.useRef(!t),
    p = ks();
  Gpe.useEffect(() => {
    if (s) u.current?.();
  }, [s]);
  let f = () => {
    if (e || s || a !== -1 || !d.current) return;
    c.current = Asl[Math.floor(Math.random() * Asl.length)], l(0);
  };
  Gpe.useEffect(() => {
    if (a === -1) return;
    if (a >= c.current.length) {
      d.current = true, u.current?.(), l(e && !t ? 0 : -1);
      return;
    }
    return p.setTimeout(() => l(Trf), Csl);
  }, [a, e, t, p]);
  let m = c.current,
    g = t ? Hsl[t].at(-1) : wsl,
    h = a >= 0 && a < m.length ? m[a] : g;
  return {
    pose: h.pose,
    bounceOffset: h.offset,
    x: h.x ?? 0,
    poof: h.poof,
    onClick: f
  };
}
var Tsl,
  Gpe,
  q6,
  Esl,
  Azn,
  vsl,
  Arf,
  Asl,
  wsl,
  Csl = 60,
  Trf = e => e + 1,
  yCo = 3,
  Isl = 9,
  vrf,
  wrf,
  Crf,
  Hsl;