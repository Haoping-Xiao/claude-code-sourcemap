// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sql
// matched 2.1.88 source: src/components/AwsAuthStatusBox.tsx
// class=partial  jaccard=0.0767  score=0.0859  fileCov=0.4188
// note: low-confidence suggestion: src/components/AwsAuthStatusBox.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sql = E(() => {
  Ye();
  kt();
  ZKe();
  er();
  SEe();
  o2o = R(lt(), 1), y1e = R(se(), 1);
});
function wor(e) {
  let t = [],
    n = /(^|[\s\u3002\u3001\uFF1F\uFF01])(\/[a-zA-Z][a-zA-Z0-9.:\-_]*)/g,
    r = null;
  while ((r = n.exec(e)) !== null) {
    let o = r[1] ?? "",
      s = (r[2] ?? "").replace(/\.+$/, ""),
      i = r.index + o.length;
    t.push({
      start: i,
      end: i + s.length
    });
  }
  return t;
}
function w4f(e) {
  let t = Cor.c(9),
    {
      text: n,
      style: r
    } = e,
    o;
  if (t[0] !== n) {
    o = [];
    let l = 0;
    for (let {
      start: c,
      end: u
    } of wor(n)) {
      if (c > l) o.push(n.slice(l, c));
      let d = n.slice(c, u).replace(/[:\-_]+$/, "");
      o.push(zN.jsx(w, {
        bold: !0,
        color: "permission",
        children: d
      }, c)), l = c + d.length;
    }
    if (l < n.length) {
      let c;
      if (t[2] !== l || t[3] !== n) c = n.slice(l), t[2] = l, t[3] = n, t[4] = c;else c = t[4];
      o.push(c);
    }
    t[0] = n, t[1] = o;
  } else o = t[1];
  let s = r === "bold",
    i = r === "dim",
    a;
  if (t[5] !== o || t[6] !== s || t[7] !== i) a = zN.jsx(w, {
    bold: s,
    dimColor: i,
    children: o
  }), t[5] = o, t[6] = s, t[7] = i, t[8] = a;else a = t[8];
  return a;
}
function Ior() {
  if (!fQ()?.command) return !1;
  if (QMe()) return DAe() !== null;
  return f_t();
}
function C4f(e) {
  if (_1e !== null) return _1e;
  if (!Ior()) return null;
  let t = fQ();
  if (!t) return null;
  let n = {
    variant: QMe() ? "credit" : "upsell",
    campaign: t,
    cached: DAe()
  };
  if (e) _1e = n;
  return n;
}
function I4f() {
  _1e = null;
}
function aql() {
  let e = Cor.c(4),
    t = gVe(),
    n;
  if (e[0] !== t) n = C4f(t), e[0] = t, e[1] = n;else n = e[1];
  let r = n;
  if (r === null) return null;
  let o;
  if (e[2] !== r.variant) o = zN.jsx(x4f, {
    variant: r.variant
  }), e[2] = r.variant, e[3] = o;else o = e[3];
  return o;
}
function x4f(e) {
  let t = Cor.c(23),
    {
      variant: n
    } = e,
    [r] = iql.useState(R4f),
    o = _1e !== null ? _1e.campaign : r.campaign,
    s = _1e !== null ? _1e.cached : r.cached,
    i = Boolean(o?.command) && (n === "upsell" || s !== null),
    a;
  if (t[0] !== o || t[1] !== n) a = () => {
    if (!o) return;
    G("tengu_fotw_nudge_shown", {
      feature: o.feature,
      campaign: We("feature_of_the_week"),
      audience: We(n === "credit" ? "claimant" : "viewer")
    });
  }, t[0] = o, t[1] = n, t[2] = a;else a = t[2];
  let l;
  if (t[3] !== i) l = {
    enabled: i
  }, t[3] = i, t[4] = l;else l = t[4];
  if (b6("fotw-nudge", a, l), !o?.command) return null;
  let c = o.hideCommandChip !== !0,
    u;
  if (t[5] !== o.announcementLines || t[6] !== o.command || t[7] !== o.commandBlurb || t[8] !== o.titleLabel || t[9] !== c) u = o.announcementLines?.length ? zN.jsx(U, {
    flexDirection: "column",
    children: o.announcementLines.map(k4f)
  }) : zN.jsxs(w, {
    children: [zN.jsx(w, {
      bold: !0,
      children: o.titleLabel ?? "Feature of the week:"
    }), c ? zN.jsxs(zN.Fragment, {
      children: [" ", zN.jsxs(w, {
        bold: !0,
        color: "permission",
        children: ["/", o.command]
      })]
    }) : null, o.commandBlurb ? `${c ? " \u2014 " : " "}${o.commandBlurb}` : ""]
  }), t[5] = o.announcementLines, t[6] = o.command, t[7] = o.commandBlurb, t[8] = o.titleLabel, t[9] = c, t[10] = u;else u = t[10];
  let d = u;
  if (n === "upsell") {
    let b;
    if (t[11] !== d) b = zN.jsx(U, {
      flexDirection: "column",
      children: d
    }), t[11] = d, t[12] = b;else b = t[12];
    return b;
  }
  if (s === null) return null;
  let p;
  if (t[13] !== s.amountMinorUnits || t[14] !== s.currency) p = Yy(s.amountMinorUnits, s.currency, "fit"), t[13] = s.amountMinorUnits, t[14] = s.currency, t[15] = p;else p = t[15];
  let f = p,
    m = o.redeemBy ? ` \xB7 Redeem by ${o.redeemBy}` : "",
    g;
  if (t[16] !== f || t[17] !== m) g = zN.jsxs(w, {
    children: ["Get ", f, " in usage credits when you run it", m]
  }), t[16] = f, t[17] = m, t[18] = g;else g = t[18];
  let h;
  if (t[19] === Symbol.for("react.memo_cache_sentinel")) h = zN.jsxs(w, {
    dimColor: !0,
    children: ["Terms apply: ", v4f]
  }), t[19] = h;else h = t[19];
  let y;
  if (t[20] !== d || t[21] !== g) y = zN.jsxs(U, {
    flexDirection: "column",
    children: [d, g, h]
  }), t[20] = d, t[21] = g, t[22] = y;else y = t[22];
  return y;
}
function k4f(e, t) {
  return zN.jsx(w4f, {
    text: e.text,
    style: e.style
  }, t);
}
function R4f() {
  return {
    campaign: fQ(),
    cached: DAe()
  };
}
var Cor,
  iql,
  zN,
  v4f = "https://www.anthropic.com/legal/promotion-terms",
  _1e = null;