// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RNl
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0038  score=0.685  fileCov=0.0038
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0038); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module RNl] deps: hnr, Ye, sr, gm, xoe
ynr = R(lt(), 1), xEt = R(rt(), 1), jk = R(se(), 1);
function _nr(e) {
  let t = LNl.c(12),
    {
      children: n,
      color: r,
      dimColor: o
    } = e,
    s,
    i,
    a,
    l;
  if (t[0] !== n || t[1] !== r || t[2] !== o) {
    let u = n.split("`");
    s = w, i = r, a = o, l = u.map(P$f), t[0] = n, t[1] = r, t[2] = o, t[3] = s, t[4] = i, t[5] = a, t[6] = l;
  } else s = t[3], i = t[4], a = t[5], l = t[6];
  let c;
  if (t[7] !== s || t[8] !== i || t[9] !== a || t[10] !== l) c = NNo.jsx(s, {
    color: i,
    dimColor: a,
    children: l
  }), t[7] = s, t[8] = i, t[9] = a, t[10] = l, t[11] = c;else c = t[11];
  return c;
}
function P$f(e, t) {
  return t % 2 === 1 ? NNo.jsx(w, {
    color: "suggestion",
    children: e
  }, t) : e;
}
var LNl, NNo;