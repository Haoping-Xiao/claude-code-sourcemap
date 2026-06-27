// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Q$c
// matched 2.1.88 source: src/components/TeleportRepoMismatchDialog.tsx
// class=modified  jaccard=0.3371  score=0.56  fileCov=0.4586
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: TeleportRepoMismatchDialog
// [unwrapped __esm module Q$c] deps: Ye, mE, vi, qNo
((X$c = R(lt(), 1)), (Evt = R(se(), 1)));
function TeleportRepoMismatchDialog(e) {
  let t = Z$c.c(18),
    { targetRepo: n, initialPaths: r, onSelectPath: o, onCancel: s } = e,
    [i, a] = hmr.useState(r),
    [l, c] = hmr.useState(null),
    [u, d] = hmr.useState(false),
    p;
  if (t[0] !== i || t[1] !== s || t[2] !== o || t[3] !== n)
    ((p = async (b) => {
      if (b === "cancel") {
        s();
        return;
      }
      if ((d(true), c(null), await SMc(b, n))) {
        o(b);
        return;
      }
      EMc(n, b);
      let S = i.filter((A) => A !== b);
      (a(S),
        d(false),
        c(`${kd(b)} no longer contains the correct repository. Select another path.`));
    }),
      (t[0] = i),
      (t[1] = s),
      (t[2] = o),
      (t[3] = n),
      (t[4] = p));
  else p = t[4];
  let f = p,
    m;
  if (t[5] !== i) {
    let b;
    if (t[7] === Symbol.for("react.memo_cache_sentinel"))
      ((b = {
        label: "Cancel",
        value: "cancel",
      }),
        (t[7] = b));
    else b = t[7];
    ((m = [...i.map(wxm), b]), (t[5] = i), (t[6] = m));
  } else m = t[6];
  let g = m,
    h;
  if (t[8] !== i.length || t[9] !== l || t[10] !== f || t[11] !== g || t[12] !== n || t[13] !== u)
    ((h =
      i.length > 0
        ? KP.jsxs(KP.Fragment, {
            children: [
              KP.jsxs(U, {
                flexDirection: "column",
                gap: 1,
                children: [
                  KP.jsx(Va, {
                    error: l,
                  }),
                  KP.jsxs(w, {
                    children: [
                      "Open Claude Code in ",
                      KP.jsx(w, {
                        bold: true,
                        children: n,
                      }),
                      ":",
                    ],
                  }),
                ],
              }),
              u
                ? KP.jsxs(U, {
                    children: [
                      KP.jsx(Vu, {}),
                      KP.jsx(w, {
                        children: " Validating repository\u2026",
                      }),
                    ],
                  })
                : KP.jsx(Sr, {
                    options: g,
                    onChange: (b) => void f(b),
                  }),
            ],
          })
        : KP.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            children: [
              KP.jsx(Va, {
                error: l,
              }),
              KP.jsxs(w, {
                dimColor: true,
                children: ["Run claude --teleport from a checkout of ", n],
              }),
            ],
          })),
      (t[8] = i.length),
      (t[9] = l),
      (t[10] = f),
      (t[11] = g),
      (t[12] = n),
      (t[13] = u),
      (t[14] = h));
  else h = t[14];
  let y;
  if (t[15] !== s || t[16] !== h)
    ((y = KP.jsx(zn, {
      title: "Teleport to Repo",
      onCancel: s,
      color: "background",
      children: h,
    })),
      (t[15] = s),
      (t[16] = h),
      (t[17] = y));
  else y = t[17];
  return y;
}
function wxm(e) {
  return {
    label: KP.jsxs(w, {
      children: [
        "Use ",
        KP.jsx(w, {
          bold: true,
          children: kd(e),
        }),
      ],
    }),
    value: e,
  };
}
var Z$c, hmr, KP;
