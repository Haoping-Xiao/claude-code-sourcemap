// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Unl
// matched 2.1.88 source: src/utils/markdown.ts
// class=partial  jaccard=0.0781  score=0.5379  fileCov=0.0837
// note: low-confidence suggestion: src/utils/markdown.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Unl = E(() => {
  _i();
  Tc();
  Xge();
  Ye();
  e8t();
  Nnl = R(lt(), 1), r8t = R(se(), 1);
});
function _tf(e) {
  return ytf.test(e.length > 500 ? e.slice(0, 500) : e);
}
function btf(e, t = !0) {
  if (!_tf(e)) return [{
    type: "paragraph",
    raw: e,
    text: e,
    tokens: [{
      type: "text",
      raw: e,
      text: e
    }]
  }];
  if (!t) return ug.lexer(e);
  let n = XSs(e),
    r = x8e.get(n);
  if (r) return x8e.delete(n), x8e.set(n, r), r;
  let o = ug.lexer(e);
  if (x8e.size >= htf) {
    let s = x8e.keys().next().value;
    if (s !== void 0) x8e.delete(s);
  }
  return x8e.set(n, o), o;
}
function zg(e) {
  let t = E6n.c(5),
    n = G_(),
    r;
  if (t[0] !== n.syntaxHighlightingDisabled) r = n.syntaxHighlightingDisabled ? null : GDe(), t[0] = n.syntaxHighlightingDisabled, t[1] = r;else r = t[1];
  let o = r,
    s;
  if (t[2] !== o || t[3] !== e) s = eQ.jsx(Stf, {
    ...e,
    highlight: o
  }), t[2] = o, t[3] = e, t[4] = s;else s = t[4];
  return s;
}
function Stf(e) {
  let t = E6n.c(12),
    {
      children: n,
      dimColor: r,
      italic: o,
      stripPromptTags: s,
      tailWrap: i,
      skipTokenCache: a,
      highlight: l
    } = e,
    c = s === void 0 ? !0 : s,
    u = a === void 0 ? !1 : a,
    [d] = na();
  b6n();
  let p = LLn(),
    f;
  if (t[0] !== n || t[1] !== r || t[2] !== l || t[3] !== o || t[4] !== p || t[5] !== u || t[6] !== c || t[7] !== i || t[8] !== d) {
    let h = c ? RMe(n) : n,
      y = btf(h, !u);
    f = [];
    let b = "",
      _ = function (A) {
        if (b) f.push(eQ.jsx(bd, {
          dimColor: r,
          italic: o,
          wrap: A,
          children: b.replace(/^\n+/, "").trimEnd()
        }, f.length)), b = "";
      };
    for (let S of y) if (S.type === "table") _(), f.push(eQ.jsx(Bnl, {
      token: S,
      highlight: l,
      linkCap: p
    }, f.length));else if (S.type === "blockquote") _(), f.push(eQ.jsx(Etf, {
      token: S,
      theme: d,
      highlight: l,
      dimColor: r,
      linkCap: p
    }, f.length));else b = b + oR(S, d, 0, null, null, l, !1, p);
    _(i), t[0] = n, t[1] = r, t[2] = l, t[3] = o, t[4] = p, t[5] = u, t[6] = c, t[7] = i, t[8] = d, t[9] = f;
  } else f = t[9];
  let m = f,
    g;
  if (t[10] !== m) g = eQ.jsx(U, {
    flexDirection: "column",
    gap: 1,
    children: m
  }), t[10] = m, t[11] = g;else g = t[11];
  return g;
}
function Etf(e) {
  let t = E6n.c(12),
    {
      token: n,
      theme: r,
      highlight: o,
      dimColor: s,
      linkCap: i
    } = e,
    a;
  if (t[0] !== o || t[1] !== i || t[2] !== r || t[3] !== n.tokens) {
    let u;
    if (t[5] !== o || t[6] !== i || t[7] !== r) u = d => oR(d, r, 0, null, null, o, !1, i), t[5] = o, t[6] = i, t[7] = r, t[8] = u;else u = t[8];
    a = wt.italic(n.tokens.map(u).join("").replace(/^\n+/, "").trimEnd()), t[0] = o, t[1] = i, t[2] = r, t[3] = n.tokens, t[4] = a;
  } else a = t[4];
  let l = a,
    c;
  if (t[9] !== s || t[10] !== l) c = eQ.jsx(U, {
    borderStyle: "quote",
    borderTop: !1,
    borderBottom: !1,
    borderRight: !1,
    borderDimColor: !0,
    paddingLeft: 1,
    children: eQ.jsx(bd, {
      dimColor: s,
      children: l
    })
  }), t[9] = s, t[10] = l, t[11] = c;else c = t[11];
  return c;
}
function jnl({
  children: e,
  hideTrailingLine: t = !1
}) {
  b6n();
  let n = RMe(e),
    r = Fnl.useRef("");
  if (!n.startsWith(r.current)) r.current = "";
  let o = r.current.length,
    s = ug.lexer(n.substring(o)),
    i = s.length - 1;
  while (i >= 0 && s[i].type === "space") i--;
  let a = 0;
  for (let d = 0; d < i; d++) a += s[d].raw.length;
  if (a > 0) r.current = n.substring(0, o + a);
  let l = r.current,
    c = n.substring(l.length),
    u = !c.endsWith(`
`);
  return eQ.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [l && eQ.jsx(zg, {
      skipTokenCache: !0,
      children: l
    }), c && eQ.jsx(zg, {
      tailWrap: t && u ? "wrap-stream" : void 0,
      skipTokenCache: !0,
      children: c
    })]
  });
}
var E6n,
  Fnl,
  eQ,
  htf = 500,
  x8e,
  ytf;