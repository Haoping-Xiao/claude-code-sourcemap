// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vKe
// matched 2.1.88 source: src/components/diff/DiffDialog.tsx
// class=partial  jaccard=0.0708  score=0.2448  fileCov=0.0905
// note: low-confidence suggestion: src/components/diff/DiffDialog.tsx; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vKe] deps: hooks/useTerminalSize.ts
V1l = R(lt(), 1), z1l = R(se(), 1);
function DiffDialog(t0) {
  let t = K1l.c(61),
    {
      filePath: n,
      hunks: sources,
      isLargeFile: o,
      isBinary: s,
      isTruncated: i,
      isUntracked: a,
      width: l
    } = t0,
    {
      columns: c
    } = br(),
    u = l ?? c - 4,
    d;
  if (t[0] !== n || t[1] !== s || t[2] !== o || t[3] !== a) {
    e: {
      if (!n || s || o || a) {
        let x;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) x = {
          firstLine: null,
          fileContent: void 0
        }, t[5] = x;else x = t[5];
        d = x;
        break e;
      }
      let C;
      try {
        C = oet(Y1l.resolve($t(), n), {
          maxBytes: e$f
        });
      } catch {
        let x;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) x = {
          firstLine: null,
          fileContent: void 0
        }, t[6] = x;else x = t[6];
        d = x;
        break e;
      }
      d = {
        firstLine: Gd(C),
        fileContent: C
      };
    }
    t[0] = n, t[1] = s, t[2] = o, t[3] = a, t[4] = d;
  } else d = t[4];
  let {
    firstLine: p,
    fileContent: f
  } = d;
  if (a) {
    let C;
    if (t[7] !== n) C = Rb.jsx(w, {
      bold: true,
      children: n
    }), t[7] = n, t[8] = C;else C = t[8];
    let x;
    if (t[9] === Symbol.for("react.memo_cache_sentinel")) x = Rb.jsx(mz, {
      children: "untracked"
    }), t[9] = x;else x = t[9];
    let I;
    if (t[10] !== C) I = Rb.jsxs(U, {
      children: [C, x]
    }), t[10] = C, t[11] = I;else I = t[11];
    let k;
    if (t[12] !== u) k = Rb.jsx(qh, {
      width: u
    }), t[12] = u, t[13] = k;else k = t[13];
    let D;
    if (t[14] === Symbol.for("react.memo_cache_sentinel")) D = Rb.jsx(w, {
      dimColor: true,
      italic: true,
      children: "New file not yet staged."
    }), t[14] = D;else D = t[14];
    let P;
    if (t[15] !== n) P = Rb.jsxs(U, {
      flexDirection: "column",
      children: [D, Rb.jsxs(w, {
        dimColor: true,
        italic: true,
        children: ["Run `git add :/", n, "` to see line counts."]
      })]
    }), t[15] = n, t[16] = P;else P = t[16];
    let O;
    if (t[17] !== I || t[18] !== k || t[19] !== P) O = Rb.jsxs(U, {
      flexDirection: "column",
      width: "100%",
      children: [I, k, P]
    }), t[17] = I, t[18] = k, t[19] = P, t[20] = O;else O = t[20];
    return O;
  }
  if (s) {
    let C;
    if (t[21] !== n) C = Rb.jsx(U, {
      children: Rb.jsx(w, {
        bold: true,
        children: n
      })
    }), t[21] = n, t[22] = C;else C = t[22];
    let x;
    if (t[23] !== u) x = Rb.jsx(qh, {
      width: u
    }), t[23] = u, t[24] = x;else x = t[24];
    let I;
    if (t[25] === Symbol.for("react.memo_cache_sentinel")) I = Rb.jsx(U, {
      flexDirection: "column",
      children: Rb.jsx(w, {
        dimColor: true,
        italic: true,
        children: "Binary file - cannot display diff"
      })
    }), t[25] = I;else I = t[25];
    let k;
    if (t[26] !== C || t[27] !== x) k = Rb.jsxs(U, {
      flexDirection: "column",
      width: "100%",
      children: [C, x, I]
    }), t[26] = C, t[27] = x, t[28] = k;else k = t[28];
    return k;
  }
  if (o) {
    let C;
    if (t[29] !== n) C = Rb.jsx(U, {
      children: Rb.jsx(w, {
        bold: true,
        children: n
      })
    }), t[29] = n, t[30] = C;else C = t[30];
    let x;
    if (t[31] !== u) x = Rb.jsx(qh, {
      width: u
    }), t[31] = u, t[32] = x;else x = t[32];
    let I;
    if (t[33] === Symbol.for("react.memo_cache_sentinel")) I = Rb.jsx(U, {
      flexDirection: "column",
      children: Rb.jsx(w, {
        dimColor: true,
        italic: true,
        children: "Large file - diff exceeds 1 MB limit"
      })
    }), t[33] = I;else I = t[33];
    let k;
    if (t[34] !== C || t[35] !== x) k = Rb.jsxs(U, {
      flexDirection: "column",
      width: "100%",
      children: [C, x, I]
    }), t[34] = C, t[35] = x, t[36] = k;else k = t[36];
    return k;
  }
  let m;
  if (t[37] !== n) m = Rb.jsx(w, {
    bold: true,
    children: n
  }), t[37] = n, t[38] = m;else m = t[38];
  let g = i ?? false,
    h;
  if (t[39] !== g) h = Rb.jsx(mz, {
    when: g,
    children: "truncated"
  }), t[39] = g, t[40] = h;else h = t[40];
  let y;
  if (t[41] !== m || t[42] !== h) y = Rb.jsxs(U, {
    children: [m, h]
  }), t[41] = m, t[42] = h, t[43] = y;else y = t[43];
  let b;
  if (t[44] !== u) b = Rb.jsx(qh, {
    width: u
  }), t[44] = u, t[45] = b;else b = t[45];
  let _;
  if (t[46] !== u || t[47] !== f || t[48] !== n || t[49] !== p || t[50] !== sources) _ = sources.length === 0 ? Rb.jsx(Fl, {
    children: "No diff content"
  }) : sources.map((C, x) => Rb.jsx(Xue, {
    patch: C,
    filePath: n,
    firstLine: p,
    fileContent: f,
    dim: false,
    width: u
  }, x)), t[46] = u, t[47] = f, t[48] = n, t[49] = p, t[50] = sources, t[51] = _;else _ = t[51];
  let S;
  if (t[52] !== _) S = Rb.jsx(U, {
    flexDirection: "column",
    children: _
  }), t[52] = _, t[53] = S;else S = t[53];
  let A;
  if (t[54] !== i) A = i && Rb.jsx(w, {
    dimColor: true,
    italic: true,
    children: "\u2026 diff truncated (exceeded 400 line limit)"
  }), t[54] = i, t[55] = A;else A = t[55];
  let v;
  if (t[56] !== y || t[57] !== b || t[58] !== S || t[59] !== A) v = Rb.jsxs(U, {
    flexDirection: "column",
    width: "100%",
    children: [y, b, S, A]
  }), t[56] = y, t[57] = b, t[58] = S, t[59] = A, t[60] = v;else v = t[60];
  return v;
}
var K1l,
  Y1l,
  Rb,
  e$f = 1000000 /* 1e6 */;