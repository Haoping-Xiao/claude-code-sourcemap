// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BWi
// matched 2.1.88 source: src/ink/renderer.ts
// class=modified  jaccard=0.4595  score=0.785  fileCov=0.5256
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var BWi = E(() => {
  je();
  Wit();
  X_e();
  qBt();
  Kit();
  KBt();
  bW();
  ((iWd = R(nRn(), 1)),
    (aWd = {
      reconcile: 0,
      yoga: 0,
      paint: 0,
      scan: 0,
      calls: 0,
    }));
});
function CJr(e, t) {
  let n,
    r = hGe();
  return (o) => {
    let { frontFrame: s, backFrame: i, isTTY: a, terminalWidth: l, terminalRows: c } = o,
      u = s.screen,
      d = i.screen,
      p = d.charPool,
      f = d.hyperlinkPool,
      m = e.yogaNode?.getComputedHeight(),
      g = e.yogaNode?.getComputedWidth(),
      h = m === void 0 || !Number.isFinite(m) || m < 0,
      y = g === void 0 || !Number.isFinite(g) || g < 0;
    if (!e.yogaNode || h || y) {
      if (e.yogaNode && (h || y))
        T(
          `Invalid yoga dimensions: width=${g}, height=${m}, childNodes=${e.childNodes.length}, terminalWidth=${l}, terminalRows=${c}`,
        );
      return {
        screen: Y7(l, 0, t, p, f),
        viewport: {
          width: l,
          height: c,
        },
        cursor: {
          x: 0,
          y: 0,
          visible: !0,
        },
      };
    }
    let b = Math.floor(e.yogaNode.getComputedWidth()),
      _ = Math.floor(e.yogaNode.getComputedHeight()),
      S = o.altScreen ? c : _;
    if (o.altScreen && _ > c)
      T(
        `alt-screen: yoga height ${_} > terminalRows ${c} \u2014 ` +
          "something is rendering outside <AlternateScreen>. Overflow clipped.",
        {
          level: "warn",
        },
      );
    let A = d ?? Y7(b, S, t, p, f);
    if (n) n.reset(b, S, A);
    else
      n = new Q_e({
        width: b,
        height: S,
        stylePool: t,
        screen: A,
      });
    (DWi(r), (r.overlayActive = o.overlayActive));
    let v = K4i();
    yGe(e, n, r, {
      prevScreen: v || o.prevFrameContaminated ? void 0 : u,
    });
    let C = n.get(),
      x = r.scrollDrainNode;
    if (x) NM(x);
    return {
      scrollHint: o.altScreen ? r.scrollHint : null,
      scrollDrainPending: x !== null,
      followScroll: r.followScroll,
      layoutShifted: r.layoutShifted,
      screen: C,
      viewport: {
        width: l,
        height: o.altScreen ? c + 1 : c,
      },
      cursor: {
        x: 0,
        y: o.altScreen ? Math.max(0, Math.min(A.height, c) - 1) : A.height,
        visible: !a || A.height === 0,
      },
    };
  };
}
