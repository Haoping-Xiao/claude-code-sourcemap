// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gzl
// matched 2.1.88 source: src/components/CustomSelect/select.tsx
// class=partial  jaccard=0.0858  score=0.2888  fileCov=0.1089
// note: low-confidence suggestion: src/components/CustomSelect/select.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gzl] deps: si, Mg, _i, Ye, ps, RN, T6t, QH, Bs, vi, Ko
fzl = R(lt(), 1), Ojo = R(rt(), 1), Vq = R(se(), 1);
function yzl(e) {
  let t = hzl.c(32),
    {
      onHeaderFocusChange: n,
      onStateChange: r
    } = e,
    {
      headerFocused: o,
      focusHeader: s
    } = tx(),
    i,
    a;
  if (t[0] !== o || t[1] !== n) i = () => {
    n(o);
  }, a = [o, n], t[0] = o, t[1] = n, t[2] = i, t[3] = a;else i = t[2], a = t[3];
  I1e.useEffect(i, a);
  let {
      getDenials: l
    } = BAt(),
    [c] = I1e.useState(l),
    [u, d] = I1e.useState(wqf),
    [p, f] = I1e.useState(vqf),
    [m, g] = I1e.useState(0),
    h,
    y;
  if (t[4] !== u || t[5] !== c || t[6] !== r || t[7] !== p) h = () => {
    r({
      approved: u,
      retry: p,
      denials: c
    });
  }, y = [u, p, c, r], t[4] = u, t[5] = c, t[6] = r, t[7] = p, t[8] = h, t[9] = y;else h = t[8], y = t[9];
  I1e.useEffect(h, y);
  let b;
  if (t[10] === Symbol.for("react.memo_cache_sentinel")) b = L => {
    let M = Number(L);
    d(N => {
      let B = new Set(N);
      if (B.has(M)) B.delete(M);else B.add(M);
      return B;
    });
  }, t[10] = b;else b = t[10];
  let _ = b,
    S;
  if (t[11] === Symbol.for("react.memo_cache_sentinel")) S = L => {
    g(Number(L));
  }, t[11] = S;else S = t[11];
  let A = S,
    v;
  if (t[12] !== m || t[13] !== o) v = function (M) {
    if (o) return;
    if (M.ctrl || M.meta || M.shift) return;
    if (M.key !== "r") return;
    M.preventDefault(), f(N => {
      let B = new Set(N);
      if (B.has(m)) B.delete(m);else B.add(m);
      return B;
    }), d(N => {
      if (N.has(m)) return N;
      let B = new Set(N);
      return B.add(m), B;
    });
  }, t[12] = m, t[13] = o, t[14] = v;else v = t[14];
  let C = v;
  if (c.length === 0) {
    let L;
    if (t[15] === Symbol.for("react.memo_cache_sentinel")) L = ame.jsx(w, {
      dimColor: true,
      children: "No recent denials. Commands denied by the auto mode classifier will appear here."
    }), t[15] = L;else L = t[15];
    return L;
  }
  let x;
  if (t[16] !== u || t[17] !== c || t[18] !== p) {
    let L;
    if (t[20] !== u || t[21] !== p) L = (M, N) => {
      let B = u.has(N),
        $ = p.has(N) ? " (retry)" : "";
      return {
        label: ame.jsxs(w, {
          children: [ame.jsx(Hs, {
            status: B ? "success" : "error",
            withSpace: true
          }), M.display, ame.jsx(w, {
            dimColor: true,
            children: $
          })]
        }),
        value: String(N),
        ...(M.reason ? {
          description: M.reason,
          dimDescription: true
        } : {})
      };
    }, t[20] = u, t[21] = p, t[22] = L;else L = t[22];
    x = c.map(L), t[16] = u, t[17] = c, t[18] = p, t[19] = x;
  } else x = t[19];
  let I = x,
    k;
  if (t[23] === Symbol.for("react.memo_cache_sentinel")) k = ame.jsx(w, {
    children: "Commands recently denied by the auto mode classifier."
  }), t[23] = k;else k = t[23];
  let D = Math.min(10, I.length),
    P;
  if (t[24] !== s || t[25] !== o || t[26] !== I || t[27] !== D) P = ame.jsx(U, {
    marginTop: 1,
    children: ame.jsx(Sr, {
      options: I,
      onChange: _,
      onFocus: A,
      visibleOptionCount: D,
      isDisabled: o,
      onUpFromFirstItem: s
    })
  }), t[24] = s, t[25] = o, t[26] = I, t[27] = D, t[28] = P;else P = t[28];
  let O;
  if (t[29] !== C || t[30] !== P) O = ame.jsxs(U, {
    flexDirection: "column",
    onKeyDown: C,
    children: [k, P]
  }), t[29] = C, t[30] = P, t[31] = O;else O = t[31];
  return O;
}
function vqf() {
  return new Set();
}
function wqf() {
  return new Set();
}
var hzl, I1e, ame;