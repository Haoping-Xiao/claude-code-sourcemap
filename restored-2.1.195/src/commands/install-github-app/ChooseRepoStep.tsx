// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qUl
// matched 2.1.88 source: src/commands/install-github-app/ChooseRepoStep.tsx
// class=modified  jaccard=0.4208  score=0.5393  fileCov=0.657
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qUl] deps: CH, Ye
((GUl = R(lt(), 1)), (aBo = R(se(), 1)));
function ChooseRepoStep(e) {
  let t = VUl.c(52),
    {
      currentRepo: n,
      useCurrentRepo: r,
      repoUrl: o,
      onRepoUrlChange: s,
      onSubmit: i,
      onToggleUseCurrentRepo: a,
    } = e,
    [l, c] = lBo.useState(0),
    [u, d] = lBo.useState(false),
    f = br().columns,
    m;
  if (t[0] !== n || t[1] !== i || t[2] !== o || t[3] !== r)
    ((m = () => {
      if (!(r ? n : o)?.trim()) {
        d(true);
        return;
      }
      i();
    }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = r),
      (t[4] = m));
  else m = t[4];
  let g = m,
    h = !r || !n,
    y;
  if (t[5] !== a)
    ((y = () => {
      (a(true), d(false));
    }),
      (t[5] = a),
      (t[6] = y));
  else y = t[6];
  let b = y,
    _;
  if (t[7] !== a)
    ((_ = () => {
      (a(false), d(false));
    }),
      (t[7] = a),
      (t[8] = _));
  else _ = t[8];
  let S = _,
    A;
  if (t[9] !== S || t[10] !== b || t[11] !== g)
    ((A = {
      "confirm:previous": b,
      "confirm:next": S,
      "confirm:yes": g,
    }),
      (t[9] = S),
      (t[10] = b),
      (t[11] = g),
      (t[12] = A));
  else A = t[12];
  let v = !h,
    C;
  if (t[13] !== v)
    ((C = {
      context: "Confirmation",
      isActive: v,
    }),
      (t[13] = v),
      (t[14] = C));
  else C = t[14];
  No(A, C);
  let x;
  if (t[15] !== S || t[16] !== b)
    ((x = {
      "confirm:previous": b,
      "confirm:next": S,
    }),
      (t[15] = S),
      (t[16] = b),
      (t[17] = x));
  else x = t[17];
  let I;
  if (t[18] !== h)
    ((I = {
      context: "Confirmation",
      isActive: h,
    }),
      (t[18] = h),
      (t[19] = I));
  else I = t[19];
  No(x, I);
  let k;
  if (t[20] === Symbol.for("react.memo_cache_sentinel"))
    ((k = fR.jsx(U, {
      marginBottom: 1,
      children: fR.jsx(LH, {
        subtitle: "Select GitHub repository",
        children: "Install GitHub App",
      }),
    })),
      (t[20] = k));
  else k = t[20];
  let D;
  if (t[21] !== n || t[22] !== r)
    ((D =
      n &&
      fR.jsx(U, {
        marginBottom: 1,
        children: fR.jsxs(w, {
          bold: r,
          color: r ? "permission" : void 0,
          children: [r ? "> " : "  ", "Use current repository: ", n],
        }),
      })),
      (t[21] = n),
      (t[22] = r),
      (t[23] = D));
  else D = t[23];
  let P = !r || !n,
    O = !r || !n ? "permission" : void 0,
    L = !r || !n ? "> " : "  ",
    M = n ? "Enter a different repository" : "Enter repository",
    N;
  if (t[24] !== P || t[25] !== O || t[26] !== L || t[27] !== M)
    ((N = fR.jsx(U, {
      marginBottom: 1,
      children: fR.jsxs(w, {
        bold: P,
        color: O,
        children: [L, M],
      }),
    })),
      (t[24] = P),
      (t[25] = O),
      (t[26] = L),
      (t[27] = M),
      (t[28] = N));
  else N = t[28];
  let B;
  if (
    t[29] !== n ||
    t[30] !== l ||
    t[31] !== g ||
    t[32] !== s ||
    t[33] !== o ||
    t[34] !== f ||
    t[35] !== r
  )
    ((B =
      (!r || !n) &&
      fR.jsx(U, {
        marginLeft: 2,
        marginBottom: 1,
        children: fR.jsx(Ta, {
          value: o,
          onChange: (K) => {
            (s(K), d(false));
          },
          onSubmit: g,
          focus: true,
          placeholder: "Enter a repo as owner/repo or https://github.com/owner/repo\u2026",
          columns: f,
          cursorOffset: l,
          onChangeCursorOffset: c,
          showCursor: true,
        }),
      })),
      (t[29] = n),
      (t[30] = l),
      (t[31] = g),
      (t[32] = s),
      (t[33] = o),
      (t[34] = f),
      (t[35] = r),
      (t[36] = B));
  else B = t[36];
  let $;
  if (t[37] !== D || t[38] !== N || t[39] !== B)
    (($ = fR.jsxs(U, {
      flexDirection: "column",
      borderStyle: "round",
      paddingX: 1,
      children: [k, D, N, B],
    })),
      (t[37] = D),
      (t[38] = N),
      (t[39] = B),
      (t[40] = $));
  else $ = t[40];
  let q;
  if (t[41] !== u)
    ((q =
      u &&
      fR.jsx(U, {
        marginLeft: 3,
        marginBottom: 1,
        children: fR.jsx(w, {
          color: "error",
          children: "Please enter a repository name to continue",
        }),
      })),
      (t[41] = u),
      (t[42] = q));
  else q = t[42];
  let W;
  if (t[43] !== n)
    ((W = n
      ? fR.jsx(ht, {
          chord: ["up", "down"],
          action: "select",
        })
      : null),
      (t[43] = n),
      (t[44] = W));
  else W = t[44];
  let V;
  if (t[45] === Symbol.for("react.memo_cache_sentinel"))
    ((V = fR.jsx(ht, {
      chord: "enter",
      action: "continue",
    })),
      (t[45] = V));
  else V = t[45];
  let Y;
  if (t[46] !== W)
    ((Y = fR.jsx(U, {
      marginLeft: 3,
      children: fR.jsx(w, {
        dimColor: true,
        children: fR.jsxs(Tn, {
          children: [W, V],
        }),
      }),
    })),
      (t[46] = W),
      (t[47] = Y));
  else Y = t[47];
  let z;
  if (t[48] !== $ || t[49] !== q || t[50] !== Y)
    ((z = fR.jsxs(fR.Fragment, {
      children: [$, q, Y],
    })),
      (t[48] = $),
      (t[49] = q),
      (t[50] = Y),
      (t[51] = z));
  else z = t[51];
  return z;
}
var VUl, lBo, fR;
