// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BBl
// matched 2.1.88 source: src/components/HelpV2/HelpV2.tsx
// class=modified  jaccard=0.2177  score=0.3756  fileCov=0.3412
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BBl] deps: _i, Ye, rBo
((OBl = R(lt(), 1)), (ZQ = R(se(), 1)));
function HelpV2(t0) {
  let t = UBl.c(44),
    { onClose: n, commands: r } = t0,
    o = br(),
    { rows: s, columns: i } = bb(o),
    a = s,
    l = o.rows >= FOf,
    c;
  if (t[0] !== n)
    ((c = () =>
      n("Help dialog dismissed", {
        display: "system",
      })),
      (t[0] = n),
      (t[1] = c));
  else c = t[1];
  let u = c,
    d;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((d = {
      context: "Help",
    }),
      (t[2] = d));
  else d = t[2];
  $r("help:dismiss", u, d);
  let p = ig(u),
    f = Uu("help:dismiss", "Help", "esc"),
    m = jOf,
    g;
  if (t[3] !== r) {
    let P;
    if (t[5] === Symbol.for("react.memo_cache_sentinel"))
      ((P = (O) => m(O) && !O.isHidden), (t[5] = P));
    else P = t[5];
    ((g = r.filter(P)), (t[3] = r), (t[4] = g));
  } else g = t[4];
  let h = g,
    y;
  if (t[6] === Symbol.for("react.memo_cache_sentinel")) ((y = []), (t[6] = y));
  else y = t[6];
  let b = y,
    _;
  if (t[7] !== r) {
    let P;
    if (t[9] === Symbol.for("react.memo_cache_sentinel"))
      ((P = (O) => !m(O) && !O.isHidden), (t[9] = P));
    else P = t[9];
    ((_ = r.filter(P)), (t[7] = r), (t[8] = _));
  } else _ = t[8];
  let S = _,
    A;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((A = Gk.jsx(
      sm,
      {
        id: "general",
        title: "General",
        children: Gk.jsx(NBl, {}),
      },
      "general",
    )),
      (t[10] = A));
  else A = t[10];
  let v;
  if (t[11] !== h || t[12] !== u || t[13] !== i || t[14] !== S || t[15] !== a) {
    v = [A];
    let P;
    if (t[17] !== h || t[18] !== u || t[19] !== i || t[20] !== a)
      ((P = Gk.jsx(
        sm,
        {
          id: "commands",
          title: "Commands",
          children: Gk.jsx(nBo, {
            commands: h,
            maxHeight: a,
            columns: i,
            title: "Browse default commands",
            onCancel: u,
          }),
        },
        "commands",
      )),
        (t[17] = h),
        (t[18] = u),
        (t[19] = i),
        (t[20] = a),
        (t[21] = P));
    else P = t[21];
    v.push(P);
    let O;
    if (t[22] !== u || t[23] !== i || t[24] !== S || t[25] !== a)
      ((O = Gk.jsx(
        sm,
        {
          id: "custom",
          title: "Custom commands",
          children: Gk.jsx(nBo, {
            commands: S,
            maxHeight: a,
            columns: i,
            title: "Browse custom commands",
            emptyMessage: "No custom commands found",
            onCancel: u,
          }),
        },
        "custom",
      )),
        (t[22] = u),
        (t[23] = i),
        (t[24] = S),
        (t[25] = a),
        (t[26] = O));
    else O = t[26];
    (v.push(O), (t[11] = h), (t[12] = u), (t[13] = i), (t[14] = S), (t[15] = a), (t[16] = v));
  } else v = t[16];
  let C;
  if (t[31] !== v)
    ((C = Gk.jsx(cR, {
      title: "Help",
      color: "professionalBlue",
      defaultTab: "general",
      children: v,
    })),
      (t[31] = v),
      (t[32] = C));
  else C = t[32];
  let x;
  if (t[33] === Symbol.for("react.memo_cache_sentinel"))
    ((x = Gk.jsx(U, {
      marginTop: 1,
      flexShrink: 0,
      children: Gk.jsxs(w, {
        children: [
          "For more help:",
          " ",
          Gk.jsx(xs, {
            url: "https://code.claude.com/docs/en/overview",
          }),
        ],
      }),
    })),
      (t[33] = x));
  else x = t[33];
  let I;
  if (t[34] !== l)
    ((I =
      l &&
      Gk.jsx(U, {
        marginTop: 1,
        flexShrink: 0,
        children: Gk.jsx(w, {
          dimColor: true,
          children: "Something else? Use /feedback to report bugs or request features.",
        }),
      })),
      (t[34] = l),
      (t[35] = I));
  else I = t[35];
  let k;
  if (t[36] !== f || t[37] !== p.keyName || t[38] !== p.pending)
    ((k = Gk.jsx(U, {
      marginTop: 1,
      flexShrink: 0,
      children: Gk.jsx(w, {
        dimColor: true,
        children: p.pending
          ? Gk.jsxs(Gk.Fragment, {
              children: ["Press ", p.keyName, " again to exit"],
            })
          : Gk.jsxs(w, {
              italic: true,
              children: [f, " to cancel"],
            }),
      }),
    })),
      (t[36] = f),
      (t[37] = p.keyName),
      (t[38] = p.pending),
      (t[39] = k));
  else k = t[39];
  let D;
  if (t[40] !== k || t[41] !== C || t[42] !== I)
    ((D = Gk.jsx(U, {
      flexDirection: "column",
      children: Gk.jsxs(Fu, {
        color: "professionalBlue",
        children: [C, x, I, k],
      }),
    })),
      (t[40] = k),
      (t[41] = C),
      (t[42] = I),
      (t[43] = D));
  else D = t[43];
  return D;
}
function jOf(e) {
  return e.type !== "prompt" || e.source === "builtin" || e.source === "bundled";
}
var UBl,
  Gk,
  FOf = 44;
