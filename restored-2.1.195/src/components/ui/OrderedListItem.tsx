// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LUt
// matched 2.1.88 source: src/components/ui/OrderedListItem.tsx
// class=modified  jaccard=0.3416  score=1  fileCov=0.3416
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var LUt = E(() => {
  Ye();
  ((H6i = R(lt(), 1)), (T6i = R(se(), 1)));
});
function w6i(e) {
  let t = v6i.c(23),
    { text: n, highlights: r } = e,
    o;
  if (t[0] !== r || t[1] !== n) {
    let A = S6i(n, r);
    o = [[]];
    let v = 0;
    for (let C of A) {
      let x = C.text.split(`
`);
      for (let I = 0; I < x.length; I++) {
        if (I > 0) (o.push([]), (v = v + 1));
        let k = x[I];
        if (k.length > 0)
          o.at(-1).push({
            text: k,
            highlight: C.highlight,
            start: v,
          });
        v = v + k.length;
      }
    }
    ((t[0] = r), (t[1] = n), (t[2] = o));
  } else o = t[2];
  let s;
  if (t[3] !== r) ((s = r.some(V6d)), (t[3] = r), (t[4] = s));
  else s = t[4];
  let i = s,
    a = 0,
    l = 1;
  if (i) {
    let A = 1 / 0,
      v = -1 / 0;
    if (t[5] !== v || t[6] !== r || t[7] !== A) {
      for (let C of r) if (C.shimmerColor) ((A = Math.min(A, C.start)), (v = Math.max(v, C.end)));
      ((t[5] = v), (t[6] = r), (t[7] = A), (t[8] = A), (t[9] = v));
    } else ((A = t[8]), (v = t[9]));
    ((a = A - 10), (l = v - A + 20));
  }
  let c;
  if (t[10] !== l || t[11] !== i || t[12] !== o || t[13] !== a)
    ((c = {
      lines: o,
      hasShimmer: i,
      sweepStart: a,
      cycleLength: l,
    }),
      (t[10] = l),
      (t[11] = i),
      (t[12] = o),
      (t[13] = a),
      (t[14] = c));
  else c = t[14];
  let { lines: u, hasShimmer: d, sweepStart: p, cycleLength: f } = c,
    m = Yce(),
    g = d && !m,
    [h, y] = Kf(g ? 50 : null),
    b = g ? p + (Math.floor(y / 50) % f) : cPn,
    _;
  if (t[15] !== b || t[16] !== u) {
    let A;
    if (t[18] !== b)
      ((A = (v, C) =>
        M0e.jsx(
          U,
          {
            children:
              v.length === 0
                ? M0e.jsx(w, {
                    children: " ",
                  })
                : v.map((x, I) => {
                    if (x.highlight?.shimmerColor && x.highlight.color)
                      return M0e.jsx(
                        w,
                        {
                          children: x.text.split("").map((k, D) =>
                            M0e.jsx(
                              OGe,
                              {
                                char: k,
                                index: x.start + D,
                                glimmerIndex: b,
                                messageColor: x.highlight.color,
                                shimmerColor: x.highlight.shimmerColor,
                              },
                              D,
                            ),
                          ),
                        },
                        I,
                      );
                    return M0e.jsx(
                      w,
                      {
                        color: x.highlight?.color,
                        dimColor: x.highlight?.dimColor,
                        inverse: x.highlight?.inverse,
                        children: M0e.jsx(bd, {
                          children: x.text,
                        }),
                      },
                      I,
                    );
                  }),
          },
          C,
        )),
        (t[18] = b),
        (t[19] = A));
    else A = t[19];
    ((_ = u.map(A)), (t[15] = b), (t[16] = u), (t[17] = _));
  } else _ = t[17];
  let S;
  if (t[20] !== h || t[21] !== _)
    ((S = M0e.jsx(U, {
      ref: h,
      flexDirection: "column",
      children: _,
    })),
      (t[20] = h),
      (t[21] = _),
      (t[22] = S));
  else S = t[22];
  return S;
}
function V6d(e) {
  return e.shimmerColor;
}
var v6i, M0e;
