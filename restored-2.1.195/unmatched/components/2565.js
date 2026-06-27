// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tC
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/sql.js
// class=new  jaccard=0.0106  score=0.0976  fileCov=0.0117
// note: nearest: node_modules/highlight.js/lib/languages/sql.js (0.0106); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tC = E(() => {
  HI();
  uo();
  V6i = R(lt(), 1), tlt = R(rt(), 1), uzd = new Set(["autocomplete"]), dzd = new Set(["history-search"]);
});
function CZr() {
  let e = MUt.c(3),
    [t, n] = WU.useState(""),
    r = WU.useRef(""),
    o;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) o = a => {
    r.current = a(r.current), n(r.current);
  }, e[0] = o;else o = e[0];
  let s = o,
    i;
  if (e[1] !== t) i = [t, r, s], e[1] = t, e[2] = i;else i = e[2];
  return i;
}
function K6i(e) {
  let t = MUt.c(47),
    {
      options: n,
      onChange: r,
      onFocus: o,
      onCancel: s,
      isDisabled: i,
      disableSelection: a,
      defaultValue: l
    } = e,
    c = i === void 0 ? !1 : i,
    u = a === void 0 ? !1 : a,
    [d, p, f] = CZr(),
    [m, g] = WU.useState(null),
    [h, y] = WU.useState(null),
    b = h !== null && n[h - 1]?.type === "input" ? n[h - 1] : null,
    _ = WU.useRef(null);
  M0(_, !c), Wh("select", !!s && !c);
  let S;
  if (t[0] !== u || t[1] !== b || t[2] !== r || t[3] !== o || t[4] !== n || t[5] !== f) S = q => {
    if (u) return;
    if (b) {
      if (q === "") {
        g("Enter some text, or Escape for the list.");
        return;
      }
      r?.(b.value), f(Ezd), y(null);
      return;
    }
    let W = Number.parseInt(q, 10);
    if (!Number.isFinite(W) || W < 1 || W > n.length) {
      g(`Invalid selection "${q}". Enter a number between 1 and ${n.length}.`), f(Szd);
      return;
    }
    let V = n[W - 1];
    if (V.disabled) {
      g(`Option ${W} is disabled.`), f(bzd);
      return;
    }
    if (V.type === "input") {
      y(W);
      let Y = V.initialValue ?? "";
      f(() => Y), V.onChange(Y), o?.(V.value);
      return;
    }
    r?.(V.value), f(_zd);
  }, t[0] = u, t[1] = b, t[2] = r, t[3] = o, t[4] = n, t[5] = f, t[6] = S;else S = t[6];
  let A = S,
    v;
  if (t[7] !== p || t[8] !== u || t[9] !== b || t[10] !== c || t[11] !== s || t[12] !== o || t[13] !== n || t[14] !== f || t[15] !== A) v = q => {
    if (c) return;
    if (q.key === "escape") {
      if (q.preventDefault(), b) {
        y(null), f(yzd);
        let V = n.find(hzd) ?? n[0];
        if (V) o?.(V.value);
        return;
      }
      s?.();
      return;
    }
    if (u) return;
    if (q.key === "return") {
      if (q.preventDefault(), b || p.current.length > 0) A(p.current);
      return;
    }
    if (q.key === "backspace" || q.key === "delete") {
      q.preventDefault();
      let V = p.current.slice(0, -1);
      f(() => V), b?.onChange(V);
      return;
    }
    if (b) {
      if (q.key.length === 1 && !q.ctrl && !q.meta) {
        q.preventDefault();
        let V = p.current + q.key;
        f(() => V), b.onChange(V);
      }
      return;
    }
    let W = jK(q.key);
    if (/^[0-9]$/.test(W)) q.preventDefault(), g(null), f(V => V + W);
  }, t[7] = p, t[8] = u, t[9] = b, t[10] = c, t[11] = s, t[12] = o, t[13] = n, t[14] = f, t[15] = A, t[16] = v;else v = t[16];
  let C = v,
    x;
  if (t[17] !== d || t[18] !== b || t[19] !== h || t[20] !== s || t[21] !== n.length) x = b ? `Enter text for option ${h} (${GU(b.label)}), or Escape for the list: ${d}` : `Enter selection [1-${n.length}]${s ? ", or Escape to cancel" : ""}: ${d}`, t[17] = d, t[18] = b, t[19] = h, t[20] = s, t[21] = n.length, t[22] = x;else x = t[22];
  let I = x,
    k;
  if (t[23] !== I) k = rn(I), t[23] = I, t[24] = k;else k = t[24];
  let D = !c && !u,
    P;
  if (t[25] !== k || t[26] !== D) P = {
    line: 0,
    column: k,
    active: D,
    visible: !0
  }, t[25] = k, t[26] = D, t[27] = P;else P = t[27];
  let O = RW(P),
    L;
  if (t[28] !== C || t[29] !== c) L = c ? {} : {
    tabIndex: 0,
    onKeyDown: C
  }, t[28] = C, t[29] = c, t[30] = L;else L = t[30];
  let M;
  if (t[31] !== l || t[32] !== n) {
    let q;
    if (t[34] !== l) q = (W, V) => qD.jsx(X6i, {
      index: V + 1,
      option: W,
      selected: l !== void 0 && W.value === l
    }, String(W.value)), t[34] = l, t[35] = q;else q = t[35];
    M = n.map(q), t[31] = l, t[32] = n, t[33] = M;
  } else M = t[33];
  let N;
  if (t[36] !== m) N = m && qD.jsx(w, {
    children: m
  }), t[36] = m, t[37] = N;else N = t[37];
  let B;
  if (t[38] !== O || t[39] !== u || t[40] !== I) B = !u && qD.jsx(U, {
    ref: O,
    children: qD.jsx(w, {
      children: I
    })
  }), t[38] = O, t[39] = u, t[40] = I, t[41] = B;else B = t[41];
  let $;
  if (t[42] !== M || t[43] !== N || t[44] !== B || t[45] !== L) $ = qD.jsxs(U, {
    ref: _,
    flexDirection: "column",
    ...L,
    children: [M, N, B]
  }), t[42] = M, t[43] = N, t[44] = B, t[45] = L, t[46] = $;else $ = t[46];
  return $;
}
function hzd(e) {
  return e.type !== "input";
}
function yzd() {
  return "";
}
function _zd() {
  return "";
}
function bzd() {
  return "";
}
function Szd() {
  return "";
}
function Ezd() {
  return "";
}
function Y6i({
  options: e,
  defaultValue: t = [],
  onChange: n,
  onSubmit: r,
  onFocus: o,
  onCancel: s,
  isDisabled: i = !1,
  submitButtonText: a
}) {
  let [l, c, u] = CZr(),
    [d, p] = WU.useState(null),
    [f, m] = WU.useState(null),
    g = WU.useRef(!1);
  WU.useEffect(() => {
    if (f !== null) {
      let k = [...f];
      m(null), g.current = !1, r?.(k);
    }
  }, [f]);
  let [h, y] = WU.useState(null),
    b = h && e[h.index - 1]?.type === "input" ? e[h.index - 1] : null,
    _ = WU.useRef(null);
  M0(_, !i), Wh("multi-select", !!s && !i);
  let S = k => {
      g.current = !0, n?.([...k]), m(k), u(() => ""), y(null);
    },
    A = k => {
      if (b && h) {
        if (k === "") {
          p("Enter some text, or Escape for the list.");
          return;
        }
        S([...h.stashed, b.value]);
        return;
      }
      let D = k.trim();
      if (D === "") {
        S(t);
        return;
      }
      let P = D.split(/[\s,]+/).filter(Boolean);
      if (P.length === 0) {
        S(t);
        return;
      }
      let O = new Set(),
        L = [],
        M = null;
      for (let N of P) {
        if (!/^\d+$/.test(N)) {
          p(`Invalid selection "${N}". Enter numbers between 1 and ${e.length}, comma- or space-separated.`), u(() => "");
          return;
        }
        let B = Number.parseInt(N, 10);
        if (O.has(B)) continue;
        if (O.add(B), B < 1 || B > e.length) {
          p(`Invalid selection "${N}". Enter numbers between 1 and ${e.length}, comma- or space-separated.`), u(() => "");
          return;
        }
        let $ = e[B - 1];
        if ($.disabled) {
          p(`Option ${B} is disabled.`), u(() => "");
          return;
        }
        if ($.type === "input") {
          if (M) {
            p("Only one free-text option can be included per selection."), u(() => "");
            return;
          }
          M = {
            index: B,
            opt: $
          };
          continue;
        }
        L.push($.value);
      }
      if (M?.opt) {
        y({
          index: M.index,
          stashed: L,
          raw: D
        });
        let N = M.opt.initialValue ?? "";
        u(() => N), M.opt.onChange(N), o?.(M.opt.value);
        return;
      }
      S(L);
    },
    v = k => {
      if (i) return;
      if (k.key === "escape") {
        if (k.preventDefault(), h) {
          let {
            raw: P
          } = h;
          y(null), u(() => P);
          let O = e.find(L => L.type !== "input") ?? e[0];
          if (O) o?.(O.value);
          return;
        }
        s?.();
        return;
      }
      if (k.key === "return") {
        if (k.preventDefault(), !g.current) A(c.current);
        return;
      }
      if (k.key === "backspace" || k.key === "delete") {
        k.preventDefault();
        let P = c.current.slice(0, -1);
        u(() => P), b?.onChange(P);
        return;
      }
      if (b) {
        if (k.key.length === 1 && !k.ctrl && !k.meta) {
          k.preventDefault();
          let P = c.current + k.key;
          u(() => P), b.onChange(P);
        }
        return;
      }
      let D = nae(jK(k.key)).replace("\uFF0C", ",").replace("\u3001", ",");
      if (/^[0-9, ]$/.test(D)) k.preventDefault(), p(null), u(P => P + D);
    },
    C = b ? `Enter text for option ${h?.index} (${GU(b.label)}), or Escape for the list: ${l}` : `Enter selections (comma- or space-separated) [1-${e.length}]${a ? ` then Enter to ${a}` : ""}${t.length > 0 ? ", bare Enter for defaults" : ""}${s ? ", or Escape to cancel" : ""}: ${l}`,
    x = RW({
      line: 0,
      column: rn(C),
      active: !i,
      visible: !0
    }),
    I = new Set(t);
  return qD.jsxs(U, {
    ref: _,
    flexDirection: "column",
    ...(i ? {} : {
      tabIndex: 0,
      onKeyDown: v
    }),
    children: [e.map((k, D) => qD.jsx(X6i, {
      index: D + 1,
      option: k,
      selected: I.has(k.value)
    }, String(k.value))), d && qD.jsx(w, {
      children: d
    }), qD.jsx(U, {
      ref: x,
      children: qD.jsx(w, {
        children: C
      })
    })]
  });
}
function X6i(e) {
  let t = MUt.c(10),
    {
      index: n,
      option: r,
      selected: o
    } = e,
    s;
  if (t[0] !== r.label) s = GU(r.label), t[0] = r.label, t[1] = s;else s = t[1];
  let i = s,
    a = r.description ? ` \u2014 ${r.description}` : "",
    l = r.disabled ? "(disabled)" : null,
    c = o ? "(selected)" : null,
    u;
  if (t[2] !== l || t[3] !== c) u = [l, c].filter(Boolean), t[2] = l, t[3] = c, t[4] = u;else u = t[4];
  let d = u.join(" "),
    p = d ? `${d} ` : "",
    f;
  if (t[5] !== a || t[6] !== n || t[7] !== i || t[8] !== p) f = qD.jsxs(w, {
    children: [n, ". ", p, i, a]
  }), t[5] = a, t[6] = n, t[7] = i, t[8] = p, t[9] = f;else f = t[9];
  return f;
}
function J6i(e) {
  let t = MUt.c(34),
    {
      confirmLabel: n,
      cancelLabel: r,
      onConfirm: o,
      onCancel: s
    } = e,
    [i, a, l] = CZr(),
    [c, u] = WU.useState(null),
    d = WU.useRef(null);
  M0(d, !0), Wh("select", !0);
  let p;
  if (t[0] !== s || t[1] !== o || t[2] !== l) p = P => {
    let O = P.trim().toLowerCase();
    if (O === "y" || O === "yes") return o();
    if (O === "n" || O === "no") return s();
    u("Please answer y or n."), l(Hzd);
  }, t[0] = s, t[1] = o, t[2] = l, t[3] = p;else p = t[3];
  let f = p,
    m;
  if (t[4] !== a || t[5] !== s || t[6] !== l || t[7] !== f) m = P => {
    if (P.key === "escape") return P.preventDefault(), s();
    if (P.key === "return") return P.preventDefault(), f(a.current);
    if (P.key === "backspace" || P.key === "delete") {
      P.preventDefault(), l(Azd);
      return;
    }
    if (P.key.length === 1 && !P.ctrl && !P.meta) P.preventDefault(), u(null), l(O => O + P.key);
  }, t[4] = a, t[5] = s, t[6] = l, t[7] = f, t[8] = m;else m = t[8];
  let g = m,
    h = `Enter y/n: ${i}`,
    y;
  if (t[9] !== h) y = rn(h), t[9] = h, t[10] = y;else y = t[10];
  let b;
  if (t[11] !== y) b = {
    line: 0,
    column: y,
    active: !0,
    visible: !0
  }, t[11] = y, t[12] = b;else b = t[12];
  let _ = RW(b),
    S;
  if (t[13] !== n) S = GU(n), t[13] = n, t[14] = S;else S = t[14];
  let A;
  if (t[15] !== S) A = qD.jsxs(w, {
    children: ["y. ", S]
  }), t[15] = S, t[16] = A;else A = t[16];
  let v;
  if (t[17] !== r) v = GU(r), t[17] = r, t[18] = v;else v = t[18];
  let C;
  if (t[19] !== v) C = qD.jsxs(w, {
    children: ["n. ", v]
  }), t[19] = v, t[20] = C;else C = t[20];
  let x;
  if (t[21] !== c) x = c && qD.jsx(w, {
    children: c
  }), t[21] = c, t[22] = x;else x = t[22];
  let I;
  if (t[23] !== h) I = qD.jsx(w, {
    children: h
  }), t[23] = h, t[24] = I;else I = t[24];
  let k;
  if (t[25] !== _ || t[26] !== I) k = qD.jsx(U, {
    ref: _,
    children: I
  }), t[25] = _, t[26] = I, t[27] = k;else k = t[27];
  let D;
  if (t[28] !== g || t[29] !== k || t[30] !== A || t[31] !== C || t[32] !== x) D = qD.jsxs(U, {
    ref: d,
    flexDirection: "column",
    tabIndex: 0,
    onKeyDown: g,
    children: [A, C, x, k]
  }), t[28] = g, t[29] = k, t[30] = A, t[31] = C, t[32] = x, t[33] = D;else D = t[33];
  return D;
}
function Azd(e) {
  return e.slice(0, -1);
}
function Hzd() {
  return "";
}
var MUt, WU, qD;