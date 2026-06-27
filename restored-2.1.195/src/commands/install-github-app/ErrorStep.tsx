// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GXt
// matched 2.1.88 source: src/commands/install-github-app/ErrorStep.tsx
// class=modified  jaccard=0.3299  score=1  fileCov=0.3299
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var GXt = E(() => {
  ft();
  Tc();
  oo();
  Lo();
  wr();
  oc();
  es();
  Ls();
  KKe();
  dr();
});
function zWl(e) {
  let { title: t, lines: n, footer: r, emptyMessage: o, customContent: s } = e,
    i = rn(t);
  if (s !== void 0) i = Math.max(i, s.width);
  else if (n.length === 0 && o) i = Math.max(i, rn(o));
  else {
    let l = Math.max(0, ...n.map((c) => (c.timestamp ? rn(c.timestamp) : 0)));
    for (let c of n) {
      let u = l > 0 ? l : 0,
        d = rn(c.text) + (u > 0 ? u + 2 : 0);
      i = Math.max(i, d);
    }
  }
  if (r) i = Math.max(i, rn(r));
  return i;
}
function KWl(e) {
  let t = VWl.c(15),
    { config: n, actualWidth: r } = e,
    { title: o, lines: s, footer: i, emptyMessage: a, customContent: l } = n,
    c;
  if (t[0] !== s) ((c = Math.max(0, ...s.map(qjf))), (t[0] = s), (t[1] = c));
  else c = t[1];
  let u = c,
    d;
  if (t[2] !== o)
    ((d = VN.jsx(w, {
      bold: !0,
      color: "claude",
      children: o,
    })),
      (t[2] = o),
      (t[3] = d));
  else d = t[3];
  let p;
  if (t[4] !== r || t[5] !== l || t[6] !== a || t[7] !== i || t[8] !== s || t[9] !== u)
    ((p = l
      ? VN.jsxs(VN.Fragment, {
          children: [
            l.content,
            i &&
              VN.jsx(w, {
                dimColor: !0,
                italic: !0,
                children: $a(i, r),
              }),
          ],
        })
      : s.length === 0 && a
        ? VN.jsx(Fl, {
            children: $a(a, r),
          })
        : VN.jsxs(VN.Fragment, {
            children: [
              s.map((m, g) => {
                let h = Math.max(10, r - (u > 0 ? u + 2 : 0));
                return VN.jsxs(
                  w,
                  {
                    children: [
                      u > 0 &&
                        VN.jsxs(VN.Fragment, {
                          children: [
                            VN.jsx(w, {
                              dimColor: !0,
                              children: (m.timestamp || "").padEnd(u),
                            }),
                            "  ",
                          ],
                        }),
                      VN.jsx(w, {
                        children: $a(m.text, h),
                      }),
                    ],
                  },
                  g,
                );
              }),
              i &&
                VN.jsx(w, {
                  dimColor: !0,
                  italic: !0,
                  children: $a(i, r),
                }),
            ],
          })),
      (t[4] = r),
      (t[5] = l),
      (t[6] = a),
      (t[7] = i),
      (t[8] = s),
      (t[9] = u),
      (t[10] = p));
  else p = t[10];
  let f;
  if (t[11] !== r || t[12] !== d || t[13] !== p)
    ((f = VN.jsxs(U, {
      flexDirection: "column",
      width: r,
      children: [d, p],
    })),
      (t[11] = r),
      (t[12] = d),
      (t[13] = p),
      (t[14] = f));
  else f = t[14];
  return f;
}
function qjf(e) {
  return e.timestamp ? rn(e.timestamp) : 0;
}
var VWl, VN;
