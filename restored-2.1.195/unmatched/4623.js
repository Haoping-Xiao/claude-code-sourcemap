// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LOe
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/entities.js
// class=new  jaccard=0.0072  score=0.685  fileCov=0.0073
// note: nearest: node_modules/@xmldom/xmldom/lib/entities.js (0.0072); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var LOe = E(() => {
  Un();
  dr();
});
function gRf(e, t) {
  switch (e) {
    case "grid":
      return 3 * t + 1;
    case "simple":
      return 3 * t - 1;
    case "minimal":
    case "plain":
      return u1o * (t - 1);
  }
}
function hRf(e) {
  if (typeof e === "string" || typeof e === "number") return !0;
  if (DOe.isValidElement(e) && e.type === DOe.Fragment) return !0;
  return !1;
}
function yRf(e, t, n) {
  if (!hRf(e)) return e;
  return gA.jsx(w, {
    dimColor: t.dim && !n,
    bold: t.bold || n,
    children: e
  });
}
function bMl(e) {
  return rn(GU(e));
}
function _Rf(e, t, n, r, o) {
  let s = e.length,
    i = e.map((c, u) => {
      let d = n ? bMl(c.header) : 0;
      for (let p of t) d = Math.max(d, bMl(p[u]));
      return d;
    }),
    a = Array(s),
    l = [];
  for (let c = 0; c < s; c++) {
    let u = e[c].width;
    if (typeof u === "number") a[c] = u;else if (u && "ratio" in u && u.ratio !== void 0) l.push(c), a[c] = 0;else if (u) a[c] = _b(i[c], u.min ?? 0, u.max ?? 1 / 0);else a[c] = i[c];
  }
  if (l.length > 0) {
    let c = a.reduce((p, f) => p + f, 0),
      u = Math.max(0, r - gRf(o, s) - c),
      d = l.reduce((p, f) => p + (e[f].width.ratio ?? 0), 0);
    for (let p of l) {
      let f = e[p].width,
        m = d > 0 ? Math.floor(u * (f.ratio ?? 0) / d) : 0;
      a[p] = _b(m, f.min ?? 1, f.max ?? 1 / 0);
    }
  }
  return a;
}
function bRf(e) {
  let t = mKe.c(2),
    {
      box: n
    } = e;
  if (n === "grid" || n === "simple") {
    let o;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) o = gA.jsx(w, {
      dimColor: !0,
      children: " \u2502 "
    }), t[0] = o;else o = t[0];
    return o;
  }
  let r;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) r = gA.jsx(U, {
    width: u1o,
    flexShrink: 0
  }), t[1] = r;else r = t[1];
  return r;
}
function SMl(e) {
  let t = mKe.c(3),
    {
      box: n,
      side: r
    } = e;
  if (n === "grid") {
    let o = r === "left" ? "\u2502 " : " \u2502",
      s;
    if (t[0] !== o) s = gA.jsx(w, {
      dimColor: !0,
      children: o
    }), t[0] = o, t[1] = s;else s = t[1];
    return s;
  }
  if (n === "simple") {
    let o;
    if (t[2] === Symbol.for("react.memo_cache_sentinel")) o = gA.jsx(w, {
      children: " "
    }), t[2] = o;else o = t[2];
    return o;
  }
  return null;
}
function l1o(e) {
  let t = mKe.c(19),
    {
      box: n,
      type: r,
      widths: o
    } = e;
  if (n === "minimal") {
    let p;
    if (t[0] !== o) p = o.map(ERf), t[0] = o, t[1] = p;else p = t[1];
    let f;
    if (t[2] !== p) f = gA.jsx(U, {
      flexDirection: "row",
      children: p
    }), t[2] = p, t[3] = f;else f = t[3];
    return f;
  }
  let s, i, a, l, c, u;
  if (t[4] !== n || t[5] !== r || t[6] !== o) {
    u = Symbol.for("react.early_return_sentinel");
    e: {
      let p = o.map(SRf);
      if (n === "simple") {
        u = gA.jsx(w, {
          dimColor: !0,
          children: p.join("\u253C")
        });
        break e;
      }
      let [f, m, g] = r === "top" ? ["\u250C", "\u252C", "\u2510"] : r === "bottom" ? ["\u2514", "\u2534", "\u2518"] : ["\u251C", "\u253C", "\u2524"];
      i = g, s = w, a = !0, l = f, c = p.join(m);
    }
    t[4] = n, t[5] = r, t[6] = o, t[7] = s, t[8] = i, t[9] = a, t[10] = l, t[11] = c, t[12] = u;
  } else s = t[7], i = t[8], a = t[9], l = t[10], c = t[11], u = t[12];
  if (u !== Symbol.for("react.early_return_sentinel")) return u;
  let d;
  if (t[13] !== s || t[14] !== i || t[15] !== a || t[16] !== l || t[17] !== c) d = gA.jsxs(s, {
    dimColor: a,
    children: [l, c, i]
  }), t[13] = s, t[14] = i, t[15] = a, t[16] = l, t[17] = c, t[18] = d;else d = t[18];
  return d;
}
function SRf(e) {
  return "\u2500".repeat(e + 2);
}
function ERf(e, t) {
  return gA.jsxs(c1o.Fragment, {
    children: [t > 0 && gA.jsx(U, {
      width: u1o,
      flexShrink: 0
    }), gA.jsx(w, {
      dimColor: !0,
      children: "\u2500".repeat(e)
    })]
  }, t);
}
function EMl(e) {
  let t = mKe.c(19),
    {
      cells: n,
      columns: r,
      widths: o,
      box: s,
      isHeader: i
    } = e,
    a;
  if (t[0] !== s) a = gA.jsx(SMl, {
    box: s,
    side: "left"
  }), t[0] = s, t[1] = a;else a = t[1];
  let l;
  if (t[2] !== s || t[3] !== n || t[4] !== r || t[5] !== i || t[6] !== o) {
    let d;
    if (t[8] !== s || t[9] !== n || t[10] !== i || t[11] !== o) d = (p, f) => gA.jsxs(c1o.Fragment, {
      children: [f > 0 && gA.jsx(bRf, {
        box: s
      }), gA.jsx(U, {
        width: o[f] || void 0,
        flexShrink: 0,
        justifyContent: mRf[p.align ?? "start"],
        children: yRf(n[f], p, i)
      })]
    }, f), t[8] = s, t[9] = n, t[10] = i, t[11] = o, t[12] = d;else d = t[12];
    l = r.map(d), t[2] = s, t[3] = n, t[4] = r, t[5] = i, t[6] = o, t[7] = l;
  } else l = t[7];
  let c;
  if (t[13] !== s) c = gA.jsx(SMl, {
    box: s,
    side: "right"
  }), t[13] = s, t[14] = c;else c = t[14];
  let u;
  if (t[15] !== a || t[16] !== l || t[17] !== c) u = gA.jsxs(U, {
    flexDirection: "row",
    children: [a, l, c]
  }), t[15] = a, t[16] = l, t[17] = c, t[18] = u;else u = t[18];
  return u;
}
function ARf(e) {
  let t = mKe.c(2),
    {
      children: n
    } = e,
    r;
  if (t[0] !== n) r = gA.jsx(gA.Fragment, {
    children: n
  }), t[0] = n, t[1] = r;else r = t[1];
  return r;
}
function HRf(e) {
  let t = mKe.c(22),
    {
      box: n,
      columns: r,
      children: o,
      forceWidth: s
    } = e,
    i = n === void 0 ? "plain" : n,
    {
      columns: a
    } = br(),
    l = s ?? a,
    c,
    u,
    d,
    p,
    f,
    m,
    g;
  if (t[0] !== i || t[1] !== o || t[2] !== r || t[3] !== l) {
    let b = DOe.Children.toArray(o).filter(DOe.isValidElement),
      _ = b.map(wRf),
      S = r.some(vRf);
    g = _Rf(r, _, S, l, i), c = U, u = "column", d = i === "grid" && gA.jsx(l1o, {
      box: i,
      type: "top",
      widths: g
    }), p = S && gA.jsx(EMl, {
      cells: r.map(TRf),
      columns: r,
      widths: g,
      box: i,
      isHeader: !0
    }), f = S && i !== "plain" && gA.jsx(l1o, {
      box: i,
      type: "header",
      widths: g
    }), m = _.map((A, v) => gA.jsx(EMl, {
      cells: A,
      columns: r,
      widths: g,
      box: i,
      isHeader: !1
    }, b[v].key ?? v)), t[0] = i, t[1] = o, t[2] = r, t[3] = l, t[4] = c, t[5] = u, t[6] = d, t[7] = p, t[8] = f, t[9] = m, t[10] = g;
  } else c = t[4], u = t[5], d = t[6], p = t[7], f = t[8], m = t[9], g = t[10];
  let h;
  if (t[11] !== i || t[12] !== g) h = i === "grid" && gA.jsx(l1o, {
    box: i,
    type: "bottom",
    widths: g
  }), t[11] = i, t[12] = g, t[13] = h;else h = t[13];
  let y;
  if (t[14] !== c || t[15] !== u || t[16] !== d || t[17] !== p || t[18] !== f || t[19] !== m || t[20] !== h) y = gA.jsxs(c, {
    flexDirection: u,
    children: [d, p, f, m, h]
  }), t[14] = c, t[15] = u, t[16] = d, t[17] = p, t[18] = f, t[19] = m, t[20] = h, t[21] = y;else y = t[21];
  return y;
}
function TRf(e) {
  return e.header;
}
function vRf(e) {
  return e.header !== void 0;
}
function wRf(e) {
  return DOe.Children.toArray(e.props.children);
}
var mKe,
  c1o,
  DOe,
  gA,
  mRf,
  u1o = 2,
  Km;