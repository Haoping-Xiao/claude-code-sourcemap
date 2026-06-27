// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F_c
// matched 2.1.88 source: src/components/diff/DiffFileList.tsx
// class=partial  jaccard=0.105  score=0.2972  fileCov=0.1397
// note: low-confidence suggestion: src/components/diff/DiffFileList.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var F_c = E(() => {
  Ye();
  Mce();
  NOe();
  nk();
  DE();
  g_c();
  YHe();
  OTt();
  A_c();
  uo();
  id();
  ft();
  Ld();
  rze();
  Xa();
  Un();
  GY();
  v_c();
  I_c();
  R_c();
  fzn();
  uIo();
  Ycr();
  ift();
  D_c();
  y0e();
  a0e();
  Ko();
  Bs();
  _i();
  W9n();
  tdr();
  Cen();
  nbe();
  uf();
  F6o();
  ZS();
  _at();
  er();
  Is();
  Idr = R(lt(), 1), Kz = R(rt(), 1), li = R(se(), 1), Jfm = (l$(), ro(qW));
  tmm = Kz.memo(function (t) {
    let n = Idr.c(11),
      {
        count: r,
        selected: o,
        onClick: s
      } = t,
      [i, a] = Kz.useState(!1),
      l = o || i,
      c;
    if (n[0] === Symbol.for("react.memo_cache_sentinel")) c = li.jsxs(w, {
      "aria-hidden": !0,
      children: [Uvs, " "]
    }), n[0] = c;else c = n[0];
    let u;
    if (n[1] !== r || n[2] !== l) u = li.jsxs(w, {
      color: "background",
      inverse: l,
      children: [c, r, " background"]
    }), n[1] = r, n[2] = l, n[3] = u;else u = n[3];
    let d = u;
    if (!s) return d;
    let p;
    if (n[4] !== s) p = () => s(), n[4] = s, n[5] = p;else p = n[5];
    let f, m;
    if (n[6] === Symbol.for("react.memo_cache_sentinel")) f = () => a(!0), m = () => a(!1), n[6] = f, n[7] = m;else f = n[6], m = n[7];
    let g;
    if (n[8] !== d || n[9] !== p) g = li.jsx(U, {
      onClick: p,
      onMouseEnter: f,
      onMouseLeave: m,
      children: d
    }), n[8] = d, n[9] = p, n[10] = g;else g = n[10];
    return g;
  });
});
function W6o() {
  if (j6o === void 0) j6o = (Dt().seenNotifications?.[G6o] ?? 0) < smm;
  return j6o;
}
function G_c() {
  if (j_c) return;
  if (!W6o()) return;
  j_c = !0, gn(e => {
    let t = e.seenNotifications ?? {};
    return {
      ...e,
      seenNotifications: {
        ...t,
        [G6o]: (t[G6o] ?? 0) + 1
      }
    };
  });
}
var G6o = "rc-active-badge",
  smm = 5,
  j_c = !1,
  j6o;