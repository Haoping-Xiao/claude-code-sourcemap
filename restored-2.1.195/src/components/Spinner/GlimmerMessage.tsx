// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aJa
// matched 2.1.88 source: src/components/Spinner/GlimmerMessage.tsx
// class=modified  jaccard=0.266  score=0.7847  fileCov=0.2869
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var aJa = E(() => {
  ZS();
  Ye();
  Pne();
  ((wXp = R(lt(), 1)), (CXp = R(se(), 1)));
});
function OVt(e) {
  let t = lJa.c(102),
    {
      message: n,
      mode: r,
      messageColor: o,
      glimmerIndex: s,
      flashOpacity: i,
      shimmerColor: a,
      stalledIntensity: l,
      thinkingIntensity: c,
    } = e,
    u = l === void 0 ? 0 : l,
    d = c === void 0 ? 0 : c,
    p = GD(),
    f;
  if (t[0] !== n) {
    f = [];
    for (let { segment: L } of BS().segment(n))
      f.push({
        segment: L,
        width: rn(L),
      });
    ((t[0] = n), (t[1] = f));
  } else f = t[1];
  let m;
  if (t[2] !== n) ((m = rn(n)), (t[2] = n), (t[3] = m));
  else m = t[3];
  let g;
  if (t[4] !== f || t[5] !== m)
    ((g = {
      segments: f,
      messageWidth: m,
    }),
      (t[4] = f),
      (t[5] = m),
      (t[6] = g));
  else g = t[6];
  let { segments: h, messageWidth: y } = g;
  if (!n) return null;
  if (u > 0) {
    let L = p[o],
      M;
    if (t[7] !== L || t[8] !== n || t[9] !== u) {
      M = Symbol.for("react.early_return_sentinel");
      e: {
        let W = L ? jU(L) : null;
        if (W) {
          let V = WM(W, IXp, GM(u)),
            Y = qM(V),
            z;
          if (t[11] !== Y || t[12] !== n)
            ((z = Wg.jsx(w, {
              color: Y,
              children: n,
            })),
              (t[11] = Y),
              (t[12] = n),
              (t[13] = z));
          else z = t[13];
          let K;
          if (t[14] !== Y)
            ((K = Wg.jsx(w, {
              color: Y,
              children: " ",
            })),
              (t[14] = Y),
              (t[15] = K));
          else K = t[15];
          let Z;
          if (t[16] !== z || t[17] !== K)
            ((Z = Wg.jsxs(Wg.Fragment, {
              children: [z, K],
            })),
              (t[16] = z),
              (t[17] = K),
              (t[18] = Z));
          else Z = t[18];
          M = Z;
          break e;
        }
      }
      ((t[7] = L), (t[8] = n), (t[9] = u), (t[10] = M));
    } else M = t[10];
    if (M !== Symbol.for("react.early_return_sentinel")) return M;
    let N = u > 0.5 ? "error" : o,
      B;
    if (t[19] !== N || t[20] !== n)
      ((B = Wg.jsx(w, {
        color: N,
        children: n,
      })),
        (t[19] = N),
        (t[20] = n),
        (t[21] = B));
    else B = t[21];
    let $;
    if (t[22] !== N)
      (($ = Wg.jsx(w, {
        color: N,
        children: " ",
      })),
        (t[22] = N),
        (t[23] = $));
    else $ = t[23];
    let q;
    if (t[24] !== B || t[25] !== $)
      ((q = Wg.jsxs(Wg.Fragment, {
        children: [B, $],
      })),
        (t[24] = B),
        (t[25] = $),
        (t[26] = q));
    else q = t[26];
    return q;
  }
  if (d > 0) {
    let L = p[o],
      M;
    if (t[27] !== L || t[28] !== n || t[29] !== p.warning || t[30] !== d) {
      M = Symbol.for("react.early_return_sentinel");
      e: {
        let W = L ? jU(L) : null,
          V = jU(p.warning);
        if (W && V) {
          let Y = WM(W, V, GM(d)),
            z = qM(Y),
            K;
          if (t[32] !== z || t[33] !== n)
            ((K = Wg.jsx(w, {
              color: z,
              children: n,
            })),
              (t[32] = z),
              (t[33] = n),
              (t[34] = K));
          else K = t[34];
          let Z;
          if (t[35] !== z)
            ((Z = Wg.jsx(w, {
              color: z,
              children: " ",
            })),
              (t[35] = z),
              (t[36] = Z));
          else Z = t[36];
          let J;
          if (t[37] !== K || t[38] !== Z)
            ((J = Wg.jsxs(Wg.Fragment, {
              children: [K, Z],
            })),
              (t[37] = K),
              (t[38] = Z),
              (t[39] = J));
          else J = t[39];
          M = J;
          break e;
        }
      }
      ((t[27] = L), (t[28] = n), (t[29] = p.warning), (t[30] = d), (t[31] = M));
    } else M = t[31];
    if (M !== Symbol.for("react.early_return_sentinel")) return M;
    let N = d > 0.5 ? "warning" : o,
      B;
    if (t[40] !== N || t[41] !== n)
      ((B = Wg.jsx(w, {
        color: N,
        children: n,
      })),
        (t[40] = N),
        (t[41] = n),
        (t[42] = B));
    else B = t[42];
    let $;
    if (t[43] !== N)
      (($ = Wg.jsx(w, {
        color: N,
        children: " ",
      })),
        (t[43] = N),
        (t[44] = $));
    else $ = t[44];
    let q;
    if (t[45] !== B || t[46] !== $)
      ((q = Wg.jsxs(Wg.Fragment, {
        children: [B, $],
      })),
        (t[45] = B),
        (t[46] = $),
        (t[47] = q));
    else q = t[47];
    return q;
  }
  if (r === "tool-use") {
    let L = p[o],
      M = p[a],
      N;
    if (t[48] !== L || t[49] !== i || t[50] !== n || t[51] !== o || t[52] !== M) {
      N = Symbol.for("react.early_return_sentinel");
      e: {
        let V = L ? jU(L) : null,
          Y = M ? jU(M) : null;
        if (V && Y) {
          let z = WM(V, Y, GM(i)),
            K = Wg.jsx(w, {
              color: qM(z),
              children: n,
            }),
            Z;
          if (t[54] !== o)
            ((Z = Wg.jsx(w, {
              color: o,
              children: " ",
            })),
              (t[54] = o),
              (t[55] = Z));
          else Z = t[55];
          let J;
          if (t[56] !== K || t[57] !== Z)
            ((J = Wg.jsxs(Wg.Fragment, {
              children: [K, Z],
            })),
              (t[56] = K),
              (t[57] = Z),
              (t[58] = J));
          else J = t[58];
          N = J;
          break e;
        }
      }
      ((t[48] = L), (t[49] = i), (t[50] = n), (t[51] = o), (t[52] = M), (t[53] = N));
    } else N = t[53];
    if (N !== Symbol.for("react.early_return_sentinel")) return N;
    let B = i > 0.5 ? a : o,
      $;
    if (t[59] !== B || t[60] !== n)
      (($ = Wg.jsx(w, {
        color: B,
        children: n,
      })),
        (t[59] = B),
        (t[60] = n),
        (t[61] = $));
    else $ = t[61];
    let q;
    if (t[62] !== o)
      ((q = Wg.jsx(w, {
        color: o,
        children: " ",
      })),
        (t[62] = o),
        (t[63] = q));
    else q = t[63];
    let W;
    if (t[64] !== $ || t[65] !== q)
      ((W = Wg.jsxs(Wg.Fragment, {
        children: [$, q],
      })),
        (t[64] = $),
        (t[65] = q),
        (t[66] = W));
    else W = t[66];
    return W;
  }
  let b = s - 1,
    _ = s + 1;
  if (b >= y || _ < 0) {
    let L;
    if (t[67] !== n || t[68] !== o)
      ((L = Wg.jsx(w, {
        color: o,
        children: n,
      })),
        (t[67] = n),
        (t[68] = o),
        (t[69] = L));
    else L = t[69];
    let M;
    if (t[70] !== o)
      ((M = Wg.jsx(w, {
        color: o,
        children: " ",
      })),
        (t[70] = o),
        (t[71] = M));
    else M = t[71];
    let N;
    if (t[72] !== L || t[73] !== M)
      ((N = Wg.jsxs(Wg.Fragment, {
        children: [L, M],
      })),
        (t[72] = L),
        (t[73] = M),
        (t[74] = N));
    else N = t[74];
    return N;
  }
  let S = Math.max(0, b),
    A = 0,
    v = "",
    C = "",
    x = "";
  if (
    t[75] !== x ||
    t[76] !== v ||
    t[77] !== S ||
    t[78] !== A ||
    t[79] !== h ||
    t[80] !== C ||
    t[81] !== _
  ) {
    for (let { segment: L, width: M } of h) {
      if (A + M <= S) v = v + L;
      else if (A > _) x = x + L;
      else C = C + L;
      A = A + M;
    }
    ((t[75] = x),
      (t[76] = v),
      (t[77] = S),
      (t[78] = A),
      (t[79] = h),
      (t[80] = C),
      (t[81] = _),
      (t[82] = v),
      (t[83] = x),
      (t[84] = C),
      (t[85] = A));
  } else ((v = t[82]), (x = t[83]), (C = t[84]), (A = t[85]));
  let I;
  if (t[86] !== v || t[87] !== o)
    ((I =
      v &&
      Wg.jsx(w, {
        color: o,
        children: v,
      })),
      (t[86] = v),
      (t[87] = o),
      (t[88] = I));
  else I = t[88];
  let k;
  if (t[89] !== C || t[90] !== a)
    ((k = Wg.jsx(w, {
      color: a,
      children: C,
    })),
      (t[89] = C),
      (t[90] = a),
      (t[91] = k));
  else k = t[91];
  let D;
  if (t[92] !== x || t[93] !== o)
    ((D =
      x &&
      Wg.jsx(w, {
        color: o,
        children: x,
      })),
      (t[92] = x),
      (t[93] = o),
      (t[94] = D));
  else D = t[94];
  let P;
  if (t[95] !== o)
    ((P = Wg.jsx(w, {
      color: o,
      children: " ",
    })),
      (t[95] = o),
      (t[96] = P));
  else P = t[96];
  let O;
  if (t[97] !== I || t[98] !== k || t[99] !== D || t[100] !== P)
    ((O = Wg.jsxs(Wg.Fragment, {
      children: [I, k, D, P],
    })),
      (t[97] = I),
      (t[98] = k),
      (t[99] = D),
      (t[100] = P),
      (t[101] = O));
  else O = t[101];
  return O;
}
var lJa, Wg, IXp;
