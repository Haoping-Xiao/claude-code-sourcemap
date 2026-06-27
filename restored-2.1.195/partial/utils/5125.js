// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JXl
// matched 2.1.88 source: src/components/design-system/LoadingState.tsx
// class=partial  jaccard=0.1032  score=0.1324  fileCov=0.3182
// note: low-confidence suggestion: src/components/design-system/LoadingState.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JXl = E(() => {
  R4o = {
    isEnabled: () => !1,
    isHidden: !0,
    name: "stub"
  };
});
function ZXl(e) {
  let t = QXl.c(42),
    {
      items: n,
      onExit: r,
      onCancel: o
    } = e,
    s;
  if (t[0] !== n.length) s = function (B) {
    G("tengu_exit_background_work_prompt", {
      item_count: n.length,
      chose_exit: B === "exit"
    });
  }, t[0] = n.length, t[1] = s;else s = t[1];
  let i = s,
    a;
  if (t[2] !== i || t[3] !== o || t[4] !== r) a = function (B) {
    switch (i(B), B) {
      case "exit":
        return r();
      case "stay":
        return o();
    }
  }, t[2] = i, t[3] = o, t[4] = r, t[5] = a;else a = t[5];
  let l = a,
    c;
  if (t[6] !== i || t[7] !== o) c = function () {
    i("stay"), o();
  }, t[6] = i, t[7] = o, t[8] = c;else c = t[8];
  let u = c,
    d = br(),
    {
      rows: p
    } = bb(d),
    f = YE(),
    m;
  if (t[9] !== f || t[10] !== p) m = !f && lne() ? Math.floor(p / 2) : p, t[9] = f, t[10] = p, t[11] = m;else m = t[11];
  let h = Math.max(1, m - 12),
    y,
    b,
    _,
    S,
    A,
    v,
    C,
    x;
  if (t[12] !== u || t[13] !== n || t[14] !== h) {
    let N = n.slice(0, h);
    b = zn, C = "Background work is running", x = "The following will stop when you exit:", _ = u, y = U, S = "column", A = 0, v = N.map(K8f), t[12] = u, t[13] = n, t[14] = h, t[15] = y, t[16] = b, t[17] = _, t[18] = S, t[19] = A, t[20] = v, t[21] = C, t[22] = x;
  } else y = t[15], b = t[16], _ = t[17], S = t[18], A = t[19], v = t[20], C = t[21], x = t[22];
  let I = n.length - h,
    k;
  if (t[23] !== I) k = aTe.jsx(d$, {
    count: I,
    unit: "item"
  }), t[23] = I, t[24] = k;else k = t[24];
  let D;
  if (t[25] !== y || t[26] !== k || t[27] !== S || t[28] !== A || t[29] !== v) D = aTe.jsxs(y, {
    flexDirection: S,
    gap: A,
    children: [v, k]
  }), t[25] = y, t[26] = k, t[27] = S, t[28] = A, t[29] = v, t[30] = D;else D = t[30];
  let P;
  if (t[31] === Symbol.for("react.memo_cache_sentinel")) P = {
    label: "Exit anyway",
    value: "exit"
  }, t[31] = P;else P = t[31];
  let O;
  if (t[32] === Symbol.for("react.memo_cache_sentinel")) O = [P, {
    label: "Stay",
    value: "stay"
  }], t[32] = O;else O = t[32];
  let L;
  if (t[33] !== l) L = aTe.jsx(Sr, {
    options: O,
    onChange: l
  }), t[33] = l, t[34] = L;else L = t[34];
  let M;
  if (t[35] !== b || t[36] !== _ || t[37] !== D || t[38] !== L || t[39] !== C || t[40] !== x) M = aTe.jsxs(b, {
    title: C,
    subtitle: x,
    onCancel: _,
    children: [D, L]
  }), t[35] = b, t[36] = _, t[37] = D, t[38] = L, t[39] = C, t[40] = x, t[41] = M;else M = t[41];
  return M;
}
function K8f(e, t) {
  return aTe.jsxs(U, {
    flexDirection: "row",
    children: [aTe.jsx(w, {
      bold: !0,
      children: e.label
    }), e.detail ? aTe.jsxs(w, {
      dimColor: !0,
      children: [" \xB7 ", e.detail]
    }) : null]
  }, t);
}
var QXl, aTe;