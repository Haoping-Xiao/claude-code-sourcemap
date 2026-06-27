// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mYl
// matched 2.1.88 source: src/components/agents/ColorPicker.tsx
// class=modified  jaccard=0.2801  score=0.4375  fileCov=0.4378
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mYl] deps: si, Ye, ps, IL, M7, tQ, ty, kpe, Coe, AN, VAt
((s4o = R(lt(), 1)), (lm = R(se(), 1)));
function Nsr(e) {
  let t = gYl.c(17),
    { agentName: n, currentColor: r, onConfirm: o } = e,
    s = r === void 0 ? "automatic" : r,
    i;
  if (t[0] !== s) ((i = zAt.findIndex((y) => y === s)), (t[0] = s), (t[1] = i));
  else i = t[1];
  let [a, l] = hYl.useState(Math.max(0, i)),
    c;
  if (t[2] !== o || t[3] !== a)
    ((c = (y) => {
      if (y.key === "up") (y.preventDefault(), l(MVf));
      else if (y.key === "down") (y.preventDefault(), l(PVf));
      else if (y.key === "return") {
        y.preventDefault();
        let b = zAt[a];
        o(b === "automatic" ? void 0 : b);
      }
    }),
      (t[2] = o),
      (t[3] = a),
      (t[4] = c));
  else c = t[4];
  let u = c,
    d = zAt[a],
    p;
  if (t[5] !== a)
    ((p = zAt.map((y, b) => {
      let _ = b === a;
      return zq.jsxs(
        U,
        {
          flexDirection: "row",
          gap: 1,
          children: [
            zq.jsx(w, {
              color: _ ? "suggestion" : void 0,
              children: _ ? nt.pointer : " ",
            }),
            y === "automatic"
              ? zq.jsx(w, {
                  bold: _,
                  children: "Automatic color",
                })
              : zq.jsxs(U, {
                  gap: 1,
                  children: [
                    zq.jsx(pE, {
                      color: C$[y],
                      children: " ",
                    }),
                    zq.jsx(w, {
                      bold: _,
                      children: Cx(y),
                    }),
                  ],
                }),
          ],
        },
        y,
      );
    })),
      (t[5] = a),
      (t[6] = p));
  else p = t[6];
  let f;
  if (t[7] !== p)
    ((f = zq.jsx(U, {
      flexDirection: "column",
      children: p,
    })),
      (t[7] = p),
      (t[8] = f));
  else f = t[8];
  let m;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((m = zq.jsx(w, {
      children: "Preview: ",
    })),
      (t[9] = m));
  else m = t[9];
  let g;
  if (t[10] !== n || t[11] !== d)
    ((g = zq.jsxs(U, {
      marginTop: 1,
      children: [
        m,
        d === void 0 || d === "automatic"
          ? zq.jsxs(w, {
              inverse: true,
              bold: true,
              children: [" ", "@", n, " "],
            })
          : zq.jsxs(pE, {
              color: C$[d],
              bold: true,
              padded: true,
              children: ["@", n],
            }),
      ],
    })),
      (t[10] = n),
      (t[11] = d),
      (t[12] = g));
  else g = t[12];
  let h;
  if (t[13] !== u || t[14] !== f || t[15] !== g)
    ((h = zq.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: u,
      children: [f, g],
    })),
      (t[13] = u),
      (t[14] = f),
      (t[15] = g),
      (t[16] = h));
  else h = t[16];
  return h;
}
function PVf(e) {
  return e < zAt.length - 1 ? e + 1 : 0;
}
function MVf(e) {
  return e > 0 ? e - 1 : zAt.length - 1;
}
var gYl, hYl, zq, zAt;
