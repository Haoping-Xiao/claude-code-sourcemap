// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module a0e
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var a0e = E(() => {
  QXr();
  ZXr = R(rt(), 1);
});
function X3d(e) {
  let t = new Map(),
    n = null,
    r = e,
    o = performance.now(),
    s = 0;
  function i() {
    s = performance.now() - o;
    for (let c of t.keys()) c();
  }
  function a() {
    if ([...t.values()].some(Boolean)) {
      if (n) clearInterval(n), n = null;
      n = setInterval(i, r);
    } else if (n) clearInterval(n), n = null;
  }
  function l(c, u) {
    return t.set(c, u), a(), () => {
      t.delete(c), a();
    };
  }
  return {
    subscribeKeepAlive(c) {
      return l(c, !0);
    },
    subscribeFollower(c) {
      return l(c, !1);
    },
    now() {
      if (n && s) return s;
      return performance.now() - o;
    },
    setTickInterval(c) {
      if (c === r) return;
      r = c, a();
    },
    setTimeout(c, u) {
      let d = setTimeout(c, u);
      return () => clearTimeout(d);
    }
  };
}
function TGi(e) {
  let t = HGi.c(7),
    {
      children: n
    } = e,
    [r] = tat.useState(Q3d),
    o = Pg(),
    s,
    i;
  if (t[0] !== r || t[1] !== o) s = () => {
    r.setTickInterval(o ? $U : J3d);
  }, i = [r, o], t[0] = r, t[1] = o, t[2] = s, t[3] = i;else s = t[2], i = t[3];
  tat.useEffect(s, i);
  let a;
  if (t[4] !== n || t[5] !== r) a = vGi.jsx(SW.Provider, {
    value: r,
    children: n
  }), t[4] = n, t[5] = r, t[6] = a;else a = t[6];
  return a;
}
function Q3d() {
  return X3d($U);
}
var HGi,
  tat,
  vGi,
  nat = (e, t) => {
    let n = setTimeout(e, t);
    return () => clearTimeout(n);
  },
  rat = () => () => {},
  mLn = () => null,
  SW,
  J3d;