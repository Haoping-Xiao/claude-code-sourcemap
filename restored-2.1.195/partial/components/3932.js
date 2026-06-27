// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q9n
// matched 2.1.88 source: src/components/Spinner/SpinnerGlyph.tsx
// class=partial  jaccard=0.1606  score=0.2933  fileCov=0.262
// note: low-confidence suggestion: src/components/Spinner/SpinnerGlyph.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module q9n] deps: Tc, Ye, m0, Pne
lJa = R(lt(), 1), Wg = R(se(), 1), IXp = {
  r: 171,
  g: 43,
  b: 63
};
function eMe(e) {
  let t = pJa.c(34),
    {
      frame: n,
      messageColor: r,
      stalledIntensity: o,
      thinkingIntensity: s,
      reducedMotion: i,
      time: a
    } = e,
    l = o === void 0 ? 0 : o,
    c = s === void 0 ? 0 : s,
    u = i === void 0 ? false : i,
    d = a === void 0 ? 0 : a,
    p = GD();
  if (u) {
    let g = 1 - sPn(d, xXp),
      h = c > 0 ? "warning" : r,
      y = p[h],
      b;
    if (t[0] !== y || t[1] !== g || t[2] !== c) {
      b = Symbol.for("react.early_return_sentinel");
      e: {
        let v = y ? jU(y) : null;
        if (v) {
          let C = WM(v, RXp, 0.5),
            x = WM(C, v, GM(g)),
            I = K4.jsx(w, {
              color: qM(x),
              bold: c >= 0.5,
              children: dJa
            }),
            k;
          if (t[4] !== I) k = K4.jsx(U, {
            "aria-hidden": true,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: I
          }), t[4] = I, t[5] = k;else k = t[5];
          b = k;
          break e;
        }
      }
      t[0] = y, t[1] = g, t[2] = c, t[3] = b;
    } else b = t[3];
    if (b !== Symbol.for("react.early_return_sentinel")) return b;
    let _ = g < 0.5,
      S = c >= 0.5,
      A;
    if (t[6] !== h || t[7] !== _ || t[8] !== S) A = K4.jsx(U, {
      "aria-hidden": true,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: K4.jsx(w, {
        color: h,
        dimColor: _,
        bold: S,
        children: dJa
      })
    }), t[6] = h, t[7] = _, t[8] = S, t[9] = A;else A = t[9];
    return A;
  }
  let f = uJa[n % uJa.length];
  if (l > 0) {
    let g = p[r],
      h;
    if (t[10] !== g || t[11] !== f || t[12] !== l) {
      h = Symbol.for("react.early_return_sentinel");
      e: {
        let _ = g ? jU(g) : null;
        if (_) {
          let S = WM(_, kXp, GM(l)),
            A = K4.jsx(w, {
              color: qM(S),
              children: f
            }),
            v;
          if (t[14] !== A) v = K4.jsx(U, {
            "aria-hidden": true,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: A
          }), t[14] = A, t[15] = v;else v = t[15];
          h = v;
          break e;
        }
      }
      t[10] = g, t[11] = f, t[12] = l, t[13] = h;
    } else h = t[13];
    if (h !== Symbol.for("react.early_return_sentinel")) return h;
    let y = l > 0.5 ? "error" : r,
      b;
    if (t[16] !== y || t[17] !== f) b = K4.jsx(U, {
      "aria-hidden": true,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: K4.jsx(w, {
        color: y,
        children: f
      })
    }), t[16] = y, t[17] = f, t[18] = b;else b = t[18];
    return b;
  }
  if (c > 0) {
    let g = p[r],
      h,
      y;
    if (t[19] !== g || t[20] !== f || t[21] !== p.warning || t[22] !== c) {
      y = Symbol.for("react.early_return_sentinel");
      e: {
        let S = g ? jU(g) : null,
          A = jU(p.warning);
        if (h = c >= 0.5, S && A) {
          let v = WM(S, A, GM(c)),
            C = K4.jsx(w, {
              bold: h,
              color: qM(v),
              children: f
            }),
            x;
          if (t[25] !== C) x = K4.jsx(U, {
            "aria-hidden": true,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: C
          }), t[25] = C, t[26] = x;else x = t[26];
          y = x;
          break e;
        }
      }
      t[19] = g, t[20] = f, t[21] = p.warning, t[22] = c, t[23] = h, t[24] = y;
    } else h = t[23], y = t[24];
    if (y !== Symbol.for("react.early_return_sentinel")) return y;
    let b = c > 0.5 ? "warning" : r,
      _;
    if (t[27] !== h || t[28] !== b || t[29] !== f) _ = K4.jsx(U, {
      "aria-hidden": true,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: K4.jsx(w, {
        bold: h,
        color: b,
        children: f
      })
    }), t[27] = h, t[28] = b, t[29] = f, t[30] = _;else _ = t[30];
    return _;
  }
  let m;
  if (t[31] !== r || t[32] !== f) m = K4.jsx(U, {
    "aria-hidden": true,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: K4.jsx(w, {
      color: r,
      children: f
    })
  }), t[31] = r, t[32] = f, t[33] = m;else m = t[33];
  return m;
}
var pJa,
  K4,
  cJa,
  uJa,
  dJa = "\u25CF",
  xXp = 2000,
  kXp,
  RXp;